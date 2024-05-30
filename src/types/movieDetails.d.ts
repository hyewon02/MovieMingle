export interface MovieDetails {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: string;
  budget: integer;
  genres: Array<{ id: BigInteger; name: string }>;
  homepage: string;
  id: integer;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Array;
  production_countries: Array;
  release_date: string;
  revenue: integer;
  spoken_languages: Array;
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
