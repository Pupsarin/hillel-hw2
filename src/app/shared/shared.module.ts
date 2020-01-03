import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SkeletonDirective } from './directives/skeleton.directive';

@NgModule({
	declarations: [SkeletonDirective],
	imports: [CommonModule],
	exports: [
		MatToolbarModule,
		SkeletonDirective,
		MatSnackBarModule,
		MatButtonModule,
		MatButtonToggleModule,
		MatInputModule,
		MatIconModule,
	],
})
export class SharedModule {}
