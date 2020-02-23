$(document).ready(function () {
  $.cookieCuttr();
  
  if ($.cookie('cc_cookie_decline') == "cc_cookie_decline") {
    // do nothing
  } else {
    var _gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-158939469-1']);
    _gaq.push(['_trackPageview']);

(function() {
var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
var s = document. getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
}

});

