class Utils {

  serialize(obj: any): string {

    let hasAlias: boolean = !!obj._aliasMap;

    var str: string[] = [];

    for (let property in obj) {
      if (obj.hasOwnProperty(property)) {

        let propName = property;

        if (hasAlias) {

          let aliased = obj._aliasMap.filter(p => {
            return p.propertyName === property;
          });

          if (aliased.length) {
            propName = aliased[0].propertyAlias;
          }

        }

        let propValue: string;
        if (typeof obj[property] === "boolean") {
          propValue = obj[property] ? "1" : "0";
        } else {
          propValue = obj[property];
        }

        str.push(encodeURIComponent(propName) + "=" + encodeURIComponent(propValue));

      }
    }

    return str.join("&");

  }

  getTimezoneOffset(): number {
    return (new Date()).getTimezoneOffset();
  }

  getCurrentPageUrl(): string {
    return encodeURIComponent(window.location.href);
  }

  getCookieExpireDate(): string {
    let d = new Date();
    d.setTime(d.getTime() + (730 * 24 * 60 * 60 * 1000));
    return d.toUTCString();
  }

  guid(): string {
    function s4(): string {
      return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    return s4() + s4() + "-" + s4() + "-" + s4() + "-" + s4() + "-" + s4() + s4() + s4();
  }

}
