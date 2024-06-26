(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{371:function(t,s,a){"use strict";a.r(s);var n=a(42),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"如何让-dotnet-core-dotnet-6-用上-asp-net-中的-formsauthentication"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何让-dotnet-core-dotnet-6-用上-asp-net-中的-formsauthentication"}},[t._v("#")]),t._v(" 如何让 dotnet core / dotnet 6  用上 ASP.NET 中的 FormsAuthentication")]),t._v(" "),a("ul",[a("li",[t._v("引用包 Synercoding.FormsAuthentication")]),t._v(" "),a("li",[t._v("调用如下")])]),t._v(" "),a("div",{staticClass:"language-CSharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[t._v("          "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" faOptions "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("FormsAuthenticationOptions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// AES 非对称密钥对")]),t._v("\n              DecryptionKey "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"306C1FA852AB3B0115150DD8BA30821CDFD125538A0C606DACA53DBB3C3E0AD2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              ValidationKey "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"61A8E04A146AFFAB81B6AD19654F99EA7370807F18F5002725DAB98B8EFD19C711337E26948E26D1D174B159973EA0BE8CC9CAA6AAF513BF84E44B2247792265"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              EncryptionMethod "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" EncryptionMethod"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AES"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              ValidationMethod "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ValidationMethod"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SHA1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n          "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" FormsAuthentication "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("FormsAuthenticationCryptor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("faOptions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 同 FormsAuthentication.Encrypt")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" str "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" FormsAuthentication"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Protect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("FormsAuthenticationCookie")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" UserData "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"data"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" CookiePath "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" UserName "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"user"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 同 FormsAuthentication.Decrypt")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" info "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Unprotect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"B5EE54F8996624CBF736363CDDD9316AA00437D69F8C43B6B0D43084443F6F422483FBCD9738F9EECFF11FFE7A6339CC7AAFBEED41C826756E4AC86BFBD78BDC816643F1E9A2758E9E7986BA60EC75297DA0C66D67EB7AE8E72D82C52F2AC3E29E6A16A3DD135A20266B63C297C803289320CF8450740C38B4DDCB81FB56B021CFF996F693E216B03EF0456FE0DC011521388D9CAE6E6F0E4C8765D53BE2482B6259F106EEE31B4F77F30234EDEB9F73D77DD6A11B6EE18FBE8D5A249EBA8D68593C0BA0460E67597B464A5D9CCE45DC6A70639FA10239413F3AA3520E40482B506FD307E40D00B4495C794DBF44F4F3F4AE17C6AF6AF9301908616B23A5DF0E10E4C"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);