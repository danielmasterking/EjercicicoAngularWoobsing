import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../servicios/usuario.service';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  usuario :any = {
    'nombre' : null,
    'apellido' : null,
    'correo' : null,
    'telefono' : null,
  };
  alertaSuccess:boolean = false;
  alertaError:boolean = false;
  constructor(private usuarioServicio: UsuarioService) { }

  ngOnInit(): void {
  }


  crearUsuario(){
    console.log(this.usuario);
    if(
      this.usuario.nombre == null ||
      this.usuario.nombre == '' || 
      this.usuario.apellido == null || 
      this.usuario.apellido == '' || 
      this.usuario.correo == null ||
      this.usuario.correo == '' || 
      this.usuario.telefono == null ||
      this.usuario.telefono == ''
    ) {
      this.alertaError = true;
    }else {
      this.usuarioServicio.crearUsuario(this.usuario).subscribe(datos => {
        if (datos['code']==200) {
         this.alertaSuccess = true;
         this.alertaError = false;
         this.usuario.nombre = null;
         this.usuario.apellido = null;
         this.usuario.correo = null;
         this.usuario.telefono = null;
        }
      });
    }
    
  }
}
