(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],[,,,,,,,,,,function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},,function(e,t,a){e.exports=a(22)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(0),i=a.n(r),l=a(9),n=a.n(l),m=(a(17),a(11)),s=a(4),o=a(5),c=a(7),d=a(6),u=(a(18),a(19),a(20),function(e){var t=e.title,a=e.description,r=e.imgUrl,l=e.imdbUrl;return i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-image"},i.a.createElement("figure",{className:"image is-4by3"},i.a.createElement("img",{src:r,alt:"Film logo"}))),i.a.createElement("div",{className:"card-content"},i.a.createElement("div",{className:"media"},i.a.createElement("div",{className:"media-left"},i.a.createElement("figure",{className:"image is-48x48"},i.a.createElement("img",{src:"images/imdb-logo.jpeg",alt:"imdb"}))),i.a.createElement("div",{className:"media-content"},i.a.createElement("p",{className:"title is-8"},t))),i.a.createElement("div",{className:"content"},a,i.a.createElement("br",null),i.a.createElement("a",{href:l},"IMDB"))))});u.defaultProps={description:""};var p=function(e){var t=e.movies;return i.a.createElement("div",{className:"movies"},t.map((function(e){return i.a.createElement(u,Object.assign({key:e.imdbId},e))})))};p.defaultProps={movies:[]};var v=a(2),E=a(1),b=a(3),h=a.n(b),f=(a(21),function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return(e=t.call.apply(t,[this].concat(i))).state={title:{value:"",isError:!0},imgUrl:{value:"",isError:!0},imdbUrl:{value:"",isError:!0},imdbId:{value:"",isError:!0},description:{value:"",isError:!0}},e.isBtnVisiable=function(){var t=e.state;return[t.title,t.description,t.imgUrl,t.imdbUrl,t.imdbId].some((function(e){return""===e.value}))},e.handlerEvent=function(t){var a=t.target,r=a.name,i=a.value,l=/^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)$/,n=e.props.listOfId;0!==i.length&&e.setState(Object(E.a)({},r,{value:i,isError:!0})),0===i.length&&e.setState(Object(E.a)({},r,{value:i,isError:!1})),"imgUrl"!==r&&"imdbUrl"!==r||e.setState((function(e){return Object(E.a)({},r,Object(v.a)(Object(v.a)({},e[r]),{},{value:i,isError:l.test(i)}))})),"imdbId"===r&&""!==i&&e.setState((function(e){return Object(E.a)({},r,Object(v.a)(Object(v.a)({},e[r]),{},{value:i,isError:!n.includes(i)}))}))},e.handlerSubmit=function(t){var a=e.props.onSubmit,r=e.state,i=r.title,l=r.description,n=r.imgUrl,m=r.imdbUrl,s=r.imdbId;t.preventDefault(),a({title:i.value,description:l.value,imgUrl:n.value,imdbUrl:m.value,imdbId:s.value}),e.setState({title:{value:"",isError:!0},imgUrl:{value:"",isError:!0},imdbUrl:{value:"",isError:!0},imdbId:{value:"",isError:!0},description:{value:"",isError:!1}})},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state,t=e.title,a=e.description,r=e.imgUrl,l=e.imdbUrl,n=e.imdbId;return i.a.createElement("form",{onSubmit:this.handlerSubmit},i.a.createElement("ul",{className:"form"},i.a.createElement("li",{className:"form__li"},i.a.createElement("label",{className:"form__label"},"Title:",i.a.createElement("span",{className:"required"},"*")),i.a.createElement("input",{value:t.value,type:"text",name:"title",className:h()("form__input",{form__required:!t.isError}),placeholder:"Enter a film title",onChange:this.handlerEvent}),!t.isError&&i.a.createElement("span",{className:"form__error"},"*Enter valid data")),i.a.createElement("li",{className:"form__li"},i.a.createElement("label",{className:"form__label"},"ImgUrl:",i.a.createElement("span",{className:"required"},"*")),i.a.createElement("input",{value:r.value,type:"text",name:"imgUrl",className:h()("form__input",{form__required:!r.isError}),placeholder:"Enter a image url",onChange:this.handlerEvent}),!r.isError&&i.a.createElement("span",{className:"form__error"},"*Enter valid data")),i.a.createElement("li",{className:"form__li"},i.a.createElement("label",{className:"form__label"},"imdbUrl:",i.a.createElement("span",{className:"required"},"*")),i.a.createElement("input",{value:l.value,type:"text",name:"imdbUrl",className:h()("form__input",{form__required:!l.isError}),placeholder:"Enter a imdb url",onChange:this.handlerEvent}),!l.isError&&i.a.createElement("span",{className:"form__error"},"*Enter valid data")),i.a.createElement("li",{className:"form__li"},i.a.createElement("label",{className:"form__label"},"imdbId",i.a.createElement("span",{className:"required"},"*")),i.a.createElement("input",{value:n.value,type:"text",name:"imdbId",className:h()("form__input",{form__required:!n.isError}),placeholder:"Enter a imdb Id",onChange:this.handlerEvent}),!n.isError&&i.a.createElement("span",{className:"form__error"},"*Enter valid data")),i.a.createElement("li",{className:"form__li"},i.a.createElement("label",{className:"form__label"},"Description:"),i.a.createElement("textarea",{value:a.value,name:"description",className:"form__input textarea",onChange:this.handlerEvent})),i.a.createElement("li",{className:"form__li"},i.a.createElement("input",{type:"submit",className:"form__submit",value:"Submit",disabled:this.isBtnVisiable()}))))}}]),a}(r.Component)),g=a(10),_=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return(e=t.call.apply(t,[this].concat(i))).state={movies:g},e.addMovie=function(t){e.setState((function(e){return{movies:[].concat(Object(m.a)(e.movies),[t])}}))},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state.movies;return i.a.createElement("div",{className:"page"},i.a.createElement("div",{className:"page-content"},i.a.createElement(p,{movies:e})),i.a.createElement("div",{className:"sidebar"},i.a.createElement(f,{onSubmit:this.addMovie,listOfId:e.map((function(e){return e.imdbId}))})))}}]),a}(r.Component);n.a.render(i.a.createElement(_,null),document.getElementById("root"))}],[[12,1,2]]]);
//# sourceMappingURL=main.49a3f696.chunk.js.map