import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false;
  roles: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getRoles();
  }

  registerToggle(){
    this.registerMode = !this.registerMode;
  }

  getRoles(){
    this.http.get("http://localhost:30205/api/Role/get-roles").subscribe(roles => this.roles = roles["data"]);
  }

  cancelRegisterMode(event: boolean){
    this.registerMode = event;
  }

}
