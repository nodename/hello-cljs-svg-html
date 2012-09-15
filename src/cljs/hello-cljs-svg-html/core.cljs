(ns hello-cljs-svg-html.core)


(.write js/document "<h1>My first SVG</h1>")

(.write js/document "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\">")
  
(.write js/document "<circle cx=\"100\" cy=\"50\" r=\"40\" stroke=\"black\" stroke-width=\"2\" fill=\"red\" />")
(.write js/document "</svg>")
