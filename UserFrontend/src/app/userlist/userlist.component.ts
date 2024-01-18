import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  userDetails:User[]|undefined

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.getUserDetails();
  }

  getUserDetails(){
    this.userService.getUsers().subscribe(
      data=>{
        this.userDetails=data;
      },
      error=>{
        console.log("Error");
      }
    )
  }
}
