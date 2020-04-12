<template>
    <div class="table-row">
        <div class="table-cell name">{{ item.name }}</div>
        <div class="table-cell stars">{{ item.stars }}</div>
        <div class="table-cell forks">{{ item.forks }}</div>
        <div class="table-cell last-commit">{{ lastCommit }}</div>
        <div class="table-cell last-release">{{ lastRelease }}</div>
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
        lastCommit() {
            if(!this.item.lastCommitDate) {
                return;
            }

            return moment(this.item.lastCommitDate).format('Do MMMM YYYY');
        },
        lastRelease() {
            if(!this.item.lastReleaseDate) {
                return;
            }

            return moment(this.item.lastReleaseDate).format('Do MMMM YYYY');
        }
    }
}
</script>