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
            
            <div class="control is-flex">
                <b-switch v-model="isPaginated">Paginated</b-switch>
            </div>
            
           
            
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
            default-sort="user.first_title"
            aria-next-label="Next page"
            aria-previous-label="Previous page"
            aria-page-label="Page"
            aria-current-label="Current page">

            <template slot-scope="props">
                <b-table-column field="id" label="ID" width="40" sortable numeric>
                    {{ props.row.id }}
                </b-table-column>

                <b-table-column field="user.title" label=" title" sortable>
                    {{ props.row.user.title }}
                </b-table-column>

                <b-table-column field="user.description" label="description" sortable>
                    {{ props.row.user.description }}
                </b-table-column>

                <b-table-column field="date" label="Date" sortable centered>
                    <span class="tag is-success">
                        {{ new Date(props.row.date).toLocaleDateString() }}
                    </span>
                </b-table-column>
                <b-table-column field="image" label="image" sortable>
                    {{ props.row.image }}
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
                <span>action </span>
                <b-icon icon="menu-down"></b-icon>
            </button>

            <b-dropdown-item aria-role="listitem" href="">edit</b-dropdown-item>
            
            <b-dropdown-item aria-role="listitem" >broadcast notification</b-dropdown-item>
        </b-dropdown>
</span>
                </b-table-column>

                
            </template>
        </b-table>
    </section>
</template>

<script>
    //const data = require('@/data/sample.json')
    const data = [{"id":1,"user":{"title":"Jesse","description":"Simmons"},"date":"2016/10/15 13:43:27","status":"Male"},
{"id":2,"user":{"title":"John","description":"43657348"}},
{"id":3,"user":{"title":"Tina","description":"46578348"}},
{"id":4,"user":{"title":"Clarence","description":"56t73657"}},
{"id":5,"user":{"title":"Anne","description":"3467643"},"date":"2016/12/06 14:38:38","status":"Female"},
{"id":6,"user":{"title":"Sara","description":"65735844"},"date":"2016/09/23 18:50:04","status":"Female"},
{"id":7,"user":{"title":"Anthony","description":"573657465"},"date":"2016/08/30 23:49:38","status":"Male"},
{"id":8,"user":{"title":"Andrew","description":"578375838"},"date":"2016/11/20 14:57:47","status":"Male"},
{"id":9,"user":{"title":"Russell","description":"563875"},"date":"2016/07/13 09:29:49","status":"Male"},
{"id":10,"user":{"title":"Lori","description":"6538755"},"date":"2016/12/09 01:44:05","status":"Female"},
{"id":11,"user":{"title":"Ronald","description":"65376544"},"date":"2016/12/04 02:23:48","status":"Male"},
{"id":12,"user":{"title":"Michael","description":"567365738"},"date":"2016/07/27 13:28:15","status":"Male"},
{"id":13,"user":{"title":"George","description":"5673657"},"date":"2017/03/07 12:26:52","status":"Male"},
{"id":14,"user":{"title":"Eric","description":"5647657"},"date":"2016/06/07 05:41:52","status":"Male"},
{"id":15,"user":{"title":"Juan","description":"456746575"},"date":"2017/02/01 04:56:34","status":"Male"},
{"id":16,"user":{"title":"Lori","description":"45t7656"},"date":"2017/01/26 11:50:04","status":"Female"},
{"id":17,"user":{"title":"Lori","description":"4765756"},"date":"2016/05/01 10:00:56","status":"Female"},
{"id":18,"user":{"title":"Charles","description":"5674668374"},"date":"2016/05/31 06:43:30","status":"Male"},
{"id":19,"user":{"title":"Henry","description":"567575484"},"date":"2016/09/27 16:15:44","status":"Male"},
{"id":20,"user":{"title":"Albert","description":"4657485"},"date":"2016/08/08 05:29:24","status":"Male"},
{"id":21,"user":{"title":"Ruby","description":"4658758"},"date":"2017/04/01 12:04:39","status":"Female"},
{"id":22,"user":{"title":"Jesse","description":"Warren"},"date":"2016/08/20 01:36:38","status":"Male"},
{"id":23,"user":{"title":"Carlos","description":"Ferguson"},"date":"2016/05/31 10:40:29","status":"Male"},
{"id":24,"user":{"title":"Melissa","description":"Peters"},"date":"2016/07/23 00:41:54","status":"Female"},
{"id":25,"user":{"title":"Arthur","description":"Garza"},"date":"2017/03/11 14:11:37","status":"Male"},
{"id":26,"user":{"title":"Joe","description":"Berry"},"date":"2016/07/09 15:16:56","status":"Male"},
{"id":27,"user":{"title":"Joseph","description":"Bishop"},"date":"2016/10/04 19:44:54","status":"Male"},
{"id":28,"user":{"title":"Sarah","description":"Harper"},"date":"2016/09/23 05:09:11","status":"Female"},
{"id":29,"user":{"title":"Christopher","description":"Fuller"},"date":"2016/04/12 00:05:35","status":"Male"},
{"id":30,"user":{"title":"Alan","description":"Mendoza"},"date":"2016/04/22 10:48:02","status":"Male"},
{"id":31,"user":{"title":"James","description":"Davis"},"date":"2017/01/16 15:17:03","status":"Male"},
{"id":32,"user":{"title":"Scott","description":"Welch"},"date":"2016/10/04 23:31:51","status":"Male"},
{"id":33,"user":{"title":"Mildred","description":"Myers"},"date":"2016/11/23 13:46:18","status":"Female"},
{"id":34,"user":{"title":"Victor","description":"Martinez"},"date":"2016/04/06 17:05:07","status":"Male"},
{"id":35,"user":{"title":"Susan","description":"Medina"},"date":"2016/12/09 10:33:37","status":"Female"}]

    export default {
        data() {
            return {
                data,
                isPaginated: true,
                isPaginationSimple: false,
                paginationPosition: 'bottom',
                defaultSortDirection: 'asc',
                sortIcon: 'arrow-up',
                sortIconSize: 'is-small',
                currentPage: 1,
                perPage: 5
            }
        }
    }
</script>
