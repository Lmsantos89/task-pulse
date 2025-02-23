import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-callback',
  imports: [CommonModule],
  templateUrl: './callback.component.html',
  styleUrl: './callback.component.scss',
})
export class CallbackComponent implements OnInit {
  constructor(
    private oidcSecurityService: OidcSecurityService,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.oidcSecurityService
      .checkAuth()
      .subscribe(({ isAuthenticated, userData, accessToken }) => {
        if (isAuthenticated && userData?.sub && accessToken) {
          const cognitoSub = userData.sub;
          const email = userData.email || 'unknown';

          // Set JWT in Authorization header
          const headers = new HttpHeaders({
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          });

          // Create or fetch user in backend
          this.http
            .post<{ userId: number }>(
              `${environment.apiUrl}/users`,
              {
                cognitoSub,
                email,
                username: email.split('@')[0],
              },
              { headers }
            )
            .subscribe({
              next: (response) => {
                console.log('Backend userId:', response.userId);
                this.router.navigate(['/tasks/user', response.userId]);
              },
              error: (err) => {
                console.error('Error creating user:', err);
                this.router.navigate(['/']); // Fallback to landing
              },
            });
        } else {
          console.log('Authentication failed');
          this.router.navigate(['/']);
        }
      });
  }
}
