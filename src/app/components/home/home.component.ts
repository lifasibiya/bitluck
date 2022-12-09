import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { GameTerms, Result } from '../models/interface'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  latest: GameTerms[] = []
  draw: [] = []
  showFilter = false;
  lines: any = 3;
  constructor(private api: ApiService) { }
  
  async ngOnInit(): Promise<void> {
    // this.latest = await this.api.getLatest()
    // this.draw = this.latest['results']
    
    let response = await this.api.getWeather()
    // console.log('response', response)
  }
  
  generate = async () => {
    // this.showFilter = !this.showFilter;
    const payload = {
      LuckyNumbers: 7,
      Min: 1,
      Max: 50,
      Lines: this.lines,
      Exclude: [34, 23, 12, 8, 17,37, 47, 42]
    }

    this.draw = await this.api.get(payload)
    console.log(this.draw)
  }
  
}
