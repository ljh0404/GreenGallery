import { Component } from '@angular/core';
import { Datum } from 'src/app/interfaces/interfaces';
import { RootObject2 } from 'src/app/interfaces/plantInterface';
import { GeneralServiceService } from 'src/app/services/general-service.service';

@Component({
  selector: 'app-favorite-page',
  templateUrl: './favorite-page.component.html',
  styleUrls: ['./favorite-page.component.css']
})
export class FavoritePageComponent {

  plantList: Datum[] = [];
  plantSelected!: RootObject2;
  visible: boolean = false;
  favoriteButton: boolean = true;

  constructor(private generalService: GeneralServiceService){}

  ngOnInit(){
    this.plantList = this.generalService.getFavorites();
  }

  onClickPlant(plant: Datum){
    this.generalService.getSpecieData(plant.slug).subscribe((data)=> {
      this.plantSelected = data;
      this.visible = true;

    })
  }
}
