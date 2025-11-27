import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-tracks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top-tracks.component.html',
  styleUrls: ['./top-tracks.component.css']
})
export class TopTracksComponent implements OnInit {

  @Input() artistName!: string;
  top3: any[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.cargarTopTracks();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['artistName'] && this.artistName) {
      this.cargarTopTracks();
    }
  }

  cargarTopTracks() {
    const url = `https://www.theaudiodb.com/api/v1/json/123/track-top10.php?s=${this.artistName}`;

    this.http.get<any>(url).subscribe(resp => {
      this.top3 = resp.track?.slice(0, 3) || [];
    });
  }


  
  formatearDuracion(ms: number): string {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }

verAlbum(track: any) {
  this.router.navigate(['/albumes', track.idArtist, track.idAlbum]);
}
}