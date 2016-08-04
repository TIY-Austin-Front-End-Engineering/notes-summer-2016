import Backbone from 'backbone';
import $ from 'jquery';
import settings from '../settings';

export default Backbone.Model.extend({
  getLocation: function() {
    var ourGeolocationPromise = new Promise(function(resolve, reject) {
      if ("geolocation" in navigator) {
        window.navigator.geolocation.getCurrentPosition(function(position) {
          resolve(position);
        });
      } else {
        reject('this browser doesn\'t support geolocation');
      }
    });
    return ourGeolocationPromise;
  },
  login: function(data) {
    var promise = new Promise((resolve, reject) => {
      // i need to do stuff, and call resolve/reject based on what i did
      $.ajax({
        type: 'POST',
        url: `https://baas.kinvey.com/user/${settings.appKey}/login`,
        data: JSON.stringify(data),
        contentType: 'application/json',
        // success: (s) => {
        //   this.set({
        //     username: s.username, authtoken: s._kmd.authtoken, _id: s._id
        //   });
        // },
        error: function(e) {console.log(e);}
      })
      .then((s) => {
        this.set({
          username: s.username, authtoken: s._kmd.authtoken, _id: s._id
        });
        resolve('passed to the then');
      }).fail((e) => {
        console.error('your login failed: ', e);
        reject('this didn\'t work');
      })
    });
    return promise;
  },
  signup: function(data) {
    // in a better world i would actually verify their passwords match:
    // this.verifyPassword(data);
    $.ajax({
      type: 'POST',
      url: `https://baas.kinvey.com/user/${settings.appKey}`,
      data: JSON.stringify({username: data.username, password: data.password}),
      contentType: 'application/json',
      success: (s) => {
        this.set({
          username: s.username, authtoken: s._kmd.authtoken, _id: s._id
        });
      },
      error: function(e) {console.log(e);}
    })
  }
})
