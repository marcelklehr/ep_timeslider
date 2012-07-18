exports.postAceInit = function(hook_name, args, cb) {
  var timeslider = require('./timeslider.js')
  
  $('#timesliderlink').click(function() {
    $('#editorloadingbox').show()
    timeslider.init(function() {
      $('#editorloadingbox').hide()
      $('body').addClass('timeslider')
    })
  })
}