var testimonials = [];
var cardContainer = document.getElementById("cardContainer");
fetch('http://testimonials.nachodiaz.es/')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        testimonials = data.sort((a, b) => b.rating - a.rating);
        console.log(testimonials)
        insertData(testimonials);

    })

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("addTestimonial");

// Get the bnt element that closes the modal
var cancel = document.getElementById("cancel");

// Get the btn element that closes the modal
var add = document.getElementById("add");

add.onclick = function () {
    var inputName = document.getElementById("name");
    var inputLocation = document.getElementById("location");
    var inputRating = document.getElementById("rating");
    var inputMessage = document.getElementById("message");
    var addNewTestimonial = true;
    if (inputName.value == "") {
        console.log("a")
        document.getElementById("noName").style.display = "block";
        addNewTestimonial = false;
    }
    if (inputLocation.value == "") {
        console.log("a")
        document.getElementById("noLocation").style.display = "block";
        addNewTestimonial = false;
    }
    if (inputRating.value == "") {
        console.log("a")
        document.getElementById("noRating").style.display = "block";
        addNewTestimonial = false;
    }
    if (inputMessage.value == "") {
        console.log("a")
        document.getElementById("noMessage").style.display = "block";
        addNewTestimonial = false;
    }
    if (addNewTestimonial) {
        var newTestimonial = { id: testimonials.length + 1, name: inputName.value, location: inputLocation.value, rating: inputRating.value, message: inputMessage.value }
        console.log(document.getElementById("cardContainer").value)
        testimonials.push(newTestimonial)
        testimonials = testimonials.sort((a, b) => b.rating - a.rating);
        cardContainer.innerHTML = "";
        insertData(testimonials)
        console.log(testimonials)
        modal.style.display = "none";
    }

}


function validator(value) {
    if (value.length > 0) {
        return true;
    }
}

// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
cancel.onclick = function () {
    modal.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
function createTestimonialCard(data) {

    var card = document.createElement("div");
    card.setAttribute("class", "card");
    var cardHeading = document.createElement("div");
    cardHeading.setAttribute("class", "cardHeading");
    var bodyCard = document.createElement("div");
    bodyCard.setAttribute("class", "bodyCard")
    var avatar = document.createElement("img");
    avatar.setAttribute("class", "avatar");
    var nameContainer = document.createElement("div");
    nameContainer.setAttribute("class", "nameContainer");
    var name = document.createElement("h4");
    name.setAttribute("class", "name-testimonial");
    var location = document.createElement("p");
    location.setAttribute("class", "location");
    var quote = document.createElement("i");
    quote.setAttribute("class", "quote");
    var testimonial = document.createElement("p");
    testimonial.setAttribute("class", "testimonial");
    var rating = document.createElement("p");
    rating.setAttribute("class", "rating");
    var iconQuote = document.createElement("i");
    iconQuote.setAttribute("class", "fas fa-quote-right");
    iconQuote.setAttribute("id", "iconQuote");

    var iconMap = document.createElement("i");
    iconMap.setAttribute("class", "fa-solid fa-location-dot");
    name.innerHTML = data.name;
    location.innerHTML = data.location;
    avatar.setAttribute("src", data.avatar);
    testimonial.innerHTML = data.message;
    rating.innerHTML = "Rating: " + "<b>" + data.rating + "</b>";
    var userDataContainer = document.createElement("div");
    userDataContainer.setAttribute("id", "userData");


    userDataContainer.append(avatar)
   
    nameContainer.append(name)
   
    location.append(iconMap)
    nameContainer.append(location)
  
    userDataContainer.append(nameContainer)

    cardHeading.append(userDataContainer)
    cardHeading.append(iconQuote)

   
    bodyCard.append(quote)
    bodyCard.append(testimonial)
    bodyCard.append(rating)
    card.append(cardHeading)
    card.append(bodyCard)
    cardContainer.append(card)
}


function insertData(data) {
    for (let index = 0; index < data.length; index++) {
        createTestimonialCard(data[index])
    }
}

