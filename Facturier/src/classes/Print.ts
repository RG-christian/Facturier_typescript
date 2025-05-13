import {HaspPrint} from "../Interfaces/HasPrint.js"

export class Print implements HaspPrint {

    constructor(private el: HTMLElement) {}


    print(){
    document.body.innerHTML = this.el.innerHTML;
    window.print();
    document.location.reload();

    }
}