#HTML + CSS + JS - Build a Pomodoro Timer


##Description
The Pomodoro technique is a well-known tool for productivity where an individual works in a 25 minute interval to accomplish a task. The idea is that when you set the timer and the clock starts ticking, you do nothing but the intended activity for those 25 minutes. Once the 25 minutes is up, one usually takes a 5 minute break to rest, and then afterwards, start another 25 minute Pomodoro interval.

##Objectives

###Learning Objectives

After completing this assignment, you should be able to create event listeners that will listen for a click event that reads from the DOM and modifies the HTML on the page.

You will also be able to utilize setInterval to run a code block that updates the DOM at a repeated interval.

###Performance Objectives

You should:
- have decent styling
- have a timer that counts down from 25:00 to zero and then flashes a message that the Pomodoro is complete
- make the input + button elements go away after the user enters in the Pomodoro task (Normal + Explorer Modes)
- make the html reflect a MM:SS timer when counting down.
- When the timer gets to < :10 for each minute, it should show two digits:
  - *09*, *08*, *07* ...
  - not 9, 8, 7 ...

##Deliverables
- an `index.html` file with the content

- a project that compiles SCSS to CSS.
  - there should be a `main.scss` in a `/scss` folder
  - all the SCSS should compile to `styles.css` in a `css` folder
  - the `index.html` should link to the `styles.css` file

- a Github repository and a live static site on Github Pages.

## Setup
- in `~/TIY/assignments`, create a new project directory:
  - `gen-project-scss assignment-XX` (with XX being the number of the assignment)

- in the root of your, create an images directory

- curl the image files into the images directory + unzip the image files
```
curl https://raw.githubusercontent.com/TIY-Charleston-Front-End-Engineering/Course-Guide/master/assignments/js-html-pomodoro-timer/image-files.zip > ./images/image-files.zip

unzip ./images/image-files.zip
```


### Normal Mode
##### (1) Adding Inputs + Starting the Timer
![basic mode](./gif-examples/pomodoro-normal-part-1.gif?raw=true)

##### (2) The Final Countdown
![basic mode 2](./gif-examples/pomodoro-normal-part-2.gif?raw=true)

### Explorer Mode (optional)
##### (1) Change Background at One Minute
![explorer mode](./gif-examples/pomodoro-explorer-mode-part-1.gif?raw=true)

##### (2)And Change it Back at theEnd
![explorer mode](./gif-examples/pomodoro-explorer-mode-part-2.gif?raw=true)

### Epic Mode
- Create a list of pomodoros
- You can either 'start' a pomodoro or 'remove' one
- Flash error notifications in the top right for:
  - When a user tries to run 2 pomodoros concurrently
  - When a user tries to submit a pomodoro task with no input

![epic mode](./gif-examples/pomodoro-epic-mode.gif?raw=true)
