import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { IUser } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: IUser = {};
  messages: string = "";

  constructor(
    private loginService: LoginService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  login(){
    this.loginService.login(this.user).subscribe(res => {
      this.messages = "Authentification reussié !";
      localStorage.setItem('jsessionId', res.jsessionId);
    }, error => {
      this.messages = "Erreur lors de votre connexion !";
    });
  }

}
