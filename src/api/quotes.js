import axios from "axios";

export default axios.create({
  baseURL: "http://comicquotes.herokuapp.com/",
});
