import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dusan-btn',
  templateUrl: './dusan-btn.component.html',
  styleUrls: ['./dusan-btn.component.css']
})
export class DusanBtnComponent implements OnInit {

  @Input() btnText: string = "";
  @Output()btnClicked = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

}
