<template>
  <section>
    <b-field grouped group-multiline>
      <b-select v-model="defaultSortDirection">
        <option value="asc">Default sort direction: ASC</option>
        <option value="desc">Default sort direction: DESC</option>
      </b-select>
      <b-select v-model="perPage" :disabled="!isPaginated">
        <option value="5">5 per page</option>
        <option value="10">10 per page</option>
        <option value="15">15 per page</option>
        <option value="20">20 per page</option>
      </b-select>
      <div class="control">
        <button class="button" @click="currentPage = 2" :disabled="!isPaginated">Set page to 2</button>
      </div>
      <div class="control is-flex">
        <b-switch v-model="isPaginated">Paginated</b-switch>
      </div>
      <div class="control is-flex">
        <b-switch v-model="isPaginationSimple" :disabled="!isPaginated">Simple pagination</b-switch>
      </div>
      <b-select v-model="paginationPosition" :disabled="!isPaginated">
        <option value="bottom">bottom pagination</option>
        <option value="top">top pagination</option>
        <option value="both">both</option>
      </b-select>
    </b-field>

    <b-table
      :data="data"
      :paginated="isPaginated"
      :per-page="perPage"
      :current-page.sync="currentPage"
      :pagination-simple="isPaginationSimple"
      :pagination-position="paginationPosition"
      :default-sort-direction="defaultSortDirection"
      :sort-icon="sortIcon"
      :sort-icon-size="sortIconSize"
      default-sort="user.name
        "
      aria-next-label="Next page"
      aria-previous-label="Previous page"
      aria-page-label="Page"
      aria-current-label="Current page"
    >
      <template slot-scope="props">
        <b-table-column field="id" label="ID" width="40" sortable numeric>{{ props.row.id }}</b-table-column>

        <b-table-column field="user.name
            " label="name" sortable>
          {{ props.row.user.name
          }}
        </b-table-column>

        <b-table-column field="user.phone_num
            " label="phone_num" sortable>
          {{ props.row.user.phone_num
          }}
        </b-table-column>

        <b-table-column field="isactive" label="Status" sortable centered>
          <span
            class="tag"
            :class="props.row.isactive==1 ? 'is-success':'is-danger' "
          >{{ props.row.isactive==1 ? 'Active' : 'Inactive' }}</span>
        </b-table-column>

        <b-table-column label="Option">
          <span>
            <b-dropdown aria-role="list">
              <button class="button is-primary" slot="trigger">
                <span>action</span>
                <b-icon icon="menu-down"></b-icon>
              </button>

              <b-dropdown-item aria-role="listitem" href="table">Tagged content</b-dropdown-item>

              <b-dropdown-item aria-role="listitem" @click="confirmCustomDelete">Block</b-dropdown-item>
            </b-dropdown>
          </span>
        </b-table-column>
      </template>
    </b-table>
  </section>
</template>

<script>
//const data = require('@/data/sample.json')
const data = [
  {
    id: 1,
    user: { name: "Jesse", phone_num: "Simmons" },
    date: "2016/10/15 13:43:27",
    gender: "Male"
  },
  { id: 2, user: { name: "John", phone_num: "43657348" } },
  { id: 3, user: { name: "Tina", phone_num: "46578348" } },
  { id: 4, user: { name: "Clarence", phone_num: "56t73657" } },
  {
    id: 5,
    user: { name: "Anne", phone_num: "3467643" },
    date: "2016/12/06 14:38:38",
    gender: "Female"
  },
  {
    id: 6,
    user: { name: "Sara", phone_num: "65735844" },
    date: "2016/09/23 18:50:04",
    gender: "Female"
  },
  {
    id: 7,
    user: { name: "Anthony", phone_num: "573657465" },
    date: "2016/08/30 23:49:38",
    gender: "Male"
  },
  {
    id: 8,
    user: { name: "Andrew", phone_num: "578375838" },
    date: "2016/11/20 14:57:47",
    gender: "Male"
  },
  {
    id: 9,
    user: { name: "Russell", phone_num: "563875" },
    date: "2016/07/13 09:29:49",
    gender: "Male"
  },
  {
    id: 10,
    user: { name: "Lori", phone_num: "6538755" },
    date: "2016/12/09 01:44:05",
    gender: "Female"
  },
  {
    id: 11,
    user: { name: "Ronald", phone_num: "65376544" },
    date: "2016/12/04 02:23:48",
    gender: "Male"
  },
  {
    id: 12,
    user: { name: "Michael", phone_num: "567365738" },
    date: "2016/07/27 13:28:15",
    gender: "Male"
  },
  {
    id: 13,
    user: { name: "George", phone_num: "5673657" },
    date: "2017/03/07 12:26:52",
    gender: "Male"
  },
  {
    id: 14,
    user: { name: "Eric", phone_num: "5647657" },
    date: "2016/06/07 05:41:52",
    gender: "Male"
  },
  {
    id: 15,
    user: { name: "Juan", phone_num: "456746575" },
    date: "2017/02/01 04:56:34",
    gender: "Male"
  },
  {
    id: 16,
    user: { name: "Lori", phone_num: "45t7656" },
    date: "2017/01/26 11:50:04",
    gender: "Female"
  },
  {
    id: 17,
    user: { name: "Lori", phone_num: "4765756" },
    date: "2016/05/01 10:00:56",
    gender: "Female"
  },
  {
    id: 18,
    user: { name: "Charles", phone_num: "5674668374" },
    date: "2016/05/31 06:43:30",
    gender: "Male"
  },
  {
    id: 19,
    user: { name: "Henry", phone_num: "567575484" },
    date: "2016/09/27 16:15:44",
    gender: "Male"
  },
  {
    id: 20,
    user: { name: "Albert", phone_num: "4657485" },
    date: "2016/08/08 05:29:24",
    gender: "Male"
  },
  {
    id: 21,
    user: { name: "Ruby", phone_num: "4658758" },
    date: "2017/04/01 12:04:39",
    gender: "Female"
  },
  {
    id: 22,
    user: { name: "Jesse", phone_num: "Warren" },
    date: "2016/08/20 01:36:38",
    gender: "Male"
  },
  {
    id: 23,
    user: { name: "Carlos", phone_num: "Ferguson" },
    date: "2016/05/31 10:40:29",
    gender: "Male"
  },
  {
    id: 24,
    user: { name: "Melissa", phone_num: "Peters" },
    date: "2016/07/23 00:41:54",
    gender: "Female"
  },
  {
    id: 25,
    user: { name: "Arthur", phone_num: "Garza" },
    date: "2017/03/11 14:11:37",
    gender: "Male"
  },
  {
    id: 26,
    user: { name: "Joe", phone_num: "Berry" },
    date: "2016/07/09 15:16:56",
    gender: "Male"
  },
  {
    id: 27,
    user: { name: "Joseph", phone_num: "Bishop" },
    date: "2016/10/04 19:44:54",
    gender: "Male"
  },
  {
    id: 28,
    user: { name: "Sarah", phone_num: "Harper" },
    date: "2016/09/23 05:09:11",
    gender: "Female"
  },
  {
    id: 29,
    user: { name: "Christopher", phone_num: "Fuller" },
    date: "2016/04/12 00:05:35",
    gender: "Male"
  },
  {
    id: 30,
    user: { name: "Alan", phone_num: "Mendoza" },
    date: "2016/04/22 10:48:02",
    gender: "Male"
  },
  {
    id: 31,
    user: { name: "James", phone_num: "Davis" },
    date: "2017/01/16 15:17:03",
    gender: "Male"
  },
  {
    id: 32,
    user: { name: "Scott", phone_num: "Welch" },
    date: "2016/10/04 23:31:51",
    gender: "Male"
  },
  {
    id: 33,
    user: { name: "Mildred", phone_num: "Myers" },
    date: "2016/11/23 13:46:18",
    gender: "Female"
  },
  {
    id: 34,
    user: { name: "Victor", phone_num: "Martinez" },
    date: "2016/04/06 17:05:07",
    gender: "Male"
  },
  {
    id: 35,
    user: { name: "Susan", phone_num: "Medina" },
    date: "2016/12/09 10:33:37",
    gender: "Female"
  },
  {
    id: 36,
    user: { name: "Judy", phone_num: "Long" },
    date: "2016/07/26 16:19:04",
    gender: "Female"
  },
  {
    id: 37,
    user: { name: "Joan", phone_num: "Myers" },
    date: "2016/09/22 04:55:54",
    gender: "Female"
  },
  {
    id: 38,
    user: { name: "Rachel", phone_num: "Gonzales" },
    date: "2016/07/15 13:56:38",
    gender: "Female"
  },
  {
    id: 39,
    user: { name: "Roger", phone_num: "Hunt" },
    date: "2016/08/14 10:43:11",
    gender: "Male"
  },
  {
    id: 40,
    user: { name: "Dorothy", phone_num: "Howard" },
    date: "2016/06/19 05:34:49",
    gender: "Female"
  },
  {
    id: 41,
    user: { name: "Eugene", phone_num: "Lynch" },
    date: "2016/12/24 08:19:24",
    gender: "Male"
  },
  {
    id: 42,
    user: { name: "Kathy", phone_num: "Webb" },
    date: "2017/04/01 21:09:05",
    gender: "Female"
  },
  {
    id: 43,
    user: { name: "Antonio", phone_num: "White" },
    date: "2017/02/10 06:51:20",
    gender: "Male"
  },
  {
    id: 44,
    user: { name: "Louis", phone_num: "Spencer" },
    date: "2016/10/08 02:20:22",
    gender: "Male"
  },
  {
    id: 45,
    user: { name: "Andrea", phone_num: "Marshall" },
    date: "2016/09/04 10:59:57",
    gender: "Female"
  },
  {
    id: 46,
    user: { name: "Eugene", phone_num: "Sims" },
    date: "2017/03/15 06:39:48",
    gender: "Male"
  },
  {
    id: 47,
    user: { name: "Mildred", phone_num: "Gibson" },
    date: "2016/04/18 06:43:54",
    gender: "Female"
  },
  {
    id: 48,
    user: { name: "Joan", phone_num: "Arnold" },
    date: "2016/12/16 04:52:23",
    gender: "Female"
  },
  {
    id: 49,
    user: { name: "Jesse", phone_num: "Schmidt" },
    date: "2016/06/11 02:44:33",
    gender: "Male"
  },
  {
    id: 50,
    user: { name: "David", phone_num: "Frazier" },
    date: "2017/02/15 21:46:30",
    gender: "Male"
  },
  {
    id: 51,
    user: { name: "Nicholas", phone_num: "Howell" },
    date: "2016/11/01 15:08:31",
    gender: "Male"
  },
  {
    id: 52,
    user: { name: "Douglas", phone_num: "Chapman" },
    date: "2017/02/08 03:33:24",
    gender: "Male"
  },
  {
    id: 53,
    user: { name: "Bruce", phone_num: "Simmons" },
    date: "2016/07/14 12:11:17",
    gender: "Male"
  },
  {
    id: 54,
    user: { name: "Antonio", phone_num: "George" },
    date: "2016/11/07 19:12:55",
    gender: "Male"
  },
  {
    id: 55,
    user: { name: "Chris", phone_num: "Marshall" },
    date: "2016/07/03 12:11:45",
    gender: "Male"
  },
  {
    id: 56,
    user: { name: "Ashley", phone_num: "Hudson" },
    date: "2016/10/14 21:08:05",
    gender: "Female"
  },
  {
    id: 57,
    user: { name: "Alan", phone_num: "Edwards" },
    date: "2017/03/22 21:10:25",
    gender: "Male"
  },
  {
    id: 58,
    user: { name: "George", phone_num: "Clark" },
    date: "2016/04/28 03:15:05",
    gender: "Male"
  },
  {
    id: 59,
    user: { name: "Frank", phone_num: "Porter" },
    date: "2016/09/08 00:48:14",
    gender: "Male"
  },
  {
    id: 60,
    user: { name: "Christopher", phone_num: "Palmer" },
    date: "2016/05/24 08:58:12",
    gender: "Male"
  }
];

export default {
  middleware: ["auth"],
  data() {
    return {
      data,
      isPaginated: true,
      isPaginationSimple: false,
      paginationPosition: "bottom",
      defaultSortDirection: "asc",
      sortIcon: "arrow-up",
      sortIconSize: "is-small",
      currentPage: 1,
      perPage: 5
    };
  },
  methods: {
    confirmCustomDelete() {
      this.$buefy.dialog.confirm({
        title: "block account",
        message: "Are you sure you want to <b>block</b> this account? ",
        confirmText: "Block Account",
        type: "is-danger",
        hasIcon: true,
        onConfirm: () => this.$buefy.toast.open("Account blocked!")
      });
    }
  }
};
</script>
