import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import { Container } from 'semantic-ui-react';
import MainForm from '../components/form/MainForm';

const Form = () => {
    return (
        <div>
            <PageTemplate>
            <Container textAlign='center'>
                <MainForm />
            </Container> 
            </PageTemplate>
        </div>
    );
};

export default Form;