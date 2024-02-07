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
  isLoading : boolean = false;

  constructor(private activateRoute: ActivatedRoute, private generalService: GeneralServiceService, private router: Router){}

  ngOnInit(){
    this.activateRoute.queryParams.subscribe(
      (params: Params) => {
        this.familyName = params['family'];
        this.isLoading = true;
        this.generalService.getGenusByFamily(this.familyName, 1).subscribe(data => {
          this.isLoading = false;
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
    this.isLoading = true;
    this.generalService.getGenusByFamily(this.familyName,page).subscribe(data => {
      this.isLoading = false;
      this.genusData = data;
    })
  }
}
