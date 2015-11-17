import {inject, bindable, inlineView} from "aurelia-framework"
import {PictureDialogContent} from "./picture-dialog-content"

@inject(Element, PictureDialogContent)
export class PictureDialog {

	@bindable shown = false;
	@bindable uploading = false;
	@bindable editor;
	@bindable editorId;

	/**
	 * @param {Element} element
	 * @param {PictureDialogContent} dialogContent
	 */
	constructor(element, dialogContent) {
		this.element = element;
		this.dialogContent = dialogContent;
	}

	attached() {
		this.dialogContent.editorId = this.editorId;
	}

	close() {
		this.shown = false;
	}

	submit() {
		let file = this.dialogContent.getFileInput();
		if (file) {
			this.element.dispatchEvent(new CustomEvent('submit', {detail: file}))
		}
	}

}
