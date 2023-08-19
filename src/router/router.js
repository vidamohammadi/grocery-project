import Vue from 'vue';
import VueRouter from 'vue-router';
import HelloWorld from "@/components/HelloWorld.vue";
import test from "@/components/test.vue";

Vue.use(VueRouter);

const routes = [
    { path: '/test', component: test },
    { path: '/helloWorld', component: HelloWorld },];

const router = new VueRouter({routes,});

export default router;