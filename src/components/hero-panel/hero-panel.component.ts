import {Component, Input, OnInit} from '@angular/core';
import {HeroPanelPalette, HeroPanelStyles} from './hero-panel.styles';
import {HeroPanelService} from './hero-panel.service';
import { GlobalStyles } from '../../global.styles';
import {PaletteOption} from '../../models/PaletteOption';

@Component({
  selector: 'hero-panel-cmp',
  templateUrl: './hero-panel.component.html',
  styleUrls: ['./hero-panel.component.scss']
})
export class HeroPanelComponent implements OnInit {
  @Input() exposedStyles = {
    containerBgImg: '',
    containerBgColor: 'red'
  };
  bodyText: string = 'Sample Header';
  headerText: string = 'Sample Text';
  palette: PaletteOption[];
  heroPanelStyles;
  colors = [];
  debugMenuIsVisible: boolean = false;

  constructor(private heroPanelService: HeroPanelService) {
  }

  ngOnInit() {
    this.fetchPalette();
    this.fetchStyles();
    this.fetchContent();

  }

  fetchPalette() {
    this.palette = HeroPanelPalette;
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
  switch (component) {
    case 'container':
      this.heroPanelStyles.Container.backgroundColor = color;
      break;
    case 'content-container':
      this.heroPanelStyles.ContentContainer.backgroundColor = color;
      break;
  }
  }

  moveMenu() {}

  showDebugMenu() {
    return this.debugMenuIsVisible;
  }

  toggleDebugMenu() {
    this.debugMenuIsVisible = !this.debugMenuIsVisible;
  }

  updateHeaderText(text: string) {
    this.headerText = text;
  }
  updateBodyText(text: string) {
    this.bodyText = text;
  }

  updatePalette(palette: any) {
    this.palette = JSON.parse(palette);
    console.log('this palette', palette);
  }
}
