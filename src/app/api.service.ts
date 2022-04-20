import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_PATH} from '../environments/environment';
import { Vendas } from './IMeiosPagamento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
   
  constructor(private httpClient: HttpClient) { }

  getVendas(): Observable<Vendas[]> {
    const myHeaders = new HttpHeaders({'Content-Type': 'application/json', 'Client-Code': 'FC-SB-15', 'Client-key': '6ea297bc5e294666f6738e1d48fa63d2'});
    return this.httpClient.get<Vendas[]>(`${API_PATH}clientes`, {headers: myHeaders});
  }

}
