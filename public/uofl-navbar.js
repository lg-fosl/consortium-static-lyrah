$(document).ready(function() {
  /*** Detect Current Page and Update Nav Item ***/
  var path = window.location.href
  var loc = path.substring(path.lastIndexOf('/') + 1)

  if (loc == '') {
    $('.jsNavLinks')
      .removeClass('disabled')
      .removeClass('active-border-bottom')
    $('.jsHomeLink').addClass('disabled')
    $('.jsHomeLinkDesktop').addClass('active-border-bottom')
  } else if (loc == 'about-people#lead-partners') {
    $('.jsNavLinks')
      .removeClass('disabled')
      .removeClass('active-border-bottom')
    $('.jsLeadLink').addClass('disabled')
    $('.jsAboutUsLinkDesktop').addClass('active-border-bottom')
  } else if (loc == 'about-people#faculty-researchers') {
    $('.jsNavLinks')
      .removeClass('disabled')
      .removeClass('active-border-bottom')
    $('.jsFacultyLink').addClass('disabled')
    $('.jsAboutUsLinkDesktop').addClass('active-border-bottom')
  } else if (loc == 'about-people#student-researchers') {
    $('.jsNavLinks')
      .removeClass('disabled')
      .removeClass('active-border-bottom')
    $('.jsStudentsLink').addClass('disabled')
    $('.jsAboutUsLinkDesktop').addClass('active-border-bottom')
  } else if (loc == 'about-people#community-partners') {
    $('.jsNavLinks')
      .removeClass('disabled')
      .removeClass('active-border-bottom')
    $('.jsCommunityLink').addClass('disabled')
    $('.jsAboutUsLinkDesktop').addClass('active-border-bottom')
  } else if (loc == 'about-purpose') {
    $('.jsNavLinks')
      .removeClass('disabled')
      .removeClass('active-border-bottom')
    $('.jsPurposeLink').addClass('disabled')
    $('.jsAboutUsLinkDesktop').addClass('active-border-bottom')
  } else if (loc == 'our-people') {
    $('.jsNavLinks')
      .removeClass('disabled')
      .removeClass('active-border-bottom')
    $('.jsPeopleLink').addClass('disabled')
    $('.jsAboutUsLinkDesktop').addClass('active-border-bottom')
  } else if (loc == 'framing-our-work') {
    $('.jsNavLinks')
      .removeClass('disabled')
      .removeClass('active-border-bottom')
    $('.jsFramingLink').addClass('disabled')
    $('.jsAboutUsLinkDesktop').addClass('active-border-bottom')
  } else if (loc == 'what-we-do') {
    $('.jsNavLinks')
      .removeClass('disabled')
      .removeClass('active-border-bottom')
    $('.jsWWDLink').addClass('disabled')
    $('.jsAboutUsLinkDesktop').addClass('active-border-bottom')
  } else if (loc == 'our-research') {
    $('.jsNavLinks')
      .removeClass('disabled')
      .removeClass('active-border-bottom')
    $('.jsOurResearchLink').addClass('disabled')
    $('.jsOurResearchLinkDesktop').addClass('active-border-bottom')
  } else if (loc == 'research-impact') {
    $('.jsNavLinks')
      .removeClass('disabled')
      .removeClass('active-border-bottom')
    $('.jsResearchImpactLink').addClass('disabled')
    $('.jsOurResearchLinkDesktop').addClass('active-border-bottom')
  } else if (loc == 'match-with-team-form') {
    $('.jsNavLinks')
      .removeClass('disabled')
      .removeClass('active-border-bottom')
    $('.jsConnectResearchersLink').addClass('disabled')
    $('.jsOurResearchLinkDesktop').addClass('active-border-bottom')
  } else if (loc == 'spotlight-page') {
    $('.jsNavLinks')
      .removeClass('disabled')
      .removeClass('active-border-bottom')
    $('.jsSpotlightsLink').addClass('disabled')
    $('.jsOurResearchLinkDesktop').addClass('active-border-bottom')
  } else if (loc == 'news-and-events') {
    $('.jsNavLinks')
      .removeClass('disabled')
      .removeClass('active-border-bottom')
    $('.jsNewsEventsLink').addClass('disabled')
    $('.jsNewsEventsLinkDesktop').addClass('active-border-bottom')
  }

  /* Detect Search Input "Enter" */
  $('#jsNavSearchInput').keypress(() => {
    $(location).attr('href', '/search-results')
  })

  /* add blur to background when menu opens */
  $('#jsSideNav .accordion').on('shown.bs.collapse', function() {
    $('.accordion .collapse')
      .siblings()
      .find('button')
      .removeClass('background-image-minus')
      .removeClass('background-image-plus')
      .addClass('background-image-plus')

    $('.accordion .show')
      .siblings()
      .find('button')
      .removeClass('background-image-minus')
      .removeClass('background-image-plus')
      .addClass('background-image-minus')
  })

  $('#jsSideNav .accordion').on('hidden.bs.collapse', function() {
    $('.accordion .collapse')
      .siblings()
      .find('button')
      .removeClass('background-image-minus')
      .removeClass('background-image-plus')
      .addClass('background-image-plus')

    $('.accordion .show')
      .siblings()
      .find('button')
      .removeClass('background-image-minus')
      .removeClass('background-image-plus')
      .addClass('background-image-minus')
  })

  $('#consortiumNavDropdown')
    .find('.dropdown')
    .on('show.bs.dropdown', function() {
      $('.js-blur').addClass('blur')
    })
  $('#consortiumNavDropdown')
    .find('.dropdown')
    .on('hide.bs.dropdown', function() {
      $('.js-blur').removeClass('blur')
    })
})

/* update nav items on about us page */
const makeCurrentActive = () => {
  let localLinks = $('.jsResearchersLink')

  for (let x = 0; x < localLinks.length; x++) {
    localLinks[x].classList.remove('disabled')
  }

  $(event.target).addClass('disabled')
}

/* MOBILE SIDEBAR SECTION */
const openNav = () => {
  let screenHeight = $(window).height()

  $('#jsSideNav').addClass('sidenavFixed')
  $('body')
    .addClass('device-height')
    .css('max-height', screenHeight)

  let elBlur = document.getElementsByClassName('side-blur')

  for (let x = 0; x < elBlur.length; x++) {
    elBlur[x].classList.add('blur')
  }
}

const closeNav = () => {
  $('#jsSideNav').removeClass('sidenavFixed')

  let elBlur = document.getElementsByClassName('side-blur')

  for (let x = 0; x < elBlur.length; x++) {
    elBlur[x].classList.remove('blur')
  }

  $('body')
    .removeClass('device-height')
    .css('max-height', '100%')
}
/* END MOBILE SIDEBAR SECTION */

// remove blur on about-people sections
function showSection() {
  let elBlur = document.getElementsByClassName('side-blur')
  for (let x = 0; x < elBlur.length; x++) {
    elBlur[x].classList.remove('blur')
  }
  closeNav()
  return true
}
