enum Environment {
  PRODUCTION, DEVELOPMENT
}

class Config {

  /**
   * Set environment
   * @type {Environment}
   */
  static ENVIRONMENT = Environment.DEVELOPMENT;

  host: string;
  port: number;
  endPoint: string = "collect";
  cookieId: string = "_cid";

  constructor() {
    this.setDataCollector();
  }

  private setDataCollector(): void {
    if (Config.ENVIRONMENT === Environment.PRODUCTION) {

      this.host = "x.x.x.x";
      this.port = 3030;

    } else {

      this.host = "localhost";
      this.port = 3030;

    }
  }

  /**
   * Get full Data Collector URL
   * @returns {string}
   */
  getDataCollectorUrl(): string {
    let protocol = location.protocol === "https:" ? "https:" : "http:";
    return protocol + "//" + this.host + ":" + this.port + "/" + this.endPoint;
  }

}
