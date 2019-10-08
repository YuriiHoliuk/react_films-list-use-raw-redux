(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,a){e.exports=a(41)},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},39:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(22),i=a.n(c),l=a(10),s=a(5),o=a(6),u=a(8),m=a(7),f=a(9),p=(a(31),a(14)),d=a(11),b=(a(32),a(33),function(e){var t=e.title,a=e.description,r=e.imgUrl,c=e.imdbUrl,i=e.id;return n.a.createElement(p.b,{to:"/film/".concat(i),className:"card"},n.a.createElement("div",{className:"card-image"},n.a.createElement("figure",{className:"image is-4by3"},n.a.createElement("img",{src:r,alt:"Film logo"}))),n.a.createElement("div",{className:"card-content"},n.a.createElement("div",{className:"media"},n.a.createElement("div",{className:"media-left"},n.a.createElement("figure",{className:"image is-48x48"},n.a.createElement("img",{src:"https://images-na.ssl-images-amazon.com/images/I/315W5zxAnTL._SY355_.png",alt:"imdb"}))),n.a.createElement("div",{className:"media-content"},n.a.createElement("p",{className:"title is-4"},t))),n.a.createElement("div",{className:"content"},a,n.a.createElement("br",null),n.a.createElement("a",{href:c},"IMDB"))))});b.defaultProps={description:""};var h=a(25);function g(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}var v={ADD_NEW_FILM:"FILM::ADD"},O=function(e){return{type:v.ADD_NEW_FILM,payload:e}},y={films:[]};var E=function(e){var t=e(),a=[];return{getState:function(){return t},dispatch:function(r){t=e(t,r),a.forEach(function(e){return e(t)})},subscribe:function(e){if("function"!==typeof e)throw new Error("Callback should be a function");return a.push(e),function(){a=a.filter(function(t){return t!==e})}}}}(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case v.ADD_NEW_FILM:return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?g(a,!0).forEach(function(t){Object(l.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):g(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},e,{films:[].concat(Object(h.a)(e.films),[t.payload])});default:return e}});E.subscribe(function(e){console.log(e.films)});var j=function(e){function t(){var e,a;Object(s.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={films:E.getState().films},a.unsubscribe=null,a}return Object(f.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.unsubscribe=E.subscribe(function(){return e.setState({films:E.getState().films})})}},{key:"componentWillUnmount",value:function(){this.unsubscribe()}},{key:"render",value:function(){var e=this.state.films;return n.a.createElement("div",{className:"films"},e.map(function(e){return n.a.createElement(b,Object.assign({key:e.id},e))}))}}]),t}(n.a.Component);j.defaultProps={films:[]};var N=j,w=a(19),P=a(18),D=a.n(P),S=(a(39),Object(r.memo)(function(e){var t=e.error,a=e.name,r=e.label,c=e.type,i=e.onChange,l=e.placeholder,s=e.value,o=D()("input",{"is-danger":!!t}),u=D()("control",{"has-icons-right":!!t}),m="textarea"===c?c:"input";return n.a.createElement("div",{className:"field"},n.a.createElement("label",{htmlFor:a,className:"label"},r),n.a.createElement("div",{className:u},n.a.createElement(m,{name:a,id:a,className:o,type:c,placeholder:l,value:s,onChange:i}),t&&n.a.createElement("span",{className:"icon is-small is-right"},n.a.createElement("i",{className:"fas fa-exclamation-triangle"}))),t&&n.a.createElement("p",{className:"help is-danger"},t))}));S.defaultProps={error:"",type:"text",placeholder:"Type text here"};var C=function(e,t){return t?null:"Field ".concat(e," is required")};function k(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}var U={title:{value:"",error:null},description:{value:"",error:null},imgUrl:{value:"",error:null},imdbUrl:{value:"",error:null}},A={title:C,imgUrl:C,imdbUrl:C},F=function(e){function t(){var e,a;Object(s.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state=U,a.handleChange=function(e){var t=e.target,r=t.name,n=t.value;a.setState(function(e){return Object(l.a)({},r,{value:n,error:e[r].error})})},a.handleSubmit=function(e){e.preventDefault();var t=a.props.onAdd,r=a.getFormValue(),n=a.validate(),c=n.hasError,i=n.errors;c?a.setState(function(e){var t=i.map(function(t){var a=Object(w.a)(t,2),r=a[0];return[r,{error:a[1],value:e[r].value}]});return Object.fromEntries(t)}):(a.setState(U),t(r))},a}return Object(f.a)(t,e),Object(o.a)(t,[{key:"getFormValue",value:function(){return Object.entries(this.state).reduce(function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?k(a,!0).forEach(function(t){Object(l.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):k(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},e,Object(l.a)({},t[0],t[1].value))},{})}},{key:"validate",value:function(){var e=Object.entries(this.state).map(function(e){var t=Object(w.a)(e,2),a=t[0],r=t[1],n=A[a];return[a,n?n(a,r.value):null]});return{hasError:e.some(function(e){return!!e[1]}),errors:e}}},{key:"render",value:function(){var e=this.state,t=e.title,a=e.description,r=e.imgUrl,c=e.imdbUrl;return n.a.createElement("form",{onSubmit:this.handleSubmit},n.a.createElement(S,Object.assign({},t,{name:"title",placeholder:"Input film title",label:"Title",onChange:this.handleChange})),n.a.createElement(S,Object.assign({},a,{type:"textarea",name:"description",placeholder:"Input film description",label:"Description",onChange:this.handleChange})),n.a.createElement(S,Object.assign({},r,{name:"imgUrl",placeholder:"Paste image url",label:"Image url",onChange:this.handleChange})),n.a.createElement(S,Object.assign({},c,{name:"imdbUrl",placeholder:"Paste IMDB url",label:"IMDB url",onChange:this.handleChange})),n.a.createElement("button",{type:"submit",className:"button is-primary"},"Add film"))}}]),t}(r.Component),I=function(e){function t(){var e,a;Object(s.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={film:E.getState().films.find(function(e){return String(e.id)===a.props.match.params.id})},a}return Object(f.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state.film,t=e.title,a=e.description,r=e.imgUrl,c=e.imdbUrl;return console.log(this.state.film),n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-image"},n.a.createElement("figure",{className:"image is-4by3"},n.a.createElement("img",{src:r,alt:"Film logo"}))),n.a.createElement("div",{className:"card-content"},n.a.createElement("div",{className:"media"},n.a.createElement("div",{className:"media-left"},n.a.createElement("figure",{className:"image is-48x48"},n.a.createElement("img",{src:"https://images-na.ssl-images-amazon.com/images/I/315W5zxAnTL._SY355_.png",alt:"imdb"}))),n.a.createElement("div",{className:"media-content"},n.a.createElement("p",{className:"title is-4"},t))),n.a.createElement("div",{className:"content"},a,n.a.createElement("br",null),n.a.createElement("a",{href:c},"IMDB"))))}}]),t}(r.Component);function x(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}I.defaultProps={description:""};var W="https://www.omdbapi.com/?apikey=2f4a38c9&t=",M=function(e){function t(){var e,a;Object(s.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={searchWord:""},a.unsubscribe=null,a.handleAddFilm=function(e){var t=E.getState().films;E.dispatch(O(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?x(a,!0).forEach(function(t){Object(l.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):x(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},e,{id:t[t.length-1].id+1})))},a.handleSearchChange=function(e){var t=e.target;a.setState({searchWord:t.value})},a.searchFilm=function(e){fetch("".concat(W).concat(e)).then(function(e){return e.json()}).then(function(e){var t=e.Title,a=e.Plot,r=e.Poster,n=e.Website,c={id:e.imdbID,title:t,description:a,imgUrl:r,imdbUrl:n};E.dispatch(O(c))})},a}return Object(f.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.searchFilm("spider"),this.unsubscribe=E.subscribe(function(){return e.setState()})}},{key:"componentWillUnmount",value:function(){this.unsubscribe()}},{key:"render",value:function(){var e=this,t=this.state.searchWord;return n.a.createElement(p.a,null,n.a.createElement("div",{className:"page"},n.a.createElement("div",{className:"content"},n.a.createElement("div",{className:"box"},n.a.createElement(S,{value:t,name:"searchWord",placeholder:"Type search word",label:"Search film",onChange:this.handleSearchChange}),n.a.createElement("button",{onClick:function(){return e.searchFilm(t)},type:"button",className:"button is-primary"},"Search film")),n.a.createElement(d.c,null,n.a.createElement(d.a,{exact:!0,path:"/",component:N}),n.a.createElement(d.a,{exact:!0,path:"/film/:id",component:I}))),n.a.createElement("div",{className:"sidebar"},n.a.createElement(F,{onAdd:this.handleAddFilm}))))}}]),t}(r.Component);a(40);i.a.render(n.a.createElement(M,null),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.0fb6cb84.chunk.js.map