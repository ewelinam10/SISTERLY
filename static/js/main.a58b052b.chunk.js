(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{53:function(e,a,t){},73:function(e,a,t){},74:function(e,a,t){},89:function(e,a,t){"use strict";t.r(a);var s,n=t(0),i=t.n(n),c=t(14),r=t.n(c),o=(t(73),t(74),t(97)),l=t(57),j=t(32),d=function(){return Object(j.b)()},m=j.c,b=t(8),u=t(24),h={isLogged:"true"==localStorage.getItem("isLogged"),username:null!==(s=localStorage.getItem("username"))&&void 0!==s?s:""},p=Object(u.c)({name:"userSession",initialState:h,reducers:{logout:function(e){localStorage.setItem("isLogged","false"),localStorage.setItem("username",""),e.isLogged=!1,e.username=""},login:function(e,a){localStorage.setItem("isLogged","true"),localStorage.setItem("username",a.payload),e.isLogged=!0,e.username=a.payload}}}),O=p.actions,x=O.login,g=O.logout,y=function(e){return e.userSession.isLogged},z=function(e){return e.userSession.username},w=p.reducer,f=t(1);var v,k,C=function(){var e=Object(b.f)(),a=d();return Object(f.jsx)("div",{children:Object(f.jsxs)(o.a,{onSubmit:function(t){var s=t.currentTarget;t.preventDefault(),!1===s.checkValidity()&&t.stopPropagation();var n=new FormData(t.target),i=Object.fromEntries(n.entries());a(x(i.username)),e.push("/")},children:[Object(f.jsxs)(o.a.Group,{controlId:"formBasicEmail",children:[Object(f.jsx)(o.a.Label,{children:"Email"}),Object(f.jsx)(o.a.Control,{name:"username",type:"email",placeholder:"example@gmail.com"})]}),Object(f.jsxs)(o.a.Group,{controlId:"formBasicPassword",children:[Object(f.jsx)(o.a.Label,{children:"Has\u0142o"}),Object(f.jsx)(o.a.Control,{name:"password",type:"password",placeholder:"Password"})]}),Object(f.jsx)(l.a,{variant:"primary",type:"submit",children:"Zaloguj"})]})})},N=t(46),S=t(10),T=t(56),Z=t(94),I=t(49),A=t(50),E=Object(A.b)(v||(v=Object(I.a)(["\n  0% {\n    opacity: 20%;\n  }\n  100% {\n    opacity: 1;\n  }\n"]))),M="#FF5E78",L=Object(A.a)(l.a)(k||(k=Object(I.a)(["\nanimation: 3s "," ease-out;\ntext-align: center;\ntext-decoration: none;\nbackground-color: ",";\nborder: 2px solid $color;\ndisplay: inline-block;\nfont-size :1rem;\nborder-radius: 0.3em;\nborder-color: ",';\ntransition: all 0.2s ease-in-out;\nposition: relative;\noverflow: hidden;\n&:before {\n  content: "";\n  background-color: rgba(255,255,255,0.5);\n  height: 100%;\n  width: 3em;\n  display: block;\n  position: absolute;\n  top: 0;\n  left: -4.5em;\n  transform: skewX(-45deg) translateX(0);\n  transition: none;\n}\n&:hover {\n  background-color: $color !important;\n  color: #fff;\n  border-color: ',";\n  &:before {\n    transform: skewX(-45deg) translateX(13.5em);\n   transition: all 0.5s ease-in-out;\n  }\n}\n"])),E,M,M,M);t(53);var q=function(){var e=Object(n.useState)(!1),a=Object(S.a)(e,2),t=a[0],s=a[1];return Object(f.jsx)("div",{children:Object(f.jsxs)(o.a,{noValidate:!0,validated:t,onSubmit:function(e){!1===e.currentTarget.checkValidity()&&(e.preventDefault(),e.stopPropagation()),s(!0)},children:[Object(f.jsxs)(o.a.Row,{children:[Object(f.jsxs)(o.a.Group,{as:T.a,md:"4",controlId:"validationCustom01",children:[Object(f.jsx)(o.a.Label,{children:"First name"}),Object(f.jsx)(o.a.Control,{required:!0,type:"text",placeholder:"First name",defaultValue:"Mark"}),Object(f.jsx)(o.a.Control.Feedback,{children:"Looks good!"})]}),Object(f.jsxs)(o.a.Group,{as:T.a,md:"4",controlId:"validationCustom02",children:[Object(f.jsx)(o.a.Label,{children:"Last name"}),Object(f.jsx)(o.a.Control,{required:!0,type:"text",placeholder:"Last name",defaultValue:"Otto"}),Object(f.jsx)(o.a.Control.Feedback,{children:"Looks good!"})]}),Object(f.jsxs)(o.a.Group,{as:T.a,md:"4",controlId:"validationCustomUsername",children:[Object(f.jsx)(o.a.Label,{children:"Username"}),Object(f.jsxs)(Z.a,{hasValidation:!0,children:[Object(f.jsx)(Z.a.Prepend,{children:Object(f.jsx)(Z.a.Text,{id:"inputGroupPrepend",children:"@"})}),Object(f.jsx)(o.a.Control,{type:"text",placeholder:"Username","aria-describedby":"inputGroupPrepend",required:!0}),Object(f.jsx)(o.a.Control.Feedback,{type:"invalid",children:"Please choose a username."})]})]})]}),Object(f.jsxs)(o.a.Row,{children:[Object(f.jsxs)(o.a.Group,{as:T.a,md:"6",controlId:"validationCustom03",children:[Object(f.jsx)(o.a.Label,{children:"City"}),Object(f.jsx)(o.a.Control,{type:"text",placeholder:"City",required:!0}),Object(f.jsx)(o.a.Control.Feedback,{type:"invalid",children:"Please provide a valid city."})]}),Object(f.jsxs)(o.a.Group,{as:T.a,md:"3",controlId:"validationCustom04",children:[Object(f.jsx)(o.a.Label,{children:"State"}),Object(f.jsx)(o.a.Control,{type:"text",placeholder:"State",required:!0}),Object(f.jsx)(o.a.Control.Feedback,{type:"invalid",children:"Please provide a valid state."})]}),Object(f.jsxs)(o.a.Group,{as:T.a,md:"3",controlId:"validationCustom05",children:[Object(f.jsx)(o.a.Label,{children:"Zip"}),Object(f.jsx)(o.a.Control,{type:"text",placeholder:"Zip",required:!0}),Object(f.jsx)(o.a.Control.Feedback,{type:"invalid",children:"Please provide a valid zip."})]})]}),Object(f.jsx)(o.a.Group,{children:Object(f.jsx)(o.a.Check,{required:!0,label:"Agree to terms and conditions",feedback:"You must agree before submitting."})}),Object(f.jsx)(L,{type:"submit",children:"Zarejestruj si\u0119"})]})})},K=t(61),P=t(62),G=t(68),B=t(67),W=t(101),R=[{name:"ASERTYWNO\u015a\u0106",description:"Grupa \u0107wicz\u0105ca asertywno\u015b\u0107 poprzez odgrywanie scenek z \u017cycia uczestnik\xf3w",numberOfTasks:"2",hash1:"#asertywnosc",hash2:"#samodoskonalenie",hash3:""},{name:"OGRODNICTWO",description:"Wsp\xf3lne rozpocz\u0119cie hodowli warzyw i owoc\xf3w na balkonie, ro\u015bliny wybierzemy na spotkaniu",numberOfTasks:"4",hash1:"#ogrodnictwo",hash2:"#naswiezympowietrzu"},{name:"PRZEBRAN\u017bUJ SI\u0118!",description:"Gromadzimy dziewczyny szukaj\u0105ce nowej pracy w odmiennej od dotychczasowej bran\u017cy, pomagamy sobie ze stresem i problemami",numberOfTasks:"3",hash1:"#praca",hash2:"#branza",hash3:"#zmiany"},{name:"PROGRAMOWANIE",description:"Do\u0142\u0105cz do zespo\u0142u i tw\xf3rz razem z nami aplikacj\u0119 na Androida!",numberOfTasks:"3",hash1:"#codegirls",hash2:"#programming",hash3:"#android"},{name:"NAUKA",description:"Podziel si\u0119 z nami swoimi sposobami na nauk\u0119!",numberOfTasks:"3",hash1:"#praca",hash2:"#branza",hash3:"#zmiany"},{name:"DOKTORAT",description:"Je\u015bli piszesz doktorat i potrzebujesz wsparcia od innych doktorantek, zapraszamy!",numberOfTasks:"5",hash1:"#praca",hash2:"#doktorat",hash3:"#wsparcie"},{name:"PREZENTUJEMY",description:"Po\u0107wicz z nami prezentacje przed publiczno\u015bci\u0105. Pokonaj trem\u0119 i naucz si\u0119 jasno wyra\u017ca\u0107 my\u015bli.",numberOfTasks:"2",hash1:"#prezentacja",hash2:"#samodoskonalenie",hash3:""}],_=function(e){Object(G.a)(t,e);var a=Object(B.a)(t);function t(){var e;Object(K.a)(this,t);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(e=a.call.apply(a,[this].concat(n))).linkToExampleOfGroups="https://gist.githubusercontent.com/ewelinam10/f1c304f6a2c21a311af97f92f2483967/raw/c2573affe9384ca64182388e7b0cf6adeec5666d/gistfile1.txt",e}return Object(P.a)(t,[{key:"render",value:function(){var e=0;return Object(f.jsx)("div",{className:"contain",children:R.map((function(a){return e++,Object(f.jsx)(W.a,{className:"tile",children:Object(f.jsxs)(W.a.Body,{children:[Object(f.jsx)("div",{className:["img",e.toString()].join(" ")}),Object(f.jsx)(W.a.Title,{className:"title",children:a.name}),Object(f.jsxs)("div",{className:"hashtags",children:[Object(f.jsx)("div",{className:"hash1",children:a.hash1}),Object(f.jsx)("div",{className:"hash2",children:a.hash2}),Object(f.jsx)("div",{className:"hash3",children:a.hash3})]}),Object(f.jsxs)("svg",{width:"121",height:"25",viewBox:"0 0 121 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(f.jsx)("path",{d:"M12.4998 6.25008C13.6457 6.25008 14.5832 7.18758 14.5832 8.33342C14.5832 9.47925 13.6457 10.4167 12.4998 10.4167C11.354 10.4167 10.4165 9.47925 10.4165 8.33342C10.4165 7.18758 11.354 6.25008 12.4998 6.25008ZM12.4998 16.6667C15.3123 16.6667 18.5415 18.0105 18.7498 18.7501H6.24984C6.48942 18.0001 9.69775 16.6667 12.4998 16.6667ZM12.4998 4.16675C10.1978 4.16675 8.33317 6.03133 8.33317 8.33342C8.33317 10.6355 10.1978 12.5001 12.4998 12.5001C14.8019 12.5001 16.6665 10.6355 16.6665 8.33342C16.6665 6.03133 14.8019 4.16675 12.4998 4.16675ZM12.4998 14.5834C9.71859 14.5834 4.1665 15.9792 4.1665 18.7501V20.8334H20.8332V18.7501C20.8332 15.9792 15.2811 14.5834 12.4998 14.5834Z",fill:"#5E548E"}),Object(f.jsx)("path",{d:"M36.4998 6.25008C37.6457 6.25008 38.5832 7.18758 38.5832 8.33342C38.5832 9.47925 37.6457 10.4167 36.4998 10.4167C35.354 10.4167 34.4165 9.47925 34.4165 8.33342C34.4165 7.18758 35.354 6.25008 36.4998 6.25008ZM36.4998 16.6667C39.3123 16.6667 42.5415 18.0105 42.7498 18.7501H30.2498C30.4894 18.0001 33.6978 16.6667 36.4998 16.6667ZM36.4998 4.16675C34.1978 4.16675 32.3332 6.03133 32.3332 8.33342C32.3332 10.6355 34.1978 12.5001 36.4998 12.5001C38.8019 12.5001 40.6665 10.6355 40.6665 8.33342C40.6665 6.03133 38.8019 4.16675 36.4998 4.16675ZM36.4998 14.5834C33.7186 14.5834 28.1665 15.9792 28.1665 18.7501V20.8334H44.8332V18.7501C44.8332 15.9792 39.2811 14.5834 36.4998 14.5834Z",fill:"#5E548E"}),Object(f.jsx)("path",{d:"M60.4998 6.25008C61.6457 6.25008 62.5832 7.18758 62.5832 8.33342C62.5832 9.47925 61.6457 10.4167 60.4998 10.4167C59.354 10.4167 58.4165 9.47925 58.4165 8.33342C58.4165 7.18758 59.354 6.25008 60.4998 6.25008ZM60.4998 16.6667C63.3123 16.6667 66.5415 18.0105 66.7498 18.7501H54.2498C54.4894 18.0001 57.6978 16.6667 60.4998 16.6667ZM60.4998 4.16675C58.1978 4.16675 56.3332 6.03133 56.3332 8.33342C56.3332 10.6355 58.1978 12.5001 60.4998 12.5001C62.8019 12.5001 64.6665 10.6355 64.6665 8.33342C64.6665 6.03133 62.8019 4.16675 60.4998 4.16675ZM60.4998 14.5834C57.7186 14.5834 52.1665 15.9792 52.1665 18.7501V20.8334H68.8332V18.7501C68.8332 15.9792 63.2811 14.5834 60.4998 14.5834Z",fill:"#5E548E"}),Object(f.jsx)("path",{d:"M84.4998 6.25008C85.6457 6.25008 86.5832 7.18758 86.5832 8.33342C86.5832 9.47925 85.6457 10.4167 84.4998 10.4167C83.354 10.4167 82.4165 9.47925 82.4165 8.33342C82.4165 7.18758 83.354 6.25008 84.4998 6.25008ZM84.4998 16.6667C87.3123 16.6667 90.5415 18.0105 90.7498 18.7501H78.2498C78.4894 18.0001 81.6978 16.6667 84.4998 16.6667ZM84.4998 4.16675C82.1978 4.16675 80.3332 6.03133 80.3332 8.33342C80.3332 10.6355 82.1978 12.5001 84.4998 12.5001C86.8019 12.5001 88.6665 10.6355 88.6665 8.33342C88.6665 6.03133 86.8019 4.16675 84.4998 4.16675ZM84.4998 14.5834C81.7186 14.5834 76.1665 15.9792 76.1665 18.7501V20.8334H92.8332V18.7501C92.8332 15.9792 87.2811 14.5834 84.4998 14.5834Z",fill:"#1DBA82"}),Object(f.jsx)("path",{d:"M108.5 6.25008C109.646 6.25008 110.583 7.18758 110.583 8.33342C110.583 9.47925 109.646 10.4167 108.5 10.4167C107.354 10.4167 106.417 9.47925 106.417 8.33342C106.417 7.18758 107.354 6.25008 108.5 6.25008ZM108.5 16.6667C111.312 16.6667 114.542 18.0105 114.75 18.7501H102.25C102.489 18.0001 105.698 16.6667 108.5 16.6667ZM108.5 4.16675C106.198 4.16675 104.333 6.03133 104.333 8.33342C104.333 10.6355 106.198 12.5001 108.5 12.5001C110.802 12.5001 112.667 10.6355 112.667 8.33342C112.667 6.03133 110.802 4.16675 108.5 4.16675ZM108.5 14.5834C105.719 14.5834 100.167 15.9792 100.167 18.7501V20.8334H116.833V18.7501C116.833 15.9792 111.281 14.5834 108.5 14.5834Z",fill:"#1DBA82"})]}),Object(f.jsx)("div",{className:"wrap",children:Object(f.jsxs)(W.a.Text,{className:"description",children:[a.description,Object(f.jsx)(l.a,{variant:"primary",className:"btn",children:"Do\u0142\u0105cz do grupy"})]})})]})})}))})}}]),t}(i.a.Component),D=t(25),V=t.p+"static/media/avatar.ae5007be.svg",F=function(e){var a=e.question,t=e.addAnswer,s=e.index,i=e.questionCount,c=Object(n.useState)(""),r=Object(S.a)(c,2),o=r[0],j=r[1],d=function(){j("")};return Object(f.jsx)("div",{children:Object(f.jsxs)("div",{className:"groups-question-card",children:[Object(f.jsx)("div",{children:Object(f.jsx)("img",{className:"groups-question-avatar",src:V})}),Object(f.jsxs)("div",{className:"groups-question-question",children:["Krok ",s," z ",i]}),Object(f.jsx)("div",{className:"groups-question-question",children:a}),Object(f.jsx)("textarea",{className:"form-control",value:o,onChange:function(e){j(e.target.value)}}),Object(f.jsxs)("div",{className:"mt-2 buttonWrapper",children:[Object(f.jsx)(l.a,{className:"groups-question-btn-prev",onClick:function(){t(o),d()},children:"Poprzednie"}),Object(f.jsx)(l.a,{className:"groups-question-btn-next offset-6",onClick:function(){t(o),d()},children:"Nast\u0119pne"})]})]})})},H=t(98),J=function(e){var a=e.questions,t=e.answers,s=Object(n.useState)(["P\u0142ec","Kraj zamieszkania","Przedzia\u0142 wiekowy","Czas trwania spotkania","Cz\u0119stotliwo\u015b\u0107 spotka\u0144"]),i=Object(S.a)(s,2),c=i[0],r=(i[1],Object(n.useState)(["#samorozwoj","#feminizm","#asertywnosc","#praca"])),o=Object(S.a)(r,2),l=o[0],j=o[1],d=Object(n.useState)(""),m=Object(S.a)(d,2),b=m[0],u=m[1];return Object(f.jsx)("div",{children:Object(f.jsxs)("div",{className:"groups-question-card",children:[Object(f.jsx)("div",{children:Object(f.jsx)("img",{className:"groups-question-avatar",src:V})}),Object(f.jsx)("div",{className:"groups-question-question",children:"Podsumowanie"}),a.map((function(e,s){return function(e){return Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{className:"font-weight-bold text-center",children:a[e]}),Object(f.jsx)("div",{children:t[e]})]})}(s)})),Object(f.jsx)("div",{className:"font-weight-bold text-center",children:"W dobraniu jak najlepszych cz\u0142onk\xf3w do kr\u0119gu mo\u017ce pom\xf3c:"}),Object(f.jsx)("div",{className:"d-flex flex-wrap",children:c.map((function(e){return Object(f.jsx)("div",{className:"question-summary-attr",children:e})}))}),Object(f.jsx)("div",{className:"font-weight-bold text-center mt-2",children:"Sugerowane hasztagi, wybierz z listy lub dodaj sw\xf3j w\u0142asny:"}),Object(f.jsxs)("div",{className:" d-flex flex-wrap",children:[l.map((function(e){return Object(f.jsx)("button",{disabled:!0,className:"question-summary-attr",children:e})})),Object(f.jsx)("input",{value:b,onChange:function(e){u(e.target.value)},className:"question-summary-attr",onKeyPress:function(e){"Enter"===e.key&&function(){var e=Array.from(b);"#"!==e[0]&&e.unshift("#"),j([].concat(Object(D.a)(l),[e.join("")])),u("")}()}})]}),Object(f.jsx)("div",{className:"mt-2 offset-4",children:Object(f.jsx)(H.a.Brand,{href:"/",children:Object(f.jsx)("button",{className:"btn btn-success groups-question-btn-next",children:"Zatwierdz"})})})]})})},U=function(){var e=Object(n.useState)(0),a=Object(S.a)(e,2),t=a[0],s=a[1],i=Object(n.useState)([]),c=Object(S.a)(i,2),r=c[0],o=c[1],l=function(e){document.getElementsByClassName("groups-question-card")[0].style.animation="mymove 1s ease-in-out",setTimeout((function(){s(t+1),o([].concat(Object(D.a)(r),[e])),document.getElementsByClassName("groups-question-card")[0].style.animation=""}),1e3)},j=["Tw\xf3j cel lub temat","Jakich os\xf3b szukasz w kr\u0119gu","Czego chcesz si\u0119 nauczy\u0107 lub do\u015bwiadczy\u0107 w kr\u0119gu","Co wniesiesz do kr\u0119gu w tym temacie (wiedza/do\u015bwiadczenie)"];return Object(f.jsx)("div",{children:Object(f.jsx)("div",{children:t===j.length?Object(f.jsx)(J,{answers:r,questions:j}):Object(f.jsx)(F,{question:j[t],addAnswer:l,index:t+1,questionCount:j.length})})})},Y=t(99),X=t(96),$=t.p+"static/media/logo.1709ba9f.svg";var Q=function(e){var a=d(),t=e.isLoggedIn?function(e){var a=[];return a.push(Object(f.jsx)(Y.a.Link,{href:"/addGroup",children:"ZA\u0141\xd3\u017b KR\u0104G"})),a.push(Object(f.jsx)(Y.a.Link,{href:"/myTools",children:"WIDOK SPOTKANIA"})),a.push(Object(f.jsx)(Y.a.Link,{href:"/mentors",children:"MENTORZY"})),a.push(Object(f.jsx)(Y.a.Link,{href:"/knowhow",children:"BAZA WIEDZY"})),a.push(function(e){return Object(f.jsxs)(X.a,{title:"",id:"nav-dropdown",children:[Object(f.jsx)(X.a.Item,{href:"/editprofile",children:"EDYTUJ PROFIL"}),Object(f.jsx)(X.a.Item,{href:"/rules",children:"KODEKS SISTERLY"}),Object(f.jsx)(X.a.Divider,{}),Object(f.jsx)(X.a.Item,{onClick:e,href:"/",children:"WYLOGUJ"})]})}(e)),a}((function(){a(g())})):function(){var e=[];return e.push(Object(f.jsx)(Y.a.Link,{href:"/singin",children:"ZALOGUJ"})),e.push(Object(f.jsx)(Y.a.Link,{href:"/signup",children:"ZA\u0141\xd3\u017b KONTO"})),e.push(Object(f.jsx)(Y.a.Link,{href:"/mentor_registration",children:"ZOSTA\u0143 MENTOREM"})),e}();return Object(f.jsxs)(H.a,{sticky:"top",expand:"lg",children:[Object(f.jsx)(H.a.Brand,{href:"/",children:Object(f.jsx)("img",{width:"45%",src:$})}),Object(f.jsx)(H.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(f.jsx)(H.a.Collapse,{className:"justify-content-end",id:" basic-navbar-nav",children:Object(f.jsx)(Y.a,{children:t})})]})};var ee=function(){return Object(f.jsx)("div",{children:"Tu b\u0119dzie formularz dla mentora ;)"})},ae=t.p+"static/media/hearticon.82676ea2.svg",te=function(){return Object(f.jsxs)("div",{className:"about-container",children:[Object(f.jsx)("h1",{children:"Czym jest Sisterly? "}),Object(f.jsxs)("h3",{children:["Na platformie Sisterly pomagamy kobietom spotyka\u0107 si\u0119 on-line w ma\u0142ych (do 5 os\xf3b) grupach skupionych wok\xf3\u0142 wa\u017cnego dla Was tematu lub celu.",Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),"Czegokolwiek aktualnie potrzebujecie: motywacji do realizacji projektu czy lu\u017anej rozmowy o zainteresowaniach - jeste\u015bmy dla Was, bo wiemy, \u017ce w KR\u0118GU SI\u0141A, W KR\u0118GU RO\u015aNIESZ",Object(f.jsx)("img",{className:"animate__backInDown",src:ae})]})]})},se=t.p+"static/media/main_image.5ca026ed.jpeg",ne=t(95),ie=function(){return Object(f.jsx)(o.a,{children:Object(f.jsxs)(o.a.Group,{as:ne.a,controlClass:"emailform",children:[Object(f.jsx)(T.a,{xs:7,className:"emailForm",children:Object(f.jsx)(o.a.Control,{type:"email",placeholder:"example@gmail.com"})}),Object(f.jsx)(L,{children:"DO\u0141\u0104CZ!"})]})})},ce=function(){return Object(f.jsxs)("div",{className:"landing-container",children:[Object(f.jsxs)("div",{children:[Object(f.jsxs)("div",{className:"welcome-text",children:[Object(f.jsxs)("h1",{children:["ZNAJD\u0179 WSPARCIE ",Object(f.jsx)("br",{}),"W SIOSTRZANYM KR\u0118GU"]}),Object(f.jsx)("span",{children:"Sisterly, to jedyne takie miejsce w sieci, oparte na \u017cyczliwo\u015bci i siostrzanym wsparciu."})]}),Object(f.jsx)(ie,{})]}),Object(f.jsx)("div",{children:Object(f.jsx)("img",{src:se})})]})},re=function(e){return Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{children:Object(f.jsx)("img",{src:e.img})}),Object(f.jsxs)("div",{children:[Object(f.jsxs)("h2",{children:[" ",e.title," "]}),e.desc]})]})},oe=t.p+"static/media/step_1.7f905426.svg",le=t.p+"static/media/step_2.14938917.svg",je=t.p+"static/media/step_3.976f709d.svg",de=t.p+"static/media/step_4.c933890f.svg",me=function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:"Jak to dzia\u0142a?"}),Object(f.jsxs)("div",{className:"steps_container",children:[Object(f.jsx)(re,{title:"Zaloguj si\u0119",desc:"Bez obaw - nie jeste\u015bmy kolejnym portalem \u015bl\u0119dz\u0105cym Ci\u0119 wsz\u0119dzie. Podajesz tylko niezb\u0119dne dane a innym pokazujesz ile sama chcesz pokaza\u0107.",img:oe}),Object(f.jsx)(re,{title:"Opowiedz nam o swoich potrzebach",desc:"Wype\u0142nij kr\xf3tk\u0105 ankiet\u0119, \u017ceby\u015bmy \u0142atwiej mogli dobra\u0107 idealn\u0105 grup\u0119 dla Ciebie.",img:le}),Object(f.jsx)(re,{title:"Znajd\u017a sw\xf3j kr\u0105g lub za\u0142\xf3\u017c nowy",desc:"Na platformie znajdzie pomocne informacjie i wskaz\xf3wki jak najlepiej do tego podej\u015b\u0107.",img:je}),Object(f.jsx)(re,{title:"Ciesz si\u0119 wsparcie grupy my zajmiemy si\u0119 reszt\u0105!",desc:"Narz\u0119dzia, kt\xf3re oferuje Sisterly pomog\u0105 wam w organizacji spotka\u0144, utrzymaniu dobrej atmosfery i motywacji.",img:de})]})]})},be=function(e){for(var a=[],t=0;t<e.hashtags.length;t++)a.push(Object(f.jsxs)("h4",{children:["# ",e.hashtags[t]," "]}));return Object(f.jsxs)("div",{children:[Object(f.jsx)("img",{src:e.img,width:"50%"}),Object(f.jsx)("h4",{children:e.userName}),"nale\u017cy do kr\u0119g\xf3w:",a,e.desc]})},ue=t.p+"static/media/em_portret.42c0d78b.jpg",he=t.p+"static/media/MW_foto.c1be7824.jpg",pe=t.p+"static/media/kasia.7f54f416.jpg",Oe=function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:"Dlaczego warto tu by\u0107?"}),Object(f.jsxs)("div",{className:"recomendation-card-container",children:[Object(f.jsx)(be,{img:he,userName:"Marysia",hashtags:["przebran\u017cawianie","rozw\xf3j_osobisty"],desc:"Jaki\u015b czas temu zauwa\u017cy\u0142am, \u017ce m\xf3j \u015bwiat zdominowany jest przez m\u0119\u017cczyzn. Brakowa\u0142o mi kobiecej perspektywy. Sisterly daje mo\u017cliwo\u015b\u0107 po\u0142\u0105czenia si\u0119 z dziewczynami otwartymi na wymian\u0119 do\u015bwiadcze\u0144 w przyjaznej atmosferze."}),Object(f.jsx)(be,{img:pe,userName:"Kasia",hashtags:["doktoratpogodzinach","nieumiemwpaznokcie"],desc:"Znalaz\u0142am kr\u0105g kobiet, kt\xf3re mnie rozumiej\u0105 bez zb\u0119dnego t\u0142umaczenia, daj\u0105 mi energii do dzia\u0142ania.W drugim kr\u0119gu, gdzie pr\xf3bujemy ogarn\u0105\u0107 bycie kobiet\u0105 sukcesu, kt\xf3ra nie umie zrobi\u0107 sobie paznokci - spotka\u0142am tam kobiety ze \u015bwietnym poczuciem humoru."}),Object(f.jsx)(be,{img:ue,userName:"Ewelina",hashtags:["programowanie","kobietydokodu"],desc:"Strona sisterly natchne\u0142a mnie do stworzenia ma\u0142ej grupki dziewczyn, kt\xf3ra b\u0119dzie wsp\xf3lnie rozwija\u0107 wymy\u015blon\u0105 przez nas aplikacj\u0119. Strona zgrupowa\u0142a mnie ze \u015bwietnymi dziewcznami i pomog\u0142a w zarz\u0105dzaniu spotkaniami oraz zadaniami. "})]}),Object(f.jsxs)("div",{className:"circles",children:[Object(f.jsx)("div",{id:"circle"}),Object(f.jsx)("div",{id:"circle",style:{backgroundColor:"#5E548E"}}),Object(f.jsx)("div",{id:"circle"})]})]})},xe=t(100),ge=t.p+"static/media/plus-icon.376e9b6a.svg",ye=function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:"Najcz\u0119\u015bciej zadawane pytania"}),Object(f.jsxs)(xe.a,{defaultActiveKey:"1",children:[Object(f.jsxs)(xe.a.Toggle,{className:"accordion-header",eventKey:"0",children:["Czym r\xf3\u017cni si\u0119 Sisterly od grup tematycznych w socjal mediach?",Object(f.jsx)("img",{src:ge,className:"accordionIcon"})]}),Object(f.jsx)(xe.a.Collapse,{eventKey:"0",children:Object(f.jsx)(W.a.Body,{children:"W Sisterly skupiamy si\u0119 konkretenie na budowaniu kr\u0119g\xf3w spotykaj\u0105cych si\u0119 regularnie online. Od nas dostajesz wsparcie i narz\u0119dzia do ich prowadzenia. \u017badna z platform nie zapewnia konkretnie takiego rozwi\u0105zania. "})})]}),Object(f.jsxs)(xe.a,{defaultActiveKey:"1",children:[Object(f.jsxs)(xe.a.Toggle,{className:"accordion-header",eventKey:"0",children:["Czy tematy grup s\u0105 ograniczone tylko do rozwoju osobistego?",Object(f.jsx)("img",{src:ge,className:"accordionIcon"})]}),Object(f.jsx)(xe.a.Collapse,{eventKey:"0",children:Object(f.jsx)(W.a.Body,{children:"Nie! Tematy wymy\u015blacie same, w zale\u017cno\u015bci tego czego aktualnie porzebujecie, czy to motywacja w trakcie pisania doktoratu, rozmowy o podr\xf3\u017cach, nauka lepienia pierog\xf3w czy programowania."})})]}),Object(f.jsxs)(xe.a,{defaultActiveKey:"1",children:[Object(f.jsxs)(xe.a.Toggle,{className:"accordion-header",eventKey:"0",children:["Znalaz\u0142am swoj\u0105 grup\u0119 i co dalej?",Object(f.jsx)("img",{src:ge,className:"accordionIcon"})]}),Object(f.jsx)(xe.a.Collapse,{eventKey:"0",children:Object(f.jsx)(W.a.Body,{children:"Po zawi\u0105zaniu kr\u0119gu ustalacie zasady i spotykacie sie regularnie online by czerpa\u0107 z grupy wsparcie i motywacj\u0119. Platforma prowadzi Was za r\u0119k\u0119 w zakresie technicznym i na ka\u017cdym kroku daje wskaz\xf3wki jak wsp\xf3\u0142dzia\u0142a\u0107 skutecznie i serdecznie. "})})]}),Object(f.jsxs)(xe.a,{defaultActiveKey:"1",children:[Object(f.jsxs)(xe.a.Toggle,{className:"accordion-header",eventKey:"0",children:["Czy korzystanie z platformy jest p\u0142atne?",Object(f.jsx)("img",{src:ge,className:"accordionIcon"})]}),Object(f.jsx)(xe.a.Collapse,{eventKey:"0",children:Object(f.jsx)(W.a.Body,{children:"Korzystanie z platformy jest darmowe. Dajemy jednak mo\u017cliwo\u015b\u0107 korzystania z p\u0142atnych narz\u0119dzi je\u015bli uznacie z grup\u0105, \u017ce tego potrzebujecie. "})})]}),Object(f.jsx)("div",{className:"mt-3",children:"Nie czekaj, siostrzana energia jest na wyci\u0105gni\u0119cie r\u0119ki!"})]})},ze=function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)(ce,{}),Object(f.jsx)("section",{children:Object(f.jsx)(te,{})}),Object(f.jsx)("section",{children:Object(f.jsx)(me,{})}),Object(f.jsx)("section",{children:Object(f.jsx)(Oe,{})}),Object(f.jsx)("section",{children:Object(f.jsx)(ye,{})})]})},we=t.p+"static/media/sticky_note.0b1ba5d3.jpg",fe=function(e){var a=e.note,t=e.index,s=Object(n.useState)(!1),i=Object(S.a)(s,2),c=i[0],r=i[1],o=function(){r(!c)};return Object(f.jsxs)("div",{children:[Object(f.jsxs)("div",{className:"sticky-note-wrapper",children:[Object(f.jsx)("img",{className:"sticky-note-image",src:we,onClick:o}),Object(f.jsx)("div",{className:"sticky-note-name",children:a.name})]}),Object(f.jsxs)("div",{className:"sticky-note-opend",id:"sticky-note-opened-".concat(t),children:[Object(f.jsx)("img",{className:"sticky-note-image-opend",src:we,onClick:o}),Object(f.jsx)("div",{className:"sticky-note-name-opend",children:a.name}),Object(f.jsx)("div",{className:"sticky-note-name-opend",children:a.description})]})]})},ve=t.p+"static/media/videocam_off_black_24dp.c4b50005.svg",ke=t.p+"static/media/mic_off_black_24dp.198688a5.svg",Ce=t.p+"static/media/chat_black_24dp.3c12da91.svg",Ne=t(65),Se=t.n(Ne),Te=t.p+"static/media/OnlineIcon.02df1cc5.png",Ze=function(){var e=Object(n.useState)([{name:"KASIA",description:"Opis notatki 1 test dlugosci notatki"},{name:"EWELINA",description:"Opis notatki 2"},{name:"MAGDA",description:"Opis notatki 3"}]),a=Object(S.a)(e,2),t=a[0],s=a[1],i=Object(n.useState)([{name:"Notatka 1 test dlugiej nazwy"},{name:"Notatka 2"},{name:"Notatka 3"}]),c=Object(S.a)(i,2),r=c[0],o=c[1],l=Object(n.useState)(3600),j=Object(S.a)(l,2),d=j[0],m=j[1],b=Object(n.useState)(""),u=Object(S.a)(b,2),h=u[0],p=u[1],O=Object(n.useState)(""),x=Object(S.a)(O,2),g=x[0],y=x[1];return Object(n.useEffect)((function(){var e=setTimeout((function(){m(d-1),p(function(e){var a=Math.floor(e/3600),t=Math.floor((e-3600*a)/60),s=e-60*t-3600*a;return(a<10?"0"+a.toString():a.toString())+"h "+(t<10?"0"+t:t.toString())+"m "+(s<10?"0"+s:s.toString())+"s"}(d))}),1e3);return function(){return clearTimeout(e)}}),[d]),Object(f.jsxs)("div",{className:"my-tools-body",children:[Object(f.jsxs)("div",{className:"my-panel my-tools-sticky-note-section",children:["TODO lista kr\u0119gu:",Object(f.jsxs)("div",{className:"d-flex",children:[t.map((function(e,a){return Object(f.jsx)(fe,{note:e,index:a})})),Object(f.jsx)("img",{className:"my-tools-plus-icon pull-right",onClick:function(){var e={name:"Notatka ".concat(t.length+1),description:""};s([].concat(Object(D.a)(t),[e]))},src:ge})]})]}),Object(f.jsxs)("div",{className:"mt-2 p-0 d-flex mr-2",children:[Object(f.jsxs)("div",{className:"mr-2 p-0 col-md-8",children:[Object(f.jsxs)("div",{className:"my-panel my-tools-meeting-wrapper",children:[Object(f.jsxs)("div",{className:"col-md-1 d-flex text-left",children:[Object(f.jsx)("img",{className:"my-tools-icon",src:ve}),Object(f.jsx)("img",{className:"my-tools-icon",src:ke})]}),Object(f.jsx)("div",{className:"my-tools-meeting-header",children:"Twoje najbli\u017csze spotkanie rozpocznie sie za:"}),Object(f.jsx)("div",{className:"my-tools-contdown",children:h}),Object(f.jsx)("img",{className:"online-table",src:Te})]}),Object(f.jsxs)("div",{className:"mt-1 my-panel my-tools-message-wrapper",children:[Object(f.jsx)("input",{onChange:function(e){y(e.target.value)},className:"my-tools-message-input",placeholder:"Twoja wiadomosc..",value:g}),Object(f.jsx)("img",{className:"ml-2",src:Ce,onClick:function(){return y("")}})]})]}),Object(f.jsxs)("div",{className:"m-0 my-panel col-md-4",id:"draggable-wrapper",children:["Wasze notatki ze spotkania:",r.map((function(e,a){return Object(f.jsx)(Se.a,{bounds:"#draggable-wrapper",children:Object(f.jsx)("img",{className:"my-tools-sticky-note-draggable",src:we})})})),Object(f.jsx)("img",{className:"my-tools-plus-icon pull-right",onClick:function(){var e={name:"Notatka ".concat(r.length+1)};o([].concat(Object(D.a)(r),[e]))},src:ge})]})]})]})},Ie=function(){return Object(f.jsx)("div",{children:"Prace w budowie... ( widok mentor\xf3w)"})};function Ae(){var e=m(y);m(z);return Object(f.jsxs)(N.a,{baseName:"/sisterly",children:[Object(f.jsx)(Q,{isLoggedIn:e}),Object(f.jsxs)(b.c,{children:[Object(f.jsx)(b.a,{path:"/singin",children:Object(f.jsx)(C,{})}),Object(f.jsx)(b.a,{path:"/signup",children:Object(f.jsx)(q,{})}),Object(f.jsx)(b.a,{path:"/mentor_registration",children:Object(f.jsx)(ee,{})}),Object(f.jsx)(b.a,{path:"/addGroup",children:Object(f.jsx)(U,{})}),Object(f.jsx)(b.a,{exact:!0,path:"/myTools",component:Ze}),Object(f.jsx)(b.a,{path:"/mentors",children:Object(f.jsx)(Ie,{})}),Object(f.jsxs)(b.a,{path:"/",children:[e&&Object(f.jsx)(_,{groupsType:"example"}),!e&&Object(f.jsx)(ze,{})]})]}),Object(f.jsxs)("div",{className:"main-footer",children:[Object(f.jsx)("span",{className:"main-contact",children:"Kontakt"}),Object(f.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"main-footer-icon-facebook",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#FFF",children:[Object(f.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),Object(f.jsx)("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"})]}),Object(f.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"main-footer-icon-mail","enable-background":"new 0 0 24 24",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#FFF",children:[Object(f.jsx)("rect",{fill:"none",height:"24",width:"24"}),Object(f.jsx)("path",{d:"M22,12c0-5.52-4.48-10-10-10S2,6.48,2,12c0,4.84,3.44,8.87,8,9.8V15H8v-3h2V9.5C10,7.57,11.57,6,13.5,6H16v3h-2 c-0.55,0-1,0.45-1,1v2h3v3h-3v6.95C18.05,21.45,22,17.19,22,12z"})]})]})]})}var Ee=t(51),Me=t.n(Ee),Le=t(66);function qe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return new Promise((function(a){return setTimeout((function(){return a({data:e})}),500)}))}var Ke=Object(u.b)("counter/fetchCount",function(){var e=Object(Le.a)(Me.a.mark((function e(a){var t;return Me.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,qe(a);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()),Pe=Object(u.c)({name:"counter",initialState:{value:0,status:"idle"},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,a){e.value+=a.payload}},extraReducers:function(e){e.addCase(Ke.pending,(function(e){e.status="loading"})).addCase(Ke.fulfilled,(function(e,a){e.status="idle",e.value+=a.payload}))}}),Ge=Pe.actions,Be=(Ge.increment,Ge.decrement,Ge.incrementByAmount,Pe.reducer),We=Object(u.a)({reducer:{counter:Be,userSession:w}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(88);r.a.render(Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(j.a,{store:We,children:Object(f.jsx)(Ae,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[89,1,2]]]);
//# sourceMappingURL=main.a58b052b.chunk.js.map