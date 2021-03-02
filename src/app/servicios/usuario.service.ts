import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  crearUsuario(body) {
    const url = 'http://localhost/PruebaLaravel/public/api/crear_usuario';
    return this.http.post(url, body);   
  }
}
