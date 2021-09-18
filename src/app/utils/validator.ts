import { AbstractControl } from "@angular/forms";
export class MyValidator{
    static isPriceValid(control: AbstractControl){
        const value=control.value;
        console.log(value);
    
        if (value>10_000) {
            return {price_invalid:true};
        }
        return null;
    }
}