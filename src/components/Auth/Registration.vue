<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Register form</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form v-model="valid" ref="form" lazy-validation>
                  <v-text-field prepend-icon="person"
                                name="login"
                                label="First name"
                                type="text"
                                v-model="firstName"
                                :rules="nameRules"
                                required
                                :counter="30">
                  </v-text-field>
                  <v-text-field prepend-icon="person"
                                name="login"
                                label="Last name"
                                type="text"
                                v-model="lastName"
                                :rules="nameRules"
                                required
                                :counter="30">
                  </v-text-field>
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
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 15 || 'Name must be less than 15 characters',
      ],
      passwordRules: [
        v => !!v || 'Password is required',
        v => v.length >= 5 || 'Password must be more than 5 characters',
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
  .application--wrap {
    min-height: auto;
  }
</style>
