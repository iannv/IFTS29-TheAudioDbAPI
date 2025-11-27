export interface TrackResponse {
  track: Track[];
}

export interface Track {
  idTrack: string;
  idAlbum: string;
  idArtist: string;
  idLyric: string | null;
  idIMVDB: string | null;
  strTrack: string;
  strAlbum: string | null;
  strArtist: string | null;
  strArtistAlternate: string | null;
  intCD: string | null;
  intDuration: string | null;
  strGenre: string | null;
  strMood: string | null;
  strStyle: string | null;
  strTheme: string | null;
  strDescriptionEN: string | null;
  strDescriptionES: string | null;
  strTrackThumb: string | null;
  strTrack3DCase: string | null;
  strTrackLyrics: string | null;
  strMusicVid: string | null;
  strMusicVidDirector: string | null;
  strMusicVidCompany: string | null;
  strMusicVidScreen1: string | null;
  strMusicVidScreen2: string | null;
  strMusicVidScreen3: string | null;
  intMusicVidViews: string | null;
  intMusicVidLikes: string | null;
  intMusicVidDislikes: string | null;
  intMusicVidFavorites: string | null;
  intMusicVidComments: string | null;
  intTrackNumber: string | null;
  intLoved: string | null;
  intScore: string | null;
  intScoreVotes: string | null;
  intTotalListeners: string | null;
  intTotalPlays: string | null;
  strMusicBrainzID: string | null;
  strMusicBrainzAlbumID: string | null;
  strMusicBrainzArtistID: string | null;
  strLocked: string | null;
}
