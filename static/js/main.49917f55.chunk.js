(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{10:function(e,t,n){e.exports=n(17)},15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(7),o=n.n(r),l=(n(15),n(9)),i=n(1),u=n(2),m=n(4),s=n(3),d=n(5),b=n(8),h=n(19),p=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(m.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(c)))).state={name:"",number:""},n.handleSubmit=function(e){e.preventDefault(),n.props.submitContact({name:n.state.name,number:n.state.number,id:Object(h.a)()}),n.setState({name:"",number:""})},n.handleChange=function(e){n.setState(Object(b.a)({},e.target.name,e.target.value))},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("form",{onSubmit:this.handleSubmit},c.a.createElement("h2",null,"Name"),c.a.createElement("input",{type:"text",name:"name",placeholder:"Enter Name",onChange:this.handleChange,value:this.state.name}),c.a.createElement("h2",null,"Number"),c.a.createElement("input",{type:"tel",pattern:"(\\+?\\d[- .]*){7,13}",name:"number",placeholder:"Enter Number",onChange:this.handleChange,value:this.state.number}),c.a.createElement("button",{type:"submit"},"Add contact")))}}]),t}(a.Component),f=function(e){var t=e.contact,n=t.id,a=t.name,r=t.number,o=e.deleteContact;return c.a.createElement("li",null,c.a.createElement("span",null,a,": "),c.a.createElement("span",null,r),c.a.createElement("button",{type:"button",id:n,onClick:o},"DELETE"))},E=function(e){var t=e.contacts,n=e.deleteContact;return c.a.createElement("ul",null,t.map((function(e){return c.a.createElement(f,{contact:e,key:e.id,deleteContact:n})})))},g=function(e){var t=e.getName;return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"Find contact by name"),c.a.createElement("input",{type:"text",onChange:t}))},C=(n(16),function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(m.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(c)))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"},{id:"id-5",name:"Rosie Simpson",number:"459-12-56"},{id:"id-6",name:"Hermione Kline",number:"443-89-12"},{id:"id-7",name:"Eden Clements",number:"645-17-79"},{id:"id-8",name:"Annie Copeland",number:"227-91-26"}],filter:""},n.submitContact=function(e){console.log("data",{data:e}),n.setState((function(t){return{contacts:[].concat(Object(l.a)(t.contacts),[e])}}))},n.deleteContact=function(e){var t=e.target.id;n.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},n.getName=function(e){n.setState({filter:e.target.value})},n.filterContacts=function(){return n.state.contacts.filter((function(e){return e.name.toLocaleLowerCase().includes(n.state.filter)}))},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=null!==localStorage.getItem("contacts")?JSON.parse(localStorage.getItem("contacts")):[];console.log(e),this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(){localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"Phonebook"),c.a.createElement(p,{submitContact:this.submitContact}),c.a.createElement("h2",null,"Contacts"),c.a.createElement(g,{getName:this.getName}),c.a.createElement(E,{contacts:this.filterContacts(),deleteContact:this.deleteContact}))}}]),t}(a.Component));o.a.render(c.a.createElement(C,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.49917f55.chunk.js.map