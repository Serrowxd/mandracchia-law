# Mandracchia Law

### An Attorney Website by Jared Cooper and Kevin Jolley.

### Personal Notes - Kevin

- Chris has pictures and is going to take more to add to the page.
- Philadelphia/local for the front picture if possible.
- Twitter/Instagram/Linkedin/Avvo accounts for this profile (possibly other attorneys).
- `Refer to email for changes`

#### MAJOR TO-DO

- **EXCESSIVELY MAJOR TODO** ~~
- **REFACTOR CSS, COMPILE THEM INTO ONE, POSSIBLE USE OF `LESS` OR `SCSS`**
- **BABBEL FOR CROSS-PLATFORM**
- **REFACTOR INTO `MAIN` & `ANIMATIONS` ~ POSSIBLY `RESET` & `EXCESS` FOR BABBEL STUFF**

- Add a "Contact" page and section.

* NavBar needs to have at least 1 breakpoint before hitting the second layout - the upper portion clips out of its container. Currently set to `overflow: hidden;` in the CSS file.

* NavBar transition has me stumped, will need to come back to it or just leave it out entirely.

* Add Buttons to the cards, possibly some margin/padding between them?

* MOBILE LAYOUTS AND MEDIA BREAKPOINTS AAAAAAA

* Color scheme?

* Possibly extend the "headerImg" to include the nav bar?

* !!! ON THE "MEET THE TEAM" SECTION, CREATE LINKS TO THEIR PERSONAL PAGES. !!!

* Unsure about second image addition in `Upper` - might need to rework it.

* **CREATE ROUTES ON CARDS**

**Feedback**

- Navigation needs to be lined up better - reference `apple.com` `wired.com` `latimes.com` {made small adjustment to this, will have to revaluate}.

- Too much jammed on secondary pages, less text, bigger font.

- Header Text feels off, possibly include Mandracchia in there? The staggered look is hard to read when you're trying to justify that it's Mandracchia Law and not just another laywer website.

#### ISSUES

- `index.css` - navigation is broken for the color scheme.

- Changed RSNav to `dark` instead of `light` for the sake of color scheme management - will need override.

- attempting to make color breakpoints will cause issue with `mainThinHome` due to the padding. Any color changes will need to be done manually.

- !!! LAYOUT IS BROKEN ON CHROME, WORKS FINE ON FIREFOX !!!

### Build Notes

`RSNav` = [EXPORT = RSNav] Reactstrap Default Navigation.

`NavBar` = [EXPORT = NavBar] The non-reactstrap version || **This is currently not in use**

`Footer` = [EXPORT = Footer] Was moved up a level into Routes, will be added to the bottom of every page.

`NewMain` is currently being rendered as the main cards - check with Chris to see which one he prefers to use and adjust accordingly.

---

#### Website References:

http://mmattorneys.com/

https://www.defendyourcase.com/

https://www.phoenixcriminaldefense.com

https://www.facebook.com/pg/wwwmmattorneysdotcom/about/?ref=page_internal

---

#### Dependencies:

[`Reactstrap`](https://reactstrap.github.io/)

[`Antd`](https://ant.design/docs/react/introduce)

`React-Dom`

`Bootstrap`

`Axios`

`React-Router`

`React-Router-Dom`

[`React-Waypoint`](https://github.com/brigade/react-waypoint)

[`React-Spring`](https://github.com/drcmda/react-spring)

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

#### Backgrounds

`Background || OLD`: #bec7fd **[TEMP]** // index.css + app.css **_TEMP DISABLED_**

`Background`: #F8F9FA || Located: `App.css` & Public>`Index.css`

`white-background`: #eeeeee || Located: `LowerHeader.css`

### CSS:

`.mainThin`: Located in `App.css`, used to structure the page.

`centerH`: located in `App.css`, modifies all the `centerH` tags to be text-aligned center.

`h2`: located in `App.css`, modifies all the `h2` tags to be text-aligned end.

`div`: located in `App.css`, modifies all the `div` tags to be have the background-color of #F8F9FA

`p`: located in `App.css`, adds 0.6rem to all the `p` tags.

`headThin`: located in `App.css`.

`mainThinHome`: Located in `HomePage.css` - does the same thing as `mainThin` just 1/2's the numbers for padding/margin.

`sticky`: Located in `App.css` - makes the NavBar sticky when adding the `sticky` class attribute.

`oco`: Located in `Upper.css` - makes the text color `orangered !important` - best used to highlight certain bits of text, will be moving to `span`.

`span`: Located in `AboutUs.css` - changes the color to `orangered` as the same as above ^

### Fonts:

`font-family`: Segoe UI Light `!important` -- located in `index.css` // modifies `body`

### Animations:

`glb_anim`: Located in `index.css` -- adds a transtion CSS event.
