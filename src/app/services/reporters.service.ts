import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reporters } from '../interfaces/reporterModel';


@Injectable({
  providedIn: 'root'
})
export class ReportersService {

  baseUrl='http://localhost:3000/'
  
  constructor(private http:HttpClient) { }

  getReporterProfile(){
    return this.http.get<Reporters>(this.baseUrl+'profile')
  }

  
}
