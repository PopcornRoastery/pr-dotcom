// (function ($, firebase) {
//     'use strict';

//     $('#contactForm').submit(function (e) {
//         e.preventDefault();

//         var db = firebase.database();
//         var contact = db.ref('contacts').push();
//         contact.set({
//             email: $('#email').val(),
//             name: $('#name').val(),
//             message: $('#message').val()
//         }, onSetComplete);

//         function onSetComplete() {
//             document.location.href = '/contact-us/thank-you/';
//         }
//     });
// })(jQuery, firebase);