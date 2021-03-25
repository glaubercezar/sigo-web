import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  resume: any[];
  timmer: any;

  constructor(private service: AppService) { }

  ngOnInit(): void {
    this.getDashboardData();
    this.setTimmerToUpdate();
  }

  ngOnDestroy(): void {
    clearInterval(this.timmer);
  }

  setTimmerToUpdate(): void {
    this.timmer = setInterval(() => {
      this.getDashboardData();
    }, 2000);
  }

  getDashboardData() {
    this.service.getDashboard().subscribe((data: any) => {
      this.resume = data;
    });
  }

}
