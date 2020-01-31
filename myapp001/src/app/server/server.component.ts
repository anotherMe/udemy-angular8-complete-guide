import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  serverStatus: String;
  serverName: String;

  constructor() {
    this.serverStatus = "down";
    this.serverName = "unknown";
  }

  ngOnInit() {
  }

  startServer() {
    this.serverStatus = "up";
  }

}
