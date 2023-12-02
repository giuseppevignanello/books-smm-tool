import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
  apiUrlBase: "https://www.googleapis.com/books/v1/volumes?q=",
  apiKey: "AIzaSyBJRWR4g442X0LJRco_-qyM-c2tAx_hMqs",
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
  //   loading: true
});
