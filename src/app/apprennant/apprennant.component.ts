import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/auth.service';
import { User1 } from '../models/user';
import { HttpErrorResponse } from '@angular/common/http';
import { UsersService } from '../users.service'; 


@Component({
  selector: 'app-apprennant',
  templateUrl: './apprennant.component.html',
  styleUrls: ['./apprennant.component.css']
})
export class ApprennantComponent implements OnInit {

  

  public users: User1[];
  constructor( public usersService:UsersService,public authService: AuthService) { }

  ngOnInit(){
    this.getUsers();
  }
  public getUsers():void{
      this.usersService.getAllUsers().subscribe(
        (Response:User1[])=> {
          console.log(Response);
          this.users = Response;
        },
        (error:HttpErrorResponse)=>{
          alert(error.message);
        });
      }

 
}