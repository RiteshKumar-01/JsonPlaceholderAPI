import React,{ useState, useEffect } from 'react';
import axios from 'axios';

const AxiosApi = () => {

    const [post, setPost] = useState({});
    const [id, setId] = useState(1);

    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res =>{
                console.log(res);
                setPost(res.data);
            })
    }, [id]);



  return (
    <div >
        <input type= "text" value= {id} onChange={e => setId(e.target.value)} />
        <div className="my-2">
            Title:  {post.title}
        </div>

        <div className="my-2">
        Body:  {post.body}
        </div>

    </div>
  );
}

export default AxiosApi;
