export interface TrendingResponse {
  trending: Trending[];
}

export interface Trending {
  idTrend: string;
  intChartPlace: string;
  idArtist: string;
  idAlbum: string;
  idTrack: string | null;
  strArtistMBID: string;
  strAlbumMBID: string;
  strTrackMBID: string | null;
  strArtist: string;
  strAlbum: string;
  strTrack: string | null;
  strArtistThumb: string;
  strAlbumThumb: string;
  strTrackThumb: string | null;
  strCountry: string;
  strType: string;
  intWeek: string;
  dateAdded: string;
}
