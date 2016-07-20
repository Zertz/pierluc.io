/* ---- contact form ---- */
$('#contactForm').validator().on('submit', function (event) {
  if (event.isDefaultPrevented()) {
    formError()
    submitMSG(false, 'Assurez-vous de remplir tous les champs.')
  } else {
    event.preventDefault()
    submitForm()
  }
})

function submitForm () {
  var name = $('#name').val()
  var email = $('#email').val()
  var message = $('#message').val()

  $.ajax({
    url: 'https://formspree.io/info@pierluc.io', 
    method: 'POST',
    data: {
      name: name,
      email: email,
      message: message
    },
    dataType: 'json',
    success: function (res) {
      if (res.success === 'email sent') {
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
  submitMSG(true, 'Merci, votre message a été envoyé!')
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
    var element = $('#' + $(this).attr('data-id'))

    if (element.length) {
      event.preventDefault()
      scrollToID(element, 750)
    }
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

particlesJS('particles-js', {
	'particles': {
		'number': {
			'value': 80,
			'density': {
				'enable': true,
				'value_area': 800
			}
		},
		'color': {
			'value': '#ffffff'
		},
		'shape': {
			'type': 'circle',
			'stroke': {
				'width': 0,
				'color': '#000000'
			},
			'polygon': {
				'nb_sides': 5
			}
		},
		'opacity': {
			'value': 0.5,
			'random': false,
			'anim': {
				'enable': false,
				'speed': 1,
				'opacity_min': 0.1,
				'sync': false
			}
		},
		'size': {
			'value': 3,
			'random': true,
			'anim': {
				'enable': false,
				'speed': 40,
				'size_min': 0.1,
				'sync': false
			}
		},
		'line_linked': {
			'enable': true,
			'distance': 150,
			'color': '#ffffff',
			'opacity': 0.4,
			'width': 1
		},
		'move': {
			'enable': true,
			'speed': 6,
			'direction': 'none',
			'random': false,
			'straight': false,
			'out_mode': 'out',
			'bounce': false,
			'attract': {
				'enable': false,
				'rotateX': 600,
				'rotateY': 1200
			}
		}
	},
	'interactivity': {
		'events': {
			'onhover': {
				'enable': false
			},
			'onclick': {
				'enable': false
			},
			'resize': false
		}
	},
	'retina_detect': true
})
