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
              <div class="table-actions">
                <div class="show-counter">
                  <label for="counter">Show</label>
                  <input type="number"
                         class="show-input"
                         id="counter"
                         value="10"
                         min="1"
                         autofocus
                         v-model="showCounter">
                  entries
                </div>
                <div class="search">
                  <label for="search">Search:</label>
                  <input type="search"
                         id="search"
                         class="search-input"
                         placeholder="search by name field"
                         v-model="searchQuery">
                </div>
              </div>
              <table>
                <thead>
                <tr>
                  <th v-for="heading of getTableHeadings"
                      :key="heading"
                      @click="sortByKey(heading)">
                    {{heading}}
                    <span class="arrow"
                          :class="sortField.includes(heading) ? 'asc' : 'dsc'"></span>
                  </th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(data, index) in getDataCount"
                    :key="index">
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
              <v-pagination
                v-if="!searchQuery"
                v-model="page"
                :length="getPageLength"
                total-visible="10"
              ></v-pagination>
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
    data() {
      return {
        showCounter: 10,
        page: 1,
        minValue: 0,
        searchQuery: '',
        sortKey: '',
        sortField: [],
      };
    },
    mounted() {
      this.$store.dispatch('getDataFromAPI');
    },
    computed: {
      getDataCount() {
        const dataList = this.$store.getters.getDataList;
        this.minValue = this.showCounter * (this.page - 1);
        if (this.searchQuery) {
          return dataList.slice(0, dataList.length).filter((person) => {
            if (person.name.toLowerCase().indexOf(this.searchQuery.toLowerCase()) !== -1) {
              return person;
            }
            return false;
          });
        }
        if (this.minValue > dataList.length) {
          this.page = this.getPageLength;
          this.minValue = (this.showCounter * (this.page)) - Math.floor(dataList.length / this.getPageLength);
        }
        return dataList.slice(this.minValue, this.showCounter * this.page);
      },
      getDataList() {
        return this.$store.getters.getDataList;
      },
      getTableHeadings() {
        return this.$store.getters.getTableHeadings;
      },
      loading() {
        return this.$store.getters.loading;
      },
      getPageLength() {
        return Math.floor(this.getDataList.length / this.showCounter);
      },
    },
    methods: {
      sortByKey(key) {
        if (this.sortField.length !== 0) {
          this.sortField = [];
        } else {
          this.sortField.push(key);
        }
        const data = this.getDataList;
        let result = [];
        result = data.sort((a, b) => (b[key] > a[key] ? 1 : -1));
        this.$store.commit('setDataList', result);
      },
    },
  };
</script>

<style scoped>
  .table-actions {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
  }

  .show-input {
    background-color: #ffffff;
    padding: 10px;
    width: 70px;
    margin: 0 10px;
  }

  .search-input {
    padding: 10px;
    margin-left: 10px;
    background-color: #ffffff;
  }

  table {
    width: 100%;
    border: 2px solid #3f51b5;
    border-radius: 3px;
    background-color: #ffffff;
    margin-bottom: 20px;
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
    color: #ffffff;
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
    border-bottom: 4px solid #ffffff;
  }

  .arrow.dsc {
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid #ffffff;
  }
</style>
