let initState = {
  property_one:'text text one',
  property_two: 'text text two',
  username :'',
  robost: []
}

export const reducer = (state = initState, action = {}) => {
  switch (action.type) {
    case 'PROP_ONE':
      return {...state, property_one:action.payload}
      break;
    case 'PROP_TWO':
      return {...state, property_two:state.property_one}
      break;
    default:
      return {...state}
  }

}
