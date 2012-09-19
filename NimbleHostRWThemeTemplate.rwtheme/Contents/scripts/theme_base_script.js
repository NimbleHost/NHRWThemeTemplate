/* # RwGet # */
/* RwGet is courtesy of Adam Merrifield of seyDesign http://seydesign.com */
/* Visit https://github.com/seyDoggy/RwSetGet for the latest version. */
RwGet = {
    pathto: function(path, file) {
        var rtrim = function(str, list) {
            var charlist = !list ? 's\xA0': (list + '').replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g, '$1');
            var re = new RegExp('[' + charlist + ']+$', 'g');
            return (str + '').replace(re, '');
        };
        var jspathto = rtrim(RwSet.pathto, "javascript.js");
        if ((path !== undefined) && (file !== undefined)) {
            jspathto = jspathto + path + file;
        } else if (path !== undefined) {
            jspathto = jspathto + path;
        }
        return jspathto;
    },
    baseurl: function(path, file) {
        var jsbaseurl = RwSet.baseurl;
        if ((path !== undefined) && (file !== undefined)) {
            jsbaseurl = jsbaseurl + path + file;
        } else if (path !== undefined) {
            jsbaseurl = jsbaseurl + path;
        }
        return jsbaseurl;
    }
};

// reduce potential conflicts with other scripts on the page
nhrwthemetemplate.jQuery = jQuery.noConflict(true);

// Define a closure using the unique object and namespace declared in theme_variables.js
nhrwthemetemplate.themeFunctions = (function(nhrwthemetemplateObject) {
    // When jQuery is used it will be available as $ and jQuery but only
    // inside the closure.
    var jQuery = nhrwthemetemplate.jQuery;
    var $ = jQuery;
	
	$(document).ready(function(){
		if( nhrwthemetemplate.themeFunctions.variable_1 === 'test' ) {
			//Do stuff here based upon the value of the variable, if it's been selected in theme options.
			$('body').append(nhrwthemetemplate.themeFunctions.variable_1);
		}
	});
	
	// Returning the object here allows you to access variables and functions outsite of the closure.
	// When accessing those variables/functions be sure to specify them correctly, such as: 
	// nhrwthemetemplate.themeFunctions.variableName -- for variables, and
	// nhrwthemetemplate.themeFunctions.functionName() -- for functions.
	return nhrwthemetemplateObject;
})(nhrwthemetemplate.themeFunctions);