import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-usersearch',
  templateUrl: './usersearch.component.html',
  styleUrls: ['./usersearch.component.css']
})
export class UsersearchComponent implements OnInit {

  userId:number|undefined;
  user:User=new User();
  message='';

  constructor(private userService:UserService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(userId:number|undefined){
    this.getUserById(userId);
  }
  
  getUserById(userId:number |undefined){
    this.userService.getUserById(userId).subscribe(
      data=>{
        this.user=data;
      },
      error=>{
        console.log("error");
        this.message="No users found";
      }
    )
  }

}
