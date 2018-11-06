var home = Vue.component('home',{
  template:'#home'
});

var GameOfthrones= Vue.component('gifs',{
  template:'#gifs'
});

var router = new VueRouter({
  routes : [
    { path:'/', component: home },
    { path:'/gifs', component: GameOfthrones },
  ]
});

var app = new Vue({
  el:"#app",
  router,
});