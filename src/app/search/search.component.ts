import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  ApiService } from '../api.service'


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  userName: string='';
  response: any;
  p: number = 1;

  constructor(private http: HttpClient) { }
  
  pageChange($event) {
    this.p = $event;
    this.search();
  }

  search() {
    this.http.get('https://api.github.com/search/users?q=' + this.userName + '&per_page=20&page=' +this.p)
    .subscribe((response)=>{
      this.response = response;
      console.log(this.response);
    })
  }

  ngOnInit() {
  }

}
