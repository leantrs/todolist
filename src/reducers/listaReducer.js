import { LISTA_SUCCESS } from "../actions/listaActions";

const INITIAL_STATE = {
  listax: { id: 1 },
};

const listaReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LISTA_SUCCESS:
      return {
        ...state,
        listax: action.lista,
      };

    default:
      return state;
  }
};

export default listaReducer;
