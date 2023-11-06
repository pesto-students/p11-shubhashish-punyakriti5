class CustomPromise {
  resolvedValue;
  rejectedError;

  isResolved = false;
  isRejected = false;

  thenFunc;
  catchFunc;

  constructor(executor) {
    const resolve = (value) => {
      this.resolvedValue = value;
      this.isResolved = true;
      if (typeof this.thenFunc === "function") {
      this.thenFunc(this.resolvedValue);
      }
    };
    const reject = (reason) => {
      this.rejectedError = reason;
      this.isRejected = true;
      if (typeof this.catchFunc === "function") {
      this.catchFunc(this.rejectedError);
      }
    };
    executor(resolve, reject);
  }
  then(fn) {
    this.thenFunc = fn;
    if (this.isResolved) {
    this.thenFunc(this.resolvedValue);
    }
    return this;
  }
  catch(cb) {
    this.catchFunc = cb;
    if (this.isRejected) {
    this.catchFunc(this.rejectedError);
    }
    return this;
  }
}
const myPromise = new CustomPromise((resolve, reject) => {
  // Resolve the Promise after 1 second
  // setTimeout(() => {
  //   reject('Success!');
  // }, 1000);
  reject("Success!");
});

myPromise
  .then((result) => {
    console.log(result + " then value"); // Output: Success!
  })
  .catch((error) => {
    console.error(error + " error value");
  });
