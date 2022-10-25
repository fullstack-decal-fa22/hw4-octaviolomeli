import { useState } from 'react';
import React from 'react';
import Block from './Block';
import Menu from './Menu';


const Feed = () => {
    /* TODO: Declare a new state variable to keep track of the blocks on your Blockstagram feed! */
    // Refer to Hint 2 for more help!

    /* Use the map() function to render multiple Blocks! */
    //const posts = []; // TODO: edit this variable
    const [posts, setPostsColor] = useState([]);

    const createPosts = (color) => {
        setPostsColor(current => [<Block color={color}/>, current])
    }

    return (
        <div>
            <Menu createPosts={createPosts}></Menu>
            {/* Below is where all of your Blocks should render! */}
            {posts}
        </div>
    );
}

export default Feed;