import Vue from 'vue';
import VueRouter from 'vue-router';
import HelloWorld from "@/components/HelloWorld.vue";
import test from "@/components/test.vue";
import Home from "@/components/Home/Home.vue";

Vue.use(VueRouter);

const routes = [
    { path: '/test', component: test },
    { path: '/helloWorld', component: HelloWorld },
    { path: '/', component: Home },
];

const router = new VueRouter({routes,});

export default router;