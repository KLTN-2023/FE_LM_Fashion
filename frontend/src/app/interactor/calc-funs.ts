import * as R from 'rambda'
// ----------------------------------------------------------------------
type Key = string | number
// ----------------------------------------------------------------------
/**
    * @param x: number | string
    * @param y: number | string
    * @return number
*/
function add(x: Key, y: Key) {
    try {
        x = Number(x) || 0
        y = Number(y) || 0
    } catch (e) {
        return NaN
    }
    return R.add(x, y)
}

export { add }