import { Component, Input } from '@angular/core';
import { Client } from '../../models/client';

@Component({
  selector: 'app-client-view',
  standalone: true,
  imports: [],
  templateUrl: './client-view.component.html',
  
})
export class ClientViewComponent {
  // se importa mediante input el objeto cliente de esta manera
  @Input() client : Client = new Client;

}
