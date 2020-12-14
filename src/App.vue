<template>
    <ul>
      <li>  <router-link to="/"> Додому </router-link></li>
       <li> <router-link to="/about"> Про автора </router-link></li>
       <li> <router-link to="/comput">Що таке computed </router-link></li>
   </ul>
    <router-view></router-view>
    
</template>

<script>
export default {
    name:"App",
    data(){
        return{

        }
    }
}
</script>
<style scoped>
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 200px;
    background-color: #f1f1f1;
}

li  {
    display: block;
    color: #000;
    padding: 8px 16px;
    text-decoration: none;
}


li :hover {
    background-color: #555;
    color: white;
}
</style>