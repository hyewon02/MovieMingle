const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
  },
};

const apiUrl = "https://api.themoviedb.org/3/movie";

export async function getMostPopularMovies() {
  try {
    const res = await fetch(`${apiUrl}/popular`, options);
    const json = await res.json();
    if (res.ok) return await json.results;
  } catch (err) {
    console.error(err);
  }
}

export async function getTopRatedMovies() {
  try {
    const res = await fetch(`${apiUrl}/top_rated`, options);
    const json = await res.json();
    if (res.ok) return await json.results;
  } catch (err) {
    console.error(err);
  }
}

export async function getMovieDetails(movie_id: string | undefined | null) {
  try {
    const res = await fetch(`${apiUrl}/${movie_id}`, options);
    const json = await res.json();
    if (res.ok) return await json;
  } catch (err) {
    console.error(err);
  }
}

export async function getMovieImages(movie_id: string | undefined) {
  try {
    const res = await fetch(`${apiUrl}/${movie_id}/images`, options);
    const json = await res.json();
    if (res.ok) return await json;
  } catch (err) {
    console.error(err);
  }
}

export async function getReviews(movie_id: string | undefined) {
  try {
    const res = await fetch(`${apiUrl}/${movie_id}/reviews`, options);
    const json = await res.json();
    if (res.ok) return await json.results;
  } catch (err) {
    console.error(err);
  }
}

export async function getSimilarMovies(movie_id: string | undefined) {
  try {
    const res = await fetch(`${apiUrl}/${movie_id}/similar`, options);
    const json = await res.json();
    if (res.ok) return await json.results;
  } catch (err) {
    console.error(err);
  }
}
