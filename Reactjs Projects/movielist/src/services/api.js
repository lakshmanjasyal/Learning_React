const API_KEY="f26e81b9a8e66aff8a5dc5078f8f4a43";
const BASE_URL="https://api.themoviedb.org/3"
// /movie/550?api_key=f26e81b9a8e66aff8a5dc5078f8f4a43
export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
  };
  
  export const searchMovies = async (query) => {
    const response = await fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
    );
    const data = await response.json();
    return data.results;
  };