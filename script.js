const changeTheme = {
    root:         document.documentElement,
    themeButtons: document.querySelectorAll('.select__btn'),
    themes: [
        {
            "--primary-color":     `#ffffff`,
            "--main-background":   `#3A4663`,
            "--screen-background": `#181F33`,
            "--toggle-background": `#242D44`,
            "--keypad-background": `#242D44`,
            "--primary-keys-background":  `#EAE3DC`,
            "--primary-keys-text-color": ` #434A59`,
            "--primary-keys-box-shadow":  `#B3A497`,
            "--primary-keys-hover-color": `#ffffff`,
            "--secondary-keys-background":  `#647198`,
            "--secondary-keys-text-color":  `#FFFFFF`,
            "--secondary-keys-box-shadow":  `#414E73`,
            "--secondary-keys-hover-color": `#A2B2E1`,
            "--equal-key-background":  `#D03F2F`, // ALSO THE TOGGLE BUTTON COLOR
            "--equal-key-text-color":  `#FFFFFF`,
            "--equal-key-box-shadow":  `#93261A`,
            "--equal-key-hover-color": `#F96B5B`, // ALSO THE TOGGLE BUTTON COLOR
        },
        {
            "--primary-color":     `#36362C`,
            "--main-background":   `#E6E6E6`,
            "--screen-background": `#EEEEEE`,
            "--toggle-background": `#D2CDCD`,
            "--keypad-background": `#D2CDCD`,
            "--primary-keys-background":  `#E5E4E1`,
            "--primary-keys-text-color": ` #36362C`,
            "--primary-keys-box-shadow":  `#A79E91`,
            "--primary-keys-hover-color": `#ffffff`,
            "--secondary-keys-background":  `#378187`,
            "--secondary-keys-text-color":  `#FFFFFF`,
            "--secondary-keys-box-shadow":  `#1B6066`,
            "--secondary-keys-hover-color": `#62B5BC`,
            "--equal-key-background":  `#C85402`, // ALSO THE TOGGLE BUTTON COLOR
            "--equal-key-text-color":  `#FFFFFF`,
            "--equal-key-box-shadow":  `#873901`,
            "--equal-key-hover-color": `#FF8A38`, // ALSO THE TOGGLE BUTTON COLOR 
        },
        {
            "--primary-color":     `#FFE53D`,
            "--main-background":   `#17062A`,
            "--screen-background": `#1E0936`,
            "--toggle-background": `#1E0936`,
            "--keypad-background": `#1E0936`,
            "--primary-keys-background":  `#331C4D`,
            "--primary-keys-text-color": ` #FFE53D`,
            "--primary-keys-box-shadow":  `#881C9E`,
            "--primary-keys-hover-color": `#6C34AC`,
            "--secondary-keys-background":  `#56077C`,
            "--secondary-keys-text-color":  `#FFFFFF`,
            "--secondary-keys-box-shadow":  `#BE15F4`,
            "--secondary-keys-hover-color": `#8631AF`,
            "--equal-key-background":  `#00DED0`, // ALSO THE TOGGLE BUTTON COLOR
            "--equal-key-text-color":  `#1A2327`,
            "--equal-key-box-shadow":  `#6CF9F1`,
            "--equal-key-hover-color": `#93FFF8`, // ALSO THE TOGGLE BUTTON COLOR
        },
    ],
    addClassTo(element, klass) {
        element.classList.add(klass);
    },
    removeClassFrom(element, klass) {
        element.classList.remove(klass);
    },
    removeActiveClass() {
        this.themeButtons.forEach(item => {
            this.removeClassFrom(item, "active-theme")
        })
    },
    // Loop through each CSS color variable property and change the value.
    changeThemeTo(theme) {
        for (let prop in theme){
            this.root.style.setProperty(prop, theme[prop]);
        }
    },
    // Add an event listener on each select theme button that will change the theme color when clicked.
    changeThemeColor() {
        this.themeButtons.forEach((button, index) => {
            button.addEventListener('click', (event) => {
                this.removeActiveClass();
                if(event.target.tagName === "BUTTON") {
                    this.addClassTo(event.target, "active-theme");
                }
                this.changeThemeTo(this.themes[index]);
            })
        });
    }
}
changeTheme.changeThemeColor();
















const isNumber = new RegExp('\\d');
const buttons = document.querySelectorAll('.btn');

const input = document.querySelector('#input');
console.log(input.value)

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if( isNumber.test(button.innerHTML)) {
           let arr = input.value;
           arr = arr.split("");
           arr.push(button.innerHTML);
           input.value = arr.join("");
            console.log(arr)
        }
        if(button.innerHTML === "+") {
            console.log(button.innerHTML)
        }
        if(button.innerHTML === "-") {
            console.log(button.innerHTML)
        }
        if(button.innerHTML === "x") {
            console.log(button.innerHTML)
        }
        if(button.innerHTML === "/") {
            console.log(button.innerHTML)
        }
        if(button.innerHTML === ".") {
            console.log(button.innerHTML)
        }
        if(button.innerHTML === "=") {
            console.log(button.innerHTML)
        }
        if(button.innerHTML === "DEL") {
            console.log(button.innerHTML)
        }
        if(button.innerHTML === "RESET") {
            console.log(button.innerHTML)
        }
    })
});


