const QUESTIONS = [
    {
        question: 'Test question 1',
        answers: [
            { ansv: 'Yes, i like it', points: 3, isChoised: false},
            { ansv: 'No, i dissaper', points: 1, isChoised: false },
            { ansv: 'Yes, i don\'t know what type)', points: 2, isChoised: false },
            { ansv: 'I dont know who it was!', points: 0, isChoised: false }
        ]
    },
    {
        question: 'Test question 2',
        answers: [
            { ansv: 'Yes', points: 3, isChoised: false },
            { ansv: 'No, i do not sure', points: 1, isChoised: false },
            { ansv: 'Yes, i do not sure', points: 2, isChoised: false },
            { ansv: 'I dont know', points: 0, isChoised: false }
        ]
    }
]

const RESULTS = [
    {
        resultHeader: 'Result 1',
        textResult: 'Some text',
        pointsRange: [0, 20]
    },
    {
        resultHeader: 'Result 2',
        textResult: 'Some text',
        pointsRange: [21, 40]
    },
    {
        resultHeader: 'Result 3',
        textResult: 'Some text',
        pointsRange: [41, 60]
    }
]

export { QUESTIONS, RESULTS };