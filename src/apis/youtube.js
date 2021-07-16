import axios from 'axios';

const KEY = 'AIzaSyAGT3ROOkcTyewvNup5gHtScjvvNxPc7E4';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});