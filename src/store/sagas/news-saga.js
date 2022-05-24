import { takeLatest, put, delay } from 'redux-saga/effects';
import axios from 'axios';
import * as actionTypes from '../actionTypes';

import {
	getNewsSuccessAction,
	getNewsFailAction
} from '../actions';

const getNewsWorker = function* () {
	let news;
	try {
		// news = yield call(axios, {
		// 	url: ``,
		// });
		news = yield delay(2000, [{
			title: 'title',
			text: 'text',
			author: 'author',
			tags: 'tags',
		},
			{
			title: 'title1',
			text: 'text1',
			author: 'author1',
			tags: 'tags1',
		},
			{
			title: 'title2',
			text: 'text2',
			author: 'author2',
			tags: 'tags2',
		},
			{
			title: 'title3',
			text: 'text3',
			author: 'author3',
			tags: 'tags3',
		},
			{
			title: 'title4',
			text: 'text4',
			author: 'author4',
			tags: 'tags4',
		},
			{
			title: 'title5',
			text: 'text5',
			author: 'author5',
			tags: 'tags5',
		}])
		yield put(getNewsSuccessAction(news));
	} catch (e) {
		yield put(getNewsFailAction(e.message));
	}
};

const newsWatcher = function* () {
	yield takeLatest(actionTypes.GET_NEWS, getNewsWorker);
};

export default newsWatcher;
