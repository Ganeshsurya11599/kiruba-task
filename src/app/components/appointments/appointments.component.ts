import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent implements OnInit {

  constructor() { }

  selectedDate: Date = new Date;

  fromDate: string | undefined;
  toDate: moment.Moment | undefined;

  public slots = [
    {
      time:"09:00 AM"
    },
    {
      time:"09:10 AM"
    },
    {
      time:"09:20 AM"
    },
    {
      time:"09:30 AM"
    },
    {
      time:"09:40 AM"
    },
    {
      time:"09:50 AM"
    },
    {
      time:"10:00 AM"
    }
  ]

  date = new Date();

  ngOnInit(): void {
  }

  onSelect(event:any){

    var dateFormat = 'DD/MM/YYYY';

    this.selectedDate= event;
    this.toDate = event;
    let d = (event.add(7,'day'))
    

    console.log(this.toDate); // 2015-30-01 02:00:00 
  }

  dateSelect(index: number){
   
    this.fromDate= "01/05/2020";

    const dateFormat = 'DD/MM/YYYY';
    
    console.log(this.fromDate);

    let d= moment(this.fromDate, dateFormat).toDate()

    console.log(moment.isMoment(d));
  }


}
