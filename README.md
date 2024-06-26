# [SECRETS](https://secrets-276f7be740ae.herokuapp.com)

[![GitHub commit activity](https://img.shields.io/github/commit-activity/t/EfthymiaKakoulidou/secrets)](https://github.com/EfthymiaKakoulidou/secrets/commits/main)
[![GitHub last commit](https://img.shields.io/github/last-commit/EfthymiaKakoulidou/secrets)](https://github.com/EfthymiaKakoulidou/secrets/commits/main)
[![GitHub repo size](https://img.shields.io/github/repo-size/EfthymiaKakoulidou/secrets)](https://github.com/EfthymiaKakoulidou/secrets)


- Sometimes it is easier to tell your secrets to the world than to people you know. Sometimes you feel the need to just get stuff off your chest. Sometimes you need to know that you are not alone and that there are other people with similar secrets going through the the same stuff. Sometimes it helps to just write stuff down. 
- The 'Secrets' app is a place where people can share their secrets and get support from other users in the form of comments or private messages. The users can read other peoples' secrets and the comments they got, so that they can relate to them and feel less alone. The Diary is a place where the user can write his/hers thoughts and secrets and nobody else has access to it.


![screenshot](documentation/mockup.jpg)

source: [amiresponsive](https://ui.dev/amiresponsive?url=https://secrets-276f7be740ae.herokuapp.com)


The live deployed application can be found deployed on [Heroku](https://secrets-276f7be740ae.herokuapp.com).

## UX

  - The choice of the UX design derives from the charected of the site. Secrets are something that is hidden in the first place and that is why only authenticated users can view the content of the site. 
  - Easy navigation was also goal and thats why the navbar items are descriptive to what they include. The "Share a secret" item is a separate link making even more easy to upload your secrets. The deault picture that is used when the user does not upload his/her owns pictures makes it also very clear that now the secret is revealed. 
  - The diary section is the only one that uses a different font. This font is like handwritting making it more personal and indicating that this part of the site is only accessible to the specific user. Diary has no CRUD functionality in the same way that you wouldn't go back and change or delete your actual diary. Entries belong to history.
  - The messages section is structured like the ones we all been used to. The ordering of the messages and the fact that there is no CRUD functionality here either is intentional to make it more like the social apps we are used to.

### Colour Scheme

I chose to use black and antiquewhite as my basic colours being inspired by the image of an old notebook or diary that is used to store our secrets. 


### Typography

I chose a very clear font for almost all text in the site except when the user is writing to his/hers diary. There I chose a font that looks more like it is handwritten.

- [Oxygen](https://fonts.google.com/specimen/Oxygen) was used for the primary headers and titles.

- [Indie Flower](https://fonts.google.com/specimen/Indie+Flower?classification=Handwriting) was used for all other secondary text.

- [Font Awesome](https://fontawesome.com) icons were used throughout the site, such as the social media icons in the footer, the navbar, the edit and delete buttons of a secret and the icons underneath the secrets where the user can show support by hugging, comment a secret and reach_out to someone.

## User Stories


### New Site Users

- https://github.com/EfthymiaKakoulidou/secrets/issues/4 As a new site user, I would like signin or signup, so that I can have access to the site.
- https://github.com/EfthymiaKakoulidou/secrets/issues/3 As a new site user, I would like to be informed about what this site is all about, so that I can decide if it is for me.
- https://github.com/EfthymiaKakoulidou/secrets/issues/26 As a new site user, I would like to check my profile, edit or delete it, so that I can control the information I am giving out.
- https://github.com/EfthymiaKakoulidou/secrets/issues/24 As a new site user, I would like to check other peoples' profiles, so that I can choose people to interact with.
- https://github.com/EfthymiaKakoulidou/secrets/issues/9 As a new site user, I would like to share a secret with users of the site, so that I can unburden myself and feel relief.
- https://github.com/EfthymiaKakoulidou/secrets/issues/18 As a new site user, I would like to edit and delete my secrets, so that I update information or in case I changed my mind.
- https://github.com/EfthymiaKakoulidou/secrets/issues/25 As a new site user, I would like to check other peoples' secrets, so that I can see if I can catch up on their latest secrets.
- https://github.com/EfthymiaKakoulidou/secrets/issues/19 As a new site user, I would like to comment on other peoples posts, so that I can express my opinion.
- https://github.com/EfthymiaKakoulidou/secrets/issues/23 As a new site user, I would like to edit or delete my comments in case I change my mind.
- https://github.com/EfthymiaKakoulidou/secrets/issues/43 As a new site user, I would like to keep a diary, so that I can document my thoughts, check the progress I have made and be helped by the process of writing.
- https://github.com/EfthymiaKakoulidou/secrets/issues/39 As a new site user, I would like to message people privately and show support, so that I can connect with others and give and get help.
- As a new site user, I would like to read the blog, so that I can get information about topics around keeping secrets and psychology of it.
- https://github.com/EfthymiaKakoulidou/secrets/issues/7 As a new site user, I would like to signout, so that I can feel safe that my information is protected.
- https://github.com/EfthymiaKakoulidou/secrets/issues/27 As a new site user, I would like to update my username and password, so that I can control my information.


### Returning Site Users

- As a returning site user, I would like to do all of the above for the same reasons.
- https://github.com/EfthymiaKakoulidou/secrets/issues/40 As a returning site user, I would like to check my messages and see if I have new, so that I can keep in touch with people.


### Site Admin

- https://github.com/EfthymiaKakoulidou/secrets/issues/44 As a site administrator, I should be able to add, edit and delete a blogpost, so that I can keep the users informed about this topic.
- As a site administrator, I should be able to handle all the information that is included in the site, so that I can check the content.


## Wireframes


To follow best practice, wireframes were developed.
These wireframes were made at the early stages of the projects so there are some changes made along the way.
They provide the layoutstructure that was used for the site.
I've used [Balsamiq](https://balsamiq.com/wireframes) to design my site wireframes.

### Wireframes

<details>
<summary> Click here to see the Wireframes </summary>

Home
  - ![screenshot](documentation/wireframes/desktop-home1.png)

Home when logged in
  - ![screenshot](documentation/wireframes/desktop-home2.png)

My Secrets
  - ![screenshot](documentation/wireframes/desktop-mysecrets.png)

Messages
  - ![screenshot](documentation/wireframes/desktop-messages.png)

My Diary
  - ![screenshot](documentation/wireframes/desktop-mydiary.png)

Admins blog
  - ![screenshot](documentation/wireframes/desktop-blog.png)

Profiles
  - ![screenshot](documentation/wireframes/desktop-profiles.png)

</details>

## Features


### Existing Features

- **Logo**

    - At the top left of the page there is the logo of the site and its name 'Secrets' which the user can click and be redirected to the home page.

    - ![screenshot](documentation/features/featurelogo.jpg)

- **Sign in/Sign Up**

    - At the top left of the page the user can be informed if he/she is logged in or not. In the case the user does not have an account he/she can sign up.

    - ![screenshot](documentation/features/featuresignin.jpg)
    - ![screenshot](documentation/features/featuresignup.jpg)

- **Side Navbar**

    - The side Navbar is the navigation tool of the user. There the user can find all the content of the page.

    - ![screenshot](documentation/features/featurenavbar.jpg)

- **Profile**

    - The username appears next. It is an indication that the user is logged in and a link to profile page. From this page the user can edit the profile, change the username and the password.

    - ![screenshot](documentation/features/featureprofile.jpg)
    - ![screenshot](documentation/features/featureprofileeditchange.jpg)
    - ![screenshot](documentation/features/featureusername.jpg)
    - ![screenshot](documentation/features/featurepassword.jpg)

- **Profile Page**

    - On this page, appart from the profile's details the user can see a list of all the profiles. Each of the users' avatars links to their profile.

    - ![screenshot](documentation/features/featureprofilepage.jpg)

- **Share a secret**

    - On this page the user can fill the form to add a secret.

    - ![screenshot](documentation/features/featuresecretcreate.jpg)

- **Secrets**

    - Here is the feed with all the posted secrets. When a user clicks on a secret they are redirected to the secret's details and is able to see all the comments that people have left on this secrets. The user can also leave his/hers comments and edit or delete them if they have written them. If the user has posted this secret he/she can edit or delete them. The user can also search for a secret.

    - ![screenshot](documentation/features/featuresecretslist.jpg)
    - ![screenshot](documentation/features/featuresecreteditdelete.jpg)
    - ![screenshot](documentation/features/featuresecreteditform.jpg)
    - ![screenshot](documentation/features/featurecommentform.jpg)
    - ![screenshot](documentation/features/featurecommenteditdelete.jpg)
    - ![screenshot](documentation/features/featurecommenteditform.jpg)
    - ![screenshot](documentation/features/featuresearch.jpg)

- **My Messages**

    - If the user has reached out to somebody or somebody has reached out to the user then their messages will appear on this page. When the user clicks on an item of the list of the messages then he/she is redirected to the thread he/she has with the user that reached out to him/her or the person he/she has reached out to. There he/she can add a message to that thread.

    - ![screenshot](documentation/features/featurereachouts.jpg)
    - ![screenshot](documentation/features/featurereachoutform.jpg)
    - ![screenshot](documentation/features/featurereachoutlist.jpg)
    - ![screenshot](documentation/features/featurereachout.jpg)
    - ![screenshot](documentation/features/featurereachoutcomment.jpg)

- **My Diary**

    - Here the user can write anything that just he/she will have access to. Previous entries to the diary will also appear on this page. When the user clicks on a diary entry then he/she is redirected to the page that shows the whole content of the entry.

    - ![screenshot](documentation/features/featurediary.jpg)
    - ![screenshot](documentation/features/featurediaryform.jpg)
    - ![screenshot](documentation/features/featurediarylist.jpg)
    - ![screenshot](documentation/features/featurediaryentry.jpg)

- **Add blogpost if the user is an administrator and Admins Blog**

    - If the user is an administrator then he gets an extra choice on the navbar to add a blogpost. He/she can add a blogpost and edit or delete it.

    - ![screenshot](documentation/features/featureblogposts.jpg)
    - ![screenshot](documentation/features/featureblogcreate.jpg)
    - ![screenshot](documentation/features/featureblogposteditdelete.jpg)
    - ![screenshot](documentation/features/featureblogedit.jpg)

- **Sign Out**

    - The user can sign out.

    - ![screenshot](documentation/features/featuresignout.jpg)


- **Not found**

    - If the page the user tries to access then he/she will be informed about it.

    - ![screenshot](documentation/features/featurenotfound.jpg)


- **Error page**

    - If the user tries to access a page that he/she is not authorized to access then they will be informed about it.

    - ![screenshot](documentation/features/featureerror.jpg)

### Future Features

- Professional help
    - I think that it would be helpful if the users get professional help through the site. In the future an authentication of documents can be added so that professionals can submit their degrees be authenticated and then provide their help to the users.
- Confirm you are over 18
    - I imagine that the content of this site is going to include entries for adults so some kind of protection for the kids would be useful.
- User connections
    - 'Secrets' goal is not popularity so the follow function is not relevant here. The users are connected to each other through comments, hugs and 'reach out' which works like private messages. Maybe in the future some feature could be added to connect profiles between them so that a community can be created.
- Categories
    - It would also be very helpful to categorize the secrets so that the users can choose which parts of the contents they are interested in.
- Notifications
    - Notifications could be implemented in the future to inform the user when he/she has a new message.
- Message icon
    - In the future the message icon at the bottom of each secret could lead to a form which would have the reach-out-to field already filled with the that profile's username.


## Tools & Technologies Used


- [![Markdown Builder](https://img.shields.io/badge/Markdown_Builder-grey?logo=markdown&logoColor=000000)](https://tim.2bn.dev/markdown-builder) used to generate README and TESTING templates.
- [![Git](https://img.shields.io/badge/Git-grey?logo=git&logoColor=F05032)](https://git-scm.com) used for version control. (`git add`, `git commit`, `git push`)
- [![GitHub](https://img.shields.io/badge/GitHub-grey?logo=github&logoColor=181717)](https://github.com) used for secure online code storage.
- [![Gitpod](https://img.shields.io/badge/Gitpod-grey?logo=gitpod&logoColor=FFAE33)](https://gitpod.io) used as a cloud-based IDE for development.
- [![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-grey?logo=githubpages&logoColor=222222)](https://pages.github.com) used for hosting the deployed front-end site.
- [![Heroku](https://img.shields.io/badge/Heroku-grey?logo=heroku&logoColor=430098)](https://www.heroku.com) used for hosting the deployed back-end site.
- [![Balsamiq](https://img.shields.io/badge/Balsamiq-grey?logo=barmenia&logoColor=CE0908)](https://balsamiq.com/wireframes) used for creating wireframes.
- [![Font Awesome](https://img.shields.io/badge/Font_Awesome-grey?logo=fontawesome&logoColor=528DD7)](https://fontawesome.com) used for the icons.

## Languages Used

- [![HTML](https://img.shields.io/badge/HTML-grey?logo=html5&logoColor=E34F26)](https://en.wikipedia.org/wiki/HTML) used for the main site content.
- [![CSS](https://img.shields.io/badge/CSS-grey?logo=css3&logoColor=1572B6)](https://en.wikipedia.org/wiki/CSS) used for the main site design and layout.
- [![JavaScript](https://img.shields.io/badge/JavaScript-grey?logo=javascript&logoColor=F7DF1E)](https://www.javascript.com) used for user interaction on the site.

## Frameworks Used

- [![React Bootstrap](https://img.shields.io/badge/ReactBootstrap-grey?logo=reactbootstrap&logoColor=7952B3)](https://react-bootstrap.netlify.app/) used as the front-end CSS framework for modern responsiveness and pre-built components.
- [![Django](https://img.shields.io/badge/Django-grey?logo=django&logoColor=092E20)](https://www.djangoproject.com) used as the Python framework for the site.

## Databases Used

- [![PostgreSQL](https://img.shields.io/badge/PostgreSQL-grey?logo=postgresql&logoColor=4169E1)](https://www.postgresql.org) used as the relational database management.
- [![ElephantSQL](https://img.shields.io/badge/ElephantSQL-grey?logo=postgresql&logoColor=36A6E2)](https://www.elephantsql.com) used as the Postgres database.

- [![Cloudinary](https://img.shields.io/badge/Cloudinary-grey?logo=cloudinary&logoColor=3448C5)](https://cloudinary.com) used for online static file storage.



## Database Design

For all information related to the backend please reffer to the pp5api here : https://github.com/EfthymiaKakoulidou/pp5api

## Agile Development Process

### GitHub Projects

[GitHub Projects](https://github.com/EfthymiaKakoulidou/secrets/projects) served as an Agile tool for this project.
It isn't a specialized tool, but with the right tags and project creation/issue assignments, it can be made to work.

Through it, user stories, issues, and milestone tasks were planned, then tracked on a weekly basis using the basic Kanban board.

![screenshot](documentation/gh-projects.jpg)

### GitHub Issues

[GitHub Issues](https://github.com/EfthymiaKakoulidou/secrets/issues) served as another Agile tool.

It also helped with milestone iterations on a weekly basis.

- [Open Issues](https://github.com/EfthymiaKakoulidou/secrets/issues) [![GitHub issues](https://img.shields.io/github/issues/EfthymiaKakoulidou/secrets)](https://github.com/EfthymiaKakoulidou/secrets/issues)


- [Closed Issues](https://github.com/EfthymiaKakoulidou/secrets/issues?q=is%3Aissue+is%3Aclosed) [![GitHub closed issues](https://img.shields.io/github/issues-closed/EfthymiaKakoulidou/secrets)](https://github.com/EfthymiaKakoulidou/secrets/issues?q=is%3Aissue+is%3Aclosed)

    ![screenshot](documentation/closedissues.jpg)

### MoSCoW Prioritization

I've decomposed my Epics into stories prior to prioritizing and implementing them.
Using this approach, I was able to apply the MoSCow prioritization and labels to my user stories within the Issues tab.

- **Must Have**: guaranteed to be delivered (*max 60% of stories*)
- **Should Have**: adds significant value, but not vital (*the rest ~20% of stories*)
- **Could Have**: has small impact if left out (*20% of stories*)
- **Won't Have**: not a priority for this iteration


## Testing

> [!NOTE]  
> For all testing, please refer to the [TESTING.md](TESTING.md) file.

## Deployment

The live deployed application can be found deployed on [Heroku](https://secrets-276f7be740ae.herokuapp.com).

### PostgreSQL Database

This project uses a PostgreSQL database.
Log in to ElephantSQL.com to access your dashboard.
Click “Create New Instance”.
Set up your plan. Give your plan a Name (this is commonly the name of the project)
Select the Tiny Turtle (Free) plan
You can leave the Tags field blank.
Select “Select Region”.
Select a data center near you.
Check your details are correct and then click “Create instance”.


### Heroku Deployment

This project uses [Heroku](https://www.heroku.com), a platform as a service (PaaS) that enables developers to build, run, and operate applications entirely in the cloud.

Deployment steps are as follows, after account setup:

- Select **New** in the top-right corner of your Heroku Dashboard, and select **Create new app** from the dropdown menu.
- Your app name must be unique, and then choose a region closest to you (EU or USA), and finally, select **Create App**.
- From the new app **Settings**, click **Reveal Config Vars**, and set your environment variables.


Heroku needs three additional files in order to deploy properly.

- requirements.txt
- Procfile

You can install this project's **requirements** (where applicable) using:

- `pip3 install -r requirements.txt`

If you have your own packages that have been installed, then the requirements file needs updated using:

- `pip3 freeze --local > requirements.txt`

The **Procfile** can be created with the following command:

- `echo web: gunicorn app_name.wsgi > Procfile`
- *replace **app_name** with the name of your primary Django app name; the folder where settings.py is located*


For Heroku deployment, follow these steps to connect your own GitHub repository to the newly created app:

Either:

- Select **Automatic Deployment** from the Heroku app.

Or:

- In the Terminal/CLI, connect to Heroku using this command: `heroku login -i`
- Set the remote for Heroku: `heroku git:remote -a app_name` (replace *app_name* with your app name)
- After performing the standard Git `add`, `commit`, and `push` to GitHub, you can now type:
	- `git push heroku main`

The project should now be connected and deployed to Heroku!

### Local Deployment

This project can be cloned or forked in order to make a local copy on your own system.

For either method, you will need to install any applicable packages found within the *requirements.txt* file.

- `pip3 install -r requirements.txt`.


Once the project is cloned or forked, in order to run it locally, you'll need to follow these steps:

- Start the React app: `npm start`
- Stop the app once it's loaded: `CTRL+C` or `⌘+C` (Mac)
- Everything should be ready now, so run the Django app again: `python3 manage.py runserver`


#### Cloning

You can clone the repository by following these steps:

1. Go to the [GitHub repository](https://github.com/EfthymiaKakoulidou/secrets) 
2. Locate the Code button above the list of files and click it 
3. Select if you prefer to clone using HTTPS, SSH, or GitHub CLI and click the copy button to copy the URL to your clipboard
4. Open Git Bash or Terminal
5. Change the current working directory to the one where you want the cloned directory
6. In your IDE Terminal, type the following command to clone my repository:
	- `git clone https://github.com/EfthymiaKakoulidou/secrets.git`
7. Press Enter to create your local clone.

Alternatively, if using Gitpod, you can click below to create your own workspace using this repository.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/EfthymiaKakoulidou/secrets)

Please note that in order to directly open the project in Gitpod, you need to have the browser extension installed.
A tutorial on how to do that can be found [here](https://www.gitpod.io/docs/configure/user-settings/browser-extension).

#### Forking

By forking the GitHub Repository, we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original owner's repository.
You can fork this repository by using the following steps:

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/EfthymiaKakoulidou/secrets)
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. Once clicked, you should now have a copy of the original repository in your own GitHub account!


## Credits

I used the walkthrough "Moments" from the Code Institute's LMS to help me structure my project.

### Content

| Source | Location | Notes |
| --- | --- | --- |
| [Markdown Builder](https://tim.2bn.dev/markdown-builder) | README and TESTING | tool to help generate the Markdown files |
| [W3Schools](https://www.w3schools.com/howto/howto_js_topnav_responsive.asp) | entire site | responsive HTML/CSS/JS navbar |
| [Bootstrap Documentation](https://getbootstrap.com/docs/4.1/getting-started/introduction/) | entire site |  |
| [Github](https://github.com/) |  |  |


### Media

All the content I used for this project is fictional and is owned by me or by close friends whom I got permission from to use.

### Acknowledgements

- I would like to thank my Code Institute mentor, Iuliia Konovalova for her support throughout the development of this project.
- I would like to thank the [Code Institute](https://codeinstitute.net) tutor team for their assistance with troubleshooting and debugging some project issues.
- I would like to thank the [Code Institute Slack community](https://code-institute-room.slack.com) for the moral support; it kept me going during periods of self doubt and imposter syndrome.
- I would like to thank my partner for helping me to make this transition into software development.

