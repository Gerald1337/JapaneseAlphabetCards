import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { FlashCardScreenComponent } from './views/flash-card-screen/flash-card-screen.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'learning', component: FlashCardScreenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
