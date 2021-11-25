import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
import { Users } from 'src/app/model/users';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
users:Users[];

constructor(private _service:ServiceService , private router: Router){}
  ngOnInit():void{
          this.fetchUsers();
          }
        
private fetchUsers(){
  this._service.fetchUserListFromRemote().subscribe(data=>{
    this.users =data;
  })
}

edituser(id: number){

  this.router.navigate(['edituser',id]);
}

deleteuser(firstname: string){
this._service.deleteuser(firstname).subscribe(
  (data: any[])=>{
    console.log(data);
    this.fetchUsers();
  
})

}
viewuser(id: number){

  this.router.navigate(['viewuser',id]);
}


}
