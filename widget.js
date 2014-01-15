(function(d){
	//Config
	var cfg_host = "www.getgumball.com";
	var cfg_script_name = "widget.main.js";
	var cfg_width = 410;
	var cfg_height = 670;

	var parseQuery = function(query) {
		var Params = new Object();
		if (!query ) { return Params; }
		var Pairs = query.split(/[;&]/);
		for ( var i = 0; i < Pairs.length; i++ ) {
				var KeyVal = Pairs[i].split('=');
				if ( ! KeyVal || KeyVal.length != 2 ) continue;
				var key = unescape( KeyVal[0] );
				var val = unescape( KeyVal[1] );
				val = val.replace(/\+/g, ' ');
				Params[key] = val;
		}
		return Params;
	};

	var scripts = d.getElementsByTagName('script');
	var scriptRef = null;
	for(var i = 0; i < scripts.length; i++) {
		if(scripts[i].src.indexOf("getgumball.com/" + cfg_script_name) != -1) {
			scriptRef = scripts[i];
			break;
		}
	}

	var queryString = scriptRef.src.replace(/^[^\?]+\??/,'');
	var params = parseQuery(queryString);

	var widgetID = params['id'];
	var widgetDomID = "gumball_widget_" + widgetID;
	var existing_widget = document.getElementById(widgetDomID);
	if(!existing_widget) {
		//Create and Add CSS
		var css = document.createElement("link");
		css.setAttribute("rel", "stylesheet");
		css.setAttribute("type", "text/css");
		css.setAttribute("href", "http://" + cfg_host + "/widget-embed.css");
		document.getElementsByTagName("head")[0].appendChild(css);

		//Create and Add Widget
		var widget = d.createElement('iframe');
		widget.id = widgetDomID;
		widget.src = "http://" + cfg_host + "/widgets/" + widgetID;
		widget.height = cfg_height;
		widget.width = cfg_width;
		var root = d.getElementById("gumball_" + widgetID);
		root.parentNode.insertBefore(widget, root.nextSibling);
	}

}(document));