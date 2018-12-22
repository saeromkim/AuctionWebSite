import React, { Component } from 'react';
import MainForm from '../../components/form/MainForm';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import * as makeRoomActions from '../../store/modules/makeRoom';

class MakeRoomContainer extends Component {
    
    handleGoBack = () => {
        const { history } = this.props;
        history.goBack();
    }

    handleSubmit = async () => {
        const { history, itemName, category, initPrice, hopePrice, itemStatus, dealOption, dealLocation, description, roomId } = this.props;
        const makeRoom = {
            itemName, 
            category, 
            initPrice, 
            hopePrice, 
            itemStatus, 
            dealOption, 
            dealLocation, 
            description,
            roomId
        };
        try {
            await makeRoomActions.makeRoom(makeRoom);
            history.push(`/`);
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        const { itemName, category, initPrice, hopePrice, itemStatus, dealOption, dealLocation, description } = this.props;
        const { handleSubmit, handleGoBack } = this;
        return (
            <MainForm
                itemName={itemName}
                category={category}
                initPrice={initPrice}
                hopePrice={hopePrice}
                itemStatus={itemStatus}
                dealOption={dealOption}
                dealLocation={dealLocation}
                description={description}
                nextStep={handleSubmit}
                prevStep={handleGoBack}
            />
        )
    }
}

export default connect(
    (state) => ({
        itemName :state.makeRoom.get('itemName'), 
        category : state.makeRoom.get('category'), 
        initPrice : state.makeRoom.get('initPrice'), 
        hopePrice : state.makeRoom.get('hopePrice'), 
        itemStatus: state.makeRoom.get('itemStatus'),
        dealOption : state.makeRoom.get('dealOption'), 
        dealLocation : state.makeRoom.get('dealLocation'), 
        description : state.makeRoom.get('description')
    }),
    (dispatch) => ({
        makeRoomActions: bindActionCreators(makeRoomActions, dispatch)
    })
)(MakeRoomContainer);