import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisteruserComponent } from './components/registeruser/registeruser.component';
import { UserlistComponent } from './components/userlist/userlist.component';
import { EdituserComponent } from './components/edituser/edituser.component';
import { SortComponent } from './components/sort/sort.component';
import { FinduserComponent } from './components/finduser/finduser.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ViewuserComponent } from './components/viewuser/viewuser.component';

@NgModule({
  declarations: [
    AppComponent,

    RegisteruserComponent,
    UserlistComponent,
    EdituserComponent,
    SortComponent,
    FinduserComponent,
    ViewuserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
