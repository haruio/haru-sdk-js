/**
 * Created by pheadra on 7/7/15.
 */

import AppDispatcher from '../dispatcher/AppDispatcher.js'
import AppConstants from '../constants/AppConstants.js'
import CreateStore from './CreateStore.js'

var _banners = [];
function GetBanners(banners) {
  _banners = banners;
}

const BannerStores = CreateStore({
  getBanners() {
    return _banners;
  }
});

BannerStores.dispatcherIndex = AppDispatcher.register(payload => {
  var action = payload.action; // this is our action from handleViewAction
  switch(action.actionType){
    case AppConstants.GET_BANNER:
      GetBanners(action.banners);
      BannerStores.emitChange();
  }
  return true;
});

export default BannerStores
