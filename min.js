(function(){var a=document.createElement("iframe"),c={},d=0,e=window.console?console.log:alert;a.setAttribute("style","display:none");document.body.appendChild(a);var f=a.contentWindow?a.contentWindow:a.contentDocument.document,b;for(b in window)f.hasOwnProperty(b)||(c[b]=window[b],d++);a.parentNode.removeChild(a);e("Found "+d+" custom object(s)");e(c)})();
