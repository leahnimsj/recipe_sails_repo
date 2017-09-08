

 (function(){

   $(function(){

     $('#updateIngredientForm').hide();
     $('#updateInstructionForm').hide();


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


     $('#ingredientTable').on("click", ".update", function(e){

       let recipeNumber = $(this).data("recipeid");
       let ingredientNumber = $(this).data("ingredientid");
       console.log(ingredientNumber);

       $('#updateIngredientForm').dialog({
          width: 400,
          // title: Update Restaurant Record
          buttons: {
          "Submit": function() {
            $( this ).dialog( "close" );

            let updateString = $("#updateIngredientForm").serialize();

            console.log(updateString);

            $.post(`http://localhost:1337/update/${recipeNumber}/ingredients/${ingredientNumber}`, updateString, response => {

              window.location.reload(true);

            })
          },
          Cancel: function() {
            $( this ).dialog( "close" );
          }
          }

        });



     })


     $('#instructionTable').on("click", ".update", function(e){

       let recipeNumber = $(this).data("recipeid");
       let instructionNumber = $(this).data("instructionid");
       console.log(instructionNumber);

       $('#updateInstructionForm').dialog({
          width: 400,
          // title: Update Restaurant Record
          buttons: {
          "Submit": function() {
            $( this ).dialog( "close" );

            let updateString = $("#updateInstructionForm").serialize();

            console.log(updateString);

            $.post(`http://localhost:1337/update/${recipeNumber}/instructions/${instructionNumber}`, updateString, response => {

              window.location.reload(true);

            })
          },
          Cancel: function() {
            $( this ).dialog( "close" );
          }
          }

        });



     })







   })

 })();
