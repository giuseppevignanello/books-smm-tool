import { reactive } from "vue";

export const store = reactive({
  openAITemperature: 0.5,
  openAIUrl: "https://api.openai.com/v1/chat/completions",
  openAIModel: "gpt-3.5-turbo",
  openAIKey: import.meta.env.VITE_OPENAI_KEY,
  apiUrlBase: "https://www.googleapis.com/books/v1/volumes?q=",
  apiKey: import.meta.env.VITE_API_KEY,
  searchResults: [],
  startRange: 0,
  endRange: 3,
  showResults: true,
  titleCounter: 0,
  titles: [
    "It's one of these?",
    "Maybe these?",
    "These?...",
    "Last Chance",
    "",
  ],
  searchOccured: false,
  //   loading: true
});
