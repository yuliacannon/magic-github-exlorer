import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  id: string;
  response: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  getUser() {
    this.http.get('https://api.github.com/users/' + this.id)
    .subscribe((response)=>{
      this.response = response;
      console.log(this.response);
    })
    // this.http.get('https://api.github.com/users/' + this.id+'/repos')
    // .subscribe((response)=>{
    //   this.response = response;
    //   console.log(this.response);
    // })
  }


  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getUser();
  }

}
