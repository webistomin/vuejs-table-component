<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
      class="hidden-md-and-up"
    >
      <v-list dense three-line>
        <v-list-tile @click="" to="/">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="" to="/list">
          <v-list-tile-action>
            <v-icon>list</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>List</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="" to="/profile">
          <v-list-tile-action>
            <v-icon>person</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Profile</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="" to="/login">
          <v-list-tile-action>
            <v-icon>lock</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Login</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>Data Table App</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat to="/">
          <v-icon left>
            home
          </v-icon>
          Home
        </v-btn>
        <v-btn flat to="/list">
          <v-icon left>
            list
          </v-icon>
          List
        </v-btn>
        <v-btn flat to="/profile">
          <v-icon left>
            person
          </v-icon>
          Profile
        </v-btn>
        <v-btn flat to="/login">
          <v-icon left>
            lock
          </v-icon>
          Login
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2018</span>
    </v-footer>
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
  };
</script>
