import { call, put, takeLatest } from "redux-saga/effects";
import * as actions from "../actions";
import * as api from "../../api";

function* fetchPostsSaga(action) {
  try {
    const posts = yield call(api.fetchPosts);
    yield put(actions.getPosts.getPostsSuccess(posts.data));
  } catch (error) {
    yield put(actions.getPosts.getPostsFailure(error));
  }
}

function* createPostSaga(action) {
  try {
    const post = yield call(api.createPost, action.payload);
    yield put(actions.createPost.createPostSuccess(post.data));
  } catch (error) {
    yield put(actions.createPost.createPostFailure(error));
  }
}

function* updatePostSaga(action) {
  try {
    const updatedPost = yield call(api.updatePost, action.payload);
    yield put(actions.updatePost.updatePostSuccess(updatedPost.data));
  } catch (error) {
    yield put(actions.updatePost.updatePostFailure(error));
  }
}

function* deletePostSaga(action) {
  try {
    const deletePost = yield call(api.deletePost, action.payload);
    yield put(actions.deletePost.deletePostSuccess(deletePost.data));
  } catch (error) {
    yield put(actions.deletePost.deletePostFailure(error));
  }
}

function* mySaga() {
  yield takeLatest(actions.getPosts.getPostsRequest, fetchPostsSaga);
  yield takeLatest(actions.createPost.createPostRequest, createPostSaga);
  yield takeLatest(actions.updatePost.updatePostRequest, updatePostSaga);
  yield takeLatest(actions.deletePost.deletePostRequest, deletePostSaga);
}

export default mySaga;
