angular.module("userdashboard.config",[]).controller("HomeCtrl",function(){console.log("asd")});var existingModules=["ui.router"];angular.forEach(modules,function(a){existingModules.push(a)}),console.log("Modules loaded @: "+new Date,existingModules),angular.module("ui.freedom",existingModules).config(function(a,b,c){b.otherwise("/overview"),c.defaults.useXDomain=!0,delete c.defaults.headers.common["X-Requested-With"]}).run(function(){}).controller("mainController",function(a){console.log("run!!!"),a.$on("$stateChangeSuccess",function(b,c){angular.isDefined(c.data.pageTitle)&&(a.pageTitle=c.data.pageTitle+" | ")})}),angular.module("userdashboard.overview",[]).config(function(a){a.state("home",{url:"/overview",views:{main:{controller:"HomeCtrl",templateUrl:"modules/home/home.tpl.html"}},data:{pageTitle:"Home"}})}).controller("HomeCtrl",function(){console.log("asd")}),angular.module("userdashboard.profile",[]).config(function(a){a.state("profile",{url:"/profile",views:{main:{controller:"profileController",templateUrl:"modules/profile/profile.tpl.html"}},data:{pageTitle:"Profile"}})}).controller("profileController",function(a){a.test="profile page"});