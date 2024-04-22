import RequestException from "./exceptions/request-reception.js";

export async function getJson(url) {
    try {
        const response = await fetch(url);
        const jsonBody = await response.json();
        return jsonBody;
    }
    catch(e) {
        throw new RequestException("Error ao realizar a requesição");
    }
    
}