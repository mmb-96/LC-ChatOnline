import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  public email: string;
  public password: string;
  public name: string;
  private error = 'Correo electrónico registrado, contraseña no válida o falta rellenar algun campo.';

  constructor(private authSer: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSubmitRegister() {

    this.authSer.register(this.email, this.password, this.name).then(auth => this.router.navigate(['/home']))
    .catch(err => alert(this.error));
  }
}
