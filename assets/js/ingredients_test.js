(function(){


$(function () {


$('#addIngredientButton').click(function() {
  alert("this is working");
  $('#addIngredientForm').append(`
    <div class="individualIngredient">
      <div class="form-group">
        <label for="ingredient_name" class="col-sm-2 control-label">Ingredient Name</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" class="ingredient_name" name="name" placeholder="Cheese" required>
        </div>
      </div>
      <div class="form-group">
        <label for="ingredient_measurement" class="col-sm-2 control-label">Ingredient Measurement</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" class="ingredient_measurement" name="unit"  placeholder="cup(s)" required>
        </div>
      </div>
      <div class="form-group">
        <label for="ingredient_quantity" class="col-sm-2 control-label">Ingredient Quantity</label>
        <div class="col-sm-10">
          <input type="number" class="form-control" class="ingredient_quantity" name="quantity" placeholder="1" required>
        </div>
      </div>
    </div>

    `)

})

let ingredientsJSON = [];

$('#submitIngredients').click(function(){


  $('.individualIngredient').each(function(){
    ingredientsJSON.push({
      name: $('.ingredient_name').val(),
      unit: $('.ingredient_measurement').val(),
      quantity: $('.ingredient_quantity').val()
    })

  })

console.log(ingredientsJSON);



})


})




})()
