#### Include an inline screenshot of your codeschool's points from the profile page:

<!-- Modify the Markdown to include your answers. Don't delete the questions! -->

##QUIZ
* Explain which tabs support the following actions and how.
  * Realtime editing of HTML and CSS 
  * Javascript Debugging
  * Performance Optimization 

  In order to edit HTML in realtime using Chrome’s DevTools, you’ll have to open up the inspector window by right-clicking the element you’d like to inspect. When the inspect window opens up, find the element you’d like to edit on the left column under the “Elements” tab located along the top of DevTools client. After you located the element, you can right-click the element and select “Edit as HTML” on the window that pops up.  After clicking on “Edit as HTML”, a small window will open up that includes the element you had originally selected to be edited. Once you edited the element, you can go ahead and press enter and your changes will be made to the webpage. 

Once your in the inspect window of DevTools, in order to edit existing CSS of the webpage your currently viewing, you’ll place your focus on the right-hand column under the “Styles” tab. As long as you selected the HTML tab on the left-column, the right-column will show you the CSS of the webpage. If you’d like to get the CSS of a particular element, you’ll have to locate that element on the HTML side, so that the left side will show the correct CSS for what you’re interested in.

When a bug is detected by DevTools, a small icon with a red circle with a white ‘x’ in the middle appears on the top right corner of the inspector client to the left of icon that toggles the “drawer” in order to show or hide it. You’ll want to hit the “Show Drawer” icon in order to see what the bug DevTools has discovered. Once the drawer is open, you’ll see in red text the type of error and what exactly has failed along with a link that follows of the .js source file and line number where the error first appears. From there, you’ll be able to edit the .js source file to fix the issue. 

In order to optimize performance of the webpage you’re viewing, you’ll use the “Network” and “Timeline” tabs in the inspect window. 


* What's the quick key for your OS to spawn the Dev Tools inspector?

Cmd + Opt + I 

* Go to http://www.postmachina.com/ and analyze and tweak this nicely designed page.
  * What is the current background color for the page?  (Surprisingly, it's not just black!)
    #0b0f11
  * Tweak the background color to white.
  * Tweak the height of the side bar that contains the logo.  Shrink it down to 85px.
  * Roll over the navigation links.  When you hover over them, they dissapear.  Let's change the hover color to black instead.
  * Now take a screenshot of your new (and maybe not so improved) design.  It should match this screenshot: http://postimg.org/image/5ak1jkpl5/
  * Upload your own image to the imgs directory in the `1_Chrome_Dev_Tools` directory.  It should match the image above. The last nav link in the image above is black because the mouse was hovering there when the screenshot was taken. Do the same, and don't take a screenshot of your whole desktop, just the browser window. (This is part of the challenge.)

* For the postmachina website, why can't you tweak the color of the text "The most important things are not things"?  Please explain.

You can. Within index.html, the above statement is placed within paragraph tags and manipulated off the page by CSS. If you change the text-indent from -9999px to 0px, it will the in the middle of the page. The only thing left is that it’s being covered by home_bg.gif. If you delete this picture, you’ll be able to see the results of tweaking the color of the above text.

* Go to www.ticketswizard.com and analyze the page.  
  * What is the largest image on the website? 
  * Explain how you would find out this information, and list the URL of offending image here and how big it is.

http://www.ticketswizard.com/Images/Catalog/92624182-c482-4a35-8da2-4fbf2f502e94_Large_Large.png - 316kb

I open up DevTools click on the “Network” tab. I hit the clear button and reload the page. Once the page is finished loading, I sort the files by size. At the top of the list, I click on the largest file and hit the “Preview” tab where the url is and file size.


* Test the www.ticketswizard.com website with google's [PageSpeed Insights](http://www.ticketswizard.com/).  (You can also download the chrome plugin).  What is the easiest thing to change to optimize the website?  How many kilobytes of data can be eliminated?

Optimizing the sites images will save 885.9KiB (39% reduction). That’s impressive.