import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Users } from 'src/app/model/users';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
 
 id:number;
  users: Users = new Users();
  constructor(private userService: ServiceService,
    private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.userService.fetchUserById(this.id).subscribe(data =>{
      this.users = data;
    },error => console.error()
    )
  }
  onSubmit(){

    this.userService.editUser(this.id,this.users).subscribe(data =>{
      this.goToUserList();
    },error =>console.error()
    
    );
  }

  goToUserList(){
    this.router.navigate(['/users']);
  }
}
