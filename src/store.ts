import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
  apiUrlBase: "https://www.googleapis.com/books/v1/volumes?q=",
  apiKey: "AIzaSyBJRWR4g442X0LJRco_-qyM-c2tAx_hMqs",
  searchResults: [],
  //   loading: true
});
