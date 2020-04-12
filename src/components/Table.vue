<template>
    <div class="table">
        <div class="table-row table-headers">
            <div class="table-cell name">Name</div>
            <div class="table-cell stars">Stars</div>
            <div class="table-cell forks">Forks</div>
            <div class="table-cell last-commit">Last Commit</div>
            <div class="table-cell last-release">Last Release</div>
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
    .table-headers {
        font-weight: bold;
    }
    .table-row {
        display: flex;
    }
    .table-cell {
        padding: 10px;
    }
    .name {
        flex: 0 0 40%;
        width: 40%;
        word-wrap: break-word;
        display: inline-block;
    }
    .stars,
    .forks {
        flex: 0 0 10%;
        width: 10%;
    }
    .last-commit,
    .last-release {
        flex: 0 0 20%;
        width: 20%;
    }
    
    @media screen and (max-width: 800px) {
        .name {
            flex: 0 0 50%;
            width: 50%;
        }
        .stars {
            flex: 0 0 20%;
            width: 20%;
        }
        .last-commit {
            flex: 0 0 30%;
            width: 30%;
        }
        .forks,
        .last-release {
            display: none;
        }
    }
    
    @media screen and (max-width: 480px) {
        .name {
            flex: 0 0 70%;
            width: 70%;
        }
        .stars {
            display: none;
        }
        .last-commit {
            flex: 0 0 30%;
            width: 30%;
        }
    }
</style>