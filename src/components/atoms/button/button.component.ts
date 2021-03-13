import {Component, Input} from '@angular/core';
import { ButtonStyles } from './button.styles';

@Component({
  selector: 'button-cmp',
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() isOutline: boolean = false;
  @Input() text: string = 'abc23';
  ButtonStyles = ButtonStyles;
}
