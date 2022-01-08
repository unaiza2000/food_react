import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer mX3ISSVf9oQbN3FtPXdBFbj6J0beD2cww6SewIAoLJNnyxay663dqbmRTSb4oTF3-pdjMGswLW4qJlOxMhgKQQ-RGaABIbTEyeuSdn9YzSTNFLcB1ZXtCGxHyEzHYXYx'
    }
});