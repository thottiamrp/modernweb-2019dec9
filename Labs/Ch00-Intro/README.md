# Chapter 0: Intro
## Objectives
* Practice with Course Setup, VSCode and README.md files
* Create a WIP directory that will not be tracked by GIT

### Estimated Completion Time 
10 minutes

## Overview:
Most projects these days rely on using markdown files to share information about projects. By default, .md files open in edit mode. You will practice various ways of opening markdown files in an easier to read formatted way. 

## Part 1 - Viewing Markdown files:
1. If you are opening this file just by double-clicking it in VS Code, then you are viewing it as pure markdown.
    * Hash marks are used for formatting.
    * Every list item will show as a 1. This will be replaced in the preview mode with the correct item number.  This makes it easy to add items in between and not need to renumber.

1. Open this README.md (markdown) file in formatted view in VSCode by clicking the icon in the upper-right which says open Preview to the Side.   
    * Notice that you can see both source and formatted version side by side. 
    * Notice if you scroll the formatted view, the source scrolls as well. 

1. Now close the formatted view.

1. Another way to open the formatted view is by right-clicking the .md file in the Explorer view and choosing Open Preview. 
    
    * While in Preview mode, if you double-click an area of the file, you will be taken back to the source markdown file for editing. `(As of 4/23/2018 this is still a bug. It has been logged.)` 
    
    * While viewing in the markdown edit view, switch to the formatted view by pressing Ctrl+Shift+V in the editor. 

1. You can also open the GitHub repository and browse to the directory containing the README.md files.

## Part 2 - Practice with Git and discard changes:

1. Locate the Explorer on the left side of the screen.  You ay need to expand it by liking on the icon 9appears as two pages)

1. Understanding the directories
    * The `/Demos` directory will be used for running demos and making changes to files.
    * The `/Labs` directory will be used for instructions and copying files for the hands-on labs you will be doing in class. 

        * This is safe, because the Demos and Labs folders are tracked by Git. 
        * If you make and save changes to any of these files, the VSCode source control icon (The Y looking icon in the vertical menu strip) will display a number for each file changed. 
        *You can always revert to the original files by clicking this icon, and discarding the changes from one or all files. 
1. Making changes to files.
    
    a. In the space provided below, type in your name.
    
        Your name:
    
    b. Save this file by clicking File then Save or by hitting CTRL-S to save.  

    c. Now that you change has been saved, Look at the Source Control icon in the upper left navigation bar. You should see a number now. 
    
    d. Click on this icon.  To the right in the panel, you will see a list of files that have been changed.  You will only see the README.md listed. 
        
    * You can discard changes made in a single file by clicking on the undo icon.
    * You can discard all changes by clickin on the undo icon to the right of the word Changes at the top of the list.

1. Telling Git to ignore files in a directory. 
    
    * Git includes a settings file called .gitignore
    * Any files or directories included in this file will not be included in when you push changes up to the repository.
    * You will be adding files as you perform labs in the class.  You do not want these changes to be published to the repository.  In order to ensure this, you will create a directory to hold these files.  I have already added the directory reference to the .gitignore file.

## Part 3 - Use VSCode to create the `WIP` directory:

1. Ensure that you have the Explorer open in the navigation bar.

1. You should see the folder for this course listed. Within this folder you will see the `/Demos` and `/Labs` directories. The name of the folder is what is displayed in bold,  Ex. 155IntroModernWeb, 555IntermediateModernWeb, etc.
    
1. Create a folder to hold your working files

    a. Click on the Explorer icon inthe navigation bar onthe left.
    
    b. In the empty space at the bottom of the list, right-click and choose New Folder.
    
    c. Name the new Folder `WIP` - capitalized. You will be working in this directory for much of the course. 


1. If working on a Lab machine, you will be able to zip this directory and transfer it off of the lab machine to preserve your work.

1. Please mark your work as complete.

