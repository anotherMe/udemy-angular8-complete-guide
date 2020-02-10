import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {

  user: { id: number, name: string };
  routeSubscription: Subscription;


  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.routeSubscription = this.route.params.subscribe( (params) => {

      this.user = {
        id: params['id'],
        name: params['name']
      };

    } );
  }

  // the unsubscription is not necessary for Angular Observables
  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }

}
