import {HasRender} from "../Interfaces/hasRender.js";
import {HasHtmlFormat} from "../Interfaces/HasHtmlFormat.js";
import {Storage} from "./Storage.js";

export class Display implements HasRender{
    formContainer: HTMLDivElement;

    constructor(
        private container: HTMLDivElement,
        private hiddenDiv: HTMLDivElement,
        private btnPrint: HTMLButtonElement

    ) {
         this.formContainer = document.getElementById('form-container') as HTMLDivElement;
      }

        render(docObj: HasHtmlFormat, docType: string) {
            const htmlString: string = docObj.htmlFormat();
            this.container.innerHTML = docObj.htmlFormat();


            new Storage(docType, htmlString);
            if (docType === 'invoice'){
                this.btnPrint.innerText="Imprimer la facture"

            }else{
                this.btnPrint.innerText="Imprimer le devis ";

            }
            this.hiddenDiv.classList.remove('invisible');
            this.formContainer.innerHTML= "";
    }

}

