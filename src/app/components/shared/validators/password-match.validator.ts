import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";

export function PasswordMatchValidator(): ValidatorFn {
    return (form: AbstractControl): ValidationErrors | null => {
        
        const password = form.value.password;
        const confirmPassword = form.value.confirmPassword;
        if (password === confirmPassword) {
            return null;
        }

        return { passwordmatch: true };
    }
}