import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const PostListing = () => {
    const [posts, setPosts] = useState<Array<any>>([]);

    useEffect(() => {
        axios.get(`https://vue-tutorial-44271.firebaseio.com/posts.json`)
            .then(res => {
                const data = res.data;
                console.log(data);
                const postsArray = [];
                for (const key in res.data) {
                    postsArray.push({ ...res.data[key], id: key });
                }
                setPosts(postsArray);
            })
    }, []);

    return (
        <div>
            <h1>POSTS</h1>
            {posts.map(post => <Link to={'post/' + post.id} key={post.id}>{post.title}</Link>)}
        </div>
    );
}

export default PostListing;