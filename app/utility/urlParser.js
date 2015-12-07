/**
 * Created by pheadra on 7/7/15.
 */
let urlParser = (function(){
  class urlParser {
    constructor() {
      this.urlregx = {
        image: {
          cdn: /^moncast:\/\/image\/cdn\/([^\?]+)\??(.*)/,
          akamai: /^moncast:\/\/image\/akamai\/([^\?]+)\??(.*)/,
          youtube: /^moncast:\/\/image\/youtube\/([^\/]+)\/?([^\/]*)\/?([^\/]*)/,
          wecandeo: /^moncast:\/\/image\/wecandeo\/(.+)/
        },
        video: {
          youtube: /^moncast:\/\/video\/youtube\/([^\/]+)\/?(.*)/,
          wecandeo: /^moncast:\/\/video\/wecandeo\/([^\/]+)\/?(.*)/,
          wecandeo_live: /^moncast:\/\/live\/wecandeo\/([^\/]+)\/?(.*)/,
          wecandeo_live_http: /^http:\/\/api.wecandeo.com\/live\/cast(\.m3u8)?\?k=(.*)/
        },
        banner: {
          collage: /^moncast:\/\/collage\/[^\/]*\/?(.+)/,
          video: /^moncast:\/\/feed\/video\/(.+)/,
          images: /^moncast:\/\/feed\/images\/(.+)/,
          video_legacy: /^moncast:\/\/feed\/(.+)/,
          images_legacy: /^moncast:\/\/images\/(.+)/
        },
        inbox: {
          feed: /^moncast:\/\/feed\/[^\/]+\/(\w+)(\/image\/(\w+))?\??(.*)/,
          collage: /moncast:\/\/collage\/[^\/]+\/(\w+)(\/video\/(\w+))?\??(.*)/,
          channel: /^moncast:\/\/channel\/(\w+)/
        }
      };
      this.target = '';
      this.result = [];
    }

    _parseTarget(regx, uri) {
      for(var key in regx) {
        const arr = regx[key].exec(uri);
        if (arr) {
          this.target = key;
          this.result = arr;
          return;
        }
      }
    }

    parseImage(url) {
      this._parseTarget(this.urlregx.image, url);
      let path = '';
      let params = '';
      let vid = '';
      let ext = '';
      let size = '';
      switch (this.target) {
        case 'cdn':
          path = this.result[1];
          params = this.result[2];
          //d29tx95ilpbem4.cloudfront.net
          //assets2.moncast.com
          //aka-test.moncast.com
          return "//assets2.moncast.com/" + path + "?" + params;
        case 'akamai':
          path = this.result[1];
          params = this.result[2];
          return "//assets.moncast.com/" + path + "?" + params;
        case 'youtube':
          vid = this.result[1];
          size = this.result[2] || 'hqdefault';
          ext = this.result[3] || 'jpg';
          return "//i.ytimg.com/vi/" + vid + "/" + size + "." + ext;
        case 'wecandeo':
          path = this.result[1];
          return "//timgs.wecandeo.com/" + path;
        default:
          return uri;
      }
    }

    parseVideo(url) {
      this._parseTarget(this.urlregx.video, url);

      switch (this.target) {
        case 'youtube':
          return {
            vendor: this.target,
            vid: this.result[1]
          };
        case 'wecandeo':
          return {
            vendor: 'wecandeo',
            src: "//play.wecandeo.com/video/v/?key=" + this.result[1] + "&auto=true"
          };
        case 'wecandeo_live':
          return {
            vendor: 'wecandeo',
            src: "//play.wecandeo.com/live/v?key=" + this.result[1] + "&auto=true"
          };
        case 'wecandeo_live_http':
          return {
            vendor: 'wecandeo',
            src: "//play.wecandeo.com/live/v?key=" + this.result[2] + "&auto=true"
          };
        default:
          return url;
      }
    }

    parseBanner(url) {
      this._parseTarget(this.urlregx.banner, url);

      if (this.target === 'collage') {
        return {
          state: 'COLLAGE',
          feedId: this.result[1],
          url: "/g/" + this.result[1]
        };
      } else if (this.target) {
        return {
          state: 'DETAIL',
          feedId: this.result[1],
          url: "/v/" + this.result[1]
        };
      } else {
        return {
          url: url
        };
      }
    }

    parseInbox(url) {
      var channelId, params, result, target, _getParams;
      result = [];
      target = '';
      _.each(_regx.inbox, function (pattern, key) {
        var arr;
        arr = pattern.exec(uri);
        if (arr) {
          target = key;
          return result = arr;
        }
      });
      _getParams = function (array) {
        var _pairs, _result;
        _result = {};
        _pairs = array.split('&');
        _.each(_pairs, function (pair) {
          var _pair;
          _pair = pair.split('=');
          return _result[_pair[0]] = _pair[1];
        });
        return _result;
      };

      switch (target) {
        case 'feed':
          params = _getParams(result[result.length - 1]);
          params['id'] = result[1];
          if (result[2]) {
            params['image'] = result[3];
          }
          return "DETAIL(" + (JSON.stringify(params)) + ")";
        case 'collage':
          params = _getParams(result[result.length - 1]);
          params['id'] = result[1];
          if (result[2]) {
            params['vid'] = result[3];
          }
          if (result[2]) {
            return "COLLAGE_DETAIL(" + (JSON.stringify(params)) + ")";
          }
          return "COLLAGE(" + (JSON.stringify(params)) + ")";
        case 'channel':
          channelId = result[1];
          return "CHANNEL({id:'" + channelId + "'})";
      }
    }

    httpFormat(url) {
      let uri = '';
      const httpRegx = /^(https?)?:?\/\/(.*)/;
      var result = httpRegx.exec(uri);
      if (!result[1]) {
        uri = 'http://' + result[2];
      }
      return uri;
    }
  }
  return new urlParser()
})()

export default urlParser
