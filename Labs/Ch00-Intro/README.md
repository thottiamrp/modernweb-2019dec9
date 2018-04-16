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
    * Each item is 1. This makes it easy to add items in between and not need to renumber.

1. Open this README.md (markdown) file in formatted view in VSCode by clicking the icon in the upper-right which says open Preview to the Side.   

1. Notice that you can see both source and formatted version side by side. Notice if you scroll the formatted view, the source scrolls as well. 

1. Now close the formatted view.

1. Another way to open the formatted view is by right-clicking the .md file in the Explorer view and choosing Open Preview. 

 1. While in Preview mode, if you double-click an area of the file, you will be taken back to the source markdown file for editing. 

1. While viewing in the markdown edit view, switch to the formatted view by pressing Ctrl+Shift+V in the editor. 

1. You can also open the GitHub repository and browse to the directory containing the README.md files.

## Part 2 - Practice with Git and discard changes:

1. In the `/Demos` you will be running demos and making changes to files. In the `/Labs` folders you will be reading instructions and copying files as starting points. 

    This is safe, because the Demos and Labs folders are tracked by Git. If you make changes to these files, the VSCode source control icon (The Y looking icon in the vertical menu strip) will display a number for each file changed. 
    
    You can always revert to the original files by clicking this icon, seeing the list of files that have been changed,and discarding the changes from one or all files. Test this now by adding spaces to this README file and hitting CTRL-S to save.   

1. You should see a number now. Click the Git icon and you will see the README.md and any other files you have changed listed. You can individually discard changes, or discard all changes from the menu.

1. Files and directories listed in the .gitignore file will be ignored. (and not counted among those files changed) Open the .gitignore file and notice that a directory called /WIP will be ignored. 

## Part 3 - Use VSCode to create the `WIP` directory:

1. Ensure that the folder you have opened in VSCode is the one for this course. At the root of this folder are the `/Demos` and `/Labs` directories. The name of the folder is what is displayed in bold,  after the list of Open Editors:

    Ex. 155IntroModernWeb, 555IntermediateModernWeb, etc.
    
1. Once you are sure you are in this folder, You can right-click in the space under the current files/directories, and choose New Folder. Name the new Folder `WIP`. You will be working in this directory for much of the course. 

1. If working on a Lab machine, you will be able to zip this directory and transfer it off of the lab machine to preserve your work.

1. Please mark your work as complete

