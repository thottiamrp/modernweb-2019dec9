# Chapter 0: Intro

## Objectives    
* Practice with markdown files 
* Practice with VSCode
* Install VS Code extensions
* Create new repository using GitHub
* Commit your changes

### Part 1 - Viewing Markdown .md files in Edit & Preview Mode

    Many web projects and tools today are stored in repositories which make use of markdown files to share information about projects - such as this README.md (ending in the extension `.md`). For example GitHub uses the README.md in the root directory of a repository to display information about the project.

    When using VS Code to open `.md` files - the files open in edit mode. In edit mode, special characters are used to indicate the meaning of text and how to display it in Preview Mode, which is how it will also display in browsers. 

    There are multiple ways to open markdown files in preview mode in VSCode. You will practice opening and viewing this README.md in different ways to learn about markdown files as we will be using them during class labs and to run demos.


1. While viewing this README.md file in Edit Mode in VSCode - an icon is visible in the upper right of the VSCode window - which looks like a rectangle with a dark T in the middle and a magnifying glass. 
    Hover over this icon, it says "Open Preview to the Side". Click this icon.

    Notice that you can now see both source and formatted version side by side. You can choose to click the Explorer icon (by default first one in top of vertical menu) to hide it, giving you more room to compare the open files. Click the icon a couple of times and notice it is a toggle button. All of the icons in this vertical menu can be toggled to give you more room to work.
    
    With both Edit mode and preview mode open in split panes, notice that if you scroll in one, the other scrolls as well. 

1. Compare Edit mode and Preview Mode:

    * Hash marks (#), are used for formatting headings.
        * A single # is heading "level 1" which is biggest, ## is "level 2", slightly smaller, and so on.
    * An asterisk is used for making a bullet.
        * Tabs are used for indentation of bullets.
    * Text can be made bold and red by using `backticks` around words.
    * Every item is numbered as 1, when the markdown file is rendered: in preview mode or in browsers - the numbers will increment correctly.
        * This makes it easy to insert new items or re-order items, without needing to take the time to renumber.

1. Close the formatted view by hitting the X for that window.

1. While clicked into the Edit view of this README.md, hit control-shift-V. This will  open the preview in a new tab. Close the Preview mode.

1. Another way to open the formatted view is by right-clicking the .md file in the Explorer view and choosing Open Preview. 
    * Bring back the Explorer view pane if you have closed it by clicking the Explorer icon 
    * While in Preview mode, if you double-click an area of the file, you will be taken back to the source markdown file for editing. 

1. Another way to view README.md files during the course is to visit the course repository on Github and navigate to the appropriate /Labs chapter folder.

1. For the rest of this exercise, view this file in Preview mode. 

## Part 2 - Toggle the left pane

1. Ensure the Explorer view is visible, listing the files/directories. Recall to click the icon if the view is hidden. 

1. Understanding the directories
    * The `/Demos` directory will be used for running demos.
    * The `/Labs` directory will be used for instructions and some libraries for the hands-on exercises you will be doing in class. 

        * It is safe to modify these files, because the Demos and Labs folders are tracked by Git. 
        * If you make and save changes to any of these files, the VSCode source control icon (The Y looking icon in the vertical menu strip) will display a number for each file changed. 
        * You can always revert to the original files by clicking this source control icon, and discarding the changes from one or all files. 
    * Practice Bonus problems are available for CSS and JS.
    * The z_cheatsheets has shortcuts and links for what we will be discussing in class.

1. Making changes to the repository.
    
    a. While viewing this README.md file in Edit Mode (recall you can double click preview to get there), in the space provided below, type in your name.

    **Name: Put Your name here**
    
    b. Save this file by clicking the drop-down menu File | Save or by hitting CTRL-S to save. (get used to Ctrl-S if you are not already it will save you a lot of time.)

    c. Now that your change has been saved, look at the Source Control icon in the  left-side navigation bar. You should see a number now. 
    
    d. Click on this icon.  This displays a list of files that have been changed. In this case, you should only see one file, this README.md. 
        
    * You can discard changes made in a single file by hovering over the file to reveal a menu, and clicking the circular arrow with the title of "Discard Changes". Hover over README.md and click the Discard Changes. The number should then disappear.  

    * If you end up with many changes, you can discard all changes by hovering over the word CHANGES to reveal a menu on that level, and clicking on the undo icon.


### Part 2: Install VS Code extensions:

    To install extensions, look on the left side bar menu of VS Code and click on the `Extensions` icon or use the shortcut (Ctrl + Shift + X). Type into the Extensions Marketplace search field to find `Open in Browser`. When you've found the extension, install it by pressing the green `Install` button. Wait for the install to complete and then press the blue `Reload` button that appeared in the same location as the green `Install` button.


1. Install a VS Code Extension called `Open in Browser` if you do not have it already installed. 

    This extension will allow us to easily open our HTML files on the browser.

1. Follow a similar workflow as explained in Step 1 to download another VS Code Extension called `GitLens -
Git supercharged`

    GitLens supercharges the Git capabilities built into Visual Studio Code. It helps you to visualize code authorship at a glance via Git blame annotations and code lens, seamlessly navigate and explore Git repositories, gain valuable insights via powerful comparison commands, and so much more.

### Part 3 - Create new MyWebCourse repository using GitHub

1. You will be creating a repository in GitHub and for working locally. Open a command prompt to c:\ and execute these commands - putting YOUR name and your email in quotes.
    ```
    git config --global user.email "you@example.com"
    git config --global user.name "Your Name"
    ```

1. Create a directory on C:\ called `MyWebCourse`

1. Open a command prompt to the c:\ directory. Use mkdir to create a new directory called MyWebCourse:

    ```
    mkdir MyWebCourse
    ```

1. Navigate to https://GitHub.com/ and sign into an existing account of yours or sign up for a new account.

1. After logging into GitHub, create a new GitHub repository called `MyWebCourse` by either selecting the `Start a Project` button on the center of the page or the `New` green button on the left hand `Repositories` panel

    Leave the checkbox for `Initialize this repository with a README` unchecked and select `Create Repository`

1. Copy the list of commands from the section `…or create a new repository on the command line` and paste them into the windows Command Prompt we opened in Step 2 that is currently within the `MyWebCourse` directory. Press enter to execute the last line and your repository should have been created.

1. From the Command Prompt within `MyWebCourse` directory execute the command `code .` to open the project in VS Code.

1. Find the README.md file within the Explorer on the left side of VS Code and open it.

1. Edit the README.md file to include your name

1. Save the file, and notice the `Source Control` button on the left hand toolbar. It should now have a blue circle on it containing the number 1. This number indicates the number of files that have been changed locally.

1. Within the panel `Source Control` that opened, mouse over the README.md file; press the `+` button that appeared to stage the change. You can also stage the change by right clicking on the README.md and clicking `Stage Changes`. You should now see that `README.md` was added above to `Staged Changes`

1. Above `Staged Changes` you should see a text input field with the text `Message (press Ctrl+Enter to commit)`. Within this field enter a good commit message which describes the changes we staged in the previous step.

1. Click the check mark above the text message field to commit the changes made to README.md

1. Now that we have committed a change it is ready to be pushed to GitHub. Before pushing we always want to make sure we've pulled the latest changes from the remote repository, but since we're making the first changes we can go ahead and push. To push the commit to GitHub, click on the `...` button found on top of VS Code's git panel which was on the same level as the check mark. You can also click on the `Synchronize Changes` button found in blue on the bottom left of VS Code. This button will pull changes and then push commits made to the current branch we are on.

1. VS Code will prompt you to enter your GitHub credentials to push the changes, please do so now. If you navigate to GitHub, you should see the README.md is updated with your changes.

1. VS Code will continue to ask for your GitHub username and password every time it talks to GitHub. You can use a credential helper shown in the Windows example below:


    On Windows, running the following in the command line will store your credentials:

    ```
    $ git config --global credential.helper manager
    ```

    You can also do this by install a native Git shell, such as Git for Windows https://gitforwindows.org/ or cloning the repository using SSH, but we would need an administrator of the repository to explicitly allow your SSH key.

1. Tell Git to ignore files in a directory. 
    
    * Git includes a settings file called `.gitignore`
    * Any files or directories included in this file will not be included when you push changes up to the repository.
    * Add a file called `.gitignore`
    * Open this file and add this on the first line: local-only.txt 
    * Now create a new file called `local-only.txt` and inside add the text "This is a local file."
    * Save the file - and you should not see it being tracked by Git.
    * You will be adding files as you perform labs in the class.  You do not want these changes to be published to the repository.  In order to ensure this, you will create a directory to hold these files.  The GIT directory is in this .gitignore file.


1. On VS Code's left hand toolbar, click on the `GitLens` extension you installed earlier. This extension contains additional features.

1. Familiarize yourself with `GitLens'` panel. Notice how you can use it to access different repositories and their branches, remote, your stashes, etc. Also notice how you can navigate through it to see history of a file, a line, or compare files between different branches or between local and remote.

1. Please mark your work as complete. With your name tent card if in a classroom or by using method for online training. (spreadsheet, status symbol, etc.)
