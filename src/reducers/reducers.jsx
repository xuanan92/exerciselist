import {changeName} from '../actions/changeName.jsx'

const Initialstate = {
  name: 'product A',
  price: 400000,
}

// eslint-disable-next-line
const reducers = (state = Initialstate, action) => {
  switch (action.type) {
    case changeName:
        state = {
          ...state,
          name: 'Product B',
        }
      break;

    default:

  }
}
export default reducers
