import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { ShowsService } from '../../service/shows.service';
import { Ishows } from '../../model/shows';

@Component({
  selector: 'app-shows-search',
  templateUrl: './shows-search.component.html',
  styleUrls: ['./shows-search.component.scss']
})
export class ShowsSearchComponent implements OnInit {
   showsArr : Array<Ishows> = []
  searchcontrol = new FormControl('')

  constructor(
    private _showsService : ShowsService
  ) { }

  ngOnInit(): void {
    this.getSearchShows()
  }

  getSearchShows(){
    this.searchcontrol.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(val => this._showsService.fetchSearchShows(val || ''))
    )
    .subscribe({
      next: data =>{
        console.log(data)
        this.showsArr = data
      },
      error : err => {
        console.log(err)
      }
    })
  }

}
