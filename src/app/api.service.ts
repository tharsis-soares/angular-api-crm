import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_PATH} from '../environments/environment';
import { Observable } from 'rxjs';
import { Clientes } from './IClientes';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
   
  constructor(private httpClient: HttpClient) { }

  getVendas(): Observable<Clientes[]> {
    const myHeaders = new HttpHeaders({'Content-Type': 'application/json', 'Client-Code': 'FC-SB-15', 'Client-key': '6ea297bc5e294666f6738e1d48fa63d2'});
    return this.httpClient.get<Clientes[]>(`https://api-sandbox.fpay.me/clientes`, {headers: myHeaders});
  }

}
