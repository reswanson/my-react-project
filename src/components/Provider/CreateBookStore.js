const initialState = {
	auth: { loggedIn: false }
}


const counter = (state = initialState, action) => {
  switch(action.type) {
     case 'LOG_IN':
		 return { ...state, auth: {loggedIn: true}};   
     case 'LOG_OUT':
         return { ...state, auth: {loggedIn: false}};
     default:
       return state;
   }
};

export default counter;