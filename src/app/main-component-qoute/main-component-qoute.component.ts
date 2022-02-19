import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../quotes.service';

@Component({
  selector: 'app-main-component-qoute',
  templateUrl: './main-component-qoute.component.html',
  styleUrls: ['./main-component-qoute.component.css']
})
export class MainComponentQouteComponent implements OnInit {
  fireClass = false;
  
  constructor( private quotesService: QuotesService) { }

  ngOnInit(): void {
  
   
  }

  btnIsClicked(){
    this.fireClass = !this.fireClass;
    console.log('fired')
  }

}
