import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InitialPageComponent } from './pages/initial-page/initial-page.component';
import { RedirectPageComponent } from './pages/redirect-page/redirect-page.component';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { CardModule } from 'primeng/card';
import { PlantDetailsComponent } from './components/plant-details/plant-details.component';
import { DialogModule } from 'primeng/dialog';
import { PaginatorModule } from 'primeng/paginator';
import { TabMenuModule } from 'primeng/tabmenu';
import { FavoritePageComponent } from './pages/favorite-page/favorite-page.component';
import { InputTextModule } from 'primeng/inputtext';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { FamilyPageComponent } from './pages/family-page/family-page.component';
import { GenusPageComponent } from './pages/genus-page/genus-page.component';
import { PlantsByGenusComponent } from './pages/plants-by-genus/plants-by-genus.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { InputNumberModule } from 'primeng/inputnumber';

@NgModule({
  declarations: [
    AppComponent,
    InitialPageComponent,
    RedirectPageComponent,
    PlantDetailsComponent,
    FavoritePageComponent,
    SearchPageComponent,
    FamilyPageComponent,
    GenusPageComponent,
    PlantsByGenusComponent,
    DashboardComponent,
    PaginatorComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    ImageModule,
    CardModule,
    DialogModule,
    PaginatorModule,
    TabMenuModule,
    InputTextModule,
    InputNumberModule
  ],
  providers: [InitialPageComponent, FavoritePageComponent, SearchPageComponent, FamilyPageComponent, PaginatorComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
