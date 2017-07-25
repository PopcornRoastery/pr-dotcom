function signup(formObj) {
    let signupForm = document.getElementById('signup-form');
    let signupSuccess = document.getElementById('signup-success');
    let signupError = document.getElementById('signup-error');
    let signupBtn = document.getElementById('signup-button');
    let onSignupComplete = function (error) {
        signupBtn.disabled = false;
        if (error) {
            signupError.innerHTML = 'Sorry. Could not signup.';
        } else {
            signupSuccess.innerHTML = 'Thanks for signing up!';
            // hide the form
            signupForm.style.display = 'none';
        }
    };

    // Store emails to firebase
    let db = firebase.database();
    let newContact = db.ref('contacts').push();
    newContact.set({
        email: formObj.email.value,
        firstName: formObj.firstName.value
    });
    signupBtn.disabled = true;
    return false;
}