import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-timer-component',
  templateUrl: './timer-component.component.html',
  styleUrls: ['./timer-component.component.css'],
})
export class TimerComponentComponent implements OnInit {
  images = [
    {
      src: 'https://img.freepik.com/free-vector/cave-seaview-landscape-with-lonely-wooden-boat_107791-7333.jpg?t=st=1645237395~exp=1645237995~hmac=18fb113e5c3bad9596f9ad01e88c925ed5a5ad0211ed77fcdadc56bed453b7a5&w=1380',
    },

    {
      src: 'https://img.freepik.com/free-vector/night-landscape-with-mountains-full-moon_107791-8538.jpg?t=st=1645237762~exp=1645238362~hmac=c6c59150fca1900ead6f15f861724c088cffcc6cda35e699cf89c8909f7a0653&w=1060',
    },
    {
      src: 'https://img.freepik.com/free-vector/arizona-night-desert-landscape-natural-wild-west-background-with-coyote-pack-silhouettes-run-through-cacti-rocks-cloudy-sky-with-full-moon-shining-game-scene-cartoon-vector-illustration_107791-8446.jpg?t=st=1645237813~exp=1645238413~hmac=802159049b488a1ab4273804c5e59f4df447c40a5a7266a03c332ddc8f453855&w=1380',
    },
  ];
  actualImage: string;
  changeBackgroundCounter = 0;
  /*  days: number=0; */
  nameOfTask: string = '';
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  time: string = '37:25';
  timeHours: number = 0;
  timeMins: number = 0;
  timeSecs: number = 0;
  months: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  year: number = 0;
  monthIndx: number = 0;
  month: string = '';
  day: number = 0;
  x;
  distance;
  constructor() {}

  ngOnInit(): void {
    this.actualImage = this.images[0].src;
    setInterval(() => {
      this.changeBackgroundCounter++;
      if (this.changeBackgroundCounter > this.images.length - 1) {
        this.changeBackgroundCounter = 0;
      }
      this.actualImage = this.images[this.changeBackgroundCounter].src;
    }, 50000);

    this.year = new Date().getFullYear();
    this.monthIndx = new Date().getMonth();
    this.month = this.months[this.monthIndx];
    this.day = new Date().getDate();
  }

  startCounting() {
    if (this.timeHours === 0 && this.timeMins === 0 && this.timeSecs === 0) {
      alert('Please enter numbers!');
      return;
    }

    let RemainingTime = () => {
      if (this.timeSecs === 0) {
        if (
          this.timeHours === 0 &&
          this.timeMins === 0 &&
          this.timeSecs === 0
        ) {
          alert('It;s oveeer!');
          clearInterval(this.x);
          this.timeHours = 0;
          this.timeMins = 0;
          this.timeSecs = 0;
          return;
        }
        this.timeSecs = 60;
        this.timeMins = this.timeMins - 1;
        if (this.timeMins === -1) {
          this.timeHours -= 1;
          this.timeMins = 59;
        }
        /* if(this.timeMins === -1){
          this.timeMins = 59;
        } */
      }
      this.timeSecs = this.timeSecs - 1;
    };
    this.x = setInterval(RemainingTime, 1000);
  }

  stopCounting() {
    clearInterval(this.x);
    console.log('expired');
  }
  onEnterPress(event: any) {
    this.nameOfTask = event.target.value;
    event.target.value = '';
  }
  restartCounting() {
    this.timeHours = 0;
    this.timeMins = 0;
    this.timeSecs = 0;
  }
}
