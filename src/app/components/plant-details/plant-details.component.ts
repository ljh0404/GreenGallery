import { Component, Input } from '@angular/core';
import { Datum } from 'src/app/interfaces/interfaces';
import { RootObject2 } from 'src/app/interfaces/plantInterface';
import { InitialPageComponent } from 'src/app/pages/initial-page/initial-page.component';
import { GeneralServiceService } from 'src/app/services/general-service.service';

@Component({
  selector: 'app-plant-details',
  templateUrl: './plant-details.component.html',
  styleUrls: ['./plant-details.component.css']
})
export class PlantDetailsComponent {

  @Input() visible: boolean = true;
  @Input() plantSelected!: RootObject2;

  constructor(private initialPage: InitialPageComponent, private generalService: GeneralServiceService){}

  onHide() {
    this.initialPage.visible = false;
  }

  nextPlant(){
    this.generalService.getSpecieData(this.initialPage.nextLink).subscribe((data)=> {
      this.plantSelected = data;
      this.initialPage.nextIndex = this.initialPage.nextIndex+1
      this.initialPage.previousIndex = this.initialPage.previousIndex+1;

      if (this.initialPage.previousIndex == -1){
        this.initialPage.previousIndex = this.initialPage.plantList.length-1;
      }
      if (this.initialPage.nextIndex == this.initialPage.plantList.length){
        this.initialPage.nextIndex = 0;
      }

      this.initialPage.nextLink = this.initialPage.plantList[this.initialPage.nextIndex].links.plant;
      this.initialPage.previousLink = this.initialPage.plantList[this.initialPage.previousIndex].links.plant;
    })
  }
  
  previousPlant(){
    this.generalService.getSpecieData(this.initialPage.previousLink).subscribe((data)=> {
      this.plantSelected = data;
      this.initialPage.nextIndex = this.initialPage.nextIndex - 1
      this.initialPage.previousIndex = this.initialPage.previousIndex - 1;

      if (this.initialPage.previousIndex == -1){
        this.initialPage.previousIndex = this.initialPage.plantList.length-1;
      }
      if (this.initialPage.nextIndex == this.initialPage.plantList.length){
        this.initialPage.nextIndex = 0;
      }

      this.initialPage.nextLink = this.initialPage.plantList[this.initialPage.nextIndex].links.plant;
      this.initialPage.previousLink = this.initialPage.plantList[this.initialPage.previousIndex].links.plant;
    })
  }
}
