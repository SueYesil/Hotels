$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("hotels.feature");
formatter.feature({
  "line": 2,
  "name": "Hotels feature",
  "description": "",
  "id": "hotels-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@web"
    }
  ]
});
formatter.scenarioOutline({
  "line": 8,
  "name": "Verify user can only view the result by selected property class",
  "description": "",
  "id": "hotels-feature;verify-user-can-only-view-the-result-by-selected-property-class",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@hotels-1"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I am on default locations search result screen",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I select \u003cstars\u003e on the hotels page",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I verify system displays only \u003cstars\u003e  hotels on search result",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "hotels-feature;verify-user-can-only-view-the-result-by-selected-property-class;",
  "rows": [
    {
      "cells": [
        "stars"
      ],
      "line": 14,
      "id": "hotels-feature;verify-user-can-only-view-the-result-by-selected-property-class;;1"
    },
    {
      "cells": [
        "5 stars"
      ],
      "line": 15,
      "id": "hotels-feature;verify-user-can-only-view-the-result-by-selected-property-class;;2"
    },
    {
      "cells": [
        "4 stars"
      ],
      "line": 16,
      "id": "hotels-feature;verify-user-can-only-view-the-result-by-selected-property-class;;3"
    },
    {
      "cells": [
        "3 stars"
      ],
      "line": 17,
      "id": "hotels-feature;verify-user-can-only-view-the-result-by-selected-property-class;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 188650,
  "status": "passed"
});
formatter.before({
  "duration": 4336354985,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am on Hotels Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "HotelsHomeSD.i_am_on_Hotels_Home_Page()"
});
formatter.result({
  "duration": 374973977,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Verify user can only view the result by selected property class",
  "description": "",
  "id": "hotels-feature;verify-user-can-only-view-the-result-by-selected-property-class;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@web"
    },
    {
      "line": 7,
      "name": "@hotels-1"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I am on default locations search result screen",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I select 5 stars on the hotels page",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I verify system displays only 5 stars  hotels on search result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HotelsHomeSD.i_am_on_default_locations_search_result_screen()"
});
formatter.result({
  "duration": 21333854350,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: WebDriver waited for 15 seconds but still could not find the element therefore Timeout Exception has been thrown (tried for 15 second(s) with 1000 milliseconds interval)\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027android-4feda2974e04be40.localdomain\u0027, ip: \u0027fe80:0:0:0:149d:33b3:d05b:e917%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: driver.version: unknown\n\tat org.openqa.selenium.support.ui.FluentWait.timeoutException(FluentWait.java:315)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:283)\n\tat framework.webpages.ElementUtil.webAction(ElementUtil.java:28)\n\tat framework.webpages.ElementUtil.clickOn(ElementUtil.java:36)\n\tat framework.webpages.HotelhomePage.searchCity(HotelhomePage.java:37)\n\tat stepdefinition.HotelsHomeSD.i_am_on_default_locations_search_result_screen(HotelsHomeSD.java:24)\n\tat ✽.Given I am on default locations search result screen(hotels.feature:9)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "5 stars",
      "offset": 9
    }
  ],
  "location": "HotelsHomeSD.i_select_property_class_stars(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "5 stars",
      "offset": 30
    }
  ],
  "location": "HotelsHomeSD.i_verify_system_displays_only_stars_hotels_on_search_result(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 329221,
  "status": "passed"
});
formatter.after({
  "duration": 7467234,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d79.0.3945.88)\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027android-4feda2974e04be40.localdomain\u0027, ip: \u0027fe80:0:0:0:149d:33b3:d05b:e917%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 79.0.3945.88, chrome: {chromedriverVersion: 78.0.3904.105 (60e2d8774a81..., userDataDir: /var/folders/fw/xr804z7s7jv...}, goog:chromeOptions: {debuggerAddress: localhost:54415}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 9d7e09dab8fea0248d3a87bee7b07286\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:605)\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions.deleteAllCookies(RemoteWebDriver.java:690)\n\tat stepdefinition.SharedSD.after(SharedSD.java:32)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:223)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:211)\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:205)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\n",
  "status": "failed"
});
formatter.before({
  "duration": 223894,
  "status": "passed"
});
formatter.before({
  "duration": 2351395119,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am on Hotels Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "HotelsHomeSD.i_am_on_Hotels_Home_Page()"
});
formatter.result({
  "duration": 7069342,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Verify user can only view the result by selected property class",
  "description": "",
  "id": "hotels-feature;verify-user-can-only-view-the-result-by-selected-property-class;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@web"
    },
    {
      "line": 7,
      "name": "@hotels-1"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I am on default locations search result screen",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I select 4 stars on the hotels page",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I verify system displays only 4 stars  hotels on search result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HotelsHomeSD.i_am_on_default_locations_search_result_screen()"
});
formatter.result({
  "duration": 11096041753,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: window was already closed\n  (Session info: chrome\u003d79.0.3945.88)\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027android-4feda2974e04be40.localdomain\u0027, ip: \u0027fe80:0:0:0:149d:33b3:d05b:e917%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 79.0.3945.88, chrome: {chromedriverVersion: 78.0.3904.105 (60e2d8774a81..., userDataDir: /var/folders/fw/xr804z7s7jv...}, goog:chromeOptions: {debuggerAddress: localhost:54544}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: aa9fd923f5cb14ad4fa330b0c92d7f14\n*** Element info: {Using\u003dxpath, value\u003d//a[@class\u003d\u0027footer-continue-link di-ib fw-bold\u0027]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\n\tat framework.webpages.ElementUtil$1.apply(ElementUtil.java:30)\n\tat framework.webpages.ElementUtil$1.apply(ElementUtil.java:28)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:260)\n\tat framework.webpages.ElementUtil.webAction(ElementUtil.java:28)\n\tat framework.webpages.ElementUtil.clickOn(ElementUtil.java:36)\n\tat framework.webpages.HotelhomePage.searchCity(HotelhomePage.java:37)\n\tat stepdefinition.HotelsHomeSD.i_am_on_default_locations_search_result_screen(HotelsHomeSD.java:24)\n\tat ✽.Given I am on default locations search result screen(hotels.feature:9)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "4 stars",
      "offset": 9
    }
  ],
  "location": "HotelsHomeSD.i_select_property_class_stars(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "4 stars",
      "offset": 30
    }
  ],
  "location": "HotelsHomeSD.i_verify_system_displays_only_stars_hotels_on_search_result(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 172711,
  "status": "passed"
});
formatter.after({
  "duration": 19658562,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: window was already closed\n  (Session info: chrome\u003d79.0.3945.88)\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027android-4feda2974e04be40.localdomain\u0027, ip: \u0027fe80:0:0:0:149d:33b3:d05b:e917%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 79.0.3945.88, chrome: {chromedriverVersion: 78.0.3904.105 (60e2d8774a81..., userDataDir: /var/folders/fw/xr804z7s7jv...}, goog:chromeOptions: {debuggerAddress: localhost:54544}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: aa9fd923f5cb14ad4fa330b0c92d7f14\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:605)\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions.deleteAllCookies(RemoteWebDriver.java:690)\n\tat stepdefinition.SharedSD.after(SharedSD.java:32)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:223)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:211)\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:205)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\n",
  "status": "failed"
});
formatter.before({
  "duration": 234868,
  "status": "passed"
});
formatter.before({
  "duration": 2459381982,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am on Hotels Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "HotelsHomeSD.i_am_on_Hotels_Home_Page()"
});
formatter.result({
  "duration": 6472839,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Verify user can only view the result by selected property class",
  "description": "",
  "id": "hotels-feature;verify-user-can-only-view-the-result-by-selected-property-class;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@web"
    },
    {
      "line": 7,
      "name": "@hotels-1"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I am on default locations search result screen",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I select 3 stars on the hotels page",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I verify system displays only 3 stars  hotels on search result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HotelsHomeSD.i_am_on_default_locations_search_result_screen()"
});
formatter.result({
  "duration": 11105761853,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: window was already closed\n  (Session info: chrome\u003d79.0.3945.88)\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027android-4feda2974e04be40.localdomain\u0027, ip: \u0027fe80:0:0:0:149d:33b3:d05b:e917%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 79.0.3945.88, chrome: {chromedriverVersion: 78.0.3904.105 (60e2d8774a81..., userDataDir: /var/folders/fw/xr804z7s7jv...}, goog:chromeOptions: {debuggerAddress: localhost:54667}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 3eedb130d9c2c1c947be5752496333c2\n*** Element info: {Using\u003dxpath, value\u003d//a[@class\u003d\u0027footer-continue-link di-ib fw-bold\u0027]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\n\tat framework.webpages.ElementUtil$1.apply(ElementUtil.java:30)\n\tat framework.webpages.ElementUtil$1.apply(ElementUtil.java:28)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:260)\n\tat framework.webpages.ElementUtil.webAction(ElementUtil.java:28)\n\tat framework.webpages.ElementUtil.clickOn(ElementUtil.java:36)\n\tat framework.webpages.HotelhomePage.searchCity(HotelhomePage.java:37)\n\tat stepdefinition.HotelsHomeSD.i_am_on_default_locations_search_result_screen(HotelsHomeSD.java:24)\n\tat ✽.Given I am on default locations search result screen(hotels.feature:9)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "3 stars",
      "offset": 9
    }
  ],
  "location": "HotelsHomeSD.i_select_property_class_stars(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3 stars",
      "offset": 30
    }
  ],
  "location": "HotelsHomeSD.i_verify_system_displays_only_stars_hotels_on_search_result(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 176248,
  "status": "passed"
});
formatter.after({
  "duration": 18674550,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: window was already closed\n  (Session info: chrome\u003d79.0.3945.88)\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027android-4feda2974e04be40.localdomain\u0027, ip: \u0027fe80:0:0:0:149d:33b3:d05b:e917%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 79.0.3945.88, chrome: {chromedriverVersion: 78.0.3904.105 (60e2d8774a81..., userDataDir: /var/folders/fw/xr804z7s7jv...}, goog:chromeOptions: {debuggerAddress: localhost:54667}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 3eedb130d9c2c1c947be5752496333c2\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:605)\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions.deleteAllCookies(RemoteWebDriver.java:690)\n\tat stepdefinition.SharedSD.after(SharedSD.java:32)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:223)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:211)\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:205)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\n",
  "status": "failed"
});
formatter.before({
  "duration": 91204,
  "status": "passed"
});
formatter.before({
  "duration": 3869191307,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am on Hotels Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "HotelsHomeSD.i_am_on_Hotels_Home_Page()"
});
formatter.result({
  "duration": 7259967,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "List of all of hotel within 10 miles radius of airport or downtown",
  "description": "",
  "id": "hotels-feature;list-of-all-of-hotel-within-10-miles-radius-of-airport-or-downtown",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@hotels-2"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I am on default locations search result screen",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I verify system displays all hotels within 10 miles radius of airport",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I verify Hilton Hotel is within 10 miles radius of downtown",
  "keyword": "And "
});
formatter.match({
  "location": "HotelsHomeSD.i_am_on_default_locations_search_result_screen()"
});
formatter.result({
  "duration": 17692953487,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: WebDriver waited for 15 seconds but still could not find the element therefore Timeout Exception has been thrown (tried for 15 second(s) with 1000 milliseconds interval)\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027android-4feda2974e04be40.localdomain\u0027, ip: \u0027fe80:0:0:0:149d:33b3:d05b:e917%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: driver.version: unknown\n\tat org.openqa.selenium.support.ui.FluentWait.timeoutException(FluentWait.java:315)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:283)\n\tat framework.webpages.ElementUtil.webAction(ElementUtil.java:28)\n\tat framework.webpages.ElementUtil.clickOn(ElementUtil.java:36)\n\tat framework.webpages.HotelhomePage.searchCity(HotelhomePage.java:37)\n\tat stepdefinition.HotelsHomeSD.i_am_on_default_locations_search_result_screen(HotelsHomeSD.java:24)\n\tat ✽.Given I am on default locations search result screen(hotels.feature:21)\n",
  "status": "failed"
});
formatter.match({
  "location": "HotelsHomeSD.i_verify_system_displays_all_hotels_within_miles_radius_of_airport()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HotelsHomeSD.i_verify_Hilton_Hotel_is_within_miles_radius_of_downtown()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1104024,
  "status": "passed"
});
formatter.after({
  "duration": 6063302,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d79.0.3945.88)\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027android-4feda2974e04be40.localdomain\u0027, ip: \u0027fe80:0:0:0:149d:33b3:d05b:e917%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 79.0.3945.88, chrome: {chromedriverVersion: 78.0.3904.105 (60e2d8774a81..., userDataDir: /var/folders/fw/xr804z7s7jv...}, goog:chromeOptions: {debuggerAddress: localhost:54780}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: d2dec0ff63ba4aa05a29c6a44e29d23d\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:605)\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions.deleteAllCookies(RemoteWebDriver.java:690)\n\tat stepdefinition.SharedSD.after(SharedSD.java:32)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:223)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:211)\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:205)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\n",
  "status": "failed"
});
});