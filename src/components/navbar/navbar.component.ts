import { Component } from '@angular/core';
import {NavbarService} from './navbar.service';
import {NavbarStyles} from './navbar.styles';

@Component({
  selector: 'navbar-cmp',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  navbarItems;
  navbarStyles;

  constructor(private navbarService: NavbarService) {
  }

  ngOnInit() {
    this.fetchData();
    this.fetchStyles();
  }

  fetchData() {
    this.navbarItems = this.navbarService.getNavbarItems();
  }

  fetchStyles() {
    this.navbarStyles = NavbarStyles;
  }
}

