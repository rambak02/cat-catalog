const baseUrl = "https://api.thecatapi.com/v1/images/search?order=ASC&"


export async function getCats(page = 0) {
    const response = await fetch(baseUrl + `page=${page}&limit=10`);
    const data = await response.json();
    return data;
  }
  