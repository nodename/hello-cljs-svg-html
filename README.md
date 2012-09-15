# hello-cljs-svg-html

This is my first SVG program.
It draws a circle by writing SVG code into the HTML document.
It is set up as a leiningen and Counterclockwise project (see @cemerick's video: http://www.youtube.com/watch?v=VVd4ow-ZcX0)

## Usage

Build: from a shell prompt anywhere within the project:

% lein cljsbuild once

This will compile resources/public/hello.js from ClojureScript source in src/cljs.

(Type 'lein cljsbuild' to see other subtasks.)

View: open resources/public/hello.html in a browser.

## License

Distributed under the Eclipse Public License, the same as Clojure.
