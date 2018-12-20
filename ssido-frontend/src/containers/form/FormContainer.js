import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as makeRoomActions from '../../store/modules/makeRoom';
import MainForm from '../../components/form/MainForm';

class FormContainer extends Component {
    
    hadleChangeInput = ({name, value}) => {
        const { makeRoomActions } =this.props;
        makeRoomActions.changeInput({name,value});
    }
    
    render() { 
        const { itemName, category, initPrice, hopePrice, itemStatus, dealOption, dealLocation, description } =this.props;
        const { hadleChangeInput } =this;

        return (
            <MainForm
                itemName={itemName} 
                category={category} 
                initPrice={initPrice} 
                hopePrice={hopePrice} 
                itemStatus ={itemStatus}
                dealOption={dealOption}
                dealLocation={dealLocation} 
                description={description}
                onChangeInput={hadleChangeInput}
            />
        );
    }
}

export default connect(
    (state) => ({
        itemName: state.MainForm.get('itemName'),
        category: state.MainForm.get('category'),
        initPrice: state.MainForm.get('initPrice'),
        hopePrice: state.MainForm.get('hopePrice'),
        itemStatus: state.MainForm.get('itemStatus'),
        dealOption: state.MainForm.get('dealOption'),
        dealLocation: state.MainForm.get('dealLocation'),
        description: state.MainForm.get('description')
    }),
    (dispatch) => ({
        makeRoomActions: bindActionCreators(makeRoomActions, dispatch)
    })
)(makeRoomActions);