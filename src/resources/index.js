import $ from 'jquery'
import 'summernote/summernote'

export function configure(aurelia) {
	aurelia.globalResources('./editor');

	addSummernotePlugins();
}

function addSummernotePlugins() {

	let tmpl = $.summernote.renderer.getTemplate();

	// picture button to invoke Editor view-model's method
	$.summernote.addPlugin({
		// plugin's name
		name: 'picture',
		buttons: {
			picture: function() {
				return tmpl.iconButton('fa fa-picture-o', {
					event: 'pictureRequest',
					title: '画像を挿入',
					hide: true
				});
			}
		},
		events: {
			pictureRequest: function(event, editor, layoutInfo) {
				editor = layoutInfo.holder();
				var viewModel = editor.data('view-model');
				if (viewModel && viewModel.onPictureRequest) {
					viewModel.onPictureRequest();
				}
			}
		}
	});

}