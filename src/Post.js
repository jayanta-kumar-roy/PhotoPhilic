import React from 'react'
import './Post.css'

function Post() {
    return (
      <div className="post">
        <h3>Username</h3>
        {/*header->avatar + username*/}

        <img className="post__image" src="https://images.unsplash.com/photo-1527856263669-12c3a0af2aa6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlZSUyMHBpY3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"></img>
        {/*image */}

        <h4 className="post__text"><strong>Username</strong>:caption</h4>
        {/*username + caption */}
      </div>
    );
}

export default Post