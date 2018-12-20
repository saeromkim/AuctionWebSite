import { createAction, handleActions } from 'redux-actions';

import { Map } from 'immutable';
import { pender } from 'redux-pender';
import * as api from 'lib/api';

// action types
const INITIALIZE = 'makeRoom/INITIALIZE';
const CHANGE_INPUT = 'makeRoom/CHANGE_INPUT';
const MAKE_ROOM = 'makeRoom/MAKE_ROOM';

// action creators
export const initialize = createAction(INITIALIZE);
export const changeInput = createAction(CHANGE_INPUT);
export const makeRoom = createAction(MAKE_ROOM, api.makeRoom);

const initialState = Map({
    itemName: '',
    category: '',
    initPrice: '',
    hopePrice: '',
    itemStatus: '',
    dealOption: '',
    dealLocation:'',
    description:'',
    postId: null
  });

export default handleActions({
    [INITIALIZE]: (state, action) => initialState,
    [CHANGE_INPUT]: (state, action) => {
      const { name, value } = action.payload;
      return state.set(name, value);
    },
    ...pender({
        type: MAKE_ROOM,
        onSuccess: (state, action) => {
          const { _id } = action.payload.data;
          return state.set('roomId', _id);
        }
    })
}, initialize);