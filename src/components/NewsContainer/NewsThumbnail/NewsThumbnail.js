import React from 'react';
import { useRouter } from 'next/router';
import { StyledNewsThumbnail, PostThumbnailHeader, PostThumbnailDate, StyledSubmitBtn } from './StyledNewsThumbnail';
import { formatDate } from '../../../shared/utils/date/date';

const NewsThumbnail = ({ title, id, date }) => {
    const router = useRouter();
    const NEWS_PATH = '/aktualnosci';

    const displayPost = (postId) => {
        router.push(`${NEWS_PATH}/${postId}`);
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

export default NewsThumbnail;
