import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuotesService  {
  quotes : string[] =[
    "If you hate a person, you hate something in him that is part of yourself. What isn't part of ourselves doesn't disturb us.",
    "I have been and still am a seeker, but I have ceased to question stars and books; I have begun to listen to the teaching my blood whispers to me.",
    "Love must not entreat,' she added, 'or demand. Love must have the strength to become certain within itself. Then it ceases merely to be attracted and begins to attract.",
    "Those who are too lazy and comfortable to think for themselves and be their own judges obey the laws. Others sense their own laws within them.",
    "Gaze into the fire, into the clouds, and as soon as the inner voices begin to speak... surrender to them. Don't ask first whether it's permitted, or would please your teachers or father or some god. You will ruin yourself if you do that.",
    "You should never be afraid of people... such fear can destroy us completely. You've simply got to get rid of it, if you want to turn into someone decent. You understand that, don't you?",
    "The things we see are the same things that are within us. There is no reality except the one contained within us. That is why so many people live such an unreal life. They take the images outside them for reality and never allow the world within to assert itself.",
    "I am fond of music I think because it is so amoral. Everything else is moral and I am after something that isn't. I have always found moralizing intolerable",
  ] 
  quote : string ="";
  constructor() { }

  
   OnChange(){
   
    const indx = Math.floor(Math.random() * this.quotes.length);
    this.quote=this.quotes[indx];
    console.log(this.quote);
  
   }
   
}
