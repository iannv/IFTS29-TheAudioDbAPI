import {Component, OnInit} from '@angular/core';
import { ArtistaService } from '../../services/artista';
import {Artist} from '../../interfaces/artist.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artista-page',
  imports: [],
  templateUrl: './artista-page.html',
  styleUrl: './artista-page.css',
})
export class ArtistaPage implements OnInit {

  artista !: Artist

  constructor(private service: ArtistaService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if(id){
        this.service.buscarArtistaPorId(parseInt(id)).subscribe(artista => {
          this.artista = artista.artists[0];
        });
      }
    });
  }
}
