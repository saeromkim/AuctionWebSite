import React, { Component } from 'react';
import { Form, Button, Segment } from 'semantic-ui-react';
// import { throws } from 'assert';

class StepTwo extends Component{
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const { values } = this.props
        return(
        <Segment>
        <Form color='blue' >
            <h1 className="ui centered">팔사람 구해요</h1>
            <Form.Field>
                <label>경매 시작 가격을 정해주세요</label>
                <input placeholder='initPrice'
                onChange={this.props.handleChange('initPrice')}
                defaultValue={values.initPrice}
                />
            </Form.Field>
            <Form.Field>
                <label>희망 구매 가격대를 적어주세요.</label>
                <input placeholder='hopePrice'
                onChange={this.props.handleChange('hopePrice')}
                defaultValue={values.hopePrice}
                />
            </Form.Field>
            <Form.Field>
                <label>상품의 희망 상태를 선택해주세요.</label>
                <input placeholder='itemStatus'
                onChange={this.props.handleChange('itemStatus')}
                defaultValue={values.itemStatus}
                />
            </Form.Field>
            <Form.Field>
                <label>희망 거래 유형을 선택해주세요</label>
                <input placeholder='dealOption'
                onChange={this.props.handleChange('dealOption')}
                defaultValue={values.dealOption}
                />
            </Form.Field>
            <Form.Field>
                <label>희망 거래 위치를 선택해주세요</label>
                <input placeholder='dealLocation'
                onChange={this.props.handleChange('dealLocation')}
                defaultValue={values.dealLocation}
                />
            </Form.Field>
            <Form.Field>
                <label>거래시 남기는 말을 작성해주세요</label>
                <input placeholder='description'
                onChange={this.props.handleChange('description')}
                defaultValue={values.description}
                />
            </Form.Field>
            <Button onClick={this.back}>뒤로가기</Button>
            <Button className="ui orange button" onClick={this.saveAndContinue}>완료</Button>
        </Form>
        </Segment>
        )
    }
}

export default StepTwo;