import { Component, OnInit } from '@angular/core';
import { Artist } from '../../interfaces/artist.interface';
import { ArtistaService } from '../../services/artista.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artista-component',
  imports: [],
  templateUrl: './artista-component.html',
  styleUrl: './artista-component.css',
})
export class ArtistaComponent implements OnInit {
  artista!: Artist;

  constructor(private service: ArtistaService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.service.buscarArtistaPorId(parseInt(id)).subscribe((artista) => {
          this.artista = artista.artists[0];
        });
      }
    });
  }
}
