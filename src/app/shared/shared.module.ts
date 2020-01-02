import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
	declarations: [],
	imports: [CommonModule],
	exports: [MatToolbarModule, MatSnackBarModule, MatButtonModule, MatButtonToggleModule, MatInputModule, MatIconModule],
})
export class SharedModule {}
