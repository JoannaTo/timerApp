import { Component, OnInit,Input } from '@angular/core';
import { QuotesService } from 'src/app/quotes.service';

@Component({
  selector: 'app-single-quote',
  templateUrl: './single-quote.component.html',
  styleUrls: ['./single-quote.component.css'],
  
})
export class SingleQuoteComponent implements OnInit {
   quote: string = '';
  constructor(private quotesService: QuotesService) { }

  ngOnInit(): void {
    this.quotesService.OnChange();
    this.quote=this.quotesService.quote;
  }

}
