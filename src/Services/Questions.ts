import axios from "axios";

const BASE_URL = "https://opentdb.com/api.php"


export async function getQuestions(count: number, category: number, difficulty: string) {
    const result = await axios.get(`${BASE_URL}?amount=${count}&category=${category}&difficulty=${difficulty}&type=multiple`);
    return result.data.results;
}