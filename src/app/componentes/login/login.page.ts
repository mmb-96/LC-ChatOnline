import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public email: string;
  public password: string;
  private error = 'Los datos son incorrectos o no existe el usuario';

  constructor( private authSer: AuthService, private router: Router ) { }

  ngOnInit() {
  }

  public onSubmitLogin() {
    this.authSer.login( this.email, this.password ).then(res => this.router.navigate(['/home'])).catch(err => alert(this.error));
  }

}
