import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrl: './api.component.css'
})
export class ApiComponent implements OnInit{

  public funds: any[] = [];

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.getMethod();
  }

  public getMethod() {
    this.http.get('https://ivarpivar.netlify.app/api').subscribe((data) => {
      this.funds = this.cleanApiData(data);
    });
  }

  private cleanApiData(data: any): any[] {
    //Perform data cleaning here
    return data.flatMap((item: any) => {
        return item.data.map((fund:any) => ({
          fundName: fund.fundName,
          change1m: fund.change1m,
          change3m: fund.change3m,
          change3y: fund.change3y
        }));
    });
  }

}
