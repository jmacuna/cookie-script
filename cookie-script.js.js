	var cookieQuery = null,
	cookieScriptPosition = "bottom",
	cookieScriptSource = "cookie-script.com",
	cookieScriptDomain = "",
	cookieScriptReadMore = "/p/privacidad.html",
	cookieId="f2be96e1cdb5ec378c2e627d8b662597", 
	cookieScriptDebug = 0,
	cookieScriptTitle= '',
	cookieScriptDesc= "Utilizamos cookies para mejorar nuestros servicios y experiencia de usuario. Si continua navegando, consideramos que acepta su uso. ",
	cookieScriptAccept='Aceptar',
	cookieScriptMore='Leer más',
	cookieScriptCopyrights='Aceptar',
	//cookieBackground='#EEE',
	//cookieTextColor='#000',
	cookieScriptLoadJavaScript = function (d, b) {
        var c = document.getElementsByTagName("head")[0],
            a = document.createElement("script");
        a.type = "text/javascript", a.src = d, b != undefined && (a.onload = a.onreadystatechange = function () {
            (!a.readyState || /loaded|complete/.test(a.readyState)) && (a.onload = a.onreadystatechange = null, c && a.parentNode && c.removeChild(a), a = undefined, b())
        }), c.insertBefore(a, c.firstChild)
    }, 
	
	InjectCookieScript = function () {
		cookieScriptCreateCookie = function (n, t, i) {
			var u = "",
				r, f;
			i && (r = new Date, r.setTime(r.getTime() + i * 864e5), u = "; expires=" + r.toGMTString()), f = "", cookieScriptDomain != "" && (f = "; domain=" + cookieScriptDomain), document.cookie = n + "=" + t + u + f + "; path=/"
		}, 
		
		cookieScriptReadCookie = function (n) {
			for (var r = n + "=", u = document.cookie.split(";"), t, i = 0; i < u.length; i++) {
				for (t = u[i]; t.charAt(0) == " ";) t = t.substring(1, t.length);
				if (t.indexOf(r) == 0) return t.substring(r.length, t.length)
			}
			return null
		};
        cookieQuery(function () {
			cookieQuery("#cookiescript_injected").remove();
			cookieQuery("#cookiescript_overlay").remove();
			cookieQuery("#cookiescript_info_box").remove();
						if(cookieScriptReadCookie("cookiescriptaccept") == "visit") 
				return false; 
			            cookieQuery("body").append('<div id="cookiescript_injected"><div id="cookiescript_wrapper">'+cookieScriptDesc+'&nbsp;&nbsp;<a id="cookiescript_readmore">'+cookieScriptMore+'</a><div id="cookiescript_accept">'+cookieScriptAccept+'</div><a href="https://'+cookieScriptSource+'" target="_blank" id="cookiescript_link">Powered by cookie-script.com</a><div id="cookiescript_pixel"></div></div>');
            cookieQuery("#cookiescript_injected").css({
               "background-color": "#EEEEEE",
                "z-index": 999999,
                opacity: 1,
                position: "fixed",
                padding: "10px 0",
                width: "100%",
				left: 0,
				"font-size": "13px",
				"font-weight": "normal",
                "text-align": "left",
                color: "#000000",
                "font-family": "Arial, sans-serif",
                display: "none",
				"-moz-box-shadow": "0px 0px 8px #000000",
				"-webkit-box-shadow": "0px 0px 8px #000000",
				"box-shadow": "0px 0px 8px #000000",
            });
			
			cookieQuery("#cookiescript_buttons").css({
				width: "200px",
				"margin":"0 auto",
				"font-size": "13px",
				"font-weight": "normal",
                "text-align": "center",
                color: "#000000",
                "font-family": "Arial, sans-serif"
            });
			cookieQuery("#cookiescript_wrapper").css({
				"margin":"0 10px",
				"font-size": "13px",
				"font-weight": "normal",
                "text-align": "center",
                color: "#000000",
                "font-family": "Arial, sans-serif",
				"line-height": "23px"
            });
			
            if (cookieScriptPosition == "top") {
                cookieQuery("#cookiescript_injected").css("top", 0);
            } else {
                cookieQuery("#cookiescript_injected").css("bottom", 0);
            }
			
			cookieQuery("#cookiescript_injected h4#cookiescript_header").css({
                "background-color": "#EEEEEE",
                "z-index": 999999,
                padding: "0 0 7px 0",
                "text-align": "center",
                 color: "#000000",
                "font-family": "Arial, sans-serif",
				 display: "block",
                "font-size": "15px",
				"font-weight": "bold",
                margin: "0"
            });
			
            cookieQuery("#cookiescript_injected span").css({
                display: "block",
                "font-size": "100%",
                margin: "5px 0"
            });
            cookieQuery("#cookiescript_injected a").css({
                "text-decoration": "underline",
                 color: "#000000",
            });
           
			 cookieQuery("#cookiescript_injected a#cookiescript_link").css({
                display: "none",
                "text-decoration": "none",
                 color: "#000000",
                "font-size": "85%",
                "text-decoration": "none",
                "float": "right",
				padding: "0px 20px 0 0",
				"letter-spacing": "normal",
				"font-weight":"normal"
            });
             cookieQuery("#cookiescript_injected div#cookiescript_accept").css({
                "-webkit-border-radius": "5px",
                "-khtml-border-radius": "5px",
                "-moz-border-radius": "5px",
                "border-radius": "5px",
                "background-color": "#5BB75B",
                border: 0,
                padding: "6px 10px",
                "font-weight": "bold",
                cursor: "pointer",
                margin: "0 10px 0 30px",
				color: "#FFFFFF",
				"-webkit-transition": "0.25s",
				"-moz-transition": "0.25s",
				"transition": "0.25s",
				"display":"inline",
				"text-shadow": "rgb(0, 0, 0) 0px 0px 2px",
				"white-space": "nowrap"
            });
          
		  	cookieQuery("#cookiescript_injected #cookiescript_readmore").css({
				cursor: "pointer",
				"text-decoration":"underline",
				padding:0,
				margin:0,
				color: "#000000",
				"white-space": "nowrap"
			})
			
			cookieQuery("#cookiescript_injected div#cookiescript_pixel").css({
                "width": "1px",
				"height":"1px",
				"float": "left",
				'background-image':'url(https://'+cookieScriptSource+'/pixel.gif?p='+cookieId+'&a=s)'
            });
			
			
			cookieQuery("#cookiescript_injected div#cookiescript_accept").hover( function(){
				cookieQuery(this).css('background-color', '#51a351');
			},function(){
				cookieQuery(this).css('background-color', '#5bb75b');
			});
			
			
			
            cookieQuery("#cookiescript_injected").fadeIn(1000); 
			
			
			
			cookieQuery("#cookiescript_injected div#cookiescript_accept").click(function(){
				cookieQuery("#cookiescript_injected #cookiescript_pixel").css({
				'background-image':'url(https://'+cookieScriptSource+'/pixel.gif?p='+cookieId+'&a=o)'
				});
				cookieQuery("#cookiescript_injected").fadeOut(200);
				cookieScriptCreateCookie("cookiescriptaccept", "visit", 30);
				cookieScriptDoBox("hide");
			});
			
			cookieQuery("#cookiescript_injected #cookiescript_readmore").click(function(){
				cookieQuery("#cookiescript_injected #cookiescript_pixel").css({
                	'background-image':'url(https://'+cookieScriptSource+'/pixel.gif?p='+cookieId+'&a=r)'
				});
								window.open(cookieScriptReadMore, '_blank');
				return false;
								
			})
			
			cookieQuery("#cookiescript_overlay").click(function(){
				cookieScriptDoBox("hide");
			});
			
			cookieQuery("#cookiescript_info_close").click(function(){
				cookieScriptDoBox("hide");
			});
			
			document.onkeydown = function(evt) {
				evt = evt || window.event;
				if (evt.keyCode == 27) {
					cookieScriptDoBox("hide");
				}
			};
        });
		cookieScriptCreateCookie = function (n, t, i) {
			var u = "",
				r, f;
			i && (r = new Date, r.setTime(r.getTime() + i * 864e5), u = "; expires=" + r.toGMTString()), f = "", cookieScriptDomain != "" && (f = "; domain=" + cookieScriptDomain), document.cookie = n + "=" + t + u + f + "; path=/"
		}, 
		
		cookieScriptReadCookie = function (n) {
			for (var r = n + "=", u = document.cookie.split(";"), t, i = 0; i < u.length; i++) {
				for (t = u[i]; t.charAt(0) == " ";) t = t.substring(1, t.length);
				if (t.indexOf(r) == 0) return t.substring(r.length, t.length)
			}
			return null
		};
		function cookieScriptDoBox(action) {	
			if (action == "show") {
				cookieQuery("#cookiescript_overlay").show();
				cookieQuery("#cookiescript_info_box").show();
			} else if (action == "hide") {
				cookieQuery("#cookiescript_overlay").hide();
				cookieQuery("#cookiescript_info_box").hide();
			}
		}
	
    };
window.jQuery && jQuery.fn ? (cookieScriptDebug && window.console && console.log("Using existing jQuery version " + jQuery.fn.jquery), cookieQuery = window.jQuery, InjectCookieScript()) : (cookieScriptDebug && window.console && console.log("Loading jQuery 1.8.1 from ajax.googleapis.com"), cookieScriptLoadJavaScript(("https:" == document.location.protocol ? "https://" : "http://") + "ajax.googleapis.com/ajax/libs/jquery/1.8.1/jquery.min.js", function () {
    cookieQuery = jQuery.noConflict(!0), InjectCookieScript()
}));