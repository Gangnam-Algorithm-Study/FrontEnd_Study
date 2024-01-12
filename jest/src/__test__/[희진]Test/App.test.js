import axios from "axios";

describe("Test", () => {
  // get 테스트
  test("Get", async () => {
    // Axios를 사용하여 데이터를 가져옴
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    // 실패 테스트 expect(response.length).toBe(101);

    // HTTP 상태 코드가 200인지 확인
    expect(response.status).toBe(200);

    // 가져온 데이터가 배열인지 확인
    expect(Array.isArray(response.data)).toBe(true);

    // 최소한 하나의 포스트가 있는지 확인
    expect(response.data.length).toBeGreaterThan(0);
  });

  // POST 테스트
  test("Post", async () => {
    const postData = {
      title: "POST 테스트중",
      body: "장희진",
      userId: 98765,
    };

    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      postData
    );

    // 실패 테스트 expect(response.length).toBe(201);

    expect(response.status).toBe(201);
    expect(response.data.title).toBe("POST 테스트중");
  });

  // PUT 테스트
  test("Put", async () => {
    const updatedData = {
      title: "put 테스트중",
      body: "This post has been updated.",
    };

    const response = await axios.put(
      "https://jsonplaceholder.typicode.com/posts/1",
      updatedData
    );

    expect(response.status).toBe(200);
    expect(response.data.title).toBe("put 테스트중");
  });

  // DELETE 테스트
  test("Delete", async () => {
    const response = await axios.delete(
      "https://jsonplaceholder.typicode.com/posts/1"
    );

    expect(response.status).toBe(200);
    expect(response.data).toEqual({});
  });
});
