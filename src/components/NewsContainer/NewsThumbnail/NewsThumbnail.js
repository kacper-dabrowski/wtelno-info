import React from 'react';
import { withRouter } from 'react-router-dom';
import { StyledNewsThumbnail, PostThumbnailHeader, PostThumbnailDate, StyledSubmitBtn } from './StyledNewsThumbnail';
import { formatDate } from '../../../shared/utils/date/date';

const NewsThumbnail = ({ title, id, history, date }) => {
    const NEWS_PATH = '/aktualnosci';
    const displayPost = (postId) => {
        history.push(`${NEWS_PATH}/${postId}`);
    };
    return (
        <StyledNewsThumbnail>
            <PostThumbnailHeader>{title}</PostThumbnailHeader>
            <PostThumbnailDate>{formatDate(date)}</PostThumbnailDate>
            <StyledSubmitBtn
                onClick={() => {
                    displayPost(id);
                }}
            >
                Pokaż całość
            </StyledSubmitBtn>
        </StyledNewsThumbnail>
    );
};

export default withRouter(NewsThumbnail);
