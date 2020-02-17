<template>
    
<b-table
        :data="filteredData"
        :paginated="isPaginated"
        :per-page="perPage"
        :current-page.sync="currentPage"
        :pagination-simple="isPaginationSimple"
        :pagination-position="paginationPosition"
        :default-sort-direction="defaultSortDirection"
        :sort-icon="sortIcon"
        :sort-icon-size="sortIconSize"
        default-sort="rownumbers"
        aria-next-label="Next page"
        aria-previous-label="Previous page"
        aria-page-label="Page"
        aria-current-label="Current page"
      >
        <template slot-scope="props">
          <!-- <b-table-column
            field="rownumbers"
            label="Sl.No"
            sortable
            numeric
          >{{ props.row.rownumbers }}</b-table-column>-->

          <b-table-column field="cms" label="name" sortable centered>{{ props.row.name }}</b-table-column>
          <b-table-column field="cms" label="ph num" sortable centered>
            <span class="content-hide">{{props.row.description}}</span>
          </b-table-column>

          <b-table-column field="isactive" label="Status" sortable centered>
            <span
              class="tag"
              :class="props.row.isactive==1 ? 'is-success':'is-danger' "
            >{{ props.row.isactive==1 ? 'Active' : 'Inactive' }}</span>
          </b-table-column>

          <b-table-column label="Action">
            <div class="field has-addons">
              <p class="control">
                <b-button
                  :disabled="isLoading"
                  :loading="isLoading"
                  tag="router-link"
                  :to="{ path: '/cms/cms', query: { id: props.row.ids }}"
                  class="button"
                  icon-left="border-color"
                >
                  <!-- <span class="icon is-small">edit</span> -->
                </b-button>
              </p>

              <p class="control" v-if="props.row.del == 0">
                <button @click="DeleteCMS(props.row.ids,props.row.cms)" class="button is-danger">
                  <span class="icon is-small">del</span>
                </button>
              </p>
            </div>
          </b-table-column>
        </template>
        <template slot="empty">NO RECORD FOUND</template>
      </b-table>
      </template>
          