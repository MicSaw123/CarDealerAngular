import { Component } from '@angular/core';
import {IdentityApiService} from "../../CarDealerAngular.ApiHandlers/Identity/IdentityApi.service";
import {Router } from '@angular/router';

@Component({
  selector: 'app-header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  currentUrl?: string;

  constructor(private identityService: IdentityApiService,
              private router: Router) {
   this.currentUrl = this.router.url;
  }


  Logout(){
    this.identityService.Logout().subscribe();
    localStorage.removeItem('Token');
  }

  goToHome(){
    this.router.navigate(['/']);
  }

  goToLogin(){
    this.router.navigate(['login']);
  }

  goToAddListing(){
    this.router.navigate(['/add-listing']);
  }

  goToRegister(){
    this.router.navigate(['/register'])
  }

  goToProfileManagement(token: string){
    this.router.navigate(['profile', token]);
  }

  protected readonly localStorage = localStorage;
}
