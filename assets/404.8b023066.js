import{d as e,u as t,a as o,r as a,o as n,c as l,b as s,t as u,w as r,e as c}from"./app.136c4427.js";var m=e({name:"404",setup(){var e,a,n;const l=t(),s=o(),u=null!=(e=s.value.notFound)?e:["Not Found"];return{getMsg:()=>u[Math.floor(Math.random()*u.length)],homeLink:null!=(a=s.value.home)?a:l.value,homeText:null!=(n=s.value.backToHome)?n:"Back to home"}}});const h={class:"theme-container"},d={class:"theme-default-content"},i=s("h1",null,"404",-1);m.render=function(e,t,o,m,v,f){const k=a("RouterLink");return n(),l("div",h,[s("div",d,[i,s("blockquote",null,u(e.getMsg()),1),s(k,{to:e.homeLink},{default:r((()=>[c(u(e.homeText),1)])),_:1},8,["to"])])])};export default m;
