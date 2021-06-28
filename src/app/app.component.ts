import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'doctor';
  routeUrl: any;
  currentRoute: any;

  constructor(
    private router: Router,
  ){
    router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd ) {
        this.routeUrl = event.url;
        console.log(this.routeUrl);
      }
    });
   }

  ngOnInit(){
}
}
