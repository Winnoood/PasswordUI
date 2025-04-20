
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PasswordListComponent } from './password-list/password-list.component';
import { PasswordViewComponent } from './password-view/password-view.component';
import { PasswordAddComponent } from './password-add/password-add.component';
import { PasswordUpdateComponent } from './password-update/password-update.component';

const routes: Routes = [
  { path: '', component: PasswordListComponent },
  { path: 'password-view/:id', component: PasswordViewComponent },
  { path: 'password/add', component: PasswordAddComponent },
  { path: 'password/update/:id', component: PasswordUpdateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
