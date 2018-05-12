Meteor.methods({
  yapInsert: function(yap) {
    var postId = Yaps.insert({
      yap : yap, 
      score : 0, 
      submitted : new Date(), 
    });
  },
  commentInsert: function(comment) {
    Comments.insert(comment);
  }
});

