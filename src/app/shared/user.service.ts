import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser: User = {
    name: '',
    mobileNo: '',
    password: ''
  };

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  constructor(private http: HttpClient) { }

  //HttpMethods
  getstudentdata(id):any{
    
    return this.http.get(environment.apiBaseUrl+'/getstudentdata/'+id);
  }
  postUser(user: User){
    return this.http.post(environment.apiBaseUrl+'/register',user,this.noAuthHeader);
  }
postStudent(bodydata){
  return this.http.post(environment.apiBaseUrl+'/postStudent',bodydata,this.noAuthHeader);
}
putStudent(bodydata):any{
  return this.http.put(environment.apiBaseUrl+'/putStudent',bodydata,this.noAuthHeader);
}
  login(authCredentials) {
    return this.http.post(environment.apiBaseUrl + '/authenticate', authCredentials,this.noAuthHeader);
  }

  getStudents() {
    return this.http.get(environment.apiBaseUrl + '/getstudents');
  }
  
  deleteStudent(id):any{
    console.log(id)
return this.http.put(environment.apiBaseUrl + '/deletestudent',id)
  }
  
  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  deleteToken() {
    localStorage.removeItem('token');
  }

  getUserPayload() {
    var token = this.getToken();
    if (token) {
      var userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    }
    else
      return null;
  }

  isLoggedIn() {
    var userPayload = this.getUserPayload();
    if (userPayload)
      return userPayload.exp > Date.now() / 1000;
    else
      return false;
  }
  
  
  
  
}

