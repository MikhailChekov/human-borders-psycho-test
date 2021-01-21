<template>
    <div>
        <h4>Ваш результат</h4>
        <p>
            points: {{points}}
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
                type: Array,
                required: true
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>