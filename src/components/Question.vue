<template>
    <div class="test">
        <a class="test__exit-btn" :style="{ 'background-image': `url(${Close})` }" href=""></a>
        <div class="test__progress">
            {{ questionIndex + 1 }}<span>/{{ questions.length }}</span>
        </div>
        <h1 class="test__question-title">
            {{ questionIndex + 1 }}. <span>{{ currentQuestion.question }}</span>
        </h1>
        <ul class="test__list">
            <li v-for="(answer, i) in currentQuestion.answers" :key="i" class="test__answer">
                <a href="" @click.prevent="clickHandler"> {{ answer.ansv }} </a>
            </li>
        </ul>
    </div>
</template>

<script>
import Close from '../assets/img/close.svg';

console.log(Close);

export default {
    data() {
        return {
            questionIndex: 0,
            Close,
        };
    },
    props: ['questions'],
    methods: {
        clickHandler() {
            if (this.questionIndex < this.questions.length - 1) {
                //show active before change Timeout
                setTimeout(() => {
                    this.questionIndex++;
                }, 500)
            } else {
                this.$emit('finish');
            }
        },
    },
    computed: {
        currentQuestion() {
            let currentQuestion = this.questions[this.questionIndex];
            return currentQuestion;
        },
    },
};
</script>

<style lang="scss" scoped>
.test {
    // .test__progress
    &__progress {
        color: #3a1d1d;
        span{
            color: #fff;
        }
        position: absolute;
        top: 20px;
        left: 30px;
        font-size: 30px;
        @media (max-width: 400px) {
            top: 30px;
            left: 10px;
            font-size: 26px;
        }
    }

    // .test__list
    // &__list {
    // }

    // .test__answer
    &__answer {
        margin-bottom: 20px;
        @media (max-width: 400px) {
            margin-bottom: 10px;
        }
        //TODO: animation on click
        a {
            color: #fff;
            padding: 10px 30px;
            text-align: left;
            display: block;
            font-size: 26px;
            &:active {
                color: #ac4672;
            }
            &:hover {
                color: #c6aba4;
            }
            &:visited {
                color: #fff;
            }
            @media (max-width: 992px) {
                font-size: 20px;
            }
        }
        
    }

    &__question-title {
        margin: 20px 0;
        font-size: 30px;
        @media (max-width: 992px) {
            font-size: 26px;
        }
        @media (max-width: 400px) {
            margin: 40px 0;
            font-size: 26px;
        }
    }

    &__exit-btn {
        display: block;
        height: 25px;
        width: 25px;
        // background-image: url(../assets/img/close.svg);
        background-repeat: no-repeat;
        position: absolute;
        z-index: 4;
        top: 20px;
        right: 30px;
        opacity: 0.3;
        cursor: pointer;
        @media (max-width: 400px) {
            top: 30px;
            right: 10px;
        }
    }

    &__large-btn {
        color: #FFFFFF;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        z-index: 1;
        max-width: 250px;
        padding: 0 22px;
        height: 58px;
        margin-top: 10px;
        margin-bottom: 10px;
        border-radius: 5px;
        font-size: 18px;
        line-height: 1;
        text-decoration: none;
        font-weight: 600;
        white-space: nowrap;
        text-align: center;
        border: none;
        cursor: pointer;
        span {
            background-image: url(../assets/img/arrow_left.svg);
            width: 25px;
            top: 0;
            left: calc(50% - 13px);
            position: absolute;
            height: 100%;
            background-position-y: center;
            background-repeat: no-repeat;
        }
    }
}
</style>
