import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { News } from 'src/app/interfaces/newsModel';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-editnews',
  templateUrl: './editnews.component.html',
  styleUrls: ['./editnews.component.css']
})
export class EditnewsComponent implements OnInit {

  news:News={}
  id:string=this.route.snapshot.params.id
  errVal:boolean=false

  constructor(private newsService:NewsService , private route:ActivatedRoute , private router:Router) { }

  updatenews(news:News){
    this.newsService.updatenews(this.id,news).subscribe((res)=>{
      this.news=res
      this.router.navigate(['news/'])
    },(httpError)=>{
      console.log(httpError)
      if(httpError.error.errors.description.name == 'ValidatorError'){
      this.errVal=true
      }
    })
  }

  getOneNews(){
    this.newsService.getOneNews(this.id).subscribe((res)=>{
      this.news=res
    })
  }
  ngOnInit(): void {
    this.getOneNews()
  }

}
