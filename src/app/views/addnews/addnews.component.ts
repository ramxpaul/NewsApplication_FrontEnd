import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { News } from 'src/app/interfaces/newsModel';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-addnews',
  templateUrl: './addnews.component.html',
  styleUrls: ['./addnews.component.css']
})
export class AddnewsComponent implements OnInit {

  news:News={}

  constructor(private newsService:NewsService ,private router:Router) { }
  
  addnews(myForm:any){
   this.newsService.addnews(myForm).subscribe((res)=>{
     this.news=res
     this.router.navigate(['/news'])
   })
  }

  ngOnInit(): void {
  }

}
