
// var passwordMeter = function(password) {
//   if(password.length < 6){
//     return 'worst'
//   } else {
//     return 'good'
//   }
// }

export default function passwordMeter(password) {
  if(password.length < 6){
    return 'worst'
  } else {
    return 'good'
  }
}

// module.exports = passwordMeter
