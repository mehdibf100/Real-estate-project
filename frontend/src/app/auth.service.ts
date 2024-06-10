import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { log } from 'console';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  [x: string]: any;
  private baseUrl = 'http://localhost:8090/api/auth';
  private UrlPost='http://localhost:8090/post'
  private UrlUser='http://localhost:8090/user'
  constructor(private http: HttpClient) { }
  post:any[]=[]
  maxPrix: any;
  Prix1: any;
  updatePrix1() {
    this.Prix1 = this.maxPrix;
  }
  login(credentials: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/signin`, credentials);
  }

  signup(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/signup`, user);
  }
  createPost(post:any){
    console.log("pp" , post);

    return this.http.post(this.UrlPost,post);
  }
  getPost(){
    return this.http.get(this.UrlPost);
  }
  getUserById(id:any){
    return this.http.get(this.UrlUser+'/'+id);
  }
  updateUserById(user:any){
    return this.http.put(this.UrlUser,user)
  }
  DeleteUser(id:any){
    return this.http.delete(this.UrlUser+'/'+id)
  }
  getUserByEamil(email: string): Observable<any> {
    console.log(email)
    return this.http.post<any>('http://localhost:8090/user/getEmail', { email });
  }

}

