import { Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http'
import { Observable } from 'rxjs';
import { Users } from './model/users';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private baseURL="http://localhost:8080/api/v1/Users";
  constructor(private  _http:HttpClient) { }
   

    fetchUserListFromRemote():Observable<Users[]>{

      return this._http.get<Users[]>(`${this.baseURL}`);
      
       }

       registeruser(users : Users):Observable<Object>{

return this._http.post("http://localhost:8080/api/v1/UsersRegister", users)

       }

       fetchUserById(id: number): Observable<Users>{

        return this._http.get<Users>(`${this.baseURL}/${id}`)
       }
      editUser(id: number,users:Users):Observable<Object>{

       return this._http.put(`${this.baseURL}/${id}`,users); 
      }
    
      deleteuser(firstname: string):Observable<any>{

        return this._http.delete(`${this.baseURL}/${firstname}`);
      }
    }

