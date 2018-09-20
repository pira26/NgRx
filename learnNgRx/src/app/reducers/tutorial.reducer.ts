import { Tutorial } from '../models/tutorial.model';
import * as TutorialActions from '../actions/tutorial.action';

// declare an initial state
const initialState: Tutorial = {
  name: 'Initial Tutorial',
  url: 'http://google.com'
};

// create our reducer with the initial state and our action which is our actions' type
export function tutorialReducer(state: Tutorial[] = [ initialState ], action: TutorialActions.Actions) {

  // Section 3
  switch (action.type) {
    case TutorialActions.ADD_TUTORIAL:
      return [ ...state, action.payload ];
    case TutorialActions.REMOVE_TUTORIAL:
      state.splice(action.payload, 1);
      return state;
    default:
      return state;
  }
}
