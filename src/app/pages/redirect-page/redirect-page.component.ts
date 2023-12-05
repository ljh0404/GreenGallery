import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-redirect-page',
  templateUrl: './redirect-page.component.html',
  styleUrls: ['./redirect-page.component.css']
})
export class RedirectPageComponent {
  items: MenuItem[] | undefined;
  itemSelected!: MenuItem; 

    ngOnInit() {
        this.items = [
            { label: 'Home', icon: 'pi pi-fw pi-home', routerLink:'/redirect-page/initial-page'},
            { label: 'Favorites', icon: 'pi pi-fw pi-calendar', routerLink:'/redirect-page/favorite-page' },
            { label: 'Search Section', icon: 'pi pi-fw pi-pencil', routerLink:'/redirect-page/search-page' },
            { label: 'Families', icon: 'pi pi-fw pi-file', routerLink:'/redirect-page/family-page'},
            { label: 'Settings', icon: 'pi pi-fw pi-cog' }
        ];
        this.itemSelected = this.items[0];
    }
}
