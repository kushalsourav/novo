const AuthReducer = (state, action) => {
      switch (action.type) {
        case "INPUT":
            return {...state, [action.name] : action.payload};
        case "CLEAR_INPUTS":
            return {...state, email:'', password:'', firstName:'',lastName:'', confirmPassword:''};
        case "LOGIN":
            return {...state, login: action.payload};
        case "USER_DATA":
            return {...state, userData: action.userData};
        default:
            return state;
      }
};

export default AuthReducer;