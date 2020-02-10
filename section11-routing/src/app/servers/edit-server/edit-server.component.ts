import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ServersService } from '../servers.service';
import { Server } from '../server.class';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {

  server: Server;
  serverName: string;
  serverStatus: string;
  allowEdit = false;

  constructor(private serversService: ServersService,
    private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe( (params: Params) => {
      this.server = this.serversService.getServer(+params['id']);
      this.serverName = this.server.name;
      this.serverStatus = this.server.status;
    });

    this.route.queryParams.subscribe( (qParams: Params) => {  
      this.allowEdit = qParams['allowEdit'] === '1' ? true : false;
      console.log('Editing is ' + this.allowEdit);
    });

  }

  onUpdateServer() {

    this.server.name = this.serverName;
    this.server.status = this.serverStatus;
    this.serversService.updateServer(this.server);
  }

}
