import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  userName: string='';
  response: any;

  constructor(private http: HttpClient) { }

  search() {
    this.http.get('https://api.github.com/search/users?q=' + this.userName)
    .subscribe((response)=>{
      this.response = response;
      console.log(this.response);
    })
  }

}
