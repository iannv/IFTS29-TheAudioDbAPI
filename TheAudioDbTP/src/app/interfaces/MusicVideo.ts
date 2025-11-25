export interface MusicVideo {
  mvids: Mvid[];
}

export interface Mvid {
  idArtist:         string;
  idAlbum:          string;
  idTrack:          string;
  strTrack:         string;
  strTrackThumb:    null;
  strMusicVid:      string;
  strDescriptionEN: string;
}
