(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{283:function(n,t,i){"use strict";i.r(t);var e=i(14),a=Object(e.a)({},(function(){var n=this,t=n._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("p",[n._v("一、水平居中")]),n._v(" "),t("ol",[t("li",[t("p",[n._v("内联元素\n")]),t("div",{staticClass:"container"},[t("span",{staticClass:"content"},[n._v("水平居中")])]),n._v("\n(1) text-align\ntext-align 一般运用在块级元素中，使其中的文本对齐。实际上，运用在块级元素中的text-align会使其包含的内联元素水平对齐\n.container {\ntext-align: center;\n}"),t("p")]),n._v(" "),t("li",[t("p",[n._v("块级元素\n")]),t("div",{staticClass:"container"},[t("div",{staticClass:"content"},[n._v("水平居中")])]),t("p")])]),n._v(" "),t("p",[n._v("(1) margin\n如果块元素的高度和宽度已知，就可以通过将元素的左右margin值设置为auto将元素水平居中：\n.content {\nwidth: 100px;\nheight: 100px;\nmargin-left: auto;\nmargin-right: auto\n}")]),n._v(" "),t("p",[n._v("如果有多个块元素，需要将多个元素包裹在一个元素中以使用该方法实现水平居中：\n")]),t("div",{staticClass:"container"},[t("div",{staticClass:"box"},[t("div",{staticClass:"content"},[n._v("水平居中")]),n._v(" "),t("div",{staticClass:"content"},[n._v("水平居中")])])]),n._v("\n.box {\ndisplay: flex\nmargin-left: auto;\nmargin-right: auto;\n}"),t("p"),n._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[n._v("通用")])]),n._v(" "),t("p",[n._v("（1） Flex布局\n在flex布局中，justify-content可以用于设置弹性盒子元素在主轴方向上的对齐方式。档期属性值为center时，其子元素整体会在主轴的中心位置。")]),n._v(" "),t("p",[n._v(".contanier {\ndisplay: flex;\njustify-content: center;\n}\n如果弹性盒子的主轴是垂直方向，可以使用align-items来代替justify-content以实现元素的水平居中：\n.container {\ndisplay: flex;\nflex-direction;\nalign-items: center;\n}")]),n._v(" "),t("p",[n._v("(2) Grid布局\n在Grid布局中，justify-content属性会沿着行轴线（水平方向）在网格容器中对齐网格。当属性值为center时，就可以将网格对齐到网格容器的水平居中位置\n.container {\ndisplay: grid;\njustify-content: center;\n}\n(3) 绝对定位\n可以通过将使用绝对定位和变换实现元素的水平居中\n.container {\nposition: relative;\n}")]),n._v(" "),t("p",[n._v(".content {\nposition: absolute;\nleft: 50%;\ntransform: translateX(-50%);\n}\n如果块元素的宽度已知，也可以使用负边距来代替transfrom:\n.container {\nposition: relative;\n}")]),n._v(" "),t("p",[n._v(".content {\nwidth: 100px;\nposition: absolute;\nleft: 50%;\nmargin-left: -50px;\n}")]),n._v(" "),t("p",[n._v("二、垂直居中")]),n._v(" "),t("ol",[t("li",[n._v("块级元素\n"),t("div",{staticClass:"container"},[t("div",{staticClass:"content"},[n._v("垂直居中")])]),n._v("\n（1） 绝对定位\n可以通过将使用绝对定位和变换实现元素的垂直居中：\n.container {\nposition: relative;\n}\n.content {\nposition: absolute;\ntop: 50%;\ntransform: translateY(-50%);\n}")])]),n._v(" "),t("p",[n._v("如果块元素的高度已知，也可以使用负边距来代替transform:\n.container {\nposition: relative;\n}")]),n._v(" "),t("p",[n._v(".content {\nheight: 100px;\nposition: abosolute;\ntop: 50%;\nmargin-top: -50px;\n}")]),n._v(" "),t("p",[n._v("2.通用")]),n._v(" "),t("p",[n._v("（1） Flex布局\n在Flex布局中，align-items属性来定义flex子项在flex容器的当前行的侧轴方向上的对齐方式。当其属性为center时，元素位于容器的中心：\n.container {\ndisplay: flex;\nalign-items: center;\n}\n如果将Flex的主轴切换为垂直方向，则需要使用justify-content来代替align-item以实现元素的垂直居中：\n.flex {\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\n}\n(2) Grid布局")]),n._v(" "),t("p",[n._v("使用CSS Grid布局中，可以使用align-content属性将项目垂直居中到其网格区域：\n.container {\ndisplay: grid;\nalign-content: center;\n}\n如果将网格的排列方向更改为水平，垂直居中依旧是生效的：\n.container {\ndisplay: flex;\nalign-content: center;\ngrid-auto-flow: column;\n}\n三、水平垂直居中")]),n._v(" "),t("div",{staticClass:"container"},[t("div",{staticClass:"content"},[n._v("水平垂直居中")])]),n._v("\n（1） 绝对定位\n使用元素垂直居中最通用的方法就是使用绝对定位和transform:\n.container {\n  position: relative;\n}\n.center {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n如果元素高度和宽度一致，也可以使用margin来代替transform:\n.container {\n  position: relative;\n}\n.center {\n  width: 100px;\n  height: 100px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-top: -50px;\n  margin-left: -50px;\n}\n"),t("p",[n._v("(2) flex布局\n在使用flex布局时，可以结合上面的水平和垂直居中来实现水平垂直居中：\n.container {\ndisplay: flex;\njustify-content: center;\nalign-items: center;\n}\n(3) Grid布局\n在Grid布局中，可以使用以下形式来实现元素的水平垂直居中：\n.container {\ndisplay: grid;\nplace-items: center;\n}\nplace-content属性时align-content和justify-content的简写，当该属性的值为center时，所有的子元素堆叠在父元素的中间对齐")])])}),[],!1,null,null,null);t.default=a.exports}}]);