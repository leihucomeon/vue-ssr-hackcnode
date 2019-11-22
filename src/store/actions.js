import axios from 'axios'
import { fetchCharptersByTopic } from '../api/server-data'
export default {
    'FETCH_CHAPTERS'({ commit }, payload) {
        return fetchCharptersByTopic(payload)
            .then(res => {
                commit('SET_CHAPTERS_LIST', res.data)
            }).catch(err => {
                console.error('fetch chapters error', err)
            })
    }
}