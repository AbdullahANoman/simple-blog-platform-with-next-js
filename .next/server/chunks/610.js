exports.id = 610;
exports.ids = [610];
exports.modules = {

/***/ 2847:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3380, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 954, 23))

/***/ }),

/***/ 6789:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ page)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
;// CONCATENATED MODULE: ./src/utils/loadBlogs.js
const loadBlogs = async ()=>{
    const res = await fetch("http://localhost:4000/blogs");
    return res.json();
};

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(4178);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(5124);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(2947);
// EXTERNAL MODULE: ./node_modules/react-icons/fa/index.esm.js
var index_esm = __webpack_require__(2215);
;// CONCATENATED MODULE: ./src/app/(with-layout)/blogs/page.js






const Blogs = async ()=>{
    const blogs = await loadBlogs();
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: blogs.map((blog, index)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: `/blogs/${blog?.id}`,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "mb-10",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "px-8 pt-4 ",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        alt: "this is rendering image",
                                        height: 400,
                                        width: 650,
                                        src: blog?.bannerImage
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "grid grid-cols-3 items-center justify-center",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex gap-4 my-4  items-center",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "cursor-pointer",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                        alt: "this is rendering image",
                                                        className: "cursor-pointer",
                                                        height: 40,
                                                        width: 50,
                                                        style: {
                                                            borderRadius: "50%"
                                                        },
                                                        src: blog?.authorImage
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            className: "font-semibold text-sm",
                                                            children: blog?.authorName
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            className: "text-[12px] text-gray-700",
                                                            children: blog?.time
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "bg-[#FF7043] mx-auto py-3 px-4  ",
                                            style: {
                                                borderRadius: "50%"
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* FaBars */.Fm7, {
                                                className: " text-white ",
                                                size: 22
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* FaEllipsisV */.EAB, {
                                                className: " text-gray-800 ml-auto",
                                                size: 22
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "px-8",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("hr", {}),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "my-3",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                            className: "font-semibold text-gray-800 hover:text-[#FF7043] duration-300 cursor-pointer text-2xl",
                                            children: blog?.postTitle
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "my-7 text-gray-500",
                                            children: blog?.postDetails.slice(0, 144)
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }, blogs?.id)
            }, index))
    });
};
/* harmony default export */ const page = (Blogs);


/***/ })

};
;