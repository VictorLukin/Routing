import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-button-to-parent',
  templateUrl: './button-to-parent.component.html',
  styleUrls: ['./button-to-parent.component.scss']
})
export class ButtonToParentComponent {

  constructor(private router: Router) {
  }

  onClick(): void {
    this.router.navigate(['/parent1']);
  }

}
