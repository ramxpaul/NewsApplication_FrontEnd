import { Component, OnInit } from '@angular/core';
import { Reporters } from 'src/app/interfaces/reporterModel';
import { ReportersService } from 'src/app/services/reporters.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  reporter:Reporters={}
  constructor(private reporterService:ReportersService) { }

  getReporterProfile(){
    this.reporterService.getReporterProfile().subscribe((res)=>{
      this.reporter=res
    })
  }

  ngOnInit(): void {
    this.getReporterProfile()
  }

}
