import { apiGet, apiPost, apiPut, apiDelete } from "./api";

describe("API 테스트", () => {
    const data = { userId: 1, id: 1, title: "12345", body: "body12345" };

    test("apiGet", async () => {
        const res = await apiGet("posts");
        expect(res.length).toBe(100);
        expect(res[0].title).toBe("sunt aut facere repellat provident occaecati excepturi optio reprehenderit");
    });

    test("apiPost", async () => {
        const res = await apiPost("posts", data);
        expect(res.status).toEqual(201);
    });

    test("apiPut", async () => {
        const res = await apiPut("posts/1", data);
        expect(res.status).toEqual(200);
    });

    test("apiDelete", async () => {
        const res = await apiDelete("posts/101");
        expect(res.status).toEqual(200);
    });
});
