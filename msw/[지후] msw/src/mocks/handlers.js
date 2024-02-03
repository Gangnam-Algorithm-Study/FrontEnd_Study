import { delay, http, HttpResponse } from 'msw'

const userResponse = [{
    id: 1,
    username: '김지후',
    age: 27
}]

export const handlers = [
    http.get("/user_info", async () => {
        await delay(3000);
        return HttpResponse.json(userResponse)
    }),
    http.post('/add_user', async (req, res) => {
        console.log(req, res)

        userResponse.push({
            id: 2,
            username: '322',
            age: null
        })

        return HttpResponse.json(userResponse);
    })
]