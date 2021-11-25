import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Users } from 'src/app/model/users';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent implements OnInit {
id: number;
users= new Users;
  constructor(private route: ActivatedRoute,private userservice: ServiceService) { }

  ngOnInit(): void {
    this.id =this.route.snapshot.params['id'];

    this.users= new Users();
    this.userservice.fetchUserById(this.id).subscribe(data =>{
      this.users = data;
    })

  }

}
