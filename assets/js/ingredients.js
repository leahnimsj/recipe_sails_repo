(function(){


$(function () {





$('#addIngredientButton').click(function() {
  alert("this is working");
  $('#addIngredientForm').append(`

    <div class="form-group">
      <label for="ingredient_name" class="col-sm-2 control-label">Ingredient Name</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" id="ingredient_name" name="name" placeholder="Cheese" required>
      </div>
    </div>
    <div class="form-group">
      <label for="ingredient_measurement" class="col-sm-2 control-label">Ingredient Measurement</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" id="ingredient_measurement" name="unit"  placeholder="cup(s)" required>
      </div>
    </div>
    <div class="form-group">
      <label for="ingredient_quantity" class="col-sm-2 control-label">Ingredient Quantity</label>
      <div class="col-sm-10">
        <input type="number" class="form-control" id="ingredient_quantity" name="quantity" placeholder="1" required>
      </div>
    </div

    `)




})


})
})()
