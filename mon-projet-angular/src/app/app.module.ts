import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { AppareilComponent } from './appareil/appareil.component';
import { PostComponent } from './post/post.component';

import {AppareilService} from './services/appareil.service';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import {RouterModule, Routes} from '@angular/router';
import {AuthService} from './services/auth.service';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import {AuthGarde} from './services/auth-garde.service';
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';
import { UserListComponent } from './user-list/user-list.component';
import {UserService} from './services/user.service';
import { NewUserComponent } from './new-user/new-user.component';

const  appRoutes: Routes = [

  { path: 'appareils' , canActivate: [AuthGarde] , component: AppareilViewComponent },
  { path: 'appareils/:id' , canActivate: [AuthGarde] , component: SingleAppareilComponent},
  { path: 'edit' , canActivate: [AuthGarde] , component: EditAppareilComponent},
  { path: 'auth' , component: AuthComponent },
  { path: 'users' , component: UserListComponent},
  { path: 'new-user', component: NewUserComponent },
  { path: '' , component: AppareilViewComponent},
  { path: 'not-found' , component: FourOhFourComponent },
  { path: '**' , redirectTo: '/not-found'}
];

@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    AppareilComponent,
    PostComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
    FourOhFourComponent,
    EditAppareilComponent,
    UserListComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AppareilService,
    AuthService,
    AuthGarde,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
