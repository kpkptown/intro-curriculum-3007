'use strict';
/**
 * 17の倍数である場合trueを返す。
 */
const seventeen = new Map();
function isMultipleOfSeventeen(num){
    if ( num % 17 === 0){
        return seventeen.set(seventeen, true);
    }
}
module.exports = {
    isMultipleOfSeventeen : isMultipleOfSeventeen
}


// 配列に含まれる整数が 17 で割り切れるものだけにする seventeen モジュールを実装しています。
// そのために、整数が 17 で割り切れるかどうかを判定する 
// isMultipleOfSeventeen 関数を seventeen モジュールに実装してください。