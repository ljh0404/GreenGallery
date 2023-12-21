import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
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

  constructor(private generalService: GeneralServiceService, private router: Router, private activateRoute: ActivatedRoute){}

  ngOnInit(){
    this.activateRoute.queryParams.subscribe(
      (params: Params) => {
        this.genusName = params['genus'];

        this.generalService.getPlantsByGenus('/api/v1/genus/'+this.genusName+'/plants', 1).subscribe(data => {
          this.plantsData = data;
          this.plants = data.data;
          this.lastPage = parseInt(this.extractLastPage(this.plantsData.links.last)!);
          this.pageSelected = 1;
          console.log(this.plantsData);
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
    this.generalService.getPlantsByGenus('/api/v1/genus/'+this.genusName+'/plants', page).subscribe(data => {
      this.plantsData = data;
      this.plants = data.data;
    })
  }
}
