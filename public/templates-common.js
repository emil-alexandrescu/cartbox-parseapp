angular.module('templates-common', ['addproduct/addproduct.tpl.html', 'avatar/avatar.tpl.html', 'avatar/avatarupload.tpl.html', 'comment/comment.tpl.html', 'like/like.tpl.html', 'users/change-password.tpl.html', 'users/forgot.tpl.html', 'users/google-auth/googleAuth.tpl.html', 'users/myaccount.tpl.html', 'users/signin-welcome.tpl.html', 'users/signin.tpl.html', 'users/signout.tpl.html', 'users/signup.tpl.html', 'users/users.tpl.html']);

angular.module("addproduct/addproduct.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("addproduct/addproduct.tpl.html",
    "<form class=\"form-inline\" role=\"form\">\n" +
    "    <div class=\"form-group\">\n" +
    "        <input type=\"text\" class=\"form-control\" placeholder=\"Product URL goes here...\" size=\"50\" ng-model=\"productUrl\" />\n" +
    "    </div>\n" +
    "    <div class=\"form-group\">\n" +
    "        <button class=\"btn btn-default\" addproduct-button>Add</button>\n" +
    "    </div>\n" +
    "</form>\n" +
    "");
}]);

angular.module("avatar/avatar.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("avatar/avatar.tpl.html",
    "<img src=\"{{avatarurl}}\" alt=\"Avatar\" class=\"img-thumbnail\" width=\"140\"  />");
}]);

angular.module("avatar/avatarupload.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("avatar/avatarupload.tpl.html",
    "<div class=\"fileinput fileinput-new input-group\" data-provides=\"fileinput\">\n" +
    "    <div class=\"form-control\" data-trigger=\"fileinput\"><i class=\"glyphicon glyphicon-file fileinput-exists\"></i> <span class=\"fileinput-filename\"></span></div>\n" +
    "    <span class=\"input-group-addon btn btn-default btn-file\"><span class=\"fileinput-new\">Select file</span><span class=\"fileinput-exists\">Change</span><input type=\"file\" name=\"...\"></span>\n" +
    "    <a href=\"#\" class=\"input-group-addon btn btn-default fileinput-exists\" data-dismiss=\"fileinput\">Remove</a>\n" +
    "</div>");
}]);

angular.module("comment/comment.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("comment/comment.tpl.html",
    "<div class=\"comment-wrap\">\n" +
    "    <ul class=\"list-group\">\n" +
    "        <li class=\"list-group-item\" ng-repeat=\"comment in commentlist\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-xs-2 col-md-1\">\n" +
    "                    <img src=\"http://placehold.it/80\" class=\"img-circle img-responsive\" alt=\"\" />\n" +
    "                </div>\n" +
    "                <div class=\"col-xs-10 col-md-11\">\n" +
    "                    <div>\n" +
    "                        <strong>{{comment.username}}</strong> on  {{comment.date}}\n" +
    "                    </div>\n" +
    "                    <div class=\"comment-text\">\n" +
    "                        <p>{{comment.comment}}</p>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "    <form class=\"form\" role=\"form\">\n" +
    "        <div class=\"form-group\">\n" +
    "            <textarea class=\"form-control\" placeholder=\"Your comments\" id=\"comment-text\" rows=\"3\"></textarea>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <button class=\"btn btn-default\" newcomment>Add</button>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>");
}]);

angular.module("like/like.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("like/like.tpl.html",
    "<div class=\"btn-group\">\n" +
    "    <button type=\"button\" class=\"btn btn-default\" newlike><span class=\"glyphicon glyphicon-heart\"></span>Like</button>\n" +
    "    <button type=\"button\" class=\"btn btn-default\">{{likecount}}</button>\n" +
    "</div>");
}]);

angular.module("users/change-password.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("users/change-password.tpl.html",
    "<div class='row'>\n" +
    "    <div class=\"col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3\">\n" +
    "\n" +
    "        <div class='row'> <h2>My Account</h2></div>\n" +
    "        <div class='row'>\n" +
    "            <div ng-show=\"message\" id=\"login-alert\" class=\"alert alert-danger\"><h4>{{message}}</h4></div>\n" +
    "        </div>\n" +
    "        <form name=\"changePassword\" ng-submit=\"changePass(changePassword.$valid)\"  class=\"form-horizontal\" role=\"form\" novalidate>\n" +
    "            <div class=\"form-group user-group\">\n" +
    "                <label for=\"oldPassword\"><h4>Old Password</h4></label>\n" +
    "                <input required type='text' ng-model='oldpassword' ng-minlength=2 class=\"form-control has-error input-lg\" name='oldpassword'>\n" +
    "\n" +
    "                <div ng-show=\"changePassword.oldpassword.$invalid && !changePassword.oldpassword.$pristine\" >\n" +
    "                    <p class='help-block'> <h4 class='text-danger'>Enter your old password.</h4></p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        \n" +
    "            <div class=\"form-group user-group\">\n" +
    "                <label for=\"newpassword1\"><h4>New Password</h4></label>\n" +
    "                <input required type='text' ng-model='newpassword1' ng-minlength=2 class=\"form-control has-error input-lg\" name='newpassword1'>\n" +
    "\n" +
    "                <div ng-show=\"changePassword.newpassword1.$invalid && !changePassword.newpassword1.$pristine\" >\n" +
    "                    <p class='help-block'> <h4 class='text-danger'>Enter a valid password </h4></p>\n" +
    "                </div>\n" +
    "            </div>       \n" +
    "            <div class=\"form-group user-group\">\n" +
    "                <label for=\"newpassword2\"><h4>New Password Again </h4></label>\n" +
    "                <input required type='text' ng-model='newpassword2' ng-minlength=2 class=\"form-control has-error input-lg\" name='newpassword2'>\n" +
    "\n" +
    "                <div ng-show=\"changePassword.newpassword2.$invalid && !changePassword.newpassword2.$pristine\" >\n" +
    "                    <p class='help-block'> <h4 class='text-danger'>Enter a valid password </h4></p>\n" +
    "                </div>\n" +
    "            </div>         \n" +
    "\n" +
    "            <div style='text-align:center;margin-top:25px'>\n" +
    "                <button  class=\"btn btn-success btn-lg\" ng-disabled=\"changePassword.$invalid\">Change Password</button>\n" +
    "            </div>\n" +
    "        \n" +
    "        </form>\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n" +
    "");
}]);

angular.module("users/forgot.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("users/forgot.tpl.html",
    "\n" +
    "<div class=\"container\" >\n" +
    "\n" +
    "    <div ng-show='passwordResetSent' class=\"row\" style=\"margin-top:20px\">\n" +
    "        <div class=\"col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3\">\n" +
    "            <h2>Password reset has been sent! <a href='#/signin'>Sign In</a></h2>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "<div ng-show='!passwordResetSent' class=\"row\" style=\"margin-top:20px\">\n" +
    "    <div class=\"col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3\">\n" +
    "        <form name=\"userForm\" ng-submit=\"forgot(userForm.$valid)\"  class=\"form-horizontal\" role=\"form\" novalidate>\n" +
    "            <fieldset>\n" +
    "                <h2>Reset Your Password</h2>\n" +
    "                <hr class=\"colorgraph\">\n" +
    "                <div  class='row ' ng-show='message'>\n" +
    "                    <div class='text-left' ><alert><strong>Error</strong>:{{message}}</alert></div>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <input type=\"email\" \n" +
    "                    class=\"form-control input-lg\" \n" +
    "                    required\n" +
    "                    autofocus\n" +
    "                    name=\"email\" \n" +
    "                    ng-model='user.email' placeholder=\"Email\" >\n" +
    "                </div>\n" +
    "                <p ng-show=\"userForm.email.$invalid && !userForm.email.$pristine\" class=\"help-block\">Enter a valid email</p>      \n" +
    "\n" +
    "                <hr class=\"colorgraph\">\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-xs-6 col-sm-6 col-md-6\">\n" +
    "                        <button  class=\"btn btn-lg btn-success btn-block\" ng-disabled=\"userForm.$invalid\">Reset Password</button>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-xs-6 col-sm-6 col-md-6\" >\n" +
    "                        <a href=\"#/signin\" class=\"btn btn-lg btn-primary btn-block\">Or Go Sign In</a>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </fieldset>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("users/google-auth/googleAuth.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("users/google-auth/googleAuth.tpl.html",
    "<!-- template not used.  stays here for reference -->\n" +
    "\n" +
    "<!-- <span id=\"signinButton\">\n" +
    "  <span\n" +
    "    class=\"g-signin\"\n" +
    "    data-callback=\"googleSignInCallback\"\n" +
    "    data-clientid=\"{{GOOGLE_SIGNIN_CLIENT_ID}}\"\n" +
    "    data-cookiepolicy=\"single_host_origin\"\n" +
    "    data-scope=\"https://www.googleapis.com/auth/plus.login\">\n" +
    "  </span>\n" +
    "</span>\n" +
    " -->\n" +
    "");
}]);

angular.module("users/myaccount.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("users/myaccount.tpl.html",
    "\n" +
    "\n" +
    "<div class='row'>\n" +
    "    <div class=\"col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3\">\n" +
    "\n" +
    "        <div class='row'> <h2>My Account</h2></div>\n" +
    "        <div class='row'>\n" +
    "            <div ng-show=\"message\" id=\"login-alert\" class=\"alert alert-danger\"><h4>{{message}}</h4></div>\n" +
    "        </div>\n" +
    "        <form name=\"userInfo\" ng-submit=\"updateUserInfo(userInfo.$valid)\"  class=\"form-horizontal\" role=\"form\" novalidate>\n" +
    "            <div class=\"form-group user-group\">\n" +
    "                <label for=\"email\"><h4>Email Address</h4></label>\n" +
    "                \n" +
    "                <input \n" +
    "                       required\n" +
    "                       type='email'\n" +
    "                       ng-model=\"user.email\"\n" +
    "                       ng-minlength='2'\n" +
    "                       class=\"form-control input-lg\" \n" +
    "                       name=\"email\" \n" +
    "                       placeholder=\"Email Address\"\n" +
    "                >               \n" +
    "                <div ng-show=\"userInfo.email.$invalid && !userInfo.email.$pristine\" >\n" +
    "                <p class='help-block'> <h4 class='text-danger'>Enter a valid email.</h4></p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        \n" +
    "        \n" +
    "            <div class=\"form-group user-group\">\n" +
    "                <label for=\"userName\"><h4>Username</h4></label>\n" +
    "                <input required type='text' ng-model='user.username' ng-minlength=2 class=\"form-control has-error input-lg\" name='username'>\n" +
    "\n" +
    "                <div ng-show=\"userInfo.username.$invalid && !userInfo.username.$pristine\" >\n" +
    "                    <p class='help-block'> <h4 class='text-danger'>Enter a valid username.</h4></p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class='form-group user-group'>\n" +
    "                <label for='about'><h4>About You</h4></label>\n" +
    "                <textarea ng-model='user.about' placeholder=\"About You\" name='about' class=\" input-lg form-control has-error\" ></textarea> \n" +
    "             </div>\n" +
    "    \n" +
    "            \n" +
    "            <div class='form-group user-group'>\n" +
    "                <label for='about'><h4>Password</h4></label>\n" +
    "                <p><a href='#/change_password'>Change Your Password</a></p>\n" +
    "            </div> \n" +
    "\n" +
    "            <div style='text-align:center;margin-top:25px'>\n" +
    "                <button  class=\"btn btn-success btn-lg\" ng-disabled=\"userInfo.$invalid\">Update Account</button>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("users/signin-welcome.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("users/signin-welcome.tpl.html",
    "<span ng-if='signed_in' ng-controller=\"UsersController\">\n" +
    "    <a ng-href='#/myaccount'>Welcome {{username}}!</a> <a href='javascript:void(0)' ng-click='signout()'>Sign Out</a>\n" +
    "</span>\n" +
    "<span ng-if='!signed_in'>\n" +
    "<a href='#/signin'>Sign In</a> | <a href='#/signup'>Sign Up</a>\n" +
    "</span>");
}]);

angular.module("users/signin.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("users/signin.tpl.html",
    "<!-- http://bootsnipp.com/calvinko -->\n" +
    "<div class=\"container\">    \n" +
    "      <div id=\"loginbox\" style=\"margin-top:50px;\" class=\"mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2\">                    \n" +
    "          <div class=\"panel panel-info\" >\n" +
    "                  <div class=\"panel-heading\">\n" +
    "                      <div class=\"panel-title\">Sign In</div>\n" +
    "                      <div style=\"float:right; font-size: 80%; position: relative; top:-10px\"><a href=\"#/forgot\">Forgot password?</a></div>\n" +
    "                  </div>     \n" +
    "\n" +
    "                  <div style=\"padding-top:30px\" class=\"panel-body\" >\n" +
    "\n" +
    "                      <div ng-show=\"message\" id=\"login-alert\" class=\"alert alert-danger col-sm-12\"> {{message}}</div>\n" +
    "                          \n" +
    "                      <form name=\"userForm\" ng-submit=\"signin(userForm.$valid)\"  class=\"form-horizontal\" role=\"form\" novalidate>\n" +
    "                                  \n" +
    "                    \n" +
    "\n" +
    "                          <div style=\"margin-bottom: 15px\" class=\"input-group\">\n" +
    "\n" +
    "                                      <span class=\"input-group-addon\">\n" +
    "                                        <i class=\"glyphicon glyphicon-user\"></i>\n" +
    "                                      </span>\n" +
    "                                      <input \n" +
    "                                        ng-minlength=\"3\"\n" +
    "                                        required\n" +
    "                                        autofocus\n" +
    "                                        type=\"username\" class=\"form-control has-error\" \n" +
    "                                        name=\"username\" \n" +
    "                                        value=\"\" placeholder=\"Username\" ng-model=\"user.username\">                                                                               \n" +
    "                              </div>\n" +
    "        <p ng-show=\"userForm.username.$invalid && !userForm.username.$pristine\" class=\"help-block\">Enter a valid username.</p>                              \n" +
    "                          <div style=\"margin-bottom: 15px\" class=\"input-group\">\n" +
    "                                      <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-lock\"></i></span>\n" +
    "                                      <input                                       \n" +
    "                                      type=\"password\" \n" +
    "                                      class=\"form-control\" \n" +
    "                                      name=\"password\" \n" +
    "                                      placeholder=\"Password\"\n" +
    "                                      ng-model='user.password'\n" +
    "                                      ng-minlength=\"3\"\n" +
    "                                      required>\n" +
    "                                  </div>\n" +
    "                          <p ng-show=\"userForm.password.$invalid && !userForm.password.$pristine\" class=\"help-block\">Enter a password.</p>           \n" +
    "\n" +
    "                              \n" +
    "                          <div class=\"input-group\">\n" +
    "                                    <div class=\"checkbox\">\n" +
    "                                      <label>\n" +
    "                                        <input \n" +
    "                                          id=\"login-remember\" \n" +
    "                                          type=\"checkbox\" \n" +
    "                                          name=\"remember\" \n" +
    "                                          ng-model='user.remember'\n" +
    "                                          value=\"1\"> Remember me\n" +
    "                                      </label>\n" +
    "                                    </div>\n" +
    "                                  </div>\n" +
    "\n" +
    "\n" +
    "                              <div style=\"margin-top:10px\" class=\"form-group\">\n" +
    "                                  <!-- Button -->\n" +
    "\n" +
    "                                  <div class=\"col-sm-12 controls\">\n" +
    "                                    <button  class=\"btn btn-success\" ng-disabled=\"userForm.$invalid\">Login</button>\n" +
    "                                    <button  type='button' parse-facebook-signin class=\"btn btn-primary\">Login With Facebook</button>\n" +
    "                                           \n" +
    "                   \n" +
    "\n" +
    "                                  </div>\n" +
    "                              </div>\n" +
    "\n" +
    "\n" +
    "                              <div class=\"form-group\">\n" +
    "                                  <div class=\"col-md-12 control\">\n" +
    "                                      <div style=\"border-top: 1px solid#888; padding-top:15px; font-size:85%\" >\n" +
    "                                          Don't have an account? \n" +
    "                                      <a href=\"#/signup\">\n" +
    "                                          Sign Up Here\n" +
    "                                      </a>\n" +
    "                                      </div>\n" +
    "                                  </div>\n" +
    "                              </div>    \n" +
    "                          </form>     \n" +
    "                      </div>                     \n" +
    "                  </div>  \n" +
    "      </div>\n" +
    "  </div>");
}]);

angular.module("users/signout.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("users/signout.tpl.html",
    "<div class=\"container\" >\n" +
    "\n" +
    "    <div class=\"row\" style=\"margin-top:20px\" >\n" +
    "        <div class=\"col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3\">\n" +
    "            <h2>You have been logged out! <a href='#/signin'>Sign In</a></h2>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    " </div>");
}]);

angular.module("users/signup.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("users/signup.tpl.html",
    "<!-- http://bootsnipp.com/calvinko -->\n" +
    "<div class=\"container\">    \n" +
    "    <div id=\"signupbox\" style=\"margin-top:50px\" class=\"mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2\">\n" +
    "                <div class=\"panel panel-info\">\n" +
    "                    <div class=\"panel-heading\">\n" +
    "                        <div class=\"panel-title\">Sign Up</div>\n" +
    "                        <div style=\"float:right; font-size: 85%; position: relative; top:-10px\"><a id=\"signinlink\" href=\"#/login\">Sign In</a></div>\n" +
    "                    </div>  \n" +
    "                    <div class=\"panel-body\" >\n" +
    "\n" +
    "                        <div  ng-show=\"message\" id=\"login-alert\" class=\"alert alert-danger col-sm-12\">{{message}}</div>\n" +
    "                        <form name=\"userForm\" ng-submit=\"signup(userForm.$valid)\"  class=\"form-horizontal\" role=\"form\" novalidate>\n" +
    "                            \n" +
    "                            <div id=\"signupalert\" style=\"display:none\" class=\"alert alert-danger\">\n" +
    "                                <p>Error:</p>\n" +
    "                                <span></span>\n" +
    "                            </div>\n" +
    "                                \n" +
    "                            \n" +
    "                              \n" +
    "                            <div class=\"form-group\">\n" +
    "                                <label for=\"email\" class=\"col-md-3 control-label\">Email</label>\n" +
    "                                <div class=\"col-md-9\">\n" +
    "                                    <input type=\"email\"\n" +
    "                                    required\n" +
    "                                    ng-model=\"user.email\"\n" +
    "                                    ng-minlength='2'\n" +
    "                                    autofocus \n" +
    "                                    class=\"form-control has-error\" \n" +
    "                                    name=\"email\" \n" +
    "                                    placeholder=\"Email Address\"\n" +
    "                                    unique-email\n" +
    "                                    >\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            \n" +
    "                            <div style='margin-top:-10px' ng-show=\"userForm.email.$invalid && !userForm.email.$pristine\" >\n" +
    "                            <div class='col-md-3'></div>\n" +
    "                            <div class=\"help-block col-md-9\" ng-show=\"userForm.email.$error.uniqueEmail\">Email already exists.</div>\n" +
    "                            <div  ng-show=\"!userForm.email.$error.uniqueEmail\" class=\"help-block col-md-9\">Enter a valid email.</div> \n" +
    "                            </div>\n" +
    "\n" +
    "                            <div class=\"form-group\">\n" +
    "                                <label for=\"username\" class=\"col-md-3 control-label\">Username</label>\n" +
    "                                <div class=\"col-md-9\">\n" +
    "                                    <input type=\"text\"\n" +
    "                                    required\n" +
    "                                    unique-username\n" +
    "                                    ng-pattern=\"/^[0-9a-zA-Z]{1,10}$/\"\n" +
    "                                    ng-model=\"user.username\"                                     \n" +
    "                                    class=\"form-control has-error\" \n" +
    "                                    name=\"username\" \n" +
    "                                    placeholder=\"Username\">\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            \n" +
    "                            <div style='margin-top:-10px' ng-show=\"userForm.username.$invalid && !userForm.username.$pristine\" >\n" +
    "                            <div class='col-md-3'></div>\n" +
    "                            <div class=\"help-block col-md-9\" ng-show=\"userForm.username.$error.uniqueUsername\">Username already exists.</div>\n" +
    "                            <div ng-show=\"!userForm.username.$error.uniqueUsername\" class=\"help-block col-md-9\">Username must contain only letters and numbers</div> \n" +
    "                            </div>\n" +
    "\n" +
    "                            <div class=\"form-group\">\n" +
    "                                <label for=\"password\" class=\"col-md-3 control-label\">Password</label>\n" +
    "                                <div class=\"col-md-9\">\n" +
    "                                    <input type=\"password\" \n" +
    "                                    class=\"form-control\" \n" +
    "                                    name=\"password\" \n" +
    "                                    required\n" +
    "                                    ng-model=\"user.password\" \n" +
    "                                    ng-minlength='5'\n" +
    "                                    placeholder=\"Password\">\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div style='margin-top:-10px' ng-show=\"userForm.password.$invalid && !userForm.password.$pristine\" >\n" +
    "                            <div class='col-md-3'></div>\n" +
    "                            <div class=\"help-block col-md-9\">Enter a valid password. </div> \n" +
    "                            </div>\n" +
    "\n" +
    "                            <div class=\"form-group\">\n" +
    "                                <!-- Button -->                                        \n" +
    "                                <div class=\"col-md-offset-3 col-md-9\">\n" +
    "                                    <button  class=\"btn btn-primary\" ng-disabled=\"userForm.$invalid\">Sign Up</button>\n" +
    "                                    <span style=\"margin-left:8px;\">or</span>  \n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            \n" +
    "                            <div style=\"border-top: 1px solid #999; padding-top:20px\"  class=\"form-group\">                                \n" +
    "                                <div class=\"col-md-offset-3 col-md-9\">\n" +
    "                                    <button id=\"btn-fbsignup\" type=\"button\"  parse-facebook-signin class=\"btn btn-primary\"><i class=\"icon-facebook\"></i>   Sign Up with Facebook</button>\n" +
    "               \n" +
    "                                </div>                                           \n" +
    "                                    \n" +
    "                            </div>                                                                            \n" +
    "                        </form>\n" +
    "                     </div>\n" +
    "                </div>\n" +
    "\n" +
    "           \n" +
    "           \n" +
    "            \n" +
    "     </div> \n" +
    "</div>\n" +
    "");
}]);

angular.module("users/users.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("users/users.tpl.html",
    "<h1>Users</h1>\n" +
    "\n" +
    "\n" +
    "<form name=\"userInfo\" ng-submit=\"updateUserInfo(userInfo.$valid)\"  class=\"form-horizontal\" role=\"form\" novalidate>\n" +
    "\n" +
    "\n" +
    "    <input type=\"email\"\n" +
    "           required\n" +
    "           ng-model=\"user.email\"\n" +
    "           ng-minlength='2'\n" +
    "           class=\"form-control has-error\" \n" +
    "           name=\"email\" \n" +
    "           placeholder=\"Email Address\"\n" +
    "           >\n" +
    "\n" +
    "    <div style='margin-top:-10px' ng-show=\"userInfo.email.$invalid && !userInfo.email.$pristine\" >\n" +
    "        <div class='col-md-3'></div>\n" +
    "        <div class=\"help-block col-md-9\" ng-show=\"userForm.email.$error.uniqueEmail\">Email already exists.</div>\n" +
    "        <div  ng-show=\"!userForm.email.$error.uniqueEmail\" class=\"help-block col-md-9\">Enter a valid email.</div> \n" +
    "    </div>\n" +
    "\n" +
    "    <p ng-show=\"userInfo.username.$invalid && !userInfo.username.$pristine\" class=\"help-block\">Enter a valid username.</p> \n" +
    "\n" +
    "</form>\n" +
    "");
}]);
