import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "../components/navbar/navbar.component";
import { HeroPanelComponent } from "../components/hero-panel/hero-panel.component";
import {ButtonComponent} from '../components/atoms/button/button.component';
import {HeroPanelService} from '../components/hero-panel/hero-panel.service';
import {NavbarService} from '../components/navbar/navbar.service';

@NgModule({
  declarations: [AppComponent, NavbarComponent, HeroPanelComponent, ButtonComponent],
  imports: [BrowserModule],
  providers: [HeroPanelService, NavbarService],
  bootstrap: [AppComponent]
})
export class AppModule {}
