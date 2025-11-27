export interface ArtistResponse {
  artists: Artist[];
}

export interface Artist {
  idArtist: string;
  strArtist: string;
  strArtistStripped: string | null;
  strArtistAlternate: string;
  strLabel: string;
  idLabel: string;
  intFormedYear: string;
  intBornYear: string;
  intDiedYear: string | null;
  strDisbanded: string | null;
  strStyle: string;
  strGenre: string;
  strMood: string;
  strWebsite: string;
  strFacebook: string;
  strTwitter: string;
  strBiographyEN: string;
  strBiographyDE: string;
  strBiographyFR: string;
  strBiographyCN: string;
  strBiographyIT: string;
  strBiographyJP: string;
  strBiographyRU: string;
  strBiographyES: string;
  strBiographyPT: string;
  strBiographySE: string;
  strBiographyNL: string;
  strBiographyHU: string;
  strBiographyNO: string;
  strBiographyIL: string;
  strBiographyPL: string;
  strGender: string;
  intMembers: string;
  strCountry: string;
  strCountryCode: string;
  strArtistThumb: string;
  strArtistLogo: string;
  strArtistCutout: string;
  strArtistClearart: string;
  strArtistWideThumb: string;
  strArtistFanart: string;
  strArtistFanart2: string;
  strArtistFanart3: string;
  strArtistFanart4: string;
  strArtistBanner: string;
  strMusicBrainzID: string;
  strISNIcode: string | null;
  strLastFMChart: string;
  intCharted: string;
  strLocked: string;
}

export interface ArtistaMusicBrainz{
   id: string;
  type: string;
  "type-id"?: string;
  score: number;
  "gender-id"?: string;
  name: string;
  "sort-name": string;
  gender?: string;
  country?: string;
  tags?: { count: number;
  name: string;}[];
  image?: string;
}

export interface ArtistaMusicBrainzResponse {
  created: string;
  count: number;
  offset: number;
  artists: ArtistaMusicBrainz[];
}