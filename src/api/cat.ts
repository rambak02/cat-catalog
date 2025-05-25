import { TCat } from "../types/model";

const baseUrl = "https://api.thecatapi.com/v1/images/search?order=ASC&"


export async function getCats(page: number = 0): Promise<TCat[]> {
    const response = await fetch(baseUrl + `page=${page}&limit=10`);
    const data: TCat[] = await response.json();
    return data;
  }
  