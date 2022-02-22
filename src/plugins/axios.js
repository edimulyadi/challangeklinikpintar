import axios from "axios";
export default axios.create({
  baseURL: "https://api.staging.klinikpintar.id/hc/open/health-center?page=1&limit=5",
  headers: {
    "X-Medigo-Client-Key": "994e23e67b6cb551a2951f8abaf2aa5265d5c2fb63a5679457a596efb8444270"
  }
});
