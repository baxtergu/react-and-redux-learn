function isPromise(obj) {
    return obj && typeof obj.then === 'function';
}

/*
export default function promiseMiddleware({dispatch}) {
  return next => action => {
    return isPromise(action) ? action.then(dispatch) : next(action);
  }
}
*/

export default function promiseMiddleware({ dispatch }) {
    return function (next) {
        return function (action) {
            // 新版本node中需要添加catch方法以免未捕获的promise异常导致node异常终止
            return isPromise(action) ? action.then(dispatch).catch(function(){}) : next(action);
        }
    }
}
