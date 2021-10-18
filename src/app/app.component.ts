import { Component } from '@angular/core';
import { LoadingService } from './services/loading.service';
import { Event, Router, NavigationStart, NavigationEnd} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  //loaderIndicator from LoadingService
  loading$ = this.loader.loadingIndicator$;

  constructor(
    public loader: LoadingService, 
    private _router: Router
    ) {
      //User of Navigation Star and End. When Component starts loading show loader, hide when ends.
      this._router.events.subscribe((routerEvent: Event) => {
        if(routerEvent instanceof NavigationStart){
          this.loader.show()
        }
        if(routerEvent instanceof NavigationEnd){
          this.loader.hide()
        }
      })
    }
}
