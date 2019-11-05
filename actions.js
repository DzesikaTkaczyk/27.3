import uuid from uuid;

export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

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
