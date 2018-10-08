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
                <v-form>
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
                                name="login"
                                label="Username"
                                type="text"
                                :rules="nameRules"
                                required
                                :counter="15">
                  </v-text-field>
                  <v-text-field id="password"
                                prepend-icon="lock"
                                name="password"
                                label="Password"
                                type="password"
                                :rules="passwordRules"
                                required>
                  </v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn color="primary">Register</v-btn>
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
      firstName: '',
      lastName: '',
      username: '',
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
