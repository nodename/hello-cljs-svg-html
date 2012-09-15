goog.provide('hello_cljs_svg_html.core');
goog.require('cljs.core');
document.write("<h1>My first SVG</h1>");
document.write("<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\">");
document.write("<circle cx=\"100\" cy=\"50\" r=\"40\" stroke=\"black\" stroke-width=\"2\" fill=\"red\" />");
document.write("</svg>");
