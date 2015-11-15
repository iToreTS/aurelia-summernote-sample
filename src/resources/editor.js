import {inject, bindable} from "aurelia-framework";
import {ObserverLocator} from "aurelia-binding";
import uuid from "uuid";
import $ from 'jquery'
import 'summernote/summernote'

@inject(ObserverLocator)
export class Editor {

	@bindable value = "";
	@bindable height = 250;

	editor_id = null;
	_editor = null;

	constructor(observerLocator) {
		this.editor_id = "summernote-" + uuid.v4();
		this.subscriptions = [
			observerLocator
				.getObserver(this, 'value')
				.subscribe(newValue => {
					if (this._editor && newValue !== this._editor.code()) {
						this._editor.code(newValue)
					}
				})
		]
	}

	attached() {
		this._editor = $(`#${this.editor_id}`);
		this._editor.summernote({
			height: this.height,
			onChange: (contents) => {
				this.value = contents;
			}
		});
		this._editor.code(this.value);
	}

	detached() {
		this._editor.destroy();
		while (this.subscriptions.length) {
			this.subscriptions.pop()();
		}
	}

}

