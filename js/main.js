/* ---- contact form ---- */
$('#contactForm').validator().on('submit', function (event) {
  if (event.isDefaultPrevented()) {
    formError()
    submitMSG(false, 'Did you fill in the form properly?')
  } else {
    event.preventDefault()
    submitForm()
  }
})

function submitForm () {
  var name = $('#name').val()
  var email = $('#email').val()
  var msg_subject = $('#msg_subject').val()
  var message = $('#message').val()

  $.ajax({
    type: 'POST',
    url: 'php/contact.php',
    data: 'name=' + name + '&email=' + email + '&msg_subject=' +
    msg_subject + '&message=' + message,
    success: function (text) {
      if (text == 'success') {
        formSuccess()
      } else {
        formError()
        submitMSG(false, text)
      }
    }
  })
}

function formSuccess () {
  $('#contactForm')[0].reset()
  submitMSG(true, 'Message Submitted!')
}

function formError () {
  $('#contactForm').removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
    $(this).removeClass()
  })
}

function submitMSG (valid, msg) {
  $('#msgSubmit').removeClass().addClass(valid ? 'h4 text-success' : 'h4 text-danger').text(msg)
}

/* ---- nav smooth scroll ---- */
$(document).ready(function () {
  $('.scroll-link').on('click', function (event) {
    event.preventDefault()
    scrollToID('#' + $(this).attr('data-id'), 750)
  })

  $('.scroll-top').on('click', function (event) {
    event.preventDefault()
    $('html, body').animate({ scrollTop: 0 }, 1200)
  })
})

/* ---- navbar offset ---- */
function scrollToID (id, speed) {
  var offSet = 69
  var targetOffset = $(id).offset().top - offSet

  $('html,body').animate({ scrollTop: targetOffset }, speed)
}

/* ---- close mobile nav on click ---- */
$(document).on('click', '.navbar-collapse.in', function (e) {
  if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
    $(this).collapse('hide')
  }
})

/* ---- rotater text ---- */
var current = 1
var height = jQuery('.ticker').height()
var numberDivs = jQuery('.ticker').children().length
var first = jQuery('.ticker :nth-child(1)')

setInterval(function () {
  var number = current * -height

  first.css('margin-top', number + 'px')

  if (current === numberDivs) {
    first.css('margin-top', '0px')
    current = 1
  } else {
    current++
  }
}, 2500)
