import axios from "axios";

const BASE_CATEGORY_URL = "https://opentdb.com/api_category.php"
export async  function getCategories(){
    const result = await axios.get(BASE_CATEGORY_URL);
    return result.data
}