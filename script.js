//Add theme change functionality
const themeButtons = document.querySelectorAll('.select__btn');
let root = document.documentElement;

themeButtons[0].addEventListener('click', () => {
    // console.log("Boogie Woggie!!!!");
    // root.style.setProperty('--main-background', '#fff');
    changeThemeTo(themes.themeThree);
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
    themeThree: {
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
}

