goog.provide('cljs.core');
goog.require('goog.array');
goog.require('goog.object');
goog.require('goog.string.StringBuffer');
goog.require('goog.string');
cljs.core._STAR_unchecked_if_STAR_ = false;
/**
* Each runtime environment provides a diffenent way to print output.
* Whatever function *print-fn* is bound to will be passed any
* Strings which should be printed.
*/
cljs.core._STAR_print_fn_STAR_ = (function _STAR_print_fn_STAR_(_){
throw (new Error("No *print-fn* fn set for evaluation environment"));
});
void 0;
void 0;
void 0;
void 0;
void 0;
void 0;
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
void 0;/**
* Internal - do not use!
*/
cljs.core.type_satisfies_ = (function type_satisfies_(p,x){
if((p[goog.typeOf(x)]))
{return true;
} else
{if((p["_"]))
{return true;
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
});
void 0;cljs.core.is_proto_ = (function is_proto_(x){
return (x.constructor.prototype === x);
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.missing_protocol = (function missing_protocol(proto,obj){
return Error(["No protocol method ",proto," defined for type ",goog.typeOf(obj),": ",obj].join(""));
});
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(array_like){
return array_like.slice();
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
cljs.core.make_array = (function() {
var make_array = null;
var make_array__1 = (function (size){
return (new Array(size));
});
var make_array__2 = (function (type,size){
return make_array.call(null,size);
});
make_array = function(type,size){
switch(arguments.length){
case 1:
return make_array__1.call(this,type);
case 2:
return make_array__2.call(this,type,size);
}
throw('Invalid arity: ' + arguments.length);
};
make_array.cljs$lang$arity$1 = make_array__1;
make_array.cljs$lang$arity$2 = make_array__2;
return make_array;
})()
;
void 0;
/**
* Returns the value at the index.
* @param {...*} var_args
*/
cljs.core.aget = (function() {
var aget = null;
var aget__2 = (function (array,i){
return (array[i]);
});
var aget__3 = (function() { 
var G__5886__delegate = function (array,i,idxs){
return cljs.core.apply.call(null,aget,aget.call(null,array,i),idxs);
};
var G__5886 = function (array,i,var_args){
var idxs = null;
if (goog.isDef(var_args)) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5886__delegate.call(this, array, i, idxs);
};
G__5886.cljs$lang$maxFixedArity = 2;
G__5886.cljs$lang$applyTo = (function (arglist__5887){
var array = cljs.core.first(arglist__5887);
var i = cljs.core.first(cljs.core.next(arglist__5887));
var idxs = cljs.core.rest(cljs.core.next(arglist__5887));
return G__5886__delegate(array, i, idxs);
});
G__5886.cljs$lang$arity$variadic = G__5886__delegate;
return G__5886;
})()
;
aget = function(array,i,var_args){
var idxs = var_args;
switch(arguments.length){
case 2:
return aget__2.call(this,array,i);
default:
return aget__3.cljs$lang$arity$variadic(array,i, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
aget.cljs$lang$maxFixedArity = 2;
aget.cljs$lang$applyTo = aget__3.cljs$lang$applyTo;
aget.cljs$lang$arity$2 = aget__2;
aget.cljs$lang$arity$variadic = aget__3.cljs$lang$arity$variadic;
return aget;
})()
;
/**
* Sets the value at the index.
*/
cljs.core.aset = (function aset(array,i,val){
return (array[i] = val);
});
/**
* Returns the length of the array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
void 0;
cljs.core.into_array = (function() {
var into_array = null;
var into_array__1 = (function (aseq){
return into_array.call(null,null,aseq);
});
var into_array__2 = (function (type,aseq){
return cljs.core.reduce.call(null,(function (a,x){
a.push(x);
return a;
}),[],aseq);
});
into_array = function(type,aseq){
switch(arguments.length){
case 1:
return into_array__1.call(this,type);
case 2:
return into_array__2.call(this,type,aseq);
}
throw('Invalid arity: ' + arguments.length);
};
into_array.cljs$lang$arity$1 = into_array__1;
into_array.cljs$lang$arity$2 = into_array__2;
return into_array;
})()
;
void 0;cljs.core.IFn = {};
cljs.core._invoke = (function() {
var _invoke = null;
var _invoke__1 = (function (this$){
if((function (){var and__3822__auto____5951 = this$;
if(and__3822__auto____5951)
{return this$.cljs$core$IFn$_invoke$arity$1;
} else
{return and__3822__auto____5951;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else
{return (function (){var or__3824__auto____5952 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____5952)
{return or__3824__auto____5952;
} else
{var or__3824__auto____5953 = (cljs.core._invoke["_"]);
if(or__3824__auto____5953)
{return or__3824__auto____5953;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){
if((function (){var and__3822__auto____5954 = this$;
if(and__3822__auto____5954)
{return this$.cljs$core$IFn$_invoke$arity$2;
} else
{return and__3822__auto____5954;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else
{return (function (){var or__3824__auto____5955 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____5955)
{return or__3824__auto____5955;
} else
{var or__3824__auto____5956 = (cljs.core._invoke["_"]);
if(or__3824__auto____5956)
{return or__3824__auto____5956;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){
if((function (){var and__3822__auto____5957 = this$;
if(and__3822__auto____5957)
{return this$.cljs$core$IFn$_invoke$arity$3;
} else
{return and__3822__auto____5957;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else
{return (function (){var or__3824__auto____5958 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____5958)
{return or__3824__auto____5958;
} else
{var or__3824__auto____5959 = (cljs.core._invoke["_"]);
if(or__3824__auto____5959)
{return or__3824__auto____5959;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){
if((function (){var and__3822__auto____5960 = this$;
if(and__3822__auto____5960)
{return this$.cljs$core$IFn$_invoke$arity$4;
} else
{return and__3822__auto____5960;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else
{return (function (){var or__3824__auto____5961 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____5961)
{return or__3824__auto____5961;
} else
{var or__3824__auto____5962 = (cljs.core._invoke["_"]);
if(or__3824__auto____5962)
{return or__3824__auto____5962;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){
if((function (){var and__3822__auto____5963 = this$;
if(and__3822__auto____5963)
{return this$.cljs$core$IFn$_invoke$arity$5;
} else
{return and__3822__auto____5963;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else
{return (function (){var or__3824__auto____5964 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____5964)
{return or__3824__auto____5964;
} else
{var or__3824__auto____5965 = (cljs.core._invoke["_"]);
if(or__3824__auto____5965)
{return or__3824__auto____5965;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){
if((function (){var and__3822__auto____5966 = this$;
if(and__3822__auto____5966)
{return this$.cljs$core$IFn$_invoke$arity$6;
} else
{return and__3822__auto____5966;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else
{return (function (){var or__3824__auto____5967 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____5967)
{return or__3824__auto____5967;
} else
{var or__3824__auto____5968 = (cljs.core._invoke["_"]);
if(or__3824__auto____5968)
{return or__3824__auto____5968;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){
if((function (){var and__3822__auto____5969 = this$;
if(and__3822__auto____5969)
{return this$.cljs$core$IFn$_invoke$arity$7;
} else
{return and__3822__auto____5969;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3824__auto____5970 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____5970)
{return or__3824__auto____5970;
} else
{var or__3824__auto____5971 = (cljs.core._invoke["_"]);
if(or__3824__auto____5971)
{return or__3824__auto____5971;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){
if((function (){var and__3822__auto____5972 = this$;
if(and__3822__auto____5972)
{return this$.cljs$core$IFn$_invoke$arity$8;
} else
{return and__3822__auto____5972;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3824__auto____5973 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____5973)
{return or__3824__auto____5973;
} else
{var or__3824__auto____5974 = (cljs.core._invoke["_"]);
if(or__3824__auto____5974)
{return or__3824__auto____5974;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){
if((function (){var and__3822__auto____5975 = this$;
if(and__3822__auto____5975)
{return this$.cljs$core$IFn$_invoke$arity$9;
} else
{return and__3822__auto____5975;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3824__auto____5976 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____5976)
{return or__3824__auto____5976;
} else
{var or__3824__auto____5977 = (cljs.core._invoke["_"]);
if(or__3824__auto____5977)
{return or__3824__auto____5977;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){
if((function (){var and__3822__auto____5978 = this$;
if(and__3822__auto____5978)
{return this$.cljs$core$IFn$_invoke$arity$10;
} else
{return and__3822__auto____5978;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3824__auto____5979 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____5979)
{return or__3824__auto____5979;
} else
{var or__3824__auto____5980 = (cljs.core._invoke["_"]);
if(or__3824__auto____5980)
{return or__3824__auto____5980;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if((function (){var and__3822__auto____5981 = this$;
if(and__3822__auto____5981)
{return this$.cljs$core$IFn$_invoke$arity$11;
} else
{return and__3822__auto____5981;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3824__auto____5982 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____5982)
{return or__3824__auto____5982;
} else
{var or__3824__auto____5983 = (cljs.core._invoke["_"]);
if(or__3824__auto____5983)
{return or__3824__auto____5983;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if((function (){var and__3822__auto____5984 = this$;
if(and__3822__auto____5984)
{return this$.cljs$core$IFn$_invoke$arity$12;
} else
{return and__3822__auto____5984;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3824__auto____5985 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____5985)
{return or__3824__auto____5985;
} else
{var or__3824__auto____5986 = (cljs.core._invoke["_"]);
if(or__3824__auto____5986)
{return or__3824__auto____5986;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if((function (){var and__3822__auto____5987 = this$;
if(and__3822__auto____5987)
{return this$.cljs$core$IFn$_invoke$arity$13;
} else
{return and__3822__auto____5987;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3824__auto____5988 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____5988)
{return or__3824__auto____5988;
} else
{var or__3824__auto____5989 = (cljs.core._invoke["_"]);
if(or__3824__auto____5989)
{return or__3824__auto____5989;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if((function (){var and__3822__auto____5990 = this$;
if(and__3822__auto____5990)
{return this$.cljs$core$IFn$_invoke$arity$14;
} else
{return and__3822__auto____5990;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3824__auto____5991 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____5991)
{return or__3824__auto____5991;
} else
{var or__3824__auto____5992 = (cljs.core._invoke["_"]);
if(or__3824__auto____5992)
{return or__3824__auto____5992;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if((function (){var and__3822__auto____5993 = this$;
if(and__3822__auto____5993)
{return this$.cljs$core$IFn$_invoke$arity$15;
} else
{return and__3822__auto____5993;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3824__auto____5994 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____5994)
{return or__3824__auto____5994;
} else
{var or__3824__auto____5995 = (cljs.core._invoke["_"]);
if(or__3824__auto____5995)
{return or__3824__auto____5995;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if((function (){var and__3822__auto____5996 = this$;
if(and__3822__auto____5996)
{return this$.cljs$core$IFn$_invoke$arity$16;
} else
{return and__3822__auto____5996;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3824__auto____5997 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____5997)
{return or__3824__auto____5997;
} else
{var or__3824__auto____5998 = (cljs.core._invoke["_"]);
if(or__3824__auto____5998)
{return or__3824__auto____5998;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if((function (){var and__3822__auto____5999 = this$;
if(and__3822__auto____5999)
{return this$.cljs$core$IFn$_invoke$arity$17;
} else
{return and__3822__auto____5999;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3824__auto____6000 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6000)
{return or__3824__auto____6000;
} else
{var or__3824__auto____6001 = (cljs.core._invoke["_"]);
if(or__3824__auto____6001)
{return or__3824__auto____6001;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if((function (){var and__3822__auto____6002 = this$;
if(and__3822__auto____6002)
{return this$.cljs$core$IFn$_invoke$arity$18;
} else
{return and__3822__auto____6002;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3824__auto____6003 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6003)
{return or__3824__auto____6003;
} else
{var or__3824__auto____6004 = (cljs.core._invoke["_"]);
if(or__3824__auto____6004)
{return or__3824__auto____6004;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if((function (){var and__3822__auto____6005 = this$;
if(and__3822__auto____6005)
{return this$.cljs$core$IFn$_invoke$arity$19;
} else
{return and__3822__auto____6005;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3824__auto____6006 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6006)
{return or__3824__auto____6006;
} else
{var or__3824__auto____6007 = (cljs.core._invoke["_"]);
if(or__3824__auto____6007)
{return or__3824__auto____6007;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if((function (){var and__3822__auto____6008 = this$;
if(and__3822__auto____6008)
{return this$.cljs$core$IFn$_invoke$arity$20;
} else
{return and__3822__auto____6008;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3824__auto____6009 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6009)
{return or__3824__auto____6009;
} else
{var or__3824__auto____6010 = (cljs.core._invoke["_"]);
if(or__3824__auto____6010)
{return or__3824__auto____6010;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if((function (){var and__3822__auto____6011 = this$;
if(and__3822__auto____6011)
{return this$.cljs$core$IFn$_invoke$arity$21;
} else
{return and__3822__auto____6011;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3824__auto____6012 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3824__auto____6012)
{return or__3824__auto____6012;
} else
{var or__3824__auto____6013 = (cljs.core._invoke["_"]);
if(or__3824__auto____6013)
{return or__3824__auto____6013;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
});
_invoke = function(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
switch(arguments.length){
case 1:
return _invoke__1.call(this,this$);
case 2:
return _invoke__2.call(this,this$,a);
case 3:
return _invoke__3.call(this,this$,a,b);
case 4:
return _invoke__4.call(this,this$,a,b,c);
case 5:
return _invoke__5.call(this,this$,a,b,c,d);
case 6:
return _invoke__6.call(this,this$,a,b,c,d,e);
case 7:
return _invoke__7.call(this,this$,a,b,c,d,e,f);
case 8:
return _invoke__8.call(this,this$,a,b,c,d,e,f,g);
case 9:
return _invoke__9.call(this,this$,a,b,c,d,e,f,g,h);
case 10:
return _invoke__10.call(this,this$,a,b,c,d,e,f,g,h,i);
case 11:
return _invoke__11.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case 12:
return _invoke__12.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return _invoke__13.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return _invoke__14.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return _invoke__15.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return _invoke__16.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return _invoke__17.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return _invoke__18.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return _invoke__19.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case 20:
return _invoke__20.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case 21:
return _invoke__21.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
_invoke.cljs$lang$arity$1 = _invoke__1;
_invoke.cljs$lang$arity$2 = _invoke__2;
_invoke.cljs$lang$arity$3 = _invoke__3;
_invoke.cljs$lang$arity$4 = _invoke__4;
_invoke.cljs$lang$arity$5 = _invoke__5;
_invoke.cljs$lang$arity$6 = _invoke__6;
_invoke.cljs$lang$arity$7 = _invoke__7;
_invoke.cljs$lang$arity$8 = _invoke__8;
_invoke.cljs$lang$arity$9 = _invoke__9;
_invoke.cljs$lang$arity$10 = _invoke__10;
_invoke.cljs$lang$arity$11 = _invoke__11;
_invoke.cljs$lang$arity$12 = _invoke__12;
_invoke.cljs$lang$arity$13 = _invoke__13;
_invoke.cljs$lang$arity$14 = _invoke__14;
_invoke.cljs$lang$arity$15 = _invoke__15;
_invoke.cljs$lang$arity$16 = _invoke__16;
_invoke.cljs$lang$arity$17 = _invoke__17;
_invoke.cljs$lang$arity$18 = _invoke__18;
_invoke.cljs$lang$arity$19 = _invoke__19;
_invoke.cljs$lang$arity$20 = _invoke__20;
_invoke.cljs$lang$arity$21 = _invoke__21;
return _invoke;
})()
;
void 0;void 0;cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if((function (){var and__3822__auto____6017 = coll;
if(and__3822__auto____6017)
{return coll.cljs$core$ICounted$_count$arity$1;
} else
{return and__3822__auto____6017;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(coll);
} else
{return (function (){var or__3824__auto____6018 = (cljs.core._count[goog.typeOf(coll)]);
if(or__3824__auto____6018)
{return or__3824__auto____6018;
} else
{var or__3824__auto____6019 = (cljs.core._count["_"]);
if(or__3824__auto____6019)
{return or__3824__auto____6019;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if((function (){var and__3822__auto____6023 = coll;
if(and__3822__auto____6023)
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else
{return and__3822__auto____6023;
}
})())
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (function (){var or__3824__auto____6024 = (cljs.core._empty[goog.typeOf(coll)]);
if(or__3824__auto____6024)
{return or__3824__auto____6024;
} else
{var or__3824__auto____6025 = (cljs.core._empty["_"]);
if(or__3824__auto____6025)
{return or__3824__auto____6025;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if((function (){var and__3822__auto____6029 = coll;
if(and__3822__auto____6029)
{return coll.cljs$core$ICollection$_conj$arity$2;
} else
{return and__3822__auto____6029;
}
})())
{return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else
{return (function (){var or__3824__auto____6030 = (cljs.core._conj[goog.typeOf(coll)]);
if(or__3824__auto____6030)
{return or__3824__auto____6030;
} else
{var or__3824__auto____6031 = (cljs.core._conj["_"]);
if(or__3824__auto____6031)
{return or__3824__auto____6031;
} else
{throw cljs.core.missing_protocol.call(null,"ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
void 0;void 0;cljs.core.IIndexed = {};
cljs.core._nth = (function() {
var _nth = null;
var _nth__2 = (function (coll,n){
if((function (){var and__3822__auto____6038 = coll;
if(and__3822__auto____6038)
{return coll.cljs$core$IIndexed$_nth$arity$2;
} else
{return and__3822__auto____6038;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return (function (){var or__3824__auto____6039 = (cljs.core._nth[goog.typeOf(coll)]);
if(or__3824__auto____6039)
{return or__3824__auto____6039;
} else
{var or__3824__auto____6040 = (cljs.core._nth["_"]);
if(or__3824__auto____6040)
{return or__3824__auto____6040;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){
if((function (){var and__3822__auto____6041 = coll;
if(and__3822__auto____6041)
{return coll.cljs$core$IIndexed$_nth$arity$3;
} else
{return and__3822__auto____6041;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else
{return (function (){var or__3824__auto____6042 = (cljs.core._nth[goog.typeOf(coll)]);
if(or__3824__auto____6042)
{return or__3824__auto____6042;
} else
{var or__3824__auto____6043 = (cljs.core._nth["_"]);
if(or__3824__auto____6043)
{return or__3824__auto____6043;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return _nth__2.call(this,coll,n);
case 3:
return _nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
_nth.cljs$lang$arity$2 = _nth__2;
_nth.cljs$lang$arity$3 = _nth__3;
return _nth;
})()
;
void 0;void 0;cljs.core.ASeq = {};
void 0;void 0;cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if((function (){var and__3822__auto____6047 = coll;
if(and__3822__auto____6047)
{return coll.cljs$core$ISeq$_first$arity$1;
} else
{return and__3822__auto____6047;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(coll);
} else
{return (function (){var or__3824__auto____6048 = (cljs.core._first[goog.typeOf(coll)]);
if(or__3824__auto____6048)
{return or__3824__auto____6048;
} else
{var or__3824__auto____6049 = (cljs.core._first["_"]);
if(or__3824__auto____6049)
{return or__3824__auto____6049;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if((function (){var and__3822__auto____6053 = coll;
if(and__3822__auto____6053)
{return coll.cljs$core$ISeq$_rest$arity$1;
} else
{return and__3822__auto____6053;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else
{return (function (){var or__3824__auto____6054 = (cljs.core._rest[goog.typeOf(coll)]);
if(or__3824__auto____6054)
{return or__3824__auto____6054;
} else
{var or__3824__auto____6055 = (cljs.core._rest["_"]);
if(or__3824__auto____6055)
{return or__3824__auto____6055;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.INext = {};
cljs.core._next = (function _next(coll){
if((function (){var and__3822__auto____6059 = coll;
if(and__3822__auto____6059)
{return coll.cljs$core$INext$_next$arity$1;
} else
{return and__3822__auto____6059;
}
})())
{return coll.cljs$core$INext$_next$arity$1(coll);
} else
{return (function (){var or__3824__auto____6060 = (cljs.core._next[goog.typeOf(coll)]);
if(or__3824__auto____6060)
{return or__3824__auto____6060;
} else
{var or__3824__auto____6061 = (cljs.core._next["_"]);
if(or__3824__auto____6061)
{return or__3824__auto____6061;
} else
{throw cljs.core.missing_protocol.call(null,"INext.-next",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__2 = (function (o,k){
if((function (){var and__3822__auto____6068 = o;
if(and__3822__auto____6068)
{return o.cljs$core$ILookup$_lookup$arity$2;
} else
{return and__3822__auto____6068;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else
{return (function (){var or__3824__auto____6069 = (cljs.core._lookup[goog.typeOf(o)]);
if(or__3824__auto____6069)
{return or__3824__auto____6069;
} else
{var or__3824__auto____6070 = (cljs.core._lookup["_"]);
if(or__3824__auto____6070)
{return or__3824__auto____6070;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){
if((function (){var and__3822__auto____6071 = o;
if(and__3822__auto____6071)
{return o.cljs$core$ILookup$_lookup$arity$3;
} else
{return and__3822__auto____6071;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else
{return (function (){var or__3824__auto____6072 = (cljs.core._lookup[goog.typeOf(o)]);
if(or__3824__auto____6072)
{return or__3824__auto____6072;
} else
{var or__3824__auto____6073 = (cljs.core._lookup["_"]);
if(or__3824__auto____6073)
{return or__3824__auto____6073;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case 2:
return _lookup__2.call(this,o,k);
case 3:
return _lookup__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
_lookup.cljs$lang$arity$2 = _lookup__2;
_lookup.cljs$lang$arity$3 = _lookup__3;
return _lookup;
})()
;
void 0;void 0;cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if((function (){var and__3822__auto____6077 = coll;
if(and__3822__auto____6077)
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else
{return and__3822__auto____6077;
}
})())
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else
{return (function (){var or__3824__auto____6078 = (cljs.core._contains_key_QMARK_[goog.typeOf(coll)]);
if(or__3824__auto____6078)
{return or__3824__auto____6078;
} else
{var or__3824__auto____6079 = (cljs.core._contains_key_QMARK_["_"]);
if(or__3824__auto____6079)
{return or__3824__auto____6079;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if((function (){var and__3822__auto____6083 = coll;
if(and__3822__auto____6083)
{return coll.cljs$core$IAssociative$_assoc$arity$3;
} else
{return and__3822__auto____6083;
}
})())
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else
{return (function (){var or__3824__auto____6084 = (cljs.core._assoc[goog.typeOf(coll)]);
if(or__3824__auto____6084)
{return or__3824__auto____6084;
} else
{var or__3824__auto____6085 = (cljs.core._assoc["_"]);
if(or__3824__auto____6085)
{return or__3824__auto____6085;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
void 0;void 0;cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if((function (){var and__3822__auto____6089 = coll;
if(and__3822__auto____6089)
{return coll.cljs$core$IMap$_dissoc$arity$2;
} else
{return and__3822__auto____6089;
}
})())
{return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else
{return (function (){var or__3824__auto____6090 = (cljs.core._dissoc[goog.typeOf(coll)]);
if(or__3824__auto____6090)
{return or__3824__auto____6090;
} else
{var or__3824__auto____6091 = (cljs.core._dissoc["_"]);
if(or__3824__auto____6091)
{return or__3824__auto____6091;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
void 0;void 0;cljs.core.IMapEntry = {};
cljs.core._key = (function _key(coll){
if((function (){var and__3822__auto____6095 = coll;
if(and__3822__auto____6095)
{return coll.cljs$core$IMapEntry$_key$arity$1;
} else
{return and__3822__auto____6095;
}
})())
{return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else
{return (function (){var or__3824__auto____6096 = (cljs.core._key[goog.typeOf(coll)]);
if(or__3824__auto____6096)
{return or__3824__auto____6096;
} else
{var or__3824__auto____6097 = (cljs.core._key["_"]);
if(or__3824__auto____6097)
{return or__3824__auto____6097;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
cljs.core._val = (function _val(coll){
if((function (){var and__3822__auto____6101 = coll;
if(and__3822__auto____6101)
{return coll.cljs$core$IMapEntry$_val$arity$1;
} else
{return and__3822__auto____6101;
}
})())
{return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else
{return (function (){var or__3824__auto____6102 = (cljs.core._val[goog.typeOf(coll)]);
if(or__3824__auto____6102)
{return or__3824__auto____6102;
} else
{var or__3824__auto____6103 = (cljs.core._val["_"]);
if(or__3824__auto____6103)
{return or__3824__auto____6103;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if((function (){var and__3822__auto____6107 = coll;
if(and__3822__auto____6107)
{return coll.cljs$core$ISet$_disjoin$arity$2;
} else
{return and__3822__auto____6107;
}
})())
{return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else
{return (function (){var or__3824__auto____6108 = (cljs.core._disjoin[goog.typeOf(coll)]);
if(or__3824__auto____6108)
{return or__3824__auto____6108;
} else
{var or__3824__auto____6109 = (cljs.core._disjoin["_"]);
if(or__3824__auto____6109)
{return or__3824__auto____6109;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
void 0;void 0;cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if((function (){var and__3822__auto____6113 = coll;
if(and__3822__auto____6113)
{return coll.cljs$core$IStack$_peek$arity$1;
} else
{return and__3822__auto____6113;
}
})())
{return coll.cljs$core$IStack$_peek$arity$1(coll);
} else
{return (function (){var or__3824__auto____6114 = (cljs.core._peek[goog.typeOf(coll)]);
if(or__3824__auto____6114)
{return or__3824__auto____6114;
} else
{var or__3824__auto____6115 = (cljs.core._peek["_"]);
if(or__3824__auto____6115)
{return or__3824__auto____6115;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if((function (){var and__3822__auto____6119 = coll;
if(and__3822__auto____6119)
{return coll.cljs$core$IStack$_pop$arity$1;
} else
{return and__3822__auto____6119;
}
})())
{return coll.cljs$core$IStack$_pop$arity$1(coll);
} else
{return (function (){var or__3824__auto____6120 = (cljs.core._pop[goog.typeOf(coll)]);
if(or__3824__auto____6120)
{return or__3824__auto____6120;
} else
{var or__3824__auto____6121 = (cljs.core._pop["_"]);
if(or__3824__auto____6121)
{return or__3824__auto____6121;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if((function (){var and__3822__auto____6125 = coll;
if(and__3822__auto____6125)
{return coll.cljs$core$IVector$_assoc_n$arity$3;
} else
{return and__3822__auto____6125;
}
})())
{return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else
{return (function (){var or__3824__auto____6126 = (cljs.core._assoc_n[goog.typeOf(coll)]);
if(or__3824__auto____6126)
{return or__3824__auto____6126;
} else
{var or__3824__auto____6127 = (cljs.core._assoc_n["_"]);
if(or__3824__auto____6127)
{return or__3824__auto____6127;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
void 0;void 0;cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if((function (){var and__3822__auto____6131 = o;
if(and__3822__auto____6131)
{return o.cljs$core$IDeref$_deref$arity$1;
} else
{return and__3822__auto____6131;
}
})())
{return o.cljs$core$IDeref$_deref$arity$1(o);
} else
{return (function (){var or__3824__auto____6132 = (cljs.core._deref[goog.typeOf(o)]);
if(or__3824__auto____6132)
{return or__3824__auto____6132;
} else
{var or__3824__auto____6133 = (cljs.core._deref["_"]);
if(or__3824__auto____6133)
{return or__3824__auto____6133;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
void 0;void 0;cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if((function (){var and__3822__auto____6137 = o;
if(and__3822__auto____6137)
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else
{return and__3822__auto____6137;
}
})())
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else
{return (function (){var or__3824__auto____6138 = (cljs.core._deref_with_timeout[goog.typeOf(o)]);
if(or__3824__auto____6138)
{return or__3824__auto____6138;
} else
{var or__3824__auto____6139 = (cljs.core._deref_with_timeout["_"]);
if(or__3824__auto____6139)
{return or__3824__auto____6139;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
void 0;void 0;cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if((function (){var and__3822__auto____6143 = o;
if(and__3822__auto____6143)
{return o.cljs$core$IMeta$_meta$arity$1;
} else
{return and__3822__auto____6143;
}
})())
{return o.cljs$core$IMeta$_meta$arity$1(o);
} else
{return (function (){var or__3824__auto____6144 = (cljs.core._meta[goog.typeOf(o)]);
if(or__3824__auto____6144)
{return or__3824__auto____6144;
} else
{var or__3824__auto____6145 = (cljs.core._meta["_"]);
if(or__3824__auto____6145)
{return or__3824__auto____6145;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
void 0;void 0;cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if((function (){var and__3822__auto____6149 = o;
if(and__3822__auto____6149)
{return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else
{return and__3822__auto____6149;
}
})())
{return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else
{return (function (){var or__3824__auto____6150 = (cljs.core._with_meta[goog.typeOf(o)]);
if(or__3824__auto____6150)
{return or__3824__auto____6150;
} else
{var or__3824__auto____6151 = (cljs.core._with_meta["_"]);
if(or__3824__auto____6151)
{return or__3824__auto____6151;
} else
{throw cljs.core.missing_protocol.call(null,"IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
void 0;void 0;cljs.core.IReduce = {};
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__2 = (function (coll,f){
if((function (){var and__3822__auto____6158 = coll;
if(and__3822__auto____6158)
{return coll.cljs$core$IReduce$_reduce$arity$2;
} else
{return and__3822__auto____6158;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else
{return (function (){var or__3824__auto____6159 = (cljs.core._reduce[goog.typeOf(coll)]);
if(or__3824__auto____6159)
{return or__3824__auto____6159;
} else
{var or__3824__auto____6160 = (cljs.core._reduce["_"]);
if(or__3824__auto____6160)
{return or__3824__auto____6160;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){
if((function (){var and__3822__auto____6161 = coll;
if(and__3822__auto____6161)
{return coll.cljs$core$IReduce$_reduce$arity$3;
} else
{return and__3822__auto____6161;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else
{return (function (){var or__3824__auto____6162 = (cljs.core._reduce[goog.typeOf(coll)]);
if(or__3824__auto____6162)
{return or__3824__auto____6162;
} else
{var or__3824__auto____6163 = (cljs.core._reduce["_"]);
if(or__3824__auto____6163)
{return or__3824__auto____6163;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case 2:
return _reduce__2.call(this,coll,f);
case 3:
return _reduce__3.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
_reduce.cljs$lang$arity$2 = _reduce__2;
_reduce.cljs$lang$arity$3 = _reduce__3;
return _reduce;
})()
;
void 0;void 0;cljs.core.IKVReduce = {};
cljs.core._kv_reduce = (function _kv_reduce(coll,f,init){
if((function (){var and__3822__auto____6167 = coll;
if(and__3822__auto____6167)
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else
{return and__3822__auto____6167;
}
})())
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else
{return (function (){var or__3824__auto____6168 = (cljs.core._kv_reduce[goog.typeOf(coll)]);
if(or__3824__auto____6168)
{return or__3824__auto____6168;
} else
{var or__3824__auto____6169 = (cljs.core._kv_reduce["_"]);
if(or__3824__auto____6169)
{return or__3824__auto____6169;
} else
{throw cljs.core.missing_protocol.call(null,"IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});
void 0;void 0;cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if((function (){var and__3822__auto____6173 = o;
if(and__3822__auto____6173)
{return o.cljs$core$IEquiv$_equiv$arity$2;
} else
{return and__3822__auto____6173;
}
})())
{return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else
{return (function (){var or__3824__auto____6174 = (cljs.core._equiv[goog.typeOf(o)]);
if(or__3824__auto____6174)
{return or__3824__auto____6174;
} else
{var or__3824__auto____6175 = (cljs.core._equiv["_"]);
if(or__3824__auto____6175)
{return or__3824__auto____6175;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
void 0;void 0;cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if((function (){var and__3822__auto____6179 = o;
if(and__3822__auto____6179)
{return o.cljs$core$IHash$_hash$arity$1;
} else
{return and__3822__auto____6179;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(o);
} else
{return (function (){var or__3824__auto____6180 = (cljs.core._hash[goog.typeOf(o)]);
if(or__3824__auto____6180)
{return or__3824__auto____6180;
} else
{var or__3824__auto____6181 = (cljs.core._hash["_"]);
if(or__3824__auto____6181)
{return or__3824__auto____6181;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
void 0;void 0;cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if((function (){var and__3822__auto____6185 = o;
if(and__3822__auto____6185)
{return o.cljs$core$ISeqable$_seq$arity$1;
} else
{return and__3822__auto____6185;
}
})())
{return o.cljs$core$ISeqable$_seq$arity$1(o);
} else
{return (function (){var or__3824__auto____6186 = (cljs.core._seq[goog.typeOf(o)]);
if(or__3824__auto____6186)
{return or__3824__auto____6186;
} else
{var or__3824__auto____6187 = (cljs.core._seq["_"]);
if(or__3824__auto____6187)
{return or__3824__auto____6187;
} else
{throw cljs.core.missing_protocol.call(null,"ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
void 0;void 0;cljs.core.ISequential = {};
void 0;void 0;cljs.core.IList = {};
void 0;void 0;cljs.core.IRecord = {};
void 0;void 0;cljs.core.IReversible = {};
cljs.core._rseq = (function _rseq(coll){
if((function (){var and__3822__auto____6191 = coll;
if(and__3822__auto____6191)
{return coll.cljs$core$IReversible$_rseq$arity$1;
} else
{return and__3822__auto____6191;
}
})())
{return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else
{return (function (){var or__3824__auto____6192 = (cljs.core._rseq[goog.typeOf(coll)]);
if(or__3824__auto____6192)
{return or__3824__auto____6192;
} else
{var or__3824__auto____6193 = (cljs.core._rseq["_"]);
if(or__3824__auto____6193)
{return or__3824__auto____6193;
} else
{throw cljs.core.missing_protocol.call(null,"IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ISorted = {};
cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){
if((function (){var and__3822__auto____6197 = coll;
if(and__3822__auto____6197)
{return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else
{return and__3822__auto____6197;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else
{return (function (){var or__3824__auto____6198 = (cljs.core._sorted_seq[goog.typeOf(coll)]);
if(or__3824__auto____6198)
{return or__3824__auto____6198;
} else
{var or__3824__auto____6199 = (cljs.core._sorted_seq["_"]);
if(or__3824__auto____6199)
{return or__3824__auto____6199;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});
cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){
if((function (){var and__3822__auto____6203 = coll;
if(and__3822__auto____6203)
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else
{return and__3822__auto____6203;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else
{return (function (){var or__3824__auto____6204 = (cljs.core._sorted_seq_from[goog.typeOf(coll)]);
if(or__3824__auto____6204)
{return or__3824__auto____6204;
} else
{var or__3824__auto____6205 = (cljs.core._sorted_seq_from["_"]);
if(or__3824__auto____6205)
{return or__3824__auto____6205;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});
cljs.core._entry_key = (function _entry_key(coll,entry){
if((function (){var and__3822__auto____6209 = coll;
if(and__3822__auto____6209)
{return coll.cljs$core$ISorted$_entry_key$arity$2;
} else
{return and__3822__auto____6209;
}
})())
{return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else
{return (function (){var or__3824__auto____6210 = (cljs.core._entry_key[goog.typeOf(coll)]);
if(or__3824__auto____6210)
{return or__3824__auto____6210;
} else
{var or__3824__auto____6211 = (cljs.core._entry_key["_"]);
if(or__3824__auto____6211)
{return or__3824__auto____6211;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});
cljs.core._comparator = (function _comparator(coll){
if((function (){var and__3822__auto____6215 = coll;
if(and__3822__auto____6215)
{return coll.cljs$core$ISorted$_comparator$arity$1;
} else
{return and__3822__auto____6215;
}
})())
{return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else
{return (function (){var or__3824__auto____6216 = (cljs.core._comparator[goog.typeOf(coll)]);
if(or__3824__auto____6216)
{return or__3824__auto____6216;
} else
{var or__3824__auto____6217 = (cljs.core._comparator["_"]);
if(or__3824__auto____6217)
{return or__3824__auto____6217;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if((function (){var and__3822__auto____6221 = o;
if(and__3822__auto____6221)
{return o.cljs$core$IPrintable$_pr_seq$arity$2;
} else
{return and__3822__auto____6221;
}
})())
{return o.cljs$core$IPrintable$_pr_seq$arity$2(o,opts);
} else
{return (function (){var or__3824__auto____6222 = (cljs.core._pr_seq[goog.typeOf(o)]);
if(or__3824__auto____6222)
{return or__3824__auto____6222;
} else
{var or__3824__auto____6223 = (cljs.core._pr_seq["_"]);
if(or__3824__auto____6223)
{return or__3824__auto____6223;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
void 0;void 0;cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if((function (){var and__3822__auto____6227 = d;
if(and__3822__auto____6227)
{return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else
{return and__3822__auto____6227;
}
})())
{return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else
{return (function (){var or__3824__auto____6228 = (cljs.core._realized_QMARK_[goog.typeOf(d)]);
if(or__3824__auto____6228)
{return or__3824__auto____6228;
} else
{var or__3824__auto____6229 = (cljs.core._realized_QMARK_["_"]);
if(or__3824__auto____6229)
{return or__3824__auto____6229;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
void 0;void 0;cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if((function (){var and__3822__auto____6233 = this$;
if(and__3822__auto____6233)
{return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else
{return and__3822__auto____6233;
}
})())
{return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else
{return (function (){var or__3824__auto____6234 = (cljs.core._notify_watches[goog.typeOf(this$)]);
if(or__3824__auto____6234)
{return or__3824__auto____6234;
} else
{var or__3824__auto____6235 = (cljs.core._notify_watches["_"]);
if(or__3824__auto____6235)
{return or__3824__auto____6235;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if((function (){var and__3822__auto____6239 = this$;
if(and__3822__auto____6239)
{return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else
{return and__3822__auto____6239;
}
})())
{return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else
{return (function (){var or__3824__auto____6240 = (cljs.core._add_watch[goog.typeOf(this$)]);
if(or__3824__auto____6240)
{return or__3824__auto____6240;
} else
{var or__3824__auto____6241 = (cljs.core._add_watch["_"]);
if(or__3824__auto____6241)
{return or__3824__auto____6241;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if((function (){var and__3822__auto____6245 = this$;
if(and__3822__auto____6245)
{return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else
{return and__3822__auto____6245;
}
})())
{return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else
{return (function (){var or__3824__auto____6246 = (cljs.core._remove_watch[goog.typeOf(this$)]);
if(or__3824__auto____6246)
{return or__3824__auto____6246;
} else
{var or__3824__auto____6247 = (cljs.core._remove_watch["_"]);
if(or__3824__auto____6247)
{return or__3824__auto____6247;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
void 0;void 0;cljs.core.IEditableCollection = {};
cljs.core._as_transient = (function _as_transient(coll){
if((function (){var and__3822__auto____6251 = coll;
if(and__3822__auto____6251)
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else
{return and__3822__auto____6251;
}
})())
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else
{return (function (){var or__3824__auto____6252 = (cljs.core._as_transient[goog.typeOf(coll)]);
if(or__3824__auto____6252)
{return or__3824__auto____6252;
} else
{var or__3824__auto____6253 = (cljs.core._as_transient["_"]);
if(or__3824__auto____6253)
{return or__3824__auto____6253;
} else
{throw cljs.core.missing_protocol.call(null,"IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ITransientCollection = {};
cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){
if((function (){var and__3822__auto____6257 = tcoll;
if(and__3822__auto____6257)
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else
{return and__3822__auto____6257;
}
})())
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{return (function (){var or__3824__auto____6258 = (cljs.core._conj_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____6258)
{return or__3824__auto____6258;
} else
{var or__3824__auto____6259 = (cljs.core._conj_BANG_["_"]);
if(or__3824__auto____6259)
{return or__3824__auto____6259;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});
cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){
if((function (){var and__3822__auto____6263 = tcoll;
if(and__3822__auto____6263)
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else
{return and__3822__auto____6263;
}
})())
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else
{return (function (){var or__3824__auto____6264 = (cljs.core._persistent_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____6264)
{return or__3824__auto____6264;
} else
{var or__3824__auto____6265 = (cljs.core._persistent_BANG_["_"]);
if(or__3824__auto____6265)
{return or__3824__auto____6265;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});
void 0;void 0;cljs.core.ITransientAssociative = {};
cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){
if((function (){var and__3822__auto____6269 = tcoll;
if(and__3822__auto____6269)
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else
{return and__3822__auto____6269;
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else
{return (function (){var or__3824__auto____6270 = (cljs.core._assoc_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____6270)
{return or__3824__auto____6270;
} else
{var or__3824__auto____6271 = (cljs.core._assoc_BANG_["_"]);
if(or__3824__auto____6271)
{return or__3824__auto____6271;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});
void 0;void 0;cljs.core.ITransientMap = {};
cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){
if((function (){var and__3822__auto____6275 = tcoll;
if(and__3822__auto____6275)
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else
{return and__3822__auto____6275;
}
})())
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else
{return (function (){var or__3824__auto____6276 = (cljs.core._dissoc_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____6276)
{return or__3824__auto____6276;
} else
{var or__3824__auto____6277 = (cljs.core._dissoc_BANG_["_"]);
if(or__3824__auto____6277)
{return or__3824__auto____6277;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});
void 0;void 0;cljs.core.ITransientVector = {};
cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){
if((function (){var and__3822__auto____6281 = tcoll;
if(and__3822__auto____6281)
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else
{return and__3822__auto____6281;
}
})())
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else
{return (function (){var or__3824__auto____6282 = (cljs.core._assoc_n_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____6282)
{return or__3824__auto____6282;
} else
{var or__3824__auto____6283 = (cljs.core._assoc_n_BANG_["_"]);
if(or__3824__auto____6283)
{return or__3824__auto____6283;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});
cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){
if((function (){var and__3822__auto____6287 = tcoll;
if(and__3822__auto____6287)
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else
{return and__3822__auto____6287;
}
})())
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else
{return (function (){var or__3824__auto____6288 = (cljs.core._pop_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____6288)
{return or__3824__auto____6288;
} else
{var or__3824__auto____6289 = (cljs.core._pop_BANG_["_"]);
if(or__3824__auto____6289)
{return or__3824__auto____6289;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});
void 0;void 0;cljs.core.ITransientSet = {};
cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){
if((function (){var and__3822__auto____6293 = tcoll;
if(and__3822__auto____6293)
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else
{return and__3822__auto____6293;
}
})())
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else
{return (function (){var or__3824__auto____6294 = (cljs.core._disjoin_BANG_[goog.typeOf(tcoll)]);
if(or__3824__auto____6294)
{return or__3824__auto____6294;
} else
{var or__3824__auto____6295 = (cljs.core._disjoin_BANG_["_"]);
if(or__3824__auto____6295)
{return or__3824__auto____6295;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});
void 0;void 0;cljs.core.IComparable = {};
cljs.core._compare = (function _compare(x,y){
if((function (){var and__3822__auto____6299 = x;
if(and__3822__auto____6299)
{return x.cljs$core$IComparable$_compare$arity$2;
} else
{return and__3822__auto____6299;
}
})())
{return x.cljs$core$IComparable$_compare$arity$2(x,y);
} else
{return (function (){var or__3824__auto____6300 = (cljs.core._compare[goog.typeOf(x)]);
if(or__3824__auto____6300)
{return or__3824__auto____6300;
} else
{var or__3824__auto____6301 = (cljs.core._compare["_"]);
if(or__3824__auto____6301)
{return or__3824__auto____6301;
} else
{throw cljs.core.missing_protocol.call(null,"IComparable.-compare",x);
}
}
})().call(null,x,y);
}
});
void 0;void 0;cljs.core.IChunk = {};
cljs.core._drop_first = (function _drop_first(coll){
if((function (){var and__3822__auto____6305 = coll;
if(and__3822__auto____6305)
{return coll.cljs$core$IChunk$_drop_first$arity$1;
} else
{return and__3822__auto____6305;
}
})())
{return coll.cljs$core$IChunk$_drop_first$arity$1(coll);
} else
{return (function (){var or__3824__auto____6306 = (cljs.core._drop_first[goog.typeOf(coll)]);
if(or__3824__auto____6306)
{return or__3824__auto____6306;
} else
{var or__3824__auto____6307 = (cljs.core._drop_first["_"]);
if(or__3824__auto____6307)
{return or__3824__auto____6307;
} else
{throw cljs.core.missing_protocol.call(null,"IChunk.-drop-first",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IChunkedSeq = {};
cljs.core._chunked_first = (function _chunked_first(coll){
if((function (){var and__3822__auto____6311 = coll;
if(and__3822__auto____6311)
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;
} else
{return and__3822__auto____6311;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);
} else
{return (function (){var or__3824__auto____6312 = (cljs.core._chunked_first[goog.typeOf(coll)]);
if(or__3824__auto____6312)
{return or__3824__auto____6312;
} else
{var or__3824__auto____6313 = (cljs.core._chunked_first["_"]);
if(or__3824__auto____6313)
{return or__3824__auto____6313;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._chunked_rest = (function _chunked_rest(coll){
if((function (){var and__3822__auto____6317 = coll;
if(and__3822__auto____6317)
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;
} else
{return and__3822__auto____6317;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
} else
{return (function (){var or__3824__auto____6318 = (cljs.core._chunked_rest[goog.typeOf(coll)]);
if(or__3824__auto____6318)
{return or__3824__auto____6318;
} else
{var or__3824__auto____6319 = (cljs.core._chunked_rest["_"]);
if(or__3824__auto____6319)
{return or__3824__auto____6319;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-rest",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IChunkedNext = {};
cljs.core._chunked_next = (function _chunked_next(coll){
if((function (){var and__3822__auto____6323 = coll;
if(and__3822__auto____6323)
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;
} else
{return and__3822__auto____6323;
}
})())
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
} else
{return (function (){var or__3824__auto____6324 = (cljs.core._chunked_next[goog.typeOf(coll)]);
if(or__3824__auto____6324)
{return or__3824__auto____6324;
} else
{var or__3824__auto____6325 = (cljs.core._chunked_next["_"]);
if(or__3824__auto____6325)
{return or__3824__auto____6325;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedNext.-chunked-next",coll);
}
}
})().call(null,coll);
}
});
void 0;/**
* Tests if 2 arguments are the same object
*/
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
void 0;
void 0;
/**
* Equality. Returns true if x equals y, false if not. Compares
* numbers and collections in a type-independent manner.  Clojure's immutable data
* structures define -equiv (and thus =) as a value, not an identity,
* comparison.
* @param {...*} var_args
*/
cljs.core._EQ_ = (function() {
var _EQ_ = null;
var _EQ___1 = (function (x){
return true;
});
var _EQ___2 = (function (x,y){
var or__3824__auto____6327 = (x === y);
if(or__3824__auto____6327)
{return or__3824__auto____6327;
} else
{return cljs.core._equiv.call(null,x,y);
}
});
var _EQ___3 = (function() { 
var G__6328__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__6329 = y;
var G__6330 = cljs.core.first.call(null,more);
var G__6331 = cljs.core.next.call(null,more);
x = G__6329;
y = G__6330;
more = G__6331;
continue;
}
} else
{return _EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__6328 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6328__delegate.call(this, x, y, more);
};
G__6328.cljs$lang$maxFixedArity = 2;
G__6328.cljs$lang$applyTo = (function (arglist__6332){
var x = cljs.core.first(arglist__6332);
var y = cljs.core.first(cljs.core.next(arglist__6332));
var more = cljs.core.rest(cljs.core.next(arglist__6332));
return G__6328__delegate(x, y, more);
});
G__6328.cljs$lang$arity$variadic = G__6328__delegate;
return G__6328;
})()
;
_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ___1.call(this,x);
case 2:
return _EQ___2.call(this,x,y);
default:
return _EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_EQ_.cljs$lang$maxFixedArity = 2;
_EQ_.cljs$lang$applyTo = _EQ___3.cljs$lang$applyTo;
_EQ_.cljs$lang$arity$1 = _EQ___1;
_EQ_.cljs$lang$arity$2 = _EQ___2;
_EQ_.cljs$lang$arity$variadic = _EQ___3.cljs$lang$arity$variadic;
return _EQ_;
})()
;
/**
* Returns true if x is nil, false otherwise.
*/
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return (x == null);
});
cljs.core.type = (function type(x){
if((x == null))
{return null;
} else
{return x.constructor;
}
});
void 0;
void 0;
void 0;
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__6333 = null;
var G__6333__2 = (function (o,k){
return null;
});
var G__6333__3 = (function (o,k,not_found){
return not_found;
});
G__6333 = function(o,k,not_found){
switch(arguments.length){
case 2:
return G__6333__2.call(this,o,k);
case 3:
return G__6333__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6333;
})()
);
(cljs.core.IAssociative["null"] = true);
(cljs.core._assoc["null"] = (function (_,k,v){
return cljs.core.hash_map.call(null,k,v);
}));
(cljs.core.INext["null"] = true);
(cljs.core._next["null"] = (function (_){
return null;
}));
(cljs.core.ICollection["null"] = true);
(cljs.core._conj["null"] = (function (_,o){
return cljs.core.list.call(null,o);
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__6334 = null;
var G__6334__2 = (function (_,f){
return f.call(null);
});
var G__6334__3 = (function (_,f,start){
return start;
});
G__6334 = function(_,f,start){
switch(arguments.length){
case 2:
return G__6334__2.call(this,_,f);
case 3:
return G__6334__3.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6334;
})()
);
(cljs.core.IPrintable["null"] = true);
(cljs.core._pr_seq["null"] = (function (o){
return cljs.core.list.call(null,"nil");
}));
(cljs.core.ISet["null"] = true);
(cljs.core._disjoin["null"] = (function (_,v){
return null;
}));
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){
return 0;
}));
(cljs.core.IStack["null"] = true);
(cljs.core._peek["null"] = (function (_){
return null;
}));
(cljs.core._pop["null"] = (function (_){
return null;
}));
(cljs.core.ISeq["null"] = true);
(cljs.core._first["null"] = (function (_){
return null;
}));
(cljs.core._rest["null"] = (function (_){
return cljs.core.list.call(null);
}));
(cljs.core.IEquiv["null"] = true);
(cljs.core._equiv["null"] = (function (_,o){
return (o == null);
}));
(cljs.core.IWithMeta["null"] = true);
(cljs.core._with_meta["null"] = (function (_,meta){
return null;
}));
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IIndexed["null"] = true);
(cljs.core._nth["null"] = (function() {
var G__6335 = null;
var G__6335__2 = (function (_,n){
return null;
});
var G__6335__3 = (function (_,n,not_found){
return not_found;
});
G__6335 = function(_,n,not_found){
switch(arguments.length){
case 2:
return G__6335__2.call(this,_,n);
case 3:
return G__6335__3.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6335;
})()
);
(cljs.core.IEmptyableCollection["null"] = true);
(cljs.core._empty["null"] = (function (_){
return null;
}));
(cljs.core.IMap["null"] = true);
(cljs.core._dissoc["null"] = (function (_,k){
return null;
}));
Date.prototype.cljs$core$IEquiv$ = true;
Date.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
return (o.toString() === other.toString());
});
(cljs.core.IHash["number"] = true);
(cljs.core._hash["number"] = (function (o){
return o;
}));
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){
return (x === o);
}));
(cljs.core.IHash["boolean"] = true);
(cljs.core._hash["boolean"] = (function (o){
if((o === true))
{return 1;
} else
{return 0;
}
}));
(cljs.core.IHash["_"] = true);
(cljs.core._hash["_"] = (function (o){
return goog.getUid(o);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){
return (x + 1);
});
void 0;
void 0;
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__2 = (function (cicoll,f){
var cnt__6348 = cljs.core._count.call(null,cicoll);
if((cnt__6348 === 0))
{return f.call(null);
} else
{var val__6349 = cljs.core._nth.call(null,cicoll,0);
var n__6350 = 1;
while(true){
if((n__6350 < cnt__6348))
{var nval__6351 = f.call(null,val__6349,cljs.core._nth.call(null,cicoll,n__6350));
if(cljs.core.reduced_QMARK_.call(null,nval__6351))
{return cljs.core.deref.call(null,nval__6351);
} else
{{
var G__6360 = nval__6351;
var G__6361 = (n__6350 + 1);
val__6349 = G__6360;
n__6350 = G__6361;
continue;
}
}
} else
{return val__6349;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){
var cnt__6352 = cljs.core._count.call(null,cicoll);
var val__6353 = val;
var n__6354 = 0;
while(true){
if((n__6354 < cnt__6352))
{var nval__6355 = f.call(null,val__6353,cljs.core._nth.call(null,cicoll,n__6354));
if(cljs.core.reduced_QMARK_.call(null,nval__6355))
{return cljs.core.deref.call(null,nval__6355);
} else
{{
var G__6362 = nval__6355;
var G__6363 = (n__6354 + 1);
val__6353 = G__6362;
n__6354 = G__6363;
continue;
}
}
} else
{return val__6353;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){
var cnt__6356 = cljs.core._count.call(null,cicoll);
var val__6357 = val;
var n__6358 = idx;
while(true){
if((n__6358 < cnt__6356))
{var nval__6359 = f.call(null,val__6357,cljs.core._nth.call(null,cicoll,n__6358));
if(cljs.core.reduced_QMARK_.call(null,nval__6359))
{return cljs.core.deref.call(null,nval__6359);
} else
{{
var G__6364 = nval__6359;
var G__6365 = (n__6358 + 1);
val__6357 = G__6364;
n__6358 = G__6365;
continue;
}
}
} else
{return val__6357;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case 2:
return ci_reduce__2.call(this,cicoll,f);
case 3:
return ci_reduce__3.call(this,cicoll,f,val);
case 4:
return ci_reduce__4.call(this,cicoll,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
ci_reduce.cljs$lang$arity$2 = ci_reduce__2;
ci_reduce.cljs$lang$arity$3 = ci_reduce__3;
ci_reduce.cljs$lang$arity$4 = ci_reduce__4;
return ci_reduce;
})()
;
cljs.core.array_reduce = (function() {
var array_reduce = null;
var array_reduce__2 = (function (arr,f){
var cnt__6378 = arr.length;
if((arr.length === 0))
{return f.call(null);
} else
{var val__6379 = (arr[0]);
var n__6380 = 1;
while(true){
if((n__6380 < cnt__6378))
{var nval__6381 = f.call(null,val__6379,(arr[n__6380]));
if(cljs.core.reduced_QMARK_.call(null,nval__6381))
{return cljs.core.deref.call(null,nval__6381);
} else
{{
var G__6390 = nval__6381;
var G__6391 = (n__6380 + 1);
val__6379 = G__6390;
n__6380 = G__6391;
continue;
}
}
} else
{return val__6379;
}
break;
}
}
});
var array_reduce__3 = (function (arr,f,val){
var cnt__6382 = arr.length;
var val__6383 = val;
var n__6384 = 0;
while(true){
if((n__6384 < cnt__6382))
{var nval__6385 = f.call(null,val__6383,(arr[n__6384]));
if(cljs.core.reduced_QMARK_.call(null,nval__6385))
{return cljs.core.deref.call(null,nval__6385);
} else
{{
var G__6392 = nval__6385;
var G__6393 = (n__6384 + 1);
val__6383 = G__6392;
n__6384 = G__6393;
continue;
}
}
} else
{return val__6383;
}
break;
}
});
var array_reduce__4 = (function (arr,f,val,idx){
var cnt__6386 = arr.length;
var val__6387 = val;
var n__6388 = idx;
while(true){
if((n__6388 < cnt__6386))
{var nval__6389 = f.call(null,val__6387,(arr[n__6388]));
if(cljs.core.reduced_QMARK_.call(null,nval__6389))
{return cljs.core.deref.call(null,nval__6389);
} else
{{
var G__6394 = nval__6389;
var G__6395 = (n__6388 + 1);
val__6387 = G__6394;
n__6388 = G__6395;
continue;
}
}
} else
{return val__6387;
}
break;
}
});
array_reduce = function(arr,f,val,idx){
switch(arguments.length){
case 2:
return array_reduce__2.call(this,arr,f);
case 3:
return array_reduce__3.call(this,arr,f,val);
case 4:
return array_reduce__4.call(this,arr,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
array_reduce.cljs$lang$arity$2 = array_reduce__2;
array_reduce.cljs$lang$arity$3 = array_reduce__3;
array_reduce.cljs$lang$arity$4 = array_reduce__4;
return array_reduce;
})()
;
void 0;
void 0;
void 0;
void 0;
void 0;

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (a,i){
this.a = a;
this.i = i;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 166199546;
})
cljs.core.IndexedSeq.cljs$lang$type = true;
cljs.core.IndexedSeq.cljs$lang$ctorPrSeq = (function (this__2290__auto__){
return cljs.core.list.call(null,"cljs.core/IndexedSeq");
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__6396 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var this__6397 = this;
if(((this__6397.i + 1) < this__6397.a.length))
{return (new cljs.core.IndexedSeq(this__6397.a,(this__6397.i + 1)));
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__6398 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__6399 = this;
var c__6400 = coll.cljs$core$ICounted$_count$arity$1(coll);
if((c__6400 > 0))
{return (new cljs.core.RSeq(coll,(c__6400 - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.IndexedSeq.prototype.toString = (function (){
var this__6401 = this;
var this__6402 = this;
return cljs.core.pr_str.call(null,this__6402);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__6403 = this;
if(cljs.core.counted_QMARK_.call(null,this__6403.a))
{return cljs.core.ci_reduce.call(null,this__6403.a,f,(this__6403.a[this__6403.i]),(this__6403.i + 1));
} else
{return cljs.core.ci_reduce.call(null,coll,f,(this__6403.a[this__6403.i]),0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__6404 = this;
if(cljs.core.counted_QMARK_.call(null,this__6404.a))
{return cljs.core.ci_reduce.call(null,this__6404.a,f,start,this__6404.i);
} else
{return cljs.core.ci_reduce.call(null,coll,f,start,0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__6405 = this;
return this$;
});
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__6406 = this;
return (this__6406.a.length - this__6406.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var this__6407 = this;
return (this__6407.a[this__6407.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var this__6408 = this;
if(((this__6408.i + 1) < this__6408.a.length))
{return (new cljs.core.IndexedSeq(this__6408.a,(this__6408.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__6409 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__6410 = this;
var i__6411 = (n + this__6410.i);
if((i__6411 < this__6410.a.length))
{return (this__6410.a[i__6411]);
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__6412 = this;
var i__6413 = (n + this__6412.i);
if((i__6413 < this__6412.a.length))
{return (this__6412.a[i__6413]);
} else
{return not_found;
}
});
cljs.core.IndexedSeq;
cljs.core.prim_seq = (function() {
var prim_seq = null;
var prim_seq__1 = (function (prim){
return prim_seq.call(null,prim,0);
});
var prim_seq__2 = (function (prim,i){
if((prim.length === 0))
{return null;
} else
{return (new cljs.core.IndexedSeq(prim,i));
}
});
prim_seq = function(prim,i){
switch(arguments.length){
case 1:
return prim_seq__1.call(this,prim);
case 2:
return prim_seq__2.call(this,prim,i);
}
throw('Invalid arity: ' + arguments.length);
};
prim_seq.cljs$lang$arity$1 = prim_seq__1;
prim_seq.cljs$lang$arity$2 = prim_seq__2;
return prim_seq;
})()
;
cljs.core.array_seq = (function() {
var array_seq = null;
var array_seq__1 = (function (array){
return cljs.core.prim_seq.call(null,array,0);
});
var array_seq__2 = (function (array,i){
return cljs.core.prim_seq.call(null,array,i);
});
array_seq = function(array,i){
switch(arguments.length){
case 1:
return array_seq__1.call(this,array);
case 2:
return array_seq__2.call(this,array,i);
}
throw('Invalid arity: ' + arguments.length);
};
array_seq.cljs$lang$arity$1 = array_seq__1;
array_seq.cljs$lang$arity$2 = array_seq__2;
return array_seq;
})()
;
(cljs.core.IReduce["array"] = true);
(cljs.core._reduce["array"] = (function() {
var G__6414 = null;
var G__6414__2 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__6414__3 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__6414 = function(array,f,start){
switch(arguments.length){
case 2:
return G__6414__2.call(this,array,f);
case 3:
return G__6414__3.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6414;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__6415 = null;
var G__6415__2 = (function (array,k){
return (array[k]);
});
var G__6415__3 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__6415 = function(array,k,not_found){
switch(arguments.length){
case 2:
return G__6415__2.call(this,array,k);
case 3:
return G__6415__3.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6415;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__6416 = null;
var G__6416__2 = (function (array,n){
if((n < array.length))
{return (array[n]);
} else
{return null;
}
});
var G__6416__3 = (function (array,n,not_found){
if((n < array.length))
{return (array[n]);
} else
{return not_found;
}
});
G__6416 = function(array,n,not_found){
switch(arguments.length){
case 2:
return G__6416__2.call(this,array,n);
case 3:
return G__6416__3.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6416;
})()
);
(cljs.core.ICounted["array"] = true);
(cljs.core._count["array"] = (function (a){
return a.length;
}));
(cljs.core.ISeqable["array"] = true);
(cljs.core._seq["array"] = (function (array){
return cljs.core.array_seq.call(null,array,0);
}));

/**
* @constructor
*/
cljs.core.RSeq = (function (ci,i,meta){
this.ci = ci;
this.i = i;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850570;
})
cljs.core.RSeq.cljs$lang$type = true;
cljs.core.RSeq.cljs$lang$ctorPrSeq = (function (this__2290__auto__){
return cljs.core.list.call(null,"cljs.core/RSeq");
});
cljs.core.RSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__6417 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__6418 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.RSeq.prototype.toString = (function (){
var this__6419 = this;
var this__6420 = this;
return cljs.core.pr_str.call(null,this__6420);
});
cljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__6421 = this;
return coll;
});
cljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__6422 = this;
return (this__6422.i + 1);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__6423 = this;
return cljs.core._nth.call(null,this__6423.ci,this__6423.i);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__6424 = this;
if((this__6424.i > 0))
{return (new cljs.core.RSeq(this__6424.ci,(this__6424.i - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__6425 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var this__6426 = this;
return (new cljs.core.RSeq(this__6426.ci,this__6426.i,new_meta));
});
cljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__6427 = this;
return this__6427.meta;
});
cljs.core.RSeq;
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if((coll == null))
{return null;
} else
{if((function (){var G__6431__6432 = coll;
if(G__6431__6432)
{if((function (){var or__3824__auto____6433 = (G__6431__6432.cljs$lang$protocol_mask$partition0$ & 32);
if(or__3824__auto____6433)
{return or__3824__auto____6433;
} else
{return G__6431__6432.cljs$core$ASeq$;
}
})())
{return true;
} else
{if((!G__6431__6432.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__6431__6432);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__6431__6432);
}
})())
{return coll;
} else
{return cljs.core._seq.call(null,coll);
}
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
if((coll == null))
{return null;
} else
{if((function (){var G__6438__6439 = coll;
if(G__6438__6439)
{if((function (){var or__3824__auto____6440 = (G__6438__6439.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____6440)
{return or__3824__auto____6440;
} else
{return G__6438__6439.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__6438__6439.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__6438__6439);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__6438__6439);
}
})())
{return cljs.core._first.call(null,coll);
} else
{var s__6441 = cljs.core.seq.call(null,coll);
if((s__6441 == null))
{return null;
} else
{return cljs.core._first.call(null,s__6441);
}
}
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
if(!((coll == null)))
{if((function (){var G__6446__6447 = coll;
if(G__6446__6447)
{if((function (){var or__3824__auto____6448 = (G__6446__6447.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____6448)
{return or__3824__auto____6448;
} else
{return G__6446__6447.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__6446__6447.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__6446__6447);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__6446__6447);
}
})())
{return cljs.core._rest.call(null,coll);
} else
{var s__6449 = cljs.core.seq.call(null,coll);
if(!((s__6449 == null)))
{return cljs.core._rest.call(null,s__6449);
} else
{return cljs.core.List.EMPTY;
}
}
} else
{return cljs.core.List.EMPTY;
}
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if((coll == null))
{return null;
} else
{if((function (){var G__6453__6454 = coll;
if(G__6453__6454)
{if((function (){var or__3824__auto____6455 = (G__6453__6454.cljs$lang$protocol_mask$partition0$ & 128);
if(or__3824__auto____6455)
{return or__3824__auto____6455;
} else
{return G__6453__6454.cljs$core$INext$;
}
})())
{return true;
} else
{if((!G__6453__6454.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__6453__6454);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__6453__6454);
}
})())
{return cljs.core._next.call(null,coll);
} else
{return cljs.core.seq.call(null,cljs.core.rest.call(null,coll));
}
}
});
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next.call(null,cljs.core.next.call(null,coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
var sn__6457 = cljs.core.next.call(null,s);
if(!((sn__6457 == null)))
{{
var G__6458 = sn__6457;
s = G__6458;
continue;
}
} else
{return cljs.core.first.call(null,s);
}
break;
}
});
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){
return (x === o);
}));
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){
if(cljs.core.truth_(x))
{return false;
} else
{return true;
}
});
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__2 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__3 = (function() { 
var G__6459__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__6460 = conj.call(null,coll,x);
var G__6461 = cljs.core.first.call(null,xs);
var G__6462 = cljs.core.next.call(null,xs);
coll = G__6460;
x = G__6461;
xs = G__6462;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__6459 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6459__delegate.call(this, coll, x, xs);
};
G__6459.cljs$lang$maxFixedArity = 2;
G__6459.cljs$lang$applyTo = (function (arglist__6463){
var coll = cljs.core.first(arglist__6463);
var x = cljs.core.first(cljs.core.next(arglist__6463));
var xs = cljs.core.rest(cljs.core.next(arglist__6463));
return G__6459__delegate(coll, x, xs);
});
G__6459.cljs$lang$arity$variadic = G__6459__delegate;
return G__6459;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 2:
return conj__2.call(this,coll,x);
default:
return conj__3.cljs$lang$arity$variadic(coll,x, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__3.cljs$lang$applyTo;
conj.cljs$lang$arity$2 = conj__2;
conj.cljs$lang$arity$variadic = conj__3.cljs$lang$arity$variadic;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
return cljs.core._empty.call(null,coll);
});
void 0;
cljs.core.accumulating_seq_count = (function accumulating_seq_count(coll){
var s__6466 = cljs.core.seq.call(null,coll);
var acc__6467 = 0;
while(true){
if(cljs.core.counted_QMARK_.call(null,s__6466))
{return (acc__6467 + cljs.core._count.call(null,s__6466));
} else
{{
var G__6468 = cljs.core.next.call(null,s__6466);
var G__6469 = (acc__6467 + 1);
s__6466 = G__6468;
acc__6467 = G__6469;
continue;
}
}
break;
}
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
if(cljs.core.counted_QMARK_.call(null,coll))
{return cljs.core._count.call(null,coll);
} else
{return cljs.core.accumulating_seq_count.call(null,coll);
}
});
void 0;
cljs.core.linear_traversal_nth = (function() {
var linear_traversal_nth = null;
var linear_traversal_nth__2 = (function (coll,n){
if((coll == null))
{throw (new Error("Index out of bounds"));
} else
{if((n === 0))
{if(cljs.core.seq.call(null,coll))
{return cljs.core.first.call(null,coll);
} else
{throw (new Error("Index out of bounds"));
}
} else
{if(cljs.core.indexed_QMARK_.call(null,coll))
{return cljs.core._nth.call(null,coll,n);
} else
{if(cljs.core.seq.call(null,coll))
{return linear_traversal_nth.call(null,cljs.core.next.call(null,coll),(n - 1));
} else
{if("\uFDD0'else")
{throw (new Error("Index out of bounds"));
} else
{return null;
}
}
}
}
}
});
var linear_traversal_nth__3 = (function (coll,n,not_found){
if((coll == null))
{return not_found;
} else
{if((n === 0))
{if(cljs.core.seq.call(null,coll))
{return cljs.core.first.call(null,coll);
} else
{return not_found;
}
} else
{if(cljs.core.indexed_QMARK_.call(null,coll))
{return cljs.core._nth.call(null,coll,n,not_found);
} else
{if(cljs.core.seq.call(null,coll))
{return linear_traversal_nth.call(null,cljs.core.next.call(null,coll),(n - 1),not_found);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
}
});
linear_traversal_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return linear_traversal_nth__2.call(this,coll,n);
case 3:
return linear_traversal_nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
linear_traversal_nth.cljs$lang$arity$2 = linear_traversal_nth__2;
linear_traversal_nth.cljs$lang$arity$3 = linear_traversal_nth__3;
return linear_traversal_nth;
})()
;
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__2 = (function (coll,n){
if((coll == null))
{return null;
} else
{if((function (){var G__6476__6477 = coll;
if(G__6476__6477)
{if((function (){var or__3824__auto____6478 = (G__6476__6477.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____6478)
{return or__3824__auto____6478;
} else
{return G__6476__6477.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__6476__6477.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__6476__6477);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__6476__6477);
}
})())
{return cljs.core._nth.call(null,coll,Math.floor(n));
} else
{return cljs.core.linear_traversal_nth.call(null,coll,Math.floor(n));
}
}
});
var nth__3 = (function (coll,n,not_found){
if(!((coll == null)))
{if((function (){var G__6479__6480 = coll;
if(G__6479__6480)
{if((function (){var or__3824__auto____6481 = (G__6479__6480.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____6481)
{return or__3824__auto____6481;
} else
{return G__6479__6480.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__6479__6480.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__6479__6480);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__6479__6480);
}
})())
{return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
} else
{return cljs.core.linear_traversal_nth.call(null,coll,Math.floor(n),not_found);
}
} else
{return not_found;
}
});
nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return nth__2.call(this,coll,n);
case 3:
return nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
nth.cljs$lang$arity$2 = nth__2;
nth.cljs$lang$arity$3 = nth__3;
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__2 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__3 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case 2:
return get__2.call(this,o,k);
case 3:
return get__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
get.cljs$lang$arity$2 = get__2;
get.cljs$lang$arity$3 = get__3;
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__3 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__4 = (function() { 
var G__6484__delegate = function (coll,k,v,kvs){
while(true){
var ret__6483 = assoc.call(null,coll,k,v);
if(cljs.core.truth_(kvs))
{{
var G__6485 = ret__6483;
var G__6486 = cljs.core.first.call(null,kvs);
var G__6487 = cljs.core.second.call(null,kvs);
var G__6488 = cljs.core.nnext.call(null,kvs);
coll = G__6485;
k = G__6486;
v = G__6487;
kvs = G__6488;
continue;
}
} else
{return ret__6483;
}
break;
}
};
var G__6484 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6484__delegate.call(this, coll, k, v, kvs);
};
G__6484.cljs$lang$maxFixedArity = 3;
G__6484.cljs$lang$applyTo = (function (arglist__6489){
var coll = cljs.core.first(arglist__6489);
var k = cljs.core.first(cljs.core.next(arglist__6489));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6489)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6489)));
return G__6484__delegate(coll, k, v, kvs);
});
G__6484.cljs$lang$arity$variadic = G__6484__delegate;
return G__6484;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 3:
return assoc__3.call(this,coll,k,v);
default:
return assoc__4.cljs$lang$arity$variadic(coll,k,v, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__4.cljs$lang$applyTo;
assoc.cljs$lang$arity$3 = assoc__3;
assoc.cljs$lang$arity$variadic = assoc__4.cljs$lang$arity$variadic;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__1 = (function (coll){
return coll;
});
var dissoc__2 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__3 = (function() { 
var G__6492__delegate = function (coll,k,ks){
while(true){
var ret__6491 = dissoc.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__6493 = ret__6491;
var G__6494 = cljs.core.first.call(null,ks);
var G__6495 = cljs.core.next.call(null,ks);
coll = G__6493;
k = G__6494;
ks = G__6495;
continue;
}
} else
{return ret__6491;
}
break;
}
};
var G__6492 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6492__delegate.call(this, coll, k, ks);
};
G__6492.cljs$lang$maxFixedArity = 2;
G__6492.cljs$lang$applyTo = (function (arglist__6496){
var coll = cljs.core.first(arglist__6496);
var k = cljs.core.first(cljs.core.next(arglist__6496));
var ks = cljs.core.rest(cljs.core.next(arglist__6496));
return G__6492__delegate(coll, k, ks);
});
G__6492.cljs$lang$arity$variadic = G__6492__delegate;
return G__6492;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return dissoc__1.call(this,coll);
case 2:
return dissoc__2.call(this,coll,k);
default:
return dissoc__3.cljs$lang$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__3.cljs$lang$applyTo;
dissoc.cljs$lang$arity$1 = dissoc__1;
dissoc.cljs$lang$arity$2 = dissoc__2;
dissoc.cljs$lang$arity$variadic = dissoc__3.cljs$lang$arity$variadic;
return dissoc;
})()
;
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
return cljs.core._with_meta.call(null,o,meta);
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
if((function (){var G__6500__6501 = o;
if(G__6500__6501)
{if((function (){var or__3824__auto____6502 = (G__6500__6501.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____6502)
{return or__3824__auto____6502;
} else
{return G__6500__6501.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__6500__6501.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__6500__6501);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__6500__6501);
}
})())
{return cljs.core._meta.call(null,o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
return cljs.core._peek.call(null,coll);
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
return cljs.core._pop.call(null,coll);
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__1 = (function (coll){
return coll;
});
var disj__2 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__3 = (function() { 
var G__6505__delegate = function (coll,k,ks){
while(true){
var ret__6504 = disj.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__6506 = ret__6504;
var G__6507 = cljs.core.first.call(null,ks);
var G__6508 = cljs.core.next.call(null,ks);
coll = G__6506;
k = G__6507;
ks = G__6508;
continue;
}
} else
{return ret__6504;
}
break;
}
};
var G__6505 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6505__delegate.call(this, coll, k, ks);
};
G__6505.cljs$lang$maxFixedArity = 2;
G__6505.cljs$lang$applyTo = (function (arglist__6509){
var coll = cljs.core.first(arglist__6509);
var k = cljs.core.first(cljs.core.next(arglist__6509));
var ks = cljs.core.rest(cljs.core.next(arglist__6509));
return G__6505__delegate(coll, k, ks);
});
G__6505.cljs$lang$arity$variadic = G__6505__delegate;
return G__6505;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return disj__1.call(this,coll);
case 2:
return disj__2.call(this,coll,k);
default:
return disj__3.cljs$lang$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__3.cljs$lang$applyTo;
disj.cljs$lang$arity$1 = disj__1;
disj.cljs$lang$arity$2 = disj__2;
disj.cljs$lang$arity$variadic = disj__3.cljs$lang$arity$variadic;
return disj;
})()
;
cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
cljs.core.add_to_string_hash_cache = (function add_to_string_hash_cache(k){
var h__6511 = goog.string.hashCode(k);
(cljs.core.string_hash_cache[k] = h__6511);
cljs.core.string_hash_cache_count = (cljs.core.string_hash_cache_count + 1);
return h__6511;
});
cljs.core.check_string_hash_cache = (function check_string_hash_cache(k){
if((cljs.core.string_hash_cache_count > 255))
{cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
} else
{}
var h__6513 = (cljs.core.string_hash_cache[k]);
if(!((h__6513 == null)))
{return h__6513;
} else
{return cljs.core.add_to_string_hash_cache.call(null,k);
}
});
cljs.core.hash = (function() {
var hash = null;
var hash__1 = (function (o){
return hash.call(null,o,true);
});
var hash__2 = (function (o,check_cache){
if((function (){var and__3822__auto____6515 = goog.isString(o);
if(and__3822__auto____6515)
{return check_cache;
} else
{return and__3822__auto____6515;
}
})())
{return cljs.core.check_string_hash_cache.call(null,o);
} else
{return cljs.core._hash.call(null,o);
}
});
hash = function(o,check_cache){
switch(arguments.length){
case 1:
return hash__1.call(this,o);
case 2:
return hash__2.call(this,o,check_cache);
}
throw('Invalid arity: ' + arguments.length);
};
hash.cljs$lang$arity$1 = hash__1;
hash.cljs$lang$arity$2 = hash__2;
return hash;
})()
;
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
return cljs.core.not.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if((x == null))
{return false;
} else
{var G__6519__6520 = x;
if(G__6519__6520)
{if((function (){var or__3824__auto____6521 = (G__6519__6520.cljs$lang$protocol_mask$partition0$ & 8);
if(or__3824__auto____6521)
{return or__3824__auto____6521;
} else
{return G__6519__6520.cljs$core$ICollection$;
}
})())
{return true;
} else
{if((!G__6519__6520.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__6519__6520);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__6519__6520);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if((x == null))
{return false;
} else
{var G__6525__6526 = x;
if(G__6525__6526)
{if((function (){var or__3824__auto____6527 = (G__6525__6526.cljs$lang$protocol_mask$partition0$ & 4096);
if(or__3824__auto____6527)
{return or__3824__auto____6527;
} else
{return G__6525__6526.cljs$core$ISet$;
}
})())
{return true;
} else
{if((!G__6525__6526.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__6525__6526);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__6525__6526);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var G__6531__6532 = x;
if(G__6531__6532)
{if((function (){var or__3824__auto____6533 = (G__6531__6532.cljs$lang$protocol_mask$partition0$ & 512);
if(or__3824__auto____6533)
{return or__3824__auto____6533;
} else
{return G__6531__6532.cljs$core$IAssociative$;
}
})())
{return true;
} else
{if((!G__6531__6532.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__6531__6532);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__6531__6532);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var G__6537__6538 = x;
if(G__6537__6538)
{if((function (){var or__3824__auto____6539 = (G__6537__6538.cljs$lang$protocol_mask$partition0$ & 16777216);
if(or__3824__auto____6539)
{return or__3824__auto____6539;
} else
{return G__6537__6538.cljs$core$ISequential$;
}
})())
{return true;
} else
{if((!G__6537__6538.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__6537__6538);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__6537__6538);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var G__6543__6544 = x;
if(G__6543__6544)
{if((function (){var or__3824__auto____6545 = (G__6543__6544.cljs$lang$protocol_mask$partition0$ & 2);
if(or__3824__auto____6545)
{return or__3824__auto____6545;
} else
{return G__6543__6544.cljs$core$ICounted$;
}
})())
{return true;
} else
{if((!G__6543__6544.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__6543__6544);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__6543__6544);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){
var G__6549__6550 = x;
if(G__6549__6550)
{if((function (){var or__3824__auto____6551 = (G__6549__6550.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____6551)
{return or__3824__auto____6551;
} else
{return G__6549__6550.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__6549__6550.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__6549__6550);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__6549__6550);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){
var G__6555__6556 = x;
if(G__6555__6556)
{if((function (){var or__3824__auto____6557 = (G__6555__6556.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____6557)
{return or__3824__auto____6557;
} else
{return G__6555__6556.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__6555__6556.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__6555__6556);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__6555__6556);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if((x == null))
{return false;
} else
{var G__6561__6562 = x;
if(G__6561__6562)
{if((function (){var or__3824__auto____6563 = (G__6561__6562.cljs$lang$protocol_mask$partition0$ & 1024);
if(or__3824__auto____6563)
{return or__3824__auto____6563;
} else
{return G__6561__6562.cljs$core$IMap$;
}
})())
{return true;
} else
{if((!G__6561__6562.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__6561__6562);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__6561__6562);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var G__6567__6568 = x;
if(G__6567__6568)
{if((function (){var or__3824__auto____6569 = (G__6567__6568.cljs$lang$protocol_mask$partition0$ & 16384);
if(or__3824__auto____6569)
{return or__3824__auto____6569;
} else
{return G__6567__6568.cljs$core$IVector$;
}
})())
{return true;
} else
{if((!G__6567__6568.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__6567__6568);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__6567__6568);
}
});
cljs.core.chunked_seq_QMARK_ = (function chunked_seq_QMARK_(x){
var G__6573__6574 = x;
if(G__6573__6574)
{if(cljs.core.truth_((function (){var or__3824__auto____6575 = null;
if(cljs.core.truth_(or__3824__auto____6575))
{return or__3824__auto____6575;
} else
{return G__6573__6574.cljs$core$IChunkedSeq$;
}
})()))
{return true;
} else
{if((!G__6573__6574.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__6573__6574);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__6573__6574);
}
});
/**
* @param {...*} var_args
*/
cljs.core.js_obj = (function() {
var js_obj = null;
var js_obj__0 = (function (){
return {};
});
var js_obj__1 = (function() { 
var G__6576__delegate = function (keyvals){
return cljs.core.apply.call(null,goog.object.create,keyvals);
};
var G__6576 = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__6576__delegate.call(this, keyvals);
};
G__6576.cljs$lang$maxFixedArity = 0;
G__6576.cljs$lang$applyTo = (function (arglist__6577){
var keyvals = cljs.core.seq(arglist__6577);;
return G__6576__delegate(keyvals);
});
G__6576.cljs$lang$arity$variadic = G__6576__delegate;
return G__6576;
})()
;
js_obj = function(var_args){
var keyvals = var_args;
switch(arguments.length){
case 0:
return js_obj__0.call(this);
default:
return js_obj__1.cljs$lang$arity$variadic(falsecljs.core.array_seq(arguments, 0));
}
throw('Invalid arity: ' + arguments.length);
};
js_obj.cljs$lang$maxFixedArity = 0;
js_obj.cljs$lang$applyTo = js_obj__1.cljs$lang$applyTo;
js_obj.cljs$lang$arity$0 = js_obj__0;
js_obj.cljs$lang$arity$variadic = js_obj__1.cljs$lang$arity$variadic;
return js_obj;
})()
;
cljs.core.js_keys = (function js_keys(obj){
var keys__6579 = [];
goog.object.forEach(obj,(function (val,key,obj){
return keys__6579.push(key);
}));
return keys__6579;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){
var i__6583 = i;
var j__6584 = j;
var len__6585 = len;
while(true){
if((len__6585 === 0))
{return to;
} else
{(to[j__6584] = (from[i__6583]));
{
var G__6586 = (i__6583 + 1);
var G__6587 = (j__6584 + 1);
var G__6588 = (len__6585 - 1);
i__6583 = G__6586;
j__6584 = G__6587;
len__6585 = G__6588;
continue;
}
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){
var i__6592 = (i + (len - 1));
var j__6593 = (j + (len - 1));
var len__6594 = len;
while(true){
if((len__6594 === 0))
{return to;
} else
{(to[j__6593] = (from[i__6592]));
{
var G__6595 = (i__6592 - 1);
var G__6596 = (j__6593 - 1);
var G__6597 = (len__6594 - 1);
i__6592 = G__6595;
j__6593 = G__6596;
len__6594 = G__6597;
continue;
}
}
break;
}
});
cljs.core.lookup_sentinel = {};
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){
return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){
return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){
return (void 0 === x);
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o instanceof t);
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if((s == null))
{return false;
} else
{var G__6601__6602 = s;
if(G__6601__6602)
{if((function (){var or__3824__auto____6603 = (G__6601__6602.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____6603)
{return or__3824__auto____6603;
} else
{return G__6601__6602.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__6601__6602.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__6601__6602);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__6601__6602);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){
var G__6607__6608 = s;
if(G__6607__6608)
{if((function (){var or__3824__auto____6609 = (G__6607__6608.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____6609)
{return or__3824__auto____6609;
} else
{return G__6607__6608.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__6607__6608.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__6607__6608);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__6607__6608);
}
});
cljs.core.boolean$ = (function boolean$(x){
if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){
var and__3822__auto____6612 = goog.isString(x);
if(and__3822__auto____6612)
{return !((function (){var or__3824__auto____6613 = (x.charAt(0) === "\uFDD0");
if(or__3824__auto____6613)
{return or__3824__auto____6613;
} else
{return (x.charAt(0) === "\uFDD1");
}
})());
} else
{return and__3822__auto____6612;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3822__auto____6615 = goog.isString(x);
if(and__3822__auto____6615)
{return (x.charAt(0) === "\uFDD0");
} else
{return and__3822__auto____6615;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3822__auto____6617 = goog.isString(x);
if(and__3822__auto____6617)
{return (x.charAt(0) === "\uFDD1");
} else
{return and__3822__auto____6617;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber(n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction(f);
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){
var or__3824__auto____6622 = cljs.core.fn_QMARK_.call(null,f);
if(or__3824__auto____6622)
{return or__3824__auto____6622;
} else
{var G__6623__6624 = f;
if(G__6623__6624)
{if((function (){var or__3824__auto____6625 = (G__6623__6624.cljs$lang$protocol_mask$partition0$ & 1);
if(or__3824__auto____6625)
{return or__3824__auto____6625;
} else
{return G__6623__6624.cljs$core$IFn$;
}
})())
{return true;
} else
{if((!G__6623__6624.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__6623__6624);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__6623__6624);
}
}
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3822__auto____6627 = cljs.core.number_QMARK_.call(null,n);
if(and__3822__auto____6627)
{return (n == n.toFixed());
} else
{return and__3822__auto____6627;
}
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){
if((cljs.core._lookup.call(null,coll,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if(cljs.core.truth_((function (){var and__3822__auto____6630 = coll;
if(cljs.core.truth_(and__3822__auto____6630))
{var and__3822__auto____6631 = cljs.core.associative_QMARK_.call(null,coll);
if(and__3822__auto____6631)
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3822__auto____6631;
}
} else
{return and__3822__auto____6630;
}
})()))
{return cljs.core.PersistentVector.fromArray([k,cljs.core._lookup.call(null,coll,k)], true);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___1 = (function (x){
return true;
});
var distinct_QMARK___2 = (function (x,y){
return !(cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___3 = (function() { 
var G__6640__delegate = function (x,y,more){
if(!(cljs.core._EQ_.call(null,x,y)))
{var s__6636 = cljs.core.set([y,x]);
var xs__6637 = more;
while(true){
var x__6638 = cljs.core.first.call(null,xs__6637);
var etc__6639 = cljs.core.next.call(null,xs__6637);
if(cljs.core.truth_(xs__6637))
{if(cljs.core.contains_QMARK_.call(null,s__6636,x__6638))
{return false;
} else
{{
var G__6641 = cljs.core.conj.call(null,s__6636,x__6638);
var G__6642 = etc__6639;
s__6636 = G__6641;
xs__6637 = G__6642;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
};
var G__6640 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6640__delegate.call(this, x, y, more);
};
G__6640.cljs$lang$maxFixedArity = 2;
G__6640.cljs$lang$applyTo = (function (arglist__6643){
var x = cljs.core.first(arglist__6643);
var y = cljs.core.first(cljs.core.next(arglist__6643));
var more = cljs.core.rest(cljs.core.next(arglist__6643));
return G__6640__delegate(x, y, more);
});
G__6640.cljs$lang$arity$variadic = G__6640__delegate;
return G__6640;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return distinct_QMARK___1.call(this,x);
case 2:
return distinct_QMARK___2.call(this,x,y);
default:
return distinct_QMARK___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___3.cljs$lang$applyTo;
distinct_QMARK_.cljs$lang$arity$1 = distinct_QMARK___1;
distinct_QMARK_.cljs$lang$arity$2 = distinct_QMARK___2;
distinct_QMARK_.cljs$lang$arity$variadic = distinct_QMARK___3.cljs$lang$arity$variadic;
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses IComparable if available and google.array.defaultCompare for objects
* of the same type and special-cases nil to be less than any other object.
*/
cljs.core.compare = (function compare(x,y){
if((x === y))
{return 0;
} else
{if((x == null))
{return -1;
} else
{if((y == null))
{return 1;
} else
{if((cljs.core.type.call(null,x) === cljs.core.type.call(null,y)))
{if((function (){var G__6647__6648 = x;
if(G__6647__6648)
{if(cljs.core.truth_((function (){var or__3824__auto____6649 = null;
if(cljs.core.truth_(or__3824__auto____6649))
{return or__3824__auto____6649;
} else
{return G__6647__6648.cljs$core$IComparable$;
}
})()))
{return true;
} else
{if((!G__6647__6648.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__6647__6648);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__6647__6648);
}
})())
{return cljs.core._compare.call(null,x,y);
} else
{return goog.array.defaultCompare(x,y);
}
} else
{if("\uFDD0'else")
{throw (new Error("compare on non-nil objects of different types"));
} else
{return null;
}
}
}
}
}
});
/**
* Compare indexed collection.
*/
cljs.core.compare_indexed = (function() {
var compare_indexed = null;
var compare_indexed__2 = (function (xs,ys){
var xl__6654 = cljs.core.count.call(null,xs);
var yl__6655 = cljs.core.count.call(null,ys);
if((xl__6654 < yl__6655))
{return -1;
} else
{if((xl__6654 > yl__6655))
{return 1;
} else
{if("\uFDD0'else")
{return compare_indexed.call(null,xs,ys,xl__6654,0);
} else
{return null;
}
}
}
});
var compare_indexed__4 = (function (xs,ys,len,n){
while(true){
var d__6656 = cljs.core.compare.call(null,cljs.core.nth.call(null,xs,n),cljs.core.nth.call(null,ys,n));
if((function (){var and__3822__auto____6657 = (d__6656 === 0);
if(and__3822__auto____6657)
{return ((n + 1) < len);
} else
{return and__3822__auto____6657;
}
})())
{{
var G__6658 = xs;
var G__6659 = ys;
var G__6660 = len;
var G__6661 = (n + 1);
xs = G__6658;
ys = G__6659;
len = G__6660;
n = G__6661;
continue;
}
} else
{return d__6656;
}
break;
}
});
compare_indexed = function(xs,ys,len,n){
switch(arguments.length){
case 2:
return compare_indexed__2.call(this,xs,ys);
case 4:
return compare_indexed__4.call(this,xs,ys,len,n);
}
throw('Invalid arity: ' + arguments.length);
};
compare_indexed.cljs$lang$arity$2 = compare_indexed__2;
compare_indexed.cljs$lang$arity$4 = compare_indexed__4;
return compare_indexed;
})()
;
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core._EQ_.call(null,f,cljs.core.compare))
{return cljs.core.compare;
} else
{return (function (x,y){
var r__6663 = f.call(null,x,y);
if(cljs.core.number_QMARK_.call(null,r__6663))
{return r__6663;
} else
{if(cljs.core.truth_(r__6663))
{return -1;
} else
{if(cljs.core.truth_(f.call(null,y,x)))
{return 1;
} else
{return 0;
}
}
}
});
}
});
void 0;
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__1 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__2 = (function (comp,coll){
if(cljs.core.seq.call(null,coll))
{var a__6665 = cljs.core.to_array.call(null,coll);
goog.array.stableSort(a__6665,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__6665);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case 1:
return sort__1.call(this,comp);
case 2:
return sort__2.call(this,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
sort.cljs$lang$arity$1 = sort__1;
sort.cljs$lang$arity$2 = sort__2;
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__2 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__3 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case 2:
return sort_by__2.call(this,keyfn,comp);
case 3:
return sort_by__3.call(this,keyfn,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
sort_by.cljs$lang$arity$2 = sort_by__2;
sort_by.cljs$lang$arity$3 = sort_by__3;
return sort_by;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__2 = (function (f,coll){
var temp__3971__auto____6671 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____6671)
{var s__6672 = temp__3971__auto____6671;
return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__6672),cljs.core.next.call(null,s__6672));
} else
{return f.call(null);
}
});
var seq_reduce__3 = (function (f,val,coll){
var val__6673 = val;
var coll__6674 = cljs.core.seq.call(null,coll);
while(true){
if(coll__6674)
{var nval__6675 = f.call(null,val__6673,cljs.core.first.call(null,coll__6674));
if(cljs.core.reduced_QMARK_.call(null,nval__6675))
{return cljs.core.deref.call(null,nval__6675);
} else
{{
var G__6676 = nval__6675;
var G__6677 = cljs.core.next.call(null,coll__6674);
val__6673 = G__6676;
coll__6674 = G__6677;
continue;
}
}
} else
{return val__6673;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return seq_reduce__2.call(this,f,val);
case 3:
return seq_reduce__3.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
seq_reduce.cljs$lang$arity$2 = seq_reduce__2;
seq_reduce.cljs$lang$arity$3 = seq_reduce__3;
return seq_reduce;
})()
;
void 0;
/**
* Return a random permutation of coll
*/
cljs.core.shuffle = (function shuffle(coll){
var a__6679 = cljs.core.to_array.call(null,coll);
goog.array.shuffle(a__6679);
return cljs.core.vec.call(null,a__6679);
});
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__2 = (function (f,coll){
if((function (){var G__6686__6687 = coll;
if(G__6686__6687)
{if((function (){var or__3824__auto____6688 = (G__6686__6687.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____6688)
{return or__3824__auto____6688;
} else
{return G__6686__6687.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__6686__6687.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__6686__6687);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__6686__6687);
}
})())
{return cljs.core._reduce.call(null,coll,f);
} else
{return cljs.core.seq_reduce.call(null,f,coll);
}
});
var reduce__3 = (function (f,val,coll){
if((function (){var G__6689__6690 = coll;
if(G__6689__6690)
{if((function (){var or__3824__auto____6691 = (G__6689__6690.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____6691)
{return or__3824__auto____6691;
} else
{return G__6689__6690.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__6689__6690.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__6689__6690);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__6689__6690);
}
})())
{return cljs.core._reduce.call(null,coll,f,val);
} else
{return cljs.core.seq_reduce.call(null,f,val,coll);
}
});
reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return reduce__2.call(this,f,val);
case 3:
return reduce__3.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
reduce.cljs$lang$arity$2 = reduce__2;
reduce.cljs$lang$arity$3 = reduce__3;
return reduce;
})()
;
/**
* Reduces an associative collection. f should be a function of 3
* arguments. Returns the result of applying f to init, the first key
* and the first value in coll, then applying f to that result and the
* 2nd key and value, etc. If coll contains no entries, returns init
* and f is not called. Note that reduce-kv is supported on vectors,
* where the keys will be the ordinals.
*/
cljs.core.reduce_kv = (function reduce_kv(f,init,coll){
return cljs.core._kv_reduce.call(null,coll,f,init);
});

/**
* @constructor
*/
cljs.core.Reduced = (function (val){
this.val = val;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32768;
})
cljs.core.Reduced.cljs$lang$type = true;
cljs.core.Reduced.cljs$lang$ctorPrSeq = (function (this__2290__auto__){
return cljs.core.list.call(null,"cljs.core/Reduced");
});
cljs.core.Reduced.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var this__6692 = this;
return this__6692.val;
});
cljs.core.Reduced;
/**
* Returns true if x is the result of a call to reduced
*/
cljs.core.reduced_QMARK_ = (function reduced_QMARK_(r){
return cljs.core.instance_QMARK_.call(null,cljs.core.Reduced,r);
});
/**
* Wraps x in a way such that a reduce will terminate with the value x
*/
cljs.core.reduced = (function reduced(x){
return (new cljs.core.Reduced(x));
});
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___0 = (function (){
return 0;
});
var _PLUS___1 = (function (x){
return x;
});
var _PLUS___2 = (function (x,y){
return (x + y);
});
var _PLUS___3 = (function() { 
var G__6693__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__6693 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6693__delegate.call(this, x, y, more);
};
G__6693.cljs$lang$maxFixedArity = 2;
G__6693.cljs$lang$applyTo = (function (arglist__6694){
var x = cljs.core.first(arglist__6694);
var y = cljs.core.first(cljs.core.next(arglist__6694));
var more = cljs.core.rest(cljs.core.next(arglist__6694));
return G__6693__delegate(x, y, more);
});
G__6693.cljs$lang$arity$variadic = G__6693__delegate;
return G__6693;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _PLUS___0.call(this);
case 1:
return _PLUS___1.call(this,x);
case 2:
return _PLUS___2.call(this,x,y);
default:
return _PLUS___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___3.cljs$lang$applyTo;
_PLUS_.cljs$lang$arity$0 = _PLUS___0;
_PLUS_.cljs$lang$arity$1 = _PLUS___1;
_PLUS_.cljs$lang$arity$2 = _PLUS___2;
_PLUS_.cljs$lang$arity$variadic = _PLUS___3.cljs$lang$arity$variadic;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___1 = (function (x){
return (- x);
});
var ___2 = (function (x,y){
return (x - y);
});
var ___3 = (function() { 
var G__6695__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__6695 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6695__delegate.call(this, x, y, more);
};
G__6695.cljs$lang$maxFixedArity = 2;
G__6695.cljs$lang$applyTo = (function (arglist__6696){
var x = cljs.core.first(arglist__6696);
var y = cljs.core.first(cljs.core.next(arglist__6696));
var more = cljs.core.rest(cljs.core.next(arglist__6696));
return G__6695__delegate(x, y, more);
});
G__6695.cljs$lang$arity$variadic = G__6695__delegate;
return G__6695;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return ___1.call(this,x);
case 2:
return ___2.call(this,x,y);
default:
return ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___3.cljs$lang$applyTo;
_.cljs$lang$arity$1 = ___1;
_.cljs$lang$arity$2 = ___2;
_.cljs$lang$arity$variadic = ___3.cljs$lang$arity$variadic;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___0 = (function (){
return 1;
});
var _STAR___1 = (function (x){
return x;
});
var _STAR___2 = (function (x,y){
return (x * y);
});
var _STAR___3 = (function() { 
var G__6697__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__6697 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6697__delegate.call(this, x, y, more);
};
G__6697.cljs$lang$maxFixedArity = 2;
G__6697.cljs$lang$applyTo = (function (arglist__6698){
var x = cljs.core.first(arglist__6698);
var y = cljs.core.first(cljs.core.next(arglist__6698));
var more = cljs.core.rest(cljs.core.next(arglist__6698));
return G__6697__delegate(x, y, more);
});
G__6697.cljs$lang$arity$variadic = G__6697__delegate;
return G__6697;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _STAR___0.call(this);
case 1:
return _STAR___1.call(this,x);
case 2:
return _STAR___2.call(this,x,y);
default:
return _STAR___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___3.cljs$lang$applyTo;
_STAR_.cljs$lang$arity$0 = _STAR___0;
_STAR_.cljs$lang$arity$1 = _STAR___1;
_STAR_.cljs$lang$arity$2 = _STAR___2;
_STAR_.cljs$lang$arity$variadic = _STAR___3.cljs$lang$arity$variadic;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___1 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___2 = (function (x,y){
return (x / y);
});
var _SLASH___3 = (function() { 
var G__6699__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__6699 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6699__delegate.call(this, x, y, more);
};
G__6699.cljs$lang$maxFixedArity = 2;
G__6699.cljs$lang$applyTo = (function (arglist__6700){
var x = cljs.core.first(arglist__6700);
var y = cljs.core.first(cljs.core.next(arglist__6700));
var more = cljs.core.rest(cljs.core.next(arglist__6700));
return G__6699__delegate(x, y, more);
});
G__6699.cljs$lang$arity$variadic = G__6699__delegate;
return G__6699;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _SLASH___1.call(this,x);
case 2:
return _SLASH___2.call(this,x,y);
default:
return _SLASH___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___3.cljs$lang$applyTo;
_SLASH_.cljs$lang$arity$1 = _SLASH___1;
_SLASH_.cljs$lang$arity$2 = _SLASH___2;
_SLASH_.cljs$lang$arity$variadic = _SLASH___3.cljs$lang$arity$variadic;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___1 = (function (x){
return true;
});
var _LT___2 = (function (x,y){
return (x < y);
});
var _LT___3 = (function() { 
var G__6701__delegate = function (x,y,more){
while(true){
if((x < y))
{if(cljs.core.next.call(null,more))
{{
var G__6702 = y;
var G__6703 = cljs.core.first.call(null,more);
var G__6704 = cljs.core.next.call(null,more);
x = G__6702;
y = G__6703;
more = G__6704;
continue;
}
} else
{return (y < cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__6701 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6701__delegate.call(this, x, y, more);
};
G__6701.cljs$lang$maxFixedArity = 2;
G__6701.cljs$lang$applyTo = (function (arglist__6705){
var x = cljs.core.first(arglist__6705);
var y = cljs.core.first(cljs.core.next(arglist__6705));
var more = cljs.core.rest(cljs.core.next(arglist__6705));
return G__6701__delegate(x, y, more);
});
G__6701.cljs$lang$arity$variadic = G__6701__delegate;
return G__6701;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT___1.call(this,x);
case 2:
return _LT___2.call(this,x,y);
default:
return _LT___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___3.cljs$lang$applyTo;
_LT_.cljs$lang$arity$1 = _LT___1;
_LT_.cljs$lang$arity$2 = _LT___2;
_LT_.cljs$lang$arity$variadic = _LT___3.cljs$lang$arity$variadic;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___1 = (function (x){
return true;
});
var _LT__EQ___2 = (function (x,y){
return (x <= y);
});
var _LT__EQ___3 = (function() { 
var G__6706__delegate = function (x,y,more){
while(true){
if((x <= y))
{if(cljs.core.next.call(null,more))
{{
var G__6707 = y;
var G__6708 = cljs.core.first.call(null,more);
var G__6709 = cljs.core.next.call(null,more);
x = G__6707;
y = G__6708;
more = G__6709;
continue;
}
} else
{return (y <= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__6706 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6706__delegate.call(this, x, y, more);
};
G__6706.cljs$lang$maxFixedArity = 2;
G__6706.cljs$lang$applyTo = (function (arglist__6710){
var x = cljs.core.first(arglist__6710);
var y = cljs.core.first(cljs.core.next(arglist__6710));
var more = cljs.core.rest(cljs.core.next(arglist__6710));
return G__6706__delegate(x, y, more);
});
G__6706.cljs$lang$arity$variadic = G__6706__delegate;
return G__6706;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT__EQ___1.call(this,x);
case 2:
return _LT__EQ___2.call(this,x,y);
default:
return _LT__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___3.cljs$lang$applyTo;
_LT__EQ_.cljs$lang$arity$1 = _LT__EQ___1;
_LT__EQ_.cljs$lang$arity$2 = _LT__EQ___2;
_LT__EQ_.cljs$lang$arity$variadic = _LT__EQ___3.cljs$lang$arity$variadic;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___1 = (function (x){
return true;
});
var _GT___2 = (function (x,y){
return (x > y);
});
var _GT___3 = (function() { 
var G__6711__delegate = function (x,y,more){
while(true){
if((x > y))
{if(cljs.core.next.call(null,more))
{{
var G__6712 = y;
var G__6713 = cljs.core.first.call(null,more);
var G__6714 = cljs.core.next.call(null,more);
x = G__6712;
y = G__6713;
more = G__6714;
continue;
}
} else
{return (y > cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__6711 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6711__delegate.call(this, x, y, more);
};
G__6711.cljs$lang$maxFixedArity = 2;
G__6711.cljs$lang$applyTo = (function (arglist__6715){
var x = cljs.core.first(arglist__6715);
var y = cljs.core.first(cljs.core.next(arglist__6715));
var more = cljs.core.rest(cljs.core.next(arglist__6715));
return G__6711__delegate(x, y, more);
});
G__6711.cljs$lang$arity$variadic = G__6711__delegate;
return G__6711;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT___1.call(this,x);
case 2:
return _GT___2.call(this,x,y);
default:
return _GT___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___3.cljs$lang$applyTo;
_GT_.cljs$lang$arity$1 = _GT___1;
_GT_.cljs$lang$arity$2 = _GT___2;
_GT_.cljs$lang$arity$variadic = _GT___3.cljs$lang$arity$variadic;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___1 = (function (x){
return true;
});
var _GT__EQ___2 = (function (x,y){
return (x >= y);
});
var _GT__EQ___3 = (function() { 
var G__6716__delegate = function (x,y,more){
while(true){
if((x >= y))
{if(cljs.core.next.call(null,more))
{{
var G__6717 = y;
var G__6718 = cljs.core.first.call(null,more);
var G__6719 = cljs.core.next.call(null,more);
x = G__6717;
y = G__6718;
more = G__6719;
continue;
}
} else
{return (y >= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__6716 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6716__delegate.call(this, x, y, more);
};
G__6716.cljs$lang$maxFixedArity = 2;
G__6716.cljs$lang$applyTo = (function (arglist__6720){
var x = cljs.core.first(arglist__6720);
var y = cljs.core.first(cljs.core.next(arglist__6720));
var more = cljs.core.rest(cljs.core.next(arglist__6720));
return G__6716__delegate(x, y, more);
});
G__6716.cljs$lang$arity$variadic = G__6716__delegate;
return G__6716;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT__EQ___1.call(this,x);
case 2:
return _GT__EQ___2.call(this,x,y);
default:
return _GT__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___3.cljs$lang$applyTo;
_GT__EQ_.cljs$lang$arity$1 = _GT__EQ___1;
_GT__EQ_.cljs$lang$arity$2 = _GT__EQ___2;
_GT__EQ_.cljs$lang$arity$variadic = _GT__EQ___3.cljs$lang$arity$variadic;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){
return (x - 1);
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__1 = (function (x){
return x;
});
var max__2 = (function (x,y){
return ((x > y) ? x : y);
});
var max__3 = (function() { 
var G__6721__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__6721 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6721__delegate.call(this, x, y, more);
};
G__6721.cljs$lang$maxFixedArity = 2;
G__6721.cljs$lang$applyTo = (function (arglist__6722){
var x = cljs.core.first(arglist__6722);
var y = cljs.core.first(cljs.core.next(arglist__6722));
var more = cljs.core.rest(cljs.core.next(arglist__6722));
return G__6721__delegate(x, y, more);
});
G__6721.cljs$lang$arity$variadic = G__6721__delegate;
return G__6721;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return max__1.call(this,x);
case 2:
return max__2.call(this,x,y);
default:
return max__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__3.cljs$lang$applyTo;
max.cljs$lang$arity$1 = max__1;
max.cljs$lang$arity$2 = max__2;
max.cljs$lang$arity$variadic = max__3.cljs$lang$arity$variadic;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__1 = (function (x){
return x;
});
var min__2 = (function (x,y){
return ((x < y) ? x : y);
});
var min__3 = (function() { 
var G__6723__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__6723 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6723__delegate.call(this, x, y, more);
};
G__6723.cljs$lang$maxFixedArity = 2;
G__6723.cljs$lang$applyTo = (function (arglist__6724){
var x = cljs.core.first(arglist__6724);
var y = cljs.core.first(cljs.core.next(arglist__6724));
var more = cljs.core.rest(cljs.core.next(arglist__6724));
return G__6723__delegate(x, y, more);
});
G__6723.cljs$lang$arity$variadic = G__6723__delegate;
return G__6723;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return min__1.call(this,x);
case 2:
return min__2.call(this,x,y);
default:
return min__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__3.cljs$lang$applyTo;
min.cljs$lang$arity$1 = min__1;
min.cljs$lang$arity$2 = min__2;
min.cljs$lang$arity$variadic = min__3.cljs$lang$arity$variadic;
return min;
})()
;
cljs.core.fix = (function fix(q){
if((q >= 0))
{return Math.floor.call(null,q);
} else
{return Math.ceil.call(null,q);
}
});
/**
* Coerce to int by stripping decimal places.
*/
cljs.core.int$ = (function int$(x){
return cljs.core.fix.call(null,x);
});
/**
* Coerce to long by stripping decimal places. Identical to `int'.
*/
cljs.core.long$ = (function long$(x){
return cljs.core.fix.call(null,x);
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){
return (n % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){
var rem__6726 = (n % d);
return cljs.core.fix.call(null,((n - rem__6726) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__6728 = cljs.core.quot.call(null,n,d);
return (n - (d * q__6728));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){
return Math.random.call(null);
});
var rand__1 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
rand.cljs$lang$arity$0 = rand__0;
rand.cljs$lang$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return cljs.core.fix.call(null,cljs.core.rand.call(null,n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){
return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){
return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){
return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){
return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){
return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){
return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){
return (~ x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){
return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){
return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){
return (x >> n);
});
/**
* Bitwise shift right with zero fill
*/
cljs.core.bit_shift_right_zero_fill = (function bit_shift_right_zero_fill(x,n){
return (x >>> n);
});
/**
* Counts the number of bits set in n
*/
cljs.core.bit_count = (function bit_count(v){
var v__6731 = (v - ((v >> 1) & 1431655765));
var v__6732 = ((v__6731 & 858993459) + ((v__6731 >> 2) & 858993459));
return ((((v__6732 + (v__6732 >> 4)) & 252645135) * 16843009) >> 24);
});
/**
* Returns non-nil if nums all have the equivalent
* value, otherwise false. Behavior on non nums is
* undefined.
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___1 = (function (x){
return true;
});
var _EQ__EQ___2 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___3 = (function() { 
var G__6733__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__6734 = y;
var G__6735 = cljs.core.first.call(null,more);
var G__6736 = cljs.core.next.call(null,more);
x = G__6734;
y = G__6735;
more = G__6736;
continue;
}
} else
{return _EQ__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__6733 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6733__delegate.call(this, x, y, more);
};
G__6733.cljs$lang$maxFixedArity = 2;
G__6733.cljs$lang$applyTo = (function (arglist__6737){
var x = cljs.core.first(arglist__6737);
var y = cljs.core.first(cljs.core.next(arglist__6737));
var more = cljs.core.rest(cljs.core.next(arglist__6737));
return G__6733__delegate(x, y, more);
});
G__6733.cljs$lang$arity$variadic = G__6733__delegate;
return G__6733;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ__EQ___1.call(this,x);
case 2:
return _EQ__EQ___2.call(this,x,y);
default:
return _EQ__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___3.cljs$lang$applyTo;
_EQ__EQ_.cljs$lang$arity$1 = _EQ__EQ___1;
_EQ__EQ_.cljs$lang$arity$2 = _EQ__EQ___2;
_EQ__EQ_.cljs$lang$arity$variadic = _EQ__EQ___3.cljs$lang$arity$variadic;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return (n > 0);
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return (n === 0);
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){
return (x < 0);
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){
var n__6741 = n;
var xs__6742 = cljs.core.seq.call(null,coll);
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____6743 = xs__6742;
if(and__3822__auto____6743)
{return (n__6741 > 0);
} else
{return and__3822__auto____6743;
}
})()))
{{
var G__6744 = (n__6741 - 1);
var G__6745 = cljs.core.next.call(null,xs__6742);
n__6741 = G__6744;
xs__6742 = G__6745;
continue;
}
} else
{return xs__6742;
}
break;
}
});
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___0 = (function (){
return "";
});
var str_STAR___1 = (function (x){
if((x == null))
{return "";
} else
{if("\uFDD0'else")
{return x.toString();
} else
{return null;
}
}
});
var str_STAR___2 = (function() { 
var G__6746__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__6747 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__6748 = cljs.core.next.call(null,more);
sb = G__6747;
more = G__6748;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__6746 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__6746__delegate.call(this, x, ys);
};
G__6746.cljs$lang$maxFixedArity = 1;
G__6746.cljs$lang$applyTo = (function (arglist__6749){
var x = cljs.core.first(arglist__6749);
var ys = cljs.core.rest(arglist__6749);
return G__6746__delegate(x, ys);
});
G__6746.cljs$lang$arity$variadic = G__6746__delegate;
return G__6746;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case 0:
return str_STAR___0.call(this);
case 1:
return str_STAR___1.call(this,x);
default:
return str_STAR___2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___2.cljs$lang$applyTo;
str_STAR_.cljs$lang$arity$0 = str_STAR___0;
str_STAR_.cljs$lang$arity$1 = str_STAR___1;
str_STAR_.cljs$lang$arity$variadic = str_STAR___2.cljs$lang$arity$variadic;
return str_STAR_;
})()
;
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__0 = (function (){
return "";
});
var str__1 = (function (x){
if(cljs.core.symbol_QMARK_.call(null,x))
{return x.substring(2,x.length);
} else
{if(cljs.core.keyword_QMARK_.call(null,x))
{return cljs.core.str_STAR_.call(null,":",x.substring(2,x.length));
} else
{if((x == null))
{return "";
} else
{if("\uFDD0'else")
{return x.toString();
} else
{return null;
}
}
}
}
});
var str__2 = (function() { 
var G__6750__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__6751 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__6752 = cljs.core.next.call(null,more);
sb = G__6751;
more = G__6752;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__6750 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__6750__delegate.call(this, x, ys);
};
G__6750.cljs$lang$maxFixedArity = 1;
G__6750.cljs$lang$applyTo = (function (arglist__6753){
var x = cljs.core.first(arglist__6753);
var ys = cljs.core.rest(arglist__6753);
return G__6750__delegate(x, ys);
});
G__6750.cljs$lang$arity$variadic = G__6750__delegate;
return G__6750;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case 0:
return str__0.call(this);
case 1:
return str__1.call(this,x);
default:
return str__2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__2.cljs$lang$applyTo;
str.cljs$lang$arity$0 = str__0;
str.cljs$lang$arity$1 = str__1;
str.cljs$lang$arity$variadic = str__2.cljs$lang$arity$variadic;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__2 = (function (s,start){
return s.substring(start);
});
var subs__3 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case 2:
return subs__2.call(this,s,start);
case 3:
return subs__3.call(this,s,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
subs.cljs$lang$arity$2 = subs__2;
subs.cljs$lang$arity$3 = subs__3;
return subs;
})()
;
/**
* Returns a Symbol with the given namespace and name.
*/
cljs.core.symbol = (function() {
var symbol = null;
var symbol__1 = (function (name){
if(cljs.core.symbol_QMARK_.call(null,name))
{name;
} else
{if(cljs.core.keyword_QMARK_.call(null,name))
{cljs.core.str_STAR_.call(null,"\uFDD1","'",cljs.core.subs.call(null,name,2));
} else
{}
}
return cljs.core.str_STAR_.call(null,"\uFDD1","'",name);
});
var symbol__2 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case 1:
return symbol__1.call(this,ns);
case 2:
return symbol__2.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
symbol.cljs$lang$arity$1 = symbol__1;
symbol.cljs$lang$arity$2 = symbol__2;
return symbol;
})()
;
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__1 = (function (name){
if(cljs.core.keyword_QMARK_.call(null,name))
{return name;
} else
{if(cljs.core.symbol_QMARK_.call(null,name))
{return cljs.core.str_STAR_.call(null,"\uFDD0","'",cljs.core.subs.call(null,name,2));
} else
{if("\uFDD0'else")
{return cljs.core.str_STAR_.call(null,"\uFDD0","'",name);
} else
{return null;
}
}
}
});
var keyword__2 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case 1:
return keyword__1.call(this,ns);
case 2:
return keyword__2.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
keyword.cljs$lang$arity$1 = keyword__1;
keyword.cljs$lang$arity$2 = keyword__2;
return keyword;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$.call(null,((cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__6756 = cljs.core.seq.call(null,x);
var ys__6757 = cljs.core.seq.call(null,y);
while(true){
if((xs__6756 == null))
{return (ys__6757 == null);
} else
{if((ys__6757 == null))
{return false;
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__6756),cljs.core.first.call(null,ys__6757)))
{{
var G__6758 = cljs.core.next.call(null,xs__6756);
var G__6759 = cljs.core.next.call(null,ys__6757);
xs__6756 = G__6758;
ys__6757 = G__6759;
continue;
}
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
}
break;
}
})():null));
});
cljs.core.hash_combine = (function hash_combine(seed,hash){
return (seed ^ (((hash + 2654435769) + (seed << 6)) + (seed >> 2)));
});
cljs.core.hash_coll = (function hash_coll(coll){
return cljs.core.reduce.call(null,(function (p1__6760_SHARP_,p2__6761_SHARP_){
return cljs.core.hash_combine.call(null,p1__6760_SHARP_,cljs.core.hash.call(null,p2__6761_SHARP_,false));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll),false),cljs.core.next.call(null,coll));
});
void 0;
void 0;
cljs.core.hash_imap = (function hash_imap(m){
var h__6765 = 0;
var s__6766 = cljs.core.seq.call(null,m);
while(true){
if(s__6766)
{var e__6767 = cljs.core.first.call(null,s__6766);
{
var G__6768 = ((h__6765 + (cljs.core.hash.call(null,cljs.core.key.call(null,e__6767)) ^ cljs.core.hash.call(null,cljs.core.val.call(null,e__6767)))) % 4503599627370496);
var G__6769 = cljs.core.next.call(null,s__6766);
h__6765 = G__6768;
s__6766 = G__6769;
continue;
}
} else
{return h__6765;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){
var h__6773 = 0;
var s__6774 = cljs.core.seq.call(null,s);
while(true){
if(s__6774)
{var e__6775 = cljs.core.first.call(null,s__6774);
{
var G__6776 = ((h__6773 + cljs.core.hash.call(null,e__6775)) % 4503599627370496);
var G__6777 = cljs.core.next.call(null,s__6774);
h__6773 = G__6776;
s__6774 = G__6777;
continue;
}
} else
{return h__6773;
}
break;
}
});
void 0;
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__6798__6799 = cljs.core.seq.call(null,fn_map);
if(G__6798__6799)
{var G__6801__6803 = cljs.core.first.call(null,G__6798__6799);
var vec__6802__6804 = G__6801__6803;
var key_name__6805 = cljs.core.nth.call(null,vec__6802__6804,0,null);
var f__6806 = cljs.core.nth.call(null,vec__6802__6804,1,null);
var G__6798__6807 = G__6798__6799;
var G__6801__6808 = G__6801__6803;
var G__6798__6809 = G__6798__6807;
while(true){
var vec__6810__6811 = G__6801__6808;
var key_name__6812 = cljs.core.nth.call(null,vec__6810__6811,0,null);
var f__6813 = cljs.core.nth.call(null,vec__6810__6811,1,null);
var G__6798__6814 = G__6798__6809;
var str_name__6815 = cljs.core.name.call(null,key_name__6812);
(obj[str_name__6815] = f__6813);
var temp__3974__auto____6816 = cljs.core.next.call(null,G__6798__6814);
if(temp__3974__auto____6816)
{var G__6798__6817 = temp__3974__auto____6816;
{
var G__6818 = cljs.core.first.call(null,G__6798__6817);
var G__6819 = G__6798__6817;
G__6801__6808 = G__6818;
G__6798__6809 = G__6819;
continue;
}
} else
{}
break;
}
} else
{}
return obj;
});

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65413358;
})
cljs.core.List.cljs$lang$type = true;
cljs.core.List.cljs$lang$ctorPrSeq = (function (this__2290__auto__){
return cljs.core.list.call(null,"cljs.core/List");
});
cljs.core.List.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__6820 = this;
var h__2173__auto____6821 = this__6820.__hash;
if(!((h__2173__auto____6821 == null)))
{return h__2173__auto____6821;
} else
{var h__2173__auto____6822 = cljs.core.hash_coll.call(null,coll);
this__6820.__hash = h__2173__auto____6822;
return h__2173__auto____6822;
}
});
cljs.core.List.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__6823 = this;
if((this__6823.count === 1))
{return null;
} else
{return this__6823.rest;
}
});
cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__6824 = this;
return (new cljs.core.List(this__6824.meta,o,coll,(this__6824.count + 1),null));
});
cljs.core.List.prototype.toString = (function (){
var this__6825 = this;
var this__6826 = this;
return cljs.core.pr_str.call(null,this__6826);
});
cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__6827 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__6828 = this;
return this__6828.count;
});
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__6829 = this;
return this__6829.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__6830 = this;
return coll.cljs$core$ISeq$_rest$arity$1(coll);
});
cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__6831 = this;
return this__6831.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__6832 = this;
if((this__6832.count === 1))
{return cljs.core.List.EMPTY;
} else
{return this__6832.rest;
}
});
cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__6833 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__6834 = this;
return (new cljs.core.List(meta,this__6834.first,this__6834.rest,this__6834.count,this__6834.__hash));
});
cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__6835 = this;
return this__6835.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__6836 = this;
return cljs.core.List.EMPTY;
});
cljs.core.List;

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65413326;
})
cljs.core.EmptyList.cljs$lang$type = true;
cljs.core.EmptyList.cljs$lang$ctorPrSeq = (function (this__2290__auto__){
return cljs.core.list.call(null,"cljs.core/EmptyList");
});
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__6837 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__6838 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__6839 = this;
return (new cljs.core.List(this__6839.meta,o,null,1,null));
});
cljs.core.EmptyList.prototype.toString = (function (){
var this__6840 = this;
var this__6841 = this;
return cljs.core.pr_str.call(null,this__6841);
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__6842 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__6843 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__6844 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__6845 = this;
throw (new Error("Can't pop empty list"));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__6846 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__6847 = this;
return cljs.core.List.EMPTY;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__6848 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__6849 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__6850 = this;
return this__6850.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__6851 = this;
return coll;
});
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){
var G__6855__6856 = coll;
if(G__6855__6856)
{if((function (){var or__3824__auto____6857 = (G__6855__6856.cljs$lang$protocol_mask$partition0$ & 134217728);
if(or__3824__auto____6857)
{return or__3824__auto____6857;
} else
{return G__6855__6856.cljs$core$IReversible$;
}
})())
{return true;
} else
{if((!G__6855__6856.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__6855__6856);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__6855__6856);
}
});
cljs.core.rseq = (function rseq(coll){
return cljs.core._rseq.call(null,coll);
});
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
if(cljs.core.reversible_QMARK_.call(null,coll))
{return cljs.core.rseq.call(null,coll);
} else
{return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
}
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() {
var list = null;
var list__0 = (function (){
return cljs.core.List.EMPTY;
});
var list__1 = (function (x){
return cljs.core.conj.call(null,cljs.core.List.EMPTY,x);
});
var list__2 = (function (x,y){
return cljs.core.conj.call(null,list.call(null,y),x);
});
var list__3 = (function (x,y,z){
return cljs.core.conj.call(null,list.call(null,y,z),x);
});
var list__4 = (function() { 
var G__6858__delegate = function (x,y,z,items){
return cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items)),z),y),x);
};
var G__6858 = function (x,y,z,var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6858__delegate.call(this, x, y, z, items);
};
G__6858.cljs$lang$maxFixedArity = 3;
G__6858.cljs$lang$applyTo = (function (arglist__6859){
var x = cljs.core.first(arglist__6859);
var y = cljs.core.first(cljs.core.next(arglist__6859));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6859)));
var items = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6859)));
return G__6858__delegate(x, y, z, items);
});
G__6858.cljs$lang$arity$variadic = G__6858__delegate;
return G__6858;
})()
;
list = function(x,y,z,var_args){
var items = var_args;
switch(arguments.length){
case 0:
return list__0.call(this);
case 1:
return list__1.call(this,x);
case 2:
return list__2.call(this,x,y);
case 3:
return list__3.call(this,x,y,z);
default:
return list__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
list.cljs$lang$maxFixedArity = 3;
list.cljs$lang$applyTo = list__4.cljs$lang$applyTo;
list.cljs$lang$arity$0 = list__0;
list.cljs$lang$arity$1 = list__1;
list.cljs$lang$arity$2 = list__2;
list.cljs$lang$arity$3 = list__3;
list.cljs$lang$arity$variadic = list__4.cljs$lang$arity$variadic;
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65405164;
})
cljs.core.Cons.cljs$lang$type = true;
cljs.core.Cons.cljs$lang$ctorPrSeq = (function (this__2290__auto__){
return cljs.core.list.call(null,"cljs.core/Cons");
});
cljs.core.Cons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__6860 = this;
var h__2173__auto____6861 = this__6860.__hash;
if(!((h__2173__auto____6861 == null)))
{return h__2173__auto____6861;
} else
{var h__2173__auto____6862 = cljs.core.hash_coll.call(null,coll);
this__6860.__hash = h__2173__auto____6862;
return h__2173__auto____6862;
}
});
cljs.core.Cons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__6863 = this;
if((this__6863.rest == null))
{return null;
} else
{return cljs.core._seq.call(null,this__6863.rest);
}
});
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__6864 = this;
return (new cljs.core.Cons(null,o,coll,this__6864.__hash));
});
cljs.core.Cons.prototype.toString = (function (){
var this__6865 = this;
var this__6866 = this;
return cljs.core.pr_str.call(null,this__6866);
});
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__6867 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__6868 = this;
return this__6868.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__6869 = this;
if((this__6869.rest == null))
{return cljs.core.List.EMPTY;
} else
{return this__6869.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__6870 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__6871 = this;
return (new cljs.core.Cons(meta,this__6871.first,this__6871.rest,this__6871.__hash));
});
cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__6872 = this;
return this__6872.meta;
});
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__6873 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__6873.meta);
});
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){
if((function (){var or__3824__auto____6878 = (coll == null);
if(or__3824__auto____6878)
{return or__3824__auto____6878;
} else
{var G__6879__6880 = coll;
if(G__6879__6880)
{if((function (){var or__3824__auto____6881 = (G__6879__6880.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____6881)
{return or__3824__auto____6881;
} else
{return G__6879__6880.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__6879__6880.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__6879__6880);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__6879__6880);
}
}
})())
{return (new cljs.core.Cons(null,x,coll,null));
} else
{return (new cljs.core.Cons(null,x,cljs.core.seq.call(null,coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){
var G__6885__6886 = x;
if(G__6885__6886)
{if((function (){var or__3824__auto____6887 = (G__6885__6886.cljs$lang$protocol_mask$partition0$ & 33554432);
if(or__3824__auto____6887)
{return or__3824__auto____6887;
} else
{return G__6885__6886.cljs$core$IList$;
}
})())
{return true;
} else
{if((!G__6885__6886.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__6885__6886);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__6885__6886);
}
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__6888 = null;
var G__6888__2 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__6888__3 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__6888 = function(string,f,start){
switch(arguments.length){
case 2:
return G__6888__2.call(this,string,f);
case 3:
return G__6888__3.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6888;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__6889 = null;
var G__6889__2 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__6889__3 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__6889 = function(string,k,not_found){
switch(arguments.length){
case 2:
return G__6889__2.call(this,string,k);
case 3:
return G__6889__3.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6889;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__6890 = null;
var G__6890__2 = (function (string,n){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return null;
}
});
var G__6890__3 = (function (string,n,not_found){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return not_found;
}
});
G__6890 = function(string,n,not_found){
switch(arguments.length){
case 2:
return G__6890__2.call(this,string,n);
case 3:
return G__6890__3.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6890;
})()
);
(cljs.core.ICounted["string"] = true);
(cljs.core._count["string"] = (function (s){
return s.length;
}));
(cljs.core.ISeqable["string"] = true);
(cljs.core._seq["string"] = (function (string){
return cljs.core.prim_seq.call(null,string,0);
}));
(cljs.core.IHash["string"] = true);
(cljs.core._hash["string"] = (function (o){
return goog.string.hashCode(o);
}));

/**
* @constructor
*/
cljs.core.Keyword = (function (k){
this.k = k;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1;
})
cljs.core.Keyword.cljs$lang$type = true;
cljs.core.Keyword.cljs$lang$ctorPrSeq = (function (this__2290__auto__){
return cljs.core.list.call(null,"cljs.core/Keyword");
});
cljs.core.Keyword.prototype.call = (function (this_sym6893,coll){
var this__6894 = this;
var this_sym6893__6895 = this;
var ___6896 = this_sym6893__6895;
if((coll == null))
{return null;
} else
{var strobj__6897 = coll.strobj;
if((strobj__6897 == null))
{return cljs.core._lookup.call(null,coll,this__6894.k,null);
} else
{return (strobj__6897[this__6894.k]);
}
}
});
cljs.core.Keyword.prototype.apply = (function (this_sym6891,args6892){
var this__6898 = this;
return this_sym6891.call.apply(this_sym6891,[this_sym6891].concat(args6892.slice()));
});
cljs.core.Keyword;
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__6907 = null;
var G__6907__2 = (function (this_sym6901,coll){
var this_sym6901__6903 = this;
var this__6904 = this_sym6901__6903;
return cljs.core._lookup.call(null,coll,this__6904.toString(),null);
});
var G__6907__3 = (function (this_sym6902,coll,not_found){
var this_sym6902__6905 = this;
var this__6906 = this_sym6902__6905;
return cljs.core._lookup.call(null,coll,this__6906.toString(),not_found);
});
G__6907 = function(this_sym6902,coll,not_found){
switch(arguments.length){
case 2:
return G__6907__2.call(this,this_sym6902,coll);
case 3:
return G__6907__3.call(this,this_sym6902,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6907;
})()
;
String.prototype.apply = (function (this_sym6899,args6900){
return this_sym6899.call.apply(this_sym6899,[this_sym6899].concat(args6900.slice()));
});
String.prototype.apply = (function (s,args){
if((cljs.core.count.call(null,args) < 2))
{return cljs.core._lookup.call(null,(args[0]),s,null);
} else
{return cljs.core._lookup.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__6909 = lazy_seq.x;
if(lazy_seq.realized)
{return x__6909;
} else
{lazy_seq.x = x__6909.call(null);
lazy_seq.realized = true;
return lazy_seq.x;
}
});

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,realized,x,__hash){
this.meta = meta;
this.realized = realized;
this.x = x;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850700;
})
cljs.core.LazySeq.cljs$lang$type = true;
cljs.core.LazySeq.cljs$lang$ctorPrSeq = (function (this__2290__auto__){
return cljs.core.list.call(null,"cljs.core/LazySeq");
});
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__6910 = this;
var h__2173__auto____6911 = this__6910.__hash;
if(!((h__2173__auto____6911 == null)))
{return h__2173__auto____6911;
} else
{var h__2173__auto____6912 = cljs.core.hash_coll.call(null,coll);
this__6910.__hash = h__2173__auto____6912;
return h__2173__auto____6912;
}
});
cljs.core.LazySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__6913 = this;
return cljs.core._seq.call(null,coll.cljs$core$ISeq$_rest$arity$1(coll));
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__6914 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.toString = (function (){
var this__6915 = this;
var this__6916 = this;
return cljs.core.pr_str.call(null,this__6916);
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__6917 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__6918 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__6919 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__6920 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__6921 = this;
return (new cljs.core.LazySeq(meta,this__6921.realized,this__6921.x,this__6921.__hash));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__6922 = this;
return this__6922.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__6923 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__6923.meta);
});
cljs.core.LazySeq;
void 0;

/**
* @constructor
*/
cljs.core.ChunkBuffer = (function (buf,end){
this.buf = buf;
this.end = end;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2;
})
cljs.core.ChunkBuffer.cljs$lang$type = true;
cljs.core.ChunkBuffer.cljs$lang$ctorPrSeq = (function (this__2290__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkBuffer");
});
cljs.core.ChunkBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__6924 = this;
return this__6924.end;
});
cljs.core.ChunkBuffer.prototype.add = (function (o){
var this__6925 = this;
var ___6926 = this;
(this__6925.buf[this__6925.end] = o);
return this__6925.end = (this__6925.end + 1);
});
cljs.core.ChunkBuffer.prototype.chunk = (function (o){
var this__6927 = this;
var ___6928 = this;
var ret__6929 = (new cljs.core.ArrayChunk(this__6927.buf,0,this__6927.end));
this__6927.buf = null;
return ret__6929;
});
cljs.core.ChunkBuffer;
cljs.core.chunk_buffer = (function chunk_buffer(capacity){
return (new cljs.core.ChunkBuffer(cljs.core.make_array.call(null,capacity),0));
});

/**
* @constructor
*/
cljs.core.ArrayChunk = (function (arr,off,end){
this.arr = arr;
this.off = off;
this.end = end;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 524306;
})
cljs.core.ArrayChunk.cljs$lang$type = true;
cljs.core.ArrayChunk.cljs$lang$ctorPrSeq = (function (this__2290__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayChunk");
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__6930 = this;
return cljs.core.ci_reduce.call(null,coll,f,(this__6930.arr[this__6930.off]),(this__6930.off + 1));
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__6931 = this;
return cljs.core.ci_reduce.call(null,coll,f,start,this__6931.off);
});
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$ = true;
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = (function (coll){
var this__6932 = this;
if((this__6932.off === this__6932.end))
{throw (new Error("-drop-first of empty chunk"));
} else
{return (new cljs.core.ArrayChunk(this__6932.arr,(this__6932.off + 1),this__6932.end));
}
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,i){
var this__6933 = this;
return (this__6933.arr[(this__6933.off + i)]);
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,i,not_found){
var this__6934 = this;
if((function (){var and__3822__auto____6935 = (i >= 0);
if(and__3822__auto____6935)
{return (i < (this__6934.end - this__6934.off));
} else
{return and__3822__auto____6935;
}
})())
{return (this__6934.arr[(this__6934.off + i)]);
} else
{return not_found;
}
});
cljs.core.ArrayChunk.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__6936 = this;
return (this__6936.end - this__6936.off);
});
cljs.core.ArrayChunk;
cljs.core.array_chunk = (function() {
var array_chunk = null;
var array_chunk__1 = (function (arr){
return array_chunk.call(null,arr,0,arr.length);
});
var array_chunk__2 = (function (arr,off){
return array_chunk.call(null,arr,off,arr.length);
});
var array_chunk__3 = (function (arr,off,end){
return (new cljs.core.ArrayChunk(arr,off,end));
});
array_chunk = function(arr,off,end){
switch(arguments.length){
case 1:
return array_chunk__1.call(this,arr);
case 2:
return array_chunk__2.call(this,arr,off);
case 3:
return array_chunk__3.call(this,arr,off,end);
}
throw('Invalid arity: ' + arguments.length);
};
array_chunk.cljs$lang$arity$1 = array_chunk__1;
array_chunk.cljs$lang$arity$2 = array_chunk__2;
array_chunk.cljs$lang$arity$3 = array_chunk__3;
return array_chunk;
})()
;

/**
* @constructor
*/
cljs.core.ChunkedCons = (function (chunk,more,meta){
this.chunk = chunk;
this.more = more;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 27656296;
})
cljs.core.ChunkedCons.cljs$lang$type = true;
cljs.core.ChunkedCons.cljs$lang$ctorPrSeq = (function (this__2290__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkedCons");
});
cljs.core.ChunkedCons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,o){
var this__6937 = this;
return cljs.core.cons.call(null,o,this$);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__6938 = this;
return coll;
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__6939 = this;
return cljs.core._nth.call(null,this__6939.chunk,0);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__6940 = this;
if((cljs.core._count.call(null,this__6940.chunk) > 1))
{return (new cljs.core.ChunkedCons(cljs.core._drop_first.call(null,this__6940.chunk),this__6940.more,this__6940.meta));
} else
{if((this__6940.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__6940.more;
}
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__6941 = this;
if((this__6941.more == null))
{return null;
} else
{return this__6941.more;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__6942 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__6943 = this;
return (new cljs.core.ChunkedCons(this__6943.chunk,this__6943.more,m));
});
cljs.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__6944 = this;
return this__6944.meta;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__6945 = this;
return this__6945.chunk;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__6946 = this;
if((this__6946.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__6946.more;
}
});
cljs.core.ChunkedCons;
cljs.core.chunk_cons = (function chunk_cons(chunk,rest){
if((cljs.core._count.call(null,chunk) === 0))
{return rest;
} else
{return (new cljs.core.ChunkedCons(chunk,rest,null));
}
});
cljs.core.chunk_append = (function chunk_append(b,x){
return b.add(x);
});
cljs.core.chunk = (function chunk(b){
return b.chunk();
});
cljs.core.chunk_first = (function chunk_first(s){
return cljs.core._chunked_first.call(null,s);
});
cljs.core.chunk_rest = (function chunk_rest(s){
return cljs.core._chunked_rest.call(null,s);
});
cljs.core.chunk_next = (function chunk_next(s){
if((function (){var G__6950__6951 = s;
if(G__6950__6951)
{if(cljs.core.truth_((function (){var or__3824__auto____6952 = null;
if(cljs.core.truth_(or__3824__auto____6952))
{return or__3824__auto____6952;
} else
{return G__6950__6951.cljs$core$IChunkedNext$;
}
})()))
{return true;
} else
{if((!G__6950__6951.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__6950__6951);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__6950__6951);
}
})())
{return cljs.core._chunked_next.call(null,s);
} else
{return cljs.core.seq.call(null,cljs.core._chunked_rest.call(null,s));
}
});
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__6955 = [];
var s__6956 = s;
while(true){
if(cljs.core.seq.call(null,s__6956))
{ary__6955.push(cljs.core.first.call(null,s__6956));
{
var G__6957 = cljs.core.next.call(null,s__6956);
s__6956 = G__6957;
continue;
}
} else
{return ary__6955;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){
var ret__6961 = cljs.core.make_array.call(null,cljs.core.count.call(null,coll));
var i__6962 = 0;
var xs__6963 = cljs.core.seq.call(null,coll);
while(true){
if(xs__6963)
{(ret__6961[i__6962] = cljs.core.to_array.call(null,cljs.core.first.call(null,xs__6963)));
{
var G__6964 = (i__6962 + 1);
var G__6965 = cljs.core.next.call(null,xs__6963);
i__6962 = G__6964;
xs__6963 = G__6965;
continue;
}
} else
{}
break;
}
return ret__6961;
});
cljs.core.long_array = (function() {
var long_array = null;
var long_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_.call(null,size_or_seq))
{return long_array.call(null,size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_.call(null,size_or_seq))
{return cljs.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("long-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var long_array__2 = (function (size,init_val_or_seq){
var a__6973 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__6974 = cljs.core.seq.call(null,init_val_or_seq);
var i__6975 = 0;
var s__6976 = s__6974;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____6977 = s__6976;
if(and__3822__auto____6977)
{return (i__6975 < size);
} else
{return and__3822__auto____6977;
}
})()))
{(a__6973[i__6975] = cljs.core.first.call(null,s__6976));
{
var G__6980 = (i__6975 + 1);
var G__6981 = cljs.core.next.call(null,s__6976);
i__6975 = G__6980;
s__6976 = G__6981;
continue;
}
} else
{return a__6973;
}
break;
}
} else
{var n__2512__auto____6978 = size;
var i__6979 = 0;
while(true){
if((i__6979 < n__2512__auto____6978))
{(a__6973[i__6979] = init_val_or_seq);
{
var G__6982 = (i__6979 + 1);
i__6979 = G__6982;
continue;
}
} else
{}
break;
}
return a__6973;
}
});
long_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return long_array__1.call(this,size);
case 2:
return long_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
long_array.cljs$lang$arity$1 = long_array__1;
long_array.cljs$lang$arity$2 = long_array__2;
return long_array;
})()
;
cljs.core.double_array = (function() {
var double_array = null;
var double_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_.call(null,size_or_seq))
{return double_array.call(null,size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_.call(null,size_or_seq))
{return cljs.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("double-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var double_array__2 = (function (size,init_val_or_seq){
var a__6990 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__6991 = cljs.core.seq.call(null,init_val_or_seq);
var i__6992 = 0;
var s__6993 = s__6991;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____6994 = s__6993;
if(and__3822__auto____6994)
{return (i__6992 < size);
} else
{return and__3822__auto____6994;
}
})()))
{(a__6990[i__6992] = cljs.core.first.call(null,s__6993));
{
var G__6997 = (i__6992 + 1);
var G__6998 = cljs.core.next.call(null,s__6993);
i__6992 = G__6997;
s__6993 = G__6998;
continue;
}
} else
{return a__6990;
}
break;
}
} else
{var n__2512__auto____6995 = size;
var i__6996 = 0;
while(true){
if((i__6996 < n__2512__auto____6995))
{(a__6990[i__6996] = init_val_or_seq);
{
var G__6999 = (i__6996 + 1);
i__6996 = G__6999;
continue;
}
} else
{}
break;
}
return a__6990;
}
});
double_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return double_array__1.call(this,size);
case 2:
return double_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
double_array.cljs$lang$arity$1 = double_array__1;
double_array.cljs$lang$arity$2 = double_array__2;
return double_array;
})()
;
cljs.core.object_array = (function() {
var object_array = null;
var object_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_.call(null,size_or_seq))
{return object_array.call(null,size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_.call(null,size_or_seq))
{return cljs.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("object-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var object_array__2 = (function (size,init_val_or_seq){
var a__7007 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__7008 = cljs.core.seq.call(null,init_val_or_seq);
var i__7009 = 0;
var s__7010 = s__7008;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7011 = s__7010;
if(and__3822__auto____7011)
{return (i__7009 < size);
} else
{return and__3822__auto____7011;
}
})()))
{(a__7007[i__7009] = cljs.core.first.call(null,s__7010));
{
var G__7014 = (i__7009 + 1);
var G__7015 = cljs.core.next.call(null,s__7010);
i__7009 = G__7014;
s__7010 = G__7015;
continue;
}
} else
{return a__7007;
}
break;
}
} else
{var n__2512__auto____7012 = size;
var i__7013 = 0;
while(true){
if((i__7013 < n__2512__auto____7012))
{(a__7007[i__7013] = init_val_or_seq);
{
var G__7016 = (i__7013 + 1);
i__7013 = G__7016;
continue;
}
} else
{}
break;
}
return a__7007;
}
});
object_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return object_array__1.call(this,size);
case 2:
return object_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
object_array.cljs$lang$arity$1 = object_array__1;
object_array.cljs$lang$arity$2 = object_array__2;
return object_array;
})()
;
cljs.core.bounded_count = (function bounded_count(s,n){
if(cljs.core.counted_QMARK_.call(null,s))
{return cljs.core.count.call(null,s);
} else
{var s__7021 = s;
var i__7022 = n;
var sum__7023 = 0;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7024 = (i__7022 > 0);
if(and__3822__auto____7024)
{return cljs.core.seq.call(null,s__7021);
} else
{return and__3822__auto____7024;
}
})()))
{{
var G__7025 = cljs.core.next.call(null,s__7021);
var G__7026 = (i__7022 - 1);
var G__7027 = (sum__7023 + 1);
s__7021 = G__7025;
i__7022 = G__7026;
sum__7023 = G__7027;
continue;
}
} else
{return sum__7023;
}
break;
}
}
});
cljs.core.spread = (function spread(arglist){
if((arglist == null))
{return null;
} else
{if((cljs.core.next.call(null,arglist) == null))
{return cljs.core.seq.call(null,cljs.core.first.call(null,arglist));
} else
{if("\uFDD0'else")
{return cljs.core.cons.call(null,cljs.core.first.call(null,arglist),spread.call(null,cljs.core.next.call(null,arglist)));
} else
{return null;
}
}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__0 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
}),null));
});
var concat__1 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
}),null));
});
var concat__2 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__7032 = cljs.core.seq.call(null,x);
if(s__7032)
{if(cljs.core.chunked_seq_QMARK_.call(null,s__7032))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,s__7032),concat.call(null,cljs.core.chunk_rest.call(null,s__7032),y));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__7032),concat.call(null,cljs.core.rest.call(null,s__7032),y));
}
} else
{return y;
}
}),null));
});
var concat__3 = (function() { 
var G__7036__delegate = function (x,y,zs){
var cat__7035 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__7034 = cljs.core.seq.call(null,xys);
if(xys__7034)
{if(cljs.core.chunked_seq_QMARK_.call(null,xys__7034))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,xys__7034),cat.call(null,cljs.core.chunk_rest.call(null,xys__7034),zs));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__7034),cat.call(null,cljs.core.rest.call(null,xys__7034),zs));
}
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
}),null));
});
return cat__7035.call(null,concat.call(null,x,y),zs);
};
var G__7036 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7036__delegate.call(this, x, y, zs);
};
G__7036.cljs$lang$maxFixedArity = 2;
G__7036.cljs$lang$applyTo = (function (arglist__7037){
var x = cljs.core.first(arglist__7037);
var y = cljs.core.first(cljs.core.next(arglist__7037));
var zs = cljs.core.rest(cljs.core.next(arglist__7037));
return G__7036__delegate(x, y, zs);
});
G__7036.cljs$lang$arity$variadic = G__7036__delegate;
return G__7036;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return concat__0.call(this);
case 1:
return concat__1.call(this,x);
case 2:
return concat__2.call(this,x,y);
default:
return concat__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__3.cljs$lang$applyTo;
concat.cljs$lang$arity$0 = concat__0;
concat.cljs$lang$arity$1 = concat__1;
concat.cljs$lang$arity$2 = concat__2;
concat.cljs$lang$arity$variadic = concat__3.cljs$lang$arity$variadic;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___1 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___2 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___3 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___4 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___5 = (function() { 
var G__7038__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__7038 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__7038__delegate.call(this, a, b, c, d, more);
};
G__7038.cljs$lang$maxFixedArity = 4;
G__7038.cljs$lang$applyTo = (function (arglist__7039){
var a = cljs.core.first(arglist__7039);
var b = cljs.core.first(cljs.core.next(arglist__7039));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7039)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7039))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7039))));
return G__7038__delegate(a, b, c, d, more);
});
G__7038.cljs$lang$arity$variadic = G__7038__delegate;
return G__7038;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return list_STAR___1.call(this,a);
case 2:
return list_STAR___2.call(this,a,b);
case 3:
return list_STAR___3.call(this,a,b,c);
case 4:
return list_STAR___4.call(this,a,b,c,d);
default:
return list_STAR___5.cljs$lang$arity$variadic(a,b,c,d, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___5.cljs$lang$applyTo;
list_STAR_.cljs$lang$arity$1 = list_STAR___1;
list_STAR_.cljs$lang$arity$2 = list_STAR___2;
list_STAR_.cljs$lang$arity$3 = list_STAR___3;
list_STAR_.cljs$lang$arity$4 = list_STAR___4;
list_STAR_.cljs$lang$arity$variadic = list_STAR___5.cljs$lang$arity$variadic;
return list_STAR_;
})()
;
cljs.core.transient$ = (function transient$(coll){
return cljs.core._as_transient.call(null,coll);
});
cljs.core.persistent_BANG_ = (function persistent_BANG_(tcoll){
return cljs.core._persistent_BANG_.call(null,tcoll);
});
cljs.core.conj_BANG_ = (function conj_BANG_(tcoll,val){
return cljs.core._conj_BANG_.call(null,tcoll,val);
});
cljs.core.assoc_BANG_ = (function assoc_BANG_(tcoll,key,val){
return cljs.core._assoc_BANG_.call(null,tcoll,key,val);
});
cljs.core.dissoc_BANG_ = (function dissoc_BANG_(tcoll,key){
return cljs.core._dissoc_BANG_.call(null,tcoll,key);
});
cljs.core.pop_BANG_ = (function pop_BANG_(tcoll){
return cljs.core._pop_BANG_.call(null,tcoll);
});
cljs.core.disj_BANG_ = (function disj_BANG_(tcoll,val){
return cljs.core._disjoin_BANG_.call(null,tcoll,val);
});
void 0;cljs.core.apply_to = (function apply_to(f,argc,args){
var args__7081 = cljs.core.seq.call(null,args);
if((argc === 0))
{return f.call(null);
} else
{var a__7082 = cljs.core._first.call(null,args__7081);
var args__7083 = cljs.core._rest.call(null,args__7081);
if((argc === 1))
{if(f.cljs$lang$arity$1)
{return f.cljs$lang$arity$1(a__7082);
} else
{return f.call(null,a__7082);
}
} else
{var b__7084 = cljs.core._first.call(null,args__7083);
var args__7085 = cljs.core._rest.call(null,args__7083);
if((argc === 2))
{if(f.cljs$lang$arity$2)
{return f.cljs$lang$arity$2(a__7082,b__7084);
} else
{return f.call(null,a__7082,b__7084);
}
} else
{var c__7086 = cljs.core._first.call(null,args__7085);
var args__7087 = cljs.core._rest.call(null,args__7085);
if((argc === 3))
{if(f.cljs$lang$arity$3)
{return f.cljs$lang$arity$3(a__7082,b__7084,c__7086);
} else
{return f.call(null,a__7082,b__7084,c__7086);
}
} else
{var d__7088 = cljs.core._first.call(null,args__7087);
var args__7089 = cljs.core._rest.call(null,args__7087);
if((argc === 4))
{if(f.cljs$lang$arity$4)
{return f.cljs$lang$arity$4(a__7082,b__7084,c__7086,d__7088);
} else
{return f.call(null,a__7082,b__7084,c__7086,d__7088);
}
} else
{var e__7090 = cljs.core._first.call(null,args__7089);
var args__7091 = cljs.core._rest.call(null,args__7089);
if((argc === 5))
{if(f.cljs$lang$arity$5)
{return f.cljs$lang$arity$5(a__7082,b__7084,c__7086,d__7088,e__7090);
} else
{return f.call(null,a__7082,b__7084,c__7086,d__7088,e__7090);
}
} else
{var f__7092 = cljs.core._first.call(null,args__7091);
var args__7093 = cljs.core._rest.call(null,args__7091);
if((argc === 6))
{if(f__7092.cljs$lang$arity$6)
{return f__7092.cljs$lang$arity$6(a__7082,b__7084,c__7086,d__7088,e__7090,f__7092);
} else
{return f__7092.call(null,a__7082,b__7084,c__7086,d__7088,e__7090,f__7092);
}
} else
{var g__7094 = cljs.core._first.call(null,args__7093);
var args__7095 = cljs.core._rest.call(null,args__7093);
if((argc === 7))
{if(f__7092.cljs$lang$arity$7)
{return f__7092.cljs$lang$arity$7(a__7082,b__7084,c__7086,d__7088,e__7090,f__7092,g__7094);
} else
{return f__7092.call(null,a__7082,b__7084,c__7086,d__7088,e__7090,f__7092,g__7094);
}
} else
{var h__7096 = cljs.core._first.call(null,args__7095);
var args__7097 = cljs.core._rest.call(null,args__7095);
if((argc === 8))
{if(f__7092.cljs$lang$arity$8)
{return f__7092.cljs$lang$arity$8(a__7082,b__7084,c__7086,d__7088,e__7090,f__7092,g__7094,h__7096);
} else
{return f__7092.call(null,a__7082,b__7084,c__7086,d__7088,e__7090,f__7092,g__7094,h__7096);
}
} else
{var i__7098 = cljs.core._first.call(null,args__7097);
var args__7099 = cljs.core._rest.call(null,args__7097);
if((argc === 9))
{if(f__7092.cljs$lang$arity$9)
{return f__7092.cljs$lang$arity$9(a__7082,b__7084,c__7086,d__7088,e__7090,f__7092,g__7094,h__7096,i__7098);
} else
{return f__7092.call(null,a__7082,b__7084,c__7086,d__7088,e__7090,f__7092,g__7094,h__7096,i__7098);
}
} else
{var j__7100 = cljs.core._first.call(null,args__7099);
var args__7101 = cljs.core._rest.call(null,args__7099);
if((argc === 10))
{if(f__7092.cljs$lang$arity$10)
{return f__7092.cljs$lang$arity$10(a__7082,b__7084,c__7086,d__7088,e__7090,f__7092,g__7094,h__7096,i__7098,j__7100);
} else
{return f__7092.call(null,a__7082,b__7084,c__7086,d__7088,e__7090,f__7092,g__7094,h__7096,i__7098,j__7100);
}
} else
{var k__7102 = cljs.core._first.call(null,args__7101);
var args__7103 = cljs.core._rest.call(null,args__7101);
if((argc === 11))
{if(f__7092.cljs$lang$arity$11)
{return f__7092.cljs$lang$arity$11(a__7082,b__7084,c__7086,d__7088,e__7090,f__7092,g__7094,h__7096,i__7098,j__7100,k__7102);
} else
{return f__7092.call(null,a__7082,b__7084,c__7086,d__7088,e__7090,f__7092,g__7094,h__7096,i__7098,j__7100,k__7102);
}
} else
{var l__7104 = cljs.core._first.call(null,args__7103);
var args__7105 = cljs.core._rest.call(null,args__7103);
if((argc === 12))
{if(f__7092.cljs$lang$arity$12)
{return f__7092.cljs$lang$arity$12(a__7082,b__7084,c__7086,d__7088,e__7090,f__7092,g__7094,h__7096,i__7098,j__7100,k__7102,l__7104);
} else
{return f__7092.call(null,a__7082,b__7084,c__7086,d__7088,e__7090,f__7092,g__7094,h__7096,i__7098,j__7100,k__7102,l__7104);
}
} else
{var m__7106 = cljs.core._first.call(null,args__7105);
var args__7107 = cljs.core._rest.call(null,args__7105);
if((argc === 13))
{if(f__7092.cljs$lang$arity$13)
{return f__7092.cljs$lang$arity$13(a__7082,b__7084,c__7086,d__7088,e__7090,f__7092,g__7094,h__7096,i__7098,j__7100,k__7102,l__7104,m__7106);
} else
{return f__7092.call(null,a__7082,b__7084,c__7086,d__7088,e__7090,f__7092,g__7094,h__7096,i__7098,j__7100,k__7102,l__7104,m__7106);
}
} else
{var n__7108 = cljs.core._first.call(null,args__7107);
var args__7109 = cljs.core._rest.call(null,args__7107);
if((argc === 14))
{if(f__7092.cljs$lang$arity$14)
{return f__7092.cljs$lang$arity$14(a__7082,b__7084,c__7086,d__7088,e__7090,f__7092,g__7094,h__7096,i__7098,j__7100,k__7102,l__7104,m__7106,n__7108);
} else
{return f__7092.call(null,a__7082,b__7084,c__7086,d__7088,e__7090,f__7092,g__7094,h__7096,i__7098,j__7100,k__7102,l__7104,m__7106,n__7108);
}
} else
{var o__7110 = cljs.core._first.call(null,args__7109);
var args__7111 = cljs.core._rest.call(null,args__7109);
if((argc === 15))
{if(f__7092.cljs$lang$arity$15)
{return f__7092.cljs$lang$arity$15(a__7082,b__7084,c__7086,d__7088,e__7090,f__7092,g__7094,h__7096,i__7098,j__7100,k__7102,l__7104,m__7106,n__7108,o__7110);
} else
{return f__7092.call(null,a__7082,b__7084,c__7086,d__7088,e__7090,f__7092,g__7094,h__7096,i__7098,j__7100,k__7102,l__7104,m__7106,n__7108,o__7110);
}
} else
{var p__7112 = cljs.core._first.call(null,args__7111);
var args__7113 = cljs.core._rest.call(null,args__7111);
if((argc === 16))
{if(f__7092.cljs$lang$arity$16)
{return f__7092.cljs$lang$arity$16(a__7082,b__7084,c__7086,d__7088,e__7090,f__7092,g__7094,h__7096,i__7098,j__7100,k__7102,l__7104,m__7106,n__7108,o__7110,p__7112);
} else
{return f__7092.call(null,a__7082,b__7084,c__7086,d__7088,e__7090,f__7092,g__7094,h__7096,i__7098,j__7100,k__7102,l__7104,m__7106,n__7108,o__7110,p__7112);
}
} else
{var q__7114 = cljs.core._first.call(null,args__7113);
var args__7115 = cljs.core._rest.call(null,args__7113);
if((argc === 17))
{if(f__7092.cljs$lang$arity$17)
{return f__7092.cljs$lang$arity$17(a__7082,b__7084,c__7086,d__7088,e__7090,f__7092,g__7094,h__7096,i__7098,j__7100,k__7102,l__7104,m__7106,n__7108,o__7110,p__7112,q__7114);
} else
{return f__7092.call(null,a__7082,b__7084,c__7086,d__7088,e__7090,f__7092,g__7094,h__7096,i__7098,j__7100,k__7102,l__7104,m__7106,n__7108,o__7110,p__7112,q__7114);
}
} else
{var r__7116 = cljs.core._first.call(null,args__7115);
var args__7117 = cljs.core._rest.call(null,args__7115);
if((argc === 18))
{if(f__7092.cljs$lang$arity$18)
{return f__7092.cljs$lang$arity$18(a__7082,b__7084,c__7086,d__7088,e__7090,f__7092,g__7094,h__7096,i__7098,j__7100,k__7102,l__7104,m__7106,n__7108,o__7110,p__7112,q__7114,r__7116);
} else
{return f__7092.call(null,a__7082,b__7084,c__7086,d__7088,e__7090,f__7092,g__7094,h__7096,i__7098,j__7100,k__7102,l__7104,m__7106,n__7108,o__7110,p__7112,q__7114,r__7116);
}
} else
{var s__7118 = cljs.core._first.call(null,args__7117);
var args__7119 = cljs.core._rest.call(null,args__7117);
if((argc === 19))
{if(f__7092.cljs$lang$arity$19)
{return f__7092.cljs$lang$arity$19(a__7082,b__7084,c__7086,d__7088,e__7090,f__7092,g__7094,h__7096,i__7098,j__7100,k__7102,l__7104,m__7106,n__7108,o__7110,p__7112,q__7114,r__7116,s__7118);
} else
{return f__7092.call(null,a__7082,b__7084,c__7086,d__7088,e__7090,f__7092,g__7094,h__7096,i__7098,j__7100,k__7102,l__7104,m__7106,n__7108,o__7110,p__7112,q__7114,r__7116,s__7118);
}
} else
{var t__7120 = cljs.core._first.call(null,args__7119);
var args__7121 = cljs.core._rest.call(null,args__7119);
if((argc === 20))
{if(f__7092.cljs$lang$arity$20)
{return f__7092.cljs$lang$arity$20(a__7082,b__7084,c__7086,d__7088,e__7090,f__7092,g__7094,h__7096,i__7098,j__7100,k__7102,l__7104,m__7106,n__7108,o__7110,p__7112,q__7114,r__7116,s__7118,t__7120);
} else
{return f__7092.call(null,a__7082,b__7084,c__7086,d__7088,e__7090,f__7092,g__7094,h__7096,i__7098,j__7100,k__7102,l__7104,m__7106,n__7108,o__7110,p__7112,q__7114,r__7116,s__7118,t__7120);
}
} else
{throw (new Error("Only up to 20 arguments supported on functions"));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
void 0;/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__2 = (function (f,args){
var fixed_arity__7136 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7137 = cljs.core.bounded_count.call(null,args,(fixed_arity__7136 + 1));
if((bc__7137 <= fixed_arity__7136))
{return cljs.core.apply_to.call(null,f,bc__7137,args);
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3 = (function (f,x,args){
var arglist__7138 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__7139 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7140 = cljs.core.bounded_count.call(null,arglist__7138,(fixed_arity__7139 + 1));
if((bc__7140 <= fixed_arity__7139))
{return cljs.core.apply_to.call(null,f,bc__7140,arglist__7138);
} else
{return f.cljs$lang$applyTo(arglist__7138);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7138));
}
});
var apply__4 = (function (f,x,y,args){
var arglist__7141 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__7142 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7143 = cljs.core.bounded_count.call(null,arglist__7141,(fixed_arity__7142 + 1));
if((bc__7143 <= fixed_arity__7142))
{return cljs.core.apply_to.call(null,f,bc__7143,arglist__7141);
} else
{return f.cljs$lang$applyTo(arglist__7141);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7141));
}
});
var apply__5 = (function (f,x,y,z,args){
var arglist__7144 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__7145 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7146 = cljs.core.bounded_count.call(null,arglist__7144,(fixed_arity__7145 + 1));
if((bc__7146 <= fixed_arity__7145))
{return cljs.core.apply_to.call(null,f,bc__7146,arglist__7144);
} else
{return f.cljs$lang$applyTo(arglist__7144);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7144));
}
});
var apply__6 = (function() { 
var G__7150__delegate = function (f,a,b,c,d,args){
var arglist__7147 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__7148 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__7149 = cljs.core.bounded_count.call(null,arglist__7147,(fixed_arity__7148 + 1));
if((bc__7149 <= fixed_arity__7148))
{return cljs.core.apply_to.call(null,f,bc__7149,arglist__7147);
} else
{return f.cljs$lang$applyTo(arglist__7147);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__7147));
}
};
var G__7150 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__7150__delegate.call(this, f, a, b, c, d, args);
};
G__7150.cljs$lang$maxFixedArity = 5;
G__7150.cljs$lang$applyTo = (function (arglist__7151){
var f = cljs.core.first(arglist__7151);
var a = cljs.core.first(cljs.core.next(arglist__7151));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7151)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7151))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7151)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7151)))));
return G__7150__delegate(f, a, b, c, d, args);
});
G__7150.cljs$lang$arity$variadic = G__7150__delegate;
return G__7150;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return apply__2.call(this,f,a);
case 3:
return apply__3.call(this,f,a,b);
case 4:
return apply__4.call(this,f,a,b,c);
case 5:
return apply__5.call(this,f,a,b,c,d);
default:
return apply__6.cljs$lang$arity$variadic(f,a,b,c,d, cljs.core.array_seq(arguments, 5));
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__6.cljs$lang$applyTo;
apply.cljs$lang$arity$2 = apply__2;
apply.cljs$lang$arity$3 = apply__3;
apply.cljs$lang$arity$4 = apply__4;
apply.cljs$lang$arity$5 = apply__5;
apply.cljs$lang$arity$variadic = apply__6.cljs$lang$arity$variadic;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() { 
var vary_meta__delegate = function (obj,f,args){
return cljs.core.with_meta.call(null,obj,cljs.core.apply.call(null,f,cljs.core.meta.call(null,obj),args));
};
var vary_meta = function (obj,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return vary_meta__delegate.call(this, obj, f, args);
};
vary_meta.cljs$lang$maxFixedArity = 2;
vary_meta.cljs$lang$applyTo = (function (arglist__7152){
var obj = cljs.core.first(arglist__7152);
var f = cljs.core.first(cljs.core.next(arglist__7152));
var args = cljs.core.rest(cljs.core.next(arglist__7152));
return vary_meta__delegate(obj, f, args);
});
vary_meta.cljs$lang$arity$variadic = vary_meta__delegate;
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___1 = (function (x){
return false;
});
var not_EQ___2 = (function (x,y){
return !(cljs.core._EQ_.call(null,x,y));
});
var not_EQ___3 = (function() { 
var G__7153__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__7153 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7153__delegate.call(this, x, y, more);
};
G__7153.cljs$lang$maxFixedArity = 2;
G__7153.cljs$lang$applyTo = (function (arglist__7154){
var x = cljs.core.first(arglist__7154);
var y = cljs.core.first(cljs.core.next(arglist__7154));
var more = cljs.core.rest(cljs.core.next(arglist__7154));
return G__7153__delegate(x, y, more);
});
G__7153.cljs$lang$arity$variadic = G__7153__delegate;
return G__7153;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return not_EQ___1.call(this,x);
case 2:
return not_EQ___2.call(this,x,y);
default:
return not_EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___3.cljs$lang$applyTo;
not_EQ_.cljs$lang$arity$1 = not_EQ___1;
not_EQ_.cljs$lang$arity$2 = not_EQ___2;
not_EQ_.cljs$lang$arity$variadic = not_EQ___3.cljs$lang$arity$variadic;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.seq.call(null,coll))
{return coll;
} else
{return null;
}
});
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){
while(true){
if((cljs.core.seq.call(null,coll) == null))
{return true;
} else
{if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,coll))))
{{
var G__7155 = pred;
var G__7156 = cljs.core.next.call(null,coll);
pred = G__7155;
coll = G__7156;
continue;
}
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){
return !(cljs.core.every_QMARK_.call(null,pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.seq.call(null,coll))
{var or__3824__auto____7158 = pred.call(null,cljs.core.first.call(null,coll));
if(cljs.core.truth_(or__3824__auto____7158))
{return or__3824__auto____7158;
} else
{{
var G__7159 = pred;
var G__7160 = cljs.core.next.call(null,coll);
pred = G__7159;
coll = G__7160;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.some.call(null,pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if(cljs.core.integer_QMARK_.call(null,n))
{return ((n & 1) === 0);
} else
{throw (new Error([cljs.core.str("Argument must be an integer: "),cljs.core.str(n)].join('')));
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return !(cljs.core.even_QMARK_.call(null,n));
});
cljs.core.identity = (function identity(x){
return x;
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){
return (function() {
var G__7161 = null;
var G__7161__0 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__7161__1 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__7161__2 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__7161__3 = (function() { 
var G__7162__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__7162 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7162__delegate.call(this, x, y, zs);
};
G__7162.cljs$lang$maxFixedArity = 2;
G__7162.cljs$lang$applyTo = (function (arglist__7163){
var x = cljs.core.first(arglist__7163);
var y = cljs.core.first(cljs.core.next(arglist__7163));
var zs = cljs.core.rest(cljs.core.next(arglist__7163));
return G__7162__delegate(x, y, zs);
});
G__7162.cljs$lang$arity$variadic = G__7162__delegate;
return G__7162;
})()
;
G__7161 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__7161__0.call(this);
case 1:
return G__7161__1.call(this,x);
case 2:
return G__7161__2.call(this,x,y);
default:
return G__7161__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
G__7161.cljs$lang$maxFixedArity = 2;
G__7161.cljs$lang$applyTo = G__7161__3.cljs$lang$applyTo;
return G__7161;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__7164__delegate = function (args){
return x;
};
var G__7164 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7164__delegate.call(this, args);
};
G__7164.cljs$lang$maxFixedArity = 0;
G__7164.cljs$lang$applyTo = (function (arglist__7165){
var args = cljs.core.seq(arglist__7165);;
return G__7164__delegate(args);
});
G__7164.cljs$lang$arity$variadic = G__7164__delegate;
return G__7164;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__0 = (function (){
return cljs.core.identity;
});
var comp__1 = (function (f){
return f;
});
var comp__2 = (function (f,g){
return (function() {
var G__7172 = null;
var G__7172__0 = (function (){
return f.call(null,g.call(null));
});
var G__7172__1 = (function (x){
return f.call(null,g.call(null,x));
});
var G__7172__2 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__7172__3 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__7172__4 = (function() { 
var G__7173__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__7173 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7173__delegate.call(this, x, y, z, args);
};
G__7173.cljs$lang$maxFixedArity = 3;
G__7173.cljs$lang$applyTo = (function (arglist__7174){
var x = cljs.core.first(arglist__7174);
var y = cljs.core.first(cljs.core.next(arglist__7174));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7174)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7174)));
return G__7173__delegate(x, y, z, args);
});
G__7173.cljs$lang$arity$variadic = G__7173__delegate;
return G__7173;
})()
;
G__7172 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__7172__0.call(this);
case 1:
return G__7172__1.call(this,x);
case 2:
return G__7172__2.call(this,x,y);
case 3:
return G__7172__3.call(this,x,y,z);
default:
return G__7172__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7172.cljs$lang$maxFixedArity = 3;
G__7172.cljs$lang$applyTo = G__7172__4.cljs$lang$applyTo;
return G__7172;
})()
});
var comp__3 = (function (f,g,h){
return (function() {
var G__7175 = null;
var G__7175__0 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__7175__1 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__7175__2 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__7175__3 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__7175__4 = (function() { 
var G__7176__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__7176 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7176__delegate.call(this, x, y, z, args);
};
G__7176.cljs$lang$maxFixedArity = 3;
G__7176.cljs$lang$applyTo = (function (arglist__7177){
var x = cljs.core.first(arglist__7177);
var y = cljs.core.first(cljs.core.next(arglist__7177));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7177)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7177)));
return G__7176__delegate(x, y, z, args);
});
G__7176.cljs$lang$arity$variadic = G__7176__delegate;
return G__7176;
})()
;
G__7175 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__7175__0.call(this);
case 1:
return G__7175__1.call(this,x);
case 2:
return G__7175__2.call(this,x,y);
case 3:
return G__7175__3.call(this,x,y,z);
default:
return G__7175__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7175.cljs$lang$maxFixedArity = 3;
G__7175.cljs$lang$applyTo = G__7175__4.cljs$lang$applyTo;
return G__7175;
})()
});
var comp__4 = (function() { 
var G__7178__delegate = function (f1,f2,f3,fs){
var fs__7169 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));
return (function() { 
var G__7179__delegate = function (args){
var ret__7170 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__7169),args);
var fs__7171 = cljs.core.next.call(null,fs__7169);
while(true){
if(fs__7171)
{{
var G__7180 = cljs.core.first.call(null,fs__7171).call(null,ret__7170);
var G__7181 = cljs.core.next.call(null,fs__7171);
ret__7170 = G__7180;
fs__7171 = G__7181;
continue;
}
} else
{return ret__7170;
}
break;
}
};
var G__7179 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7179__delegate.call(this, args);
};
G__7179.cljs$lang$maxFixedArity = 0;
G__7179.cljs$lang$applyTo = (function (arglist__7182){
var args = cljs.core.seq(arglist__7182);;
return G__7179__delegate(args);
});
G__7179.cljs$lang$arity$variadic = G__7179__delegate;
return G__7179;
})()
;
};
var G__7178 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7178__delegate.call(this, f1, f2, f3, fs);
};
G__7178.cljs$lang$maxFixedArity = 3;
G__7178.cljs$lang$applyTo = (function (arglist__7183){
var f1 = cljs.core.first(arglist__7183);
var f2 = cljs.core.first(cljs.core.next(arglist__7183));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7183)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7183)));
return G__7178__delegate(f1, f2, f3, fs);
});
G__7178.cljs$lang$arity$variadic = G__7178__delegate;
return G__7178;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case 0:
return comp__0.call(this);
case 1:
return comp__1.call(this,f1);
case 2:
return comp__2.call(this,f1,f2);
case 3:
return comp__3.call(this,f1,f2,f3);
default:
return comp__4.cljs$lang$arity$variadic(f1,f2,f3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__4.cljs$lang$applyTo;
comp.cljs$lang$arity$0 = comp__0;
comp.cljs$lang$arity$1 = comp__1;
comp.cljs$lang$arity$2 = comp__2;
comp.cljs$lang$arity$3 = comp__3;
comp.cljs$lang$arity$variadic = comp__4.cljs$lang$arity$variadic;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__2 = (function (f,arg1){
return (function() { 
var G__7184__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__7184 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7184__delegate.call(this, args);
};
G__7184.cljs$lang$maxFixedArity = 0;
G__7184.cljs$lang$applyTo = (function (arglist__7185){
var args = cljs.core.seq(arglist__7185);;
return G__7184__delegate(args);
});
G__7184.cljs$lang$arity$variadic = G__7184__delegate;
return G__7184;
})()
;
});
var partial__3 = (function (f,arg1,arg2){
return (function() { 
var G__7186__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__7186 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7186__delegate.call(this, args);
};
G__7186.cljs$lang$maxFixedArity = 0;
G__7186.cljs$lang$applyTo = (function (arglist__7187){
var args = cljs.core.seq(arglist__7187);;
return G__7186__delegate(args);
});
G__7186.cljs$lang$arity$variadic = G__7186__delegate;
return G__7186;
})()
;
});
var partial__4 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__7188__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__7188 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7188__delegate.call(this, args);
};
G__7188.cljs$lang$maxFixedArity = 0;
G__7188.cljs$lang$applyTo = (function (arglist__7189){
var args = cljs.core.seq(arglist__7189);;
return G__7188__delegate(args);
});
G__7188.cljs$lang$arity$variadic = G__7188__delegate;
return G__7188;
})()
;
});
var partial__5 = (function() { 
var G__7190__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__7191__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__7191 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7191__delegate.call(this, args);
};
G__7191.cljs$lang$maxFixedArity = 0;
G__7191.cljs$lang$applyTo = (function (arglist__7192){
var args = cljs.core.seq(arglist__7192);;
return G__7191__delegate(args);
});
G__7191.cljs$lang$arity$variadic = G__7191__delegate;
return G__7191;
})()
;
};
var G__7190 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__7190__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__7190.cljs$lang$maxFixedArity = 4;
G__7190.cljs$lang$applyTo = (function (arglist__7193){
var f = cljs.core.first(arglist__7193);
var arg1 = cljs.core.first(cljs.core.next(arglist__7193));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7193)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7193))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7193))));
return G__7190__delegate(f, arg1, arg2, arg3, more);
});
G__7190.cljs$lang$arity$variadic = G__7190__delegate;
return G__7190;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return partial__2.call(this,f,arg1);
case 3:
return partial__3.call(this,f,arg1,arg2);
case 4:
return partial__4.call(this,f,arg1,arg2,arg3);
default:
return partial__5.cljs$lang$arity$variadic(f,arg1,arg2,arg3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__5.cljs$lang$applyTo;
partial.cljs$lang$arity$2 = partial__2;
partial.cljs$lang$arity$3 = partial__3;
partial.cljs$lang$arity$4 = partial__4;
partial.cljs$lang$arity$variadic = partial__5.cljs$lang$arity$variadic;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__2 = (function (f,x){
return (function() {
var G__7194 = null;
var G__7194__1 = (function (a){
return f.call(null,(((a == null))?x:a));
});
var G__7194__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),b);
});
var G__7194__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),b,c);
});
var G__7194__4 = (function() { 
var G__7195__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),b,c,ds);
};
var G__7195 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7195__delegate.call(this, a, b, c, ds);
};
G__7195.cljs$lang$maxFixedArity = 3;
G__7195.cljs$lang$applyTo = (function (arglist__7196){
var a = cljs.core.first(arglist__7196);
var b = cljs.core.first(cljs.core.next(arglist__7196));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7196)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7196)));
return G__7195__delegate(a, b, c, ds);
});
G__7195.cljs$lang$arity$variadic = G__7195__delegate;
return G__7195;
})()
;
G__7194 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__7194__1.call(this,a);
case 2:
return G__7194__2.call(this,a,b);
case 3:
return G__7194__3.call(this,a,b,c);
default:
return G__7194__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7194.cljs$lang$maxFixedArity = 3;
G__7194.cljs$lang$applyTo = G__7194__4.cljs$lang$applyTo;
return G__7194;
})()
});
var fnil__3 = (function (f,x,y){
return (function() {
var G__7197 = null;
var G__7197__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__7197__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),c);
});
var G__7197__4 = (function() { 
var G__7198__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__7198 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7198__delegate.call(this, a, b, c, ds);
};
G__7198.cljs$lang$maxFixedArity = 3;
G__7198.cljs$lang$applyTo = (function (arglist__7199){
var a = cljs.core.first(arglist__7199);
var b = cljs.core.first(cljs.core.next(arglist__7199));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7199)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7199)));
return G__7198__delegate(a, b, c, ds);
});
G__7198.cljs$lang$arity$variadic = G__7198__delegate;
return G__7198;
})()
;
G__7197 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__7197__2.call(this,a,b);
case 3:
return G__7197__3.call(this,a,b,c);
default:
return G__7197__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7197.cljs$lang$maxFixedArity = 3;
G__7197.cljs$lang$applyTo = G__7197__4.cljs$lang$applyTo;
return G__7197;
})()
});
var fnil__4 = (function (f,x,y,z){
return (function() {
var G__7200 = null;
var G__7200__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__7200__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c));
});
var G__7200__4 = (function() { 
var G__7201__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__7201 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7201__delegate.call(this, a, b, c, ds);
};
G__7201.cljs$lang$maxFixedArity = 3;
G__7201.cljs$lang$applyTo = (function (arglist__7202){
var a = cljs.core.first(arglist__7202);
var b = cljs.core.first(cljs.core.next(arglist__7202));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7202)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7202)));
return G__7201__delegate(a, b, c, ds);
});
G__7201.cljs$lang$arity$variadic = G__7201__delegate;
return G__7201;
})()
;
G__7200 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__7200__2.call(this,a,b);
case 3:
return G__7200__3.call(this,a,b,c);
default:
return G__7200__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__7200.cljs$lang$maxFixedArity = 3;
G__7200.cljs$lang$applyTo = G__7200__4.cljs$lang$applyTo;
return G__7200;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case 2:
return fnil__2.call(this,f,x);
case 3:
return fnil__3.call(this,f,x,y);
case 4:
return fnil__4.call(this,f,x,y,z);
}
throw('Invalid arity: ' + arguments.length);
};
fnil.cljs$lang$arity$2 = fnil__2;
fnil.cljs$lang$arity$3 = fnil__3;
fnil.cljs$lang$arity$4 = fnil__4;
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){
var mapi__7218 = (function mapi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7226 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____7226)
{var s__7227 = temp__3974__auto____7226;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7227))
{var c__7228 = cljs.core.chunk_first.call(null,s__7227);
var size__7229 = cljs.core.count.call(null,c__7228);
var b__7230 = cljs.core.chunk_buffer.call(null,size__7229);
var n__2512__auto____7231 = size__7229;
var i__7232 = 0;
while(true){
if((i__7232 < n__2512__auto____7231))
{cljs.core.chunk_append.call(null,b__7230,f.call(null,(idx + i__7232),cljs.core._nth.call(null,c__7228,i__7232)));
{
var G__7233 = (i__7232 + 1);
i__7232 = G__7233;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7230),mapi.call(null,(idx + size__7229),cljs.core.chunk_rest.call(null,s__7227)));
} else
{return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__7227)),mapi.call(null,(idx + 1),cljs.core.rest.call(null,s__7227)));
}
} else
{return null;
}
}),null));
});
return mapi__7218.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7243 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____7243)
{var s__7244 = temp__3974__auto____7243;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7244))
{var c__7245 = cljs.core.chunk_first.call(null,s__7244);
var size__7246 = cljs.core.count.call(null,c__7245);
var b__7247 = cljs.core.chunk_buffer.call(null,size__7246);
var n__2512__auto____7248 = size__7246;
var i__7249 = 0;
while(true){
if((i__7249 < n__2512__auto____7248))
{var x__7250 = f.call(null,cljs.core._nth.call(null,c__7245,i__7249));
if((x__7250 == null))
{} else
{cljs.core.chunk_append.call(null,b__7247,x__7250);
}
{
var G__7252 = (i__7249 + 1);
i__7249 = G__7252;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7247),keep.call(null,f,cljs.core.chunk_rest.call(null,s__7244)));
} else
{var x__7251 = f.call(null,cljs.core.first.call(null,s__7244));
if((x__7251 == null))
{return keep.call(null,f,cljs.core.rest.call(null,s__7244));
} else
{return cljs.core.cons.call(null,x__7251,keep.call(null,f,cljs.core.rest.call(null,s__7244)));
}
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep_indexed = (function keep_indexed(f,coll){
var keepi__7278 = (function keepi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7288 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____7288)
{var s__7289 = temp__3974__auto____7288;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7289))
{var c__7290 = cljs.core.chunk_first.call(null,s__7289);
var size__7291 = cljs.core.count.call(null,c__7290);
var b__7292 = cljs.core.chunk_buffer.call(null,size__7291);
var n__2512__auto____7293 = size__7291;
var i__7294 = 0;
while(true){
if((i__7294 < n__2512__auto____7293))
{var x__7295 = f.call(null,(idx + i__7294),cljs.core._nth.call(null,c__7290,i__7294));
if((x__7295 == null))
{} else
{cljs.core.chunk_append.call(null,b__7292,x__7295);
}
{
var G__7297 = (i__7294 + 1);
i__7294 = G__7297;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7292),keepi.call(null,(idx + size__7291),cljs.core.chunk_rest.call(null,s__7289)));
} else
{var x__7296 = f.call(null,idx,cljs.core.first.call(null,s__7289));
if((x__7296 == null))
{return keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__7289));
} else
{return cljs.core.cons.call(null,x__7296,keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__7289)));
}
}
} else
{return null;
}
}),null));
});
return keepi__7278.call(null,0,coll);
});
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__1 = (function (p){
return (function() {
var ep1 = null;
var ep1__0 = (function (){
return true;
});
var ep1__1 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7383 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____7383))
{return p.call(null,y);
} else
{return and__3822__auto____7383;
}
})());
});
var ep1__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7384 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____7384))
{var and__3822__auto____7385 = p.call(null,y);
if(cljs.core.truth_(and__3822__auto____7385))
{return p.call(null,z);
} else
{return and__3822__auto____7385;
}
} else
{return and__3822__auto____7384;
}
})());
});
var ep1__4 = (function() { 
var G__7454__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7386 = ep1.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____7386))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3822__auto____7386;
}
})());
};
var G__7454 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7454__delegate.call(this, x, y, z, args);
};
G__7454.cljs$lang$maxFixedArity = 3;
G__7454.cljs$lang$applyTo = (function (arglist__7455){
var x = cljs.core.first(arglist__7455);
var y = cljs.core.first(cljs.core.next(arglist__7455));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7455)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7455)));
return G__7454__delegate(x, y, z, args);
});
G__7454.cljs$lang$arity$variadic = G__7454__delegate;
return G__7454;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep1__0.call(this);
case 1:
return ep1__1.call(this,x);
case 2:
return ep1__2.call(this,x,y);
case 3:
return ep1__3.call(this,x,y,z);
default:
return ep1__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__4.cljs$lang$applyTo;
ep1.cljs$lang$arity$0 = ep1__0;
ep1.cljs$lang$arity$1 = ep1__1;
ep1.cljs$lang$arity$2 = ep1__2;
ep1.cljs$lang$arity$3 = ep1__3;
ep1.cljs$lang$arity$variadic = ep1__4.cljs$lang$arity$variadic;
return ep1;
})()
});
var every_pred__2 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__0 = (function (){
return true;
});
var ep2__1 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7398 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____7398))
{return p2.call(null,x);
} else
{return and__3822__auto____7398;
}
})());
});
var ep2__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7399 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____7399))
{var and__3822__auto____7400 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____7400))
{var and__3822__auto____7401 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____7401))
{return p2.call(null,y);
} else
{return and__3822__auto____7401;
}
} else
{return and__3822__auto____7400;
}
} else
{return and__3822__auto____7399;
}
})());
});
var ep2__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7402 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____7402))
{var and__3822__auto____7403 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____7403))
{var and__3822__auto____7404 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____7404))
{var and__3822__auto____7405 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____7405))
{var and__3822__auto____7406 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____7406))
{return p2.call(null,z);
} else
{return and__3822__auto____7406;
}
} else
{return and__3822__auto____7405;
}
} else
{return and__3822__auto____7404;
}
} else
{return and__3822__auto____7403;
}
} else
{return and__3822__auto____7402;
}
})());
});
var ep2__4 = (function() { 
var G__7456__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7407 = ep2.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____7407))
{return cljs.core.every_QMARK_.call(null,(function (p1__7253_SHARP_){
var and__3822__auto____7408 = p1.call(null,p1__7253_SHARP_);
if(cljs.core.truth_(and__3822__auto____7408))
{return p2.call(null,p1__7253_SHARP_);
} else
{return and__3822__auto____7408;
}
}),args);
} else
{return and__3822__auto____7407;
}
})());
};
var G__7456 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7456__delegate.call(this, x, y, z, args);
};
G__7456.cljs$lang$maxFixedArity = 3;
G__7456.cljs$lang$applyTo = (function (arglist__7457){
var x = cljs.core.first(arglist__7457);
var y = cljs.core.first(cljs.core.next(arglist__7457));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7457)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7457)));
return G__7456__delegate(x, y, z, args);
});
G__7456.cljs$lang$arity$variadic = G__7456__delegate;
return G__7456;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep2__0.call(this);
case 1:
return ep2__1.call(this,x);
case 2:
return ep2__2.call(this,x,y);
case 3:
return ep2__3.call(this,x,y,z);
default:
return ep2__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__4.cljs$lang$applyTo;
ep2.cljs$lang$arity$0 = ep2__0;
ep2.cljs$lang$arity$1 = ep2__1;
ep2.cljs$lang$arity$2 = ep2__2;
ep2.cljs$lang$arity$3 = ep2__3;
ep2.cljs$lang$arity$variadic = ep2__4.cljs$lang$arity$variadic;
return ep2;
})()
});
var every_pred__3 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__0 = (function (){
return true;
});
var ep3__1 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7427 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____7427))
{var and__3822__auto____7428 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____7428))
{return p3.call(null,x);
} else
{return and__3822__auto____7428;
}
} else
{return and__3822__auto____7427;
}
})());
});
var ep3__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7429 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____7429))
{var and__3822__auto____7430 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____7430))
{var and__3822__auto____7431 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____7431))
{var and__3822__auto____7432 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____7432))
{var and__3822__auto____7433 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____7433))
{return p3.call(null,y);
} else
{return and__3822__auto____7433;
}
} else
{return and__3822__auto____7432;
}
} else
{return and__3822__auto____7431;
}
} else
{return and__3822__auto____7430;
}
} else
{return and__3822__auto____7429;
}
})());
});
var ep3__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7434 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____7434))
{var and__3822__auto____7435 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____7435))
{var and__3822__auto____7436 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____7436))
{var and__3822__auto____7437 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____7437))
{var and__3822__auto____7438 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____7438))
{var and__3822__auto____7439 = p3.call(null,y);
if(cljs.core.truth_(and__3822__auto____7439))
{var and__3822__auto____7440 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____7440))
{var and__3822__auto____7441 = p2.call(null,z);
if(cljs.core.truth_(and__3822__auto____7441))
{return p3.call(null,z);
} else
{return and__3822__auto____7441;
}
} else
{return and__3822__auto____7440;
}
} else
{return and__3822__auto____7439;
}
} else
{return and__3822__auto____7438;
}
} else
{return and__3822__auto____7437;
}
} else
{return and__3822__auto____7436;
}
} else
{return and__3822__auto____7435;
}
} else
{return and__3822__auto____7434;
}
})());
});
var ep3__4 = (function() { 
var G__7458__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7442 = ep3.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____7442))
{return cljs.core.every_QMARK_.call(null,(function (p1__7254_SHARP_){
var and__3822__auto____7443 = p1.call(null,p1__7254_SHARP_);
if(cljs.core.truth_(and__3822__auto____7443))
{var and__3822__auto____7444 = p2.call(null,p1__7254_SHARP_);
if(cljs.core.truth_(and__3822__auto____7444))
{return p3.call(null,p1__7254_SHARP_);
} else
{return and__3822__auto____7444;
}
} else
{return and__3822__auto____7443;
}
}),args);
} else
{return and__3822__auto____7442;
}
})());
};
var G__7458 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7458__delegate.call(this, x, y, z, args);
};
G__7458.cljs$lang$maxFixedArity = 3;
G__7458.cljs$lang$applyTo = (function (arglist__7459){
var x = cljs.core.first(arglist__7459);
var y = cljs.core.first(cljs.core.next(arglist__7459));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7459)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7459)));
return G__7458__delegate(x, y, z, args);
});
G__7458.cljs$lang$arity$variadic = G__7458__delegate;
return G__7458;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep3__0.call(this);
case 1:
return ep3__1.call(this,x);
case 2:
return ep3__2.call(this,x,y);
case 3:
return ep3__3.call(this,x,y,z);
default:
return ep3__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__4.cljs$lang$applyTo;
ep3.cljs$lang$arity$0 = ep3__0;
ep3.cljs$lang$arity$1 = ep3__1;
ep3.cljs$lang$arity$2 = ep3__2;
ep3.cljs$lang$arity$3 = ep3__3;
ep3.cljs$lang$arity$variadic = ep3__4.cljs$lang$arity$variadic;
return ep3;
})()
});
var every_pred__4 = (function() { 
var G__7460__delegate = function (p1,p2,p3,ps){
var ps__7445 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var epn = null;
var epn__0 = (function (){
return true;
});
var epn__1 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__7255_SHARP_){
return p1__7255_SHARP_.call(null,x);
}),ps__7445);
});
var epn__2 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__7256_SHARP_){
var and__3822__auto____7450 = p1__7256_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____7450))
{return p1__7256_SHARP_.call(null,y);
} else
{return and__3822__auto____7450;
}
}),ps__7445);
});
var epn__3 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__7257_SHARP_){
var and__3822__auto____7451 = p1__7257_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____7451))
{var and__3822__auto____7452 = p1__7257_SHARP_.call(null,y);
if(cljs.core.truth_(and__3822__auto____7452))
{return p1__7257_SHARP_.call(null,z);
} else
{return and__3822__auto____7452;
}
} else
{return and__3822__auto____7451;
}
}),ps__7445);
});
var epn__4 = (function() { 
var G__7461__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____7453 = epn.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____7453))
{return cljs.core.every_QMARK_.call(null,(function (p1__7258_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__7258_SHARP_,args);
}),ps__7445);
} else
{return and__3822__auto____7453;
}
})());
};
var G__7461 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7461__delegate.call(this, x, y, z, args);
};
G__7461.cljs$lang$maxFixedArity = 3;
G__7461.cljs$lang$applyTo = (function (arglist__7462){
var x = cljs.core.first(arglist__7462);
var y = cljs.core.first(cljs.core.next(arglist__7462));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7462)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7462)));
return G__7461__delegate(x, y, z, args);
});
G__7461.cljs$lang$arity$variadic = G__7461__delegate;
return G__7461;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return epn__0.call(this);
case 1:
return epn__1.call(this,x);
case 2:
return epn__2.call(this,x,y);
case 3:
return epn__3.call(this,x,y,z);
default:
return epn__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__4.cljs$lang$applyTo;
epn.cljs$lang$arity$0 = epn__0;
epn.cljs$lang$arity$1 = epn__1;
epn.cljs$lang$arity$2 = epn__2;
epn.cljs$lang$arity$3 = epn__3;
epn.cljs$lang$arity$variadic = epn__4.cljs$lang$arity$variadic;
return epn;
})()
};
var G__7460 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7460__delegate.call(this, p1, p2, p3, ps);
};
G__7460.cljs$lang$maxFixedArity = 3;
G__7460.cljs$lang$applyTo = (function (arglist__7463){
var p1 = cljs.core.first(arglist__7463);
var p2 = cljs.core.first(cljs.core.next(arglist__7463));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7463)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7463)));
return G__7460__delegate(p1, p2, p3, ps);
});
G__7460.cljs$lang$arity$variadic = G__7460__delegate;
return G__7460;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return every_pred__1.call(this,p1);
case 2:
return every_pred__2.call(this,p1,p2);
case 3:
return every_pred__3.call(this,p1,p2,p3);
default:
return every_pred__4.cljs$lang$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__4.cljs$lang$applyTo;
every_pred.cljs$lang$arity$1 = every_pred__1;
every_pred.cljs$lang$arity$2 = every_pred__2;
every_pred.cljs$lang$arity$3 = every_pred__3;
every_pred.cljs$lang$arity$variadic = every_pred__4.cljs$lang$arity$variadic;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__1 = (function (p){
return (function() {
var sp1 = null;
var sp1__0 = (function (){
return null;
});
var sp1__1 = (function (x){
return p.call(null,x);
});
var sp1__2 = (function (x,y){
var or__3824__auto____7544 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____7544))
{return or__3824__auto____7544;
} else
{return p.call(null,y);
}
});
var sp1__3 = (function (x,y,z){
var or__3824__auto____7545 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____7545))
{return or__3824__auto____7545;
} else
{var or__3824__auto____7546 = p.call(null,y);
if(cljs.core.truth_(or__3824__auto____7546))
{return or__3824__auto____7546;
} else
{return p.call(null,z);
}
}
});
var sp1__4 = (function() { 
var G__7615__delegate = function (x,y,z,args){
var or__3824__auto____7547 = sp1.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____7547))
{return or__3824__auto____7547;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__7615 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7615__delegate.call(this, x, y, z, args);
};
G__7615.cljs$lang$maxFixedArity = 3;
G__7615.cljs$lang$applyTo = (function (arglist__7616){
var x = cljs.core.first(arglist__7616);
var y = cljs.core.first(cljs.core.next(arglist__7616));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7616)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7616)));
return G__7615__delegate(x, y, z, args);
});
G__7615.cljs$lang$arity$variadic = G__7615__delegate;
return G__7615;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp1__0.call(this);
case 1:
return sp1__1.call(this,x);
case 2:
return sp1__2.call(this,x,y);
case 3:
return sp1__3.call(this,x,y,z);
default:
return sp1__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__4.cljs$lang$applyTo;
sp1.cljs$lang$arity$0 = sp1__0;
sp1.cljs$lang$arity$1 = sp1__1;
sp1.cljs$lang$arity$2 = sp1__2;
sp1.cljs$lang$arity$3 = sp1__3;
sp1.cljs$lang$arity$variadic = sp1__4.cljs$lang$arity$variadic;
return sp1;
})()
});
var some_fn__2 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__0 = (function (){
return null;
});
var sp2__1 = (function (x){
var or__3824__auto____7559 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____7559))
{return or__3824__auto____7559;
} else
{return p2.call(null,x);
}
});
var sp2__2 = (function (x,y){
var or__3824__auto____7560 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____7560))
{return or__3824__auto____7560;
} else
{var or__3824__auto____7561 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____7561))
{return or__3824__auto____7561;
} else
{var or__3824__auto____7562 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____7562))
{return or__3824__auto____7562;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3 = (function (x,y,z){
var or__3824__auto____7563 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____7563))
{return or__3824__auto____7563;
} else
{var or__3824__auto____7564 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____7564))
{return or__3824__auto____7564;
} else
{var or__3824__auto____7565 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____7565))
{return or__3824__auto____7565;
} else
{var or__3824__auto____7566 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____7566))
{return or__3824__auto____7566;
} else
{var or__3824__auto____7567 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____7567))
{return or__3824__auto____7567;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__7617__delegate = function (x,y,z,args){
var or__3824__auto____7568 = sp2.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____7568))
{return or__3824__auto____7568;
} else
{return cljs.core.some.call(null,(function (p1__7298_SHARP_){
var or__3824__auto____7569 = p1.call(null,p1__7298_SHARP_);
if(cljs.core.truth_(or__3824__auto____7569))
{return or__3824__auto____7569;
} else
{return p2.call(null,p1__7298_SHARP_);
}
}),args);
}
};
var G__7617 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7617__delegate.call(this, x, y, z, args);
};
G__7617.cljs$lang$maxFixedArity = 3;
G__7617.cljs$lang$applyTo = (function (arglist__7618){
var x = cljs.core.first(arglist__7618);
var y = cljs.core.first(cljs.core.next(arglist__7618));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7618)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7618)));
return G__7617__delegate(x, y, z, args);
});
G__7617.cljs$lang$arity$variadic = G__7617__delegate;
return G__7617;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp2__0.call(this);
case 1:
return sp2__1.call(this,x);
case 2:
return sp2__2.call(this,x,y);
case 3:
return sp2__3.call(this,x,y,z);
default:
return sp2__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__4.cljs$lang$applyTo;
sp2.cljs$lang$arity$0 = sp2__0;
sp2.cljs$lang$arity$1 = sp2__1;
sp2.cljs$lang$arity$2 = sp2__2;
sp2.cljs$lang$arity$3 = sp2__3;
sp2.cljs$lang$arity$variadic = sp2__4.cljs$lang$arity$variadic;
return sp2;
})()
});
var some_fn__3 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__0 = (function (){
return null;
});
var sp3__1 = (function (x){
var or__3824__auto____7588 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____7588))
{return or__3824__auto____7588;
} else
{var or__3824__auto____7589 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____7589))
{return or__3824__auto____7589;
} else
{return p3.call(null,x);
}
}
});
var sp3__2 = (function (x,y){
var or__3824__auto____7590 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____7590))
{return or__3824__auto____7590;
} else
{var or__3824__auto____7591 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____7591))
{return or__3824__auto____7591;
} else
{var or__3824__auto____7592 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____7592))
{return or__3824__auto____7592;
} else
{var or__3824__auto____7593 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____7593))
{return or__3824__auto____7593;
} else
{var or__3824__auto____7594 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____7594))
{return or__3824__auto____7594;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){
var or__3824__auto____7595 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____7595))
{return or__3824__auto____7595;
} else
{var or__3824__auto____7596 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____7596))
{return or__3824__auto____7596;
} else
{var or__3824__auto____7597 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____7597))
{return or__3824__auto____7597;
} else
{var or__3824__auto____7598 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____7598))
{return or__3824__auto____7598;
} else
{var or__3824__auto____7599 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____7599))
{return or__3824__auto____7599;
} else
{var or__3824__auto____7600 = p3.call(null,y);
if(cljs.core.truth_(or__3824__auto____7600))
{return or__3824__auto____7600;
} else
{var or__3824__auto____7601 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____7601))
{return or__3824__auto____7601;
} else
{var or__3824__auto____7602 = p2.call(null,z);
if(cljs.core.truth_(or__3824__auto____7602))
{return or__3824__auto____7602;
} else
{return p3.call(null,z);
}
}
}
}
}
}
}
}
});
var sp3__4 = (function() { 
var G__7619__delegate = function (x,y,z,args){
var or__3824__auto____7603 = sp3.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____7603))
{return or__3824__auto____7603;
} else
{return cljs.core.some.call(null,(function (p1__7299_SHARP_){
var or__3824__auto____7604 = p1.call(null,p1__7299_SHARP_);
if(cljs.core.truth_(or__3824__auto____7604))
{return or__3824__auto____7604;
} else
{var or__3824__auto____7605 = p2.call(null,p1__7299_SHARP_);
if(cljs.core.truth_(or__3824__auto____7605))
{return or__3824__auto____7605;
} else
{return p3.call(null,p1__7299_SHARP_);
}
}
}),args);
}
};
var G__7619 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7619__delegate.call(this, x, y, z, args);
};
G__7619.cljs$lang$maxFixedArity = 3;
G__7619.cljs$lang$applyTo = (function (arglist__7620){
var x = cljs.core.first(arglist__7620);
var y = cljs.core.first(cljs.core.next(arglist__7620));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7620)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7620)));
return G__7619__delegate(x, y, z, args);
});
G__7619.cljs$lang$arity$variadic = G__7619__delegate;
return G__7619;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp3__0.call(this);
case 1:
return sp3__1.call(this,x);
case 2:
return sp3__2.call(this,x,y);
case 3:
return sp3__3.call(this,x,y,z);
default:
return sp3__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__4.cljs$lang$applyTo;
sp3.cljs$lang$arity$0 = sp3__0;
sp3.cljs$lang$arity$1 = sp3__1;
sp3.cljs$lang$arity$2 = sp3__2;
sp3.cljs$lang$arity$3 = sp3__3;
sp3.cljs$lang$arity$variadic = sp3__4.cljs$lang$arity$variadic;
return sp3;
})()
});
var some_fn__4 = (function() { 
var G__7621__delegate = function (p1,p2,p3,ps){
var ps__7606 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var spn = null;
var spn__0 = (function (){
return null;
});
var spn__1 = (function (x){
return cljs.core.some.call(null,(function (p1__7300_SHARP_){
return p1__7300_SHARP_.call(null,x);
}),ps__7606);
});
var spn__2 = (function (x,y){
return cljs.core.some.call(null,(function (p1__7301_SHARP_){
var or__3824__auto____7611 = p1__7301_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____7611))
{return or__3824__auto____7611;
} else
{return p1__7301_SHARP_.call(null,y);
}
}),ps__7606);
});
var spn__3 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__7302_SHARP_){
var or__3824__auto____7612 = p1__7302_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____7612))
{return or__3824__auto____7612;
} else
{var or__3824__auto____7613 = p1__7302_SHARP_.call(null,y);
if(cljs.core.truth_(or__3824__auto____7613))
{return or__3824__auto____7613;
} else
{return p1__7302_SHARP_.call(null,z);
}
}
}),ps__7606);
});
var spn__4 = (function() { 
var G__7622__delegate = function (x,y,z,args){
var or__3824__auto____7614 = spn.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____7614))
{return or__3824__auto____7614;
} else
{return cljs.core.some.call(null,(function (p1__7303_SHARP_){
return cljs.core.some.call(null,p1__7303_SHARP_,args);
}),ps__7606);
}
};
var G__7622 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7622__delegate.call(this, x, y, z, args);
};
G__7622.cljs$lang$maxFixedArity = 3;
G__7622.cljs$lang$applyTo = (function (arglist__7623){
var x = cljs.core.first(arglist__7623);
var y = cljs.core.first(cljs.core.next(arglist__7623));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7623)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7623)));
return G__7622__delegate(x, y, z, args);
});
G__7622.cljs$lang$arity$variadic = G__7622__delegate;
return G__7622;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return spn__0.call(this);
case 1:
return spn__1.call(this,x);
case 2:
return spn__2.call(this,x,y);
case 3:
return spn__3.call(this,x,y,z);
default:
return spn__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__4.cljs$lang$applyTo;
spn.cljs$lang$arity$0 = spn__0;
spn.cljs$lang$arity$1 = spn__1;
spn.cljs$lang$arity$2 = spn__2;
spn.cljs$lang$arity$3 = spn__3;
spn.cljs$lang$arity$variadic = spn__4.cljs$lang$arity$variadic;
return spn;
})()
};
var G__7621 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7621__delegate.call(this, p1, p2, p3, ps);
};
G__7621.cljs$lang$maxFixedArity = 3;
G__7621.cljs$lang$applyTo = (function (arglist__7624){
var p1 = cljs.core.first(arglist__7624);
var p2 = cljs.core.first(cljs.core.next(arglist__7624));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7624)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7624)));
return G__7621__delegate(p1, p2, p3, ps);
});
G__7621.cljs$lang$arity$variadic = G__7621__delegate;
return G__7621;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return some_fn__1.call(this,p1);
case 2:
return some_fn__2.call(this,p1,p2);
case 3:
return some_fn__3.call(this,p1,p2,p3);
default:
return some_fn__4.cljs$lang$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__4.cljs$lang$applyTo;
some_fn.cljs$lang$arity$1 = some_fn__1;
some_fn.cljs$lang$arity$2 = some_fn__2;
some_fn.cljs$lang$arity$3 = some_fn__3;
some_fn.cljs$lang$arity$variadic = some_fn__4.cljs$lang$arity$variadic;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7643 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____7643)
{var s__7644 = temp__3974__auto____7643;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7644))
{var c__7645 = cljs.core.chunk_first.call(null,s__7644);
var size__7646 = cljs.core.count.call(null,c__7645);
var b__7647 = cljs.core.chunk_buffer.call(null,size__7646);
var n__2512__auto____7648 = size__7646;
var i__7649 = 0;
while(true){
if((i__7649 < n__2512__auto____7648))
{cljs.core.chunk_append.call(null,b__7647,f.call(null,cljs.core._nth.call(null,c__7645,i__7649)));
{
var G__7661 = (i__7649 + 1);
i__7649 = G__7661;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7647),map.call(null,f,cljs.core.chunk_rest.call(null,s__7644)));
} else
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__7644)),map.call(null,f,cljs.core.rest.call(null,s__7644)));
}
} else
{return null;
}
}),null));
});
var map__3 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__7650 = cljs.core.seq.call(null,c1);
var s2__7651 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____7652 = s1__7650;
if(and__3822__auto____7652)
{return s2__7651;
} else
{return and__3822__auto____7652;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__7650),cljs.core.first.call(null,s2__7651)),map.call(null,f,cljs.core.rest.call(null,s1__7650),cljs.core.rest.call(null,s2__7651)));
} else
{return null;
}
}),null));
});
var map__4 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__7653 = cljs.core.seq.call(null,c1);
var s2__7654 = cljs.core.seq.call(null,c2);
var s3__7655 = cljs.core.seq.call(null,c3);
if((function (){var and__3822__auto____7656 = s1__7653;
if(and__3822__auto____7656)
{var and__3822__auto____7657 = s2__7654;
if(and__3822__auto____7657)
{return s3__7655;
} else
{return and__3822__auto____7657;
}
} else
{return and__3822__auto____7656;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__7653),cljs.core.first.call(null,s2__7654),cljs.core.first.call(null,s3__7655)),map.call(null,f,cljs.core.rest.call(null,s1__7653),cljs.core.rest.call(null,s2__7654),cljs.core.rest.call(null,s3__7655)));
} else
{return null;
}
}),null));
});
var map__5 = (function() { 
var G__7662__delegate = function (f,c1,c2,c3,colls){
var step__7660 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__7659 = map.call(null,cljs.core.seq,cs);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__7659))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__7659),step.call(null,map.call(null,cljs.core.rest,ss__7659)));
} else
{return null;
}
}),null));
});
return map.call(null,(function (p1__7464_SHARP_){
return cljs.core.apply.call(null,f,p1__7464_SHARP_);
}),step__7660.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__7662 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__7662__delegate.call(this, f, c1, c2, c3, colls);
};
G__7662.cljs$lang$maxFixedArity = 4;
G__7662.cljs$lang$applyTo = (function (arglist__7663){
var f = cljs.core.first(arglist__7663);
var c1 = cljs.core.first(cljs.core.next(arglist__7663));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7663)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7663))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7663))));
return G__7662__delegate(f, c1, c2, c3, colls);
});
G__7662.cljs$lang$arity$variadic = G__7662__delegate;
return G__7662;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return map__2.call(this,f,c1);
case 3:
return map__3.call(this,f,c1,c2);
case 4:
return map__4.call(this,f,c1,c2,c3);
default:
return map__5.cljs$lang$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__5.cljs$lang$applyTo;
map.cljs$lang$arity$2 = map__2;
map.cljs$lang$arity$3 = map__3;
map.cljs$lang$arity$4 = map__4;
map.cljs$lang$arity$variadic = map__5.cljs$lang$arity$variadic;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljs.core.take = (function take(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
if((n > 0))
{var temp__3974__auto____7666 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____7666)
{var s__7667 = temp__3974__auto____7666;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__7667),take.call(null,(n - 1),cljs.core.rest.call(null,s__7667)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of all but the first n items in coll.
*/
cljs.core.drop = (function drop(n,coll){
var step__7673 = (function (n,coll){
while(true){
var s__7671 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____7672 = (n > 0);
if(and__3822__auto____7672)
{return s__7671;
} else
{return and__3822__auto____7672;
}
})()))
{{
var G__7674 = (n - 1);
var G__7675 = cljs.core.rest.call(null,s__7671);
n = G__7674;
coll = G__7675;
continue;
}
} else
{return s__7671;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__7673.call(null,n,coll);
}),null));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__1 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__2 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case 1:
return drop_last__1.call(this,n);
case 2:
return drop_last__2.call(this,n,s);
}
throw('Invalid arity: ' + arguments.length);
};
drop_last.cljs$lang$arity$1 = drop_last__1;
drop_last.cljs$lang$arity$2 = drop_last__2;
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s__7678 = cljs.core.seq.call(null,coll);
var lead__7679 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));
while(true){
if(lead__7679)
{{
var G__7680 = cljs.core.next.call(null,s__7678);
var G__7681 = cljs.core.next.call(null,lead__7679);
s__7678 = G__7680;
lead__7679 = G__7681;
continue;
}
} else
{return s__7678;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__7687 = (function (pred,coll){
while(true){
var s__7685 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____7686 = s__7685;
if(and__3822__auto____7686)
{return pred.call(null,cljs.core.first.call(null,s__7685));
} else
{return and__3822__auto____7686;
}
})()))
{{
var G__7688 = pred;
var G__7689 = cljs.core.rest.call(null,s__7685);
pred = G__7688;
coll = G__7689;
continue;
}
} else
{return s__7685;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__7687.call(null,pred,coll);
}),null));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7692 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____7692)
{var s__7693 = temp__3974__auto____7692;
return cljs.core.concat.call(null,s__7693,cycle.call(null,s__7693));
} else
{return null;
}
}),null));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return cljs.core.PersistentVector.fromArray([cljs.core.take.call(null,n,coll),cljs.core.drop.call(null,n,coll)], true);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__1 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
}),null));
});
var repeat__2 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case 1:
return repeat__1.call(this,n);
case 2:
return repeat__2.call(this,n,x);
}
throw('Invalid arity: ' + arguments.length);
};
repeat.cljs$lang$arity$1 = repeat__1;
repeat.cljs$lang$arity$2 = repeat__2;
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){
return cljs.core.take.call(null,n,cljs.core.repeat.call(null,x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__1 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
}),null));
});
var repeatedly__2 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case 1:
return repeatedly__1.call(this,n);
case 2:
return repeatedly__2.call(this,n,f);
}
throw('Invalid arity: ' + arguments.length);
};
repeatedly.cljs$lang$arity$1 = repeatedly__1;
repeatedly.cljs$lang$arity$2 = repeatedly__2;
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons.call(null,x,(new cljs.core.LazySeq(null,false,(function (){
return iterate.call(null,f,f.call(null,x));
}),null)));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__2 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__7698 = cljs.core.seq.call(null,c1);
var s2__7699 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____7700 = s1__7698;
if(and__3822__auto____7700)
{return s2__7699;
} else
{return and__3822__auto____7700;
}
})())
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__7698),cljs.core.cons.call(null,cljs.core.first.call(null,s2__7699),interleave.call(null,cljs.core.rest.call(null,s1__7698),cljs.core.rest.call(null,s2__7699))));
} else
{return null;
}
}),null));
});
var interleave__3 = (function() { 
var G__7702__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__7701 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__7701))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__7701),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__7701)));
} else
{return null;
}
}),null));
};
var G__7702 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7702__delegate.call(this, c1, c2, colls);
};
G__7702.cljs$lang$maxFixedArity = 2;
G__7702.cljs$lang$applyTo = (function (arglist__7703){
var c1 = cljs.core.first(arglist__7703);
var c2 = cljs.core.first(cljs.core.next(arglist__7703));
var colls = cljs.core.rest(cljs.core.next(arglist__7703));
return G__7702__delegate(c1, c2, colls);
});
G__7702.cljs$lang$arity$variadic = G__7702__delegate;
return G__7702;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return interleave__2.call(this,c1,c2);
default:
return interleave__3.cljs$lang$arity$variadic(c1,c2, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__3.cljs$lang$applyTo;
interleave.cljs$lang$arity$2 = interleave__2;
interleave.cljs$lang$arity$variadic = interleave__3.cljs$lang$arity$variadic;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){
return cljs.core.drop.call(null,1,cljs.core.interleave.call(null,cljs.core.repeat.call(null,sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat__7713 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____7711 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____7711)
{var coll__7712 = temp__3971__auto____7711;
return cljs.core.cons.call(null,cljs.core.first.call(null,coll__7712),cat.call(null,cljs.core.rest.call(null,coll__7712),colls));
} else
{if(cljs.core.seq.call(null,colls))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
}),null));
});
return cat__7713.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__2 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__3 = (function() { 
var G__7714__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__7714 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7714__delegate.call(this, f, coll, colls);
};
G__7714.cljs$lang$maxFixedArity = 2;
G__7714.cljs$lang$applyTo = (function (arglist__7715){
var f = cljs.core.first(arglist__7715);
var coll = cljs.core.first(cljs.core.next(arglist__7715));
var colls = cljs.core.rest(cljs.core.next(arglist__7715));
return G__7714__delegate(f, coll, colls);
});
G__7714.cljs$lang$arity$variadic = G__7714__delegate;
return G__7714;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return mapcat__2.call(this,f,coll);
default:
return mapcat__3.cljs$lang$arity$variadic(f,coll, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__3.cljs$lang$applyTo;
mapcat.cljs$lang$arity$2 = mapcat__2;
mapcat.cljs$lang$arity$variadic = mapcat__3.cljs$lang$arity$variadic;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7725 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____7725)
{var s__7726 = temp__3974__auto____7725;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7726))
{var c__7727 = cljs.core.chunk_first.call(null,s__7726);
var size__7728 = cljs.core.count.call(null,c__7727);
var b__7729 = cljs.core.chunk_buffer.call(null,size__7728);
var n__2512__auto____7730 = size__7728;
var i__7731 = 0;
while(true){
if((i__7731 < n__2512__auto____7730))
{if(cljs.core.truth_(pred.call(null,cljs.core._nth.call(null,c__7727,i__7731))))
{cljs.core.chunk_append.call(null,b__7729,cljs.core._nth.call(null,c__7727,i__7731));
} else
{}
{
var G__7734 = (i__7731 + 1);
i__7731 = G__7734;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7729),filter.call(null,pred,cljs.core.chunk_rest.call(null,s__7726)));
} else
{var f__7732 = cljs.core.first.call(null,s__7726);
var r__7733 = cljs.core.rest.call(null,s__7726);
if(cljs.core.truth_(pred.call(null,f__7732)))
{return cljs.core.cons.call(null,f__7732,filter.call(null,pred,r__7733));
} else
{return filter.call(null,pred,r__7733);
}
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
*/
cljs.core.remove = (function remove(pred,coll){
return cljs.core.filter.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){
var walk__7737 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
}),null));
});
return walk__7737.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__7735_SHARP_){
return !(cljs.core.sequential_QMARK_.call(null,p1__7735_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
if((function (){var G__7741__7742 = to;
if(G__7741__7742)
{if((function (){var or__3824__auto____7743 = (G__7741__7742.cljs$lang$protocol_mask$partition1$ & 1);
if(or__3824__auto____7743)
{return or__3824__auto____7743;
} else
{return G__7741__7742.cljs$core$IEditableCollection$;
}
})())
{return true;
} else
{if((!G__7741__7742.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__7741__7742);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__7741__7742);
}
})())
{return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,cljs.core._conj_BANG_,cljs.core.transient$.call(null,to),from));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,to,from);
}
});
/**
* Returns a vector consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.mapv = (function() {
var mapv = null;
var mapv__2 = (function (f,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (v,o){
return cljs.core.conj_BANG_.call(null,v,f.call(null,o));
}),cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),coll));
});
var mapv__3 = (function (f,c1,c2){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,f,c1,c2));
});
var mapv__4 = (function (f,c1,c2,c3){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,f,c1,c2,c3));
});
var mapv__5 = (function() { 
var G__7744__delegate = function (f,c1,c2,c3,colls){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.apply.call(null,cljs.core.map,f,c1,c2,c3,colls));
};
var G__7744 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__7744__delegate.call(this, f, c1, c2, c3, colls);
};
G__7744.cljs$lang$maxFixedArity = 4;
G__7744.cljs$lang$applyTo = (function (arglist__7745){
var f = cljs.core.first(arglist__7745);
var c1 = cljs.core.first(cljs.core.next(arglist__7745));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7745)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7745))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7745))));
return G__7744__delegate(f, c1, c2, c3, colls);
});
G__7744.cljs$lang$arity$variadic = G__7744__delegate;
return G__7744;
})()
;
mapv = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return mapv__2.call(this,f,c1);
case 3:
return mapv__3.call(this,f,c1,c2);
case 4:
return mapv__4.call(this,f,c1,c2,c3);
default:
return mapv__5.cljs$lang$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
mapv.cljs$lang$maxFixedArity = 4;
mapv.cljs$lang$applyTo = mapv__5.cljs$lang$applyTo;
mapv.cljs$lang$arity$2 = mapv__2;
mapv.cljs$lang$arity$3 = mapv__3;
mapv.cljs$lang$arity$4 = mapv__4;
mapv.cljs$lang$arity$variadic = mapv__5.cljs$lang$arity$variadic;
return mapv;
})()
;
/**
* Returns a vector of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filterv = (function filterv(pred,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (v,o){
if(cljs.core.truth_(pred.call(null,o)))
{return cljs.core.conj_BANG_.call(null,v,o);
} else
{return v;
}
}),cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),coll));
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__2 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7752 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____7752)
{var s__7753 = temp__3974__auto____7752;
var p__7754 = cljs.core.take.call(null,n,s__7753);
if((n === cljs.core.count.call(null,p__7754)))
{return cljs.core.cons.call(null,p__7754,partition.call(null,n,step,cljs.core.drop.call(null,step,s__7753)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
var partition__4 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____7755 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____7755)
{var s__7756 = temp__3974__auto____7755;
var p__7757 = cljs.core.take.call(null,n,s__7756);
if((n === cljs.core.count.call(null,p__7757)))
{return cljs.core.cons.call(null,p__7757,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__7756)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__7757,pad)));
}
} else
{return null;
}
}),null));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case 2:
return partition__2.call(this,n,step);
case 3:
return partition__3.call(this,n,step,pad);
case 4:
return partition__4.call(this,n,step,pad,coll);
}
throw('Invalid arity: ' + arguments.length);
};
partition.cljs$lang$arity$2 = partition__2;
partition.cljs$lang$arity$3 = partition__3;
partition.cljs$lang$arity$4 = partition__4;
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of ke(ys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__2 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__3 = (function (m,ks,not_found){
var sentinel__7762 = cljs.core.lookup_sentinel;
var m__7763 = m;
var ks__7764 = cljs.core.seq.call(null,ks);
while(true){
if(ks__7764)
{var m__7765 = cljs.core._lookup.call(null,m__7763,cljs.core.first.call(null,ks__7764),sentinel__7762);
if((sentinel__7762 === m__7765))
{return not_found;
} else
{{
var G__7766 = sentinel__7762;
var G__7767 = m__7765;
var G__7768 = cljs.core.next.call(null,ks__7764);
sentinel__7762 = G__7766;
m__7763 = G__7767;
ks__7764 = G__7768;
continue;
}
}
} else
{return m__7763;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case 2:
return get_in__2.call(this,m,ks);
case 3:
return get_in__3.call(this,m,ks,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
get_in.cljs$lang$arity$2 = get_in__2;
get_in.cljs$lang$arity$3 = get_in__3;
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__7769,v){
var vec__7774__7775 = p__7769;
var k__7776 = cljs.core.nth.call(null,vec__7774__7775,0,null);
var ks__7777 = cljs.core.nthnext.call(null,vec__7774__7775,1);
if(cljs.core.truth_(ks__7777))
{return cljs.core.assoc.call(null,m,k__7776,assoc_in.call(null,cljs.core._lookup.call(null,m,k__7776,null),ks__7777,v));
} else
{return cljs.core.assoc.call(null,m,k__7776,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function() { 
var update_in__delegate = function (m,p__7778,f,args){
var vec__7783__7784 = p__7778;
var k__7785 = cljs.core.nth.call(null,vec__7783__7784,0,null);
var ks__7786 = cljs.core.nthnext.call(null,vec__7783__7784,1);
if(cljs.core.truth_(ks__7786))
{return cljs.core.assoc.call(null,m,k__7785,cljs.core.apply.call(null,update_in,cljs.core._lookup.call(null,m,k__7785,null),ks__7786,f,args));
} else
{return cljs.core.assoc.call(null,m,k__7785,cljs.core.apply.call(null,f,cljs.core._lookup.call(null,m,k__7785,null),args));
}
};
var update_in = function (m,p__7778,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__7778, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__7787){
var m = cljs.core.first(arglist__7787);
var p__7778 = cljs.core.first(cljs.core.next(arglist__7787));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7787)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7787)));
return update_in__delegate(m, p__7778, f, args);
});
update_in.cljs$lang$arity$variadic = update_in__delegate;
return update_in;
})()
;

/**
* @constructor
*/
cljs.core.Vector = (function (meta,array,__hash){
this.meta = meta;
this.array = array;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32400159;
})
cljs.core.Vector.cljs$lang$type = true;
cljs.core.Vector.cljs$lang$ctorPrSeq = (function (this__2290__auto__){
return cljs.core.list.call(null,"cljs.core/Vector");
});
cljs.core.Vector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7790 = this;
var h__2173__auto____7791 = this__7790.__hash;
if(!((h__2173__auto____7791 == null)))
{return h__2173__auto____7791;
} else
{var h__2173__auto____7792 = cljs.core.hash_coll.call(null,coll);
this__7790.__hash = h__2173__auto____7792;
return h__2173__auto____7792;
}
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__7793 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__7794 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__7795 = this;
var new_array__7796 = this__7795.array.slice();
(new_array__7796[k] = v);
return (new cljs.core.Vector(this__7795.meta,new_array__7796,null));
});
cljs.core.Vector.prototype.call = (function() {
var G__7827 = null;
var G__7827__2 = (function (this_sym7797,k){
var this__7799 = this;
var this_sym7797__7800 = this;
var coll__7801 = this_sym7797__7800;
return coll__7801.cljs$core$ILookup$_lookup$arity$2(coll__7801,k);
});
var G__7827__3 = (function (this_sym7798,k,not_found){
var this__7799 = this;
var this_sym7798__7802 = this;
var coll__7803 = this_sym7798__7802;
return coll__7803.cljs$core$ILookup$_lookup$arity$3(coll__7803,k,not_found);
});
G__7827 = function(this_sym7798,k,not_found){
switch(arguments.length){
case 2:
return G__7827__2.call(this,this_sym7798,k);
case 3:
return G__7827__3.call(this,this_sym7798,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7827;
})()
;
cljs.core.Vector.prototype.apply = (function (this_sym7788,args7789){
var this__7804 = this;
return this_sym7788.call.apply(this_sym7788,[this_sym7788].concat(args7789.slice()));
});
cljs.core.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7805 = this;
var new_array__7806 = this__7805.array.slice();
new_array__7806.push(o);
return (new cljs.core.Vector(this__7805.meta,new_array__7806,null));
});
cljs.core.Vector.prototype.toString = (function (){
var this__7807 = this;
var this__7808 = this;
return cljs.core.pr_str.call(null,this__7808);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__7809 = this;
return cljs.core.ci_reduce.call(null,this__7809.array,f);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__7810 = this;
return cljs.core.ci_reduce.call(null,this__7810.array,f,start);
});
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7811 = this;
if((this__7811.array.length > 0))
{var vector_seq__7812 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < this__7811.array.length))
{return cljs.core.cons.call(null,(this__7811.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
}),null));
});
return vector_seq__7812.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__7813 = this;
return this__7813.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__7814 = this;
var count__7815 = this__7814.array.length;
if((count__7815 > 0))
{return (this__7814.array[(count__7815 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__7816 = this;
if((this__7816.array.length > 0))
{var new_array__7817 = this__7816.array.slice();
new_array__7817.pop();
return (new cljs.core.Vector(this__7816.meta,new_array__7817,null));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__7818 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7819 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7820 = this;
return (new cljs.core.Vector(meta,this__7820.array,this__7820.__hash));
});
cljs.core.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7821 = this;
return this__7821.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__7822 = this;
if((function (){var and__3822__auto____7823 = (0 <= n);
if(and__3822__auto____7823)
{return (n < this__7822.array.length);
} else
{return and__3822__auto____7823;
}
})())
{return (this__7822.array[n]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__7824 = this;
if((function (){var and__3822__auto____7825 = (0 <= n);
if(and__3822__auto____7825)
{return (n < this__7824.array.length);
} else
{return and__3822__auto____7825;
}
})())
{return (this__7824.array[n]);
} else
{return not_found;
}
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7826 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__7826.meta);
});
cljs.core.Vector;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,[],0));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs,null));
});

/**
* @constructor
*/
cljs.core.VectorNode = (function (edit,arr){
this.edit = edit;
this.arr = arr;
})
cljs.core.VectorNode.cljs$lang$type = true;
cljs.core.VectorNode.cljs$lang$ctorPrSeq = (function (this__2291__auto__){
return cljs.core.list.call(null,"cljs.core/VectorNode");
});
cljs.core.VectorNode;
cljs.core.pv_fresh_node = (function pv_fresh_node(edit){
return (new cljs.core.VectorNode(edit,cljs.core.make_array.call(null,32)));
});
cljs.core.pv_aget = (function pv_aget(node,idx){
return (node.arr[idx]);
});
cljs.core.pv_aset = (function pv_aset(node,idx,val){
return (node.arr[idx] = val);
});
cljs.core.pv_clone_node = (function pv_clone_node(node){
return (new cljs.core.VectorNode(node.edit,node.arr.slice()));
});
cljs.core.tail_off = (function tail_off(pv){
var cnt__7829 = pv.cnt;
if((cnt__7829 < 32))
{return 0;
} else
{return (((cnt__7829 - 1) >>> 5) << 5);
}
});
cljs.core.new_path = (function new_path(edit,level,node){
var ll__7835 = level;
var ret__7836 = node;
while(true){
if((ll__7835 === 0))
{return ret__7836;
} else
{var embed__7837 = ret__7836;
var r__7838 = cljs.core.pv_fresh_node.call(null,edit);
var ___7839 = cljs.core.pv_aset.call(null,r__7838,0,embed__7837);
{
var G__7840 = (ll__7835 - 5);
var G__7841 = r__7838;
ll__7835 = G__7840;
ret__7836 = G__7841;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__7847 = cljs.core.pv_clone_node.call(null,parent);
var subidx__7848 = (((pv.cnt - 1) >>> level) & 31);
if((5 === level))
{cljs.core.pv_aset.call(null,ret__7847,subidx__7848,tailnode);
return ret__7847;
} else
{var child__7849 = cljs.core.pv_aget.call(null,parent,subidx__7848);
if(!((child__7849 == null)))
{var node_to_insert__7850 = push_tail.call(null,pv,(level - 5),child__7849,tailnode);
cljs.core.pv_aset.call(null,ret__7847,subidx__7848,node_to_insert__7850);
return ret__7847;
} else
{var node_to_insert__7851 = cljs.core.new_path.call(null,null,(level - 5),tailnode);
cljs.core.pv_aset.call(null,ret__7847,subidx__7848,node_to_insert__7851);
return ret__7847;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if((function (){var and__3822__auto____7855 = (0 <= i);
if(and__3822__auto____7855)
{return (i < pv.cnt);
} else
{return and__3822__auto____7855;
}
})())
{if((i >= cljs.core.tail_off.call(null,pv)))
{return pv.tail;
} else
{var node__7856 = pv.root;
var level__7857 = pv.shift;
while(true){
if((level__7857 > 0))
{{
var G__7858 = cljs.core.pv_aget.call(null,node__7856,((i >>> level__7857) & 31));
var G__7859 = (level__7857 - 5);
node__7856 = G__7858;
level__7857 = G__7859;
continue;
}
} else
{return node__7856.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in vector of length "),cljs.core.str(pv.cnt)].join('')));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__7862 = cljs.core.pv_clone_node.call(null,node);
if((level === 0))
{cljs.core.pv_aset.call(null,ret__7862,(i & 31),val);
return ret__7862;
} else
{var subidx__7863 = ((i >>> level) & 31);
cljs.core.pv_aset.call(null,ret__7862,subidx__7863,do_assoc.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__7863),i,val));
return ret__7862;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__7869 = (((pv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__7870 = pop_tail.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__7869));
if((function (){var and__3822__auto____7871 = (new_child__7870 == null);
if(and__3822__auto____7871)
{return (subidx__7869 === 0);
} else
{return and__3822__auto____7871;
}
})())
{return null;
} else
{var ret__7872 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__7872,subidx__7869,new_child__7870);
return ret__7872;
}
} else
{if((subidx__7869 === 0))
{return null;
} else
{if("\uFDD0'else")
{var ret__7873 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__7873,subidx__7869,null);
return ret__7873;
} else
{return null;
}
}
}
});
void 0;
void 0;
void 0;
void 0;
void 0;
void 0;
void 0;

/**
* @constructor
*/
cljs.core.PersistentVector = (function (meta,cnt,shift,root,tail,__hash){
this.meta = meta;
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 167668511;
})
cljs.core.PersistentVector.cljs$lang$type = true;
cljs.core.PersistentVector.cljs$lang$ctorPrSeq = (function (this__2290__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentVector");
});
cljs.core.PersistentVector.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__7876 = this;
return (new cljs.core.TransientVector(this__7876.cnt,this__7876.shift,cljs.core.tv_editable_root.call(null,this__7876.root),cljs.core.tv_editable_tail.call(null,this__7876.tail)));
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7877 = this;
var h__2173__auto____7878 = this__7877.__hash;
if(!((h__2173__auto____7878 == null)))
{return h__2173__auto____7878;
} else
{var h__2173__auto____7879 = cljs.core.hash_coll.call(null,coll);
this__7877.__hash = h__2173__auto____7879;
return h__2173__auto____7879;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__7880 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__7881 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__7882 = this;
if((function (){var and__3822__auto____7883 = (0 <= k);
if(and__3822__auto____7883)
{return (k < this__7882.cnt);
} else
{return and__3822__auto____7883;
}
})())
{if((cljs.core.tail_off.call(null,coll) <= k))
{var new_tail__7884 = this__7882.tail.slice();
(new_tail__7884[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__7882.meta,this__7882.cnt,this__7882.shift,this__7882.root,new_tail__7884,null));
} else
{return (new cljs.core.PersistentVector(this__7882.meta,this__7882.cnt,this__7882.shift,cljs.core.do_assoc.call(null,coll,this__7882.shift,this__7882.root,k,v),this__7882.tail,null));
}
} else
{if((k === this__7882.cnt))
{return coll.cljs$core$ICollection$_conj$arity$2(coll,v);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(k),cljs.core.str(" out of bounds  [0,"),cljs.core.str(this__7882.cnt),cljs.core.str("]")].join('')));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.call = (function() {
var G__7932 = null;
var G__7932__2 = (function (this_sym7885,k){
var this__7887 = this;
var this_sym7885__7888 = this;
var coll__7889 = this_sym7885__7888;
return coll__7889.cljs$core$ILookup$_lookup$arity$2(coll__7889,k);
});
var G__7932__3 = (function (this_sym7886,k,not_found){
var this__7887 = this;
var this_sym7886__7890 = this;
var coll__7891 = this_sym7886__7890;
return coll__7891.cljs$core$ILookup$_lookup$arity$3(coll__7891,k,not_found);
});
G__7932 = function(this_sym7886,k,not_found){
switch(arguments.length){
case 2:
return G__7932__2.call(this,this_sym7886,k);
case 3:
return G__7932__3.call(this,this_sym7886,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7932;
})()
;
cljs.core.PersistentVector.prototype.apply = (function (this_sym7874,args7875){
var this__7892 = this;
return this_sym7874.call.apply(this_sym7874,[this_sym7874].concat(args7875.slice()));
});
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){
var this__7893 = this;
var step_init__7894 = [0,init];
var i__7895 = 0;
while(true){
if((i__7895 < this__7893.cnt))
{var arr__7896 = cljs.core.array_for.call(null,v,i__7895);
var len__7897 = arr__7896.length;
var init__7901 = (function (){var j__7898 = 0;
var init__7899 = (step_init__7894[1]);
while(true){
if((j__7898 < len__7897))
{var init__7900 = f.call(null,init__7899,(j__7898 + i__7895),(arr__7896[j__7898]));
if(cljs.core.reduced_QMARK_.call(null,init__7900))
{return init__7900;
} else
{{
var G__7933 = (j__7898 + 1);
var G__7934 = init__7900;
j__7898 = G__7933;
init__7899 = G__7934;
continue;
}
}
} else
{(step_init__7894[0] = len__7897);
(step_init__7894[1] = init__7899);
return init__7899;
}
break;
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__7901))
{return cljs.core.deref.call(null,init__7901);
} else
{{
var G__7935 = (i__7895 + (step_init__7894[0]));
i__7895 = G__7935;
continue;
}
}
} else
{return (step_init__7894[1]);
}
break;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7902 = this;
if(((this__7902.cnt - cljs.core.tail_off.call(null,coll)) < 32))
{var new_tail__7903 = this__7902.tail.slice();
new_tail__7903.push(o);
return (new cljs.core.PersistentVector(this__7902.meta,(this__7902.cnt + 1),this__7902.shift,this__7902.root,new_tail__7903,null));
} else
{var root_overflow_QMARK___7904 = ((this__7902.cnt >>> 5) > (1 << this__7902.shift));
var new_shift__7905 = ((root_overflow_QMARK___7904)?(this__7902.shift + 5):this__7902.shift);
var new_root__7907 = ((root_overflow_QMARK___7904)?(function (){var n_r__7906 = cljs.core.pv_fresh_node.call(null,null);
cljs.core.pv_aset.call(null,n_r__7906,0,this__7902.root);
cljs.core.pv_aset.call(null,n_r__7906,1,cljs.core.new_path.call(null,null,this__7902.shift,(new cljs.core.VectorNode(null,this__7902.tail))));
return n_r__7906;
})():cljs.core.push_tail.call(null,coll,this__7902.shift,this__7902.root,(new cljs.core.VectorNode(null,this__7902.tail))));
return (new cljs.core.PersistentVector(this__7902.meta,(this__7902.cnt + 1),new_shift__7905,new_root__7907,[o],null));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__7908 = this;
if((this__7908.cnt > 0))
{return (new cljs.core.RSeq(coll,(this__7908.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){
var this__7909 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,0);
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){
var this__7910 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,1);
});
cljs.core.PersistentVector.prototype.toString = (function (){
var this__7911 = this;
var this__7912 = this;
return cljs.core.pr_str.call(null,this__7912);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__7913 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__7914 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7915 = this;
if((this__7915.cnt === 0))
{return null;
} else
{return cljs.core.chunked_seq.call(null,coll,0,0);
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__7916 = this;
return this__7916.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__7917 = this;
if((this__7917.cnt > 0))
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,(this__7917.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__7918 = this;
if((this__7918.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__7918.cnt))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__7918.meta);
} else
{if((1 < (this__7918.cnt - cljs.core.tail_off.call(null,coll))))
{return (new cljs.core.PersistentVector(this__7918.meta,(this__7918.cnt - 1),this__7918.shift,this__7918.root,this__7918.tail.slice(0,-1),null));
} else
{if("\uFDD0'else")
{var new_tail__7919 = cljs.core.array_for.call(null,coll,(this__7918.cnt - 2));
var nr__7920 = cljs.core.pop_tail.call(null,coll,this__7918.shift,this__7918.root);
var new_root__7921 = (((nr__7920 == null))?cljs.core.PersistentVector.EMPTY_NODE:nr__7920);
var cnt_1__7922 = (this__7918.cnt - 1);
if((function (){var and__3822__auto____7923 = (5 < this__7918.shift);
if(and__3822__auto____7923)
{return (cljs.core.pv_aget.call(null,new_root__7921,1) == null);
} else
{return and__3822__auto____7923;
}
})())
{return (new cljs.core.PersistentVector(this__7918.meta,cnt_1__7922,(this__7918.shift - 5),cljs.core.pv_aget.call(null,new_root__7921,0),new_tail__7919,null));
} else
{return (new cljs.core.PersistentVector(this__7918.meta,cnt_1__7922,this__7918.shift,new_root__7921,new_tail__7919,null));
}
} else
{return null;
}
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__7924 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7925 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7926 = this;
return (new cljs.core.PersistentVector(meta,this__7926.cnt,this__7926.shift,this__7926.root,this__7926.tail,this__7926.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7927 = this;
return this__7927.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__7928 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__7929 = this;
if((function (){var and__3822__auto____7930 = (0 <= n);
if(and__3822__auto____7930)
{return (n < this__7929.cnt);
} else
{return and__3822__auto____7930;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7931 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__7931.meta);
});
cljs.core.PersistentVector;
cljs.core.PersistentVector.EMPTY_NODE = cljs.core.pv_fresh_node.call(null,null);
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,0,5,cljs.core.PersistentVector.EMPTY_NODE,[],0));
cljs.core.PersistentVector.fromArray = (function (xs,no_clone){
var l__7936 = xs.length;
var xs__7937 = (((no_clone === true))?xs:xs.slice());
if((l__7936 < 32))
{return (new cljs.core.PersistentVector(null,l__7936,5,cljs.core.PersistentVector.EMPTY_NODE,xs__7937,null));
} else
{var node__7938 = xs__7937.slice(0,32);
var v__7939 = (new cljs.core.PersistentVector(null,32,5,cljs.core.PersistentVector.EMPTY_NODE,node__7938,null));
var i__7940 = 32;
var out__7941 = cljs.core._as_transient.call(null,v__7939);
while(true){
if((i__7940 < l__7936))
{{
var G__7942 = (i__7940 + 1);
var G__7943 = cljs.core.conj_BANG_.call(null,out__7941,(xs__7937[i__7940]));
i__7940 = G__7942;
out__7941 = G__7943;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__7941);
}
break;
}
}
});
cljs.core.vec = (function vec(coll){
return cljs.core._persistent_BANG_.call(null,cljs.core.reduce.call(null,cljs.core._conj_BANG_,cljs.core._as_transient.call(null,cljs.core.PersistentVector.EMPTY),coll));
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){
return cljs.core.vec.call(null,args);
};
var vector = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return vector__delegate.call(this, args);
};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__7944){
var args = cljs.core.seq(arglist__7944);;
return vector__delegate(args);
});
vector.cljs$lang$arity$variadic = vector__delegate;
return vector;
})()
;

/**
* @constructor
*/
cljs.core.ChunkedSeq = (function (vec,node,i,off,meta){
this.vec = vec;
this.node = node;
this.i = i;
this.off = off;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 27525356;
})
cljs.core.ChunkedSeq.cljs$lang$type = true;
cljs.core.ChunkedSeq.cljs$lang$ctorPrSeq = (function (this__2290__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkedSeq");
});
cljs.core.ChunkedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7945 = this;
if(((this__7945.off + 1) < this__7945.node.length))
{var s__7946 = cljs.core.chunked_seq.call(null,this__7945.vec,this__7945.node,this__7945.i,(this__7945.off + 1));
if((s__7946 == null))
{return null;
} else
{return s__7946;
}
} else
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7947 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7948 = this;
return coll;
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7949 = this;
return (this__7949.node[this__7949.off]);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7950 = this;
if(((this__7950.off + 1) < this__7950.node.length))
{var s__7951 = cljs.core.chunked_seq.call(null,this__7950.vec,this__7950.node,this__7950.i,(this__7950.off + 1));
if((s__7951 == null))
{return cljs.core.List.EMPTY;
} else
{return s__7951;
}
} else
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__7952 = this;
var l__7953 = this__7952.node.length;
var s__7954 = ((((this__7952.i + l__7953) < cljs.core._count.call(null,this__7952.vec)))?cljs.core.chunked_seq.call(null,this__7952.vec,(this__7952.i + l__7953),0):null);
if((s__7954 == null))
{return null;
} else
{return s__7954;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7955 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__7956 = this;
return cljs.core.chunked_seq.call(null,this__7956.vec,this__7956.node,this__7956.i,this__7956.off,m);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_meta$arity$1 = (function (coll){
var this__7957 = this;
return this__7957.meta;
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7958 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__7958.meta);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__7959 = this;
return cljs.core.array_chunk.call(null,this__7959.node,this__7959.off);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__7960 = this;
var l__7961 = this__7960.node.length;
var s__7962 = ((((this__7960.i + l__7961) < cljs.core._count.call(null,this__7960.vec)))?cljs.core.chunked_seq.call(null,this__7960.vec,(this__7960.i + l__7961),0):null);
if((s__7962 == null))
{return cljs.core.List.EMPTY;
} else
{return s__7962;
}
});
cljs.core.ChunkedSeq;
cljs.core.chunked_seq = (function() {
var chunked_seq = null;
var chunked_seq__3 = (function (vec,i,off){
return chunked_seq.call(null,vec,cljs.core.array_for.call(null,vec,i),i,off,null);
});
var chunked_seq__4 = (function (vec,node,i,off){
return chunked_seq.call(null,vec,node,i,off,null);
});
var chunked_seq__5 = (function (vec,node,i,off,meta){
return (new cljs.core.ChunkedSeq(vec,node,i,off,meta));
});
chunked_seq = function(vec,node,i,off,meta){
switch(arguments.length){
case 3:
return chunked_seq__3.call(this,vec,node,i);
case 4:
return chunked_seq__4.call(this,vec,node,i,off);
case 5:
return chunked_seq__5.call(this,vec,node,i,off,meta);
}
throw('Invalid arity: ' + arguments.length);
};
chunked_seq.cljs$lang$arity$3 = chunked_seq__3;
chunked_seq.cljs$lang$arity$4 = chunked_seq__4;
chunked_seq.cljs$lang$arity$5 = chunked_seq__5;
return chunked_seq;
})()
;

/**
* @constructor
*/
cljs.core.Subvec = (function (meta,v,start,end,__hash){
this.meta = meta;
this.v = v;
this.start = start;
this.end = end;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32400159;
})
cljs.core.Subvec.cljs$lang$type = true;
cljs.core.Subvec.cljs$lang$ctorPrSeq = (function (this__2290__auto__){
return cljs.core.list.call(null,"cljs.core/Subvec");
});
cljs.core.Subvec.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7965 = this;
var h__2173__auto____7966 = this__7965.__hash;
if(!((h__2173__auto____7966 == null)))
{return h__2173__auto____7966;
} else
{var h__2173__auto____7967 = cljs.core.hash_coll.call(null,coll);
this__7965.__hash = h__2173__auto____7967;
return h__2173__auto____7967;
}
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__7968 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__7969 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){
var this__7970 = this;
var v_pos__7971 = (this__7970.start + key);
return (new cljs.core.Subvec(this__7970.meta,cljs.core._assoc.call(null,this__7970.v,v_pos__7971,val),this__7970.start,((this__7970.end > (v_pos__7971 + 1)) ? this__7970.end : (v_pos__7971 + 1)),null));
});
cljs.core.Subvec.prototype.call = (function() {
var G__7997 = null;
var G__7997__2 = (function (this_sym7972,k){
var this__7974 = this;
var this_sym7972__7975 = this;
var coll__7976 = this_sym7972__7975;
return coll__7976.cljs$core$ILookup$_lookup$arity$2(coll__7976,k);
});
var G__7997__3 = (function (this_sym7973,k,not_found){
var this__7974 = this;
var this_sym7973__7977 = this;
var coll__7978 = this_sym7973__7977;
return coll__7978.cljs$core$ILookup$_lookup$arity$3(coll__7978,k,not_found);
});
G__7997 = function(this_sym7973,k,not_found){
switch(arguments.length){
case 2:
return G__7997__2.call(this,this_sym7973,k);
case 3:
return G__7997__3.call(this,this_sym7973,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7997;
})()
;
cljs.core.Subvec.prototype.apply = (function (this_sym7963,args7964){
var this__7979 = this;
return this_sym7963.call.apply(this_sym7963,[this_sym7963].concat(args7964.slice()));
});
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7980 = this;
return (new cljs.core.Subvec(this__7980.meta,cljs.core._assoc_n.call(null,this__7980.v,this__7980.end,o),this__7980.start,(this__7980.end + 1),null));
});
cljs.core.Subvec.prototype.toString = (function (){
var this__7981 = this;
var this__7982 = this;
return cljs.core.pr_str.call(null,this__7982);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__7983 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__7984 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7985 = this;
var subvec_seq__7986 = (function subvec_seq(i){
if((i === this__7985.end))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__7985.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}),null)));
}
});
return subvec_seq__7986.call(null,this__7985.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__7987 = this;
return (this__7987.end - this__7987.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__7988 = this;
return cljs.core._nth.call(null,this__7988.v,(this__7988.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__7989 = this;
if((this__7989.start === this__7989.end))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__7989.meta,this__7989.v,this__7989.start,(this__7989.end - 1),null));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__7990 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7991 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7992 = this;
return (new cljs.core.Subvec(meta,this__7992.v,this__7992.start,this__7992.end,this__7992.__hash));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7993 = this;
return this__7993.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__7994 = this;
return cljs.core._nth.call(null,this__7994.v,(this__7994.start + n));
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__7995 = this;
return cljs.core._nth.call(null,this__7995.v,(this__7995.start + n),not_found);
});
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7996 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__7996.meta);
});
cljs.core.Subvec;
/**
* Returns a persistent vector of the items in vector from
* start (inclusive) to end (exclusive).  If end is not supplied,
* defaults to (count vector). This operation is O(1) and very fast, as
* the resulting vector shares structure with the original and no
* trimming is done.
*/
cljs.core.subvec = (function() {
var subvec = null;
var subvec__2 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__3 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end,null));
});
subvec = function(v,start,end){
switch(arguments.length){
case 2:
return subvec__2.call(this,v,start);
case 3:
return subvec__3.call(this,v,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
subvec.cljs$lang$arity$2 = subvec__2;
subvec.cljs$lang$arity$3 = subvec__3;
return subvec;
})()
;
cljs.core.tv_ensure_editable = (function tv_ensure_editable(edit,node){
if((edit === node.edit))
{return node;
} else
{return (new cljs.core.VectorNode(edit,node.arr.slice()));
}
});
cljs.core.tv_editable_root = (function tv_editable_root(node){
return (new cljs.core.VectorNode({},node.arr.slice()));
});
cljs.core.tv_editable_tail = (function tv_editable_tail(tl){
var ret__7999 = cljs.core.make_array.call(null,32);
cljs.core.array_copy.call(null,tl,0,ret__7999,0,tl.length);
return ret__7999;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){
var ret__8003 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,parent);
var subidx__8004 = (((tv.cnt - 1) >>> level) & 31);
cljs.core.pv_aset.call(null,ret__8003,subidx__8004,(((level === 5))?tail_node:(function (){var child__8005 = cljs.core.pv_aget.call(null,ret__8003,subidx__8004);
if(!((child__8005 == null)))
{return tv_push_tail.call(null,tv,(level - 5),child__8005,tail_node);
} else
{return cljs.core.new_path.call(null,tv.root.edit,(level - 5),tail_node);
}
})()));
return ret__8003;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){
var node__8010 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,node);
var subidx__8011 = (((tv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__8012 = tv_pop_tail.call(null,tv,(level - 5),cljs.core.pv_aget.call(null,node__8010,subidx__8011));
if((function (){var and__3822__auto____8013 = (new_child__8012 == null);
if(and__3822__auto____8013)
{return (subidx__8011 === 0);
} else
{return and__3822__auto____8013;
}
})())
{return null;
} else
{cljs.core.pv_aset.call(null,node__8010,subidx__8011,new_child__8012);
return node__8010;
}
} else
{if((subidx__8011 === 0))
{return null;
} else
{if("\uFDD0'else")
{cljs.core.pv_aset.call(null,node__8010,subidx__8011,null);
return node__8010;
} else
{return null;
}
}
}
});
cljs.core.editable_array_for = (function editable_array_for(tv,i){
if((function (){var and__3822__auto____8018 = (0 <= i);
if(and__3822__auto____8018)
{return (i < tv.cnt);
} else
{return and__3822__auto____8018;
}
})())
{if((i >= cljs.core.tail_off.call(null,tv)))
{return tv.tail;
} else
{var root__8019 = tv.root;
var node__8020 = root__8019;
var level__8021 = tv.shift;
while(true){
if((level__8021 > 0))
{{
var G__8022 = cljs.core.tv_ensure_editable.call(null,root__8019.edit,cljs.core.pv_aget.call(null,node__8020,((i >>> level__8021) & 31)));
var G__8023 = (level__8021 - 5);
node__8020 = G__8022;
level__8021 = G__8023;
continue;
}
} else
{return node__8020.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in transient vector of length "),cljs.core.str(tv.cnt)].join('')));
}
});

/**
* @constructor
*/
cljs.core.TransientVector = (function (cnt,shift,root,tail){
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.cljs$lang$protocol_mask$partition0$ = 275;
this.cljs$lang$protocol_mask$partition1$ = 22;
})
cljs.core.TransientVector.cljs$lang$type = true;
cljs.core.TransientVector.cljs$lang$ctorPrSeq = (function (this__2290__auto__){
return cljs.core.list.call(null,"cljs.core/TransientVector");
});
cljs.core.TransientVector.prototype.call = (function() {
var G__8063 = null;
var G__8063__2 = (function (this_sym8026,k){
var this__8028 = this;
var this_sym8026__8029 = this;
var coll__8030 = this_sym8026__8029;
return coll__8030.cljs$core$ILookup$_lookup$arity$2(coll__8030,k);
});
var G__8063__3 = (function (this_sym8027,k,not_found){
var this__8028 = this;
var this_sym8027__8031 = this;
var coll__8032 = this_sym8027__8031;
return coll__8032.cljs$core$ILookup$_lookup$arity$3(coll__8032,k,not_found);
});
G__8063 = function(this_sym8027,k,not_found){
switch(arguments.length){
case 2:
return G__8063__2.call(this,this_sym8027,k);
case 3:
return G__8063__3.call(this,this_sym8027,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8063;
})()
;
cljs.core.TransientVector.prototype.apply = (function (this_sym8024,args8025){
var this__8033 = this;
return this_sym8024.call.apply(this_sym8024,[this_sym8024].concat(args8025.slice()));
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8034 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8035 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8036 = this;
if(this__8036.root.edit)
{return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
} else
{throw (new Error("nth after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8037 = this;
if((function (){var and__3822__auto____8038 = (0 <= n);
if(and__3822__auto____8038)
{return (n < this__8037.cnt);
} else
{return and__3822__auto____8038;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8039 = this;
if(this__8039.root.edit)
{return this__8039.cnt;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){
var this__8040 = this;
if(this__8040.root.edit)
{if((function (){var and__3822__auto____8041 = (0 <= n);
if(and__3822__auto____8041)
{return (n < this__8040.cnt);
} else
{return and__3822__auto____8041;
}
})())
{if((cljs.core.tail_off.call(null,tcoll) <= n))
{(this__8040.tail[(n & 31)] = val);
return tcoll;
} else
{var new_root__8046 = (function go(level,node){
var node__8044 = cljs.core.tv_ensure_editable.call(null,this__8040.root.edit,node);
if((level === 0))
{cljs.core.pv_aset.call(null,node__8044,(n & 31),val);
return node__8044;
} else
{var subidx__8045 = ((n >>> level) & 31);
cljs.core.pv_aset.call(null,node__8044,subidx__8045,go.call(null,(level - 5),cljs.core.pv_aget.call(null,node__8044,subidx__8045)));
return node__8044;
}
}).call(null,this__8040.shift,this__8040.root);
this__8040.root = new_root__8046;
return tcoll;
}
} else
{if((n === this__8040.cnt))
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds for TransientVector of length"),cljs.core.str(this__8040.cnt)].join('')));
} else
{return null;
}
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_pop_BANG_$arity$1 = (function (tcoll){
var this__8047 = this;
if(this__8047.root.edit)
{if((this__8047.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__8047.cnt))
{this__8047.cnt = 0;
return tcoll;
} else
{if((((this__8047.cnt - 1) & 31) > 0))
{this__8047.cnt = (this__8047.cnt - 1);
return tcoll;
} else
{if("\uFDD0'else")
{var new_tail__8048 = cljs.core.editable_array_for.call(null,tcoll,(this__8047.cnt - 2));
var new_root__8050 = (function (){var nr__8049 = cljs.core.tv_pop_tail.call(null,tcoll,this__8047.shift,this__8047.root);
if(!((nr__8049 == null)))
{return nr__8049;
} else
{return (new cljs.core.VectorNode(this__8047.root.edit,cljs.core.make_array.call(null,32)));
}
})();
if((function (){var and__3822__auto____8051 = (5 < this__8047.shift);
if(and__3822__auto____8051)
{return (cljs.core.pv_aget.call(null,new_root__8050,1) == null);
} else
{return and__3822__auto____8051;
}
})())
{var new_root__8052 = cljs.core.tv_ensure_editable.call(null,this__8047.root.edit,cljs.core.pv_aget.call(null,new_root__8050,0));
this__8047.root = new_root__8052;
this__8047.shift = (this__8047.shift - 5);
this__8047.cnt = (this__8047.cnt - 1);
this__8047.tail = new_tail__8048;
return tcoll;
} else
{this__8047.root = new_root__8050;
this__8047.cnt = (this__8047.cnt - 1);
this__8047.tail = new_tail__8048;
return tcoll;
}
} else
{return null;
}
}
}
}
} else
{throw (new Error("pop! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__8053 = this;
return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,key,val);
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__8054 = this;
if(this__8054.root.edit)
{if(((this__8054.cnt - cljs.core.tail_off.call(null,tcoll)) < 32))
{(this__8054.tail[(this__8054.cnt & 31)] = o);
this__8054.cnt = (this__8054.cnt + 1);
return tcoll;
} else
{var tail_node__8055 = (new cljs.core.VectorNode(this__8054.root.edit,this__8054.tail));
var new_tail__8056 = cljs.core.make_array.call(null,32);
(new_tail__8056[0] = o);
this__8054.tail = new_tail__8056;
if(((this__8054.cnt >>> 5) > (1 << this__8054.shift)))
{var new_root_array__8057 = cljs.core.make_array.call(null,32);
var new_shift__8058 = (this__8054.shift + 5);
(new_root_array__8057[0] = this__8054.root);
(new_root_array__8057[1] = cljs.core.new_path.call(null,this__8054.root.edit,this__8054.shift,tail_node__8055));
this__8054.root = (new cljs.core.VectorNode(this__8054.root.edit,new_root_array__8057));
this__8054.shift = new_shift__8058;
this__8054.cnt = (this__8054.cnt + 1);
return tcoll;
} else
{var new_root__8059 = cljs.core.tv_push_tail.call(null,tcoll,this__8054.shift,this__8054.root,tail_node__8055);
this__8054.root = new_root__8059;
this__8054.cnt = (this__8054.cnt + 1);
return tcoll;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__8060 = this;
if(this__8060.root.edit)
{this__8060.root.edit = null;
var len__8061 = (this__8060.cnt - cljs.core.tail_off.call(null,tcoll));
var trimmed_tail__8062 = cljs.core.make_array.call(null,len__8061);
cljs.core.array_copy.call(null,this__8060.tail,0,trimmed_tail__8062,0,len__8061);
return (new cljs.core.PersistentVector(null,this__8060.cnt,this__8060.shift,this__8060.root,trimmed_tail__8062,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientVector;

/**
* @constructor
*/
cljs.core.PersistentQueueSeq = (function (meta,front,rear,__hash){
this.meta = meta;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.PersistentQueueSeq.cljs$lang$type = true;
cljs.core.PersistentQueueSeq.cljs$lang$ctorPrSeq = (function (this__2290__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8064 = this;
var h__2173__auto____8065 = this__8064.__hash;
if(!((h__2173__auto____8065 == null)))
{return h__2173__auto____8065;
} else
{var h__2173__auto____8066 = cljs.core.hash_coll.call(null,coll);
this__8064.__hash = h__2173__auto____8066;
return h__2173__auto____8066;
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8067 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.toString = (function (){
var this__8068 = this;
var this__8069 = this;
return cljs.core.pr_str.call(null,this__8069);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8070 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8071 = this;
return cljs.core._first.call(null,this__8071.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8072 = this;
var temp__3971__auto____8073 = cljs.core.next.call(null,this__8072.front);
if(temp__3971__auto____8073)
{var f1__8074 = temp__3971__auto____8073;
return (new cljs.core.PersistentQueueSeq(this__8072.meta,f1__8074,this__8072.rear,null));
} else
{if((this__8072.rear == null))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__8072.meta,this__8072.rear,null,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8075 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8076 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__8076.front,this__8076.rear,this__8076.__hash));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8077 = this;
return this__8077.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8078 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8078.meta);
});
cljs.core.PersistentQueueSeq;

/**
* @constructor
*/
cljs.core.PersistentQueue = (function (meta,count,front,rear,__hash){
this.meta = meta;
this.count = count;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31858766;
})
cljs.core.PersistentQueue.cljs$lang$type = true;
cljs.core.PersistentQueue.cljs$lang$ctorPrSeq = (function (this__2290__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentQueue");
});
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8079 = this;
var h__2173__auto____8080 = this__8079.__hash;
if(!((h__2173__auto____8080 == null)))
{return h__2173__auto____8080;
} else
{var h__2173__auto____8081 = cljs.core.hash_coll.call(null,coll);
this__8079.__hash = h__2173__auto____8081;
return h__2173__auto____8081;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8082 = this;
if(cljs.core.truth_(this__8082.front))
{return (new cljs.core.PersistentQueue(this__8082.meta,(this__8082.count + 1),this__8082.front,cljs.core.conj.call(null,(function (){var or__3824__auto____8083 = this__8082.rear;
if(cljs.core.truth_(or__3824__auto____8083))
{return or__3824__auto____8083;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),o),null));
} else
{return (new cljs.core.PersistentQueue(this__8082.meta,(this__8082.count + 1),cljs.core.conj.call(null,this__8082.front,o),cljs.core.PersistentVector.EMPTY,null));
}
});
cljs.core.PersistentQueue.prototype.toString = (function (){
var this__8084 = this;
var this__8085 = this;
return cljs.core.pr_str.call(null,this__8085);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8086 = this;
var rear__8087 = cljs.core.seq.call(null,this__8086.rear);
if(cljs.core.truth_((function (){var or__3824__auto____8088 = this__8086.front;
if(cljs.core.truth_(or__3824__auto____8088))
{return or__3824__auto____8088;
} else
{return rear__8087;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__8086.front,cljs.core.seq.call(null,rear__8087),null));
} else
{return null;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8089 = this;
return this__8089.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8090 = this;
return cljs.core._first.call(null,this__8090.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8091 = this;
if(cljs.core.truth_(this__8091.front))
{var temp__3971__auto____8092 = cljs.core.next.call(null,this__8091.front);
if(temp__3971__auto____8092)
{var f1__8093 = temp__3971__auto____8092;
return (new cljs.core.PersistentQueue(this__8091.meta,(this__8091.count - 1),f1__8093,this__8091.rear,null));
} else
{return (new cljs.core.PersistentQueue(this__8091.meta,(this__8091.count - 1),cljs.core.seq.call(null,this__8091.rear),cljs.core.PersistentVector.EMPTY,null));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8094 = this;
return cljs.core.first.call(null,this__8094.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8095 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8096 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8097 = this;
return (new cljs.core.PersistentQueue(meta,this__8097.count,this__8097.front,this__8097.rear,this__8097.__hash));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8098 = this;
return this__8098.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8099 = this;
return cljs.core.PersistentQueue.EMPTY;
});
cljs.core.PersistentQueue;
cljs.core.PersistentQueue.EMPTY = (new cljs.core.PersistentQueue(null,0,null,cljs.core.PersistentVector.EMPTY,0));

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2097152;
})
cljs.core.NeverEquiv.cljs$lang$type = true;
cljs.core.NeverEquiv.cljs$lang$ctorPrSeq = (function (this__2290__auto__){
return cljs.core.list.call(null,"cljs.core/NeverEquiv");
});
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__8100 = this;
return false;
});
cljs.core.NeverEquiv;
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$.call(null,((cljs.core.map_QMARK_.call(null,y))?(((cljs.core.count.call(null,x) === cljs.core.count.call(null,y)))?cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,(function (xkv){
return cljs.core._EQ_.call(null,cljs.core._lookup.call(null,y,cljs.core.first.call(null,xkv),cljs.core.never_equiv),cljs.core.second.call(null,xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len__8103 = array.length;
var i__8104 = 0;
while(true){
if((i__8104 < len__8103))
{if((k === (array[i__8104])))
{return i__8104;
} else
{{
var G__8105 = (i__8104 + incr);
i__8104 = G__8105;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__8108 = cljs.core.hash.call(null,a);
var b__8109 = cljs.core.hash.call(null,b);
if((a__8108 < b__8109))
{return -1;
} else
{if((a__8108 > b__8109))
{return 1;
} else
{if("\uFDD0'else")
{return 0;
} else
{return null;
}
}
}
});
cljs.core.obj_map__GT_hash_map = (function obj_map__GT_hash_map(m,k,v){
var ks__8117 = m.keys;
var len__8118 = ks__8117.length;
var so__8119 = m.strobj;
var out__8120 = cljs.core.with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,cljs.core.meta.call(null,m));
var i__8121 = 0;
var out__8122 = cljs.core.transient$.call(null,out__8120);
while(true){
if((i__8121 < len__8118))
{var k__8123 = (ks__8117[i__8121]);
{
var G__8124 = (i__8121 + 1);
var G__8125 = cljs.core.assoc_BANG_.call(null,out__8122,k__8123,(so__8119[k__8123]));
i__8121 = G__8124;
out__8122 = G__8125;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,out__8122,k,v));
}
break;
}
});
cljs.core.obj_clone = (function obj_clone(obj,ks){
var new_obj__8131 = {};
var l__8132 = ks.length;
var i__8133 = 0;
while(true){
if((i__8133 < l__8132))
{var k__8134 = (ks[i__8133]);
(new_obj__8131[k__8134] = (obj[k__8134]));
{
var G__8135 = (i__8133 + 1);
i__8133 = G__8135;
continue;
}
} else
{}
break;
}
return new_obj__8131;
});

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj,update_count,__hash){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
this.update_count = update_count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 15075087;
})
cljs.core.ObjMap.cljs$lang$type = true;
cljs.core.ObjMap.cljs$lang$ctorPrSeq = (function (this__2290__auto__){
return cljs.core.list.call(null,"cljs.core/ObjMap");
});
cljs.core.ObjMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__8138 = this;
return cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null),coll));
});
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8139 = this;
var h__2173__auto____8140 = this__8139.__hash;
if(!((h__2173__auto____8140 == null)))
{return h__2173__auto____8140;
} else
{var h__2173__auto____8141 = cljs.core.hash_imap.call(null,coll);
this__8139.__hash = h__2173__auto____8141;
return h__2173__auto____8141;
}
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8142 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8143 = this;
if((function (){var and__3822__auto____8144 = goog.isString(k);
if(and__3822__auto____8144)
{return !((cljs.core.scan_array.call(null,1,k,this__8143.keys) == null));
} else
{return and__3822__auto____8144;
}
})())
{return (this__8143.strobj[k]);
} else
{return not_found;
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8145 = this;
if(goog.isString(k))
{if((function (){var or__3824__auto____8146 = (this__8145.update_count > cljs.core.ObjMap.HASHMAP_THRESHOLD);
if(or__3824__auto____8146)
{return or__3824__auto____8146;
} else
{return (this__8145.keys.length >= cljs.core.ObjMap.HASHMAP_THRESHOLD);
}
})())
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
} else
{if(!((cljs.core.scan_array.call(null,1,k,this__8145.keys) == null)))
{var new_strobj__8147 = cljs.core.obj_clone.call(null,this__8145.strobj,this__8145.keys);
(new_strobj__8147[k] = v);
return (new cljs.core.ObjMap(this__8145.meta,this__8145.keys,new_strobj__8147,(this__8145.update_count + 1),null));
} else
{var new_strobj__8148 = cljs.core.obj_clone.call(null,this__8145.strobj,this__8145.keys);
var new_keys__8149 = this__8145.keys.slice();
(new_strobj__8148[k] = v);
new_keys__8149.push(k);
return (new cljs.core.ObjMap(this__8145.meta,new_keys__8149,new_strobj__8148,(this__8145.update_count + 1),null));
}
}
} else
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__8150 = this;
if((function (){var and__3822__auto____8151 = goog.isString(k);
if(and__3822__auto____8151)
{return !((cljs.core.scan_array.call(null,1,k,this__8150.keys) == null));
} else
{return and__3822__auto____8151;
}
})())
{return true;
} else
{return false;
}
});
cljs.core.ObjMap.prototype.call = (function() {
var G__8173 = null;
var G__8173__2 = (function (this_sym8152,k){
var this__8154 = this;
var this_sym8152__8155 = this;
var coll__8156 = this_sym8152__8155;
return coll__8156.cljs$core$ILookup$_lookup$arity$2(coll__8156,k);
});
var G__8173__3 = (function (this_sym8153,k,not_found){
var this__8154 = this;
var this_sym8153__8157 = this;
var coll__8158 = this_sym8153__8157;
return coll__8158.cljs$core$ILookup$_lookup$arity$3(coll__8158,k,not_found);
});
G__8173 = function(this_sym8153,k,not_found){
switch(arguments.length){
case 2:
return G__8173__2.call(this,this_sym8153,k);
case 3:
return G__8173__3.call(this,this_sym8153,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8173;
})()
;
cljs.core.ObjMap.prototype.apply = (function (this_sym8136,args8137){
var this__8159 = this;
return this_sym8136.call.apply(this_sym8136,[this_sym8136].concat(args8137.slice()));
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__8160 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.toString = (function (){
var this__8161 = this;
var this__8162 = this;
return cljs.core.pr_str.call(null,this__8162);
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8163 = this;
if((this__8163.keys.length > 0))
{return cljs.core.map.call(null,(function (p1__8126_SHARP_){
return cljs.core.vector.call(null,p1__8126_SHARP_,(this__8163.strobj[p1__8126_SHARP_]));
}),this__8163.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8164 = this;
return this__8164.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8165 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8166 = this;
return (new cljs.core.ObjMap(meta,this__8166.keys,this__8166.strobj,this__8166.update_count,this__8166.__hash));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8167 = this;
return this__8167.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8168 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__8168.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__8169 = this;
if((function (){var and__3822__auto____8170 = goog.isString(k);
if(and__3822__auto____8170)
{return !((cljs.core.scan_array.call(null,1,k,this__8169.keys) == null));
} else
{return and__3822__auto____8170;
}
})())
{var new_keys__8171 = this__8169.keys.slice();
var new_strobj__8172 = cljs.core.obj_clone.call(null,this__8169.strobj,this__8169.keys);
new_keys__8171.splice(cljs.core.scan_array.call(null,1,k,new_keys__8171),1);
cljs.core.js_delete.call(null,new_strobj__8172,k);
return (new cljs.core.ObjMap(this__8169.meta,new_keys__8171,new_strobj__8172,(this__8169.update_count + 1),null));
} else
{return coll;
}
});
cljs.core.ObjMap;
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,[],{},0,0));
cljs.core.ObjMap.HASHMAP_THRESHOLD = 32;
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj,0,null));
});

/**
* @constructor
*/
cljs.core.HashMap = (function (meta,count,hashobj,__hash){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 15075087;
})
cljs.core.HashMap.cljs$lang$type = true;
cljs.core.HashMap.cljs$lang$ctorPrSeq = (function (this__2290__auto__){
return cljs.core.list.call(null,"cljs.core/HashMap");
});
cljs.core.HashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8177 = this;
var h__2173__auto____8178 = this__8177.__hash;
if(!((h__2173__auto____8178 == null)))
{return h__2173__auto____8178;
} else
{var h__2173__auto____8179 = cljs.core.hash_imap.call(null,coll);
this__8177.__hash = h__2173__auto____8179;
return h__2173__auto____8179;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8180 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8181 = this;
var bucket__8182 = (this__8181.hashobj[cljs.core.hash.call(null,k)]);
var i__8183 = (cljs.core.truth_(bucket__8182)?cljs.core.scan_array.call(null,2,k,bucket__8182):null);
if(cljs.core.truth_(i__8183))
{return (bucket__8182[(i__8183 + 1)]);
} else
{return not_found;
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8184 = this;
var h__8185 = cljs.core.hash.call(null,k);
var bucket__8186 = (this__8184.hashobj[h__8185]);
if(cljs.core.truth_(bucket__8186))
{var new_bucket__8187 = bucket__8186.slice();
var new_hashobj__8188 = goog.object.clone(this__8184.hashobj);
(new_hashobj__8188[h__8185] = new_bucket__8187);
var temp__3971__auto____8189 = cljs.core.scan_array.call(null,2,k,new_bucket__8187);
if(cljs.core.truth_(temp__3971__auto____8189))
{var i__8190 = temp__3971__auto____8189;
(new_bucket__8187[(i__8190 + 1)] = v);
return (new cljs.core.HashMap(this__8184.meta,this__8184.count,new_hashobj__8188,null));
} else
{new_bucket__8187.push(k,v);
return (new cljs.core.HashMap(this__8184.meta,(this__8184.count + 1),new_hashobj__8188,null));
}
} else
{var new_hashobj__8191 = goog.object.clone(this__8184.hashobj);
(new_hashobj__8191[h__8185] = [k,v]);
return (new cljs.core.HashMap(this__8184.meta,(this__8184.count + 1),new_hashobj__8191,null));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__8192 = this;
var bucket__8193 = (this__8192.hashobj[cljs.core.hash.call(null,k)]);
var i__8194 = (cljs.core.truth_(bucket__8193)?cljs.core.scan_array.call(null,2,k,bucket__8193):null);
if(cljs.core.truth_(i__8194))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__8219 = null;
var G__8219__2 = (function (this_sym8195,k){
var this__8197 = this;
var this_sym8195__8198 = this;
var coll__8199 = this_sym8195__8198;
return coll__8199.cljs$core$ILookup$_lookup$arity$2(coll__8199,k);
});
var G__8219__3 = (function (this_sym8196,k,not_found){
var this__8197 = this;
var this_sym8196__8200 = this;
var coll__8201 = this_sym8196__8200;
return coll__8201.cljs$core$ILookup$_lookup$arity$3(coll__8201,k,not_found);
});
G__8219 = function(this_sym8196,k,not_found){
switch(arguments.length){
case 2:
return G__8219__2.call(this,this_sym8196,k);
case 3:
return G__8219__3.call(this,this_sym8196,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8219;
})()
;
cljs.core.HashMap.prototype.apply = (function (this_sym8175,args8176){
var this__8202 = this;
return this_sym8175.call.apply(this_sym8175,[this_sym8175].concat(args8176.slice()));
});
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__8203 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.toString = (function (){
var this__8204 = this;
var this__8205 = this;
return cljs.core.pr_str.call(null,this__8205);
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8206 = this;
if((this__8206.count > 0))
{var hashes__8207 = cljs.core.js_keys.call(null,this__8206.hashobj).sort();
return cljs.core.mapcat.call(null,(function (p1__8174_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__8206.hashobj[p1__8174_SHARP_])));
}),hashes__8207);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8208 = this;
return this__8208.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8209 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8210 = this;
return (new cljs.core.HashMap(meta,this__8210.count,this__8210.hashobj,this__8210.__hash));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8211 = this;
return this__8211.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8212 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__8212.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__8213 = this;
var h__8214 = cljs.core.hash.call(null,k);
var bucket__8215 = (this__8213.hashobj[h__8214]);
var i__8216 = (cljs.core.truth_(bucket__8215)?cljs.core.scan_array.call(null,2,k,bucket__8215):null);
if(cljs.core.not.call(null,i__8216))
{return coll;
} else
{var new_hashobj__8217 = goog.object.clone(this__8213.hashobj);
if((3 > bucket__8215.length))
{cljs.core.js_delete.call(null,new_hashobj__8217,h__8214);
} else
{var new_bucket__8218 = bucket__8215.slice();
new_bucket__8218.splice(i__8216,2);
(new_hashobj__8217[h__8214] = new_bucket__8218);
}
return (new cljs.core.HashMap(this__8213.meta,(this__8213.count - 1),new_hashobj__8217,null));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,{},0));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__8220 = ks.length;
var i__8221 = 0;
var out__8222 = cljs.core.HashMap.EMPTY;
while(true){
if((i__8221 < len__8220))
{{
var G__8223 = (i__8221 + 1);
var G__8224 = cljs.core.assoc.call(null,out__8222,(ks[i__8221]),(vs[i__8221]));
i__8221 = G__8223;
out__8222 = G__8224;
continue;
}
} else
{return out__8222;
}
break;
}
});
cljs.core.array_map_index_of = (function array_map_index_of(m,k){
var arr__8228 = m.arr;
var len__8229 = arr__8228.length;
var i__8230 = 0;
while(true){
if((len__8229 <= i__8230))
{return -1;
} else
{if(cljs.core._EQ_.call(null,(arr__8228[i__8230]),k))
{return i__8230;
} else
{if("\uFDD0'else")
{{
var G__8231 = (i__8230 + 2);
i__8230 = G__8231;
continue;
}
} else
{return null;
}
}
}
break;
}
});
void 0;

/**
* @constructor
*/
cljs.core.PersistentArrayMap = (function (meta,cnt,arr,__hash){
this.meta = meta;
this.cnt = cnt;
this.arr = arr;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
})
cljs.core.PersistentArrayMap.cljs$lang$type = true;
cljs.core.PersistentArrayMap.cljs$lang$ctorPrSeq = (function (this__2290__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentArrayMap");
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__8234 = this;
return (new cljs.core.TransientArrayMap({},this__8234.arr.length,this__8234.arr.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8235 = this;
var h__2173__auto____8236 = this__8235.__hash;
if(!((h__2173__auto____8236 == null)))
{return h__2173__auto____8236;
} else
{var h__2173__auto____8237 = cljs.core.hash_imap.call(null,coll);
this__8235.__hash = h__2173__auto____8237;
return h__2173__auto____8237;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8238 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8239 = this;
var idx__8240 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__8240 === -1))
{return not_found;
} else
{return (this__8239.arr[(idx__8240 + 1)]);
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8241 = this;
var idx__8242 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__8242 === -1))
{if((this__8241.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{return (new cljs.core.PersistentArrayMap(this__8241.meta,(this__8241.cnt + 1),(function (){var G__8243__8244 = this__8241.arr.slice();
G__8243__8244.push(k);
G__8243__8244.push(v);
return G__8243__8244;
})(),null));
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.PersistentHashMap.EMPTY,coll)),k,v));
}
} else
{if((v === (this__8241.arr[(idx__8242 + 1)])))
{return coll;
} else
{if("\uFDD0'else")
{return (new cljs.core.PersistentArrayMap(this__8241.meta,this__8241.cnt,(function (){var G__8245__8246 = this__8241.arr.slice();
(G__8245__8246[(idx__8242 + 1)] = v);
return G__8245__8246;
})(),null));
} else
{return null;
}
}
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__8247 = this;
return !((cljs.core.array_map_index_of.call(null,coll,k) === -1));
});
cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__8279 = null;
var G__8279__2 = (function (this_sym8248,k){
var this__8250 = this;
var this_sym8248__8251 = this;
var coll__8252 = this_sym8248__8251;
return coll__8252.cljs$core$ILookup$_lookup$arity$2(coll__8252,k);
});
var G__8279__3 = (function (this_sym8249,k,not_found){
var this__8250 = this;
var this_sym8249__8253 = this;
var coll__8254 = this_sym8249__8253;
return coll__8254.cljs$core$ILookup$_lookup$arity$3(coll__8254,k,not_found);
});
G__8279 = function(this_sym8249,k,not_found){
switch(arguments.length){
case 2:
return G__8279__2.call(this,this_sym8249,k);
case 3:
return G__8279__3.call(this,this_sym8249,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8279;
})()
;
cljs.core.PersistentArrayMap.prototype.apply = (function (this_sym8232,args8233){
var this__8255 = this;
return this_sym8232.call.apply(this_sym8232,[this_sym8232].concat(args8233.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__8256 = this;
var len__8257 = this__8256.arr.length;
var i__8258 = 0;
var init__8259 = init;
while(true){
if((i__8258 < len__8257))
{var init__8260 = f.call(null,init__8259,(this__8256.arr[i__8258]),(this__8256.arr[(i__8258 + 1)]));
if(cljs.core.reduced_QMARK_.call(null,init__8260))
{return cljs.core.deref.call(null,init__8260);
} else
{{
var G__8280 = (i__8258 + 2);
var G__8281 = init__8260;
i__8258 = G__8280;
init__8259 = G__8281;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__8261 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentArrayMap.prototype.toString = (function (){
var this__8262 = this;
var this__8263 = this;
return cljs.core.pr_str.call(null,this__8263);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8264 = this;
if((this__8264.cnt > 0))
{var len__8265 = this__8264.arr.length;
var array_map_seq__8266 = (function array_map_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < len__8265))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([(this__8264.arr[i]),(this__8264.arr[(i + 1)])], true),array_map_seq.call(null,(i + 2)));
} else
{return null;
}
}),null));
});
return array_map_seq__8266.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8267 = this;
return this__8267.cnt;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8268 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8269 = this;
return (new cljs.core.PersistentArrayMap(meta,this__8269.cnt,this__8269.arr,this__8269.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8270 = this;
return this__8270.meta;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8271 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8271.meta);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__8272 = this;
var idx__8273 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__8273 >= 0))
{var len__8274 = this__8272.arr.length;
var new_len__8275 = (len__8274 - 2);
if((new_len__8275 === 0))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var new_arr__8276 = cljs.core.make_array.call(null,new_len__8275);
var s__8277 = 0;
var d__8278 = 0;
while(true){
if((s__8277 >= len__8274))
{return (new cljs.core.PersistentArrayMap(this__8272.meta,(this__8272.cnt - 1),new_arr__8276,null));
} else
{if(cljs.core._EQ_.call(null,k,(this__8272.arr[s__8277])))
{{
var G__8282 = (s__8277 + 2);
var G__8283 = d__8278;
s__8277 = G__8282;
d__8278 = G__8283;
continue;
}
} else
{if("\uFDD0'else")
{(new_arr__8276[d__8278] = (this__8272.arr[s__8277]));
(new_arr__8276[(d__8278 + 1)] = (this__8272.arr[(s__8277 + 1)]));
{
var G__8284 = (s__8277 + 2);
var G__8285 = (d__8278 + 2);
s__8277 = G__8284;
d__8278 = G__8285;
continue;
}
} else
{return null;
}
}
}
break;
}
}
} else
{return coll;
}
});
cljs.core.PersistentArrayMap;
cljs.core.PersistentArrayMap.EMPTY = (new cljs.core.PersistentArrayMap(null,0,[],null));
cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD = 16;
cljs.core.PersistentArrayMap.fromArrays = (function (ks,vs){
var len__8286 = cljs.core.count.call(null,ks);
var i__8287 = 0;
var out__8288 = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i__8287 < len__8286))
{{
var G__8289 = (i__8287 + 1);
var G__8290 = cljs.core.assoc_BANG_.call(null,out__8288,(ks[i__8287]),(vs[i__8287]));
i__8287 = G__8289;
out__8288 = G__8290;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__8288);
}
break;
}
});
void 0;

/**
* @constructor
*/
cljs.core.TransientArrayMap = (function (editable_QMARK_,len,arr){
this.editable_QMARK_ = editable_QMARK_;
this.len = len;
this.arr = arr;
this.cljs$lang$protocol_mask$partition1$ = 14;
this.cljs$lang$protocol_mask$partition0$ = 258;
})
cljs.core.TransientArrayMap.cljs$lang$type = true;
cljs.core.TransientArrayMap.cljs$lang$ctorPrSeq = (function (this__2290__auto__){
return cljs.core.list.call(null,"cljs.core/TransientArrayMap");
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__8291 = this;
if(cljs.core.truth_(this__8291.editable_QMARK_))
{var idx__8292 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__8292 >= 0))
{(this__8291.arr[idx__8292] = (this__8291.arr[(this__8291.len - 2)]));
(this__8291.arr[(idx__8292 + 1)] = (this__8291.arr[(this__8291.len - 1)]));
var G__8293__8294 = this__8291.arr;
G__8293__8294.pop();
G__8293__8294.pop();
G__8293__8294;
this__8291.len = (this__8291.len - 2);
} else
{}
return tcoll;
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__8295 = this;
if(cljs.core.truth_(this__8295.editable_QMARK_))
{var idx__8296 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__8296 === -1))
{if(((this__8295.len + 2) <= (2 * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)))
{this__8295.len = (this__8295.len + 2);
this__8295.arr.push(key);
this__8295.arr.push(val);
return tcoll;
} else
{return cljs.core.assoc_BANG_.call(null,cljs.core.array__GT_transient_hash_map.call(null,this__8295.len,this__8295.arr),key,val);
}
} else
{if((val === (this__8295.arr[(idx__8296 + 1)])))
{return tcoll;
} else
{(this__8295.arr[(idx__8296 + 1)] = val);
return tcoll;
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__8297 = this;
if(cljs.core.truth_(this__8297.editable_QMARK_))
{if((function (){var G__8298__8299 = o;
if(G__8298__8299)
{if((function (){var or__3824__auto____8300 = (G__8298__8299.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____8300)
{return or__3824__auto____8300;
} else
{return G__8298__8299.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__8298__8299.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__8298__8299);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__8298__8299);
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__8301 = cljs.core.seq.call(null,o);
var tcoll__8302 = tcoll;
while(true){
var temp__3971__auto____8303 = cljs.core.first.call(null,es__8301);
if(cljs.core.truth_(temp__3971__auto____8303))
{var e__8304 = temp__3971__auto____8303;
{
var G__8310 = cljs.core.next.call(null,es__8301);
var G__8311 = tcoll__8302.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll__8302,cljs.core.key.call(null,e__8304),cljs.core.val.call(null,e__8304));
es__8301 = G__8310;
tcoll__8302 = G__8311;
continue;
}
} else
{return tcoll__8302;
}
break;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__8305 = this;
if(cljs.core.truth_(this__8305.editable_QMARK_))
{this__8305.editable_QMARK_ = false;
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,this__8305.len,2),this__8305.arr,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__8306 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,k,null);
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__8307 = this;
if(cljs.core.truth_(this__8307.editable_QMARK_))
{var idx__8308 = cljs.core.array_map_index_of.call(null,tcoll,k);
if((idx__8308 === -1))
{return not_found;
} else
{return (this__8307.arr[(idx__8308 + 1)]);
}
} else
{throw (new Error("lookup after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__8309 = this;
if(cljs.core.truth_(this__8309.editable_QMARK_))
{return cljs.core.quot.call(null,this__8309.len,2);
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientArrayMap;
void 0;
cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){
var out__8314 = cljs.core.transient$.call(null,cljs.core.ObjMap.EMPTY);
var i__8315 = 0;
while(true){
if((i__8315 < len))
{{
var G__8316 = cljs.core.assoc_BANG_.call(null,out__8314,(arr[i__8315]),(arr[(i__8315 + 1)]));
var G__8317 = (i__8315 + 2);
out__8314 = G__8316;
i__8315 = G__8317;
continue;
}
} else
{return out__8314;
}
break;
}
});

/**
* @constructor
*/
cljs.core.Box = (function (val){
this.val = val;
})
cljs.core.Box.cljs$lang$type = true;
cljs.core.Box.cljs$lang$ctorPrSeq = (function (this__2291__auto__){
return cljs.core.list.call(null,"cljs.core/Box");
});
cljs.core.Box;
void 0;
void 0;
void 0;
void 0;
void 0;
void 0;
cljs.core.key_test = (function key_test(key,other){
if(goog.isString(key))
{return (key === other);
} else
{return cljs.core._EQ_.call(null,key,other);
}
});
cljs.core.mask = (function mask(hash,shift){
return ((hash >>> shift) & 31);
});
cljs.core.clone_and_set = (function() {
var clone_and_set = null;
var clone_and_set__3 = (function (arr,i,a){
var G__8322__8323 = arr.slice();
(G__8322__8323[i] = a);
return G__8322__8323;
});
var clone_and_set__5 = (function (arr,i,a,j,b){
var G__8324__8325 = arr.slice();
(G__8324__8325[i] = a);
(G__8324__8325[j] = b);
return G__8324__8325;
});
clone_and_set = function(arr,i,a,j,b){
switch(arguments.length){
case 3:
return clone_and_set__3.call(this,arr,i,a);
case 5:
return clone_and_set__5.call(this,arr,i,a,j,b);
}
throw('Invalid arity: ' + arguments.length);
};
clone_and_set.cljs$lang$arity$3 = clone_and_set__3;
clone_and_set.cljs$lang$arity$5 = clone_and_set__5;
return clone_and_set;
})()
;
cljs.core.remove_pair = (function remove_pair(arr,i){
var new_arr__8327 = cljs.core.make_array.call(null,(arr.length - 2));
cljs.core.array_copy.call(null,arr,0,new_arr__8327,0,(2 * i));
cljs.core.array_copy.call(null,arr,(2 * (i + 1)),new_arr__8327,(2 * i),(new_arr__8327.length - (2 * i)));
return new_arr__8327;
});
cljs.core.bitmap_indexed_node_index = (function bitmap_indexed_node_index(bitmap,bit){
return cljs.core.bit_count.call(null,(bitmap & (bit - 1)));
});
cljs.core.bitpos = (function bitpos(hash,shift){
return (1 << ((hash >>> shift) & 0x01f));
});
cljs.core.edit_and_set = (function() {
var edit_and_set = null;
var edit_and_set__4 = (function (inode,edit,i,a){
var editable__8330 = inode.ensure_editable(edit);
(editable__8330.arr[i] = a);
return editable__8330;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){
var editable__8331 = inode.ensure_editable(edit);
(editable__8331.arr[i] = a);
(editable__8331.arr[j] = b);
return editable__8331;
});
edit_and_set = function(inode,edit,i,a,j,b){
switch(arguments.length){
case 4:
return edit_and_set__4.call(this,inode,edit,i,a);
case 6:
return edit_and_set__6.call(this,inode,edit,i,a,j,b);
}
throw('Invalid arity: ' + arguments.length);
};
edit_and_set.cljs$lang$arity$4 = edit_and_set__4;
edit_and_set.cljs$lang$arity$6 = edit_and_set__6;
return edit_and_set;
})()
;
cljs.core.inode_kv_reduce = (function inode_kv_reduce(arr,f,init){
var len__8338 = arr.length;
var i__8339 = 0;
var init__8340 = init;
while(true){
if((i__8339 < len__8338))
{var init__8343 = (function (){var k__8341 = (arr[i__8339]);
if(!((k__8341 == null)))
{return f.call(null,init__8340,k__8341,(arr[(i__8339 + 1)]));
} else
{var node__8342 = (arr[(i__8339 + 1)]);
if(!((node__8342 == null)))
{return node__8342.kv_reduce(f,init__8340);
} else
{return init__8340;
}
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__8343))
{return cljs.core.deref.call(null,init__8343);
} else
{{
var G__8344 = (i__8339 + 2);
var G__8345 = init__8343;
i__8339 = G__8344;
init__8340 = G__8345;
continue;
}
}
} else
{return init__8340;
}
break;
}
});
void 0;

/**
* @constructor
*/
cljs.core.BitmapIndexedNode = (function (edit,bitmap,arr){
this.edit = edit;
this.bitmap = bitmap;
this.arr = arr;
})
cljs.core.BitmapIndexedNode.cljs$lang$type = true;
cljs.core.BitmapIndexedNode.cljs$lang$ctorPrSeq = (function (this__2290__auto__){
return cljs.core.list.call(null,"cljs.core/BitmapIndexedNode");
});
cljs.core.BitmapIndexedNode.prototype.edit_and_remove_pair = (function (e,bit,i){
var this__8346 = this;
var inode__8347 = this;
if((this__8346.bitmap === bit))
{return null;
} else
{var editable__8348 = inode__8347.ensure_editable(e);
var earr__8349 = editable__8348.arr;
var len__8350 = earr__8349.length;
editable__8348.bitmap = (bit ^ editable__8348.bitmap);
cljs.core.array_copy.call(null,earr__8349,(2 * (i + 1)),earr__8349,(2 * i),(len__8350 - (2 * (i + 1))));
(earr__8349[(len__8350 - 2)] = null);
(earr__8349[(len__8350 - 1)] = null);
return editable__8348;
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__8351 = this;
var inode__8352 = this;
var bit__8353 = (1 << ((hash >>> shift) & 0x01f));
var idx__8354 = cljs.core.bitmap_indexed_node_index.call(null,this__8351.bitmap,bit__8353);
if(((this__8351.bitmap & bit__8353) === 0))
{var n__8355 = cljs.core.bit_count.call(null,this__8351.bitmap);
if(((2 * n__8355) < this__8351.arr.length))
{var editable__8356 = inode__8352.ensure_editable(edit);
var earr__8357 = editable__8356.arr;
added_leaf_QMARK_.val = true;
cljs.core.array_copy_downward.call(null,earr__8357,(2 * idx__8354),earr__8357,(2 * (idx__8354 + 1)),(2 * (n__8355 - idx__8354)));
(earr__8357[(2 * idx__8354)] = key);
(earr__8357[((2 * idx__8354) + 1)] = val);
editable__8356.bitmap = (editable__8356.bitmap | bit__8353);
return editable__8356;
} else
{if((n__8355 >= 16))
{var nodes__8358 = cljs.core.make_array.call(null,32);
var jdx__8359 = ((hash >>> shift) & 0x01f);
(nodes__8358[jdx__8359] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
var i__8360 = 0;
var j__8361 = 0;
while(true){
if((i__8360 < 32))
{if((((this__8351.bitmap >>> i__8360) & 1) === 0))
{{
var G__8414 = (i__8360 + 1);
var G__8415 = j__8361;
i__8360 = G__8414;
j__8361 = G__8415;
continue;
}
} else
{(nodes__8358[i__8360] = ((!(((this__8351.arr[j__8361]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),cljs.core.hash.call(null,(this__8351.arr[j__8361])),(this__8351.arr[j__8361]),(this__8351.arr[(j__8361 + 1)]),added_leaf_QMARK_):(this__8351.arr[(j__8361 + 1)])));
{
var G__8416 = (i__8360 + 1);
var G__8417 = (j__8361 + 2);
i__8360 = G__8416;
j__8361 = G__8417;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(edit,(n__8355 + 1),nodes__8358));
} else
{if("\uFDD0'else")
{var new_arr__8362 = cljs.core.make_array.call(null,(2 * (n__8355 + 4)));
cljs.core.array_copy.call(null,this__8351.arr,0,new_arr__8362,0,(2 * idx__8354));
(new_arr__8362[(2 * idx__8354)] = key);
(new_arr__8362[((2 * idx__8354) + 1)] = val);
cljs.core.array_copy.call(null,this__8351.arr,(2 * idx__8354),new_arr__8362,(2 * (idx__8354 + 1)),(2 * (n__8355 - idx__8354)));
added_leaf_QMARK_.val = true;
var editable__8363 = inode__8352.ensure_editable(edit);
editable__8363.arr = new_arr__8362;
editable__8363.bitmap = (editable__8363.bitmap | bit__8353);
return editable__8363;
} else
{return null;
}
}
}
} else
{var key_or_nil__8364 = (this__8351.arr[(2 * idx__8354)]);
var val_or_node__8365 = (this__8351.arr[((2 * idx__8354) + 1)]);
if((key_or_nil__8364 == null))
{var n__8366 = val_or_node__8365.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__8366 === val_or_node__8365))
{return inode__8352;
} else
{return cljs.core.edit_and_set.call(null,inode__8352,edit,((2 * idx__8354) + 1),n__8366);
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__8364))
{if((val === val_or_node__8365))
{return inode__8352;
} else
{return cljs.core.edit_and_set.call(null,inode__8352,edit,((2 * idx__8354) + 1),val);
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return cljs.core.edit_and_set.call(null,inode__8352,edit,(2 * idx__8354),null,((2 * idx__8354) + 1),cljs.core.create_node.call(null,edit,(shift + 5),key_or_nil__8364,val_or_node__8365,hash,key,val));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){
var this__8367 = this;
var inode__8368 = this;
return cljs.core.create_inode_seq.call(null,this__8367.arr);
});
cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__8369 = this;
var inode__8370 = this;
var bit__8371 = (1 << ((hash >>> shift) & 0x01f));
if(((this__8369.bitmap & bit__8371) === 0))
{return inode__8370;
} else
{var idx__8372 = cljs.core.bitmap_indexed_node_index.call(null,this__8369.bitmap,bit__8371);
var key_or_nil__8373 = (this__8369.arr[(2 * idx__8372)]);
var val_or_node__8374 = (this__8369.arr[((2 * idx__8372) + 1)]);
if((key_or_nil__8373 == null))
{var n__8375 = val_or_node__8374.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__8375 === val_or_node__8374))
{return inode__8370;
} else
{if(!((n__8375 == null)))
{return cljs.core.edit_and_set.call(null,inode__8370,edit,((2 * idx__8372) + 1),n__8375);
} else
{if((this__8369.bitmap === bit__8371))
{return null;
} else
{if("\uFDD0'else")
{return inode__8370.edit_and_remove_pair(edit,bit__8371,idx__8372);
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__8373))
{(removed_leaf_QMARK_[0] = true);
return inode__8370.edit_and_remove_pair(edit,bit__8371,idx__8372);
} else
{if("\uFDD0'else")
{return inode__8370;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){
var this__8376 = this;
var inode__8377 = this;
if((e === this__8376.edit))
{return inode__8377;
} else
{var n__8378 = cljs.core.bit_count.call(null,this__8376.bitmap);
var new_arr__8379 = cljs.core.make_array.call(null,(((n__8378 < 0))?4:(2 * (n__8378 + 1))));
cljs.core.array_copy.call(null,this__8376.arr,0,new_arr__8379,0,(2 * n__8378));
return (new cljs.core.BitmapIndexedNode(e,this__8376.bitmap,new_arr__8379));
}
});
cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){
var this__8380 = this;
var inode__8381 = this;
return cljs.core.inode_kv_reduce.call(null,this__8380.arr,f,init);
});
cljs.core.BitmapIndexedNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__8382 = this;
var inode__8383 = this;
var bit__8384 = (1 << ((hash >>> shift) & 0x01f));
if(((this__8382.bitmap & bit__8384) === 0))
{return not_found;
} else
{var idx__8385 = cljs.core.bitmap_indexed_node_index.call(null,this__8382.bitmap,bit__8384);
var key_or_nil__8386 = (this__8382.arr[(2 * idx__8385)]);
var val_or_node__8387 = (this__8382.arr[((2 * idx__8385) + 1)]);
if((key_or_nil__8386 == null))
{return val_or_node__8387.inode_find((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__8386))
{return cljs.core.PersistentVector.fromArray([key_or_nil__8386,val_or_node__8387], true);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_without = (function (shift,hash,key){
var this__8388 = this;
var inode__8389 = this;
var bit__8390 = (1 << ((hash >>> shift) & 0x01f));
if(((this__8388.bitmap & bit__8390) === 0))
{return inode__8389;
} else
{var idx__8391 = cljs.core.bitmap_indexed_node_index.call(null,this__8388.bitmap,bit__8390);
var key_or_nil__8392 = (this__8388.arr[(2 * idx__8391)]);
var val_or_node__8393 = (this__8388.arr[((2 * idx__8391) + 1)]);
if((key_or_nil__8392 == null))
{var n__8394 = val_or_node__8393.inode_without((shift + 5),hash,key);
if((n__8394 === val_or_node__8393))
{return inode__8389;
} else
{if(!((n__8394 == null)))
{return (new cljs.core.BitmapIndexedNode(null,this__8388.bitmap,cljs.core.clone_and_set.call(null,this__8388.arr,((2 * idx__8391) + 1),n__8394)));
} else
{if((this__8388.bitmap === bit__8390))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.BitmapIndexedNode(null,(this__8388.bitmap ^ bit__8390),cljs.core.remove_pair.call(null,this__8388.arr,idx__8391)));
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__8392))
{return (new cljs.core.BitmapIndexedNode(null,(this__8388.bitmap ^ bit__8390),cljs.core.remove_pair.call(null,this__8388.arr,idx__8391)));
} else
{if("\uFDD0'else")
{return inode__8389;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__8395 = this;
var inode__8396 = this;
var bit__8397 = (1 << ((hash >>> shift) & 0x01f));
var idx__8398 = cljs.core.bitmap_indexed_node_index.call(null,this__8395.bitmap,bit__8397);
if(((this__8395.bitmap & bit__8397) === 0))
{var n__8399 = cljs.core.bit_count.call(null,this__8395.bitmap);
if((n__8399 >= 16))
{var nodes__8400 = cljs.core.make_array.call(null,32);
var jdx__8401 = ((hash >>> shift) & 0x01f);
(nodes__8400[jdx__8401] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_));
var i__8402 = 0;
var j__8403 = 0;
while(true){
if((i__8402 < 32))
{if((((this__8395.bitmap >>> i__8402) & 1) === 0))
{{
var G__8418 = (i__8402 + 1);
var G__8419 = j__8403;
i__8402 = G__8418;
j__8403 = G__8419;
continue;
}
} else
{(nodes__8400[i__8402] = ((!(((this__8395.arr[j__8403]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),cljs.core.hash.call(null,(this__8395.arr[j__8403])),(this__8395.arr[j__8403]),(this__8395.arr[(j__8403 + 1)]),added_leaf_QMARK_):(this__8395.arr[(j__8403 + 1)])));
{
var G__8420 = (i__8402 + 1);
var G__8421 = (j__8403 + 2);
i__8402 = G__8420;
j__8403 = G__8421;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(null,(n__8399 + 1),nodes__8400));
} else
{var new_arr__8404 = cljs.core.make_array.call(null,(2 * (n__8399 + 1)));
cljs.core.array_copy.call(null,this__8395.arr,0,new_arr__8404,0,(2 * idx__8398));
(new_arr__8404[(2 * idx__8398)] = key);
(new_arr__8404[((2 * idx__8398) + 1)] = val);
cljs.core.array_copy.call(null,this__8395.arr,(2 * idx__8398),new_arr__8404,(2 * (idx__8398 + 1)),(2 * (n__8399 - idx__8398)));
added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,(this__8395.bitmap | bit__8397),new_arr__8404));
}
} else
{var key_or_nil__8405 = (this__8395.arr[(2 * idx__8398)]);
var val_or_node__8406 = (this__8395.arr[((2 * idx__8398) + 1)]);
if((key_or_nil__8405 == null))
{var n__8407 = val_or_node__8406.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__8407 === val_or_node__8406))
{return inode__8396;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__8395.bitmap,cljs.core.clone_and_set.call(null,this__8395.arr,((2 * idx__8398) + 1),n__8407)));
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__8405))
{if((val === val_or_node__8406))
{return inode__8396;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__8395.bitmap,cljs.core.clone_and_set.call(null,this__8395.arr,((2 * idx__8398) + 1),val)));
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,this__8395.bitmap,cljs.core.clone_and_set.call(null,this__8395.arr,(2 * idx__8398),null,((2 * idx__8398) + 1),cljs.core.create_node.call(null,(shift + 5),key_or_nil__8405,val_or_node__8406,hash,key,val))));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__8408 = this;
var inode__8409 = this;
var bit__8410 = (1 << ((hash >>> shift) & 0x01f));
if(((this__8408.bitmap & bit__8410) === 0))
{return not_found;
} else
{var idx__8411 = cljs.core.bitmap_indexed_node_index.call(null,this__8408.bitmap,bit__8410);
var key_or_nil__8412 = (this__8408.arr[(2 * idx__8411)]);
var val_or_node__8413 = (this__8408.arr[((2 * idx__8411) + 1)]);
if((key_or_nil__8412 == null))
{return val_or_node__8413.inode_lookup((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__8412))
{return val_or_node__8413;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode;
cljs.core.BitmapIndexedNode.EMPTY = (new cljs.core.BitmapIndexedNode(null,0,cljs.core.make_array.call(null,0)));
cljs.core.pack_array_node = (function pack_array_node(array_node,edit,idx){
var arr__8429 = array_node.arr;
var len__8430 = (2 * (array_node.cnt - 1));
var new_arr__8431 = cljs.core.make_array.call(null,len__8430);
var i__8432 = 0;
var j__8433 = 1;
var bitmap__8434 = 0;
while(true){
if((i__8432 < len__8430))
{if((function (){var and__3822__auto____8435 = !((i__8432 === idx));
if(and__3822__auto____8435)
{return !(((arr__8429[i__8432]) == null));
} else
{return and__3822__auto____8435;
}
})())
{(new_arr__8431[j__8433] = (arr__8429[i__8432]));
{
var G__8436 = (i__8432 + 1);
var G__8437 = (j__8433 + 2);
var G__8438 = (bitmap__8434 | (1 << i__8432));
i__8432 = G__8436;
j__8433 = G__8437;
bitmap__8434 = G__8438;
continue;
}
} else
{{
var G__8439 = (i__8432 + 1);
var G__8440 = j__8433;
var G__8441 = bitmap__8434;
i__8432 = G__8439;
j__8433 = G__8440;
bitmap__8434 = G__8441;
continue;
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,bitmap__8434,new_arr__8431));
}
break;
}
});

/**
* @constructor
*/
cljs.core.ArrayNode = (function (edit,cnt,arr){
this.edit = edit;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.ArrayNode.cljs$lang$type = true;
cljs.core.ArrayNode.cljs$lang$ctorPrSeq = (function (this__2290__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayNode");
});
cljs.core.ArrayNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__8442 = this;
var inode__8443 = this;
var idx__8444 = ((hash >>> shift) & 0x01f);
var node__8445 = (this__8442.arr[idx__8444]);
if((node__8445 == null))
{var editable__8446 = cljs.core.edit_and_set.call(null,inode__8443,edit,idx__8444,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
editable__8446.cnt = (editable__8446.cnt + 1);
return editable__8446;
} else
{var n__8447 = node__8445.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__8447 === node__8445))
{return inode__8443;
} else
{return cljs.core.edit_and_set.call(null,inode__8443,edit,idx__8444,n__8447);
}
}
});
cljs.core.ArrayNode.prototype.inode_seq = (function (){
var this__8448 = this;
var inode__8449 = this;
return cljs.core.create_array_node_seq.call(null,this__8448.arr);
});
cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__8450 = this;
var inode__8451 = this;
var idx__8452 = ((hash >>> shift) & 0x01f);
var node__8453 = (this__8450.arr[idx__8452]);
if((node__8453 == null))
{return inode__8451;
} else
{var n__8454 = node__8453.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__8454 === node__8453))
{return inode__8451;
} else
{if((n__8454 == null))
{if((this__8450.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__8451,edit,idx__8452);
} else
{var editable__8455 = cljs.core.edit_and_set.call(null,inode__8451,edit,idx__8452,n__8454);
editable__8455.cnt = (editable__8455.cnt - 1);
return editable__8455;
}
} else
{if("\uFDD0'else")
{return cljs.core.edit_and_set.call(null,inode__8451,edit,idx__8452,n__8454);
} else
{return null;
}
}
}
}
});
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){
var this__8456 = this;
var inode__8457 = this;
if((e === this__8456.edit))
{return inode__8457;
} else
{return (new cljs.core.ArrayNode(e,this__8456.cnt,this__8456.arr.slice()));
}
});
cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){
var this__8458 = this;
var inode__8459 = this;
var len__8460 = this__8458.arr.length;
var i__8461 = 0;
var init__8462 = init;
while(true){
if((i__8461 < len__8460))
{var node__8463 = (this__8458.arr[i__8461]);
if(!((node__8463 == null)))
{var init__8464 = node__8463.kv_reduce(f,init__8462);
if(cljs.core.reduced_QMARK_.call(null,init__8464))
{return cljs.core.deref.call(null,init__8464);
} else
{{
var G__8483 = (i__8461 + 1);
var G__8484 = init__8464;
i__8461 = G__8483;
init__8462 = G__8484;
continue;
}
}
} else
{return null;
}
} else
{return init__8462;
}
break;
}
});
cljs.core.ArrayNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__8465 = this;
var inode__8466 = this;
var idx__8467 = ((hash >>> shift) & 0x01f);
var node__8468 = (this__8465.arr[idx__8467]);
if(!((node__8468 == null)))
{return node__8468.inode_find((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){
var this__8469 = this;
var inode__8470 = this;
var idx__8471 = ((hash >>> shift) & 0x01f);
var node__8472 = (this__8469.arr[idx__8471]);
if(!((node__8472 == null)))
{var n__8473 = node__8472.inode_without((shift + 5),hash,key);
if((n__8473 === node__8472))
{return inode__8470;
} else
{if((n__8473 == null))
{if((this__8469.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__8470,null,idx__8471);
} else
{return (new cljs.core.ArrayNode(null,(this__8469.cnt - 1),cljs.core.clone_and_set.call(null,this__8469.arr,idx__8471,n__8473)));
}
} else
{if("\uFDD0'else")
{return (new cljs.core.ArrayNode(null,this__8469.cnt,cljs.core.clone_and_set.call(null,this__8469.arr,idx__8471,n__8473)));
} else
{return null;
}
}
}
} else
{return inode__8470;
}
});
cljs.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__8474 = this;
var inode__8475 = this;
var idx__8476 = ((hash >>> shift) & 0x01f);
var node__8477 = (this__8474.arr[idx__8476]);
if((node__8477 == null))
{return (new cljs.core.ArrayNode(null,(this__8474.cnt + 1),cljs.core.clone_and_set.call(null,this__8474.arr,idx__8476,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_))));
} else
{var n__8478 = node__8477.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__8478 === node__8477))
{return inode__8475;
} else
{return (new cljs.core.ArrayNode(null,this__8474.cnt,cljs.core.clone_and_set.call(null,this__8474.arr,idx__8476,n__8478)));
}
}
});
cljs.core.ArrayNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__8479 = this;
var inode__8480 = this;
var idx__8481 = ((hash >>> shift) & 0x01f);
var node__8482 = (this__8479.arr[idx__8481]);
if(!((node__8482 == null)))
{return node__8482.inode_lookup((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode;
cljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){
var lim__8487 = (2 * cnt);
var i__8488 = 0;
while(true){
if((i__8488 < lim__8487))
{if(cljs.core.key_test.call(null,key,(arr[i__8488])))
{return i__8488;
} else
{{
var G__8489 = (i__8488 + 2);
i__8488 = G__8489;
continue;
}
}
} else
{return -1;
}
break;
}
});

/**
* @constructor
*/
cljs.core.HashCollisionNode = (function (edit,collision_hash,cnt,arr){
this.edit = edit;
this.collision_hash = collision_hash;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.HashCollisionNode.cljs$lang$type = true;
cljs.core.HashCollisionNode.cljs$lang$ctorPrSeq = (function (this__2290__auto__){
return cljs.core.list.call(null,"cljs.core/HashCollisionNode");
});
cljs.core.HashCollisionNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__8490 = this;
var inode__8491 = this;
if((hash === this__8490.collision_hash))
{var idx__8492 = cljs.core.hash_collision_node_find_index.call(null,this__8490.arr,this__8490.cnt,key);
if((idx__8492 === -1))
{if((this__8490.arr.length > (2 * this__8490.cnt)))
{var editable__8493 = cljs.core.edit_and_set.call(null,inode__8491,edit,(2 * this__8490.cnt),key,((2 * this__8490.cnt) + 1),val);
added_leaf_QMARK_.val = true;
editable__8493.cnt = (editable__8493.cnt + 1);
return editable__8493;
} else
{var len__8494 = this__8490.arr.length;
var new_arr__8495 = cljs.core.make_array.call(null,(len__8494 + 2));
cljs.core.array_copy.call(null,this__8490.arr,0,new_arr__8495,0,len__8494);
(new_arr__8495[len__8494] = key);
(new_arr__8495[(len__8494 + 1)] = val);
added_leaf_QMARK_.val = true;
return inode__8491.ensure_editable_array(edit,(this__8490.cnt + 1),new_arr__8495);
}
} else
{if(((this__8490.arr[(idx__8492 + 1)]) === val))
{return inode__8491;
} else
{return cljs.core.edit_and_set.call(null,inode__8491,edit,(idx__8492 + 1),val);
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,(1 << ((this__8490.collision_hash >>> shift) & 0x01f)),[null,inode__8491,null,null])).inode_assoc_BANG_(edit,shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_seq = (function (){
var this__8496 = this;
var inode__8497 = this;
return cljs.core.create_inode_seq.call(null,this__8496.arr);
});
cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__8498 = this;
var inode__8499 = this;
var idx__8500 = cljs.core.hash_collision_node_find_index.call(null,this__8498.arr,this__8498.cnt,key);
if((idx__8500 === -1))
{return inode__8499;
} else
{(removed_leaf_QMARK_[0] = true);
if((this__8498.cnt === 1))
{return null;
} else
{var editable__8501 = inode__8499.ensure_editable(edit);
var earr__8502 = editable__8501.arr;
(earr__8502[idx__8500] = (earr__8502[((2 * this__8498.cnt) - 2)]));
(earr__8502[(idx__8500 + 1)] = (earr__8502[((2 * this__8498.cnt) - 1)]));
(earr__8502[((2 * this__8498.cnt) - 1)] = null);
(earr__8502[((2 * this__8498.cnt) - 2)] = null);
editable__8501.cnt = (editable__8501.cnt - 1);
return editable__8501;
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable = (function (e){
var this__8503 = this;
var inode__8504 = this;
if((e === this__8503.edit))
{return inode__8504;
} else
{var new_arr__8505 = cljs.core.make_array.call(null,(2 * (this__8503.cnt + 1)));
cljs.core.array_copy.call(null,this__8503.arr,0,new_arr__8505,0,(2 * this__8503.cnt));
return (new cljs.core.HashCollisionNode(e,this__8503.collision_hash,this__8503.cnt,new_arr__8505));
}
});
cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){
var this__8506 = this;
var inode__8507 = this;
return cljs.core.inode_kv_reduce.call(null,this__8506.arr,f,init);
});
cljs.core.HashCollisionNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__8508 = this;
var inode__8509 = this;
var idx__8510 = cljs.core.hash_collision_node_find_index.call(null,this__8508.arr,this__8508.cnt,key);
if((idx__8510 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__8508.arr[idx__8510])))
{return cljs.core.PersistentVector.fromArray([(this__8508.arr[idx__8510]),(this__8508.arr[(idx__8510 + 1)])], true);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_without = (function (shift,hash,key){
var this__8511 = this;
var inode__8512 = this;
var idx__8513 = cljs.core.hash_collision_node_find_index.call(null,this__8511.arr,this__8511.cnt,key);
if((idx__8513 === -1))
{return inode__8512;
} else
{if((this__8511.cnt === 1))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.HashCollisionNode(null,this__8511.collision_hash,(this__8511.cnt - 1),cljs.core.remove_pair.call(null,this__8511.arr,cljs.core.quot.call(null,idx__8513,2))));
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__8514 = this;
var inode__8515 = this;
if((hash === this__8514.collision_hash))
{var idx__8516 = cljs.core.hash_collision_node_find_index.call(null,this__8514.arr,this__8514.cnt,key);
if((idx__8516 === -1))
{var len__8517 = this__8514.arr.length;
var new_arr__8518 = cljs.core.make_array.call(null,(len__8517 + 2));
cljs.core.array_copy.call(null,this__8514.arr,0,new_arr__8518,0,len__8517);
(new_arr__8518[len__8517] = key);
(new_arr__8518[(len__8517 + 1)] = val);
added_leaf_QMARK_.val = true;
return (new cljs.core.HashCollisionNode(null,this__8514.collision_hash,(this__8514.cnt + 1),new_arr__8518));
} else
{if(cljs.core._EQ_.call(null,(this__8514.arr[idx__8516]),val))
{return inode__8515;
} else
{return (new cljs.core.HashCollisionNode(null,this__8514.collision_hash,this__8514.cnt,cljs.core.clone_and_set.call(null,this__8514.arr,(idx__8516 + 1),val)));
}
}
} else
{return (new cljs.core.BitmapIndexedNode(null,(1 << ((this__8514.collision_hash >>> shift) & 0x01f)),[null,inode__8515])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__8519 = this;
var inode__8520 = this;
var idx__8521 = cljs.core.hash_collision_node_find_index.call(null,this__8519.arr,this__8519.cnt,key);
if((idx__8521 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__8519.arr[idx__8521])))
{return (this__8519.arr[(idx__8521 + 1)]);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable_array = (function (e,count,array){
var this__8522 = this;
var inode__8523 = this;
if((e === this__8522.edit))
{this__8522.arr = array;
this__8522.cnt = count;
return inode__8523;
} else
{return (new cljs.core.HashCollisionNode(this__8522.edit,this__8522.collision_hash,count,array));
}
});
cljs.core.HashCollisionNode;
cljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){
var key1hash__8528 = cljs.core.hash.call(null,key1);
if((key1hash__8528 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__8528,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___8529 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash__8528,key1,val1,added_leaf_QMARK___8529).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK___8529);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){
var key1hash__8530 = cljs.core.hash.call(null,key1);
if((key1hash__8530 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__8530,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___8531 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash__8530,key1,val1,added_leaf_QMARK___8531).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK___8531);
}
});
create_node = function(edit,shift,key1,val1,key2hash,key2,val2){
switch(arguments.length){
case 6:
return create_node__6.call(this,edit,shift,key1,val1,key2hash,key2);
case 7:
return create_node__7.call(this,edit,shift,key1,val1,key2hash,key2,val2);
}
throw('Invalid arity: ' + arguments.length);
};
create_node.cljs$lang$arity$6 = create_node__6;
create_node.cljs$lang$arity$7 = create_node__7;
return create_node;
})()
;

/**
* @constructor
*/
cljs.core.NodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.NodeSeq.cljs$lang$type = true;
cljs.core.NodeSeq.cljs$lang$ctorPrSeq = (function (this__2290__auto__){
return cljs.core.list.call(null,"cljs.core/NodeSeq");
});
cljs.core.NodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8532 = this;
var h__2173__auto____8533 = this__8532.__hash;
if(!((h__2173__auto____8533 == null)))
{return h__2173__auto____8533;
} else
{var h__2173__auto____8534 = cljs.core.hash_coll.call(null,coll);
this__8532.__hash = h__2173__auto____8534;
return h__2173__auto____8534;
}
});
cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8535 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.NodeSeq.prototype.toString = (function (){
var this__8536 = this;
var this__8537 = this;
return cljs.core.pr_str.call(null,this__8537);
});
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__8538 = this;
return this$;
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8539 = this;
if((this__8539.s == null))
{return cljs.core.PersistentVector.fromArray([(this__8539.nodes[this__8539.i]),(this__8539.nodes[(this__8539.i + 1)])], true);
} else
{return cljs.core.first.call(null,this__8539.s);
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8540 = this;
if((this__8540.s == null))
{return cljs.core.create_inode_seq.call(null,this__8540.nodes,(this__8540.i + 2),null);
} else
{return cljs.core.create_inode_seq.call(null,this__8540.nodes,this__8540.i,cljs.core.next.call(null,this__8540.s));
}
});
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8541 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8542 = this;
return (new cljs.core.NodeSeq(meta,this__8542.nodes,this__8542.i,this__8542.s,this__8542.__hash));
});
cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8543 = this;
return this__8543.meta;
});
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8544 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8544.meta);
});
cljs.core.NodeSeq;
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){
return create_inode_seq.call(null,nodes,0,null);
});
var create_inode_seq__3 = (function (nodes,i,s){
if((s == null))
{var len__8551 = nodes.length;
var j__8552 = i;
while(true){
if((j__8552 < len__8551))
{if(!(((nodes[j__8552]) == null)))
{return (new cljs.core.NodeSeq(null,nodes,j__8552,null,null));
} else
{var temp__3971__auto____8553 = (nodes[(j__8552 + 1)]);
if(cljs.core.truth_(temp__3971__auto____8553))
{var node__8554 = temp__3971__auto____8553;
var temp__3971__auto____8555 = node__8554.inode_seq();
if(cljs.core.truth_(temp__3971__auto____8555))
{var node_seq__8556 = temp__3971__auto____8555;
return (new cljs.core.NodeSeq(null,nodes,(j__8552 + 2),node_seq__8556,null));
} else
{{
var G__8557 = (j__8552 + 2);
j__8552 = G__8557;
continue;
}
}
} else
{{
var G__8558 = (j__8552 + 2);
j__8552 = G__8558;
continue;
}
}
}
} else
{return null;
}
break;
}
} else
{return (new cljs.core.NodeSeq(null,nodes,i,s,null));
}
});
create_inode_seq = function(nodes,i,s){
switch(arguments.length){
case 1:
return create_inode_seq__1.call(this,nodes);
case 3:
return create_inode_seq__3.call(this,nodes,i,s);
}
throw('Invalid arity: ' + arguments.length);
};
create_inode_seq.cljs$lang$arity$1 = create_inode_seq__1;
create_inode_seq.cljs$lang$arity$3 = create_inode_seq__3;
return create_inode_seq;
})()
;

/**
* @constructor
*/
cljs.core.ArrayNodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.ArrayNodeSeq.cljs$lang$type = true;
cljs.core.ArrayNodeSeq.cljs$lang$ctorPrSeq = (function (this__2290__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayNodeSeq");
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8559 = this;
var h__2173__auto____8560 = this__8559.__hash;
if(!((h__2173__auto____8560 == null)))
{return h__2173__auto____8560;
} else
{var h__2173__auto____8561 = cljs.core.hash_coll.call(null,coll);
this__8559.__hash = h__2173__auto____8561;
return h__2173__auto____8561;
}
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8562 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ArrayNodeSeq.prototype.toString = (function (){
var this__8563 = this;
var this__8564 = this;
return cljs.core.pr_str.call(null,this__8564);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__8565 = this;
return this$;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8566 = this;
return cljs.core.first.call(null,this__8566.s);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8567 = this;
return cljs.core.create_array_node_seq.call(null,null,this__8567.nodes,this__8567.i,cljs.core.next.call(null,this__8567.s));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8568 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8569 = this;
return (new cljs.core.ArrayNodeSeq(meta,this__8569.nodes,this__8569.i,this__8569.s,this__8569.__hash));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8570 = this;
return this__8570.meta;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8571 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8571.meta);
});
cljs.core.ArrayNodeSeq;
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){
return create_array_node_seq.call(null,null,nodes,0,null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){
if((s == null))
{var len__8578 = nodes.length;
var j__8579 = i;
while(true){
if((j__8579 < len__8578))
{var temp__3971__auto____8580 = (nodes[j__8579]);
if(cljs.core.truth_(temp__3971__auto____8580))
{var nj__8581 = temp__3971__auto____8580;
var temp__3971__auto____8582 = nj__8581.inode_seq();
if(cljs.core.truth_(temp__3971__auto____8582))
{var ns__8583 = temp__3971__auto____8582;
return (new cljs.core.ArrayNodeSeq(meta,nodes,(j__8579 + 1),ns__8583,null));
} else
{{
var G__8584 = (j__8579 + 1);
j__8579 = G__8584;
continue;
}
}
} else
{{
var G__8585 = (j__8579 + 1);
j__8579 = G__8585;
continue;
}
}
} else
{return null;
}
break;
}
} else
{return (new cljs.core.ArrayNodeSeq(meta,nodes,i,s,null));
}
});
create_array_node_seq = function(meta,nodes,i,s){
switch(arguments.length){
case 1:
return create_array_node_seq__1.call(this,meta);
case 4:
return create_array_node_seq__4.call(this,meta,nodes,i,s);
}
throw('Invalid arity: ' + arguments.length);
};
create_array_node_seq.cljs$lang$arity$1 = create_array_node_seq__1;
create_array_node_seq.cljs$lang$arity$4 = create_array_node_seq__4;
return create_array_node_seq;
})()
;
void 0;

/**
* @constructor
*/
cljs.core.PersistentHashMap = (function (meta,cnt,root,has_nil_QMARK_,nil_val,__hash){
this.meta = meta;
this.cnt = cnt;
this.root = root;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
})
cljs.core.PersistentHashMap.cljs$lang$type = true;
cljs.core.PersistentHashMap.cljs$lang$ctorPrSeq = (function (this__2290__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentHashMap");
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__8588 = this;
return (new cljs.core.TransientHashMap({},this__8588.root,this__8588.cnt,this__8588.has_nil_QMARK_,this__8588.nil_val));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8589 = this;
var h__2173__auto____8590 = this__8589.__hash;
if(!((h__2173__auto____8590 == null)))
{return h__2173__auto____8590;
} else
{var h__2173__auto____8591 = cljs.core.hash_imap.call(null,coll);
this__8589.__hash = h__2173__auto____8591;
return h__2173__auto____8591;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8592 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8593 = this;
if((k == null))
{if(this__8593.has_nil_QMARK_)
{return this__8593.nil_val;
} else
{return not_found;
}
} else
{if((this__8593.root == null))
{return not_found;
} else
{if("\uFDD0'else")
{return this__8593.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8594 = this;
if((k == null))
{if((function (){var and__3822__auto____8595 = this__8594.has_nil_QMARK_;
if(and__3822__auto____8595)
{return (v === this__8594.nil_val);
} else
{return and__3822__auto____8595;
}
})())
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__8594.meta,((this__8594.has_nil_QMARK_)?this__8594.cnt:(this__8594.cnt + 1)),this__8594.root,true,v,null));
}
} else
{var added_leaf_QMARK___8596 = (new cljs.core.Box(false));
var new_root__8597 = (((this__8594.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__8594.root).inode_assoc(0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___8596);
if((new_root__8597 === this__8594.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__8594.meta,((added_leaf_QMARK___8596.val)?(this__8594.cnt + 1):this__8594.cnt),new_root__8597,this__8594.has_nil_QMARK_,this__8594.nil_val,null));
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__8598 = this;
if((k == null))
{return this__8598.has_nil_QMARK_;
} else
{if((this__8598.root == null))
{return false;
} else
{if("\uFDD0'else")
{return !((this__8598.root.inode_lookup(0,cljs.core.hash.call(null,k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.call = (function() {
var G__8621 = null;
var G__8621__2 = (function (this_sym8599,k){
var this__8601 = this;
var this_sym8599__8602 = this;
var coll__8603 = this_sym8599__8602;
return coll__8603.cljs$core$ILookup$_lookup$arity$2(coll__8603,k);
});
var G__8621__3 = (function (this_sym8600,k,not_found){
var this__8601 = this;
var this_sym8600__8604 = this;
var coll__8605 = this_sym8600__8604;
return coll__8605.cljs$core$ILookup$_lookup$arity$3(coll__8605,k,not_found);
});
G__8621 = function(this_sym8600,k,not_found){
switch(arguments.length){
case 2:
return G__8621__2.call(this,this_sym8600,k);
case 3:
return G__8621__3.call(this,this_sym8600,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8621;
})()
;
cljs.core.PersistentHashMap.prototype.apply = (function (this_sym8586,args8587){
var this__8606 = this;
return this_sym8586.call.apply(this_sym8586,[this_sym8586].concat(args8587.slice()));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__8607 = this;
var init__8608 = ((this__8607.has_nil_QMARK_)?f.call(null,init,null,this__8607.nil_val):init);
if(cljs.core.reduced_QMARK_.call(null,init__8608))
{return cljs.core.deref.call(null,init__8608);
} else
{if(!((this__8607.root == null)))
{return this__8607.root.kv_reduce(f,init__8608);
} else
{if("\uFDD0'else")
{return init__8608;
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__8609 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentHashMap.prototype.toString = (function (){
var this__8610 = this;
var this__8611 = this;
return cljs.core.pr_str.call(null,this__8611);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8612 = this;
if((this__8612.cnt > 0))
{var s__8613 = ((!((this__8612.root == null)))?this__8612.root.inode_seq():null);
if(this__8612.has_nil_QMARK_)
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([null,this__8612.nil_val], true),s__8613);
} else
{return s__8613;
}
} else
{return null;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8614 = this;
return this__8614.cnt;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8615 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8616 = this;
return (new cljs.core.PersistentHashMap(meta,this__8616.cnt,this__8616.root,this__8616.has_nil_QMARK_,this__8616.nil_val,this__8616.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8617 = this;
return this__8617.meta;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8618 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,this__8618.meta);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__8619 = this;
if((k == null))
{if(this__8619.has_nil_QMARK_)
{return (new cljs.core.PersistentHashMap(this__8619.meta,(this__8619.cnt - 1),this__8619.root,false,null,null));
} else
{return coll;
}
} else
{if((this__8619.root == null))
{return coll;
} else
{if("\uFDD0'else")
{var new_root__8620 = this__8619.root.inode_without(0,cljs.core.hash.call(null,k),k);
if((new_root__8620 === this__8619.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__8619.meta,(this__8619.cnt - 1),new_root__8620,this__8619.has_nil_QMARK_,this__8619.nil_val,null));
}
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap;
cljs.core.PersistentHashMap.EMPTY = (new cljs.core.PersistentHashMap(null,0,null,false,null,0));
cljs.core.PersistentHashMap.fromArrays = (function (ks,vs){
var len__8622 = ks.length;
var i__8623 = 0;
var out__8624 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i__8623 < len__8622))
{{
var G__8625 = (i__8623 + 1);
var G__8626 = cljs.core.assoc_BANG_.call(null,out__8624,(ks[i__8623]),(vs[i__8623]));
i__8623 = G__8625;
out__8624 = G__8626;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__8624);
}
break;
}
});

/**
* @constructor
*/
cljs.core.TransientHashMap = (function (edit,root,count,has_nil_QMARK_,nil_val){
this.edit = edit;
this.root = root;
this.count = count;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.cljs$lang$protocol_mask$partition1$ = 14;
this.cljs$lang$protocol_mask$partition0$ = 258;
})
cljs.core.TransientHashMap.cljs$lang$type = true;
cljs.core.TransientHashMap.cljs$lang$ctorPrSeq = (function (this__2290__auto__){
return cljs.core.list.call(null,"cljs.core/TransientHashMap");
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__8627 = this;
return tcoll.without_BANG_(key);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__8628 = this;
return tcoll.assoc_BANG_(key,val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){
var this__8629 = this;
return tcoll.conj_BANG_(val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__8630 = this;
return tcoll.persistent_BANG_();
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__8631 = this;
if((k == null))
{if(this__8631.has_nil_QMARK_)
{return this__8631.nil_val;
} else
{return null;
}
} else
{if((this__8631.root == null))
{return null;
} else
{return this__8631.root.inode_lookup(0,cljs.core.hash.call(null,k),k);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__8632 = this;
if((k == null))
{if(this__8632.has_nil_QMARK_)
{return this__8632.nil_val;
} else
{return not_found;
}
} else
{if((this__8632.root == null))
{return not_found;
} else
{return this__8632.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8633 = this;
if(this__8633.edit)
{return this__8633.count;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){
var this__8634 = this;
var tcoll__8635 = this;
if(this__8634.edit)
{if((function (){var G__8636__8637 = o;
if(G__8636__8637)
{if((function (){var or__3824__auto____8638 = (G__8636__8637.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____8638)
{return or__3824__auto____8638;
} else
{return G__8636__8637.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__8636__8637.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__8636__8637);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__8636__8637);
}
})())
{return tcoll__8635.assoc_BANG_(cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__8639 = cljs.core.seq.call(null,o);
var tcoll__8640 = tcoll__8635;
while(true){
var temp__3971__auto____8641 = cljs.core.first.call(null,es__8639);
if(cljs.core.truth_(temp__3971__auto____8641))
{var e__8642 = temp__3971__auto____8641;
{
var G__8653 = cljs.core.next.call(null,es__8639);
var G__8654 = tcoll__8640.assoc_BANG_(cljs.core.key.call(null,e__8642),cljs.core.val.call(null,e__8642));
es__8639 = G__8653;
tcoll__8640 = G__8654;
continue;
}
} else
{return tcoll__8640;
}
break;
}
}
} else
{throw (new Error("conj! after persistent"));
}
});
cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){
var this__8643 = this;
var tcoll__8644 = this;
if(this__8643.edit)
{if((k == null))
{if((this__8643.nil_val === v))
{} else
{this__8643.nil_val = v;
}
if(this__8643.has_nil_QMARK_)
{} else
{this__8643.count = (this__8643.count + 1);
this__8643.has_nil_QMARK_ = true;
}
return tcoll__8644;
} else
{var added_leaf_QMARK___8645 = (new cljs.core.Box(false));
var node__8646 = (((this__8643.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__8643.root).inode_assoc_BANG_(this__8643.edit,0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___8645);
if((node__8646 === this__8643.root))
{} else
{this__8643.root = node__8646;
}
if(added_leaf_QMARK___8645.val)
{this__8643.count = (this__8643.count + 1);
} else
{}
return tcoll__8644;
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){
var this__8647 = this;
var tcoll__8648 = this;
if(this__8647.edit)
{if((k == null))
{if(this__8647.has_nil_QMARK_)
{this__8647.has_nil_QMARK_ = false;
this__8647.nil_val = null;
this__8647.count = (this__8647.count - 1);
return tcoll__8648;
} else
{return tcoll__8648;
}
} else
{if((this__8647.root == null))
{return tcoll__8648;
} else
{var removed_leaf_QMARK___8649 = (new cljs.core.Box(false));
var node__8650 = this__8647.root.inode_without_BANG_(this__8647.edit,0,cljs.core.hash.call(null,k),k,removed_leaf_QMARK___8649);
if((node__8650 === this__8647.root))
{} else
{this__8647.root = node__8650;
}
if(cljs.core.truth_((removed_leaf_QMARK___8649[0])))
{this__8647.count = (this__8647.count - 1);
} else
{}
return tcoll__8648;
}
}
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){
var this__8651 = this;
var tcoll__8652 = this;
if(this__8651.edit)
{this__8651.edit = null;
return (new cljs.core.PersistentHashMap(null,this__8651.count,this__8651.root,this__8651.has_nil_QMARK_,this__8651.nil_val,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientHashMap;
cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){
var t__8657 = node;
var stack__8658 = stack;
while(true){
if(!((t__8657 == null)))
{{
var G__8659 = ((ascending_QMARK_)?t__8657.left:t__8657.right);
var G__8660 = cljs.core.conj.call(null,stack__8658,t__8657);
t__8657 = G__8659;
stack__8658 = G__8660;
continue;
}
} else
{return stack__8658;
}
break;
}
});

/**
* @constructor
*/
cljs.core.PersistentTreeMapSeq = (function (meta,stack,ascending_QMARK_,cnt,__hash){
this.meta = meta;
this.stack = stack;
this.ascending_QMARK_ = ascending_QMARK_;
this.cnt = cnt;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850570;
})
cljs.core.PersistentTreeMapSeq.cljs$lang$type = true;
cljs.core.PersistentTreeMapSeq.cljs$lang$ctorPrSeq = (function (this__2290__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeMapSeq");
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8661 = this;
var h__2173__auto____8662 = this__8661.__hash;
if(!((h__2173__auto____8662 == null)))
{return h__2173__auto____8662;
} else
{var h__2173__auto____8663 = cljs.core.hash_coll.call(null,coll);
this__8661.__hash = h__2173__auto____8663;
return h__2173__auto____8663;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8664 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){
var this__8665 = this;
var this__8666 = this;
return cljs.core.pr_str.call(null,this__8666);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__8667 = this;
return this$;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8668 = this;
if((this__8668.cnt < 0))
{return (cljs.core.count.call(null,cljs.core.next.call(null,coll)) + 1);
} else
{return this__8668.cnt;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this__8669 = this;
return cljs.core.peek.call(null,this__8669.stack);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this__8670 = this;
var t__8671 = cljs.core.first.call(null,this__8670.stack);
var next_stack__8672 = cljs.core.tree_map_seq_push.call(null,((this__8670.ascending_QMARK_)?t__8671.right:t__8671.left),cljs.core.next.call(null,this__8670.stack),this__8670.ascending_QMARK_);
if(!((next_stack__8672 == null)))
{return (new cljs.core.PersistentTreeMapSeq(null,next_stack__8672,this__8670.ascending_QMARK_,(this__8670.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8673 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8674 = this;
return (new cljs.core.PersistentTreeMapSeq(meta,this__8674.stack,this__8674.ascending_QMARK_,this__8674.cnt,this__8674.__hash));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8675 = this;
return this__8675.meta;
});
cljs.core.PersistentTreeMapSeq;
cljs.core.create_tree_map_seq = (function create_tree_map_seq(tree,ascending_QMARK_,cnt){
return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.tree_map_seq_push.call(null,tree,null,ascending_QMARK_),ascending_QMARK_,cnt,null));
});
void 0;
void 0;
cljs.core.balance_left = (function balance_left(key,val,ins,right){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins))
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.left))
{return (new cljs.core.RedNode(ins.key,ins.val,ins.left.blacken(),(new cljs.core.BlackNode(key,val,ins.right,right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.right))
{return (new cljs.core.RedNode(ins.right.key,ins.right.val,(new cljs.core.BlackNode(ins.key,ins.val,ins.left,ins.right.left,null)),(new cljs.core.BlackNode(key,val,ins.right.right,right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(key,val,ins,right,null));
} else
{return null;
}
}
}
} else
{return (new cljs.core.BlackNode(key,val,ins,right,null));
}
});
cljs.core.balance_right = (function balance_right(key,val,left,ins){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins))
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.right))
{return (new cljs.core.RedNode(ins.key,ins.val,(new cljs.core.BlackNode(key,val,left,ins.left,null)),ins.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.left))
{return (new cljs.core.RedNode(ins.left.key,ins.left.val,(new cljs.core.BlackNode(key,val,left,ins.left.left,null)),(new cljs.core.BlackNode(ins.key,ins.val,ins.left.right,ins.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(key,val,left,ins,null));
} else
{return null;
}
}
}
} else
{return (new cljs.core.BlackNode(key,val,left,ins,null));
}
});
cljs.core.balance_left_del = (function balance_left_del(key,val,del,right){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,del))
{return (new cljs.core.RedNode(key,val,del.blacken(),right,null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right))
{return cljs.core.balance_right.call(null,key,val,del,right.redden());
} else
{if((function (){var and__3822__auto____8677 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right);
if(and__3822__auto____8677)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right.left);
} else
{return and__3822__auto____8677;
}
})())
{return (new cljs.core.RedNode(right.left.key,right.left.val,(new cljs.core.BlackNode(key,val,del,right.left.left,null)),cljs.core.balance_right.call(null,right.key,right.val,right.left.right,right.right.redden()),null));
} else
{if("\uFDD0'else")
{throw (new Error("red-black tree invariant violation"));
} else
{return null;
}
}
}
}
});
cljs.core.balance_right_del = (function balance_right_del(key,val,left,del){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,del))
{return (new cljs.core.RedNode(key,val,left,del.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left))
{return cljs.core.balance_left.call(null,key,val,left.redden(),del);
} else
{if((function (){var and__3822__auto____8679 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left);
if(and__3822__auto____8679)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left.right);
} else
{return and__3822__auto____8679;
}
})())
{return (new cljs.core.RedNode(left.right.key,left.right.val,cljs.core.balance_left.call(null,left.key,left.val,left.left.redden(),left.right.left),(new cljs.core.BlackNode(key,val,left.right.right,del,null)),null));
} else
{if("\uFDD0'else")
{throw (new Error("red-black tree invariant violation"));
} else
{return null;
}
}
}
}
});
cljs.core.tree_map_kv_reduce = (function tree_map_kv_reduce(node,f,init){
var init__8683 = f.call(null,init,node.key,node.val);
if(cljs.core.reduced_QMARK_.call(null,init__8683))
{return cljs.core.deref.call(null,init__8683);
} else
{var init__8684 = ((!((node.left == null)))?tree_map_kv_reduce.call(null,node.left,f,init__8683):init__8683);
if(cljs.core.reduced_QMARK_.call(null,init__8684))
{return cljs.core.deref.call(null,init__8684);
} else
{var init__8685 = ((!((node.right == null)))?tree_map_kv_reduce.call(null,node.right,f,init__8684):init__8684);
if(cljs.core.reduced_QMARK_.call(null,init__8685))
{return cljs.core.deref.call(null,init__8685);
} else
{return init__8685;
}
}
}
});

/**
* @constructor
*/
cljs.core.BlackNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32402207;
})
cljs.core.BlackNode.cljs$lang$type = true;
cljs.core.BlackNode.cljs$lang$ctorPrSeq = (function (this__2290__auto__){
return cljs.core.list.call(null,"cljs.core/BlackNode");
});
cljs.core.BlackNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8688 = this;
var h__2173__auto____8689 = this__8688.__hash;
if(!((h__2173__auto____8689 == null)))
{return h__2173__auto____8689;
} else
{var h__2173__auto____8690 = cljs.core.hash_coll.call(null,coll);
this__8688.__hash = h__2173__auto____8690;
return h__2173__auto____8690;
}
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__8691 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__8692 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__8693 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__8693.key,this__8693.val], true),k,v);
});
cljs.core.BlackNode.prototype.call = (function() {
var G__8741 = null;
var G__8741__2 = (function (this_sym8694,k){
var this__8696 = this;
var this_sym8694__8697 = this;
var node__8698 = this_sym8694__8697;
return node__8698.cljs$core$ILookup$_lookup$arity$2(node__8698,k);
});
var G__8741__3 = (function (this_sym8695,k,not_found){
var this__8696 = this;
var this_sym8695__8699 = this;
var node__8700 = this_sym8695__8699;
return node__8700.cljs$core$ILookup$_lookup$arity$3(node__8700,k,not_found);
});
G__8741 = function(this_sym8695,k,not_found){
switch(arguments.length){
case 2:
return G__8741__2.call(this,this_sym8695,k);
case 3:
return G__8741__3.call(this,this_sym8695,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8741;
})()
;
cljs.core.BlackNode.prototype.apply = (function (this_sym8686,args8687){
var this__8701 = this;
return this_sym8686.call.apply(this_sym8686,[this_sym8686].concat(args8687.slice()));
});
cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__8702 = this;
return cljs.core.PersistentVector.fromArray([this__8702.key,this__8702.val,o], true);
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__8703 = this;
return this__8703.key;
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__8704 = this;
return this__8704.val;
});
cljs.core.BlackNode.prototype.add_right = (function (ins){
var this__8705 = this;
var node__8706 = this;
return ins.balance_right(node__8706);
});
cljs.core.BlackNode.prototype.redden = (function (){
var this__8707 = this;
var node__8708 = this;
return (new cljs.core.RedNode(this__8707.key,this__8707.val,this__8707.left,this__8707.right,null));
});
cljs.core.BlackNode.prototype.remove_right = (function (del){
var this__8709 = this;
var node__8710 = this;
return cljs.core.balance_right_del.call(null,this__8709.key,this__8709.val,this__8709.left,del);
});
cljs.core.BlackNode.prototype.replace = (function (key,val,left,right){
var this__8711 = this;
var node__8712 = this;
return (new cljs.core.BlackNode(key,val,left,right,null));
});
cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){
var this__8713 = this;
var node__8714 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__8714,f,init);
});
cljs.core.BlackNode.prototype.remove_left = (function (del){
var this__8715 = this;
var node__8716 = this;
return cljs.core.balance_left_del.call(null,this__8715.key,this__8715.val,del,this__8715.right);
});
cljs.core.BlackNode.prototype.add_left = (function (ins){
var this__8717 = this;
var node__8718 = this;
return ins.balance_left(node__8718);
});
cljs.core.BlackNode.prototype.balance_left = (function (parent){
var this__8719 = this;
var node__8720 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,node__8720,parent.right,null));
});
cljs.core.BlackNode.prototype.toString = (function() {
var G__8742 = null;
var G__8742__0 = (function (){
var this__8721 = this;
var this__8723 = this;
return cljs.core.pr_str.call(null,this__8723);
});
G__8742 = function(){
switch(arguments.length){
case 0:
return G__8742__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8742;
})()
;
cljs.core.BlackNode.prototype.balance_right = (function (parent){
var this__8724 = this;
var node__8725 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__8725,null));
});
cljs.core.BlackNode.prototype.blacken = (function (){
var this__8726 = this;
var node__8727 = this;
return node__8727;
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__8728 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__8729 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__8730 = this;
return cljs.core.list.call(null,this__8730.key,this__8730.val);
});
cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__8731 = this;
return 2;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__8732 = this;
return this__8732.val;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__8733 = this;
return cljs.core.PersistentVector.fromArray([this__8733.key], true);
});
cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__8734 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__8734.key,this__8734.val], true),n,v);
});
cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8735 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__8736 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__8736.key,this__8736.val], true),meta);
});
cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__8737 = this;
return null;
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__8738 = this;
if((n === 0))
{return this__8738.key;
} else
{if((n === 1))
{return this__8738.val;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){
var this__8739 = this;
if((n === 0))
{return this__8739.key;
} else
{if((n === 1))
{return this__8739.val;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.BlackNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){
var this__8740 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.BlackNode;

/**
* @constructor
*/
cljs.core.RedNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32402207;
})
cljs.core.RedNode.cljs$lang$type = true;
cljs.core.RedNode.cljs$lang$ctorPrSeq = (function (this__2290__auto__){
return cljs.core.list.call(null,"cljs.core/RedNode");
});
cljs.core.RedNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8745 = this;
var h__2173__auto____8746 = this__8745.__hash;
if(!((h__2173__auto____8746 == null)))
{return h__2173__auto____8746;
} else
{var h__2173__auto____8747 = cljs.core.hash_coll.call(null,coll);
this__8745.__hash = h__2173__auto____8747;
return h__2173__auto____8747;
}
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__8748 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__8749 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__8750 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__8750.key,this__8750.val], true),k,v);
});
cljs.core.RedNode.prototype.call = (function() {
var G__8798 = null;
var G__8798__2 = (function (this_sym8751,k){
var this__8753 = this;
var this_sym8751__8754 = this;
var node__8755 = this_sym8751__8754;
return node__8755.cljs$core$ILookup$_lookup$arity$2(node__8755,k);
});
var G__8798__3 = (function (this_sym8752,k,not_found){
var this__8753 = this;
var this_sym8752__8756 = this;
var node__8757 = this_sym8752__8756;
return node__8757.cljs$core$ILookup$_lookup$arity$3(node__8757,k,not_found);
});
G__8798 = function(this_sym8752,k,not_found){
switch(arguments.length){
case 2:
return G__8798__2.call(this,this_sym8752,k);
case 3:
return G__8798__3.call(this,this_sym8752,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8798;
})()
;
cljs.core.RedNode.prototype.apply = (function (this_sym8743,args8744){
var this__8758 = this;
return this_sym8743.call.apply(this_sym8743,[this_sym8743].concat(args8744.slice()));
});
cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__8759 = this;
return cljs.core.PersistentVector.fromArray([this__8759.key,this__8759.val,o], true);
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__8760 = this;
return this__8760.key;
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__8761 = this;
return this__8761.val;
});
cljs.core.RedNode.prototype.add_right = (function (ins){
var this__8762 = this;
var node__8763 = this;
return (new cljs.core.RedNode(this__8762.key,this__8762.val,this__8762.left,ins,null));
});
cljs.core.RedNode.prototype.redden = (function (){
var this__8764 = this;
var node__8765 = this;
throw (new Error("red-black tree invariant violation"));
});
cljs.core.RedNode.prototype.remove_right = (function (del){
var this__8766 = this;
var node__8767 = this;
return (new cljs.core.RedNode(this__8766.key,this__8766.val,this__8766.left,del,null));
});
cljs.core.RedNode.prototype.replace = (function (key,val,left,right){
var this__8768 = this;
var node__8769 = this;
return (new cljs.core.RedNode(key,val,left,right,null));
});
cljs.core.RedNode.prototype.kv_reduce = (function (f,init){
var this__8770 = this;
var node__8771 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__8771,f,init);
});
cljs.core.RedNode.prototype.remove_left = (function (del){
var this__8772 = this;
var node__8773 = this;
return (new cljs.core.RedNode(this__8772.key,this__8772.val,del,this__8772.right,null));
});
cljs.core.RedNode.prototype.add_left = (function (ins){
var this__8774 = this;
var node__8775 = this;
return (new cljs.core.RedNode(this__8774.key,this__8774.val,ins,this__8774.right,null));
});
cljs.core.RedNode.prototype.balance_left = (function (parent){
var this__8776 = this;
var node__8777 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__8776.left))
{return (new cljs.core.RedNode(this__8776.key,this__8776.val,this__8776.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,this__8776.right,parent.right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__8776.right))
{return (new cljs.core.RedNode(this__8776.right.key,this__8776.right.val,(new cljs.core.BlackNode(this__8776.key,this__8776.val,this__8776.left,this__8776.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,this__8776.right.right,parent.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,node__8777,parent.right,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.toString = (function() {
var G__8799 = null;
var G__8799__0 = (function (){
var this__8778 = this;
var this__8780 = this;
return cljs.core.pr_str.call(null,this__8780);
});
G__8799 = function(){
switch(arguments.length){
case 0:
return G__8799__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8799;
})()
;
cljs.core.RedNode.prototype.balance_right = (function (parent){
var this__8781 = this;
var node__8782 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__8781.right))
{return (new cljs.core.RedNode(this__8781.key,this__8781.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__8781.left,null)),this__8781.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__8781.left))
{return (new cljs.core.RedNode(this__8781.left.key,this__8781.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__8781.left.left,null)),(new cljs.core.BlackNode(this__8781.key,this__8781.val,this__8781.left.right,this__8781.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__8782,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.blacken = (function (){
var this__8783 = this;
var node__8784 = this;
return (new cljs.core.BlackNode(this__8783.key,this__8783.val,this__8783.left,this__8783.right,null));
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__8785 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__8786 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__8787 = this;
return cljs.core.list.call(null,this__8787.key,this__8787.val);
});
cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__8788 = this;
return 2;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__8789 = this;
return this__8789.val;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__8790 = this;
return cljs.core.PersistentVector.fromArray([this__8790.key], true);
});
cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__8791 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__8791.key,this__8791.val], true),n,v);
});
cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8792 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__8793 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__8793.key,this__8793.val], true),meta);
});
cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__8794 = this;
return null;
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__8795 = this;
if((n === 0))
{return this__8795.key;
} else
{if((n === 1))
{return this__8795.val;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){
var this__8796 = this;
if((n === 0))
{return this__8796.key;
} else
{if((n === 1))
{return this__8796.val;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){
var this__8797 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.RedNode;
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){
if((tree == null))
{return (new cljs.core.RedNode(k,v,null,null,null));
} else
{var c__8803 = comp.call(null,k,tree.key);
if((c__8803 === 0))
{(found[0] = tree);
return null;
} else
{if((c__8803 < 0))
{var ins__8804 = tree_map_add.call(null,comp,tree.left,k,v,found);
if(!((ins__8804 == null)))
{return tree.add_left(ins__8804);
} else
{return null;
}
} else
{if("\uFDD0'else")
{var ins__8805 = tree_map_add.call(null,comp,tree.right,k,v,found);
if(!((ins__8805 == null)))
{return tree.add_right(ins__8805);
} else
{return null;
}
} else
{return null;
}
}
}
}
});
cljs.core.tree_map_append = (function tree_map_append(left,right){
if((left == null))
{return right;
} else
{if((right == null))
{return left;
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left))
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{var app__8808 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__8808))
{return (new cljs.core.RedNode(app__8808.key,app__8808.val,(new cljs.core.RedNode(left.key,left.val,left.left,app__8808.left,null)),(new cljs.core.RedNode(right.key,right.val,app__8808.right,right.right,null)),null));
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app__8808,right.right,null)),null));
}
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append.call(null,left.right,right),null));
}
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{return (new cljs.core.RedNode(right.key,right.val,tree_map_append.call(null,left,right.left),right.right,null));
} else
{if("\uFDD0'else")
{var app__8809 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__8809))
{return (new cljs.core.RedNode(app__8809.key,app__8809.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app__8809.left,null)),(new cljs.core.BlackNode(right.key,right.val,app__8809.right,right.right,null)),null));
} else
{return cljs.core.balance_left_del.call(null,left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app__8809,right.right,null)));
}
} else
{return null;
}
}
}
}
}
});
cljs.core.tree_map_remove = (function tree_map_remove(comp,tree,k,found){
if(!((tree == null)))
{var c__8815 = comp.call(null,k,tree.key);
if((c__8815 === 0))
{(found[0] = tree);
return cljs.core.tree_map_append.call(null,tree.left,tree.right);
} else
{if((c__8815 < 0))
{var del__8816 = tree_map_remove.call(null,comp,tree.left,k,found);
if((function (){var or__3824__auto____8817 = !((del__8816 == null));
if(or__3824__auto____8817)
{return or__3824__auto____8817;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.left))
{return cljs.core.balance_left_del.call(null,tree.key,tree.val,del__8816,tree.right);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,del__8816,tree.right,null));
}
} else
{return null;
}
} else
{if("\uFDD0'else")
{var del__8818 = tree_map_remove.call(null,comp,tree.right,k,found);
if((function (){var or__3824__auto____8819 = !((del__8818 == null));
if(or__3824__auto____8819)
{return or__3824__auto____8819;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.right))
{return cljs.core.balance_right_del.call(null,tree.key,tree.val,tree.left,del__8818);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del__8818,null));
}
} else
{return null;
}
} else
{return null;
}
}
}
} else
{return null;
}
});
cljs.core.tree_map_replace = (function tree_map_replace(comp,tree,k,v){
var tk__8822 = tree.key;
var c__8823 = comp.call(null,k,tk__8822);
if((c__8823 === 0))
{return tree.replace(tk__8822,v,tree.left,tree.right);
} else
{if((c__8823 < 0))
{return tree.replace(tk__8822,tree.val,tree_map_replace.call(null,comp,tree.left,k,v),tree.right);
} else
{if("\uFDD0'else")
{return tree.replace(tk__8822,tree.val,tree.left,tree_map_replace.call(null,comp,tree.right,k,v));
} else
{return null;
}
}
}
});
void 0;

/**
* @constructor
*/
cljs.core.PersistentTreeMap = (function (comp,tree,cnt,meta,__hash){
this.comp = comp;
this.tree = tree;
this.cnt = cnt;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 418776847;
})
cljs.core.PersistentTreeMap.cljs$lang$type = true;
cljs.core.PersistentTreeMap.cljs$lang$ctorPrSeq = (function (this__2290__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeMap");
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8826 = this;
var h__2173__auto____8827 = this__8826.__hash;
if(!((h__2173__auto____8827 == null)))
{return h__2173__auto____8827;
} else
{var h__2173__auto____8828 = cljs.core.hash_imap.call(null,coll);
this__8826.__hash = h__2173__auto____8828;
return h__2173__auto____8828;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8829 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8830 = this;
var n__8831 = coll.entry_at(k);
if(!((n__8831 == null)))
{return n__8831.val;
} else
{return not_found;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8832 = this;
var found__8833 = [null];
var t__8834 = cljs.core.tree_map_add.call(null,this__8832.comp,this__8832.tree,k,v,found__8833);
if((t__8834 == null))
{var found_node__8835 = cljs.core.nth.call(null,found__8833,0);
if(cljs.core._EQ_.call(null,v,found_node__8835.val))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__8832.comp,cljs.core.tree_map_replace.call(null,this__8832.comp,this__8832.tree,k,v),this__8832.cnt,this__8832.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__8832.comp,t__8834.blacken(),(this__8832.cnt + 1),this__8832.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__8836 = this;
return !((coll.entry_at(k) == null));
});
cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__8870 = null;
var G__8870__2 = (function (this_sym8837,k){
var this__8839 = this;
var this_sym8837__8840 = this;
var coll__8841 = this_sym8837__8840;
return coll__8841.cljs$core$ILookup$_lookup$arity$2(coll__8841,k);
});
var G__8870__3 = (function (this_sym8838,k,not_found){
var this__8839 = this;
var this_sym8838__8842 = this;
var coll__8843 = this_sym8838__8842;
return coll__8843.cljs$core$ILookup$_lookup$arity$3(coll__8843,k,not_found);
});
G__8870 = function(this_sym8838,k,not_found){
switch(arguments.length){
case 2:
return G__8870__2.call(this,this_sym8838,k);
case 3:
return G__8870__3.call(this,this_sym8838,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8870;
})()
;
cljs.core.PersistentTreeMap.prototype.apply = (function (this_sym8824,args8825){
var this__8844 = this;
return this_sym8824.call.apply(this_sym8824,[this_sym8824].concat(args8825.slice()));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__8845 = this;
if(!((this__8845.tree == null)))
{return cljs.core.tree_map_kv_reduce.call(null,this__8845.tree,f,init);
} else
{return init;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__8846 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__8847 = this;
if((this__8847.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__8847.tree,false,this__8847.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.toString = (function (){
var this__8848 = this;
var this__8849 = this;
return cljs.core.pr_str.call(null,this__8849);
});
cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){
var this__8850 = this;
var coll__8851 = this;
var t__8852 = this__8850.tree;
while(true){
if(!((t__8852 == null)))
{var c__8853 = this__8850.comp.call(null,k,t__8852.key);
if((c__8853 === 0))
{return t__8852;
} else
{if((c__8853 < 0))
{{
var G__8871 = t__8852.left;
t__8852 = G__8871;
continue;
}
} else
{if("\uFDD0'else")
{{
var G__8872 = t__8852.right;
t__8852 = G__8872;
continue;
}
} else
{return null;
}
}
}
} else
{return null;
}
break;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__8854 = this;
if((this__8854.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__8854.tree,ascending_QMARK_,this__8854.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__8855 = this;
if((this__8855.cnt > 0))
{var stack__8856 = null;
var t__8857 = this__8855.tree;
while(true){
if(!((t__8857 == null)))
{var c__8858 = this__8855.comp.call(null,k,t__8857.key);
if((c__8858 === 0))
{return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.call(null,stack__8856,t__8857),ascending_QMARK_,-1,null));
} else
{if(cljs.core.truth_(ascending_QMARK_))
{if((c__8858 < 0))
{{
var G__8873 = cljs.core.conj.call(null,stack__8856,t__8857);
var G__8874 = t__8857.left;
stack__8856 = G__8873;
t__8857 = G__8874;
continue;
}
} else
{{
var G__8875 = stack__8856;
var G__8876 = t__8857.right;
stack__8856 = G__8875;
t__8857 = G__8876;
continue;
}
}
} else
{if("\uFDD0'else")
{if((c__8858 > 0))
{{
var G__8877 = cljs.core.conj.call(null,stack__8856,t__8857);
var G__8878 = t__8857.right;
stack__8856 = G__8877;
t__8857 = G__8878;
continue;
}
} else
{{
var G__8879 = stack__8856;
var G__8880 = t__8857.left;
stack__8856 = G__8879;
t__8857 = G__8880;
continue;
}
}
} else
{return null;
}
}
}
} else
{if((stack__8856 == null))
{return (new cljs.core.PersistentTreeMapSeq(null,stack__8856,ascending_QMARK_,-1,null));
} else
{return null;
}
}
break;
}
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__8859 = this;
return cljs.core.key.call(null,entry);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__8860 = this;
return this__8860.comp;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8861 = this;
if((this__8861.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__8861.tree,true,this__8861.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8862 = this;
return this__8862.cnt;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8863 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8864 = this;
return (new cljs.core.PersistentTreeMap(this__8864.comp,this__8864.tree,this__8864.cnt,meta,this__8864.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8865 = this;
return this__8865.meta;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8866 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeMap.EMPTY,this__8866.meta);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__8867 = this;
var found__8868 = [null];
var t__8869 = cljs.core.tree_map_remove.call(null,this__8867.comp,this__8867.tree,k,found__8868);
if((t__8869 == null))
{if((cljs.core.nth.call(null,found__8868,0) == null))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__8867.comp,null,0,this__8867.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__8867.comp,t__8869.blacken(),(this__8867.cnt - 1),this__8867.meta,null));
}
});
cljs.core.PersistentTreeMap;
cljs.core.PersistentTreeMap.EMPTY = (new cljs.core.PersistentTreeMap(cljs.core.compare,null,0,null,0));
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in__8883 = cljs.core.seq.call(null,keyvals);
var out__8884 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if(in__8883)
{{
var G__8885 = cljs.core.nnext.call(null,in__8883);
var G__8886 = cljs.core.assoc_BANG_.call(null,out__8884,cljs.core.first.call(null,in__8883),cljs.core.second.call(null,in__8883));
in__8883 = G__8885;
out__8884 = G__8886;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__8884);
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return hash_map__delegate.call(this, keyvals);
};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__8887){
var keyvals = cljs.core.seq(arglist__8887);;
return hash_map__delegate(keyvals);
});
hash_map.cljs$lang$arity$variadic = hash_map__delegate;
return hash_map;
})()
;
/**
* keyval => key val
* Returns a new array map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.array_map = (function() { 
var array_map__delegate = function (keyvals){
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,cljs.core.count.call(null,keyvals),2),cljs.core.apply.call(null,cljs.core.array,keyvals),null));
};
var array_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return array_map__delegate.call(this, keyvals);
};
array_map.cljs$lang$maxFixedArity = 0;
array_map.cljs$lang$applyTo = (function (arglist__8888){
var keyvals = cljs.core.seq(arglist__8888);;
return array_map__delegate(keyvals);
});
array_map.cljs$lang$arity$variadic = array_map__delegate;
return array_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.sorted_map = (function() { 
var sorted_map__delegate = function (keyvals){
var in__8891 = cljs.core.seq.call(null,keyvals);
var out__8892 = cljs.core.PersistentTreeMap.EMPTY;
while(true){
if(in__8891)
{{
var G__8893 = cljs.core.nnext.call(null,in__8891);
var G__8894 = cljs.core.assoc.call(null,out__8892,cljs.core.first.call(null,in__8891),cljs.core.second.call(null,in__8891));
in__8891 = G__8893;
out__8892 = G__8894;
continue;
}
} else
{return out__8892;
}
break;
}
};
var sorted_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return sorted_map__delegate.call(this, keyvals);
};
sorted_map.cljs$lang$maxFixedArity = 0;
sorted_map.cljs$lang$applyTo = (function (arglist__8895){
var keyvals = cljs.core.seq(arglist__8895);;
return sorted_map__delegate(keyvals);
});
sorted_map.cljs$lang$arity$variadic = sorted_map__delegate;
return sorted_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_map_by = (function() { 
var sorted_map_by__delegate = function (comparator,keyvals){
var in__8898 = cljs.core.seq.call(null,keyvals);
var out__8899 = (new cljs.core.PersistentTreeMap(comparator,null,0,null,0));
while(true){
if(in__8898)
{{
var G__8900 = cljs.core.nnext.call(null,in__8898);
var G__8901 = cljs.core.assoc.call(null,out__8899,cljs.core.first.call(null,in__8898),cljs.core.second.call(null,in__8898));
in__8898 = G__8900;
out__8899 = G__8901;
continue;
}
} else
{return out__8899;
}
break;
}
};
var sorted_map_by = function (comparator,var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return sorted_map_by__delegate.call(this, comparator, keyvals);
};
sorted_map_by.cljs$lang$maxFixedArity = 1;
sorted_map_by.cljs$lang$applyTo = (function (arglist__8902){
var comparator = cljs.core.first(arglist__8902);
var keyvals = cljs.core.rest(arglist__8902);
return sorted_map_by__delegate(comparator, keyvals);
});
sorted_map_by.cljs$lang$arity$variadic = sorted_map_by__delegate;
return sorted_map_by;
})()
;
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,hash_map));
});
/**
* Returns the key of the map entry.
*/
cljs.core.key = (function key(map_entry){
return cljs.core._key.call(null,map_entry);
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,hash_map));
});
/**
* Returns the value in the map entry.
*/
cljs.core.val = (function val(map_entry){
return cljs.core._val.call(null,map_entry);
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{return cljs.core.reduce.call(null,(function (p1__8903_SHARP_,p2__8904_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3824__auto____8906 = p1__8903_SHARP_;
if(cljs.core.truth_(or__3824__auto____8906))
{return or__3824__auto____8906;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),p2__8904_SHARP_);
}),maps);
} else
{return null;
}
};
var merge = function (var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return merge__delegate.call(this, maps);
};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__8907){
var maps = cljs.core.seq(arglist__8907);;
return merge__delegate(maps);
});
merge.cljs$lang$arity$variadic = merge__delegate;
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{var merge_entry__8915 = (function (m,e){
var k__8913 = cljs.core.first.call(null,e);
var v__8914 = cljs.core.second.call(null,e);
if(cljs.core.contains_QMARK_.call(null,m,k__8913))
{return cljs.core.assoc.call(null,m,k__8913,f.call(null,cljs.core._lookup.call(null,m,k__8913,null),v__8914));
} else
{return cljs.core.assoc.call(null,m,k__8913,v__8914);
}
});
var merge2__8917 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__8915,(function (){var or__3824__auto____8916 = m1;
if(cljs.core.truth_(or__3824__auto____8916))
{return or__3824__auto____8916;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge2__8917,maps);
} else
{return null;
}
};
var merge_with = function (f,var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return merge_with__delegate.call(this, f, maps);
};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__8918){
var f = cljs.core.first(arglist__8918);
var maps = cljs.core.rest(arglist__8918);
return merge_with__delegate(f, maps);
});
merge_with.cljs$lang$arity$variadic = merge_with__delegate;
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__8923 = cljs.core.ObjMap.EMPTY;
var keys__8924 = cljs.core.seq.call(null,keyseq);
while(true){
if(keys__8924)
{var key__8925 = cljs.core.first.call(null,keys__8924);
var entry__8926 = cljs.core._lookup.call(null,map,key__8925,"\uFDD0'user/not-found");
{
var G__8927 = ((cljs.core.not_EQ_.call(null,entry__8926,"\uFDD0'user/not-found"))?cljs.core.assoc.call(null,ret__8923,key__8925,entry__8926):ret__8923);
var G__8928 = cljs.core.next.call(null,keys__8924);
ret__8923 = G__8927;
keys__8924 = G__8928;
continue;
}
} else
{return ret__8923;
}
break;
}
});
void 0;

/**
* @constructor
*/
cljs.core.PersistentHashSet = (function (meta,hash_map,__hash){
this.meta = meta;
this.hash_map = hash_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 15077647;
})
cljs.core.PersistentHashSet.cljs$lang$type = true;
cljs.core.PersistentHashSet.cljs$lang$ctorPrSeq = (function (this__2290__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentHashSet");
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__8932 = this;
return (new cljs.core.TransientHashSet(cljs.core.transient$.call(null,this__8932.hash_map)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8933 = this;
var h__2173__auto____8934 = this__8933.__hash;
if(!((h__2173__auto____8934 == null)))
{return h__2173__auto____8934;
} else
{var h__2173__auto____8935 = cljs.core.hash_iset.call(null,coll);
this__8933.__hash = h__2173__auto____8935;
return h__2173__auto____8935;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__8936 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__8937 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__8937.hash_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentHashSet.prototype.call = (function() {
var G__8958 = null;
var G__8958__2 = (function (this_sym8938,k){
var this__8940 = this;
var this_sym8938__8941 = this;
var coll__8942 = this_sym8938__8941;
return coll__8942.cljs$core$ILookup$_lookup$arity$2(coll__8942,k);
});
var G__8958__3 = (function (this_sym8939,k,not_found){
var this__8940 = this;
var this_sym8939__8943 = this;
var coll__8944 = this_sym8939__8943;
return coll__8944.cljs$core$ILookup$_lookup$arity$3(coll__8944,k,not_found);
});
G__8958 = function(this_sym8939,k,not_found){
switch(arguments.length){
case 2:
return G__8958__2.call(this,this_sym8939,k);
case 3:
return G__8958__3.call(this,this_sym8939,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8958;
})()
;
cljs.core.PersistentHashSet.prototype.apply = (function (this_sym8930,args8931){
var this__8945 = this;
return this_sym8930.call.apply(this_sym8930,[this_sym8930].concat(args8931.slice()));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8946 = this;
return (new cljs.core.PersistentHashSet(this__8946.meta,cljs.core.assoc.call(null,this__8946.hash_map,o,null),null));
});
cljs.core.PersistentHashSet.prototype.toString = (function (){
var this__8947 = this;
var this__8948 = this;
return cljs.core.pr_str.call(null,this__8948);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8949 = this;
return cljs.core.keys.call(null,this__8949.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__8950 = this;
return (new cljs.core.PersistentHashSet(this__8950.meta,cljs.core.dissoc.call(null,this__8950.hash_map,v),null));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8951 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8952 = this;
var and__3822__auto____8953 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____8953)
{var and__3822__auto____8954 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____8954)
{return cljs.core.every_QMARK_.call(null,(function (p1__8929_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__8929_SHARP_);
}),other);
} else
{return and__3822__auto____8954;
}
} else
{return and__3822__auto____8953;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8955 = this;
return (new cljs.core.PersistentHashSet(meta,this__8955.hash_map,this__8955.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8956 = this;
return this__8956.meta;
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8957 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentHashSet.EMPTY,this__8957.meta);
});
cljs.core.PersistentHashSet;
cljs.core.PersistentHashSet.EMPTY = (new cljs.core.PersistentHashSet(null,cljs.core.hash_map.call(null),0));

/**
* @constructor
*/
cljs.core.TransientHashSet = (function (transient_map){
this.transient_map = transient_map;
this.cljs$lang$protocol_mask$partition0$ = 259;
this.cljs$lang$protocol_mask$partition1$ = 34;
})
cljs.core.TransientHashSet.cljs$lang$type = true;
cljs.core.TransientHashSet.cljs$lang$ctorPrSeq = (function (this__2290__auto__){
return cljs.core.list.call(null,"cljs.core/TransientHashSet");
});
cljs.core.TransientHashSet.prototype.call = (function() {
var G__8976 = null;
var G__8976__2 = (function (this_sym8962,k){
var this__8964 = this;
var this_sym8962__8965 = this;
var tcoll__8966 = this_sym8962__8965;
if((cljs.core._lookup.call(null,this__8964.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
var G__8976__3 = (function (this_sym8963,k,not_found){
var this__8964 = this;
var this_sym8963__8967 = this;
var tcoll__8968 = this_sym8963__8967;
if((cljs.core._lookup.call(null,this__8964.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
G__8976 = function(this_sym8963,k,not_found){
switch(arguments.length){
case 2:
return G__8976__2.call(this,this_sym8963,k);
case 3:
return G__8976__3.call(this,this_sym8963,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8976;
})()
;
cljs.core.TransientHashSet.prototype.apply = (function (this_sym8960,args8961){
var this__8969 = this;
return this_sym8960.call.apply(this_sym8960,[this_sym8960].concat(args8961.slice()));
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){
var this__8970 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,v,null);
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){
var this__8971 = this;
if((cljs.core._lookup.call(null,this__8971.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return v;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__8972 = this;
return cljs.core.count.call(null,this__8972.transient_map);
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){
var this__8973 = this;
this__8973.transient_map = cljs.core.dissoc_BANG_.call(null,this__8973.transient_map,v);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__8974 = this;
this__8974.transient_map = cljs.core.assoc_BANG_.call(null,this__8974.transient_map,o,null);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__8975 = this;
return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_.call(null,this__8975.transient_map),null));
});
cljs.core.TransientHashSet;

/**
* @constructor
*/
cljs.core.PersistentTreeSet = (function (meta,tree_map,__hash){
this.meta = meta;
this.tree_map = tree_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 417730831;
})
cljs.core.PersistentTreeSet.cljs$lang$type = true;
cljs.core.PersistentTreeSet.cljs$lang$ctorPrSeq = (function (this__2290__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeSet");
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8979 = this;
var h__2173__auto____8980 = this__8979.__hash;
if(!((h__2173__auto____8980 == null)))
{return h__2173__auto____8980;
} else
{var h__2173__auto____8981 = cljs.core.hash_iset.call(null,coll);
this__8979.__hash = h__2173__auto____8981;
return h__2173__auto____8981;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__8982 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__8983 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__8983.tree_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__9009 = null;
var G__9009__2 = (function (this_sym8984,k){
var this__8986 = this;
var this_sym8984__8987 = this;
var coll__8988 = this_sym8984__8987;
return coll__8988.cljs$core$ILookup$_lookup$arity$2(coll__8988,k);
});
var G__9009__3 = (function (this_sym8985,k,not_found){
var this__8986 = this;
var this_sym8985__8989 = this;
var coll__8990 = this_sym8985__8989;
return coll__8990.cljs$core$ILookup$_lookup$arity$3(coll__8990,k,not_found);
});
G__9009 = function(this_sym8985,k,not_found){
switch(arguments.length){
case 2:
return G__9009__2.call(this,this_sym8985,k);
case 3:
return G__9009__3.call(this,this_sym8985,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9009;
})()
;
cljs.core.PersistentTreeSet.prototype.apply = (function (this_sym8977,args8978){
var this__8991 = this;
return this_sym8977.call.apply(this_sym8977,[this_sym8977].concat(args8978.slice()));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8992 = this;
return (new cljs.core.PersistentTreeSet(this__8992.meta,cljs.core.assoc.call(null,this__8992.tree_map,o,null),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__8993 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core.rseq.call(null,this__8993.tree_map));
});
cljs.core.PersistentTreeSet.prototype.toString = (function (){
var this__8994 = this;
var this__8995 = this;
return cljs.core.pr_str.call(null,this__8995);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__8996 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq.call(null,this__8996.tree_map,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__8997 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq_from.call(null,this__8997.tree_map,k,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__8998 = this;
return entry;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__8999 = this;
return cljs.core._comparator.call(null,this__8999.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9000 = this;
return cljs.core.keys.call(null,this__9000.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__9001 = this;
return (new cljs.core.PersistentTreeSet(this__9001.meta,cljs.core.dissoc.call(null,this__9001.tree_map,v),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9002 = this;
return cljs.core.count.call(null,this__9002.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9003 = this;
var and__3822__auto____9004 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____9004)
{var and__3822__auto____9005 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____9005)
{return cljs.core.every_QMARK_.call(null,(function (p1__8959_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__8959_SHARP_);
}),other);
} else
{return and__3822__auto____9005;
}
} else
{return and__3822__auto____9004;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9006 = this;
return (new cljs.core.PersistentTreeSet(meta,this__9006.tree_map,this__9006.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9007 = this;
return this__9007.meta;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9008 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeSet.EMPTY,this__9008.meta);
});
cljs.core.PersistentTreeSet;
cljs.core.PersistentTreeSet.EMPTY = (new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map.call(null),0));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in__9012 = cljs.core.seq.call(null,coll);
var out__9013 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if(cljs.core.seq.call(null,in__9012))
{{
var G__9014 = cljs.core.next.call(null,in__9012);
var G__9015 = cljs.core.conj_BANG_.call(null,out__9013,cljs.core.first.call(null,in__9012));
in__9012 = G__9014;
out__9013 = G__9015;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9013);
}
break;
}
});
/**
* Returns a new sorted set with supplied keys.
* @param {...*} var_args
*/
cljs.core.sorted_set = (function() { 
var sorted_set__delegate = function (keys){
return cljs.core.reduce.call(null,cljs.core._conj,cljs.core.PersistentTreeSet.EMPTY,keys);
};
var sorted_set = function (var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return sorted_set__delegate.call(this, keys);
};
sorted_set.cljs$lang$maxFixedArity = 0;
sorted_set.cljs$lang$applyTo = (function (arglist__9016){
var keys = cljs.core.seq(arglist__9016);;
return sorted_set__delegate(keys);
});
sorted_set.cljs$lang$arity$variadic = sorted_set__delegate;
return sorted_set;
})()
;
/**
* Returns a new sorted set with supplied keys, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_set_by = (function() { 
var sorted_set_by__delegate = function (comparator,keys){
return cljs.core.reduce.call(null,cljs.core._conj,(new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map_by.call(null,comparator),0)),keys);
};
var sorted_set_by = function (comparator,var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return sorted_set_by__delegate.call(this, comparator, keys);
};
sorted_set_by.cljs$lang$maxFixedArity = 1;
sorted_set_by.cljs$lang$applyTo = (function (arglist__9018){
var comparator = cljs.core.first(arglist__9018);
var keys = cljs.core.rest(arglist__9018);
return sorted_set_by__delegate(comparator, keys);
});
sorted_set_by.cljs$lang$arity$variadic = sorted_set_by__delegate;
return sorted_set_by;
})()
;
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap
*/
cljs.core.replace = (function replace(smap,coll){
if(cljs.core.vector_QMARK_.call(null,coll))
{var n__9024 = cljs.core.count.call(null,coll);
return cljs.core.reduce.call(null,(function (v,i){
var temp__3971__auto____9025 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));
if(cljs.core.truth_(temp__3971__auto____9025))
{var e__9026 = temp__3971__auto____9025;
return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__9026));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__9024,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__9017_SHARP_){
var temp__3971__auto____9027 = cljs.core.find.call(null,smap,p1__9017_SHARP_);
if(cljs.core.truth_(temp__3971__auto____9027))
{var e__9028 = temp__3971__auto____9027;
return cljs.core.second.call(null,e__9028);
} else
{return p1__9017_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__9058 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__9051,seen){
while(true){
var vec__9052__9053 = p__9051;
var f__9054 = cljs.core.nth.call(null,vec__9052__9053,0,null);
var xs__9055 = vec__9052__9053;
var temp__3974__auto____9056 = cljs.core.seq.call(null,xs__9055);
if(temp__3974__auto____9056)
{var s__9057 = temp__3974__auto____9056;
if(cljs.core.contains_QMARK_.call(null,seen,f__9054))
{{
var G__9059 = cljs.core.rest.call(null,s__9057);
var G__9060 = seen;
p__9051 = G__9059;
seen = G__9060;
continue;
}
} else
{return cljs.core.cons.call(null,f__9054,step.call(null,cljs.core.rest.call(null,s__9057),cljs.core.conj.call(null,seen,f__9054)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
}),null));
});
return step__9058.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__9063 = cljs.core.PersistentVector.EMPTY;
var s__9064 = s;
while(true){
if(cljs.core.next.call(null,s__9064))
{{
var G__9065 = cljs.core.conj.call(null,ret__9063,cljs.core.first.call(null,s__9064));
var G__9066 = cljs.core.next.call(null,s__9064);
ret__9063 = G__9065;
s__9064 = G__9066;
continue;
}
} else
{return cljs.core.seq.call(null,ret__9063);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if(cljs.core.string_QMARK_.call(null,x))
{return x;
} else
{if((function (){var or__3824__auto____9069 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____9069)
{return or__3824__auto____9069;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__9070 = x.lastIndexOf("/");
if((i__9070 < 0))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__9070 + 1));
}
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Doesn't support name: "),cljs.core.str(x)].join('')));
} else
{return null;
}
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){
if((function (){var or__3824__auto____9073 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____9073)
{return or__3824__auto____9073;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__9074 = x.lastIndexOf("/");
if((i__9074 > -1))
{return cljs.core.subs.call(null,x,2,i__9074);
} else
{return null;
}
} else
{throw (new Error([cljs.core.str("Doesn't support namespace: "),cljs.core.str(x)].join('')));
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map__9081 = cljs.core.ObjMap.EMPTY;
var ks__9082 = cljs.core.seq.call(null,keys);
var vs__9083 = cljs.core.seq.call(null,vals);
while(true){
if((function (){var and__3822__auto____9084 = ks__9082;
if(and__3822__auto____9084)
{return vs__9083;
} else
{return and__3822__auto____9084;
}
})())
{{
var G__9085 = cljs.core.assoc.call(null,map__9081,cljs.core.first.call(null,ks__9082),cljs.core.first.call(null,vs__9083));
var G__9086 = cljs.core.next.call(null,ks__9082);
var G__9087 = cljs.core.next.call(null,vs__9083);
map__9081 = G__9085;
ks__9082 = G__9086;
vs__9083 = G__9087;
continue;
}
} else
{return map__9081;
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__2 = (function (k,x){
return x;
});
var max_key__3 = (function (k,x,y){
if((k.call(null,x) > k.call(null,y)))
{return x;
} else
{return y;
}
});
var max_key__4 = (function() { 
var G__9090__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__9075_SHARP_,p2__9076_SHARP_){
return max_key.call(null,k,p1__9075_SHARP_,p2__9076_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__9090 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9090__delegate.call(this, k, x, y, more);
};
G__9090.cljs$lang$maxFixedArity = 3;
G__9090.cljs$lang$applyTo = (function (arglist__9091){
var k = cljs.core.first(arglist__9091);
var x = cljs.core.first(cljs.core.next(arglist__9091));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9091)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9091)));
return G__9090__delegate(k, x, y, more);
});
G__9090.cljs$lang$arity$variadic = G__9090__delegate;
return G__9090;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return max_key__2.call(this,k,x);
case 3:
return max_key__3.call(this,k,x,y);
default:
return max_key__4.cljs$lang$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__4.cljs$lang$applyTo;
max_key.cljs$lang$arity$2 = max_key__2;
max_key.cljs$lang$arity$3 = max_key__3;
max_key.cljs$lang$arity$variadic = max_key__4.cljs$lang$arity$variadic;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__2 = (function (k,x){
return x;
});
var min_key__3 = (function (k,x,y){
if((k.call(null,x) < k.call(null,y)))
{return x;
} else
{return y;
}
});
var min_key__4 = (function() { 
var G__9092__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__9088_SHARP_,p2__9089_SHARP_){
return min_key.call(null,k,p1__9088_SHARP_,p2__9089_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__9092 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9092__delegate.call(this, k, x, y, more);
};
G__9092.cljs$lang$maxFixedArity = 3;
G__9092.cljs$lang$applyTo = (function (arglist__9093){
var k = cljs.core.first(arglist__9093);
var x = cljs.core.first(cljs.core.next(arglist__9093));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9093)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9093)));
return G__9092__delegate(k, x, y, more);
});
G__9092.cljs$lang$arity$variadic = G__9092__delegate;
return G__9092;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return min_key__2.call(this,k,x);
case 3:
return min_key__3.call(this,k,x,y);
default:
return min_key__4.cljs$lang$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__4.cljs$lang$applyTo;
min_key.cljs$lang$arity$2 = min_key__2;
min_key.cljs$lang$arity$3 = min_key__3;
min_key.cljs$lang$arity$variadic = min_key__4.cljs$lang$arity$variadic;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__2 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9096 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9096)
{var s__9097 = temp__3974__auto____9096;
return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__9097),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__9097)));
} else
{return null;
}
}),null));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case 2:
return partition_all__2.call(this,n,step);
case 3:
return partition_all__3.call(this,n,step,coll);
}
throw('Invalid arity: ' + arguments.length);
};
partition_all.cljs$lang$arity$2 = partition_all__2;
partition_all.cljs$lang$arity$3 = partition_all__3;
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.take_while = (function take_while(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9100 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9100)
{var s__9101 = temp__3974__auto____9100;
if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__9101))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__9101),take_while.call(null,pred,cljs.core.rest.call(null,s__9101)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
cljs.core.mk_bound_fn = (function mk_bound_fn(sc,test,key){
return (function (e){
var comp__9103 = cljs.core._comparator.call(null,sc);
return test.call(null,comp__9103.call(null,cljs.core._entry_key.call(null,sc,e),key),0);
});
});
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.subseq = (function() {
var subseq = null;
var subseq__3 = (function (sc,test,key){
var include__9115 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.set([cljs.core._GT_,cljs.core._GT__EQ_]).call(null,test)))
{var temp__3974__auto____9116 = cljs.core._sorted_seq_from.call(null,sc,key,true);
if(cljs.core.truth_(temp__3974__auto____9116))
{var vec__9117__9118 = temp__3974__auto____9116;
var e__9119 = cljs.core.nth.call(null,vec__9117__9118,0,null);
var s__9120 = vec__9117__9118;
if(cljs.core.truth_(include__9115.call(null,e__9119)))
{return s__9120;
} else
{return cljs.core.next.call(null,s__9120);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__9115,cljs.core._sorted_seq.call(null,sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____9121 = cljs.core._sorted_seq_from.call(null,sc,start_key,true);
if(cljs.core.truth_(temp__3974__auto____9121))
{var vec__9122__9123 = temp__3974__auto____9121;
var e__9124 = cljs.core.nth.call(null,vec__9122__9123,0,null);
var s__9125 = vec__9122__9123;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,start_test,start_key).call(null,e__9124))?s__9125:cljs.core.next.call(null,s__9125)));
} else
{return null;
}
});
subseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return subseq__3.call(this,sc,start_test,start_key);
case 5:
return subseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw('Invalid arity: ' + arguments.length);
};
subseq.cljs$lang$arity$3 = subseq__3;
subseq.cljs$lang$arity$5 = subseq__5;
return subseq;
})()
;
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a reverse seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.rsubseq = (function() {
var rsubseq = null;
var rsubseq__3 = (function (sc,test,key){
var include__9137 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.set([cljs.core._LT_,cljs.core._LT__EQ_]).call(null,test)))
{var temp__3974__auto____9138 = cljs.core._sorted_seq_from.call(null,sc,key,false);
if(cljs.core.truth_(temp__3974__auto____9138))
{var vec__9139__9140 = temp__3974__auto____9138;
var e__9141 = cljs.core.nth.call(null,vec__9139__9140,0,null);
var s__9142 = vec__9139__9140;
if(cljs.core.truth_(include__9137.call(null,e__9141)))
{return s__9142;
} else
{return cljs.core.next.call(null,s__9142);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__9137,cljs.core._sorted_seq.call(null,sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____9143 = cljs.core._sorted_seq_from.call(null,sc,end_key,false);
if(cljs.core.truth_(temp__3974__auto____9143))
{var vec__9144__9145 = temp__3974__auto____9143;
var e__9146 = cljs.core.nth.call(null,vec__9144__9145,0,null);
var s__9147 = vec__9144__9145;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,end_test,end_key).call(null,e__9146))?s__9147:cljs.core.next.call(null,s__9147)));
} else
{return null;
}
});
rsubseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return rsubseq__3.call(this,sc,start_test,start_key);
case 5:
return rsubseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw('Invalid arity: ' + arguments.length);
};
rsubseq.cljs$lang$arity$3 = rsubseq__3;
rsubseq.cljs$lang$arity$5 = rsubseq__5;
return rsubseq;
})()
;

/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step,__hash){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32375006;
})
cljs.core.Range.cljs$lang$type = true;
cljs.core.Range.cljs$lang$ctorPrSeq = (function (this__2290__auto__){
return cljs.core.list.call(null,"cljs.core/Range");
});
cljs.core.Range.prototype.cljs$core$IHash$_hash$arity$1 = (function (rng){
var this__9148 = this;
var h__2173__auto____9149 = this__9148.__hash;
if(!((h__2173__auto____9149 == null)))
{return h__2173__auto____9149;
} else
{var h__2173__auto____9150 = cljs.core.hash_coll.call(null,rng);
this__9148.__hash = h__2173__auto____9150;
return h__2173__auto____9150;
}
});
cljs.core.Range.prototype.cljs$core$INext$_next$arity$1 = (function (rng){
var this__9151 = this;
if((this__9151.step > 0))
{if(((this__9151.start + this__9151.step) < this__9151.end))
{return (new cljs.core.Range(this__9151.meta,(this__9151.start + this__9151.step),this__9151.end,this__9151.step,null));
} else
{return null;
}
} else
{if(((this__9151.start + this__9151.step) > this__9151.end))
{return (new cljs.core.Range(this__9151.meta,(this__9151.start + this__9151.step),this__9151.end,this__9151.step,null));
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){
var this__9152 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.toString = (function (){
var this__9153 = this;
var this__9154 = this;
return cljs.core.pr_str.call(null,this__9154);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){
var this__9155 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,s){
var this__9156 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){
var this__9157 = this;
if((this__9157.step > 0))
{if((this__9157.start < this__9157.end))
{return rng;
} else
{return null;
}
} else
{if((this__9157.start > this__9157.end))
{return rng;
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){
var this__9158 = this;
if(cljs.core.not.call(null,rng.cljs$core$ISeqable$_seq$arity$1(rng)))
{return 0;
} else
{return Math.ceil(((this__9158.end - this__9158.start) / this__9158.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){
var this__9159 = this;
return this__9159.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){
var this__9160 = this;
if(!((rng.cljs$core$ISeqable$_seq$arity$1(rng) == null)))
{return (new cljs.core.Range(this__9160.meta,(this__9160.start + this__9160.step),this__9160.end,this__9160.step,null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){
var this__9161 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta){
var this__9162 = this;
return (new cljs.core.Range(meta,this__9162.start,this__9162.end,this__9162.step,this__9162.__hash));
});
cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){
var this__9163 = this;
return this__9163.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){
var this__9164 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__9164.start + (n * this__9164.step));
} else
{if((function (){var and__3822__auto____9165 = (this__9164.start > this__9164.end);
if(and__3822__auto____9165)
{return (this__9164.step === 0);
} else
{return and__3822__auto____9165;
}
})())
{return this__9164.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){
var this__9166 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__9166.start + (n * this__9166.step));
} else
{if((function (){var and__3822__auto____9167 = (this__9166.start > this__9166.end);
if(and__3822__auto____9167)
{return (this__9166.step === 0);
} else
{return and__3822__auto____9167;
}
})())
{return this__9166.start;
} else
{return not_found;
}
}
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){
var this__9168 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9168.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__0 = (function (){
return range.call(null,0,Number.MAX_VALUE,1);
});
var range__1 = (function (end){
return range.call(null,0,end,1);
});
var range__2 = (function (start,end){
return range.call(null,start,end,1);
});
var range__3 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step,null));
});
range = function(start,end,step){
switch(arguments.length){
case 0:
return range__0.call(this);
case 1:
return range__1.call(this,start);
case 2:
return range__2.call(this,start,end);
case 3:
return range__3.call(this,start,end,step);
}
throw('Invalid arity: ' + arguments.length);
};
range.cljs$lang$arity$0 = range__0;
range.cljs$lang$arity$1 = range__1;
range.cljs$lang$arity$2 = range__2;
range.cljs$lang$arity$3 = range__3;
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9171 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9171)
{var s__9172 = temp__3974__auto____9171;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__9172),take_nth.call(null,n,cljs.core.drop.call(null,n,s__9172)));
} else
{return null;
}
}),null));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return cljs.core.PersistentVector.fromArray([cljs.core.take_while.call(null,pred,coll),cljs.core.drop_while.call(null,pred,coll)], true);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9179 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9179)
{var s__9180 = temp__3974__auto____9179;
var fst__9181 = cljs.core.first.call(null,s__9180);
var fv__9182 = f.call(null,fst__9181);
var run__9183 = cljs.core.cons.call(null,fst__9181,cljs.core.take_while.call(null,(function (p1__9173_SHARP_){
return cljs.core._EQ_.call(null,fv__9182,f.call(null,p1__9173_SHARP_));
}),cljs.core.next.call(null,s__9180)));
return cljs.core.cons.call(null,run__9183,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__9183),s__9180))));
} else
{return null;
}
}),null));
});
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (counts,x){
return cljs.core.assoc_BANG_.call(null,counts,x,(cljs.core._lookup.call(null,counts,x,0) + 1));
}),cljs.core.transient$.call(null,cljs.core.ObjMap.EMPTY),coll));
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____9198 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____9198)
{var s__9199 = temp__3971__auto____9198;
return reductions.call(null,f,cljs.core.first.call(null,s__9199),cljs.core.rest.call(null,s__9199));
} else
{return cljs.core.list.call(null,f.call(null));
}
}),null));
});
var reductions__3 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____9200 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____9200)
{var s__9201 = temp__3974__auto____9200;
return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__9201)),cljs.core.rest.call(null,s__9201));
} else
{return null;
}
}),null)));
});
reductions = function(f,init,coll){
switch(arguments.length){
case 2:
return reductions__2.call(this,f,init);
case 3:
return reductions__3.call(this,f,init,coll);
}
throw('Invalid arity: ' + arguments.length);
};
reductions.cljs$lang$arity$2 = reductions__2;
reductions.cljs$lang$arity$3 = reductions__3;
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__1 = (function (f){
return (function() {
var G__9204 = null;
var G__9204__0 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__9204__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__9204__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__9204__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__9204__4 = (function() { 
var G__9205__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__9205 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9205__delegate.call(this, x, y, z, args);
};
G__9205.cljs$lang$maxFixedArity = 3;
G__9205.cljs$lang$applyTo = (function (arglist__9206){
var x = cljs.core.first(arglist__9206);
var y = cljs.core.first(cljs.core.next(arglist__9206));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9206)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9206)));
return G__9205__delegate(x, y, z, args);
});
G__9205.cljs$lang$arity$variadic = G__9205__delegate;
return G__9205;
})()
;
G__9204 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9204__0.call(this);
case 1:
return G__9204__1.call(this,x);
case 2:
return G__9204__2.call(this,x,y);
case 3:
return G__9204__3.call(this,x,y,z);
default:
return G__9204__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9204.cljs$lang$maxFixedArity = 3;
G__9204.cljs$lang$applyTo = G__9204__4.cljs$lang$applyTo;
return G__9204;
})()
});
var juxt__2 = (function (f,g){
return (function() {
var G__9207 = null;
var G__9207__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__9207__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__9207__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__9207__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__9207__4 = (function() { 
var G__9208__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__9208 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9208__delegate.call(this, x, y, z, args);
};
G__9208.cljs$lang$maxFixedArity = 3;
G__9208.cljs$lang$applyTo = (function (arglist__9209){
var x = cljs.core.first(arglist__9209);
var y = cljs.core.first(cljs.core.next(arglist__9209));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9209)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9209)));
return G__9208__delegate(x, y, z, args);
});
G__9208.cljs$lang$arity$variadic = G__9208__delegate;
return G__9208;
})()
;
G__9207 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9207__0.call(this);
case 1:
return G__9207__1.call(this,x);
case 2:
return G__9207__2.call(this,x,y);
case 3:
return G__9207__3.call(this,x,y,z);
default:
return G__9207__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9207.cljs$lang$maxFixedArity = 3;
G__9207.cljs$lang$applyTo = G__9207__4.cljs$lang$applyTo;
return G__9207;
})()
});
var juxt__3 = (function (f,g,h){
return (function() {
var G__9210 = null;
var G__9210__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__9210__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__9210__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__9210__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__9210__4 = (function() { 
var G__9211__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__9211 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9211__delegate.call(this, x, y, z, args);
};
G__9211.cljs$lang$maxFixedArity = 3;
G__9211.cljs$lang$applyTo = (function (arglist__9212){
var x = cljs.core.first(arglist__9212);
var y = cljs.core.first(cljs.core.next(arglist__9212));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9212)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9212)));
return G__9211__delegate(x, y, z, args);
});
G__9211.cljs$lang$arity$variadic = G__9211__delegate;
return G__9211;
})()
;
G__9210 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9210__0.call(this);
case 1:
return G__9210__1.call(this,x);
case 2:
return G__9210__2.call(this,x,y);
case 3:
return G__9210__3.call(this,x,y,z);
default:
return G__9210__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9210.cljs$lang$maxFixedArity = 3;
G__9210.cljs$lang$applyTo = G__9210__4.cljs$lang$applyTo;
return G__9210;
})()
});
var juxt__4 = (function() { 
var G__9213__delegate = function (f,g,h,fs){
var fs__9203 = cljs.core.list_STAR_.call(null,f,g,h,fs);
return (function() {
var G__9214 = null;
var G__9214__0 = (function (){
return cljs.core.reduce.call(null,(function (p1__9184_SHARP_,p2__9185_SHARP_){
return cljs.core.conj.call(null,p1__9184_SHARP_,p2__9185_SHARP_.call(null));
}),cljs.core.PersistentVector.EMPTY,fs__9203);
});
var G__9214__1 = (function (x){
return cljs.core.reduce.call(null,(function (p1__9186_SHARP_,p2__9187_SHARP_){
return cljs.core.conj.call(null,p1__9186_SHARP_,p2__9187_SHARP_.call(null,x));
}),cljs.core.PersistentVector.EMPTY,fs__9203);
});
var G__9214__2 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__9188_SHARP_,p2__9189_SHARP_){
return cljs.core.conj.call(null,p1__9188_SHARP_,p2__9189_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.EMPTY,fs__9203);
});
var G__9214__3 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__9190_SHARP_,p2__9191_SHARP_){
return cljs.core.conj.call(null,p1__9190_SHARP_,p2__9191_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.EMPTY,fs__9203);
});
var G__9214__4 = (function() { 
var G__9215__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__9192_SHARP_,p2__9193_SHARP_){
return cljs.core.conj.call(null,p1__9192_SHARP_,cljs.core.apply.call(null,p2__9193_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.EMPTY,fs__9203);
};
var G__9215 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9215__delegate.call(this, x, y, z, args);
};
G__9215.cljs$lang$maxFixedArity = 3;
G__9215.cljs$lang$applyTo = (function (arglist__9216){
var x = cljs.core.first(arglist__9216);
var y = cljs.core.first(cljs.core.next(arglist__9216));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9216)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9216)));
return G__9215__delegate(x, y, z, args);
});
G__9215.cljs$lang$arity$variadic = G__9215__delegate;
return G__9215;
})()
;
G__9214 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__9214__0.call(this);
case 1:
return G__9214__1.call(this,x);
case 2:
return G__9214__2.call(this,x,y);
case 3:
return G__9214__3.call(this,x,y,z);
default:
return G__9214__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__9214.cljs$lang$maxFixedArity = 3;
G__9214.cljs$lang$applyTo = G__9214__4.cljs$lang$applyTo;
return G__9214;
})()
};
var G__9213 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9213__delegate.call(this, f, g, h, fs);
};
G__9213.cljs$lang$maxFixedArity = 3;
G__9213.cljs$lang$applyTo = (function (arglist__9217){
var f = cljs.core.first(arglist__9217);
var g = cljs.core.first(cljs.core.next(arglist__9217));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9217)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9217)));
return G__9213__delegate(f, g, h, fs);
});
G__9213.cljs$lang$arity$variadic = G__9213__delegate;
return G__9213;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case 1:
return juxt__1.call(this,f);
case 2:
return juxt__2.call(this,f,g);
case 3:
return juxt__3.call(this,f,g,h);
default:
return juxt__4.cljs$lang$arity$variadic(f,g,h, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__4.cljs$lang$applyTo;
juxt.cljs$lang$arity$1 = juxt__1;
juxt.cljs$lang$arity$2 = juxt__2;
juxt.cljs$lang$arity$3 = juxt__3;
juxt.cljs$lang$arity$variadic = juxt__4.cljs$lang$arity$variadic;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__1 = (function (coll){
while(true){
if(cljs.core.seq.call(null,coll))
{{
var G__9220 = cljs.core.next.call(null,coll);
coll = G__9220;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__2 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____9219 = cljs.core.seq.call(null,coll);
if(and__3822__auto____9219)
{return (n > 0);
} else
{return and__3822__auto____9219;
}
})()))
{{
var G__9221 = (n - 1);
var G__9222 = cljs.core.next.call(null,coll);
n = G__9221;
coll = G__9222;
continue;
}
} else
{return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case 1:
return dorun__1.call(this,n);
case 2:
return dorun__2.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
dorun.cljs$lang$arity$1 = dorun__1;
dorun.cljs$lang$arity$2 = dorun__2;
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__1 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__2 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case 1:
return doall__1.call(this,n);
case 2:
return doall__2.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
doall.cljs$lang$arity$1 = doall__1;
doall.cljs$lang$arity$2 = doall__2;
return doall;
})()
;
cljs.core.regexp_QMARK_ = (function regexp_QMARK_(o){
return o instanceof RegExp;
});
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
var matches__9224 = re.exec(s);
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__9224),s))
{if((cljs.core.count.call(null,matches__9224) === 1))
{return cljs.core.first.call(null,matches__9224);
} else
{return cljs.core.vec.call(null,matches__9224);
}
} else
{return null;
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){
var matches__9226 = re.exec(s);
if((matches__9226 == null))
{return null;
} else
{if((cljs.core.count.call(null,matches__9226) === 1))
{return cljs.core.first.call(null,matches__9226);
} else
{return cljs.core.vec.call(null,matches__9226);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__9231 = cljs.core.re_find.call(null,re,s);
var match_idx__9232 = s.search(re);
var match_str__9233 = ((cljs.core.coll_QMARK_.call(null,match_data__9231))?cljs.core.first.call(null,match_data__9231):match_data__9231);
var post_match__9234 = cljs.core.subs.call(null,s,(match_idx__9232 + cljs.core.count.call(null,match_str__9233)));
if(cljs.core.truth_(match_data__9231))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__9231,re_seq.call(null,re,post_match__9234));
}),null));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__9241__9242 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___9243 = cljs.core.nth.call(null,vec__9241__9242,0,null);
var flags__9244 = cljs.core.nth.call(null,vec__9241__9242,1,null);
var pattern__9245 = cljs.core.nth.call(null,vec__9241__9242,2,null);
return (new RegExp(pattern__9245,flags__9244));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin], true),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep], true),cljs.core.map.call(null,(function (p1__9235_SHARP_){
return print_one.call(null,p1__9235_SHARP_,opts);
}),coll))),cljs.core.PersistentVector.fromArray([end], true));
});
cljs.core.string_print = (function string_print(x){
cljs.core._STAR_print_fn_STAR_.call(null,x);
return null;
});
cljs.core.flush = (function flush(){
return null;
});
cljs.core.pr_seq = (function pr_seq(obj,opts){
if((obj == null))
{return cljs.core.list.call(null,"nil");
} else
{if((void 0 === obj))
{return cljs.core.list.call(null,"#<undefined>");
} else
{if("\uFDD0'else")
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3822__auto____9255 = cljs.core._lookup.call(null,opts,"\uFDD0'meta",null);
if(cljs.core.truth_(and__3822__auto____9255))
{var and__3822__auto____9259 = (function (){var G__9256__9257 = obj;
if(G__9256__9257)
{if((function (){var or__3824__auto____9258 = (G__9256__9257.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____9258)
{return or__3824__auto____9258;
} else
{return G__9256__9257.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__9256__9257.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__9256__9257);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__9256__9257);
}
})();
if(cljs.core.truth_(and__3822__auto____9259))
{return cljs.core.meta.call(null,obj);
} else
{return and__3822__auto____9259;
}
} else
{return and__3822__auto____9255;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"], true),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "], true)):null),(((function (){var and__3822__auto____9260 = !((obj == null));
if(and__3822__auto____9260)
{return obj.cljs$lang$type;
} else
{return and__3822__auto____9260;
}
})())?obj.cljs$lang$ctorPrSeq(obj):(((function (){var G__9261__9262 = obj;
if(G__9261__9262)
{if((function (){var or__3824__auto____9263 = (G__9261__9262.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__3824__auto____9263)
{return or__3824__auto____9263;
} else
{return G__9261__9262.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__9261__9262.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__9261__9262);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__9261__9262);
}
})())?cljs.core._pr_seq.call(null,obj,opts):(cljs.core.truth_(cljs.core.regexp_QMARK_.call(null,obj))?cljs.core.list.call(null,"#\"",obj.source,"\""):(("\uFDD0'else")?cljs.core.list.call(null,"#<",[cljs.core.str(obj)].join(''),">"):null)))));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var first_obj__9278 = cljs.core.first.call(null,objs);
var sb__9279 = (new goog.string.StringBuffer());
var G__9280__9281 = cljs.core.seq.call(null,objs);
if(G__9280__9281)
{var obj__9282 = cljs.core.first.call(null,G__9280__9281);
var G__9280__9283 = G__9280__9281;
while(true){
if((obj__9282 === first_obj__9278))
{} else
{sb__9279.append(" ");
}
var G__9284__9285 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__9282,opts));
if(G__9284__9285)
{var string__9286 = cljs.core.first.call(null,G__9284__9285);
var G__9284__9287 = G__9284__9285;
while(true){
sb__9279.append(string__9286);
var temp__3974__auto____9288 = cljs.core.next.call(null,G__9284__9287);
if(temp__3974__auto____9288)
{var G__9284__9289 = temp__3974__auto____9288;
{
var G__9292 = cljs.core.first.call(null,G__9284__9289);
var G__9293 = G__9284__9289;
string__9286 = G__9292;
G__9284__9287 = G__9293;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____9290 = cljs.core.next.call(null,G__9280__9283);
if(temp__3974__auto____9290)
{var G__9280__9291 = temp__3974__auto____9290;
{
var G__9294 = cljs.core.first.call(null,G__9280__9291);
var G__9295 = G__9280__9291;
obj__9282 = G__9294;
G__9280__9283 = G__9295;
continue;
}
} else
{}
break;
}
} else
{}
return sb__9279;
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
return [cljs.core.str(cljs.core.pr_sb.call(null,objs,opts))].join('');
});
/**
* Same as pr-str-with-opts followed by (newline)
*/
cljs.core.prn_str_with_opts = (function prn_str_with_opts(objs,opts){
var sb__9297 = cljs.core.pr_sb.call(null,objs,opts);
sb__9297.append("\n");
return [cljs.core.str(sb__9297)].join('');
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__9311 = cljs.core.first.call(null,objs);
var G__9312__9313 = cljs.core.seq.call(null,objs);
if(G__9312__9313)
{var obj__9314 = cljs.core.first.call(null,G__9312__9313);
var G__9312__9315 = G__9312__9313;
while(true){
if((obj__9314 === first_obj__9311))
{} else
{cljs.core.string_print.call(null," ");
}
var G__9316__9317 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__9314,opts));
if(G__9316__9317)
{var string__9318 = cljs.core.first.call(null,G__9316__9317);
var G__9316__9319 = G__9316__9317;
while(true){
cljs.core.string_print.call(null,string__9318);
var temp__3974__auto____9320 = cljs.core.next.call(null,G__9316__9319);
if(temp__3974__auto____9320)
{var G__9316__9321 = temp__3974__auto____9320;
{
var G__9324 = cljs.core.first.call(null,G__9316__9321);
var G__9325 = G__9316__9321;
string__9318 = G__9324;
G__9316__9319 = G__9325;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____9322 = cljs.core.next.call(null,G__9312__9315);
if(temp__3974__auto____9322)
{var G__9312__9323 = temp__3974__auto____9322;
{
var G__9326 = cljs.core.first.call(null,G__9312__9323);
var G__9327 = G__9312__9323;
obj__9314 = G__9326;
G__9312__9315 = G__9327;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.newline = (function newline(opts){
cljs.core.string_print.call(null,"\n");
if(cljs.core.truth_(cljs.core._lookup.call(null,opts,"\uFDD0'flush-on-newline",null)))
{return cljs.core.flush.call(null);
} else
{return null;
}
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core.pr_opts = (function pr_opts(){
return cljs.core.ObjMap.fromObject(["\uFDD0'flush-on-newline","\uFDD0'readably","\uFDD0'meta","\uFDD0'dup"],{"\uFDD0'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_,"\uFDD0'readably":cljs.core._STAR_print_readably_STAR_,"\uFDD0'meta":cljs.core._STAR_print_meta_STAR_,"\uFDD0'dup":cljs.core._STAR_print_dup_STAR_});
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintable.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr_str__delegate.call(this, objs);
};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__9328){
var objs = cljs.core.seq(arglist__9328);;
return pr_str__delegate(objs);
});
pr_str.cljs$lang$arity$variadic = pr_str__delegate;
return pr_str;
})()
;
/**
* Same as pr-str followed by (newline)
* @param {...*} var_args
*/
cljs.core.prn_str = (function() { 
var prn_str__delegate = function (objs){
return cljs.core.prn_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var prn_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn_str__delegate.call(this, objs);
};
prn_str.cljs$lang$maxFixedArity = 0;
prn_str.cljs$lang$applyTo = (function (arglist__9329){
var objs = cljs.core.seq(arglist__9329);;
return prn_str__delegate(objs);
});
prn_str.cljs$lang$arity$variadic = prn_str__delegate;
return prn_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr__delegate.call(this, objs);
};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__9330){
var objs = cljs.core.seq(arglist__9330);;
return pr__delegate(objs);
});
pr.cljs$lang$arity$variadic = pr__delegate;
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this, objs);
};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__9331){
var objs = cljs.core.seq(arglist__9331);;
return cljs_core_print__delegate(objs);
});
cljs_core_print.cljs$lang$arity$variadic = cljs_core_print__delegate;
return cljs_core_print;
})()
;
/**
* print to a string, returning it
* @param {...*} var_args
*/
cljs.core.print_str = (function() { 
var print_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var print_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return print_str__delegate.call(this, objs);
};
print_str.cljs$lang$maxFixedArity = 0;
print_str.cljs$lang$applyTo = (function (arglist__9332){
var objs = cljs.core.seq(arglist__9332);;
return print_str__delegate(objs);
});
print_str.cljs$lang$arity$variadic = print_str__delegate;
return print_str;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var println = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println__delegate.call(this, objs);
};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__9333){
var objs = cljs.core.seq(arglist__9333);;
return println__delegate(objs);
});
println.cljs$lang$arity$variadic = println__delegate;
return println;
})()
;
/**
* println to a string, returning it
* @param {...*} var_args
*/
cljs.core.println_str = (function() { 
var println_str__delegate = function (objs){
return cljs.core.prn_str_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var println_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println_str__delegate.call(this, objs);
};
println_str.cljs$lang$maxFixedArity = 0;
println_str.cljs$lang$applyTo = (function (arglist__9334){
var objs = cljs.core.seq(arglist__9334);;
return println_str__delegate(objs);
});
println_str.cljs$lang$arity$variadic = println_str__delegate;
return println_str;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var prn = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn__delegate.call(this, objs);
};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__9335){
var objs = cljs.core.seq(arglist__9335);;
return prn__delegate(objs);
});
prn.cljs$lang$arity$variadic = prn__delegate;
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__9336 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__9336,"{",", ","}",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list.call(null,[cljs.core.str(n)].join(''));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Subvec.prototype.cljs$core$IPrintable$ = true;
cljs.core.Subvec.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.ChunkedCons.prototype.cljs$core$IPrintable$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__9337 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__9337,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__9338 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__9338,"{",", ","}",opts,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#queue ["," ","]",opts,cljs.core.seq.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.RSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.RSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintable["boolean"] = true);
(cljs.core._pr_seq["boolean"] = (function (bool,opts){
return cljs.core.list.call(null,[cljs.core.str(bool)].join(''));
}));
(cljs.core.IPrintable["string"] = true);
(cljs.core._pr_seq["string"] = (function (obj,opts){
if(cljs.core.keyword_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str(":"),cljs.core.str((function (){var temp__3974__auto____9339 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____9339))
{var nspc__9340 = temp__3974__auto____9339;
return [cljs.core.str(nspc__9340),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if(cljs.core.symbol_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str((function (){var temp__3974__auto____9341 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____9341))
{var nspc__9342 = temp__3974__auto____9341;
return [cljs.core.str(nspc__9342),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if("\uFDD0'else")
{return cljs.core.list.call(null,(cljs.core.truth_((new cljs.core.Keyword("\uFDD0'readably")).call(null,opts))?goog.string.quote(obj):obj));
} else
{return null;
}
}
}
}));
cljs.core.NodeSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.RedNode.prototype.cljs$core$IPrintable$ = true;
cljs.core.RedNode.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__9343 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__9343,"{",", ","}",opts,coll);
});
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["array"] = true);
(cljs.core._pr_seq["array"] = (function (a,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
(cljs.core.IPrintable["function"] = true);
(cljs.core._pr_seq["function"] = (function (this$){
return cljs.core.list.call(null,"#<",[cljs.core.str(this$)].join(''),">");
}));
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.list.call(null,"()");
});
cljs.core.BlackNode.prototype.cljs$core$IPrintable$ = true;
cljs.core.BlackNode.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
Date.prototype.cljs$core$IPrintable$ = true;
Date.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (d,_){
var normalize__9345 = (function (n,len){
var ns__9344 = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count.call(null,ns__9344) < len))
{{
var G__9347 = [cljs.core.str("0"),cljs.core.str(ns__9344)].join('');
ns__9344 = G__9347;
continue;
}
} else
{return ns__9344;
}
break;
}
});
return cljs.core.list.call(null,[cljs.core.str("#inst \""),cljs.core.str(d.getUTCFullYear()),cljs.core.str("-"),cljs.core.str(normalize__9345.call(null,(d.getUTCMonth() + 1),2)),cljs.core.str("-"),cljs.core.str(normalize__9345.call(null,d.getUTCDate(),2)),cljs.core.str("T"),cljs.core.str(normalize__9345.call(null,d.getUTCHours(),2)),cljs.core.str(":"),cljs.core.str(normalize__9345.call(null,d.getUTCMinutes(),2)),cljs.core.str(":"),cljs.core.str(normalize__9345.call(null,d.getUTCSeconds(),2)),cljs.core.str("."),cljs.core.str(normalize__9345.call(null,d.getUTCMilliseconds(),3)),cljs.core.str("-"),cljs.core.str("00:00\"")].join(''));
});
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Range.prototype.cljs$core$IPrintable$ = true;
cljs.core.Range.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__9346 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__9346,"{",", ","}",opts,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$IComparable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){
return cljs.core.compare_indexed.call(null,x,y);
});

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2690809856;
})
cljs.core.Atom.cljs$lang$type = true;
cljs.core.Atom.cljs$lang$ctorPrSeq = (function (this__2290__auto__){
return cljs.core.list.call(null,"cljs.core/Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__9348 = this;
return goog.getUid(this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var this__9349 = this;
var G__9350__9351 = cljs.core.seq.call(null,this__9349.watches);
if(G__9350__9351)
{var G__9353__9355 = cljs.core.first.call(null,G__9350__9351);
var vec__9354__9356 = G__9353__9355;
var key__9357 = cljs.core.nth.call(null,vec__9354__9356,0,null);
var f__9358 = cljs.core.nth.call(null,vec__9354__9356,1,null);
var G__9350__9359 = G__9350__9351;
var G__9353__9360 = G__9353__9355;
var G__9350__9361 = G__9350__9359;
while(true){
var vec__9362__9363 = G__9353__9360;
var key__9364 = cljs.core.nth.call(null,vec__9362__9363,0,null);
var f__9365 = cljs.core.nth.call(null,vec__9362__9363,1,null);
var G__9350__9366 = G__9350__9361;
f__9365.call(null,key__9364,this$,oldval,newval);
var temp__3974__auto____9367 = cljs.core.next.call(null,G__9350__9366);
if(temp__3974__auto____9367)
{var G__9350__9368 = temp__3974__auto____9367;
{
var G__9375 = cljs.core.first.call(null,G__9350__9368);
var G__9376 = G__9350__9368;
G__9353__9360 = G__9375;
G__9350__9361 = G__9376;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var this__9369 = this;
return this$.watches = cljs.core.assoc.call(null,this__9369.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var this__9370 = this;
return this$.watches = cljs.core.dissoc.call(null,this__9370.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (a,opts){
var this__9371 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "], true),cljs.core._pr_seq.call(null,this__9371.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var this__9372 = this;
return this__9372.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__9373 = this;
return this__9373.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__9374 = this;
return (o === other);
});
cljs.core.Atom;
/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an Error.  If either of these error conditions
* occur, then the value of the atom will not change.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__1 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__2 = (function() { 
var G__9388__delegate = function (x,p__9377){
var map__9383__9384 = p__9377;
var map__9383__9385 = ((cljs.core.seq_QMARK_.call(null,map__9383__9384))?cljs.core.apply.call(null,cljs.core.hash_map,map__9383__9384):map__9383__9384);
var validator__9386 = cljs.core._lookup.call(null,map__9383__9385,"\uFDD0'validator",null);
var meta__9387 = cljs.core._lookup.call(null,map__9383__9385,"\uFDD0'meta",null);
return (new cljs.core.Atom(x,meta__9387,validator__9386,null));
};
var G__9388 = function (x,var_args){
var p__9377 = null;
if (goog.isDef(var_args)) {
  p__9377 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9388__delegate.call(this, x, p__9377);
};
G__9388.cljs$lang$maxFixedArity = 1;
G__9388.cljs$lang$applyTo = (function (arglist__9389){
var x = cljs.core.first(arglist__9389);
var p__9377 = cljs.core.rest(arglist__9389);
return G__9388__delegate(x, p__9377);
});
G__9388.cljs$lang$arity$variadic = G__9388__delegate;
return G__9388;
})()
;
atom = function(x,var_args){
var p__9377 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
return atom__2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__2.cljs$lang$applyTo;
atom.cljs$lang$arity$1 = atom__1;
atom.cljs$lang$arity$variadic = atom__2.cljs$lang$arity$variadic;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3974__auto____9393 = a.validator;
if(cljs.core.truth_(temp__3974__auto____9393))
{var validate__9394 = temp__3974__auto____9393;
if(cljs.core.truth_(validate__9394.call(null,new_value)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",6394))))].join('')));
}
} else
{}
var old_value__9395 = a.state;
a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__9395,new_value);
return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___2 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___3 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___4 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___5 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___6 = (function() { 
var G__9396__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__9396 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__9396__delegate.call(this, a, f, x, y, z, more);
};
G__9396.cljs$lang$maxFixedArity = 5;
G__9396.cljs$lang$applyTo = (function (arglist__9397){
var a = cljs.core.first(arglist__9397);
var f = cljs.core.first(cljs.core.next(arglist__9397));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9397)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9397))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9397)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9397)))));
return G__9396__delegate(a, f, x, y, z, more);
});
G__9396.cljs$lang$arity$variadic = G__9396__delegate;
return G__9396;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return swap_BANG___2.call(this,a,f);
case 3:
return swap_BANG___3.call(this,a,f,x);
case 4:
return swap_BANG___4.call(this,a,f,x,y);
case 5:
return swap_BANG___5.call(this,a,f,x,y,z);
default:
return swap_BANG___6.cljs$lang$arity$variadic(a,f,x,y,z, cljs.core.array_seq(arguments, 5));
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___6.cljs$lang$applyTo;
swap_BANG_.cljs$lang$arity$2 = swap_BANG___2;
swap_BANG_.cljs$lang$arity$3 = swap_BANG___3;
swap_BANG_.cljs$lang$arity$4 = swap_BANG___4;
swap_BANG_.cljs$lang$arity$5 = swap_BANG___5;
swap_BANG_.cljs$lang$arity$variadic = swap_BANG___6.cljs$lang$arity$variadic;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core._EQ_.call(null,a.state,oldval))
{cljs.core.reset_BANG_.call(null,a,newval);
return true;
} else
{return false;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref.call(null,o);
});
/**
* Sets the validator-fn for an atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an Error. If the current state
* is not acceptable to the new validator, an Error will be thrown and the
* validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){
return iref.validator;
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){
return iref.meta = cljs.core.apply.call(null,f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return alter_meta_BANG___delegate.call(this, iref, f, args);
};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__9398){
var iref = cljs.core.first(arglist__9398);
var f = cljs.core.first(cljs.core.next(arglist__9398));
var args = cljs.core.rest(cljs.core.next(arglist__9398));
return alter_meta_BANG___delegate(iref, f, args);
});
alter_meta_BANG_.cljs$lang$arity$variadic = alter_meta_BANG___delegate;
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for an atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
});
/**
* Alpha - subject to change.
* 
* Adds a watch function to an atom reference. The watch fn must be a
* fn of 4 args: a key, the reference, its old-state, its
* new-state. Whenever the reference's state might have been changed,
* any registered watches will have their functions called. The watch
* fn will be called synchronously. Note that an atom's state
* may have changed again prior to the fn call, so use old/new-state
* rather than derefing the reference. Keys must be unique per
* reference, and can be used to remove the watch with remove-watch,
* but are otherwise considered opaque by the watch mechanism.  Bear in
* mind that regardless of the result or action of the watch fns the
* atom's value will change.  Example:
* 
* (def a (atom 0))
* (add-watch a :inc (fn [k r o n] (assert (== 0 n))))
* (swap! a inc)
* ;; Assertion Error
* (deref a)
* ;=> 1
*/
cljs.core.add_watch = (function add_watch(iref,key,f){
return cljs.core._add_watch.call(null,iref,key,f);
});
/**
* Alpha - subject to change.
* 
* Removes a watch (set by add-watch) from a reference
*/
cljs.core.remove_watch = (function remove_watch(iref,key){
return cljs.core._remove_watch.call(null,iref,key);
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__0 = (function (){
return gensym.call(null,"G__");
});
var gensym__1 = (function (prefix_string){
if((cljs.core.gensym_counter == null))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,[cljs.core.str(prefix_string),cljs.core.str(cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc))].join(''));
});
gensym = function(prefix_string){
switch(arguments.length){
case 0:
return gensym__0.call(this);
case 1:
return gensym__1.call(this,prefix_string);
}
throw('Invalid arity: ' + arguments.length);
};
gensym.cljs$lang$arity$0 = gensym__0;
gensym.cljs$lang$arity$1 = gensym__1;
return gensym;
})()
;
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;

/**
* @constructor
*/
cljs.core.Delay = (function (state,f){
this.state = state;
this.f = f;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1073774592;
})
cljs.core.Delay.cljs$lang$type = true;
cljs.core.Delay.cljs$lang$ctorPrSeq = (function (this__2290__auto__){
return cljs.core.list.call(null,"cljs.core/Delay");
});
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (d){
var this__9399 = this;
return (new cljs.core.Keyword("\uFDD0'done")).call(null,cljs.core.deref.call(null,this__9399.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__9400 = this;
return (new cljs.core.Keyword("\uFDD0'value")).call(null,cljs.core.swap_BANG_.call(null,this__9400.state,(function (p__9401){
var curr_state__9402 = p__9401;
var curr_state__9403 = ((cljs.core.seq_QMARK_.call(null,curr_state__9402))?cljs.core.apply.call(null,cljs.core.hash_map,curr_state__9402):curr_state__9402);
var done__9404 = cljs.core._lookup.call(null,curr_state__9403,"\uFDD0'done",null);
if(cljs.core.truth_(done__9404))
{return curr_state__9403;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__9400.f.call(null)});
}
})));
});
cljs.core.Delay;
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return cljs.core.instance_QMARK_.call(null,cljs.core.Delay,x);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if(cljs.core.delay_QMARK_.call(null,x))
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_.call(null,d);
});
/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() { 
var js__GT_clj__delegate = function (x,options){
var map__9425__9426 = options;
var map__9425__9427 = ((cljs.core.seq_QMARK_.call(null,map__9425__9426))?cljs.core.apply.call(null,cljs.core.hash_map,map__9425__9426):map__9425__9426);
var keywordize_keys__9428 = cljs.core._lookup.call(null,map__9425__9427,"\uFDD0'keywordize-keys",null);
var keyfn__9429 = (cljs.core.truth_(keywordize_keys__9428)?cljs.core.keyword:cljs.core.str);
var f__9444 = (function thisfn(x){
if(cljs.core.seq_QMARK_.call(null,x))
{return cljs.core.doall.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.coll_QMARK_.call(null,x))
{return cljs.core.into.call(null,cljs.core.empty.call(null,x),cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isArray(x)))
{return cljs.core.vec.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if((cljs.core.type.call(null,x) === Object))
{return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,(function (){var iter__2447__auto____9443 = (function iter__9437(s__9438){
return (new cljs.core.LazySeq(null,false,(function (){
var s__9438__9441 = s__9438;
while(true){
if(cljs.core.seq.call(null,s__9438__9441))
{var k__9442 = cljs.core.first.call(null,s__9438__9441);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__9429.call(null,k__9442),thisfn.call(null,(x[k__9442]))], true),iter__9437.call(null,cljs.core.rest.call(null,s__9438__9441)));
} else
{return null;
}
break;
}
}),null));
});
return iter__2447__auto____9443.call(null,cljs.core.js_keys.call(null,x));
})());
} else
{if("\uFDD0'else")
{return x;
} else
{return null;
}
}
}
}
}
});
return f__9444.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__9445){
var x = cljs.core.first(arglist__9445);
var options = cljs.core.rest(arglist__9445);
return js__GT_clj__delegate(x, options);
});
js__GT_clj.cljs$lang$arity$variadic = js__GT_clj__delegate;
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){
var mem__9450 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
return (function() { 
var G__9454__delegate = function (args){
var temp__3971__auto____9451 = cljs.core._lookup.call(null,cljs.core.deref.call(null,mem__9450),args,null);
if(cljs.core.truth_(temp__3971__auto____9451))
{var v__9452 = temp__3971__auto____9451;
return v__9452;
} else
{var ret__9453 = cljs.core.apply.call(null,f,args);
cljs.core.swap_BANG_.call(null,mem__9450,cljs.core.assoc,args,ret__9453);
return ret__9453;
}
};
var G__9454 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9454__delegate.call(this, args);
};
G__9454.cljs$lang$maxFixedArity = 0;
G__9454.cljs$lang$applyTo = (function (arglist__9455){
var args = cljs.core.seq(arglist__9455);;
return G__9454__delegate(args);
});
G__9454.cljs$lang$arity$variadic = G__9454__delegate;
return G__9454;
})()
;
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__1 = (function (f){
while(true){
var ret__9457 = f.call(null);
if(cljs.core.fn_QMARK_.call(null,ret__9457))
{{
var G__9458 = ret__9457;
f = G__9458;
continue;
}
} else
{return ret__9457;
}
break;
}
});
var trampoline__2 = (function() { 
var G__9459__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__9459 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9459__delegate.call(this, f, args);
};
G__9459.cljs$lang$maxFixedArity = 1;
G__9459.cljs$lang$applyTo = (function (arglist__9460){
var f = cljs.core.first(arglist__9460);
var args = cljs.core.rest(arglist__9460);
return G__9459__delegate(f, args);
});
G__9459.cljs$lang$arity$variadic = G__9459__delegate;
return G__9459;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case 1:
return trampoline__1.call(this,f);
default:
return trampoline__2.cljs$lang$arity$variadic(f, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__2.cljs$lang$applyTo;
trampoline.cljs$lang$arity$1 = trampoline__1;
trampoline.cljs$lang$arity$variadic = trampoline__2.cljs$lang$arity$variadic;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){
return rand.call(null,1);
});
var rand__1 = (function (n){
return (Math.random.call(null) * n);
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
rand.cljs$lang$arity$0 = rand__0;
rand.cljs$lang$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return Math.floor.call(null,(Math.random.call(null) * n));
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){
return cljs.core.nth.call(null,coll,cljs.core.rand_int.call(null,cljs.core.count.call(null,coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){
return cljs.core.reduce.call(null,(function (ret,x){
var k__9462 = f.call(null,x);
return cljs.core.assoc.call(null,ret,k__9462,cljs.core.conj.call(null,cljs.core._lookup.call(null,ret,k__9462,cljs.core.PersistentVector.EMPTY),x));
}),cljs.core.ObjMap.EMPTY,coll);
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'descendants","\uFDD0'ancestors"],{"\uFDD0'parents":cljs.core.ObjMap.EMPTY,"\uFDD0'descendants":cljs.core.ObjMap.EMPTY,"\uFDD0'ancestors":cljs.core.ObjMap.EMPTY});
});
cljs.core.global_hierarchy = cljs.core.atom.call(null,cljs.core.make_hierarchy.call(null));
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a JavaScript type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___2 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___3 = (function (h,child,parent){
var or__3824__auto____9471 = cljs.core._EQ_.call(null,child,parent);
if(or__3824__auto____9471)
{return or__3824__auto____9471;
} else
{var or__3824__auto____9472 = cljs.core.contains_QMARK_.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h).call(null,child),parent);
if(or__3824__auto____9472)
{return or__3824__auto____9472;
} else
{var and__3822__auto____9473 = cljs.core.vector_QMARK_.call(null,parent);
if(and__3822__auto____9473)
{var and__3822__auto____9474 = cljs.core.vector_QMARK_.call(null,child);
if(and__3822__auto____9474)
{var and__3822__auto____9475 = (cljs.core.count.call(null,parent) === cljs.core.count.call(null,child));
if(and__3822__auto____9475)
{var ret__9476 = true;
var i__9477 = 0;
while(true){
if((function (){var or__3824__auto____9478 = cljs.core.not.call(null,ret__9476);
if(or__3824__auto____9478)
{return or__3824__auto____9478;
} else
{return (i__9477 === cljs.core.count.call(null,parent));
}
})())
{return ret__9476;
} else
{{
var G__9479 = isa_QMARK_.call(null,h,child.call(null,i__9477),parent.call(null,i__9477));
var G__9480 = (i__9477 + 1);
ret__9476 = G__9479;
i__9477 = G__9480;
continue;
}
}
break;
}
} else
{return and__3822__auto____9475;
}
} else
{return and__3822__auto____9474;
}
} else
{return and__3822__auto____9473;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case 2:
return isa_QMARK___2.call(this,h,child);
case 3:
return isa_QMARK___3.call(this,h,child,parent);
}
throw('Invalid arity: ' + arguments.length);
};
isa_QMARK_.cljs$lang$arity$2 = isa_QMARK___2;
isa_QMARK_.cljs$lang$arity$3 = isa_QMARK___3;
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__1 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core._lookup.call(null,(new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,null));
});
parents = function(h,tag){
switch(arguments.length){
case 1:
return parents__1.call(this,h);
case 2:
return parents__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
parents.cljs$lang$arity$1 = parents__1;
parents.cljs$lang$arity$2 = parents__2;
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__1 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core._lookup.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,null));
});
ancestors = function(h,tag){
switch(arguments.length){
case 1:
return ancestors__1.call(this,h);
case 2:
return ancestors__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
ancestors.cljs$lang$arity$1 = ancestors__1;
ancestors.cljs$lang$arity$2 = ancestors__2;
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on JavaScript type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__1 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core._lookup.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),tag,null));
});
descendants = function(h,tag){
switch(arguments.length){
case 1:
return descendants__1.call(this,h);
case 2:
return descendants__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
descendants.cljs$lang$arity$1 = descendants__1;
descendants.cljs$lang$arity$2 = descendants__2;
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__2 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",6678))))].join('')));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__3 = (function (h,tag,parent){
if(cljs.core.not_EQ_.call(null,tag,parent))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",6682))))].join('')));
}
var tp__9489 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var td__9490 = (new cljs.core.Keyword("\uFDD0'descendants")).call(null,h);
var ta__9491 = (new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h);
var tf__9492 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core._lookup.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});
var or__3824__auto____9493 = ((cljs.core.contains_QMARK_.call(null,tp__9489.call(null,tag),parent))?null:(function (){if(cljs.core.contains_QMARK_.call(null,ta__9491.call(null,tag),parent))
{throw (new Error([cljs.core.str(tag),cljs.core.str("already has"),cljs.core.str(parent),cljs.core.str("as ancestor")].join('')));
} else
{}
if(cljs.core.contains_QMARK_.call(null,ta__9491.call(null,parent),tag))
{throw (new Error([cljs.core.str("Cyclic derivation:"),cljs.core.str(parent),cljs.core.str("has"),cljs.core.str(tag),cljs.core.str("as ancestor")].join('')));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,(new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,cljs.core.conj.call(null,cljs.core._lookup.call(null,tp__9489,tag,cljs.core.set([])),parent)),"\uFDD0'ancestors":tf__9492.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,td__9490,parent,ta__9491),"\uFDD0'descendants":tf__9492.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),parent,ta__9491,tag,td__9490)});
})());
if(cljs.core.truth_(or__3824__auto____9493))
{return or__3824__auto____9493;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case 2:
return derive__2.call(this,h,tag);
case 3:
return derive__3.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
derive.cljs$lang$arity$2 = derive__2;
derive.cljs$lang$arity$3 = derive__3;
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__2 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__3 = (function (h,tag,parent){
var parentMap__9498 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var childsParents__9499 = (cljs.core.truth_(parentMap__9498.call(null,tag))?cljs.core.disj.call(null,parentMap__9498.call(null,tag),parent):cljs.core.set([]));
var newParents__9500 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__9499))?cljs.core.assoc.call(null,parentMap__9498,tag,childsParents__9499):cljs.core.dissoc.call(null,parentMap__9498,tag));
var deriv_seq__9501 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__9481_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__9481_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__9481_SHARP_),cljs.core.second.call(null,p1__9481_SHARP_)));
}),cljs.core.seq.call(null,newParents__9500)));
if(cljs.core.contains_QMARK_.call(null,parentMap__9498.call(null,tag),parent))
{return cljs.core.reduce.call(null,(function (p1__9482_SHARP_,p2__9483_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__9482_SHARP_,p2__9483_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__9501));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case 2:
return underive__2.call(this,h,tag);
case 3:
return underive__3.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
underive.cljs$lang$arity$2 = underive__2;
underive.cljs$lang$arity$3 = underive__3;
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){
cljs.core.swap_BANG_.call(null,method_cache,(function (_){
return cljs.core.deref.call(null,method_table);
}));
return cljs.core.swap_BANG_.call(null,cached_hierarchy,(function (_){
return cljs.core.deref.call(null,hierarchy);
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs__9509 = cljs.core.deref.call(null,prefer_table).call(null,x);
var or__3824__auto____9511 = (cljs.core.truth_((function (){var and__3822__auto____9510 = xprefs__9509;
if(cljs.core.truth_(and__3822__auto____9510))
{return xprefs__9509.call(null,y);
} else
{return and__3822__auto____9510;
}
})())?true:null);
if(cljs.core.truth_(or__3824__auto____9511))
{return or__3824__auto____9511;
} else
{var or__3824__auto____9513 = (function (){var ps__9512 = cljs.core.parents.call(null,y);
while(true){
if((cljs.core.count.call(null,ps__9512) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__9512),prefer_table)))
{} else
{}
{
var G__9516 = cljs.core.rest.call(null,ps__9512);
ps__9512 = G__9516;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____9513))
{return or__3824__auto____9513;
} else
{var or__3824__auto____9515 = (function (){var ps__9514 = cljs.core.parents.call(null,x);
while(true){
if((cljs.core.count.call(null,ps__9514) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__9514),y,prefer_table)))
{} else
{}
{
var G__9517 = cljs.core.rest.call(null,ps__9514);
ps__9514 = G__9517;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____9515))
{return or__3824__auto____9515;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3824__auto____9519 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);
if(cljs.core.truth_(or__3824__auto____9519))
{return or__3824__auto____9519;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__9537 = cljs.core.reduce.call(null,(function (be,p__9529){
var vec__9530__9531 = p__9529;
var k__9532 = cljs.core.nth.call(null,vec__9530__9531,0,null);
var ___9533 = cljs.core.nth.call(null,vec__9530__9531,1,null);
var e__9534 = vec__9530__9531;
if(cljs.core.isa_QMARK_.call(null,dispatch_val,k__9532))
{var be2__9536 = (cljs.core.truth_((function (){var or__3824__auto____9535 = (be == null);
if(or__3824__auto____9535)
{return or__3824__auto____9535;
} else
{return cljs.core.dominates.call(null,k__9532,cljs.core.first.call(null,be),prefer_table);
}
})())?e__9534:be);
if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__9536),k__9532,prefer_table)))
{} else
{throw (new Error([cljs.core.str("Multiple methods in multimethod '"),cljs.core.str(name),cljs.core.str("' match dispatch value: "),cljs.core.str(dispatch_val),cljs.core.str(" -> "),cljs.core.str(k__9532),cljs.core.str(" and "),cljs.core.str(cljs.core.first.call(null,be2__9536)),cljs.core.str(", and neither is preferred")].join('')));
}
return be2__9536;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));
if(cljs.core.truth_(best_entry__9537))
{if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy)))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__9537));
return cljs.core.second.call(null,best_entry__9537);
} else
{cljs.core.reset_cache.call(null,method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method.call(null,name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
void 0;cljs.core.IMultiFn = {};
cljs.core._reset = (function _reset(mf){
if((function (){var and__3822__auto____9541 = mf;
if(and__3822__auto____9541)
{return mf.cljs$core$IMultiFn$_reset$arity$1;
} else
{return and__3822__auto____9541;
}
})())
{return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else
{return (function (){var or__3824__auto____9542 = (cljs.core._reset[goog.typeOf(mf)]);
if(or__3824__auto____9542)
{return or__3824__auto____9542;
} else
{var or__3824__auto____9543 = (cljs.core._reset["_"]);
if(or__3824__auto____9543)
{return or__3824__auto____9543;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if((function (){var and__3822__auto____9547 = mf;
if(and__3822__auto____9547)
{return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else
{return and__3822__auto____9547;
}
})())
{return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else
{return (function (){var or__3824__auto____9548 = (cljs.core._add_method[goog.typeOf(mf)]);
if(or__3824__auto____9548)
{return or__3824__auto____9548;
} else
{var or__3824__auto____9549 = (cljs.core._add_method["_"]);
if(or__3824__auto____9549)
{return or__3824__auto____9549;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if((function (){var and__3822__auto____9553 = mf;
if(and__3822__auto____9553)
{return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else
{return and__3822__auto____9553;
}
})())
{return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else
{return (function (){var or__3824__auto____9554 = (cljs.core._remove_method[goog.typeOf(mf)]);
if(or__3824__auto____9554)
{return or__3824__auto____9554;
} else
{var or__3824__auto____9555 = (cljs.core._remove_method["_"]);
if(or__3824__auto____9555)
{return or__3824__auto____9555;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if((function (){var and__3822__auto____9559 = mf;
if(and__3822__auto____9559)
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else
{return and__3822__auto____9559;
}
})())
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3824__auto____9560 = (cljs.core._prefer_method[goog.typeOf(mf)]);
if(or__3824__auto____9560)
{return or__3824__auto____9560;
} else
{var or__3824__auto____9561 = (cljs.core._prefer_method["_"]);
if(or__3824__auto____9561)
{return or__3824__auto____9561;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if((function (){var and__3822__auto____9565 = mf;
if(and__3822__auto____9565)
{return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else
{return and__3822__auto____9565;
}
})())
{return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else
{return (function (){var or__3824__auto____9566 = (cljs.core._get_method[goog.typeOf(mf)]);
if(or__3824__auto____9566)
{return or__3824__auto____9566;
} else
{var or__3824__auto____9567 = (cljs.core._get_method["_"]);
if(or__3824__auto____9567)
{return or__3824__auto____9567;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if((function (){var and__3822__auto____9571 = mf;
if(and__3822__auto____9571)
{return mf.cljs$core$IMultiFn$_methods$arity$1;
} else
{return and__3822__auto____9571;
}
})())
{return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else
{return (function (){var or__3824__auto____9572 = (cljs.core._methods[goog.typeOf(mf)]);
if(or__3824__auto____9572)
{return or__3824__auto____9572;
} else
{var or__3824__auto____9573 = (cljs.core._methods["_"]);
if(or__3824__auto____9573)
{return or__3824__auto____9573;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if((function (){var and__3822__auto____9577 = mf;
if(and__3822__auto____9577)
{return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else
{return and__3822__auto____9577;
}
})())
{return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else
{return (function (){var or__3824__auto____9578 = (cljs.core._prefers[goog.typeOf(mf)]);
if(or__3824__auto____9578)
{return or__3824__auto____9578;
} else
{var or__3824__auto____9579 = (cljs.core._prefers["_"]);
if(or__3824__auto____9579)
{return or__3824__auto____9579;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if((function (){var and__3822__auto____9583 = mf;
if(and__3822__auto____9583)
{return mf.cljs$core$IMultiFn$_dispatch$arity$2;
} else
{return and__3822__auto____9583;
}
})())
{return mf.cljs$core$IMultiFn$_dispatch$arity$2(mf,args);
} else
{return (function (){var or__3824__auto____9584 = (cljs.core._dispatch[goog.typeOf(mf)]);
if(or__3824__auto____9584)
{return or__3824__auto____9584;
} else
{var or__3824__auto____9585 = (cljs.core._dispatch["_"]);
if(or__3824__auto____9585)
{return or__3824__auto____9585;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
void 0;cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__9588 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__9589 = cljs.core._get_method.call(null,mf,dispatch_val__9588);
if(cljs.core.truth_(target_fn__9589))
{} else
{throw (new Error([cljs.core.str("No method in multimethod '"),cljs.core.str(cljs.core.name),cljs.core.str("' for dispatch value: "),cljs.core.str(dispatch_val__9588)].join('')));
}
return cljs.core.apply.call(null,target_fn__9589,args);
});

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
this.cljs$lang$protocol_mask$partition0$ = 4194304;
this.cljs$lang$protocol_mask$partition1$ = 64;
})
cljs.core.MultiFn.cljs$lang$type = true;
cljs.core.MultiFn.cljs$lang$ctorPrSeq = (function (this__2290__auto__){
return cljs.core.list.call(null,"cljs.core/MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__9590 = this;
return goog.getUid(this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){
var this__9591 = this;
cljs.core.swap_BANG_.call(null,this__9591.method_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__9591.method_cache,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__9591.prefer_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__9591.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){
var this__9592 = this;
cljs.core.swap_BANG_.call(null,this__9592.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__9592.method_cache,this__9592.method_table,this__9592.cached_hierarchy,this__9592.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){
var this__9593 = this;
cljs.core.swap_BANG_.call(null,this__9593.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__9593.method_cache,this__9593.method_table,this__9593.cached_hierarchy,this__9593.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){
var this__9594 = this;
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__9594.cached_hierarchy),cljs.core.deref.call(null,this__9594.hierarchy)))
{} else
{cljs.core.reset_cache.call(null,this__9594.method_cache,this__9594.method_table,this__9594.cached_hierarchy,this__9594.hierarchy);
}
var temp__3971__auto____9595 = cljs.core.deref.call(null,this__9594.method_cache).call(null,dispatch_val);
if(cljs.core.truth_(temp__3971__auto____9595))
{var target_fn__9596 = temp__3971__auto____9595;
return target_fn__9596;
} else
{var temp__3971__auto____9597 = cljs.core.find_and_cache_best_method.call(null,this__9594.name,dispatch_val,this__9594.hierarchy,this__9594.method_table,this__9594.prefer_table,this__9594.method_cache,this__9594.cached_hierarchy);
if(cljs.core.truth_(temp__3971__auto____9597))
{var target_fn__9598 = temp__3971__auto____9597;
return target_fn__9598;
} else
{return cljs.core.deref.call(null,this__9594.method_table).call(null,this__9594.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){
var this__9599 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__9599.prefer_table)))
{throw (new Error([cljs.core.str("Preference conflict in multimethod '"),cljs.core.str(this__9599.name),cljs.core.str("': "),cljs.core.str(dispatch_val_y),cljs.core.str(" is already preferred to "),cljs.core.str(dispatch_val_x)].join('')));
} else
{}
cljs.core.swap_BANG_.call(null,this__9599.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core._lookup.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__9599.method_cache,this__9599.method_table,this__9599.cached_hierarchy,this__9599.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){
var this__9600 = this;
return cljs.core.deref.call(null,this__9600.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){
var this__9601 = this;
return cljs.core.deref.call(null,this__9601.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch$arity$2 = (function (mf,args){
var this__9602 = this;
return cljs.core.do_dispatch.call(null,mf,this__9602.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__9604__delegate = function (_,args){
var self__9603 = this;
return cljs.core._dispatch.call(null,self__9603,args);
};
var G__9604 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9604__delegate.call(this, _, args);
};
G__9604.cljs$lang$maxFixedArity = 1;
G__9604.cljs$lang$applyTo = (function (arglist__9605){
var _ = cljs.core.first(arglist__9605);
var args = cljs.core.rest(arglist__9605);
return G__9604__delegate(_, args);
});
G__9604.cljs$lang$arity$variadic = G__9604__delegate;
return G__9604;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
var self__9606 = this;
return cljs.core._dispatch.call(null,self__9606,args);
});
/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){
return cljs.core._reset.call(null,multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){
return cljs.core._remove_method.call(null,multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return cljs.core._prefer_method.call(null,multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){
return cljs.core._methods.call(null,multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){
return cljs.core._get_method.call(null,multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){
return cljs.core._prefers.call(null,multifn);
});

/**
* @constructor
*/
cljs.core.UUID = (function (uuid){
this.uuid = uuid;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 543162368;
})
cljs.core.UUID.cljs$lang$type = true;
cljs.core.UUID.cljs$lang$ctorPrSeq = (function (this__2290__auto__){
return cljs.core.list.call(null,"cljs.core/UUID");
});
cljs.core.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__9607 = this;
return goog.string.hashCode(cljs.core.pr_str.call(null,this$));
});
cljs.core.UUID.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (_9609,_){
var this__9608 = this;
return cljs.core.list.call(null,[cljs.core.str("#uuid \""),cljs.core.str(this__9608.uuid),cljs.core.str("\"")].join(''));
});
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var this__9610 = this;
return (this__9610.uuid === other.uuid);
});
cljs.core.UUID.prototype.toString = (function (){
var this__9611 = this;
var this__9612 = this;
return cljs.core.pr_str.call(null,this__9612);
});
cljs.core.UUID;
