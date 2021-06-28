import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'doctor';
  routeUrl: string | undefined;

  constructor(
    private router: Router,
  ){}

  ngOnInit(){
  this.routeUrl = this.router.config[0].path;
  console.log(this.routeUrl);
}
}
