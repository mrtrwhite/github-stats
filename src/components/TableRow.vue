<template>
    <div class="table-row">
        <div class="table-cell">{{ item.name }}</div>
        <div class="table-cell">{{ item.stars }}</div>
        <div class="table-cell">{{ item.forks }}</div>
        <div class="table-cell">{{ date }}</div>
    </div>
</template>

<script>
import moment from 'moment';

export default {
    data () {
        return {}
    },
    props: ['item'],
    computed: {
        date() {
            if(!this.item.lastCommitDate) {
                return;
            }

            return moment(this.item.lastCommitDate).format('Do MMMM YYYY');
        }
    }
}
</script>