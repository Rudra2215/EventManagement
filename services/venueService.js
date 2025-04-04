import axios from "axios";

const API_URL = "http://localhost:5454/api/venues";

// ✅ Get all venues
export const getVenues = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("❌ Error fetching venues:", error);
    throw error;
  }
};

// ✅ Create a new venue
export const createVenue = async (venueData) => {
  try {
    const response = await axios.post(API_URL, venueData, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    console.error("❌ Error creating venue:", error.response?.data || error.message);
    throw error;
  }
};

// ✅ Update a venue
export const updateVenue = async (id, updatedVenue) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, updatedVenue);
    return response.data;
  } catch (error) {
    console.error("❌ Error updating venue:", error.response?.data || error.message);
    throw error;
  }
};

// ✅ Delete a venue
export const deleteVenue = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error("❌ Error deleting venue:", error.response?.data || error.message);
    throw error;
  }
};
