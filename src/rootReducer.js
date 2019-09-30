import uuid from "uuid/v4"

const INITIAL_STATE = { meme: [] };


function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {

    case "MEME":
      return {
        ...state, 
        meme: [...state.meme, { ...action.payload, id: uuid() }]
      };

    case "REMOVE_MEME":
      return {
        ...state, 
        meme: state.meme.filter(x => x.id !== action.payload)
      }

    default:
      return state;
  }
}

export default rootReducer;