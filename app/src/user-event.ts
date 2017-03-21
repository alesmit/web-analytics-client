class UserEvent {

  @propertyAlias("tid")
  private trackingId: string;

  @propertyAlias("cid")
  private clientId: string;

  @propertyAlias("dt")
  private timestamp: number;

  @propertyAlias("tz")
  private timezoneOffset: number;

  @propertyAlias("url")
  private pageUrl: string;

  @propertyAlias("eid")
  private eventType: string;

  constructor(eventType: string) {

    let utils = new Utils();

    this.eventType = eventType;
    this.trackingId = analytics.getTrackingId();
    this.clientId = analytics.getClientId();
    this.timestamp = Date.now();
    this.timezoneOffset = utils.getTimezoneOffset();
    this.pageUrl = utils.getCurrentPageUrl();

  }

  private toQueryString(): string {
    return new Utils().serialize(this);
  }

  private getBeaconQueryString(): string {
    let config = new Config();
    return config.getDataCollectorUrl() + "?" + this.toQueryString();
  }

  send(): void {

    if (Environment.DEVELOPMENT) {
      console.info('Tracked Event', this);
    }

    (new Image()).src = this.getBeaconQueryString();

  }

}
