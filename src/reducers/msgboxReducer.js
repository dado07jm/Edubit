const initialState = {
  title: "",
  msg: "",
  className: "",
  show: false,
  callback: null,
};

const types = {
  closeMsgBox: "[MSGBOX] closeMsgBox",
  showMsgBox: "[MSGBOX] showMsgBox",
};

//REDUCER
export const msgboxReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.closeMsgBox:
      return {
        title: "",
        msg: "",
        className: "",
        show: false,
        callback: null,
      };

    case types.showMsgBox:
      return {
        title: action.payload.title,
        msg: action.payload.msg,
        className: action.payload.className,
        show: true,
        callback: action.payload.callback,
      };

    default:
      return state;
  }
};

//ACTIONS
export const closeMsgBox = () => {
  return {
    type: types.closeMsgBox,
  };
};

export const showError = (title, msg) => {
  const className = "icon-cross msgbox__error";
  return {
    type: types.showMsgBox,
    payload: {
      title,
      msg,
      className,
    },
  };
};

export const showOk = (title, msg) => {
  const className = "icon-checkmark msgbox__ok";
  return {
    type: types.showMsgBox,
    payload: {
      title,
      msg,
      className,
    },
  };
};

export const showWarning = (title, msg, callback) => {
  const className = "icon-warning msgbox__warning";
  return {
    type: types.showMsgBox,
    payload: {
      title,
      msg,
      className,
      callback,
    },
  };
};
