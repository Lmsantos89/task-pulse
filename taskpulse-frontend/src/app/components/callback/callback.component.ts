import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-callback',
  imports: [CommonModule],
  templateUrl: './callback.component.html',
  styleUrl: './callback.component.scss',
})
export class CallbackComponent implements OnInit {
  constructor(
    private oidcSecurityService: OidcSecurityService,
    private router: Router
  ) {}

  ngOnInit() {
    this.oidcSecurityService
      .checkAuth()
      .subscribe(({ isAuthenticated, userData }) => {
        if (isAuthenticated && userData?.sub) {
          console.log('User authenticated, sub:', userData.sub);
          this.router.navigate(['/tasks/user', userData.sub]); // Redirect to task list with user ID
        } else {
          console.log('Authentication failed or no sub');
          this.router.navigate(['/']); // Back to landing if failed
        }
      });
  }
}
