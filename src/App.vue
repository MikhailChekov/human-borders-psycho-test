<template>
    <div class="wrapper">
        <div class="container">
            <div class="main-title">Тест на психологические границы</div>
            <Question v-if="isGoing" :questions="questions" @finish="isGoing = !isGoing" />
            <Result v-else :results="results" />
        </div>
    </div>
</template>

<script>
import { QUESTIONS, RESULTS } from '@/constants';

import Question from '@/components/Question.vue';
import Result from '@/components/Result.vue';

export default {
    data: function() {
        return {
            isGoing: true,
            questions: QUESTIONS,
            results: RESULTS,
        };
    },
    components: {
        Question,
        Result,
    },
};
</script>

<style lang="scss">
$mw: 970px;

body {
    font-family: 'Roboto', sans-serif;
    background-color: #0067B6;
    color: #fff;
}

li{
    list-style-type: none;
}

a{
    text-decoration: none;
}
.wrapper {
    width: 100%;
    min-height: 100%;
    overflow: hidden;
    position: relative;
}
.container {
    max-width: $mw;
    margin: 0 auto;
    padding-left: 10px;
    padding-right: 10px;
    text-align: center;
    @media (max-width: 400px) {
        padding-left: 5px;
        padding-right: 5px;
    }
}
.main-title {
    font-size: 18px;
    color: #171717;
    @media (max-width: 992px) {
        font-size: 16px;
    }
}
</style>
