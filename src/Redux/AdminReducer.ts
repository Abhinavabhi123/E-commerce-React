import { AdminAction, AdminReducerAction } from "../Types/type";

const initialState:AdminAction = {
    _id: "",
    name: "",
    email:""
  };
  
  const adminReducer = (state = initialState, action:AdminReducerAction):AdminAction => {
    switch (action.type) {
        case "addAdminDetails":
            return{
                ...state,
                _id : String(action.payload),
                name:String(action.payload),
                email:String(action.payload)
            }
        case "AdminLogout":
            return initialState
      default:
        return state;
    }
  };
  
  export default adminReducer;