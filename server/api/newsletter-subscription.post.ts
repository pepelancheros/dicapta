import { defineEventHandler, readBody } from "h3";

const API_URL = "https://dicapta-strapi-app-production.up.railway.app/api";

export default defineEventHandler(async (event) => {
  try {
    const url = `${API_URL}/newsletter-subscriptions`;
    const body = await readBody(event);

    const response = await $fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    return response;
  } catch (error) {
    console.error("Error fetching newsletters subscription:", error);
    throw error;
  }
});
