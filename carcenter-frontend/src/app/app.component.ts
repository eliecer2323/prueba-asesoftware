import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    menu: MenuItem[];
    activeItem: MenuItem;

    ngOnInit() {
        this.menu = [
            {label: 'Inscripción Mecanicos', routerLink: ['/form']},
            {label: 'Consulta Mecanicos', routerLink: ['/query']},
        ];

        this.activeItem = this.menu[0];
    }
}
