import store from '~/store'
export default async (to, from, next) => {
    if (to.query.fresh === '1') {
        await store.dispatch('auth/logout')
        delete to.query.fresh
    }
    next()
}
