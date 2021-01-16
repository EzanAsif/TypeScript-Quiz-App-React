export type QuestionType = {
    category : string,
    correct_answer : string,
    difficuilty : string,
    incorrect_answers : string[],
    question : string,
    type : string
}

export type Quiz{
    question : string,
    answer : string,
    options : string[]
}