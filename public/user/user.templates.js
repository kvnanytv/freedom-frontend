angular.module('template-module', []).run(['$templateCache', function($templateCache) {
  $templateCache.put("modules/user/home/home.tpl.html",
    "{{pageTitle}}");
  $templateCache.put("modules/user/profile/profile.tpl.html",
    "<div class=\"profile-container\">\n" +
    "Profile\n" +
    "</div>");
  $templateCache.put("modules/common/menu/menu.tpl.html",
    "<!-- <div class=\"menu-container\">\n" +
    "  <ul class=\"nav nav-pills nav-stacked\">\n" +
    "    <li ui-sref-active=\"active\">\n" +
    "      <a ui-sref=\"home\">Home</a>\n" +
    "    </li>\n" +
    "    <li ui-sref-active=\"active\">\n" +
    "      <a ui-sref=\"profile\">Profile</a>\n" +
    "    </li>\n" +
    "  </ul>\n" +
    "</div> -->");
  $templateCache.put("modules/common/topbar/topbar.tpl.html",
    "<!-- <div class=\"menu-container\">\n" +
    "  	<a class=\"freedom-nav-logo\" href=\"\">\n" +
    "   		<img src=\"/images/frdm-nav-logo.png\"></img>\n" +
    "   	</a>\n" +
    "   	<div class=\"nav-container\">\n" +
    "   		<ul class=\"nav nav-pills\">\n" +
    "		    <li ui-sref-active=\"active\">\n" +
    "		      <a ui-sref=\"home\">Home</a>\n" +
    "		    </li>\n" +
    "		    <li ui-sref-active=\"active\">\n" +
    "		      <a ui-sref=\"profile\">Profile</a>\n" +
    "		    </li>\n" +
    "	  	</ul>\n" +
    "	</div>\n" +
    "</div> -->\n" +
    "<!-- <div class=\"navbar navbar-fixed-top custom-nav-style\" role=\"navigation\">\n" +
    "  <div class=\"container-fluid\">\n" +
    "    <div class=\"navbar-header\">\n" +
    "      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n" +
    "        <span class=\"sr-only\">Toggle navigation</span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "      </button>\n" +
    "      <a class=\"navbar-brand\" href=\"#\">Project name</a>\n" +
    "    </div>\n" +
    "    <div class=\"navbar-collapse collapse\">\n" +
    "      <ul class=\"nav navbar-nav navbar-right\">\n" +
    "        <li><a href=\"#\">Dashboard</a></li>\n" +
    "        <li><a href=\"#\">Settings</a></li>\n" +
    "        <li><a href=\"#\">Profile</a></li>\n" +
    "        <li><a href=\"#\">Help</a></li>\n" +
    "      </ul>\n" +
    "      <form class=\"navbar-form navbar-right\">\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"Search...\">\n" +
    "      </form>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div> -->\n" +
    "\n" +
    "<div ng-init=\"navCollapsed = true\" class=\"navbar navbar-fixed-top custom-navbar\" role=\"navigation\">\n" +
    "  <div class=\"container-fluid\">\n" +
    "    <div class=\"navbar-header\">\n" +
    "      <button type=\"button\" ng-click=\"navCollapsed = !navCollapsed\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n" +
    "        <span class=\"sr-only\">Toggle navigation</span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "      </button>\n" +
    "      <a class=\"navbar-brand custom-brand\" href=\"#\">\n" +
    "      	<img src=\"/images/frdm-nav-logo.png\"></img>\n" +
    "      </a>\n" +
    "    </div>\n" +
    "    <div collapse=\"navCollapsed\" class=\"custom-nav-collapse navbar-collapse collapse\">\n" +
    "      <ul class=\"custom-nav nav navbar-nav navbar-left\">\n" +
    "        <li ui-sref-active=\"active\"><a ui-sref=\"home\"><span>Overview</span></a></li>\n" +
    "        <li ui-sref-active=\"active\"><a ui-sref=\"profile\"><span>Profile</span></a></li>\n" +
    "        <li ui-sref-active=\"active\"><a ui-sref=\"about\"><span>About</span></a></li>\n" +
    "        <li ui-sref-active=\"active\"><a ui-sref=\"others\"><span>Help</span></a></li>\n" +
    "      </ul>\n" +
    "      <ul class=\"nav navbar-nav navbar-right\">\n" +
    "        <li ui-sref-active=\"active\" class=\"dropdown\">\n" +
    "          <a ui-sref=\"other\" class=\"dropdown-toggle  cursor-pointer\" data-toggle=\"dropdown\">Dropdown <b class=\"caret\"></b></a>\n" +
    "          <ul class=\"dropdown-menu\">\n" +
    "            <li><a href=\"#\">Action</a></li>\n" +
    "            <li><a href=\"#\">Another action</a></li>\n" +
    "            <li><a href=\"#\">Something else here</a></li>\n" +
    "            <li class=\"divider\"></li>\n" +
    "            <li class=\"dropdown-header\">Nav header</li>\n" +
    "            <li><a href=\"#\">Separated link</a></li>\n" +
    "            <li><a href=\"#\">One more separated link</a></li>\n" +
    "          </ul>\n" +
    "	    </li>\n" +
    "      </ul>\n" +
    "      <!-- <form class=\"navbar-form navbar-right\">\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"Search...\">\n" +
    "      </form> -->\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>");
}]);
