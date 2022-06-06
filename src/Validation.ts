import { FormGroup } from '@angular/forms';

export class ConfirmValidation {
    public static Confirm(controlname1: any, controlname2: any) {
        if(controlname1==controlname2)
        return true;
        return false;
      
    }
}

