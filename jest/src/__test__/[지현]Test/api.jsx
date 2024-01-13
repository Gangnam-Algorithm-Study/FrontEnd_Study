const BASE_URL = "https://jsonplaceholder.typicode.com";

const apiGet = async (endpoint) => {
    try {
        const response = await fetch(`${BASE_URL}/${endpoint}`);
        // return response;
        return response.json();
    } catch (error) {
        console.error("Error in apiGet:", error);
        throw error;
    }
};

const apiPost = async (endpoint, data) => {
    try {
        const response = await fetch(`${BASE_URL}/${endpoint}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        return response;
    } catch (error) {
        console.error("Error in apiPost:", error);
        throw error;
    }
};

const apiPut = async (endpoint, data) => {
    try {
        const response = await fetch(`${BASE_URL}/${endpoint}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        return response;
    } catch (error) {
        console.error("Error in apiPut:", error);
        throw error;
    }
};

const apiDelete = async (endpoint) => {
    try {
        const response = await fetch(`${BASE_URL}/${endpoint}`, {
            method: "DELETE",
        });
        return response;
    } catch (error) {
        console.error("Error in apiDelete:", error);
        throw error;
    }
};

export { apiGet, apiPost, apiPut, apiDelete };
