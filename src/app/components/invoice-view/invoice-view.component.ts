import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-invoice-view',
  standalone: true,
  imports: [],
  templateUrl: './invoice-view.component.html',
  
})
export class InvoiceViewComponent {
/* 1- se pone @input para traer mediante subcomponentes
   2- se trae html al sub componente html
   3- se remplaza en este caso on el llave <invoice-view>  */
  @Input() id!: number;
  @Input() name!: string;

}
