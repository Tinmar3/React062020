import React, { useEffect, useState } from 'react';
import { withRouter } from "react-router-dom";
import axios from 'axios';

interface PostData {
    title?: String,
    content?: String
}

const Post = (props: any) => {
    const [postData, setPostData] = useState<PostData>({});

    useEffect(() => {
        console.log("useEffect");
        axios.get("https://vue-tutorial-44271.firebaseio.com/posts/" + props.match.params.id + ".json")
            .then(res => { setPostData(res.data); })
    }, [props.match.params.id]);

    return (
        <div>
            {postData.title && postData.content &&
                <span>
                    <h1>{postData.title}</h1>
                    <p>{postData.content}</p>
                </span>}

        </div>
    );
}

export default withRouter(Post);