import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  error: string;
  usuarioError: string;

  constructor(private router: Router, private http: ApiService) { 
    this.error = "";
    this.usuarioError = "";
  }


  public signin(user: string, contraseña: string) {


    var body = {

      username: user,
      password: contraseña

    }

    return this.http.signin(body).subscribe({

      next: (data) => {

        if(data == null){
          this.usuarioError = "Nombre de usuario ya en uso"
        }
        else{
          this.usuarioError = ""
        }
        console.log(data)

      },

      error: (error) => {

        console.log(error)

      }

    })

  }

  public login(user: string, contraseña: string) {


    var body = {

      username: user,
      password: contraseña

    }

    return this.http.login(body).subscribe({

      next: (data) => {

        console.log(data)

        if (data != null) {
          localStorage.setItem("claveSesion", JSON.parse(JSON.stringify(data)))
          this.router.navigate(['/sesion']);
        }else{
          this.error = "contraseña incorrecta"
        }



      },

      error: (error) => {

        console.log(error)

      }

    })

  }



}
