export interface IPokemonAPI {
  count: number;
  next: string;
  previous?: string;
  results: IPokemonResults[];
}

export interface IPokemonResults {
  name: string;
  url: string;
}
