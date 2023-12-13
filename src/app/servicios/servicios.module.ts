import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServiciosPageRoutingModule } from './servicios-routing.module';
import { NgxScannerQrcodeModule, LOAD_WASM } from 'ngx-scanner-qrcode';
import { ServiciosPage } from './servicios.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxScannerQrcodeModule,
    ServiciosPageRoutingModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [ServiciosPage]
  
})
export class ServiciosPageModule {}
