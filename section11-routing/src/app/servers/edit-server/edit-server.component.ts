import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ServersService } from '../servers.service';
import { Server } from '../server.class';
import { CanComponentDeactivate } from './can-deactivate-guard.service';


@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {

  server: Server;
  serverName: string;
  serverStatus: string;
  allowEdit = false;
  changedSaved = false;

  constructor(private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router) { }

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

    // update server
    this.server.name = this.serverName;
    this.server.status = this.serverStatus;
    this.serversService.updateServer(this.server);

    // then go away
    this.changedSaved = true;
    this.router.navigate(['../'], { relativeTo: this.route});
  }

  /**
   * can deactivate only if changes have been saved
   */
  canDeactivate() {
    
    if (!this.allowEdit) {
      return true; // you're not editing so you can leave
    }

    if ((this.server.name !== this.serverName || this.server.status !== this.serverStatus) && !this.changedSaved) {
      return confirm('Discard the changes made ?');
    } else {
      return true; // no modification made OR modifications already saved
    }


  }

}
