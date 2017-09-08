/**
 * Use DataTables to enhance the functionality of the table on this page.
 *
 * ** NOTE ** All extentsions are availabile in your code already.
 *            You only need to include the javascript and css listed below
 *
 * Here's what this you will need to do:
 *
 * 1. Inlclude the following DataTables css in layout.ejs
 *    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/v/bs/dt-1.10.12/b-1.2.2/b-print-1.2.2/cr-1.3.2/datatables.min.css"/>
 *
 * 2. Include the following DataTables JavaScript in layout.ejs
 *    <script type="text/javascript" src="https://cdn.datatables.net/v/bs/jszip-2.5.0/pdfmake-0.1.18/dt-1.10.12/b-1.2.2/b-html5-1.2.2/b-print-1.2.2/cr-1.3.2/datatables.min.js"></script>
 *
 * 3. Using the DataTables plugin render the table on the page as a DataTable
 *
 * 4. Use the buttons extention to enable the copy, csv, excel, pdf, and print
 *
 * 5. Use the colReorder Plugin to add the ability to reorder columns
 *
 * 6. The table should be able to scroll horizontal - this is not mandatory(leah note)
 *
 * 7. Use any other features you find interesting
 *
 * Here's the documentation you need:
 * https://datatables.net/
 * https://datatables.net/extensions/buttons/examples/
 * https://datatables.net/extensions/colreorder/examples/
 * https://datatables.net/examples/basic_init/scroll_x.html
 *
 */

 (function(){

   $(function(){

      $('#recipesTable').DataTable({
        dom: 'Bfrtip',
        buttons: [
            // 'copy', 'csv', 'excel', 'pdf', 'print'
        ],
        colReorder: true,
        "scrollX": true
      });

    //code goes here

    $('#searchButton').click(function(event){

      event.preventDefault();

      let searchWord = $('#searchTerm').val();

      // need to work on this link tomorrow

      $.post('http://localhost:1337/', {searchTerm:searchWord}, response => {

        console.log(searchWord);
        console.log(response);


       $('#recipesBody').empty();
       
        response.forEach(function(recipe){

           $('#recipesBody').append(
             `
                <tr>
                  <td><a href="recipes/${recipe.id}">${recipe.title}</a></td>
                  <td>${recipe.description}</td>
                  <td>${recipe.minutes}</td>
                </tr>
            `



          )

         //   table += `
         //    <tbody>
         //       <tr>
         //         <td><a href="recipes/${recipe.id}">${recipe.title}</a></td>
         //         <td>${recipe.description}</td>
         //         <td>${recipe.minutes}</td>
         //       </tr>
         //    </tbody>
         //   `
         //  $('#recipesTable').html(table)

       })

      })

    })




   })

 })();
