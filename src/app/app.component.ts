import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { Vendas } from './IMeiosPagamento';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-api';
  
  constructor(private apiService: ApiService) {}

  onGetVendas() {
    this.apiService.getVendas().subscribe(
      (response) => console.log(response),
      (error: any) => console.log(error),
      () => console.log('acabou')
    );
  }

}
