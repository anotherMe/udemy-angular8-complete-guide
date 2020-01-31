import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @ViewChild('serverNameInput', { static: false }) srvNameInput: ElementRef;
  @ViewChild('serverContentInput', { static: false }) srvContentInput: ElementRef;
  @Output() serverCreated = new EventEmitter<{ type: string, name: string, content: string}>();
  @Output() blueprintCreated = new EventEmitter<{ type: string, name: string, content: string}>();
  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit() {
  }

  // onAddServer() {
  //   this.serverCreated.emit({ name: this.newServerName, content: this.newServerContent});
  // }

  // onAddServer(nameInput, contentInput) {
  //   this.serverCreated.emit({ name: nameInput.value, content: contentInput.value });
  // }

  onAddServer() {
    this.serverCreated.emit({ type: 'server', name: this.srvNameInput.nativeElement.value,
      content: this.srvContentInput.nativeElement.value });
  }

  // onAddBlueprint() {
  //   this.blueprintCreated.emit({ name: this.newServerName, content: this.newServerContent});
  // }

  onAddBlueprint(nameInput, contentInput) {
    this.blueprintCreated.emit({ type: 'blueprint', name: nameInput, content: contentInput });
  }

}
