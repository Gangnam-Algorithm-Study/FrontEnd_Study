import { rest } from "msw";

let mockPosts = [
    { id: 1, title: "첫 번째 게시물" },
    { id: 2, title: "두 번째 게시물" },
    // 추가적인 게시물 정의
];

export const handlers = [
    rest.get("/api/posts", (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(mockPosts));
    }),

    rest.post("/api/posts", (req, res, ctx) => {
        const { title } = req.body;
        const newPost = { id: mockPosts.length + 1, title };
        mockPosts.push(newPost);
        return res(ctx.status(201), ctx.json(newPost));
    }),
];
