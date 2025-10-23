
import { AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { AccountService } from '../../account/account.service';
import { map } from 'rxjs';

export function UsernameCheckValidator(user: AccountService): AsyncValidatorFn {
    return (control: AbstractControl) => {
        return user.checkUserName(control.value)
            .pipe(
                map(userExists => (userExists === true) ? { usernamecheck: true } : null)
            );
    }
}