import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface FundDataResponse {
  data: FundData[];
}

interface FundData {
  fundName: string;
  change1m: number;
  change3m: number;
  change3y: number;
}

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrl: './api.component.css'
})
export class ApiComponent implements OnInit{

  public funds: FundData[] = [];
  private apiUrl = 'https://ivarpivar.netlify.app/api';
  public errorMessage: string | null = null;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    //Fetch data from API
    this.http.get<FundDataResponse[]>(this.apiUrl).subscribe({
      next: (data) => {
        this.funds = this.extractData(data);
      },
      error: (error) => {
        console.error('Error fetching data:', error);
        this.errorMessage = 'An error occured while fetching data. Please try again later';
      }
    });
  }

  // Extract the data array from the object 
  private extractData(data: FundDataResponse[] ): FundData[] {
    return data.flatMap(item => item.data);
  }

}
