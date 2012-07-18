var eejs = require('ep_etherpad-lite/node/eejs/')

exports.eejsBlock_styles = function(hook_name, args, cb) {
  args.content = args.content + eejs.require('ep_timeslider/templates/styles.ejs')
  return cb()
}

exports.eejsBlock_editbarMenuRight = function(hook_name, args, cb) {
  args.content = eejs.require('ep_timeslider/templates/editbarMenuRight.ejs') + args.content
  return cb()
}

exports.eejsBlock_body = function(hook_name, args, cb) {
  args.content = args.content+ eejs.require('ep_timeslider/templates/timeslider.ejs')
  return cb()
}