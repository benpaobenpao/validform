const Type = require("@qdk/type");

let validRegObj = {
  email:
    /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/,
  phoneNumber: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
  date: /(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})/,
  cardNumber:
    /(^4[0-9]{12}(?:[0-9]{3})?$)|(^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$)|(3[47][0-9]{13})|(^3(?:0[0-5]|[68][0-9])[0-9]{11}$)|(^6(?:011|5[0-9]{2})[0-9]{12}$)|(^(?:2131|1800|35\d{3})\d{11}$)/,
  domain: /^((?!-)[A-Za-z0-9-]{1,63}(?<!-)\\.)+[A-Za-z]{2,6}$/,
  portNumber:
    /^((6553[0-5])|(655[0-2][0-9])|(65[0-4][0-9]{2})|(6[0-4][0-9]{3})|([1-5][0-9]{4})|([0-5]{0,5})|([0-9]{1,4}))$/,
  url: /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i,
  version:
    /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/,
  colorHex: /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
  emoji:
    /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/,
  uuid: /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/,
  ssn: /^(?!0{3})(?!6{3})[0-8]\d{2}-(?!0{2})\d{2}-(?!0{4})\d{4}$/,
  ip4: /(\b25[0-5]|\b2[0-4][0-9]|\b[01]?[0-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}/,
  ip6: /(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))/,
};

Object.keys(validRegObj).forEach((item) => {
  ValidData[item] = validRegObj[item];
});

function ValidData(desObj, valObj) {
  let keys = Object.keys(valObj);
  let objErr = {};
  let passType = "success";
  keys.forEach((item) => {
    objErr[item] = {};
    if (desObj.hasOwnProperty(item)) {
      let curVal = valObj[item];
      if (
        desObj[item].hasOwnProperty("transform") &&
        Type.instance(desObj[item].transform, Function)
      ) {
        curVal = desObj[item].transform(curVal);
      }

      let rules = desObj[item].rules;
      if (rules && rules.length) {
        let errorRules = rules.filter(
          (item) =>
            !item.hasOwnProperty("typeLevel") || item.typeLevel === "error"
        );
        let warnRules = rules.filter((item) => item.typeLevel === "warn");

        for (let i = 0, l = errorRules.length; i < l; i++) {
          let subItem = errorRules[i];
          if (Type.instance(subItem.rule, Boolean)) {
            if (curVal === "" || curVal === null || curVal === undefined) {
              objErr[item].errorMsg = subItem.msg;
              passType = "error";
              objErr[item].errType = passType;
              break;
            }
          }

          if (Type.instance(subItem.rule, RegExp)) {
            if (!subItem.rule.test(curVal)) {
              objErr[item].errorMsg = subItem.msg;
              passType = "error";
              objErr[item].errType = passType;
              break;
            }
          }

          if (Type.instance(subItem.rule, Function)) {
            if (!subItem.rule(curVal)) {
              objErr[item].errorMsg = subItem.msg;
              passType = "error";
              objErr[item].errType = passType;
              break;
            }
          }
        }

        for (let i = 0, l = warnRules.length; i < l; i++) {
          let subItem = warnRules[i];
          if (Type.instance(subItem.rule, Boolean)) {
            if (curVal === "" || curVal === null || curVal === undefined) {
              objErr[item].warnMsg = subItem.msg;
              if (passType == "success") {
                passType = "warn";
              }
              objErr[item].errType = passType;
              break;
            }
          }

          if (Type.instance(subItem.rule, RegExp)) {
            if (!subItem.rule.test(curVal)) {
              objErr[item].warnMsg = subItem.msg;
              if (passType == "success") {
                passType = "warn";
              }
              objErr[item].errType = passType;
              break;
            }
          }

          if (Type.instance(subItem.rule, Function)) {
            if (!subItem.rule(curVal)) {
              objErr[item].warnMsg = subItem.msg;
              
              if (passType == "success") {
                passType = "warn";
              }
              objErr[item].errType = passType;
              break;
            }
          }
        }
      }
    }
  });

  let resultInfo = {
    result: passType,
    rtObj: objErr,
    valObj: valObj,
    desObj: desObj,
  };

  if (passType === "success") {
    delete resultInfo.rtObj;
  }

  return resultInfo;
}

module.exports = ValidData;

