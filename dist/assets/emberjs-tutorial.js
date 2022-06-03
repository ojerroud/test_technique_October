'use strict';



;define("emberjs-tutorial/adapters/-json-api", ["exports", "@ember-data/adapter/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("emberjs-tutorial/adapters/application", ["exports", "@ember-data/adapter/rest"], function (_exports, _rest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class ApplicationAdapter extends _rest.default {
    constructor() {
      super(...arguments);

      _defineProperty(this, "host", "https://api.october.eu");
    } // buildURL(...args) {
    //   return `${super.buildURL(...args)}.json`;
    // }


  }

  _exports.default = ApplicationAdapter;
});
;define("emberjs-tutorial/app", ["exports", "ember-resolver", "ember-load-initializers", "emberjs-tutorial/config/environment"], function (_exports, _emberResolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class App extends Ember.Application {
    constructor() {
      super(...arguments);

      _defineProperty(this, "modulePrefix", _environment.default.modulePrefix);

      _defineProperty(this, "podModulePrefix", _environment.default.podModulePrefix);

      _defineProperty(this, "Resolver", _emberResolver.default);
    }

  }

  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("emberjs-tutorial/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberComponentManager.default;
    }
  });
});
;define("emberjs-tutorial/components/general-container", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <main class="container mt-5">
    {{yield}}
  </main>
  */
  {
    "id": "eGY36VvI",
    "block": "{\"symbols\":[\"&default\"],\"statements\":[[10,\"main\"],[14,0,\"container mt-5\"],[12],[2,\"\\n  \"],[18,1,null],[2,\"\\n\"],[13]],\"hasEval\":false,\"upvars\":[]}",
    "meta": {
      "moduleName": "emberjs-tutorial/components/general-container.hbs"
    }
  });

  var _default = Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, Ember._templateOnlyComponent());

  _exports.default = _default;
});
;define("emberjs-tutorial/components/project", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    {{!-- <div class={{concat "project-" @type}}> --}}
  <div class={{concat "project-" (if @isOnline "online" "financed")}}>
    {{!-- <p>{{@openingDateTime}}</p> --}}
    <Project::Image
      @src={{concat "https://cdn.october.eu/" @project.illustration.url}}
    />
    <Project::Details @project={{@project}} @isOnline={{@isOnline}} />
  </div>
  */
  {
    "id": "iAOGLS+A",
    "block": "{\"symbols\":[\"@isOnline\",\"@project\"],\"statements\":[[10,\"div\"],[15,0,[30,[36,1],[\"project-\",[30,[36,0],[[32,1],\"online\",\"financed\"],null]],null]],[12],[2,\"\\n\"],[2,\"  \"],[8,\"project/image\",[],[[\"@src\"],[[30,[36,1],[\"https://cdn.october.eu/\",[32,2,[\"illustration\",\"url\"]]],null]]],null],[2,\"\\n  \"],[8,\"project/details\",[],[[\"@project\",\"@isOnline\"],[[32,2],[32,1]]],null],[2,\"\\n\"],[13]],\"hasEval\":false,\"upvars\":[\"if\",\"concat\"]}",
    "meta": {
      "moduleName": "emberjs-tutorial/components/project.hbs"
    }
  });

  var _default = Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, Ember._templateOnlyComponent());

  _exports.default = _default;
});
;define("emberjs-tutorial/components/project/details", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _class, _descriptor;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <div class="project-details">
    <img
      class="project-flag"
      src={{concat
        "/assets/flags/icon-flag-"
        @project.business.address.country
        ".svg"
      }}
    />
    <div class="project-details-component">
      <div class="project-details-component-summary">
        <h1 class="project-name fs-6 fw-bold">{{@project.name}}</h1>
        {{#if @isOnline}}
  
          {{#each
            (get @project.summary @project.business.address.country)
            as |item|
          }}
            <p class="project-summary text-secondary">
              {{item.value}}
            </p>
          {{/each}}
        {{else}}
          <div class="project-summary text-secondary">{{@project.rate}}% ·
            {{@project.loanDuration}}
            months</div>
        {{/if}}
      </div>
      <div class="project-details-component-rate">
        {{#if @isOnline}}
          <div class="fs-4 text-secondary">{{@project.rate}}%</div>
          <div class="fs-6 text-secondary">{{@project.loanDuration}}
            months · €
            {{formatamount @project.amount}}</div>
          <div class={{concat "circle text-secondary " @project.grade}}>
            {{@project.grade}}</div>
        {{else}}
          <div class="fs-6 text-secondary">€
            {{formatamount @project.amount}}</div>
        {{/if}}
  
      </div>
      <div class="project-details-component-finance">
        {{#if @isOnline}}
          <div class="toFinance fw-bold text-primary">{{tofinance
              @project.amount
              @project.totalInvested
            }}
          </div>
          <div class="duration text-secondary">{{duration
              @project.expirationDate
            }}</div>
        {{else}}
          <div class="duration text-secondary">{{duration
              @project.expirationDate
            }}</div>
          <div class={{concat "circle text-secondary " @project.grade}}>
            {{@project.grade}}</div>
        {{/if}}
      </div>
    </div>
  </div>
  */
  {
    "id": "UI32x8yN",
    "block": "{\"symbols\":[\"item\",\"@project\",\"@isOnline\"],\"statements\":[[10,\"div\"],[14,0,\"project-details\"],[12],[2,\"\\n  \"],[10,\"img\"],[14,0,\"project-flag\"],[15,\"src\",[30,[36,1],[\"/assets/flags/icon-flag-\",[32,2,[\"business\",\"address\",\"country\"]],\".svg\"],null]],[12],[13],[2,\"\\n  \"],[10,\"div\"],[14,0,\"project-details-component\"],[12],[2,\"\\n    \"],[10,\"div\"],[14,0,\"project-details-component-summary\"],[12],[2,\"\\n      \"],[10,\"h1\"],[14,0,\"project-name fs-6 fw-bold\"],[12],[1,[32,2,[\"name\"]]],[13],[2,\"\\n\"],[6,[37,7],[[32,3]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"\\n\"],[6,[37,6],[[30,[36,5],[[30,[36,5],[[30,[36,4],[[32,2,[\"summary\"]],[32,2,[\"business\",\"address\",\"country\"]]],null]],null]],null]],null,[[\"default\"],[{\"statements\":[[2,\"          \"],[10,\"p\"],[14,0,\"project-summary text-secondary\"],[12],[2,\"\\n            \"],[1,[32,1,[\"value\"]]],[2,\"\\n          \"],[13],[2,\"\\n\"]],\"parameters\":[1]}]]]],\"parameters\":[]},{\"statements\":[[2,\"        \"],[10,\"div\"],[14,0,\"project-summary text-secondary\"],[12],[1,[32,2,[\"rate\"]]],[2,\"% ·\\n          \"],[1,[32,2,[\"loanDuration\"]]],[2,\"\\n          months\"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"    \"],[13],[2,\"\\n    \"],[10,\"div\"],[14,0,\"project-details-component-rate\"],[12],[2,\"\\n\"],[6,[37,7],[[32,3]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"        \"],[10,\"div\"],[14,0,\"fs-4 text-secondary\"],[12],[1,[32,2,[\"rate\"]]],[2,\"%\"],[13],[2,\"\\n        \"],[10,\"div\"],[14,0,\"fs-6 text-secondary\"],[12],[1,[32,2,[\"loanDuration\"]]],[2,\"\\n          months · €\\n          \"],[1,[30,[36,3],[[32,2,[\"amount\"]]],null]],[13],[2,\"\\n        \"],[10,\"div\"],[15,0,[30,[36,1],[\"circle text-secondary \",[32,2,[\"grade\"]]],null]],[12],[2,\"\\n          \"],[1,[32,2,[\"grade\"]]],[13],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[2,\"        \"],[10,\"div\"],[14,0,\"fs-6 text-secondary\"],[12],[2,\"€\\n          \"],[1,[30,[36,3],[[32,2,[\"amount\"]]],null]],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n    \"],[13],[2,\"\\n    \"],[10,\"div\"],[14,0,\"project-details-component-finance\"],[12],[2,\"\\n\"],[6,[37,7],[[32,3]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"        \"],[10,\"div\"],[14,0,\"toFinance fw-bold text-primary\"],[12],[1,[30,[36,2],[[32,2,[\"amount\"]],[32,2,[\"totalInvested\"]]],null]],[2,\"\\n        \"],[13],[2,\"\\n        \"],[10,\"div\"],[14,0,\"duration text-secondary\"],[12],[1,[30,[36,0],[[32,2,[\"expirationDate\"]]],null]],[13],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[2,\"        \"],[10,\"div\"],[14,0,\"duration text-secondary\"],[12],[1,[30,[36,0],[[32,2,[\"expirationDate\"]]],null]],[13],[2,\"\\n        \"],[10,\"div\"],[15,0,[30,[36,1],[\"circle text-secondary \",[32,2,[\"grade\"]]],null]],[12],[2,\"\\n          \"],[1,[32,2,[\"grade\"]]],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n\"],[13]],\"hasEval\":false,\"upvars\":[\"duration\",\"concat\",\"tofinance\",\"formatamount\",\"get\",\"-track-array\",\"each\",\"if\"]}",
    "meta": {
      "moduleName": "emberjs-tutorial/components/project/details.hbs"
    }
  });

  let ProjectDetailsComponent = (_dec = Ember._tracked, _dec2 = Ember._action, (_class = class ProjectDetailsComponent extends _component.default {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "number", _descriptor, this);
    }

    addNumber() {
      this.number += 1;
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "number", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 0;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "addNumber", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "addNumber"), _class.prototype)), _class));
  _exports.default = ProjectDetailsComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, ProjectDetailsComponent);
});
;define("emberjs-tutorial/components/project/image", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <div class="project-image">
    <img src={{@src}} />
  </div>
  */
  {
    "id": "H3obYfjg",
    "block": "{\"symbols\":[\"@src\"],\"statements\":[[10,\"div\"],[14,0,\"project-image\"],[12],[2,\"\\n  \"],[10,\"img\"],[15,\"src\",[32,1]],[12],[13],[2,\"\\n\"],[13]],\"hasEval\":false,\"upvars\":[]}",
    "meta": {
      "moduleName": "emberjs-tutorial/components/project/image.hbs"
    }
  });

  var _default = Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, Ember._templateOnlyComponent());

  _exports.default = _default;
});
;define("emberjs-tutorial/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define("emberjs-tutorial/controllers/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  // import { tracked } from "@glimmer/tracking";
  // import { computed } from "@ember/object";
  // import { action } from "@ember/object";
  class IndexController extends Ember.Controller {
    // @tracked openingDateTime = "";
    // @action
    // setDateTime(date) {
    //   const now = new Date();
    //   const newDate = new Date(date);
    //   // date = new Date(date);
    //   const diffInMs = Math.abs(newDate, now);
    //   if (diffInMs / (1000 * 60 * 60 * 24 * 365)) {
    //     return "ok";
    //   } else {
    //     return "ok";
    //   }
    // }
    get projectsOnline() {
      return this.model.filter(project => project.status === "online");
    }

    get projectsCompleted() {
      return this.model.filter(project => project.status === "completed");
    } // get formatedPurcentage(num) {
    //   return `${Math.floor(num)}${Math.round(num % 1 * 100)}`
    // }
    // @tracked num = computed(function (number) {
    //   console.log(number);
    //   return `${Math.floor(number)}${Math.round((number % 1) * 100)}`;
    // });
    // set(this, '', );
    // lastname = "lastname";


  }

  _exports.default = IndexController;
});
;define("emberjs-tutorial/data-adapter", ["exports", "@ember-data/debug"], function (_exports, _debug) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _debug.default;
    }
  });
});
;define("emberjs-tutorial/helpers/app-version", ["exports", "emberjs-tutorial/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;

  function appVersion(_) {
    let hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = Ember.Helper.helper(appVersion);

  _exports.default = _default;
});
;define("emberjs-tutorial/helpers/duration", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Helper.helper(function duration(params
  /*, hash*/
  ) {
    const [date] = params;
    const days = new Date(date);
    const now = new Date();
    const diffTime = Math.abs(days - now);
    const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));
    const diffMonths = Math.round(diffDays / 30);
    const diffYears = Math.round(diffMonths / 12);
    let diff, unit;

    if (diffYears > 0) {
      diff = diffYears;
      unit = "year";
    } else if (diffMonths > 0) {
      diff = diffMonths;
      unit = "month";
    } else {
      diff = diffDays;
      unit = "day";
    }

    return `${diff} ${unit}${diff > 1 ? "s" : ""} ${days < now ? "ago" : ""}`;
  });

  _exports.default = _default;
});
;define("emberjs-tutorial/helpers/formatamount", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Helper.helper(function formatamount(params
  /*, hash*/
  ) {
    let [amount] = params;
    let formatedAmount = "";

    do {
      if (formatedAmount.length) {
        formatedAmount = "," + formatedAmount;
      }

      let threeDigits = amount % 1000 + "";
      amount /= 1000;

      if (amount > 1) {
        while (threeDigits.length < 3) {
          threeDigits = "0" + threeDigits;
        }
      }

      formatedAmount = threeDigits + formatedAmount;
    } while (amount > 1);

    return formatedAmount;
  });

  _exports.default = _default;
});
;define("emberjs-tutorial/helpers/formatstring", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Helper.helper(function formatstring(params
  /*, hash*/
  ) {
    const [string, length] = params;
    console.log(string, length);
    return `${string}${length > 1 ? "s" : ""}`;
  });

  _exports.default = _default;
});
;define("emberjs-tutorial/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("emberjs-tutorial/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("emberjs-tutorial/helpers/tofinance", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Helper.helper(function tofinance(params
  /*, hash*/
  ) {
    const [amount, totalInvested] = params;
    let toFinance = amount - totalInvested;
    let formatedToFinance = "";

    do {
      if (formatedToFinance.length) {
        formatedToFinance = "," + formatedToFinance;
      }

      let threeDigits = toFinance % 1000 + "";
      toFinance /= 1000;

      if (toFinance > 1) {
        while (threeDigits.length < 3) {
          threeDigits = "0" + threeDigits;
        }
      }

      formatedToFinance = threeDigits + formatedToFinance;
    } while (toFinance > 1);

    if (toFinance != "0") {
      return `€ ${formatedToFinance} to finance >`;
    } else {
      return "See the project >";
    }
  });

  _exports.default = _default;
});
;define("emberjs-tutorial/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "emberjs-tutorial/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("emberjs-tutorial/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
    }

  };
  _exports.default = _default;
});
;define("emberjs-tutorial/initializers/ember-data-data-adapter", ["exports", "@ember-data/debug/setup"], function (_exports, _setup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _setup.default;
    }
  });
});
;define("emberjs-tutorial/initializers/ember-data", ["exports", "ember-data", "ember-data/setup-container"], function (_exports, _emberData, _setupContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
    This code initializes EmberData in an Ember application.
  
    It ensures that the `store` service is automatically injected
    as the `store` property on all routes and controllers.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("emberjs-tutorial/initializers/export-application-global", ["exports", "emberjs-tutorial/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("emberjs-tutorial/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (_exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'ember-data',
    initialize: _initializeStoreService.default
  };
  _exports.default = _default;
});
;define("emberjs-tutorial/models/project", ["exports", "@ember-data/model"], function (_exports, _model) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let ProjectModel = (_class = class ProjectModel extends _model.default {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "status", _descriptor, this);

      _initializerDefineProperty(this, "name", _descriptor2, this);

      _initializerDefineProperty(this, "slug", _descriptor3, this);

      _initializerDefineProperty(this, "summary", _descriptor4, this);

      _initializerDefineProperty(this, "loanDuration", _descriptor5, this);

      _initializerDefineProperty(this, "amount", _descriptor6, this);

      _initializerDefineProperty(this, "totalInvested", _descriptor7, this);

      _initializerDefineProperty(this, "onlineDate", _descriptor8, this);

      _initializerDefineProperty(this, "expirationDate", _descriptor9, this);

      _initializerDefineProperty(this, "openingDate", _descriptor10, this);

      _initializerDefineProperty(this, "activity", _descriptor11, this);

      _initializerDefineProperty(this, "rate", _descriptor12, this);

      _initializerDefineProperty(this, "grade", _descriptor13, this);

      _initializerDefineProperty(this, "schedule", _descriptor14, this);

      _initializerDefineProperty(this, "type", _descriptor15, this);

      _initializerDefineProperty(this, "confidential", _descriptor16, this);

      _initializerDefineProperty(this, "process", _descriptor17, this);

      _initializerDefineProperty(this, "isInstantDecision", _descriptor18, this);

      _initializerDefineProperty(this, "description", _descriptor19, this);

      _initializerDefineProperty(this, "illustration", _descriptor20, this);

      _initializerDefineProperty(this, "business", _descriptor21, this);

      _initializerDefineProperty(this, "signatory", _descriptor22, this);
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "status", [_model.attr], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "name", [_model.attr], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "slug", [_model.attr], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "summary", [_model.attr], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "loanDuration", [_model.attr], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "amount", [_model.attr], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "totalInvested", [_model.attr], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "onlineDate", [_model.attr], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, "expirationDate", [_model.attr], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor10 = _applyDecoratedDescriptor(_class.prototype, "openingDate", [_model.attr], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor11 = _applyDecoratedDescriptor(_class.prototype, "activity", [_model.attr], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor12 = _applyDecoratedDescriptor(_class.prototype, "rate", [_model.attr], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor13 = _applyDecoratedDescriptor(_class.prototype, "grade", [_model.attr], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor14 = _applyDecoratedDescriptor(_class.prototype, "schedule", [_model.attr], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor15 = _applyDecoratedDescriptor(_class.prototype, "type", [_model.attr], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor16 = _applyDecoratedDescriptor(_class.prototype, "confidential", [_model.attr], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor17 = _applyDecoratedDescriptor(_class.prototype, "process", [_model.attr], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor18 = _applyDecoratedDescriptor(_class.prototype, "isInstantDecision", [_model.attr], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor19 = _applyDecoratedDescriptor(_class.prototype, "description", [_model.attr], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor20 = _applyDecoratedDescriptor(_class.prototype, "illustration", [_model.attr], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor21 = _applyDecoratedDescriptor(_class.prototype, "business", [_model.attr], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor22 = _applyDecoratedDescriptor(_class.prototype, "signatory", [_model.attr], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class);
  _exports.default = ProjectModel;
});
;define("emberjs-tutorial/router", ["exports", "emberjs-tutorial/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class Router extends Ember.Router {
    constructor() {
      super(...arguments);

      _defineProperty(this, "location", _environment.default.locationType);

      _defineProperty(this, "rootURL", _environment.default.rootURL);
    }

  }

  _exports.default = Router;
  Router.map(function () {});
});
;define("emberjs-tutorial/routes/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _descriptor;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let IndexRoute = (_dec = Ember.inject.service, (_class = class IndexRoute extends Ember.Route {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "store", _descriptor, this);
    }

    async model() {
      const projects = await this.store.findAll("project"); // const response = await fetch("https://api.october.eu/projects");
      // const { projects } = await response.json();

      return projects;
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "store", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = IndexRoute;
});
;define("emberjs-tutorial/serializers/-default", ["exports", "@ember-data/serializer/json"], function (_exports, _json) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _json.default;
    }
  });
});
;define("emberjs-tutorial/serializers/-json-api", ["exports", "@ember-data/serializer/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("emberjs-tutorial/serializers/-rest", ["exports", "@ember-data/serializer/rest"], function (_exports, _rest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rest.default;
    }
  });
});
;define("emberjs-tutorial/serializers/application", ["exports", "@ember-data/serializer/rest"], function (_exports, _rest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class ApplicationSerializer extends _rest.default {}

  _exports.default = ApplicationSerializer;
});
;define("emberjs-tutorial/services/store", ["exports", "ember-data/store"], function (_exports, _store) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _store.default;
    }
  });
});
;define("emberjs-tutorial/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "CahmyQmd",
    "block": "{\"symbols\":[],\"statements\":[[1,[30,[36,1],[[30,[36,0],null,null]],null]]],\"hasEval\":false,\"upvars\":[\"-outlet\",\"component\"]}",
    "meta": {
      "moduleName": "emberjs-tutorial/templates/application.hbs"
    }
  });

  _exports.default = _default;
});
;define("emberjs-tutorial/templates/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "hOhOc1AZ",
    "block": "{\"symbols\":[\"project\",\"project\",\"@project\"],\"statements\":[[8,\"general-container\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n  \"],[10,\"h3\"],[12],[1,[32,0,[\"projectsOnline\",\"length\"]]],[2,\"\\n    \"],[1,[30,[36,1],[\"project\",[32,0,[\"projectsOnline\",\"length\"]]],null]],[2,\"\\n    online\"],[13],[2,\"\\n  \"],[10,\"div\"],[14,0,\"projects-online\"],[12],[2,\"\\n\"],[6,[37,3],[[30,[36,2],[[30,[36,2],[[32,0,[\"projectsOnline\"]]],null]],null]],null,[[\"default\"],[{\"statements\":[[2,\"      \"],[8,\"project\",[],[[\"@project\",\"@isOnline\",\"@openingDateTime\"],[[32,2],true,[30,[36,0],[[32,0,[\"setDateTime\"]],[32,3,[\"openingDate\"]]],null]]],null],[2,\"\\n\"]],\"parameters\":[2]}]]],[2,\"  \"],[13],[2,\"\\n  \"],[10,\"h3\"],[12],[2,\"Financed projects\"],[13],[2,\"\\n  \"],[10,\"div\"],[14,0,\"projects-financed\"],[12],[2,\"\\n\"],[6,[37,3],[[30,[36,2],[[30,[36,2],[[32,0,[\"projectsCompleted\"]]],null]],null]],null,[[\"default\"],[{\"statements\":[[2,\"      \"],[8,\"project\",[],[[\"@project\",\"@isOnline\"],[[32,1],false]],null],[2,\"\\n\"]],\"parameters\":[1]}]]],[2,\"  \"],[13],[2,\"\\n\\n\"]],\"parameters\":[]}]]]],\"hasEval\":false,\"upvars\":[\"fn\",\"formatstring\",\"-track-array\",\"each\"]}",
    "meta": {
      "moduleName": "emberjs-tutorial/templates/index.hbs"
    }
  });

  _exports.default = _default;
});
;define("emberjs-tutorial/transforms/boolean", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.BooleanTransform;
    }
  });
});
;define("emberjs-tutorial/transforms/date", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.DateTransform;
    }
  });
});
;define("emberjs-tutorial/transforms/number", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.NumberTransform;
    }
  });
});
;define("emberjs-tutorial/transforms/string", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.StringTransform;
    }
  });
});
;

;define('emberjs-tutorial/config/environment', [], function() {
  var prefix = 'emberjs-tutorial';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("emberjs-tutorial/app")["default"].create({"name":"emberjs-tutorial","version":"0.0.0+30e4f968"});
          }
        
//# sourceMappingURL=emberjs-tutorial.map
