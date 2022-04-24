import axios from "axios";
import { useState, useEffect } from "react";

export function HookFetchingData() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then((res) => {
                console.log(res);
                setPosts(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []) // Empty Array to run useEffect only once

    return (
        <div>
            <ul>
                {
                    posts.map(post => (
                        <li>{post.title}</li>
                    ))
                }
            </ul>
        </div>
    )

}