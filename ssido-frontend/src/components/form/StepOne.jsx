import React, { Component } from 'react';
import { Form, Button, Segment } from 'semantic-ui-react';

class StepOne extends Component{

    saveAndContinue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }

    render(){
        const { values } = this.props;
        return(
            <Segment>
            <Form >
                <h1 className="ui centered">팔사람 구해요</h1>
                <Form.Field>
                    <label>팔고 싶은 상품의 이름을 적어주세요</label>
                    <input
                    placeholder='itemName'
                    onChange={this.props.handleChange('itemName')}
                    defaultValue={values.itemName}
                    />
                </Form.Field>
                <Form.Field>
                    <label>사고 싶은 상품의 카테고리를 선택해주세요</label>
                    <input
                    placeholder='category'
                    onChange={this.props.handleChange('category')}
                    defaultValue={values.category}
                    />
                </Form.Field>
                <Button onClick={this.saveAndContinue}>다음</Button>
            </Form>
            </Segment>
        )
    }
}

export default StepOne;