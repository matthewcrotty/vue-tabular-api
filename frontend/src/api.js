/* eslint-disable */
class Api {
    postFile(File) {
        throw new EvalError("Abstract");
    }
    getFile() {
        throw new EvalError("Abstract");
    }
}

export default class MockApi extends Api {
    postFile(File) {
        new Promise(function(resolve, reject) {
          setTimeout(function() {
            resolve('successful return');
          }, 300);
        });        
    }
    getFile() {

    }
}
