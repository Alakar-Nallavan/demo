<template>
    <section>
        <b-table
            :data="data"
            :columns="columns">
        </b-table>
    </section>
</template>

 <script>
    export default {
        data() {
            return {
                data: [
                    { 'title': '', 'description': '', 'tag keyword': '', 'image': '', 'video': '' },
                    { 'title': '', 'description': '', 'tag keyword': '', 'image': '', 'video': '' },
                    { 'title': '', 'description': '', 'tag keyword': '', 'image': '', 'video': '' },
                    { 'title': '', 'description': '', 'tag keyword': '', 'image': '', 'video': '' },
                    { 'title': '', 'description': '', 'tag keyword': '','image':'', 'video': '' }
                ],
                columns: [
                    {
                        field: 'title',
                        label: 'title',
                        //width: '100',
                        //numeric: true,
                        searchable: true,
                    },
                    {
                        field: 'description',
                        label: 'description',
                        searchable: true,
                    },
                    {
                        field: 'tag keyword',
                        label: 'tag keyword',
                        searchable: true,
                    },
                    {
                        field: 'image',
                        label: 'image',
                        centered: true
                    },
                    {
                        field: 'vedio',
                        label: 'vedio',
                    }
                ]
            }
        }
    }
</script>
