<template>
    <div class="table-row">
        <div class="table-cell">{{ item.name }}</div>
        <div class="table-cell">{{ item.stars }}</div>
        <div class="table-cell">{{ item.forks }}</div>
        <div class="table-cell">{{ lastCommitDate }}</div>
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
        lastCommitDate() {
            if(!this.item.commits[0]) {
                return;
            }

            return moment(this.item.commits[0].commit.committer.date).format('Do MMMM YYYY');
        }
    }
}
</script>