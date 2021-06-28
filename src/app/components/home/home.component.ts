import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  selectedTabName:any;

  constructor() { }

  public tabName = [
    { name:"Queu",value: "06" },
    { name:"Earlier",value: "02" },
    { name:"Wait List",value: "05" },
    { name:"No Show",value: "0" }
  ]

  public response = [
    {
      no:"1",
      name:"Varun Bose",
      desc:"Male, 32 yr",
      contact:"7306985978",
      appointment:"05:10pm",
      waited:"56 Mins"
    },
    {
      no:"2",
      name:"Jhon Wick",
      desc:"Male, 45 yr",
      contact:"8015295125",
      appointment:"04:30pm",
      waited:"30 Mins"
    },
    {
      no:"3",
      name:"Jhony Ive",
      desc:"Male, 31 yr",
      contact:"7306985978",
      appointment:"03:50pm",
      waited:"25 Mins"
    },
    {
      no:"4",
      name:"Varun Bose",
      desc:"Male, 32 yr",
      contact:"7306985978",
      appointment:"05:10pm",
      waited:"56 Mins"
    },
    {
      no:"5",
      name:"Varun Bose",
      desc:"Male, 32 yr",
      contact:"7306985978",
      appointment:"05:10pm",
      waited:"56 Mins"
    }
  ]

  ngOnInit(): void {
    this.selectedTabName = "Queu";
  }

  onTabChange(tab:any){
    console.log(tab);
    this.selectedTabName = tab;
  }

}
