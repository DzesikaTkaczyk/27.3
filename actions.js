import uuid from uuid;

const ADD_COMMENT = 'ADD_COMMENT'
const EDIT_COMMENT = 'EDIT_COMMENT';
const REMOVE_COMMENT = 'REMOVE_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

function addComment(text) { //kreator akcji
	return {
		type: ADD_COMMENT,
		text,
		id: uuid.v4()
	}
}

function editComment(text){
	return {
		type: EDIT_COMMENT,
		text: text,
		id: 20
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


dispatch(addComment('nowy komentarz!'));//wysyłka akcji z kreatorem 
const boundAddComment = text => dispatch(addComment(text));//funkcja tworząca i i wtstłjajaca akcję aby ograniczyć powtórki przy wyowłaniach
boundAddComment('nowy komentarz!');