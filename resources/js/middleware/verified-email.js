import store from '~/store'

export default (to, from, next) => {
    const user = store.getters['auth/user']
    if (user && user.email_verified_at === null) {
        store.dispatch('auth/saveVerifyIntended', {
            intended: to
        })
        next({ name: 'settings.profile' })
    } else {
        next()
    }
}
