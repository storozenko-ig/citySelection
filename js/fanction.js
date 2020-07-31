function newCreateElement(tag, opt, children, value) {
  const element = document.createElement(tag);
  if (opt && typeof opt === "object") {
    Object.keys(opt).forEach(function (key) {
      element.setAttribute(key, opt[key]);
    });
  } else if (opt && typeof opt === "string") {
    element.setAttribute("class", opt);
  }
  if (children && Array.isArray(children)) {
    children.forEach(function (child) {
      element.appendChild(child);
    });
  } else if (children) {
    element.appendChild(children);
  }
  if (value && typeof value === "string") {
    element.innerHTML = value;
  }
  return element;
}
function addClass(addClass, className) {
  let elem = document.querySelector(className);
  if (addClass) {
    elem.classList.add(addClass);
  }
}
function removeClass(addClass, className) {
  let elem = document.querySelector(className);
  if (addClass) {
    elem.classList.remove(addClass);
  }
}

function City(obj, parentWindow, parentList, parentPhone) {
  this.obj = obj;
  this.parentWindow = parentWindow;
  this.parentList = parentList;
  this.fildCity = this.parentList.querySelector("span");
  this.parentPhone = parentPhone;
}
City.prototype.printWindow = printWindowChoice;
function printWindowChoice() {
  this.parentList.onclick = () => {
    const span = newCreateElement("span", null, null, "Cменить город?");
    const buttonNo = newCreateElement("button", { class: "button-change-city" }, null, "Нет");
    const buttonYes = newCreateElement("button", { class: "button-change-city" }, null, "Да");
    const div = newCreateElement("div", { class: "window-change-city" }, [span, buttonNo, buttonYes]);
    this.parentWindow.appendChild(div);
    if (div.style.display != "none") {
      div.style.display = "block";
    }
    visualStyleBlock(buttonYes, buttonNo, div);
  };
}
function visualStyleBlock(button1, button2, elem) {
  button1.onclick = () => {
    addClass("activ", ".list-city");
    elem.style.display = "none";
  };
  button2.onclick = () => {
    elem.style.display = "none";
  };
}
City.prototype.printList = createListCity;
function createListCity() {
  let ul = newCreateElement("ul", { class: "list-city" });
  this.parentList.appendChild(ul);
  for (let key in this.obj) {
    let a = newCreateElement("a", { type: "#" }, null, key);
    let li = newCreateElement("li", { value: this.obj[key] }, [a], null);
    ul.appendChild(li);
  }
}
City.prototype.change = chechCity;
function chechCity() {
  let all = document.querySelectorAll("ul.list-city > li");
  for (let li of all) {
    li.onclick = () => {
      let opt = li.firstElementChild.text;
      let attrubutValue = li.getAttribute("value");
      this.parentPhone.textContent = attrubutValue;
      this.fildCity.textContent = opt;
      removeClass("activ", ".list-city");
    };
  }
}
