import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Data } from '@angular/router';
import { ServersService } from '../servers.service';
import { Server } from '../server.class';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  server: Server;

  constructor( private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

    this.route.data.subscribe(
      (data: Data) => { this.server = data['myServer']; }
    );

    // this.route.params.subscribe( (params) => {
    //   this.server = this.serversService.getServer(+params['id']);
    // });

  }

  onBtnEditServer() {
    this.router.navigate(['edit'], { relativeTo: this.route, queryParamsHandling: 'preserve' });
  }

}
