const parentChangeCity = document.querySelector(".contener");
const changeCity = document.querySelector(".menu__list-city-selection");
const thisPhone = document.querySelector(".menu__list-profil-info-phone");
const listCity = {
  Владивосток: "8(800)55-55-555",
  Уссурийск: "8(800)22-22-222",
  Артем: "8(800)11-11-111",
  Находка: "8(800)66-66-666",
};

let city = new City(listCity, parentChangeCity, changeCity, thisPhone);
city.printWindow();
city.printList();
city.change();
