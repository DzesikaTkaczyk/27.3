import {ADD_COMMENT} from './actions'
import {EDIT_COMMENT} from './actions'
import {REMOVE_COMMENT} from './actions'
import {THUMB_UP_COMMENT} from './actions'
import {THUMB_DOWN_COMMENT} from './actions'

export default function coments(state = [], action) {
	switch (action.type) {
		case ADD_COMMENT:
			return [{ //object.assign make state copy
				id: action.id,
				text: action.text,
				votes: 0
			}
			, ...state]
		}

		case EDIT_COMMENT:
			return state.map(comment => {
				if (comment.id === action.id) {
					comment.text: action.text;
				}
				return comment;
			});

		case REMOVE_COMMENT:
			return state.filter (comment => comment.id !== action.id);

		case THUMB_UP_COMMENT:
			return state.map(comment => {
				if (comment.id === action.id) {
					comment.votes: comment.votes + 1;
				}
				return comment;
			});

		case THUMB_DOWN_COMMENT
			return state.map(comment => {
				if (comment.id === action.id) {
					comment.votes: comment.votes - 1;
				}
				return comment;
			});

		default:
			return state;
	};
}