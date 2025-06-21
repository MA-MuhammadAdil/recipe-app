
(async function() {
    const respon = await fetch("./recipe.json")
    const recipe = await respon.json()

    const inpElem = document.querySelector("#searchInput")
    const btnElem = document.querySelector("#searchBtn")
    const listElem = document.querySelector("#recipe-list")
    const detailsElem =  document.querySelector("#recipeDetailsContainer")

    function recipeDetail (recipe){
        console.log(recipe)
        detailsElem.innerHTML = `
            <h2 class="title">${recipe.title}</h2>
            <ul>${ recipe.ingredients.map(function(ingredients){
                return" <li> " +ingredients + "</li>"
            }).join("") }</ul>
            <h3>Instruction</h3>
            <div>${recipe.instructions}</div>
        `
    }


    function dispalysearcchREsults (results){
        listElem.innerHTML = "" ;
        results.forEach(function (recipe){

        const li = document.createElement("li"); 
         
        li.innerHTML =  recipe.title;
        listElem.appendChild(li)
        
        li.addEventListener("click",function(){
            recipeDetail(recipe)
        })

        });
    }

    function search(){
        const query  = inpElem.value.toLowerCase() ;
        const results = recipe.filter(function(recipe){
            return ( recipe.title.toLowerCase().includes(query) || 
            recipe.ingredients.join(" ").toLowerCase().includes(query))
        })
   dispalysearcchREsults(results)
    }
btnElem.addEventListener("click", search)

})() 