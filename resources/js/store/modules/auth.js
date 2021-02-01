import axios from 'axios'
import Cookies from 'js-cookie'
import * as types from '../mutation-types'

// state
export const state = {
    user: null,
    token: Cookies.get('token'),
    intended: localStorage.getItem("intended"),
    verify_intended: localStorage.getItem("verify_intended")
}

// getters
export const getters = {
    user: state => state.user,
    token: state => state.token,
    check: state => state.user !== null,
    intended: state => state.intended,
    verify_intended: state => state.verify_intended
}

const qs = (params) => Object.keys(params).map(key => `${key}=${params[key]}`).join('&')

// mutations
export const mutations = {
    [types.SAVE_TOKEN](state, {token, remember}) {
        state.token = token
        Cookies.set('token', token, {expires: remember ? 365 : null})
    },

    [types.FETCH_USER_SUCCESS](state, {user}) {
        state.user = user
    },

    [types.FETCH_USER_FAILURE](state) {
        state.token = null
        Cookies.remove('token')
    },

    [types.LOGOUT](state) {
        state.user = null
        state.token = null

        Cookies.remove('token')
    },

    [types.UPDATE_USER](state, {user}) {
        state.user = user
    },

    [types.SAVE_INTENDED](state, {intended}) {
        state.intended = intended.path + '?' + qs(intended.query)
        localStorage.setItem("intended", state.intended);
    },

    [types.RESET_INTENDED](state) {
        state.intended = ""
        localStorage.removeItem("intended")
    },

    [types.SAVE_VERIFY_INTENDED](state, {intended}) {
        state.verify_intended = intended.path + '?' + qs(intended.query)
        localStorage.setItem("verify_intended", state.verify_intended);
    },

    [types.RESET_VERIFY_INTENDED](state) {
        state.verify_intended = ""
        localStorage.removeItem("verify_intended")
    },
}

// actions
export const actions = {
    saveToken({commit, dispatch}, payload) {
        commit(types.SAVE_TOKEN, payload)
    },

    async fetchUser({commit}) {
        try {
            const {data} = await axios.get('/api/user')

            commit(types.FETCH_USER_SUCCESS, {user: data})
        } catch (e) {
            commit(types.FETCH_USER_FAILURE)
        }
    },

    updateUser({commit}, payload) {
        commit(types.UPDATE_USER, payload)
    },

    saveIntended({commit}, payload) {
        commit(types.SAVE_INTENDED, payload)
    },

    resetIntended({commit}, payload) {
        commit(types.RESET_INTENDED, payload)
    },

    saveVerifyIntended({commit}, payload) {
        commit(types.SAVE_VERIFY_INTENDED, payload)
    },

    resetVerifyIntended({commit}, payload) {
        commit(types.RESET_VERIFY_INTENDED, payload)
    },

    async logout({commit}) {
        try {
            await axios.post('/api/logout')
        } catch (e) {
        }
        commit(types.LOGOUT)
    },

    async fetchOauthUrl(ctx, {provider}) {
        const {data} = await axios.post(`/api/social/${provider}`)

        return data.url
    }
}
