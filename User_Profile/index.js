let profileDetails = {
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/user-profile-img.png",
    name: "JITENDRA KUMAR",
    age: 25,
    organization: "IDRBT",
    address: "HYDERABAD"
};

let profileContainerElement = document.getElementById("profileContainer");
profileContainerElement.classList.add("text-center", "d-flex", "flex-column", "justify-content-center");
let imgContainerElement = document.getElementById("imgContainer");

let imgElement = document.createElement("img");
imgElement.setAttribute("src", profileDetails.imgSrc);
imgElement.classList.add("profile-img");
imgContainerElement.appendChild(imgElement);

let nameElement = document.createElement("h1");
nameElement.classList.add("profile-name");
nameElement.textContent = profileDetails.name;
profileContainerElement.appendChild(nameElement);

let organizationElement = document.createElement("h1");
organizationElement.classList.add("profile-name");
organizationElement.textContent = profileDetails.organization;
profileContainerElement.appendChild(organizationElement);

let addressElement = document.createElement("h1");
addressElement.classList.add("profile-name");
addressElement.textContent = profileDetails.address;
profileContainerElement.appendChild(addressElement);

let ageElement = document.createElement("p");
ageElement.classList.add("age");
ageElement.textContent = "AGE : " + profileDetails.age;
profileContainerElement.appendChild(ageElement);
