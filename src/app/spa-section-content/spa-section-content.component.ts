import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { AboutInfo } from '../models/about-info';
import { Counter } from '../models/counter';
import { FeatureBox } from '../models/feature-box';
import { Slider } from '../models/slider';
import { Tab } from '../models/tab';
import { SpaService } from '../services/spa.service';

@Component({
  selector: 'app-spa-section-content',
  templateUrl: './spa-section-content.component.html',
  styleUrls: ['./spa-section-content.component.css']
})
export class SpaSectionContentComponent implements OnInit {
  sliders: Slider[] = [];
  tabs: Tab[] = [];
  counters: Counter[] = [];
  abouts: AboutInfo[] = [];
  featureBoxes: FeatureBox[] = [];
  tabNavs: string[] = [];

  constructor(private _spaService: SpaService) { }

  ngOnInit(): void {
    this._spaService.getContentData()
    .subscribe(results => {
      this.sliders = results.sliders;
      this.tabs = results.tabs;
      this.counters = results.counters;
      this.abouts = results.aboutInfos;
      this.featureBoxes = results.featureBoxes;
      this.tabNavs = results.tabNavs;
    });
  }
}
