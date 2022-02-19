import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeadingComponentComponent } from './heading-component/heading-component.component';
import { MainComponentQouteComponent } from './main-component-qoute/main-component-qoute.component';
import { AppRoutingModule } from './app-routing.module';
import { TimerComponentComponent } from './timer-component/timer-component.component';
import { SingleQuoteComponent } from './quote/single-quote/single-quote.component';
import { QuotesService } from './quotes.service';
import { BtnComponent } from './btn/btn.component';
import { DusanBtnComponent } from './dusan-btn/dusan-btn.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeadingComponentComponent,
    MainComponentQouteComponent,
    TimerComponentComponent,
    SingleQuoteComponent,
    BtnComponent,
    DusanBtnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [QuotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
