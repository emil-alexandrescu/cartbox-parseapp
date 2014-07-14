require ('cloud/app.js');
var cloudinary = require("cloud/cloudinary");

// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("hello", function(request, response) {
    var productQuery = new Parse.Query("Product");
    productQuery.equalTo("id", '26awzPO07u');
    productQuery.find({
        success: function(obj){
            response.success("abc");
        }
    })

});


var CLOUDINARY_OBJECT_NAME = "Product";
var CLOUDINARY_IDENTIFIER_FIELD_NAME = "productImages";
//cloudinary.beforeSaveFactory(CLOUDINARY_OBJECT_NAME, CLOUDINARY_IDENTIFIER_FIELD_NAME);
Parse.Cloud.define("sign_cloudinary_upload_request", function(request, response) {
    if (!request.user || !request.user.authenticated()) {
        response.error("Needs an authenticated user");
        return;
    }
    response.success(
        cloudinary.sign_upload_request({tags: request.params.productname})
    );
});
Parse.Cloud.define("photo_thumbnail_url", function(request, response) {
    if (!request.user || !request.user.authenticated()) {
        response.error("Needs an authenticated user");
        return;
    }

    var query = new Parse.Query(CLOUDINARY_OBJECT_NAME);
    query.get(request.params.objectId, {
        success: function(result) {
            response.success({
                url: cloudinary.url(result.get(CLOUDINARY_IDENTIFIER_FIELD_NAME), {crop: "limit", height: 475})
            });
        },
        error: function() {
            response.error("image lookup failed");
        }
    });
});
Parse.Cloud.define("upload_image", function(request, response){
    if (!request.params.file || !request.params.signature){
        response.error("Wrong Params");
        return;
    }
    //console.log(cloudinary.config.cloud_name);
    //console.log()
    Parse.Cloud.httpRequest({
        url: 'https://api.cloudinary.com/v1_1/'+'dss0tbrcx'+'/image/upload',
        method: 'POST',
        body: {
            file: request.params.file,
            signature: request.params.signature,
            timestamp: request.params.timestamp,
            api_key: request.params.api_key
        },
        success: function(httpResponse){
            console.log(httpResponse.text);
            response.success(httpResponse.text);
        },
        error: function(httpResponse){
            response.error('There was error!' + httpResponse.status);
        }
    })
})