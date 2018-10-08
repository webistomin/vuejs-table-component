<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
      class="hidden-md-and-up"
    >
      <v-list dense three-line>
        <v-list-tile v-for="link of links" :to="link.url">
          <v-list-tile-action>
            <v-icon>{{link.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{link.title}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-if="isUserLoggedIn"
                     @click="onLogout">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Logout</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>Data Table App</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat :to="link.url" v-for="link of links">
          <v-icon left>
            {{link.icon}}
          </v-icon>
          {{link.title}}
        </v-btn>
        <v-btn flat v-if="isUserLoggedIn"
                    @click="onLogout">
          <v-icon left>
            exit_to_app
          </v-icon>
          Logout
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2018</span>
    </v-footer>

    <template v-if="error">
      <v-snackbar
        :timeout="5000"
        :multi-line="true"
        color="error"
        @input="closeError"
        :value="true"
      >
        {{error}}
        <v-btn flat dark @click.native="closeError">Close</v-btn>
      </v-snackbar>
    </template>

  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: null,
    }),
    props: {
      source: String,
    },
    computed: {
      error() {
        return this.$store.getters.error;
      },
      isUserLoggedIn() {
        return this.$store.getters.isUserLoggedIn;
      },
      links() {
        if (this.isUserLoggedIn) {
          return [
            { title: 'Home', icon: 'home', url: '/' },
            { title: 'List', icon: 'list', url: '/list' },
            { title: 'Profile', icon: 'person', url: '/profile' },
          ];
        }
        return [
          { title: 'Login', icon: 'lock', url: '/login' },
        ];
      },
    },
    methods: {
      closeError() {
        this.$store.dispatch('clearError');
      },
      onLogout() {
        this.$store.dispatch('logoutUser');
        this.$router.push('/');
      },
    },
  };
</script>
