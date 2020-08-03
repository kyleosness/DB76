import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';
import { Plan } from '../interfaces/plan.interface';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  plans: Array<Plan>;

  constructor(private searchService: SearchService) {
    this.searchService.queryObservable.subscribe(name => {
      this.plans = name;
      console.log(name);
  });

   }

   search(name) {
    this.searchService.search(name)
   }


  ngOnInit(): void {
   
  }
}
