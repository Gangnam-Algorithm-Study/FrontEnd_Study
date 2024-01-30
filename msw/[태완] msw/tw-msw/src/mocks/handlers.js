import { http } from "msw";
const data = [];

for (let i = 0; i < 100; i++) {
  data.push({
    title: "foo",
    body: "bar",
    userId: 1,
  });
}

export const handlers = [
  // 포스트 목록
  http.get("https://jsonplaceholder.typicode.com/posts", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(data));
  }),
  // 포스트 추가
  http.post("https://jsonplaceholder.typicode.com/posts", (req, res, ctx) => {
    data.push(req.body);
    return res(ctx.status(201), ctx.json(data));
  }),
  // 포스트 수정
  http.put("https://jsonplaceholder.typicode.com/posts", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(req.body));
  }),
  // 포스트 삭제
  http.delete("https://jsonplaceholder.typicode.com/posts", (req, res, ctx) => {
    data.push(req.body);
    return res(ctx.status(200), ctx.json({}));
  }),
];
