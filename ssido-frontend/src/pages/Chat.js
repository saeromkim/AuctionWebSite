import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import RoomChat from 'components/RoomChat';

const Chat = () => {
    return (
        <div>
            <PageTemplate>
                <RoomChat/>
            </PageTemplate>
        </div>
    );
};

export default Chat;