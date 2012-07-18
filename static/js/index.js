exports.postAceInit = function(hook_name, args, cb) {
  var timeslider = require('./timeslider.js')
  
  $('#timesliderlink').click(function() {
    $('#innerdocbody').attr('id', 'timeslider-content')
    $('body').addClass('timeslider')
    timeslider.init()
  })
}