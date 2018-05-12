Template.yapItem.events({
  'click':function() {
    Session.set('selected_yap', this._id);
  },
  'click a.yes':function() {
      var postId = Yaps.findOne({_id:this._id})
      if ($.inArray(Meteor.userId(), postId.voted) !== -1) 
      {
        return "Voted";
      } else {
      var yapId = Session.get('selected_yap');
      Yaps.update(yapId, {$inc: {'score': 1 }});
      }
    
  },

  'click a.no':function() {
      var postId = Yaps.findOne({_id:this._id})
      if ($.inArray(Meteor.userId(), postId.voted) !== -1) {
      return "Ok";
    } else {
      var yapId = Session.get('selected_yap');
      Yaps.update(yapId, {$inc: {'score': -1 }});
      var postId = Yaps.findOne({_id:this._id});
      if (postId.score <= -3) {
        Yaps.remove({_id:this._id})
      }
    }
  
  }
});

Template.yapItem.helpers({
  commentsCount: function() {
    return Comments.find({postId:this._id}).count();
  }
});

// Template.yapsList.events({
//   'click a.cmt':function(){
//   Session.set("visible",true);
//   console.log("click");
//   }
// });

// Template.yapsList.helpers({
//   showForm:function(){
//   var show = Session.get('visible');
//   if(show === true){
//      return true;
//      console.log(show);
//   }else{
//      return false;
//    }
//   }
// });

// //to set the session to false on refresh.
// Template.yapsList.destroyed = function(){
//   Session.set('visible',false)
// };