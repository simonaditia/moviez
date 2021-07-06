const axios = require('axios');

class DataSource {
    static searchMovie(keyword) {
        return axios.get('https://api.themoviedb.org/3/search/movie', {
                params: {
                    api_key: process.env.API_KEY,
                    language: 'en-US',
                    query: keyword,
                    page: 1,
                    include_adult: 'false'
                }
            })
            .then(response => {
                return Promise.resolve(response.data.results);
            }).catch(error => {
                return axios.get('https://api.themoviedb.org/3/movie/popular', {
                    params: {
                        api_key: process.env.API_KEY,
                        language: 'en-US',
                        page: 1
                    }
                }).then(response => {
                    return Promise.resolve(response.data.results);
                }).catch(error => {
                    console.log("not found");
                });
            });
    }
    static getPopular() {
        return axios.get('https://api.themoviedb.org/3/movie/popular', {
            params: {
                api_key: process.env.API_KEY,
                language: 'en-US',
                page: 1
            }
        }).then(response => {
            return Promise.resolve(response.data.results);
        }).catch(error => {
            return Promise.reject(`${keyword} is not found`);
        });
    }
    static getTopRated() {
        return axios.get('https://api.themoviedb.org/3/movie/top_rated', {
            params: {
                api_key: process.env.API_KEY,
                language: 'en-US',
                page: 1
            }
        }).then(response => {
            return Promise.resolve(response.data.results);
        }).catch(error => {
            return Promise.reject(`${keyword} is not found`);
        });
    }

    static getUpcoming() {
        return axios.get('https://api.themoviedb.org/3/movie/upcoming', {
            params: {
                api_key: process.env.API_KEY,
                language: 'en-US',
                page: 1
            }
        }).then(response => {
            return Promise.resolve(response.data.results);
        }).catch(error => {
            return Promise.reject(`${keyword} is not found`);
        });
    }
}

export default DataSource;