import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/interfaces/newsModel';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {


  news:News[]=[]
  constructor(private newsService:NewsService) { }

  getNews(){
    this.newsService.getnews().subscribe((res)=>{
     this.news=res
    })
  }

  deletenews(newss:News){
   this.newsService.deleteNews(newss._id).subscribe(()=>{
     let index=this.news.indexOf(newss)
     this.news.splice(index,1)
   })
  }

  ngOnInit(): void {
    this.getNews()
  }

}
