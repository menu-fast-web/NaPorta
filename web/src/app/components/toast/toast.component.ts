import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-toast',
  template: `
    <div class="flex items-center gap-3">
      <mat-icon style="font-size: 20px; width: 20px; height: 20px; color: white;">check_circle</mat-icon>
      <span style="font-size: 14px; font-weight: 500; color: white;">{{ data.message }}</span>
    </div>
  `,
})
export class ToastComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: { message: string }) {}
}
