(function() {
var VERSION = Y.version,
ROOT = VERSION + '/build/',
GALLERY_VERSION = Y.config.gallery || Y.gallery,
GALLERY_ROOT = GALLERY_VERSION + '/build/',
GALLERY_BASE = 'http://yui.yahooapis.com/' + GALLERY_ROOT,
META = {
    version: VERSION,
    root: ROOT,
    base: 'http://yui.yahooapis.com/' + ROOT,
    comboBase: 'http://yui.yahooapis.com/combo?',
    skin: {
        defaultSkin: 'sam',
        base: 'assets/skins/',
        path: 'skin.css',
        after: ['cssreset', 'cssfonts', 'cssreset-context', 'cssfonts-context']
        //rollup: 3
    },

    modules: {
    "anim": {
        "submodules": {
            "anim-base": {
                "requires": [
                    "base-base", 
                    "node-style"
                ]
            }, 
            "anim-color": {
                "requires": [
                    "anim-base"
                ]
            }, 
            "anim-curve": {
                "requires": [
                    "anim-xy"
                ]
            }, 
            "anim-easing": {
                "requires": [
                    "anim-base"
                ]
            }, 
            "anim-node-plugin": {
                "requires": [
                    "node-pluginhost", 
                    "anim-base"
                ]
            }, 
            "anim-scroll": {
                "requires": [
                    "anim-base"
                ]
            }, 
            "anim-xy": {
                "requires": [
                    "anim-base", 
                    "node-screen"
                ]
            }
        }
    }, 
    "async-queue": {
        "requires": [
            "event-custom"
        ]
    }, 
    "attribute": {
        "submodules": {
            "attribute-base": {
                "requires": [
                    "event-custom"
                ]
            }, 
            "attribute-complex": {
                "requires": [
                    "attribute-base"
                ]
            }
        }
    }, 
    "base": {
        "submodules": {
            "base-base": {
                "requires": [
                    "attribute-base"
                ]
            }, 
            "base-build": {
                "requires": [
                    "base-base"
                ]
            }, 
            "base-pluginhost": {
                "requires": [
                    "base-base", 
                    "pluginhost"
                ]
            }
        }
    }, 
    "cache": {
        "requires": [
            "plugin"
        ]
    }, 
    "classnamemanager": {
        "requires": [
            "yui-base"
        ]
    }, 
    "collection": {
        "submodules": {
            "array-extras": {}, 
            "array-invoke": {}, 
            "arraylist": {}, 
            "arraylist-add": {
                "requires": [
                    "arraylist"
                ]
            }, 
            "arraylist-filter": {
                "requires": [
                    "arraylist"
                ]
            }
        }
    }, 
    "compat": {
        "requires": [
            "event-base", 
            "dom", 
            "dump", 
            "substitute"
        ]
    }, 
    "console": {
        "plugins": {
            "console-filters": {
                "requires": [
                    "plugin", 
                    "console", 
                    "skin-sam-console-filters"
                ], 
                "skinnable": true
            }
        }, 
        "requires": [
            "yui-log", 
            "widget", 
            "substitute", 
            "skin-sam-console"
        ], 
        "skinnable": true
    }, 
    "cookie": {
        "requires": [
            "yui-base"
        ]
    }, 
    "cssbase": {
        "after": [
            "cssreset", 
            "cssfonts", 
            "cssgrids", 
            "cssreset-context", 
            "cssfonts-context", 
            "cssgrids-context"
        ], 
        "type": "css"
    }, 
    "cssbase-context": {
        "after": [
            "cssreset", 
            "cssfonts", 
            "cssgrids", 
            "cssreset-context", 
            "cssfonts-context", 
            "cssgrids-context"
        ], 
        "path": "cssbase/base-context-min.css", 
        "type": "css"
    }, 
    "cssfonts": {
        "type": "css"
    }, 
    "cssfonts-context": {
        "path": "cssfonts/fonts-context-min.css", 
        "type": "css"
    }, 
    "cssgrids": {
        "optional": [
            "cssreset"
        ], 
        "requires": [
            "cssfonts"
        ], 
        "type": "css"
    }, 
    "cssgrids-context": {
        "optional": [
            "cssreset-context"
        ], 
        "path": "cssgrids/grids-context-min.css", 
        "requires": [
            "cssfonts-context"
        ], 
        "type": "css"
    }, 
    "cssreset": {
        "type": "css"
    }, 
    "cssreset-context": {
        "path": "cssreset/reset-context-min.css", 
        "type": "css"
    }, 
    "dataschema": {
        "submodules": {
            "dataschema-array": {
                "requires": [
                    "dataschema-base"
                ]
            }, 
            "dataschema-base": {
                "requires": [
                    "base"
                ]
            }, 
            "dataschema-json": {
                "requires": [
                    "dataschema-base", 
                    "json"
                ]
            }, 
            "dataschema-text": {
                "requires": [
                    "dataschema-base"
                ]
            }, 
            "dataschema-xml": {
                "requires": [
                    "dataschema-base"
                ]
            }
        }
    }, 
    "datasource": {
        "submodules": {
            "datasource-arrayschema": {
                "requires": [
                    "datasource-local", 
                    "plugin", 
                    "dataschema-array"
                ]
            }, 
            "datasource-cache": {
                "requires": [
                    "datasource-local", 
                    "cache"
                ]
            }, 
            "datasource-function": {
                "requires": [
                    "datasource-local"
                ]
            }, 
            "datasource-get": {
                "requires": [
                    "datasource-local", 
                    "get"
                ]
            }, 
            "datasource-io": {
                "requires": [
                    "datasource-local", 
                    "io-base"
                ]
            }, 
            "datasource-jsonschema": {
                "requires": [
                    "datasource-local", 
                    "plugin", 
                    "dataschema-json"
                ]
            }, 
            "datasource-local": {
                "requires": [
                    "base"
                ]
            }, 
            "datasource-polling": {
                "requires": [
                    "datasource-local"
                ]
            }, 
            "datasource-textschema": {
                "requires": [
                    "datasource-local", 
                    "plugin", 
                    "dataschema-text"
                ]
            }, 
            "datasource-xmlschema": {
                "requires": [
                    "datasource-local", 
                    "plugin", 
                    "dataschema-xml"
                ]
            }
        }
    }, 
    "datatype": {
        "submodules": {
            "datatype-date": {
                "lang": [
                    "en", 
                    "en-US", 
                    "fr-FR", 
                    "ko-KR"
                ], 
                "requires": [
                    "yui-base"
                ]
            }, 
            "datatype-number": {
                "requires": [
                    "yui-base"
                ]
            }, 
            "datatype-xml": {
                "requires": [
                    "yui-base"
                ]
            }
        }
    }, 
    "dd": {
        "submodules": {
            "dd-constrain": {
                "requires": [
                    "dd-drag"
                ]
            }, 
            "dd-ddm": {
                "requires": [
                    "dd-ddm-base", 
                    "event-resize"
                ]
            }, 
            "dd-ddm-base": {
                "requires": [
                    "node", 
                    "base", 
                    "yui-throttle"
                ]
            }, 
            "dd-ddm-drop": {
                "requires": [
                    "dd-ddm"
                ]
            }, 
            "dd-delegate": {
                "optional": [
                    "dd-drop-plugin"
                ], 
                "requires": [
                    "dd-drag", 
                    "event-mouseenter"
                ]
            }, 
            "dd-drag": {
                "requires": [
                    "dd-ddm-base"
                ]
            }, 
            "dd-drop": {
                "requires": [
                    "dd-ddm-drop"
                ]
            }, 
            "dd-drop-plugin": {
                "requires": [
                    "dd-drop"
                ]
            }, 
            "dd-plugin": {
                "optional": [
                    "dd-constrain", 
                    "dd-proxy"
                ], 
                "requires": [
                    "dd-drag"
                ]
            }, 
            "dd-proxy": {
                "requires": [
                    "dd-drag"
                ]
            }, 
            "dd-scroll": {
                "requires": [
                    "dd-drag"
                ]
            }
        }
    }, 
    "dom": {
        "plugins": {
            "selector-css3": {
                "requires": [
                    "selector-css2"
                ]
            }
        }, 
        "requires": [
            "oop"
        ], 
        "submodules": {
            "dom-base": {
                "requires": [
                    "oop"
                ]
            }, 
            "dom-screen": {
                "requires": [
                    "dom-base", 
                    "dom-style"
                ]
            }, 
            "dom-style": {
                "requires": [
                    "dom-base"
                ]
            }, 
            "selector": {
                "requires": [
                    "dom-base"
                ]
            }, 
            "selector-css2": {
                "requires": [
                    "selector-native"
                ]
            }, 
            "selector-native": {
                "requires": [
                    "dom-base"
                ]
            }
        }
    }, 
    "dump": {
        "requires": [
            "yui-base"
        ]
    }, 
    "event": {
        "expound": "node-base", 
        "submodules": {
            "event-base": {
                "expound": "node-base", 
                "requires": [
                    "event-custom-base"
                ]
            }, 
            "event-delegate": {
                "requires": [
                    "node-base"
                ]
            }, 
            "event-focus": {
                "requires": [
                    "node-base"
                ]
            }, 
            "event-key": {
                "requires": [
                    "node-base"
                ]
            }, 
            "event-mouseenter": {
                "requires": [
                    "node-base"
                ]
            }, 
            "event-mousewheel": {
                "requires": [
                    "node-base"
                ]
            }, 
            "event-resize": {
                "requires": [
                    "node-base"
                ]
            }
        }
    }, 
    "event-custom": {
        "submodules": {
            "event-custom-base": {
                "requires": [
                    "oop", 
                    "yui-later"
                ]
            }, 
            "event-custom-complex": {
                "requires": [
                    "event-custom-base"
                ]
            }
        }
    }, 
    "event-simulate": {
        "requires": [
            "event-base"
        ]
    }, 
    "event-synthetic": {
        "requires": [
            "node-base"
        ]
    }, 
    "history": {
        "requires": [
            "node"
        ]
    }, 
    "imageloader": {
        "requires": [
            "base-base", 
            "node-style", 
            "node-screen"
        ]
    }, 
    "intl": {
        "requires": [
            "intl-base", 
            "event-custom"
        ]
    }, 
    "io": {
        "submodules": {
            "io-base": {
                "requires": [
                    "event-custom-base", 
                    "querystring-stringify-simple"
                ]
            }, 
            "io-form": {
                "requires": [
                    "io-base", 
                    "node-base", 
                    "node-style"
                ]
            }, 
            "io-queue": {
                "requires": [
                    "io-base", 
                    "queue-promote"
                ]
            }, 
            "io-upload-iframe": {
                "requires": [
                    "io-base", 
                    "node-base"
                ]
            }, 
            "io-xdr": {
                "requires": [
                    "io-base", 
                    "datatype-xml"
                ]
            }
        }
    }, 
    "json": {
        "submodules": {
            "json-parse": {
                "requires": [
                    "yui-base"
                ]
            }, 
            "json-stringify": {
                "requires": [
                    "yui-base"
                ]
            }
        }
    }, 
    "loader": {
        "requires": [
            "get"
        ]
    }, 
    "node": {
        "plugins": {
            "align-plugin": {
                "requires": [
                    "node-screen", 
                    "node-pluginhost"
                ]
            }, 
            "node-event-simulate": {
                "requires": [
                    "node-base", 
                    "event-simulate"
                ]
            }, 
            "shim-plugin": {
                "requires": [
                    "node-style", 
                    "node-pluginhost"
                ]
            }
        }, 
        "requires": [
            "dom", 
            "event-base"
        ], 
        "submodules": {
            "node-base": {
                "requires": [
                    "dom-base", 
                    "selector-css2", 
                    "event-base"
                ]
            }, 
            "node-event-delegate": {
                "requires": [
                    "node-base", 
                    "event-delegate"
                ]
            }, 
            "node-pluginhost": {
                "requires": [
                    "node-base", 
                    "pluginhost"
                ]
            }, 
            "node-screen": {
                "requires": [
                    "dom-screen", 
                    "node-base"
                ]
            }, 
            "node-style": {
                "requires": [
                    "dom-style", 
                    "node-base"
                ]
            }
        }
    }, 
    "node-focusmanager": {
        "requires": [
            "attribute", 
            "node", 
            "plugin", 
            "node-event-simulate", 
            "event-key", 
            "event-focus"
        ]
    }, 
    "node-menunav": {
        "requires": [
            "node", 
            "classnamemanager", 
            "plugin", 
            "node-focusmanager", 
            "skin-sam-node-menunav"
        ], 
        "skinnable": true
    }, 
    "oop": {
        "requires": [
            "yui-base"
        ]
    }, 
    "overlay": {
        "requires": [
            "widget", 
            "widget-stdmod", 
            "widget-position", 
            "widget-position-align", 
            "widget-stack", 
            "widget-position-constrain", 
            "skin-sam-overlay"
        ], 
        "skinnable": true
    }, 
    "plugin": {
        "requires": [
            "base-base"
        ]
    }, 
    "pluginhost": {
        "requires": [
            "yui-base"
        ]
    }, 
    "profiler": {
        "requires": [
            "yui-base"
        ]
    }, 
    "querystring": {
        "submodules": {
            "querystring-parse": {
                "requires": [
                    "yui-base", 
                    "array-extras"
                ]
            }, 
            "querystring-stringify": {
                "requires": [
                    "yui-base"
                ]
            }
        }
    }, 
    "querystring-parse-simple": {
        "path": "querystring/querystring-parse-simple.js", 
        "requires": [
            "yui-base"
        ]
    }, 
    "querystring-stringify-simple": {
        "path": "querystring/querystring-stringify-simple.js", 
        "requires": [
            "yui-base"
        ]
    }, 
    "queue-promote": {
        "requires": [
            "yui-base"
        ]
    }, 
    "queue-run": {
        "path": "async-queue/async-queue-min.js", 
        "requires": [
            "event-custom"
        ]
    }, 
    "slider": {
        "submodules": {
            "clickable-rail": {
                "requires": [
                    "slider-base"
                ]
            }, 
            "range-slider": {
                "requires": [
                    "slider-base", 
                    "slider-value-range", 
                    "clickable-rail"
                ]
            }, 
            "slider-base": {
                "requires": [
                    "widget", 
                    "dd-constrain", 
                    "substitute", 
                    "skin-sam-slider"
                ], 
                "skinnable": true
            }, 
            "slider-value-range": {
                "requires": [
                    "slider-base"
                ]
            }
        }
    }, 
    "sortable": {
        "requires": [
            "dd-delegate", 
            "dd-drop-plugin", 
            "dd-proxy"
        ]
    }, 
    "stylesheet": {
        "requires": [
            "yui-base"
        ]
    }, 
    "substitute": {
        "optional": [
            "dump"
        ]
    }, 
    "swf": {
        "requires": [
            "event-custom", 
            "node", 
            "swfdetect"
        ]
    }, 
    "swfdetect": {}, 
    "test": {
        "requires": [
            "substitute", 
            "node", 
            "json", 
            "event-simulate"
        ], 
        "skinnable": true
    }, 
    "widget": {
        "plugins": {
            "widget-child": {}, 
            "widget-parent": {
                "requires": [
                    "arraylist"
                ]
            }, 
            "widget-position": {}, 
            "widget-position-align": {
                "requires": [
                    "widget-position"
                ]
            }, 
            "widget-position-constrain": {
                "requires": [
                    "widget-position"
                ]
            }, 
            "widget-stack": {
                "requires": [
                    "skin-sam-widget-stack"
                ], 
                "skinnable": true
            }, 
            "widget-stdmod": {}
        }, 
        "requires": [
            "skin-sam-widget"
        ], 
        "skinnable": true, 
        "submodules": {
            "widget-base": {
                "requires": [
                    "attribute", 
                    "event-focus", 
                    "base", 
                    "node", 
                    "classnamemanager"
                ]
            }, 
            "widget-htmlparser": {
                "requires": [
                    "widget-base"
                ]
            }
        }
    }, 
    "widget-anim": {
        "requires": [
            "plugin", 
            "anim-base"
        ]
    }, 
    "widget-locale": {
        "requires": [
            "widget-base"
        ]
    }, 
    "yui": {
        "submodules": {
            "get": {}, 
            "intl-base": {}, 
            "yui-base": {}, 
            "yui-later": {}, 
            "yui-log": {}, 
            "yui-throttle": {}
        }
    }
},

    // Patterns are module definitions which will be added with 
    // the default options if a definition is not found. The
    // assumption is that the module itself will be in the default
    // location, and if there are any additional dependencies, they
    // will have to be fetched with a second request.  This could
    // happen multiple times, each segment resulting in a new
    // dependency list.
    //
    // types: regex, prefix, function
    patterns: {
        'gallery-': { 
            // http://yui.yahooapis.com/3.0.0/build/
            // http://yui.yahooapis.com/gallery-/build/
            base: GALLERY_BASE,  // explicit declaration of the base attribute
            ext: false,
            filter: {
                'searchExp': VERSION,
                'replaceStr': GALLERY_VERSION
            }
        },

        // expand 'lang|module|lang'
        'lang|': {
            ext: false,
            action: function(data) {
                // Y.log('testing data: ' + data);

                var parts = data.split('|'),
                    name = parts[1],
                    lang = parts[2],
                    packName, mod;

                if (lang) {

                    packName = this.getLangPackName(lang, name);

                    if ('create' == parts[3]) {
                        mod = this.getModule(packName);
                        if (!mod) {
                            mod = this.getModule(name);
                            // Y.log('action creating ' + packName);
                            this._addLangPack(lang, mod, packName);
                        }
                    }

                    this.require(packName);
                }
                delete this.required[data];
            }
        }
    }
};

YUI.Env[VERSION] = META;

})();
