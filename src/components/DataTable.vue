<template>
  <v-app>
    <v-content>
      <v-container fluid>
        <v-layout align-center>
          <v-flex fluid xs12 sm12 md12>
            <template v-if="loading">
              <v-progress-linear :indeterminate="true"></v-progress-linear>
            </template>
            <template v-else>
                <table>
                  <thead>
                  <tr>
                    <th v-for="heading of getTableHeadings" :key="heading">
                      {{heading}}
                      <span class="arrow">
          </span>
                    </th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="data in getDataList">
                    <td>
                      {{data.name}}
                    </td>
                    <td>
                      {{data.position}}
                    </td>
                    <td>
                      {{data.office}}
                    </td>
                    <td>
                      {{data.age}}
                    </td>
                    <td>
                      {{data.start_date}}
                    </td>
                    <td>
                      {{data.salary}}
                    </td>
                    <td>
                      {{data.currency}}
                    </td>
                  </tr>
                  </tbody>
                </table>
            </template>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    name: 'DataTable',
    mounted() {
      this.$store.dispatch('getDataFromAPI');
    },
    computed: {
      getDataList() {
        return this.$store.getters.getDataList;
      },
      getTableHeadings() {
        return this.$store.getters.getTableHeadings;
      },
      loading() {
        return this.$store.getters.loading;
      },
    },
  };
</script>

<style scoped>

  table {
    width: 100%;
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
