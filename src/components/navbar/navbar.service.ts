import { Injectable } from '@angular/core';

@Injectable()
export class NavbarService {
 getNavbarItems() {
   return [
     {
       name: 'Work',
       url: '/work'
     },
     {
       name: 'Practices',
       url: '/practices'
     },
     {
       name: 'About',
       url: '/about'
     },
     {
       name: 'About',
       url: '/about'
     },
     {
       name: 'Test',
       url: '/test'
     },

   ];
 }
}
