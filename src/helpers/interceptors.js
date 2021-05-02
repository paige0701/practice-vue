import axios from 'axios';

export default function setup() {
    axios.interceptors.request.use(function(config) {
        const appId = '608a311d254e222e45dd75bb'
        config.headers.common['app-id'] = `${appId}`;
        return config;
    }, function(err) {
        return Promise.reject(err);
    });
}
