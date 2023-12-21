import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitialPageComponent } from './pages/initial-page/initial-page.component';
import { RedirectPageComponent } from './pages/redirect-page/redirect-page.component';
import { FavoritePageComponent } from './pages/favorite-page/favorite-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { FamilyPageComponent } from './pages/family-page/family-page.component';
import { GenusPageComponent } from './pages/genus-page/genus-page.component';
import { PlantsByGenusComponent } from './pages/plants-by-genus/plants-by-genus.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'redirect-page',
  },
  {
    path: 'redirect-page',
    component: RedirectPageComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'initial-page',
        component: InitialPageComponent,
      },
      {
        path: 'favorite-page',
        component: FavoritePageComponent,
      },
      {
        path: 'search-page',
        component: SearchPageComponent,
      },
      {
        path: 'family-page',
        component: FamilyPageComponent,
      },
      {
        path: 'genusByFamily-page',
        component: GenusPageComponent,
      },
      {
        path: 'plantsByGenus-page',
        component: PlantsByGenusComponent,
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 

}
