import { combineReducers } from 'redux';
import userReducer from './UserReducer';
import adminReducer from './AdminReducer';
import providerReducer from './ProviderReducer';

const rootReducer = combineReducers({
  user: userReducer,
  admin: adminReducer,
  comment: providerReducer,
});

export default rootReducer;