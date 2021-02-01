import store from '~/store'

export default async (to, from, next) => {
    if (!store.getters['auth/check']) {
        // Save the token.
        store.dispatch('auth/saveIntended', {
            intended: to
        })

        if (to.query.register === '1') {
            next({name: 'register'})
        } else {
            next({name: 'login'})
        }
    } else {
        next()
    }
}
