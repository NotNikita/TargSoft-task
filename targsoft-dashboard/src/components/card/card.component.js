import React from 'react'
import { connect } from 'react-redux'
import { initializeIcons } from '@fluentui/react'
import { FontIcon } from '@fluentui/react/lib/Icon';

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { deletePosts } from '../../redux/post/post.actions'

import './card.styles.css';

const Card = ({ post, deletePosts, postsFromRedux }) => {
    initializeIcons();

    function submit(postId) {
        confirmAlert({
            title: 'Confirm to delete',
            message: 'Are you sure to do this.',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => deletePosts(postId)
                    // tryToDelete(postId)
                },
                {
                    label: 'No',
                    onClick: null
                }
            ]
        });
    };

    return (
        <div className='card-container'>
            <h2 className='card-title'>{post.title}</h2>
            <p className='card-desc'>{post.body}</p>
            <span className='card-user'>Created by: {post.userId}</span>

            <div className='container'>
                <FontIcon aria-label="Delete" iconName="Delete" className='btn-delete' onClick={() => submit(post.id)} />
            </div>
        </div>
    )
}



const mapDispatchToProps = (dispatch) => ({
    deletePosts: id => dispatch(deletePosts(id))
})
export default connect(null, mapDispatchToProps)(Card)