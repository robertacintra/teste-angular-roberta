import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
{ path: '', component: AppComponent },
{ path: 'card', component: CardComponent },
{ path: 'search', component: SearchComponent },
{ path: '**', component: CardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }