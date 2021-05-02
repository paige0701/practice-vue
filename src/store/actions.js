import * as api from '../api'

const actions = {
    FETCH_POSTS({commit}) {
        return api.Post.fetch().then(data => {
            commit('SET_POSTS', data.data)
        })
    }
}

export default actions;
