
export type LocationT = {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
};

export type InfoT = {
    "count": number,
    "pages": number,
    "next": string | null,
    "prev": null | string
}
export type ResultLocationsT = {
    info: InfoT,
    results: LocationT[]
}