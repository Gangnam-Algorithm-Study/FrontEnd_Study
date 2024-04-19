import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com";

describe("Test", () => {
  // get 테스트
  test("Get", async () => {
    // Axios를 사용하여 데이터를 가져옴
    const response = await axios.get(`${API_URL}/posts`);

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

    // 새로 생성되는 아이템은 고유키가 101번으로 고정된다.
    const response = await axios.post(`${API_URL}/posts`, postData);

    // 실패 테스트 expect(response.length).toBe(201);
    expect(response.status).toBe(201);
    expect(response.data.title).toBe(postData.title);
    expect(response.data.body).toBe(postData.body);
    expect(response.data.userId).toBe(postData.userId);
  });

  // PUT 테스트
  test("Put", async () => {
    const updatedData = {
      title: "put 테스트중",
      body: "This post has been updated.",
    };

    const response = await axios.put(`${API_URL}/posts/1`, updatedData);

    expect(response.status).toBe(200);
    expect(response.data.title).toBe(updatedData.title);
    expect(response.data.body).toBe(updatedData.body);
  });

  // DELETE 테스트
  test("Delete", async () => {
    const response = await axios.delete(`${API_URL}/posts/1`);

    expect(response.status).toBe(200);
  });
});
