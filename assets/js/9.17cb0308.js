(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{282:function(e,s,a){"use strict";a.r(s);var t=a(14),n=Object(t.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"getting-started"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[e._v("#")]),e._v(" Getting Started")]),e._v(" "),s("blockquote",[s("p",[e._v("There's also a "),s("a",{attrs:{href:"https://www.youtube.com/watch?v=vkAUGUlYm24&list=PLzu0PBqV2jld2q5gCADxX17NE3gF3FvYq",target:"_blank",rel:"noopener noreferrer"}},[e._v("video version"),s("OutboundLink")],1),e._v(" of this.")])]),e._v(" "),s("h2",{attrs:{id:"environmental-preparation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#environmental-preparation"}},[e._v("#")]),e._v(" Environmental preparation")]),e._v(" "),s("p",[e._v("First you should have "),s("a",{attrs:{href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"}},[e._v("node"),s("OutboundLink")],1),e._v(", and make sure it's version 8.10 or above.")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("node")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-v")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("8")]),e._v(".1x\n")])])]),s("p",[e._v("Recommended to use "),s("code",[e._v("yarn")]),e._v(" to management npm dependency.")]),e._v(" "),s("p",[e._v("Then install "),s("code",[e._v("umi")]),e._v(" globally, and make sure it's 2.0.0 or above.")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" global "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" umi\n$ umi "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-v")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2.0")]),e._v(".0\n")])])]),s("h2",{attrs:{id:"boilerplate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#boilerplate"}},[e._v("#")]),e._v(" Boilerplate")]),e._v(" "),s("p",[e._v("First create an empty directory.")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("mkdir")]),e._v(" myapp "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" myapp\n")])])]),s("p",[e._v("Then create some pages with "),s("code",[e._v("umi g")]),e._v(",")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ umi g page index\n$ umi g page "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("users")]),e._v("\n")])])]),s("blockquote",[s("p",[s("code",[e._v("umi g")]),e._v(" is the alias of "),s("code",[e._v("umi generate")]),e._v(", used for generate "),s("code",[e._v("component")]),e._v(", "),s("code",[e._v("page")]),e._v(", "),s("code",[e._v("layout")]),e._v(" quickly. And it can be extended in plugins, such as umi-plugin-dva extended "),s("code",[e._v("dva:model")]),e._v(", then you can generate dva's model via "),s("code",[e._v("umi g dva:model foo")]),e._v(".")])]),e._v(" "),s("p",[e._v("Then view the directory with "),s("code",[e._v("tree")]),e._v(", (windows users can skip this step)")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ tree\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v("\n└── pages\n    ├── index.css\n    ├── index.js\n    ├── users.css\n    └── users.js\n")])])]),s("p",[e._v("The pages directory here is the directory where the page is located. In umi, all the js files under the pages are routes. It's like "),s("a",{attrs:{href:"https://github.com/zeit/next.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("next.js"),s("OutboundLink")],1),e._v(" or "),s("a",{attrs:{href:"https://nuxtjs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("nuxt The experience of .js"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("p",[e._v("Then start the local dev server,")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ umi dev\n")])])]),s("img",{attrs:{src:"https://gw.alipayobjects.com/zos/rmsportal/SGkKMTPMJWFnYMbyznFW.png",width:"616"}}),e._v(" "),s("h2",{attrs:{id:"convensional-routing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#convensional-routing"}},[e._v("#")]),e._v(" Convensional Routing")]),e._v(" "),s("p",[e._v("After starting "),s("code",[e._v("umi dev")]),e._v(", you will find a directory of "),s("code",[e._v(".umi")]),e._v(" under pages. What is this? This is the temporary directory of umi, you can do some verification here, but please do not modify the code directly here, umi restart or file modification under pages will regenerate the files in this folder.")]),e._v(" "),s("p",[e._v("Then we add some route jump code to "),s("code",[e._v("index.js")]),e._v(" and "),s("code",[e._v("users.js")]),e._v(".")]),e._v(" "),s("p",[e._v("First modify "),s("code",[e._v("pages/index.js")]),e._v(",")]),e._v(" "),s("div",{staticClass:"language-diff extra-class"},[s("pre",{pre:!0,attrs:{class:"language-diff"}},[s("code",[s("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[s("span",{pre:!0,attrs:{class:"token prefix inserted"}},[e._v("+")]),s("span",{pre:!0,attrs:{class:"token line"}},[e._v(" import Link from 'umi/link';\n")])]),e._v("import styles from './index.css';\n\nexport default function() {\n"),s("span",{pre:!0,attrs:{class:"token unchanged"}},[s("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[e._v(" ")]),s("span",{pre:!0,attrs:{class:"token line"}},[e._v(" return (\n")]),s("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[e._v(" ")]),s("span",{pre:!0,attrs:{class:"token line"}},[e._v("   <div className={styles.normal}>\n")]),s("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[e._v(" ")]),s("span",{pre:!0,attrs:{class:"token line"}},[e._v("     <h1>Page index</h1>\n")])]),s("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[s("span",{pre:!0,attrs:{class:"token prefix inserted"}},[e._v("+")]),s("span",{pre:!0,attrs:{class:"token line"}},[e._v('     <Link to="/users">go to /users</Link>\n')])]),s("span",{pre:!0,attrs:{class:"token unchanged"}},[s("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[e._v(" ")]),s("span",{pre:!0,attrs:{class:"token line"}},[e._v("   </div>\n")]),s("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[e._v(" ")]),s("span",{pre:!0,attrs:{class:"token line"}},[e._v(" );\n")])]),e._v("}\n")])])]),s("p",[e._v("Then modify "),s("code",[e._v("pages/users.js")]),e._v(",")]),e._v(" "),s("div",{staticClass:"language-diff extra-class"},[s("pre",{pre:!0,attrs:{class:"language-diff"}},[s("code",[s("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[s("span",{pre:!0,attrs:{class:"token prefix inserted"}},[e._v("+")]),s("span",{pre:!0,attrs:{class:"token line"}},[e._v(" import router from 'umi/router';\n")])]),e._v("import styles from './users.css';\n\nexport default function() {\n"),s("span",{pre:!0,attrs:{class:"token unchanged"}},[s("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[e._v(" ")]),s("span",{pre:!0,attrs:{class:"token line"}},[e._v(" return (\n")]),s("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[e._v(" ")]),s("span",{pre:!0,attrs:{class:"token line"}},[e._v("   <div className={styles.normal}>\n")]),s("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[e._v(" ")]),s("span",{pre:!0,attrs:{class:"token line"}},[e._v("     <h1>Page users</h1>\n")])]),s("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[s("span",{pre:!0,attrs:{class:"token prefix inserted"}},[e._v("+")]),s("span",{pre:!0,attrs:{class:"token line"}},[e._v("     <button onClick={() => { router.goBack(); }}>go back</button>\n")])]),s("span",{pre:!0,attrs:{class:"token unchanged"}},[s("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[e._v(" ")]),s("span",{pre:!0,attrs:{class:"token line"}},[e._v("   </div>\n")]),s("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[e._v(" ")]),s("span",{pre:!0,attrs:{class:"token line"}},[e._v(" );\n")])]),e._v("}\n")])])]),s("p",[e._v("Then verify in the browser, and it should already be able to jump between the index page and the users pages.")]),e._v(" "),s("h2",{attrs:{id:"build-and-deploy"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#build-and-deploy"}},[e._v("#")]),e._v(" Build and Deploy")]),e._v(" "),s("h3",{attrs:{id:"build"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#build"}},[e._v("#")]),e._v(" Build")]),e._v(" "),s("p",[e._v("Run "),s("code",[e._v("umi build")]),e._v("，")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ umi build\n\nDONE  Compiled successfully "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("in")]),e._v(" 1729ms\n\nFile sizes after gzip:\n\n  "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("68.04")]),e._v(" KB  dist/umi.js\n  "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("83")]),e._v(" B      dist/umi.css\n")])])]),s("p",[e._v("The files is generated to "),s("code",[e._v("./dist")]),e._v(" by default. You could view the files by the "),s("code",[e._v("tree")]),e._v(" command (Windows users can skip this step)")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ tree ./dist\n./dist\n├── index.html\n├── umi.css\n└── umi.js\n")])])]),s("h3",{attrs:{id:"local-verification"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#local-verification"}},[e._v("#")]),e._v(" Local Verification")]),e._v(" "),s("p",[e._v("Local verification can be done via "),s("code",[e._v("serve")]),e._v(" before publishing.")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" global "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" serve\n$ serve ./dist\n\nServing"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!")]),e._v("\n\n- Local:            http://localhost:5000\n- On Your Network:  http://"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("Your IP"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(":5000\n\nCopied "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("local")]),e._v(" address to clipboard"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!")]),e._v("\n")])])]),s("p",[e._v("Visit http://localhost:5000, which should be same as "),s("code",[e._v("umi dev")]),e._v(".")]),e._v(" "),s("h3",{attrs:{id:"deploy"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#deploy"}},[e._v("#")]),e._v(" Deploy")]),e._v(" "),s("p",[e._v("Once verified, you can deploy it. Here is a demonstration with "),s("a",{attrs:{href:"http://now.sh/",target:"_blank",rel:"noopener noreferrer"}},[e._v("now"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" global "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" now\n$ now ./dist\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" Deploying /private/tmp/sorrycc-1KVCmK/dist under chencheng\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" Synced "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v(" files "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("301")]),e._v(".93KB"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("2s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" https://dist-jtckzjjatx.now.sh "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("in clipboard"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("1s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" Deployment complete"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!")]),e._v("\n")])])]),s("p",[e._v("Then open the url to view it online.")]),e._v(" "),s("h2",{attrs:{id:"test-and-inspect"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#test-and-inspect"}},[e._v("#")]),e._v(" Test and Inspect")]),e._v(" "),s("h3",{attrs:{id:"test"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#test"}},[e._v("#")]),e._v(" Test")]),e._v(" "),s("p",[e._v("umi-test based on "),s("code",[e._v("jest")])]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ umi "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("test")]),e._v("\n\nOptions:\n\n    "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--coverage")]),e._v("                    indicates that "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("test")]),e._v(" coverage information should be collected and reported "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("in")]),e._v(" the output\n    "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--collectCoverageFrom")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("glob"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("  a glob pattern relative to matching the files that coverage info needs to be collected from, e.g, "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--collectCoverageFrom")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("src/**/*.js\n    "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--detectLeaks")]),e._v("                 debug memory leaks\n")])])]),s("h3",{attrs:{id:"inspect"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#inspect"}},[e._v("#")]),e._v(" Inspect")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ umi inspect\n\nOptions:\n\n    "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--mode")]),e._v("                specify "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("env")]),e._v(" mode "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("development or production, default is development"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--rule")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("ruleName"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("     inspect a specific module rule\n    "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--plugin")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("pluginName"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" inspect a specific plugin\n    "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--rules")]),e._v("               list all module rule names\n    "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--plugins")]),e._v("             list all plugin names\n    "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--verbose")]),e._v("             show full "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" definitions "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("in")]),e._v(" output\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);