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
                <v-form ref="form" v-model="valid" validate>
                  <v-text-field prepend-icon="person"
                                name="Email"
                                label="Email"
                                type="email"
                                v-model="email"
                                required
                                :rules="emailRules">
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
                <v-btn color="primary"
                       @click="onSubmit"
                       :loading="loading"
                       :disabled="!valid || loading">Login</v-btn>
                <v-btn color="primary" to="/registration">Register</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

  export default {
    data: () => ({
      valid: false,
      email: '',
      password: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => emailRegex.test(v) || 'E-mail must be valid',
      ],
      passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length >= 6) || 'Password must be equal or more than 6 characters',
      ],
    }),
    computed: {
      loading() {
        return this.$store.getters.loading;
      },
    },
    methods: {
      onSubmit() {
        if (this.$refs.form.validate()) {
          const user = {
            email: this.email,
            password: this.password,
          };

          this.$store.dispatch('loginUser', user)
            .then(() => {
              this.$router.push('/');
            })
            .catch(() => {});
        }
      },
    },
    created() {
      if (this.$route.query.loginError) {
        this.$store.dispatch('setError', 'Please log in to access this page.');
      }
    },
  };
</script>

<style>
</style>
