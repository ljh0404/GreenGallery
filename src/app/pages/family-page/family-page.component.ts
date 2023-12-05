import { Component } from '@angular/core';
import { Datum, FamilyObject } from 'src/app/interfaces/familyInterface';
import { GeneralServiceService } from 'src/app/services/general-service.service';

@Component({
  selector: 'app-family-page',
  templateUrl: './family-page.component.html',
  styleUrls: ['./family-page.component.css']
})
export class FamilyPageComponent {

  families!: FamilyObject;

  constructor(private generalService: GeneralServiceService){}

  ngOnInit(){
    this.generalService.getAllFamilies().subscribe(data => {
      this.families = data;
      console.log(this.families);
    })
  }
}
