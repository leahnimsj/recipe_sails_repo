/**
 * StudentController
 *
 * @description :: Server-side logic for managing students
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var Client = require('node-rest-client').Client;
var client = new Client();
var endpoint = "https://morning-sierra-47011.herokuapp.com/recipes"

module.exports = {

  /**
   * `StudentController.create()`
   */
  create: function (req, res) {

        if(req.method != "POST"){
          return res.view('create');
        }

        var args = {
            data: req.body,
            headers: { "Content-Type": "application/json" }
        };

        client.post(endpoint, args, function (data, response) {
            // return res.view('create', {success: { message: "Record added successfully"}});
            if(response.statusCode != "200"){
                req.addFlash("error", data.message.substring(data.message.indexOf("•")));
                return res.redirect('/create');
            }

            req.addFlash("success", "Record created successfully");
            return res.redirect(`recipes/${data.id}/ingredients/create`);

        })

  },



  ingredients: function (req, res) {

    if(req.method != "POST") {
      return res.view('ingredients', {id: req.params.id});
    }

    var args = {
        data: req.body,
        headers: { "Content-Type": "application/json" }
    };

    console.log(args);

    client.post(endpoint + "/" + req.params.id + "/ingredients", args, function (data, response) {
        // return res.view('create', {success: { message: "Record added successfully"}});
        if(response.statusCode != "200"){
            req.addFlash("error", data.message.substring(data.message.indexOf("•")));
            return res.redirect(`recipes/${data.id}/ingredients/create`);
        }

        req.addFlash("success", "Record created successfully");
        return res.view('ingredients', {id: req.params.id});

    })

  },

  instructions: function (req, res) {

    if(req.method != "POST") {
      return res.view('instructions', {id: req.params.id});
    }

    var args = {
        data: req.body,
        headers: { "Content-Type": "application/json" }
    };

    client.post(endpoint + "/" + req.params.id + "/instructions", args, function (data, response) {
        // return res.view('create', {success: { message: "Record added successfully"}});
        if(response.statusCode != "200"){
            req.addFlash("error", data.message.substring(data.message.indexOf("•")));
            return res.redirect(`recipes/${data.id}/instructions/create`);
        }

        req.addFlash("success", "Record created successfully");
        return res.view('instructions', {id: req.params.id});

    })

  },





  /**
   * `StudentController.read()`
   */
  read: function (req, res) {

    if(req.method != "POST"){

      client.get(endpoint, function (data, response) {
          return res.view('read', {recipes: data});
      }).on('error', function (err) {
          return res.view('read', {error: { message: "There was an error getting the recipes"}});
      });

    }else {

      var searchWord = req.body.searchTerm;

      console.log(searchWord);

      console.log(`${endpoint}?partOfName=${searchWord}`);
      client.get(`${endpoint}?partOfName=${searchWord}`, function (data, response) {
        return res.view('read', {recipes: data});
      })
      }
  },


   /**
   * `StudentController.update()`
   */
  updateingredient: function (req, res) {

      var args = {
          data: req.body,
          headers: { "Content-Type": "application/json" }
      };

      console.log(args);

      console.log(`${endpoint}/${req.params.recipeid}/ingredients/${req.params.ingredid}`);
      client.put(`${endpoint}/${req.params.recipeid}/ingredients/${req.params.ingredid}`, args, function (data, response) {

        if(response.statusCode != "200"){
            req.addFlash("error", data.message);
            return res.redirect(`/recipes/${req.params.recipeid}`);
        }

        req.addFlash("success", "Record updated successfully");
        return res.redirect(`/recipes/${req.params.recipeid}`);

      })

    },

    updateinstruction: function (req, res) {

        var args = {
            data: req.body,
            headers: { "Content-Type": "application/json" }
        };

        console.log(args);

        console.log(`${endpoint}/${req.params.recipeid}/instructions/${req.params.instructid}`);
        client.put(`${endpoint}/${req.params.recipeid}/instructions/${req.params.instructid}`, args, function (data, response) {

          if(response.statusCode != "200"){
              req.addFlash("error", data.message);
              return res.redirect(`/recipes/${req.params.recipeid}`);
          }

          req.addFlash("success", "Record updated successfully");
          return res.redirect(`/recipes/${req.params.recipeid}`);

        })

      },


      update: function (req, res) {

      if(req.method != "POST"){

        client.get(endpoint, function (data, response) {
          return res.view('update', {recipes: data});
        }).on('error', function (err) {
            return res.view('update', {error: { message: "There was an error getting the recipes"}});
        });

      }else{

        var args = {
            data: req.body,
            headers: { "Content-Type": "application/json" }
        };

        client.put(endpoint + "/" + req.body.id, args, function (data, response) {

          if(response.statusCode != "200"){
              req.addFlash("error", data.message);
              return res.redirect('/update');
          }

          req.addFlash("success", "Record updated successfully");
          return res.redirect('/update');

        })

      }
    },







  recipe: function (req, res) {

    client.get(endpoint + "/" + req.params.id, function (data, response) {
        return res.view('recipe', {recipe: data});

    }).on('error', function (err) {
        return res.view('recipe', {error: { message: "There was an error getting the recipe"}});
    });


  },

  deleteingredient: function (req, res) {

    client.delete(`${endpoint}/${req.params.recipeid}/ingredients/${req.params.ingredid}`, function (data, response) {
        return res.redirect(`/recipes/${req.params.recipeid}`);
    }).on('error', function (err) {
        return res.send({error: { message: "There was an error getting the recipe"}});
    });


  },

  deleteinstruction: function (req, res) {

    client.delete(`${endpoint}/${req.params.recipeid}/instructions/${req.params.instructid}`, function (data, response) {
        return res.redirect(`/recipes/${req.params.recipeid}`);
    }).on('error', function (err) {
        return res.send({error: { message: "There was an error getting the recipe"}});
    });


  },


  /**
   * `StudentController.delete()`
   */
  delete: function (req, res) {

    if(req.method != "POST"){

      client.get(endpoint, function (data, response) {
        return res.view('delete', {recipes: data});
      }).on('error', function (err) {
          return res.view('delete', {error: { message: "There was an error getting the recipes"}});
      });

    }else{

      sails.log(endpoint + "/" + req.body.id);
      client.delete(endpoint + "/" + req.body.id, function (data, response) {


        if(response.statusCode != "200"){
            req.addFlash("error", data.message);
            return res.redirect('/delete');
        }

        req.addFlash("success", "Record deleted successfully");
        return res.redirect('/delete');

      })
    }

  }

};
