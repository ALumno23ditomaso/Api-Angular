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

  //inicio constructor empresa, domicilios y corte

  constructor(public ApiService: ApiService) {
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
    direccion: string
    nombre_empresa: string
    barrio: string
    consumo: number
    dueno: string
    ids_cortes: number
  }>;

  domicilioLista: Array<{
    nombreDeEmpresa: string;
    direccion: string;
    __b: number;
    __id: number;
  }>
  listaDomicilio: boolean;
  verTablaD: boolean;



  public agregarDomicilio(direccion: string, nombre_empresa: string, barrio: string, consumo: number, dueno: string) {

    var body = {
      direccion: direccion,
      nombre_empresa: nombre_empresa,
      barrio: barrio,
      consumo: consumo,
      dueno: dueno,

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
        this.verTablaD = true;
        this.domiciliosLista = JSON.parse(JSON.stringify(data))
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
  CortesLista: Array<{
    inicio: Date 
    fin: Date 
    barrio: string
    ids_corte: number
  }>;

  CorteLista: Array<{
    barrio: string
    __b: number;
    __id: number;
  }>
  listacorte: boolean;
  verTablaD: boolean;



  public agregarCorte(barrio: string, fin: Date, inicio: Date) {

    var body = {
      barrio: barrio,
      fin: fin,
      inicio: inicio
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

  public borrarCorte(direccion: string) {
    var headers = new HttpHeaders({
      'Authorization': `${localStorage.getItem("claveSesion")}`
    })
    return this.ApiService.borrarCorte(barrio, { headers }).subscribe({

      next: (data) => {

        console.log(data)
        if (data != null) {
          this.avisoBorrarCorte = "Corte borrada"
        }
        else this.avisoBorrarCorte = "El Corte no existe"


      },

      error: (error) => {

        console.log(error)
        this.avisoBorrarCorte = ""

      }

    })
  }

  
  public modificarCorte(barrioNuevo: string, barrioViejo: string, barrio: string) {
    var headers = new HttpHeaders({
      'Authorization': `${localStorage.getItem("claveSesion")}`
    })
    var body = {
      barrio: barrioNuevo
    }
    return this.ApiService.modificarCorte(barrioViejo, body, { headers }).subscribe({

      next: (data) => {

        console.log(data)
        if (data != null) {
          this.avisoModificarCorte = "Corte modificada"
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
        this.verTablaD = true;
        this.CortesLista = JSON.parse(JSON.stringify(data))
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
        this.CorteLista = JSON.parse(JSON.stringify(data))
        this.listacorte = true;
      },

      error: (error) => {

        console.log(error)

      }

    })
  }
} 
