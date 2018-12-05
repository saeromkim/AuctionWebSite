import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import Event from 'components/Event';

const Home = () => {
    return (
        <div>
            <PageTemplate>
                <Event/>
            </PageTemplate>
        </div>
    );
};
        
export default Home;