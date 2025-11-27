export interface AlbumResponse {
  album: Album[];
}

export interface Album {
  idAlbum: string;
  idArtist: string;
  idLabel: string | null;
  strAlbum: string;
  strAlbumStripped: string | null;
  strArtist: string;
  strArtistStripped: string | null;
  intYearReleased: string | null;
  strStyle: string | null;
  strGenre: string | null;
  strLabel: string | null;
  strReleaseFormat: string | null;
  intSales: string | null;
  strAlbumThumb: string | null;
  strAlbumThumbHQ: string | null;
  strAlbumBack: string | null;
  strAlbumCDart: string | null;
  strAlbumSpine: string | null;
  strAlbum3DCase: string | null;
  strAlbum3DFlat: string | null;
  strAlbum3DFace: string | null;
  strAlbum3DThumb: string | null;
  strDescriptionEN: string | null;
  strDescriptionES: string | null;
  strMood: string | null;
  strTheme: string | null;
  strSpeed: string | null;
  strLocation: string | null;
  strMusicBrainzID: string | null;
  strMusicBrainzArtistID: string | null;
  strAllMusicID: string | null;
  strBBCReviewID: string | null;
  strRateYourMusicID: string | null;
  strDiscogsID: string | null;
  strWikidataID: string | null;
  strWikipediaID: string | null;
  strGeniusID: string | null;
  strReview: string | null;
  intLoved: string | null;
  intScore: string | null;
  intScoreVotes: string | null;
  strLocked: string | null;
}
