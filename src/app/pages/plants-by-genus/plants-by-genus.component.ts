import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RootObject2 } from 'src/app/interfaces/plantInterface';
import { Datum, PlantsObject } from 'src/app/interfaces/plantsByGenusInterface';
import { GeneralServiceService } from 'src/app/services/general-service.service';

@Component({
  selector: 'app-plants-by-genus',
  templateUrl: './plants-by-genus.component.html',
  styleUrls: ['./plants-by-genus.component.css']
})
export class PlantsByGenusComponent {

  genusName!: string;
  plantsData!: PlantsObject;
  plants:any[] = [];
  lastPage!: number;
  pageSelected!: number;
  plantSelected!: RootObject2;
  visible: boolean = false;
  isLoading : boolean = false;

  constructor(private generalService: GeneralServiceService, private router: Router, private activateRoute: ActivatedRoute){}

  ngOnInit(){
    this.activateRoute.queryParams.subscribe(
      (params: Params) => {
        this.genusName = params['genus'];
        this.isLoading = true;
        this.generalService.getPlantsByGenus('/api/v1/genus/'+this.genusName+'/plants', 1).subscribe(data => {
          this.isLoading = false;
          this.plantsData = data;
          this.plants = data.data;
          this.lastPage = parseInt(this.extractLastPage(this.plantsData.links.last)!);
          this.pageSelected = 1;
          console.log(this.plants);
        })
      }
    )
  }
  extractLastPage(cadena: string) {
    const partes = cadena.split('=');
    const valorDespuesDeIgual = partes[2];
    return valorDespuesDeIgual;
  }

  receiveMessageFromChild(page: number) {
    this.pageSelected = page;
    this.isLoading = true;
    this.generalService.getPlantsByGenus('/api/v1/genus/'+this.genusName+'/plants', page).subscribe(data => {
      this.isLoading = false;
      this.plantsData = data;
      this.plants = data.data;
    })
  }

  onClickPlant(plant: any){
    this.generalService.getSpecieData(plant.links.plant).subscribe((data)=> {
      this.plantSelected = data;
      this.visible = true;
    })
  }
}
