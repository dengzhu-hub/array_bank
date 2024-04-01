let e,o;const n={owner:"Steven Thomas Williams",movements:[200,-200,340,-300,-20,50,400,-460],interestRate:.7,pin:3333,movementsDates:["2019-11-01T13:15:33.035Z","2019-11-30T09:48:16.867Z","2019-12-25T06:04:23.907Z","2020-01-25T14:18:46.235Z","2020-02-05T16:33:06.386Z","2020-04-10T14:43:26.374Z","2020-06-25T18:49:59.371Z","2020-07-26T12:01:20.894Z"],currency:"OMR",locale:"ar-OM"};console.log(n.movements);const l=[{owner:"Jonas Schmedtmann",movements:[200,450,-400,3e3,-650,-130,70,1300],interestRate:1.2,pin:1111,movementsDates:["2019-11-18T21:31:17.178Z","2019-12-23T07:42:02.383Z","2020-01-28T09:15:04.904Z","2020-04-01T10:17:24.185Z","2020-05-08T14:11:59.604Z","2020-05-27T17:01:17.194Z","2023-03-07T10:32:34.600Z","2023-03-08T10:32:34.600Z"],currency:"EUR",locale:"pt-PT"},{owner:"Jessica Davis",movements:[5e3,3400,-150,-790,-3210,-1e3,8500,-30],interestRate:1.5,pin:2222,movementsDates:["2019-11-01T13:15:33.035Z","2019-11-30T09:48:16.867Z","2019-12-25T06:04:23.907Z","2020-01-25T14:18:46.235Z","2020-02-05T16:33:06.386Z","2020-04-10T14:43:26.374Z","2020-06-25T18:49:59.371Z","2020-07-26T12:01:20.894Z"],currency:"USD",locale:"en-US"},n,{owner:"Sarah Smith",movements:[430,1e3,700,50,90],interestRate:1,pin:4444,movementsDates:["2019-11-01T13:15:33.035Z","2019-11-30T09:48:16.867Z","2019-12-25T06:04:23.907Z","2020-01-25T14:18:46.235Z","2020-02-05T16:33:06.386Z","2020-04-10T14:43:26.374Z","2020-06-25T18:49:59.371Z","2020-07-26T12:01:20.894Z"],currency:"DKK",locale:"da-DK"},{owner:"jack Deng keng",movements:[1e3,2e3,5e3,9e5,-1e5,442423],interestRate:2.3,pin:5555,movementsDates:["2019-11-01T13:15:33.035Z","2019-11-30T09:48:16.867Z","2019-12-25T06:04:23.907Z","2020-01-25T14:18:46.235Z","2020-02-05T16:33:06.386Z","2020-04-10T14:43:26.374Z"],currency:"CNY",locale:"zh-CN"}],t=document.querySelector(".welcome"),c=document.querySelector(".date"),s=document.querySelector(".balance__value"),r=document.querySelector(".summary__value--in"),a=document.querySelector(".summary__value--out"),u=document.querySelector(".summary__value--interest"),i=document.querySelector(".timer"),m=document.querySelector(".app"),g=document.querySelector(".movements"),d=document.querySelector(".login__btn"),v=document.querySelector(".form__btn--transfer"),f=document.querySelector(".form__btn--loan"),h=document.querySelector(".form__btn--close"),p=document.querySelector(".btn--sort"),y=document.querySelector(".login__input--user"),w=document.querySelector(".login__input--pin"),T=document.querySelector(".form__input--to"),S=document.querySelector(".form__input--amount"),b=document.querySelector(".form__input--loan-amount"),N=document.querySelector(".form__input--user"),_=document.querySelector(".form__input--pin"),Z=document.querySelector(".modal"),M=document.querySelector(".overlay"),D=document.querySelector(".close-modal");document.querySelectorAll(".show-modal");const F=function(){Z.classList.add("hidden"),M.classList.add("hidden")};window.onload=function(){Z.classList.remove("hidden"),M.classList.remove("hidden")},M.addEventListener("click",F),D.addEventListener("click",F),document.addEventListener("keydown",function(e){console.log(e.key),"Escape"!==e.key||Z.classList.contains("hidden")||F()});const q=function(e,o){let n=Math.round(Math.abs(e-new Date)/864e5);return(console.log(n),0===n)?"Today":1===n?"Yesterday":n<=7?`${n} days ago`:new Intl.DateTimeFormat(o).format(e)},L=function(e,o,n){return new Intl.NumberFormat(o,{style:"currency",currency:n}).format(e)},$=function(e){E(e),k(e),x(e)},I=function(){let e=function(){let e=String(Math.floor(o/60)).padStart(2,"0"),l=String(o%60).padStart(2,"0");i.textContent=`${e}:${l}`,0===o&&(clearInterval(n),t.textContent="Log in to get started",m.style.opacity="0"),o--},o=300;e();let n=setInterval(e,1e3);return n},E=(e,o=!1)=>{let n=o?e.movements.slice().sort((e,o)=>e-o):e.movements;g.innerHTML="",n.forEach((o,n)=>{let l=o>0?"deposit":"withdrawal",t=q(new Date(e.movementsDates[n]),e.locale),c=L(o,e.locale,e.currency),s=`
    <div class="movements__row">
    <div class="movements__type movements__type--${l}">${n+1} ${l}</div>
    <div class="movements__date">${t}</div>
    <div class="movements__value">${c}</div>
  </div>
    `;g.insertAdjacentHTML("afterbegin",s)})};(e=>{e.forEach(e=>{e.userName=e.owner.toLowerCase().split(" ").map(e=>e[0]).join("")})})(l),console.log(l);const x=e=>{let o=e.movements.filter(e=>e>0).reduce((e,o)=>e+o,0);r.textContent=L(o,e.locale,e.currency);let n=e.movements.filter(e=>e<0).reduce((e,o)=>e+o,0);a.textContent=L(Math.abs(n),e.locale,e.currency);let l=e.movements.filter(e=>e>0).map(o=>o*e.interestRate/100).reduce((e,o)=>e+o,0);u.textContent=L(l,e.locale,e.currency)},k=e=>{e.balance=e.movements.reduce((e,o)=>e+o,0),s.textContent=L(e.balance,e.locale,e.currency)};let C=!1;p.addEventListener("click",function(o){o.preventDefault(),E(e,!C),C=!C}),d.addEventListener("click",n=>{if(n.preventDefault(),console.log("Logined"),console.log(e=l.find(e=>e.userName===y.value)),e?.pin===Number(w.value)){t.textContent=`Welcome back, ${e.owner.split(" ")[0]}`,m.style.opacity=100;let n=new Date;c.textContent=new Intl.DateTimeFormat(e.locale,{year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",weekday:"long"}).format(n),o&&clearInterval(o),o=I(),y.value=w.value="",N.value=_.value="",$(e),w.blur()}else confirm("输入错误，窗口即将关闭"),m.style.opacity=0}),console.log(l),v.addEventListener("click",function(o){o.preventDefault(),console.log("ddd");let n=Number(S.value),t=l.find(e=>e.userName===T.value);T.value=S.value="",n>0&&t&&e.balance>=n&&e.userName!==t?.userName&&(e.movements.push(-n),t.movements.push(n),e.movementsDates.push(new Date().toISOString()),t.movementsDates.push(new Date().toISOString()),$(e),console.log("transfer done")),console.log(t,n)}),f.addEventListener("click",function(o){o.preventDefault();let n=Number(Math.round(b.value));n>0&&e.movements.some(e=>e>.1*n)?setTimeout(()=>{e.movements.push(n),e.movementsDates.push(new Date().toISOString()),$(e),console.log("added")},3e3):console.log("can not execute it"),b.value=""}),h.addEventListener("click",function(o){if(o.preventDefault(),console.log("done"),N.value===e.userName&&Number(_.value)===e.pin){let o=l.findIndex(o=>o.userName===e.userName);console.log(o),N.value=_.value="",l.splice(o,1),m.style.opacity="0",t.textContent="Log in to get started ",console.log("do it")}else console.log("something wrong")}),console.log(l);const A=[200,450,-400,3e3,-650,-130,70,1300];console.log(A.filter(e=>e<0)),console.log(A.reduce((e,o,n)=>(console.log(`iterator ${n}: ${e}`),e+o),0)),console.log(A.reduce((e,o)=>e<o?e:o,A[0]));const O=e=>e.map(e=>e<=2?2*e:16+4*e).filter(e=>e>=18).reduce((e,o,n,l)=>e+o/l.length,0);console.log(O([5,2,4,1,15,8,3]),O([16,6,10,5,6,1,4])),console.log(A.reduce((e,o)=>(o>0&&(e+=o),e),0)),console.log(A.find(e=>e>100)),console.log(l.find(e=>"Jessica Davis"===e.owner)),console.log(A.includes(-130)),console.log(A.some((e,o,n)=>e>500)),console.log(A.every((e,o,n)=>e>500));const R=e=>e>0;console.log(A.every(R)),console.log(A.filter(R)),console.log(A.some(R)),console.log([1,2,[2,5,6,[6,7,8]]].flat()),console.log(l.map(e=>e.movements).flat()),console.log(l.map(e=>e.movements).flat().reduce((e,o)=>e+o,0));const j=["Jonas","Zach","Adam","Martha"];console.log(j.sort()),console.log(j.reverse()),A.sort(function(e,o){return e>o?1:e<o?-1:0}),console.log(A),A.sort((e,o)=>o-e),console.log(A),console.log([1,2,3,4,5,6,7]),console.log([1,2,3,4,5]);const J=Array(7);console.log(J),console.log(J.map(e=>5)),J.fill(5),console.log(J);const z=Array.from(J);console.log(z),console.log(z.slice()),console.log(Object.assign([],z)),function(e,o,n){console.log(arguments[1]),console.log(arguments[1]),console.log(arguments[2])}(887,2,3),console.log(function(){return Array.from(arguments)}(1,2,3)),console.log(Array.from({length:6},()=>2)),console.log(Array.from({length:6},(e,o)=>o+1)),console.log(Array.from({length:100},()=>Math.floor(100*Math.random()))),console.log([...document.querySelectorAll(".movements__row")]);const P=[1,,,,,,,4];console.log(P),console.log(P[2]),console.log(Array(10).length),console.log(Array(10)),s.addEventListener("click",function(){[...document.querySelectorAll(".movements__row")].forEach(function(e,o){o%2==0&&(e.style.backgroundColor="red")})});let U=[7,23,4,5,52,25,5];console.log(U.every((e,o,n)=>e>2)),console.log(U.map(function(e){return 3*e})),console.log([2,4,5].reduce((e,o,n,l)=>e+o));const W=A.map(e=>1.1*e);console.log(A),console.log(W),console.log(A.map((e,o)=>`movement ${o+1}: You ${e>0?"deposit":"withdrawal"} ${Math.abs(e)}`)),console.log(l.flatMap(e=>e.movements).filter(e=>e>0).reduce((e,o)=>e+o,0)),console.log(l.flatMap(e=>e.movements).reduce((e,o)=>o>=1e3?++e:e,0));const{deposit:H,withdrawal:K}=l.flatMap(e=>e.movements).reduce((e,o)=>(e[o>0?"deposit":"withdrawal"]+=o,e),{deposit:0,withdrawal:0});console.log(H,K);const Y=function(e){let o=e=>e[0].toUpperCase()+e.slice(1),n=["a","an","the","but","and","or","on","in","with"],l=e.toLowerCase().split(" ").map(e=>n.includes(e)?e:o(e)).join(" ");return o(l)};console.log(Y("this is a nice title")),console.log(Y("this is a LONG title but not too long")),console.log(Y("and here is another title with an EXAMPLE"));const B=[{weight:22,curFood:250,owners:["Alice","Bob"]},{weight:8,curFood:200,owners:["Matilda"]},{weight:13,curFood:275,owners:["Sarah","John"]},{weight:32,curFood:340,owners:["Michael"]}];B.forEach(e=>e.recFood=Math.floor(e.weight**.75*28)),console.log(B[2].owners),console.log(B);const X=B.find(e=>e.owners.includes("Sarah"));console.log(X),console.log(`Sarah's dog is eating too ${X.curFood>X.recFood?"much":"little"}`);const G=B.filter(e=>e.curFood>e.recFood).flatMap(e=>e.owners),Q=B.filter(e=>e.curFood<e.recFood).flatMap(e=>e.owners);console.log(Q),console.log(G),console.log(`${G.join(" and ")}'s dogs eat too much`),console.log(`${Q.join(" and ")}'s dogs eat too little`),console.log(B.some(e=>e.curFood===e.recFood));const V=e=>e.curFood>.9*e.recFood&&e.curFood<1.1*e.recFood;console.log(B.some(V)),console.log(B.filter(V)),console.log(B.slice().sort((e,o)=>e.curFood-o.curFood));let ee=new Boolean(!0);console.log(typeof ee),console.log(ee);let eo=!0;console.log(!0),console.log(!1),console.log(!0);let en=new Number(10);console.log(en),console.log(.1+.2);let el=10;console.log(typeof 10..valueOf()),console.log(el.toString(2)),console.log(el.toString(8)),console.log(el.toString(16)),console.log(Number.parseInt("e23")),console.log(Number.parseInt("30rem")),console.log((el=10.0065).toFixed(3)),console.log(.2+.1),console.log(el.toExponential(10)),console.log("number"),console.log(typeof en),console.log(!1),console.log(en instanceof Number),console.log(Number.isInteger(10)),console.log(Number.isSafeInteger(0x72326c3982d7a)),console.log(Number.parseInt("0XFF",16)),console.log(Number.parseInt("0101010111F",2)),console.log(Number.isNaN(NaN)),console.log(Number.isNaN("werwe")),console.log(Number.isNaN(NaN)),console.log(Number.isNaN(0/0)),console.log(Number.isFinite(232)),console.log(Number.isFinite("323")),console.log(Math.PI),console.log(Math.ceil(23.2)),console.log(Math.floor(34.2)),console.log(Math.round(34.6)),console.log(Math.fround(34.2)),console.log(Math.E),console.log(Math.LN10),console.log(Math.LN2),console.log(Math.floor(-45.8)),console.log(Math.trunc(-45.3)),console.log(Math.floor("45.3")),console.log("2.70"),console.log("string"),console.log("number"),console.log(Math.floor(9*Math.random()+2)),console.log(434),console.log(12),console.log(Math.PI*Number.parseFloat("10px")**2);const et=(e,o)=>Math.floor(Math.random()*(o-e+1)+e);console.log(et(0,10)),console.log(et(2,23)),setTimeout(function(){console.log("We are now boarding all 27 passengers"),console.log("There are 3 groups, each with 9 passengers")},4e3),console.log("Will start boarding in 4 seconds"),function(){console.log(`hello: ${arguments[0]}, ${arguments[1]}`)}(12,"hello");const ec=["olives","spinach","numeric"],es=setTimeout((e,o,n)=>console.log(`Here is your pizza \u{1F922} with ${e}, and ${o}, and ${n}`),4e3,...ec);console.log("waiting ....."),ec.includes("spinacha")&&clearTimeout(es),setInterval(()=>{new Intl.DateTimeFormat("zh-CN",{hour:"numeric",minute:"numeric",second:"numeric"}).format(new Date)},2e3);const er=Date.now();let ea=/mom(and dad(and baby)?)?/gi.exec("mom and dad and baby");console.log(ea.index),console.log(ea.input),console.log(Date.now()-er);
//# sourceMappingURL=index.0f020267.js.map
