import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponentQouteComponent } from './main-component-qoute/main-component-qoute.component';
import { TimerComponentComponent } from './timer-component/timer-component.component';


const routes: Routes = [
  { path: 'timer', component: TimerComponentComponent },
  { path: 'landingPage', component: MainComponentQouteComponent },
  { path: '', redirectTo: '/landingPage', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }