import { Component, OnInit } from '@angular/core';
import { ArtistaService } from '../../services/artista.service';
import {  SlicePipe } from '@angular/common';
import { ArtistaMusicBrainz, ArtistResponse } from '../../interfaces/artist.interface';
import { Router } from '@angular/router';
import { Loader } from '../../components/loader/loader.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-artistas',
  imports: [SlicePipe, Loader, FormsModule],
  templateUrl: './artistas.component.html',
  styleUrl: './artistas.component.css',
})
export class Artistas implements OnInit {
  public loading: boolean=false
  public currentPage: number = 1;
  public listaArtistas: ArtistaMusicBrainz[] = [];
  public generoSeleccionado: string = '';
  public generos: string[] = [
    'rock', 'pop', 'metal', 'jazz', 'electronic',
    'hiphop', 'folk', 'punk', 'blues', 'reggae','classical','country', 'soul', 'reggaeton',
  ];

  constructor(private artistaService: ArtistaService, private router: Router){}

  ngOnInit(): void {
    this.generoSeleccionado = 'rock';
    this.cargarArtistas();

  }
  
  onGeneroChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    const nuevoGenero = select.value;

    this.generoSeleccionado = nuevoGenero;
    this.currentPage = 1;
    this.cargarArtistas();
  }


  private cargarArtistas() {
    this.loading = true
    if (!this.generoSeleccionado) return;

    this.artistaService.getArtistaPorGenero(this.generoSeleccionado, this.currentPage).subscribe((artistas)=>{
      this.listaArtistas = artistas
      this.loading = false
    })
  }

  public paginaSiguiente() {
    this.currentPage++;
    this.cargarArtistas();
  }

  public paginaAnterior() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.cargarArtistas();
    }
  }

  public verArtista(artista: ArtistaMusicBrainz) {
    this.artistaService.buscarArtista(artista.name)
      .subscribe((response: ArtistResponse) => {
        const id = response.artists?.[0]?.idArtist;
        if (id) {
          this.router.navigate(['/artista', id]);
        }
      });
  }

}
