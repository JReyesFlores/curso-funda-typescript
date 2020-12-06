type CallbackError=Error|null;
type CallBack=(error: CallbackError, response: Object) => void;
type SendRequest=(cb: CallBack) => void;

const sendRequest: SendRequest=(cb: any): void => {
    if (cb) {
        cb(null, {message: 'Todo salio bien!!!'});
    }
}