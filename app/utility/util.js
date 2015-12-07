/**
 * Created by pheadra on 7/7/15.
 */
export default {
  /**
   * return {bool} : true {}
   */
  emptyObjectCheck(object){
    return object != undefined && Object.keys(object).length != 0
  },
  emptyArrayCheck(object){
    return object != undefined && object.length != 0
  }
}
