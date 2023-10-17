import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3"
const api_key = '29f558ba18ed3d2859aa1282cdc0f6f2'

const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=29f558ba18ed3d2859aa1282cdc0f6f2';

//https://api.themoviedb.org/3/trending/all/day?api_key=29f558ba18ed3d2859aa1282cdc0f6f2
const getTrendingVideos=axios.get(movieBaseUrl+
    "/trending/all/day?api_key="+api_key);
    const getMovieByGenreId=(id)=>
    axios.get(movieByGenreBaseURL+"&with_genres="+id)

export default{
    getTrendingVideos,
    getMovieByGenreId
}
