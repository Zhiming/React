import { put, takeEvery } from 'redux-saga/effects';
import {INIT_LIST} from './actionTypes';
import axios from "axios";
import {getInitListAction} from "./actionCreators";


function* getInitList() {
    try{
        const res = yield axios.get("/api/list");
        const action = getInitListAction(res.data);
        yield put(action);
    }catch(e) {
        console.log("网络异常" + e);
    }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
    yield takeEvery(INIT_LIST, getInitList);
}

export default mySaga;
