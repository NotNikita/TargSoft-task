import React from 'react';
import { connect } from 'react-redux'
import Card from '../card/card.component';

import './card-list.styles.css';

const CardList = ({ posts, onDelete }) => {

    return (
        <div className='card-list'>
            {posts.map(post => (
                <Card key={post.id} onDelete={onDelete} post={post} />
            ))}
        </div>
    )
}


const mapStateToProps = state => ({
    posts: state.posts
})
export default connect(mapStateToProps)(CardList);
