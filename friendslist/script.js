// JS here
Parse.initialize("eLTSZF2K5mb2vsygQGmYgNGHeX0WWyaDG5eJJKJa","O8aMzJVdw1Ir0wlKVuljACqhUwXY9zi4NXVkUeNr"); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
Parse.serverURL = 'https://parseapi.back4app.com/';

const newBtn = document.getElementById("newbtn");
const editBtns = document.querySelectorAll(".fa-edit");
const addFriendForm = document.getElementById("add-friend");
const editFriendForm = document.getElementById("edit-friend");
const friendList = document.querySelector("main ol");
//gets all inputs in #add-friend form except submit button
const inputs = document.querySelectorAll("#add-friend input:not([type=submit])");

newBtn.addEventListener("click", function(event){
    event.preventDefault();
    addFriendForm.className = "add-friend-onscreen";
})

addFriendForm.addEventListener("submit", function(event){
    event.preventDefault();
    console.log('entered');
    addFriend();
});

async function addFriend() {
    const newFriend = {};

    for (let i = 0; i < inputs.length; i++) {
        let key = inputs[i].getAttribute('name');
        let value = inputs[i].value;
        newFriend[key] = value;
    }
    if(newFriend.fname != "" && newFriend.lname !="" && newFriend.email !=""){
        const newFriendData = new Parse.Object('Friends');
        newFriendData.set('fname', newFriend.fname);
        newFriendData.set('lname', newFriend.lname);
        newFriendData.set('email', newFriend.email);
        newFriendData.set('facebook', newFriend.facebook);
        newFriendData.set('twitter', newFriend.twitter);
        newFriendData.set('instagram', newFriend.instagram);
        newFriendData.set('linkedin', newFriend.linkedin);
        try {
            const result = await newFriendData.save();
            console.log('friends created', result);
            resetFormFields();
            addFriendForm.className = "add-friend-offscreen";
            friendList.innerHTML ='';
            displayFriends();
        } catch (error) {
            console.error('Error while creating friend: ', error);
        }
        // add to B4A db
        // update the DOM
        // close the form
    }else{
        addFriendForm.className = "add-friend-offscreen";
    }
}

for (let i = 0; i < editBtns.length; i++) {
    editBtns[i].addEventListener("click", function(event){
        event.preventDefault();
        editFriendForm.className = "edit-friend-onscreen";
    })
}

editFriendForm.addEventListener("submit", function(event){
    event.preventDefault();
    editFriendForm.className = "edit-friend-offscreen";
})

async function displayFriends() {
    const friends = Parse.Object.extend('Friends');
    const query = new Parse.Query(friends);

    try {
        const results = await query.ascending('lname').find();
        //console.log(results);

        results.forEach(function(eachFriend) {
            const id = eachFriend.id;
            const lname = eachFriend.get('lname');
            const fname = eachFriend.get('fname');
            const email = eachFriend.get('email');
            const facebook = eachFriend.get('facebook');
            const twitter = eachFriend.get('twitter');
            const instagram = eachFriend.get('instagram');
            const linkedin = eachFriend.get('linkedin');

            const theListItem = document.createElement("li");
            theListItem.setAttribute("id", `r-${id}`);
            theListItem.innerHTML = `
                    <div class="name">
                        ${fname} ${lname}
                    </div>
                    <div class="email">
                        <i class="fas fa-envelope-square"></i> ${email}
                    </div>
                    <div class="social">
                        <a href="${facebook}"><i class="fab fa-facebook-square"></i></a>
                        <a href="${twitter}"><i class="fab fa-twitter-square"></i></a>
                        <a href="${instagram}"><i class="fab fa-instagram"></i></a>
                        <a href="${linkedin}"><i class="fab fa-linkedin"></i></a>
                    </div>
                    <i class="fas fa-edit" id="e-${id}"></i>
                    <i class="fas fa-times-circle" id="d-${id}"></i>`;
            friendList.append(theListItem);
        });
    } catch (error) {
        console.error('Error while fetching Friends', error);
    }
}

displayFriends();

// Helper functions
function resetFormFields() {
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("fbook").value = "https://facebook.com";
    document.getElementById("twitter").value = "https://twitter.com";
    document.getElementById("insta").value = "https://instagram.com";
    document.getElementById("linkedin").value = "https://linkedin.com";
}