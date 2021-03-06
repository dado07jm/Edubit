export const EqualText = (text1, text2) => {
  if (text1 === text2) {
    return true;
  } else {
    return false;
  }
};

export const isEmail = (text) => {
  const emailRegExp =
    /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

  if (emailRegExp.test(text)) {
    return true;
  } else {
    return false;
  }
};

export const isText = (text) => {
  const textegExp = /^[A-Z ]+$/i;

  if (textegExp.test(text.trim())) {
    return true;
  } else {
    return false;
  }
};

export const isNumber = (text) => {
  const textegExp = /^[0-9]+$/i;

  if (textegExp.test(text.trim())) {
    return true;
  } else {
    return false;
  }
};

export const formatToCurrency = (amount) => {
  return parseFloat(amount)
    .toFixed(4)
    .replace(/\d(?=(\d{3})+\.)/g, "$&,");
};

export const convertDate = (timestamp) => {
  const d = new Date(timestamp);
  //const formattedTime = d.toUTCString(timestamp);
  const formattedTime =
    [d.getDate().padLeft(), (d.getMonth() + 1).padLeft(), d.getFullYear()].join(
      "/"
    ) +
    " " +
    [
      d.getHours().padLeft(),
      d.getMinutes().padLeft(),
      d.getSeconds().padLeft(),
    ].join(":");
  return formattedTime;
};

// eslint-disable-next-line no-extend-native
Number.prototype.padLeft = function (base, chr) {
  var len = String(base || 10).length - String(this).length + 1;
  return len > 0 ? new Array(len).join(chr || "0") + this : this;
};
