import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { GenusObject } from 'src/app/interfaces/genusInterface';
import { GeneralServiceService } from 'src/app/services/general-service.service';

@Component({
  selector: 'app-genus-page',
  templateUrl: './genus-page.component.html',
  styleUrls: ['./genus-page.component.css']
})
export class GenusPageComponent {

  familyName!: string;
  genusData!: GenusObject;
  lastPage!: number;
  pageSelected!: number;

  constructor(private activateRoute: ActivatedRoute, private generalService: GeneralServiceService, private router: Router){}

  ngOnInit(){
    this.activateRoute.queryParams.subscribe(
      (params: Params) => {
        this.familyName = params['family'];

        this.generalService.getGenusByFamily('/api/v1/families/'+this.familyName+'/genus', 1).subscribe(data => {
          this.genusData = data;
          this.lastPage = parseInt(this.extractLastPage(this.genusData.links.last)!);
          this.pageSelected = 1;
        })
      }
    )
  }

  extractLastPage(cadena: string) {
    const partes = cadena.split('=');
    const valorDespuesDeIgual = partes[2];
    return valorDespuesDeIgual;
  }

  onClickGenus(genus: string){
    this.router.navigate(['/redirect-page/plantsByGenus-page'],{
      queryParams: {
        genus: genus
      }
    })
  }

  receiveMessageFromChild(page: number) {
    this.pageSelected = page;
    this.generalService.getGenusByFamily('/api/v1/families/'+this.familyName+'/genus', page).subscribe(data => {
      this.genusData = data;
    })
  }
}
