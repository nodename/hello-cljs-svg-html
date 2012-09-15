goog.provide('hello_cljs_svg.test');
goog.require('cljs.core');
goog.require('c2.geo.core');
goog.require('c2.core');
goog.require('c2.maths');
goog.require('c2.geo.projection');
goog.require('clojure.data.json');
goog.require('vomnibus.color_brewer');
goog.require('c2.scale');
var data__5891 = cljs.core.map.call(null,(function (p__5886){
var vec__5887__5888 = p__5886;
var street__5889 = cljs.core.nth.call(null,vec__5887__5888,0,null);
var geo__5890 = cljs.core.nth.call(null,vec__5887__5888,1,null);
return cljs.core.ObjMap.fromObject(["\uFDD0'street","\uFDD0'geo","\uFDD0'value"],{"\uFDD0'street":street__5889,"\uFDD0'geo":geo__5890,"\uFDD0'value":cljs.core.rand.call(null)});
}),hello_cljs_svg.test.streets);
var color_scheme__5892 = vomnibus.color_brewer.Greens_9;
var color_scale__5894 = (function (){var s__5893 = c2.scale.linear.call(null,"\uFDD0'domain",c2.maths.extent.call(null,cljs.core.map.call(null,"\uFDD0'value",data__5891)),"\uFDD0'range",cljs.core.PersistentVector.fromArray([0,(cljs.core.count.call(null,color_scheme__5892) - 1)], true));
return (function (d){
return cljs.core.nth.call(null,color_scheme__5892,c2.maths.floor.call(null,s__5893.call(null,d)));
});
})();
var proj__5895 = c2.geo.projection.albers_usa.call(null);
cljs.core.PersistentVector.fromArray(["\uFDD0'svg",cljs.core.ObjMap.fromObject(["\uFDD0'xmlns","\uFDD0'preserveAspectRatio","\uFDD0'width","\uFDD0'height","\uFDD0'viewBox"],{"\uFDD0'xmlns":"http://www.w3.org/2000/svg","\uFDD0'preserveAspectRatio":"xMinYMin meet","\uFDD0'width":960,"\uFDD0'height":400,"\uFDD0'viewBox":"0 0 950 500"}),cljs.core.PersistentVector.fromArray(["\uFDD0'g.streets",c2.core.unify.call(null,data__5891,(function (p__5896){
var map__5897__5898 = p__5896;
var map__5897__5899 = ((cljs.core.seq_QMARK_.call(null,map__5897__5898))?cljs.core.apply.call(null,cljs.core.hash_map,map__5897__5898):map__5897__5898);
var value__5900 = cljs.core._lookup.call(null,map__5897__5899,"\uFDD0'value",null);
var geo__5901 = cljs.core._lookup.call(null,map__5897__5899,"\uFDD0'geo",null);
var street__5902 = cljs.core._lookup.call(null,map__5897__5899,"\uFDD0'street",null);
return cljs.core.PersistentVector.fromArray(["\uFDD0'path.street",cljs.core.ObjMap.fromObject(["\uFDD0'name","\uFDD0'd","\uFDD0'stroke","\uFDD0'fill"],{"\uFDD0'name":street__5902,"\uFDD0'd":c2.geo.core.geo__GT_svg.call(null,geo__5901,"\uFDD0'projection",proj__5895),"\uFDD0'stroke":"black","\uFDD0'fill":color_scale__5894.call(null,value__5900)})], true);
}))], true)], true);
