import {
  Attribute,
  ChangeDetectorRef,
  DEFAULT_CURRENCY_CODE,
  Directive,
  ElementRef,
  EventEmitter,
  Host,
  IMAGE_CONFIG,
  IMAGE_CONFIG_DEFAULTS,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  IterableDiffers,
  KeyValueDiffers,
  LOCALE_ID,
  LocaleDataIndex,
  NgModule,
  NgModuleRef$1,
  NgZone,
  Optional,
  PLATFORM_ID,
  Pipe,
  Renderer2,
  RendererStyleFlags2,
  RuntimeError,
  TemplateRef,
  Version,
  ViewContainerRef,
  __spreadProps,
  __spreadValues,
  booleanAttribute,
  createNgModule,
  findLocaleData,
  formatRuntimeError,
  getLocaleCurrencyCode,
  getLocalePluralCase,
  inject,
  isPromise,
  isSubscribable,
  numberAttribute,
  performanceMark,
  registerLocaleData,
  setClassMetadata,
  stringify,
  untracked,
  unwrapSafeValue,
  ɵɵInputTransformsFeature,
  ɵɵNgOnChangesFeature,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵinject,
  ɵɵinjectAttribute,
  ɵɵstyleProp
} from "./chunk-RLROI5SN.js";

// node_modules/@angular/common/fesm2022/common.mjs
var _DOM = null;
function getDOM() {
  return _DOM;
}
function setRootDomAdapter(adapter) {
  if (!_DOM) {
    _DOM = adapter;
  }
}
var DomAdapter = class {
};
var DOCUMENT = new InjectionToken("DocumentToken");
var _PlatformLocation = class _PlatformLocation {
  historyGo(relativePosition) {
    throw new Error("Not implemented");
  }
};
_PlatformLocation.ɵfac = function PlatformLocation_Factory(t) {
  return new (t || _PlatformLocation)();
};
_PlatformLocation.ɵprov = ɵɵdefineInjectable({
  token: _PlatformLocation,
  factory: () => (() => inject(BrowserPlatformLocation))(),
  providedIn: "platform"
});
var PlatformLocation = _PlatformLocation;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlatformLocation, [{
    type: Injectable,
    args: [{
      providedIn: "platform",
      useFactory: () => inject(BrowserPlatformLocation)
    }]
  }], null, null);
})();
var LOCATION_INITIALIZED = new InjectionToken("Location Initialized");
var _BrowserPlatformLocation = class _BrowserPlatformLocation extends PlatformLocation {
  constructor() {
    super();
    this._doc = inject(DOCUMENT);
    this._location = window.location;
    this._history = window.history;
  }
  getBaseHrefFromDOM() {
    return getDOM().getBaseHref(this._doc);
  }
  onPopState(fn) {
    const window2 = getDOM().getGlobalEventTarget(this._doc, "window");
    window2.addEventListener("popstate", fn, false);
    return () => window2.removeEventListener("popstate", fn);
  }
  onHashChange(fn) {
    const window2 = getDOM().getGlobalEventTarget(this._doc, "window");
    window2.addEventListener("hashchange", fn, false);
    return () => window2.removeEventListener("hashchange", fn);
  }
  get href() {
    return this._location.href;
  }
  get protocol() {
    return this._location.protocol;
  }
  get hostname() {
    return this._location.hostname;
  }
  get port() {
    return this._location.port;
  }
  get pathname() {
    return this._location.pathname;
  }
  get search() {
    return this._location.search;
  }
  get hash() {
    return this._location.hash;
  }
  set pathname(newPath) {
    this._location.pathname = newPath;
  }
  pushState(state, title, url) {
    this._history.pushState(state, title, url);
  }
  replaceState(state, title, url) {
    this._history.replaceState(state, title, url);
  }
  forward() {
    this._history.forward();
  }
  back() {
    this._history.back();
  }
  historyGo(relativePosition = 0) {
    this._history.go(relativePosition);
  }
  getState() {
    return this._history.state;
  }
};
_BrowserPlatformLocation.ɵfac = function BrowserPlatformLocation_Factory(t) {
  return new (t || _BrowserPlatformLocation)();
};
_BrowserPlatformLocation.ɵprov = ɵɵdefineInjectable({
  token: _BrowserPlatformLocation,
  factory: () => (() => new _BrowserPlatformLocation())(),
  providedIn: "platform"
});
var BrowserPlatformLocation = _BrowserPlatformLocation;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrowserPlatformLocation, [{
    type: Injectable,
    args: [{
      providedIn: "platform",
      useFactory: () => new BrowserPlatformLocation()
    }]
  }], () => [], null);
})();
function joinWithSlash(start, end) {
  if (start.length == 0) {
    return end;
  }
  if (end.length == 0) {
    return start;
  }
  let slashes = 0;
  if (start.endsWith("/")) {
    slashes++;
  }
  if (end.startsWith("/")) {
    slashes++;
  }
  if (slashes == 2) {
    return start + end.substring(1);
  }
  if (slashes == 1) {
    return start + end;
  }
  return start + "/" + end;
}
function stripTrailingSlash(url) {
  const match = url.match(/#|\?|$/);
  const pathEndIdx = match && match.index || url.length;
  const droppedSlashIdx = pathEndIdx - (url[pathEndIdx - 1] === "/" ? 1 : 0);
  return url.slice(0, droppedSlashIdx) + url.slice(pathEndIdx);
}
function normalizeQueryParams(params) {
  return params && params[0] !== "?" ? "?" + params : params;
}
var _LocationStrategy = class _LocationStrategy {
  historyGo(relativePosition) {
    throw new Error("Not implemented");
  }
};
_LocationStrategy.ɵfac = function LocationStrategy_Factory(t) {
  return new (t || _LocationStrategy)();
};
_LocationStrategy.ɵprov = ɵɵdefineInjectable({
  token: _LocationStrategy,
  factory: () => (() => inject(PathLocationStrategy))(),
  providedIn: "root"
});
var LocationStrategy = _LocationStrategy;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LocationStrategy, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => inject(PathLocationStrategy)
    }]
  }], null, null);
})();
var APP_BASE_HREF = new InjectionToken("appBaseHref");
var _PathLocationStrategy = class _PathLocationStrategy extends LocationStrategy {
  constructor(_platformLocation, href) {
    super();
    this._platformLocation = _platformLocation;
    this._removeListenerFns = [];
    this._baseHref = href ?? this._platformLocation.getBaseHrefFromDOM() ?? inject(DOCUMENT).location?.origin ?? "";
  }
  /** @nodoc */
  ngOnDestroy() {
    while (this._removeListenerFns.length) {
      this._removeListenerFns.pop()();
    }
  }
  onPopState(fn) {
    this._removeListenerFns.push(this._platformLocation.onPopState(fn), this._platformLocation.onHashChange(fn));
  }
  getBaseHref() {
    return this._baseHref;
  }
  prepareExternalUrl(internal) {
    return joinWithSlash(this._baseHref, internal);
  }
  path(includeHash = false) {
    const pathname = this._platformLocation.pathname + normalizeQueryParams(this._platformLocation.search);
    const hash = this._platformLocation.hash;
    return hash && includeHash ? `${pathname}${hash}` : pathname;
  }
  pushState(state, title, url, queryParams) {
    const externalUrl = this.prepareExternalUrl(url + normalizeQueryParams(queryParams));
    this._platformLocation.pushState(state, title, externalUrl);
  }
  replaceState(state, title, url, queryParams) {
    const externalUrl = this.prepareExternalUrl(url + normalizeQueryParams(queryParams));
    this._platformLocation.replaceState(state, title, externalUrl);
  }
  forward() {
    this._platformLocation.forward();
  }
  back() {
    this._platformLocation.back();
  }
  getState() {
    return this._platformLocation.getState();
  }
  historyGo(relativePosition = 0) {
    this._platformLocation.historyGo?.(relativePosition);
  }
};
_PathLocationStrategy.ɵfac = function PathLocationStrategy_Factory(t) {
  return new (t || _PathLocationStrategy)(ɵɵinject(PlatformLocation), ɵɵinject(APP_BASE_HREF, 8));
};
_PathLocationStrategy.ɵprov = ɵɵdefineInjectable({
  token: _PathLocationStrategy,
  factory: _PathLocationStrategy.ɵfac,
  providedIn: "root"
});
var PathLocationStrategy = _PathLocationStrategy;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PathLocationStrategy, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: PlatformLocation
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [APP_BASE_HREF]
    }]
  }], null);
})();
var _HashLocationStrategy = class _HashLocationStrategy extends LocationStrategy {
  constructor(_platformLocation, _baseHref) {
    super();
    this._platformLocation = _platformLocation;
    this._baseHref = "";
    this._removeListenerFns = [];
    if (_baseHref != null) {
      this._baseHref = _baseHref;
    }
  }
  /** @nodoc */
  ngOnDestroy() {
    while (this._removeListenerFns.length) {
      this._removeListenerFns.pop()();
    }
  }
  onPopState(fn) {
    this._removeListenerFns.push(this._platformLocation.onPopState(fn), this._platformLocation.onHashChange(fn));
  }
  getBaseHref() {
    return this._baseHref;
  }
  path(includeHash = false) {
    let path = this._platformLocation.hash;
    if (path == null)
      path = "#";
    return path.length > 0 ? path.substring(1) : path;
  }
  prepareExternalUrl(internal) {
    const url = joinWithSlash(this._baseHref, internal);
    return url.length > 0 ? "#" + url : url;
  }
  pushState(state, title, path, queryParams) {
    let url = this.prepareExternalUrl(path + normalizeQueryParams(queryParams));
    if (url.length == 0) {
      url = this._platformLocation.pathname;
    }
    this._platformLocation.pushState(state, title, url);
  }
  replaceState(state, title, path, queryParams) {
    let url = this.prepareExternalUrl(path + normalizeQueryParams(queryParams));
    if (url.length == 0) {
      url = this._platformLocation.pathname;
    }
    this._platformLocation.replaceState(state, title, url);
  }
  forward() {
    this._platformLocation.forward();
  }
  back() {
    this._platformLocation.back();
  }
  getState() {
    return this._platformLocation.getState();
  }
  historyGo(relativePosition = 0) {
    this._platformLocation.historyGo?.(relativePosition);
  }
};
_HashLocationStrategy.ɵfac = function HashLocationStrategy_Factory(t) {
  return new (t || _HashLocationStrategy)(ɵɵinject(PlatformLocation), ɵɵinject(APP_BASE_HREF, 8));
};
_HashLocationStrategy.ɵprov = ɵɵdefineInjectable({
  token: _HashLocationStrategy,
  factory: _HashLocationStrategy.ɵfac
});
var HashLocationStrategy = _HashLocationStrategy;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HashLocationStrategy, [{
    type: Injectable
  }], () => [{
    type: PlatformLocation
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [APP_BASE_HREF]
    }]
  }], null);
})();
var _Location = class _Location {
  constructor(locationStrategy) {
    this._subject = new EventEmitter();
    this._urlChangeListeners = [];
    this._urlChangeSubscription = null;
    this._locationStrategy = locationStrategy;
    const baseHref = this._locationStrategy.getBaseHref();
    this._basePath = _stripOrigin(stripTrailingSlash(_stripIndexHtml(baseHref)));
    this._locationStrategy.onPopState((ev) => {
      this._subject.emit({
        "url": this.path(true),
        "pop": true,
        "state": ev.state,
        "type": ev.type
      });
    });
  }
  /** @nodoc */
  ngOnDestroy() {
    this._urlChangeSubscription?.unsubscribe();
    this._urlChangeListeners = [];
  }
  /**
   * Normalizes the URL path for this location.
   *
   * @param includeHash True to include an anchor fragment in the path.
   *
   * @returns The normalized URL path.
   */
  // TODO: vsavkin. Remove the boolean flag and always include hash once the deprecated router is
  // removed.
  path(includeHash = false) {
    return this.normalize(this._locationStrategy.path(includeHash));
  }
  /**
   * Reports the current state of the location history.
   * @returns The current value of the `history.state` object.
   */
  getState() {
    return this._locationStrategy.getState();
  }
  /**
   * Normalizes the given path and compares to the current normalized path.
   *
   * @param path The given URL path.
   * @param query Query parameters.
   *
   * @returns True if the given URL path is equal to the current normalized path, false
   * otherwise.
   */
  isCurrentPathEqualTo(path, query = "") {
    return this.path() == this.normalize(path + normalizeQueryParams(query));
  }
  /**
   * Normalizes a URL path by stripping any trailing slashes.
   *
   * @param url String representing a URL.
   *
   * @returns The normalized URL string.
   */
  normalize(url) {
    return _Location.stripTrailingSlash(_stripBasePath(this._basePath, _stripIndexHtml(url)));
  }
  /**
   * Normalizes an external URL path.
   * If the given URL doesn't begin with a leading slash (`'/'`), adds one
   * before normalizing. Adds a hash if `HashLocationStrategy` is
   * in use, or the `APP_BASE_HREF` if the `PathLocationStrategy` is in use.
   *
   * @param url String representing a URL.
   *
   * @returns  A normalized platform-specific URL.
   */
  prepareExternalUrl(url) {
    if (url && url[0] !== "/") {
      url = "/" + url;
    }
    return this._locationStrategy.prepareExternalUrl(url);
  }
  // TODO: rename this method to pushState
  /**
   * Changes the browser's URL to a normalized version of a given URL, and pushes a
   * new item onto the platform's history.
   *
   * @param path  URL path to normalize.
   * @param query Query parameters.
   * @param state Location history state.
   *
   */
  go(path, query = "", state = null) {
    this._locationStrategy.pushState(state, "", path, query);
    this._notifyUrlChangeListeners(this.prepareExternalUrl(path + normalizeQueryParams(query)), state);
  }
  /**
   * Changes the browser's URL to a normalized version of the given URL, and replaces
   * the top item on the platform's history stack.
   *
   * @param path  URL path to normalize.
   * @param query Query parameters.
   * @param state Location history state.
   */
  replaceState(path, query = "", state = null) {
    this._locationStrategy.replaceState(state, "", path, query);
    this._notifyUrlChangeListeners(this.prepareExternalUrl(path + normalizeQueryParams(query)), state);
  }
  /**
   * Navigates forward in the platform's history.
   */
  forward() {
    this._locationStrategy.forward();
  }
  /**
   * Navigates back in the platform's history.
   */
  back() {
    this._locationStrategy.back();
  }
  /**
   * Navigate to a specific page from session history, identified by its relative position to the
   * current page.
   *
   * @param relativePosition  Position of the target page in the history relative to the current
   *     page.
   * A negative value moves backwards, a positive value moves forwards, e.g. `location.historyGo(2)`
   * moves forward two pages and `location.historyGo(-2)` moves back two pages. When we try to go
   * beyond what's stored in the history session, we stay in the current page. Same behaviour occurs
   * when `relativePosition` equals 0.
   * @see https://developer.mozilla.org/en-US/docs/Web/API/History_API#Moving_to_a_specific_point_in_history
   */
  historyGo(relativePosition = 0) {
    this._locationStrategy.historyGo?.(relativePosition);
  }
  /**
   * Registers a URL change listener. Use to catch updates performed by the Angular
   * framework that are not detectible through "popstate" or "hashchange" events.
   *
   * @param fn The change handler function, which take a URL and a location history state.
   * @returns A function that, when executed, unregisters a URL change listener.
   */
  onUrlChange(fn) {
    this._urlChangeListeners.push(fn);
    if (!this._urlChangeSubscription) {
      this._urlChangeSubscription = this.subscribe((v) => {
        this._notifyUrlChangeListeners(v.url, v.state);
      });
    }
    return () => {
      const fnIndex = this._urlChangeListeners.indexOf(fn);
      this._urlChangeListeners.splice(fnIndex, 1);
      if (this._urlChangeListeners.length === 0) {
        this._urlChangeSubscription?.unsubscribe();
        this._urlChangeSubscription = null;
      }
    };
  }
  /** @internal */
  _notifyUrlChangeListeners(url = "", state) {
    this._urlChangeListeners.forEach((fn) => fn(url, state));
  }
  /**
   * Subscribes to the platform's `popState` events.
   *
   * Note: `Location.go()` does not trigger the `popState` event in the browser. Use
   * `Location.onUrlChange()` to subscribe to URL changes instead.
   *
   * @param value Event that is triggered when the state history changes.
   * @param exception The exception to throw.
   *
   * @see [onpopstate](https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate)
   *
   * @returns Subscribed events.
   */
  subscribe(onNext, onThrow, onReturn) {
    return this._subject.subscribe({
      next: onNext,
      error: onThrow,
      complete: onReturn
    });
  }
};
_Location.normalizeQueryParams = normalizeQueryParams;
_Location.joinWithSlash = joinWithSlash;
_Location.stripTrailingSlash = stripTrailingSlash;
_Location.ɵfac = function Location_Factory(t) {
  return new (t || _Location)(ɵɵinject(LocationStrategy));
};
_Location.ɵprov = ɵɵdefineInjectable({
  token: _Location,
  factory: () => createLocation(),
  providedIn: "root"
});
var Location = _Location;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Location, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      // See #23917
      useFactory: createLocation
    }]
  }], () => [{
    type: LocationStrategy
  }], null);
})();
function createLocation() {
  return new Location(ɵɵinject(LocationStrategy));
}
function _stripBasePath(basePath, url) {
  if (!basePath || !url.startsWith(basePath)) {
    return url;
  }
  const strippedUrl = url.substring(basePath.length);
  if (strippedUrl === "" || ["/", ";", "?", "#"].includes(strippedUrl[0])) {
    return strippedUrl;
  }
  return url;
}
function _stripIndexHtml(url) {
  return url.replace(/\/index.html$/, "");
}
function _stripOrigin(baseHref) {
  const isAbsoluteUrl2 = new RegExp("^(https?:)?//").test(baseHref);
  if (isAbsoluteUrl2) {
    const [, pathname] = baseHref.split(/\/\/[^\/]+/);
    return pathname;
  }
  return baseHref;
}
var CURRENCIES_EN = {
  "ADP": [void 0, void 0, 0],
  "AFN": [void 0, "؋", 0],
  "ALL": [void 0, void 0, 0],
  "AMD": [void 0, "֏", 2],
  "AOA": [void 0, "Kz"],
  "ARS": [void 0, "$"],
  "AUD": ["A$", "$"],
  "AZN": [void 0, "₼"],
  "BAM": [void 0, "KM"],
  "BBD": [void 0, "$"],
  "BDT": [void 0, "৳"],
  "BHD": [void 0, void 0, 3],
  "BIF": [void 0, void 0, 0],
  "BMD": [void 0, "$"],
  "BND": [void 0, "$"],
  "BOB": [void 0, "Bs"],
  "BRL": ["R$"],
  "BSD": [void 0, "$"],
  "BWP": [void 0, "P"],
  "BYN": [void 0, void 0, 2],
  "BYR": [void 0, void 0, 0],
  "BZD": [void 0, "$"],
  "CAD": ["CA$", "$", 2],
  "CHF": [void 0, void 0, 2],
  "CLF": [void 0, void 0, 4],
  "CLP": [void 0, "$", 0],
  "CNY": ["CN¥", "¥"],
  "COP": [void 0, "$", 2],
  "CRC": [void 0, "₡", 2],
  "CUC": [void 0, "$"],
  "CUP": [void 0, "$"],
  "CZK": [void 0, "Kč", 2],
  "DJF": [void 0, void 0, 0],
  "DKK": [void 0, "kr", 2],
  "DOP": [void 0, "$"],
  "EGP": [void 0, "E£"],
  "ESP": [void 0, "₧", 0],
  "EUR": ["€"],
  "FJD": [void 0, "$"],
  "FKP": [void 0, "£"],
  "GBP": ["£"],
  "GEL": [void 0, "₾"],
  "GHS": [void 0, "GH₵"],
  "GIP": [void 0, "£"],
  "GNF": [void 0, "FG", 0],
  "GTQ": [void 0, "Q"],
  "GYD": [void 0, "$", 2],
  "HKD": ["HK$", "$"],
  "HNL": [void 0, "L"],
  "HRK": [void 0, "kn"],
  "HUF": [void 0, "Ft", 2],
  "IDR": [void 0, "Rp", 2],
  "ILS": ["₪"],
  "INR": ["₹"],
  "IQD": [void 0, void 0, 0],
  "IRR": [void 0, void 0, 0],
  "ISK": [void 0, "kr", 0],
  "ITL": [void 0, void 0, 0],
  "JMD": [void 0, "$"],
  "JOD": [void 0, void 0, 3],
  "JPY": ["¥", void 0, 0],
  "KHR": [void 0, "៛"],
  "KMF": [void 0, "CF", 0],
  "KPW": [void 0, "₩", 0],
  "KRW": ["₩", void 0, 0],
  "KWD": [void 0, void 0, 3],
  "KYD": [void 0, "$"],
  "KZT": [void 0, "₸"],
  "LAK": [void 0, "₭", 0],
  "LBP": [void 0, "L£", 0],
  "LKR": [void 0, "Rs"],
  "LRD": [void 0, "$"],
  "LTL": [void 0, "Lt"],
  "LUF": [void 0, void 0, 0],
  "LVL": [void 0, "Ls"],
  "LYD": [void 0, void 0, 3],
  "MGA": [void 0, "Ar", 0],
  "MGF": [void 0, void 0, 0],
  "MMK": [void 0, "K", 0],
  "MNT": [void 0, "₮", 2],
  "MRO": [void 0, void 0, 0],
  "MUR": [void 0, "Rs", 2],
  "MXN": ["MX$", "$"],
  "MYR": [void 0, "RM"],
  "NAD": [void 0, "$"],
  "NGN": [void 0, "₦"],
  "NIO": [void 0, "C$"],
  "NOK": [void 0, "kr", 2],
  "NPR": [void 0, "Rs"],
  "NZD": ["NZ$", "$"],
  "OMR": [void 0, void 0, 3],
  "PHP": ["₱"],
  "PKR": [void 0, "Rs", 2],
  "PLN": [void 0, "zł"],
  "PYG": [void 0, "₲", 0],
  "RON": [void 0, "lei"],
  "RSD": [void 0, void 0, 0],
  "RUB": [void 0, "₽"],
  "RWF": [void 0, "RF", 0],
  "SBD": [void 0, "$"],
  "SEK": [void 0, "kr", 2],
  "SGD": [void 0, "$"],
  "SHP": [void 0, "£"],
  "SLE": [void 0, void 0, 2],
  "SLL": [void 0, void 0, 0],
  "SOS": [void 0, void 0, 0],
  "SRD": [void 0, "$"],
  "SSP": [void 0, "£"],
  "STD": [void 0, void 0, 0],
  "STN": [void 0, "Db"],
  "SYP": [void 0, "£", 0],
  "THB": [void 0, "฿"],
  "TMM": [void 0, void 0, 0],
  "TND": [void 0, void 0, 3],
  "TOP": [void 0, "T$"],
  "TRL": [void 0, void 0, 0],
  "TRY": [void 0, "₺"],
  "TTD": [void 0, "$"],
  "TWD": ["NT$", "$", 2],
  "TZS": [void 0, void 0, 2],
  "UAH": [void 0, "₴"],
  "UGX": [void 0, void 0, 0],
  "USD": ["$"],
  "UYI": [void 0, void 0, 0],
  "UYU": [void 0, "$"],
  "UYW": [void 0, void 0, 4],
  "UZS": [void 0, void 0, 2],
  "VEF": [void 0, "Bs", 2],
  "VND": ["₫", void 0, 0],
  "VUV": [void 0, void 0, 0],
  "XAF": ["FCFA", void 0, 0],
  "XCD": ["EC$", "$"],
  "XOF": ["F CFA", void 0, 0],
  "XPF": ["CFPF", void 0, 0],
  "XXX": ["¤"],
  "YER": [void 0, void 0, 0],
  "ZAR": [void 0, "R"],
  "ZMK": [void 0, void 0, 0],
  "ZMW": [void 0, "ZK"],
  "ZWD": [void 0, void 0, 0]
};
var NumberFormatStyle;
(function(NumberFormatStyle2) {
  NumberFormatStyle2[NumberFormatStyle2["Decimal"] = 0] = "Decimal";
  NumberFormatStyle2[NumberFormatStyle2["Percent"] = 1] = "Percent";
  NumberFormatStyle2[NumberFormatStyle2["Currency"] = 2] = "Currency";
  NumberFormatStyle2[NumberFormatStyle2["Scientific"] = 3] = "Scientific";
})(NumberFormatStyle || (NumberFormatStyle = {}));
var Plural;
(function(Plural2) {
  Plural2[Plural2["Zero"] = 0] = "Zero";
  Plural2[Plural2["One"] = 1] = "One";
  Plural2[Plural2["Two"] = 2] = "Two";
  Plural2[Plural2["Few"] = 3] = "Few";
  Plural2[Plural2["Many"] = 4] = "Many";
  Plural2[Plural2["Other"] = 5] = "Other";
})(Plural || (Plural = {}));
var FormStyle;
(function(FormStyle2) {
  FormStyle2[FormStyle2["Format"] = 0] = "Format";
  FormStyle2[FormStyle2["Standalone"] = 1] = "Standalone";
})(FormStyle || (FormStyle = {}));
var TranslationWidth;
(function(TranslationWidth2) {
  TranslationWidth2[TranslationWidth2["Narrow"] = 0] = "Narrow";
  TranslationWidth2[TranslationWidth2["Abbreviated"] = 1] = "Abbreviated";
  TranslationWidth2[TranslationWidth2["Wide"] = 2] = "Wide";
  TranslationWidth2[TranslationWidth2["Short"] = 3] = "Short";
})(TranslationWidth || (TranslationWidth = {}));
var FormatWidth;
(function(FormatWidth2) {
  FormatWidth2[FormatWidth2["Short"] = 0] = "Short";
  FormatWidth2[FormatWidth2["Medium"] = 1] = "Medium";
  FormatWidth2[FormatWidth2["Long"] = 2] = "Long";
  FormatWidth2[FormatWidth2["Full"] = 3] = "Full";
})(FormatWidth || (FormatWidth = {}));
var NumberSymbol;
(function(NumberSymbol2) {
  NumberSymbol2[NumberSymbol2["Decimal"] = 0] = "Decimal";
  NumberSymbol2[NumberSymbol2["Group"] = 1] = "Group";
  NumberSymbol2[NumberSymbol2["List"] = 2] = "List";
  NumberSymbol2[NumberSymbol2["PercentSign"] = 3] = "PercentSign";
  NumberSymbol2[NumberSymbol2["PlusSign"] = 4] = "PlusSign";
  NumberSymbol2[NumberSymbol2["MinusSign"] = 5] = "MinusSign";
  NumberSymbol2[NumberSymbol2["Exponential"] = 6] = "Exponential";
  NumberSymbol2[NumberSymbol2["SuperscriptingExponent"] = 7] = "SuperscriptingExponent";
  NumberSymbol2[NumberSymbol2["PerMille"] = 8] = "PerMille";
  NumberSymbol2[NumberSymbol2["Infinity"] = 9] = "Infinity";
  NumberSymbol2[NumberSymbol2["NaN"] = 10] = "NaN";
  NumberSymbol2[NumberSymbol2["TimeSeparator"] = 11] = "TimeSeparator";
  NumberSymbol2[NumberSymbol2["CurrencyDecimal"] = 12] = "CurrencyDecimal";
  NumberSymbol2[NumberSymbol2["CurrencyGroup"] = 13] = "CurrencyGroup";
})(NumberSymbol || (NumberSymbol = {}));
var WeekDay;
(function(WeekDay2) {
  WeekDay2[WeekDay2["Sunday"] = 0] = "Sunday";
  WeekDay2[WeekDay2["Monday"] = 1] = "Monday";
  WeekDay2[WeekDay2["Tuesday"] = 2] = "Tuesday";
  WeekDay2[WeekDay2["Wednesday"] = 3] = "Wednesday";
  WeekDay2[WeekDay2["Thursday"] = 4] = "Thursday";
  WeekDay2[WeekDay2["Friday"] = 5] = "Friday";
  WeekDay2[WeekDay2["Saturday"] = 6] = "Saturday";
})(WeekDay || (WeekDay = {}));
function getLocaleId(locale) {
  return findLocaleData(locale)[LocaleDataIndex.LocaleId];
}
function getLocaleDayPeriods(locale, formStyle, width) {
  const data = findLocaleData(locale);
  const amPmData = [data[LocaleDataIndex.DayPeriodsFormat], data[LocaleDataIndex.DayPeriodsStandalone]];
  const amPm = getLastDefinedValue(amPmData, formStyle);
  return getLastDefinedValue(amPm, width);
}
function getLocaleDayNames(locale, formStyle, width) {
  const data = findLocaleData(locale);
  const daysData = [data[LocaleDataIndex.DaysFormat], data[LocaleDataIndex.DaysStandalone]];
  const days = getLastDefinedValue(daysData, formStyle);
  return getLastDefinedValue(days, width);
}
function getLocaleMonthNames(locale, formStyle, width) {
  const data = findLocaleData(locale);
  const monthsData = [data[LocaleDataIndex.MonthsFormat], data[LocaleDataIndex.MonthsStandalone]];
  const months = getLastDefinedValue(monthsData, formStyle);
  return getLastDefinedValue(months, width);
}
function getLocaleEraNames(locale, width) {
  const data = findLocaleData(locale);
  const erasData = data[LocaleDataIndex.Eras];
  return getLastDefinedValue(erasData, width);
}
function getLocaleFirstDayOfWeek(locale) {
  const data = findLocaleData(locale);
  return data[LocaleDataIndex.FirstDayOfWeek];
}
function getLocaleWeekEndRange(locale) {
  const data = findLocaleData(locale);
  return data[LocaleDataIndex.WeekendRange];
}
function getLocaleDateFormat(locale, width) {
  const data = findLocaleData(locale);
  return getLastDefinedValue(data[LocaleDataIndex.DateFormat], width);
}
function getLocaleTimeFormat(locale, width) {
  const data = findLocaleData(locale);
  return getLastDefinedValue(data[LocaleDataIndex.TimeFormat], width);
}
function getLocaleDateTimeFormat(locale, width) {
  const data = findLocaleData(locale);
  const dateTimeFormatData = data[LocaleDataIndex.DateTimeFormat];
  return getLastDefinedValue(dateTimeFormatData, width);
}
function getLocaleNumberSymbol(locale, symbol) {
  const data = findLocaleData(locale);
  const res = data[LocaleDataIndex.NumberSymbols][symbol];
  if (typeof res === "undefined") {
    if (symbol === NumberSymbol.CurrencyDecimal) {
      return data[LocaleDataIndex.NumberSymbols][NumberSymbol.Decimal];
    } else if (symbol === NumberSymbol.CurrencyGroup) {
      return data[LocaleDataIndex.NumberSymbols][NumberSymbol.Group];
    }
  }
  return res;
}
function getLocaleNumberFormat(locale, type) {
  const data = findLocaleData(locale);
  return data[LocaleDataIndex.NumberFormats][type];
}
function getLocaleCurrencySymbol(locale) {
  const data = findLocaleData(locale);
  return data[LocaleDataIndex.CurrencySymbol] || null;
}
function getLocaleCurrencyName(locale) {
  const data = findLocaleData(locale);
  return data[LocaleDataIndex.CurrencyName] || null;
}
function getLocaleCurrencyCode2(locale) {
  return getLocaleCurrencyCode(locale);
}
function getLocaleCurrencies(locale) {
  const data = findLocaleData(locale);
  return data[LocaleDataIndex.Currencies];
}
var getLocalePluralCase2 = getLocalePluralCase;
function checkFullData(data) {
  if (!data[LocaleDataIndex.ExtraData]) {
    throw new Error(`Missing extra locale data for the locale "${data[LocaleDataIndex.LocaleId]}". Use "registerLocaleData" to load new data. See the "I18n guide" on angular.io to know more.`);
  }
}
function getLocaleExtraDayPeriodRules(locale) {
  const data = findLocaleData(locale);
  checkFullData(data);
  const rules = data[LocaleDataIndex.ExtraData][
    2
    /* ɵExtraLocaleDataIndex.ExtraDayPeriodsRules */
  ] || [];
  return rules.map((rule) => {
    if (typeof rule === "string") {
      return extractTime(rule);
    }
    return [extractTime(rule[0]), extractTime(rule[1])];
  });
}
function getLocaleExtraDayPeriods(locale, formStyle, width) {
  const data = findLocaleData(locale);
  checkFullData(data);
  const dayPeriodsData = [data[LocaleDataIndex.ExtraData][
    0
    /* ɵExtraLocaleDataIndex.ExtraDayPeriodFormats */
  ], data[LocaleDataIndex.ExtraData][
    1
    /* ɵExtraLocaleDataIndex.ExtraDayPeriodStandalone */
  ]];
  const dayPeriods = getLastDefinedValue(dayPeriodsData, formStyle) || [];
  return getLastDefinedValue(dayPeriods, width) || [];
}
function getLocaleDirection(locale) {
  const data = findLocaleData(locale);
  return data[LocaleDataIndex.Directionality];
}
function getLastDefinedValue(data, index) {
  for (let i = index; i > -1; i--) {
    if (typeof data[i] !== "undefined") {
      return data[i];
    }
  }
  throw new Error("Locale data API: locale data undefined");
}
function extractTime(time) {
  const [h, m] = time.split(":");
  return {
    hours: +h,
    minutes: +m
  };
}
function getCurrencySymbol(code, format, locale = "en") {
  const currency = getLocaleCurrencies(locale)[code] || CURRENCIES_EN[code] || [];
  const symbolNarrow = currency[
    1
    /* ɵCurrencyIndex.SymbolNarrow */
  ];
  if (format === "narrow" && typeof symbolNarrow === "string") {
    return symbolNarrow;
  }
  return currency[
    0
    /* ɵCurrencyIndex.Symbol */
  ] || code;
}
var DEFAULT_NB_OF_CURRENCY_DIGITS = 2;
function getNumberOfCurrencyDigits(code) {
  let digits;
  const currency = CURRENCIES_EN[code];
  if (currency) {
    digits = currency[
      2
      /* ɵCurrencyIndex.NbOfDigits */
    ];
  }
  return typeof digits === "number" ? digits : DEFAULT_NB_OF_CURRENCY_DIGITS;
}
var ISO8601_DATE_REGEX = /^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
var NAMED_FORMATS = {};
var DATE_FORMATS_SPLIT = /((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/;
var ZoneWidth;
(function(ZoneWidth2) {
  ZoneWidth2[ZoneWidth2["Short"] = 0] = "Short";
  ZoneWidth2[ZoneWidth2["ShortGMT"] = 1] = "ShortGMT";
  ZoneWidth2[ZoneWidth2["Long"] = 2] = "Long";
  ZoneWidth2[ZoneWidth2["Extended"] = 3] = "Extended";
})(ZoneWidth || (ZoneWidth = {}));
var DateType;
(function(DateType2) {
  DateType2[DateType2["FullYear"] = 0] = "FullYear";
  DateType2[DateType2["Month"] = 1] = "Month";
  DateType2[DateType2["Date"] = 2] = "Date";
  DateType2[DateType2["Hours"] = 3] = "Hours";
  DateType2[DateType2["Minutes"] = 4] = "Minutes";
  DateType2[DateType2["Seconds"] = 5] = "Seconds";
  DateType2[DateType2["FractionalSeconds"] = 6] = "FractionalSeconds";
  DateType2[DateType2["Day"] = 7] = "Day";
})(DateType || (DateType = {}));
var TranslationType;
(function(TranslationType2) {
  TranslationType2[TranslationType2["DayPeriods"] = 0] = "DayPeriods";
  TranslationType2[TranslationType2["Days"] = 1] = "Days";
  TranslationType2[TranslationType2["Months"] = 2] = "Months";
  TranslationType2[TranslationType2["Eras"] = 3] = "Eras";
})(TranslationType || (TranslationType = {}));
function formatDate(value, format, locale, timezone) {
  let date = toDate(value);
  const namedFormat = getNamedFormat(locale, format);
  format = namedFormat || format;
  let parts = [];
  let match;
  while (format) {
    match = DATE_FORMATS_SPLIT.exec(format);
    if (match) {
      parts = parts.concat(match.slice(1));
      const part = parts.pop();
      if (!part) {
        break;
      }
      format = part;
    } else {
      parts.push(format);
      break;
    }
  }
  let dateTimezoneOffset = date.getTimezoneOffset();
  if (timezone) {
    dateTimezoneOffset = timezoneToOffset(timezone, dateTimezoneOffset);
    date = convertTimezoneToLocal(date, timezone, true);
  }
  let text = "";
  parts.forEach((value2) => {
    const dateFormatter = getDateFormatter(value2);
    text += dateFormatter ? dateFormatter(date, locale, dateTimezoneOffset) : value2 === "''" ? "'" : value2.replace(/(^'|'$)/g, "").replace(/''/g, "'");
  });
  return text;
}
function createDate(year, month, date) {
  const newDate = /* @__PURE__ */ new Date(0);
  newDate.setFullYear(year, month, date);
  newDate.setHours(0, 0, 0);
  return newDate;
}
function getNamedFormat(locale, format) {
  const localeId = getLocaleId(locale);
  NAMED_FORMATS[localeId] = NAMED_FORMATS[localeId] || {};
  if (NAMED_FORMATS[localeId][format]) {
    return NAMED_FORMATS[localeId][format];
  }
  let formatValue = "";
  switch (format) {
    case "shortDate":
      formatValue = getLocaleDateFormat(locale, FormatWidth.Short);
      break;
    case "mediumDate":
      formatValue = getLocaleDateFormat(locale, FormatWidth.Medium);
      break;
    case "longDate":
      formatValue = getLocaleDateFormat(locale, FormatWidth.Long);
      break;
    case "fullDate":
      formatValue = getLocaleDateFormat(locale, FormatWidth.Full);
      break;
    case "shortTime":
      formatValue = getLocaleTimeFormat(locale, FormatWidth.Short);
      break;
    case "mediumTime":
      formatValue = getLocaleTimeFormat(locale, FormatWidth.Medium);
      break;
    case "longTime":
      formatValue = getLocaleTimeFormat(locale, FormatWidth.Long);
      break;
    case "fullTime":
      formatValue = getLocaleTimeFormat(locale, FormatWidth.Full);
      break;
    case "short":
      const shortTime = getNamedFormat(locale, "shortTime");
      const shortDate = getNamedFormat(locale, "shortDate");
      formatValue = formatDateTime(getLocaleDateTimeFormat(locale, FormatWidth.Short), [shortTime, shortDate]);
      break;
    case "medium":
      const mediumTime = getNamedFormat(locale, "mediumTime");
      const mediumDate = getNamedFormat(locale, "mediumDate");
      formatValue = formatDateTime(getLocaleDateTimeFormat(locale, FormatWidth.Medium), [mediumTime, mediumDate]);
      break;
    case "long":
      const longTime = getNamedFormat(locale, "longTime");
      const longDate = getNamedFormat(locale, "longDate");
      formatValue = formatDateTime(getLocaleDateTimeFormat(locale, FormatWidth.Long), [longTime, longDate]);
      break;
    case "full":
      const fullTime = getNamedFormat(locale, "fullTime");
      const fullDate = getNamedFormat(locale, "fullDate");
      formatValue = formatDateTime(getLocaleDateTimeFormat(locale, FormatWidth.Full), [fullTime, fullDate]);
      break;
  }
  if (formatValue) {
    NAMED_FORMATS[localeId][format] = formatValue;
  }
  return formatValue;
}
function formatDateTime(str, opt_values) {
  if (opt_values) {
    str = str.replace(/\{([^}]+)}/g, function(match, key) {
      return opt_values != null && key in opt_values ? opt_values[key] : match;
    });
  }
  return str;
}
function padNumber(num, digits, minusSign = "-", trim, negWrap) {
  let neg = "";
  if (num < 0 || negWrap && num <= 0) {
    if (negWrap) {
      num = -num + 1;
    } else {
      num = -num;
      neg = minusSign;
    }
  }
  let strNum = String(num);
  while (strNum.length < digits) {
    strNum = "0" + strNum;
  }
  if (trim) {
    strNum = strNum.slice(strNum.length - digits);
  }
  return neg + strNum;
}
function formatFractionalSeconds(milliseconds, digits) {
  const strMs = padNumber(milliseconds, 3);
  return strMs.substring(0, digits);
}
function dateGetter(name, size, offset = 0, trim = false, negWrap = false) {
  return function(date, locale) {
    let part = getDatePart(name, date);
    if (offset > 0 || part > -offset) {
      part += offset;
    }
    if (name === DateType.Hours) {
      if (part === 0 && offset === -12) {
        part = 12;
      }
    } else if (name === DateType.FractionalSeconds) {
      return formatFractionalSeconds(part, size);
    }
    const localeMinus = getLocaleNumberSymbol(locale, NumberSymbol.MinusSign);
    return padNumber(part, size, localeMinus, trim, negWrap);
  };
}
function getDatePart(part, date) {
  switch (part) {
    case DateType.FullYear:
      return date.getFullYear();
    case DateType.Month:
      return date.getMonth();
    case DateType.Date:
      return date.getDate();
    case DateType.Hours:
      return date.getHours();
    case DateType.Minutes:
      return date.getMinutes();
    case DateType.Seconds:
      return date.getSeconds();
    case DateType.FractionalSeconds:
      return date.getMilliseconds();
    case DateType.Day:
      return date.getDay();
    default:
      throw new Error(`Unknown DateType value "${part}".`);
  }
}
function dateStrGetter(name, width, form = FormStyle.Format, extended = false) {
  return function(date, locale) {
    return getDateTranslation(date, locale, name, width, form, extended);
  };
}
function getDateTranslation(date, locale, name, width, form, extended) {
  switch (name) {
    case TranslationType.Months:
      return getLocaleMonthNames(locale, form, width)[date.getMonth()];
    case TranslationType.Days:
      return getLocaleDayNames(locale, form, width)[date.getDay()];
    case TranslationType.DayPeriods:
      const currentHours = date.getHours();
      const currentMinutes = date.getMinutes();
      if (extended) {
        const rules = getLocaleExtraDayPeriodRules(locale);
        const dayPeriods = getLocaleExtraDayPeriods(locale, form, width);
        const index = rules.findIndex((rule) => {
          if (Array.isArray(rule)) {
            const [from, to] = rule;
            const afterFrom = currentHours >= from.hours && currentMinutes >= from.minutes;
            const beforeTo = currentHours < to.hours || currentHours === to.hours && currentMinutes < to.minutes;
            if (from.hours < to.hours) {
              if (afterFrom && beforeTo) {
                return true;
              }
            } else if (afterFrom || beforeTo) {
              return true;
            }
          } else {
            if (rule.hours === currentHours && rule.minutes === currentMinutes) {
              return true;
            }
          }
          return false;
        });
        if (index !== -1) {
          return dayPeriods[index];
        }
      }
      return getLocaleDayPeriods(locale, form, width)[currentHours < 12 ? 0 : 1];
    case TranslationType.Eras:
      return getLocaleEraNames(locale, width)[date.getFullYear() <= 0 ? 0 : 1];
    default:
      const unexpected = name;
      throw new Error(`unexpected translation type ${unexpected}`);
  }
}
function timeZoneGetter(width) {
  return function(date, locale, offset) {
    const zone = -1 * offset;
    const minusSign = getLocaleNumberSymbol(locale, NumberSymbol.MinusSign);
    const hours = zone > 0 ? Math.floor(zone / 60) : Math.ceil(zone / 60);
    switch (width) {
      case ZoneWidth.Short:
        return (zone >= 0 ? "+" : "") + padNumber(hours, 2, minusSign) + padNumber(Math.abs(zone % 60), 2, minusSign);
      case ZoneWidth.ShortGMT:
        return "GMT" + (zone >= 0 ? "+" : "") + padNumber(hours, 1, minusSign);
      case ZoneWidth.Long:
        return "GMT" + (zone >= 0 ? "+" : "") + padNumber(hours, 2, minusSign) + ":" + padNumber(Math.abs(zone % 60), 2, minusSign);
      case ZoneWidth.Extended:
        if (offset === 0) {
          return "Z";
        } else {
          return (zone >= 0 ? "+" : "") + padNumber(hours, 2, minusSign) + ":" + padNumber(Math.abs(zone % 60), 2, minusSign);
        }
      default:
        throw new Error(`Unknown zone width "${width}"`);
    }
  };
}
var JANUARY = 0;
var THURSDAY = 4;
function getFirstThursdayOfYear(year) {
  const firstDayOfYear = createDate(year, JANUARY, 1).getDay();
  return createDate(year, 0, 1 + (firstDayOfYear <= THURSDAY ? THURSDAY : THURSDAY + 7) - firstDayOfYear);
}
function getThursdayThisWeek(datetime) {
  return createDate(datetime.getFullYear(), datetime.getMonth(), datetime.getDate() + (THURSDAY - datetime.getDay()));
}
function weekGetter(size, monthBased = false) {
  return function(date, locale) {
    let result;
    if (monthBased) {
      const nbDaysBefore1stDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1).getDay() - 1;
      const today = date.getDate();
      result = 1 + Math.floor((today + nbDaysBefore1stDayOfMonth) / 7);
    } else {
      const thisThurs = getThursdayThisWeek(date);
      const firstThurs = getFirstThursdayOfYear(thisThurs.getFullYear());
      const diff = thisThurs.getTime() - firstThurs.getTime();
      result = 1 + Math.round(diff / 6048e5);
    }
    return padNumber(result, size, getLocaleNumberSymbol(locale, NumberSymbol.MinusSign));
  };
}
function weekNumberingYearGetter(size, trim = false) {
  return function(date, locale) {
    const thisThurs = getThursdayThisWeek(date);
    const weekNumberingYear = thisThurs.getFullYear();
    return padNumber(weekNumberingYear, size, getLocaleNumberSymbol(locale, NumberSymbol.MinusSign), trim);
  };
}
var DATE_FORMATS = {};
function getDateFormatter(format) {
  if (DATE_FORMATS[format]) {
    return DATE_FORMATS[format];
  }
  let formatter;
  switch (format) {
    case "G":
    case "GG":
    case "GGG":
      formatter = dateStrGetter(TranslationType.Eras, TranslationWidth.Abbreviated);
      break;
    case "GGGG":
      formatter = dateStrGetter(TranslationType.Eras, TranslationWidth.Wide);
      break;
    case "GGGGG":
      formatter = dateStrGetter(TranslationType.Eras, TranslationWidth.Narrow);
      break;
    case "y":
      formatter = dateGetter(DateType.FullYear, 1, 0, false, true);
      break;
    case "yy":
      formatter = dateGetter(DateType.FullYear, 2, 0, true, true);
      break;
    case "yyy":
      formatter = dateGetter(DateType.FullYear, 3, 0, false, true);
      break;
    case "yyyy":
      formatter = dateGetter(DateType.FullYear, 4, 0, false, true);
      break;
    case "Y":
      formatter = weekNumberingYearGetter(1);
      break;
    case "YY":
      formatter = weekNumberingYearGetter(2, true);
      break;
    case "YYY":
      formatter = weekNumberingYearGetter(3);
      break;
    case "YYYY":
      formatter = weekNumberingYearGetter(4);
      break;
    case "M":
    case "L":
      formatter = dateGetter(DateType.Month, 1, 1);
      break;
    case "MM":
    case "LL":
      formatter = dateGetter(DateType.Month, 2, 1);
      break;
    case "MMM":
      formatter = dateStrGetter(TranslationType.Months, TranslationWidth.Abbreviated);
      break;
    case "MMMM":
      formatter = dateStrGetter(TranslationType.Months, TranslationWidth.Wide);
      break;
    case "MMMMM":
      formatter = dateStrGetter(TranslationType.Months, TranslationWidth.Narrow);
      break;
    case "LLL":
      formatter = dateStrGetter(TranslationType.Months, TranslationWidth.Abbreviated, FormStyle.Standalone);
      break;
    case "LLLL":
      formatter = dateStrGetter(TranslationType.Months, TranslationWidth.Wide, FormStyle.Standalone);
      break;
    case "LLLLL":
      formatter = dateStrGetter(TranslationType.Months, TranslationWidth.Narrow, FormStyle.Standalone);
      break;
    case "w":
      formatter = weekGetter(1);
      break;
    case "ww":
      formatter = weekGetter(2);
      break;
    case "W":
      formatter = weekGetter(1, true);
      break;
    case "d":
      formatter = dateGetter(DateType.Date, 1);
      break;
    case "dd":
      formatter = dateGetter(DateType.Date, 2);
      break;
    case "c":
    case "cc":
      formatter = dateGetter(DateType.Day, 1);
      break;
    case "ccc":
      formatter = dateStrGetter(TranslationType.Days, TranslationWidth.Abbreviated, FormStyle.Standalone);
      break;
    case "cccc":
      formatter = dateStrGetter(TranslationType.Days, TranslationWidth.Wide, FormStyle.Standalone);
      break;
    case "ccccc":
      formatter = dateStrGetter(TranslationType.Days, TranslationWidth.Narrow, FormStyle.Standalone);
      break;
    case "cccccc":
      formatter = dateStrGetter(TranslationType.Days, TranslationWidth.Short, FormStyle.Standalone);
      break;
    case "E":
    case "EE":
    case "EEE":
      formatter = dateStrGetter(TranslationType.Days, TranslationWidth.Abbreviated);
      break;
    case "EEEE":
      formatter = dateStrGetter(TranslationType.Days, TranslationWidth.Wide);
      break;
    case "EEEEE":
      formatter = dateStrGetter(TranslationType.Days, TranslationWidth.Narrow);
      break;
    case "EEEEEE":
      formatter = dateStrGetter(TranslationType.Days, TranslationWidth.Short);
      break;
    case "a":
    case "aa":
    case "aaa":
      formatter = dateStrGetter(TranslationType.DayPeriods, TranslationWidth.Abbreviated);
      break;
    case "aaaa":
      formatter = dateStrGetter(TranslationType.DayPeriods, TranslationWidth.Wide);
      break;
    case "aaaaa":
      formatter = dateStrGetter(TranslationType.DayPeriods, TranslationWidth.Narrow);
      break;
    case "b":
    case "bb":
    case "bbb":
      formatter = dateStrGetter(TranslationType.DayPeriods, TranslationWidth.Abbreviated, FormStyle.Standalone, true);
      break;
    case "bbbb":
      formatter = dateStrGetter(TranslationType.DayPeriods, TranslationWidth.Wide, FormStyle.Standalone, true);
      break;
    case "bbbbb":
      formatter = dateStrGetter(TranslationType.DayPeriods, TranslationWidth.Narrow, FormStyle.Standalone, true);
      break;
    case "B":
    case "BB":
    case "BBB":
      formatter = dateStrGetter(TranslationType.DayPeriods, TranslationWidth.Abbreviated, FormStyle.Format, true);
      break;
    case "BBBB":
      formatter = dateStrGetter(TranslationType.DayPeriods, TranslationWidth.Wide, FormStyle.Format, true);
      break;
    case "BBBBB":
      formatter = dateStrGetter(TranslationType.DayPeriods, TranslationWidth.Narrow, FormStyle.Format, true);
      break;
    case "h":
      formatter = dateGetter(DateType.Hours, 1, -12);
      break;
    case "hh":
      formatter = dateGetter(DateType.Hours, 2, -12);
      break;
    case "H":
      formatter = dateGetter(DateType.Hours, 1);
      break;
    case "HH":
      formatter = dateGetter(DateType.Hours, 2);
      break;
    case "m":
      formatter = dateGetter(DateType.Minutes, 1);
      break;
    case "mm":
      formatter = dateGetter(DateType.Minutes, 2);
      break;
    case "s":
      formatter = dateGetter(DateType.Seconds, 1);
      break;
    case "ss":
      formatter = dateGetter(DateType.Seconds, 2);
      break;
    case "S":
      formatter = dateGetter(DateType.FractionalSeconds, 1);
      break;
    case "SS":
      formatter = dateGetter(DateType.FractionalSeconds, 2);
      break;
    case "SSS":
      formatter = dateGetter(DateType.FractionalSeconds, 3);
      break;
    case "Z":
    case "ZZ":
    case "ZZZ":
      formatter = timeZoneGetter(ZoneWidth.Short);
      break;
    case "ZZZZZ":
      formatter = timeZoneGetter(ZoneWidth.Extended);
      break;
    case "O":
    case "OO":
    case "OOO":
    case "z":
    case "zz":
    case "zzz":
      formatter = timeZoneGetter(ZoneWidth.ShortGMT);
      break;
    case "OOOO":
    case "ZZZZ":
    case "zzzz":
      formatter = timeZoneGetter(ZoneWidth.Long);
      break;
    default:
      return null;
  }
  DATE_FORMATS[format] = formatter;
  return formatter;
}
function timezoneToOffset(timezone, fallback) {
  timezone = timezone.replace(/:/g, "");
  const requestedTimezoneOffset = Date.parse("Jan 01, 1970 00:00:00 " + timezone) / 6e4;
  return isNaN(requestedTimezoneOffset) ? fallback : requestedTimezoneOffset;
}
function addDateMinutes(date, minutes) {
  date = new Date(date.getTime());
  date.setMinutes(date.getMinutes() + minutes);
  return date;
}
function convertTimezoneToLocal(date, timezone, reverse) {
  const reverseValue = reverse ? -1 : 1;
  const dateTimezoneOffset = date.getTimezoneOffset();
  const timezoneOffset = timezoneToOffset(timezone, dateTimezoneOffset);
  return addDateMinutes(date, reverseValue * (timezoneOffset - dateTimezoneOffset));
}
function toDate(value) {
  if (isDate(value)) {
    return value;
  }
  if (typeof value === "number" && !isNaN(value)) {
    return new Date(value);
  }
  if (typeof value === "string") {
    value = value.trim();
    if (/^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(value)) {
      const [y, m = 1, d = 1] = value.split("-").map((val) => +val);
      return createDate(y, m - 1, d);
    }
    const parsedNb = parseFloat(value);
    if (!isNaN(value - parsedNb)) {
      return new Date(parsedNb);
    }
    let match;
    if (match = value.match(ISO8601_DATE_REGEX)) {
      return isoStringToDate(match);
    }
  }
  const date = new Date(value);
  if (!isDate(date)) {
    throw new Error(`Unable to convert "${value}" into a date`);
  }
  return date;
}
function isoStringToDate(match) {
  const date = /* @__PURE__ */ new Date(0);
  let tzHour = 0;
  let tzMin = 0;
  const dateSetter = match[8] ? date.setUTCFullYear : date.setFullYear;
  const timeSetter = match[8] ? date.setUTCHours : date.setHours;
  if (match[9]) {
    tzHour = Number(match[9] + match[10]);
    tzMin = Number(match[9] + match[11]);
  }
  dateSetter.call(date, Number(match[1]), Number(match[2]) - 1, Number(match[3]));
  const h = Number(match[4] || 0) - tzHour;
  const m = Number(match[5] || 0) - tzMin;
  const s = Number(match[6] || 0);
  const ms = Math.floor(parseFloat("0." + (match[7] || 0)) * 1e3);
  timeSetter.call(date, h, m, s, ms);
  return date;
}
function isDate(value) {
  return value instanceof Date && !isNaN(value.valueOf());
}
var NUMBER_FORMAT_REGEXP = /^(\d+)?\.((\d+)(-(\d+))?)?$/;
var MAX_DIGITS = 22;
var DECIMAL_SEP = ".";
var ZERO_CHAR = "0";
var PATTERN_SEP = ";";
var GROUP_SEP = ",";
var DIGIT_CHAR = "#";
var CURRENCY_CHAR = "¤";
var PERCENT_CHAR = "%";
function formatNumberToLocaleString(value, pattern, locale, groupSymbol, decimalSymbol, digitsInfo, isPercent = false) {
  let formattedText = "";
  let isZero = false;
  if (!isFinite(value)) {
    formattedText = getLocaleNumberSymbol(locale, NumberSymbol.Infinity);
  } else {
    let parsedNumber = parseNumber(value);
    if (isPercent) {
      parsedNumber = toPercent(parsedNumber);
    }
    let minInt = pattern.minInt;
    let minFraction = pattern.minFrac;
    let maxFraction = pattern.maxFrac;
    if (digitsInfo) {
      const parts = digitsInfo.match(NUMBER_FORMAT_REGEXP);
      if (parts === null) {
        throw new Error(`${digitsInfo} is not a valid digit info`);
      }
      const minIntPart = parts[1];
      const minFractionPart = parts[3];
      const maxFractionPart = parts[5];
      if (minIntPart != null) {
        minInt = parseIntAutoRadix(minIntPart);
      }
      if (minFractionPart != null) {
        minFraction = parseIntAutoRadix(minFractionPart);
      }
      if (maxFractionPart != null) {
        maxFraction = parseIntAutoRadix(maxFractionPart);
      } else if (minFractionPart != null && minFraction > maxFraction) {
        maxFraction = minFraction;
      }
    }
    roundNumber(parsedNumber, minFraction, maxFraction);
    let digits = parsedNumber.digits;
    let integerLen = parsedNumber.integerLen;
    const exponent = parsedNumber.exponent;
    let decimals = [];
    isZero = digits.every((d) => !d);
    for (; integerLen < minInt; integerLen++) {
      digits.unshift(0);
    }
    for (; integerLen < 0; integerLen++) {
      digits.unshift(0);
    }
    if (integerLen > 0) {
      decimals = digits.splice(integerLen, digits.length);
    } else {
      decimals = digits;
      digits = [0];
    }
    const groups = [];
    if (digits.length >= pattern.lgSize) {
      groups.unshift(digits.splice(-pattern.lgSize, digits.length).join(""));
    }
    while (digits.length > pattern.gSize) {
      groups.unshift(digits.splice(-pattern.gSize, digits.length).join(""));
    }
    if (digits.length) {
      groups.unshift(digits.join(""));
    }
    formattedText = groups.join(getLocaleNumberSymbol(locale, groupSymbol));
    if (decimals.length) {
      formattedText += getLocaleNumberSymbol(locale, decimalSymbol) + decimals.join("");
    }
    if (exponent) {
      formattedText += getLocaleNumberSymbol(locale, NumberSymbol.Exponential) + "+" + exponent;
    }
  }
  if (value < 0 && !isZero) {
    formattedText = pattern.negPre + formattedText + pattern.negSuf;
  } else {
    formattedText = pattern.posPre + formattedText + pattern.posSuf;
  }
  return formattedText;
}
function formatCurrency(value, locale, currency, currencyCode, digitsInfo) {
  const format = getLocaleNumberFormat(locale, NumberFormatStyle.Currency);
  const pattern = parseNumberFormat(format, getLocaleNumberSymbol(locale, NumberSymbol.MinusSign));
  pattern.minFrac = getNumberOfCurrencyDigits(currencyCode);
  pattern.maxFrac = pattern.minFrac;
  const res = formatNumberToLocaleString(value, pattern, locale, NumberSymbol.CurrencyGroup, NumberSymbol.CurrencyDecimal, digitsInfo);
  return res.replace(CURRENCY_CHAR, currency).replace(CURRENCY_CHAR, "").trim();
}
function formatPercent(value, locale, digitsInfo) {
  const format = getLocaleNumberFormat(locale, NumberFormatStyle.Percent);
  const pattern = parseNumberFormat(format, getLocaleNumberSymbol(locale, NumberSymbol.MinusSign));
  const res = formatNumberToLocaleString(value, pattern, locale, NumberSymbol.Group, NumberSymbol.Decimal, digitsInfo, true);
  return res.replace(new RegExp(PERCENT_CHAR, "g"), getLocaleNumberSymbol(locale, NumberSymbol.PercentSign));
}
function formatNumber(value, locale, digitsInfo) {
  const format = getLocaleNumberFormat(locale, NumberFormatStyle.Decimal);
  const pattern = parseNumberFormat(format, getLocaleNumberSymbol(locale, NumberSymbol.MinusSign));
  return formatNumberToLocaleString(value, pattern, locale, NumberSymbol.Group, NumberSymbol.Decimal, digitsInfo);
}
function parseNumberFormat(format, minusSign = "-") {
  const p = {
    minInt: 1,
    minFrac: 0,
    maxFrac: 0,
    posPre: "",
    posSuf: "",
    negPre: "",
    negSuf: "",
    gSize: 0,
    lgSize: 0
  };
  const patternParts = format.split(PATTERN_SEP);
  const positive = patternParts[0];
  const negative = patternParts[1];
  const positiveParts = positive.indexOf(DECIMAL_SEP) !== -1 ? positive.split(DECIMAL_SEP) : [positive.substring(0, positive.lastIndexOf(ZERO_CHAR) + 1), positive.substring(positive.lastIndexOf(ZERO_CHAR) + 1)], integer = positiveParts[0], fraction = positiveParts[1] || "";
  p.posPre = integer.substring(0, integer.indexOf(DIGIT_CHAR));
  for (let i = 0; i < fraction.length; i++) {
    const ch = fraction.charAt(i);
    if (ch === ZERO_CHAR) {
      p.minFrac = p.maxFrac = i + 1;
    } else if (ch === DIGIT_CHAR) {
      p.maxFrac = i + 1;
    } else {
      p.posSuf += ch;
    }
  }
  const groups = integer.split(GROUP_SEP);
  p.gSize = groups[1] ? groups[1].length : 0;
  p.lgSize = groups[2] || groups[1] ? (groups[2] || groups[1]).length : 0;
  if (negative) {
    const trunkLen = positive.length - p.posPre.length - p.posSuf.length, pos = negative.indexOf(DIGIT_CHAR);
    p.negPre = negative.substring(0, pos).replace(/'/g, "");
    p.negSuf = negative.slice(pos + trunkLen).replace(/'/g, "");
  } else {
    p.negPre = minusSign + p.posPre;
    p.negSuf = p.posSuf;
  }
  return p;
}
function toPercent(parsedNumber) {
  if (parsedNumber.digits[0] === 0) {
    return parsedNumber;
  }
  const fractionLen = parsedNumber.digits.length - parsedNumber.integerLen;
  if (parsedNumber.exponent) {
    parsedNumber.exponent += 2;
  } else {
    if (fractionLen === 0) {
      parsedNumber.digits.push(0, 0);
    } else if (fractionLen === 1) {
      parsedNumber.digits.push(0);
    }
    parsedNumber.integerLen += 2;
  }
  return parsedNumber;
}
function parseNumber(num) {
  let numStr = Math.abs(num) + "";
  let exponent = 0, digits, integerLen;
  let i, j, zeros;
  if ((integerLen = numStr.indexOf(DECIMAL_SEP)) > -1) {
    numStr = numStr.replace(DECIMAL_SEP, "");
  }
  if ((i = numStr.search(/e/i)) > 0) {
    if (integerLen < 0)
      integerLen = i;
    integerLen += +numStr.slice(i + 1);
    numStr = numStr.substring(0, i);
  } else if (integerLen < 0) {
    integerLen = numStr.length;
  }
  for (i = 0; numStr.charAt(i) === ZERO_CHAR; i++) {
  }
  if (i === (zeros = numStr.length)) {
    digits = [0];
    integerLen = 1;
  } else {
    zeros--;
    while (numStr.charAt(zeros) === ZERO_CHAR)
      zeros--;
    integerLen -= i;
    digits = [];
    for (j = 0; i <= zeros; i++, j++) {
      digits[j] = Number(numStr.charAt(i));
    }
  }
  if (integerLen > MAX_DIGITS) {
    digits = digits.splice(0, MAX_DIGITS - 1);
    exponent = integerLen - 1;
    integerLen = 1;
  }
  return {
    digits,
    exponent,
    integerLen
  };
}
function roundNumber(parsedNumber, minFrac, maxFrac) {
  if (minFrac > maxFrac) {
    throw new Error(`The minimum number of digits after fraction (${minFrac}) is higher than the maximum (${maxFrac}).`);
  }
  let digits = parsedNumber.digits;
  let fractionLen = digits.length - parsedNumber.integerLen;
  const fractionSize = Math.min(Math.max(minFrac, fractionLen), maxFrac);
  let roundAt = fractionSize + parsedNumber.integerLen;
  let digit = digits[roundAt];
  if (roundAt > 0) {
    digits.splice(Math.max(parsedNumber.integerLen, roundAt));
    for (let j = roundAt; j < digits.length; j++) {
      digits[j] = 0;
    }
  } else {
    fractionLen = Math.max(0, fractionLen);
    parsedNumber.integerLen = 1;
    digits.length = Math.max(1, roundAt = fractionSize + 1);
    digits[0] = 0;
    for (let i = 1; i < roundAt; i++)
      digits[i] = 0;
  }
  if (digit >= 5) {
    if (roundAt - 1 < 0) {
      for (let k = 0; k > roundAt; k--) {
        digits.unshift(0);
        parsedNumber.integerLen++;
      }
      digits.unshift(1);
      parsedNumber.integerLen++;
    } else {
      digits[roundAt - 1]++;
    }
  }
  for (; fractionLen < Math.max(0, fractionSize); fractionLen++)
    digits.push(0);
  let dropTrailingZeros = fractionSize !== 0;
  const minLen = minFrac + parsedNumber.integerLen;
  const carry = digits.reduceRight(function(carry2, d, i, digits2) {
    d = d + carry2;
    digits2[i] = d < 10 ? d : d - 10;
    if (dropTrailingZeros) {
      if (digits2[i] === 0 && i >= minLen) {
        digits2.pop();
      } else {
        dropTrailingZeros = false;
      }
    }
    return d >= 10 ? 1 : 0;
  }, 0);
  if (carry) {
    digits.unshift(carry);
    parsedNumber.integerLen++;
  }
}
function parseIntAutoRadix(text) {
  const result = parseInt(text);
  if (isNaN(result)) {
    throw new Error("Invalid integer literal when parsing " + text);
  }
  return result;
}
var _NgLocalization = class _NgLocalization {
};
_NgLocalization.ɵfac = function NgLocalization_Factory(t) {
  return new (t || _NgLocalization)();
};
_NgLocalization.ɵprov = ɵɵdefineInjectable({
  token: _NgLocalization,
  factory: function NgLocalization_Factory(t) {
    let r = null;
    if (t) {
      r = new t();
    } else {
      r = ((locale) => new NgLocaleLocalization(locale))(ɵɵinject(LOCALE_ID));
    }
    return r;
  },
  providedIn: "root"
});
var NgLocalization = _NgLocalization;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgLocalization, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: (locale) => new NgLocaleLocalization(locale),
      deps: [LOCALE_ID]
    }]
  }], null, null);
})();
function getPluralCategory(value, cases, ngLocalization, locale) {
  let key = `=${value}`;
  if (cases.indexOf(key) > -1) {
    return key;
  }
  key = ngLocalization.getPluralCategory(value, locale);
  if (cases.indexOf(key) > -1) {
    return key;
  }
  if (cases.indexOf("other") > -1) {
    return "other";
  }
  throw new Error(`No plural message found for value "${value}"`);
}
var _NgLocaleLocalization = class _NgLocaleLocalization extends NgLocalization {
  constructor(locale) {
    super();
    this.locale = locale;
  }
  getPluralCategory(value, locale) {
    const plural = getLocalePluralCase2(locale || this.locale)(value);
    switch (plural) {
      case Plural.Zero:
        return "zero";
      case Plural.One:
        return "one";
      case Plural.Two:
        return "two";
      case Plural.Few:
        return "few";
      case Plural.Many:
        return "many";
      default:
        return "other";
    }
  }
};
_NgLocaleLocalization.ɵfac = function NgLocaleLocalization_Factory(t) {
  return new (t || _NgLocaleLocalization)(ɵɵinject(LOCALE_ID));
};
_NgLocaleLocalization.ɵprov = ɵɵdefineInjectable({
  token: _NgLocaleLocalization,
  factory: _NgLocaleLocalization.ɵfac
});
var NgLocaleLocalization = _NgLocaleLocalization;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgLocaleLocalization, [{
    type: Injectable
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [LOCALE_ID]
    }]
  }], null);
})();
function registerLocaleData2(data, localeId, extraData) {
  return registerLocaleData(data, localeId, extraData);
}
function parseCookieValue(cookieStr, name) {
  name = encodeURIComponent(name);
  for (const cookie of cookieStr.split(";")) {
    const eqIndex = cookie.indexOf("=");
    const [cookieName, cookieValue] = eqIndex == -1 ? [cookie, ""] : [cookie.slice(0, eqIndex), cookie.slice(eqIndex + 1)];
    if (cookieName.trim() === name) {
      return decodeURIComponent(cookieValue);
    }
  }
  return null;
}
var WS_REGEXP = /\s+/;
var EMPTY_ARRAY = [];
var _NgClass = class _NgClass {
  constructor(_iterableDiffers, _keyValueDiffers, _ngEl, _renderer) {
    this._iterableDiffers = _iterableDiffers;
    this._keyValueDiffers = _keyValueDiffers;
    this._ngEl = _ngEl;
    this._renderer = _renderer;
    this.initialClasses = EMPTY_ARRAY;
    this.stateMap = /* @__PURE__ */ new Map();
  }
  set klass(value) {
    this.initialClasses = value != null ? value.trim().split(WS_REGEXP) : EMPTY_ARRAY;
  }
  set ngClass(value) {
    this.rawClass = typeof value === "string" ? value.trim().split(WS_REGEXP) : value;
  }
  /*
  The NgClass directive uses the custom change detection algorithm for its inputs. The custom
  algorithm is necessary since inputs are represented as complex object or arrays that need to be
  deeply-compared.
     This algorithm is perf-sensitive since NgClass is used very frequently and its poor performance
  might negatively impact runtime performance of the entire change detection cycle. The design of
  this algorithm is making sure that:
  - there is no unnecessary DOM manipulation (CSS classes are added / removed from the DOM only when
  needed), even if references to bound objects change;
  - there is no memory allocation if nothing changes (even relatively modest memory allocation
  during the change detection cycle can result in GC pauses for some of the CD cycles).
     The algorithm works by iterating over the set of bound classes, staring with [class] binding and
  then going over [ngClass] binding. For each CSS class name:
  - check if it was seen before (this information is tracked in the state map) and if its value
  changed;
  - mark it as "touched" - names that are not marked are not present in the latest set of binding
  and we can remove such class name from the internal data structures;
     After iteration over all the CSS class names we've got data structure with all the information
  necessary to synchronize changes to the DOM - it is enough to iterate over the state map, flush
  changes to the DOM and reset internal data structures so those are ready for the next change
  detection cycle.
   */
  ngDoCheck() {
    for (const klass of this.initialClasses) {
      this._updateState(klass, true);
    }
    const rawClass = this.rawClass;
    if (Array.isArray(rawClass) || rawClass instanceof Set) {
      for (const klass of rawClass) {
        this._updateState(klass, true);
      }
    } else if (rawClass != null) {
      for (const klass of Object.keys(rawClass)) {
        this._updateState(klass, Boolean(rawClass[klass]));
      }
    }
    this._applyStateDiff();
  }
  _updateState(klass, nextEnabled) {
    const state = this.stateMap.get(klass);
    if (state !== void 0) {
      if (state.enabled !== nextEnabled) {
        state.changed = true;
        state.enabled = nextEnabled;
      }
      state.touched = true;
    } else {
      this.stateMap.set(klass, {
        enabled: nextEnabled,
        changed: true,
        touched: true
      });
    }
  }
  _applyStateDiff() {
    for (const stateEntry of this.stateMap) {
      const klass = stateEntry[0];
      const state = stateEntry[1];
      if (state.changed) {
        this._toggleClass(klass, state.enabled);
        state.changed = false;
      } else if (!state.touched) {
        if (state.enabled) {
          this._toggleClass(klass, false);
        }
        this.stateMap.delete(klass);
      }
      state.touched = false;
    }
  }
  _toggleClass(klass, enabled) {
    if (ngDevMode) {
      if (typeof klass !== "string") {
        throw new Error(`NgClass can only toggle CSS classes expressed as strings, got ${stringify(klass)}`);
      }
    }
    klass = klass.trim();
    if (klass.length > 0) {
      klass.split(WS_REGEXP).forEach((klass2) => {
        if (enabled) {
          this._renderer.addClass(this._ngEl.nativeElement, klass2);
        } else {
          this._renderer.removeClass(this._ngEl.nativeElement, klass2);
        }
      });
    }
  }
};
_NgClass.ɵfac = function NgClass_Factory(t) {
  return new (t || _NgClass)(ɵɵdirectiveInject(IterableDiffers), ɵɵdirectiveInject(KeyValueDiffers), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2));
};
_NgClass.ɵdir = ɵɵdefineDirective({
  type: _NgClass,
  selectors: [["", "ngClass", ""]],
  inputs: {
    klass: ["class", "klass"],
    ngClass: "ngClass"
  },
  standalone: true
});
var NgClass = _NgClass;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgClass, [{
    type: Directive,
    args: [{
      selector: "[ngClass]",
      standalone: true
    }]
  }], () => [{
    type: IterableDiffers
  }, {
    type: KeyValueDiffers
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }], {
    klass: [{
      type: Input,
      args: ["class"]
    }],
    ngClass: [{
      type: Input,
      args: ["ngClass"]
    }]
  });
})();
var _NgComponentOutlet = class _NgComponentOutlet {
  constructor(_viewContainerRef) {
    this._viewContainerRef = _viewContainerRef;
    this.ngComponentOutlet = null;
    this._inputsUsed = /* @__PURE__ */ new Map();
  }
  _needToReCreateNgModuleInstance(changes) {
    return changes["ngComponentOutletNgModule"] !== void 0 || changes["ngComponentOutletNgModuleFactory"] !== void 0;
  }
  _needToReCreateComponentInstance(changes) {
    return changes["ngComponentOutlet"] !== void 0 || changes["ngComponentOutletContent"] !== void 0 || changes["ngComponentOutletInjector"] !== void 0 || this._needToReCreateNgModuleInstance(changes);
  }
  /** @nodoc */
  ngOnChanges(changes) {
    if (this._needToReCreateComponentInstance(changes)) {
      this._viewContainerRef.clear();
      this._inputsUsed.clear();
      this._componentRef = void 0;
      if (this.ngComponentOutlet) {
        const injector = this.ngComponentOutletInjector || this._viewContainerRef.parentInjector;
        if (this._needToReCreateNgModuleInstance(changes)) {
          this._moduleRef?.destroy();
          if (this.ngComponentOutletNgModule) {
            this._moduleRef = createNgModule(this.ngComponentOutletNgModule, getParentInjector(injector));
          } else if (this.ngComponentOutletNgModuleFactory) {
            this._moduleRef = this.ngComponentOutletNgModuleFactory.create(getParentInjector(injector));
          } else {
            this._moduleRef = void 0;
          }
        }
        this._componentRef = this._viewContainerRef.createComponent(this.ngComponentOutlet, {
          injector,
          ngModuleRef: this._moduleRef,
          projectableNodes: this.ngComponentOutletContent
        });
      }
    }
  }
  /** @nodoc */
  ngDoCheck() {
    if (this._componentRef) {
      if (this.ngComponentOutletInputs) {
        for (const inputName of Object.keys(this.ngComponentOutletInputs)) {
          this._inputsUsed.set(inputName, true);
        }
      }
      this._applyInputStateDiff(this._componentRef);
    }
  }
  /** @nodoc */
  ngOnDestroy() {
    this._moduleRef?.destroy();
  }
  _applyInputStateDiff(componentRef) {
    for (const [inputName, touched] of this._inputsUsed) {
      if (!touched) {
        componentRef.setInput(inputName, void 0);
        this._inputsUsed.delete(inputName);
      } else {
        componentRef.setInput(inputName, this.ngComponentOutletInputs[inputName]);
        this._inputsUsed.set(inputName, false);
      }
    }
  }
};
_NgComponentOutlet.ɵfac = function NgComponentOutlet_Factory(t) {
  return new (t || _NgComponentOutlet)(ɵɵdirectiveInject(ViewContainerRef));
};
_NgComponentOutlet.ɵdir = ɵɵdefineDirective({
  type: _NgComponentOutlet,
  selectors: [["", "ngComponentOutlet", ""]],
  inputs: {
    ngComponentOutlet: "ngComponentOutlet",
    ngComponentOutletInputs: "ngComponentOutletInputs",
    ngComponentOutletInjector: "ngComponentOutletInjector",
    ngComponentOutletContent: "ngComponentOutletContent",
    ngComponentOutletNgModule: "ngComponentOutletNgModule",
    ngComponentOutletNgModuleFactory: "ngComponentOutletNgModuleFactory"
  },
  standalone: true,
  features: [ɵɵNgOnChangesFeature]
});
var NgComponentOutlet = _NgComponentOutlet;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgComponentOutlet, [{
    type: Directive,
    args: [{
      selector: "[ngComponentOutlet]",
      standalone: true
    }]
  }], () => [{
    type: ViewContainerRef
  }], {
    ngComponentOutlet: [{
      type: Input
    }],
    ngComponentOutletInputs: [{
      type: Input
    }],
    ngComponentOutletInjector: [{
      type: Input
    }],
    ngComponentOutletContent: [{
      type: Input
    }],
    ngComponentOutletNgModule: [{
      type: Input
    }],
    ngComponentOutletNgModuleFactory: [{
      type: Input
    }]
  });
})();
function getParentInjector(injector) {
  const parentNgModule = injector.get(NgModuleRef$1);
  return parentNgModule.injector;
}
var NgForOfContext = class {
  constructor($implicit, ngForOf, index, count) {
    this.$implicit = $implicit;
    this.ngForOf = ngForOf;
    this.index = index;
    this.count = count;
  }
  get first() {
    return this.index === 0;
  }
  get last() {
    return this.index === this.count - 1;
  }
  get even() {
    return this.index % 2 === 0;
  }
  get odd() {
    return !this.even;
  }
};
var _NgForOf = class _NgForOf {
  /**
   * The value of the iterable expression, which can be used as a
   * [template input variable](guide/structural-directives#shorthand).
   */
  set ngForOf(ngForOf) {
    this._ngForOf = ngForOf;
    this._ngForOfDirty = true;
  }
  /**
   * Specifies a custom `TrackByFunction` to compute the identity of items in an iterable.
   *
   * If a custom `TrackByFunction` is not provided, `NgForOf` will use the item's [object
   * identity](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is)
   * as the key.
   *
   * `NgForOf` uses the computed key to associate items in an iterable with DOM elements
   * it produces for these items.
   *
   * A custom `TrackByFunction` is useful to provide good user experience in cases when items in an
   * iterable rendered using `NgForOf` have a natural identifier (for example, custom ID or a
   * primary key), and this iterable could be updated with new object instances that still
   * represent the same underlying entity (for example, when data is re-fetched from the server,
   * and the iterable is recreated and re-rendered, but most of the data is still the same).
   *
   * @see {@link TrackByFunction}
   */
  set ngForTrackBy(fn) {
    if ((typeof ngDevMode === "undefined" || ngDevMode) && fn != null && typeof fn !== "function") {
      console.warn(`trackBy must be a function, but received ${JSON.stringify(fn)}. See https://angular.io/api/common/NgForOf#change-propagation for more information.`);
    }
    this._trackByFn = fn;
  }
  get ngForTrackBy() {
    return this._trackByFn;
  }
  constructor(_viewContainer, _template, _differs) {
    this._viewContainer = _viewContainer;
    this._template = _template;
    this._differs = _differs;
    this._ngForOf = null;
    this._ngForOfDirty = true;
    this._differ = null;
  }
  /**
   * A reference to the template that is stamped out for each item in the iterable.
   * @see [template reference variable](guide/template-reference-variables)
   */
  set ngForTemplate(value) {
    if (value) {
      this._template = value;
    }
  }
  /**
   * Applies the changes when needed.
   * @nodoc
   */
  ngDoCheck() {
    if (this._ngForOfDirty) {
      this._ngForOfDirty = false;
      const value = this._ngForOf;
      if (!this._differ && value) {
        if (typeof ngDevMode === "undefined" || ngDevMode) {
          try {
            this._differ = this._differs.find(value).create(this.ngForTrackBy);
          } catch {
            let errorMessage = `Cannot find a differ supporting object '${value}' of type '${getTypeName(value)}'. NgFor only supports binding to Iterables, such as Arrays.`;
            if (typeof value === "object") {
              errorMessage += " Did you mean to use the keyvalue pipe?";
            }
            throw new RuntimeError(-2200, errorMessage);
          }
        } else {
          this._differ = this._differs.find(value).create(this.ngForTrackBy);
        }
      }
    }
    if (this._differ) {
      const changes = this._differ.diff(this._ngForOf);
      if (changes)
        this._applyChanges(changes);
    }
  }
  _applyChanges(changes) {
    const viewContainer = this._viewContainer;
    changes.forEachOperation((item, adjustedPreviousIndex, currentIndex) => {
      if (item.previousIndex == null) {
        viewContainer.createEmbeddedView(this._template, new NgForOfContext(item.item, this._ngForOf, -1, -1), currentIndex === null ? void 0 : currentIndex);
      } else if (currentIndex == null) {
        viewContainer.remove(adjustedPreviousIndex === null ? void 0 : adjustedPreviousIndex);
      } else if (adjustedPreviousIndex !== null) {
        const view = viewContainer.get(adjustedPreviousIndex);
        viewContainer.move(view, currentIndex);
        applyViewChange(view, item);
      }
    });
    for (let i = 0, ilen = viewContainer.length; i < ilen; i++) {
      const viewRef = viewContainer.get(i);
      const context = viewRef.context;
      context.index = i;
      context.count = ilen;
      context.ngForOf = this._ngForOf;
    }
    changes.forEachIdentityChange((record) => {
      const viewRef = viewContainer.get(record.currentIndex);
      applyViewChange(viewRef, record);
    });
  }
  /**
   * Asserts the correct type of the context for the template that `NgForOf` will render.
   *
   * The presence of this method is a signal to the Ivy template type-check compiler that the
   * `NgForOf` structural directive renders its template with a specific context type.
   */
  static ngTemplateContextGuard(dir, ctx) {
    return true;
  }
};
_NgForOf.ɵfac = function NgForOf_Factory(t) {
  return new (t || _NgForOf)(ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(TemplateRef), ɵɵdirectiveInject(IterableDiffers));
};
_NgForOf.ɵdir = ɵɵdefineDirective({
  type: _NgForOf,
  selectors: [["", "ngFor", "", "ngForOf", ""]],
  inputs: {
    ngForOf: "ngForOf",
    ngForTrackBy: "ngForTrackBy",
    ngForTemplate: "ngForTemplate"
  },
  standalone: true
});
var NgForOf = _NgForOf;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgForOf, [{
    type: Directive,
    args: [{
      selector: "[ngFor][ngForOf]",
      standalone: true
    }]
  }], () => [{
    type: ViewContainerRef
  }, {
    type: TemplateRef
  }, {
    type: IterableDiffers
  }], {
    ngForOf: [{
      type: Input
    }],
    ngForTrackBy: [{
      type: Input
    }],
    ngForTemplate: [{
      type: Input
    }]
  });
})();
function applyViewChange(view, record) {
  view.context.$implicit = record.item;
}
function getTypeName(type) {
  return type["name"] || typeof type;
}
var _NgIf = class _NgIf {
  constructor(_viewContainer, templateRef) {
    this._viewContainer = _viewContainer;
    this._context = new NgIfContext();
    this._thenTemplateRef = null;
    this._elseTemplateRef = null;
    this._thenViewRef = null;
    this._elseViewRef = null;
    this._thenTemplateRef = templateRef;
  }
  /**
   * The Boolean expression to evaluate as the condition for showing a template.
   */
  set ngIf(condition) {
    this._context.$implicit = this._context.ngIf = condition;
    this._updateView();
  }
  /**
   * A template to show if the condition expression evaluates to true.
   */
  set ngIfThen(templateRef) {
    assertTemplate("ngIfThen", templateRef);
    this._thenTemplateRef = templateRef;
    this._thenViewRef = null;
    this._updateView();
  }
  /**
   * A template to show if the condition expression evaluates to false.
   */
  set ngIfElse(templateRef) {
    assertTemplate("ngIfElse", templateRef);
    this._elseTemplateRef = templateRef;
    this._elseViewRef = null;
    this._updateView();
  }
  _updateView() {
    if (this._context.$implicit) {
      if (!this._thenViewRef) {
        this._viewContainer.clear();
        this._elseViewRef = null;
        if (this._thenTemplateRef) {
          this._thenViewRef = this._viewContainer.createEmbeddedView(this._thenTemplateRef, this._context);
        }
      }
    } else {
      if (!this._elseViewRef) {
        this._viewContainer.clear();
        this._thenViewRef = null;
        if (this._elseTemplateRef) {
          this._elseViewRef = this._viewContainer.createEmbeddedView(this._elseTemplateRef, this._context);
        }
      }
    }
  }
  /**
   * Asserts the correct type of the context for the template that `NgIf` will render.
   *
   * The presence of this method is a signal to the Ivy template type-check compiler that the
   * `NgIf` structural directive renders its template with a specific context type.
   */
  static ngTemplateContextGuard(dir, ctx) {
    return true;
  }
};
_NgIf.ɵfac = function NgIf_Factory(t) {
  return new (t || _NgIf)(ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(TemplateRef));
};
_NgIf.ɵdir = ɵɵdefineDirective({
  type: _NgIf,
  selectors: [["", "ngIf", ""]],
  inputs: {
    ngIf: "ngIf",
    ngIfThen: "ngIfThen",
    ngIfElse: "ngIfElse"
  },
  standalone: true
});
var NgIf = _NgIf;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgIf, [{
    type: Directive,
    args: [{
      selector: "[ngIf]",
      standalone: true
    }]
  }], () => [{
    type: ViewContainerRef
  }, {
    type: TemplateRef
  }], {
    ngIf: [{
      type: Input
    }],
    ngIfThen: [{
      type: Input
    }],
    ngIfElse: [{
      type: Input
    }]
  });
})();
var NgIfContext = class {
  constructor() {
    this.$implicit = null;
    this.ngIf = null;
  }
};
function assertTemplate(property, templateRef) {
  const isTemplateRefOrNull = !!(!templateRef || templateRef.createEmbeddedView);
  if (!isTemplateRefOrNull) {
    throw new Error(`${property} must be a TemplateRef, but received '${stringify(templateRef)}'.`);
  }
}
var NG_SWITCH_USE_STRICT_EQUALS = true;
var SwitchView = class {
  constructor(_viewContainerRef, _templateRef) {
    this._viewContainerRef = _viewContainerRef;
    this._templateRef = _templateRef;
    this._created = false;
  }
  create() {
    this._created = true;
    this._viewContainerRef.createEmbeddedView(this._templateRef);
  }
  destroy() {
    this._created = false;
    this._viewContainerRef.clear();
  }
  enforceState(created) {
    if (created && !this._created) {
      this.create();
    } else if (!created && this._created) {
      this.destroy();
    }
  }
};
var _NgSwitch = class _NgSwitch {
  constructor() {
    this._defaultViews = [];
    this._defaultUsed = false;
    this._caseCount = 0;
    this._lastCaseCheckIndex = 0;
    this._lastCasesMatched = false;
  }
  set ngSwitch(newValue) {
    this._ngSwitch = newValue;
    if (this._caseCount === 0) {
      this._updateDefaultCases(true);
    }
  }
  /** @internal */
  _addCase() {
    return this._caseCount++;
  }
  /** @internal */
  _addDefault(view) {
    this._defaultViews.push(view);
  }
  /** @internal */
  _matchCase(value) {
    const matched = NG_SWITCH_USE_STRICT_EQUALS ? value === this._ngSwitch : value == this._ngSwitch;
    if ((typeof ngDevMode === "undefined" || ngDevMode) && matched !== (value == this._ngSwitch)) {
      console.warn(formatRuntimeError(2001, `As of Angular v17 the NgSwitch directive uses strict equality comparison === instead of == to match different cases. Previously the case value "${stringifyValue(value)}" matched switch expression value "${stringifyValue(this._ngSwitch)}", but this is no longer the case with the stricter equality check. Your comparison results return different results using === vs. == and you should adjust your ngSwitch expression and / or values to conform with the strict equality requirements.`));
    }
    this._lastCasesMatched = this._lastCasesMatched || matched;
    this._lastCaseCheckIndex++;
    if (this._lastCaseCheckIndex === this._caseCount) {
      this._updateDefaultCases(!this._lastCasesMatched);
      this._lastCaseCheckIndex = 0;
      this._lastCasesMatched = false;
    }
    return matched;
  }
  _updateDefaultCases(useDefault) {
    if (this._defaultViews.length > 0 && useDefault !== this._defaultUsed) {
      this._defaultUsed = useDefault;
      for (const defaultView of this._defaultViews) {
        defaultView.enforceState(useDefault);
      }
    }
  }
};
_NgSwitch.ɵfac = function NgSwitch_Factory(t) {
  return new (t || _NgSwitch)();
};
_NgSwitch.ɵdir = ɵɵdefineDirective({
  type: _NgSwitch,
  selectors: [["", "ngSwitch", ""]],
  inputs: {
    ngSwitch: "ngSwitch"
  },
  standalone: true
});
var NgSwitch = _NgSwitch;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgSwitch, [{
    type: Directive,
    args: [{
      selector: "[ngSwitch]",
      standalone: true
    }]
  }], null, {
    ngSwitch: [{
      type: Input
    }]
  });
})();
var _NgSwitchCase = class _NgSwitchCase {
  constructor(viewContainer, templateRef, ngSwitch) {
    this.ngSwitch = ngSwitch;
    if ((typeof ngDevMode === "undefined" || ngDevMode) && !ngSwitch) {
      throwNgSwitchProviderNotFoundError("ngSwitchCase", "NgSwitchCase");
    }
    ngSwitch._addCase();
    this._view = new SwitchView(viewContainer, templateRef);
  }
  /**
   * Performs case matching. For internal use only.
   * @nodoc
   */
  ngDoCheck() {
    this._view.enforceState(this.ngSwitch._matchCase(this.ngSwitchCase));
  }
};
_NgSwitchCase.ɵfac = function NgSwitchCase_Factory(t) {
  return new (t || _NgSwitchCase)(ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(TemplateRef), ɵɵdirectiveInject(NgSwitch, 9));
};
_NgSwitchCase.ɵdir = ɵɵdefineDirective({
  type: _NgSwitchCase,
  selectors: [["", "ngSwitchCase", ""]],
  inputs: {
    ngSwitchCase: "ngSwitchCase"
  },
  standalone: true
});
var NgSwitchCase = _NgSwitchCase;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgSwitchCase, [{
    type: Directive,
    args: [{
      selector: "[ngSwitchCase]",
      standalone: true
    }]
  }], () => [{
    type: ViewContainerRef
  }, {
    type: TemplateRef
  }, {
    type: NgSwitch,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }]
  }], {
    ngSwitchCase: [{
      type: Input
    }]
  });
})();
var _NgSwitchDefault = class _NgSwitchDefault {
  constructor(viewContainer, templateRef, ngSwitch) {
    if ((typeof ngDevMode === "undefined" || ngDevMode) && !ngSwitch) {
      throwNgSwitchProviderNotFoundError("ngSwitchDefault", "NgSwitchDefault");
    }
    ngSwitch._addDefault(new SwitchView(viewContainer, templateRef));
  }
};
_NgSwitchDefault.ɵfac = function NgSwitchDefault_Factory(t) {
  return new (t || _NgSwitchDefault)(ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(TemplateRef), ɵɵdirectiveInject(NgSwitch, 9));
};
_NgSwitchDefault.ɵdir = ɵɵdefineDirective({
  type: _NgSwitchDefault,
  selectors: [["", "ngSwitchDefault", ""]],
  standalone: true
});
var NgSwitchDefault = _NgSwitchDefault;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgSwitchDefault, [{
    type: Directive,
    args: [{
      selector: "[ngSwitchDefault]",
      standalone: true
    }]
  }], () => [{
    type: ViewContainerRef
  }, {
    type: TemplateRef
  }, {
    type: NgSwitch,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }]
  }], null);
})();
function throwNgSwitchProviderNotFoundError(attrName, directiveName) {
  throw new RuntimeError(2e3, `An element with the "${attrName}" attribute (matching the "${directiveName}" directive) must be located inside an element with the "ngSwitch" attribute (matching "NgSwitch" directive)`);
}
function stringifyValue(value) {
  return typeof value === "string" ? `'${value}'` : String(value);
}
var _NgPlural = class _NgPlural {
  constructor(_localization) {
    this._localization = _localization;
    this._caseViews = {};
  }
  set ngPlural(value) {
    this._updateView(value);
  }
  addCase(value, switchView) {
    this._caseViews[value] = switchView;
  }
  _updateView(switchValue) {
    this._clearViews();
    const cases = Object.keys(this._caseViews);
    const key = getPluralCategory(switchValue, cases, this._localization);
    this._activateView(this._caseViews[key]);
  }
  _clearViews() {
    if (this._activeView)
      this._activeView.destroy();
  }
  _activateView(view) {
    if (view) {
      this._activeView = view;
      this._activeView.create();
    }
  }
};
_NgPlural.ɵfac = function NgPlural_Factory(t) {
  return new (t || _NgPlural)(ɵɵdirectiveInject(NgLocalization));
};
_NgPlural.ɵdir = ɵɵdefineDirective({
  type: _NgPlural,
  selectors: [["", "ngPlural", ""]],
  inputs: {
    ngPlural: "ngPlural"
  },
  standalone: true
});
var NgPlural = _NgPlural;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgPlural, [{
    type: Directive,
    args: [{
      selector: "[ngPlural]",
      standalone: true
    }]
  }], () => [{
    type: NgLocalization
  }], {
    ngPlural: [{
      type: Input
    }]
  });
})();
var _NgPluralCase = class _NgPluralCase {
  constructor(value, template, viewContainer, ngPlural) {
    this.value = value;
    const isANumber = !isNaN(Number(value));
    ngPlural.addCase(isANumber ? `=${value}` : value, new SwitchView(viewContainer, template));
  }
};
_NgPluralCase.ɵfac = function NgPluralCase_Factory(t) {
  return new (t || _NgPluralCase)(ɵɵinjectAttribute("ngPluralCase"), ɵɵdirectiveInject(TemplateRef), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(NgPlural, 1));
};
_NgPluralCase.ɵdir = ɵɵdefineDirective({
  type: _NgPluralCase,
  selectors: [["", "ngPluralCase", ""]],
  standalone: true
});
var NgPluralCase = _NgPluralCase;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgPluralCase, [{
    type: Directive,
    args: [{
      selector: "[ngPluralCase]",
      standalone: true
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Attribute,
      args: ["ngPluralCase"]
    }]
  }, {
    type: TemplateRef
  }, {
    type: ViewContainerRef
  }, {
    type: NgPlural,
    decorators: [{
      type: Host
    }]
  }], null);
})();
var _NgStyle = class _NgStyle {
  constructor(_ngEl, _differs, _renderer) {
    this._ngEl = _ngEl;
    this._differs = _differs;
    this._renderer = _renderer;
    this._ngStyle = null;
    this._differ = null;
  }
  set ngStyle(values) {
    this._ngStyle = values;
    if (!this._differ && values) {
      this._differ = this._differs.find(values).create();
    }
  }
  ngDoCheck() {
    if (this._differ) {
      const changes = this._differ.diff(this._ngStyle);
      if (changes) {
        this._applyChanges(changes);
      }
    }
  }
  _setStyle(nameAndUnit, value) {
    const [name, unit] = nameAndUnit.split(".");
    const flags = name.indexOf("-") === -1 ? void 0 : RendererStyleFlags2.DashCase;
    if (value != null) {
      this._renderer.setStyle(this._ngEl.nativeElement, name, unit ? `${value}${unit}` : value, flags);
    } else {
      this._renderer.removeStyle(this._ngEl.nativeElement, name, flags);
    }
  }
  _applyChanges(changes) {
    changes.forEachRemovedItem((record) => this._setStyle(record.key, null));
    changes.forEachAddedItem((record) => this._setStyle(record.key, record.currentValue));
    changes.forEachChangedItem((record) => this._setStyle(record.key, record.currentValue));
  }
};
_NgStyle.ɵfac = function NgStyle_Factory(t) {
  return new (t || _NgStyle)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(KeyValueDiffers), ɵɵdirectiveInject(Renderer2));
};
_NgStyle.ɵdir = ɵɵdefineDirective({
  type: _NgStyle,
  selectors: [["", "ngStyle", ""]],
  inputs: {
    ngStyle: "ngStyle"
  },
  standalone: true
});
var NgStyle = _NgStyle;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgStyle, [{
    type: Directive,
    args: [{
      selector: "[ngStyle]",
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: KeyValueDiffers
  }, {
    type: Renderer2
  }], {
    ngStyle: [{
      type: Input,
      args: ["ngStyle"]
    }]
  });
})();
var _NgTemplateOutlet = class _NgTemplateOutlet {
  constructor(_viewContainerRef) {
    this._viewContainerRef = _viewContainerRef;
    this._viewRef = null;
    this.ngTemplateOutletContext = null;
    this.ngTemplateOutlet = null;
    this.ngTemplateOutletInjector = null;
  }
  ngOnChanges(changes) {
    if (this._shouldRecreateView(changes)) {
      const viewContainerRef = this._viewContainerRef;
      if (this._viewRef) {
        viewContainerRef.remove(viewContainerRef.indexOf(this._viewRef));
      }
      if (!this.ngTemplateOutlet) {
        this._viewRef = null;
        return;
      }
      const viewContext = this._createContextForwardProxy();
      this._viewRef = viewContainerRef.createEmbeddedView(this.ngTemplateOutlet, viewContext, {
        injector: this.ngTemplateOutletInjector ?? void 0
      });
    }
  }
  /**
   * We need to re-create existing embedded view if either is true:
   * - the outlet changed.
   * - the injector changed.
   */
  _shouldRecreateView(changes) {
    return !!changes["ngTemplateOutlet"] || !!changes["ngTemplateOutletInjector"];
  }
  /**
   * For a given outlet instance, we create a proxy object that delegates
   * to the user-specified context. This allows changing, or swapping out
   * the context object completely without having to destroy/re-create the view.
   */
  _createContextForwardProxy() {
    return new Proxy({}, {
      set: (_target, prop, newValue) => {
        if (!this.ngTemplateOutletContext) {
          return false;
        }
        return Reflect.set(this.ngTemplateOutletContext, prop, newValue);
      },
      get: (_target, prop, receiver) => {
        if (!this.ngTemplateOutletContext) {
          return void 0;
        }
        return Reflect.get(this.ngTemplateOutletContext, prop, receiver);
      }
    });
  }
};
_NgTemplateOutlet.ɵfac = function NgTemplateOutlet_Factory(t) {
  return new (t || _NgTemplateOutlet)(ɵɵdirectiveInject(ViewContainerRef));
};
_NgTemplateOutlet.ɵdir = ɵɵdefineDirective({
  type: _NgTemplateOutlet,
  selectors: [["", "ngTemplateOutlet", ""]],
  inputs: {
    ngTemplateOutletContext: "ngTemplateOutletContext",
    ngTemplateOutlet: "ngTemplateOutlet",
    ngTemplateOutletInjector: "ngTemplateOutletInjector"
  },
  standalone: true,
  features: [ɵɵNgOnChangesFeature]
});
var NgTemplateOutlet = _NgTemplateOutlet;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgTemplateOutlet, [{
    type: Directive,
    args: [{
      selector: "[ngTemplateOutlet]",
      standalone: true
    }]
  }], () => [{
    type: ViewContainerRef
  }], {
    ngTemplateOutletContext: [{
      type: Input
    }],
    ngTemplateOutlet: [{
      type: Input
    }],
    ngTemplateOutletInjector: [{
      type: Input
    }]
  });
})();
var COMMON_DIRECTIVES = [NgClass, NgComponentOutlet, NgForOf, NgIf, NgTemplateOutlet, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault, NgPlural, NgPluralCase];
function invalidPipeArgumentError(type, value) {
  return new RuntimeError(2100, ngDevMode && `InvalidPipeArgument: '${value}' for pipe '${stringify(type)}'`);
}
var SubscribableStrategy = class {
  createSubscription(async, updateLatestValue) {
    return untracked(() => async.subscribe({
      next: updateLatestValue,
      error: (e) => {
        throw e;
      }
    }));
  }
  dispose(subscription) {
    untracked(() => subscription.unsubscribe());
  }
};
var PromiseStrategy = class {
  createSubscription(async, updateLatestValue) {
    return async.then(updateLatestValue, (e) => {
      throw e;
    });
  }
  dispose(subscription) {
  }
};
var _promiseStrategy = new PromiseStrategy();
var _subscribableStrategy = new SubscribableStrategy();
var _AsyncPipe = class _AsyncPipe {
  constructor(ref) {
    this._latestValue = null;
    this._subscription = null;
    this._obj = null;
    this._strategy = null;
    this._ref = ref;
  }
  ngOnDestroy() {
    if (this._subscription) {
      this._dispose();
    }
    this._ref = null;
  }
  transform(obj) {
    if (!this._obj) {
      if (obj) {
        this._subscribe(obj);
      }
      return this._latestValue;
    }
    if (obj !== this._obj) {
      this._dispose();
      return this.transform(obj);
    }
    return this._latestValue;
  }
  _subscribe(obj) {
    this._obj = obj;
    this._strategy = this._selectStrategy(obj);
    this._subscription = this._strategy.createSubscription(obj, (value) => this._updateLatestValue(obj, value));
  }
  _selectStrategy(obj) {
    if (isPromise(obj)) {
      return _promiseStrategy;
    }
    if (isSubscribable(obj)) {
      return _subscribableStrategy;
    }
    throw invalidPipeArgumentError(_AsyncPipe, obj);
  }
  _dispose() {
    this._strategy.dispose(this._subscription);
    this._latestValue = null;
    this._subscription = null;
    this._obj = null;
  }
  _updateLatestValue(async, value) {
    if (async === this._obj) {
      this._latestValue = value;
      this._ref.markForCheck();
    }
  }
};
_AsyncPipe.ɵfac = function AsyncPipe_Factory(t) {
  return new (t || _AsyncPipe)(ɵɵdirectiveInject(ChangeDetectorRef, 16));
};
_AsyncPipe.ɵpipe = ɵɵdefinePipe({
  name: "async",
  type: _AsyncPipe,
  pure: false,
  standalone: true
});
var AsyncPipe = _AsyncPipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsyncPipe, [{
    type: Pipe,
    args: [{
      name: "async",
      pure: false,
      standalone: true
    }]
  }], () => [{
    type: ChangeDetectorRef
  }], null);
})();
var _LowerCasePipe = class _LowerCasePipe {
  transform(value) {
    if (value == null)
      return null;
    if (typeof value !== "string") {
      throw invalidPipeArgumentError(_LowerCasePipe, value);
    }
    return value.toLowerCase();
  }
};
_LowerCasePipe.ɵfac = function LowerCasePipe_Factory(t) {
  return new (t || _LowerCasePipe)();
};
_LowerCasePipe.ɵpipe = ɵɵdefinePipe({
  name: "lowercase",
  type: _LowerCasePipe,
  pure: true,
  standalone: true
});
var LowerCasePipe = _LowerCasePipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LowerCasePipe, [{
    type: Pipe,
    args: [{
      name: "lowercase",
      standalone: true
    }]
  }], null, null);
})();
var unicodeWordMatch = /(?:[0-9A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])\S*/g;
var _TitleCasePipe = class _TitleCasePipe {
  transform(value) {
    if (value == null)
      return null;
    if (typeof value !== "string") {
      throw invalidPipeArgumentError(_TitleCasePipe, value);
    }
    return value.replace(unicodeWordMatch, (txt) => txt[0].toUpperCase() + txt.slice(1).toLowerCase());
  }
};
_TitleCasePipe.ɵfac = function TitleCasePipe_Factory(t) {
  return new (t || _TitleCasePipe)();
};
_TitleCasePipe.ɵpipe = ɵɵdefinePipe({
  name: "titlecase",
  type: _TitleCasePipe,
  pure: true,
  standalone: true
});
var TitleCasePipe = _TitleCasePipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TitleCasePipe, [{
    type: Pipe,
    args: [{
      name: "titlecase",
      standalone: true
    }]
  }], null, null);
})();
var _UpperCasePipe = class _UpperCasePipe {
  transform(value) {
    if (value == null)
      return null;
    if (typeof value !== "string") {
      throw invalidPipeArgumentError(_UpperCasePipe, value);
    }
    return value.toUpperCase();
  }
};
_UpperCasePipe.ɵfac = function UpperCasePipe_Factory(t) {
  return new (t || _UpperCasePipe)();
};
_UpperCasePipe.ɵpipe = ɵɵdefinePipe({
  name: "uppercase",
  type: _UpperCasePipe,
  pure: true,
  standalone: true
});
var UpperCasePipe = _UpperCasePipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UpperCasePipe, [{
    type: Pipe,
    args: [{
      name: "uppercase",
      standalone: true
    }]
  }], null, null);
})();
var DEFAULT_DATE_FORMAT = "mediumDate";
var DATE_PIPE_DEFAULT_TIMEZONE = new InjectionToken("DATE_PIPE_DEFAULT_TIMEZONE");
var DATE_PIPE_DEFAULT_OPTIONS = new InjectionToken("DATE_PIPE_DEFAULT_OPTIONS");
var _DatePipe = class _DatePipe {
  constructor(locale, defaultTimezone, defaultOptions) {
    this.locale = locale;
    this.defaultTimezone = defaultTimezone;
    this.defaultOptions = defaultOptions;
  }
  transform(value, format, timezone, locale) {
    if (value == null || value === "" || value !== value)
      return null;
    try {
      const _format = format ?? this.defaultOptions?.dateFormat ?? DEFAULT_DATE_FORMAT;
      const _timezone = timezone ?? this.defaultOptions?.timezone ?? this.defaultTimezone ?? void 0;
      return formatDate(value, _format, locale || this.locale, _timezone);
    } catch (error) {
      throw invalidPipeArgumentError(_DatePipe, error.message);
    }
  }
};
_DatePipe.ɵfac = function DatePipe_Factory(t) {
  return new (t || _DatePipe)(ɵɵdirectiveInject(LOCALE_ID, 16), ɵɵdirectiveInject(DATE_PIPE_DEFAULT_TIMEZONE, 24), ɵɵdirectiveInject(DATE_PIPE_DEFAULT_OPTIONS, 24));
};
_DatePipe.ɵpipe = ɵɵdefinePipe({
  name: "date",
  type: _DatePipe,
  pure: true,
  standalone: true
});
var DatePipe = _DatePipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DatePipe, [{
    type: Pipe,
    args: [{
      name: "date",
      pure: true,
      standalone: true
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [LOCALE_ID]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DATE_PIPE_DEFAULT_TIMEZONE]
    }, {
      type: Optional
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DATE_PIPE_DEFAULT_OPTIONS]
    }, {
      type: Optional
    }]
  }], null);
})();
var _INTERPOLATION_REGEXP = /#/g;
var _I18nPluralPipe = class _I18nPluralPipe {
  constructor(_localization) {
    this._localization = _localization;
  }
  /**
   * @param value the number to be formatted
   * @param pluralMap an object that mimics the ICU format, see
   * https://unicode-org.github.io/icu/userguide/format_parse/messages/.
   * @param locale a `string` defining the locale to use (uses the current {@link LOCALE_ID} by
   * default).
   */
  transform(value, pluralMap, locale) {
    if (value == null)
      return "";
    if (typeof pluralMap !== "object" || pluralMap === null) {
      throw invalidPipeArgumentError(_I18nPluralPipe, pluralMap);
    }
    const key = getPluralCategory(value, Object.keys(pluralMap), this._localization, locale);
    return pluralMap[key].replace(_INTERPOLATION_REGEXP, value.toString());
  }
};
_I18nPluralPipe.ɵfac = function I18nPluralPipe_Factory(t) {
  return new (t || _I18nPluralPipe)(ɵɵdirectiveInject(NgLocalization, 16));
};
_I18nPluralPipe.ɵpipe = ɵɵdefinePipe({
  name: "i18nPlural",
  type: _I18nPluralPipe,
  pure: true,
  standalone: true
});
var I18nPluralPipe = _I18nPluralPipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(I18nPluralPipe, [{
    type: Pipe,
    args: [{
      name: "i18nPlural",
      pure: true,
      standalone: true
    }]
  }], () => [{
    type: NgLocalization
  }], null);
})();
var _I18nSelectPipe = class _I18nSelectPipe {
  /**
   * @param value a string to be internationalized.
   * @param mapping an object that indicates the text that should be displayed
   * for different values of the provided `value`.
   */
  transform(value, mapping) {
    if (value == null)
      return "";
    if (typeof mapping !== "object" || typeof value !== "string") {
      throw invalidPipeArgumentError(_I18nSelectPipe, mapping);
    }
    if (mapping.hasOwnProperty(value)) {
      return mapping[value];
    }
    if (mapping.hasOwnProperty("other")) {
      return mapping["other"];
    }
    return "";
  }
};
_I18nSelectPipe.ɵfac = function I18nSelectPipe_Factory(t) {
  return new (t || _I18nSelectPipe)();
};
_I18nSelectPipe.ɵpipe = ɵɵdefinePipe({
  name: "i18nSelect",
  type: _I18nSelectPipe,
  pure: true,
  standalone: true
});
var I18nSelectPipe = _I18nSelectPipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(I18nSelectPipe, [{
    type: Pipe,
    args: [{
      name: "i18nSelect",
      pure: true,
      standalone: true
    }]
  }], null, null);
})();
var _JsonPipe = class _JsonPipe {
  /**
   * @param value A value of any type to convert into a JSON-format string.
   */
  transform(value) {
    return JSON.stringify(value, null, 2);
  }
};
_JsonPipe.ɵfac = function JsonPipe_Factory(t) {
  return new (t || _JsonPipe)();
};
_JsonPipe.ɵpipe = ɵɵdefinePipe({
  name: "json",
  type: _JsonPipe,
  pure: false,
  standalone: true
});
var JsonPipe = _JsonPipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JsonPipe, [{
    type: Pipe,
    args: [{
      name: "json",
      pure: false,
      standalone: true
    }]
  }], null, null);
})();
function makeKeyValuePair(key, value) {
  return {
    key,
    value
  };
}
var _KeyValuePipe = class _KeyValuePipe {
  constructor(differs) {
    this.differs = differs;
    this.keyValues = [];
    this.compareFn = defaultComparator;
  }
  transform(input, compareFn = defaultComparator) {
    if (!input || !(input instanceof Map) && typeof input !== "object") {
      return null;
    }
    if (!this.differ) {
      this.differ = this.differs.find(input).create();
    }
    const differChanges = this.differ.diff(input);
    const compareFnChanged = compareFn !== this.compareFn;
    if (differChanges) {
      this.keyValues = [];
      differChanges.forEachItem((r) => {
        this.keyValues.push(makeKeyValuePair(r.key, r.currentValue));
      });
    }
    if (differChanges || compareFnChanged) {
      this.keyValues.sort(compareFn);
      this.compareFn = compareFn;
    }
    return this.keyValues;
  }
};
_KeyValuePipe.ɵfac = function KeyValuePipe_Factory(t) {
  return new (t || _KeyValuePipe)(ɵɵdirectiveInject(KeyValueDiffers, 16));
};
_KeyValuePipe.ɵpipe = ɵɵdefinePipe({
  name: "keyvalue",
  type: _KeyValuePipe,
  pure: false,
  standalone: true
});
var KeyValuePipe = _KeyValuePipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(KeyValuePipe, [{
    type: Pipe,
    args: [{
      name: "keyvalue",
      pure: false,
      standalone: true
    }]
  }], () => [{
    type: KeyValueDiffers
  }], null);
})();
function defaultComparator(keyValueA, keyValueB) {
  const a = keyValueA.key;
  const b = keyValueB.key;
  if (a === b)
    return 0;
  if (a === void 0)
    return 1;
  if (b === void 0)
    return -1;
  if (a === null)
    return 1;
  if (b === null)
    return -1;
  if (typeof a == "string" && typeof b == "string") {
    return a < b ? -1 : 1;
  }
  if (typeof a == "number" && typeof b == "number") {
    return a - b;
  }
  if (typeof a == "boolean" && typeof b == "boolean") {
    return a < b ? -1 : 1;
  }
  const aString = String(a);
  const bString = String(b);
  return aString == bString ? 0 : aString < bString ? -1 : 1;
}
var _DecimalPipe = class _DecimalPipe {
  constructor(_locale) {
    this._locale = _locale;
  }
  /**
   * @param value The value to be formatted.
   * @param digitsInfo Sets digit and decimal representation.
   * [See more](#digitsinfo).
   * @param locale Specifies what locale format rules to use.
   * [See more](#locale).
   */
  transform(value, digitsInfo, locale) {
    if (!isValue(value))
      return null;
    locale = locale || this._locale;
    try {
      const num = strToNumber(value);
      return formatNumber(num, locale, digitsInfo);
    } catch (error) {
      throw invalidPipeArgumentError(_DecimalPipe, error.message);
    }
  }
};
_DecimalPipe.ɵfac = function DecimalPipe_Factory(t) {
  return new (t || _DecimalPipe)(ɵɵdirectiveInject(LOCALE_ID, 16));
};
_DecimalPipe.ɵpipe = ɵɵdefinePipe({
  name: "number",
  type: _DecimalPipe,
  pure: true,
  standalone: true
});
var DecimalPipe = _DecimalPipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DecimalPipe, [{
    type: Pipe,
    args: [{
      name: "number",
      standalone: true
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [LOCALE_ID]
    }]
  }], null);
})();
var _PercentPipe = class _PercentPipe {
  constructor(_locale) {
    this._locale = _locale;
  }
  /**
   *
   * @param value The number to be formatted as a percentage.
   * @param digitsInfo Decimal representation options, specified by a string
   * in the following format:<br>
   * <code>{minIntegerDigits}.{minFractionDigits}-{maxFractionDigits}</code>.
   *   - `minIntegerDigits`: The minimum number of integer digits before the decimal point.
   * Default is `1`.
   *   - `minFractionDigits`: The minimum number of digits after the decimal point.
   * Default is `0`.
   *   - `maxFractionDigits`: The maximum number of digits after the decimal point.
   * Default is `0`.
   * @param locale A locale code for the locale format rules to use.
   * When not supplied, uses the value of `LOCALE_ID`, which is `en-US` by default.
   * See [Setting your app locale](guide/i18n-common-locale-id).
   */
  transform(value, digitsInfo, locale) {
    if (!isValue(value))
      return null;
    locale = locale || this._locale;
    try {
      const num = strToNumber(value);
      return formatPercent(num, locale, digitsInfo);
    } catch (error) {
      throw invalidPipeArgumentError(_PercentPipe, error.message);
    }
  }
};
_PercentPipe.ɵfac = function PercentPipe_Factory(t) {
  return new (t || _PercentPipe)(ɵɵdirectiveInject(LOCALE_ID, 16));
};
_PercentPipe.ɵpipe = ɵɵdefinePipe({
  name: "percent",
  type: _PercentPipe,
  pure: true,
  standalone: true
});
var PercentPipe = _PercentPipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PercentPipe, [{
    type: Pipe,
    args: [{
      name: "percent",
      standalone: true
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [LOCALE_ID]
    }]
  }], null);
})();
var _CurrencyPipe = class _CurrencyPipe {
  constructor(_locale, _defaultCurrencyCode = "USD") {
    this._locale = _locale;
    this._defaultCurrencyCode = _defaultCurrencyCode;
  }
  /**
   *
   * @param value The number to be formatted as currency.
   * @param currencyCode The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code,
   * such as `USD` for the US dollar and `EUR` for the euro. The default currency code can be
   * configured using the `DEFAULT_CURRENCY_CODE` injection token.
   * @param display The format for the currency indicator. One of the following:
   *   - `code`: Show the code (such as `USD`).
   *   - `symbol`(default): Show the symbol (such as `$`).
   *   - `symbol-narrow`: Use the narrow symbol for locales that have two symbols for their
   * currency.
   * For example, the Canadian dollar CAD has the symbol `CA$` and the symbol-narrow `$`. If the
   * locale has no narrow symbol, uses the standard symbol for the locale.
   *   - String: Use the given string value instead of a code or a symbol.
   * For example, an empty string will suppress the currency & symbol.
   *   - Boolean (marked deprecated in v5): `true` for symbol and false for `code`.
   *
   * @param digitsInfo Decimal representation options, specified by a string
   * in the following format:<br>
   * <code>{minIntegerDigits}.{minFractionDigits}-{maxFractionDigits}</code>.
   *   - `minIntegerDigits`: The minimum number of integer digits before the decimal point.
   * Default is `1`.
   *   - `minFractionDigits`: The minimum number of digits after the decimal point.
   * Default is `2`.
   *   - `maxFractionDigits`: The maximum number of digits after the decimal point.
   * Default is `2`.
   * If not provided, the number will be formatted with the proper amount of digits,
   * depending on what the [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) specifies.
   * For example, the Canadian dollar has 2 digits, whereas the Chilean peso has none.
   * @param locale A locale code for the locale format rules to use.
   * When not supplied, uses the value of `LOCALE_ID`, which is `en-US` by default.
   * See [Setting your app locale](guide/i18n-common-locale-id).
   */
  transform(value, currencyCode = this._defaultCurrencyCode, display = "symbol", digitsInfo, locale) {
    if (!isValue(value))
      return null;
    locale = locale || this._locale;
    if (typeof display === "boolean") {
      if ((typeof ngDevMode === "undefined" || ngDevMode) && console && console.warn) {
        console.warn(`Warning: the currency pipe has been changed in Angular v5. The symbolDisplay option (third parameter) is now a string instead of a boolean. The accepted values are "code", "symbol" or "symbol-narrow".`);
      }
      display = display ? "symbol" : "code";
    }
    let currency = currencyCode || this._defaultCurrencyCode;
    if (display !== "code") {
      if (display === "symbol" || display === "symbol-narrow") {
        currency = getCurrencySymbol(currency, display === "symbol" ? "wide" : "narrow", locale);
      } else {
        currency = display;
      }
    }
    try {
      const num = strToNumber(value);
      return formatCurrency(num, locale, currency, currencyCode, digitsInfo);
    } catch (error) {
      throw invalidPipeArgumentError(_CurrencyPipe, error.message);
    }
  }
};
_CurrencyPipe.ɵfac = function CurrencyPipe_Factory(t) {
  return new (t || _CurrencyPipe)(ɵɵdirectiveInject(LOCALE_ID, 16), ɵɵdirectiveInject(DEFAULT_CURRENCY_CODE, 16));
};
_CurrencyPipe.ɵpipe = ɵɵdefinePipe({
  name: "currency",
  type: _CurrencyPipe,
  pure: true,
  standalone: true
});
var CurrencyPipe = _CurrencyPipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CurrencyPipe, [{
    type: Pipe,
    args: [{
      name: "currency",
      standalone: true
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [LOCALE_ID]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DEFAULT_CURRENCY_CODE]
    }]
  }], null);
})();
function isValue(value) {
  return !(value == null || value === "" || value !== value);
}
function strToNumber(value) {
  if (typeof value === "string" && !isNaN(Number(value) - parseFloat(value))) {
    return Number(value);
  }
  if (typeof value !== "number") {
    throw new Error(`${value} is not a number`);
  }
  return value;
}
var _SlicePipe = class _SlicePipe {
  transform(value, start, end) {
    if (value == null)
      return null;
    if (!this.supports(value)) {
      throw invalidPipeArgumentError(_SlicePipe, value);
    }
    return value.slice(start, end);
  }
  supports(obj) {
    return typeof obj === "string" || Array.isArray(obj);
  }
};
_SlicePipe.ɵfac = function SlicePipe_Factory(t) {
  return new (t || _SlicePipe)();
};
_SlicePipe.ɵpipe = ɵɵdefinePipe({
  name: "slice",
  type: _SlicePipe,
  pure: false,
  standalone: true
});
var SlicePipe = _SlicePipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SlicePipe, [{
    type: Pipe,
    args: [{
      name: "slice",
      pure: false,
      standalone: true
    }]
  }], null, null);
})();
var COMMON_PIPES = [AsyncPipe, UpperCasePipe, LowerCasePipe, JsonPipe, SlicePipe, DecimalPipe, PercentPipe, TitleCasePipe, CurrencyPipe, DatePipe, I18nPluralPipe, I18nSelectPipe, KeyValuePipe];
var _CommonModule = class _CommonModule {
};
_CommonModule.ɵfac = function CommonModule_Factory(t) {
  return new (t || _CommonModule)();
};
_CommonModule.ɵmod = ɵɵdefineNgModule({
  type: _CommonModule,
  imports: [NgClass, NgComponentOutlet, NgForOf, NgIf, NgTemplateOutlet, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault, NgPlural, NgPluralCase, AsyncPipe, UpperCasePipe, LowerCasePipe, JsonPipe, SlicePipe, DecimalPipe, PercentPipe, TitleCasePipe, CurrencyPipe, DatePipe, I18nPluralPipe, I18nSelectPipe, KeyValuePipe],
  exports: [NgClass, NgComponentOutlet, NgForOf, NgIf, NgTemplateOutlet, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault, NgPlural, NgPluralCase, AsyncPipe, UpperCasePipe, LowerCasePipe, JsonPipe, SlicePipe, DecimalPipe, PercentPipe, TitleCasePipe, CurrencyPipe, DatePipe, I18nPluralPipe, I18nSelectPipe, KeyValuePipe]
});
_CommonModule.ɵinj = ɵɵdefineInjector({});
var CommonModule = _CommonModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CommonModule, [{
    type: NgModule,
    args: [{
      imports: [COMMON_DIRECTIVES, COMMON_PIPES],
      exports: [COMMON_DIRECTIVES, COMMON_PIPES]
    }]
  }], null, null);
})();
var PLATFORM_BROWSER_ID = "browser";
var PLATFORM_SERVER_ID = "server";
var PLATFORM_WORKER_APP_ID = "browserWorkerApp";
var PLATFORM_WORKER_UI_ID = "browserWorkerUi";
function isPlatformBrowser(platformId) {
  return platformId === PLATFORM_BROWSER_ID;
}
function isPlatformServer(platformId) {
  return platformId === PLATFORM_SERVER_ID;
}
function isPlatformWorkerApp(platformId) {
  return platformId === PLATFORM_WORKER_APP_ID;
}
function isPlatformWorkerUi(platformId) {
  return platformId === PLATFORM_WORKER_UI_ID;
}
var VERSION = new Version("17.0.1");
var _ViewportScroller = class _ViewportScroller {
};
_ViewportScroller.ɵprov = ɵɵdefineInjectable({
  token: _ViewportScroller,
  providedIn: "root",
  factory: () => new BrowserViewportScroller(ɵɵinject(DOCUMENT), window)
});
var ViewportScroller = _ViewportScroller;
var BrowserViewportScroller = class {
  constructor(document, window2) {
    this.document = document;
    this.window = window2;
    this.offset = () => [0, 0];
  }
  /**
   * Configures the top offset used when scrolling to an anchor.
   * @param offset A position in screen coordinates (a tuple with x and y values)
   * or a function that returns the top offset position.
   *
   */
  setOffset(offset) {
    if (Array.isArray(offset)) {
      this.offset = () => offset;
    } else {
      this.offset = offset;
    }
  }
  /**
   * Retrieves the current scroll position.
   * @returns The position in screen coordinates.
   */
  getScrollPosition() {
    if (this.supportsScrolling()) {
      return [this.window.pageXOffset, this.window.pageYOffset];
    } else {
      return [0, 0];
    }
  }
  /**
   * Sets the scroll position.
   * @param position The new position in screen coordinates.
   */
  scrollToPosition(position) {
    if (this.supportsScrolling()) {
      this.window.scrollTo(position[0], position[1]);
    }
  }
  /**
   * Scrolls to an element and attempts to focus the element.
   *
   * Note that the function name here is misleading in that the target string may be an ID for a
   * non-anchor element.
   *
   * @param target The ID of an element or name of the anchor.
   *
   * @see https://html.spec.whatwg.org/#the-indicated-part-of-the-document
   * @see https://html.spec.whatwg.org/#scroll-to-fragid
   */
  scrollToAnchor(target) {
    if (!this.supportsScrolling()) {
      return;
    }
    const elSelected = findAnchorFromDocument(this.document, target);
    if (elSelected) {
      this.scrollToElement(elSelected);
      elSelected.focus();
    }
  }
  /**
   * Disables automatic scroll restoration provided by the browser.
   */
  setHistoryScrollRestoration(scrollRestoration) {
    if (this.supportsScrolling()) {
      this.window.history.scrollRestoration = scrollRestoration;
    }
  }
  /**
   * Scrolls to an element using the native offset and the specified offset set on this scroller.
   *
   * The offset can be used when we know that there is a floating header and scrolling naively to an
   * element (ex: `scrollIntoView`) leaves the element hidden behind the floating header.
   */
  scrollToElement(el) {
    const rect = el.getBoundingClientRect();
    const left = rect.left + this.window.pageXOffset;
    const top = rect.top + this.window.pageYOffset;
    const offset = this.offset();
    this.window.scrollTo(left - offset[0], top - offset[1]);
  }
  supportsScrolling() {
    try {
      return !!this.window && !!this.window.scrollTo && "pageXOffset" in this.window;
    } catch {
      return false;
    }
  }
};
function findAnchorFromDocument(document, target) {
  const documentResult = document.getElementById(target) || document.getElementsByName(target)[0];
  if (documentResult) {
    return documentResult;
  }
  if (typeof document.createTreeWalker === "function" && document.body && typeof document.body.attachShadow === "function") {
    const treeWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT);
    let currentNode = treeWalker.currentNode;
    while (currentNode) {
      const shadowRoot = currentNode.shadowRoot;
      if (shadowRoot) {
        const result = shadowRoot.getElementById(target) || shadowRoot.querySelector(`[name="${target}"]`);
        if (result) {
          return result;
        }
      }
      currentNode = treeWalker.nextNode();
    }
  }
  return null;
}
var NullViewportScroller = class {
  /**
   * Empty implementation
   */
  setOffset(offset) {
  }
  /**
   * Empty implementation
   */
  getScrollPosition() {
    return [0, 0];
  }
  /**
   * Empty implementation
   */
  scrollToPosition(position) {
  }
  /**
   * Empty implementation
   */
  scrollToAnchor(anchor) {
  }
  /**
   * Empty implementation
   */
  setHistoryScrollRestoration(scrollRestoration) {
  }
};
var XhrFactory = class {
};
function getUrl(src, win) {
  return isAbsoluteUrl(src) ? new URL(src) : new URL(src, win.location.href);
}
function isAbsoluteUrl(src) {
  return /^https?:\/\//.test(src);
}
function extractHostname(url) {
  return isAbsoluteUrl(url) ? new URL(url).hostname : url;
}
function isValidPath(path) {
  const isString = typeof path === "string";
  if (!isString || path.trim() === "") {
    return false;
  }
  try {
    const url = new URL(path);
    return true;
  } catch {
    return false;
  }
}
function normalizePath(path) {
  return path.endsWith("/") ? path.slice(0, -1) : path;
}
function normalizeSrc(src) {
  return src.startsWith("/") ? src.slice(1) : src;
}
var noopImageLoader = (config) => config.src;
var IMAGE_LOADER = new InjectionToken("ImageLoader", {
  providedIn: "root",
  factory: () => noopImageLoader
});
function createImageLoader(buildUrlFn, exampleUrls) {
  return function provideImageLoader(path) {
    if (!isValidPath(path)) {
      throwInvalidPathError(path, exampleUrls || []);
    }
    path = normalizePath(path);
    const loaderFn = (config) => {
      if (isAbsoluteUrl(config.src)) {
        throwUnexpectedAbsoluteUrlError(path, config.src);
      }
      return buildUrlFn(path, __spreadProps(__spreadValues({}, config), {
        src: normalizeSrc(config.src)
      }));
    };
    const providers = [{
      provide: IMAGE_LOADER,
      useValue: loaderFn
    }];
    return providers;
  };
}
function throwInvalidPathError(path, exampleUrls) {
  throw new RuntimeError(2959, ngDevMode && `Image loader has detected an invalid path (\`${path}\`). To fix this, supply a path using one of the following formats: ${exampleUrls.join(" or ")}`);
}
function throwUnexpectedAbsoluteUrlError(path, url) {
  throw new RuntimeError(2959, ngDevMode && `Image loader has detected a \`<img>\` tag with an invalid \`ngSrc\` attribute: ${url}. This image loader expects \`ngSrc\` to be a relative URL - however the provided value is an absolute URL. To fix this, provide \`ngSrc\` as a path relative to the base URL configured for this loader (\`${path}\`).`);
}
var provideCloudflareLoader = createImageLoader(createCloudflareUrl, ngDevMode ? ["https://<ZONE>/cdn-cgi/image/<OPTIONS>/<SOURCE-IMAGE>"] : void 0);
function createCloudflareUrl(path, config) {
  let params = `format=auto`;
  if (config.width) {
    params += `,width=${config.width}`;
  }
  return `${path}/cdn-cgi/image/${params}/${config.src}`;
}
var cloudinaryLoaderInfo = {
  name: "Cloudinary",
  testUrl: isCloudinaryUrl
};
var CLOUDINARY_LOADER_REGEX = /https?\:\/\/[^\/]+\.cloudinary\.com\/.+/;
function isCloudinaryUrl(url) {
  return CLOUDINARY_LOADER_REGEX.test(url);
}
var provideCloudinaryLoader = createImageLoader(createCloudinaryUrl, ngDevMode ? ["https://res.cloudinary.com/mysite", "https://mysite.cloudinary.com", "https://subdomain.mysite.com"] : void 0);
function createCloudinaryUrl(path, config) {
  let params = `f_auto,q_auto`;
  if (config.width) {
    params += `,w_${config.width}`;
  }
  return `${path}/image/upload/${params}/${config.src}`;
}
var imageKitLoaderInfo = {
  name: "ImageKit",
  testUrl: isImageKitUrl
};
var IMAGE_KIT_LOADER_REGEX = /https?\:\/\/[^\/]+\.imagekit\.io\/.+/;
function isImageKitUrl(url) {
  return IMAGE_KIT_LOADER_REGEX.test(url);
}
var provideImageKitLoader = createImageLoader(createImagekitUrl, ngDevMode ? ["https://ik.imagekit.io/mysite", "https://subdomain.mysite.com"] : void 0);
function createImagekitUrl(path, config) {
  const {
    src,
    width
  } = config;
  let urlSegments;
  if (width) {
    const params = `tr:w-${width}`;
    urlSegments = [path, params, src];
  } else {
    urlSegments = [path, src];
  }
  return urlSegments.join("/");
}
var imgixLoaderInfo = {
  name: "Imgix",
  testUrl: isImgixUrl
};
var IMGIX_LOADER_REGEX = /https?\:\/\/[^\/]+\.imgix\.net\/.+/;
function isImgixUrl(url) {
  return IMGIX_LOADER_REGEX.test(url);
}
var provideImgixLoader = createImageLoader(createImgixUrl, ngDevMode ? ["https://somepath.imgix.net/"] : void 0);
function createImgixUrl(path, config) {
  const url = new URL(`${path}/${config.src}`);
  url.searchParams.set("auto", "format");
  if (config.width) {
    url.searchParams.set("w", config.width.toString());
  }
  return url.href;
}
function imgDirectiveDetails(ngSrc, includeNgSrc = true) {
  const ngSrcInfo = includeNgSrc ? `(activated on an <img> element with the \`ngSrc="${ngSrc}"\`) ` : "";
  return `The NgOptimizedImage directive ${ngSrcInfo}has detected that`;
}
function assertDevMode(checkName) {
  if (!ngDevMode) {
    throw new RuntimeError(2958, `Unexpected invocation of the ${checkName} in the prod mode. Please make sure that the prod mode is enabled for production builds.`);
  }
}
var _LCPImageObserver = class _LCPImageObserver {
  constructor() {
    this.images = /* @__PURE__ */ new Map();
    this.window = null;
    this.observer = null;
    assertDevMode("LCP checker");
    const win = inject(DOCUMENT).defaultView;
    if (typeof win !== "undefined" && typeof PerformanceObserver !== "undefined") {
      this.window = win;
      this.observer = this.initPerformanceObserver();
    }
  }
  /**
   * Inits PerformanceObserver and subscribes to LCP events.
   * Based on https://web.dev/lcp/#measure-lcp-in-javascript
   */
  initPerformanceObserver() {
    const observer = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      if (entries.length === 0)
        return;
      const lcpElement = entries[entries.length - 1];
      const imgSrc = lcpElement.element?.src ?? "";
      if (imgSrc.startsWith("data:") || imgSrc.startsWith("blob:"))
        return;
      const img = this.images.get(imgSrc);
      if (!img)
        return;
      if (!img.priority && !img.alreadyWarnedPriority) {
        img.alreadyWarnedPriority = true;
        logMissingPriorityError(imgSrc);
      }
      if (img.modified && !img.alreadyWarnedModified) {
        img.alreadyWarnedModified = true;
        logModifiedWarning(imgSrc);
      }
    });
    observer.observe({
      type: "largest-contentful-paint",
      buffered: true
    });
    return observer;
  }
  registerImage(rewrittenSrc, originalNgSrc, isPriority) {
    if (!this.observer)
      return;
    const newObservedImageState = {
      priority: isPriority,
      modified: false,
      alreadyWarnedModified: false,
      alreadyWarnedPriority: false
    };
    this.images.set(getUrl(rewrittenSrc, this.window).href, newObservedImageState);
  }
  unregisterImage(rewrittenSrc) {
    if (!this.observer)
      return;
    this.images.delete(getUrl(rewrittenSrc, this.window).href);
  }
  updateImage(originalSrc, newSrc) {
    const originalUrl = getUrl(originalSrc, this.window).href;
    const img = this.images.get(originalUrl);
    if (img) {
      img.modified = true;
      this.images.set(getUrl(newSrc, this.window).href, img);
      this.images.delete(originalUrl);
    }
  }
  ngOnDestroy() {
    if (!this.observer)
      return;
    this.observer.disconnect();
    this.images.clear();
  }
};
_LCPImageObserver.ɵfac = function LCPImageObserver_Factory(t) {
  return new (t || _LCPImageObserver)();
};
_LCPImageObserver.ɵprov = ɵɵdefineInjectable({
  token: _LCPImageObserver,
  factory: _LCPImageObserver.ɵfac,
  providedIn: "root"
});
var LCPImageObserver = _LCPImageObserver;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LCPImageObserver, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
function logMissingPriorityError(ngSrc) {
  const directiveDetails = imgDirectiveDetails(ngSrc);
  console.error(formatRuntimeError(2955, `${directiveDetails} this image is the Largest Contentful Paint (LCP) element but was not marked "priority". This image should be marked "priority" in order to prioritize its loading. To fix this, add the "priority" attribute.`));
}
function logModifiedWarning(ngSrc) {
  const directiveDetails = imgDirectiveDetails(ngSrc);
  console.warn(formatRuntimeError(2964, `${directiveDetails} this image is the Largest Contentful Paint (LCP) element and has had its "ngSrc" attribute modified. This can cause slower loading performance. It is recommended not to modify the "ngSrc" property on any image which could be the LCP element.`));
}
var INTERNAL_PRECONNECT_CHECK_BLOCKLIST = /* @__PURE__ */ new Set(["localhost", "127.0.0.1", "0.0.0.0"]);
var PRECONNECT_CHECK_BLOCKLIST = new InjectionToken("PRECONNECT_CHECK_BLOCKLIST");
var _PreconnectLinkChecker = class _PreconnectLinkChecker {
  constructor() {
    this.document = inject(DOCUMENT);
    this.preconnectLinks = null;
    this.alreadySeen = /* @__PURE__ */ new Set();
    this.window = null;
    this.blocklist = new Set(INTERNAL_PRECONNECT_CHECK_BLOCKLIST);
    assertDevMode("preconnect link checker");
    const win = this.document.defaultView;
    if (typeof win !== "undefined") {
      this.window = win;
    }
    const blocklist = inject(PRECONNECT_CHECK_BLOCKLIST, {
      optional: true
    });
    if (blocklist) {
      this.populateBlocklist(blocklist);
    }
  }
  populateBlocklist(origins) {
    if (Array.isArray(origins)) {
      deepForEach(origins, (origin) => {
        this.blocklist.add(extractHostname(origin));
      });
    } else {
      this.blocklist.add(extractHostname(origins));
    }
  }
  /**
   * Checks that a preconnect resource hint exists in the head for the
   * given src.
   *
   * @param rewrittenSrc src formatted with loader
   * @param originalNgSrc ngSrc value
   */
  assertPreconnect(rewrittenSrc, originalNgSrc) {
    if (!this.window)
      return;
    const imgUrl = getUrl(rewrittenSrc, this.window);
    if (this.blocklist.has(imgUrl.hostname) || this.alreadySeen.has(imgUrl.origin))
      return;
    this.alreadySeen.add(imgUrl.origin);
    if (!this.preconnectLinks) {
      this.preconnectLinks = this.queryPreconnectLinks();
    }
    if (!this.preconnectLinks.has(imgUrl.origin)) {
      console.warn(formatRuntimeError(2956, `${imgDirectiveDetails(originalNgSrc)} there is no preconnect tag present for this image. Preconnecting to the origin(s) that serve priority images ensures that these images are delivered as soon as possible. To fix this, please add the following element into the <head> of the document:
  <link rel="preconnect" href="${imgUrl.origin}">`));
    }
  }
  queryPreconnectLinks() {
    const preconnectUrls = /* @__PURE__ */ new Set();
    const selector = "link[rel=preconnect]";
    const links = Array.from(this.document.querySelectorAll(selector));
    for (let link of links) {
      const url = getUrl(link.href, this.window);
      preconnectUrls.add(url.origin);
    }
    return preconnectUrls;
  }
  ngOnDestroy() {
    this.preconnectLinks?.clear();
    this.alreadySeen.clear();
  }
};
_PreconnectLinkChecker.ɵfac = function PreconnectLinkChecker_Factory(t) {
  return new (t || _PreconnectLinkChecker)();
};
_PreconnectLinkChecker.ɵprov = ɵɵdefineInjectable({
  token: _PreconnectLinkChecker,
  factory: _PreconnectLinkChecker.ɵfac,
  providedIn: "root"
});
var PreconnectLinkChecker = _PreconnectLinkChecker;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PreconnectLinkChecker, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
function deepForEach(input, fn) {
  for (let value of input) {
    Array.isArray(value) ? deepForEach(value, fn) : fn(value);
  }
}
var DEFAULT_PRELOADED_IMAGES_LIMIT = 5;
var PRELOADED_IMAGES = new InjectionToken("NG_OPTIMIZED_PRELOADED_IMAGES", {
  providedIn: "root",
  factory: () => /* @__PURE__ */ new Set()
});
var _PreloadLinkCreator = class _PreloadLinkCreator {
  constructor() {
    this.preloadedImages = inject(PRELOADED_IMAGES);
    this.document = inject(DOCUMENT);
  }
  /**
   * @description Add a preload `<link>` to the `<head>` of the `index.html` that is served from the
   * server while using Angular Universal and SSR to kick off image loads for high priority images.
   *
   * The `sizes` (passed in from the user) and `srcset` (parsed and formatted from `ngSrcset`)
   * properties used to set the corresponding attributes, `imagesizes` and `imagesrcset`
   * respectively, on the preload `<link>` tag so that the correctly sized image is preloaded from
   * the CDN.
   *
   * {@link https://web.dev/preload-responsive-images/#imagesrcset-and-imagesizes}
   *
   * @param renderer The `Renderer2` passed in from the directive
   * @param src The original src of the image that is set on the `ngSrc` input.
   * @param srcset The parsed and formatted srcset created from the `ngSrcset` input
   * @param sizes The value of the `sizes` attribute passed in to the `<img>` tag
   */
  createPreloadLinkTag(renderer, src, srcset, sizes) {
    if (ngDevMode) {
      if (this.preloadedImages.size >= DEFAULT_PRELOADED_IMAGES_LIMIT) {
        throw new RuntimeError(2961, ngDevMode && `The \`NgOptimizedImage\` directive has detected that more than ${DEFAULT_PRELOADED_IMAGES_LIMIT} images were marked as priority. This might negatively affect an overall performance of the page. To fix this, remove the "priority" attribute from images with less priority.`);
      }
    }
    if (this.preloadedImages.has(src)) {
      return;
    }
    this.preloadedImages.add(src);
    const preload = renderer.createElement("link");
    renderer.setAttribute(preload, "as", "image");
    renderer.setAttribute(preload, "href", src);
    renderer.setAttribute(preload, "rel", "preload");
    renderer.setAttribute(preload, "fetchpriority", "high");
    if (sizes) {
      renderer.setAttribute(preload, "imageSizes", sizes);
    }
    if (srcset) {
      renderer.setAttribute(preload, "imageSrcset", srcset);
    }
    renderer.appendChild(this.document.head, preload);
  }
};
_PreloadLinkCreator.ɵfac = function PreloadLinkCreator_Factory(t) {
  return new (t || _PreloadLinkCreator)();
};
_PreloadLinkCreator.ɵprov = ɵɵdefineInjectable({
  token: _PreloadLinkCreator,
  factory: _PreloadLinkCreator.ɵfac,
  providedIn: "root"
});
var PreloadLinkCreator = _PreloadLinkCreator;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PreloadLinkCreator, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var BASE64_IMG_MAX_LENGTH_IN_ERROR = 50;
var VALID_WIDTH_DESCRIPTOR_SRCSET = /^((\s*\d+w\s*(,|$)){1,})$/;
var VALID_DENSITY_DESCRIPTOR_SRCSET = /^((\s*\d+(\.\d+)?x\s*(,|$)){1,})$/;
var ABSOLUTE_SRCSET_DENSITY_CAP = 3;
var RECOMMENDED_SRCSET_DENSITY_CAP = 2;
var DENSITY_SRCSET_MULTIPLIERS = [1, 2];
var VIEWPORT_BREAKPOINT_CUTOFF = 640;
var ASPECT_RATIO_TOLERANCE = 0.1;
var OVERSIZED_IMAGE_TOLERANCE = 1e3;
var FIXED_SRCSET_WIDTH_LIMIT = 1920;
var FIXED_SRCSET_HEIGHT_LIMIT = 1080;
var BUILT_IN_LOADERS = [imgixLoaderInfo, imageKitLoaderInfo, cloudinaryLoaderInfo];
var _NgOptimizedImage = class _NgOptimizedImage {
  constructor() {
    this.imageLoader = inject(IMAGE_LOADER);
    this.config = processConfig(inject(IMAGE_CONFIG));
    this.renderer = inject(Renderer2);
    this.imgElement = inject(ElementRef).nativeElement;
    this.injector = inject(Injector);
    this.isServer = isPlatformServer(inject(PLATFORM_ID));
    this.preloadLinkCreator = inject(PreloadLinkCreator);
    this.lcpObserver = ngDevMode ? this.injector.get(LCPImageObserver) : null;
    this._renderedSrc = null;
    this.priority = false;
    this.disableOptimizedSrcset = false;
    this.fill = false;
  }
  /** @nodoc */
  ngOnInit() {
    performanceMark("mark_use_counter", {
      "detail": {
        "feature": "NgOptimizedImage"
      }
    });
    if (ngDevMode) {
      const ngZone = this.injector.get(NgZone);
      assertNonEmptyInput(this, "ngSrc", this.ngSrc);
      assertValidNgSrcset(this, this.ngSrcset);
      assertNoConflictingSrc(this);
      if (this.ngSrcset) {
        assertNoConflictingSrcset(this);
      }
      assertNotBase64Image(this);
      assertNotBlobUrl(this);
      if (this.fill) {
        assertEmptyWidthAndHeight(this);
        ngZone.runOutsideAngular(() => assertNonZeroRenderedHeight(this, this.imgElement, this.renderer));
      } else {
        assertNonEmptyWidthAndHeight(this);
        if (this.height !== void 0) {
          assertGreaterThanZero(this, this.height, "height");
        }
        if (this.width !== void 0) {
          assertGreaterThanZero(this, this.width, "width");
        }
        ngZone.runOutsideAngular(() => assertNoImageDistortion(this, this.imgElement, this.renderer));
      }
      assertValidLoadingInput(this);
      if (!this.ngSrcset) {
        assertNoComplexSizes(this);
      }
      assertNotMissingBuiltInLoader(this.ngSrc, this.imageLoader);
      assertNoNgSrcsetWithoutLoader(this, this.imageLoader);
      assertNoLoaderParamsWithoutLoader(this, this.imageLoader);
      if (this.lcpObserver !== null) {
        const ngZone2 = this.injector.get(NgZone);
        ngZone2.runOutsideAngular(() => {
          this.lcpObserver.registerImage(this.getRewrittenSrc(), this.ngSrc, this.priority);
        });
      }
      if (this.priority) {
        const checker = this.injector.get(PreconnectLinkChecker);
        checker.assertPreconnect(this.getRewrittenSrc(), this.ngSrc);
      }
    }
    this.setHostAttributes();
  }
  setHostAttributes() {
    if (this.fill) {
      if (!this.sizes) {
        this.sizes = "100vw";
      }
    } else {
      this.setHostAttribute("width", this.width.toString());
      this.setHostAttribute("height", this.height.toString());
    }
    this.setHostAttribute("loading", this.getLoadingBehavior());
    this.setHostAttribute("fetchpriority", this.getFetchPriority());
    this.setHostAttribute("ng-img", "true");
    const rewrittenSrcset = this.updateSrcAndSrcset();
    if (this.sizes) {
      this.setHostAttribute("sizes", this.sizes);
    }
    if (this.isServer && this.priority) {
      this.preloadLinkCreator.createPreloadLinkTag(this.renderer, this.getRewrittenSrc(), rewrittenSrcset, this.sizes);
    }
  }
  /** @nodoc */
  ngOnChanges(changes) {
    if (ngDevMode) {
      assertNoPostInitInputChange(this, changes, ["ngSrcset", "width", "height", "priority", "fill", "loading", "sizes", "loaderParams", "disableOptimizedSrcset"]);
    }
    if (changes["ngSrc"] && !changes["ngSrc"].isFirstChange()) {
      const oldSrc = this._renderedSrc;
      this.updateSrcAndSrcset(true);
      const newSrc = this._renderedSrc;
      if (this.lcpObserver !== null && oldSrc && newSrc && oldSrc !== newSrc) {
        const ngZone = this.injector.get(NgZone);
        ngZone.runOutsideAngular(() => {
          this.lcpObserver?.updateImage(oldSrc, newSrc);
        });
      }
    }
  }
  callImageLoader(configWithoutCustomParams) {
    let augmentedConfig = configWithoutCustomParams;
    if (this.loaderParams) {
      augmentedConfig.loaderParams = this.loaderParams;
    }
    return this.imageLoader(augmentedConfig);
  }
  getLoadingBehavior() {
    if (!this.priority && this.loading !== void 0) {
      return this.loading;
    }
    return this.priority ? "eager" : "lazy";
  }
  getFetchPriority() {
    return this.priority ? "high" : "auto";
  }
  getRewrittenSrc() {
    if (!this._renderedSrc) {
      const imgConfig = {
        src: this.ngSrc
      };
      this._renderedSrc = this.callImageLoader(imgConfig);
    }
    return this._renderedSrc;
  }
  getRewrittenSrcset() {
    const widthSrcSet = VALID_WIDTH_DESCRIPTOR_SRCSET.test(this.ngSrcset);
    const finalSrcs = this.ngSrcset.split(",").filter((src) => src !== "").map((srcStr) => {
      srcStr = srcStr.trim();
      const width = widthSrcSet ? parseFloat(srcStr) : parseFloat(srcStr) * this.width;
      return `${this.callImageLoader({
        src: this.ngSrc,
        width
      })} ${srcStr}`;
    });
    return finalSrcs.join(", ");
  }
  getAutomaticSrcset() {
    if (this.sizes) {
      return this.getResponsiveSrcset();
    } else {
      return this.getFixedSrcset();
    }
  }
  getResponsiveSrcset() {
    const {
      breakpoints
    } = this.config;
    let filteredBreakpoints = breakpoints;
    if (this.sizes?.trim() === "100vw") {
      filteredBreakpoints = breakpoints.filter((bp) => bp >= VIEWPORT_BREAKPOINT_CUTOFF);
    }
    const finalSrcs = filteredBreakpoints.map((bp) => `${this.callImageLoader({
      src: this.ngSrc,
      width: bp
    })} ${bp}w`);
    return finalSrcs.join(", ");
  }
  updateSrcAndSrcset(forceSrcRecalc = false) {
    if (forceSrcRecalc) {
      this._renderedSrc = null;
    }
    const rewrittenSrc = this.getRewrittenSrc();
    this.setHostAttribute("src", rewrittenSrc);
    let rewrittenSrcset = void 0;
    if (this.ngSrcset) {
      rewrittenSrcset = this.getRewrittenSrcset();
    } else if (this.shouldGenerateAutomaticSrcset()) {
      rewrittenSrcset = this.getAutomaticSrcset();
    }
    if (rewrittenSrcset) {
      this.setHostAttribute("srcset", rewrittenSrcset);
    }
    return rewrittenSrcset;
  }
  getFixedSrcset() {
    const finalSrcs = DENSITY_SRCSET_MULTIPLIERS.map((multiplier) => `${this.callImageLoader({
      src: this.ngSrc,
      width: this.width * multiplier
    })} ${multiplier}x`);
    return finalSrcs.join(", ");
  }
  shouldGenerateAutomaticSrcset() {
    let oversizedImage = false;
    if (!this.sizes) {
      oversizedImage = this.width > FIXED_SRCSET_WIDTH_LIMIT || this.height > FIXED_SRCSET_HEIGHT_LIMIT;
    }
    return !this.disableOptimizedSrcset && !this.srcset && this.imageLoader !== noopImageLoader && !oversizedImage;
  }
  /** @nodoc */
  ngOnDestroy() {
    if (ngDevMode) {
      if (!this.priority && this._renderedSrc !== null && this.lcpObserver !== null) {
        this.lcpObserver.unregisterImage(this._renderedSrc);
      }
    }
  }
  setHostAttribute(name, value) {
    this.renderer.setAttribute(this.imgElement, name, value);
  }
};
_NgOptimizedImage.ɵfac = function NgOptimizedImage_Factory(t) {
  return new (t || _NgOptimizedImage)();
};
_NgOptimizedImage.ɵdir = ɵɵdefineDirective({
  type: _NgOptimizedImage,
  selectors: [["img", "ngSrc", ""]],
  hostVars: 8,
  hostBindings: function NgOptimizedImage_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵstyleProp("position", ctx.fill ? "absolute" : null)("width", ctx.fill ? "100%" : null)("height", ctx.fill ? "100%" : null)("inset", ctx.fill ? "0px" : null);
    }
  },
  inputs: {
    ngSrc: ["ngSrc", "ngSrc", unwrapSafeUrl],
    ngSrcset: "ngSrcset",
    sizes: "sizes",
    width: ["width", "width", numberAttribute],
    height: ["height", "height", numberAttribute],
    loading: "loading",
    priority: ["priority", "priority", booleanAttribute],
    loaderParams: "loaderParams",
    disableOptimizedSrcset: ["disableOptimizedSrcset", "disableOptimizedSrcset", booleanAttribute],
    fill: ["fill", "fill", booleanAttribute],
    src: "src",
    srcset: "srcset"
  },
  standalone: true,
  features: [ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature]
});
var NgOptimizedImage = _NgOptimizedImage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgOptimizedImage, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "img[ngSrc]",
      host: {
        "[style.position]": 'fill ? "absolute" : null',
        "[style.width]": 'fill ? "100%" : null',
        "[style.height]": 'fill ? "100%" : null',
        "[style.inset]": 'fill ? "0px" : null'
      }
    }]
  }], null, {
    ngSrc: [{
      type: Input,
      args: [{
        required: true,
        transform: unwrapSafeUrl
      }]
    }],
    ngSrcset: [{
      type: Input
    }],
    sizes: [{
      type: Input
    }],
    width: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    height: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    loading: [{
      type: Input
    }],
    priority: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    loaderParams: [{
      type: Input
    }],
    disableOptimizedSrcset: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    fill: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    src: [{
      type: Input
    }],
    srcset: [{
      type: Input
    }]
  });
})();
function processConfig(config) {
  let sortedBreakpoints = {};
  if (config.breakpoints) {
    sortedBreakpoints.breakpoints = config.breakpoints.sort((a, b) => a - b);
  }
  return Object.assign({}, IMAGE_CONFIG_DEFAULTS, config, sortedBreakpoints);
}
function assertNoConflictingSrc(dir) {
  if (dir.src) {
    throw new RuntimeError(2950, `${imgDirectiveDetails(dir.ngSrc)} both \`src\` and \`ngSrc\` have been set. Supplying both of these attributes breaks lazy loading. The NgOptimizedImage directive sets \`src\` itself based on the value of \`ngSrc\`. To fix this, please remove the \`src\` attribute.`);
  }
}
function assertNoConflictingSrcset(dir) {
  if (dir.srcset) {
    throw new RuntimeError(2951, `${imgDirectiveDetails(dir.ngSrc)} both \`srcset\` and \`ngSrcset\` have been set. Supplying both of these attributes breaks lazy loading. The NgOptimizedImage directive sets \`srcset\` itself based on the value of \`ngSrcset\`. To fix this, please remove the \`srcset\` attribute.`);
  }
}
function assertNotBase64Image(dir) {
  let ngSrc = dir.ngSrc.trim();
  if (ngSrc.startsWith("data:")) {
    if (ngSrc.length > BASE64_IMG_MAX_LENGTH_IN_ERROR) {
      ngSrc = ngSrc.substring(0, BASE64_IMG_MAX_LENGTH_IN_ERROR) + "...";
    }
    throw new RuntimeError(2952, `${imgDirectiveDetails(dir.ngSrc, false)} \`ngSrc\` is a Base64-encoded string (${ngSrc}). NgOptimizedImage does not support Base64-encoded strings. To fix this, disable the NgOptimizedImage directive for this element by removing \`ngSrc\` and using a standard \`src\` attribute instead.`);
  }
}
function assertNoComplexSizes(dir) {
  let sizes = dir.sizes;
  if (sizes?.match(/((\)|,)\s|^)\d+px/)) {
    throw new RuntimeError(2952, `${imgDirectiveDetails(dir.ngSrc, false)} \`sizes\` was set to a string including pixel values. For automatic \`srcset\` generation, \`sizes\` must only include responsive values, such as \`sizes="50vw"\` or \`sizes="(min-width: 768px) 50vw, 100vw"\`. To fix this, modify the \`sizes\` attribute, or provide your own \`ngSrcset\` value directly.`);
  }
}
function assertNotBlobUrl(dir) {
  const ngSrc = dir.ngSrc.trim();
  if (ngSrc.startsWith("blob:")) {
    throw new RuntimeError(2952, `${imgDirectiveDetails(dir.ngSrc)} \`ngSrc\` was set to a blob URL (${ngSrc}). Blob URLs are not supported by the NgOptimizedImage directive. To fix this, disable the NgOptimizedImage directive for this element by removing \`ngSrc\` and using a regular \`src\` attribute instead.`);
  }
}
function assertNonEmptyInput(dir, name, value) {
  const isString = typeof value === "string";
  const isEmptyString = isString && value.trim() === "";
  if (!isString || isEmptyString) {
    throw new RuntimeError(2952, `${imgDirectiveDetails(dir.ngSrc)} \`${name}\` has an invalid value (\`${value}\`). To fix this, change the value to a non-empty string.`);
  }
}
function assertValidNgSrcset(dir, value) {
  if (value == null)
    return;
  assertNonEmptyInput(dir, "ngSrcset", value);
  const stringVal = value;
  const isValidWidthDescriptor = VALID_WIDTH_DESCRIPTOR_SRCSET.test(stringVal);
  const isValidDensityDescriptor = VALID_DENSITY_DESCRIPTOR_SRCSET.test(stringVal);
  if (isValidDensityDescriptor) {
    assertUnderDensityCap(dir, stringVal);
  }
  const isValidSrcset = isValidWidthDescriptor || isValidDensityDescriptor;
  if (!isValidSrcset) {
    throw new RuntimeError(2952, `${imgDirectiveDetails(dir.ngSrc)} \`ngSrcset\` has an invalid value (\`${value}\`). To fix this, supply \`ngSrcset\` using a comma-separated list of one or more width descriptors (e.g. "100w, 200w") or density descriptors (e.g. "1x, 2x").`);
  }
}
function assertUnderDensityCap(dir, value) {
  const underDensityCap = value.split(",").every((num) => num === "" || parseFloat(num) <= ABSOLUTE_SRCSET_DENSITY_CAP);
  if (!underDensityCap) {
    throw new RuntimeError(2952, `${imgDirectiveDetails(dir.ngSrc)} the \`ngSrcset\` contains an unsupported image density:\`${value}\`. NgOptimizedImage generally recommends a max image density of ${RECOMMENDED_SRCSET_DENSITY_CAP}x but supports image densities up to ${ABSOLUTE_SRCSET_DENSITY_CAP}x. The human eye cannot distinguish between image densities greater than ${RECOMMENDED_SRCSET_DENSITY_CAP}x - which makes them unnecessary for most use cases. Images that will be pinch-zoomed are typically the primary use case for ${ABSOLUTE_SRCSET_DENSITY_CAP}x images. Please remove the high density descriptor and try again.`);
  }
}
function postInitInputChangeError(dir, inputName) {
  let reason;
  if (inputName === "width" || inputName === "height") {
    reason = `Changing \`${inputName}\` may result in different attribute value applied to the underlying image element and cause layout shifts on a page.`;
  } else {
    reason = `Changing the \`${inputName}\` would have no effect on the underlying image element, because the resource loading has already occurred.`;
  }
  return new RuntimeError(2953, `${imgDirectiveDetails(dir.ngSrc)} \`${inputName}\` was updated after initialization. The NgOptimizedImage directive will not react to this input change. ${reason} To fix this, either switch \`${inputName}\` to a static value or wrap the image element in an *ngIf that is gated on the necessary value.`);
}
function assertNoPostInitInputChange(dir, changes, inputs) {
  inputs.forEach((input) => {
    const isUpdated = changes.hasOwnProperty(input);
    if (isUpdated && !changes[input].isFirstChange()) {
      if (input === "ngSrc") {
        dir = {
          ngSrc: changes[input].previousValue
        };
      }
      throw postInitInputChangeError(dir, input);
    }
  });
}
function assertGreaterThanZero(dir, inputValue, inputName) {
  const validNumber = typeof inputValue === "number" && inputValue > 0;
  const validString = typeof inputValue === "string" && /^\d+$/.test(inputValue.trim()) && parseInt(inputValue) > 0;
  if (!validNumber && !validString) {
    throw new RuntimeError(2952, `${imgDirectiveDetails(dir.ngSrc)} \`${inputName}\` has an invalid value. To fix this, provide \`${inputName}\` as a number greater than 0.`);
  }
}
function assertNoImageDistortion(dir, img, renderer) {
  const removeListenerFn = renderer.listen(img, "load", () => {
    removeListenerFn();
    const computedStyle = window.getComputedStyle(img);
    let renderedWidth = parseFloat(computedStyle.getPropertyValue("width"));
    let renderedHeight = parseFloat(computedStyle.getPropertyValue("height"));
    const boxSizing = computedStyle.getPropertyValue("box-sizing");
    if (boxSizing === "border-box") {
      const paddingTop = computedStyle.getPropertyValue("padding-top");
      const paddingRight = computedStyle.getPropertyValue("padding-right");
      const paddingBottom = computedStyle.getPropertyValue("padding-bottom");
      const paddingLeft = computedStyle.getPropertyValue("padding-left");
      renderedWidth -= parseFloat(paddingRight) + parseFloat(paddingLeft);
      renderedHeight -= parseFloat(paddingTop) + parseFloat(paddingBottom);
    }
    const renderedAspectRatio = renderedWidth / renderedHeight;
    const nonZeroRenderedDimensions = renderedWidth !== 0 && renderedHeight !== 0;
    const intrinsicWidth = img.naturalWidth;
    const intrinsicHeight = img.naturalHeight;
    const intrinsicAspectRatio = intrinsicWidth / intrinsicHeight;
    const suppliedWidth = dir.width;
    const suppliedHeight = dir.height;
    const suppliedAspectRatio = suppliedWidth / suppliedHeight;
    const inaccurateDimensions = Math.abs(suppliedAspectRatio - intrinsicAspectRatio) > ASPECT_RATIO_TOLERANCE;
    const stylingDistortion = nonZeroRenderedDimensions && Math.abs(intrinsicAspectRatio - renderedAspectRatio) > ASPECT_RATIO_TOLERANCE;
    if (inaccurateDimensions) {
      console.warn(formatRuntimeError(2952, `${imgDirectiveDetails(dir.ngSrc)} the aspect ratio of the image does not match the aspect ratio indicated by the width and height attributes. 
Intrinsic image size: ${intrinsicWidth}w x ${intrinsicHeight}h (aspect-ratio: ${round(intrinsicAspectRatio)}). 
Supplied width and height attributes: ${suppliedWidth}w x ${suppliedHeight}h (aspect-ratio: ${round(suppliedAspectRatio)}). 
To fix this, update the width and height attributes.`));
    } else if (stylingDistortion) {
      console.warn(formatRuntimeError(2952, `${imgDirectiveDetails(dir.ngSrc)} the aspect ratio of the rendered image does not match the image's intrinsic aspect ratio. 
Intrinsic image size: ${intrinsicWidth}w x ${intrinsicHeight}h (aspect-ratio: ${round(intrinsicAspectRatio)}). 
Rendered image size: ${renderedWidth}w x ${renderedHeight}h (aspect-ratio: ${round(renderedAspectRatio)}). 
This issue can occur if "width" and "height" attributes are added to an image without updating the corresponding image styling. To fix this, adjust image styling. In most cases, adding "height: auto" or "width: auto" to the image styling will fix this issue.`));
    } else if (!dir.ngSrcset && nonZeroRenderedDimensions) {
      const recommendedWidth = RECOMMENDED_SRCSET_DENSITY_CAP * renderedWidth;
      const recommendedHeight = RECOMMENDED_SRCSET_DENSITY_CAP * renderedHeight;
      const oversizedWidth = intrinsicWidth - recommendedWidth >= OVERSIZED_IMAGE_TOLERANCE;
      const oversizedHeight = intrinsicHeight - recommendedHeight >= OVERSIZED_IMAGE_TOLERANCE;
      if (oversizedWidth || oversizedHeight) {
        console.warn(formatRuntimeError(2960, `${imgDirectiveDetails(dir.ngSrc)} the intrinsic image is significantly larger than necessary. 
Rendered image size: ${renderedWidth}w x ${renderedHeight}h. 
Intrinsic image size: ${intrinsicWidth}w x ${intrinsicHeight}h. 
Recommended intrinsic image size: ${recommendedWidth}w x ${recommendedHeight}h. 
Note: Recommended intrinsic image size is calculated assuming a maximum DPR of ${RECOMMENDED_SRCSET_DENSITY_CAP}. To improve loading time, resize the image or consider using the "ngSrcset" and "sizes" attributes.`));
      }
    }
  });
}
function assertNonEmptyWidthAndHeight(dir) {
  let missingAttributes = [];
  if (dir.width === void 0)
    missingAttributes.push("width");
  if (dir.height === void 0)
    missingAttributes.push("height");
  if (missingAttributes.length > 0) {
    throw new RuntimeError(2954, `${imgDirectiveDetails(dir.ngSrc)} these required attributes are missing: ${missingAttributes.map((attr) => `"${attr}"`).join(", ")}. Including "width" and "height" attributes will prevent image-related layout shifts. To fix this, include "width" and "height" attributes on the image tag or turn on "fill" mode with the \`fill\` attribute.`);
  }
}
function assertEmptyWidthAndHeight(dir) {
  if (dir.width || dir.height) {
    throw new RuntimeError(2952, `${imgDirectiveDetails(dir.ngSrc)} the attributes \`height\` and/or \`width\` are present along with the \`fill\` attribute. Because \`fill\` mode causes an image to fill its containing element, the size attributes have no effect and should be removed.`);
  }
}
function assertNonZeroRenderedHeight(dir, img, renderer) {
  const removeListenerFn = renderer.listen(img, "load", () => {
    removeListenerFn();
    const renderedHeight = img.clientHeight;
    if (dir.fill && renderedHeight === 0) {
      console.warn(formatRuntimeError(2952, `${imgDirectiveDetails(dir.ngSrc)} the height of the fill-mode image is zero. This is likely because the containing element does not have the CSS 'position' property set to one of the following: "relative", "fixed", or "absolute". To fix this problem, make sure the container element has the CSS 'position' property defined and the height of the element is not zero.`));
    }
  });
}
function assertValidLoadingInput(dir) {
  if (dir.loading && dir.priority) {
    throw new RuntimeError(2952, `${imgDirectiveDetails(dir.ngSrc)} the \`loading\` attribute was used on an image that was marked "priority". Setting \`loading\` on priority images is not allowed because these images will always be eagerly loaded. To fix this, remove the “loading” attribute from the priority image.`);
  }
  const validInputs = ["auto", "eager", "lazy"];
  if (typeof dir.loading === "string" && !validInputs.includes(dir.loading)) {
    throw new RuntimeError(2952, `${imgDirectiveDetails(dir.ngSrc)} the \`loading\` attribute has an invalid value (\`${dir.loading}\`). To fix this, provide a valid value ("lazy", "eager", or "auto").`);
  }
}
function assertNotMissingBuiltInLoader(ngSrc, imageLoader) {
  if (imageLoader === noopImageLoader) {
    let builtInLoaderName = "";
    for (const loader of BUILT_IN_LOADERS) {
      if (loader.testUrl(ngSrc)) {
        builtInLoaderName = loader.name;
        break;
      }
    }
    if (builtInLoaderName) {
      console.warn(formatRuntimeError(2962, `NgOptimizedImage: It looks like your images may be hosted on the ${builtInLoaderName} CDN, but your app is not using Angular's built-in loader for that CDN. We recommend switching to use the built-in by calling \`provide${builtInLoaderName}Loader()\` in your \`providers\` and passing it your instance's base URL. If you don't want to use the built-in loader, define a custom loader function using IMAGE_LOADER to silence this warning.`));
    }
  }
}
function assertNoNgSrcsetWithoutLoader(dir, imageLoader) {
  if (dir.ngSrcset && imageLoader === noopImageLoader) {
    console.warn(formatRuntimeError(2963, `${imgDirectiveDetails(dir.ngSrc)} the \`ngSrcset\` attribute is present but no image loader is configured (i.e. the default one is being used), which would result in the same image being used for all configured sizes. To fix this, provide a loader or remove the \`ngSrcset\` attribute from the image.`));
  }
}
function assertNoLoaderParamsWithoutLoader(dir, imageLoader) {
  if (dir.loaderParams && imageLoader === noopImageLoader) {
    console.warn(formatRuntimeError(2963, `${imgDirectiveDetails(dir.ngSrc)} the \`loaderParams\` attribute is present but no image loader is configured (i.e. the default one is being used), which means that the loaderParams data will not be consumed and will not affect the URL. To fix this, provide a custom loader or remove the \`loaderParams\` attribute from the image.`));
  }
}
function round(input) {
  return Number.isInteger(input) ? input : input.toFixed(2);
}
function unwrapSafeUrl(value) {
  if (typeof value === "string") {
    return value;
  }
  return unwrapSafeValue(value);
}

export {
  getDOM,
  setRootDomAdapter,
  DomAdapter,
  DOCUMENT,
  PlatformLocation,
  LOCATION_INITIALIZED,
  BrowserPlatformLocation,
  normalizeQueryParams,
  LocationStrategy,
  APP_BASE_HREF,
  PathLocationStrategy,
  HashLocationStrategy,
  Location,
  NumberFormatStyle,
  Plural,
  FormStyle,
  TranslationWidth,
  FormatWidth,
  NumberSymbol,
  WeekDay,
  getLocaleId,
  getLocaleDayPeriods,
  getLocaleDayNames,
  getLocaleMonthNames,
  getLocaleEraNames,
  getLocaleFirstDayOfWeek,
  getLocaleWeekEndRange,
  getLocaleDateFormat,
  getLocaleTimeFormat,
  getLocaleDateTimeFormat,
  getLocaleNumberSymbol,
  getLocaleNumberFormat,
  getLocaleCurrencySymbol,
  getLocaleCurrencyName,
  getLocaleCurrencyCode2 as getLocaleCurrencyCode,
  getLocalePluralCase2 as getLocalePluralCase,
  getLocaleExtraDayPeriodRules,
  getLocaleExtraDayPeriods,
  getLocaleDirection,
  getCurrencySymbol,
  getNumberOfCurrencyDigits,
  formatDate,
  formatCurrency,
  formatPercent,
  formatNumber,
  NgLocalization,
  NgLocaleLocalization,
  registerLocaleData2 as registerLocaleData,
  parseCookieValue,
  NgClass,
  NgComponentOutlet,
  NgForOfContext,
  NgForOf,
  NgIf,
  NgIfContext,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
  NgPlural,
  NgPluralCase,
  NgStyle,
  NgTemplateOutlet,
  AsyncPipe,
  LowerCasePipe,
  TitleCasePipe,
  UpperCasePipe,
  DATE_PIPE_DEFAULT_TIMEZONE,
  DATE_PIPE_DEFAULT_OPTIONS,
  DatePipe,
  I18nPluralPipe,
  I18nSelectPipe,
  JsonPipe,
  KeyValuePipe,
  DecimalPipe,
  PercentPipe,
  CurrencyPipe,
  SlicePipe,
  CommonModule,
  PLATFORM_BROWSER_ID,
  PLATFORM_SERVER_ID,
  PLATFORM_WORKER_APP_ID,
  PLATFORM_WORKER_UI_ID,
  isPlatformBrowser,
  isPlatformServer,
  isPlatformWorkerApp,
  isPlatformWorkerUi,
  VERSION,
  ViewportScroller,
  NullViewportScroller,
  XhrFactory,
  IMAGE_LOADER,
  provideCloudflareLoader,
  provideCloudinaryLoader,
  provideImageKitLoader,
  provideImgixLoader,
  PRECONNECT_CHECK_BLOCKLIST,
  NgOptimizedImage
};
/*! Bundled license information:

@angular/common/fesm2022/common.mjs:
  (**
   * @license Angular v17.0.1
   * (c) 2010-2022 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=chunk-KOEPTLID.js.map
