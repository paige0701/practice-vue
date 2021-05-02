import axios from 'axios'
const DOMAIN = 'https://dummyapi.io/data/api/'
const request = (method, url, data) =>{
    return axios({
        method,
        url: DOMAIN + url,
        data
    }).then(result => result.data)
        .catch(() => {
        })

}


export const Post = {
    fetch(id) {
        return id? request('get', `post/${id}`): request('get', 'post')
    }
}
