import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.css']
})
export class UserregisterComponent implements OnInit {

  user=new User();
  message='';

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  userregistration(){
    this.userService.registerUser(this.user).subscribe(
      data=>{
        console.log("Registered successfully");
        this.message="Registered Successfully";
      },
      error=>{
        console.log("erorr and exception");
      }
    )
  }

}
