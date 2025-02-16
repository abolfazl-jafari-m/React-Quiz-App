import axios from "axios";


export async function getQuestions(count: number, category: number, difficulty: string) {
    const result = await axios.get(`https://opentdb.com/api.php?amount=${count}&category=${category}&difficulty=${difficulty}&type=multiple`);
    return result.data.results;
}