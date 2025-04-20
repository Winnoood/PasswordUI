import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Password } from './password.model';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {
  private apiUrl = 'https://localhost:44313/api/Password';

  constructor(private http: HttpClient) {}

  // Get all passwords
  getPasswords(): Observable<Password[]> {
    return this.http.get<Password[]>('https://localhost:44313/api/Password');
  }

  // Get a specific password by ID
  getPassword(id: number): Observable<Password> {
    return this.http.get<Password>(`${this.apiUrl}/${id}`);
  }

  // Add a new password
  addPassword(password: Password): Observable<Password> {
    return this.http.post<Password>(this.apiUrl, password);
  }

  // Update an existing password
  updatePassword(id: number, password: Password): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, password);
  }

  // Delete a password
  deletePassword(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
