<template>
    <div>
        <h4>{{ currentResult.resultHeader }}</h4>
        <p>
            {{ currentResult.textResult }}
        </p>
    </div>
</template>

<script>
    export default {
        props: {
            results: {
                type: Array,
                required: true
            },
            points: {
                type: Number,
                required: true
            }
        },
        computed: {
            currentResult() {
                let currentResult;
                this.results.forEach(e => {
                    console.log(e.pointsRange[0], e.pointsRange[1]);
                    if(e.pointsRange[0] <= this.points && e.pointsRange[1] >= this.points){
                        console.log(e.pointsRange[0], e.pointsRange[1]);
                        currentResult = e;
                    }
                })
                console.log(currentResult);

                return currentResult;
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>