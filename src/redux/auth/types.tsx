interface userState {
  signedUp: boolean;
  reset: boolean;
  changed: boolean;
  rememberMe: boolean;
  isAuth: boolean;
  verified: boolean;
  countries:any;
  cities:any;
  schools:any;
  levels:any;
}

export const initialState: userState = {
  signedUp: false,
  reset: false,
  changed: false,
  rememberMe: true,
  isAuth: false,
  verified: false,
  countries:[],
  cities:[],
  schools:[],
  levels:[],
};
