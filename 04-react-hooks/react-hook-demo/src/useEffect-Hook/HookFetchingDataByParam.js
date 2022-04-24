import axios from "axios";
import { useState, useEffect } from "react";

export function HookFetchingDataByParam() {

    const [post, setPost] = useState({});
    const [id, setId] = useState(10);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((res) => {
                console.log(res);
                setPost(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [id]) // Empty Array to run useEffect only once

    return (
        <div>
            <input type="text" value={id} onChange={event => setId(event.target.value)} />
            <p>{post.title}</p>
        </div>
    )

}