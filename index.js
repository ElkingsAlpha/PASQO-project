let signupBtn = document.getElementById("signupBtn");
      let signinBtn = document.getElementById("signinBtn");
      let nameFld = document.getElementById("nameFld");
      let title = document.getElementById("title");
      //   let emailFld = document.getElementById("emailFld");

      signinBtn.onclick = function () {
        nameFld.style.maxHeight = "0";
        // emailFld.style.maxHeight = "0";
        title.innerHTML = "Sign in";
        signupBtn.classList.add("disable");
        signinBtn.classList.remove("disable");
      };

      signupBtn.onclick = function () {
        nameFld.style.maxHeight = "60px";
        // emailFld.style.maxHeight = "0";
        title.innerHTML = "Sign up";
        signupBtn.classList.remove("disable");
        signinBtn.classList.add("disable");
      };