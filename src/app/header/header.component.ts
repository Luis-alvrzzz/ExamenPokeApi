import { Component, Output, EventEmitter} from '@angular/core';
import {Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  viewAllUsers() {
    // Aquí puedes redirigir al usuario a la lista de usuarios o hacer cualquier otra acción
    alert('Ver todos los usuarios registrados');
  }

  mostrarMenu: boolean = false;

  toggleMenu(): void {
    this.mostrarMenu = !this.mostrarMenu;
  }

  constructor(private router: Router){}
  ngOnInit(){

  }

  navegarD(){
    this.router.navigate(['/pokemon-table'])
  }
  navegarP(){
    this.router.navigate(['/pokemon-list-component'])
  }
}
