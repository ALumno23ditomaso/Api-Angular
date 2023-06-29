import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent {

  users: any;
  avisoCrearEmpresa: string;
  avisoBorrarEmpresa: string;
  avisoModificarEmpresa: string;
  empresasLista: Array<{
    _id: number,
    nombre: string,
    direccion: number
  }>;

  empresaLista: Array<{
    nombre: string;
    direccion: string;
    __v: number;
    _id: number;
  }>
  listaEmpresa: boolean;
  verTabla: boolean;


  constructor(public ApiService: ApiService) {
    this.avisoCrearEmpresa = "";
    this.avisoBorrarEmpresa = "";
    this.avisoModificarEmpresa = "";
    this.empresasLista = [];
    this.empresaLista = [];
    this.verTabla = false
    this.listaEmpresa = false
  }

  public agregarEmpresa(nombre: string, direccion: string) {

    var body = {
      nombre: nombre,
      direccion: direccion

    }

    var headers = new HttpHeaders({
      'Authorization': `${localStorage.getItem("claveSesion")}`
    })

    return this.ApiService.agregarEmpresa(body, { headers }).subscribe({

      next: (data) => {

        console.log(data)
        this.avisoCrearEmpresa = "Empresa creada"

      },

      error: (error) => {

        console.log(error)
        this.avisoCrearEmpresa = ""

      }

    })

  }

  public borrarEmpresa(nombre: string) {
    var headers = new HttpHeaders({
      'Authorization': `${localStorage.getItem("claveSesion")}`
    })
    return this.ApiService.borrarEmpresa(nombre, { headers }).subscribe({

      next: (data) => {

        console.log(data)
        if (data != null) {
          this.avisoBorrarEmpresa = "Empresa borrada"
        }
        else this.avisoBorrarEmpresa = "La empresa no existe"


      },

      error: (error) => {

        console.log(error)
        this.avisoBorrarEmpresa = ""

      }

    })
  }

  public modificarEmpresa(nombreNuevo: string, nombreViejo: string, direccion: string) {
    var headers = new HttpHeaders({
      'Authorization': `${localStorage.getItem("claveSesion")}`
    })
    var body = {
      nombre: nombreNuevo,
      direccion: direccion
    }
    return this.ApiService.modificarEmpresa(nombreViejo, body, { headers }).subscribe({

      next: (data) => {

        console.log(data)
        if (data != null) {
          this.avisoModificarEmpresa = "Empresa modificada"
        }
        else this.avisoModificarEmpresa = "La empresa no existe"


      },

      error: (error) => {

        console.log(error)
        this.avisoModificarEmpresa = ""

      }

    })
  }

  public verEmpresas() {
    var headers = new HttpHeaders({
      'Authorization': `${localStorage.getItem("claveSesion")}`
    })
    return this.ApiService.getEmpresas({ headers }).subscribe({

      next: (data) => {

        console.log(data)
        this.verTabla = true;
        this.empresasLista = JSON.parse(JSON.stringify(data))
      },

      error: (error) => {

        console.log(error)

      }

    })
  }

  public verEmpresa(nombre: string) {
    var headers = new HttpHeaders({
      'Authorization': `${localStorage.getItem("claveSesion")}`
    })
    return this.ApiService.getEmpresa(nombre, { headers }).subscribe({

      next: (data) => {
        console.log(data)
        this.empresaLista = JSON.parse(JSON.stringify(data))
        this.listaEmpresa = true;
      },

      error: (error) => {

        console.log(error)

      }

    })
  }

} 
