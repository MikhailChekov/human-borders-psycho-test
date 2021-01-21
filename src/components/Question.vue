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
            <li 
                v-for="(answer, i) in currentQuestion.answers" 
                :key="i"
                class="test__answer">
                <a href="" 
                    @click.prevent="answerHandler(i)"
                    :class="{ choised: answer.isChoised }"
                > 
                    {{ answer.ansv }} 
                </a>
            </li>
        </ul>
        <button 
            v-if="questionIndex!==0"
            @click="backHandler"
            class="test__large-btn"
        >
            <span :style="{ 'background-image': `url(${Back})` }"></span>
        </button>
    </div>
</template>

<script>
import Close from '@/assets/img/close.svg';
import Back from '@/assets/img/arrow_left.svg';

export default {
    data() {
        return {
            questionIndex: 0,
            Close,
            Back
        };
    },
    props: ['questions'],
    methods: {
        answerHandler(i) {
            //make answer choised
            this.currentQuestion.answers[i].isChoised = true;

            //Check for last question
            if (this.questionIndex < this.questions.length - 1) {
                //Go to next question
                setTimeout(() => {
                    this.questionIndex++;
                }, 500);
            } else {
                //TODO: change logic => Save results every question; Decrease points when back
                let result = 0;
                //Get arrays of answers and sum points to result
                let questions = this.questions.map(e => e.answers);
                questions.forEach(e => {
                    console.log(e);
                    // if(e.isChoised){
                    //     console.log(e.isChoised);
                    //     result += e.points;
                    // }
                });
                console.log(result);

                //Finish test
                setTimeout(() => {
                    

                    // this.$emit('finish', result);
                }, 500);
            }
        },
        //return back to previous question
        backHandler() {
            this.questionIndex--;
            //unchoised the answer :)
            this.currentQuestion.answers = 
                this.currentQuestion.answers.map(e => ({...e, isChoised: false}));
        }

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
    padding: 50px;
    @media (max-width: 700px) {
        padding: 25px;
    }

    @media (max-width: 400px) {
        padding: 10px;
    }

    // .test__progress
    &__progress {
        color: #3a1d1d;
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
    // .test__answer
    &__answer {
        margin-bottom: 20px;
        display: flex;
        @media (max-width: 400px) {
            margin-bottom: 10px;
        }

        a {
            border: 1px solid #111;
            overflow: hidden;
            color: #111;
            background-color: rgba(17, 17, 17, 0.016);
            border-radius: 10px;
            padding: 10px 30px;
            display: inline-block;
            font-size: 26px;

            &.choised {
                transition: all .3s ease 0s;
                color: #fff;
                background: rgb(48, 71, 245);
            }
            @media (max-width: 400px) {
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
        background-color: rgba(17, 17, 17, 0.386);
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        z-index: 1;
        width: 100px;
        padding: 0 22px;
        height: 58px;
        border-radius: 10px;
        // line-height: 1;
        
        // text-align: center;
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

    ul {
        margin: 0;
        padding: 0;
    }
}
</style>
