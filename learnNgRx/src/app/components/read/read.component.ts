import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Tutorial} from '../../models/tutorial.model';
import { AppState } from '../../app.state';
import * as TutorialActions from '../../actions/tutorial.action';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  public tutorials: Observable<Tutorial[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    // access to our store
    this.tutorials = this.store.select('tutorial');
  }

  deleteTutorial(index) {
    this.store.dispatch( new TutorialActions.RemoveTutorial(index) );
  }

}
