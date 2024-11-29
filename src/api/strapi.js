const API_URL = "https://dicapta-strapi-app-production.up.railway.app/api";

export const AddNewslettersSubscription = async (email) => {
  try {
    const url = new URL(`${API_URL}/newsletter-subscriptions`);
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          email: email,
        },
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json(); // Parse the JSON data
    return data;
  } catch (error) {
    console.error("Error fetching newsletters subscription:", error);
    throw error;
  }
};

export const getNewsletters = async () => {
  try {
    const url = new URL(`${API_URL}/newsletters`);
    url.searchParams.append("populate", "*");
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json(); // Parse the JSON data
    return data;
  } catch (error) {
    console.error("Error getting newsletters:", error);
    throw error;
  }
};
