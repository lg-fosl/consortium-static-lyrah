// function called by the select tag to hide the label when an option is seleceted.
function changeTextColor(id) {
  var el = document.getElementById(id)
  if (el.value !== '') {
    $('.custom-select').css('color', '#' + 202020)
  } else {
    $('.custom-select').css('color', '#' + 999999)
  }
}

$('#current-role').on('change', () => changeTextColor('current-role'))

// Called on form's `onsubmit`
function tosubmit() {
  // Getting the value of text input
  var fname = document.getElementById('first_name').value
  var lname = document.getElementById('last_name').value
  var email = document.getElementById('email').value
  var current_role = document.getElementById('current-role').value
  var topic_interests = document.getElementById('topic_interests').value
  var heard_about_consortium = document.getElementById('heard-about-consortium')
    .value
  var make_contact_available
  if (document.getElementById('make-contact-available').value) {
    make_contact_available = 'Yes'
  } else {
    make_contact_available = 'No'
  }
  // var attach_file = document.getElementById('file-upload').value;

  // Storing the value above into localStorage
  localStorage.setItem('fname', fname)
  localStorage.setItem('lname', lname)
  localStorage.setItem('email', email)
  localStorage.setItem('current_role', current_role)
  localStorage.setItem('topic_interests', topic_interests)
  localStorage.setItem('heard_about_consortium', heard_about_consortium)
  localStorage.setItem('make_contact_available', make_contact_available)
  // localStorage.setItem("attach_file", attach_file);

  return true
}

// function to route use to their mail app
function init() {
  // Retrieving the text input's value which was stored into localStorage
  var first_name = localStorage.getItem('fname')
  var last_name = localStorage.getItem('lname')
  var email = localStorage.getItem('email')
  var current_role = localStorage.getItem('current_role')
  var topic_interests = localStorage.getItem('topic_interests')
  var heard_about_consortium = localStorage.getItem('heard_about_consortium')
  var make_contact_available = localStorage.getItem('make_contact_available')
  // var attach_file = localStorage.getItem('attach_file');

  // getting form inputs
  // document.getElementById("first_name").innerHTML = first_name;
  // document.getElementById("last_name").innerHTML = last_name;
  // document.getElementById("email").innerHTML = email;

  // open mail application
  var subject = 'Cooperative Consortium website contact request'
  var message =
    ' First Name \n' +
    first_name +
    '\n' +
    'Last Name' +
    '\n' +
    last_name +
    '\n' +
    'Email' +
    '\n' +
    email +
    'Current Role' +
    '\n' +
    current_role +
    '\n' +
    'Topic Interests and/or Needs' +
    '\n' +
    topic_interests +
    '\n' +
    'How did you hear about the Consortium?' +
    '\n' +
    heard_about_consortium +
    '\n' +
    'I would like for my contact information to be available on the website' +
    '\n' +
    make_contact_available
  var mailToLink =
    'mailto:transdisciplinary@louisville.edu?subject=' +
    subject +
    '&body=' +
    encodeURIComponent(message)

  var delayInMilliseconds = 1500

  setTimeout(function() {
    window.location.href = mailToLink
  }, delayInMilliseconds)
}
