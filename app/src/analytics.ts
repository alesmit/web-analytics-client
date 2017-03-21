/**
 * This class contains Tracking ID and Client ID
 * involving also data stored in document.cookie
 */
class Analytics {

  private trackingId: string;
  private clientId: string;

  setTrackingId(trackingId: string) {
    this.trackingId = trackingId;
  }

  getTrackingId(): string {
    return this.trackingId;
  }

  setClientId(clientId: string) {
    this.clientId = clientId;
  }

  getClientId(): string {
    return this.clientId;
  }

  setClientIdCookie(clientId: string) {
    let expires: string = "expires=" + new Utils().getCookieExpireDate();
    document.cookie = new Config().cookieId + "=" + clientId + "; " + expires + "; path=/";
  }

  getClientIdCookie(): string {
    let value: string = "; " + document.cookie;
    let parts: string[] = value.split("; " + new Config().cookieId + "=");
    if (parts.length === 2) {
      return parts.pop().split(";").shift();
    }
    return null;
  }

}
