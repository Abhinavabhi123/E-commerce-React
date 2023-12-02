import { ProviderReducerAction, providerAction } from "../Types/type";

const initialState: providerAction = {
  _id: "",
  name: "",
  email:""
};

const providerReducer = (
  state = initialState,
  action: ProviderReducerAction
): providerAction => {
  switch (action.type) {
    case "addProviderDetails":
      return {
        ...state,
        name: String(action.payload),
        _id: String(action.payload),
        email: String(action.payload),
      };
    case "providerLogout":
      return initialState;
      default:
        return state
  }
};

export default providerReducer;
