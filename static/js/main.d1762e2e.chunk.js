(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],{14:function(e,t,i){},15:function(e,t,i){},16:function(e,t,i){},18:function(e,t,i){},19:function(e,t,i){"use strict";i.r(t);var c=i(7),n=i.n(c),s=(i(13),i(2)),a=i(1),l=(i(14),i(15),i(16),i(0)),r=function(e){var t=e.movie;return Object(l.jsxs)("div",{className:"card","data-cy":"movieCard",children:[Object(l.jsx)("div",{className:"card-image",children:Object(l.jsx)("figure",{className:"image is-4by3",children:Object(l.jsx)("img",{"data-cy":"moviePoster",src:t.imgUrl,alt:"Film logo"})})}),Object(l.jsxs)("div",{className:"card-content",children:[Object(l.jsxs)("div",{className:"media",children:[Object(l.jsx)("div",{className:"media-left",children:Object(l.jsx)("figure",{className:"image is-48x48",children:Object(l.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(l.jsx)("div",{className:"media-content",children:Object(l.jsx)("p",{className:"title is-8","data-cy":"movieTitle",children:t.title})})]}),Object(l.jsxs)("div",{className:"content","data-cy":"movieDescription",children:[t.description,Object(l.jsx)("br",{}),Object(l.jsx)("a",{href:t.imdbUrl,"data-cy":"movieURL",children:"IMDB"})]})]})]})},o=function(e){var t=e.movies;return Object(l.jsx)("div",{className:"movies",children:t.map((function(e){return Object(l.jsx)(r,{movie:e},e.imdbId)}))})},d=i(8),j=(i(18),i(6)),m=i.n(j),b=function(e){var t=e.formInput,i=e.onChangeInput,c=e.onMoviesQuery,n=e.movie,o=e.setMovie,j=e.setAllMovies,b=e.allMovies,u=e.loading,v=Object(a.useState)(!1),h=Object(s.a)(v,2),O=h[0],f=h[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("form",{className:"find-movie",onSubmit:function(e){return e.preventDefault()},children:[Object(l.jsxs)("div",{className:"field",children:[Object(l.jsx)("label",{className:"label",htmlFor:"movie-title",children:"Movie title"}),Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("input",{"data-cy":"titleField",type:"text",id:"movie-title",placeholder:"Enter a title to search",className:m()("input",{"is-danger":!n&&O&&!u}),value:t,onChange:function(e){i(e.target.value),f(!1)}})}),!n&&O&&!u&&Object(l.jsx)("p",{className:"help is-danger","data-cy":"errorMessage",children:"Can't find a movie with such a title"})]}),Object(l.jsxs)("div",{className:"field is-grouped",children:[Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{"data-cy":"searchButton",type:"submit",className:m()("button","is-light",{"is-loading":u}),disabled:!t.trim(),onClick:function(){return f(!0),c(),void o(null)},children:O?"Search again":"Find a movie"})}),n&&Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{"data-cy":"addButton",type:"button",className:"button is-primary",onClick:function(){return b.find((function(e){return e.title===(null===n||void 0===n?void 0:n.title)}))||j((function(e){return n?[].concat(Object(d.a)(e),[n]):e})),o(null),i(""),void f(!1)},children:"Add to the list"})})]})]}),Object(l.jsx)("div",{className:"container","data-cy":"previewContainer",children:n&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h2",{className:"title",children:"Preview"}),Object(l.jsx)(r,{movie:n})]})})]})};var u=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),i=t[0],c=t[1],n=Object(a.useState)(""),r=Object(s.a)(n,2),d=r[0],j=r[1],m=Object(a.useState)(null),u=Object(s.a)(m,2),v=u[0],h=u[1],O=Object(a.useState)(!1),f=Object(s.a)(O,2),x=f[0],p=f[1],g=Object(a.useState)(null),N=Object(s.a)(g,2),y=N[0],w=N[1];return Object(a.useEffect)((function(){v&&w({title:v.Title,description:v.Plot,imgUrl:"N/A"===v.Poster?"https://via.placeholder.com/360x270.png?text=no%20preview":v.Poster,imdbUrl:"https://www.imdb.com/title/".concat(v.imdbID),imdbId:v.imdbID})}),[v]),Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("div",{className:"page-content",children:Object(l.jsx)(o,{movies:i})}),Object(l.jsx)("div",{className:"sidebar",children:Object(l.jsx)(b,{formInput:d,onChangeInput:function(e){j(e)},onMoviesQuery:function(){var e;p(!0),(e=d,fetch("".concat("https://www.omdbapi.com/?apikey=f936cc38","&t=").concat(e)).then((function(e){return e.json()})).catch((function(){return{Response:"False",Error:"unexpected error"}}))).then((function(e){Object.hasOwnProperty.call(e,"Error")?h(null):h(e)})).finally((function(){return p(!1)}))},movie:y,setMovie:w,setAllMovies:c,allMovies:i,loading:x})})]})};n.a.render(Object(l.jsx)(u,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.d1762e2e.chunk.js.map