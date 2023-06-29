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

}

