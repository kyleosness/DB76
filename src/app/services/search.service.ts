import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { switchMap } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  plans$ = new Subject<string>();
  queryObservable: Observable<any>

  constructor(private afs: AngularFirestore) {
    this.queryObservable = this.plans$.pipe(
      switchMap(name =>
        afs.collection('plans', ref => ref.where('name', '==', name)).valueChanges()
      )
    );
  }
  
  search(name: string) {
  this.plans$.next(name)
  
  }
}
