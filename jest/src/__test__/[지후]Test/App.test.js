describe('JSON placeholder', () => {
    const testApiStatus = {
        get: 200,
        post: 201,
        put: 200,
        delete: 200
    }

    const requestBody = {
        title: "안녕하세요",
        body: "저는 김지후 입니다.",
        userId: 980829 //
    }

    // test 와 it은 같은 기능이다 = test의 alias 가 it
    test('GET /posts', async () => {
        const data = await fetch(`https://jsonplaceholder.typicode.com/posts`);
        const list = await data.json();

        expect(data.status).toBe(testApiStatus['get']);
        expect(list.length).toBe(100);
    })

    test('POST /posts/1', async () => {
        const getData = await fetch(`https://jsonplaceholder.typicode.com/posts`);
        const list = await getData.json();


        const data = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
            method: "POST",
            body: JSON.stringify(requestBody),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });

        const result = await data.json();

        expect(data.status).toBe(testApiStatus['post']);
        expect(result).toEqual({ ...requestBody, id: list.length + 1 });
    })

    test('PUT /posts/1', async () => {
        const data = await fetch(`https://jsonplaceholder.typicode.com/posts/1`, {
            method: "PUT",
            body: JSON.stringify(requestBody),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });

        const result = await data.json();

        expect(data.status).toBe(testApiStatus['put']);
        expect(result).toEqual({ ...requestBody, id: 1 });
    })

    test('DELETE /posts/1', async () => {
        const data = await fetch(`https://jsonplaceholder.typicode.com/posts/1`, {
            method: "DELETE"
        })

        const result = await data.json();

        expect(data.status).toBe(testApiStatus['delete']);
        expect(result).toEqual({});
    })
});