var eMoovConfig = {
	apiPath: 'http://localhost:3000/',
	viewsPath: "views/",
	imagesPath: "img/",
	resourceUrlWhitelist: [
		'self'
	],
	pagesPath: "./views/pages/",
	pages: [
		{
			state: "home",
			url: "/",
			template: "home.html",
			controller: "HomeController"
			
		}, 
		{
			state: "about",
			url: "/about",
			template: "about.html",
			controller: "AboutController"			
		}
	]
}