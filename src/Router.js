import {createRouter, createWebHistory} from "vue-router";

import About from "./components/About";
import Books from "./components/Books.vue";
import comput from "./components/comput.vue";



const Router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path:"/",
            component: Books
        },
        {
            path:"/about",
            component: About
        },
        {
            path:"/comput",
            component: comput
        },
        
       
    ]
});

export default Router;