<template>
    <b-table :data="data" :columns="columns"></b-table>
</template>

<script>
    export default {
        data() {
            return {
                data: [
                    { 'Name':'' },
                    { 'Name': '' },
                    { 'Name': ''},
                    { 'Name': '' },
                    { 'Name':'' }
                ],
                columns: [
                    {
                        field: 'Name',
                        label: 'name',
                        
                    },
                    
                ]
            }
        }
    }
</script>
