import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrl: './api.component.css'
})
export class ApiComponent implements OnInit{

  public getJsonValue: any;
  public postJsonValue: any;

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.getMethod();
  }

  public getMethod() {
    this.http.get('https://ivarpivar.netlify.app/api').subscribe((data) => {
      console.log(data.toString());
      this.getJsonValue = data;
    });
  }

}