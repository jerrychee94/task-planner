<template>
    <b-navbar spaced shadow>
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ name: 'settings.profile' }">
                {{ appName }}
            </b-navbar-item>
        </template>

        <template slot="end">
            <b-navbar-item tag="a" @click.prevent="logout" >
                <b-icon icon="sign-out-alt"></b-icon>
                <span>{{ $t('logout') }}</span>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>
import { mapGetters } from 'vuex'
import LocaleDropdown from './LocaleDropdown'

export default {
  components: {
    LocaleDropdown
  },

  data: () => ({
    appName: window.config.appName
  }),

  computed: mapGetters({
    user: 'auth/user'
  }),

  methods: {
    async logout () {
      // Log out the user.
      await this.$store.dispatch('auth/logout')

      // Redirect to login.
      this.$router.push({ name: 'login' })
    }
  }
}
</script>

<style scoped>
.profile-photo {
  width: 2rem;
  height: 2rem;
  margin: -.375rem 0;
}
</style>
