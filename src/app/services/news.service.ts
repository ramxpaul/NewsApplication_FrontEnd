import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { News } from '../interfaces/newsModel';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  baseUrl = 'http://localhost:3000/';

  news:News={}
  constructor(private http:HttpClient) { }

  addnews(credential:any){
   return this.http.post(this.baseUrl+'news',credential)
  }

  getnews(){
    return this.http.get<News[]>(this.baseUrl+'news')
  }

  updatenews(id:any,news:News){
    return this.http.patch(this.baseUrl+'news/'+id,news)
  }

  getOneNews(id:any){
   return this.http.get<News>(this.baseUrl+'news/'+id)
  }

  deleteNews(id:any){
   return this.http.delete(this.baseUrl+'news/'+id)
  }


}
