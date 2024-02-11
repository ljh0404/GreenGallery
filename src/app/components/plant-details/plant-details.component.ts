import { Component, Input } from '@angular/core';
import { Datum } from 'src/app/interfaces/interfaces';
import { RootObject2 } from 'src/app/interfaces/plantInterface';
import { FavoritePageComponent } from 'src/app/pages/favorite-page/favorite-page.component';
import { InitialPageComponent } from 'src/app/pages/initial-page/initial-page.component';
import { PlantsByGenusComponent } from 'src/app/pages/plants-by-genus/plants-by-genus.component';
import { SearchPageComponent } from 'src/app/pages/search-page/search-page.component';
import { GeneralServiceService } from 'src/app/services/general-service.service';

@Component({
  selector: 'app-plant-details',
  templateUrl: './plant-details.component.html',
  styleUrls: ['./plant-details.component.css']
})
export class PlantDetailsComponent {

  @Input() visible: boolean = true;
  @Input() plantSelected!: RootObject2;
  @Input() searchButton!: boolean;
  @Input() favoriteButton!: boolean;
  @Input() initialButton!: boolean;
  visible2: boolean = false;
  isLoading: boolean = false;


  constructor(private initialPage: InitialPageComponent, private generalService: GeneralServiceService, private favoritePage: FavoritePageComponent, private searchPage: SearchPageComponent, private plantsByGenusPage: PlantsByGenusComponent){}

  onHide() {
    this.initialPage.visible = false;
    this.favoritePage.visible = false;
    this.searchPage.visible = false;
    this.plantsByGenusPage.visible = false;
  }

  nextPlant(){
    this.isLoading = true;
    this.generalService.getSpecieData(this.initialPage.nextLink).subscribe((data)=> {
      this.plantSelected = data;
      this.initialPage.nextIndex = this.initialPage.nextIndex+1
      this.initialPage.previousIndex = this.initialPage.previousIndex+1;

      if (this.initialPage.previousIndex == -1){
        this.initialPage.previousIndex = this.initialPage.plantList.data.length-1;
      }
      if (this.initialPage.nextIndex == this.initialPage.plantList.data.length){
        this.initialPage.nextIndex = 0;
      }

      this.initialPage.nextLink = this.initialPage.plantList.data[this.initialPage.nextIndex]?.slug;
      this.initialPage.previousLink = this.initialPage.plantList.data[this.initialPage.previousIndex]?.slug;
      this.isLoading = false;
    })
  }
  
  previousPlant(){
    this.isLoading = true;
    this.generalService.getSpecieData(this.initialPage.previousLink).subscribe((data)=> {
      this.plantSelected = data;
      this.initialPage.nextIndex = this.initialPage.nextIndex - 1
      this.initialPage.previousIndex = this.initialPage.previousIndex - 1;

      if (this.initialPage.previousIndex == -1){
        this.initialPage.previousIndex = this.initialPage.plantList.data.length - 1;
      }
      if (this.initialPage.nextIndex == this.initialPage.plantList.data.length){
        this.initialPage.nextIndex = 0;
      }

      this.initialPage.nextLink = this.initialPage.plantList.data[this.initialPage.nextIndex]?.slug;
      this.initialPage.previousLink = this.initialPage.plantList.data[this.initialPage.previousIndex]?.slug;
      this.isLoading = false
    })
  }

  onClick(){
    this.visible2 = true;
  }
}
