//Add theme change functionality
const themeButtons = document.querySelectorAll('.select__btn');
let root = document.documentElement;

themeButtons[0].addEventListener('click', () => {
    console.log("Boogie Woggie!!!!");
    root.style.setProperty('--main-background', '#fff');
})

function changeThemeTo(theme) {
    for (let prop in theme){
        document.querySelector(':root').style.setProperty(prop, theme[prop]);
    }
};


const themes = {
    themeOne: {
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

    themeTwo: {
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

    themeThree: {
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
}

// changeThemeTo(themes.themeTwo);