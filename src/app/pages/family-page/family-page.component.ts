import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PaginatorComponent } from 'src/app/components/paginator/paginator.component';
import { Datum, FamilyObject } from 'src/app/interfaces/familyInterface';
import { GeneralServiceService } from 'src/app/services/general-service.service';
import { PersistenceService } from 'src/app/services/persistence.service';

@Component({
  selector: 'app-family-page',
  templateUrl: './family-page.component.html',
  styleUrls: ['./family-page.component.css']
})
export class FamilyPageComponent {

  families!: FamilyObject;
  familiySelected!: Datum;
  lastPage!: number;
  pageSelected!: number;

  constructor(private generalService: GeneralServiceService, private router: Router, private persistenceService: PersistenceService){}

  ngOnInit(){
    if (!this.persistenceService.getFamilyResult()){
      this.generalService.getAllFamilies(1).subscribe(data => {
        this.families = data;
        this.persistenceService.setFamilyResult(this.families);
        this.lastPage = this.extraerNumeroDePagina(this.families.links.last)!;
        this.pageSelected = 1;
      })
    }
    else{
      this.families = this.persistenceService.getFamilyResult();
      console.log(this.families);
    }
  }

  onClickGenus(family : string){
    this.router.navigate(['/redirect-page/genusByFamily-page'],{
      queryParams: {
        family: family
      }
    })
  }

  extraerNumeroDePagina(cadena: string): number | null {
    const regex = /\?page=(\d+)/;
    const coincidencia = cadena.match(regex);
    if (coincidencia && coincidencia[1]) {
      return parseInt(coincidencia[1], 10);
    }
    return null;
  }

  receiveMessageFromChild(page: number) {
    this.pageSelected = page;
    this.generalService.getAllFamilies(page).subscribe(data => {
      this.families = data;
      this.persistenceService.setFamilyResult(this.families);
    })
  }
}
