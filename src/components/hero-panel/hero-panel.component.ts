import {Component, Input, OnInit} from '@angular/core';
import {HeroPanelStyles} from './hero-panel.styles';
import {HeroPanelService} from './hero-panel.service';
import { GlobalStyles } from '../../global.styles';

@Component({
  selector: "hero-panel-cmp",
  templateUrl: "./hero-panel.component.html",
  styleUrls: ["./hero-panel.component.scss"]
})
export class HeroPanelComponent implements OnInit {
  bodyText: string = '';
  @Input() exposedStyles = {
    containerBgImg: '',
    containerBgColor: 'red'
  };
  heroPanelStyles;
  colors = [];

  constructor(private heroPanelService: HeroPanelService) {
  }

  ngOnInit() {
    this.fetchStyles();
    this.fetchContent();
    this.colors = ['green', 'blue', 'orange', 'red'];
  }

  fetchStyles() {
    this.heroPanelStyles = HeroPanelStyles(this.exposedStyles);
  }

  fetchContent() {
    this.heroPanelService.getContent();
  }

  updateLeftPos(value: number) {
    this.heroPanelStyles.ContentContainer.left = value + 'px';
  }

  updateTopPos(value: number) {
    this.heroPanelStyles.ContentContainer.top = value + 'px';
  }
  updateColor(color: string, component: string): void {
  switch(component) {
    case 'container':
      this.heroPanelStyles.Container.backgroundColor = color;
      break;
    case 'content-container':
      this.heroPanelStyles.ContentContainer.backgroundColor = color;
      break;
  }
  }
}
