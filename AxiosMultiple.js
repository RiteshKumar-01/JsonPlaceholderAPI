import React from 'react';
import axios from 'axios';

const AxiosMultiple = () => {

    const [post, setPost] = useState({});
    const [comments, setComments] = useState({});
    const [id, setId] = useState(1);

    const fetchMultipleData = () =>{
        
        const getPostValues = axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const getCommentValues = axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);

        axios.all([getPostValues, getCommentValues])
            .then(
                axios.spread((...res) =>{
                    setPost(res.data);
                    setComments(res.data);
                })
            )
    }

    useEffect(() => {
        fetchMultipleData()
    }, [])
    
  return (
    <div>
      
    </div>
  );
}

export default AxiosMultiple;
