import '../component/search-bar.js';
import '../component/movie-list.js';
import "../component/popular-list.js";
import "../component/top_rated-list.js";
import "../component/upcoming-list.js";
import DataSource from '../data/data-source.js';

const main = () => {
    const searchElement = document.querySelector("search-bar");
    const movieListElement = document.querySelector("movie-list");
    const popularListElement = document.querySelector("popular-list");
    const topRatedListElement = document.querySelector("top_rated-list");
    const upcomingListElement = document.querySelector("upcoming-list");

    const renderPopular = results => {
        popularListElement.movies = results;
    };

    const fetchPopularMovie = async () => {
        try {
            const result = await DataSource.getPopular();
            renderPopular(result);
        } catch (message) {
            fallbackResult(message);
        }
    };

    const renderTopRated = results => {
        topRatedListElement.movies = results;
    };

    const fetchTopRatedMovie = async () => {
        try {
            const result = await DataSource.getTopRated();
            renderTopRated(result);
        } catch (message) {
            fallbackResult(message);
        }
    };

    const renderUpcoming = results => {
        upcomingListElement.movies = results;
    };

    const fetchUpcomingMovie = async () => {
        try {
            const result = await DataSource.getUpcoming();
            renderUpcoming(result);
        } catch (message) {
            fallbackResult(message);
        }
    };

    const onButtonSearchClicked = async () => {
        try {
            const result = await DataSource.searchMovie(searchElement.value);
            renderResult(result, searchElement.value);
            movieListElement.scrollIntoView();
        } catch (message) {
            fallbackResult(message)
        }
    };

    const renderResult = (results, keyword) => {
        if (results.length > 0) {
            movieListElement.movies = results;
        } else {
            movieListElement.renderError(`${keyword} doesn't found`);
        }
    };

    const fallbackResult = message => {
        movieListElement.renderError("Tidak ada koneksi internet atau " + message);
    };

    searchElement.clickEvent = onButtonSearchClicked;
    fetchPopularMovie();
    fetchTopRatedMovie();
    fetchUpcomingMovie();
};

export default main;