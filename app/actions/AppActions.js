/**
 * Created by pheadra on 7/7/15.
 */
import AppDispatcher from '../dispatcher/AppDispatcher.js'
import AppConstants from '../constants/AppConstants.js'
import request from 'superagent'


var AppActions = {
  getBanner: function(){
    request.get('http://api.aws.moncast.com:3000/v2/banners').end(function(err, res) {

      AppDispatcher.handleViewAction({
        actionType: AppConstants.GET_BANNER,
        banners : res.body.items
      })
    })
  }
}

module.exports = AppActions;
