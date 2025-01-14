import { defineEventHandler } from "h3";

const API_URL = "https://dicapta-strapi-app-production.up.railway.app/api";

export default defineEventHandler(async () => {
  try {
    const url = new URL(`${API_URL}/newsletters`);
    console.log("API URL testingg:", url.toString());
    url.searchParams.append("populate", "*");
    const response = await $fetch(url.toString());
    return response;
  } catch (error) {
    console.error("Error getting newsletters:", error);
    throw error;
  }
});
