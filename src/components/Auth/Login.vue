<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Login form</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="person"
                                name="username"
                                label="Username"
                                type="text"
                                v-model="username"
                                required
                                :rules="nameRules"
                                :counter="15">
                  </v-text-field>
                  <v-text-field id="password"
                                prepend-icon="lock"
                                name="password"
                                label="Password"
                                type="password"
                                v-model="password"
                                :rules="passwordRules">
                  </v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn color="primary" to="/">Login</v-btn>
                <v-btn color="primary" to="/registration">Register</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      valid: false,
      name: '',
      password: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 15 || 'Name must be less than 15 characters',
      ],
      passwordRules: [
        v => !!v || 'Password is required',
        v => v.length >= 5 || 'Password must be more than 5 characters',
      ],
    }),
  };
</script>

<style>
  .application--wrap {
    min-height: auto;
  }
</style>
