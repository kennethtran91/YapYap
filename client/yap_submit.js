Template.yapsSubmit.events({
  'submit .yapsSubmitForm': function(event) {
    event.preventDefault();
    var yap = event.target.yap.value; // get yap value
    // check if the value is empty
    if (yap == "") {
      alert("You can’t insert empty yap. Try to write something funny instead.");
    } else {
      Meteor.call('yapInsert', yap);
      //Router.go('yapsList');
      document.getElementById('yap').value ="";
    }
  }
});