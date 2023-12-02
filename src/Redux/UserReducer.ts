import { UserReducerAction, userAction } from "../Types/type";


const initialState: userAction = {
  _id: "",
  name: "",
  email: "",
};

const userReducer = (state = initialState, action: UserReducerAction):userAction => {
  switch (action.type) {
    case "addUserDetails":
      return {
        ...state,
        _id: String(action.payload),
        name:String(action.payload),
        email:String(action.payload)
      };
    case "userLogout":
   
      return initialState; 
    default:
      return state;
  }
};

export default userReducer;
