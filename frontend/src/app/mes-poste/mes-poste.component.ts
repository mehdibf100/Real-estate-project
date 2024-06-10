import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-mes-poste',
  templateUrl: './mes-poste.component.html',
  styleUrl: './mes-poste.component.scss'
})
export class MesPosteComponent {
  prevSlide() {
    throw new Error('Method not implemented.');
    }
    nextSlide() {
    throw new Error('Method not implemented.');
    }
    userReview(_t113: NgForm) {
    throw new Error('Method not implemented.');
    }
    property: any;
    reviews: any;
    sendFormToListings(_t16: NgForm) {
    throw new Error('Method not implemented.');
    }
    locationService: any;
    categoryService: any;
    locationId: any;
    userService: any;
    searchByName(_t42: NgForm) {
    throw new Error('Method not implemented.');
    }
      post:any
    posts: any;
    id: any;
    stars: any;
    auth: any;
    Prix1=5
      constructor(public shered:AuthService) {
        console.log(this.shered.Prix1);
       }


      ngOnInit():void{

        this.shered.getPost().subscribe(

          res=>{
            console.log(res)
            this.post=res

          },
          err=>{
            console.log(err)
          })
      }
    }

