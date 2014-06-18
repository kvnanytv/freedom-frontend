angular.module('template-module', []).run(['$templateCache', function($templateCache) {
  $templateCache.put("modules/admin/home/home.tpl.html",
    "{{pageTitle}}");
  $templateCache.put("modules/admin/profile/profile.tpl.html",
    "<div class=\"profile-page row\">\n" +
    "	<div class=\"user-content\">\n" +
    "		<div class=\"user\">\n" +
    "			<div class=\"content\">\n" +
    "				<div class=\"info\">\n" +
    "					<a href=\"/{{allUsers[0].custom_url}}\">\n" +
    "						<img class=\"avatar\" ng-src=\"{{allUsers[0].avatar}}\"></img>\n" +
    "						<strong class=\"name\" ng-bind=\"allUsers[0].fname+' '+allUsers[0].lname\"></strong>\n" +
    "					</a>\n" +
    "				</div>\n" +
    "				<div class=\"badges\">\n" +
    "					<span>Badges</span>\n" +
    "					<span class=\"badge\" title=\"{{badge.text}}\" ng-repeat=\"badge in badges\" ng-style=\"{'background-position-x':badge.sprite[0]+'px','background-position-y':badge.sprite[1]+'px'}\"></span>\n" +
    "				</div>\n" +
    "				<div class=\"options\">\n" +
    "					<button class=\"btn btn-small\">Edit Profile</button>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"channel-content\">\n" +
    "		<h4>\n" +
    "			Channels\n" +
    "			<button type=\"button\" class=\"btn btn-default btn-small\">\n" +
    "		  <i class=\"fa fa-plus\"></i>\n" +
    "		</button>\n" +
    "		</h4>\n" +
    "		<div class=\"channel\">\n" +
    "			\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>");
  $templateCache.put("modules/common/menu/menu.tpl.html",
    "<div class=\"sideshit\" style=\"background-color:#e6e6e6\">\n" +
    "  <ul class=\"nav nav-tabs nav-stacked nav-custom-freedom\">\n" +
    "    <li ui-route=\"/overview\" ng-class=\"{active:$uiRoute}\">\n" +
    "      <a href=\"#/overview\">\n" +
    "        <i class=\"icon-home\"></i>\n" +
    "        Overview - \n" +
    "      </a>\n" +
    "    </li>\n" +
    "    <li ui-route=\"/profile\" ng-class=\"{active:$uiRoute}\">\n" +
    "      <a href=\"#/profile\">\n" +
    "        <i class=\"icon-book\"></i>\n" +
    "        You\n" +
    "      </a>\n" +
    "    </li>\n" +
    "  </ul>\n" +
    "  <div class=\"footer muted\">\n" +
    "    <small>Powered by any.TV</small>\n" +
    "  </div>\n" +
    "</div>");
}]);
