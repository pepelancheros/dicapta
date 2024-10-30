const API_URL = "https://dicapta-strapi-app-production.up.railway.app/api";

export const AddNewslettersSubscription = async (email) => {
  try {
    const response = await fetch(`${API_URL}/newsletter-subscriptions`, {
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
    console.error("Error fetching data:", error);
    throw error;
  }
};
