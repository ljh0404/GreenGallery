import { Component } from '@angular/core';
import { RootObject2 } from 'src/app/interfaces/plantInterface';
import { Datum } from 'src/app/interfaces/searchInterface';
import { SearchObject } from 'src/app/interfaces/searchInterface';
import { GeneralServiceService } from 'src/app/services/general-service.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent {
  searchText!: string;
  searchResult: Datum[] = [];
  plantSelected!: RootObject2;
  visible: boolean = false;
  searchButton: boolean = true;

  constructor(private generalService: GeneralServiceService){}

  onClickSearch(){
    this.generalService.searchData(this.searchText).subscribe(data => {
      this.searchResult = data.data!;
      console.log(this.searchResult);
    });
  }

  onClickPlant(plant: Datum){
    this.generalService.getSpecieData(plant.links.plant).subscribe((data)=> {
      this.plantSelected = data;
      this.visible = true;
      // this.nextIndex = this.plantList.findIndex( element => element.id == plant.id) + 1 ;
      // this.previousIndex = this.plantList.findIndex( element => element.id == plant.id) - 1 ;

      // if (this.previousIndex == -1){
      //   this.previousIndex = this.plantList.length-1;
      // }
      // if (this.nextIndex == this.plantList.length){
      //   this.nextIndex = 0;
      // }

      // this.nextLink = this.plantList[this.nextIndex].links.plant;
      // this.previousLink = this.plantList[this.previousIndex].links.plant;
    })
  }
}
