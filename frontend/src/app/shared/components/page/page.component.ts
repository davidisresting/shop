import { Component, Input, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent {
  @Input() title: string = '';
  @Input() subtitle?: string;
  @Input() number?: string;
  @Input() icon?: string;
  @Input() buttonText: string = '';
  @Input() centerText?: boolean = false;
  @Input() buttonDisabled?: boolean = false;
  @Input() route?: string | undefined;
  @Input() buttonEvent = new EventEmitter();

  constructor(private router: Router) {

  }

  buttonClicked() {
    if (this.route) this.router.navigateByUrl(this.route);
    if (!(this.route)) this.buttonEvent.emit();
  }
}
