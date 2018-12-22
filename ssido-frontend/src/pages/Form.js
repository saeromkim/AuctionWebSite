import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import { Container } from 'semantic-ui-react';
import MainForm from '../components/form/MainForm';
import MakeRoomContainer from '../containers/makeRoom/MakeRoomContainer';

const Form = () => {
    return (
        <div>
            <PageTemplate>
            <Container textAlign='center'>
                <MakeRoomContainer />
            </Container> 
            </PageTemplate>
        </div>
    );
};

export default Form;