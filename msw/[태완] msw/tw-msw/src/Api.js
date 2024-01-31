import fetch from "node-fetch";

const api = {
  get: async (url) => await fetch(url),
  post: async (url, data) =>
    await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }),
  put: async (url, data) =>
    await fetch(url, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }),
  delete: async (url) =>
    await fetch(url, {
      method: "DELETE",
    }),
};

export { api };
