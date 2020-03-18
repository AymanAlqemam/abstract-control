import { AbstractControl, ValidationErrors } from '@angular/forms';
export class UsernameValidator {
    static cannotContainSpace(control: AbstractControl) : ValidationErrors | null {
        // console.log('hi', control)
        if((control.value as string).indexOf(' ') >= 0){
            return {cannotContainSpace: true}
        }
        return null;
    }
}
