//split up carousel item to be size of division
// let carouselsplit = function(arr, division) {
//   var carousel_items = [];
//   var item_block = [];
//   counter = 0;
//   index = 0;
//   for (i = 0; i <= arr.length; i++) {
//     if (counter < division) {
//       item_block[counter] = arr[i]; //create 2D array representing carousel items and elements within
//       counter++;
//     } else {
//       counter = 0;
//       carousel_items[index] = item_block;
//       index++;
//       item_block = [];
//       item_block[counter] = arr[i];
//       counter++;
//     }
//   }
//   return carousel_items;
// };

// let carouselAdd = function(carousel_items) {
//   carousel_items.forEach(function(element, index) {
//     if (index === 0) {
//       $(".js-Carousel-Items-Holder").append(
//         $("<div></div>")
//           .addClass("carousel-item active")
//           .attr("id", "carouselItem" + index)
//       );

//       $("#carouselItem" + index).append(
//         $("<div></div>")
//           .addClass("card-deck")
//           .attr("id", "carddeck" + index)
//       );

//       element.forEach(function(element2) {
//         $("#carddeck" + index).append(element2);
//       });
//     } else {
//       $(".js-Carousel-Items-Holder").append(
//         $("<div></div>")
//           .addClass("carousel-item")
//           .attr("id", "carouselItem" + index)
//       );

//       $("#carouselItem" + index).append(
//         $("<div></div")
//           .addClass("card-deck")
//           .attr("id", "carddeck" + index)
//       );

//       element.forEach(function(element2) {
//         $("#carddeck" + index).append(element2);
//       });
//     }
//   });
// };

// let carouselCreate = () => {
//   $.ajax({
//     url: "spotlight-carousel-items.html", //carousel items are gonna be stored in a seperate html page for now
//     type: "GET",
//     success: function(data) {
//       var content = $(data).html();
//       var arr = $(content)
//         .toArray()
//         .filter(function(element, index) {
//           //trying to get each item into an array, but return carriage is counted after each, removing these from array
//           return index % 2 === 0;
//         });

//       carousel_items = [];
//       if ($(document).width() < 803) {
//         carousel_items = carouselsplit(arr, 6);
//       } else {
//         carousel_items = carouselsplit(arr, 5);
//       }

//       carouselAdd(carousel_items);
//     }
//   });
// };

// let carouselFlatten = function() {
//   var carousel_items = $(".carousel-item").detach();
//   var item_blocks = [];
//   for (i = 0; i < carousel_items.length; i++) {
//     var item_section = $(carousel_items[i]).find(".image-block");

//     for (j = 0; j < item_section.length; j++) {
//       item_blocks.push(item_section[j]);
//     }
//   }
//   return item_blocks;
// };

// window.onload = carouselCreate;
// var lastWindowWidth = $(window).width();
// window.onresize = function() {
//   var $window = $(this),
//     windowWidth = $window.width();

//   if (lastWindowWidth >= 803 && windowWidth < 803) {
//     //from 5 items to 6..
//     var items = carouselFlatten();
//     carousel_items = carouselsplit(items, 6);
//     carouselAdd(carousel_items);
//   } else if (lastWindowWidth <= 803 && windowWidth > 803) {
//     //from 6 items to 5..
//     var items = carouselFlatten();
//     carousel_items = carouselsplit(items, 5);
//     carouselAdd(carousel_items);
//   }
//   lastWindowWidth = windowWidth;
// };

// GET spotlight content on clicking corresponding carousel items
// 324 on left

async function getStory(DivId) {
  const data = await $.ajax({
    url: 'spotlight-stories.html',
    type: 'GET',
  })
  var content = $(data).html()
  var arr = $(content)
    .toArray()
    .filter(function(element, index) {
      return index % 2 === 0
    })

  return arr.find(element => element.id === DivId)
}

async function getTaylorLittle() {
  $('#js-spotlight-title').text('TAYLOR LITTLE')

  $('#js-spotlight-profile-picture').attr(
    'src',
    'assets/img/spotlight-page/little.jpg',
  )

  var taylor_content = await getStory('Taylor-Little')
  // console.log(taylor_content)

  $('#js-spotlight-left-body').replaceWith(taylor_content.firstElementChild)
  $('#js-spotlight-right-body').replaceWith(taylor_content.lastElementChild)
}

async function getTaylorLittleContent() {
  var taylor_content = await getStory('Taylor-Little')

  return taylor_content
}

async function getAnnGrigsby() {
  $('#js-spotlight-title').text('ANN HAGAN-GRIGSBY')

  $('#js-spotlight-profile-picture').attr(
    'src',
    'assets/img/spotlight-page/Anna Hagan-Grigsby.jpg',
  )

  var ann_content = await getStory('Ann-Grigsby')
  console.log(ann_content)

  $('#js-spotlight-left-body').replaceWith(ann_content.firstElementChild)
  $('#js-spotlight-right-body').replaceWith(ann_content.lastElementChild)
}

async function getAnnGrigsbyContent() {
  var ann_content = await getStory('Ann-Grigsby')

  return ann_content
}

async function getProjectSTAAR() {
  $('#js-spotlight-title').text('PROJECT STAAR')

  $('#js-spotlight-profile-picture').attr(
    'src',
    'assets/img/spotlight-page/STAAR-4.jpg',
  )

  var STAAR_content = await getStory('Project-STAAR')
  console.log(STAAR_content)

  $('#js-spotlight-left-body').replaceWith(STAAR_content.firstElementChild)
  $('#js-spotlight-right-body').replaceWith(STAAR_content.lastElementChild)
}

async function getProjectStaarContent() {
  var STAAR_content = await getStory('Project-STAAR')

  return STAAR_content
}

async function getDionCopeland() {
  $('#js-spotlight-title').text('DION COPELAND')

  $('#js-spotlight-profile-picture').attr(
    'src',
    'assets/img/spotlight-page/DionCopeland.jpg',
  )

  var Dion_content = await getStory('Dion-Copeland')
  console.log(Dion_content)

  $('#js-spotlight-left-body').replaceWith(Dion_content.firstElementChild)
  $('#js-spotlight-right-body').replaceWith(Dion_content.lastElementChild)
}

async function getDionCopelandContent() {
  var Dion_content = await getStory('Dion-Copeland')

  return Dion_content
}

async function getSamanthaWright() {
  $('#js-spotlight-title').text('SAMANTHA WRIGHT')

  $('#js-spotlight-profile-picture').attr(
    'src',
    'assets/img/spotlight-page/SWright.jpg',
  )

  var Samantha_content = await getStory('Samantha-Wright')
  console.log(Samantha_content)

  $('#js-spotlight-left-body').replaceWith(Samantha_content.firstElementChild)
  $('#js-spotlight-right-body').replaceWith(Samantha_content.lastElementChild)
}

async function getSamanthaWrightContent() {
  var Samantha_content = await getStory('Samantha-Wright')

  return Samantha_content
}

async function getDrOlmos() {
  $('#js-spotlight-title').text('DR. LLUÍS BAIXAULI-OLMOS')

  $('#js-spotlight-profile-picture').attr(
    'src',
    'assets/img/spotlight-page/bauxiali-olmos.jpg',
  )

  var Olmos_content = await getStory('Dr-Olmos')
  console.log(Olmos_content)

  $('#js-spotlight-left-body').replaceWith(Olmos_content.firstElementChild)
  $('#js-spotlight-right-body').replaceWith(Olmos_content.lastElementChild)
}

async function getDrOlmosContent() {
  var Olmos_content = await getStory('Dr-Olmos')

  return Olmos_content
}

async function getKalebClemons() {
  $('#js-spotlight-title').text('KALEB CLEMONS')

  $('#js-spotlight-profile-picture').attr(
    'src',
    'assets/img/spotlight-page/kalebclemons.jpeg',
  )

  var Kaleb_content = await getStory('Kaleb-Clemons')
  console.log(Kaleb_content)

  $('#js-spotlight-left-body').replaceWith(Kaleb_content.firstElementChild)
  $('#js-spotlight-right-body').replaceWith(Kaleb_content.lastElementChild)
}

async function getKalebClemonsContent() {
  var Kaleb_content = await getStory('Kaleb-Clemons')

  return Kaleb_content
}

async function getLesleyHarris() {
  $('#js-spotlight-title').text('LESLEY HARRIS')

  $('#js-spotlight-profile-picture').attr(
    'src',
    'assets/img/spotlight-page/Harris.jpg',
  )

  var lesley_content = await getStory('Lesley-Harris')

  $('#js-spotlight-left-body').replaceWith(lesley_content.firstElementChild)
  $('#js-spotlight-right-body').replaceWith(lesley_content.lastElementChild)
}

async function getLesleyHarrisContent() {
  var lesley_content = await getStory('Lesley-Harris')

  return lesley_content
}

//JSON for Mobile, uses wider images
var spotData = [
  {
    id: '1',
    title: 'TAYLOR LITTLE',
    alt: 'Taylor Little',
    image: 'assets/img/spotlight-page/taylorLittleMobDetail.png',
    description: '',
  },
  {
    id: '2',
    title: 'ANN HAGAN-GRIGSBY',
    alt: 'Ann Hagan-Grigsby',
    image: 'assets/img/spotlight-page/anne-hagan-grigsbyMobDetail.png',
    description: '',
  },
  {
    id: '3',
    title: 'PROJECT STAAR',
    alt: 'Project Staar',
    image: 'assets/img/spotlight-page/STAARMobDetail.png',
    description: '',
  },
  {
    id: '4',
    title: 'DION COPELAND',
    alt: 'Dion Copeland',
    image: 'assets/img/spotlight-page/DionCopelandMobDetail.jpg',
    description: '',
  },
  {
    id: '5',
    title: 'DR. LLUIS BAIXAULI-OLMOS',
    alt: 'Dr. Lluis Baixauli-Olmos',
    image: 'assets/img/spotlight-page/baixauli-olmosMobDetail.png',
    description: '',
  },
  {
    id: '6',
    title: 'KALEB CLEMONS',
    alt: 'Kaleb Clemons',
    image: 'assets/img/spotlight-page/kalebclemonsMobDetail.jpeg',
    description: '',
  },
  {
    id: '7',
    title: 'SAMANTHA WRIGHT',
    alt: 'Samantha Wright',
    image: 'assets/img/spotlight-page/samanthaWrightMobDetail.png',
    description: '',
  },
  {
    id: '8',
    title: 'LESLEY HARRIS',
    alt: 'Lesley Harris',
    image: 'assets/img/spotlight-page/Harris.jpg',
    description: '',
  },
]
