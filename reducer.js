import {List, Map} from 'immutable';

export default function(state = Map(), action) {
  switch (action.type) {
  case 'SET_CAR_NO':
    return state.setIn(['car', 'carNumber'], action.carNumber);
  case 'SET_AREA':
    return state.setIn(['car', 'area'], action.area);
  case 'SET_LETTER':
    return state.setIn(['car', 'letter'], action.letter);
  case 'SET_TEL':
    return state.setIn(['tel', 'telephone'], action.tel);
  case 'SET_SEC':
    return state.setIn(['tel', 'secCode'], action.sec);
  }
  return state;
}
