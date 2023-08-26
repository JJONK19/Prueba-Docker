import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LogicaService } from 'src/app/logica/logica.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit{
  form: FormGroup;
  username: string = "";
  mensaje: boolean = false;
  
  constructor(private analizarService: LogicaService, private router: Router) {
    this.form = new FormGroup({
        username: new FormControl('', [Validators.required])
      }
    )
   }  

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl('', [Validators.required])
      }
    )
  }

  enviarCodigo(): void {
    this.username = this.form.controls["username"].value;
    //PENDIENTE HACER LA REQUEST
 
    this.analizarService.ejecutarRead(this.username).subscribe((res:any)=>{
      console.log(res)
      //ACA SE CAMBIA PARA ALMACENAR VARIABLES GLOBALES Y COSAS DE LA SALIDA
      if(res.Login == "0"){
        console.log("El usuario no existe.")
      }else{
        this.mensaje = true;
      }
      this.mensaje = false;
      
    }, err=>{
      console.log(err)
    });
    
  }


}
