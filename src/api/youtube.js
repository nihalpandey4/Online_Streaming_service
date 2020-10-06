import Axios from "axios";

const KEY = "AIzaSyDmRHUWxgH8UPeXBfGObiiAVCf-_qQVb_k";

const youtube = Axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
});

export default (term) => {
  const list = youtube.get("/search", {
    params: {
      part: "snippet",
      maxResults: 10,
      key: KEY,
      q: term,
    },
  });
  return list;
};
