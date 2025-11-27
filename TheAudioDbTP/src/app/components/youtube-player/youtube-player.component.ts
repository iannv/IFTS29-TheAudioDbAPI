import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'youtube-player',
  standalone: true,
  imports: [CommonModule],
  template: `
    <iframe
      *ngIf="safeUrl"
      [width]="width"
      [height]="height"
      [src]="safeUrl"
      frameborder="0"
      allowfullscreen>
    </iframe>
  `
})

export class YoutubePlayerComponent {
  @Input() videoId!: string;
  @Input() width: number = 640;
  @Input() height: number = 360;
  @Input() playerVars: any;

  safeUrl!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnChanges() {
    if (this.videoId) {
      const url = `https://www.youtube.com/embed/${this.videoId}`;
      this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
  }
}
//Este componente recibe el video id de youtube y lo muestra en un iframe, tuve que agregarlo para poder ejecutar la pagina sin errores ya que el componente de "artista detalle" usa una version antigua de ngx-youtube-player que no es compatible con versiones no superiores al angular 14+.