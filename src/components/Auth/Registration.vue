<template>
  <v-app>
    <v-content>
      <v-container fluid>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Register form</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form v-model="valid" ref="form" lazy-validation>
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
                                :rules="passwordRules"
                                required>
                  </v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn color="primary"
                       @click="onSubmit"
                       :loading="loading"
                       :disabled="!valid || loading">
                  Create account!
                </v-btn>
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
      passwordRules: [
        v => !!v || 'Password is required',
        v => v.length >= 6 || 'Password must be equal or more than 6 characters',
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => emailRegex.test(v) || 'E-mail must be valid',
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

          this.$store.dispatch('registerUser', user)
            .then(() => {
              this.$router.push('/');
            })
            .catch(() => {});
        }
      },
    },
  };
</script>

<style>

</style>
