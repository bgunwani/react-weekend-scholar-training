import axios from "axios";
import { useState, useEffect } from "react";

export function HookFetchingDataByHandler() {

    const [post, setPost] = useState({});
    const [id, setId] = useState(10);
    const [idFromBtnClick, setIdFromBtnClick] = useState(1);

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

    const clickMe = () => {
        setIdFromBtnClick(id);
    }

    return (
        <div>
            <input type="text" value={id} onChange={event => setId(event.target.value)} />
            <button type="button" onClick={clickMe}>Click Me</button>
            <p>{post.title}</p>
        </div>
    )

}