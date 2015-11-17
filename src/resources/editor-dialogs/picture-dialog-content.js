import {inject, transient} from "aurelia-framework"
import uuid from "uuid"

@transient()
export class PictureDialogContent {

	fileInputId;

	constructor() {
		this.fileInputId = 'pdc-' + uuid.v4();
	}

	attached() {
		this.fileInput = document.querySelector(`#${this.fileInputId}`);
	}

	validate() {
		// TODO: breeze とかいうのを使ってみる
	}

	getFileInput() {
		return this.fileInput;
	}

}
