import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import ListWrapper from 'components/list/ListWrapper';
import List from 'components/list/List';
import Event from 'components/Event';
import RoomList from 'components/RoomList';

const Home = () => {
    return (
        <div>
            <PageTemplate>
                <Event/>
                <RoomList/>
                <ListWrapper>
				    <List/>
			    </ListWrapper>
            </PageTemplate>
        </div>
    );
};
        
export default Home;