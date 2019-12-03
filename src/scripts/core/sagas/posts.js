import { all, call, put, takeLatest, take } from 'redux-saga/effects';

import { request } from '../api/api';
import {ActionTypes } from '../actions/actionTypes';

export function* getAllPosts({ payload }) {
  try {
    /* istanbul ignore next */
    console.log('getting all posts')
    const response = yield call(request, 'https://jsonplaceholder.typicode.com/posts', {
        payload,
        method: 'GET',
    })
    yield put({
      type: ActionTypes.GET_ALL_POSTS_SUCCESS,
      payload: {
        posts: response,
      },
    });
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