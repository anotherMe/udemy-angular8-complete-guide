import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { Router } from '@angular/router';
import { Server } from './server.class';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  private servers: Server[] = [];

  constructor(private serversService: ServersService, private router: Router) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

}
