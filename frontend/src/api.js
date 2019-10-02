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
        let x = new Promise(function(resolve, reject) {
          setTimeout(function() {
            resolve(File);
          }, 300);
        });   
        x.then((value) => {
            console.log(value);
        });
    }
    getFile() {
        return new Promise(function(resolve, reject) {
            setTimeout(() => {
                resolve("test");
            }, 300);
        });
    }
}
