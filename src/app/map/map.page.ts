import { Component, OnInit } from '@angular/core';

declare var google: any;

interface Marker {
  position: {
    lat: number,
    lng: number,
  };
  title: string;
}

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  map = null;

  constructor() { }

  ngOnInit(): void {
    this.loadMap();
  }
  addMarker(marker: Marker) {
    return new google.maps.Marker({
      position: marker.position,
      map: this.map,
      title: marker.title
    });
  }

  loadMap() {
    // Intenta obtener el elemento con el ID "map"
    const mapEle: HTMLElement | null = document.getElementById('map');

    if (mapEle) {
      // Si el elemento existe, crea el mapa
      const myLatLng = { lat:  -33.6844, lng:  -71.2168 };
      this.map = new google.maps.Map(mapEle, {
        center: myLatLng,
        zoom: 12
      });

      google.maps.event.addListenerOnce(this.map, 'idle', () => {
        mapEle.classList.add('show-map');
        const marker = {
          position: {
            lat:  -33.6844,
            lng:  -71.2168
        },
          title: 'punto uno'
        };
          this.addMarker(marker);


      });
    }
  }
}
