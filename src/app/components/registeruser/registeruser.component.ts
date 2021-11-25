import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/model/users';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.css']
})
export class RegisteruserComponent implements OnInit {
users: Users = new Users();
  constructor(private userService: ServiceService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveuser(){
    this.userService.registeruser(this.users).subscribe
    (
      data  =>
      {console.log(data)},
      error =>{console.log(error)
       } );
    this.goToUserList();
  }

  goToUserList(){
    this.router.navigate(['/users']);
  }

  onSubmit(){
console.log(this.users);
this.saveuser();
  }

}
