import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { MesPosteComponent } from './mes-poste/mes-poste.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component:UserHomeComponent },
  { path: 'create', component: CreatePostComponent },
  { path: 'signin', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'profile', component:UserProfileComponent },
  { path: 'mes-post', component:MesPosteComponent },
  { path: 'signup', redirectTo: '/signup' },

  { path: 'get/:id', component: PostDetailComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
