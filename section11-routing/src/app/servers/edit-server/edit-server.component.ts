import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {

  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService, private route: ActivatedRoute) { }

  ngOnInit() {

    // console.log(this.route.queryParams);
    // console.log(this.route.fragment);
    //
    // // FIXME: complete subscription providing suitable methods
    // this.route.queryParams.subscribe();
    // this.route.fragment.subscribe();

    this.server = this.serversService.getServer(1);
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server);
  }

}
