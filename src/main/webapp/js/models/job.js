define([
  'underscore',
  'backbone'
], function(_, Backbone) {
  var jobModel = Backbone.Model.extend({
    defaults: {
      score: 10
    },
    initialize: function(){
    }

  });
  return jobModel;

});