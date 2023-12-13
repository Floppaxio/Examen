import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
})
export class ContactoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  resetPassword() {
    // Aquí puedes agregar la lógica para enviar una solicitud de restablecimiento de contraseña al servidor
    // Por ejemplo, puedes usar un servicio o una API para enviar la solicitud al servidor
    // Una vez que la contraseña se haya restablecido, puedes mostrar un mensaje de éxito o redirigir al usuario a otra página.
  }

}
