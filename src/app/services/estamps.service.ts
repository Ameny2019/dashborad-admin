import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EstampsService {

  constructor(private http:HttpClient) { }

  getEstamps(){
    return this.http.get(`${environment.baseURL}/estamps/GetAllEstamp`);
  }
}
