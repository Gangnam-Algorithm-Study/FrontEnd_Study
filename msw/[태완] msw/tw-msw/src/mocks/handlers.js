import { HttpResponse, http } from "msw";

export const handlers = [
  // 포스트 목록
  http.get("https://jsonplaceholder.typicode.com/posts", () => {
    return new HttpResponse(null, {
      status: 200,
      statusText: "get",
    });
  }),
  // 포스트 추가
  http.post("https://jsonplaceholder.typicode.com/posts", () => {
    return new HttpResponse(null, {
      status: 201,
      statusText: "post",
    });
  }),
  // 포스트 수정
  http.put("https://jsonplaceholder.typicode.com/posts/1", () => {
    return new HttpResponse(null, {
      status: 200,
      statusText: "put",
    });
  }),
  // 포스트 삭제
  http.delete("https://jsonplaceholder.typicode.com/posts/1", () => {
    return new HttpResponse(null, {
      status: 200,
      statusText: "delete",
    });
  }),
];
