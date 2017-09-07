

 (function(){

   $(function(){


     $('#ingredientTable').on("click", ".delete", function(e){

       const [recipeId] = window.location.pathname.match(/\d+?$/)
       let ingredientNumber = $(this).data("ingredientid");
       console.log(ingredientNumber);

       $.post(`http://localhost:1337/recipes/${recipeId}/ingredients/${ingredientNumber}`, response => {
         console.log(response)
       }
      )
     })


     $('#instructionTable').on("click", ".delete", function(e){

       const [recipeId] = window.location.pathname.match(/\d+?$/)
       let instructionNumber = $(this).data("instructionid");
       console.log(instructionNumber);

       $.post(`http://localhost:1337/recipes/${recipeId}/instructions/${instructionNumber}`, response => {
         console.log(response)
       }
      )
     })








   })

 })();
