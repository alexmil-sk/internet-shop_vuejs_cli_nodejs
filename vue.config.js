' use strict';

//module.exports = {
//	css: {
//		loaderOptions: {
//			sass: {
//				prependData: `@import "@/styles/style.scss";`
//			},
//		},
//	},
//};

//const vueConfig = {
//	css: {
//		loaderOptions: {
//			sass: {
//				data: `@import "@/styles/style.scss";`
//			},
//		},
//	},
//};

module.exports = {
	css: {
		loaderOptions: {
			sass: {
				prependData: `@import "./styles/style.scss";`
			},
		},
	},
};