import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  nuevasCancionesTheHives: any = {};
  nuevasCancionesDojaCat: any = {};
  nuevasCanciones: any[] = [];
  loading: boolean;

  error: boolean;
  mensajeError: string;

  constructor( private spotify: SpotifyService ) {

    this.loading = true;
    this.error = false;

    this.spotify.getAlbumTheHives()
      .subscribe( (data: any) => {
        this.nuevasCancionesTheHives = data;
        this.loading = false;
        this.nuevasCanciones.push(this.nuevasCancionesTheHives);
    }, ( errorServicio ) => {
        this.loading = false;
        this.error = true;
        console.log(errorServicio);
        this.mensajeError = errorServicio.error.error.message;
    });

    this.spotify.getAlbumDojaCat()
      .subscribe( (data: any) => {
        this.nuevasCancionesDojaCat = data;
        this.loading = false;
        this.nuevasCanciones.push(this.nuevasCancionesDojaCat);
    }, ( errorServicio ) => {
        this.loading = false;
        this.error = true;
        console.log(errorServicio);
        this.mensajeError = errorServicio.error.error.message;
    });

    
    

  }



}
