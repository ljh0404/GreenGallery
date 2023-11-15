import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitialPageComponent } from './pages/initial-page/initial-page.component';
import { RedirectPageComponent } from './pages/redirect-page/redirect-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'initial-page',
  },
  {
    path: 'initial-page',
    component: InitialPageComponent
  },
  {
    path: 'redirect-page',
    component: RedirectPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 

}
