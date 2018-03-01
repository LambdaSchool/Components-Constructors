let dropdown = document.querySelector(".Dropdown");
// let li = document.getElementsByClassName("li");
console.log(dropdown);
// console.log(li);


class Dropdown {
  constructor(dropdown) {
    this.dropdown = dropdown;
    this.dropdown.addEventListener("click", () => {
      this.openMenu();
    });
  }
  openMenu() {
    let dropdownItems = document.querySelector(".Dropdown__items");
    console.log(dropdownItems);
    if (dropdownItems.style.display === "none") {
      dropdownItems.classList.add("clickedList");
      dropdownItems.style.display = "block";
    } else {
      dropdownItems.style.display = "none";
    }
  }
}

const myDropdown = new Dropdown(dropdown);





/*
click the dropdown button, display block dropdown__items menu
}
*/
