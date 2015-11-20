System.config({
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "es7.decorators",
      "es7.classProperties"
    ]
  },
  paths: {
    "*": "dist/*",
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  bundles: {
    "app-build": [
      "app",
      "app.html!github:systemjs/plugin-text@0.0.2",
      "main",
      "nav-bar.html!github:systemjs/plugin-text@0.0.2",
      "welcome",
      "welcome.html!github:systemjs/plugin-text@0.0.2"
    ],
    "libs": [
      "github:jspm/nodelibs-process@0.1.2",
      "github:jspm/nodelibs-process@0.1.2/index",
      "github:pwkad/aurelia-bs-modal@0.2.3",
      "github:pwkad/aurelia-bs-modal@0.2.3/index",
      "github:summernote/summernote@0.6.16",
      "github:summernote/summernote@0.6.16/summernote",
      "github:twbs/bootstrap@3.3.5/css/bootstrap.css!github:systemjs/plugin-text@0.0.2",
      "npm:component-emitter@1.1.2",
      "npm:component-emitter@1.1.2/index",
      "npm:jquery@2.1.4",
      "npm:jquery@2.1.4/dist/jquery",
      "npm:process@0.11.2",
      "npm:process@0.11.2/browser",
      "npm:reduce-component@1.0.1",
      "npm:reduce-component@1.0.1/index",
      "npm:superagent@1.4.0",
      "npm:superagent@1.4.0/lib/client",
      "npm:uuid@2.0.1",
      "npm:uuid@2.0.1/rng-browser",
      "npm:uuid@2.0.1/uuid"
    ],
    "aurelia": [
      "github:aurelia/animator-css@0.18.0",
      "github:aurelia/animator-css@0.18.0/aurelia-animator-css",
      "github:aurelia/binding@0.11.0",
      "github:aurelia/binding@0.11.0/aurelia-binding",
      "github:aurelia/bootstrapper@0.19.0",
      "github:aurelia/bootstrapper@0.19.0/aurelia-bootstrapper",
      "github:aurelia/dependency-injection@0.12.0",
      "github:aurelia/dependency-injection@0.12.0/aurelia-dependency-injection",
      "github:aurelia/event-aggregator@0.10.0",
      "github:aurelia/event-aggregator@0.10.0/aurelia-event-aggregator",
      "github:aurelia/fetch-client@0.4.0",
      "github:aurelia/fetch-client@0.4.0/aurelia-fetch-client",
      "github:aurelia/framework@0.18.0",
      "github:aurelia/framework@0.18.0/aurelia-framework",
      "github:aurelia/history-browser@0.10.0",
      "github:aurelia/history-browser@0.10.0/aurelia-history-browser",
      "github:aurelia/history@0.9.0",
      "github:aurelia/history@0.9.0/aurelia-history",
      "github:aurelia/loader-default@0.12.0",
      "github:aurelia/loader-default@0.12.0/aurelia-loader-default",
      "github:aurelia/loader@0.11.0",
      "github:aurelia/loader@0.11.0/aurelia-loader",
      "github:aurelia/logging-console@0.9.0",
      "github:aurelia/logging-console@0.9.0/aurelia-logging-console",
      "github:aurelia/logging@0.9.0",
      "github:aurelia/logging@0.9.0/aurelia-logging",
      "github:aurelia/metadata@0.10.0",
      "github:aurelia/metadata@0.10.0/aurelia-metadata",
      "github:aurelia/pal-browser@0.3.0",
      "github:aurelia/pal-browser@0.3.0/aurelia-pal-browser",
      "github:aurelia/pal@0.3.0",
      "github:aurelia/pal@0.3.0/aurelia-pal",
      "github:aurelia/path@0.11.0",
      "github:aurelia/path@0.11.0/aurelia-path",
      "github:aurelia/route-recognizer@0.9.0",
      "github:aurelia/route-recognizer@0.9.0/aurelia-route-recognizer",
      "github:aurelia/router@0.14.0",
      "github:aurelia/router@0.14.0/aurelia-router",
      "github:aurelia/task-queue@0.9.0",
      "github:aurelia/task-queue@0.9.0/aurelia-task-queue",
      "github:aurelia/templating-binding@0.17.0",
      "github:aurelia/templating-binding@0.17.0/aurelia-templating-binding",
      "github:aurelia/templating-resources@0.17.0",
      "github:aurelia/templating-resources@0.17.0/array-collection-strategy",
      "github:aurelia/templating-resources@0.17.0/aurelia-templating-resources",
      "github:aurelia/templating-resources@0.17.0/binding-mode-behaviors",
      "github:aurelia/templating-resources@0.17.0/binding-signaler",
      "github:aurelia/templating-resources@0.17.0/collection-strategy",
      "github:aurelia/templating-resources@0.17.0/collection-strategy-locator",
      "github:aurelia/templating-resources@0.17.0/compile-spy",
      "github:aurelia/templating-resources@0.17.0/compose",
      "github:aurelia/templating-resources@0.17.0/css-resource",
      "github:aurelia/templating-resources@0.17.0/debounce-binding-behavior",
      "github:aurelia/templating-resources@0.17.0/dynamic-element",
      "github:aurelia/templating-resources@0.17.0/focus",
      "github:aurelia/templating-resources@0.17.0/html-sanitizer",
      "github:aurelia/templating-resources@0.17.0/if",
      "github:aurelia/templating-resources@0.17.0/map-collection-strategy",
      "github:aurelia/templating-resources@0.17.0/number-strategy",
      "github:aurelia/templating-resources@0.17.0/repeat",
      "github:aurelia/templating-resources@0.17.0/replaceable",
      "github:aurelia/templating-resources@0.17.0/sanitize-html",
      "github:aurelia/templating-resources@0.17.0/show",
      "github:aurelia/templating-resources@0.17.0/signal-binding-behavior",
      "github:aurelia/templating-resources@0.17.0/throttle-binding-behavior",
      "github:aurelia/templating-resources@0.17.0/update-trigger-binding-behavior",
      "github:aurelia/templating-resources@0.17.0/view-spy",
      "github:aurelia/templating-resources@0.17.0/with",
      "github:aurelia/templating-router@0.18.0",
      "github:aurelia/templating-router@0.18.0/aurelia-templating-router",
      "github:aurelia/templating-router@0.18.0/route-href",
      "github:aurelia/templating-router@0.18.0/route-loader",
      "github:aurelia/templating-router@0.18.0/router-view",
      "github:aurelia/templating@0.17.0",
      "github:aurelia/templating@0.17.0/aurelia-templating",
      "github:github/fetch@0.10.1",
      "github:github/fetch@0.10.1/fetch",
      "github:jspm/nodelibs-process@0.1.2",
      "github:jspm/nodelibs-process@0.1.2/index",
      "github:systemjs/plugin-text@0.0.2",
      "github:systemjs/plugin-text@0.0.2/text",
      "npm:babel-runtime@5.8.29/core-js/object/create",
      "npm:babel-runtime@5.8.29/core-js/object/define-property",
      "npm:babel-runtime@5.8.29/core-js/promise",
      "npm:babel-runtime@5.8.29/core-js/symbol",
      "npm:babel-runtime@5.8.29/core-js/symbol/iterator",
      "npm:babel-runtime@5.8.29/helpers/class-call-check",
      "npm:babel-runtime@5.8.29/helpers/create-class",
      "npm:babel-runtime@5.8.29/helpers/create-decorated-class",
      "npm:babel-runtime@5.8.29/helpers/define-decorated-property-descriptor",
      "npm:babel-runtime@5.8.29/regenerator",
      "npm:babel-runtime@5.8.29/regenerator/index",
      "npm:babel-runtime@5.8.29/regenerator/runtime",
      "npm:core-js@1.2.6",
      "npm:core-js@1.2.6/client/shim.min",
      "npm:core-js@1.2.6/library/fn/object/create",
      "npm:core-js@1.2.6/library/fn/object/define-property",
      "npm:core-js@1.2.6/library/fn/promise",
      "npm:core-js@1.2.6/library/fn/symbol",
      "npm:core-js@1.2.6/library/fn/symbol/index",
      "npm:core-js@1.2.6/library/fn/symbol/iterator",
      "npm:core-js@1.2.6/library/modules/$",
      "npm:core-js@1.2.6/library/modules/$.a-function",
      "npm:core-js@1.2.6/library/modules/$.add-to-unscopables",
      "npm:core-js@1.2.6/library/modules/$.an-object",
      "npm:core-js@1.2.6/library/modules/$.classof",
      "npm:core-js@1.2.6/library/modules/$.cof",
      "npm:core-js@1.2.6/library/modules/$.core",
      "npm:core-js@1.2.6/library/modules/$.ctx",
      "npm:core-js@1.2.6/library/modules/$.defined",
      "npm:core-js@1.2.6/library/modules/$.descriptors",
      "npm:core-js@1.2.6/library/modules/$.dom-create",
      "npm:core-js@1.2.6/library/modules/$.enum-keys",
      "npm:core-js@1.2.6/library/modules/$.export",
      "npm:core-js@1.2.6/library/modules/$.fails",
      "npm:core-js@1.2.6/library/modules/$.for-of",
      "npm:core-js@1.2.6/library/modules/$.get-names",
      "npm:core-js@1.2.6/library/modules/$.global",
      "npm:core-js@1.2.6/library/modules/$.has",
      "npm:core-js@1.2.6/library/modules/$.hide",
      "npm:core-js@1.2.6/library/modules/$.html",
      "npm:core-js@1.2.6/library/modules/$.invoke",
      "npm:core-js@1.2.6/library/modules/$.iobject",
      "npm:core-js@1.2.6/library/modules/$.is-array",
      "npm:core-js@1.2.6/library/modules/$.is-array-iter",
      "npm:core-js@1.2.6/library/modules/$.is-object",
      "npm:core-js@1.2.6/library/modules/$.iter-call",
      "npm:core-js@1.2.6/library/modules/$.iter-create",
      "npm:core-js@1.2.6/library/modules/$.iter-define",
      "npm:core-js@1.2.6/library/modules/$.iter-detect",
      "npm:core-js@1.2.6/library/modules/$.iter-step",
      "npm:core-js@1.2.6/library/modules/$.iterators",
      "npm:core-js@1.2.6/library/modules/$.keyof",
      "npm:core-js@1.2.6/library/modules/$.library",
      "npm:core-js@1.2.6/library/modules/$.microtask",
      "npm:core-js@1.2.6/library/modules/$.property-desc",
      "npm:core-js@1.2.6/library/modules/$.redefine",
      "npm:core-js@1.2.6/library/modules/$.redefine-all",
      "npm:core-js@1.2.6/library/modules/$.same-value",
      "npm:core-js@1.2.6/library/modules/$.set-proto",
      "npm:core-js@1.2.6/library/modules/$.set-species",
      "npm:core-js@1.2.6/library/modules/$.set-to-string-tag",
      "npm:core-js@1.2.6/library/modules/$.shared",
      "npm:core-js@1.2.6/library/modules/$.species-constructor",
      "npm:core-js@1.2.6/library/modules/$.strict-new",
      "npm:core-js@1.2.6/library/modules/$.string-at",
      "npm:core-js@1.2.6/library/modules/$.task",
      "npm:core-js@1.2.6/library/modules/$.to-integer",
      "npm:core-js@1.2.6/library/modules/$.to-iobject",
      "npm:core-js@1.2.6/library/modules/$.to-length",
      "npm:core-js@1.2.6/library/modules/$.uid",
      "npm:core-js@1.2.6/library/modules/$.wks",
      "npm:core-js@1.2.6/library/modules/core.get-iterator-method",
      "npm:core-js@1.2.6/library/modules/es6.array.iterator",
      "npm:core-js@1.2.6/library/modules/es6.object.to-string",
      "npm:core-js@1.2.6/library/modules/es6.promise",
      "npm:core-js@1.2.6/library/modules/es6.string.iterator",
      "npm:core-js@1.2.6/library/modules/es6.symbol",
      "npm:core-js@1.2.6/library/modules/web.dom.iterable",
      "npm:font-awesome@4.4.0",
      "npm:font-awesome@4.4.0/css/font-awesome.css!github:systemjs/plugin-css@0.1.19",
      "npm:process@0.11.2",
      "npm:process@0.11.2/browser"
    ]
  },

  map: {
    "aurelia-animator-css": "github:aurelia/animator-css@0.18.0",
    "aurelia-binding": "github:aurelia/binding@0.11.0",
    "aurelia-bootstrapper": "github:aurelia/bootstrapper@0.19.0",
    "aurelia-bs-modal": "github:pwkad/aurelia-bs-modal@0.2.3",
    "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.12.0",
    "aurelia-event-aggregator": "github:aurelia/event-aggregator@0.10.0",
    "aurelia-fetch-client": "github:aurelia/fetch-client@0.4.0",
    "aurelia-framework": "github:aurelia/framework@0.18.0",
    "aurelia-history": "github:aurelia/history@0.9.0",
    "aurelia-history-browser": "github:aurelia/history-browser@0.10.0",
    "aurelia-loader": "github:aurelia/loader@0.11.0",
    "aurelia-loader-default": "github:aurelia/loader-default@0.12.0",
    "aurelia-logging": "github:aurelia/logging@0.9.0",
    "aurelia-metadata": "github:aurelia/metadata@0.10.0",
    "aurelia-pal": "github:aurelia/pal@0.3.0",
    "aurelia-pal-browser": "github:aurelia/pal-browser@0.3.0",
    "aurelia-path": "github:aurelia/path@0.11.0",
    "aurelia-route-recognizer": "github:aurelia/route-recognizer@0.9.0",
    "aurelia-router": "github:aurelia/router@0.14.0",
    "aurelia-task-queue": "github:aurelia/task-queue@0.9.0",
    "aurelia-templating": "github:aurelia/templating@0.17.0",
    "aurelia-templating-binding": "github:aurelia/templating-binding@0.17.0",
    "aurelia-templating-resources": "github:aurelia/templating-resources@0.17.0",
    "aurelia-templating-router": "github:aurelia/templating-router@0.18.0",
    "babel": "npm:babel-core@5.8.34",
    "babel-runtime": "npm:babel-runtime@5.8.29",
    "basecamp/trix": "github:basecamp/trix@0.9.1",
    "bootstrap": "github:twbs/bootstrap@3.3.5",
    "clean-css": "npm:clean-css@3.4.8",
    "core-js": "npm:core-js@1.2.6",
    "fetch": "github:github/fetch@0.10.1",
    "font-awesome": "npm:font-awesome@4.4.0",
    "jquery": "npm:jquery@2.1.4",
    "summernote/summernote": "github:summernote/summernote@0.6.16",
    "superagent": "npm:superagent@1.4.0",
    "text": "github:systemjs/plugin-text@0.0.2",
    "uuid": "npm:uuid@2.0.1",
    "github:aurelia/animator-css@0.18.0": {
      "aurelia-metadata": "github:aurelia/metadata@0.10.0",
      "aurelia-pal": "github:aurelia/pal@0.3.0",
      "aurelia-templating": "github:aurelia/templating@0.17.0"
    },
    "github:aurelia/binding@0.11.0": {
      "aurelia-metadata": "github:aurelia/metadata@0.10.0",
      "aurelia-pal": "github:aurelia/pal@0.3.0",
      "aurelia-task-queue": "github:aurelia/task-queue@0.9.0",
      "core-js": "npm:core-js@1.2.6"
    },
    "github:aurelia/bootstrapper@0.19.0": {
      "aurelia-event-aggregator": "github:aurelia/event-aggregator@0.10.0",
      "aurelia-framework": "github:aurelia/framework@0.18.0",
      "aurelia-history": "github:aurelia/history@0.9.0",
      "aurelia-history-browser": "github:aurelia/history-browser@0.10.0",
      "aurelia-loader-default": "github:aurelia/loader-default@0.12.0",
      "aurelia-logging-console": "github:aurelia/logging-console@0.9.0",
      "aurelia-pal": "github:aurelia/pal@0.3.0",
      "aurelia-pal-browser": "github:aurelia/pal-browser@0.3.0",
      "aurelia-router": "github:aurelia/router@0.14.0",
      "aurelia-templating": "github:aurelia/templating@0.17.0",
      "aurelia-templating-binding": "github:aurelia/templating-binding@0.17.0",
      "aurelia-templating-resources": "github:aurelia/templating-resources@0.17.0",
      "aurelia-templating-router": "github:aurelia/templating-router@0.18.0",
      "core-js": "npm:core-js@1.2.6"
    },
    "github:aurelia/dependency-injection@0.12.0": {
      "aurelia-logging": "github:aurelia/logging@0.9.0",
      "aurelia-metadata": "github:aurelia/metadata@0.10.0",
      "aurelia-pal": "github:aurelia/pal@0.3.0",
      "core-js": "npm:core-js@1.2.6"
    },
    "github:aurelia/event-aggregator@0.10.0": {
      "aurelia-logging": "github:aurelia/logging@0.9.0"
    },
    "github:aurelia/fetch-client@0.4.0": {
      "core-js": "npm:core-js@1.2.6"
    },
    "github:aurelia/framework@0.18.0": {
      "aurelia-binding": "github:aurelia/binding@0.11.0",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.12.0",
      "aurelia-loader": "github:aurelia/loader@0.11.0",
      "aurelia-logging": "github:aurelia/logging@0.9.0",
      "aurelia-metadata": "github:aurelia/metadata@0.10.0",
      "aurelia-pal": "github:aurelia/pal@0.3.0",
      "aurelia-path": "github:aurelia/path@0.11.0",
      "aurelia-task-queue": "github:aurelia/task-queue@0.9.0",
      "aurelia-templating": "github:aurelia/templating@0.17.0",
      "core-js": "npm:core-js@1.2.6"
    },
    "github:aurelia/history-browser@0.10.0": {
      "aurelia-history": "github:aurelia/history@0.9.0",
      "aurelia-pal": "github:aurelia/pal@0.3.0",
      "core-js": "npm:core-js@1.2.6"
    },
    "github:aurelia/loader-default@0.12.0": {
      "aurelia-loader": "github:aurelia/loader@0.11.0",
      "aurelia-metadata": "github:aurelia/metadata@0.10.0",
      "aurelia-pal": "github:aurelia/pal@0.3.0"
    },
    "github:aurelia/loader@0.11.0": {
      "aurelia-metadata": "github:aurelia/metadata@0.10.0",
      "aurelia-path": "github:aurelia/path@0.11.0"
    },
    "github:aurelia/logging-console@0.9.0": {
      "aurelia-logging": "github:aurelia/logging@0.9.0",
      "aurelia-pal": "github:aurelia/pal@0.3.0"
    },
    "github:aurelia/metadata@0.10.0": {
      "aurelia-pal": "github:aurelia/pal@0.3.0",
      "core-js": "npm:core-js@1.2.6"
    },
    "github:aurelia/pal-browser@0.3.0": {
      "aurelia-pal": "github:aurelia/pal@0.3.0"
    },
    "github:aurelia/route-recognizer@0.9.0": {
      "aurelia-path": "github:aurelia/path@0.11.0",
      "core-js": "npm:core-js@1.2.6"
    },
    "github:aurelia/router@0.14.0": {
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.12.0",
      "aurelia-event-aggregator": "github:aurelia/event-aggregator@0.10.0",
      "aurelia-history": "github:aurelia/history@0.9.0",
      "aurelia-logging": "github:aurelia/logging@0.9.0",
      "aurelia-path": "github:aurelia/path@0.11.0",
      "aurelia-route-recognizer": "github:aurelia/route-recognizer@0.9.0",
      "core-js": "npm:core-js@1.2.6"
    },
    "github:aurelia/task-queue@0.9.0": {
      "aurelia-pal": "github:aurelia/pal@0.3.0"
    },
    "github:aurelia/templating-binding@0.17.0": {
      "aurelia-binding": "github:aurelia/binding@0.11.0",
      "aurelia-logging": "github:aurelia/logging@0.9.0",
      "aurelia-templating": "github:aurelia/templating@0.17.0"
    },
    "github:aurelia/templating-resources@0.17.0": {
      "aurelia-binding": "github:aurelia/binding@0.11.0",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.12.0",
      "aurelia-loader": "github:aurelia/loader@0.11.0",
      "aurelia-logging": "github:aurelia/logging@0.9.0",
      "aurelia-pal": "github:aurelia/pal@0.3.0",
      "aurelia-path": "github:aurelia/path@0.11.0",
      "aurelia-task-queue": "github:aurelia/task-queue@0.9.0",
      "aurelia-templating": "github:aurelia/templating@0.17.0",
      "core-js": "npm:core-js@1.2.6"
    },
    "github:aurelia/templating-router@0.18.0": {
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.12.0",
      "aurelia-logging": "github:aurelia/logging@0.9.0",
      "aurelia-metadata": "github:aurelia/metadata@0.10.0",
      "aurelia-pal": "github:aurelia/pal@0.3.0",
      "aurelia-path": "github:aurelia/path@0.11.0",
      "aurelia-router": "github:aurelia/router@0.14.0",
      "aurelia-templating": "github:aurelia/templating@0.17.0"
    },
    "github:aurelia/templating@0.17.0": {
      "aurelia-binding": "github:aurelia/binding@0.11.0",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.12.0",
      "aurelia-loader": "github:aurelia/loader@0.11.0",
      "aurelia-logging": "github:aurelia/logging@0.9.0",
      "aurelia-metadata": "github:aurelia/metadata@0.10.0",
      "aurelia-pal": "github:aurelia/pal@0.3.0",
      "aurelia-path": "github:aurelia/path@0.11.0",
      "aurelia-task-queue": "github:aurelia/task-queue@0.9.0",
      "core-js": "npm:core-js@1.2.6"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.5.2"
    },
    "github:jspm/nodelibs-constants@0.1.0": {
      "constants-browserify": "npm:constants-browserify@0.0.1"
    },
    "github:jspm/nodelibs-crypto@0.1.0": {
      "crypto-browserify": "npm:crypto-browserify@3.11.0"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-net@0.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "timers": "github:jspm/nodelibs-timers@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-querystring@0.1.0": {
      "querystring": "npm:querystring@0.2.0"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-string_decoder@0.1.0": {
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "github:jspm/nodelibs-timers@0.1.0": {
      "timers-browserify": "npm:timers-browserify@1.4.1"
    },
    "github:jspm/nodelibs-tty@0.1.0": {
      "tty-browserify": "npm:tty-browserify@0.0.0"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "github:jspm/nodelibs-zlib@0.1.0": {
      "browserify-zlib": "npm:browserify-zlib@0.1.4"
    },
    "github:pwkad/aurelia-bs-modal@0.2.3": {
      "babel": "npm:babel-core@5.8.34",
      "jquery": "github:components/jquery@2.1.4"
    },
    "github:twbs/bootstrap@3.3.5": {
      "jquery": "github:components/jquery@2.1.4"
    },
    "npm:amdefine@1.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:asn1.js@4.0.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "bn.js": "npm:bn.js@4.1.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:async@0.9.2": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:babel-runtime@5.8.29": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:browserify-aes@1.0.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "buffer-xor": "npm:buffer-xor@1.0.3",
      "cipher-base": "npm:cipher-base@1.0.2",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:browserify-cipher@1.0.0": {
      "browserify-aes": "npm:browserify-aes@1.0.5",
      "browserify-des": "npm:browserify-des@1.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
    },
    "npm:browserify-des@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "des.js": "npm:des.js@1.0.0",
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:browserify-rsa@4.0.0": {
      "bn.js": "npm:bn.js@4.1.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:browserify-sign@4.0.0": {
      "bn.js": "npm:bn.js@4.1.1",
      "browserify-rsa": "npm:browserify-rsa@4.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.0.2",
      "inherits": "npm:inherits@2.0.1",
      "parse-asn1": "npm:parse-asn1@5.0.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:browserify-zlib@0.1.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "pako": "npm:pako@0.2.8",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@1.0.27-1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:buffer-xor@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:buffer@3.5.2": {
      "base64-js": "npm:base64-js@0.0.8",
      "ieee754": "npm:ieee754@1.1.6",
      "is-array": "npm:is-array@1.0.1"
    },
    "npm:cipher-base@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0"
    },
    "npm:clean-css@3.4.8": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "commander": "npm:commander@2.8.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.4.4",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:combined-stream@0.0.7": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "delayed-stream": "npm:delayed-stream@0.0.5",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:commander@2.8.1": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "graceful-readlink": "npm:graceful-readlink@1.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:constants-browserify@0.0.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-js@1.2.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-util-is@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:create-ecdh@4.0.0": {
      "bn.js": "npm:bn.js@4.1.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.0.2"
    },
    "npm:create-hash@1.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "ripemd160": "npm:ripemd160@1.0.1",
      "sha.js": "npm:sha.js@2.4.4"
    },
    "npm:create-hmac@1.1.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:crypto-browserify@3.11.0": {
      "browserify-cipher": "npm:browserify-cipher@1.0.0",
      "browserify-sign": "npm:browserify-sign@4.0.0",
      "create-ecdh": "npm:create-ecdh@4.0.0",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "diffie-hellman": "npm:diffie-hellman@5.0.0",
      "inherits": "npm:inherits@2.0.1",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "public-encrypt": "npm:public-encrypt@4.0.0",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:debug@2.2.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ms": "npm:ms@0.7.1",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "tty": "github:jspm/nodelibs-tty@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:delayed-stream@0.0.5": {
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:des.js@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
    },
    "npm:diffie-hellman@5.0.0": {
      "bn.js": "npm:bn.js@4.1.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "miller-rabin": "npm:miller-rabin@4.0.0",
      "randombytes": "npm:randombytes@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:elliptic@6.0.2": {
      "bn.js": "npm:bn.js@4.1.1",
      "brorand": "npm:brorand@1.0.5",
      "hash.js": "npm:hash.js@1.0.3",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:evp_bytestokey@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:font-awesome@4.4.0": {
      "css": "github:systemjs/plugin-css@0.1.19"
    },
    "npm:form-data@0.2.0": {
      "async": "npm:async@0.9.2",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "combined-stream": "npm:combined-stream@0.0.7",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "mime-types": "npm:mime-types@2.0.14",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:formidable@1.0.14": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:graceful-readlink@1.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:hash.js@1.0.3": {
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:jquery@2.1.4": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:methods@1.0.1": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:miller-rabin@4.0.0": {
      "bn.js": "npm:bn.js@4.1.1",
      "brorand": "npm:brorand@1.0.5"
    },
    "npm:mime-db@1.12.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:mime-types@2.0.14": {
      "mime-db": "npm:mime-db@1.12.0"
    },
    "npm:mime@1.3.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:pako@0.2.8": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:parse-asn1@5.0.0": {
      "asn1.js": "npm:asn1.js@4.0.0",
      "browserify-aes": "npm:browserify-aes@1.0.5",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:pbkdf2@3.0.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:public-encrypt@4.0.0": {
      "bn.js": "npm:bn.js@4.1.1",
      "browserify-rsa": "npm:browserify-rsa@4.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "parse-asn1": "npm:parse-asn1@5.0.0",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:randombytes@2.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:readable-stream@1.0.27-1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:readable-stream@1.1.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:ripemd160@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:sha.js@2.4.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:source-map@0.4.4": {
      "amdefine": "npm:amdefine@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.13"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:superagent@1.4.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "component-emitter": "npm:component-emitter@1.1.2",
      "cookiejar": "npm:cookiejar@2.0.1",
      "debug": "npm:debug@2.2.0",
      "extend": "npm:extend@1.2.1",
      "form-data": "npm:form-data@0.2.0",
      "formidable": "npm:formidable@1.0.14",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "methods": "npm:methods@1.0.1",
      "mime": "npm:mime@1.3.4",
      "qs": "npm:qs@2.3.3",
      "readable-stream": "npm:readable-stream@1.0.27-1",
      "reduce-component": "npm:reduce-component@1.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:timers-browserify@1.4.1": {
      "process": "npm:process@0.11.2"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:uuid@2.0.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    }
  }
});
