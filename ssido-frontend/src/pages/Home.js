import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
<<<<<<< HEAD
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
=======
import ListWrapper from 'components/list/ListWrapper';
import List from 'components/list/List';

const Home = () => {
    return (
        <PageTemplate>
			<ListWrapper>
				<List/>
			</ListWrapper>
        </PageTemplate>
>>>>>>> first commit
    );
};
        
export default Home;