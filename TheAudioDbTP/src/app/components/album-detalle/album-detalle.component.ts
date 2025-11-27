import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Album } from '../../interfaces/album.interface';
import { Track } from '../../interfaces/track.interface';

@Component({
  selector: 'app-album-detalle',
  imports: [CommonModule],
  templateUrl: './album-detalle.component.html',
  styleUrl: './album-detalle.component.css',
})
export class AlbumComponent {
  @Input() album?: Album;
  @Input() tracks: Track[] = [];
  @Input() loadingAlbum = false;
  @Input() loadingTracks = false;
  @Input() errorMessage = '';

  public formatDuration(duration: string | null): string {
    if (!duration) {
      return '—';
    }

    const totalSeconds = Math.floor(Number(duration) / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }

  public formatBigNumber(value: string | null): string {
    if (!value) {
      return '—';
    }

    return Number(value).toLocaleString('es-AR');
  }
}
