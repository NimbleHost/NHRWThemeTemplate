NHRWThemeTemplate
=================

It is considered best practice to include javascript files at the end of the closing `</body>` tag of a webpage, rather than in the `head`. This can present RapidWeaver theme developers with a challenge when there are theme options that require javascript, as that often requires a library like jQuery to be loaded first - which usually means there's no way to get around adding a bunch of javascripts files to the `head` tag.


The Workaround
--------------

NHRWThemeTemplate gets around this dilemma by only declaring javascript variables in the `head` tag. These variable can then be changed via options declared in the `Theme.plist` file. This approach allows developers to load jQuery and the theme's base script file after the body tag, then check the value of those variables and run any appropriate functions.


The Process
-----------

1. Add a single js file to the head tag, that declares all our variables (no logic, just object, namespace, and variable declarations).
2. Change the values of those variables for theme options that require javascript.
3. Pull in jQuery (or whichever javascript library you prefer) and the base script file after the body tag, then check the value of those variables and run any related functions.


Drawbacks
---------

If you have a bunch of theme options that require javascript, you'll still get dinged with a lot HTTP requests, but the file sizes are much smaller, and with no logic those HTTP requests shouldn't affect page loading times as much.