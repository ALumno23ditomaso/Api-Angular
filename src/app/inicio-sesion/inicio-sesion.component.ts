import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent {

  //inicio constructor empresa, domicilios y corte

  constructor(public ApiService: ApiService, private router: Router) {
    this.avisoCrearEmpresa = "";
    this.avisoBorrarEmpresa = "";
    this.avisoModificarEmpresa = "";
    this.empresasLista = [];
    this.empresaLista = [];
    this.verTabla = false
    this.listaEmpresa = false

    this.avisoCrearDomicilio = "";
    this.avisoBorrarDomicilio = "";
    this.avisoModificarDomicilio = "";
    this.domiciliosLista = [];
    this.domicilioLista = [];
    this.verTablaD = false
    this.listaDomicilio = false

    this.avisoCrearCorte = "";
    this.avisoBorrarCorte = "";
    this.avisoModificarCorte = "";
    this.cortesLista = [];
    this.corteLista = [];
    this.verTablaC = false
    this.listaCorte = false

  }

  //fin constructor y empieza empresas 

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
 
  //finaliza empresas y empieza domicilios

  avisoCrearDomicilio: string;
  avisoBorrarDomicilio: string;
  avisoModificarDomicilio: string;
  domiciliosLista: Array<{
    _id: string
    direccion: string
    nombre_empresa: string
    barrio: string
    consumo: string
    __v: string
    ids_cortes: []
  }>;

  domicilioLista: Array<{
    nombre_empresa: string;
    direccion: string;
    _id: number;
  }>
  listaDomicilio: boolean;
  verTablaD: boolean;



  public agregarDomicilio(direccion: string, nombre_empresa: string, barrio: string, consumo: string, dueno: string, ids_cortes: string) {

    var body = {
      direccion: direccion,
      nombre_empresa: nombre_empresa,
      barrio: barrio,
      consumo: consumo,
      dueno: dueno,
      ids_cortes: ids_cortes

    }

    var headers = new HttpHeaders({
      'Authorization': `${localStorage.getItem("claveSesion")}`
    })

    return this.ApiService.agregarDomicilio(body, { headers }).subscribe({

      next: (data) => {

        console.log(data)
        this.avisoCrearDomicilio = "Domicilio creado"

      },

      error: (error) => {

        console.log(error)
        this.avisoCrearDomicilio = ""

      }

    })

  }

  public borrarDomicilio(direccion: string) {
    var headers = new HttpHeaders({
      'Authorization': `${localStorage.getItem("claveSesion")}`
    })
    return this.ApiService.borrarDomicilio(direccion, { headers }).subscribe({

      next: (data) => {

        console.log(data)
        if (data != null) {
          this.avisoBorrarDomicilio = "Domicilio borrada"
        }
        else this.avisoBorrarDomicilio = "El domicilio no existe"


      },

      error: (error) => {

        console.log(error)
        this.avisoBorrarDomicilio = ""

      }

    })
  }

  
  public modificarDomicilio(direccionNueva: string, direccionVieja: string, direccion: string) {
    var headers = new HttpHeaders({
      'Authorization': `${localStorage.getItem("claveSesion")}`
    })
    var body = {
      direccion: direccionNueva
    }
    return this.ApiService.modificarDomicilio(direccionVieja, body, { headers }).subscribe({

      next: (data) => {

        console.log(data)
        if (data != null) {
          this.avisoModificarDomicilio = "Empresa modificada"
        }
        else this.avisoModificarDomicilio = "La empresa no existe"


      },

      error: (error) => {

        console.log(error)
        this.avisoModificarDomicilio = ""

      }

    })
  }

  public verDomicilios() {
    var headers = new HttpHeaders({
      'Authorization': `${localStorage.getItem("claveSesion")}`
    })
    return this.ApiService.getDomicilios({ headers }).subscribe({

      next: (data) => {

        console.log(data)
        this.domiciliosLista = JSON.parse(JSON.stringify(data))
        this.verTablaD = true;
        
      },

      error: (error) => {

        console.log(error)

      }

    })
  }

  public verDomicilio(direccion: string) {
    var headers = new HttpHeaders({
      'Authorization': `${localStorage.getItem("claveSesion")}`
    })
    return this.ApiService.getDomicilio(direccion, { headers }).subscribe({

      next: (data) => {
        console.log(data)
        this.domicilioLista = JSON.parse(JSON.stringify(data))
        this.listaDomicilio = true;
      },

      error: (error) => {

        console.log(error)

      }

    })
  }

  //fin domicilios y empieza cortes

  avisoCrearCorte: string;
  avisoBorrarCorte: string;
  avisoModificarCorte: string;
  cortesLista: Array<{
    inicio: Date 
    fin: string 
    barrio: string
    id_corte: string
  }>;
  cantidadCortes!: string
  duracion!: string
  cantidadDomicilios!: string
  corteLista: Array<{
    barrio: string
    inicio: string;
    id_corte: number;
    fin: string
  }>
  listaCorte: boolean;
  verTablaC: boolean;



  public agregarCorte(id_corte: string, barrio: string, fin: string, inicio: string) {

    var body = {
      barrio: barrio,
      fin: fin,
      inicio: inicio,
      id_corte: id_corte
    }

    var headers = new HttpHeaders({
      'Authorization': `${localStorage.getItem("claveSesion")}`
    })

    return this.ApiService.agregarCorte(body, { headers }).subscribe({

      next: (data) => {

        console.log(data)
        this.avisoCrearCorte = "corte creado"

      },

      error: (error) => {

        console.log(error)
        this.avisoCrearCorte = ""

      }

    })

  }

  public borrarCorte(id_corte: string) {
    var headers = new HttpHeaders({
      'Authorization': `${localStorage.getItem("claveSesion")}`
    })
    return this.ApiService.borrarCorte(id_corte, { headers }).subscribe({

      next: (data) => {

        console.log(data)
        if (data != null) {
          this.avisoBorrarCorte = "Corte borrado"
        }
        else this.avisoBorrarCorte = "El corte no existe"


      },

      error: (error) => {

        console.log(error)
        this.avisoBorrarCorte = ""

      }

    })
  }

  
  public modificarCorte(barrio: string, idViejo: string, fin: string, inicio: string) {
    var headers = new HttpHeaders({
      'Authorization': `${localStorage.getItem("claveSesion")}`
    })
    var body = {
      barrio: barrio,
      fin: fin,
      inicio: inicio,
      id_corte: idViejo
    }
    return this.ApiService.modificarCorte(idViejo, body, { headers }).subscribe({

      next: (data) => {

        console.log(data)
        if (data != null) {
          this.avisoModificarCorte = "Corte modificado"
        }
        else this.avisoModificarCorte = "El corte no existe"


      },

      error: (error) => {

        console.log(error)
        this.avisoModificarCorte = ""

      }

    })
  }

  public verCortes() {
    var headers = new HttpHeaders({
      'Authorization': `${localStorage.getItem("claveSesion")}`
    })
    return this.ApiService.getCortes({ headers }).subscribe({

      next: (data) => {

        console.log(data)
        this.verTablaC = true;
        this.cortesLista = JSON.parse(JSON.stringify(data))
      },

      error: (error) => {

        console.log(error)

      }

    })
  }

  public verCorte(barrio: string) {
    var headers = new HttpHeaders({
      'Authorization': `${localStorage.getItem("claveSesion")}`
    })
    return this.ApiService.getCorte(barrio, { headers }).subscribe({

      next: (data) => {
        console.log(data)
        this.corteLista = JSON.parse(JSON.stringify(data))
        this.listaCorte = true;
      },

      error: (error) => {

        console.log(error)

      }

    })
  }

  public cortesXbarrio(barrio: string){
    var headers = new HttpHeaders({
      'Authorization': `${localStorage.getItem("claveSesion")}`
    })
    return this.ApiService.cortesXbarrio(barrio, {headers}).subscribe({

      next: (data) => {
        console.log(data)
        this.cantidadCortes = JSON.stringify(data)
      },

      error: (error) => {

        console.log(error)

      }

    })
  }

  public duracionXcorte(idCorte: string){
    var headers = new HttpHeaders({
      'Authorization': `${localStorage.getItem("claveSesion")}`
    })

    return this.ApiService.duracionXcorte(idCorte, {headers}).subscribe({

      next: (data) => {
        console.log(data)
        this.duracion = JSON.stringify(data) + " dias"
      },

      error: (error) => {

        console.log(error)

      }

    })
  }

  public domiciliosXbarrio(barrio: string){
    var headers = new HttpHeaders({
      'Authorization': `${localStorage.getItem("claveSesion")}`
    })
    return this.ApiService.domiciliosXbarrio(barrio, {headers}).subscribe({

      next: (data) => {
        console.log(data)
        this.cantidadDomicilios = JSON.stringify(data)
      },

      error: (error) => {

        console.log(error)

      }

    })
  }

  public logOut(){
    localStorage.clear;
    this.router.navigate(["/login"])
  }


} 
