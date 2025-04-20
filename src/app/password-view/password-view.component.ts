import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PasswordService } from '../password.service';
import { Password } from '../password.model';
 
@Component({
  selector: 'app-password-view',
  templateUrl: './password-view.component.html',
  styleUrls: ['./password-view.component.css']
})
export class PasswordViewComponent implements OnInit {
  password: Password | undefined;
  isEditing = false;
 
  constructor(
    private route: ActivatedRoute,
    private passwordService: PasswordService,
    private router: Router
  ) {}
 
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.passwordService.getPassword(id).subscribe((data) => {
      this.password = data;
    });
  }
 
  toggleEdit(): void {
    this.isEditing = !this.isEditing;
  }

  isDecrypted = false;
 
toggleDecrypt(): void {
  this.isDecrypted = !this.isDecrypted;
}
 
  updatePassword(): void {
    if (!this.password) return;
 
this.passwordService.updatePassword(this.password.id, this.password).subscribe(() => {
      this.isEditing = false;
      alert('Password updated successfully.');
    });
  }
 
  editPassword(id: number): void {
    this.router.navigate([`/password/update/${id}`]);
  }
}