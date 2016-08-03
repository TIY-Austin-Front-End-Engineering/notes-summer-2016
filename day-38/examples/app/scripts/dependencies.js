import _ from 'underscore';

const getDependencies = function(deps) {
  var keys = Object.keys(deps.dependencies)
  var modifiedKeys = keys.map(function(key, i, arr) {
    if (deps.dependencies[key].dependencies) {
      // do all this over again.
      var children = getDependencies(deps.dependencies[key]);
      return [key + '@' + deps.dependencies[key].version, children];
    } else {
      return key + '@' + deps.dependencies[key].version;
    }
  })
  //out here children is undefined so we cannot use it
  // console.log(children);
  return _.flatten(modifiedKeys);
}

export default getDependencies
// => [ 'inflection@1.2.6', 'optimist@0.3.7', 'wordwrap@0.0.2' ]
