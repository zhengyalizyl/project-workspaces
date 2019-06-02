import * as constants from "./actionTypes"
const defaultState = {
    homeData: {
    },
    sowingData: [],
    userData: {}
};

let newState = "";
export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.IINIT_HOME_DATA:
            newState = JSON.parse(JSON.stringify(state));
            newState.homeData = action.homeData;
            return newState;
        case constants.IINIT_SOWING_DATA:
            newState = JSON.parse(JSON.stringify(state));
            newState.sowingData = action.sowingData;
            return newState;
        case constants.IINIT_USER_DATA:
            newState = JSON.parse(JSON.stringify(state));
            sessionStorage.setItem("userData",JSON.stringify(action.userData))
            newState.userData = action.userData;
            return newState;
        default:
            return state
    }
}




