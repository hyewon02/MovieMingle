export interface MovieImages {
  backdrops: Array<{
    aspect_ratio: number;
    height: integer;
    iso_639_1: string;
    file_path: string;
    vote_average: number;
    vote_count: integer;
    width: integer;
  }>;
  id: integer;
  logos: Array;
  posters: Array;
}
