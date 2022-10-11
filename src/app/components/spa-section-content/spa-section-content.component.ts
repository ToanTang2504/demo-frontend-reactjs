import { Component, OnInit } from '@angular/core';
import { AboutInfo } from '../../models/about-info';
import { Counter } from '../../models/counter';
import { FeatureBox } from '../../models/feature-box';
import { Slider } from '../../models/slider';
import { Tab } from '../../models/tab';
import { SpaService } from '../../services/spa.service';
import { FormGroup, FormControl } from '@angular/forms';
import { SpaFormData } from 'src/app/models/spa-form-data';

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
  submitForm = new FormGroup({
    name: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    message: new FormControl(''),
    botCheck: new FormControl('')
  });

  updateSuccess: boolean = false;

  constructor(
    private _spaService: SpaService
  ) { }

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
  
  onSubmit(): void {
    this.updateSuccess = false;
    const data: SpaFormData = {
      botCheck: this.submitForm.value.botCheck || undefined,
      email: this.submitForm.value.email || undefined,
      message: this.submitForm.value.message || undefined,
      name: this.submitForm.value.name || undefined,
      phone: this.submitForm.value.phone || undefined
    }
    this._spaService.postForm(data).subscribe(result => {
      this.updateSuccess = result;
      alert('Send a message successfully!')
      this.submitForm.reset();
    })
  }
}
