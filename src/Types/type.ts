export type NavItem = {
  Icon: React.FC;
  text?: string;
};

export interface userAction {
  _id: string;
  name: string;
  email?:string;
}
export type UserReducerAction =
  | { type: "addUserDetails"; payload?: string | number }
  | { type: "userLogout" };

export interface providerAction extends userAction{}

export type ProviderReducerAction=
|{type:"addProviderDetails";payload?:string|number}
|{type:"providerLogout";}


export interface AdminAction extends userAction{}

export type AdminReducerAction=
|{type:"addAdminDetails";payload?:string|number}
|{type:"AdminLogout";}