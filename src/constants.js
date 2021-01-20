const QUESTIONS = [
    {
        question: 'Test question 1',
        answers: [
            { ansv: 'Yes, i like it', points: 3 },
            { ansv: 'No, i dissaper', points: 1 },
            { ansv: 'Yes, i don\'t know what type)', points: 2 },
            { ansv: 'I dont know who it was!', points: 0 }
        ]
    },
    {
        question: 'Test question 2',
        answers: [
            { ansv: 'Yes', points: 3 },
            { ansv: 'No, i do not sure', points: 1 },
            { ansv: 'Yes, i do not sure', points: 2 },
            { ansv: 'I dont know', points: 0 }
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