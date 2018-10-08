<template>
  <v-app>
    <v-content>
      <v-container fluid>
        <v-layout align-center>
          <v-flex xs12 sm8 md4>
            <table>
              <thead>
              <tr>
                <th v-for="a in 10">
                  Name
                  <span class="arrow">
          </span>
                </th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td v-for="a in 10">
                 Data
                </td>
              </tr>
              </tbody>
            </table>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    name: 'DataTable',
  };
</script>

<style scoped>

  table {
    border: 2px solid #3f51b5;
    border-radius: 3px;
    background-color: #fff;
  }

  th {
    background-color: #3f51b5;
    color: #ffffff;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  td {
    background-color: #f9f9f9;
  }

  th, td {
    min-width: 120px;
    padding: 10px 20px;
  }

  th.active {
    color: #fff;
  }

  th.active .arrow {
    opacity: 1;
  }

  .arrow {
    display: inline-block;
    vertical-align: middle;
    width: 0;
    height: 0;
    margin-left: 5px;
    opacity: 0.66;
  }

  .arrow.asc {
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-bottom: 4px solid #fff;
  }

  .arrow.dsc {
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid #fff;
  }
</style>
