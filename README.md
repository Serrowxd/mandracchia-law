# Mandracchia Law

### A Attorney Website by Jared Cooper, Randall Whitlock, and Kevin Jolley.

#### MAJOR TO-DO

* Add a "Contact" page and section.

* `Mandracchia Law` in the Navigation should reach the top of the page.

### Build Notes

`RSNav` = [EXPORT = RSNav] Reactstrap Default Navigation.

`NavBar` = [EXPORT = NavBar] The non-reactstrap version || **This is currently not in use**

`Footer` = [EXPORT = Footer] Was moved up a level into Routes, will be added to the bottom of every page.

---

#### Website References:

http://mmattorneys.com/

https://www.defendyourcase.com/

---

#### Dependencies:

[`Reactstrap`](https://reactstrap.github.io/)

[`Antd`](https://ant.design/docs/react/introduce)

`React-Dom`

`Bootstrap`

`Axios`

`React-Router`

`React-Router-Dom`

---

#### Routes:

`/` = Home || Website Landing Page

`/AboutUs` = AboutUs || About Us Page

`/AttProf` = AttProf || Attorney Profiles Page

`/AoP` = AoP || Areas of Practice Page

`/FAQ` = FAQ || Frequently Asked Questions Page

---

### Colors:

#### NavBar

`navButton`: #8d2525 **[TEMP]** // NavBar.css **_TEMP DISABLED_**

_BACKGROUND_: #F8F9FA || Located: `App.css` & Public>`Index.css`

#### Backgrounds

`Background`: #bec7fd **[TEMP]** // index.css + app.css **_TEMP DISABLED_**

### CSS:

`.mainThin`: Located in `AboutUs.css`, used to structure the page.

`h1`: located in `AboutUs.css`, modifies all the `h1` tags to be text-aligned center.

`h2`: located in `RSNav.css`, modifies all the `h2` tags to be text-aligned end.

`div`: located in `App.css`, modifies all the `div` tags to be have the background-color of #F8F9FA
