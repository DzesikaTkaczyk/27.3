import uuid from uuid;

const ADD_COMMENT = 'ADD_COMMENT'
const EDIT_COMMENT = 'EDIT_COMMENT';
const REMOVE_COMMENT = 'REMOVE_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

function addComment(text) { //action creator
	return {
		type: ADD_COMMENT,
		text,
		id: uuid.v4()
	}
}

function editComment(text, id){
	return {
		type: EDIT_COMMENT,
		text: text,
		id: id
	}
}

function removeComment(id){
	return {
		type: REMOVE_COMMENT,
		id: id
	}
}

function thunbDown(id){
	return {
		type: THUMB_DOWN_COMMENT,
		id: id
	}
}

function thunbUp(id){
	return {
		type: THUMB_UP_COMMENT,
		id: id
	}
}


dispatch(addComment('nowy komentarz!'));//action displash
const boundAddComment = text => dispatch(addComment(text));//function create and displash action-> fewer called repetitions
boundAddComment('nowy komentarz!');
