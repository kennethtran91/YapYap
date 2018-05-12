import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Router.route('/',{name: 'index'});
Router.route('/yap',{name: 'yapsList'});
Router.route('/yap/comments/:_id', {
    name: 'yapPage',
    data: function() {
    return Yaps.findOne(this.params._id);
    }
  });

