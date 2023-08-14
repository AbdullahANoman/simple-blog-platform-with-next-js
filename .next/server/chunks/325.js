exports.id = 325;
exports.ids = [325];
exports.modules = {

/***/ 9783:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4282, 23))

/***/ }),

/***/ 2373:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 954, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3380, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 8840))

/***/ }),

/***/ 9361:
/***/ (() => {



/***/ }),

/***/ 8840:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Navlink)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(7114);
;// CONCATENATED MODULE: ./src/utils/classNames.js

const classNames = (...args)=>args.filter(Boolean).join(" ");
/* harmony default export */ const utils_classNames = (classNames);

;// CONCATENATED MODULE: ./src/app/components/Navlink/Navlink.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 




const NavLink = ({ children, href, exact = false, activeClassName, ...props })=>{
    const path = (0,navigation.usePathname)();
    const active = exact ? path === href : path.startsWith(href);
    const classes = utils_classNames(props.className, active && activeClassName);
    if (classes) {
        props.className = classes;
    }
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: href,
        ...props,
        children: children
    });
};
/* harmony default export */ const Navlink = (NavLink);


/***/ }),

/***/ 7721:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ layout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(2947);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(5124);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(1363);
;// CONCATENATED MODULE: ./src/app/components/Navlink/Navlink.jsx

const proxy = (0,module_proxy.createProxy)(String.raw`/home/abdullah_al_noman/simple_blog_platform/src/app/components/Navlink/Navlink.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const Navlink = (__default__);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(4178);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/app/components/Navbar/Navbar.jsx





const navLinks = [
    {
        path: "/",
        title: "Home"
    },
    {
        path: "/about",
        title: "About"
    },
    {
        path: "/blogs",
        title: "Blogs"
    }
];
const Navbar = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
        className: "  grid grid-cols-12 items-center bg-[#232F42] text-white ",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                className: "col-span-2",
                href: "/",
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    alt: "rendering image",
                    width: 80,
                    height: 80,
                    className: "ml-10  md:mr-0",
                    src: "https://openlisthtml.themever.net/images/logo.png"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "col-span-4",
                children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                    className: "flex items-center ml-20 md:ml-0",
                    children: navLinks.map((link, index)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "mx-2",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Navlink, {
                                exact: link?.path == "/",
                                activeClassName: "text-[#FF7141]",
                                href: link?.path,
                                children: link?.title
                            })
                        }, index))
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "col-span-3 hidden md:flex",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "text",
                        className: " bg-[#2E3D55] focus:border-[#FF7143] px-4 focus:border-none w-[400px] py-2",
                        name: "",
                        id: "",
                        placeholder: "Search here"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "col-span-2 hidden md:flex",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "bg-[#EC663C] px-8 text-lg py-3 font-semibold rounded",
                        children: " + Add Post "
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "hidden md:flex col-span-1",
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    alt: "this is rendering image",
                    className: "rounded-full",
                    height: 50,
                    width: 50,
                    src: "https://openlisthtml.themever.net/images/profile-pic.png"
                })
            })
        ]
    });
};
/* harmony default export */ const Navbar_Navbar = (Navbar);

;// CONCATENATED MODULE: ./src/app/(with-layout)/layout.js



const WithLayout = ({ children })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Navbar_Navbar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "bg-[#EFF3F5]",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "",
                    children: children
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("footer", {
                className: "mt-10",
                children: "This is footer"
            })
        ]
    });
};
/* harmony default export */ const layout = (WithLayout);


/***/ }),

/***/ 2911:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RootLayout),
/* harmony export */   metadata: () => (/* binding */ metadata)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_font_google_target_css_path_src_app_layout_js_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7647);
/* harmony import */ var next_font_google_target_css_path_src_app_layout_js_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_src_app_layout_js_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5023);
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_globals_css__WEBPACK_IMPORTED_MODULE_1__);



const metadata = {
    title: "Simple Blog Platform",
    description: "Generated by create next app"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("body", {
            className: (next_font_google_target_css_path_src_app_layout_js_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_2___default().className),
            children: children
        })
    });
}


/***/ }),

/***/ 3881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"16x16"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 5023:
/***/ (() => {



/***/ })

};
;