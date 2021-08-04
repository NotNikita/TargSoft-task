import React from 'react';
import { connect } from 'react-redux'
import Card from '../card/card.component';

import './card-list.styles.css';

const CardList = ({ postsFromRedux }) => {

    return (
        <div className='card-list'>
            { postsFromRedux ?
                postsFromRedux.map(post => (
                    <Card key={post.id} post={post} />
                ))
                :
                'Component is loading'
            }
        </div>
    )
}


const mapStateToProps = state => ({
    postsFromRedux: state.post.posts
})
export default connect(mapStateToProps)(CardList);
