import React, { Component } from 'react';
// import Form from '../../components/form';//render 부분에 쓰일 컴포넌트 불러오기
import * as makeRoomActions from '../../store/modules/makeRoom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class makeRoom extends Component {
    initialize = async () => {
        const { makeRoomActions,id } = this.props;
        try {
            await makeRoomActions.getPost(id);
        } catch(e) {
            console.log(e);
        }
    }

    componentDidMount() {
        this.initialize();
    }

    render() {
        const { loading, makeRoom } = this.props;

        if(loading) return null;

        const { itemName, category, initPrice, hopePrice, itemStatus, dealOption, dealLocation, description } = makeRoom.toJS();

        return (
            <div>
                이 부분은 채팅창이 나올 부분입니다.
                {/* <component이름 itemName={itemName} ...> */}
            </div>
        )
    }
}

export default connect(
    (state) => ({
        makeRoom:  state.post.get('makeRoom'),
        loading: state.pender.pending['makeRoom/MAKE_ROOM']
    }),
    (dispatch) => ({
        makeRoomActions: bindActionCreators(makeRoomActions, dispatch)
    })
)(makeRoom);