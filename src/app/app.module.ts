// built-in
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';  
// components
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
//routes
import { AppRoutingModule } from './app-routing.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserService } from './shared/user.service';
//other
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import {NgxPaginationModule} from 'ngx-pagination';
import { DatetablePipe } from './datetable.pipe';
import { MyorderPipe } from './myorder.pipe';
import { Result10Pipe } from './result10.pipe';

import { StatePipe } from './state.pipe';
import { CityPipe } from './city.pipe';
import { ViewstudentComponent } from './viewstudent/viewstudent.component';

import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserProfileComponent,
    DatetablePipe,
    MyorderPipe,
    Result10Pipe,

    StatePipe,
    CityPipe,
    ViewstudentComponent,
 
    EditComponent
  ],
  imports: [ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,NgxPaginationModule,CommonModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },AuthGuard,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
