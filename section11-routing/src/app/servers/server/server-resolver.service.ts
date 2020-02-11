
import { Resolve } from "@angular/router";
import { Server } from "../server.class";
import { ServersService } from "../servers.service";
import { Injectable } from "@angular/core";

@Injectable()
export class ServerResolver implements Resolve<Server> {

    constructor(private ss: ServersService) {
    }

    resolve(route: import("@angular/router").ActivatedRouteSnapshot, 
        state: import("@angular/router").RouterStateSnapshot): 
            Server | import("rxjs").Observable<Server> | Promise<Server> {

        return this.ss.getServer(+route.params['id']);
    }

}