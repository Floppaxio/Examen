import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.page.html',
  styleUrls: ['./ingreso.page.scss'],
})
export class IngresoPage implements OnInit {
  formularioLogin: FormGroup;
  usuario = 'sobredosis';
  contrasena = '1234';


  constructor(public fb: FormBuilder, private alertController: AlertController, private router: Router) {
    this.formularioLogin = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'contrasena': new FormControl("", Validators.required)
    })
  }


  ngOnInit() {


  }
  async ingresar() {
    var f = this.formularioLogin.value;

    var nombreUsuario = localStorage.getItem('nombreUsuario');
    var contrasenaUsuario = localStorage.getItem('contrasenaUsuario');
    var f = this.formularioLogin.value;


    if (this.formularioLogin.invalid) {
      const alert = await this.alertController.create({
        header: 'Mensaje',
        message: 'Debes ingresar todos los datos',
        buttons: ['OK']
      });

      await alert.present();
      return;
    } else if (nombreUsuario == f.nombre && contrasenaUsuario == f.contrasena) {
      localStorage.setItem('autenticado', 'true');
      this.router.navigate(["/inicio"]);
    } else {  
      const alert = await this.alertController.create({
        header: 'Mensaje',
        message: 'Datos incorrectos',
        buttons: ['OK']
      });

      await alert.present();
      return;
    }
  }


}
