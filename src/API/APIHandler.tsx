const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`
    }
};

export async function getMostPopularMovies() {
    try {
        const res = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options);
        const json = await res.json();
        if (res.ok) return await json.results;
    } catch (err) {
        console.error(err);
    }
}

export async function getTopRatedMovies() {
    try {
        const res = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
        const json = await res.json();
        if (res.ok) return await json.results;
    } catch (err) {
        console.error(err);
    }
}