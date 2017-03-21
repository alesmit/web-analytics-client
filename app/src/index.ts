/**
 * Expand Window object
 * ref: http://stackoverflow.com/questions/35237629/expand-typescript-definition-for-window-object
 */
interface Window {
  LibAnalytics: string;
}

/**
 * Client object
 */

interface ClientObject {
  q: Array<any>;
  setAccount(trackingId: string): void;
  trackPageview(): void;
}

let lib: ClientObject = window[window.LibAnalytics];

/**
 * Library object
 * @type {Analytics}
 */
let analytics = new Analytics();

/**
 * Client trigger: set tracking and client id
 * @param trackingId
 */
lib.setAccount = function(trackingId: string) {
  analytics.setTrackingId(trackingId);

  let clientId = analytics.getClientIdCookie();

  if (clientId === null) {

    analytics.setClientId(new Utils().guid());
    analytics.setClientIdCookie(analytics.getClientId());

  } else {
    analytics.setClientId(clientId);
  }

};

/**
 * Client trigger: track first page view
 */
lib.trackPageview = function() {
  new PageView().send();
};

for (var i = 0; i < lib.q.length; i++) {
  var fn = lib[lib.q[i][0]];
  if (typeof fn === "function") {
    fn.apply(null, Array.prototype.slice.call(lib.q[i], 1));
  }
}

window[window.LibAnalytics] = function(){
  var fn = lib[arguments[0]];
  if (typeof fn === "function") {
    fn.apply(null, Array.prototype.slice.call(arguments, 1));
  } else {
    throw new Error("Unknown function");
  }
};
