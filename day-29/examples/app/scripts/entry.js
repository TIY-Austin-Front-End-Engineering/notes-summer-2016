import Backbone from 'backbone';
import $ from 'jquery';
import router from './router';

$(document).ajaxSend(function(evt, xhr, jquerySettings) {
  xhr.setRequestHeader('Authorization', 'Kinvey b5ac075b-ad6a-44e4-ac02-7b515a8c3b77.v9hEC6uNFBkNot5Y0BKzDiRPxN2ieyr7V8gL/DrPsEY=');
});

Backbone.history.start();
