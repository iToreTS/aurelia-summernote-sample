import {inject, bindable} from "aurelia-framework"
import {ObserverLocator} from "aurelia-binding"
import uuid from "uuid"
import $ from 'jquery'
import 'summernote/summernote'
import superagent from 'superagent'

@inject(Element, ObserverLocator)
export class Editor {

	@bindable value = "";
	@bindable height = 250;
	@bindable toolbar = [
		['style', ['style', 'bold', 'clear']],
		['color', ['color']],
		['font', ['strikethrough', 'superscript', 'subscript']],
		['layout', ['ul', 'ol', 'paragraph']],
		['insert', ['picture', 'link', 'table', 'hello']],
		['misc', ['undo', 'redo', 'fullscreen', 'codeview']]
	];
	@bindable pictureUploadParams = {};

	editorId = null;
	editor = null;
	pictureDialogShown = false;
	pictureUploading = false;

	constructor(element, observerLocator) {
		this.element = element;
		this.editorId = "summernote-" + uuid.v4();
		this.subscriptions = [
			observerLocator
				.getObserver(this, 'value')
				.subscribe(newValue => {
					if (this.editor && newValue !== this.editor.code()) {
						this.editor.code(newValue)
					}
				})
		]
	}

	attached() {
		this.editor = $(`#${this.editorId}`);
		this.editor.data('view-model', this);
		this.editor.summernote({
			height: this.height,
			toolbar: this.toolbar,
			onChange: (contents) => {
				this.value = contents;
			}
		});
		this.editor.code(this.value);
	}

	detached() {
		this.editor.destroy();
		while (this.subscriptions.length) {
			this.subscriptions.pop()();
		}
	}

	onPictureRequest() {
		this.pictureDialogShown = true;
	}

	async pictureSubmit(event) {
		let fileInput = event.detail;
		this.pictureUploading = true;
		let request = superagent.post('/api/upload');
		for (var prop in this.pictureUploadParams) {
			if (this.pictureUploadParams.hasOwnProperty(prop))
				request.field(prop, this.pictureUploadParams[prop]);
		}
		let res = await new Promise((resolve, rejected) => {
			request
				.attach("file", fileInput.files[0], fileInput.value)
				.on('progress', e => console.debug(e.percent))
				.end((err, res) => {
					if (err) rejected(err);
					resolve(res.body);
				})
		});
		this.editor.summernote('insertImage', res.url);
		this.pictureDialogShown = false;
		this.pictureUploading = false;
	}

}

