$(document).ready(function() {
  setTimeout(function() {
    $('#main').css('opacity', 1)
    // console.log('changed opacity of main to 1')
  }, 1250)
})

function samePageLinkDisable(e) {
  $('.jsNavLinks')
    .removeClass('disabled')
    .removeClass('active-border-bottom')
  // console.log(e.target.parentElement.parentElement.parentElement.parentElement)
  $(e.target.parentElement.parentElement.parentElement.parentElement).addClass(
    'active-border-bottom',
  )
  $(e.target).addClass('disabled')
}

$('.jsLeadLink, .jsFacultyLink, .jsStudentsLink, .jsCommunityLink').on(
  'click',
  samePageLinkDisable,
)

$(window).on('load', function() {
  let loc = document.URL.split('/')[3]

  if (loc === 'about-people#community-partners') {
    setTimeout(function() {
      $('html, body').animate(
        {
          scrollTop: $('#community-partners')
            .first()
            .offset().top,
        },
        500,
      )
    }, 1500)
  } else if (loc === 'about-people#faculty-researchers') {
    setTimeout(function() {
      $('html, body').animate(
        {
          scrollTop: $('#faculty-researchers')
            .first()
            .offset().top,
        },
        500,
      )
    }, 1500)
  } else if (loc === 'about-people#student-researchers') {
    setTimeout(function() {
      $('html, body').animate(
        {
          scrollTop: $('#student-researchers')
            .first()
            .offset().top,
        },
        500,
      )
    }, 1500)
  }
})
