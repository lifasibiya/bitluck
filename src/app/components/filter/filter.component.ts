import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Result } from '../models/interface';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  numberOfRows = 1;
  numberOfBalls = 1;
  verb = null;
  oneToMany = null;
  condition = null;
  else = null
  finally = null;
  counts: 0;
  pastDraws: Result[] = [];
  availableSelection: Result[] = [];
  rejectedNumbers = []
  seed: any;
  constructor(private api: ApiService) { }

  async ngOnInit(): Promise<void> {
    this.availableSelection = await this.api.get();
  }

  generate = (seed) => {
    
  }

  setFilter = () => {

  }

  setRejected = (numberOfRows: number) => {
    for (let i=0; i < numberOfRows; i++) {
      for (let r of this.availableSelection[i].draw) {
        this.rejectedNumbers.push(r)
      }
    }
  }
  
  remove = () => {
    let current = this.availableSelection;
    this.availableSelection = current.filter(c => c.draw)
  }

}
