<template>
    <div class="table">
        <div class="table-row table-headers">
            <div class="table-cell">Name</div>
            <div class="table-cell">Stars</div>
            <div class="table-cell">Forks</div>
            <div class="table-cell">Last Commit</div>
            <div class="table-cell">Last Release</div>
        </div>
        <TableRow v-for="item in items" :item="item" :key="item.name" />
    </div>
</template>

<script>
import TableRow from './TableRow';

export default {
    data () {
        return {}
    },
    props: ['items'],
    components: {
        TableRow
    }
}
</script>

<style lang="scss">
    .table {
        width: 100%;
    }
    .table-row {
        display: flex;
    }
    .table-cell {
        flex: 1;
        padding: 10px;
    }
</style>