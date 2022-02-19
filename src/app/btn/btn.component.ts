import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.css']
})
export class BtnComponent implements OnInit {
  @Input() text: string ="";
  @Output() btnClicked = new EventEmitter();;
  constructor() { }

  ngOnInit(): void {
  }
  
}
