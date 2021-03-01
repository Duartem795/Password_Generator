// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
  var passLength = window.prompt("How many characters will the password contain? Enter any number between 8 and 128 (passwords with more characters are more secure).")

  //checking to see if the password length is actually a number and at least 8
  if (passLength >=8) {

    //checking to see if the password length is bewteen 8 and 128
   if (passLength <=128) {

    //at this point, the password length is set
    passLength = passLength

    var hasLow = window.confirm("Should the password contain lowercase letters?")

    //when you confirm lowercase letters, you go down this rabbit hole
    if (hasLow) {
      var hasUp = window.confirm("Should the password contain uppercase letters?")

      //now we have confirmed upper and lowercase letters
      if (hasUp) {
        var hasNum = window.confirm("Should the password contain numbers?")

        if (hasNum) {
          //yes lowercase, yes uppercase, yes numbers

          var hasSym = window.confirm("Should the password contain special characters, such as '$%#!' ?")

          //generate a password with all of the variables
          if (hasSym) {

            var length = passLength
            var password = '';
            var passID1111 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890`~!@#$%^&*()_+-=[]{}|;:,./<>?";
            for ( i = 0; i < length; i++) {
              password += passID1111.charAt(Math.floor(Math.random() * passID1111.length));
            }

            return password;

          //generate a password only without symbols
          } else {

            var length = passLength
            var password = '';
            var passID0111 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
            for ( i = 0; i < length; i++) {
              password += passID0111.charAt(Math.floor(Math.random() * passID0111.length));
            }

            return password;
            
          }
          
        } else {
          //*yes lowercase, yes uppercase, no numbers
          
          var hasSym = window.confirm("Should the password contain special characters, such as '$%#!' ?")

          //generate a password with all letters and symbols
          if (hasSym) {

            var length = passLength
            var password = '';
            var passID1011 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`~!@#$%^&*()_+-=[]{}|;:,./<>?";
            for ( i = 0; i < length; i++) {
              password += passID1011.charAt(Math.floor(Math.random() * passID1011.length));
            }

            return password;

          //generate a password with only letters
          } else {

            var length = passLength
            var password = '';
            var passID0011 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
            for ( i = 0; i < length; i++) {
              password += passID0011.charAt(Math.floor(Math.random() * passID0011.length));
            }

            return password;
          }
        }
        
      } else {
        //now we have lowercase, but no uppercase
        var hasNum = window.confirm("Should the password contain numbers?")
        
        if (hasNum) {
          //*yes lowercase, no uppercase, yes numbers
          var hasSym = window.confirm("Should the password contain special characters, such as '$%#!' ?")

          if (hasSym) {
            //generate a password with lowercase letters, numbers, and symbols
            var length = passLength
            var password = '';
            var passID1101 = "abcdefghijklmnopqrstuvwxyz1234567890`~!@#$%^&*()_+-=[]{}|;:,./<>?";
            for ( i = 0; i < length; i++) {
              password += passID1101.charAt(Math.floor(Math.random() * passID1101.length));
            }

            return password;

          } else {
            //generate a password with lowercase letters and numbers
            var length = passLength
            var password = '';
            var passID0101 = "abcdefghijklmnopqrstuvwxyz1234567890";
            for ( i = 0; i < length; i++) {
              password += passID0101.charAt(Math.floor(Math.random() * passID0101.length));
            }

            return password;
            
          }
          
        } else {
           //*yes lowercase, no uppercase, no numbers
           var hasSym = window.confirm("Should the password contain special characters, such as '$%#!' ?")

           if (hasSym) {
            //generate a password with lowercase letters and symbols
            var length = passLength
            var password = '';
            var passID1001 = "abcdefghijklmnopqrstuvwxyz`~!@#$%^&*()_+-=[]{}|;:,./<>?";
            for ( i = 0; i < length; i++) {
              password += passID1001.charAt(Math.floor(Math.random() * passID1001.length));
            }

            return password;
             
           } else {
             //generate a password with only lowercase letters
            var length = passLength
            var password = '';
            var passID0001 = "abcdefghijklmnopqrstuvwxyz";
            for ( i = 0; i < length; i++) {
              password += passID0001.charAt(Math.floor(Math.random() * passID0001.length));
            }

            return password;
             
           }
          
        }
        
      }
      
    //when you deny lowercase letters, go down this rabbit hole
    } else {
      var hasUp = window.confirm("Should the password contain uppercase letters?")

      if (hasUp) {
        //no lowercase, but has uppercase
        var hasNum = window.confirm("Should the password contain numbers?")

        if (hasNum) {
          //*no lowercase, yes uppercase, yes numbers
          var hasSym = window.confirm("Should the password contain special characters, such as '$%#!' ?")

          if (hasSym) {
            //generate a password with uppercase letters, numbers, and symbols
            var length = passLength
            var password = '';
            var passID1110 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890`~!@#$%^&*()_+-=[]{}|;:,./<>?";
            for ( i = 0; i < length; i++) {
              password += passID1110.charAt(Math.floor(Math.random() * passID1110.length));
            }

            return password;
            
          } else {
            //generate a password with uppercase letters and numbers
            var length = passLength
            var password = '';
            var passID0110 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
            for ( i = 0; i < length; i++) {
              password += passID0110.charAt(Math.floor(Math.random() * passID0110.length));
            }

            return password;
            
          }
          
        } else {
          //*no lowercase, yes uppercase, no numbers
          var hasSym = window.alert("Should the password contain special characters, such as '$%#!' ?")

          if (hasSym) {
            //generate a password with uppercase letters and symbols
            var length = passLength
            var password = '';
            var passID1010 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ`~!@#$%^&*()_+-=[]{}|;:,./<>?";
            for ( i = 0; i < length; i++) {
              password += passID1010.charAt(Math.floor(Math.random() * passID1010.length));
            }

            return password;
            
          } else {
            //generate a password with only uppercase letters
            var length = passLength
            var password = '';
            var passID0010 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            for ( i = 0; i < length; i++) {
              password += passID0010.charAt(Math.floor(Math.random() * passID0010.length));
            }

            return password;
            
          }
          
        }
        
      } else {
        //no uppercase, no lowercase
        var hasNum = window.confirm("Should the password contain numbers?")

        if (hasNum) {
          //*no lowercase, no uppercase, yes numbers
          var hasSym = window.confirm("Should the password contain special characters, such as '$%#!' ?")

          if (hasSym) {
            //generate a password with letters and symbols, for those grammaphobes.
            var length = passLength
            var password = '';
            var passID1100 = "1234567890`~!@#$%^&*()_+-=[]{}|;:,./<>?";
            for ( i = 0; i < length; i++) {
              password += passID1100.charAt(Math.floor(Math.random() * passID1100.length));
            }

            return password;
            
          } else {
            //generate a password with numbers only. I guess this is for your passcode into your phone or something.
            var length = passLength
            var password = '';
            var passID0100 = "1234567890";
            for ( i = 0; i < length; i++) {
              password += passID0100.charAt(Math.floor(Math.random() * passID0100.length));
            }

            return password;
            
          }
          
        } else {
          //*no lowercase, no uppercase, no numbers
          var hasSym = window.confirm("Should the password contain special characters, such as '$%#!' ?")

          if (hasSym) {
            //generate a password with only symbols. This will look really wierd
            var length = passLength
            var password = '';
            var passID1000 = "`~!@#$%^&*()_+-=[]{}|;:,./<>?";
            for ( i = 0; i < length; i++) {
              password += passID1000.charAt(Math.floor(Math.random() * passID1000.length));
            }

            return password;
          } else {

            //we can't generate a password since the user didn't want anything ¯\_(ツ)_/¯
            window.alert("Without any letters, numbers, or special characters, there is no password. Please try again.")
          }
          
        }
        
      }
      
    }

     
   } else {

    //if someone types a number greater than 128, they get this message
    window.alert("Please type in a NUMBER that is between 8 and 128.")
     
   }

  } else {

    //if someone types a number less than 8 or a non-number, they get this message
    window.alert("Please type in a NUMBER that is between 8 and 128.")
    
  }
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
