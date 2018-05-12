Template.yapsList.helpers({
  yaps: function() {
    return Yaps.find({}, {sort: {score: 1}}).fetch().reverse();
  }
});

Template.yapsList.helpers({
  check_post: function () { return Yaps.find().count() == 0 }
});


Template.yapItem.helpers({
  isClicked: function () { 
    return clicked = true; }
});