import {HasHtmlFormat} from "./HasHtmlFormat.js";

export interface  HasRender{
    render(docOdj: HasHtmlFormat, docType: string ): void;
}