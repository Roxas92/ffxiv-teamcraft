import {Component, Inject} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
    selector: 'app-workshop-name-popup',
    templateUrl: './workshop-name-popup.component.html',
    styleUrls: ['./workshop-name-popup.component.scss']
})
export class WorkshopNamePopupComponent {

    public form: FormControl = new FormControl('', Validators.required);

    constructor(private ref: MatDialogRef<WorkshopNamePopupComponent>, @Inject(MAT_DIALOG_DATA) data: string) {
        this.form.setValue(data === undefined ? '' : data);
    }

    submit() {
        if (this.form.valid) {
            this.ref.close(this.form.value);
        }
    }

}
