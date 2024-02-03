import React, { useEffect, useState } from "react";
import axios from "axios";

function Board() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await axios.get("/api/posts");
            console.log(response.data);
            setPosts(response.data);
        };
        fetchPosts();
    }, []);

    return (
        <div>
            {posts.map((post) => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                </div>
            ))}
        </div>
    );
}

export default Board;
