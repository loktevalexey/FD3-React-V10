import { FRUIT_APPLE_ADD, FRUIT_PEAR_ADD } from './fruitsAC';

const initState={
  apples: 0,  // сколько есть яблок
  pears: 0,   // сколько есть груш
}

// state здесь это не всё состояние Redux, а только раздел, за который отвечает данный редьюсер

function fruitsReducer(state=initState,action) {
  switch (action.type) {

    case FRUIT_APPLE_ADD: {
      console.log('action:',action);
      console.log('state before change:',state);
      let newState={...state,
        apples: state.apples+action.amount,
      };
      console.log('state after change:',newState);
      return newState;
    }

    case FRUIT_PEAR_ADD: {
      console.log('action:',action);
      console.log('state before change:',state);
      let newState={...state,
        pears: state.pears+action.amount,
      };
      console.log('state after change:',newState);
      return newState;
    }

    default:
      return state;
  }
}

export default fruitsReducer;
