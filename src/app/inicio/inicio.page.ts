import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AnimationController,NavController } from '@ionic/angular';

interface Character {
  name: string;
  image: string;
  id: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: 'inicio.page.html',
  styleUrls: ['inicio.page.scss'],
})

export class HomePage implements OnInit {
  @ViewChild("titulo", { read: ElementRef, static: true }) titulo!: ElementRef;
  personajes: Character[] = [];

  nombreUsuario = localStorage.getItem('nombreUsuario');

  constructor(
    private animationCtrl: AnimationController,
    private httpClient: HttpClient,
    private navCtrl: NavController
  ) { }

  openAsistenciasPage() {
    // Agrega la lógica para abrir la página de asistencias
    this.navCtrl.navigateForward('/asistencias');
  }

  openCalificacionesPage() {
    // Agrega la lógica para abrir la página de calificaciones
    this.navCtrl.navigateForward('/calificaciones');
  }

  openAjustesPage() {
    // Agrega la lógica para abrir la página de ajustes
    this.navCtrl.navigateForward('/ajustes');
  }

  ngOnInit() {

    this.httpClient.get<any>('https://rickandmortyapi.com/api/character')
    .subscribe((res: any) => {
      console.log(res);
      this.personajes = res.results as Character[]; // Usar la interfaz Character
    });
  }

}
