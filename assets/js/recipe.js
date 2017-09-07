

 (function(){

   $(function(){


     $('#ingredientTable').on("click", ".delete", function(e){

       let recipeNumber = $(this).data("recipeid");
       let ingredientNumber = $(this).data("ingredientid");
       console.log(ingredientNumber);


       $.post(`http://localhost:1337/recipes/${recipeNumber}/ingredients/${ingredientNumber}`, response => {

         window.location.reload(true)


       }
      )
     })


     $('#instructionTable').on("click", ".delete", function(e){

       let recipeNumber = $(this).data("recipeid");
       let instructionNumber = $(this).data("instructionid");
       console.log(instructionNumber);

       $.post(`http://localhost:1337/recipes/${recipeNumber}/instructions/${instructionNumber}`, response => {

         window.location.reload(true)
       }
      )
     })








   })

 })();
