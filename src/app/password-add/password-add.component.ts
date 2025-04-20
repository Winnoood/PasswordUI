import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PasswordService } from '../password.service';
import { Password } from '../password.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-password-add',
  templateUrl: './password-add.component.html',
  styleUrls: ['./password-add.component.css']
})
export class PasswordAddComponent {
  newPassword: Password = {
    id: 0, // Placeholder ID, assuming backend will override this
    category: '',
    app: '',
    userName: '',
    encryptedPassword: '',
    decryptedPassword: ''
  };

  constructor(private passwordService: PasswordService, private router: Router) {}

  onSubmit(form: NgForm): void {
    const newPassword: Password = form.value;
    newPassword.id=0;
    newPassword.encryptedPassword='';
    this.passwordService.addPassword(newPassword).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
