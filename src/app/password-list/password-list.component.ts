import { Component, OnInit } from '@angular/core';
import { PasswordService } from '../password.service';
import { Password } from '../password.model';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-password-list',
  templateUrl: './password-list.component.html',
  styleUrls: ['./password-list.component.css']
})
export class PasswordListComponent implements OnInit {
  passwords: Password[] = [];
  pagedPasswords: Password[] = [];
  currentPage: number = 1;
  pageSize: number = 5;
  totalPages: number = 0;
 
  constructor(private passwordService: PasswordService, private router: Router) {}
 
  ngOnInit(): void {
    this.loadPasswords();
  }
 
  // Load all passwords and initialize pagination
  loadPasswords(): void {
    this.passwordService.getPasswords().subscribe((data) => {
      this.passwords = data;
      this.totalPages = Math.ceil(this.passwords.length / this.pageSize);
      this.updatePagedPasswords();
    });
  }
 
  // Navigate to password-view component
  viewPassword(id: number): void {
    this.router.navigate(['/password-view', id]);
  }
 
  addPassword(): void {
    this.router.navigate(['/password/add']);
  }
 
  // Delete password and refresh pagination
  deletePassword(id: number): void {
    this.passwordService.deletePassword(id).subscribe(() => {
this.passwords = this.passwords.filter(p => p.id !== id);
      this.totalPages = Math.ceil(this.passwords.length / this.pageSize);
      if (this.currentPage > this.totalPages && this.totalPages > 0) {
        this.currentPage = this.totalPages;
      }
      this.updatePagedPasswords();
    });
  }
 
  // Change page
  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updatePagedPasswords();
    }
  }
 
  // Update pagedPasswords based on current page
  updatePagedPasswords(): void {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.pagedPasswords = this.passwords.slice(start, end);
  }
}