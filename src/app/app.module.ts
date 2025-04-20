
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';  // To handle form data

import { AppComponent } from './app.component';
import { PasswordListComponent } from './password-list/password-list.component';
import { PasswordViewComponent } from './password-view/password-view.component';
import { PasswordAddComponent } from './password-add/password-add.component';
import { PasswordUpdateComponent } from './password-update/password-update.component';
import { AppRoutingModule } from './app-routing.module';  // Import AppRoutingModule

@NgModule({
  declarations: [
    AppComponent,
    PasswordListComponent,
    PasswordViewComponent,
    PasswordAddComponent,
    PasswordUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  // Add AppRoutingModule here
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
