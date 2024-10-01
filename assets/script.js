    const textArray = ["HELLO I AM AN IT STUDENT", "TA BUNAL!"];
    let textIndex = 0;
    let charIndex = 0;
    const typingDelay = 150; 
    const erasingDelay = 100; 
    const newTextDelay = 2000; 

    function type() {
      if (charIndex < textArray[textIndex].length) {
        document.getElementById("typing-effect").textContent += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
      } else {
        setTimeout(erase, newTextDelay);
      }
    }

    function erase() {
      if (charIndex > 0) {
        document.getElementById("typing-effect").textContent = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
      } else {
        textIndex++;
        if (textIndex >= textArray.length) textIndex = 0;
        setTimeout(type, typingDelay + 1100); // Start typing again
      }
    }

    document.addEventListener("DOMContentLoaded", function () {
      setTimeout(type, newTextDelay + 250);
    });
