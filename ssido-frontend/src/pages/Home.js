import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import Event from 'components/Event';
import RoomList from 'components/RoomList';

const Home = () => {
    return (
        <div>
            <PageTemplate>
                <Event/>
                <RoomList/>
            </PageTemplate>
        </div>
    );
};
        
export default Home;