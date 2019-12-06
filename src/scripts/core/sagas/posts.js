import { all, call, put, takeLatest, take } from 'redux-saga/effects';

import { request } from '../api/api';
import {ActionTypes } from '../actions/actionTypes';

export function* getAllPosts({ payload }) {
  try {
    /* istanbul ignore next */
    console.log('getting all posts')
    const response = yield call(request, 'http://localhost/post/1', {
        payload,
        method: 'GET',
    })
    console.log(response)
    if(response.status === 502 ){
      console.log('timeout, requesting again');
      yield put({ 
        type: ActionTypes.GET_ALL_POSTS_REQUEST,

      })
    } else if(response.status !== 200) {
        console.log('error, requesting again');
        yield put({
          type: ActionTypes.GET_ALL_POSTS_FAILURE,
          payload: {
            message: response.data,
          },
        });

        yield put({
          type: ActionTypes.GET_ALL_POSTS_REQUEST,
  
        })
    } else {
      console.log('success, requesting again')
      yield put({
        type: ActionTypes.GET_ALL_POSTS_SUCCESS,
        payload: {
          posts: response.data,
        },
      });

      yield put({
        type: ActionTypes.GET_ALL_POSTS_REQUEST,

      })

    }
    
  } catch (err) {
      yield put({
        type: ActionTypes.GET_ALL_POSTS_FAILURE,
        payload: {
          message: err,
        },
      });
  }
}

export default function* root() {
  yield all([takeLatest(ActionTypes.GET_ALL_POSTS_REQUEST, getAllPosts)]);
}