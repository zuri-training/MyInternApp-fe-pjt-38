# MyInternApp-fe-pjt-38

MyIntern app is a job web app targeted at students at the tertiary level of education. This app will help students who are looking for temporary jobs they can take up during their school breaks, or part-time jobs they can do while in school. This will give them an opportunity to gain experience and also earn money. Employers who need interns for a short period (2weeks - 3 months) will register their needs on the Intern app with the full details of the job description and employment terms. The app verifies the employer and ensures that they are a legitimate business or company. Students can register on the app, upload their CV and other works, and apply for available job positions depending on the location, job duration, job category.

## Details
  A WebApp where students of tertiary institutions can apply for jobs openings which they can do while on short breaks or holidays. 

  Students in tertiary institutions:   A lot of students during school breaks or holidays need jobs to undertake in order to polish their skills or learn new things. Individuals or companies usually are in need of contract or freelance staff. The app will try to bridge the gap of matching tertiary institution students, who are willing to work for a short time, to legitimate companies who also need their services for a short period of time. The app will attempt to protect the interest of the two parties.
 
### Benefits
Students get to work on real-life projects.
Students get to learn about the work environment cultures even before they leave school.
Students gain experience which is good for their CV. 
Employers can hire students depending on their location, availability, and job description.


## INSTRUCTIONS
### STEPS To Collaborate on the Repository

Step 1. To Access the repository link, you may go through the invitation email sent, then Click on the FORK button on the upper right-hand Corner of the Repo page to fork a copy of the repository.

Step 2. CLONE the repository by clicking on the CODE button, Copy the URL  without quotes   by running > git clone "git@github.com:zuri-training/MyInternApp-fe-pjt-38.git".

Step 3.To collaborate, you need to have a new branch for your feature, give it a name that best describes the feature you are adding
    to create a new branch run>    git checkout -b branchName 

Step 4: After creating a new branch you need to set the upstream to the original repository which you cloned from by running

    > git remote add upstream https://github.com/zuri-training/MyInternApp-fe-pjt-38

Step 5: run > git pull upstream develop, To make sure that you have the upstream

step 6: Add the create files for your work in their folders, for example if you are creating a page, add page-name.css to the css folder, add page.html to the root folder, add page.js to the js folder.

Step 7: Now Add your changes in your terminal/cmd interface by running 
      > git add .

Step 8: Commit your message by running 
      > git commit -m "feat: name of the feature you added"

      Note: If it's a bug fix, use "bug:message" for branch and commit message


Step 9: After committing your changes, 

      run > git pull upstream develop (to make sure your branch is still up to date with develop branch)

Step 10: Now run > git push origin your-branch-name


STEPS TO CREATING A PULL REQUEST

Step 1: After pushing your commit to github, navigate to your forked repository page on github where you pushed your commit.

Step 2: At the top part of the page you should see a dropdown section titled ‘Branch:main; select in the dropdown, the branch that contains your commits. The default is usually the main branch.

Step 3: At the right side of the branch menu, you would see a button ‘New Pull Request’; click on the button. This should take you to the original page i.e the page of the repository that you cloned.

        NOTE**  make a pull request to the develop branch, not main branch,

Step 4: Scroll down the page, click on the green button titled ‘Create pull request’. Type in a title and a description for your pull request. Once you are done inputting your title and description, click on create pull request. This should create a pull request for you, your request will be reviewed and merged.

HOW TO LINK YOUR ISSUES WITH PULL REQUEST
step 1: on the repository, click on the ISSUE tab,
Step 2: you should see lists of issues, where you can see the one you need to resolve, click on you the ISSUE assigned to you, 
Step 3: under the comment, edit it and add the keyword "Closes" before the initial comment text. your pr will be automatically linked to your ISSUES and the issue will be closed when your Pull request has been reviewed and merged.

Dont forget to pull from develop branch before you push, thank you.