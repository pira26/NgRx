import { Action } from '@ngrx/store';
import { Tutorial } from '../models/tutorial.model';

// first declare actions' type
export const ADD_TUTORIAL       = '[TUTORIAL] Add';
export const REMOVE_TUTORIAL    = '[TUTORIAL] Remove';

// for each of our actions, create class
export class AddTutorial implements Action {
  readonly type = ADD_TUTORIAL;
  constructor(public payload: Tutorial) {}
}

export class RemoveTutorial implements Action {
  readonly type = REMOVE_TUTORIAL;
  constructor(public payload: number) {}
}

// export types
export type Actions = AddTutorial | RemoveTutorial;
