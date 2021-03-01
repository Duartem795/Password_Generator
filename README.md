# Password_Generator
Need a new password and can't use Passw0rd! for the twentieth time? Use this to quickly generate passwords!

*The Base Code*
The code started from a premade file which included HTML, CSS, and a baseline for the Javascript.

*Languages Used*
The project is done in HTML, CSS, and Javascript. All of the added code was done in Javascript.

*What was Done*
Upon clicking on the button to generate a password, a series of questions are asked to the user which allows them to choose how many and what kinds of characters (lowercase, uppercase, numbers, and special characters) are used for generating the password. If the user puts in invalid information or chooses not to have any characters used, a brief message telling them what went wrong occurs and a password is not generated (shows up as "undefined"). Upon receiving all of the user's criteria for the password, a password is generated which fulfills the user's inputs, which are completed via window alerts.

*Known Issues*
-The password generator has extremely rare chances of generating very simple passwords (such as 'aaaaaaaa'), with odds of 1/26^8 (1/208,827,064,576) if only lowercase letters are the chosen criteria. If something like this occurs, please do not use such a password, as a human could easily guess that.
-The password generator can occasionaly generate passwords that do not fill all of the criteria (such as c9lp8fq3, when capital letters are wanted). The odds of this occuring increase with shorter passwords with more criteria wanted (e.g. 8 characters with all four variables accounted for), but become more and more rare for longer passwords.

*Credits*
The original code belongs to the University of Arizona Virtual Coding Bootcamp.
