<template>
    <div class="columns section">
<!--        <b-sidebar class="column is-narrow"-->
<!--                   position="static"-->
<!--                   open>-->
<!--            <b-menu>-->zz
<!--                <b-menu-list label="Menu">-->
<!--                    <b-menu-item v-for="tab in tabs" :to="{ name: tab.route }" :key="tab.route"-->
<!--                                 :icon="tab.icon"-->
<!--                                 active-class="is-active"-->
<!--                                 tag="router-link" :label="tab.name">-->
<!--                    </b-menu-item>-->
<!--                </b-menu-list>-->
<!--            </b-menu>-->
<!--        </b-sidebar>-->
        <div class="column">
            <transition name="fade" mode="out-in">
                <router-view/>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
    middleware: 'auth',

    computed: {
        tabs() {
            return [
                {
                    icon: 'user',
                    name: this.$t('profile'),
                    route: 'settings.profile'
                },
                {
                    icon: 'lock',
                    name: this.$t('password'),
                    route: 'settings.password'
                }
            ]
        }
    }
}
</script>

<style>
.settings-card .card-body {
    padding: 0;
}
</style>
