import React from "react";
import { useState } from "react";
import { api } from "../Api";

export default function List() {
  const [res, setRes] = useState({
    status: "0",
    statusText: "0",
  });

  const data = {
    title: "foo",
    body: "bar",
    userId: 1,
  };

  const handleGet = async () => {
    try {
      const response = await api.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const outPut = await response;
      setRes({ status: outPut.status, statusText: outPut.statusText });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handlePost = async () => {
    try {
      const response = await api.post(
        "https://jsonplaceholder.typicode.com/posts",
        data
      );
      const outPut = await response;
      setRes({ status: outPut.status, statusText: outPut.statusText });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handlePut = async () => {
    data.body = "tw";
    try {
      const response = await api.put(
        "https://jsonplaceholder.typicode.com/posts/1",
        data
      );
      const outPut = await response;
      setRes({ status: outPut.status, statusText: outPut.statusText });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await api.delete(
        "https://jsonplaceholder.typicode.com/posts/1"
      );
      const outPut = await response;
      setRes({ status: outPut.status, statusText: outPut.statusText });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <div>
        <h1 role="status">{res.status}</h1>
        <h2 role="alert">{res.statusText}</h2>
      </div>
      <div>
        <button onClick={handleGet}>get</button>
        <button onClick={handlePost}>post</button>
        <button onClick={handlePut}>put</button>
        <button onClick={handleDelete}>delete</button>
      </div>
    </>
  );
}
