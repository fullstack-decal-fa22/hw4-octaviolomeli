import { useState } from 'react';
import React from 'react';
import Menu from './Menu';
import Block from './Block';

const Feed = () => {
    /* TODO: Declare a new state variable to keep track of the blocks on your Blockstagram feed! */
    // Refer to Hint 2 for more help!

    /* Use the map() function to render multiple Blocks! */
    const [blocks, setBlocks] = useState([]);

    function createPost(c) {
        setBlocks(blocks.push(<Block color={c}></Block>))
    }

    return (
        <div>
            <Menu hc={createPost}></Menu>
            {/* Below is where all of your Blocks should render! */}
            {blocks.map((block) =>
                block
            )}
        </div>
    );
}

export default Feed;