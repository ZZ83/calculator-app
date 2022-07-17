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
        "--primary-color":      `#ffffff`,
        "--main-background":    `#3A4663`,
        "--input-background":   `#181F33`,
        "--keypad-background":  `#242D44`,
        "--button-background":  `#EAE3DC`,
        "--button-text":        `#434A59`,
        "--button-shadow":      `#B3A497`,
        "--eq-background":      `#D03F2F`,
        "--eq-shadow":          `#93261A`,
        "--special-background": `#647198`,
        "--special-shadow":     `#414E73`,
        "--hover-color":        `#F96B5B`,
        "--hover-special":      `#A2B2E1`,
    },

    themeTwo: {
        "--primary-color":      `#36362C`,
        "--main-background":    `#E6E6E6`,
        "--input-background":   `#EEEEEE`,
        "--keypad-background":  `#D2CDCD`,
        "--button-background":  `#E5E4E1`,
        "--button-text":        `#36362C`,
        "--button-shadow":      `#979797`,
        "--eq-background":      `#C85402`,
        "--eq-shadow":          `#873901`,
        "--special-background": `#378187`,
        "--special-shadow":     `#1B6066`,
        "--hover-color":        `#FF8A38`,
        "--hover-special":      `#62B5BC`,
    },
}

// changeThemeTo(themes.themeTwo);