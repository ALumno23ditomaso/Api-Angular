import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  //usuarios
  
  signin(body: any) {
    return this.http.post("http://localhost:2414/usuario/signin", body);
  }

  login(body: any) {
    return this.http.post("http://localhost:2414/usuario/login", body);
  }

  createUser(user: any): Observable<any> {
    return this.http.get('https://localhost:2414/usuario', user);
  }
  editUser(user: any): Observable<any> {
    return this.http.post('https://localhost:2414/usuario', user);
  }
  deleteUser(): Observable<any> {
    return this.http.delete('https://localhost:2414/usuario');
  }

  //empresas

  agregarEmpresa(body: any, headers: any) {
    return this.http.post("http://localhost:2414/empresas", body, headers)
  }

  borrarEmpresa(params: any, headers: any) {
    return this.http.delete("http://localhost:2414/empresas/" + params, headers)
  }

  modificarEmpresa(params: any, body: any, headers: any){
    return this.http.put("http://localhost:2414/empresas/" + params, body, headers)
  }

  getEmpresas(headers: any){
    return this.http.get("http://localhost:2414/empresas", headers)
  }

  getEmpresa(params: any, headers: any){
    return this.http.get("http://localhost:2414/empresas/" + params, headers)
  }

  //Domicilio

  agregarDomicilio(body: any, headers: any) {
    return this.http.post("http://localhost:2414/domicilios", body, headers)
  }

  borrarDomicilio(params: any, headers: any) {
    return this.http.delete("http://localhost:2414/domicilios/" + params, headers)
  }

  modificarDomicilio(params: any, body: any, headers: any){
    return this.http.put("http://localhost:2414/domicilios/" + params, body, headers)
  }

  getDomicilios(headers: any){
    return this.http.get("http://localhost:2414/domicilios", headers)
  }

  getDomicilio(params: any, headers: any){
    return this.http.get("http://localhost:2414/domicilios/" + params, headers)
  }

  //Corte

  agregarCorte(body: any, headers: any) {
    return this.http.post("http://localhost:2414/cortes", body, headers)
  }

  borrarCorte(params: any, headers: any) {
    return this.http.delete("http://localhost:2414/cortes/" + params, headers)
  }

  modificarCorte(params: any, body: any, headers: any){
    return this.http.put("http://localhost:2414/cortes/" + params, body, headers)
  }

  getCortes(headers: any){
    return this.http.get("http://localhost:2414/cortes", headers)
  }

  getCorte(params: any, headers: any){
    return this.http.get("http://localhost:2414/cortes/" + params, headers)
  }

  cortesXbarrio(barrio: any, headers: any){
    return this.http.get("http://localhost:2414/cortes/" + barrio + "/cantidad_de_cortes", headers)
  }

  duracionXcorte(idCorte: any, headers: any){
    return this.http.get("http://localhost:2414/cortes/" + idCorte + "/duracion", headers)
  }

  domiciliosXbarrio(barrio: any, headers: any){
    return this.http.get("http://localhost:2414/domicilios/" + barrio + "/cantidad", headers)
  }




}

