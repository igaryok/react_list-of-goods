(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(t,e,a){t.exports=a(16)},15:function(t,e,a){},16:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),l=a(9),i=a.n(l),s=a(1),c=a(2),o=a(4),u=a(3),b=a(5),h=a(7),p=a(6),m=(a(15),function(t){function e(t){var a;return Object(s.a)(this,e),(a=Object(o.a)(this,Object(u.a)(e).call(this,t))).handleClick=function(t){var e=t.target,n=e.id,r=e.value;a.handleStateOfList(n,r)},a.handleStateOfList=t.handleStateOfList,a}return Object(b.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this.handleClick,e=this.props.defaultSelect;return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{id:"reverse",type:"button",className:"btn btn-primary btn-lg place",onClick:t},"Reverse"),r.a.createElement("button",{id:"sort-alphabetically",type:"button",className:"btn btn-primary btn-lg place",onClick:t},"Sort alphabetically"),r.a.createElement("button",{id:"sort-by-length",type:"button",className:"btn btn-primary btn-lg place",onClick:t},"Sort by length"),r.a.createElement("select",{id:"select",className:"btn btn-primary btn-lg place",onClick:t,defaultValue:e},[1,2,3,4,5,6,7,8,9,10].map(function(t){return r.a.createElement("option",{value:t,key:t},t)})),r.a.createElement("button",{id:"reset",type:"button",className:"btn btn-primary btn-lg place",onClick:t},"Reset"))}}]),e}(r.a.Component)),d=function(t){var e=t.listOfGoods;return r.a.createElement("ul",{className:"list-group list-group-flush"},e.map(function(t){return r.a.createElement("li",{className:"list-group-item",key:t},t)}))},f=function(t){function e(t){var a;return Object(s.a)(this,e),(a=Object(o.a)(this,Object(u.a)(e).call(this,t))).state={initialSelect:0,workList:Object(h.a)(t.listOfGoods)},a.handleStateOfList=a.handleStateOfList.bind(Object(p.a)(a)),a}return Object(b.a)(e,t),Object(c.a)(e,[{key:"handleStateOfList",value:function(t,e){switch(t){case"reverse":this.setState(function(t){return{workList:t.workList.reverse()}});break;case"sort-alphabetically":this.setState(function(t){return{workList:t.workList.sort()}});break;case"reset":this.setState({initialSelect:0,workList:Object(h.a)(this.props.listOfGoods)});break;case"sort-by-length":this.setState(function(t){return{workList:t.workList.sort(function(t,e){return t.length-e.length})}});break;case"select":this.setState({initialSelect:e-1})}}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m,{handleStateOfList:this.handleStateOfList,defaultSelect:this.state.initialSelect+1}),r.a.createElement(d,{listOfGoods:this.state.workList.slice(this.state.initialSelect)}))}}]),e}(r.a.Component),k=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],O=function(t){function e(){var t,a;Object(s.a)(this,e);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(o.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(r)))).state={isLoaded:!1},a.handleClick=function(){return a.setState({isLoaded:!0})},a}return Object(b.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this.state.isLoaded;return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Goods 1"),t?r.a.createElement(f,{listOfGoods:k}):r.a.createElement("button",{type:"button",className:"btn btn-primary btn-lg place",onClick:this.handleClick},"Start"))}}]),e}(r.a.Component);i.a.render(r.a.createElement(O,{test:123}),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.dc796305.chunk.js.map