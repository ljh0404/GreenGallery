import { Component } from '@angular/core';
import { GeneralServiceService } from 'src/app/services/general-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private generalService: GeneralServiceService){}

  ngOnInit(){
    console.log('Hola')
    // this.generalService.claimAuthorization('https://greengallery-b9ad4.web.app/', '')
    //   .subscribe(
    //     (response) => {
    //       console.log(response);
    //     },
    //     (error) => {
    //       console.error(error);
    //     }
    //   );
  }
}
