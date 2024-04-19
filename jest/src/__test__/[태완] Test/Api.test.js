import "@testing-library/jest-dom"; 
import { api } from "./Api";

describe("API Test", () => {
  const data = {
    title: "foo",
    body: "bar",
    userId: 1,
  };

  test("GET Test", async () => {
    const response = await api.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    expect(response.status).toBe(200);
    const outPut = await response.json();
    expect(outPut.length).toBe(100);
  });

  test("POST Test", async () => {
    const response = await api.post(
      "https://jsonplaceholder.typicode.com/posts",
      data
    );
    expect(response.status).toBe(201);
    const outPut = await response.json();
    expect(outPut.id).toBe(101);
  });

  test("PUT Test", async () => {
    data.body = "tw";
    const response = await api.put(
      "https://jsonplaceholder.typicode.com/posts/1",
      data
    );
    expect(response.status).toBe(200);
    const outPut = await response.json();
    expect(outPut.body).toEqual("tw");
  });

  test("DELETE Test", async () => {
    const response = await api.delete(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    expect(response.status).toBe(200);
    const outPut = await response.json();
    expect(outPut).toEqual({});
  });
});
