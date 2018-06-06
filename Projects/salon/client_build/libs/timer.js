(function() {
    var _id="89fdfa1cfae561b7a7ba81f95a348df4";
    while(document.getElementById("timer"+_id))_id=_id+"0";
    document.write("<div id='timer"+_id+"' style='min-width:300px;height:80px;'></div>");
    var _t=document.createElement("script");
    _t.src="http://megatimer.ru/timer/timer.min.js";
    var _f=function(_k) {
        var l=new MegaTimer(_id, {
            "view":[1, 1, 1, 1], "type": {
                "currentType":"3", "params": {
                    "weekdays": [1, 1, 1, 1, 1, 1, 1], "usertime": true, "time": "00:00", "tz": -180, "hours": "23", "minutes": "50"
                }
            }
            , "design": {
                "type":"circle", "params": {
                    "width":"4", "radius":"35", "line":"solid", "line-color":"#ffba00", "background":"solid", "background-color":"rgba(126,80,169,0.09)", "direction":"direct", "number-font-family": {
                        "family": "Roboto", "link": "<link href='http://fonts.googleapis.com/css?family=Roboto&subset=latin,cyrillic' rel='stylesheet' type='text/css'>"
                    }
                    , "number-font-size":"32", "number-font-color":"#ffffff", "separator-margin":"8", "separator-on":false, "separator-text":":", "text-on":true, "text-font-family": {
                        "family": "Roboto", "link": "<link href='http://fonts.googleapis.com/css?family=Roboto&subset=latin,cyrillic' rel='stylesheet' type='text/css'>"
                    }
                    , "text-font-size":"14", "text-font-color":"#b3a6bf"
                }
            }
            , "designId":5, "theme":"white", "width":300, "height":80
        }
        );
        if(_k!=null)l.run();
    }
    ;
    _t.onload=_f;
    _t.onreadystatechange=function() {
        if(_t.readyState=="loaded")_f(1);
    }
    ;
    var _h=document.head||document.getElementsByTagName("head")[0];
    _h.appendChild(_t);
}

).call(this);