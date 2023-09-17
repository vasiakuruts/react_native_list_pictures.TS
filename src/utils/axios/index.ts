import axios from "axios";

export const unsplashApi = axios.create({
  baseURL: "https://api.unsplash.com/",
  timeout: 1000,
  headers: {
    "X-Custom-Header": "foobar",
    Authorization: "Client-ID z8nCvXIdoo-X4-Ph2uvAZ0IJl0cgo4TNpLVttwSUo7Y",
  },
});
