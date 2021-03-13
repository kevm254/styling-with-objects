import { Injectable } from '@angular/core';

export class HeroPanelContent {
  title: string;
  body: string;
}

@Injectable()
export class HeroPanelService {
  getContent(): HeroPanelContent {
  return {
    title: "This is a sample Title",
    body: "this is the body content. Thanks for signing up."
  };
  }
}
