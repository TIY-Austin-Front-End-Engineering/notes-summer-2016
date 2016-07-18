var Unicorns = Backbone.Collection.extend({
  url: 'http://tiny-za-server.herokuapp.com/collections/unicorns'
});

var unicorns = new Unicorns();

unicorns.fetch({success: function(coll, response, xhr) {
  // console.log(data[3]);
  var newData = data.filter(function(curr, i, arr) {
    return curr._id !== '578483612661120300aacdef';
  });
  console.log(data, newData);

}});

console.log(unicorns);
