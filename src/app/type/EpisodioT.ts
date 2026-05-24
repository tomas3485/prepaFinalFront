
export type EpisodeT = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[]; 
  url: string;
  created: string;
};

export type InfoT = {
    "count": number,
    "pages": number,
    "next": string | null,
    "prev": null | string
}
export type ResulEpisodesT = {
    info: InfoT,
    results: EpisodeT[]
}