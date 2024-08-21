import httpClient from "./http.client";
import firebaseConfig from "../env/firebase-config.json";

//const BASE_URL = `${firebaseConfig.databaseURL}/futebol-market/[url].json`;
const BASE_URL = `${firebaseConfig.databaseURL}/[url].json`;

export default function RealtimeDatabaseHttpClient() {
  const client = httpClient();

  async function get(url: string): Promise<any> {
    try {
      const urlMount = `${BASE_URL.replace("[url]", url)}`;
      const response = await client.get(urlMount);

      return response;
    } catch (error) {
      console.error("An error occurred while fetching the data:", error);
      throw error;
    }
  }

  async function post(url: string, data: any): Promise<any> {
    try {
      const urlMount = `${BASE_URL.replace("[url]", url)}`;

      return await client.post(urlMount, data);
    } catch (error) {
      console.error("An error occurred while posting the data:", error);
      throw error;
    }
  }

  return {
    get,
    post,
  };
}
