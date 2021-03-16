var Foods = [
  {
    name: "Potatoes with cheese and sour cream",
    price: 36,
    time: 10,
    type: "Vegetables",
    img: src = "New folder/1.jpg"
  },
  {
    name: "pasta spaghetti with meatballs ",
    price: 27,
    time: 7,
    type: "Meat and poultry",
    img: src = "New folder/2.jpg"

  }, {
    name: "Crab With Oyster Sauce",
    price: 45,
    time: 14,
    type: "Fish and Seafood",
    img: src = "New folder/3.jpg"

  }, {
    name: "Flourless Cheese Crust Pizza",
    price: 29,
    time: 12,
    type: "Today Special Dish",
    img: src = "New folder/4.jpg"


  }, {
    name: "Avocadoand Niçoise chicken salad",
    price: 19,
    time: 5,
    type: "Grains, legumes, nuts and seeds",
    img: src = "New folder/5.jpg"

  }, {
    name: "STEAK SALAD WITH CREAMY BALSAMIC VINAIGRETTE",
    price: 32,
    time: 17,
    type: "Meat and poultry",
    img: src = "New folder/6.jpg"

  }, {
    name: "Green Salad with mixed greens, tomatoes, cucumber, red onion, Parmesan, croutonsSalade and ",
    price: 36,
    time: 10,
    type: "Vegetables",
    img: src = "New folder/7.jpg"

  }, {
    name: "White Pasta Recipe with Creamy White Pasta Sauce ",
    price: 36,
    time: 10,
    type: "Today Special Dish",
    img: src = "New folder/8.jpg"

  }, {
    name: "paella with seafood mix",
    price: 36,
    time: 10,
    type: "Fish and Seafood",
    img: src = "New folder/9.jpg"

  }, {
    name: "triple hamburger with cheese value meal",
    price: 36,
    time: 10,
    type: "Today Special Dish",
    img: src = "New folder/1.jpg"

  }
];

var typeOfFood = ["Today Special Dish", "Fish and Seafood", "Vegetables", "Grains, legumes, nuts and seeds", "Meat and poultry"]


function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
    }
  } else {
    for (var key in coll) {
      f(coll[key], key);
    }
  }
}

function filter(array, predicate) {
  var acc = [];
  each(array, function (element, i) {
    if (predicate(element, i)) {
      acc.push(element);
    }
  });
  return acc;
}

function map(array, func) {
  var acc = [];
  each(array, function (element, i) {
    acc.push(func(element, i));
  });
  return acc;
}

function reduce(array, f, acc) {
  if (acc === undefined) {
    acc = array[0];
    array = array.slice(1);
  }
  each(array, function (element, i) {
    acc = f(acc, element, i);
  });
  return acc;
}
$('.second').hide()
$("#button3").click(function () {
  debugger
  var type = $('#Food').val()
  console.log(type)
  var res = Foods.filter(function (food) {
    return food.type === type
  })
  // $("#body2").css('background-image', 'url("vv.jpg");')
  // $('.second').show()
  // $('.first').hide()

  var html = res.map(function (e) {
    return '<div> <h1>' + e.name + '</h1></div>'
  }).join("")
  // console.log("html",html)
  $("#displayFood").html("")
  $("#displayFood").html(html)

})