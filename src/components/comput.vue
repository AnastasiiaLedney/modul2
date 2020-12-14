<template>
<div class="groupVue"  text-align: center>
 <h1>Що таке Computed?</h1>
 <h3>Область його застосування  це красиве відображення даних для користувача. Це може бути висновок дати в докладному форматі або форматування тексту, вибір одного з варіанту за умовою.</h3>
 <h3>Якщо коротко, обчислювані властивості(computed) ...</h3>
 <ul class="border">
     <li><p>повинні залежати від data, props або інших обчислюваних властивостей;</p></li>
     <li><p>збирають залежності і знають напевно, при зміні яких даних необхідний перерахунок;</p></li>
     <li><p>є ледачими, тобто розраховуються тільки при зверненні до них, а не при кожній зміні залежних даних;</p></li>
     <li><p>обов'язково повинні повертати нове значення;</p></li>
     <li><p>не можуть мати параметрів (доступ до усього лише через this)</p></li>
     <li><p>допускають використання в логіці обчислень методів, оголошених в компоненті, і різні бібліотеки (наприклад, lodash, underscore). Асинхронність не допускається, але в статті буде описано кілька варіантів вирішення цієї проблеми.</p></li>
 </ul>
 </div>


</template>

<script>
export default
{
  name:"App",
  data()
  { return{
    group:{
      StudentName:"Ледней Анастасія Михайлівна",
      Speciality:"Прикладна математика",
      
      Variant:2
    }
  }
  }

}
</script>

<style scoped>

.groupVue{
position: absolute;
border-radius: 10px 60px 30px;
width: 900px;
height: 600px;
position: relative;

text-align: center;
 margin: auto;

}
h1{
 font-family: "Courier New";
     font-size: 50px;
     color:  #86760a;
}
h3
{
 font-family: "Courier New";
     font-size: 20px;
     color:  #7a0975;
}
p{
  font-family: "Courier New";
     font-size: 20px;
    color: #09508a;
}
.border {
list-style: none;
padding: 0;
}
.border li {
font-family: "Trebuchet MS", "Lucida Sans";

margin-bottom: 10px;
border-radius: 5px;


font-size: 20px;
letter-spacing: 0.1px;
transition: 0.3s all linear;
}

 
</style>