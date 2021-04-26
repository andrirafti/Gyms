# PROJECT 4 README
# Gyms
Select a gym and then pick the trainer you wish to train them!
Are you a new client? Sign up with your selected trainer! 





- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

_**Project Title** 
Gyms 


<br>

## MVP

FULL Crud BACKEND
Full Crud Front End.
Minimum 8 components front end
Minimum 1 association with an extra backend table as well.


### Goals

- Allow a user to select a gym.
- Once inside you can click on the gyms details section and it will have an option to show that gyms TOP trainer! 
- Once inside the Gyms Trainers folder you can select on that trainer to get more details on them! 
- You can click on that trainer to see their clients... 
- you can then become a client of that trainer, update your information, view each client in detail, and destroy a client! (Full Crud) 

<br>

### Libraries and Dependencies


### Client (Front End)

#### Wireframes

> Use the Wireframes section to display desktop, tablet and mobile views. No hand-drawn wireframes. Use a tool like wireframe.cc, Whimsical or AdobeXD

!https://whimsical.com/gyms-Y25rwSCnwiC8NSX4gqEqyH

- Desktop Landing

!https://whimsical.com/gyms-Y25rwSCnwiC8NSX4gqEqyH

- Tablet Resource Index

!https://whimsical.com/gyms-Y25rwSCnwiC8NSX4gqEqyH

- Mobile Resource Index

#### Component Tree

https://whimsical.com/gym-architecture-G6sU4WRRWxd4V5Dr1dgqXL

#### Component Architecture



``` structure

src
|__ imageFolder/
      |__ images
|__ components/
      |__ TrainerShow.jsx
      |__ GymShow.jsx
      |__ ClientShow.jsx
      |__ Nav.jsx
      |__ Footer.jsx
|__ container/
      |__ GymsContainer.jsx
|__ screens/
      |__ Gym.jsx
      |__ GymDetail.jsx
      |__ Trainer.jsx
      |__ TrainerDetail.jsx
      |__ Client.jsx
      |__ ClientDetail.jsx
      |__ ClientEdit.jsx
      |__ ClientCreate.jsx
      
|__ services/
      |__ api-config.js
      |__ clients.js
      |__ gyms.js
      |__ trainers.js
|__ App.js
|__ Index.js
|__ App.css

```

#### Time Estimates


| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Add Contact Form    |    L     |     3 hrs      |     TBD    |     | TBD
| Create CRUD Actions |    H     |     5 hrs      |     TBD    |     |TBD   |
| Create BackEnd CRUD |    H     |     5 hrs      |     TBD    |     | TBD
| CSS Creation.       |    H     |     8 hrs      |     TBD    |     | TBD     |
| Post MVP (filter..) |    M     |     3 hrs      |     TBD    |     | TBD
| Debugging For error |    H     |     3 hrs      |     TBD    |     | TBD     |
| MVP Requirment Check|    L     |     2 hrs      |     TBD    |     | TBD
| Final Edits/TouchUps|    H     |     3 hrs      |    TBD     |     |   TBD     |
| Final Edits for CSS |    H    |     3 hrs      |    TBD     |     |   TBD     |


| TOTAL               |          |     35 hrs      |     TBD     |     TBD     |



### Server (Back End)

#### ERD Model

https://app.diagrams.net/#Handrirafti%2FGyms%2Fmain%2FUntitled%20Diagram.drawio



## Post-MVP

Animation CSS Entrance Page
Loading Animations
Filtering Gyms/Trainers/Clients by name.


## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
