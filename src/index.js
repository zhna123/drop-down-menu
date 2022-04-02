import './style.css';

const menus = Array.from(document.querySelectorAll("nav > ul > li"));

export function dropDownMenu() {
    menus.forEach(menu => {
        menu.addEventListener("click", function(e) {
            // stop bubbling up
            e.stopPropagation();
            // make sure click event only on parent
            if (e.target === e.currentTarget) {
                hideOtherMenus(e.target);
                const targetMenuList = e.target.querySelectorAll("ul.menu li");
                targetMenuList.forEach(item => {
                    if (item.classList.contains("visible")) {
                        item.classList.remove("visible");
                    } else {
                        item.classList.add("visible");
                    }
                });
            }
        })
    })

    window.addEventListener("click", function(e) {
        hideOtherMenus();
    })
}

function hideOtherMenus(target) {
    menus.forEach(menu => {
        if (target === null || menu !== target) {
            const listItems = Array.from(menu.querySelectorAll("ul.menu li"));
            listItems.forEach(item => item.classList.remove("visible"));
        }
    })
}

dropDownMenu()
