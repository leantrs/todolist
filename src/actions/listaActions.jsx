export const LISTA_SUCCESS = "@LISTA/LISTA_SUCCESS";

const signIn = (lista) => {
  //console.log(lista);
  return async (dispatch) => {
    dispatch({
      type: LISTA_SUCCESS,
      lista,
    });
  };
};

export default signIn;
