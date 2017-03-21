class PageView extends UserEvent {

  @propertyAlias("l")
  language: string;

  @propertyAlias("os")
  platform: string;

  @propertyAlias("mob")
  isMobile: boolean;

  @propertyAlias("ref")
  referrer: string;

  @propertyAlias("ua")
  userAgent: string;

  @propertyAlias("pt")
  pageTitle: string;

  @propertyAlias("sr")
  screenResolution: string;

  @propertyAlias("scd")
  screenColorDepth: number;

  @propertyAlias("sra")
  screenActiveResolution: string;

  constructor() {

    super(EventType.PageView);

    this.language = Browser.getLanguage();
    this.platform = Browser.getPlatform();
    this.isMobile = Browser.getIsMobile();
    this.referrer = Browser.getReferrer();
    this.userAgent = Browser.getUserAgent();
    this.pageTitle = Browser.getDocumentTitle();
    this.screenResolution = Browser.getScreenResolution();
    this.screenColorDepth = Browser.getScreenColorDepth();
    this.screenActiveResolution = Browser.getScreenActiveResolution();
  }

}
