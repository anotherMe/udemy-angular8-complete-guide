import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild('contentDiv', { static: false }) itsADiv: ElementRef;

  serverElements = [
    {type: 'server', name: 'TestServer', content: 'This is just a test server, holding no data.'}
  ];

  ngOnInit() {
  }

  onServerAdded(serverData: { name: string, content: string }) {

    console.log(this.itsADiv.nativeElement);

    this.serverElements.push({
      type: 'server',
      name: serverData.name,
      content: serverData.content
    });
  }

  onBlueprintAdded(blueprintData: { name: string, content: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.name,
      content: blueprintData.content
    });
  }

}
