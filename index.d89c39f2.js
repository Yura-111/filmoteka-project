!function(){var e=[{id:"913290",href:"https://api.themoviedb.org/3/trending/all/day?api_key=e862719ae3fd0863df1748cb2452c82b"},{id:"49046",href:"https://api.themoviedb.org/3/trending/all/day?api_key=e862719ae3fd0863df1748cb2452c82b"},{id:"541134",href:"https://api.themoviedb.org/3/trending/all/day?api_key=e862719ae3fd0863df1748cb2452c82b"},{id:"83659",href:"https://api.themoviedb.org/3/trending/all/day?api_key=e862719ae3fd0863df1748cb2452c82b"},{id:"203085",href:"https://api.themoviedb.org/3/trending/all/day?api_key=e862719ae3fd0863df1748cb2452c82b"},{id:"619730",href:"https://api.themoviedb.org/3/trending/all/day?api_key=e862719ae3fd0863df1748cb2452c82b"},{id:"436270",href:"https://api.themoviedb.org/3/trending/all/day?api_key=e862719ae3fd0863df1748cb2452c82b"},{id:"1032950",href:"https://api.themoviedb.org/3/trending/all/day?api_key=e862719ae3fd0863df1748cb2452c82b"},{id:"157061",href:"https://api.themoviedb.org/3/trending/all/day?api_key=e862719ae3fd0863df1748cb2452c82b"}],t={watchedBtn:document.querySelector(".watched"),queueBtn:document.querySelector(".queue"),adwBtn:document.querySelector(".adw"),atqBtn:document.querySelector(".atq"),gokBtn:document.querySelector(".gok")},o="films",n="queue",a=-1,c=-1,r=0;try{localStorage.getItem(o)||localStorage.setItem(o,JSON.stringify([])),localStorage.getItem(n)||localStorage.setItem(n,JSON.stringify([]))}catch(e){console.log(e)}function d(e,t,o,n){var a=[];try{a=JSON.parse(localStorage.getItem(t))}catch(e){console.log(e)}if(a.length){var c=a.findIndex((function(t){return t.id===e.id}));return c>-1?(console.log("Фільм знаходиться в збережених у памяті кнопка remove під номером - ",c),o.innerText="REMOVE TO "+n,c):(console.log("Фільма немає в збережених у памяті кнопка add to watch"),o.innerText="ADD TO "+n,-1)}return console.log("Список фільмів збережених у памяті пустий кнопка add to watch"),o.innerText="ADD TO "+n,0}function i(e,t,o,n){try{var a=JSON.parse(localStorage.getItem(t));a.push(e),localStorage.setItem(t,JSON.stringify(a)),console.log("фільм додано"),o.innerText="REMOVE TO "+n}catch(e){console.log(e)}}function l(e,t,o,n){try{var a=JSON.parse(localStorage.getItem(t));a.splice(e,1),localStorage.setItem(t,JSON.stringify(a)),console.log("фільм видалено"),o.innerText="ADD TO "+n}catch(e){console.log(e)}}function g(e){try{return JSON.parse(localStorage.getItem(e))}catch(e){console.log(e)}}function g(e){try{return JSON.parse(localStorage.getItem(e))}catch(e){console.log(e)}}t.adwBtn.addEventListener("click",(function(){var n=t.adwBtn.innerText;console.log(n),"ADD TO WATCHED"===n?i(e[r],o,t.adwBtn,"WATCHED"):l(a,o,t.adwBtn,"WATCHED")})),t.watchedBtn.addEventListener("click",(function(){console.log(g(o))})),t.queueBtn.addEventListener("click",(function(){console.log(g(n))})),t.atqBtn.addEventListener("click",(function(){var o=t.atqBtn.innerText;console.log(o),"ADD TO QUEUE"===o?i(e[r],n,t.atqBtn,"QUEUE"):l(c,n,t.atqBtn,"QUEUE")})),t.gokBtn.addEventListener("click",(function(){r=Math.floor(7*Math.random()),console.log("Рандомний фільм",e[r]),a=d(e[r],o,t.adwBtn,"WATCHED"),c=d(e[r],n,t.atqBtn,"QUEUE")}))}();
//# sourceMappingURL=index.d89c39f2.js.map