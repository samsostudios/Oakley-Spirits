"use strict";
(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __export = (target, all) => {
    for (var name3 in all)
      __defProp(target, name3, { get: all[name3], enumerable: true });
  };

  // bin/live-reload.js
  var init_live_reload = __esm({
    "bin/live-reload.js"() {
      "use strict";
      new EventSource(`http://localhost:${3e3}/esbuild`).addEventListener(
        "change",
        () => location.reload()
      );
    }
  });

  // node_modules/gsap/gsap-core.js
  function _assertThisInitialized(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }
  var _config, _defaults, _suppressOverwrites, _reverting, _context, _bigNum, _tinyNum, _2PI, _HALF_PI, _gsID, _sqrt, _cos, _sin, _isString, _isFunction, _isNumber, _isUndefined, _isObject, _isNotFalse, _windowExists, _isFuncOrString, _isTypedArray, _isArray, _strictNumExp, _numExp, _numWithUnitExp, _complexStringNumExp, _relExp, _delimitedValueExp, _unitExp, _globalTimeline, _win, _coreInitted, _doc, _globals, _installScope, _coreReady, _install, _missingPlugin, _warn, _addGlobal, _emptyFunc, _startAtRevertConfig, _revertConfigNoKill, _revertConfig, _reservedProps, _lazyTweens, _lazyLookup, _lastRenderedFrame, _plugins, _effects, _nextGCFrame, _harnessPlugins, _callbackNames, _harness, _getCache, _getProperty, _forEachName, _round, _roundPrecise, _parseRelative, _arrayContainsAny, _lazyRender, _lazySafeRender, _numericIfPossible, _passThrough, _setDefaults, _setKeyframeDefaults, _merge, _mergeDeep, _copyExcluding, _inheritDefaults, _arraysMatch, _addLinkedListItem, _removeLinkedListItem, _removeFromParent, _uncache, _recacheAncestors, _rewindStartAt, _hasNoPausedAncestors, _elapsedCycleDuration, _animationCycle, _parentToChildTotalTime, _setEnd, _alignPlayhead, _postAddChecks, _addToTimeline, _scrollTrigger, _attemptInitTween, _parentPlayheadIsBeforeStart, _isFromOrFromStart, _renderZeroDurationTween, _findNextPauseTween, _setDuration, _onUpdateTotalDuration, _zeroPosition, _parsePosition, _createTweenType, _conditionalReturn, _clamp, getUnit, clamp, _slice, _isArrayLike, _flatten, toArray, selector, shuffle, distribute, _roundModifier, snap, random, pipe, unitize, normalize, _wrapArray, wrap, wrapYoyo, _replaceRandom, mapRange, interpolate, _getLabelInDirection, _callback, _interrupt, _quickTween, _createPlugin, _255, _colorLookup, _hue, splitColor, _colorOrderData, _formatColors, _colorExp, _hslExp, _colorStringFilter, _tickerActive, _ticker, _wake, _easeMap, _customEaseExp, _quotesExp, _parseObjectInString, _valueInParentheses, _configEaseFromString, _invertEase, _propagateYoyoEase, _parseEase, _insertEase, _easeInOutFromOut, _configElastic, _configBack, GSCache, Animation, Timeline, _addComplexStringPropTween, _addPropTween, _processVars, _checkPlugin, _overwritingTween, _forceAllPropTweens, _initTween, _updatePropTweens, _addAliasesToVars, _parseKeyframe, _parseFuncOrString, _staggerTweenProps, _staggerPropsToSkip, Tween, _setterPlain, _setterFunc, _setterFuncWithParam, _setterAttribute, _getSetter, _renderPlain, _renderBoolean, _renderComplexString, _renderPropTweens, _addPluginModifier, _killPropTweensOf, _setterWithModifier, _sortPropTweensByPriority, PropTween, _media, _listeners, _emptyArray, _lastMediaTime, _dispatch, _onMediaChange, Context, MatchMedia, _gsap, _getPluginPropTween, _addModifiers, _buildModifierPlugin, gsap, Power0, Power1, Power2, Power3, Power4, Linear, Quad, Cubic, Quart, Quint, Strong, Elastic, Back, SteppedEase, Bounce, Sine, Expo, Circ;
  var init_gsap_core = __esm({
    "node_modules/gsap/gsap-core.js"() {
      init_live_reload();
      _config = {
        autoSleep: 120,
        force3D: "auto",
        nullTargetWarn: 1,
        units: {
          lineHeight: ""
        }
      };
      _defaults = {
        duration: 0.5,
        overwrite: false,
        delay: 0
      };
      _bigNum = 1e8;
      _tinyNum = 1 / _bigNum;
      _2PI = Math.PI * 2;
      _HALF_PI = _2PI / 4;
      _gsID = 0;
      _sqrt = Math.sqrt;
      _cos = Math.cos;
      _sin = Math.sin;
      _isString = function _isString2(value) {
        return typeof value === "string";
      };
      _isFunction = function _isFunction2(value) {
        return typeof value === "function";
      };
      _isNumber = function _isNumber2(value) {
        return typeof value === "number";
      };
      _isUndefined = function _isUndefined2(value) {
        return typeof value === "undefined";
      };
      _isObject = function _isObject2(value) {
        return typeof value === "object";
      };
      _isNotFalse = function _isNotFalse2(value) {
        return value !== false;
      };
      _windowExists = function _windowExists2() {
        return typeof window !== "undefined";
      };
      _isFuncOrString = function _isFuncOrString2(value) {
        return _isFunction(value) || _isString(value);
      };
      _isTypedArray = typeof ArrayBuffer === "function" && ArrayBuffer.isView || function() {
      };
      _isArray = Array.isArray;
      _strictNumExp = /(?:-?\.?\d|\.)+/gi;
      _numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g;
      _numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g;
      _complexStringNumExp = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi;
      _relExp = /[+-]=-?[.\d]+/;
      _delimitedValueExp = /[^,'"\[\]\s]+/gi;
      _unitExp = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i;
      _globals = {};
      _installScope = {};
      _install = function _install2(scope) {
        return (_installScope = _merge(scope, _globals)) && gsap;
      };
      _missingPlugin = function _missingPlugin2(property, value) {
        return console.warn("Invalid property", property, "set to", value, "Missing plugin? gsap.registerPlugin()");
      };
      _warn = function _warn2(message, suppress) {
        return !suppress && console.warn(message);
      };
      _addGlobal = function _addGlobal2(name3, obj) {
        return name3 && (_globals[name3] = obj) && _installScope && (_installScope[name3] = obj) || _globals;
      };
      _emptyFunc = function _emptyFunc2() {
        return 0;
      };
      _startAtRevertConfig = {
        suppressEvents: true,
        isStart: true,
        kill: false
      };
      _revertConfigNoKill = {
        suppressEvents: true,
        kill: false
      };
      _revertConfig = {
        suppressEvents: true
      };
      _reservedProps = {};
      _lazyTweens = [];
      _lazyLookup = {};
      _plugins = {};
      _effects = {};
      _nextGCFrame = 30;
      _harnessPlugins = [];
      _callbackNames = "";
      _harness = function _harness2(targets) {
        var target = targets[0], harnessPlugin, i;
        _isObject(target) || _isFunction(target) || (targets = [targets]);
        if (!(harnessPlugin = (target._gsap || {}).harness)) {
          i = _harnessPlugins.length;
          while (i-- && !_harnessPlugins[i].targetTest(target)) {
          }
          harnessPlugin = _harnessPlugins[i];
        }
        i = targets.length;
        while (i--) {
          targets[i] && (targets[i]._gsap || (targets[i]._gsap = new GSCache(targets[i], harnessPlugin))) || targets.splice(i, 1);
        }
        return targets;
      };
      _getCache = function _getCache2(target) {
        return target._gsap || _harness(toArray(target))[0]._gsap;
      };
      _getProperty = function _getProperty2(target, property, v) {
        return (v = target[property]) && _isFunction(v) ? target[property]() : _isUndefined(v) && target.getAttribute && target.getAttribute(property) || v;
      };
      _forEachName = function _forEachName2(names, func) {
        return (names = names.split(",")).forEach(func) || names;
      };
      _round = function _round2(value) {
        return Math.round(value * 1e5) / 1e5 || 0;
      };
      _roundPrecise = function _roundPrecise2(value) {
        return Math.round(value * 1e7) / 1e7 || 0;
      };
      _parseRelative = function _parseRelative2(start, value) {
        var operator = value.charAt(0), end = parseFloat(value.substr(2));
        start = parseFloat(start);
        return operator === "+" ? start + end : operator === "-" ? start - end : operator === "*" ? start * end : start / end;
      };
      _arrayContainsAny = function _arrayContainsAny2(toSearch, toFind) {
        var l = toFind.length, i = 0;
        for (; toSearch.indexOf(toFind[i]) < 0 && ++i < l; ) {
        }
        return i < l;
      };
      _lazyRender = function _lazyRender2() {
        var l = _lazyTweens.length, a = _lazyTweens.slice(0), i, tween;
        _lazyLookup = {};
        _lazyTweens.length = 0;
        for (i = 0; i < l; i++) {
          tween = a[i];
          tween && tween._lazy && (tween.render(tween._lazy[0], tween._lazy[1], true)._lazy = 0);
        }
      };
      _lazySafeRender = function _lazySafeRender2(animation, time, suppressEvents, force) {
        _lazyTweens.length && !_reverting && _lazyRender();
        animation.render(time, suppressEvents, force || _reverting && time < 0 && (animation._initted || animation._startAt));
        _lazyTweens.length && !_reverting && _lazyRender();
      };
      _numericIfPossible = function _numericIfPossible2(value) {
        var n = parseFloat(value);
        return (n || n === 0) && (value + "").match(_delimitedValueExp).length < 2 ? n : _isString(value) ? value.trim() : value;
      };
      _passThrough = function _passThrough2(p) {
        return p;
      };
      _setDefaults = function _setDefaults2(obj, defaults2) {
        for (var p in defaults2) {
          p in obj || (obj[p] = defaults2[p]);
        }
        return obj;
      };
      _setKeyframeDefaults = function _setKeyframeDefaults2(excludeDuration) {
        return function(obj, defaults2) {
          for (var p in defaults2) {
            p in obj || p === "duration" && excludeDuration || p === "ease" || (obj[p] = defaults2[p]);
          }
        };
      };
      _merge = function _merge2(base, toMerge) {
        for (var p in toMerge) {
          base[p] = toMerge[p];
        }
        return base;
      };
      _mergeDeep = function _mergeDeep2(base, toMerge) {
        for (var p in toMerge) {
          p !== "__proto__" && p !== "constructor" && p !== "prototype" && (base[p] = _isObject(toMerge[p]) ? _mergeDeep2(base[p] || (base[p] = {}), toMerge[p]) : toMerge[p]);
        }
        return base;
      };
      _copyExcluding = function _copyExcluding2(obj, excluding) {
        var copy = {}, p;
        for (p in obj) {
          p in excluding || (copy[p] = obj[p]);
        }
        return copy;
      };
      _inheritDefaults = function _inheritDefaults2(vars) {
        var parent = vars.parent || _globalTimeline, func = vars.keyframes ? _setKeyframeDefaults(_isArray(vars.keyframes)) : _setDefaults;
        if (_isNotFalse(vars.inherit)) {
          while (parent) {
            func(vars, parent.vars.defaults);
            parent = parent.parent || parent._dp;
          }
        }
        return vars;
      };
      _arraysMatch = function _arraysMatch2(a1, a2) {
        var i = a1.length, match = i === a2.length;
        while (match && i-- && a1[i] === a2[i]) {
        }
        return i < 0;
      };
      _addLinkedListItem = function _addLinkedListItem2(parent, child, firstProp, lastProp, sortBy) {
        if (firstProp === void 0) {
          firstProp = "_first";
        }
        if (lastProp === void 0) {
          lastProp = "_last";
        }
        var prev = parent[lastProp], t;
        if (sortBy) {
          t = child[sortBy];
          while (prev && prev[sortBy] > t) {
            prev = prev._prev;
          }
        }
        if (prev) {
          child._next = prev._next;
          prev._next = child;
        } else {
          child._next = parent[firstProp];
          parent[firstProp] = child;
        }
        if (child._next) {
          child._next._prev = child;
        } else {
          parent[lastProp] = child;
        }
        child._prev = prev;
        child.parent = child._dp = parent;
        return child;
      };
      _removeLinkedListItem = function _removeLinkedListItem2(parent, child, firstProp, lastProp) {
        if (firstProp === void 0) {
          firstProp = "_first";
        }
        if (lastProp === void 0) {
          lastProp = "_last";
        }
        var prev = child._prev, next = child._next;
        if (prev) {
          prev._next = next;
        } else if (parent[firstProp] === child) {
          parent[firstProp] = next;
        }
        if (next) {
          next._prev = prev;
        } else if (parent[lastProp] === child) {
          parent[lastProp] = prev;
        }
        child._next = child._prev = child.parent = null;
      };
      _removeFromParent = function _removeFromParent2(child, onlyIfParentHasAutoRemove) {
        child.parent && (!onlyIfParentHasAutoRemove || child.parent.autoRemoveChildren) && child.parent.remove(child);
        child._act = 0;
      };
      _uncache = function _uncache2(animation, child) {
        if (animation && (!child || child._end > animation._dur || child._start < 0)) {
          var a = animation;
          while (a) {
            a._dirty = 1;
            a = a.parent;
          }
        }
        return animation;
      };
      _recacheAncestors = function _recacheAncestors2(animation) {
        var parent = animation.parent;
        while (parent && parent.parent) {
          parent._dirty = 1;
          parent.totalDuration();
          parent = parent.parent;
        }
        return animation;
      };
      _rewindStartAt = function _rewindStartAt2(tween, totalTime, suppressEvents, force) {
        return tween._startAt && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween.vars.immediateRender && !tween.vars.autoRevert || tween._startAt.render(totalTime, true, force));
      };
      _hasNoPausedAncestors = function _hasNoPausedAncestors2(animation) {
        return !animation || animation._ts && _hasNoPausedAncestors2(animation.parent);
      };
      _elapsedCycleDuration = function _elapsedCycleDuration2(animation) {
        return animation._repeat ? _animationCycle(animation._tTime, animation = animation.duration() + animation._rDelay) * animation : 0;
      };
      _animationCycle = function _animationCycle2(tTime, cycleDuration) {
        var whole = Math.floor(tTime /= cycleDuration);
        return tTime && whole === tTime ? whole - 1 : whole;
      };
      _parentToChildTotalTime = function _parentToChildTotalTime2(parentTime, child) {
        return (parentTime - child._start) * child._ts + (child._ts >= 0 ? 0 : child._dirty ? child.totalDuration() : child._tDur);
      };
      _setEnd = function _setEnd2(animation) {
        return animation._end = _roundPrecise(animation._start + (animation._tDur / Math.abs(animation._ts || animation._rts || _tinyNum) || 0));
      };
      _alignPlayhead = function _alignPlayhead2(animation, totalTime) {
        var parent = animation._dp;
        if (parent && parent.smoothChildTiming && animation._ts) {
          animation._start = _roundPrecise(parent._time - (animation._ts > 0 ? totalTime / animation._ts : ((animation._dirty ? animation.totalDuration() : animation._tDur) - totalTime) / -animation._ts));
          _setEnd(animation);
          parent._dirty || _uncache(parent, animation);
        }
        return animation;
      };
      _postAddChecks = function _postAddChecks2(timeline2, child) {
        var t;
        if (child._time || child._initted && !child._dur) {
          t = _parentToChildTotalTime(timeline2.rawTime(), child);
          if (!child._dur || _clamp(0, child.totalDuration(), t) - child._tTime > _tinyNum) {
            child.render(t, true);
          }
        }
        if (_uncache(timeline2, child)._dp && timeline2._initted && timeline2._time >= timeline2._dur && timeline2._ts) {
          if (timeline2._dur < timeline2.duration()) {
            t = timeline2;
            while (t._dp) {
              t.rawTime() >= 0 && t.totalTime(t._tTime);
              t = t._dp;
            }
          }
          timeline2._zTime = -_tinyNum;
        }
      };
      _addToTimeline = function _addToTimeline2(timeline2, child, position, skipChecks) {
        child.parent && _removeFromParent(child);
        child._start = _roundPrecise((_isNumber(position) ? position : position || timeline2 !== _globalTimeline ? _parsePosition(timeline2, position, child) : timeline2._time) + child._delay);
        child._end = _roundPrecise(child._start + (child.totalDuration() / Math.abs(child.timeScale()) || 0));
        _addLinkedListItem(timeline2, child, "_first", "_last", timeline2._sort ? "_start" : 0);
        _isFromOrFromStart(child) || (timeline2._recent = child);
        skipChecks || _postAddChecks(timeline2, child);
        timeline2._ts < 0 && _alignPlayhead(timeline2, timeline2._tTime);
        return timeline2;
      };
      _scrollTrigger = function _scrollTrigger2(animation, trigger) {
        return (_globals.ScrollTrigger || _missingPlugin("scrollTrigger", trigger)) && _globals.ScrollTrigger.create(trigger, animation);
      };
      _attemptInitTween = function _attemptInitTween2(tween, time, force, suppressEvents, tTime) {
        _initTween(tween, time, tTime);
        if (!tween._initted) {
          return 1;
        }
        if (!force && tween._pt && !_reverting && (tween._dur && tween.vars.lazy !== false || !tween._dur && tween.vars.lazy) && _lastRenderedFrame !== _ticker.frame) {
          _lazyTweens.push(tween);
          tween._lazy = [tTime, suppressEvents];
          return 1;
        }
      };
      _parentPlayheadIsBeforeStart = function _parentPlayheadIsBeforeStart2(_ref) {
        var parent = _ref.parent;
        return parent && parent._ts && parent._initted && !parent._lock && (parent.rawTime() < 0 || _parentPlayheadIsBeforeStart2(parent));
      };
      _isFromOrFromStart = function _isFromOrFromStart2(_ref2) {
        var data = _ref2.data;
        return data === "isFromStart" || data === "isStart";
      };
      _renderZeroDurationTween = function _renderZeroDurationTween2(tween, totalTime, suppressEvents, force) {
        var prevRatio = tween.ratio, ratio = totalTime < 0 || !totalTime && (!tween._start && _parentPlayheadIsBeforeStart(tween) && !(!tween._initted && _isFromOrFromStart(tween)) || (tween._ts < 0 || tween._dp._ts < 0) && !_isFromOrFromStart(tween)) ? 0 : 1, repeatDelay = tween._rDelay, tTime = 0, pt, iteration, prevIteration;
        if (repeatDelay && tween._repeat) {
          tTime = _clamp(0, tween._tDur, totalTime);
          iteration = _animationCycle(tTime, repeatDelay);
          tween._yoyo && iteration & 1 && (ratio = 1 - ratio);
          if (iteration !== _animationCycle(tween._tTime, repeatDelay)) {
            prevRatio = 1 - ratio;
            tween.vars.repeatRefresh && tween._initted && tween.invalidate();
          }
        }
        if (ratio !== prevRatio || _reverting || force || tween._zTime === _tinyNum || !totalTime && tween._zTime) {
          if (!tween._initted && _attemptInitTween(tween, totalTime, force, suppressEvents, tTime)) {
            return;
          }
          prevIteration = tween._zTime;
          tween._zTime = totalTime || (suppressEvents ? _tinyNum : 0);
          suppressEvents || (suppressEvents = totalTime && !prevIteration);
          tween.ratio = ratio;
          tween._from && (ratio = 1 - ratio);
          tween._time = 0;
          tween._tTime = tTime;
          pt = tween._pt;
          while (pt) {
            pt.r(ratio, pt.d);
            pt = pt._next;
          }
          totalTime < 0 && _rewindStartAt(tween, totalTime, suppressEvents, true);
          tween._onUpdate && !suppressEvents && _callback(tween, "onUpdate");
          tTime && tween._repeat && !suppressEvents && tween.parent && _callback(tween, "onRepeat");
          if ((totalTime >= tween._tDur || totalTime < 0) && tween.ratio === ratio) {
            ratio && _removeFromParent(tween, 1);
            if (!suppressEvents && !_reverting) {
              _callback(tween, ratio ? "onComplete" : "onReverseComplete", true);
              tween._prom && tween._prom();
            }
          }
        } else if (!tween._zTime) {
          tween._zTime = totalTime;
        }
      };
      _findNextPauseTween = function _findNextPauseTween2(animation, prevTime, time) {
        var child;
        if (time > prevTime) {
          child = animation._first;
          while (child && child._start <= time) {
            if (child.data === "isPause" && child._start > prevTime) {
              return child;
            }
            child = child._next;
          }
        } else {
          child = animation._last;
          while (child && child._start >= time) {
            if (child.data === "isPause" && child._start < prevTime) {
              return child;
            }
            child = child._prev;
          }
        }
      };
      _setDuration = function _setDuration2(animation, duration, skipUncache, leavePlayhead) {
        var repeat = animation._repeat, dur = _roundPrecise(duration) || 0, totalProgress = animation._tTime / animation._tDur;
        totalProgress && !leavePlayhead && (animation._time *= dur / animation._dur);
        animation._dur = dur;
        animation._tDur = !repeat ? dur : repeat < 0 ? 1e10 : _roundPrecise(dur * (repeat + 1) + animation._rDelay * repeat);
        totalProgress > 0 && !leavePlayhead && _alignPlayhead(animation, animation._tTime = animation._tDur * totalProgress);
        animation.parent && _setEnd(animation);
        skipUncache || _uncache(animation.parent, animation);
        return animation;
      };
      _onUpdateTotalDuration = function _onUpdateTotalDuration2(animation) {
        return animation instanceof Timeline ? _uncache(animation) : _setDuration(animation, animation._dur);
      };
      _zeroPosition = {
        _start: 0,
        endTime: _emptyFunc,
        totalDuration: _emptyFunc
      };
      _parsePosition = function _parsePosition2(animation, position, percentAnimation) {
        var labels = animation.labels, recent = animation._recent || _zeroPosition, clippedDuration = animation.duration() >= _bigNum ? recent.endTime(false) : animation._dur, i, offset, isPercent;
        if (_isString(position) && (isNaN(position) || position in labels)) {
          offset = position.charAt(0);
          isPercent = position.substr(-1) === "%";
          i = position.indexOf("=");
          if (offset === "<" || offset === ">") {
            i >= 0 && (position = position.replace(/=/, ""));
            return (offset === "<" ? recent._start : recent.endTime(recent._repeat >= 0)) + (parseFloat(position.substr(1)) || 0) * (isPercent ? (i < 0 ? recent : percentAnimation).totalDuration() / 100 : 1);
          }
          if (i < 0) {
            position in labels || (labels[position] = clippedDuration);
            return labels[position];
          }
          offset = parseFloat(position.charAt(i - 1) + position.substr(i + 1));
          if (isPercent && percentAnimation) {
            offset = offset / 100 * (_isArray(percentAnimation) ? percentAnimation[0] : percentAnimation).totalDuration();
          }
          return i > 1 ? _parsePosition2(animation, position.substr(0, i - 1), percentAnimation) + offset : clippedDuration + offset;
        }
        return position == null ? clippedDuration : +position;
      };
      _createTweenType = function _createTweenType2(type, params, timeline2) {
        var isLegacy = _isNumber(params[1]), varsIndex = (isLegacy ? 2 : 1) + (type < 2 ? 0 : 1), vars = params[varsIndex], irVars, parent;
        isLegacy && (vars.duration = params[1]);
        vars.parent = timeline2;
        if (type) {
          irVars = vars;
          parent = timeline2;
          while (parent && !("immediateRender" in irVars)) {
            irVars = parent.vars.defaults || {};
            parent = _isNotFalse(parent.vars.inherit) && parent.parent;
          }
          vars.immediateRender = _isNotFalse(irVars.immediateRender);
          type < 2 ? vars.runBackwards = 1 : vars.startAt = params[varsIndex - 1];
        }
        return new Tween(params[0], vars, params[varsIndex + 1]);
      };
      _conditionalReturn = function _conditionalReturn2(value, func) {
        return value || value === 0 ? func(value) : func;
      };
      _clamp = function _clamp2(min, max, value) {
        return value < min ? min : value > max ? max : value;
      };
      getUnit = function getUnit2(value, v) {
        return !_isString(value) || !(v = _unitExp.exec(value)) ? "" : v[1];
      };
      clamp = function clamp2(min, max, value) {
        return _conditionalReturn(value, function(v) {
          return _clamp(min, max, v);
        });
      };
      _slice = [].slice;
      _isArrayLike = function _isArrayLike2(value, nonEmpty) {
        return value && _isObject(value) && "length" in value && (!nonEmpty && !value.length || value.length - 1 in value && _isObject(value[0])) && !value.nodeType && value !== _win;
      };
      _flatten = function _flatten2(ar, leaveStrings, accumulator) {
        if (accumulator === void 0) {
          accumulator = [];
        }
        return ar.forEach(function(value) {
          var _accumulator;
          return _isString(value) && !leaveStrings || _isArrayLike(value, 1) ? (_accumulator = accumulator).push.apply(_accumulator, toArray(value)) : accumulator.push(value);
        }) || accumulator;
      };
      toArray = function toArray2(value, scope, leaveStrings) {
        return _context && !scope && _context.selector ? _context.selector(value) : _isString(value) && !leaveStrings && (_coreInitted || !_wake()) ? _slice.call((scope || _doc).querySelectorAll(value), 0) : _isArray(value) ? _flatten(value, leaveStrings) : _isArrayLike(value) ? _slice.call(value, 0) : value ? [value] : [];
      };
      selector = function selector2(value) {
        value = toArray(value)[0] || _warn("Invalid scope") || {};
        return function(v) {
          var el = value.current || value.nativeElement || value;
          return toArray(v, el.querySelectorAll ? el : el === value ? _warn("Invalid scope") || _doc.createElement("div") : value);
        };
      };
      shuffle = function shuffle2(a) {
        return a.sort(function() {
          return 0.5 - Math.random();
        });
      };
      distribute = function distribute2(v) {
        if (_isFunction(v)) {
          return v;
        }
        var vars = _isObject(v) ? v : {
          each: v
        }, ease = _parseEase(vars.ease), from = vars.from || 0, base = parseFloat(vars.base) || 0, cache = {}, isDecimal = from > 0 && from < 1, ratios = isNaN(from) || isDecimal, axis = vars.axis, ratioX = from, ratioY = from;
        if (_isString(from)) {
          ratioX = ratioY = {
            center: 0.5,
            edges: 0.5,
            end: 1
          }[from] || 0;
        } else if (!isDecimal && ratios) {
          ratioX = from[0];
          ratioY = from[1];
        }
        return function(i, target, a) {
          var l = (a || vars).length, distances = cache[l], originX, originY, x, y, d, j, max, min, wrapAt;
          if (!distances) {
            wrapAt = vars.grid === "auto" ? 0 : (vars.grid || [1, _bigNum])[1];
            if (!wrapAt) {
              max = -_bigNum;
              while (max < (max = a[wrapAt++].getBoundingClientRect().left) && wrapAt < l) {
              }
              wrapAt--;
            }
            distances = cache[l] = [];
            originX = ratios ? Math.min(wrapAt, l) * ratioX - 0.5 : from % wrapAt;
            originY = wrapAt === _bigNum ? 0 : ratios ? l * ratioY / wrapAt - 0.5 : from / wrapAt | 0;
            max = 0;
            min = _bigNum;
            for (j = 0; j < l; j++) {
              x = j % wrapAt - originX;
              y = originY - (j / wrapAt | 0);
              distances[j] = d = !axis ? _sqrt(x * x + y * y) : Math.abs(axis === "y" ? y : x);
              d > max && (max = d);
              d < min && (min = d);
            }
            from === "random" && shuffle(distances);
            distances.max = max - min;
            distances.min = min;
            distances.v = l = (parseFloat(vars.amount) || parseFloat(vars.each) * (wrapAt > l ? l - 1 : !axis ? Math.max(wrapAt, l / wrapAt) : axis === "y" ? l / wrapAt : wrapAt) || 0) * (from === "edges" ? -1 : 1);
            distances.b = l < 0 ? base - l : base;
            distances.u = getUnit(vars.amount || vars.each) || 0;
            ease = ease && l < 0 ? _invertEase(ease) : ease;
          }
          l = (distances[i] - distances.min) / distances.max || 0;
          return _roundPrecise(distances.b + (ease ? ease(l) : l) * distances.v) + distances.u;
        };
      };
      _roundModifier = function _roundModifier2(v) {
        var p = Math.pow(10, ((v + "").split(".")[1] || "").length);
        return function(raw) {
          var n = _roundPrecise(Math.round(parseFloat(raw) / v) * v * p);
          return (n - n % 1) / p + (_isNumber(raw) ? 0 : getUnit(raw));
        };
      };
      snap = function snap2(snapTo, value) {
        var isArray = _isArray(snapTo), radius, is2D;
        if (!isArray && _isObject(snapTo)) {
          radius = isArray = snapTo.radius || _bigNum;
          if (snapTo.values) {
            snapTo = toArray(snapTo.values);
            if (is2D = !_isNumber(snapTo[0])) {
              radius *= radius;
            }
          } else {
            snapTo = _roundModifier(snapTo.increment);
          }
        }
        return _conditionalReturn(value, !isArray ? _roundModifier(snapTo) : _isFunction(snapTo) ? function(raw) {
          is2D = snapTo(raw);
          return Math.abs(is2D - raw) <= radius ? is2D : raw;
        } : function(raw) {
          var x = parseFloat(is2D ? raw.x : raw), y = parseFloat(is2D ? raw.y : 0), min = _bigNum, closest = 0, i = snapTo.length, dx, dy;
          while (i--) {
            if (is2D) {
              dx = snapTo[i].x - x;
              dy = snapTo[i].y - y;
              dx = dx * dx + dy * dy;
            } else {
              dx = Math.abs(snapTo[i] - x);
            }
            if (dx < min) {
              min = dx;
              closest = i;
            }
          }
          closest = !radius || min <= radius ? snapTo[closest] : raw;
          return is2D || closest === raw || _isNumber(raw) ? closest : closest + getUnit(raw);
        });
      };
      random = function random2(min, max, roundingIncrement, returnFunction) {
        return _conditionalReturn(_isArray(min) ? !max : roundingIncrement === true ? !!(roundingIncrement = 0) : !returnFunction, function() {
          return _isArray(min) ? min[~~(Math.random() * min.length)] : (roundingIncrement = roundingIncrement || 1e-5) && (returnFunction = roundingIncrement < 1 ? Math.pow(10, (roundingIncrement + "").length - 2) : 1) && Math.floor(Math.round((min - roundingIncrement / 2 + Math.random() * (max - min + roundingIncrement * 0.99)) / roundingIncrement) * roundingIncrement * returnFunction) / returnFunction;
        });
      };
      pipe = function pipe2() {
        for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++) {
          functions[_key] = arguments[_key];
        }
        return function(value) {
          return functions.reduce(function(v, f) {
            return f(v);
          }, value);
        };
      };
      unitize = function unitize2(func, unit) {
        return function(value) {
          return func(parseFloat(value)) + (unit || getUnit(value));
        };
      };
      normalize = function normalize2(min, max, value) {
        return mapRange(min, max, 0, 1, value);
      };
      _wrapArray = function _wrapArray2(a, wrapper, value) {
        return _conditionalReturn(value, function(index) {
          return a[~~wrapper(index)];
        });
      };
      wrap = function wrap2(min, max, value) {
        var range = max - min;
        return _isArray(min) ? _wrapArray(min, wrap2(0, min.length), max) : _conditionalReturn(value, function(value2) {
          return (range + (value2 - min) % range) % range + min;
        });
      };
      wrapYoyo = function wrapYoyo2(min, max, value) {
        var range = max - min, total = range * 2;
        return _isArray(min) ? _wrapArray(min, wrapYoyo2(0, min.length - 1), max) : _conditionalReturn(value, function(value2) {
          value2 = (total + (value2 - min) % total) % total || 0;
          return min + (value2 > range ? total - value2 : value2);
        });
      };
      _replaceRandom = function _replaceRandom2(value) {
        var prev = 0, s = "", i, nums, end, isArray;
        while (~(i = value.indexOf("random(", prev))) {
          end = value.indexOf(")", i);
          isArray = value.charAt(i + 7) === "[";
          nums = value.substr(i + 7, end - i - 7).match(isArray ? _delimitedValueExp : _strictNumExp);
          s += value.substr(prev, i - prev) + random(isArray ? nums : +nums[0], isArray ? 0 : +nums[1], +nums[2] || 1e-5);
          prev = end + 1;
        }
        return s + value.substr(prev, value.length - prev);
      };
      mapRange = function mapRange2(inMin, inMax, outMin, outMax, value) {
        var inRange = inMax - inMin, outRange = outMax - outMin;
        return _conditionalReturn(value, function(value2) {
          return outMin + ((value2 - inMin) / inRange * outRange || 0);
        });
      };
      interpolate = function interpolate2(start, end, progress, mutate) {
        var func = isNaN(start + end) ? 0 : function(p2) {
          return (1 - p2) * start + p2 * end;
        };
        if (!func) {
          var isString = _isString(start), master = {}, p, i, interpolators, l, il;
          progress === true && (mutate = 1) && (progress = null);
          if (isString) {
            start = {
              p: start
            };
            end = {
              p: end
            };
          } else if (_isArray(start) && !_isArray(end)) {
            interpolators = [];
            l = start.length;
            il = l - 2;
            for (i = 1; i < l; i++) {
              interpolators.push(interpolate2(start[i - 1], start[i]));
            }
            l--;
            func = function func2(p2) {
              p2 *= l;
              var i2 = Math.min(il, ~~p2);
              return interpolators[i2](p2 - i2);
            };
            progress = end;
          } else if (!mutate) {
            start = _merge(_isArray(start) ? [] : {}, start);
          }
          if (!interpolators) {
            for (p in end) {
              _addPropTween.call(master, start, p, "get", end[p]);
            }
            func = function func2(p2) {
              return _renderPropTweens(p2, master) || (isString ? start.p : start);
            };
          }
        }
        return _conditionalReturn(progress, func);
      };
      _getLabelInDirection = function _getLabelInDirection2(timeline2, fromTime, backward) {
        var labels = timeline2.labels, min = _bigNum, p, distance, label;
        for (p in labels) {
          distance = labels[p] - fromTime;
          if (distance < 0 === !!backward && distance && min > (distance = Math.abs(distance))) {
            label = p;
            min = distance;
          }
        }
        return label;
      };
      _callback = function _callback2(animation, type, executeLazyFirst) {
        var v = animation.vars, callback = v[type], prevContext = _context, context3 = animation._ctx, params, scope, result;
        if (!callback) {
          return;
        }
        params = v[type + "Params"];
        scope = v.callbackScope || animation;
        executeLazyFirst && _lazyTweens.length && _lazyRender();
        context3 && (_context = context3);
        result = params ? callback.apply(scope, params) : callback.call(scope);
        _context = prevContext;
        return result;
      };
      _interrupt = function _interrupt2(animation) {
        _removeFromParent(animation);
        animation.scrollTrigger && animation.scrollTrigger.kill(!!_reverting);
        animation.progress() < 1 && _callback(animation, "onInterrupt");
        return animation;
      };
      _createPlugin = function _createPlugin2(config3) {
        config3 = !config3.name && config3["default"] || config3;
        var name3 = config3.name, isFunc = _isFunction(config3), Plugin = name3 && !isFunc && config3.init ? function() {
          this._props = [];
        } : config3, instanceDefaults = {
          init: _emptyFunc,
          render: _renderPropTweens,
          add: _addPropTween,
          kill: _killPropTweensOf,
          modifier: _addPluginModifier,
          rawVars: 0
        }, statics = {
          targetTest: 0,
          get: 0,
          getSetter: _getSetter,
          aliases: {},
          register: 0
        };
        _wake();
        if (config3 !== Plugin) {
          if (_plugins[name3]) {
            return;
          }
          _setDefaults(Plugin, _setDefaults(_copyExcluding(config3, instanceDefaults), statics));
          _merge(Plugin.prototype, _merge(instanceDefaults, _copyExcluding(config3, statics)));
          _plugins[Plugin.prop = name3] = Plugin;
          if (config3.targetTest) {
            _harnessPlugins.push(Plugin);
            _reservedProps[name3] = 1;
          }
          name3 = (name3 === "css" ? "CSS" : name3.charAt(0).toUpperCase() + name3.substr(1)) + "Plugin";
        }
        _addGlobal(name3, Plugin);
        config3.register && config3.register(gsap, Plugin, PropTween);
      };
      _255 = 255;
      _colorLookup = {
        aqua: [0, _255, _255],
        lime: [0, _255, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, _255],
        navy: [0, 0, 128],
        white: [_255, _255, _255],
        olive: [128, 128, 0],
        yellow: [_255, _255, 0],
        orange: [_255, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [_255, 0, 0],
        pink: [_255, 192, 203],
        cyan: [0, _255, _255],
        transparent: [_255, _255, _255, 0]
      };
      _hue = function _hue2(h, m1, m2) {
        h += h < 0 ? 1 : h > 1 ? -1 : 0;
        return (h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : h < 0.5 ? m2 : h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * _255 + 0.5 | 0;
      };
      splitColor = function splitColor2(v, toHSL, forceAlpha) {
        var a = !v ? _colorLookup.black : _isNumber(v) ? [v >> 16, v >> 8 & _255, v & _255] : 0, r, g, b, h, s, l, max, min, d, wasHSL;
        if (!a) {
          if (v.substr(-1) === ",") {
            v = v.substr(0, v.length - 1);
          }
          if (_colorLookup[v]) {
            a = _colorLookup[v];
          } else if (v.charAt(0) === "#") {
            if (v.length < 6) {
              r = v.charAt(1);
              g = v.charAt(2);
              b = v.charAt(3);
              v = "#" + r + r + g + g + b + b + (v.length === 5 ? v.charAt(4) + v.charAt(4) : "");
            }
            if (v.length === 9) {
              a = parseInt(v.substr(1, 6), 16);
              return [a >> 16, a >> 8 & _255, a & _255, parseInt(v.substr(7), 16) / 255];
            }
            v = parseInt(v.substr(1), 16);
            a = [v >> 16, v >> 8 & _255, v & _255];
          } else if (v.substr(0, 3) === "hsl") {
            a = wasHSL = v.match(_strictNumExp);
            if (!toHSL) {
              h = +a[0] % 360 / 360;
              s = +a[1] / 100;
              l = +a[2] / 100;
              g = l <= 0.5 ? l * (s + 1) : l + s - l * s;
              r = l * 2 - g;
              a.length > 3 && (a[3] *= 1);
              a[0] = _hue(h + 1 / 3, r, g);
              a[1] = _hue(h, r, g);
              a[2] = _hue(h - 1 / 3, r, g);
            } else if (~v.indexOf("=")) {
              a = v.match(_numExp);
              forceAlpha && a.length < 4 && (a[3] = 1);
              return a;
            }
          } else {
            a = v.match(_strictNumExp) || _colorLookup.transparent;
          }
          a = a.map(Number);
        }
        if (toHSL && !wasHSL) {
          r = a[0] / _255;
          g = a[1] / _255;
          b = a[2] / _255;
          max = Math.max(r, g, b);
          min = Math.min(r, g, b);
          l = (max + min) / 2;
          if (max === min) {
            h = s = 0;
          } else {
            d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
            h *= 60;
          }
          a[0] = ~~(h + 0.5);
          a[1] = ~~(s * 100 + 0.5);
          a[2] = ~~(l * 100 + 0.5);
        }
        forceAlpha && a.length < 4 && (a[3] = 1);
        return a;
      };
      _colorOrderData = function _colorOrderData2(v) {
        var values = [], c = [], i = -1;
        v.split(_colorExp).forEach(function(v2) {
          var a = v2.match(_numWithUnitExp) || [];
          values.push.apply(values, a);
          c.push(i += a.length + 1);
        });
        values.c = c;
        return values;
      };
      _formatColors = function _formatColors2(s, toHSL, orderMatchData) {
        var result = "", colors = (s + result).match(_colorExp), type = toHSL ? "hsla(" : "rgba(", i = 0, c, shell, d, l;
        if (!colors) {
          return s;
        }
        colors = colors.map(function(color) {
          return (color = splitColor(color, toHSL, 1)) && type + (toHSL ? color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : color.join(",")) + ")";
        });
        if (orderMatchData) {
          d = _colorOrderData(s);
          c = orderMatchData.c;
          if (c.join(result) !== d.c.join(result)) {
            shell = s.replace(_colorExp, "1").split(_numWithUnitExp);
            l = shell.length - 1;
            for (; i < l; i++) {
              result += shell[i] + (~c.indexOf(i) ? colors.shift() || type + "0,0,0,0)" : (d.length ? d : colors.length ? colors : orderMatchData).shift());
            }
          }
        }
        if (!shell) {
          shell = s.split(_colorExp);
          l = shell.length - 1;
          for (; i < l; i++) {
            result += shell[i] + colors[i];
          }
        }
        return result + shell[l];
      };
      _colorExp = function() {
        var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", p;
        for (p in _colorLookup) {
          s += "|" + p + "\\b";
        }
        return new RegExp(s + ")", "gi");
      }();
      _hslExp = /hsl[a]?\(/;
      _colorStringFilter = function _colorStringFilter2(a) {
        var combined = a.join(" "), toHSL;
        _colorExp.lastIndex = 0;
        if (_colorExp.test(combined)) {
          toHSL = _hslExp.test(combined);
          a[1] = _formatColors(a[1], toHSL);
          a[0] = _formatColors(a[0], toHSL, _colorOrderData(a[1]));
          return true;
        }
      };
      _ticker = function() {
        var _getTime3 = Date.now, _lagThreshold = 500, _adjustedLag = 33, _startTime = _getTime3(), _lastUpdate = _startTime, _gap = 1e3 / 240, _nextTime = _gap, _listeners3 = [], _id, _req, _raf, _self, _delta, _i2, _tick = function _tick2(v) {
          var elapsed = _getTime3() - _lastUpdate, manual = v === true, overlap, dispatch, time, frame;
          elapsed > _lagThreshold && (_startTime += elapsed - _adjustedLag);
          _lastUpdate += elapsed;
          time = _lastUpdate - _startTime;
          overlap = time - _nextTime;
          if (overlap > 0 || manual) {
            frame = ++_self.frame;
            _delta = time - _self.time * 1e3;
            _self.time = time = time / 1e3;
            _nextTime += overlap + (overlap >= _gap ? 4 : _gap - overlap);
            dispatch = 1;
          }
          manual || (_id = _req(_tick2));
          if (dispatch) {
            for (_i2 = 0; _i2 < _listeners3.length; _i2++) {
              _listeners3[_i2](time, _delta, frame, v);
            }
          }
        };
        _self = {
          time: 0,
          frame: 0,
          tick: function tick() {
            _tick(true);
          },
          deltaRatio: function deltaRatio(fps) {
            return _delta / (1e3 / (fps || 60));
          },
          wake: function wake() {
            if (_coreReady) {
              if (!_coreInitted && _windowExists()) {
                _win = _coreInitted = window;
                _doc = _win.document || {};
                _globals.gsap = gsap;
                (_win.gsapVersions || (_win.gsapVersions = [])).push(gsap.version);
                _install(_installScope || _win.GreenSockGlobals || !_win.gsap && _win || {});
                _raf = _win.requestAnimationFrame;
              }
              _id && _self.sleep();
              _req = _raf || function(f) {
                return setTimeout(f, _nextTime - _self.time * 1e3 + 1 | 0);
              };
              _tickerActive = 1;
              _tick(2);
            }
          },
          sleep: function sleep() {
            (_raf ? _win.cancelAnimationFrame : clearTimeout)(_id);
            _tickerActive = 0;
            _req = _emptyFunc;
          },
          lagSmoothing: function lagSmoothing(threshold, adjustedLag) {
            _lagThreshold = threshold || Infinity;
            _adjustedLag = Math.min(adjustedLag || 33, _lagThreshold);
          },
          fps: function fps(_fps) {
            _gap = 1e3 / (_fps || 240);
            _nextTime = _self.time * 1e3 + _gap;
          },
          add: function add(callback, once, prioritize) {
            var func = once ? function(t, d, f, v) {
              callback(t, d, f, v);
              _self.remove(func);
            } : callback;
            _self.remove(callback);
            _listeners3[prioritize ? "unshift" : "push"](func);
            _wake();
            return func;
          },
          remove: function remove(callback, i) {
            ~(i = _listeners3.indexOf(callback)) && _listeners3.splice(i, 1) && _i2 >= i && _i2--;
          },
          _listeners: _listeners3
        };
        return _self;
      }();
      _wake = function _wake2() {
        return !_tickerActive && _ticker.wake();
      };
      _easeMap = {};
      _customEaseExp = /^[\d.\-M][\d.\-,\s]/;
      _quotesExp = /["']/g;
      _parseObjectInString = function _parseObjectInString2(value) {
        var obj = {}, split = value.substr(1, value.length - 3).split(":"), key = split[0], i = 1, l = split.length, index, val, parsedVal;
        for (; i < l; i++) {
          val = split[i];
          index = i !== l - 1 ? val.lastIndexOf(",") : val.length;
          parsedVal = val.substr(0, index);
          obj[key] = isNaN(parsedVal) ? parsedVal.replace(_quotesExp, "").trim() : +parsedVal;
          key = val.substr(index + 1).trim();
        }
        return obj;
      };
      _valueInParentheses = function _valueInParentheses2(value) {
        var open = value.indexOf("(") + 1, close = value.indexOf(")"), nested = value.indexOf("(", open);
        return value.substring(open, ~nested && nested < close ? value.indexOf(")", close + 1) : close);
      };
      _configEaseFromString = function _configEaseFromString2(name3) {
        var split = (name3 + "").split("("), ease = _easeMap[split[0]];
        return ease && split.length > 1 && ease.config ? ease.config.apply(null, ~name3.indexOf("{") ? [_parseObjectInString(split[1])] : _valueInParentheses(name3).split(",").map(_numericIfPossible)) : _easeMap._CE && _customEaseExp.test(name3) ? _easeMap._CE("", name3) : ease;
      };
      _invertEase = function _invertEase2(ease) {
        return function(p) {
          return 1 - ease(1 - p);
        };
      };
      _propagateYoyoEase = function _propagateYoyoEase2(timeline2, isYoyo) {
        var child = timeline2._first, ease;
        while (child) {
          if (child instanceof Timeline) {
            _propagateYoyoEase2(child, isYoyo);
          } else if (child.vars.yoyoEase && (!child._yoyo || !child._repeat) && child._yoyo !== isYoyo) {
            if (child.timeline) {
              _propagateYoyoEase2(child.timeline, isYoyo);
            } else {
              ease = child._ease;
              child._ease = child._yEase;
              child._yEase = ease;
              child._yoyo = isYoyo;
            }
          }
          child = child._next;
        }
      };
      _parseEase = function _parseEase2(ease, defaultEase) {
        return !ease ? defaultEase : (_isFunction(ease) ? ease : _easeMap[ease] || _configEaseFromString(ease)) || defaultEase;
      };
      _insertEase = function _insertEase2(names, easeIn, easeOut, easeInOut) {
        if (easeOut === void 0) {
          easeOut = function easeOut2(p) {
            return 1 - easeIn(1 - p);
          };
        }
        if (easeInOut === void 0) {
          easeInOut = function easeInOut2(p) {
            return p < 0.5 ? easeIn(p * 2) / 2 : 1 - easeIn((1 - p) * 2) / 2;
          };
        }
        var ease = {
          easeIn,
          easeOut,
          easeInOut
        }, lowercaseName;
        _forEachName(names, function(name3) {
          _easeMap[name3] = _globals[name3] = ease;
          _easeMap[lowercaseName = name3.toLowerCase()] = easeOut;
          for (var p in ease) {
            _easeMap[lowercaseName + (p === "easeIn" ? ".in" : p === "easeOut" ? ".out" : ".inOut")] = _easeMap[name3 + "." + p] = ease[p];
          }
        });
        return ease;
      };
      _easeInOutFromOut = function _easeInOutFromOut2(easeOut) {
        return function(p) {
          return p < 0.5 ? (1 - easeOut(1 - p * 2)) / 2 : 0.5 + easeOut((p - 0.5) * 2) / 2;
        };
      };
      _configElastic = function _configElastic2(type, amplitude, period) {
        var p1 = amplitude >= 1 ? amplitude : 1, p2 = (period || (type ? 0.3 : 0.45)) / (amplitude < 1 ? amplitude : 1), p3 = p2 / _2PI * (Math.asin(1 / p1) || 0), easeOut = function easeOut2(p) {
          return p === 1 ? 1 : p1 * Math.pow(2, -10 * p) * _sin((p - p3) * p2) + 1;
        }, ease = type === "out" ? easeOut : type === "in" ? function(p) {
          return 1 - easeOut(1 - p);
        } : _easeInOutFromOut(easeOut);
        p2 = _2PI / p2;
        ease.config = function(amplitude2, period2) {
          return _configElastic2(type, amplitude2, period2);
        };
        return ease;
      };
      _configBack = function _configBack2(type, overshoot) {
        if (overshoot === void 0) {
          overshoot = 1.70158;
        }
        var easeOut = function easeOut2(p) {
          return p ? --p * p * ((overshoot + 1) * p + overshoot) + 1 : 0;
        }, ease = type === "out" ? easeOut : type === "in" ? function(p) {
          return 1 - easeOut(1 - p);
        } : _easeInOutFromOut(easeOut);
        ease.config = function(overshoot2) {
          return _configBack2(type, overshoot2);
        };
        return ease;
      };
      _forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", function(name3, i) {
        var power = i < 5 ? i + 1 : i;
        _insertEase(name3 + ",Power" + (power - 1), i ? function(p) {
          return Math.pow(p, power);
        } : function(p) {
          return p;
        }, function(p) {
          return 1 - Math.pow(1 - p, power);
        }, function(p) {
          return p < 0.5 ? Math.pow(p * 2, power) / 2 : 1 - Math.pow((1 - p) * 2, power) / 2;
        });
      });
      _easeMap.Linear.easeNone = _easeMap.none = _easeMap.Linear.easeIn;
      _insertEase("Elastic", _configElastic("in"), _configElastic("out"), _configElastic());
      (function(n, c) {
        var n1 = 1 / c, n2 = 2 * n1, n3 = 2.5 * n1, easeOut = function easeOut2(p) {
          return p < n1 ? n * p * p : p < n2 ? n * Math.pow(p - 1.5 / c, 2) + 0.75 : p < n3 ? n * (p -= 2.25 / c) * p + 0.9375 : n * Math.pow(p - 2.625 / c, 2) + 0.984375;
        };
        _insertEase("Bounce", function(p) {
          return 1 - easeOut(1 - p);
        }, easeOut);
      })(7.5625, 2.75);
      _insertEase("Expo", function(p) {
        return p ? Math.pow(2, 10 * (p - 1)) : 0;
      });
      _insertEase("Circ", function(p) {
        return -(_sqrt(1 - p * p) - 1);
      });
      _insertEase("Sine", function(p) {
        return p === 1 ? 1 : -_cos(p * _HALF_PI) + 1;
      });
      _insertEase("Back", _configBack("in"), _configBack("out"), _configBack());
      _easeMap.SteppedEase = _easeMap.steps = _globals.SteppedEase = {
        config: function config(steps, immediateStart) {
          if (steps === void 0) {
            steps = 1;
          }
          var p1 = 1 / steps, p2 = steps + (immediateStart ? 0 : 1), p3 = immediateStart ? 1 : 0, max = 1 - _tinyNum;
          return function(p) {
            return ((p2 * _clamp(0, max, p) | 0) + p3) * p1;
          };
        }
      };
      _defaults.ease = _easeMap["quad.out"];
      _forEachName("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(name3) {
        return _callbackNames += name3 + "," + name3 + "Params,";
      });
      GSCache = function GSCache2(target, harness) {
        this.id = _gsID++;
        target._gsap = this;
        this.target = target;
        this.harness = harness;
        this.get = harness ? harness.get : _getProperty;
        this.set = harness ? harness.getSetter : _getSetter;
      };
      Animation = /* @__PURE__ */ function() {
        function Animation2(vars) {
          this.vars = vars;
          this._delay = +vars.delay || 0;
          if (this._repeat = vars.repeat === Infinity ? -2 : vars.repeat || 0) {
            this._rDelay = vars.repeatDelay || 0;
            this._yoyo = !!vars.yoyo || !!vars.yoyoEase;
          }
          this._ts = 1;
          _setDuration(this, +vars.duration, 1, 1);
          this.data = vars.data;
          if (_context) {
            this._ctx = _context;
            _context.data.push(this);
          }
          _tickerActive || _ticker.wake();
        }
        var _proto = Animation2.prototype;
        _proto.delay = function delay(value) {
          if (value || value === 0) {
            this.parent && this.parent.smoothChildTiming && this.startTime(this._start + value - this._delay);
            this._delay = value;
            return this;
          }
          return this._delay;
        };
        _proto.duration = function duration(value) {
          return arguments.length ? this.totalDuration(this._repeat > 0 ? value + (value + this._rDelay) * this._repeat : value) : this.totalDuration() && this._dur;
        };
        _proto.totalDuration = function totalDuration(value) {
          if (!arguments.length) {
            return this._tDur;
          }
          this._dirty = 0;
          return _setDuration(this, this._repeat < 0 ? value : (value - this._repeat * this._rDelay) / (this._repeat + 1));
        };
        _proto.totalTime = function totalTime(_totalTime, suppressEvents) {
          _wake();
          if (!arguments.length) {
            return this._tTime;
          }
          var parent = this._dp;
          if (parent && parent.smoothChildTiming && this._ts) {
            _alignPlayhead(this, _totalTime);
            !parent._dp || parent.parent || _postAddChecks(parent, this);
            while (parent && parent.parent) {
              if (parent.parent._time !== parent._start + (parent._ts >= 0 ? parent._tTime / parent._ts : (parent.totalDuration() - parent._tTime) / -parent._ts)) {
                parent.totalTime(parent._tTime, true);
              }
              parent = parent.parent;
            }
            if (!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && _totalTime < this._tDur || this._ts < 0 && _totalTime > 0 || !this._tDur && !_totalTime)) {
              _addToTimeline(this._dp, this, this._start - this._delay);
            }
          }
          if (this._tTime !== _totalTime || !this._dur && !suppressEvents || this._initted && Math.abs(this._zTime) === _tinyNum || !_totalTime && !this._initted && (this.add || this._ptLookup)) {
            this._ts || (this._pTime = _totalTime);
            _lazySafeRender(this, _totalTime, suppressEvents);
          }
          return this;
        };
        _proto.time = function time(value, suppressEvents) {
          return arguments.length ? this.totalTime(Math.min(this.totalDuration(), value + _elapsedCycleDuration(this)) % (this._dur + this._rDelay) || (value ? this._dur : 0), suppressEvents) : this._time;
        };
        _proto.totalProgress = function totalProgress(value, suppressEvents) {
          return arguments.length ? this.totalTime(this.totalDuration() * value, suppressEvents) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
        };
        _proto.progress = function progress(value, suppressEvents) {
          return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - value : value) + _elapsedCycleDuration(this), suppressEvents) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
        };
        _proto.iteration = function iteration(value, suppressEvents) {
          var cycleDuration = this.duration() + this._rDelay;
          return arguments.length ? this.totalTime(this._time + (value - 1) * cycleDuration, suppressEvents) : this._repeat ? _animationCycle(this._tTime, cycleDuration) + 1 : 1;
        };
        _proto.timeScale = function timeScale(value) {
          if (!arguments.length) {
            return this._rts === -_tinyNum ? 0 : this._rts;
          }
          if (this._rts === value) {
            return this;
          }
          var tTime = this.parent && this._ts ? _parentToChildTotalTime(this.parent._time, this) : this._tTime;
          this._rts = +value || 0;
          this._ts = this._ps || value === -_tinyNum ? 0 : this._rts;
          this.totalTime(_clamp(-this._delay, this._tDur, tTime), true);
          _setEnd(this);
          return _recacheAncestors(this);
        };
        _proto.paused = function paused(value) {
          if (!arguments.length) {
            return this._ps;
          }
          if (this._ps !== value) {
            this._ps = value;
            if (value) {
              this._pTime = this._tTime || Math.max(-this._delay, this.rawTime());
              this._ts = this._act = 0;
            } else {
              _wake();
              this._ts = this._rts;
              this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== _tinyNum && (this._tTime -= _tinyNum));
            }
          }
          return this;
        };
        _proto.startTime = function startTime(value) {
          if (arguments.length) {
            this._start = value;
            var parent = this.parent || this._dp;
            parent && (parent._sort || !this.parent) && _addToTimeline(parent, this, value - this._delay);
            return this;
          }
          return this._start;
        };
        _proto.endTime = function endTime(includeRepeats) {
          return this._start + (_isNotFalse(includeRepeats) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
        };
        _proto.rawTime = function rawTime(wrapRepeats) {
          var parent = this.parent || this._dp;
          return !parent ? this._tTime : wrapRepeats && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : !this._ts ? this._tTime : _parentToChildTotalTime(parent.rawTime(wrapRepeats), this);
        };
        _proto.revert = function revert(config3) {
          if (config3 === void 0) {
            config3 = _revertConfig;
          }
          var prevIsReverting = _reverting;
          _reverting = config3;
          if (this._initted || this._startAt) {
            this.timeline && this.timeline.revert(config3);
            this.totalTime(-0.01, config3.suppressEvents);
          }
          this.data !== "nested" && config3.kill !== false && this.kill();
          _reverting = prevIsReverting;
          return this;
        };
        _proto.globalTime = function globalTime(rawTime) {
          var animation = this, time = arguments.length ? rawTime : animation.rawTime();
          while (animation) {
            time = animation._start + time / (animation._ts || 1);
            animation = animation._dp;
          }
          return !this.parent && this._sat ? this._sat.vars.immediateRender ? -1 : this._sat.globalTime(rawTime) : time;
        };
        _proto.repeat = function repeat(value) {
          if (arguments.length) {
            this._repeat = value === Infinity ? -2 : value;
            return _onUpdateTotalDuration(this);
          }
          return this._repeat === -2 ? Infinity : this._repeat;
        };
        _proto.repeatDelay = function repeatDelay(value) {
          if (arguments.length) {
            var time = this._time;
            this._rDelay = value;
            _onUpdateTotalDuration(this);
            return time ? this.time(time) : this;
          }
          return this._rDelay;
        };
        _proto.yoyo = function yoyo(value) {
          if (arguments.length) {
            this._yoyo = value;
            return this;
          }
          return this._yoyo;
        };
        _proto.seek = function seek(position, suppressEvents) {
          return this.totalTime(_parsePosition(this, position), _isNotFalse(suppressEvents));
        };
        _proto.restart = function restart(includeDelay, suppressEvents) {
          return this.play().totalTime(includeDelay ? -this._delay : 0, _isNotFalse(suppressEvents));
        };
        _proto.play = function play(from, suppressEvents) {
          from != null && this.seek(from, suppressEvents);
          return this.reversed(false).paused(false);
        };
        _proto.reverse = function reverse(from, suppressEvents) {
          from != null && this.seek(from || this.totalDuration(), suppressEvents);
          return this.reversed(true).paused(false);
        };
        _proto.pause = function pause(atTime, suppressEvents) {
          atTime != null && this.seek(atTime, suppressEvents);
          return this.paused(true);
        };
        _proto.resume = function resume() {
          return this.paused(false);
        };
        _proto.reversed = function reversed(value) {
          if (arguments.length) {
            !!value !== this.reversed() && this.timeScale(-this._rts || (value ? -_tinyNum : 0));
            return this;
          }
          return this._rts < 0;
        };
        _proto.invalidate = function invalidate() {
          this._initted = this._act = 0;
          this._zTime = -_tinyNum;
          return this;
        };
        _proto.isActive = function isActive() {
          var parent = this.parent || this._dp, start = this._start, rawTime;
          return !!(!parent || this._ts && this._initted && parent.isActive() && (rawTime = parent.rawTime(true)) >= start && rawTime < this.endTime(true) - _tinyNum);
        };
        _proto.eventCallback = function eventCallback(type, callback, params) {
          var vars = this.vars;
          if (arguments.length > 1) {
            if (!callback) {
              delete vars[type];
            } else {
              vars[type] = callback;
              params && (vars[type + "Params"] = params);
              type === "onUpdate" && (this._onUpdate = callback);
            }
            return this;
          }
          return vars[type];
        };
        _proto.then = function then(onFulfilled) {
          var self2 = this;
          return new Promise(function(resolve) {
            var f = _isFunction(onFulfilled) ? onFulfilled : _passThrough, _resolve = function _resolve2() {
              var _then = self2.then;
              self2.then = null;
              _isFunction(f) && (f = f(self2)) && (f.then || f === self2) && (self2.then = _then);
              resolve(f);
              self2.then = _then;
            };
            if (self2._initted && self2.totalProgress() === 1 && self2._ts >= 0 || !self2._tTime && self2._ts < 0) {
              _resolve();
            } else {
              self2._prom = _resolve;
            }
          });
        };
        _proto.kill = function kill() {
          _interrupt(this);
        };
        return Animation2;
      }();
      _setDefaults(Animation.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: false,
        parent: null,
        _initted: false,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -_tinyNum,
        _prom: 0,
        _ps: false,
        _rts: 1
      });
      Timeline = /* @__PURE__ */ function(_Animation) {
        _inheritsLoose(Timeline2, _Animation);
        function Timeline2(vars, position) {
          var _this;
          if (vars === void 0) {
            vars = {};
          }
          _this = _Animation.call(this, vars) || this;
          _this.labels = {};
          _this.smoothChildTiming = !!vars.smoothChildTiming;
          _this.autoRemoveChildren = !!vars.autoRemoveChildren;
          _this._sort = _isNotFalse(vars.sortChildren);
          _globalTimeline && _addToTimeline(vars.parent || _globalTimeline, _assertThisInitialized(_this), position);
          vars.reversed && _this.reverse();
          vars.paused && _this.paused(true);
          vars.scrollTrigger && _scrollTrigger(_assertThisInitialized(_this), vars.scrollTrigger);
          return _this;
        }
        var _proto2 = Timeline2.prototype;
        _proto2.to = function to(targets, vars, position) {
          _createTweenType(0, arguments, this);
          return this;
        };
        _proto2.from = function from(targets, vars, position) {
          _createTweenType(1, arguments, this);
          return this;
        };
        _proto2.fromTo = function fromTo(targets, fromVars, toVars, position) {
          _createTweenType(2, arguments, this);
          return this;
        };
        _proto2.set = function set(targets, vars, position) {
          vars.duration = 0;
          vars.parent = this;
          _inheritDefaults(vars).repeatDelay || (vars.repeat = 0);
          vars.immediateRender = !!vars.immediateRender;
          new Tween(targets, vars, _parsePosition(this, position), 1);
          return this;
        };
        _proto2.call = function call(callback, params, position) {
          return _addToTimeline(this, Tween.delayedCall(0, callback, params), position);
        };
        _proto2.staggerTo = function staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
          vars.duration = duration;
          vars.stagger = vars.stagger || stagger;
          vars.onComplete = onCompleteAll;
          vars.onCompleteParams = onCompleteAllParams;
          vars.parent = this;
          new Tween(targets, vars, _parsePosition(this, position));
          return this;
        };
        _proto2.staggerFrom = function staggerFrom(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
          vars.runBackwards = 1;
          _inheritDefaults(vars).immediateRender = _isNotFalse(vars.immediateRender);
          return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams);
        };
        _proto2.staggerFromTo = function staggerFromTo(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams) {
          toVars.startAt = fromVars;
          _inheritDefaults(toVars).immediateRender = _isNotFalse(toVars.immediateRender);
          return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams);
        };
        _proto2.render = function render3(totalTime, suppressEvents, force) {
          var prevTime = this._time, tDur = this._dirty ? this.totalDuration() : this._tDur, dur = this._dur, tTime = totalTime <= 0 ? 0 : _roundPrecise(totalTime), crossingStart = this._zTime < 0 !== totalTime < 0 && (this._initted || !dur), time, child, next, iteration, cycleDuration, prevPaused, pauseTween, timeScale, prevStart, prevIteration, yoyo, isYoyo;
          this !== _globalTimeline && tTime > tDur && totalTime >= 0 && (tTime = tDur);
          if (tTime !== this._tTime || force || crossingStart) {
            if (prevTime !== this._time && dur) {
              tTime += this._time - prevTime;
              totalTime += this._time - prevTime;
            }
            time = tTime;
            prevStart = this._start;
            timeScale = this._ts;
            prevPaused = !timeScale;
            if (crossingStart) {
              dur || (prevTime = this._zTime);
              (totalTime || !suppressEvents) && (this._zTime = totalTime);
            }
            if (this._repeat) {
              yoyo = this._yoyo;
              cycleDuration = dur + this._rDelay;
              if (this._repeat < -1 && totalTime < 0) {
                return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
              }
              time = _roundPrecise(tTime % cycleDuration);
              if (tTime === tDur) {
                iteration = this._repeat;
                time = dur;
              } else {
                iteration = ~~(tTime / cycleDuration);
                if (iteration && iteration === tTime / cycleDuration) {
                  time = dur;
                  iteration--;
                }
                time > dur && (time = dur);
              }
              prevIteration = _animationCycle(this._tTime, cycleDuration);
              !prevTime && this._tTime && prevIteration !== iteration && (prevIteration = iteration);
              if (yoyo && iteration & 1) {
                time = dur - time;
                isYoyo = 1;
              }
              if (iteration !== prevIteration && !this._lock) {
                var rewinding = yoyo && prevIteration & 1, doesWrap = rewinding === (yoyo && iteration & 1);
                iteration < prevIteration && (rewinding = !rewinding);
                prevTime = rewinding ? 0 : dur;
                this._lock = 1;
                this.render(prevTime || (isYoyo ? 0 : _roundPrecise(iteration * cycleDuration)), suppressEvents, !dur)._lock = 0;
                this._tTime = tTime;
                !suppressEvents && this.parent && _callback(this, "onRepeat");
                this.vars.repeatRefresh && !isYoyo && (this.invalidate()._lock = 1);
                if (prevTime && prevTime !== this._time || prevPaused !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) {
                  return this;
                }
                dur = this._dur;
                tDur = this._tDur;
                if (doesWrap) {
                  this._lock = 2;
                  prevTime = rewinding ? dur : -1e-4;
                  this.render(prevTime, true);
                  this.vars.repeatRefresh && !isYoyo && this.invalidate();
                }
                this._lock = 0;
                if (!this._ts && !prevPaused) {
                  return this;
                }
                _propagateYoyoEase(this, isYoyo);
              }
            }
            if (this._hasPause && !this._forcing && this._lock < 2) {
              pauseTween = _findNextPauseTween(this, _roundPrecise(prevTime), _roundPrecise(time));
              if (pauseTween) {
                tTime -= time - (time = pauseTween._start);
              }
            }
            this._tTime = tTime;
            this._time = time;
            this._act = !timeScale;
            if (!this._initted) {
              this._onUpdate = this.vars.onUpdate;
              this._initted = 1;
              this._zTime = totalTime;
              prevTime = 0;
            }
            if (!prevTime && time && !suppressEvents) {
              _callback(this, "onStart");
              if (this._tTime !== tTime) {
                return this;
              }
            }
            if (time >= prevTime && totalTime >= 0) {
              child = this._first;
              while (child) {
                next = child._next;
                if ((child._act || time >= child._start) && child._ts && pauseTween !== child) {
                  if (child.parent !== this) {
                    return this.render(totalTime, suppressEvents, force);
                  }
                  child.render(child._ts > 0 ? (time - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (time - child._start) * child._ts, suppressEvents, force);
                  if (time !== this._time || !this._ts && !prevPaused) {
                    pauseTween = 0;
                    next && (tTime += this._zTime = -_tinyNum);
                    break;
                  }
                }
                child = next;
              }
            } else {
              child = this._last;
              var adjustedTime = totalTime < 0 ? totalTime : time;
              while (child) {
                next = child._prev;
                if ((child._act || adjustedTime <= child._end) && child._ts && pauseTween !== child) {
                  if (child.parent !== this) {
                    return this.render(totalTime, suppressEvents, force);
                  }
                  child.render(child._ts > 0 ? (adjustedTime - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (adjustedTime - child._start) * child._ts, suppressEvents, force || _reverting && (child._initted || child._startAt));
                  if (time !== this._time || !this._ts && !prevPaused) {
                    pauseTween = 0;
                    next && (tTime += this._zTime = adjustedTime ? -_tinyNum : _tinyNum);
                    break;
                  }
                }
                child = next;
              }
            }
            if (pauseTween && !suppressEvents) {
              this.pause();
              pauseTween.render(time >= prevTime ? 0 : -_tinyNum)._zTime = time >= prevTime ? 1 : -1;
              if (this._ts) {
                this._start = prevStart;
                _setEnd(this);
                return this.render(totalTime, suppressEvents, force);
              }
            }
            this._onUpdate && !suppressEvents && _callback(this, "onUpdate", true);
            if (tTime === tDur && this._tTime >= this.totalDuration() || !tTime && prevTime) {
              if (prevStart === this._start || Math.abs(timeScale) !== Math.abs(this._ts)) {
                if (!this._lock) {
                  (totalTime || !dur) && (tTime === tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);
                  if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime || !tDur)) {
                    _callback(this, tTime === tDur && totalTime >= 0 ? "onComplete" : "onReverseComplete", true);
                    this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
                  }
                }
              }
            }
          }
          return this;
        };
        _proto2.add = function add(child, position) {
          var _this2 = this;
          _isNumber(position) || (position = _parsePosition(this, position, child));
          if (!(child instanceof Animation)) {
            if (_isArray(child)) {
              child.forEach(function(obj) {
                return _this2.add(obj, position);
              });
              return this;
            }
            if (_isString(child)) {
              return this.addLabel(child, position);
            }
            if (_isFunction(child)) {
              child = Tween.delayedCall(0, child);
            } else {
              return this;
            }
          }
          return this !== child ? _addToTimeline(this, child, position) : this;
        };
        _proto2.getChildren = function getChildren(nested, tweens, timelines, ignoreBeforeTime) {
          if (nested === void 0) {
            nested = true;
          }
          if (tweens === void 0) {
            tweens = true;
          }
          if (timelines === void 0) {
            timelines = true;
          }
          if (ignoreBeforeTime === void 0) {
            ignoreBeforeTime = -_bigNum;
          }
          var a = [], child = this._first;
          while (child) {
            if (child._start >= ignoreBeforeTime) {
              if (child instanceof Tween) {
                tweens && a.push(child);
              } else {
                timelines && a.push(child);
                nested && a.push.apply(a, child.getChildren(true, tweens, timelines));
              }
            }
            child = child._next;
          }
          return a;
        };
        _proto2.getById = function getById2(id) {
          var animations = this.getChildren(1, 1, 1), i = animations.length;
          while (i--) {
            if (animations[i].vars.id === id) {
              return animations[i];
            }
          }
        };
        _proto2.remove = function remove(child) {
          if (_isString(child)) {
            return this.removeLabel(child);
          }
          if (_isFunction(child)) {
            return this.killTweensOf(child);
          }
          _removeLinkedListItem(this, child);
          if (child === this._recent) {
            this._recent = this._last;
          }
          return _uncache(this);
        };
        _proto2.totalTime = function totalTime(_totalTime2, suppressEvents) {
          if (!arguments.length) {
            return this._tTime;
          }
          this._forcing = 1;
          if (!this._dp && this._ts) {
            this._start = _roundPrecise(_ticker.time - (this._ts > 0 ? _totalTime2 / this._ts : (this.totalDuration() - _totalTime2) / -this._ts));
          }
          _Animation.prototype.totalTime.call(this, _totalTime2, suppressEvents);
          this._forcing = 0;
          return this;
        };
        _proto2.addLabel = function addLabel(label, position) {
          this.labels[label] = _parsePosition(this, position);
          return this;
        };
        _proto2.removeLabel = function removeLabel(label) {
          delete this.labels[label];
          return this;
        };
        _proto2.addPause = function addPause(position, callback, params) {
          var t = Tween.delayedCall(0, callback || _emptyFunc, params);
          t.data = "isPause";
          this._hasPause = 1;
          return _addToTimeline(this, t, _parsePosition(this, position));
        };
        _proto2.removePause = function removePause(position) {
          var child = this._first;
          position = _parsePosition(this, position);
          while (child) {
            if (child._start === position && child.data === "isPause") {
              _removeFromParent(child);
            }
            child = child._next;
          }
        };
        _proto2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
          var tweens = this.getTweensOf(targets, onlyActive), i = tweens.length;
          while (i--) {
            _overwritingTween !== tweens[i] && tweens[i].kill(targets, props);
          }
          return this;
        };
        _proto2.getTweensOf = function getTweensOf2(targets, onlyActive) {
          var a = [], parsedTargets = toArray(targets), child = this._first, isGlobalTime = _isNumber(onlyActive), children;
          while (child) {
            if (child instanceof Tween) {
              if (_arrayContainsAny(child._targets, parsedTargets) && (isGlobalTime ? (!_overwritingTween || child._initted && child._ts) && child.globalTime(0) <= onlyActive && child.globalTime(child.totalDuration()) > onlyActive : !onlyActive || child.isActive())) {
                a.push(child);
              }
            } else if ((children = child.getTweensOf(parsedTargets, onlyActive)).length) {
              a.push.apply(a, children);
            }
            child = child._next;
          }
          return a;
        };
        _proto2.tweenTo = function tweenTo(position, vars) {
          vars = vars || {};
          var tl = this, endTime = _parsePosition(tl, position), _vars = vars, startAt = _vars.startAt, _onStart = _vars.onStart, onStartParams = _vars.onStartParams, immediateRender = _vars.immediateRender, initted, tween = Tween.to(tl, _setDefaults({
            ease: vars.ease || "none",
            lazy: false,
            immediateRender: false,
            time: endTime,
            overwrite: "auto",
            duration: vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale()) || _tinyNum,
            onStart: function onStart() {
              tl.pause();
              if (!initted) {
                var duration = vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale());
                tween._dur !== duration && _setDuration(tween, duration, 0, 1).render(tween._time, true, true);
                initted = 1;
              }
              _onStart && _onStart.apply(tween, onStartParams || []);
            }
          }, vars));
          return immediateRender ? tween.render(0) : tween;
        };
        _proto2.tweenFromTo = function tweenFromTo(fromPosition, toPosition, vars) {
          return this.tweenTo(toPosition, _setDefaults({
            startAt: {
              time: _parsePosition(this, fromPosition)
            }
          }, vars));
        };
        _proto2.recent = function recent() {
          return this._recent;
        };
        _proto2.nextLabel = function nextLabel(afterTime) {
          if (afterTime === void 0) {
            afterTime = this._time;
          }
          return _getLabelInDirection(this, _parsePosition(this, afterTime));
        };
        _proto2.previousLabel = function previousLabel(beforeTime) {
          if (beforeTime === void 0) {
            beforeTime = this._time;
          }
          return _getLabelInDirection(this, _parsePosition(this, beforeTime), 1);
        };
        _proto2.currentLabel = function currentLabel(value) {
          return arguments.length ? this.seek(value, true) : this.previousLabel(this._time + _tinyNum);
        };
        _proto2.shiftChildren = function shiftChildren(amount, adjustLabels, ignoreBeforeTime) {
          if (ignoreBeforeTime === void 0) {
            ignoreBeforeTime = 0;
          }
          var child = this._first, labels = this.labels, p;
          while (child) {
            if (child._start >= ignoreBeforeTime) {
              child._start += amount;
              child._end += amount;
            }
            child = child._next;
          }
          if (adjustLabels) {
            for (p in labels) {
              if (labels[p] >= ignoreBeforeTime) {
                labels[p] += amount;
              }
            }
          }
          return _uncache(this);
        };
        _proto2.invalidate = function invalidate(soft) {
          var child = this._first;
          this._lock = 0;
          while (child) {
            child.invalidate(soft);
            child = child._next;
          }
          return _Animation.prototype.invalidate.call(this, soft);
        };
        _proto2.clear = function clear(includeLabels) {
          if (includeLabels === void 0) {
            includeLabels = true;
          }
          var child = this._first, next;
          while (child) {
            next = child._next;
            this.remove(child);
            child = next;
          }
          this._dp && (this._time = this._tTime = this._pTime = 0);
          includeLabels && (this.labels = {});
          return _uncache(this);
        };
        _proto2.totalDuration = function totalDuration(value) {
          var max = 0, self2 = this, child = self2._last, prevStart = _bigNum, prev, start, parent;
          if (arguments.length) {
            return self2.timeScale((self2._repeat < 0 ? self2.duration() : self2.totalDuration()) / (self2.reversed() ? -value : value));
          }
          if (self2._dirty) {
            parent = self2.parent;
            while (child) {
              prev = child._prev;
              child._dirty && child.totalDuration();
              start = child._start;
              if (start > prevStart && self2._sort && child._ts && !self2._lock) {
                self2._lock = 1;
                _addToTimeline(self2, child, start - child._delay, 1)._lock = 0;
              } else {
                prevStart = start;
              }
              if (start < 0 && child._ts) {
                max -= start;
                if (!parent && !self2._dp || parent && parent.smoothChildTiming) {
                  self2._start += start / self2._ts;
                  self2._time -= start;
                  self2._tTime -= start;
                }
                self2.shiftChildren(-start, false, -Infinity);
                prevStart = 0;
              }
              child._end > max && child._ts && (max = child._end);
              child = prev;
            }
            _setDuration(self2, self2 === _globalTimeline && self2._time > max ? self2._time : max, 1, 1);
            self2._dirty = 0;
          }
          return self2._tDur;
        };
        Timeline2.updateRoot = function updateRoot(time) {
          if (_globalTimeline._ts) {
            _lazySafeRender(_globalTimeline, _parentToChildTotalTime(time, _globalTimeline));
            _lastRenderedFrame = _ticker.frame;
          }
          if (_ticker.frame >= _nextGCFrame) {
            _nextGCFrame += _config.autoSleep || 120;
            var child = _globalTimeline._first;
            if (!child || !child._ts) {
              if (_config.autoSleep && _ticker._listeners.length < 2) {
                while (child && !child._ts) {
                  child = child._next;
                }
                child || _ticker.sleep();
              }
            }
          }
        };
        return Timeline2;
      }(Animation);
      _setDefaults(Timeline.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
      });
      _addComplexStringPropTween = function _addComplexStringPropTween2(target, prop, start, end, setter, stringFilter, funcParam) {
        var pt = new PropTween(this._pt, target, prop, 0, 1, _renderComplexString, null, setter), index = 0, matchIndex = 0, result, startNums, color, endNum, chunk, startNum, hasRandom, a;
        pt.b = start;
        pt.e = end;
        start += "";
        end += "";
        if (hasRandom = ~end.indexOf("random(")) {
          end = _replaceRandom(end);
        }
        if (stringFilter) {
          a = [start, end];
          stringFilter(a, target, prop);
          start = a[0];
          end = a[1];
        }
        startNums = start.match(_complexStringNumExp) || [];
        while (result = _complexStringNumExp.exec(end)) {
          endNum = result[0];
          chunk = end.substring(index, result.index);
          if (color) {
            color = (color + 1) % 5;
          } else if (chunk.substr(-5) === "rgba(") {
            color = 1;
          }
          if (endNum !== startNums[matchIndex++]) {
            startNum = parseFloat(startNums[matchIndex - 1]) || 0;
            pt._pt = {
              _next: pt._pt,
              p: chunk || matchIndex === 1 ? chunk : ",",
              //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
              s: startNum,
              c: endNum.charAt(1) === "=" ? _parseRelative(startNum, endNum) - startNum : parseFloat(endNum) - startNum,
              m: color && color < 4 ? Math.round : 0
            };
            index = _complexStringNumExp.lastIndex;
          }
        }
        pt.c = index < end.length ? end.substring(index, end.length) : "";
        pt.fp = funcParam;
        if (_relExp.test(end) || hasRandom) {
          pt.e = 0;
        }
        this._pt = pt;
        return pt;
      };
      _addPropTween = function _addPropTween2(target, prop, start, end, index, targets, modifier, stringFilter, funcParam, optional) {
        _isFunction(end) && (end = end(index || 0, target, targets));
        var currentValue = target[prop], parsedStart = start !== "get" ? start : !_isFunction(currentValue) ? currentValue : funcParam ? target[prop.indexOf("set") || !_isFunction(target["get" + prop.substr(3)]) ? prop : "get" + prop.substr(3)](funcParam) : target[prop](), setter = !_isFunction(currentValue) ? _setterPlain : funcParam ? _setterFuncWithParam : _setterFunc, pt;
        if (_isString(end)) {
          if (~end.indexOf("random(")) {
            end = _replaceRandom(end);
          }
          if (end.charAt(1) === "=") {
            pt = _parseRelative(parsedStart, end) + (getUnit(parsedStart) || 0);
            if (pt || pt === 0) {
              end = pt;
            }
          }
        }
        if (!optional || parsedStart !== end || _forceAllPropTweens) {
          if (!isNaN(parsedStart * end) && end !== "") {
            pt = new PropTween(this._pt, target, prop, +parsedStart || 0, end - (parsedStart || 0), typeof currentValue === "boolean" ? _renderBoolean : _renderPlain, 0, setter);
            funcParam && (pt.fp = funcParam);
            modifier && pt.modifier(modifier, this, target);
            return this._pt = pt;
          }
          !currentValue && !(prop in target) && _missingPlugin(prop, end);
          return _addComplexStringPropTween.call(this, target, prop, parsedStart, end, setter, stringFilter || _config.stringFilter, funcParam);
        }
      };
      _processVars = function _processVars2(vars, index, target, targets, tween) {
        _isFunction(vars) && (vars = _parseFuncOrString(vars, tween, index, target, targets));
        if (!_isObject(vars) || vars.style && vars.nodeType || _isArray(vars) || _isTypedArray(vars)) {
          return _isString(vars) ? _parseFuncOrString(vars, tween, index, target, targets) : vars;
        }
        var copy = {}, p;
        for (p in vars) {
          copy[p] = _parseFuncOrString(vars[p], tween, index, target, targets);
        }
        return copy;
      };
      _checkPlugin = function _checkPlugin2(property, vars, tween, index, target, targets) {
        var plugin, pt, ptLookup, i;
        if (_plugins[property] && (plugin = new _plugins[property]()).init(target, plugin.rawVars ? vars[property] : _processVars(vars[property], index, target, targets, tween), tween, index, targets) !== false) {
          tween._pt = pt = new PropTween(tween._pt, target, property, 0, 1, plugin.render, plugin, 0, plugin.priority);
          if (tween !== _quickTween) {
            ptLookup = tween._ptLookup[tween._targets.indexOf(target)];
            i = plugin._props.length;
            while (i--) {
              ptLookup[plugin._props[i]] = pt;
            }
          }
        }
        return plugin;
      };
      _initTween = function _initTween2(tween, time, tTime) {
        var vars = tween.vars, ease = vars.ease, startAt = vars.startAt, immediateRender = vars.immediateRender, lazy = vars.lazy, onUpdate = vars.onUpdate, onUpdateParams = vars.onUpdateParams, callbackScope = vars.callbackScope, runBackwards = vars.runBackwards, yoyoEase = vars.yoyoEase, keyframes = vars.keyframes, autoRevert = vars.autoRevert, dur = tween._dur, prevStartAt = tween._startAt, targets = tween._targets, parent = tween.parent, fullTargets = parent && parent.data === "nested" ? parent.vars.targets : targets, autoOverwrite = tween._overwrite === "auto" && !_suppressOverwrites, tl = tween.timeline, cleanVars, i, p, pt, target, hasPriority, gsData, harness, plugin, ptLookup, index, harnessVars, overwritten;
        tl && (!keyframes || !ease) && (ease = "none");
        tween._ease = _parseEase(ease, _defaults.ease);
        tween._yEase = yoyoEase ? _invertEase(_parseEase(yoyoEase === true ? ease : yoyoEase, _defaults.ease)) : 0;
        if (yoyoEase && tween._yoyo && !tween._repeat) {
          yoyoEase = tween._yEase;
          tween._yEase = tween._ease;
          tween._ease = yoyoEase;
        }
        tween._from = !tl && !!vars.runBackwards;
        if (!tl || keyframes && !vars.stagger) {
          harness = targets[0] ? _getCache(targets[0]).harness : 0;
          harnessVars = harness && vars[harness.prop];
          cleanVars = _copyExcluding(vars, _reservedProps);
          if (prevStartAt) {
            prevStartAt._zTime < 0 && prevStartAt.progress(1);
            time < 0 && runBackwards && immediateRender && !autoRevert ? prevStartAt.render(-1, true) : prevStartAt.revert(runBackwards && dur ? _revertConfigNoKill : _startAtRevertConfig);
            prevStartAt._lazy = 0;
          }
          if (startAt) {
            _removeFromParent(tween._startAt = Tween.set(targets, _setDefaults({
              data: "isStart",
              overwrite: false,
              parent,
              immediateRender: true,
              lazy: !prevStartAt && _isNotFalse(lazy),
              startAt: null,
              delay: 0,
              onUpdate,
              onUpdateParams,
              callbackScope,
              stagger: 0
            }, startAt)));
            tween._startAt._dp = 0;
            tween._startAt._sat = tween;
            time < 0 && (_reverting || !immediateRender && !autoRevert) && tween._startAt.revert(_revertConfigNoKill);
            if (immediateRender) {
              if (dur && time <= 0 && tTime <= 0) {
                time && (tween._zTime = time);
                return;
              }
            }
          } else if (runBackwards && dur) {
            if (!prevStartAt) {
              time && (immediateRender = false);
              p = _setDefaults({
                overwrite: false,
                data: "isFromStart",
                //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
                lazy: immediateRender && !prevStartAt && _isNotFalse(lazy),
                immediateRender,
                //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
                stagger: 0,
                parent
                //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y:gsap.utils.wrap([-100,100])})
              }, cleanVars);
              harnessVars && (p[harness.prop] = harnessVars);
              _removeFromParent(tween._startAt = Tween.set(targets, p));
              tween._startAt._dp = 0;
              tween._startAt._sat = tween;
              time < 0 && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween._startAt.render(-1, true));
              tween._zTime = time;
              if (!immediateRender) {
                _initTween2(tween._startAt, _tinyNum, _tinyNum);
              } else if (!time) {
                return;
              }
            }
          }
          tween._pt = tween._ptCache = 0;
          lazy = dur && _isNotFalse(lazy) || lazy && !dur;
          for (i = 0; i < targets.length; i++) {
            target = targets[i];
            gsData = target._gsap || _harness(targets)[i]._gsap;
            tween._ptLookup[i] = ptLookup = {};
            _lazyLookup[gsData.id] && _lazyTweens.length && _lazyRender();
            index = fullTargets === targets ? i : fullTargets.indexOf(target);
            if (harness && (plugin = new harness()).init(target, harnessVars || cleanVars, tween, index, fullTargets) !== false) {
              tween._pt = pt = new PropTween(tween._pt, target, plugin.name, 0, 1, plugin.render, plugin, 0, plugin.priority);
              plugin._props.forEach(function(name3) {
                ptLookup[name3] = pt;
              });
              plugin.priority && (hasPriority = 1);
            }
            if (!harness || harnessVars) {
              for (p in cleanVars) {
                if (_plugins[p] && (plugin = _checkPlugin(p, cleanVars, tween, index, target, fullTargets))) {
                  plugin.priority && (hasPriority = 1);
                } else {
                  ptLookup[p] = pt = _addPropTween.call(tween, target, p, "get", cleanVars[p], index, fullTargets, 0, vars.stringFilter);
                }
              }
            }
            tween._op && tween._op[i] && tween.kill(target, tween._op[i]);
            if (autoOverwrite && tween._pt) {
              _overwritingTween = tween;
              _globalTimeline.killTweensOf(target, ptLookup, tween.globalTime(time));
              overwritten = !tween.parent;
              _overwritingTween = 0;
            }
            tween._pt && lazy && (_lazyLookup[gsData.id] = 1);
          }
          hasPriority && _sortPropTweensByPriority(tween);
          tween._onInit && tween._onInit(tween);
        }
        tween._onUpdate = onUpdate;
        tween._initted = (!tween._op || tween._pt) && !overwritten;
        keyframes && time <= 0 && tl.render(_bigNum, true, true);
      };
      _updatePropTweens = function _updatePropTweens2(tween, property, value, start, startIsRelative, ratio, time) {
        var ptCache = (tween._pt && tween._ptCache || (tween._ptCache = {}))[property], pt, rootPT, lookup, i;
        if (!ptCache) {
          ptCache = tween._ptCache[property] = [];
          lookup = tween._ptLookup;
          i = tween._targets.length;
          while (i--) {
            pt = lookup[i][property];
            if (pt && pt.d && pt.d._pt) {
              pt = pt.d._pt;
              while (pt && pt.p !== property && pt.fp !== property) {
                pt = pt._next;
              }
            }
            if (!pt) {
              _forceAllPropTweens = 1;
              tween.vars[property] = "+=0";
              _initTween(tween, time);
              _forceAllPropTweens = 0;
              return 1;
            }
            ptCache.push(pt);
          }
        }
        i = ptCache.length;
        while (i--) {
          rootPT = ptCache[i];
          pt = rootPT._pt || rootPT;
          pt.s = (start || start === 0) && !startIsRelative ? start : pt.s + (start || 0) + ratio * pt.c;
          pt.c = value - pt.s;
          rootPT.e && (rootPT.e = _round(value) + getUnit(rootPT.e));
          rootPT.b && (rootPT.b = pt.s + getUnit(rootPT.b));
        }
      };
      _addAliasesToVars = function _addAliasesToVars2(targets, vars) {
        var harness = targets[0] ? _getCache(targets[0]).harness : 0, propertyAliases = harness && harness.aliases, copy, p, i, aliases;
        if (!propertyAliases) {
          return vars;
        }
        copy = _merge({}, vars);
        for (p in propertyAliases) {
          if (p in copy) {
            aliases = propertyAliases[p].split(",");
            i = aliases.length;
            while (i--) {
              copy[aliases[i]] = copy[p];
            }
          }
        }
        return copy;
      };
      _parseKeyframe = function _parseKeyframe2(prop, obj, allProps, easeEach) {
        var ease = obj.ease || easeEach || "power1.inOut", p, a;
        if (_isArray(obj)) {
          a = allProps[prop] || (allProps[prop] = []);
          obj.forEach(function(value, i) {
            return a.push({
              t: i / (obj.length - 1) * 100,
              v: value,
              e: ease
            });
          });
        } else {
          for (p in obj) {
            a = allProps[p] || (allProps[p] = []);
            p === "ease" || a.push({
              t: parseFloat(prop),
              v: obj[p],
              e: ease
            });
          }
        }
      };
      _parseFuncOrString = function _parseFuncOrString2(value, tween, i, target, targets) {
        return _isFunction(value) ? value.call(tween, i, target, targets) : _isString(value) && ~value.indexOf("random(") ? _replaceRandom(value) : value;
      };
      _staggerTweenProps = _callbackNames + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert";
      _staggerPropsToSkip = {};
      _forEachName(_staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger", function(name3) {
        return _staggerPropsToSkip[name3] = 1;
      });
      Tween = /* @__PURE__ */ function(_Animation2) {
        _inheritsLoose(Tween2, _Animation2);
        function Tween2(targets, vars, position, skipInherit) {
          var _this3;
          if (typeof vars === "number") {
            position.duration = vars;
            vars = position;
            position = null;
          }
          _this3 = _Animation2.call(this, skipInherit ? vars : _inheritDefaults(vars)) || this;
          var _this3$vars = _this3.vars, duration = _this3$vars.duration, delay = _this3$vars.delay, immediateRender = _this3$vars.immediateRender, stagger = _this3$vars.stagger, overwrite = _this3$vars.overwrite, keyframes = _this3$vars.keyframes, defaults2 = _this3$vars.defaults, scrollTrigger = _this3$vars.scrollTrigger, yoyoEase = _this3$vars.yoyoEase, parent = vars.parent || _globalTimeline, parsedTargets = (_isArray(targets) || _isTypedArray(targets) ? _isNumber(targets[0]) : "length" in vars) ? [targets] : toArray(targets), tl, i, copy, l, p, curTarget, staggerFunc, staggerVarsToMerge;
          _this3._targets = parsedTargets.length ? _harness(parsedTargets) : _warn("GSAP target " + targets + " not found. https://greensock.com", !_config.nullTargetWarn) || [];
          _this3._ptLookup = [];
          _this3._overwrite = overwrite;
          if (keyframes || stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
            vars = _this3.vars;
            tl = _this3.timeline = new Timeline({
              data: "nested",
              defaults: defaults2 || {},
              targets: parent && parent.data === "nested" ? parent.vars.targets : parsedTargets
            });
            tl.kill();
            tl.parent = tl._dp = _assertThisInitialized(_this3);
            tl._start = 0;
            if (stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
              l = parsedTargets.length;
              staggerFunc = stagger && distribute(stagger);
              if (_isObject(stagger)) {
                for (p in stagger) {
                  if (~_staggerTweenProps.indexOf(p)) {
                    staggerVarsToMerge || (staggerVarsToMerge = {});
                    staggerVarsToMerge[p] = stagger[p];
                  }
                }
              }
              for (i = 0; i < l; i++) {
                copy = _copyExcluding(vars, _staggerPropsToSkip);
                copy.stagger = 0;
                yoyoEase && (copy.yoyoEase = yoyoEase);
                staggerVarsToMerge && _merge(copy, staggerVarsToMerge);
                curTarget = parsedTargets[i];
                copy.duration = +_parseFuncOrString(duration, _assertThisInitialized(_this3), i, curTarget, parsedTargets);
                copy.delay = (+_parseFuncOrString(delay, _assertThisInitialized(_this3), i, curTarget, parsedTargets) || 0) - _this3._delay;
                if (!stagger && l === 1 && copy.delay) {
                  _this3._delay = delay = copy.delay;
                  _this3._start += delay;
                  copy.delay = 0;
                }
                tl.to(curTarget, copy, staggerFunc ? staggerFunc(i, curTarget, parsedTargets) : 0);
                tl._ease = _easeMap.none;
              }
              tl.duration() ? duration = delay = 0 : _this3.timeline = 0;
            } else if (keyframes) {
              _inheritDefaults(_setDefaults(tl.vars.defaults, {
                ease: "none"
              }));
              tl._ease = _parseEase(keyframes.ease || vars.ease || "none");
              var time = 0, a, kf, v;
              if (_isArray(keyframes)) {
                keyframes.forEach(function(frame) {
                  return tl.to(parsedTargets, frame, ">");
                });
                tl.duration();
              } else {
                copy = {};
                for (p in keyframes) {
                  p === "ease" || p === "easeEach" || _parseKeyframe(p, keyframes[p], copy, keyframes.easeEach);
                }
                for (p in copy) {
                  a = copy[p].sort(function(a2, b) {
                    return a2.t - b.t;
                  });
                  time = 0;
                  for (i = 0; i < a.length; i++) {
                    kf = a[i];
                    v = {
                      ease: kf.e,
                      duration: (kf.t - (i ? a[i - 1].t : 0)) / 100 * duration
                    };
                    v[p] = kf.v;
                    tl.to(parsedTargets, v, time);
                    time += v.duration;
                  }
                }
                tl.duration() < duration && tl.to({}, {
                  duration: duration - tl.duration()
                });
              }
            }
            duration || _this3.duration(duration = tl.duration());
          } else {
            _this3.timeline = 0;
          }
          if (overwrite === true && !_suppressOverwrites) {
            _overwritingTween = _assertThisInitialized(_this3);
            _globalTimeline.killTweensOf(parsedTargets);
            _overwritingTween = 0;
          }
          _addToTimeline(parent, _assertThisInitialized(_this3), position);
          vars.reversed && _this3.reverse();
          vars.paused && _this3.paused(true);
          if (immediateRender || !duration && !keyframes && _this3._start === _roundPrecise(parent._time) && _isNotFalse(immediateRender) && _hasNoPausedAncestors(_assertThisInitialized(_this3)) && parent.data !== "nested") {
            _this3._tTime = -_tinyNum;
            _this3.render(Math.max(0, -delay) || 0);
          }
          scrollTrigger && _scrollTrigger(_assertThisInitialized(_this3), scrollTrigger);
          return _this3;
        }
        var _proto3 = Tween2.prototype;
        _proto3.render = function render3(totalTime, suppressEvents, force) {
          var prevTime = this._time, tDur = this._tDur, dur = this._dur, isNegative = totalTime < 0, tTime = totalTime > tDur - _tinyNum && !isNegative ? tDur : totalTime < _tinyNum ? 0 : totalTime, time, pt, iteration, cycleDuration, prevIteration, isYoyo, ratio, timeline2, yoyoEase;
          if (!dur) {
            _renderZeroDurationTween(this, totalTime, suppressEvents, force);
          } else if (tTime !== this._tTime || !totalTime || force || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== isNegative) {
            time = tTime;
            timeline2 = this.timeline;
            if (this._repeat) {
              cycleDuration = dur + this._rDelay;
              if (this._repeat < -1 && isNegative) {
                return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
              }
              time = _roundPrecise(tTime % cycleDuration);
              if (tTime === tDur) {
                iteration = this._repeat;
                time = dur;
              } else {
                iteration = ~~(tTime / cycleDuration);
                if (iteration && iteration === tTime / cycleDuration) {
                  time = dur;
                  iteration--;
                }
                time > dur && (time = dur);
              }
              isYoyo = this._yoyo && iteration & 1;
              if (isYoyo) {
                yoyoEase = this._yEase;
                time = dur - time;
              }
              prevIteration = _animationCycle(this._tTime, cycleDuration);
              if (time === prevTime && !force && this._initted) {
                this._tTime = tTime;
                return this;
              }
              if (iteration !== prevIteration) {
                timeline2 && this._yEase && _propagateYoyoEase(timeline2, isYoyo);
                if (this.vars.repeatRefresh && !isYoyo && !this._lock) {
                  this._lock = force = 1;
                  this.render(_roundPrecise(cycleDuration * iteration), true).invalidate()._lock = 0;
                }
              }
            }
            if (!this._initted) {
              if (_attemptInitTween(this, isNegative ? totalTime : time, force, suppressEvents, tTime)) {
                this._tTime = 0;
                return this;
              }
              if (prevTime !== this._time) {
                return this;
              }
              if (dur !== this._dur) {
                return this.render(totalTime, suppressEvents, force);
              }
            }
            this._tTime = tTime;
            this._time = time;
            if (!this._act && this._ts) {
              this._act = 1;
              this._lazy = 0;
            }
            this.ratio = ratio = (yoyoEase || this._ease)(time / dur);
            if (this._from) {
              this.ratio = ratio = 1 - ratio;
            }
            if (time && !prevTime && !suppressEvents) {
              _callback(this, "onStart");
              if (this._tTime !== tTime) {
                return this;
              }
            }
            pt = this._pt;
            while (pt) {
              pt.r(ratio, pt.d);
              pt = pt._next;
            }
            timeline2 && timeline2.render(totalTime < 0 ? totalTime : !time && isYoyo ? -_tinyNum : timeline2._dur * timeline2._ease(time / this._dur), suppressEvents, force) || this._startAt && (this._zTime = totalTime);
            if (this._onUpdate && !suppressEvents) {
              isNegative && _rewindStartAt(this, totalTime, suppressEvents, force);
              _callback(this, "onUpdate");
            }
            this._repeat && iteration !== prevIteration && this.vars.onRepeat && !suppressEvents && this.parent && _callback(this, "onRepeat");
            if ((tTime === this._tDur || !tTime) && this._tTime === tTime) {
              isNegative && !this._onUpdate && _rewindStartAt(this, totalTime, true, true);
              (totalTime || !dur) && (tTime === this._tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);
              if (!suppressEvents && !(isNegative && !prevTime) && (tTime || prevTime || isYoyo)) {
                _callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);
                this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
              }
            }
          }
          return this;
        };
        _proto3.targets = function targets() {
          return this._targets;
        };
        _proto3.invalidate = function invalidate(soft) {
          (!soft || !this.vars.runBackwards) && (this._startAt = 0);
          this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0;
          this._ptLookup = [];
          this.timeline && this.timeline.invalidate(soft);
          return _Animation2.prototype.invalidate.call(this, soft);
        };
        _proto3.resetTo = function resetTo(property, value, start, startIsRelative) {
          _tickerActive || _ticker.wake();
          this._ts || this.play();
          var time = Math.min(this._dur, (this._dp._time - this._start) * this._ts), ratio;
          this._initted || _initTween(this, time);
          ratio = this._ease(time / this._dur);
          if (_updatePropTweens(this, property, value, start, startIsRelative, ratio, time)) {
            return this.resetTo(property, value, start, startIsRelative);
          }
          _alignPlayhead(this, 0);
          this.parent || _addLinkedListItem(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0);
          return this.render(0);
        };
        _proto3.kill = function kill(targets, vars) {
          if (vars === void 0) {
            vars = "all";
          }
          if (!targets && (!vars || vars === "all")) {
            this._lazy = this._pt = 0;
            return this.parent ? _interrupt(this) : this;
          }
          if (this.timeline) {
            var tDur = this.timeline.totalDuration();
            this.timeline.killTweensOf(targets, vars, _overwritingTween && _overwritingTween.vars.overwrite !== true)._first || _interrupt(this);
            this.parent && tDur !== this.timeline.totalDuration() && _setDuration(this, this._dur * this.timeline._tDur / tDur, 0, 1);
            return this;
          }
          var parsedTargets = this._targets, killingTargets = targets ? toArray(targets) : parsedTargets, propTweenLookup = this._ptLookup, firstPT = this._pt, overwrittenProps, curLookup, curOverwriteProps, props, p, pt, i;
          if ((!vars || vars === "all") && _arraysMatch(parsedTargets, killingTargets)) {
            vars === "all" && (this._pt = 0);
            return _interrupt(this);
          }
          overwrittenProps = this._op = this._op || [];
          if (vars !== "all") {
            if (_isString(vars)) {
              p = {};
              _forEachName(vars, function(name3) {
                return p[name3] = 1;
              });
              vars = p;
            }
            vars = _addAliasesToVars(parsedTargets, vars);
          }
          i = parsedTargets.length;
          while (i--) {
            if (~killingTargets.indexOf(parsedTargets[i])) {
              curLookup = propTweenLookup[i];
              if (vars === "all") {
                overwrittenProps[i] = vars;
                props = curLookup;
                curOverwriteProps = {};
              } else {
                curOverwriteProps = overwrittenProps[i] = overwrittenProps[i] || {};
                props = vars;
              }
              for (p in props) {
                pt = curLookup && curLookup[p];
                if (pt) {
                  if (!("kill" in pt.d) || pt.d.kill(p) === true) {
                    _removeLinkedListItem(this, pt, "_pt");
                  }
                  delete curLookup[p];
                }
                if (curOverwriteProps !== "all") {
                  curOverwriteProps[p] = 1;
                }
              }
            }
          }
          this._initted && !this._pt && firstPT && _interrupt(this);
          return this;
        };
        Tween2.to = function to(targets, vars) {
          return new Tween2(targets, vars, arguments[2]);
        };
        Tween2.from = function from(targets, vars) {
          return _createTweenType(1, arguments);
        };
        Tween2.delayedCall = function delayedCall(delay, callback, params, scope) {
          return new Tween2(callback, 0, {
            immediateRender: false,
            lazy: false,
            overwrite: false,
            delay,
            onComplete: callback,
            onReverseComplete: callback,
            onCompleteParams: params,
            onReverseCompleteParams: params,
            callbackScope: scope
          });
        };
        Tween2.fromTo = function fromTo(targets, fromVars, toVars) {
          return _createTweenType(2, arguments);
        };
        Tween2.set = function set(targets, vars) {
          vars.duration = 0;
          vars.repeatDelay || (vars.repeat = 0);
          return new Tween2(targets, vars);
        };
        Tween2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
          return _globalTimeline.killTweensOf(targets, props, onlyActive);
        };
        return Tween2;
      }(Animation);
      _setDefaults(Tween.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
      });
      _forEachName("staggerTo,staggerFrom,staggerFromTo", function(name3) {
        Tween[name3] = function() {
          var tl = new Timeline(), params = _slice.call(arguments, 0);
          params.splice(name3 === "staggerFromTo" ? 5 : 4, 0, 0);
          return tl[name3].apply(tl, params);
        };
      });
      _setterPlain = function _setterPlain2(target, property, value) {
        return target[property] = value;
      };
      _setterFunc = function _setterFunc2(target, property, value) {
        return target[property](value);
      };
      _setterFuncWithParam = function _setterFuncWithParam2(target, property, value, data) {
        return target[property](data.fp, value);
      };
      _setterAttribute = function _setterAttribute2(target, property, value) {
        return target.setAttribute(property, value);
      };
      _getSetter = function _getSetter2(target, property) {
        return _isFunction(target[property]) ? _setterFunc : _isUndefined(target[property]) && target.setAttribute ? _setterAttribute : _setterPlain;
      };
      _renderPlain = function _renderPlain2(ratio, data) {
        return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1e6) / 1e6, data);
      };
      _renderBoolean = function _renderBoolean2(ratio, data) {
        return data.set(data.t, data.p, !!(data.s + data.c * ratio), data);
      };
      _renderComplexString = function _renderComplexString2(ratio, data) {
        var pt = data._pt, s = "";
        if (!ratio && data.b) {
          s = data.b;
        } else if (ratio === 1 && data.e) {
          s = data.e;
        } else {
          while (pt) {
            s = pt.p + (pt.m ? pt.m(pt.s + pt.c * ratio) : Math.round((pt.s + pt.c * ratio) * 1e4) / 1e4) + s;
            pt = pt._next;
          }
          s += data.c;
        }
        data.set(data.t, data.p, s, data);
      };
      _renderPropTweens = function _renderPropTweens2(ratio, data) {
        var pt = data._pt;
        while (pt) {
          pt.r(ratio, pt.d);
          pt = pt._next;
        }
      };
      _addPluginModifier = function _addPluginModifier2(modifier, tween, target, property) {
        var pt = this._pt, next;
        while (pt) {
          next = pt._next;
          pt.p === property && pt.modifier(modifier, tween, target);
          pt = next;
        }
      };
      _killPropTweensOf = function _killPropTweensOf2(property) {
        var pt = this._pt, hasNonDependentRemaining, next;
        while (pt) {
          next = pt._next;
          if (pt.p === property && !pt.op || pt.op === property) {
            _removeLinkedListItem(this, pt, "_pt");
          } else if (!pt.dep) {
            hasNonDependentRemaining = 1;
          }
          pt = next;
        }
        return !hasNonDependentRemaining;
      };
      _setterWithModifier = function _setterWithModifier2(target, property, value, data) {
        data.mSet(target, property, data.m.call(data.tween, value, data.mt), data);
      };
      _sortPropTweensByPriority = function _sortPropTweensByPriority2(parent) {
        var pt = parent._pt, next, pt2, first, last;
        while (pt) {
          next = pt._next;
          pt2 = first;
          while (pt2 && pt2.pr > pt.pr) {
            pt2 = pt2._next;
          }
          if (pt._prev = pt2 ? pt2._prev : last) {
            pt._prev._next = pt;
          } else {
            first = pt;
          }
          if (pt._next = pt2) {
            pt2._prev = pt;
          } else {
            last = pt;
          }
          pt = next;
        }
        parent._pt = first;
      };
      PropTween = /* @__PURE__ */ function() {
        function PropTween2(next, target, prop, start, change, renderer, data, setter, priority) {
          this.t = target;
          this.s = start;
          this.c = change;
          this.p = prop;
          this.r = renderer || _renderPlain;
          this.d = data || this;
          this.set = setter || _setterPlain;
          this.pr = priority || 0;
          this._next = next;
          if (next) {
            next._prev = this;
          }
        }
        var _proto4 = PropTween2.prototype;
        _proto4.modifier = function modifier(func, tween, target) {
          this.mSet = this.mSet || this.set;
          this.set = _setterWithModifier;
          this.m = func;
          this.mt = target;
          this.tween = tween;
        };
        return PropTween2;
      }();
      _forEachName(_callbackNames + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(name3) {
        return _reservedProps[name3] = 1;
      });
      _globals.TweenMax = _globals.TweenLite = Tween;
      _globals.TimelineLite = _globals.TimelineMax = Timeline;
      _globalTimeline = new Timeline({
        sortChildren: false,
        defaults: _defaults,
        autoRemoveChildren: true,
        id: "root",
        smoothChildTiming: true
      });
      _config.stringFilter = _colorStringFilter;
      _media = [];
      _listeners = {};
      _emptyArray = [];
      _lastMediaTime = 0;
      _dispatch = function _dispatch2(type) {
        return (_listeners[type] || _emptyArray).map(function(f) {
          return f();
        });
      };
      _onMediaChange = function _onMediaChange2() {
        var time = Date.now(), matches = [];
        if (time - _lastMediaTime > 2) {
          _dispatch("matchMediaInit");
          _media.forEach(function(c) {
            var queries = c.queries, conditions = c.conditions, match, p, anyMatch, toggled;
            for (p in queries) {
              match = _win.matchMedia(queries[p]).matches;
              match && (anyMatch = 1);
              if (match !== conditions[p]) {
                conditions[p] = match;
                toggled = 1;
              }
            }
            if (toggled) {
              c.revert();
              anyMatch && matches.push(c);
            }
          });
          _dispatch("matchMediaRevert");
          matches.forEach(function(c) {
            return c.onMatch(c);
          });
          _lastMediaTime = time;
          _dispatch("matchMedia");
        }
      };
      Context = /* @__PURE__ */ function() {
        function Context2(func, scope) {
          this.selector = scope && selector(scope);
          this.data = [];
          this._r = [];
          this.isReverted = false;
          func && this.add(func);
        }
        var _proto5 = Context2.prototype;
        _proto5.add = function add(name3, func, scope) {
          if (_isFunction(name3)) {
            scope = func;
            func = name3;
            name3 = _isFunction;
          }
          var self2 = this, f = function f2() {
            var prev = _context, prevSelector = self2.selector, result;
            prev && prev !== self2 && prev.data.push(self2);
            scope && (self2.selector = selector(scope));
            _context = self2;
            result = func.apply(self2, arguments);
            _isFunction(result) && self2._r.push(result);
            _context = prev;
            self2.selector = prevSelector;
            self2.isReverted = false;
            return result;
          };
          self2.last = f;
          return name3 === _isFunction ? f(self2) : name3 ? self2[name3] = f : f;
        };
        _proto5.ignore = function ignore(func) {
          var prev = _context;
          _context = null;
          func(this);
          _context = prev;
        };
        _proto5.getTweens = function getTweens() {
          var a = [];
          this.data.forEach(function(e) {
            return e instanceof Context2 ? a.push.apply(a, e.getTweens()) : e instanceof Tween && !(e.parent && e.parent.data === "nested") && a.push(e);
          });
          return a;
        };
        _proto5.clear = function clear() {
          this._r.length = this.data.length = 0;
        };
        _proto5.kill = function kill(revert, matchMedia2) {
          var _this4 = this;
          if (revert) {
            var tweens = this.getTweens();
            this.data.forEach(function(t) {
              if (t.data === "isFlip") {
                t.revert();
                t.getChildren(true, true, false).forEach(function(tween) {
                  return tweens.splice(tweens.indexOf(tween), 1);
                });
              }
            });
            tweens.map(function(t) {
              return {
                g: t.globalTime(0),
                t
              };
            }).sort(function(a, b) {
              return b.g - a.g || -1;
            }).forEach(function(o) {
              return o.t.revert(revert);
            });
            this.data.forEach(function(e) {
              return !(e instanceof Animation) && e.revert && e.revert(revert);
            });
            this._r.forEach(function(f) {
              return f(revert, _this4);
            });
            this.isReverted = true;
          } else {
            this.data.forEach(function(e) {
              return e.kill && e.kill();
            });
          }
          this.clear();
          if (matchMedia2) {
            var i = _media.indexOf(this);
            !!~i && _media.splice(i, 1);
          }
        };
        _proto5.revert = function revert(config3) {
          this.kill(config3 || {});
        };
        return Context2;
      }();
      MatchMedia = /* @__PURE__ */ function() {
        function MatchMedia2(scope) {
          this.contexts = [];
          this.scope = scope;
        }
        var _proto6 = MatchMedia2.prototype;
        _proto6.add = function add(conditions, func, scope) {
          _isObject(conditions) || (conditions = {
            matches: conditions
          });
          var context3 = new Context(0, scope || this.scope), cond = context3.conditions = {}, mq, p, active;
          this.contexts.push(context3);
          func = context3.add("onMatch", func);
          context3.queries = conditions;
          for (p in conditions) {
            if (p === "all") {
              active = 1;
            } else {
              mq = _win.matchMedia(conditions[p]);
              if (mq) {
                _media.indexOf(context3) < 0 && _media.push(context3);
                (cond[p] = mq.matches) && (active = 1);
                mq.addListener ? mq.addListener(_onMediaChange) : mq.addEventListener("change", _onMediaChange);
              }
            }
          }
          active && func(context3);
          return this;
        };
        _proto6.revert = function revert(config3) {
          this.kill(config3 || {});
        };
        _proto6.kill = function kill(revert) {
          this.contexts.forEach(function(c) {
            return c.kill(revert, true);
          });
        };
        return MatchMedia2;
      }();
      _gsap = {
        registerPlugin: function registerPlugin() {
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }
          args.forEach(function(config3) {
            return _createPlugin(config3);
          });
        },
        timeline: function timeline(vars) {
          return new Timeline(vars);
        },
        getTweensOf: function getTweensOf(targets, onlyActive) {
          return _globalTimeline.getTweensOf(targets, onlyActive);
        },
        getProperty: function getProperty(target, property, unit, uncache) {
          _isString(target) && (target = toArray(target)[0]);
          var getter = _getCache(target || {}).get, format = unit ? _passThrough : _numericIfPossible;
          unit === "native" && (unit = "");
          return !target ? target : !property ? function(property2, unit2, uncache2) {
            return format((_plugins[property2] && _plugins[property2].get || getter)(target, property2, unit2, uncache2));
          } : format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
        },
        quickSetter: function quickSetter(target, property, unit) {
          target = toArray(target);
          if (target.length > 1) {
            var setters = target.map(function(t) {
              return gsap.quickSetter(t, property, unit);
            }), l = setters.length;
            return function(value) {
              var i = l;
              while (i--) {
                setters[i](value);
              }
            };
          }
          target = target[0] || {};
          var Plugin = _plugins[property], cache = _getCache(target), p = cache.harness && (cache.harness.aliases || {})[property] || property, setter = Plugin ? function(value) {
            var p2 = new Plugin();
            _quickTween._pt = 0;
            p2.init(target, unit ? value + unit : value, _quickTween, 0, [target]);
            p2.render(1, p2);
            _quickTween._pt && _renderPropTweens(1, _quickTween);
          } : cache.set(target, p);
          return Plugin ? setter : function(value) {
            return setter(target, p, unit ? value + unit : value, cache, 1);
          };
        },
        quickTo: function quickTo(target, property, vars) {
          var _merge22;
          var tween = gsap.to(target, _merge((_merge22 = {}, _merge22[property] = "+=0.1", _merge22.paused = true, _merge22), vars || {})), func = function func2(value, start, startIsRelative) {
            return tween.resetTo(property, value, start, startIsRelative);
          };
          func.tween = tween;
          return func;
        },
        isTweening: function isTweening(targets) {
          return _globalTimeline.getTweensOf(targets, true).length > 0;
        },
        defaults: function defaults(value) {
          value && value.ease && (value.ease = _parseEase(value.ease, _defaults.ease));
          return _mergeDeep(_defaults, value || {});
        },
        config: function config2(value) {
          return _mergeDeep(_config, value || {});
        },
        registerEffect: function registerEffect(_ref3) {
          var name3 = _ref3.name, effect = _ref3.effect, plugins = _ref3.plugins, defaults2 = _ref3.defaults, extendTimeline = _ref3.extendTimeline;
          (plugins || "").split(",").forEach(function(pluginName) {
            return pluginName && !_plugins[pluginName] && !_globals[pluginName] && _warn(name3 + " effect requires " + pluginName + " plugin.");
          });
          _effects[name3] = function(targets, vars, tl) {
            return effect(toArray(targets), _setDefaults(vars || {}, defaults2), tl);
          };
          if (extendTimeline) {
            Timeline.prototype[name3] = function(targets, vars, position) {
              return this.add(_effects[name3](targets, _isObject(vars) ? vars : (position = vars) && {}, this), position);
            };
          }
        },
        registerEase: function registerEase(name3, ease) {
          _easeMap[name3] = _parseEase(ease);
        },
        parseEase: function parseEase(ease, defaultEase) {
          return arguments.length ? _parseEase(ease, defaultEase) : _easeMap;
        },
        getById: function getById(id) {
          return _globalTimeline.getById(id);
        },
        exportRoot: function exportRoot(vars, includeDelayedCalls) {
          if (vars === void 0) {
            vars = {};
          }
          var tl = new Timeline(vars), child, next;
          tl.smoothChildTiming = _isNotFalse(vars.smoothChildTiming);
          _globalTimeline.remove(tl);
          tl._dp = 0;
          tl._time = tl._tTime = _globalTimeline._time;
          child = _globalTimeline._first;
          while (child) {
            next = child._next;
            if (includeDelayedCalls || !(!child._dur && child instanceof Tween && child.vars.onComplete === child._targets[0])) {
              _addToTimeline(tl, child, child._start - child._delay);
            }
            child = next;
          }
          _addToTimeline(_globalTimeline, tl, 0);
          return tl;
        },
        context: function context(func, scope) {
          return func ? new Context(func, scope) : _context;
        },
        matchMedia: function matchMedia(scope) {
          return new MatchMedia(scope);
        },
        matchMediaRefresh: function matchMediaRefresh() {
          return _media.forEach(function(c) {
            var cond = c.conditions, found, p;
            for (p in cond) {
              if (cond[p]) {
                cond[p] = false;
                found = 1;
              }
            }
            found && c.revert();
          }) || _onMediaChange();
        },
        addEventListener: function addEventListener(type, callback) {
          var a = _listeners[type] || (_listeners[type] = []);
          ~a.indexOf(callback) || a.push(callback);
        },
        removeEventListener: function removeEventListener(type, callback) {
          var a = _listeners[type], i = a && a.indexOf(callback);
          i >= 0 && a.splice(i, 1);
        },
        utils: {
          wrap,
          wrapYoyo,
          distribute,
          random,
          snap,
          normalize,
          getUnit,
          clamp,
          splitColor,
          toArray,
          selector,
          mapRange,
          pipe,
          unitize,
          interpolate,
          shuffle
        },
        install: _install,
        effects: _effects,
        ticker: _ticker,
        updateRoot: Timeline.updateRoot,
        plugins: _plugins,
        globalTimeline: _globalTimeline,
        core: {
          PropTween,
          globals: _addGlobal,
          Tween,
          Timeline,
          Animation,
          getCache: _getCache,
          _removeLinkedListItem,
          reverting: function reverting() {
            return _reverting;
          },
          context: function context2(toAdd) {
            if (toAdd && _context) {
              _context.data.push(toAdd);
              toAdd._ctx = _context;
            }
            return _context;
          },
          suppressOverwrites: function suppressOverwrites(value) {
            return _suppressOverwrites = value;
          }
        }
      };
      _forEachName("to,from,fromTo,delayedCall,set,killTweensOf", function(name3) {
        return _gsap[name3] = Tween[name3];
      });
      _ticker.add(Timeline.updateRoot);
      _quickTween = _gsap.to({}, {
        duration: 0
      });
      _getPluginPropTween = function _getPluginPropTween2(plugin, prop) {
        var pt = plugin._pt;
        while (pt && pt.p !== prop && pt.op !== prop && pt.fp !== prop) {
          pt = pt._next;
        }
        return pt;
      };
      _addModifiers = function _addModifiers2(tween, modifiers) {
        var targets = tween._targets, p, i, pt;
        for (p in modifiers) {
          i = targets.length;
          while (i--) {
            pt = tween._ptLookup[i][p];
            if (pt && (pt = pt.d)) {
              if (pt._pt) {
                pt = _getPluginPropTween(pt, p);
              }
              pt && pt.modifier && pt.modifier(modifiers[p], tween, targets[i], p);
            }
          }
        }
      };
      _buildModifierPlugin = function _buildModifierPlugin2(name3, modifier) {
        return {
          name: name3,
          rawVars: 1,
          //don't pre-process function-based values or "random()" strings.
          init: function init4(target, vars, tween) {
            tween._onInit = function(tween2) {
              var temp, p;
              if (_isString(vars)) {
                temp = {};
                _forEachName(vars, function(name4) {
                  return temp[name4] = 1;
                });
                vars = temp;
              }
              if (modifier) {
                temp = {};
                for (p in vars) {
                  temp[p] = modifier(vars[p]);
                }
                vars = temp;
              }
              _addModifiers(tween2, vars);
            };
          }
        };
      };
      gsap = _gsap.registerPlugin({
        name: "attr",
        init: function init(target, vars, tween, index, targets) {
          var p, pt, v;
          this.tween = tween;
          for (p in vars) {
            v = target.getAttribute(p) || "";
            pt = this.add(target, "setAttribute", (v || 0) + "", vars[p], index, targets, 0, 0, p);
            pt.op = p;
            pt.b = v;
            this._props.push(p);
          }
        },
        render: function render(ratio, data) {
          var pt = data._pt;
          while (pt) {
            _reverting ? pt.set(pt.t, pt.p, pt.b, pt) : pt.r(ratio, pt.d);
            pt = pt._next;
          }
        }
      }, {
        name: "endArray",
        init: function init2(target, value) {
          var i = value.length;
          while (i--) {
            this.add(target, i, target[i] || 0, value[i], 0, 0, 0, 0, 0, 1);
          }
        }
      }, _buildModifierPlugin("roundProps", _roundModifier), _buildModifierPlugin("modifiers"), _buildModifierPlugin("snap", snap)) || _gsap;
      Tween.version = Timeline.version = gsap.version = "3.11.4";
      _coreReady = 1;
      _windowExists() && _wake();
      Power0 = _easeMap.Power0;
      Power1 = _easeMap.Power1;
      Power2 = _easeMap.Power2;
      Power3 = _easeMap.Power3;
      Power4 = _easeMap.Power4;
      Linear = _easeMap.Linear;
      Quad = _easeMap.Quad;
      Cubic = _easeMap.Cubic;
      Quart = _easeMap.Quart;
      Quint = _easeMap.Quint;
      Strong = _easeMap.Strong;
      Elastic = _easeMap.Elastic;
      Back = _easeMap.Back;
      SteppedEase = _easeMap.SteppedEase;
      Bounce = _easeMap.Bounce;
      Sine = _easeMap.Sine;
      Expo = _easeMap.Expo;
      Circ = _easeMap.Circ;
    }
  });

  // node_modules/gsap/CSSPlugin.js
  var _win2, _doc2, _docElement, _pluginInitted, _tempDiv, _tempDivStyler, _recentSetterPlugin, _reverting2, _windowExists3, _transformProps, _RAD2DEG, _DEG2RAD, _atan2, _bigNum2, _capsExp, _horizontalExp, _complexExp, _propertyAliases, _renderCSSProp, _renderPropWithEnd, _renderCSSPropWithBeginning, _renderRoundedCSSProp, _renderNonTweeningValue, _renderNonTweeningValueOnlyAtEnd, _setterCSSStyle, _setterCSSProp, _setterTransform, _setterScale, _setterScaleWithRender, _setterTransformWithRender, _transformProp, _transformOriginProp, _saveStyle, _removeIndependentTransforms, _revertStyle, _getStyleSaver, _supports3D, _createElement, _getComputedProperty, _prefixes, _checkPropPrefix, _initCore, _getBBoxHack, _getAttributeFallbacks, _getBBox, _isSVG, _removeProperty, _addNonTweeningPT, _nonConvertibleUnits, _nonStandardLayouts, _convertToUnit, _get, _tweenComplexCSSString, _keywordToPercent, _convertKeywordsToPercentages, _renderClearProps, _specialProps, _identity2DMatrix, _rotationalProperties, _isNullTransform, _getComputedTransformMatrixAsArray, _getMatrix, _applySVGOrigin, _parseTransform, _firstTwoOnly, _addPxTranslate, _renderNon3DTransforms, _zeroDeg, _zeroPx, _endParenthesis, _renderCSSTransforms, _renderSVGTransforms, _addRotationalPropTween, _assign, _addRawTransformPTs, CSSPlugin;
  var init_CSSPlugin = __esm({
    "node_modules/gsap/CSSPlugin.js"() {
      init_live_reload();
      init_gsap_core();
      _windowExists3 = function _windowExists4() {
        return typeof window !== "undefined";
      };
      _transformProps = {};
      _RAD2DEG = 180 / Math.PI;
      _DEG2RAD = Math.PI / 180;
      _atan2 = Math.atan2;
      _bigNum2 = 1e8;
      _capsExp = /([A-Z])/g;
      _horizontalExp = /(left|right|width|margin|padding|x)/i;
      _complexExp = /[\s,\(]\S/;
      _propertyAliases = {
        autoAlpha: "opacity,visibility",
        scale: "scaleX,scaleY",
        alpha: "opacity"
      };
      _renderCSSProp = function _renderCSSProp2(ratio, data) {
        return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u, data);
      };
      _renderPropWithEnd = function _renderPropWithEnd2(ratio, data) {
        return data.set(data.t, data.p, ratio === 1 ? data.e : Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u, data);
      };
      _renderCSSPropWithBeginning = function _renderCSSPropWithBeginning2(ratio, data) {
        return data.set(data.t, data.p, ratio ? Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u : data.b, data);
      };
      _renderRoundedCSSProp = function _renderRoundedCSSProp2(ratio, data) {
        var value = data.s + data.c * ratio;
        data.set(data.t, data.p, ~~(value + (value < 0 ? -0.5 : 0.5)) + data.u, data);
      };
      _renderNonTweeningValue = function _renderNonTweeningValue2(ratio, data) {
        return data.set(data.t, data.p, ratio ? data.e : data.b, data);
      };
      _renderNonTweeningValueOnlyAtEnd = function _renderNonTweeningValueOnlyAtEnd2(ratio, data) {
        return data.set(data.t, data.p, ratio !== 1 ? data.b : data.e, data);
      };
      _setterCSSStyle = function _setterCSSStyle2(target, property, value) {
        return target.style[property] = value;
      };
      _setterCSSProp = function _setterCSSProp2(target, property, value) {
        return target.style.setProperty(property, value);
      };
      _setterTransform = function _setterTransform2(target, property, value) {
        return target._gsap[property] = value;
      };
      _setterScale = function _setterScale2(target, property, value) {
        return target._gsap.scaleX = target._gsap.scaleY = value;
      };
      _setterScaleWithRender = function _setterScaleWithRender2(target, property, value, data, ratio) {
        var cache = target._gsap;
        cache.scaleX = cache.scaleY = value;
        cache.renderTransform(ratio, cache);
      };
      _setterTransformWithRender = function _setterTransformWithRender2(target, property, value, data, ratio) {
        var cache = target._gsap;
        cache[property] = value;
        cache.renderTransform(ratio, cache);
      };
      _transformProp = "transform";
      _transformOriginProp = _transformProp + "Origin";
      _saveStyle = function _saveStyle2(property, isNotCSS) {
        var _this = this;
        var target = this.target, style = target.style;
        if (property in _transformProps) {
          this.tfm = this.tfm || {};
          if (property !== "transform") {
            property = _propertyAliases[property] || property;
            ~property.indexOf(",") ? property.split(",").forEach(function(a) {
              return _this.tfm[a] = _get(target, a);
            }) : this.tfm[property] = target._gsap.x ? target._gsap[property] : _get(target, property);
          }
          if (this.props.indexOf(_transformProp) >= 0) {
            return;
          }
          if (target._gsap.svg) {
            this.svgo = target.getAttribute("data-svg-origin");
            this.props.push(_transformOriginProp, isNotCSS, "");
          }
          property = _transformProp;
        }
        (style || isNotCSS) && this.props.push(property, isNotCSS, style[property]);
      };
      _removeIndependentTransforms = function _removeIndependentTransforms2(style) {
        if (style.translate) {
          style.removeProperty("translate");
          style.removeProperty("scale");
          style.removeProperty("rotate");
        }
      };
      _revertStyle = function _revertStyle2() {
        var props = this.props, target = this.target, style = target.style, cache = target._gsap, i, p;
        for (i = 0; i < props.length; i += 3) {
          props[i + 1] ? target[props[i]] = props[i + 2] : props[i + 2] ? style[props[i]] = props[i + 2] : style.removeProperty(props[i].replace(_capsExp, "-$1").toLowerCase());
        }
        if (this.tfm) {
          for (p in this.tfm) {
            cache[p] = this.tfm[p];
          }
          if (cache.svg) {
            cache.renderTransform();
            target.setAttribute("data-svg-origin", this.svgo || "");
          }
          i = _reverting2();
          if (i && !i.isStart && !style[_transformProp]) {
            _removeIndependentTransforms(style);
            cache.uncache = 1;
          }
        }
      };
      _getStyleSaver = function _getStyleSaver2(target, properties) {
        var saver = {
          target,
          props: [],
          revert: _revertStyle,
          save: _saveStyle
        };
        properties && properties.split(",").forEach(function(p) {
          return saver.save(p);
        });
        return saver;
      };
      _createElement = function _createElement2(type, ns) {
        var e = _doc2.createElementNS ? _doc2.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc2.createElement(type);
        return e.style ? e : _doc2.createElement(type);
      };
      _getComputedProperty = function _getComputedProperty2(target, property, skipPrefixFallback) {
        var cs = getComputedStyle(target);
        return cs[property] || cs.getPropertyValue(property.replace(_capsExp, "-$1").toLowerCase()) || cs.getPropertyValue(property) || !skipPrefixFallback && _getComputedProperty2(target, _checkPropPrefix(property) || property, 1) || "";
      };
      _prefixes = "O,Moz,ms,Ms,Webkit".split(",");
      _checkPropPrefix = function _checkPropPrefix2(property, element, preferPrefix) {
        var e = element || _tempDiv, s = e.style, i = 5;
        if (property in s && !preferPrefix) {
          return property;
        }
        property = property.charAt(0).toUpperCase() + property.substr(1);
        while (i-- && !(_prefixes[i] + property in s)) {
        }
        return i < 0 ? null : (i === 3 ? "ms" : i >= 0 ? _prefixes[i] : "") + property;
      };
      _initCore = function _initCore2() {
        if (_windowExists3() && window.document) {
          _win2 = window;
          _doc2 = _win2.document;
          _docElement = _doc2.documentElement;
          _tempDiv = _createElement("div") || {
            style: {}
          };
          _tempDivStyler = _createElement("div");
          _transformProp = _checkPropPrefix(_transformProp);
          _transformOriginProp = _transformProp + "Origin";
          _tempDiv.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0";
          _supports3D = !!_checkPropPrefix("perspective");
          _reverting2 = gsap.core.reverting;
          _pluginInitted = 1;
        }
      };
      _getBBoxHack = function _getBBoxHack2(swapIfPossible) {
        var svg = _createElement("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), oldParent = this.parentNode, oldSibling = this.nextSibling, oldCSS = this.style.cssText, bbox;
        _docElement.appendChild(svg);
        svg.appendChild(this);
        this.style.display = "block";
        if (swapIfPossible) {
          try {
            bbox = this.getBBox();
            this._gsapBBox = this.getBBox;
            this.getBBox = _getBBoxHack2;
          } catch (e) {
          }
        } else if (this._gsapBBox) {
          bbox = this._gsapBBox();
        }
        if (oldParent) {
          if (oldSibling) {
            oldParent.insertBefore(this, oldSibling);
          } else {
            oldParent.appendChild(this);
          }
        }
        _docElement.removeChild(svg);
        this.style.cssText = oldCSS;
        return bbox;
      };
      _getAttributeFallbacks = function _getAttributeFallbacks2(target, attributesArray) {
        var i = attributesArray.length;
        while (i--) {
          if (target.hasAttribute(attributesArray[i])) {
            return target.getAttribute(attributesArray[i]);
          }
        }
      };
      _getBBox = function _getBBox2(target) {
        var bounds;
        try {
          bounds = target.getBBox();
        } catch (error2) {
          bounds = _getBBoxHack.call(target, true);
        }
        bounds && (bounds.width || bounds.height) || target.getBBox === _getBBoxHack || (bounds = _getBBoxHack.call(target, true));
        return bounds && !bounds.width && !bounds.x && !bounds.y ? {
          x: +_getAttributeFallbacks(target, ["x", "cx", "x1"]) || 0,
          y: +_getAttributeFallbacks(target, ["y", "cy", "y1"]) || 0,
          width: 0,
          height: 0
        } : bounds;
      };
      _isSVG = function _isSVG2(e) {
        return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && _getBBox(e));
      };
      _removeProperty = function _removeProperty2(target, property) {
        if (property) {
          var style = target.style;
          if (property in _transformProps && property !== _transformOriginProp) {
            property = _transformProp;
          }
          if (style.removeProperty) {
            if (property.substr(0, 2) === "ms" || property.substr(0, 6) === "webkit") {
              property = "-" + property;
            }
            style.removeProperty(property.replace(_capsExp, "-$1").toLowerCase());
          } else {
            style.removeAttribute(property);
          }
        }
      };
      _addNonTweeningPT = function _addNonTweeningPT2(plugin, target, property, beginning, end, onlySetAtEnd) {
        var pt = new PropTween(plugin._pt, target, property, 0, 1, onlySetAtEnd ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue);
        plugin._pt = pt;
        pt.b = beginning;
        pt.e = end;
        plugin._props.push(property);
        return pt;
      };
      _nonConvertibleUnits = {
        deg: 1,
        rad: 1,
        turn: 1
      };
      _nonStandardLayouts = {
        grid: 1,
        flex: 1
      };
      _convertToUnit = function _convertToUnit2(target, property, value, unit) {
        var curValue = parseFloat(value) || 0, curUnit = (value + "").trim().substr((curValue + "").length) || "px", style = _tempDiv.style, horizontal = _horizontalExp.test(property), isRootSVG = target.tagName.toLowerCase() === "svg", measureProperty = (isRootSVG ? "client" : "offset") + (horizontal ? "Width" : "Height"), amount = 100, toPixels = unit === "px", toPercent = unit === "%", px, parent, cache, isSVG;
        if (unit === curUnit || !curValue || _nonConvertibleUnits[unit] || _nonConvertibleUnits[curUnit]) {
          return curValue;
        }
        curUnit !== "px" && !toPixels && (curValue = _convertToUnit2(target, property, value, "px"));
        isSVG = target.getCTM && _isSVG(target);
        if ((toPercent || curUnit === "%") && (_transformProps[property] || ~property.indexOf("adius"))) {
          px = isSVG ? target.getBBox()[horizontal ? "width" : "height"] : target[measureProperty];
          return _round(toPercent ? curValue / px * amount : curValue / 100 * px);
        }
        style[horizontal ? "width" : "height"] = amount + (toPixels ? curUnit : unit);
        parent = ~property.indexOf("adius") || unit === "em" && target.appendChild && !isRootSVG ? target : target.parentNode;
        if (isSVG) {
          parent = (target.ownerSVGElement || {}).parentNode;
        }
        if (!parent || parent === _doc2 || !parent.appendChild) {
          parent = _doc2.body;
        }
        cache = parent._gsap;
        if (cache && toPercent && cache.width && horizontal && cache.time === _ticker.time && !cache.uncache) {
          return _round(curValue / cache.width * amount);
        } else {
          (toPercent || curUnit === "%") && !_nonStandardLayouts[_getComputedProperty(parent, "display")] && (style.position = _getComputedProperty(target, "position"));
          parent === target && (style.position = "static");
          parent.appendChild(_tempDiv);
          px = _tempDiv[measureProperty];
          parent.removeChild(_tempDiv);
          style.position = "absolute";
          if (horizontal && toPercent) {
            cache = _getCache(parent);
            cache.time = _ticker.time;
            cache.width = parent[measureProperty];
          }
        }
        return _round(toPixels ? px * curValue / amount : px && curValue ? amount / px * curValue : 0);
      };
      _get = function _get2(target, property, unit, uncache) {
        var value;
        _pluginInitted || _initCore();
        if (property in _propertyAliases && property !== "transform") {
          property = _propertyAliases[property];
          if (~property.indexOf(",")) {
            property = property.split(",")[0];
          }
        }
        if (_transformProps[property] && property !== "transform") {
          value = _parseTransform(target, uncache);
          value = property !== "transformOrigin" ? value[property] : value.svg ? value.origin : _firstTwoOnly(_getComputedProperty(target, _transformOriginProp)) + " " + value.zOrigin + "px";
        } else {
          value = target.style[property];
          if (!value || value === "auto" || uncache || ~(value + "").indexOf("calc(")) {
            value = _specialProps[property] && _specialProps[property](target, property, unit) || _getComputedProperty(target, property) || _getProperty(target, property) || (property === "opacity" ? 1 : 0);
          }
        }
        return unit && !~(value + "").trim().indexOf(" ") ? _convertToUnit(target, property, value, unit) + unit : value;
      };
      _tweenComplexCSSString = function _tweenComplexCSSString2(target, prop, start, end) {
        if (!start || start === "none") {
          var p = _checkPropPrefix(prop, target, 1), s = p && _getComputedProperty(target, p, 1);
          if (s && s !== start) {
            prop = p;
            start = s;
          } else if (prop === "borderColor") {
            start = _getComputedProperty(target, "borderTopColor");
          }
        }
        var pt = new PropTween(this._pt, target.style, prop, 0, 1, _renderComplexString), index = 0, matchIndex = 0, a, result, startValues, startNum, color, startValue, endValue, endNum, chunk, endUnit, startUnit, endValues;
        pt.b = start;
        pt.e = end;
        start += "";
        end += "";
        if (end === "auto") {
          target.style[prop] = end;
          end = _getComputedProperty(target, prop) || end;
          target.style[prop] = start;
        }
        a = [start, end];
        _colorStringFilter(a);
        start = a[0];
        end = a[1];
        startValues = start.match(_numWithUnitExp) || [];
        endValues = end.match(_numWithUnitExp) || [];
        if (endValues.length) {
          while (result = _numWithUnitExp.exec(end)) {
            endValue = result[0];
            chunk = end.substring(index, result.index);
            if (color) {
              color = (color + 1) % 5;
            } else if (chunk.substr(-5) === "rgba(" || chunk.substr(-5) === "hsla(") {
              color = 1;
            }
            if (endValue !== (startValue = startValues[matchIndex++] || "")) {
              startNum = parseFloat(startValue) || 0;
              startUnit = startValue.substr((startNum + "").length);
              endValue.charAt(1) === "=" && (endValue = _parseRelative(startNum, endValue) + startUnit);
              endNum = parseFloat(endValue);
              endUnit = endValue.substr((endNum + "").length);
              index = _numWithUnitExp.lastIndex - endUnit.length;
              if (!endUnit) {
                endUnit = endUnit || _config.units[prop] || startUnit;
                if (index === end.length) {
                  end += endUnit;
                  pt.e += endUnit;
                }
              }
              if (startUnit !== endUnit) {
                startNum = _convertToUnit(target, prop, startValue, endUnit) || 0;
              }
              pt._pt = {
                _next: pt._pt,
                p: chunk || matchIndex === 1 ? chunk : ",",
                //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
                s: startNum,
                c: endNum - startNum,
                m: color && color < 4 || prop === "zIndex" ? Math.round : 0
              };
            }
          }
          pt.c = index < end.length ? end.substring(index, end.length) : "";
        } else {
          pt.r = prop === "display" && end === "none" ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue;
        }
        _relExp.test(end) && (pt.e = 0);
        this._pt = pt;
        return pt;
      };
      _keywordToPercent = {
        top: "0%",
        bottom: "100%",
        left: "0%",
        right: "100%",
        center: "50%"
      };
      _convertKeywordsToPercentages = function _convertKeywordsToPercentages2(value) {
        var split = value.split(" "), x = split[0], y = split[1] || "50%";
        if (x === "top" || x === "bottom" || y === "left" || y === "right") {
          value = x;
          x = y;
          y = value;
        }
        split[0] = _keywordToPercent[x] || x;
        split[1] = _keywordToPercent[y] || y;
        return split.join(" ");
      };
      _renderClearProps = function _renderClearProps2(ratio, data) {
        if (data.tween && data.tween._time === data.tween._dur) {
          var target = data.t, style = target.style, props = data.u, cache = target._gsap, prop, clearTransforms, i;
          if (props === "all" || props === true) {
            style.cssText = "";
            clearTransforms = 1;
          } else {
            props = props.split(",");
            i = props.length;
            while (--i > -1) {
              prop = props[i];
              if (_transformProps[prop]) {
                clearTransforms = 1;
                prop = prop === "transformOrigin" ? _transformOriginProp : _transformProp;
              }
              _removeProperty(target, prop);
            }
          }
          if (clearTransforms) {
            _removeProperty(target, _transformProp);
            if (cache) {
              cache.svg && target.removeAttribute("transform");
              _parseTransform(target, 1);
              cache.uncache = 1;
              _removeIndependentTransforms(style);
            }
          }
        }
      };
      _specialProps = {
        clearProps: function clearProps(plugin, target, property, endValue, tween) {
          if (tween.data !== "isFromStart") {
            var pt = plugin._pt = new PropTween(plugin._pt, target, property, 0, 0, _renderClearProps);
            pt.u = endValue;
            pt.pr = -10;
            pt.tween = tween;
            plugin._props.push(property);
            return 1;
          }
        }
        /* className feature (about 0.4kb gzipped).
        , className(plugin, target, property, endValue, tween) {
        	let _renderClassName = (ratio, data) => {
        			data.css.render(ratio, data.css);
        			if (!ratio || ratio === 1) {
        				let inline = data.rmv,
        					target = data.t,
        					p;
        				target.setAttribute("class", ratio ? data.e : data.b);
        				for (p in inline) {
        					_removeProperty(target, p);
        				}
        			}
        		},
        		_getAllStyles = (target) => {
        			let styles = {},
        				computed = getComputedStyle(target),
        				p;
        			for (p in computed) {
        				if (isNaN(p) && p !== "cssText" && p !== "length") {
        					styles[p] = computed[p];
        				}
        			}
        			_setDefaults(styles, _parseTransform(target, 1));
        			return styles;
        		},
        		startClassList = target.getAttribute("class"),
        		style = target.style,
        		cssText = style.cssText,
        		cache = target._gsap,
        		classPT = cache.classPT,
        		inlineToRemoveAtEnd = {},
        		data = {t:target, plugin:plugin, rmv:inlineToRemoveAtEnd, b:startClassList, e:(endValue.charAt(1) !== "=") ? endValue : startClassList.replace(new RegExp("(?:\\s|^)" + endValue.substr(2) + "(?![\\w-])"), "") + ((endValue.charAt(0) === "+") ? " " + endValue.substr(2) : "")},
        		changingVars = {},
        		startVars = _getAllStyles(target),
        		transformRelated = /(transform|perspective)/i,
        		endVars, p;
        	if (classPT) {
        		classPT.r(1, classPT.d);
        		_removeLinkedListItem(classPT.d.plugin, classPT, "_pt");
        	}
        	target.setAttribute("class", data.e);
        	endVars = _getAllStyles(target, true);
        	target.setAttribute("class", startClassList);
        	for (p in endVars) {
        		if (endVars[p] !== startVars[p] && !transformRelated.test(p)) {
        			changingVars[p] = endVars[p];
        			if (!style[p] && style[p] !== "0") {
        				inlineToRemoveAtEnd[p] = 1;
        			}
        		}
        	}
        	cache.classPT = plugin._pt = new PropTween(plugin._pt, target, "className", 0, 0, _renderClassName, data, 0, -11);
        	if (style.cssText !== cssText) { //only apply if things change. Otherwise, in cases like a background-image that's pulled dynamically, it could cause a refresh. See https://greensock.com/forums/topic/20368-possible-gsap-bug-switching-classnames-in-chrome/.
        		style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
        	}
        	_parseTransform(target, true); //to clear the caching of transforms
        	data.css = new gsap.plugins.css();
        	data.css.init(target, changingVars, tween);
        	plugin._props.push(...data.css._props);
        	return 1;
        }
        */
      };
      _identity2DMatrix = [1, 0, 0, 1, 0, 0];
      _rotationalProperties = {};
      _isNullTransform = function _isNullTransform2(value) {
        return value === "matrix(1, 0, 0, 1, 0, 0)" || value === "none" || !value;
      };
      _getComputedTransformMatrixAsArray = function _getComputedTransformMatrixAsArray2(target) {
        var matrixString = _getComputedProperty(target, _transformProp);
        return _isNullTransform(matrixString) ? _identity2DMatrix : matrixString.substr(7).match(_numExp).map(_round);
      };
      _getMatrix = function _getMatrix2(target, force2D) {
        var cache = target._gsap || _getCache(target), style = target.style, matrix = _getComputedTransformMatrixAsArray(target), parent, nextSibling, temp, addedToDOM;
        if (cache.svg && target.getAttribute("transform")) {
          temp = target.transform.baseVal.consolidate().matrix;
          matrix = [temp.a, temp.b, temp.c, temp.d, temp.e, temp.f];
          return matrix.join(",") === "1,0,0,1,0,0" ? _identity2DMatrix : matrix;
        } else if (matrix === _identity2DMatrix && !target.offsetParent && target !== _docElement && !cache.svg) {
          temp = style.display;
          style.display = "block";
          parent = target.parentNode;
          if (!parent || !target.offsetParent) {
            addedToDOM = 1;
            nextSibling = target.nextElementSibling;
            _docElement.appendChild(target);
          }
          matrix = _getComputedTransformMatrixAsArray(target);
          temp ? style.display = temp : _removeProperty(target, "display");
          if (addedToDOM) {
            nextSibling ? parent.insertBefore(target, nextSibling) : parent ? parent.appendChild(target) : _docElement.removeChild(target);
          }
        }
        return force2D && matrix.length > 6 ? [matrix[0], matrix[1], matrix[4], matrix[5], matrix[12], matrix[13]] : matrix;
      };
      _applySVGOrigin = function _applySVGOrigin2(target, origin, originIsAbsolute, smooth, matrixArray, pluginToAddPropTweensTo) {
        var cache = target._gsap, matrix = matrixArray || _getMatrix(target, true), xOriginOld = cache.xOrigin || 0, yOriginOld = cache.yOrigin || 0, xOffsetOld = cache.xOffset || 0, yOffsetOld = cache.yOffset || 0, a = matrix[0], b = matrix[1], c = matrix[2], d = matrix[3], tx = matrix[4], ty = matrix[5], originSplit = origin.split(" "), xOrigin = parseFloat(originSplit[0]) || 0, yOrigin = parseFloat(originSplit[1]) || 0, bounds, determinant, x, y;
        if (!originIsAbsolute) {
          bounds = _getBBox(target);
          xOrigin = bounds.x + (~originSplit[0].indexOf("%") ? xOrigin / 100 * bounds.width : xOrigin);
          yOrigin = bounds.y + (~(originSplit[1] || originSplit[0]).indexOf("%") ? yOrigin / 100 * bounds.height : yOrigin);
        } else if (matrix !== _identity2DMatrix && (determinant = a * d - b * c)) {
          x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + (c * ty - d * tx) / determinant;
          y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - (a * ty - b * tx) / determinant;
          xOrigin = x;
          yOrigin = y;
        }
        if (smooth || smooth !== false && cache.smooth) {
          tx = xOrigin - xOriginOld;
          ty = yOrigin - yOriginOld;
          cache.xOffset = xOffsetOld + (tx * a + ty * c) - tx;
          cache.yOffset = yOffsetOld + (tx * b + ty * d) - ty;
        } else {
          cache.xOffset = cache.yOffset = 0;
        }
        cache.xOrigin = xOrigin;
        cache.yOrigin = yOrigin;
        cache.smooth = !!smooth;
        cache.origin = origin;
        cache.originIsAbsolute = !!originIsAbsolute;
        target.style[_transformOriginProp] = "0px 0px";
        if (pluginToAddPropTweensTo) {
          _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOrigin", xOriginOld, xOrigin);
          _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOrigin", yOriginOld, yOrigin);
          _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOffset", xOffsetOld, cache.xOffset);
          _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOffset", yOffsetOld, cache.yOffset);
        }
        target.setAttribute("data-svg-origin", xOrigin + " " + yOrigin);
      };
      _parseTransform = function _parseTransform2(target, uncache) {
        var cache = target._gsap || new GSCache(target);
        if ("x" in cache && !uncache && !cache.uncache) {
          return cache;
        }
        var style = target.style, invertedScaleX = cache.scaleX < 0, px = "px", deg = "deg", cs = getComputedStyle(target), origin = _getComputedProperty(target, _transformOriginProp) || "0", x, y, z, scaleX, scaleY, rotation, rotationX, rotationY, skewX, skewY, perspective, xOrigin, yOrigin, matrix, angle, cos, sin, a, b, c, d, a12, a22, t1, t2, t3, a13, a23, a33, a42, a43, a32;
        x = y = z = rotation = rotationX = rotationY = skewX = skewY = perspective = 0;
        scaleX = scaleY = 1;
        cache.svg = !!(target.getCTM && _isSVG(target));
        if (cs.translate) {
          if (cs.translate !== "none" || cs.scale !== "none" || cs.rotate !== "none") {
            style[_transformProp] = (cs.translate !== "none" ? "translate3d(" + (cs.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (cs.rotate !== "none" ? "rotate(" + cs.rotate + ") " : "") + (cs.scale !== "none" ? "scale(" + cs.scale.split(" ").join(",") + ") " : "") + (cs[_transformProp] !== "none" ? cs[_transformProp] : "");
          }
          style.scale = style.rotate = style.translate = "none";
        }
        matrix = _getMatrix(target, cache.svg);
        if (cache.svg) {
          if (cache.uncache) {
            t2 = target.getBBox();
            origin = cache.xOrigin - t2.x + "px " + (cache.yOrigin - t2.y) + "px";
            t1 = "";
          } else {
            t1 = !uncache && target.getAttribute("data-svg-origin");
          }
          _applySVGOrigin(target, t1 || origin, !!t1 || cache.originIsAbsolute, cache.smooth !== false, matrix);
        }
        xOrigin = cache.xOrigin || 0;
        yOrigin = cache.yOrigin || 0;
        if (matrix !== _identity2DMatrix) {
          a = matrix[0];
          b = matrix[1];
          c = matrix[2];
          d = matrix[3];
          x = a12 = matrix[4];
          y = a22 = matrix[5];
          if (matrix.length === 6) {
            scaleX = Math.sqrt(a * a + b * b);
            scaleY = Math.sqrt(d * d + c * c);
            rotation = a || b ? _atan2(b, a) * _RAD2DEG : 0;
            skewX = c || d ? _atan2(c, d) * _RAD2DEG + rotation : 0;
            skewX && (scaleY *= Math.abs(Math.cos(skewX * _DEG2RAD)));
            if (cache.svg) {
              x -= xOrigin - (xOrigin * a + yOrigin * c);
              y -= yOrigin - (xOrigin * b + yOrigin * d);
            }
          } else {
            a32 = matrix[6];
            a42 = matrix[7];
            a13 = matrix[8];
            a23 = matrix[9];
            a33 = matrix[10];
            a43 = matrix[11];
            x = matrix[12];
            y = matrix[13];
            z = matrix[14];
            angle = _atan2(a32, a33);
            rotationX = angle * _RAD2DEG;
            if (angle) {
              cos = Math.cos(-angle);
              sin = Math.sin(-angle);
              t1 = a12 * cos + a13 * sin;
              t2 = a22 * cos + a23 * sin;
              t3 = a32 * cos + a33 * sin;
              a13 = a12 * -sin + a13 * cos;
              a23 = a22 * -sin + a23 * cos;
              a33 = a32 * -sin + a33 * cos;
              a43 = a42 * -sin + a43 * cos;
              a12 = t1;
              a22 = t2;
              a32 = t3;
            }
            angle = _atan2(-c, a33);
            rotationY = angle * _RAD2DEG;
            if (angle) {
              cos = Math.cos(-angle);
              sin = Math.sin(-angle);
              t1 = a * cos - a13 * sin;
              t2 = b * cos - a23 * sin;
              t3 = c * cos - a33 * sin;
              a43 = d * sin + a43 * cos;
              a = t1;
              b = t2;
              c = t3;
            }
            angle = _atan2(b, a);
            rotation = angle * _RAD2DEG;
            if (angle) {
              cos = Math.cos(angle);
              sin = Math.sin(angle);
              t1 = a * cos + b * sin;
              t2 = a12 * cos + a22 * sin;
              b = b * cos - a * sin;
              a22 = a22 * cos - a12 * sin;
              a = t1;
              a12 = t2;
            }
            if (rotationX && Math.abs(rotationX) + Math.abs(rotation) > 359.9) {
              rotationX = rotation = 0;
              rotationY = 180 - rotationY;
            }
            scaleX = _round(Math.sqrt(a * a + b * b + c * c));
            scaleY = _round(Math.sqrt(a22 * a22 + a32 * a32));
            angle = _atan2(a12, a22);
            skewX = Math.abs(angle) > 2e-4 ? angle * _RAD2DEG : 0;
            perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
          }
          if (cache.svg) {
            t1 = target.getAttribute("transform");
            cache.forceCSS = target.setAttribute("transform", "") || !_isNullTransform(_getComputedProperty(target, _transformProp));
            t1 && target.setAttribute("transform", t1);
          }
        }
        if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
          if (invertedScaleX) {
            scaleX *= -1;
            skewX += rotation <= 0 ? 180 : -180;
            rotation += rotation <= 0 ? 180 : -180;
          } else {
            scaleY *= -1;
            skewX += skewX <= 0 ? 180 : -180;
          }
        }
        uncache = uncache || cache.uncache;
        cache.x = x - ((cache.xPercent = x && (!uncache && cache.xPercent || (Math.round(target.offsetWidth / 2) === Math.round(-x) ? -50 : 0))) ? target.offsetWidth * cache.xPercent / 100 : 0) + px;
        cache.y = y - ((cache.yPercent = y && (!uncache && cache.yPercent || (Math.round(target.offsetHeight / 2) === Math.round(-y) ? -50 : 0))) ? target.offsetHeight * cache.yPercent / 100 : 0) + px;
        cache.z = z + px;
        cache.scaleX = _round(scaleX);
        cache.scaleY = _round(scaleY);
        cache.rotation = _round(rotation) + deg;
        cache.rotationX = _round(rotationX) + deg;
        cache.rotationY = _round(rotationY) + deg;
        cache.skewX = skewX + deg;
        cache.skewY = skewY + deg;
        cache.transformPerspective = perspective + px;
        if (cache.zOrigin = parseFloat(origin.split(" ")[2]) || 0) {
          style[_transformOriginProp] = _firstTwoOnly(origin);
        }
        cache.xOffset = cache.yOffset = 0;
        cache.force3D = _config.force3D;
        cache.renderTransform = cache.svg ? _renderSVGTransforms : _supports3D ? _renderCSSTransforms : _renderNon3DTransforms;
        cache.uncache = 0;
        return cache;
      };
      _firstTwoOnly = function _firstTwoOnly2(value) {
        return (value = value.split(" "))[0] + " " + value[1];
      };
      _addPxTranslate = function _addPxTranslate2(target, start, value) {
        var unit = getUnit(start);
        return _round(parseFloat(start) + parseFloat(_convertToUnit(target, "x", value + "px", unit))) + unit;
      };
      _renderNon3DTransforms = function _renderNon3DTransforms2(ratio, cache) {
        cache.z = "0px";
        cache.rotationY = cache.rotationX = "0deg";
        cache.force3D = 0;
        _renderCSSTransforms(ratio, cache);
      };
      _zeroDeg = "0deg";
      _zeroPx = "0px";
      _endParenthesis = ") ";
      _renderCSSTransforms = function _renderCSSTransforms2(ratio, cache) {
        var _ref = cache || this, xPercent = _ref.xPercent, yPercent = _ref.yPercent, x = _ref.x, y = _ref.y, z = _ref.z, rotation = _ref.rotation, rotationY = _ref.rotationY, rotationX = _ref.rotationX, skewX = _ref.skewX, skewY = _ref.skewY, scaleX = _ref.scaleX, scaleY = _ref.scaleY, transformPerspective = _ref.transformPerspective, force3D = _ref.force3D, target = _ref.target, zOrigin = _ref.zOrigin, transforms = "", use3D = force3D === "auto" && ratio && ratio !== 1 || force3D === true;
        if (zOrigin && (rotationX !== _zeroDeg || rotationY !== _zeroDeg)) {
          var angle = parseFloat(rotationY) * _DEG2RAD, a13 = Math.sin(angle), a33 = Math.cos(angle), cos;
          angle = parseFloat(rotationX) * _DEG2RAD;
          cos = Math.cos(angle);
          x = _addPxTranslate(target, x, a13 * cos * -zOrigin);
          y = _addPxTranslate(target, y, -Math.sin(angle) * -zOrigin);
          z = _addPxTranslate(target, z, a33 * cos * -zOrigin + zOrigin);
        }
        if (transformPerspective !== _zeroPx) {
          transforms += "perspective(" + transformPerspective + _endParenthesis;
        }
        if (xPercent || yPercent) {
          transforms += "translate(" + xPercent + "%, " + yPercent + "%) ";
        }
        if (use3D || x !== _zeroPx || y !== _zeroPx || z !== _zeroPx) {
          transforms += z !== _zeroPx || use3D ? "translate3d(" + x + ", " + y + ", " + z + ") " : "translate(" + x + ", " + y + _endParenthesis;
        }
        if (rotation !== _zeroDeg) {
          transforms += "rotate(" + rotation + _endParenthesis;
        }
        if (rotationY !== _zeroDeg) {
          transforms += "rotateY(" + rotationY + _endParenthesis;
        }
        if (rotationX !== _zeroDeg) {
          transforms += "rotateX(" + rotationX + _endParenthesis;
        }
        if (skewX !== _zeroDeg || skewY !== _zeroDeg) {
          transforms += "skew(" + skewX + ", " + skewY + _endParenthesis;
        }
        if (scaleX !== 1 || scaleY !== 1) {
          transforms += "scale(" + scaleX + ", " + scaleY + _endParenthesis;
        }
        target.style[_transformProp] = transforms || "translate(0, 0)";
      };
      _renderSVGTransforms = function _renderSVGTransforms2(ratio, cache) {
        var _ref2 = cache || this, xPercent = _ref2.xPercent, yPercent = _ref2.yPercent, x = _ref2.x, y = _ref2.y, rotation = _ref2.rotation, skewX = _ref2.skewX, skewY = _ref2.skewY, scaleX = _ref2.scaleX, scaleY = _ref2.scaleY, target = _ref2.target, xOrigin = _ref2.xOrigin, yOrigin = _ref2.yOrigin, xOffset = _ref2.xOffset, yOffset = _ref2.yOffset, forceCSS = _ref2.forceCSS, tx = parseFloat(x), ty = parseFloat(y), a11, a21, a12, a22, temp;
        rotation = parseFloat(rotation);
        skewX = parseFloat(skewX);
        skewY = parseFloat(skewY);
        if (skewY) {
          skewY = parseFloat(skewY);
          skewX += skewY;
          rotation += skewY;
        }
        if (rotation || skewX) {
          rotation *= _DEG2RAD;
          skewX *= _DEG2RAD;
          a11 = Math.cos(rotation) * scaleX;
          a21 = Math.sin(rotation) * scaleX;
          a12 = Math.sin(rotation - skewX) * -scaleY;
          a22 = Math.cos(rotation - skewX) * scaleY;
          if (skewX) {
            skewY *= _DEG2RAD;
            temp = Math.tan(skewX - skewY);
            temp = Math.sqrt(1 + temp * temp);
            a12 *= temp;
            a22 *= temp;
            if (skewY) {
              temp = Math.tan(skewY);
              temp = Math.sqrt(1 + temp * temp);
              a11 *= temp;
              a21 *= temp;
            }
          }
          a11 = _round(a11);
          a21 = _round(a21);
          a12 = _round(a12);
          a22 = _round(a22);
        } else {
          a11 = scaleX;
          a22 = scaleY;
          a21 = a12 = 0;
        }
        if (tx && !~(x + "").indexOf("px") || ty && !~(y + "").indexOf("px")) {
          tx = _convertToUnit(target, "x", x, "px");
          ty = _convertToUnit(target, "y", y, "px");
        }
        if (xOrigin || yOrigin || xOffset || yOffset) {
          tx = _round(tx + xOrigin - (xOrigin * a11 + yOrigin * a12) + xOffset);
          ty = _round(ty + yOrigin - (xOrigin * a21 + yOrigin * a22) + yOffset);
        }
        if (xPercent || yPercent) {
          temp = target.getBBox();
          tx = _round(tx + xPercent / 100 * temp.width);
          ty = _round(ty + yPercent / 100 * temp.height);
        }
        temp = "matrix(" + a11 + "," + a21 + "," + a12 + "," + a22 + "," + tx + "," + ty + ")";
        target.setAttribute("transform", temp);
        forceCSS && (target.style[_transformProp] = temp);
      };
      _addRotationalPropTween = function _addRotationalPropTween2(plugin, target, property, startNum, endValue) {
        var cap = 360, isString = _isString(endValue), endNum = parseFloat(endValue) * (isString && ~endValue.indexOf("rad") ? _RAD2DEG : 1), change = endNum - startNum, finalValue = startNum + change + "deg", direction, pt;
        if (isString) {
          direction = endValue.split("_")[1];
          if (direction === "short") {
            change %= cap;
            if (change !== change % (cap / 2)) {
              change += change < 0 ? cap : -cap;
            }
          }
          if (direction === "cw" && change < 0) {
            change = (change + cap * _bigNum2) % cap - ~~(change / cap) * cap;
          } else if (direction === "ccw" && change > 0) {
            change = (change - cap * _bigNum2) % cap - ~~(change / cap) * cap;
          }
        }
        plugin._pt = pt = new PropTween(plugin._pt, target, property, startNum, change, _renderPropWithEnd);
        pt.e = finalValue;
        pt.u = "deg";
        plugin._props.push(property);
        return pt;
      };
      _assign = function _assign2(target, source) {
        for (var p in source) {
          target[p] = source[p];
        }
        return target;
      };
      _addRawTransformPTs = function _addRawTransformPTs2(plugin, transforms, target) {
        var startCache = _assign({}, target._gsap), exclude = "perspective,force3D,transformOrigin,svgOrigin", style = target.style, endCache, p, startValue, endValue, startNum, endNum, startUnit, endUnit;
        if (startCache.svg) {
          startValue = target.getAttribute("transform");
          target.setAttribute("transform", "");
          style[_transformProp] = transforms;
          endCache = _parseTransform(target, 1);
          _removeProperty(target, _transformProp);
          target.setAttribute("transform", startValue);
        } else {
          startValue = getComputedStyle(target)[_transformProp];
          style[_transformProp] = transforms;
          endCache = _parseTransform(target, 1);
          style[_transformProp] = startValue;
        }
        for (p in _transformProps) {
          startValue = startCache[p];
          endValue = endCache[p];
          if (startValue !== endValue && exclude.indexOf(p) < 0) {
            startUnit = getUnit(startValue);
            endUnit = getUnit(endValue);
            startNum = startUnit !== endUnit ? _convertToUnit(target, p, startValue, endUnit) : parseFloat(startValue);
            endNum = parseFloat(endValue);
            plugin._pt = new PropTween(plugin._pt, endCache, p, startNum, endNum - startNum, _renderCSSProp);
            plugin._pt.u = endUnit || 0;
            plugin._props.push(p);
          }
        }
        _assign(endCache, startCache);
      };
      _forEachName("padding,margin,Width,Radius", function(name3, index) {
        var t = "Top", r = "Right", b = "Bottom", l = "Left", props = (index < 3 ? [t, r, b, l] : [t + l, t + r, b + r, b + l]).map(function(side) {
          return index < 2 ? name3 + side : "border" + side + name3;
        });
        _specialProps[index > 1 ? "border" + name3 : name3] = function(plugin, target, property, endValue, tween) {
          var a, vars;
          if (arguments.length < 4) {
            a = props.map(function(prop) {
              return _get(plugin, prop, property);
            });
            vars = a.join(" ");
            return vars.split(a[0]).length === 5 ? a[0] : vars;
          }
          a = (endValue + "").split(" ");
          vars = {};
          props.forEach(function(prop, i) {
            return vars[prop] = a[i] = a[i] || a[(i - 1) / 2 | 0];
          });
          plugin.init(target, vars, tween);
        };
      });
      CSSPlugin = {
        name: "css",
        register: _initCore,
        targetTest: function targetTest(target) {
          return target.style && target.nodeType;
        },
        init: function init3(target, vars, tween, index, targets) {
          var props = this._props, style = target.style, startAt = tween.vars.startAt, startValue, endValue, endNum, startNum, type, specialProp, p, startUnit, endUnit, relative, isTransformRelated, transformPropTween, cache, smooth, hasPriority, inlineProps;
          _pluginInitted || _initCore();
          this.styles = this.styles || _getStyleSaver(target);
          inlineProps = this.styles.props;
          this.tween = tween;
          for (p in vars) {
            if (p === "autoRound") {
              continue;
            }
            endValue = vars[p];
            if (_plugins[p] && _checkPlugin(p, vars, tween, index, target, targets)) {
              continue;
            }
            type = typeof endValue;
            specialProp = _specialProps[p];
            if (type === "function") {
              endValue = endValue.call(tween, index, target, targets);
              type = typeof endValue;
            }
            if (type === "string" && ~endValue.indexOf("random(")) {
              endValue = _replaceRandom(endValue);
            }
            if (specialProp) {
              specialProp(this, target, p, endValue, tween) && (hasPriority = 1);
            } else if (p.substr(0, 2) === "--") {
              startValue = (getComputedStyle(target).getPropertyValue(p) + "").trim();
              endValue += "";
              _colorExp.lastIndex = 0;
              if (!_colorExp.test(startValue)) {
                startUnit = getUnit(startValue);
                endUnit = getUnit(endValue);
              }
              endUnit ? startUnit !== endUnit && (startValue = _convertToUnit(target, p, startValue, endUnit) + endUnit) : startUnit && (endValue += startUnit);
              this.add(style, "setProperty", startValue, endValue, index, targets, 0, 0, p);
              props.push(p);
              inlineProps.push(p, 0, style[p]);
            } else if (type !== "undefined") {
              if (startAt && p in startAt) {
                startValue = typeof startAt[p] === "function" ? startAt[p].call(tween, index, target, targets) : startAt[p];
                _isString(startValue) && ~startValue.indexOf("random(") && (startValue = _replaceRandom(startValue));
                getUnit(startValue + "") || (startValue += _config.units[p] || getUnit(_get(target, p)) || "");
                (startValue + "").charAt(1) === "=" && (startValue = _get(target, p));
              } else {
                startValue = _get(target, p);
              }
              startNum = parseFloat(startValue);
              relative = type === "string" && endValue.charAt(1) === "=" && endValue.substr(0, 2);
              relative && (endValue = endValue.substr(2));
              endNum = parseFloat(endValue);
              if (p in _propertyAliases) {
                if (p === "autoAlpha") {
                  if (startNum === 1 && _get(target, "visibility") === "hidden" && endNum) {
                    startNum = 0;
                  }
                  inlineProps.push("visibility", 0, style.visibility);
                  _addNonTweeningPT(this, style, "visibility", startNum ? "inherit" : "hidden", endNum ? "inherit" : "hidden", !endNum);
                }
                if (p !== "scale" && p !== "transform") {
                  p = _propertyAliases[p];
                  ~p.indexOf(",") && (p = p.split(",")[0]);
                }
              }
              isTransformRelated = p in _transformProps;
              if (isTransformRelated) {
                this.styles.save(p);
                if (!transformPropTween) {
                  cache = target._gsap;
                  cache.renderTransform && !vars.parseTransform || _parseTransform(target, vars.parseTransform);
                  smooth = vars.smoothOrigin !== false && cache.smooth;
                  transformPropTween = this._pt = new PropTween(this._pt, style, _transformProp, 0, 1, cache.renderTransform, cache, 0, -1);
                  transformPropTween.dep = 1;
                }
                if (p === "scale") {
                  this._pt = new PropTween(this._pt, cache, "scaleY", cache.scaleY, (relative ? _parseRelative(cache.scaleY, relative + endNum) : endNum) - cache.scaleY || 0, _renderCSSProp);
                  this._pt.u = 0;
                  props.push("scaleY", p);
                  p += "X";
                } else if (p === "transformOrigin") {
                  inlineProps.push(_transformOriginProp, 0, style[_transformOriginProp]);
                  endValue = _convertKeywordsToPercentages(endValue);
                  if (cache.svg) {
                    _applySVGOrigin(target, endValue, 0, smooth, 0, this);
                  } else {
                    endUnit = parseFloat(endValue.split(" ")[2]) || 0;
                    endUnit !== cache.zOrigin && _addNonTweeningPT(this, cache, "zOrigin", cache.zOrigin, endUnit);
                    _addNonTweeningPT(this, style, p, _firstTwoOnly(startValue), _firstTwoOnly(endValue));
                  }
                  continue;
                } else if (p === "svgOrigin") {
                  _applySVGOrigin(target, endValue, 1, smooth, 0, this);
                  continue;
                } else if (p in _rotationalProperties) {
                  _addRotationalPropTween(this, cache, p, startNum, relative ? _parseRelative(startNum, relative + endValue) : endValue);
                  continue;
                } else if (p === "smoothOrigin") {
                  _addNonTweeningPT(this, cache, "smooth", cache.smooth, endValue);
                  continue;
                } else if (p === "force3D") {
                  cache[p] = endValue;
                  continue;
                } else if (p === "transform") {
                  _addRawTransformPTs(this, endValue, target);
                  continue;
                }
              } else if (!(p in style)) {
                p = _checkPropPrefix(p) || p;
              }
              if (isTransformRelated || (endNum || endNum === 0) && (startNum || startNum === 0) && !_complexExp.test(endValue) && p in style) {
                startUnit = (startValue + "").substr((startNum + "").length);
                endNum || (endNum = 0);
                endUnit = getUnit(endValue) || (p in _config.units ? _config.units[p] : startUnit);
                startUnit !== endUnit && (startNum = _convertToUnit(target, p, startValue, endUnit));
                this._pt = new PropTween(this._pt, isTransformRelated ? cache : style, p, startNum, (relative ? _parseRelative(startNum, relative + endNum) : endNum) - startNum, !isTransformRelated && (endUnit === "px" || p === "zIndex") && vars.autoRound !== false ? _renderRoundedCSSProp : _renderCSSProp);
                this._pt.u = endUnit || 0;
                if (startUnit !== endUnit && endUnit !== "%") {
                  this._pt.b = startValue;
                  this._pt.r = _renderCSSPropWithBeginning;
                }
              } else if (!(p in style)) {
                if (p in target) {
                  this.add(target, p, startValue || target[p], relative ? relative + endValue : endValue, index, targets);
                } else if (p !== "parseTransform") {
                  _missingPlugin(p, endValue);
                  continue;
                }
              } else {
                _tweenComplexCSSString.call(this, target, p, startValue, relative ? relative + endValue : endValue);
              }
              isTransformRelated || (p in style ? inlineProps.push(p, 0, style[p]) : inlineProps.push(p, 1, startValue || target[p]));
              props.push(p);
            }
          }
          hasPriority && _sortPropTweensByPriority(this);
        },
        render: function render2(ratio, data) {
          if (data.tween._time || !_reverting2()) {
            var pt = data._pt;
            while (pt) {
              pt.r(ratio, pt.d);
              pt = pt._next;
            }
          } else {
            data.styles.revert();
          }
        },
        get: _get,
        aliases: _propertyAliases,
        getSetter: function getSetter(target, property, plugin) {
          var p = _propertyAliases[property];
          p && p.indexOf(",") < 0 && (property = p);
          return property in _transformProps && property !== _transformOriginProp && (target._gsap.x || _get(target, "x")) ? plugin && _recentSetterPlugin === plugin ? property === "scale" ? _setterScale : _setterTransform : (_recentSetterPlugin = plugin || {}) && (property === "scale" ? _setterScaleWithRender : _setterTransformWithRender) : target.style && !_isUndefined(target.style[property]) ? _setterCSSStyle : ~property.indexOf("-") ? _setterCSSProp : _getSetter(target, property);
        },
        core: {
          _removeProperty,
          _getMatrix
        }
      };
      gsap.utils.checkPrefix = _checkPropPrefix;
      gsap.core.getStyleSaver = _getStyleSaver;
      (function(positionAndScale, rotation, others, aliases) {
        var all = _forEachName(positionAndScale + "," + rotation + "," + others, function(name3) {
          _transformProps[name3] = 1;
        });
        _forEachName(rotation, function(name3) {
          _config.units[name3] = "deg";
          _rotationalProperties[name3] = 1;
        });
        _propertyAliases[all[13]] = positionAndScale + "," + rotation;
        _forEachName(aliases, function(name3) {
          var split = name3.split(":");
          _propertyAliases[split[1]] = all[split[0]];
        });
      })("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
      _forEachName("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(name3) {
        _config.units[name3] = "px";
      });
      gsap.registerPlugin(CSSPlugin);
    }
  });

  // node_modules/gsap/index.js
  var gsapWithCSS, TweenMaxWithCSS;
  var init_gsap = __esm({
    "node_modules/gsap/index.js"() {
      init_live_reload();
      init_gsap_core();
      init_CSSPlugin();
      gsapWithCSS = gsap.registerPlugin(CSSPlugin) || gsap;
      TweenMaxWithCSS = gsapWithCSS.core.Tween;
    }
  });

  // src/components/heroVideo.ts
  var HeroVideo, heroVideo_default;
  var init_heroVideo = __esm({
    "src/components/heroVideo.ts"() {
      "use strict";
      init_live_reload();
      init_gsap();
      HeroVideo = class {
        static homeReveal() {
          const heroPlace = document.querySelector("#heroPlace");
          const heroVideo = document.querySelector("#heroVideo");
          const nav2 = document.querySelector(".nav_component");
          const svgPaths = [...document.querySelectorAll(".oa_path")];
          const banner2 = document.querySelector(".banner_component");
          let videoInitialized = false;
          const handleVideoReady = () => {
            if (videoInitialized) return;
            videoInitialized = true;
            if (heroVideo.paused) heroVideo.play().catch(console.warn);
            gsapWithCSS.set(heroPlace, { zIndex: 1, display: "none" });
          };
          if (heroVideo) {
            heroVideo.addEventListener("loadeddata", () => {
              handleVideoReady();
            });
            if (heroVideo.readyState >= 3) {
              handleVideoReady();
            }
            gsapWithCSS.set(heroPlace, { zIndex: 4 });
          }
          const tl = gsapWithCSS.timeline({ delay: 1 });
          if (banner2)
            tl.fromTo(
              banner2,
              { opacity: 0, y: "-3rem", height: 0 },
              { duration: 2, opacity: 1, y: "0rem", height: "3rem", ease: "power3.out" },
              "<"
            );
          tl.fromTo(
            svgPaths,
            { y: "4rem", opacity: 0 },
            {
              duration: 1,
              y: "0rem",
              opacity: 1,
              stagger: 0.2,
              ease: "power1.out"
            },
            "<"
          );
          tl.fromTo(
            nav2,
            { opacity: 0, y: "1rem" },
            { duration: 1.2, y: "0rem", opacity: 1, ease: "expo.inOut" },
            "<0.2"
          );
        }
      };
      heroVideo_default = HeroVideo;
    }
  });

  // src/utils/editorCheck.ts
  function getWebflowEnv() {
    const wf = window.Webflow;
    const isEditor = document.documentElement.hasAttribute("w-editor") || typeof window.WebflowEditor !== "undefined" || wf?.env?.("editor") === true;
    const isPreview = wf?.env?.("preview") === true;
    return isEditor ? "editor" : isPreview ? "preview" : "published";
  }
  var init_editorCheck = __esm({
    "src/utils/editorCheck.ts"() {
      "use strict";
      init_live_reload();
    }
  });

  // node_modules/gsap/Observer.js
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  var gsap2, _coreInitted2, _clamp3, _win3, _doc3, _docEl, _body, _isTouch, _pointerType, ScrollTrigger, _root, _normalizer, _eventTypes, _context2, _getGSAP, _startup, _observers, _scrollers, _proxies, _getTime, _bridge, _integrate, _getProxyProp, _isViewport, _addListener, _removeListener, _scrollLeft, _scrollTop, _onScroll, _scrollCacheFunc, _horizontal, _vertical, _getTarget, _getScrollFunc, _getVelocityProp, _getEvent, _getAbsoluteMax, _setScrollTrigger, _initCore3, Observer;
  var init_Observer = __esm({
    "node_modules/gsap/Observer.js"() {
      init_live_reload();
      _getGSAP = function _getGSAP2() {
        return gsap2 || typeof window !== "undefined" && (gsap2 = window.gsap) && gsap2.registerPlugin && gsap2;
      };
      _startup = 1;
      _observers = [];
      _scrollers = [];
      _proxies = [];
      _getTime = Date.now;
      _bridge = function _bridge2(name3, value) {
        return value;
      };
      _integrate = function _integrate2() {
        var core = ScrollTrigger.core, data = core.bridge || {}, scrollers = core._scrollers, proxies = core._proxies;
        scrollers.push.apply(scrollers, _scrollers);
        proxies.push.apply(proxies, _proxies);
        _scrollers = scrollers;
        _proxies = proxies;
        _bridge = function _bridge3(name3, value) {
          return data[name3](value);
        };
      };
      _getProxyProp = function _getProxyProp2(element, property) {
        return ~_proxies.indexOf(element) && _proxies[_proxies.indexOf(element) + 1][property];
      };
      _isViewport = function _isViewport2(el) {
        return !!~_root.indexOf(el);
      };
      _addListener = function _addListener2(element, type, func, nonPassive, capture) {
        return element.addEventListener(type, func, {
          passive: !nonPassive,
          capture: !!capture
        });
      };
      _removeListener = function _removeListener2(element, type, func, capture) {
        return element.removeEventListener(type, func, !!capture);
      };
      _scrollLeft = "scrollLeft";
      _scrollTop = "scrollTop";
      _onScroll = function _onScroll2() {
        return _normalizer && _normalizer.isPressed || _scrollers.cache++;
      };
      _scrollCacheFunc = function _scrollCacheFunc2(f, doNotCache) {
        var cachingFunc = function cachingFunc2(value) {
          if (value || value === 0) {
            _startup && (_win3.history.scrollRestoration = "manual");
            var isNormalizing = _normalizer && _normalizer.isPressed;
            value = cachingFunc2.v = Math.round(value) || (_normalizer && _normalizer.iOS ? 1 : 0);
            f(value);
            cachingFunc2.cacheID = _scrollers.cache;
            isNormalizing && _bridge("ss", value);
          } else if (doNotCache || _scrollers.cache !== cachingFunc2.cacheID || _bridge("ref")) {
            cachingFunc2.cacheID = _scrollers.cache;
            cachingFunc2.v = f();
          }
          return cachingFunc2.v + cachingFunc2.offset;
        };
        cachingFunc.offset = 0;
        return f && cachingFunc;
      };
      _horizontal = {
        s: _scrollLeft,
        p: "left",
        p2: "Left",
        os: "right",
        os2: "Right",
        d: "width",
        d2: "Width",
        a: "x",
        sc: _scrollCacheFunc(function(value) {
          return arguments.length ? _win3.scrollTo(value, _vertical.sc()) : _win3.pageXOffset || _doc3[_scrollLeft] || _docEl[_scrollLeft] || _body[_scrollLeft] || 0;
        })
      };
      _vertical = {
        s: _scrollTop,
        p: "top",
        p2: "Top",
        os: "bottom",
        os2: "Bottom",
        d: "height",
        d2: "Height",
        a: "y",
        op: _horizontal,
        sc: _scrollCacheFunc(function(value) {
          return arguments.length ? _win3.scrollTo(_horizontal.sc(), value) : _win3.pageYOffset || _doc3[_scrollTop] || _docEl[_scrollTop] || _body[_scrollTop] || 0;
        })
      };
      _getTarget = function _getTarget2(t) {
        return gsap2.utils.toArray(t)[0] || (typeof t === "string" && gsap2.config().nullTargetWarn !== false ? console.warn("Element not found:", t) : null);
      };
      _getScrollFunc = function _getScrollFunc2(element, _ref) {
        var s = _ref.s, sc = _ref.sc;
        _isViewport(element) && (element = _doc3.scrollingElement || _docEl);
        var i = _scrollers.indexOf(element), offset = sc === _vertical.sc ? 1 : 2;
        !~i && (i = _scrollers.push(element) - 1);
        _scrollers[i + offset] || element.addEventListener("scroll", _onScroll);
        var prev = _scrollers[i + offset], func = prev || (_scrollers[i + offset] = _scrollCacheFunc(_getProxyProp(element, s), true) || (_isViewport(element) ? sc : _scrollCacheFunc(function(value) {
          return arguments.length ? element[s] = value : element[s];
        })));
        func.target = element;
        prev || (func.smooth = gsap2.getProperty(element, "scrollBehavior") === "smooth");
        return func;
      };
      _getVelocityProp = function _getVelocityProp2(value, minTimeRefresh, useDelta) {
        var v1 = value, v2 = value, t1 = _getTime(), t2 = t1, min = minTimeRefresh || 50, dropToZeroTime = Math.max(500, min * 3), update = function update2(value2, force) {
          var t = _getTime();
          if (force || t - t1 > min) {
            v2 = v1;
            v1 = value2;
            t2 = t1;
            t1 = t;
          } else if (useDelta) {
            v1 += value2;
          } else {
            v1 = v2 + (value2 - v2) / (t - t2) * (t1 - t2);
          }
        }, reset = function reset2() {
          v2 = v1 = useDelta ? 0 : v1;
          t2 = t1 = 0;
        }, getVelocity = function getVelocity2(latestValue) {
          var tOld = t2, vOld = v2, t = _getTime();
          (latestValue || latestValue === 0) && latestValue !== v1 && update(latestValue);
          return t1 === t2 || t - t2 > dropToZeroTime ? 0 : (v1 + (useDelta ? vOld : -vOld)) / ((useDelta ? t : t1) - tOld) * 1e3;
        };
        return {
          update,
          reset,
          getVelocity
        };
      };
      _getEvent = function _getEvent2(e, preventDefault) {
        preventDefault && !e._gsapAllow && e.preventDefault();
        return e.changedTouches ? e.changedTouches[0] : e;
      };
      _getAbsoluteMax = function _getAbsoluteMax2(a) {
        var max = Math.max.apply(Math, a), min = Math.min.apply(Math, a);
        return Math.abs(max) >= Math.abs(min) ? max : min;
      };
      _setScrollTrigger = function _setScrollTrigger2() {
        ScrollTrigger = gsap2.core.globals().ScrollTrigger;
        ScrollTrigger && ScrollTrigger.core && _integrate();
      };
      _initCore3 = function _initCore4(core) {
        gsap2 = core || _getGSAP();
        if (gsap2 && typeof document !== "undefined" && document.body) {
          _win3 = window;
          _doc3 = document;
          _docEl = _doc3.documentElement;
          _body = _doc3.body;
          _root = [_win3, _doc3, _docEl, _body];
          _clamp3 = gsap2.utils.clamp;
          _context2 = gsap2.core.context || function() {
          };
          _pointerType = "onpointerenter" in _body ? "pointer" : "mouse";
          _isTouch = Observer.isTouch = _win3.matchMedia && _win3.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in _win3 || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0;
          _eventTypes = Observer.eventTypes = ("ontouchstart" in _docEl ? "touchstart,touchmove,touchcancel,touchend" : !("onpointerdown" in _docEl) ? "mousedown,mousemove,mouseup,mouseup" : "pointerdown,pointermove,pointercancel,pointerup").split(",");
          setTimeout(function() {
            return _startup = 0;
          }, 500);
          _setScrollTrigger();
          _coreInitted2 = 1;
        }
        return _coreInitted2;
      };
      _horizontal.op = _vertical;
      _scrollers.cache = 0;
      Observer = /* @__PURE__ */ function() {
        function Observer2(vars) {
          this.init(vars);
        }
        var _proto = Observer2.prototype;
        _proto.init = function init4(vars) {
          _coreInitted2 || _initCore3(gsap2) || console.warn("Please gsap.registerPlugin(Observer)");
          ScrollTrigger || _setScrollTrigger();
          var tolerance = vars.tolerance, dragMinimum = vars.dragMinimum, type = vars.type, target = vars.target, lineHeight = vars.lineHeight, debounce2 = vars.debounce, preventDefault = vars.preventDefault, onStop = vars.onStop, onStopDelay = vars.onStopDelay, ignore = vars.ignore, wheelSpeed = vars.wheelSpeed, event = vars.event, onDragStart = vars.onDragStart, onDragEnd = vars.onDragEnd, onDrag = vars.onDrag, onPress = vars.onPress, onRelease = vars.onRelease, onRight = vars.onRight, onLeft = vars.onLeft, onUp = vars.onUp, onDown = vars.onDown, onChangeX = vars.onChangeX, onChangeY = vars.onChangeY, onChange = vars.onChange, onToggleX = vars.onToggleX, onToggleY = vars.onToggleY, onHover = vars.onHover, onHoverEnd = vars.onHoverEnd, onMove = vars.onMove, ignoreCheck = vars.ignoreCheck, isNormalizer = vars.isNormalizer, onGestureStart = vars.onGestureStart, onGestureEnd = vars.onGestureEnd, onWheel = vars.onWheel, onEnable = vars.onEnable, onDisable = vars.onDisable, onClick = vars.onClick, scrollSpeed = vars.scrollSpeed, capture = vars.capture, allowClicks = vars.allowClicks, lockAxis = vars.lockAxis, onLockAxis = vars.onLockAxis;
          this.target = target = _getTarget(target) || _docEl;
          this.vars = vars;
          ignore && (ignore = gsap2.utils.toArray(ignore));
          tolerance = tolerance || 1e-9;
          dragMinimum = dragMinimum || 0;
          wheelSpeed = wheelSpeed || 1;
          scrollSpeed = scrollSpeed || 1;
          type = type || "wheel,touch,pointer";
          debounce2 = debounce2 !== false;
          lineHeight || (lineHeight = parseFloat(_win3.getComputedStyle(_body).lineHeight) || 22);
          var id, onStopDelayedCall, dragged, moved, wheeled, locked, axis, self2 = this, prevDeltaX = 0, prevDeltaY = 0, scrollFuncX = _getScrollFunc(target, _horizontal), scrollFuncY = _getScrollFunc(target, _vertical), scrollX = scrollFuncX(), scrollY = scrollFuncY(), limitToTouch = ~type.indexOf("touch") && !~type.indexOf("pointer") && _eventTypes[0] === "pointerdown", isViewport = _isViewport(target), ownerDoc = target.ownerDocument || _doc3, deltaX = [0, 0, 0], deltaY = [0, 0, 0], onClickTime = 0, clickCapture = function clickCapture2() {
            return onClickTime = _getTime();
          }, _ignoreCheck = function _ignoreCheck2(e, isPointerOrTouch) {
            return (self2.event = e) && ignore && ~ignore.indexOf(e.target) || isPointerOrTouch && limitToTouch && e.pointerType !== "touch" || ignoreCheck && ignoreCheck(e, isPointerOrTouch);
          }, onStopFunc = function onStopFunc2() {
            self2._vx.reset();
            self2._vy.reset();
            onStopDelayedCall.pause();
            onStop && onStop(self2);
          }, update = function update2() {
            var dx = self2.deltaX = _getAbsoluteMax(deltaX), dy = self2.deltaY = _getAbsoluteMax(deltaY), changedX = Math.abs(dx) >= tolerance, changedY = Math.abs(dy) >= tolerance;
            onChange && (changedX || changedY) && onChange(self2, dx, dy, deltaX, deltaY);
            if (changedX) {
              onRight && self2.deltaX > 0 && onRight(self2);
              onLeft && self2.deltaX < 0 && onLeft(self2);
              onChangeX && onChangeX(self2);
              onToggleX && self2.deltaX < 0 !== prevDeltaX < 0 && onToggleX(self2);
              prevDeltaX = self2.deltaX;
              deltaX[0] = deltaX[1] = deltaX[2] = 0;
            }
            if (changedY) {
              onDown && self2.deltaY > 0 && onDown(self2);
              onUp && self2.deltaY < 0 && onUp(self2);
              onChangeY && onChangeY(self2);
              onToggleY && self2.deltaY < 0 !== prevDeltaY < 0 && onToggleY(self2);
              prevDeltaY = self2.deltaY;
              deltaY[0] = deltaY[1] = deltaY[2] = 0;
            }
            if (moved || dragged) {
              onMove && onMove(self2);
              if (dragged) {
                onDrag(self2);
                dragged = false;
              }
              moved = false;
            }
            locked && !(locked = false) && onLockAxis && onLockAxis(self2);
            if (wheeled) {
              onWheel(self2);
              wheeled = false;
            }
            id = 0;
          }, onDelta = function onDelta2(x, y, index) {
            deltaX[index] += x;
            deltaY[index] += y;
            self2._vx.update(x);
            self2._vy.update(y);
            debounce2 ? id || (id = requestAnimationFrame(update)) : update();
          }, onTouchOrPointerDelta = function onTouchOrPointerDelta2(x, y) {
            if (lockAxis && !axis) {
              self2.axis = axis = Math.abs(x) > Math.abs(y) ? "x" : "y";
              locked = true;
            }
            if (axis !== "y") {
              deltaX[2] += x;
              self2._vx.update(x, true);
            }
            if (axis !== "x") {
              deltaY[2] += y;
              self2._vy.update(y, true);
            }
            debounce2 ? id || (id = requestAnimationFrame(update)) : update();
          }, _onDrag = function _onDrag2(e) {
            if (_ignoreCheck(e, 1)) {
              return;
            }
            e = _getEvent(e, preventDefault);
            var x = e.clientX, y = e.clientY, dx = x - self2.x, dy = y - self2.y, isDragging = self2.isDragging;
            self2.x = x;
            self2.y = y;
            if (isDragging || Math.abs(self2.startX - x) >= dragMinimum || Math.abs(self2.startY - y) >= dragMinimum) {
              onDrag && (dragged = true);
              isDragging || (self2.isDragging = true);
              onTouchOrPointerDelta(dx, dy);
              isDragging || onDragStart && onDragStart(self2);
            }
          }, _onPress = self2.onPress = function(e) {
            if (_ignoreCheck(e, 1)) {
              return;
            }
            self2.axis = axis = null;
            onStopDelayedCall.pause();
            self2.isPressed = true;
            e = _getEvent(e);
            prevDeltaX = prevDeltaY = 0;
            self2.startX = self2.x = e.clientX;
            self2.startY = self2.y = e.clientY;
            self2._vx.reset();
            self2._vy.reset();
            _addListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, preventDefault, true);
            self2.deltaX = self2.deltaY = 0;
            onPress && onPress(self2);
          }, _onRelease = function _onRelease2(e) {
            if (_ignoreCheck(e, 1)) {
              return;
            }
            _removeListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, true);
            var isTrackingDrag = !isNaN(self2.y - self2.startY), wasDragging = self2.isDragging && (Math.abs(self2.x - self2.startX) > 3 || Math.abs(self2.y - self2.startY) > 3), eventData = _getEvent(e);
            if (!wasDragging && isTrackingDrag) {
              self2._vx.reset();
              self2._vy.reset();
              if (preventDefault && allowClicks) {
                gsap2.delayedCall(0.08, function() {
                  if (_getTime() - onClickTime > 300 && !e.defaultPrevented) {
                    if (e.target.click) {
                      e.target.click();
                    } else if (ownerDoc.createEvent) {
                      var syntheticEvent = ownerDoc.createEvent("MouseEvents");
                      syntheticEvent.initMouseEvent("click", true, true, _win3, 1, eventData.screenX, eventData.screenY, eventData.clientX, eventData.clientY, false, false, false, false, 0, null);
                      e.target.dispatchEvent(syntheticEvent);
                    }
                  }
                });
              }
            }
            self2.isDragging = self2.isGesturing = self2.isPressed = false;
            onStop && !isNormalizer && onStopDelayedCall.restart(true);
            onDragEnd && wasDragging && onDragEnd(self2);
            onRelease && onRelease(self2, wasDragging);
          }, _onGestureStart = function _onGestureStart2(e) {
            return e.touches && e.touches.length > 1 && (self2.isGesturing = true) && onGestureStart(e, self2.isDragging);
          }, _onGestureEnd = function _onGestureEnd2() {
            return (self2.isGesturing = false) || onGestureEnd(self2);
          }, onScroll = function onScroll2(e) {
            if (_ignoreCheck(e)) {
              return;
            }
            var x = scrollFuncX(), y = scrollFuncY();
            onDelta((x - scrollX) * scrollSpeed, (y - scrollY) * scrollSpeed, 1);
            scrollX = x;
            scrollY = y;
            onStop && onStopDelayedCall.restart(true);
          }, _onWheel = function _onWheel2(e) {
            if (_ignoreCheck(e)) {
              return;
            }
            e = _getEvent(e, preventDefault);
            onWheel && (wheeled = true);
            var multiplier = (e.deltaMode === 1 ? lineHeight : e.deltaMode === 2 ? _win3.innerHeight : 1) * wheelSpeed;
            onDelta(e.deltaX * multiplier, e.deltaY * multiplier, 0);
            onStop && !isNormalizer && onStopDelayedCall.restart(true);
          }, _onMove = function _onMove2(e) {
            if (_ignoreCheck(e)) {
              return;
            }
            var x = e.clientX, y = e.clientY, dx = x - self2.x, dy = y - self2.y;
            self2.x = x;
            self2.y = y;
            moved = true;
            (dx || dy) && onTouchOrPointerDelta(dx, dy);
          }, _onHover = function _onHover2(e) {
            self2.event = e;
            onHover(self2);
          }, _onHoverEnd = function _onHoverEnd2(e) {
            self2.event = e;
            onHoverEnd(self2);
          }, _onClick = function _onClick2(e) {
            return _ignoreCheck(e) || _getEvent(e, preventDefault) && onClick(self2);
          };
          onStopDelayedCall = self2._dc = gsap2.delayedCall(onStopDelay || 0.25, onStopFunc).pause();
          self2.deltaX = self2.deltaY = 0;
          self2._vx = _getVelocityProp(0, 50, true);
          self2._vy = _getVelocityProp(0, 50, true);
          self2.scrollX = scrollFuncX;
          self2.scrollY = scrollFuncY;
          self2.isDragging = self2.isGesturing = self2.isPressed = false;
          _context2(this);
          self2.enable = function(e) {
            if (!self2.isEnabled) {
              _addListener(isViewport ? ownerDoc : target, "scroll", _onScroll);
              type.indexOf("scroll") >= 0 && _addListener(isViewport ? ownerDoc : target, "scroll", onScroll, preventDefault, capture);
              type.indexOf("wheel") >= 0 && _addListener(target, "wheel", _onWheel, preventDefault, capture);
              if (type.indexOf("touch") >= 0 && _isTouch || type.indexOf("pointer") >= 0) {
                _addListener(target, _eventTypes[0], _onPress, preventDefault, capture);
                _addListener(ownerDoc, _eventTypes[2], _onRelease);
                _addListener(ownerDoc, _eventTypes[3], _onRelease);
                allowClicks && _addListener(target, "click", clickCapture, false, true);
                onClick && _addListener(target, "click", _onClick);
                onGestureStart && _addListener(ownerDoc, "gesturestart", _onGestureStart);
                onGestureEnd && _addListener(ownerDoc, "gestureend", _onGestureEnd);
                onHover && _addListener(target, _pointerType + "enter", _onHover);
                onHoverEnd && _addListener(target, _pointerType + "leave", _onHoverEnd);
                onMove && _addListener(target, _pointerType + "move", _onMove);
              }
              self2.isEnabled = true;
              e && e.type && _onPress(e);
              onEnable && onEnable(self2);
            }
            return self2;
          };
          self2.disable = function() {
            if (self2.isEnabled) {
              _observers.filter(function(o) {
                return o !== self2 && _isViewport(o.target);
              }).length || _removeListener(isViewport ? ownerDoc : target, "scroll", _onScroll);
              if (self2.isPressed) {
                self2._vx.reset();
                self2._vy.reset();
                _removeListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, true);
              }
              _removeListener(isViewport ? ownerDoc : target, "scroll", onScroll, capture);
              _removeListener(target, "wheel", _onWheel, capture);
              _removeListener(target, _eventTypes[0], _onPress, capture);
              _removeListener(ownerDoc, _eventTypes[2], _onRelease);
              _removeListener(ownerDoc, _eventTypes[3], _onRelease);
              _removeListener(target, "click", clickCapture, true);
              _removeListener(target, "click", _onClick);
              _removeListener(ownerDoc, "gesturestart", _onGestureStart);
              _removeListener(ownerDoc, "gestureend", _onGestureEnd);
              _removeListener(target, _pointerType + "enter", _onHover);
              _removeListener(target, _pointerType + "leave", _onHoverEnd);
              _removeListener(target, _pointerType + "move", _onMove);
              self2.isEnabled = self2.isPressed = self2.isDragging = false;
              onDisable && onDisable(self2);
            }
          };
          self2.kill = self2.revert = function() {
            self2.disable();
            var i = _observers.indexOf(self2);
            i >= 0 && _observers.splice(i, 1);
            _normalizer === self2 && (_normalizer = 0);
          };
          _observers.push(self2);
          isNormalizer && _isViewport(target) && (_normalizer = self2);
          self2.enable(event);
        };
        _createClass(Observer2, [{
          key: "velocityX",
          get: function get2() {
            return this._vx.getVelocity();
          }
        }, {
          key: "velocityY",
          get: function get2() {
            return this._vy.getVelocity();
          }
        }]);
        return Observer2;
      }();
      Observer.version = "3.11.4";
      Observer.create = function(vars) {
        return new Observer(vars);
      };
      Observer.register = _initCore3;
      Observer.getAll = function() {
        return _observers.slice();
      };
      Observer.getById = function(id) {
        return _observers.filter(function(o) {
          return o.vars.id === id;
        })[0];
      };
      _getGSAP() && gsap2.registerPlugin(Observer);
    }
  });

  // node_modules/gsap/ScrollTrigger.js
  var gsap3, _coreInitted3, _win4, _doc4, _docEl2, _body2, _root2, _resizeDelay, _toArray, _clamp4, _time2, _syncInterval, _refreshing, _pointerIsDown, _transformProp2, _i, _prevWidth, _prevHeight, _autoRefresh, _sort, _suppressOverwrites2, _ignoreResize, _normalizer2, _ignoreMobileResize, _baseScreenHeight, _baseScreenWidth, _fixIOSBug, _context3, _scrollRestoration, _limitCallbacks, _startup2, _getTime2, _time1, _lastScrollTime, _enabled, _pointerDownHandler, _pointerUpHandler, _passThrough3, _round3, _windowExists5, _getGSAP3, _isViewport3, _getBoundsFunc, _getSizeFunc, _getOffsetsFunc, _maxScroll, _iterateAutoRefresh, _isString3, _isFunction3, _isNumber3, _isObject3, _endAnimation, _callback3, _abs, _left, _top, _right, _bottom, _width, _height, _Right, _Left, _Top, _Bottom, _padding, _margin, _Width, _Height, _px, _getComputedStyle, _makePositionable, _setDefaults3, _getBounds, _getSize, _getLabelRatioArray, _getClosestLabel, _snapDirectional, _getLabelAtDirection, _multiListener, _addListener3, _removeListener3, _wheelListener, _markerDefaults, _defaults2, _keywords, _offsetToPx, _createMarker, _positionMarker, _triggers, _ids, _rafID, _sync, _onScroll3, _setBaseDimensions, _onResize, _listeners2, _emptyArray2, _softRefresh, _dispatch3, _savedStyles, _revertRecorded, _revertAll, _clearScrollMemory, _refreshingAll, _refreshID, _queueRefreshID, _queueRefreshAll, _refreshAll, _lastScroll, _direction, _primary, _updateAll, _propNamesToCopy, _stateProps, _swapPinOut, _swapPinIn, _capsExp2, _setState, _getState, _copyState, _winOffsets, _parsePosition3, _prefixExp, _reparent, _getTweenCreator, ScrollTrigger2, _clampScrollAndGetDurationMultiplier, _allowNativePanning, _overflow, _nestedScroll, _inputObserver, _inputExp, _inputIsFocused, _captureInputs, _getScrollNormalizer;
  var init_ScrollTrigger = __esm({
    "node_modules/gsap/ScrollTrigger.js"() {
      init_live_reload();
      init_Observer();
      _startup2 = 1;
      _getTime2 = Date.now;
      _time1 = _getTime2();
      _lastScrollTime = 0;
      _enabled = 0;
      _pointerDownHandler = function _pointerDownHandler2() {
        return _pointerIsDown = 1;
      };
      _pointerUpHandler = function _pointerUpHandler2() {
        return _pointerIsDown = 0;
      };
      _passThrough3 = function _passThrough4(v) {
        return v;
      };
      _round3 = function _round4(value) {
        return Math.round(value * 1e5) / 1e5 || 0;
      };
      _windowExists5 = function _windowExists6() {
        return typeof window !== "undefined";
      };
      _getGSAP3 = function _getGSAP4() {
        return gsap3 || _windowExists5() && (gsap3 = window.gsap) && gsap3.registerPlugin && gsap3;
      };
      _isViewport3 = function _isViewport4(e) {
        return !!~_root2.indexOf(e);
      };
      _getBoundsFunc = function _getBoundsFunc2(element) {
        return _getProxyProp(element, "getBoundingClientRect") || (_isViewport3(element) ? function() {
          _winOffsets.width = _win4.innerWidth;
          _winOffsets.height = _win4.innerHeight;
          return _winOffsets;
        } : function() {
          return _getBounds(element);
        });
      };
      _getSizeFunc = function _getSizeFunc2(scroller, isViewport, _ref) {
        var d = _ref.d, d2 = _ref.d2, a = _ref.a;
        return (a = _getProxyProp(scroller, "getBoundingClientRect")) ? function() {
          return a()[d];
        } : function() {
          return (isViewport ? _win4["inner" + d2] : scroller["client" + d2]) || 0;
        };
      };
      _getOffsetsFunc = function _getOffsetsFunc2(element, isViewport) {
        return !isViewport || ~_proxies.indexOf(element) ? _getBoundsFunc(element) : function() {
          return _winOffsets;
        };
      };
      _maxScroll = function _maxScroll2(element, _ref2) {
        var s = _ref2.s, d2 = _ref2.d2, d = _ref2.d, a = _ref2.a;
        return (s = "scroll" + d2) && (a = _getProxyProp(element, s)) ? a() - _getBoundsFunc(element)()[d] : _isViewport3(element) ? (_docEl2[s] || _body2[s]) - (_win4["inner" + d2] || _docEl2["client" + d2] || _body2["client" + d2]) : element[s] - element["offset" + d2];
      };
      _iterateAutoRefresh = function _iterateAutoRefresh2(func, events) {
        for (var i = 0; i < _autoRefresh.length; i += 3) {
          (!events || ~events.indexOf(_autoRefresh[i + 1])) && func(_autoRefresh[i], _autoRefresh[i + 1], _autoRefresh[i + 2]);
        }
      };
      _isString3 = function _isString4(value) {
        return typeof value === "string";
      };
      _isFunction3 = function _isFunction4(value) {
        return typeof value === "function";
      };
      _isNumber3 = function _isNumber4(value) {
        return typeof value === "number";
      };
      _isObject3 = function _isObject4(value) {
        return typeof value === "object";
      };
      _endAnimation = function _endAnimation2(animation, reversed, pause) {
        return animation && animation.progress(reversed ? 0 : 1) && pause && animation.pause();
      };
      _callback3 = function _callback4(self2, func) {
        if (self2.enabled) {
          var result = func(self2);
          result && result.totalTime && (self2.callbackAnimation = result);
        }
      };
      _abs = Math.abs;
      _left = "left";
      _top = "top";
      _right = "right";
      _bottom = "bottom";
      _width = "width";
      _height = "height";
      _Right = "Right";
      _Left = "Left";
      _Top = "Top";
      _Bottom = "Bottom";
      _padding = "padding";
      _margin = "margin";
      _Width = "Width";
      _Height = "Height";
      _px = "px";
      _getComputedStyle = function _getComputedStyle2(element) {
        return _win4.getComputedStyle(element);
      };
      _makePositionable = function _makePositionable2(element) {
        var position = _getComputedStyle(element).position;
        element.style.position = position === "absolute" || position === "fixed" ? position : "relative";
      };
      _setDefaults3 = function _setDefaults4(obj, defaults2) {
        for (var p in defaults2) {
          p in obj || (obj[p] = defaults2[p]);
        }
        return obj;
      };
      _getBounds = function _getBounds2(element, withoutTransforms) {
        var tween = withoutTransforms && _getComputedStyle(element)[_transformProp2] !== "matrix(1, 0, 0, 1, 0, 0)" && gsap3.to(element, {
          x: 0,
          y: 0,
          xPercent: 0,
          yPercent: 0,
          rotation: 0,
          rotationX: 0,
          rotationY: 0,
          scale: 1,
          skewX: 0,
          skewY: 0
        }).progress(1), bounds = element.getBoundingClientRect();
        tween && tween.progress(0).kill();
        return bounds;
      };
      _getSize = function _getSize2(element, _ref3) {
        var d2 = _ref3.d2;
        return element["offset" + d2] || element["client" + d2] || 0;
      };
      _getLabelRatioArray = function _getLabelRatioArray2(timeline2) {
        var a = [], labels = timeline2.labels, duration = timeline2.duration(), p;
        for (p in labels) {
          a.push(labels[p] / duration);
        }
        return a;
      };
      _getClosestLabel = function _getClosestLabel2(animation) {
        return function(value) {
          return gsap3.utils.snap(_getLabelRatioArray(animation), value);
        };
      };
      _snapDirectional = function _snapDirectional2(snapIncrementOrArray) {
        var snap3 = gsap3.utils.snap(snapIncrementOrArray), a = Array.isArray(snapIncrementOrArray) && snapIncrementOrArray.slice(0).sort(function(a2, b) {
          return a2 - b;
        });
        return a ? function(value, direction, threshold) {
          if (threshold === void 0) {
            threshold = 1e-3;
          }
          var i;
          if (!direction) {
            return snap3(value);
          }
          if (direction > 0) {
            value -= threshold;
            for (i = 0; i < a.length; i++) {
              if (a[i] >= value) {
                return a[i];
              }
            }
            return a[i - 1];
          } else {
            i = a.length;
            value += threshold;
            while (i--) {
              if (a[i] <= value) {
                return a[i];
              }
            }
          }
          return a[0];
        } : function(value, direction, threshold) {
          if (threshold === void 0) {
            threshold = 1e-3;
          }
          var snapped = snap3(value);
          return !direction || Math.abs(snapped - value) < threshold || snapped - value < 0 === direction < 0 ? snapped : snap3(direction < 0 ? value - snapIncrementOrArray : value + snapIncrementOrArray);
        };
      };
      _getLabelAtDirection = function _getLabelAtDirection2(timeline2) {
        return function(value, st) {
          return _snapDirectional(_getLabelRatioArray(timeline2))(value, st.direction);
        };
      };
      _multiListener = function _multiListener2(func, element, types, callback) {
        return types.split(",").forEach(function(type) {
          return func(element, type, callback);
        });
      };
      _addListener3 = function _addListener4(element, type, func, nonPassive, capture) {
        return element.addEventListener(type, func, {
          passive: !nonPassive,
          capture: !!capture
        });
      };
      _removeListener3 = function _removeListener4(element, type, func, capture) {
        return element.removeEventListener(type, func, !!capture);
      };
      _wheelListener = function _wheelListener2(func, el, scrollFunc) {
        return scrollFunc && scrollFunc.wheelHandler && func(el, "wheel", scrollFunc);
      };
      _markerDefaults = {
        startColor: "green",
        endColor: "red",
        indent: 0,
        fontSize: "16px",
        fontWeight: "normal"
      };
      _defaults2 = {
        toggleActions: "play",
        anticipatePin: 0
      };
      _keywords = {
        top: 0,
        left: 0,
        center: 0.5,
        bottom: 1,
        right: 1
      };
      _offsetToPx = function _offsetToPx2(value, size) {
        if (_isString3(value)) {
          var eqIndex = value.indexOf("="), relative = ~eqIndex ? +(value.charAt(eqIndex - 1) + 1) * parseFloat(value.substr(eqIndex + 1)) : 0;
          if (~eqIndex) {
            value.indexOf("%") > eqIndex && (relative *= size / 100);
            value = value.substr(0, eqIndex - 1);
          }
          value = relative + (value in _keywords ? _keywords[value] * size : ~value.indexOf("%") ? parseFloat(value) * size / 100 : parseFloat(value) || 0);
        }
        return value;
      };
      _createMarker = function _createMarker2(type, name3, container, direction, _ref4, offset, matchWidthEl, containerAnimation) {
        var startColor = _ref4.startColor, endColor = _ref4.endColor, fontSize = _ref4.fontSize, indent = _ref4.indent, fontWeight = _ref4.fontWeight;
        var e = _doc4.createElement("div"), useFixedPosition = _isViewport3(container) || _getProxyProp(container, "pinType") === "fixed", isScroller = type.indexOf("scroller") !== -1, parent = useFixedPosition ? _body2 : container, isStart = type.indexOf("start") !== -1, color = isStart ? startColor : endColor, css = "border-color:" + color + ";font-size:" + fontSize + ";color:" + color + ";font-weight:" + fontWeight + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
        css += "position:" + ((isScroller || containerAnimation) && useFixedPosition ? "fixed;" : "absolute;");
        (isScroller || containerAnimation || !useFixedPosition) && (css += (direction === _vertical ? _right : _bottom) + ":" + (offset + parseFloat(indent)) + "px;");
        matchWidthEl && (css += "box-sizing:border-box;text-align:left;width:" + matchWidthEl.offsetWidth + "px;");
        e._isStart = isStart;
        e.setAttribute("class", "gsap-marker-" + type + (name3 ? " marker-" + name3 : ""));
        e.style.cssText = css;
        e.innerText = name3 || name3 === 0 ? type + "-" + name3 : type;
        parent.children[0] ? parent.insertBefore(e, parent.children[0]) : parent.appendChild(e);
        e._offset = e["offset" + direction.op.d2];
        _positionMarker(e, 0, direction, isStart);
        return e;
      };
      _positionMarker = function _positionMarker2(marker, start, direction, flipped) {
        var vars = {
          display: "block"
        }, side = direction[flipped ? "os2" : "p2"], oppositeSide = direction[flipped ? "p2" : "os2"];
        marker._isFlipped = flipped;
        vars[direction.a + "Percent"] = flipped ? -100 : 0;
        vars[direction.a] = flipped ? "1px" : 0;
        vars["border" + side + _Width] = 1;
        vars["border" + oppositeSide + _Width] = 0;
        vars[direction.p] = start + "px";
        gsap3.set(marker, vars);
      };
      _triggers = [];
      _ids = {};
      _sync = function _sync2() {
        return _getTime2() - _lastScrollTime > 34 && (_rafID || (_rafID = requestAnimationFrame(_updateAll)));
      };
      _onScroll3 = function _onScroll4() {
        if (!_normalizer2 || !_normalizer2.isPressed || _normalizer2.startX > _body2.clientWidth) {
          _scrollers.cache++;
          if (_normalizer2) {
            _rafID || (_rafID = requestAnimationFrame(_updateAll));
          } else {
            _updateAll();
          }
          _lastScrollTime || _dispatch3("scrollStart");
          _lastScrollTime = _getTime2();
        }
      };
      _setBaseDimensions = function _setBaseDimensions2() {
        _baseScreenWidth = _win4.innerWidth;
        _baseScreenHeight = _win4.innerHeight;
      };
      _onResize = function _onResize2() {
        _scrollers.cache++;
        !_refreshing && !_ignoreResize && !_doc4.fullscreenElement && !_doc4.webkitFullscreenElement && (!_ignoreMobileResize || _baseScreenWidth !== _win4.innerWidth || Math.abs(_win4.innerHeight - _baseScreenHeight) > _win4.innerHeight * 0.25) && _resizeDelay.restart(true);
      };
      _listeners2 = {};
      _emptyArray2 = [];
      _softRefresh = function _softRefresh2() {
        return _removeListener3(ScrollTrigger2, "scrollEnd", _softRefresh2) || _refreshAll(true);
      };
      _dispatch3 = function _dispatch4(type) {
        return _listeners2[type] && _listeners2[type].map(function(f) {
          return f();
        }) || _emptyArray2;
      };
      _savedStyles = [];
      _revertRecorded = function _revertRecorded2(media) {
        for (var i = 0; i < _savedStyles.length; i += 5) {
          if (!media || _savedStyles[i + 4] && _savedStyles[i + 4].query === media) {
            _savedStyles[i].style.cssText = _savedStyles[i + 1];
            _savedStyles[i].getBBox && _savedStyles[i].setAttribute("transform", _savedStyles[i + 2] || "");
            _savedStyles[i + 3].uncache = 1;
          }
        }
      };
      _revertAll = function _revertAll2(kill, media) {
        var trigger;
        for (_i = 0; _i < _triggers.length; _i++) {
          trigger = _triggers[_i];
          if (trigger && (!media || trigger._ctx === media)) {
            if (kill) {
              trigger.kill(1);
            } else {
              trigger.revert(true, true);
            }
          }
        }
        media && _revertRecorded(media);
        media || _dispatch3("revert");
      };
      _clearScrollMemory = function _clearScrollMemory2(scrollRestoration, force) {
        _scrollers.cache++;
        (force || !_refreshingAll) && _scrollers.forEach(function(obj) {
          return _isFunction3(obj) && obj.cacheID++ && (obj.rec = 0);
        });
        _isString3(scrollRestoration) && (_win4.history.scrollRestoration = _scrollRestoration = scrollRestoration);
      };
      _refreshID = 0;
      _queueRefreshAll = function _queueRefreshAll2() {
        if (_queueRefreshID !== _refreshID) {
          var id = _queueRefreshID = _refreshID;
          requestAnimationFrame(function() {
            return id === _refreshID && _refreshAll(true);
          });
        }
      };
      _refreshAll = function _refreshAll2(force, skipRevert) {
        if (_lastScrollTime && !force) {
          _addListener3(ScrollTrigger2, "scrollEnd", _softRefresh);
          return;
        }
        _refreshingAll = ScrollTrigger2.isRefreshing = true;
        _scrollers.forEach(function(obj) {
          return _isFunction3(obj) && obj.cacheID++ && (obj.rec = obj());
        });
        var refreshInits = _dispatch3("refreshInit");
        _sort && ScrollTrigger2.sort();
        skipRevert || _revertAll();
        _scrollers.forEach(function(obj) {
          if (_isFunction3(obj)) {
            obj.smooth && (obj.target.style.scrollBehavior = "auto");
            obj(0);
          }
        });
        _triggers.slice(0).forEach(function(t) {
          return t.refresh();
        });
        _triggers.forEach(function(t, i) {
          if (t._subPinOffset && t.pin) {
            var prop = t.vars.horizontal ? "offsetWidth" : "offsetHeight", original = t.pin[prop];
            t.revert(true, 1);
            t.adjustPinSpacing(t.pin[prop] - original);
            t.revert(false, 1);
          }
        });
        _triggers.forEach(function(t) {
          return t.vars.end === "max" && t.setPositions(t.start, Math.max(t.start + 1, _maxScroll(t.scroller, t._dir)));
        });
        refreshInits.forEach(function(result) {
          return result && result.render && result.render(-1);
        });
        _scrollers.forEach(function(obj) {
          if (_isFunction3(obj)) {
            obj.smooth && requestAnimationFrame(function() {
              return obj.target.style.scrollBehavior = "smooth";
            });
            obj.rec && obj(obj.rec);
          }
        });
        _clearScrollMemory(_scrollRestoration, 1);
        _resizeDelay.pause();
        _refreshID++;
        _updateAll(2);
        _triggers.forEach(function(t) {
          return _isFunction3(t.vars.onRefresh) && t.vars.onRefresh(t);
        });
        _refreshingAll = ScrollTrigger2.isRefreshing = false;
        _dispatch3("refresh");
      };
      _lastScroll = 0;
      _direction = 1;
      _updateAll = function _updateAll2(force) {
        if (!_refreshingAll || force === 2) {
          ScrollTrigger2.isUpdating = true;
          _primary && _primary.update(0);
          var l = _triggers.length, time = _getTime2(), recordVelocity = time - _time1 >= 50, scroll = l && _triggers[0].scroll();
          _direction = _lastScroll > scroll ? -1 : 1;
          _lastScroll = scroll;
          if (recordVelocity) {
            if (_lastScrollTime && !_pointerIsDown && time - _lastScrollTime > 200) {
              _lastScrollTime = 0;
              _dispatch3("scrollEnd");
            }
            _time2 = _time1;
            _time1 = time;
          }
          if (_direction < 0) {
            _i = l;
            while (_i-- > 0) {
              _triggers[_i] && _triggers[_i].update(0, recordVelocity);
            }
            _direction = 1;
          } else {
            for (_i = 0; _i < l; _i++) {
              _triggers[_i] && _triggers[_i].update(0, recordVelocity);
            }
          }
          ScrollTrigger2.isUpdating = false;
        }
        _rafID = 0;
      };
      _propNamesToCopy = [_left, _top, _bottom, _right, _margin + _Bottom, _margin + _Right, _margin + _Top, _margin + _Left, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"];
      _stateProps = _propNamesToCopy.concat([_width, _height, "boxSizing", "max" + _Width, "max" + _Height, "position", _margin, _padding, _padding + _Top, _padding + _Right, _padding + _Bottom, _padding + _Left]);
      _swapPinOut = function _swapPinOut2(pin, spacer, state) {
        _setState(state);
        var cache = pin._gsap;
        if (cache.spacerIsNative) {
          _setState(cache.spacerState);
        } else if (pin._gsap.swappedIn) {
          var parent = spacer.parentNode;
          if (parent) {
            parent.insertBefore(pin, spacer);
            parent.removeChild(spacer);
          }
        }
        pin._gsap.swappedIn = false;
      };
      _swapPinIn = function _swapPinIn2(pin, spacer, cs, spacerState) {
        if (!pin._gsap.swappedIn) {
          var i = _propNamesToCopy.length, spacerStyle = spacer.style, pinStyle = pin.style, p;
          while (i--) {
            p = _propNamesToCopy[i];
            spacerStyle[p] = cs[p];
          }
          spacerStyle.position = cs.position === "absolute" ? "absolute" : "relative";
          cs.display === "inline" && (spacerStyle.display = "inline-block");
          pinStyle[_bottom] = pinStyle[_right] = "auto";
          spacerStyle.flexBasis = cs.flexBasis || "auto";
          spacerStyle.overflow = "visible";
          spacerStyle.boxSizing = "border-box";
          spacerStyle[_width] = _getSize(pin, _horizontal) + _px;
          spacerStyle[_height] = _getSize(pin, _vertical) + _px;
          spacerStyle[_padding] = pinStyle[_margin] = pinStyle[_top] = pinStyle[_left] = "0";
          _setState(spacerState);
          pinStyle[_width] = pinStyle["max" + _Width] = cs[_width];
          pinStyle[_height] = pinStyle["max" + _Height] = cs[_height];
          pinStyle[_padding] = cs[_padding];
          if (pin.parentNode !== spacer) {
            pin.parentNode.insertBefore(spacer, pin);
            spacer.appendChild(pin);
          }
          pin._gsap.swappedIn = true;
        }
      };
      _capsExp2 = /([A-Z])/g;
      _setState = function _setState2(state) {
        if (state) {
          var style = state.t.style, l = state.length, i = 0, p, value;
          (state.t._gsap || gsap3.core.getCache(state.t)).uncache = 1;
          for (; i < l; i += 2) {
            value = state[i + 1];
            p = state[i];
            if (value) {
              style[p] = value;
            } else if (style[p]) {
              style.removeProperty(p.replace(_capsExp2, "-$1").toLowerCase());
            }
          }
        }
      };
      _getState = function _getState2(element) {
        var l = _stateProps.length, style = element.style, state = [], i = 0;
        for (; i < l; i++) {
          state.push(_stateProps[i], style[_stateProps[i]]);
        }
        state.t = element;
        return state;
      };
      _copyState = function _copyState2(state, override, omitOffsets) {
        var result = [], l = state.length, i = omitOffsets ? 8 : 0, p;
        for (; i < l; i += 2) {
          p = state[i];
          result.push(p, p in override ? override[p] : state[i + 1]);
        }
        result.t = state.t;
        return result;
      };
      _winOffsets = {
        left: 0,
        top: 0
      };
      _parsePosition3 = function _parsePosition4(value, trigger, scrollerSize, direction, scroll, marker, markerScroller, self2, scrollerBounds, borderWidth, useFixedPosition, scrollerMax, containerAnimation) {
        _isFunction3(value) && (value = value(self2));
        if (_isString3(value) && value.substr(0, 3) === "max") {
          value = scrollerMax + (value.charAt(4) === "=" ? _offsetToPx("0" + value.substr(3), scrollerSize) : 0);
        }
        var time = containerAnimation ? containerAnimation.time() : 0, p1, p2, element;
        containerAnimation && containerAnimation.seek(0);
        if (!_isNumber3(value)) {
          _isFunction3(trigger) && (trigger = trigger(self2));
          var offsets = (value || "0").split(" "), bounds, localOffset, globalOffset, display;
          element = _getTarget(trigger) || _body2;
          bounds = _getBounds(element) || {};
          if ((!bounds || !bounds.left && !bounds.top) && _getComputedStyle(element).display === "none") {
            display = element.style.display;
            element.style.display = "block";
            bounds = _getBounds(element);
            display ? element.style.display = display : element.style.removeProperty("display");
          }
          localOffset = _offsetToPx(offsets[0], bounds[direction.d]);
          globalOffset = _offsetToPx(offsets[1] || "0", scrollerSize);
          value = bounds[direction.p] - scrollerBounds[direction.p] - borderWidth + localOffset + scroll - globalOffset;
          markerScroller && _positionMarker(markerScroller, globalOffset, direction, scrollerSize - globalOffset < 20 || markerScroller._isStart && globalOffset > 20);
          scrollerSize -= scrollerSize - globalOffset;
        } else if (markerScroller) {
          _positionMarker(markerScroller, scrollerSize, direction, true);
        }
        if (marker) {
          var position = value + scrollerSize, isStart = marker._isStart;
          p1 = "scroll" + direction.d2;
          _positionMarker(marker, position, direction, isStart && position > 20 || !isStart && (useFixedPosition ? Math.max(_body2[p1], _docEl2[p1]) : marker.parentNode[p1]) <= position + 1);
          if (useFixedPosition) {
            scrollerBounds = _getBounds(markerScroller);
            useFixedPosition && (marker.style[direction.op.p] = scrollerBounds[direction.op.p] - direction.op.m - marker._offset + _px);
          }
        }
        if (containerAnimation && element) {
          p1 = _getBounds(element);
          containerAnimation.seek(scrollerMax);
          p2 = _getBounds(element);
          containerAnimation._caScrollDist = p1[direction.p] - p2[direction.p];
          value = value / containerAnimation._caScrollDist * scrollerMax;
        }
        containerAnimation && containerAnimation.seek(time);
        return containerAnimation ? value : Math.round(value);
      };
      _prefixExp = /(webkit|moz|length|cssText|inset)/i;
      _reparent = function _reparent2(element, parent, top, left) {
        if (element.parentNode !== parent) {
          var style = element.style, p, cs;
          if (parent === _body2) {
            element._stOrig = style.cssText;
            cs = _getComputedStyle(element);
            for (p in cs) {
              if (!+p && !_prefixExp.test(p) && cs[p] && typeof style[p] === "string" && p !== "0") {
                style[p] = cs[p];
              }
            }
            style.top = top;
            style.left = left;
          } else {
            style.cssText = element._stOrig;
          }
          gsap3.core.getCache(element).uncache = 1;
          parent.appendChild(element);
        }
      };
      _getTweenCreator = function _getTweenCreator2(scroller, direction) {
        var getScroll = _getScrollFunc(scroller, direction), prop = "_scroll" + direction.p2, lastScroll1, lastScroll2, getTween = function getTween2(scrollTo, vars, initialValue, change1, change2) {
          var tween = getTween2.tween, onComplete = vars.onComplete, modifiers = {};
          initialValue = initialValue || getScroll();
          change2 = change1 && change2 || 0;
          change1 = change1 || scrollTo - initialValue;
          tween && tween.kill();
          lastScroll1 = Math.round(initialValue);
          vars[prop] = scrollTo;
          vars.modifiers = modifiers;
          modifiers[prop] = function(value) {
            value = Math.round(getScroll());
            if (value !== lastScroll1 && value !== lastScroll2 && Math.abs(value - lastScroll1) > 3 && Math.abs(value - lastScroll2) > 3) {
              tween.kill();
              getTween2.tween = 0;
            } else {
              value = initialValue + change1 * tween.ratio + change2 * tween.ratio * tween.ratio;
            }
            lastScroll2 = lastScroll1;
            return lastScroll1 = Math.round(value);
          };
          vars.onUpdate = function() {
            _scrollers.cache++;
            _updateAll();
          };
          vars.onComplete = function() {
            getTween2.tween = 0;
            onComplete && onComplete.call(tween);
          };
          tween = getTween2.tween = gsap3.to(scroller, vars);
          return tween;
        };
        scroller[prop] = getScroll;
        getScroll.wheelHandler = function() {
          return getTween.tween && getTween.tween.kill() && (getTween.tween = 0);
        };
        _addListener3(scroller, "wheel", getScroll.wheelHandler);
        return getTween;
      };
      ScrollTrigger2 = /* @__PURE__ */ function() {
        function ScrollTrigger3(vars, animation) {
          _coreInitted3 || ScrollTrigger3.register(gsap3) || console.warn("Please gsap.registerPlugin(ScrollTrigger)");
          this.init(vars, animation);
        }
        var _proto = ScrollTrigger3.prototype;
        _proto.init = function init4(vars, animation) {
          this.progress = this.start = 0;
          this.vars && this.kill(true, true);
          if (!_enabled) {
            this.update = this.refresh = this.kill = _passThrough3;
            return;
          }
          vars = _setDefaults3(_isString3(vars) || _isNumber3(vars) || vars.nodeType ? {
            trigger: vars
          } : vars, _defaults2);
          var _vars = vars, onUpdate = _vars.onUpdate, toggleClass = _vars.toggleClass, id = _vars.id, onToggle = _vars.onToggle, onRefresh = _vars.onRefresh, scrub = _vars.scrub, trigger = _vars.trigger, pin = _vars.pin, pinSpacing = _vars.pinSpacing, invalidateOnRefresh = _vars.invalidateOnRefresh, anticipatePin = _vars.anticipatePin, onScrubComplete = _vars.onScrubComplete, onSnapComplete = _vars.onSnapComplete, once = _vars.once, snap3 = _vars.snap, pinReparent = _vars.pinReparent, pinSpacer = _vars.pinSpacer, containerAnimation = _vars.containerAnimation, fastScrollEnd = _vars.fastScrollEnd, preventOverlaps = _vars.preventOverlaps, direction = vars.horizontal || vars.containerAnimation && vars.horizontal !== false ? _horizontal : _vertical, isToggle = !scrub && scrub !== 0, scroller = _getTarget(vars.scroller || _win4), scrollerCache = gsap3.core.getCache(scroller), isViewport = _isViewport3(scroller), useFixedPosition = ("pinType" in vars ? vars.pinType : _getProxyProp(scroller, "pinType") || isViewport && "fixed") === "fixed", callbacks = [vars.onEnter, vars.onLeave, vars.onEnterBack, vars.onLeaveBack], toggleActions = isToggle && vars.toggleActions.split(" "), markers = "markers" in vars ? vars.markers : _defaults2.markers, borderWidth = isViewport ? 0 : parseFloat(_getComputedStyle(scroller)["border" + direction.p2 + _Width]) || 0, self2 = this, onRefreshInit = vars.onRefreshInit && function() {
            return vars.onRefreshInit(self2);
          }, getScrollerSize = _getSizeFunc(scroller, isViewport, direction), getScrollerOffsets = _getOffsetsFunc(scroller, isViewport), lastSnap = 0, lastRefresh = 0, scrollFunc = _getScrollFunc(scroller, direction), tweenTo, pinCache, snapFunc, scroll1, scroll2, start, end, markerStart, markerEnd, markerStartTrigger, markerEndTrigger, markerVars, change, pinOriginalState, pinActiveState, pinState, spacer, offset, pinGetter, pinSetter, pinStart, pinChange, spacingStart, spacerState, markerStartSetter, pinMoves, markerEndSetter, cs, snap1, snap22, scrubTween, scrubSmooth, snapDurClamp, snapDelayedCall, prevProgress, prevScroll, prevAnimProgress, caMarkerSetter, customRevertReturn;
          _context3(self2);
          self2._dir = direction;
          anticipatePin *= 45;
          self2.scroller = scroller;
          self2.scroll = containerAnimation ? containerAnimation.time.bind(containerAnimation) : scrollFunc;
          scroll1 = scrollFunc();
          self2.vars = vars;
          animation = animation || vars.animation;
          if ("refreshPriority" in vars) {
            _sort = 1;
            vars.refreshPriority === -9999 && (_primary = self2);
          }
          scrollerCache.tweenScroll = scrollerCache.tweenScroll || {
            top: _getTweenCreator(scroller, _vertical),
            left: _getTweenCreator(scroller, _horizontal)
          };
          self2.tweenTo = tweenTo = scrollerCache.tweenScroll[direction.p];
          self2.scrubDuration = function(value) {
            scrubSmooth = _isNumber3(value) && value;
            if (!scrubSmooth) {
              scrubTween && scrubTween.progress(1).kill();
              scrubTween = 0;
            } else {
              scrubTween ? scrubTween.duration(value) : scrubTween = gsap3.to(animation, {
                ease: "expo",
                totalProgress: "+=0.001",
                duration: scrubSmooth,
                paused: true,
                onComplete: function onComplete() {
                  return onScrubComplete && onScrubComplete(self2);
                }
              });
            }
          };
          if (animation) {
            animation.vars.lazy = false;
            animation._initted || animation.vars.immediateRender !== false && vars.immediateRender !== false && animation.duration() && animation.render(0, true, true);
            self2.animation = animation.pause();
            animation.scrollTrigger = self2;
            self2.scrubDuration(scrub);
            snap1 = 0;
            id || (id = animation.vars.id);
          }
          _triggers.push(self2);
          if (snap3) {
            if (!_isObject3(snap3) || snap3.push) {
              snap3 = {
                snapTo: snap3
              };
            }
            "scrollBehavior" in _body2.style && gsap3.set(isViewport ? [_body2, _docEl2] : scroller, {
              scrollBehavior: "auto"
            });
            _scrollers.forEach(function(o) {
              return _isFunction3(o) && o.target === (isViewport ? _doc4.scrollingElement || _docEl2 : scroller) && (o.smooth = false);
            });
            snapFunc = _isFunction3(snap3.snapTo) ? snap3.snapTo : snap3.snapTo === "labels" ? _getClosestLabel(animation) : snap3.snapTo === "labelsDirectional" ? _getLabelAtDirection(animation) : snap3.directional !== false ? function(value, st) {
              return _snapDirectional(snap3.snapTo)(value, _getTime2() - lastRefresh < 500 ? 0 : st.direction);
            } : gsap3.utils.snap(snap3.snapTo);
            snapDurClamp = snap3.duration || {
              min: 0.1,
              max: 2
            };
            snapDurClamp = _isObject3(snapDurClamp) ? _clamp4(snapDurClamp.min, snapDurClamp.max) : _clamp4(snapDurClamp, snapDurClamp);
            snapDelayedCall = gsap3.delayedCall(snap3.delay || scrubSmooth / 2 || 0.1, function() {
              var scroll = scrollFunc(), refreshedRecently = _getTime2() - lastRefresh < 500, tween = tweenTo.tween;
              if ((refreshedRecently || Math.abs(self2.getVelocity()) < 10) && !tween && !_pointerIsDown && lastSnap !== scroll) {
                var progress = (scroll - start) / change, totalProgress = animation && !isToggle ? animation.totalProgress() : progress, velocity = refreshedRecently ? 0 : (totalProgress - snap22) / (_getTime2() - _time2) * 1e3 || 0, change1 = gsap3.utils.clamp(-progress, 1 - progress, _abs(velocity / 2) * velocity / 0.185), naturalEnd = progress + (snap3.inertia === false ? 0 : change1), endValue = _clamp4(0, 1, snapFunc(naturalEnd, self2)), endScroll = Math.round(start + endValue * change), _snap = snap3, onStart = _snap.onStart, _onInterrupt = _snap.onInterrupt, _onComplete = _snap.onComplete;
                if (scroll <= end && scroll >= start && endScroll !== scroll) {
                  if (tween && !tween._initted && tween.data <= _abs(endScroll - scroll)) {
                    return;
                  }
                  if (snap3.inertia === false) {
                    change1 = endValue - progress;
                  }
                  tweenTo(endScroll, {
                    duration: snapDurClamp(_abs(Math.max(_abs(naturalEnd - totalProgress), _abs(endValue - totalProgress)) * 0.185 / velocity / 0.05 || 0)),
                    ease: snap3.ease || "power3",
                    data: _abs(endScroll - scroll),
                    // record the distance so that if another snap tween occurs (conflict) we can prioritize the closest snap.
                    onInterrupt: function onInterrupt() {
                      return snapDelayedCall.restart(true) && _onInterrupt && _onInterrupt(self2);
                    },
                    onComplete: function onComplete() {
                      self2.update();
                      lastSnap = scrollFunc();
                      snap1 = snap22 = animation && !isToggle ? animation.totalProgress() : self2.progress;
                      onSnapComplete && onSnapComplete(self2);
                      _onComplete && _onComplete(self2);
                    }
                  }, scroll, change1 * change, endScroll - scroll - change1 * change);
                  onStart && onStart(self2, tweenTo.tween);
                }
              } else if (self2.isActive && lastSnap !== scroll) {
                snapDelayedCall.restart(true);
              }
            }).pause();
          }
          id && (_ids[id] = self2);
          trigger = self2.trigger = _getTarget(trigger || pin);
          customRevertReturn = trigger && trigger._gsap && trigger._gsap.stRevert;
          customRevertReturn && (customRevertReturn = customRevertReturn(self2));
          pin = pin === true ? trigger : _getTarget(pin);
          _isString3(toggleClass) && (toggleClass = {
            targets: trigger,
            className: toggleClass
          });
          if (pin) {
            pinSpacing === false || pinSpacing === _margin || (pinSpacing = !pinSpacing && pin.parentNode && pin.parentNode.style && _getComputedStyle(pin.parentNode).display === "flex" ? false : _padding);
            self2.pin = pin;
            pinCache = gsap3.core.getCache(pin);
            if (!pinCache.spacer) {
              if (pinSpacer) {
                pinSpacer = _getTarget(pinSpacer);
                pinSpacer && !pinSpacer.nodeType && (pinSpacer = pinSpacer.current || pinSpacer.nativeElement);
                pinCache.spacerIsNative = !!pinSpacer;
                pinSpacer && (pinCache.spacerState = _getState(pinSpacer));
              }
              pinCache.spacer = spacer = pinSpacer || _doc4.createElement("div");
              spacer.classList.add("pin-spacer");
              id && spacer.classList.add("pin-spacer-" + id);
              pinCache.pinState = pinOriginalState = _getState(pin);
            } else {
              pinOriginalState = pinCache.pinState;
            }
            vars.force3D !== false && gsap3.set(pin, {
              force3D: true
            });
            self2.spacer = spacer = pinCache.spacer;
            cs = _getComputedStyle(pin);
            spacingStart = cs[pinSpacing + direction.os2];
            pinGetter = gsap3.getProperty(pin);
            pinSetter = gsap3.quickSetter(pin, direction.a, _px);
            _swapPinIn(pin, spacer, cs);
            pinState = _getState(pin);
          }
          if (markers) {
            markerVars = _isObject3(markers) ? _setDefaults3(markers, _markerDefaults) : _markerDefaults;
            markerStartTrigger = _createMarker("scroller-start", id, scroller, direction, markerVars, 0);
            markerEndTrigger = _createMarker("scroller-end", id, scroller, direction, markerVars, 0, markerStartTrigger);
            offset = markerStartTrigger["offset" + direction.op.d2];
            var content = _getTarget(_getProxyProp(scroller, "content") || scroller);
            markerStart = this.markerStart = _createMarker("start", id, content, direction, markerVars, offset, 0, containerAnimation);
            markerEnd = this.markerEnd = _createMarker("end", id, content, direction, markerVars, offset, 0, containerAnimation);
            containerAnimation && (caMarkerSetter = gsap3.quickSetter([markerStart, markerEnd], direction.a, _px));
            if (!useFixedPosition && !(_proxies.length && _getProxyProp(scroller, "fixedMarkers") === true)) {
              _makePositionable(isViewport ? _body2 : scroller);
              gsap3.set([markerStartTrigger, markerEndTrigger], {
                force3D: true
              });
              markerStartSetter = gsap3.quickSetter(markerStartTrigger, direction.a, _px);
              markerEndSetter = gsap3.quickSetter(markerEndTrigger, direction.a, _px);
            }
          }
          if (containerAnimation) {
            var oldOnUpdate = containerAnimation.vars.onUpdate, oldParams = containerAnimation.vars.onUpdateParams;
            containerAnimation.eventCallback("onUpdate", function() {
              self2.update(0, 0, 1);
              oldOnUpdate && oldOnUpdate.apply(oldParams || []);
            });
          }
          self2.previous = function() {
            return _triggers[_triggers.indexOf(self2) - 1];
          };
          self2.next = function() {
            return _triggers[_triggers.indexOf(self2) + 1];
          };
          self2.revert = function(revert, temp) {
            if (!temp) {
              return self2.kill(true);
            }
            var r = revert !== false || !self2.enabled, prevRefreshing = _refreshing;
            if (r !== self2.isReverted) {
              if (r) {
                prevScroll = Math.max(scrollFunc(), self2.scroll.rec || 0);
                prevProgress = self2.progress;
                prevAnimProgress = animation && animation.progress();
              }
              markerStart && [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function(m) {
                return m.style.display = r ? "none" : "block";
              });
              if (r) {
                _refreshing = 1;
                self2.update(r);
              }
              if (pin && (!pinReparent || !self2.isActive)) {
                if (r) {
                  _swapPinOut(pin, spacer, pinOriginalState);
                } else {
                  _swapPinIn(pin, spacer, _getComputedStyle(pin), spacerState);
                }
              }
              r || self2.update(r);
              _refreshing = prevRefreshing;
              self2.isReverted = r;
            }
          };
          self2.refresh = function(soft, force) {
            if ((_refreshing || !self2.enabled) && !force) {
              return;
            }
            if (pin && soft && _lastScrollTime) {
              _addListener3(ScrollTrigger3, "scrollEnd", _softRefresh);
              return;
            }
            !_refreshingAll && onRefreshInit && onRefreshInit(self2);
            _refreshing = 1;
            lastRefresh = _getTime2();
            if (tweenTo.tween) {
              tweenTo.tween.kill();
              tweenTo.tween = 0;
            }
            scrubTween && scrubTween.pause();
            invalidateOnRefresh && animation && animation.revert({
              kill: false
            }).invalidate();
            self2.isReverted || self2.revert(true, true);
            self2._subPinOffset = false;
            var size = getScrollerSize(), scrollerBounds = getScrollerOffsets(), max = containerAnimation ? containerAnimation.duration() : _maxScroll(scroller, direction), offset2 = 0, otherPinOffset = 0, parsedEnd = vars.end, parsedEndTrigger = vars.endTrigger || trigger, parsedStart = vars.start || (vars.start === 0 || !trigger ? 0 : pin ? "0 0" : "0 100%"), pinnedContainer = self2.pinnedContainer = vars.pinnedContainer && _getTarget(vars.pinnedContainer), triggerIndex = trigger && Math.max(0, _triggers.indexOf(self2)) || 0, i = triggerIndex, cs2, bounds, scroll, isVertical, override, curTrigger, curPin, oppositeScroll, initted, revertedPins, forcedOverflow;
            while (i--) {
              curTrigger = _triggers[i];
              curTrigger.end || curTrigger.refresh(0, 1) || (_refreshing = 1);
              curPin = curTrigger.pin;
              if (curPin && (curPin === trigger || curPin === pin) && !curTrigger.isReverted) {
                revertedPins || (revertedPins = []);
                revertedPins.unshift(curTrigger);
                curTrigger.revert(true, true);
              }
              if (curTrigger !== _triggers[i]) {
                triggerIndex--;
                i--;
              }
            }
            _isFunction3(parsedStart) && (parsedStart = parsedStart(self2));
            start = _parsePosition3(parsedStart, trigger, size, direction, scrollFunc(), markerStart, markerStartTrigger, self2, scrollerBounds, borderWidth, useFixedPosition, max, containerAnimation) || (pin ? -1e-3 : 0);
            _isFunction3(parsedEnd) && (parsedEnd = parsedEnd(self2));
            if (_isString3(parsedEnd) && !parsedEnd.indexOf("+=")) {
              if (~parsedEnd.indexOf(" ")) {
                parsedEnd = (_isString3(parsedStart) ? parsedStart.split(" ")[0] : "") + parsedEnd;
              } else {
                offset2 = _offsetToPx(parsedEnd.substr(2), size);
                parsedEnd = _isString3(parsedStart) ? parsedStart : start + offset2;
                parsedEndTrigger = trigger;
              }
            }
            end = Math.max(start, _parsePosition3(parsedEnd || (parsedEndTrigger ? "100% 0" : max), parsedEndTrigger, size, direction, scrollFunc() + offset2, markerEnd, markerEndTrigger, self2, scrollerBounds, borderWidth, useFixedPosition, max, containerAnimation)) || -1e-3;
            change = end - start || (start -= 0.01) && 1e-3;
            offset2 = 0;
            i = triggerIndex;
            while (i--) {
              curTrigger = _triggers[i];
              curPin = curTrigger.pin;
              if (curPin && curTrigger.start - curTrigger._pinPush <= start && !containerAnimation && curTrigger.end > 0) {
                cs2 = curTrigger.end - curTrigger.start;
                if ((curPin === trigger && curTrigger.start - curTrigger._pinPush < start || curPin === pinnedContainer) && !_isNumber3(parsedStart)) {
                  offset2 += cs2 * (1 - curTrigger.progress);
                }
                curPin === pin && (otherPinOffset += cs2);
              }
            }
            start += offset2;
            end += offset2;
            self2._pinPush = otherPinOffset;
            if (markerStart && offset2) {
              cs2 = {};
              cs2[direction.a] = "+=" + offset2;
              pinnedContainer && (cs2[direction.p] = "-=" + scrollFunc());
              gsap3.set([markerStart, markerEnd], cs2);
            }
            if (pin) {
              cs2 = _getComputedStyle(pin);
              isVertical = direction === _vertical;
              scroll = scrollFunc();
              pinStart = parseFloat(pinGetter(direction.a)) + otherPinOffset;
              if (!max && end > 1) {
                forcedOverflow = (isViewport ? _doc4.scrollingElement || _docEl2 : scroller).style;
                forcedOverflow = {
                  style: forcedOverflow,
                  value: forcedOverflow["overflow" + direction.a.toUpperCase()]
                };
                forcedOverflow["overflow" + direction.a.toUpperCase()] = "scroll";
              }
              _swapPinIn(pin, spacer, cs2);
              pinState = _getState(pin);
              bounds = _getBounds(pin, true);
              oppositeScroll = useFixedPosition && _getScrollFunc(scroller, isVertical ? _horizontal : _vertical)();
              if (pinSpacing) {
                spacerState = [pinSpacing + direction.os2, change + otherPinOffset + _px];
                spacerState.t = spacer;
                i = pinSpacing === _padding ? _getSize(pin, direction) + change + otherPinOffset : 0;
                i && spacerState.push(direction.d, i + _px);
                _setState(spacerState);
                if (pinnedContainer) {
                  _triggers.forEach(function(t) {
                    if (t.pin === pinnedContainer && t.vars.pinSpacing !== false) {
                      t._subPinOffset = true;
                    }
                  });
                }
                useFixedPosition && scrollFunc(prevScroll);
              }
              if (useFixedPosition) {
                override = {
                  top: bounds.top + (isVertical ? scroll - start : oppositeScroll) + _px,
                  left: bounds.left + (isVertical ? oppositeScroll : scroll - start) + _px,
                  boxSizing: "border-box",
                  position: "fixed"
                };
                override[_width] = override["max" + _Width] = Math.ceil(bounds.width) + _px;
                override[_height] = override["max" + _Height] = Math.ceil(bounds.height) + _px;
                override[_margin] = override[_margin + _Top] = override[_margin + _Right] = override[_margin + _Bottom] = override[_margin + _Left] = "0";
                override[_padding] = cs2[_padding];
                override[_padding + _Top] = cs2[_padding + _Top];
                override[_padding + _Right] = cs2[_padding + _Right];
                override[_padding + _Bottom] = cs2[_padding + _Bottom];
                override[_padding + _Left] = cs2[_padding + _Left];
                pinActiveState = _copyState(pinOriginalState, override, pinReparent);
                _refreshingAll && scrollFunc(0);
              }
              if (animation) {
                initted = animation._initted;
                _suppressOverwrites2(1);
                animation.render(animation.duration(), true, true);
                pinChange = pinGetter(direction.a) - pinStart + change + otherPinOffset;
                pinMoves = Math.abs(change - pinChange) > 1;
                useFixedPosition && pinMoves && pinActiveState.splice(pinActiveState.length - 2, 2);
                animation.render(0, true, true);
                initted || animation.invalidate(true);
                animation.parent || animation.totalTime(animation.totalTime());
                _suppressOverwrites2(0);
              } else {
                pinChange = change;
              }
              forcedOverflow && (forcedOverflow.value ? forcedOverflow.style["overflow" + direction.a.toUpperCase()] = forcedOverflow.value : forcedOverflow.style.removeProperty("overflow-" + direction.a));
            } else if (trigger && scrollFunc() && !containerAnimation) {
              bounds = trigger.parentNode;
              while (bounds && bounds !== _body2) {
                if (bounds._pinOffset) {
                  start -= bounds._pinOffset;
                  end -= bounds._pinOffset;
                }
                bounds = bounds.parentNode;
              }
            }
            revertedPins && revertedPins.forEach(function(t) {
              return t.revert(false, true);
            });
            self2.start = start;
            self2.end = end;
            scroll1 = scroll2 = _refreshingAll ? prevScroll : scrollFunc();
            if (!containerAnimation && !_refreshingAll) {
              scroll1 < prevScroll && scrollFunc(prevScroll);
              self2.scroll.rec = 0;
            }
            self2.revert(false, true);
            if (snapDelayedCall) {
              lastSnap = -1;
              self2.isActive && scrollFunc(start + change * prevProgress);
              snapDelayedCall.restart(true);
            }
            _refreshing = 0;
            animation && isToggle && (animation._initted || prevAnimProgress) && animation.progress() !== prevAnimProgress && animation.progress(prevAnimProgress, true).render(animation.time(), true, true);
            if (prevProgress !== self2.progress || containerAnimation) {
              animation && !isToggle && animation.totalProgress(prevProgress, true);
              self2.progress = (scroll1 - start) / change === prevProgress ? 0 : prevProgress;
            }
            pin && pinSpacing && (spacer._pinOffset = Math.round(self2.progress * pinChange));
            onRefresh && !_refreshingAll && onRefresh(self2);
          };
          self2.getVelocity = function() {
            return (scrollFunc() - scroll2) / (_getTime2() - _time2) * 1e3 || 0;
          };
          self2.endAnimation = function() {
            _endAnimation(self2.callbackAnimation);
            if (animation) {
              scrubTween ? scrubTween.progress(1) : !animation.paused() ? _endAnimation(animation, animation.reversed()) : isToggle || _endAnimation(animation, self2.direction < 0, 1);
            }
          };
          self2.labelToScroll = function(label) {
            return animation && animation.labels && (start || self2.refresh() || start) + animation.labels[label] / animation.duration() * change || 0;
          };
          self2.getTrailing = function(name3) {
            var i = _triggers.indexOf(self2), a = self2.direction > 0 ? _triggers.slice(0, i).reverse() : _triggers.slice(i + 1);
            return (_isString3(name3) ? a.filter(function(t) {
              return t.vars.preventOverlaps === name3;
            }) : a).filter(function(t) {
              return self2.direction > 0 ? t.end <= start : t.start >= end;
            });
          };
          self2.update = function(reset, recordVelocity, forceFake) {
            if (containerAnimation && !forceFake && !reset) {
              return;
            }
            var scroll = _refreshingAll ? prevScroll : self2.scroll(), p = reset ? 0 : (scroll - start) / change, clipped = p < 0 ? 0 : p > 1 ? 1 : p || 0, prevProgress2 = self2.progress, isActive, wasActive, toggleState, action, stateChanged, toggled, isAtMax, isTakingAction;
            if (recordVelocity) {
              scroll2 = scroll1;
              scroll1 = containerAnimation ? scrollFunc() : scroll;
              if (snap3) {
                snap22 = snap1;
                snap1 = animation && !isToggle ? animation.totalProgress() : clipped;
              }
            }
            anticipatePin && !clipped && pin && !_refreshing && !_startup2 && _lastScrollTime && start < scroll + (scroll - scroll2) / (_getTime2() - _time2) * anticipatePin && (clipped = 1e-4);
            if (clipped !== prevProgress2 && self2.enabled) {
              isActive = self2.isActive = !!clipped && clipped < 1;
              wasActive = !!prevProgress2 && prevProgress2 < 1;
              toggled = isActive !== wasActive;
              stateChanged = toggled || !!clipped !== !!prevProgress2;
              self2.direction = clipped > prevProgress2 ? 1 : -1;
              self2.progress = clipped;
              if (stateChanged && !_refreshing) {
                toggleState = clipped && !prevProgress2 ? 0 : clipped === 1 ? 1 : prevProgress2 === 1 ? 2 : 3;
                if (isToggle) {
                  action = !toggled && toggleActions[toggleState + 1] !== "none" && toggleActions[toggleState + 1] || toggleActions[toggleState];
                  isTakingAction = animation && (action === "complete" || action === "reset" || action in animation);
                }
              }
              preventOverlaps && (toggled || isTakingAction) && (isTakingAction || scrub || !animation) && (_isFunction3(preventOverlaps) ? preventOverlaps(self2) : self2.getTrailing(preventOverlaps).forEach(function(t) {
                return t.endAnimation();
              }));
              if (!isToggle) {
                if (scrubTween && !_refreshing && !_startup2) {
                  scrubTween._dp._time - scrubTween._start !== scrubTween._time && scrubTween.render(scrubTween._dp._time - scrubTween._start);
                  if (scrubTween.resetTo) {
                    scrubTween.resetTo("totalProgress", clipped, animation._tTime / animation._tDur);
                  } else {
                    scrubTween.vars.totalProgress = clipped;
                    scrubTween.invalidate().restart();
                  }
                } else if (animation) {
                  animation.totalProgress(clipped, !!_refreshing);
                }
              }
              if (pin) {
                reset && pinSpacing && (spacer.style[pinSpacing + direction.os2] = spacingStart);
                if (!useFixedPosition) {
                  pinSetter(_round3(pinStart + pinChange * clipped));
                } else if (stateChanged) {
                  isAtMax = !reset && clipped > prevProgress2 && end + 1 > scroll && scroll + 1 >= _maxScroll(scroller, direction);
                  if (pinReparent) {
                    if (!reset && (isActive || isAtMax)) {
                      var bounds = _getBounds(pin, true), _offset = scroll - start;
                      _reparent(pin, _body2, bounds.top + (direction === _vertical ? _offset : 0) + _px, bounds.left + (direction === _vertical ? 0 : _offset) + _px);
                    } else {
                      _reparent(pin, spacer);
                    }
                  }
                  _setState(isActive || isAtMax ? pinActiveState : pinState);
                  pinMoves && clipped < 1 && isActive || pinSetter(pinStart + (clipped === 1 && !isAtMax ? pinChange : 0));
                }
              }
              snap3 && !tweenTo.tween && !_refreshing && !_startup2 && snapDelayedCall.restart(true);
              toggleClass && (toggled || once && clipped && (clipped < 1 || !_limitCallbacks)) && _toArray(toggleClass.targets).forEach(function(el) {
                return el.classList[isActive || once ? "add" : "remove"](toggleClass.className);
              });
              onUpdate && !isToggle && !reset && onUpdate(self2);
              if (stateChanged && !_refreshing) {
                if (isToggle) {
                  if (isTakingAction) {
                    if (action === "complete") {
                      animation.pause().totalProgress(1);
                    } else if (action === "reset") {
                      animation.restart(true).pause();
                    } else if (action === "restart") {
                      animation.restart(true);
                    } else {
                      animation[action]();
                    }
                  }
                  onUpdate && onUpdate(self2);
                }
                if (toggled || !_limitCallbacks) {
                  onToggle && toggled && _callback3(self2, onToggle);
                  callbacks[toggleState] && _callback3(self2, callbacks[toggleState]);
                  once && (clipped === 1 ? self2.kill(false, 1) : callbacks[toggleState] = 0);
                  if (!toggled) {
                    toggleState = clipped === 1 ? 1 : 3;
                    callbacks[toggleState] && _callback3(self2, callbacks[toggleState]);
                  }
                }
                if (fastScrollEnd && !isActive && Math.abs(self2.getVelocity()) > (_isNumber3(fastScrollEnd) ? fastScrollEnd : 2500)) {
                  _endAnimation(self2.callbackAnimation);
                  scrubTween ? scrubTween.progress(1) : _endAnimation(animation, action === "reverse" ? 1 : !clipped, 1);
                }
              } else if (isToggle && onUpdate && !_refreshing) {
                onUpdate(self2);
              }
            }
            if (markerEndSetter) {
              var n = containerAnimation ? scroll / containerAnimation.duration() * (containerAnimation._caScrollDist || 0) : scroll;
              markerStartSetter(n + (markerStartTrigger._isFlipped ? 1 : 0));
              markerEndSetter(n);
            }
            caMarkerSetter && caMarkerSetter(-scroll / containerAnimation.duration() * (containerAnimation._caScrollDist || 0));
          };
          self2.enable = function(reset, refresh) {
            if (!self2.enabled) {
              self2.enabled = true;
              _addListener3(scroller, "resize", _onResize);
              _addListener3(isViewport ? _doc4 : scroller, "scroll", _onScroll3);
              onRefreshInit && _addListener3(ScrollTrigger3, "refreshInit", onRefreshInit);
              if (reset !== false) {
                self2.progress = prevProgress = 0;
                scroll1 = scroll2 = lastSnap = scrollFunc();
              }
              refresh !== false && self2.refresh();
            }
          };
          self2.getTween = function(snap4) {
            return snap4 && tweenTo ? tweenTo.tween : scrubTween;
          };
          self2.setPositions = function(newStart, newEnd) {
            if (pin) {
              pinStart += newStart - start;
              pinChange += newEnd - newStart - change;
              pinSpacing === _padding && self2.adjustPinSpacing(newEnd - newStart - change);
            }
            self2.start = start = newStart;
            self2.end = end = newEnd;
            change = newEnd - newStart;
            self2.update();
          };
          self2.adjustPinSpacing = function(amount) {
            if (spacerState) {
              var i = spacerState.indexOf(direction.d) + 1;
              spacerState[i] = parseFloat(spacerState[i]) + amount + _px;
              spacerState[1] = parseFloat(spacerState[1]) + amount + _px;
              _setState(spacerState);
            }
          };
          self2.disable = function(reset, allowAnimation) {
            if (self2.enabled) {
              reset !== false && self2.revert(true, true);
              self2.enabled = self2.isActive = false;
              allowAnimation || scrubTween && scrubTween.pause();
              prevScroll = 0;
              pinCache && (pinCache.uncache = 1);
              onRefreshInit && _removeListener3(ScrollTrigger3, "refreshInit", onRefreshInit);
              if (snapDelayedCall) {
                snapDelayedCall.pause();
                tweenTo.tween && tweenTo.tween.kill() && (tweenTo.tween = 0);
              }
              if (!isViewport) {
                var i = _triggers.length;
                while (i--) {
                  if (_triggers[i].scroller === scroller && _triggers[i] !== self2) {
                    return;
                  }
                }
                _removeListener3(scroller, "resize", _onResize);
                _removeListener3(scroller, "scroll", _onScroll3);
              }
            }
          };
          self2.kill = function(revert, allowAnimation) {
            self2.disable(revert, allowAnimation);
            scrubTween && !allowAnimation && scrubTween.kill();
            id && delete _ids[id];
            var i = _triggers.indexOf(self2);
            i >= 0 && _triggers.splice(i, 1);
            i === _i && _direction > 0 && _i--;
            i = 0;
            _triggers.forEach(function(t) {
              return t.scroller === self2.scroller && (i = 1);
            });
            i || _refreshingAll || (self2.scroll.rec = 0);
            if (animation) {
              animation.scrollTrigger = null;
              revert && animation.revert({
                kill: false
              });
              allowAnimation || animation.kill();
            }
            markerStart && [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function(m) {
              return m.parentNode && m.parentNode.removeChild(m);
            });
            _primary === self2 && (_primary = 0);
            if (pin) {
              pinCache && (pinCache.uncache = 1);
              i = 0;
              _triggers.forEach(function(t) {
                return t.pin === pin && i++;
              });
              i || (pinCache.spacer = 0);
            }
            vars.onKill && vars.onKill(self2);
          };
          self2.enable(false, false);
          customRevertReturn && customRevertReturn(self2);
          !animation || !animation.add || change ? self2.refresh() : gsap3.delayedCall(0.01, function() {
            return start || end || self2.refresh();
          }) && (change = 0.01) && (start = end = 0);
          pin && _queueRefreshAll();
        };
        ScrollTrigger3.register = function register(core) {
          if (!_coreInitted3) {
            gsap3 = core || _getGSAP3();
            _windowExists5() && window.document && ScrollTrigger3.enable();
            _coreInitted3 = _enabled;
          }
          return _coreInitted3;
        };
        ScrollTrigger3.defaults = function defaults2(config3) {
          if (config3) {
            for (var p in config3) {
              _defaults2[p] = config3[p];
            }
          }
          return _defaults2;
        };
        ScrollTrigger3.disable = function disable(reset, kill) {
          _enabled = 0;
          _triggers.forEach(function(trigger) {
            return trigger[kill ? "kill" : "disable"](reset);
          });
          _removeListener3(_win4, "wheel", _onScroll3);
          _removeListener3(_doc4, "scroll", _onScroll3);
          clearInterval(_syncInterval);
          _removeListener3(_doc4, "touchcancel", _passThrough3);
          _removeListener3(_body2, "touchstart", _passThrough3);
          _multiListener(_removeListener3, _doc4, "pointerdown,touchstart,mousedown", _pointerDownHandler);
          _multiListener(_removeListener3, _doc4, "pointerup,touchend,mouseup", _pointerUpHandler);
          _resizeDelay.kill();
          _iterateAutoRefresh(_removeListener3);
          for (var i = 0; i < _scrollers.length; i += 3) {
            _wheelListener(_removeListener3, _scrollers[i], _scrollers[i + 1]);
            _wheelListener(_removeListener3, _scrollers[i], _scrollers[i + 2]);
          }
        };
        ScrollTrigger3.enable = function enable() {
          _win4 = window;
          _doc4 = document;
          _docEl2 = _doc4.documentElement;
          _body2 = _doc4.body;
          if (gsap3) {
            _toArray = gsap3.utils.toArray;
            _clamp4 = gsap3.utils.clamp;
            _context3 = gsap3.core.context || _passThrough3;
            _suppressOverwrites2 = gsap3.core.suppressOverwrites || _passThrough3;
            _scrollRestoration = _win4.history.scrollRestoration || "auto";
            gsap3.core.globals("ScrollTrigger", ScrollTrigger3);
            if (_body2) {
              _enabled = 1;
              Observer.register(gsap3);
              ScrollTrigger3.isTouch = Observer.isTouch;
              _fixIOSBug = Observer.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent);
              _addListener3(_win4, "wheel", _onScroll3);
              _root2 = [_win4, _doc4, _docEl2, _body2];
              if (gsap3.matchMedia) {
                ScrollTrigger3.matchMedia = function(vars) {
                  var mm = gsap3.matchMedia(), p;
                  for (p in vars) {
                    mm.add(p, vars[p]);
                  }
                  return mm;
                };
                gsap3.addEventListener("matchMediaInit", function() {
                  return _revertAll();
                });
                gsap3.addEventListener("matchMediaRevert", function() {
                  return _revertRecorded();
                });
                gsap3.addEventListener("matchMedia", function() {
                  _refreshAll(0, 1);
                  _dispatch3("matchMedia");
                });
                gsap3.matchMedia("(orientation: portrait)", function() {
                  _setBaseDimensions();
                  return _setBaseDimensions;
                });
              } else {
                console.warn("Requires GSAP 3.11.0 or later");
              }
              _setBaseDimensions();
              _addListener3(_doc4, "scroll", _onScroll3);
              var bodyStyle = _body2.style, border = bodyStyle.borderTopStyle, AnimationProto = gsap3.core.Animation.prototype, bounds, i;
              AnimationProto.revert || Object.defineProperty(AnimationProto, "revert", {
                value: function value() {
                  return this.time(-0.01, true);
                }
              });
              bodyStyle.borderTopStyle = "solid";
              bounds = _getBounds(_body2);
              _vertical.m = Math.round(bounds.top + _vertical.sc()) || 0;
              _horizontal.m = Math.round(bounds.left + _horizontal.sc()) || 0;
              border ? bodyStyle.borderTopStyle = border : bodyStyle.removeProperty("border-top-style");
              _syncInterval = setInterval(_sync, 250);
              gsap3.delayedCall(0.5, function() {
                return _startup2 = 0;
              });
              _addListener3(_doc4, "touchcancel", _passThrough3);
              _addListener3(_body2, "touchstart", _passThrough3);
              _multiListener(_addListener3, _doc4, "pointerdown,touchstart,mousedown", _pointerDownHandler);
              _multiListener(_addListener3, _doc4, "pointerup,touchend,mouseup", _pointerUpHandler);
              _transformProp2 = gsap3.utils.checkPrefix("transform");
              _stateProps.push(_transformProp2);
              _coreInitted3 = _getTime2();
              _resizeDelay = gsap3.delayedCall(0.2, _refreshAll).pause();
              _autoRefresh = [_doc4, "visibilitychange", function() {
                var w = _win4.innerWidth, h = _win4.innerHeight;
                if (_doc4.hidden) {
                  _prevWidth = w;
                  _prevHeight = h;
                } else if (_prevWidth !== w || _prevHeight !== h) {
                  _onResize();
                }
              }, _doc4, "DOMContentLoaded", _refreshAll, _win4, "load", _refreshAll, _win4, "resize", _onResize];
              _iterateAutoRefresh(_addListener3);
              _triggers.forEach(function(trigger) {
                return trigger.enable(0, 1);
              });
              for (i = 0; i < _scrollers.length; i += 3) {
                _wheelListener(_removeListener3, _scrollers[i], _scrollers[i + 1]);
                _wheelListener(_removeListener3, _scrollers[i], _scrollers[i + 2]);
              }
            }
          }
        };
        ScrollTrigger3.config = function config3(vars) {
          "limitCallbacks" in vars && (_limitCallbacks = !!vars.limitCallbacks);
          var ms = vars.syncInterval;
          ms && clearInterval(_syncInterval) || (_syncInterval = ms) && setInterval(_sync, ms);
          "ignoreMobileResize" in vars && (_ignoreMobileResize = ScrollTrigger3.isTouch === 1 && vars.ignoreMobileResize);
          if ("autoRefreshEvents" in vars) {
            _iterateAutoRefresh(_removeListener3) || _iterateAutoRefresh(_addListener3, vars.autoRefreshEvents || "none");
            _ignoreResize = (vars.autoRefreshEvents + "").indexOf("resize") === -1;
          }
        };
        ScrollTrigger3.scrollerProxy = function scrollerProxy(target, vars) {
          var t = _getTarget(target), i = _scrollers.indexOf(t), isViewport = _isViewport3(t);
          if (~i) {
            _scrollers.splice(i, isViewport ? 6 : 2);
          }
          if (vars) {
            isViewport ? _proxies.unshift(_win4, vars, _body2, vars, _docEl2, vars) : _proxies.unshift(t, vars);
          }
        };
        ScrollTrigger3.clearMatchMedia = function clearMatchMedia(query) {
          _triggers.forEach(function(t) {
            return t._ctx && t._ctx.query === query && t._ctx.kill(true, true);
          });
        };
        ScrollTrigger3.isInViewport = function isInViewport(element, ratio, horizontal) {
          var bounds = (_isString3(element) ? _getTarget(element) : element).getBoundingClientRect(), offset = bounds[horizontal ? _width : _height] * ratio || 0;
          return horizontal ? bounds.right - offset > 0 && bounds.left + offset < _win4.innerWidth : bounds.bottom - offset > 0 && bounds.top + offset < _win4.innerHeight;
        };
        ScrollTrigger3.positionInViewport = function positionInViewport(element, referencePoint, horizontal) {
          _isString3(element) && (element = _getTarget(element));
          var bounds = element.getBoundingClientRect(), size = bounds[horizontal ? _width : _height], offset = referencePoint == null ? size / 2 : referencePoint in _keywords ? _keywords[referencePoint] * size : ~referencePoint.indexOf("%") ? parseFloat(referencePoint) * size / 100 : parseFloat(referencePoint) || 0;
          return horizontal ? (bounds.left + offset) / _win4.innerWidth : (bounds.top + offset) / _win4.innerHeight;
        };
        ScrollTrigger3.killAll = function killAll(allowListeners) {
          _triggers.slice(0).forEach(function(t) {
            return t.vars.id !== "ScrollSmoother" && t.kill();
          });
          if (allowListeners !== true) {
            var listeners = _listeners2.killAll || [];
            _listeners2 = {};
            listeners.forEach(function(f) {
              return f();
            });
          }
        };
        return ScrollTrigger3;
      }();
      ScrollTrigger2.version = "3.11.4";
      ScrollTrigger2.saveStyles = function(targets) {
        return targets ? _toArray(targets).forEach(function(target) {
          if (target && target.style) {
            var i = _savedStyles.indexOf(target);
            i >= 0 && _savedStyles.splice(i, 5);
            _savedStyles.push(target, target.style.cssText, target.getBBox && target.getAttribute("transform"), gsap3.core.getCache(target), _context3());
          }
        }) : _savedStyles;
      };
      ScrollTrigger2.revert = function(soft, media) {
        return _revertAll(!soft, media);
      };
      ScrollTrigger2.create = function(vars, animation) {
        return new ScrollTrigger2(vars, animation);
      };
      ScrollTrigger2.refresh = function(safe) {
        return safe ? _onResize() : (_coreInitted3 || ScrollTrigger2.register()) && _refreshAll(true);
      };
      ScrollTrigger2.update = function(force) {
        return ++_scrollers.cache && _updateAll(force === true ? 2 : 0);
      };
      ScrollTrigger2.clearScrollMemory = _clearScrollMemory;
      ScrollTrigger2.maxScroll = function(element, horizontal) {
        return _maxScroll(element, horizontal ? _horizontal : _vertical);
      };
      ScrollTrigger2.getScrollFunc = function(element, horizontal) {
        return _getScrollFunc(_getTarget(element), horizontal ? _horizontal : _vertical);
      };
      ScrollTrigger2.getById = function(id) {
        return _ids[id];
      };
      ScrollTrigger2.getAll = function() {
        return _triggers.filter(function(t) {
          return t.vars.id !== "ScrollSmoother";
        });
      };
      ScrollTrigger2.isScrolling = function() {
        return !!_lastScrollTime;
      };
      ScrollTrigger2.snapDirectional = _snapDirectional;
      ScrollTrigger2.addEventListener = function(type, callback) {
        var a = _listeners2[type] || (_listeners2[type] = []);
        ~a.indexOf(callback) || a.push(callback);
      };
      ScrollTrigger2.removeEventListener = function(type, callback) {
        var a = _listeners2[type], i = a && a.indexOf(callback);
        i >= 0 && a.splice(i, 1);
      };
      ScrollTrigger2.batch = function(targets, vars) {
        var result = [], varsCopy = {}, interval = vars.interval || 0.016, batchMax = vars.batchMax || 1e9, proxyCallback = function proxyCallback2(type, callback) {
          var elements = [], triggers = [], delay = gsap3.delayedCall(interval, function() {
            callback(elements, triggers);
            elements = [];
            triggers = [];
          }).pause();
          return function(self2) {
            elements.length || delay.restart(true);
            elements.push(self2.trigger);
            triggers.push(self2);
            batchMax <= elements.length && delay.progress(1);
          };
        }, p;
        for (p in vars) {
          varsCopy[p] = p.substr(0, 2) === "on" && _isFunction3(vars[p]) && p !== "onRefreshInit" ? proxyCallback(p, vars[p]) : vars[p];
        }
        if (_isFunction3(batchMax)) {
          batchMax = batchMax();
          _addListener3(ScrollTrigger2, "refresh", function() {
            return batchMax = vars.batchMax();
          });
        }
        _toArray(targets).forEach(function(target) {
          var config3 = {};
          for (p in varsCopy) {
            config3[p] = varsCopy[p];
          }
          config3.trigger = target;
          result.push(ScrollTrigger2.create(config3));
        });
        return result;
      };
      _clampScrollAndGetDurationMultiplier = function _clampScrollAndGetDurationMultiplier2(scrollFunc, current, end, max) {
        current > max ? scrollFunc(max) : current < 0 && scrollFunc(0);
        return end > max ? (max - current) / (end - current) : end < 0 ? current / (current - end) : 1;
      };
      _allowNativePanning = function _allowNativePanning2(target, direction) {
        if (direction === true) {
          target.style.removeProperty("touch-action");
        } else {
          target.style.touchAction = direction === true ? "auto" : direction ? "pan-" + direction + (Observer.isTouch ? " pinch-zoom" : "") : "none";
        }
        target === _docEl2 && _allowNativePanning2(_body2, direction);
      };
      _overflow = {
        auto: 1,
        scroll: 1
      };
      _nestedScroll = function _nestedScroll2(_ref5) {
        var event = _ref5.event, target = _ref5.target, axis = _ref5.axis;
        var node = (event.changedTouches ? event.changedTouches[0] : event).target, cache = node._gsap || gsap3.core.getCache(node), time = _getTime2(), cs;
        if (!cache._isScrollT || time - cache._isScrollT > 2e3) {
          while (node && node !== _body2 && (node.scrollHeight <= node.clientHeight && node.scrollWidth <= node.clientWidth || !(_overflow[(cs = _getComputedStyle(node)).overflowY] || _overflow[cs.overflowX]))) {
            node = node.parentNode;
          }
          cache._isScroll = node && node !== target && !_isViewport3(node) && (_overflow[(cs = _getComputedStyle(node)).overflowY] || _overflow[cs.overflowX]);
          cache._isScrollT = time;
        }
        if (cache._isScroll || axis === "x") {
          event.stopPropagation();
          event._gsapAllow = true;
        }
      };
      _inputObserver = function _inputObserver2(target, type, inputs, nested) {
        return Observer.create({
          target,
          capture: true,
          debounce: false,
          lockAxis: true,
          type,
          onWheel: nested = nested && _nestedScroll,
          onPress: nested,
          onDrag: nested,
          onScroll: nested,
          onEnable: function onEnable() {
            return inputs && _addListener3(_doc4, Observer.eventTypes[0], _captureInputs, false, true);
          },
          onDisable: function onDisable() {
            return _removeListener3(_doc4, Observer.eventTypes[0], _captureInputs, true);
          }
        });
      };
      _inputExp = /(input|label|select|textarea)/i;
      _captureInputs = function _captureInputs2(e) {
        var isInput = _inputExp.test(e.target.tagName);
        if (isInput || _inputIsFocused) {
          e._gsapAllow = true;
          _inputIsFocused = isInput;
        }
      };
      _getScrollNormalizer = function _getScrollNormalizer2(vars) {
        _isObject3(vars) || (vars = {});
        vars.preventDefault = vars.isNormalizer = vars.allowClicks = true;
        vars.type || (vars.type = "wheel,touch");
        vars.debounce = !!vars.debounce;
        vars.id = vars.id || "normalizer";
        var _vars2 = vars, normalizeScrollX = _vars2.normalizeScrollX, momentum = _vars2.momentum, allowNestedScroll = _vars2.allowNestedScroll, self2, maxY, target = _getTarget(vars.target) || _docEl2, smoother = gsap3.core.globals().ScrollSmoother, smootherInstance = smoother && smoother.get(), content = _fixIOSBug && (vars.content && _getTarget(vars.content) || smootherInstance && vars.content !== false && !smootherInstance.smooth() && smootherInstance.content()), scrollFuncY = _getScrollFunc(target, _vertical), scrollFuncX = _getScrollFunc(target, _horizontal), scale = 1, initialScale = (Observer.isTouch && _win4.visualViewport ? _win4.visualViewport.scale * _win4.visualViewport.width : _win4.outerWidth) / _win4.innerWidth, wheelRefresh = 0, resolveMomentumDuration = _isFunction3(momentum) ? function() {
          return momentum(self2);
        } : function() {
          return momentum || 2.8;
        }, lastRefreshID, skipTouchMove, inputObserver = _inputObserver(target, vars.type, true, allowNestedScroll), resumeTouchMove = function resumeTouchMove2() {
          return skipTouchMove = false;
        }, scrollClampX = _passThrough3, scrollClampY = _passThrough3, updateClamps = function updateClamps2() {
          maxY = _maxScroll(target, _vertical);
          scrollClampY = _clamp4(_fixIOSBug ? 1 : 0, maxY);
          normalizeScrollX && (scrollClampX = _clamp4(0, _maxScroll(target, _horizontal)));
          lastRefreshID = _refreshID;
        }, removeContentOffset = function removeContentOffset2() {
          content._gsap.y = _round3(parseFloat(content._gsap.y) + scrollFuncY.offset) + "px";
          content.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(content._gsap.y) + ", 0, 1)";
          scrollFuncY.offset = scrollFuncY.cacheID = 0;
        }, ignoreDrag = function ignoreDrag2() {
          if (skipTouchMove) {
            requestAnimationFrame(resumeTouchMove);
            var offset = _round3(self2.deltaY / 2), scroll = scrollClampY(scrollFuncY.v - offset);
            if (content && scroll !== scrollFuncY.v + scrollFuncY.offset) {
              scrollFuncY.offset = scroll - scrollFuncY.v;
              var y = _round3((parseFloat(content && content._gsap.y) || 0) - scrollFuncY.offset);
              content.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + y + ", 0, 1)";
              content._gsap.y = y + "px";
              scrollFuncY.cacheID = _scrollers.cache;
              _updateAll();
            }
            return true;
          }
          scrollFuncY.offset && removeContentOffset();
          skipTouchMove = true;
        }, tween, startScrollX, startScrollY, onStopDelayedCall, onResize = function onResize2() {
          updateClamps();
          if (tween.isActive() && tween.vars.scrollY > maxY) {
            scrollFuncY() > maxY ? tween.progress(1) && scrollFuncY(maxY) : tween.resetTo("scrollY", maxY);
          }
        };
        content && gsap3.set(content, {
          y: "+=0"
        });
        vars.ignoreCheck = function(e) {
          return _fixIOSBug && e.type === "touchmove" && ignoreDrag(e) || scale > 1.05 && e.type !== "touchstart" || self2.isGesturing || e.touches && e.touches.length > 1;
        };
        vars.onPress = function() {
          var prevScale = scale;
          scale = _round3((_win4.visualViewport && _win4.visualViewport.scale || 1) / initialScale);
          tween.pause();
          prevScale !== scale && _allowNativePanning(target, scale > 1.01 ? true : normalizeScrollX ? false : "x");
          startScrollX = scrollFuncX();
          startScrollY = scrollFuncY();
          updateClamps();
          lastRefreshID = _refreshID;
        };
        vars.onRelease = vars.onGestureStart = function(self3, wasDragging) {
          scrollFuncY.offset && removeContentOffset();
          if (!wasDragging) {
            onStopDelayedCall.restart(true);
          } else {
            _scrollers.cache++;
            var dur = resolveMomentumDuration(), currentScroll, endScroll;
            if (normalizeScrollX) {
              currentScroll = scrollFuncX();
              endScroll = currentScroll + dur * 0.05 * -self3.velocityX / 0.227;
              dur *= _clampScrollAndGetDurationMultiplier(scrollFuncX, currentScroll, endScroll, _maxScroll(target, _horizontal));
              tween.vars.scrollX = scrollClampX(endScroll);
            }
            currentScroll = scrollFuncY();
            endScroll = currentScroll + dur * 0.05 * -self3.velocityY / 0.227;
            dur *= _clampScrollAndGetDurationMultiplier(scrollFuncY, currentScroll, endScroll, _maxScroll(target, _vertical));
            tween.vars.scrollY = scrollClampY(endScroll);
            tween.invalidate().duration(dur).play(0.01);
            if (_fixIOSBug && tween.vars.scrollY >= maxY || currentScroll >= maxY - 1) {
              gsap3.to({}, {
                onUpdate: onResize,
                duration: dur
              });
            }
          }
        };
        vars.onWheel = function() {
          tween._ts && tween.pause();
          if (_getTime2() - wheelRefresh > 1e3) {
            lastRefreshID = 0;
            wheelRefresh = _getTime2();
          }
        };
        vars.onChange = function(self3, dx, dy, xArray, yArray) {
          _refreshID !== lastRefreshID && updateClamps();
          dx && normalizeScrollX && scrollFuncX(scrollClampX(xArray[2] === dx ? startScrollX + (self3.startX - self3.x) : scrollFuncX() + dx - xArray[1]));
          if (dy) {
            scrollFuncY.offset && removeContentOffset();
            var isTouch = yArray[2] === dy, y = isTouch ? startScrollY + self3.startY - self3.y : scrollFuncY() + dy - yArray[1], yClamped = scrollClampY(y);
            isTouch && y !== yClamped && (startScrollY += yClamped - y);
            scrollFuncY(yClamped);
          }
          (dy || dx) && _updateAll();
        };
        vars.onEnable = function() {
          _allowNativePanning(target, normalizeScrollX ? false : "x");
          ScrollTrigger2.addEventListener("refresh", onResize);
          _addListener3(_win4, "resize", onResize);
          if (scrollFuncY.smooth) {
            scrollFuncY.target.style.scrollBehavior = "auto";
            scrollFuncY.smooth = scrollFuncX.smooth = false;
          }
          inputObserver.enable();
        };
        vars.onDisable = function() {
          _allowNativePanning(target, true);
          _removeListener3(_win4, "resize", onResize);
          ScrollTrigger2.removeEventListener("refresh", onResize);
          inputObserver.kill();
        };
        vars.lockAxis = vars.lockAxis !== false;
        self2 = new Observer(vars);
        self2.iOS = _fixIOSBug;
        _fixIOSBug && !scrollFuncY() && scrollFuncY(1);
        _fixIOSBug && gsap3.ticker.add(_passThrough3);
        onStopDelayedCall = self2._dc;
        tween = gsap3.to(self2, {
          ease: "power4",
          paused: true,
          scrollX: normalizeScrollX ? "+=0.1" : "+=0",
          scrollY: "+=0.1",
          onComplete: onStopDelayedCall.vars.onComplete
        });
        return self2;
      };
      ScrollTrigger2.sort = function(func) {
        return _triggers.sort(func || function(a, b) {
          return (a.vars.refreshPriority || 0) * -1e6 + a.start - (b.start + (b.vars.refreshPriority || 0) * -1e6);
        });
      };
      ScrollTrigger2.observe = function(vars) {
        return new Observer(vars);
      };
      ScrollTrigger2.normalizeScroll = function(vars) {
        if (typeof vars === "undefined") {
          return _normalizer2;
        }
        if (vars === true && _normalizer2) {
          return _normalizer2.enable();
        }
        if (vars === false) {
          return _normalizer2 && _normalizer2.kill();
        }
        var normalizer = vars instanceof Observer ? vars : _getScrollNormalizer(vars);
        _normalizer2 && _normalizer2.target === normalizer.target && _normalizer2.kill();
        _isViewport3(normalizer.target) && (_normalizer2 = normalizer);
        return normalizer;
      };
      ScrollTrigger2.core = {
        // smaller file size way to leverage in ScrollSmoother and Observer
        _getVelocityProp,
        _inputObserver,
        _scrollers,
        _proxies,
        bridge: {
          // when normalizeScroll sets the scroll position (ss = setScroll)
          ss: function ss() {
            _lastScrollTime || _dispatch3("scrollStart");
            _lastScrollTime = _getTime2();
          },
          // a way to get the _refreshing value in Observer
          ref: function ref() {
            return _refreshing;
          }
        }
      };
      _getGSAP3() && gsap3.registerPlugin(ScrollTrigger2);
    }
  });

  // node_modules/lenis/dist/lenis.mjs
  function clamp3(min, input, max) {
    return Math.max(min, Math.min(input, max));
  }
  function lerp(x, y, t) {
    return (1 - t) * x + t * y;
  }
  function damp(x, y, lambda, deltaTime) {
    return lerp(x, y, 1 - Math.exp(-lambda * deltaTime));
  }
  function modulo(n, d) {
    return (n % d + d) % d;
  }
  function debounce(callback, delay) {
    let timer;
    return function(...args) {
      let context3 = this;
      clearTimeout(timer);
      timer = setTimeout(() => {
        timer = void 0;
        callback.apply(context3, args);
      }, delay);
    };
  }
  var version, Animate, Dimensions, Emitter, LINE_HEIGHT, listenerOptions, VirtualScroll, Lenis;
  var init_lenis = __esm({
    "node_modules/lenis/dist/lenis.mjs"() {
      init_live_reload();
      version = "1.1.14";
      Animate = class {
        isRunning = false;
        value = 0;
        from = 0;
        to = 0;
        currentTime = 0;
        // These are instanciated in the fromTo method
        lerp;
        duration;
        easing;
        onUpdate;
        /**
         * Advance the animation by the given delta time
         *
         * @param deltaTime - The time in seconds to advance the animation
         */
        advance(deltaTime) {
          if (!this.isRunning) return;
          let completed = false;
          if (this.duration && this.easing) {
            this.currentTime += deltaTime;
            const linearProgress = clamp3(0, this.currentTime / this.duration, 1);
            completed = linearProgress >= 1;
            const easedProgress = completed ? 1 : this.easing(linearProgress);
            this.value = this.from + (this.to - this.from) * easedProgress;
          } else if (this.lerp) {
            this.value = damp(this.value, this.to, this.lerp * 60, deltaTime);
            if (Math.round(this.value) === this.to) {
              this.value = this.to;
              completed = true;
            }
          } else {
            this.value = this.to;
            completed = true;
          }
          if (completed) {
            this.stop();
          }
          this.onUpdate?.(this.value, completed);
        }
        /** Stop the animation */
        stop() {
          this.isRunning = false;
        }
        /**
         * Set up the animation from a starting value to an ending value
         * with optional parameters for lerping, duration, easing, and onUpdate callback
         *
         * @param from - The starting value
         * @param to - The ending value
         * @param options - Options for the animation
         */
        fromTo(from, to, { lerp: lerp2, duration, easing, onStart, onUpdate }) {
          this.from = this.value = from;
          this.to = to;
          this.lerp = lerp2;
          this.duration = duration;
          this.easing = easing;
          this.currentTime = 0;
          this.isRunning = true;
          onStart?.();
          this.onUpdate = onUpdate;
        }
      };
      Dimensions = class {
        constructor(wrapper, content, { autoResize = true, debounce: debounceValue = 250 } = {}) {
          this.wrapper = wrapper;
          this.content = content;
          if (autoResize) {
            this.debouncedResize = debounce(this.resize, debounceValue);
            if (this.wrapper instanceof Window) {
              window.addEventListener("resize", this.debouncedResize, false);
            } else {
              this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize);
              this.wrapperResizeObserver.observe(this.wrapper);
            }
            this.contentResizeObserver = new ResizeObserver(this.debouncedResize);
            this.contentResizeObserver.observe(this.content);
          }
          this.resize();
        }
        width = 0;
        height = 0;
        scrollHeight = 0;
        scrollWidth = 0;
        // These are instanciated in the constructor as they need information from the options
        debouncedResize;
        wrapperResizeObserver;
        contentResizeObserver;
        destroy() {
          this.wrapperResizeObserver?.disconnect();
          this.contentResizeObserver?.disconnect();
          if (this.wrapper === window && this.debouncedResize) {
            window.removeEventListener("resize", this.debouncedResize, false);
          }
        }
        resize = () => {
          this.onWrapperResize();
          this.onContentResize();
        };
        onWrapperResize = () => {
          if (this.wrapper instanceof Window) {
            this.width = window.innerWidth;
            this.height = window.innerHeight;
          } else {
            this.width = this.wrapper.clientWidth;
            this.height = this.wrapper.clientHeight;
          }
        };
        onContentResize = () => {
          if (this.wrapper instanceof Window) {
            this.scrollHeight = this.content.scrollHeight;
            this.scrollWidth = this.content.scrollWidth;
          } else {
            this.scrollHeight = this.wrapper.scrollHeight;
            this.scrollWidth = this.wrapper.scrollWidth;
          }
        };
        get limit() {
          return {
            x: this.scrollWidth - this.width,
            y: this.scrollHeight - this.height
          };
        }
      };
      Emitter = class {
        events = {};
        /**
         * Emit an event with the given data
         * @param event Event name
         * @param args Data to pass to the event handlers
         */
        emit(event, ...args) {
          let callbacks = this.events[event] || [];
          for (let i = 0, length = callbacks.length; i < length; i++) {
            callbacks[i]?.(...args);
          }
        }
        /**
         * Add a callback to the event
         * @param event Event name
         * @param cb Callback function
         * @returns Unsubscribe function
         */
        on(event, cb) {
          this.events[event]?.push(cb) || (this.events[event] = [cb]);
          return () => {
            this.events[event] = this.events[event]?.filter((i) => cb !== i);
          };
        }
        /**
         * Remove a callback from the event
         * @param event Event name
         * @param callback Callback function
         */
        off(event, callback) {
          this.events[event] = this.events[event]?.filter((i) => callback !== i);
        }
        /**
         * Remove all event listeners and clean up
         */
        destroy() {
          this.events = {};
        }
      };
      LINE_HEIGHT = 100 / 6;
      listenerOptions = { passive: false };
      VirtualScroll = class {
        constructor(element, options = { wheelMultiplier: 1, touchMultiplier: 1 }) {
          this.element = element;
          this.options = options;
          window.addEventListener("resize", this.onWindowResize, false);
          this.onWindowResize();
          this.element.addEventListener("wheel", this.onWheel, listenerOptions);
          this.element.addEventListener(
            "touchstart",
            this.onTouchStart,
            listenerOptions
          );
          this.element.addEventListener(
            "touchmove",
            this.onTouchMove,
            listenerOptions
          );
          this.element.addEventListener("touchend", this.onTouchEnd, listenerOptions);
        }
        touchStart = {
          x: 0,
          y: 0
        };
        lastDelta = {
          x: 0,
          y: 0
        };
        window = {
          width: 0,
          height: 0
        };
        emitter = new Emitter();
        /**
         * Add an event listener for the given event and callback
         *
         * @param event Event name
         * @param callback Callback function
         */
        on(event, callback) {
          return this.emitter.on(event, callback);
        }
        /** Remove all event listeners and clean up */
        destroy() {
          this.emitter.destroy();
          window.removeEventListener("resize", this.onWindowResize, false);
          this.element.removeEventListener("wheel", this.onWheel, listenerOptions);
          this.element.removeEventListener(
            "touchstart",
            this.onTouchStart,
            listenerOptions
          );
          this.element.removeEventListener(
            "touchmove",
            this.onTouchMove,
            listenerOptions
          );
          this.element.removeEventListener(
            "touchend",
            this.onTouchEnd,
            listenerOptions
          );
        }
        /**
         * Event handler for 'touchstart' event
         *
         * @param event Touch event
         */
        onTouchStart = (event) => {
          const { clientX, clientY } = event.targetTouches ? event.targetTouches[0] : event;
          this.touchStart.x = clientX;
          this.touchStart.y = clientY;
          this.lastDelta = {
            x: 0,
            y: 0
          };
          this.emitter.emit("scroll", {
            deltaX: 0,
            deltaY: 0,
            event
          });
        };
        /** Event handler for 'touchmove' event */
        onTouchMove = (event) => {
          const { clientX, clientY } = event.targetTouches ? event.targetTouches[0] : event;
          const deltaX = -(clientX - this.touchStart.x) * this.options.touchMultiplier;
          const deltaY = -(clientY - this.touchStart.y) * this.options.touchMultiplier;
          this.touchStart.x = clientX;
          this.touchStart.y = clientY;
          this.lastDelta = {
            x: deltaX,
            y: deltaY
          };
          this.emitter.emit("scroll", {
            deltaX,
            deltaY,
            event
          });
        };
        onTouchEnd = (event) => {
          this.emitter.emit("scroll", {
            deltaX: this.lastDelta.x,
            deltaY: this.lastDelta.y,
            event
          });
        };
        /** Event handler for 'wheel' event */
        onWheel = (event) => {
          let { deltaX, deltaY, deltaMode } = event;
          const multiplierX = deltaMode === 1 ? LINE_HEIGHT : deltaMode === 2 ? this.window.width : 1;
          const multiplierY = deltaMode === 1 ? LINE_HEIGHT : deltaMode === 2 ? this.window.height : 1;
          deltaX *= multiplierX;
          deltaY *= multiplierY;
          deltaX *= this.options.wheelMultiplier;
          deltaY *= this.options.wheelMultiplier;
          this.emitter.emit("scroll", { deltaX, deltaY, event });
        };
        onWindowResize = () => {
          this.window = {
            width: window.innerWidth,
            height: window.innerHeight
          };
        };
      };
      Lenis = class {
        _isScrolling = false;
        // true when scroll is animating
        _isStopped = false;
        // true if user should not be able to scroll - enable/disable programmatically
        _isLocked = false;
        // same as isStopped but enabled/disabled when scroll reaches target
        _preventNextNativeScrollEvent = false;
        _resetVelocityTimeout = null;
        /**
         * Whether or not the user is touching the screen
         */
        isTouching;
        /**
         * The time in ms since the lenis instance was created
         */
        time = 0;
        /**
         * User data that will be forwarded through the scroll event
         *
         * @example
         * lenis.scrollTo(100, {
         *   userData: {
         *     foo: 'bar'
         *   }
         * })
         */
        userData = {};
        /**
         * The last velocity of the scroll
         */
        lastVelocity = 0;
        /**
         * The current velocity of the scroll
         */
        velocity = 0;
        /**
         * The direction of the scroll
         */
        direction = 0;
        /**
         * The options passed to the lenis instance
         */
        options;
        /**
         * The target scroll value
         */
        targetScroll;
        /**
         * The animated scroll value
         */
        animatedScroll;
        // These are instanciated here as they don't need information from the options
        animate = new Animate();
        emitter = new Emitter();
        // These are instanciated in the constructor as they need information from the options
        dimensions;
        // This is not private because it's used in the Snap class
        virtualScroll;
        constructor({
          wrapper = window,
          content = document.documentElement,
          eventsTarget = wrapper,
          smoothWheel = true,
          syncTouch = false,
          syncTouchLerp = 0.075,
          touchInertiaMultiplier = 35,
          duration,
          // in seconds
          easing = (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          lerp: lerp2 = 0.1,
          infinite = false,
          orientation = "vertical",
          // vertical, horizontal
          gestureOrientation = "vertical",
          // vertical, horizontal, both
          touchMultiplier = 1,
          wheelMultiplier = 1,
          autoResize = true,
          prevent,
          virtualScroll,
          overscroll = true,
          __experimental__naiveDimensions = false
        } = {}) {
          window.lenisVersion = version;
          if (!wrapper || wrapper === document.documentElement || wrapper === document.body) {
            wrapper = window;
          }
          this.options = {
            wrapper,
            content,
            eventsTarget,
            smoothWheel,
            syncTouch,
            syncTouchLerp,
            touchInertiaMultiplier,
            duration,
            easing,
            lerp: lerp2,
            infinite,
            gestureOrientation,
            orientation,
            touchMultiplier,
            wheelMultiplier,
            autoResize,
            prevent,
            virtualScroll,
            overscroll,
            __experimental__naiveDimensions
          };
          this.dimensions = new Dimensions(wrapper, content, { autoResize });
          this.updateClassName();
          this.targetScroll = this.animatedScroll = this.actualScroll;
          this.options.wrapper.addEventListener("scroll", this.onNativeScroll, false);
          this.options.wrapper.addEventListener(
            "pointerdown",
            this.onPointerDown,
            false
          );
          this.virtualScroll = new VirtualScroll(eventsTarget, {
            touchMultiplier,
            wheelMultiplier
          });
          this.virtualScroll.on("scroll", this.onVirtualScroll);
        }
        /**
         * Destroy the lenis instance, remove all event listeners and clean up the class name
         */
        destroy() {
          this.emitter.destroy();
          this.options.wrapper.removeEventListener(
            "scroll",
            this.onNativeScroll,
            false
          );
          this.options.wrapper.removeEventListener(
            "pointerdown",
            this.onPointerDown,
            false
          );
          this.virtualScroll.destroy();
          this.dimensions.destroy();
          this.cleanUpClassName();
        }
        on(event, callback) {
          return this.emitter.on(event, callback);
        }
        off(event, callback) {
          return this.emitter.off(event, callback);
        }
        setScroll(scroll) {
          if (this.isHorizontal) {
            this.rootElement.scrollLeft = scroll;
          } else {
            this.rootElement.scrollTop = scroll;
          }
        }
        onPointerDown = (event) => {
          if (event.button === 1) {
            this.reset();
          }
        };
        onVirtualScroll = (data) => {
          if (typeof this.options.virtualScroll === "function" && this.options.virtualScroll(data) === false)
            return;
          const { deltaX, deltaY, event } = data;
          this.emitter.emit("virtual-scroll", { deltaX, deltaY, event });
          if (event.ctrlKey) return;
          if (event.lenisStopPropagation) return;
          const isTouch = event.type.includes("touch");
          const isWheel = event.type.includes("wheel");
          this.isTouching = event.type === "touchstart" || event.type === "touchmove";
          const isTapToStop = this.options.syncTouch && isTouch && event.type === "touchstart" && !this.isStopped && !this.isLocked;
          if (isTapToStop) {
            this.reset();
            return;
          }
          const isClick = deltaX === 0 && deltaY === 0;
          const isUnknownGesture = this.options.gestureOrientation === "vertical" && deltaY === 0 || this.options.gestureOrientation === "horizontal" && deltaX === 0;
          if (isClick || isUnknownGesture) {
            return;
          }
          let composedPath = event.composedPath();
          composedPath = composedPath.slice(0, composedPath.indexOf(this.rootElement));
          const prevent = this.options.prevent;
          if (!!composedPath.find(
            (node) => node instanceof HTMLElement && (typeof prevent === "function" && prevent?.(node) || node.hasAttribute?.("data-lenis-prevent") || isTouch && node.hasAttribute?.("data-lenis-prevent-touch") || isWheel && node.hasAttribute?.("data-lenis-prevent-wheel"))
          ))
            return;
          if (this.isStopped || this.isLocked) {
            event.preventDefault();
            return;
          }
          const isSmooth = this.options.syncTouch && isTouch || this.options.smoothWheel && isWheel;
          if (!isSmooth) {
            this.isScrolling = "native";
            this.animate.stop();
            event.lenisStopPropagation = true;
            return;
          }
          let delta = deltaY;
          if (this.options.gestureOrientation === "both") {
            delta = Math.abs(deltaY) > Math.abs(deltaX) ? deltaY : deltaX;
          } else if (this.options.gestureOrientation === "horizontal") {
            delta = deltaX;
          }
          if (!this.options.overscroll || this.options.infinite || this.options.wrapper !== window && (this.animatedScroll > 0 && this.animatedScroll < this.limit || this.animatedScroll === 0 && deltaY > 0 || this.animatedScroll === this.limit && deltaY < 0)) {
            event.lenisStopPropagation = true;
          }
          event.preventDefault();
          const syncTouch = isTouch && this.options.syncTouch;
          const isTouchEnd = isTouch && event.type === "touchend";
          const hasTouchInertia = isTouchEnd && Math.abs(delta) > 5;
          if (hasTouchInertia) {
            delta = this.velocity * this.options.touchInertiaMultiplier;
          }
          this.scrollTo(this.targetScroll + delta, {
            programmatic: false,
            ...syncTouch ? {
              lerp: hasTouchInertia ? this.options.syncTouchLerp : 1
            } : {
              lerp: this.options.lerp,
              duration: this.options.duration,
              easing: this.options.easing
            }
          });
        };
        /**
         * Force lenis to recalculate the dimensions
         */
        resize() {
          this.dimensions.resize();
          this.animatedScroll = this.targetScroll = this.actualScroll;
          this.emit();
        }
        emit() {
          this.emitter.emit("scroll", this);
        }
        onNativeScroll = () => {
          if (this._resetVelocityTimeout !== null) {
            clearTimeout(this._resetVelocityTimeout);
            this._resetVelocityTimeout = null;
          }
          if (this._preventNextNativeScrollEvent) {
            this._preventNextNativeScrollEvent = false;
            return;
          }
          if (this.isScrolling === false || this.isScrolling === "native") {
            const lastScroll = this.animatedScroll;
            this.animatedScroll = this.targetScroll = this.actualScroll;
            this.lastVelocity = this.velocity;
            this.velocity = this.animatedScroll - lastScroll;
            this.direction = Math.sign(
              this.animatedScroll - lastScroll
            );
            this.isScrolling = "native";
            this.emit();
            if (this.velocity !== 0) {
              this._resetVelocityTimeout = setTimeout(() => {
                this.lastVelocity = this.velocity;
                this.velocity = 0;
                this.isScrolling = false;
                this.emit();
              }, 400);
            }
          }
        };
        reset() {
          this.isLocked = false;
          this.isScrolling = false;
          this.animatedScroll = this.targetScroll = this.actualScroll;
          this.lastVelocity = this.velocity = 0;
          this.animate.stop();
        }
        /**
         * Start lenis scroll after it has been stopped
         */
        start() {
          if (!this.isStopped) return;
          this.isStopped = false;
          this.reset();
        }
        /**
         * Stop lenis scroll
         */
        stop() {
          if (this.isStopped) return;
          this.isStopped = true;
          this.animate.stop();
          this.reset();
        }
        /**
         * RequestAnimationFrame for lenis
         *
         * @param time The time in ms from an external clock like `requestAnimationFrame` or Tempus
         */
        raf(time) {
          const deltaTime = time - (this.time || time);
          this.time = time;
          this.animate.advance(deltaTime * 1e-3);
        }
        /**
         * Scroll to a target value
         *
         * @param target The target value to scroll to
         * @param options The options for the scroll
         *
         * @example
         * lenis.scrollTo(100, {
         *   offset: 100,
         *   duration: 1,
         *   easing: (t) => 1 - Math.cos((t * Math.PI) / 2),
         *   lerp: 0.1,
         *   onStart: () => {
         *     console.log('onStart')
         *   },
         *   onComplete: () => {
         *     console.log('onComplete')
         *   },
         * })
         */
        scrollTo(target, {
          offset = 0,
          immediate = false,
          lock = false,
          duration = this.options.duration,
          easing = this.options.easing,
          lerp: lerp2 = this.options.lerp,
          onStart,
          onComplete,
          force = false,
          // scroll even if stopped
          programmatic = true,
          // called from outside of the class
          userData
        } = {}) {
          if ((this.isStopped || this.isLocked) && !force) return;
          if (typeof target === "string" && ["top", "left", "start"].includes(target)) {
            target = 0;
          } else if (typeof target === "string" && ["bottom", "right", "end"].includes(target)) {
            target = this.limit;
          } else {
            let node;
            if (typeof target === "string") {
              node = document.querySelector(target);
            } else if (target instanceof HTMLElement && target?.nodeType) {
              node = target;
            }
            if (node) {
              if (this.options.wrapper !== window) {
                const wrapperRect = this.rootElement.getBoundingClientRect();
                offset -= this.isHorizontal ? wrapperRect.left : wrapperRect.top;
              }
              const rect = node.getBoundingClientRect();
              target = (this.isHorizontal ? rect.left : rect.top) + this.animatedScroll;
            }
          }
          if (typeof target !== "number") return;
          target += offset;
          target = Math.round(target);
          if (this.options.infinite) {
            if (programmatic) {
              this.targetScroll = this.animatedScroll = this.scroll;
            }
          } else {
            target = clamp3(0, target, this.limit);
          }
          if (target === this.targetScroll) {
            onStart?.(this);
            onComplete?.(this);
            return;
          }
          this.userData = userData ?? {};
          if (immediate) {
            this.animatedScroll = this.targetScroll = target;
            this.setScroll(this.scroll);
            this.reset();
            this.preventNextNativeScrollEvent();
            this.emit();
            onComplete?.(this);
            this.userData = {};
            return;
          }
          if (!programmatic) {
            this.targetScroll = target;
          }
          this.animate.fromTo(this.animatedScroll, target, {
            duration,
            easing,
            lerp: lerp2,
            onStart: () => {
              if (lock) this.isLocked = true;
              this.isScrolling = "smooth";
              onStart?.(this);
            },
            onUpdate: (value, completed) => {
              this.isScrolling = "smooth";
              this.lastVelocity = this.velocity;
              this.velocity = value - this.animatedScroll;
              this.direction = Math.sign(this.velocity);
              this.animatedScroll = value;
              this.setScroll(this.scroll);
              if (programmatic) {
                this.targetScroll = value;
              }
              if (!completed) this.emit();
              if (completed) {
                this.reset();
                this.emit();
                onComplete?.(this);
                this.userData = {};
                this.preventNextNativeScrollEvent();
              }
            }
          });
        }
        preventNextNativeScrollEvent() {
          this._preventNextNativeScrollEvent = true;
          requestAnimationFrame(() => {
            this._preventNextNativeScrollEvent = false;
          });
        }
        /**
         * The root element on which lenis is instanced
         */
        get rootElement() {
          return this.options.wrapper === window ? document.documentElement : this.options.wrapper;
        }
        /**
         * The limit which is the maximum scroll value
         */
        get limit() {
          if (this.options.__experimental__naiveDimensions) {
            if (this.isHorizontal) {
              return this.rootElement.scrollWidth - this.rootElement.clientWidth;
            } else {
              return this.rootElement.scrollHeight - this.rootElement.clientHeight;
            }
          } else {
            return this.dimensions.limit[this.isHorizontal ? "x" : "y"];
          }
        }
        /**
         * Whether or not the scroll is horizontal
         */
        get isHorizontal() {
          return this.options.orientation === "horizontal";
        }
        /**
         * The actual scroll value
         */
        get actualScroll() {
          return this.isHorizontal ? this.rootElement.scrollLeft : this.rootElement.scrollTop;
        }
        /**
         * The current scroll value
         */
        get scroll() {
          return this.options.infinite ? modulo(this.animatedScroll, this.limit) : this.animatedScroll;
        }
        /**
         * The progress of the scroll relative to the limit
         */
        get progress() {
          return this.limit === 0 ? 1 : this.scroll / this.limit;
        }
        /**
         * Current scroll state
         */
        get isScrolling() {
          return this._isScrolling;
        }
        set isScrolling(value) {
          if (this._isScrolling !== value) {
            this._isScrolling = value;
            this.updateClassName();
          }
        }
        /**
         * Check if lenis is stopped
         */
        get isStopped() {
          return this._isStopped;
        }
        set isStopped(value) {
          if (this._isStopped !== value) {
            this._isStopped = value;
            this.updateClassName();
          }
        }
        /**
         * Check if lenis is locked
         */
        get isLocked() {
          return this._isLocked;
        }
        set isLocked(value) {
          if (this._isLocked !== value) {
            this._isLocked = value;
            this.updateClassName();
          }
        }
        /**
         * Check if lenis is smooth scrolling
         */
        get isSmooth() {
          return this.isScrolling === "smooth";
        }
        /**
         * The class name applied to the wrapper element
         */
        get className() {
          let className = "lenis";
          if (this.isStopped) className += " lenis-stopped";
          if (this.isLocked) className += " lenis-locked";
          if (this.isScrolling) className += " lenis-scrolling";
          if (this.isScrolling === "smooth") className += " lenis-smooth";
          return className;
        }
        updateClassName() {
          this.cleanUpClassName();
          this.rootElement.className = `${this.rootElement.className} ${this.className}`.trim();
        }
        cleanUpClassName() {
          this.rootElement.className = this.rootElement.className.replace(/lenis(-\w+)?/g, "").trim();
        }
      };
    }
  });

  // src/utils/smoothScroll.ts
  function initSmoothScroll() {
    const env = getWebflowEnv();
    if (env === "editor") {
      console.log("[SmoothScroll] Editor detected \u2014 disabling Lenis.");
      disableScrollStyles();
      return;
    }
    lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(90, -2 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.8,
      touchMultiplier: 2,
      infinite: false
    });
    function raf(time) {
      if (!lenis) return;
      lenis.raf(time);
      ScrollTrigger2.update();
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }
  function disableScrollStyles() {
    document.documentElement.style.scrollBehavior = "auto";
    document.body.style.overflow = "";
  }
  function stopSmoothScroll() {
    lenis?.stop();
  }
  function startSmoothScroll() {
    lenis?.start();
  }
  var lenis;
  var init_smoothScroll = __esm({
    "src/utils/smoothScroll.ts"() {
      "use strict";
      init_live_reload();
      init_editorCheck();
      init_gsap();
      init_ScrollTrigger();
      init_lenis();
      gsapWithCSS.registerPlugin(ScrollTrigger2);
      lenis = null;
    }
  });

  // src/utils/verifyCookie.ts
  var VerifyCookie, verifyCookie_default;
  var init_verifyCookie = __esm({
    "src/utils/verifyCookie.ts"() {
      "use strict";
      init_live_reload();
      VerifyCookie = class _VerifyCookie {
        static {
          this.storageKey = "userVerification";
        }
        static {
          this.defaultTTL = 24 * 60 * 60 * 1e3;
        }
        // 24 hours in milliseconds
        static setVerificationStatus(ttl = _VerifyCookie.defaultTTL) {
          const now = /* @__PURE__ */ new Date();
          const verificationData = {
            verified: true,
            expiry: now.getTime() + ttl
          };
          localStorage.setItem(_VerifyCookie.storageKey, JSON.stringify(verificationData));
        }
        static isVerified() {
          const data = localStorage.getItem(_VerifyCookie.storageKey);
          if (!data) return false;
          const verificationData = JSON.parse(data);
          const now = /* @__PURE__ */ new Date();
          if (now.getTime() > verificationData.expiry) {
            localStorage.removeItem(_VerifyCookie.storageKey);
            return false;
          }
          if (verificationData.verified === true) {
            console.log("verified \u2705", verificationData);
          }
          return verificationData.verified;
        }
        static clearVerificationStatus() {
          console.log("removing cookie");
          localStorage.removeItem(_VerifyCookie.storageKey);
        }
      };
      verifyCookie_default = VerifyCookie;
    }
  });

  // src/components/verify.ts
  var verify_exports = {};
  __export(verify_exports, {
    default: () => verify_default,
    hideVerifyComponent: () => hideVerifyComponent,
    verify: () => verify
  });
  function hideVerifyComponent() {
    const section = document.querySelector(".section_verify");
    gsapWithCSS.to(section, { display: "none" });
  }
  var verify, verify_default;
  var init_verify = __esm({
    "src/components/verify.ts"() {
      "use strict";
      init_live_reload();
      init_heroVideo();
      init_smoothScroll();
      init_verifyCookie();
      init_gsap();
      verify = () => {
        class Verify {
          constructor() {
            this.handleVideoReady = () => {
              if (this.videoInitialized) return;
              this.videoInitialized = true;
              if (this.verifyVideo.paused) this.verifyVideo.play().catch(console.warn);
              gsapWithCSS.set(this.verifyPlace, { zIndex: 1, display: "none" });
            };
            this.section = document.querySelector(".section_verify");
            this.form = document.querySelector(".verify_form");
            this.inputs = [...document.querySelectorAll(".verify_input-mask")].map(
              (item) => item
            );
            this.statusContainer = document.querySelector(".verify_status");
            this.verifyVideo = document.querySelector("#verifyBG");
            this.verifyPlace = document.querySelector("#verifyPlace");
            this.verifyLogo = document.querySelector(".verify_logo");
            this.videoInitialized = false;
            this.windowLocation = window.location.pathname;
            this.verifyProductType = [...document.querySelectorAll(".verify_product-type")].map(
              (item) => item.innerHTML.trim()
            );
            const canBypass = this.verifyProductType.includes("Merch");
            if (!canBypass) this.init();
          }
          init() {
            stopSmoothScroll();
            this.section.style.display = "flex";
            if (this.verifyVideo) {
              this.verifyVideo.addEventListener("loadeddata", () => {
                this.handleVideoReady();
              });
              if (this.verifyVideo.readyState >= 3) {
                this.handleVideoReady();
              }
            }
            this.setListeners();
            this.verifyReveal();
          }
          setListeners() {
            this.inputs.forEach((inputWrapper, index) => {
              const input = inputWrapper.querySelector("input");
              if (!input) return;
              input.style.caretColor = "var(--palette--white)";
              input.addEventListener("focus", () => {
                document.documentElement.style.overflow = "hidden";
                document.body.style.overflow = "hidden";
              });
              input.addEventListener("blur", () => {
                document.documentElement.style.overflow = "";
                document.body.style.overflow = "";
              });
              input.addEventListener("input", (event) => this.handleInput(event, index));
              input.addEventListener("keydown", (event) => this.handleBackspace(event, index));
            });
            this.form.addEventListener("submit", (e) => this.verifyAge(e));
          }
          handleInput(event, index) {
            const target = event.target;
            const { value } = target;
            if (!/^\d$/.test(value)) {
              target.value = "";
              return;
            }
            if (value) {
              target.style.borderColor = "var(--palette--white)";
              target.style.color = "var(--palette--white)";
              target.style.opacity = "1";
            } else {
              target.style.borderColor = "var(--palette--white)";
              target.style.color = "var(--palette--white)";
              target.style.opacity = "0.5";
            }
            const nextInputWrapper = this.inputs[index + 1]?.closest(".verify_input-mask");
            if (nextInputWrapper) {
              const nextInput = nextInputWrapper.querySelector("input");
              nextInput?.focus();
            }
          }
          handleBackspace(event, index) {
            const target = event.target;
            if ((event.key === "Backspace" || event.key === "Delete") && !target.value) {
              const previousInputWrapper = this.inputs[index - 1]?.closest(".verify_input-mask");
              if (previousInputWrapper) {
                const previousInput = previousInputWrapper.querySelector("input");
                previousInput?.focus();
                previousInput.value = "";
              }
            }
          }
          verifyAge(event) {
            event.preventDefault();
            event.stopPropagation();
            const birthYear = Array.from(this.inputs).map((wrapper) => {
              const input = wrapper.querySelector("input");
              return input ? input.value.trim() : "";
            }).join("");
            if (birthYear.length !== 4 || !/^\d{4}$/.test(birthYear)) {
              this.displayError("Please enter a valid 4-digit birth year.");
              return;
            }
            const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
            const age = currentYear - parseInt(birthYear);
            if (age >= 21) {
              this.successAnimation();
              verifyCookie_default.setVerificationStatus();
              console.log("Access granted");
            } else {
              this.displayError("Sorry, you must be at least 21 years old to access this site.");
              console.log("Access denied");
            }
          }
          displayError(message) {
            const statusText = this.statusContainer.children[0];
            statusText.innerHTML = message;
            this.statusContainer.style.display = "block";
          }
          verifyReveal() {
            const tl = gsapWithCSS.timeline();
            tl.fromTo(
              this.inputs,
              {
                y: "4rem",
                opacity: 0
              },
              { duration: 1.2, y: "0rem", opacity: 1, stagger: 0.2, ease: "power3.out" }
            );
            tl.fromTo(
              document.querySelector(".verify_wrap"),
              {
                y: "1rem",
                opacity: 0
              },
              { duration: 1.2, y: "0rem", opacity: 1, ease: "expo.inOut" },
              "<0.2"
            );
            tl.to(this.verifyLogo, { duration: 1, opacity: 1, ease: "power3.out" }, "<0.5");
          }
          successAnimation() {
            document.body.classList.remove("lock-scroll");
            window.scrollTo({ top: 0, behavior: "smooth" });
            const tl = gsapWithCSS.timeline();
            const baseDuration = 1;
            const staggerDuration = 0.2;
            const computeDuration = baseDuration + staggerDuration * (this.inputs.length - 1);
            tl.to(this.inputs, {
              duration: baseDuration,
              y: "-4rem",
              opacity: 0,
              stagger: staggerDuration,
              ease: "power3.out"
            });
            tl.to(
              document.querySelector(".verify_wrap"),
              {
                duration: computeDuration,
                y: "-1rem",
                opacity: 0,
                ease: "power3.out"
              },
              "<"
            );
            tl.to(this.section, {
              // delay: 0.2,
              duration: 1,
              display: "none",
              opacity: 0,
              ease: "expo.inOut"
            });
            if (this.windowLocation === "/") {
              setTimeout(() => {
                heroVideo_default.homeReveal();
                startSmoothScroll();
              }, tl.duration() / 2 * 1e3);
            }
          }
        }
        new Verify();
      };
      verify_default = verify;
    }
  });

  // node_modules/gsap/utils/paths.js
  function transformRawPath(rawPath, a, b, c, d, tx, ty) {
    var j = rawPath.length, segment, l, i, x, y;
    while (--j > -1) {
      segment = rawPath[j];
      l = segment.length;
      for (i = 0; i < l; i += 2) {
        x = segment[i];
        y = segment[i + 1];
        segment[i] = x * a + y * c + tx;
        segment[i + 1] = x * b + y * d + ty;
      }
    }
    rawPath._dirty = 1;
    return rawPath;
  }
  function arcToSegment(lastX, lastY, rx, ry, angle, largeArcFlag, sweepFlag, x, y) {
    if (lastX === x && lastY === y) {
      return;
    }
    rx = _abs2(rx);
    ry = _abs2(ry);
    var angleRad = angle % 360 * _DEG2RAD2, cosAngle = _cos2(angleRad), sinAngle = _sin2(angleRad), PI = Math.PI, TWOPI = PI * 2, dx2 = (lastX - x) / 2, dy2 = (lastY - y) / 2, x1 = cosAngle * dx2 + sinAngle * dy2, y1 = -sinAngle * dx2 + cosAngle * dy2, x1_sq = x1 * x1, y1_sq = y1 * y1, radiiCheck = x1_sq / (rx * rx) + y1_sq / (ry * ry);
    if (radiiCheck > 1) {
      rx = _sqrt2(radiiCheck) * rx;
      ry = _sqrt2(radiiCheck) * ry;
    }
    var rx_sq = rx * rx, ry_sq = ry * ry, sq = (rx_sq * ry_sq - rx_sq * y1_sq - ry_sq * x1_sq) / (rx_sq * y1_sq + ry_sq * x1_sq);
    if (sq < 0) {
      sq = 0;
    }
    var coef = (largeArcFlag === sweepFlag ? -1 : 1) * _sqrt2(sq), cx1 = coef * (rx * y1 / ry), cy1 = coef * -(ry * x1 / rx), sx2 = (lastX + x) / 2, sy2 = (lastY + y) / 2, cx = sx2 + (cosAngle * cx1 - sinAngle * cy1), cy = sy2 + (sinAngle * cx1 + cosAngle * cy1), ux = (x1 - cx1) / rx, uy = (y1 - cy1) / ry, vx = (-x1 - cx1) / rx, vy = (-y1 - cy1) / ry, temp = ux * ux + uy * uy, angleStart = (uy < 0 ? -1 : 1) * Math.acos(ux / _sqrt2(temp)), angleExtent = (ux * vy - uy * vx < 0 ? -1 : 1) * Math.acos((ux * vx + uy * vy) / _sqrt2(temp * (vx * vx + vy * vy)));
    isNaN(angleExtent) && (angleExtent = PI);
    if (!sweepFlag && angleExtent > 0) {
      angleExtent -= TWOPI;
    } else if (sweepFlag && angleExtent < 0) {
      angleExtent += TWOPI;
    }
    angleStart %= TWOPI;
    angleExtent %= TWOPI;
    var segments = Math.ceil(_abs2(angleExtent) / (TWOPI / 4)), rawPath = [], angleIncrement = angleExtent / segments, controlLength = 4 / 3 * _sin2(angleIncrement / 2) / (1 + _cos2(angleIncrement / 2)), ma = cosAngle * rx, mb = sinAngle * rx, mc = sinAngle * -ry, md = cosAngle * ry, i;
    for (i = 0; i < segments; i++) {
      angle = angleStart + i * angleIncrement;
      x1 = _cos2(angle);
      y1 = _sin2(angle);
      ux = _cos2(angle += angleIncrement);
      uy = _sin2(angle);
      rawPath.push(x1 - controlLength * y1, y1 + controlLength * x1, ux + controlLength * uy, uy - controlLength * ux, ux, uy);
    }
    for (i = 0; i < rawPath.length; i += 2) {
      x1 = rawPath[i];
      y1 = rawPath[i + 1];
      rawPath[i] = x1 * ma + y1 * mc + cx;
      rawPath[i + 1] = x1 * mb + y1 * md + cy;
    }
    rawPath[i - 2] = x;
    rawPath[i - 1] = y;
    return rawPath;
  }
  function stringToRawPath(d) {
    var a = (d + "").replace(_scientific, function(m) {
      var n = +m;
      return n < 1e-4 && n > -1e-4 ? 0 : n;
    }).match(_svgPathExp) || [], path = [], relativeX = 0, relativeY = 0, twoThirds = 2 / 3, elements = a.length, points = 0, errorMessage = "ERROR: malformed path: " + d, i, j, x, y, command, isRelative, segment, startX, startY, difX, difY, beziers, prevCommand, flag1, flag2, line = function line2(sx, sy, ex, ey) {
      difX = (ex - sx) / 3;
      difY = (ey - sy) / 3;
      segment.push(sx + difX, sy + difY, ex - difX, ey - difY, ex, ey);
    };
    if (!d || !isNaN(a[0]) || isNaN(a[1])) {
      console.log(errorMessage);
      return path;
    }
    for (i = 0; i < elements; i++) {
      prevCommand = command;
      if (isNaN(a[i])) {
        command = a[i].toUpperCase();
        isRelative = command !== a[i];
      } else {
        i--;
      }
      x = +a[i + 1];
      y = +a[i + 2];
      if (isRelative) {
        x += relativeX;
        y += relativeY;
      }
      if (!i) {
        startX = x;
        startY = y;
      }
      if (command === "M") {
        if (segment) {
          if (segment.length < 8) {
            path.length -= 1;
          } else {
            points += segment.length;
          }
        }
        relativeX = startX = x;
        relativeY = startY = y;
        segment = [x, y];
        path.push(segment);
        i += 2;
        command = "L";
      } else if (command === "C") {
        if (!segment) {
          segment = [0, 0];
        }
        if (!isRelative) {
          relativeX = relativeY = 0;
        }
        segment.push(x, y, relativeX + a[i + 3] * 1, relativeY + a[i + 4] * 1, relativeX += a[i + 5] * 1, relativeY += a[i + 6] * 1);
        i += 6;
      } else if (command === "S") {
        difX = relativeX;
        difY = relativeY;
        if (prevCommand === "C" || prevCommand === "S") {
          difX += relativeX - segment[segment.length - 4];
          difY += relativeY - segment[segment.length - 3];
        }
        if (!isRelative) {
          relativeX = relativeY = 0;
        }
        segment.push(difX, difY, x, y, relativeX += a[i + 3] * 1, relativeY += a[i + 4] * 1);
        i += 4;
      } else if (command === "Q") {
        difX = relativeX + (x - relativeX) * twoThirds;
        difY = relativeY + (y - relativeY) * twoThirds;
        if (!isRelative) {
          relativeX = relativeY = 0;
        }
        relativeX += a[i + 3] * 1;
        relativeY += a[i + 4] * 1;
        segment.push(difX, difY, relativeX + (x - relativeX) * twoThirds, relativeY + (y - relativeY) * twoThirds, relativeX, relativeY);
        i += 4;
      } else if (command === "T") {
        difX = relativeX - segment[segment.length - 4];
        difY = relativeY - segment[segment.length - 3];
        segment.push(relativeX + difX, relativeY + difY, x + (relativeX + difX * 1.5 - x) * twoThirds, y + (relativeY + difY * 1.5 - y) * twoThirds, relativeX = x, relativeY = y);
        i += 2;
      } else if (command === "H") {
        line(relativeX, relativeY, relativeX = x, relativeY);
        i += 1;
      } else if (command === "V") {
        line(relativeX, relativeY, relativeX, relativeY = x + (isRelative ? relativeY - relativeX : 0));
        i += 1;
      } else if (command === "L" || command === "Z") {
        if (command === "Z") {
          x = startX;
          y = startY;
          segment.closed = true;
        }
        if (command === "L" || _abs2(relativeX - x) > 0.5 || _abs2(relativeY - y) > 0.5) {
          line(relativeX, relativeY, x, y);
          if (command === "L") {
            i += 2;
          }
        }
        relativeX = x;
        relativeY = y;
      } else if (command === "A") {
        flag1 = a[i + 4];
        flag2 = a[i + 5];
        difX = a[i + 6];
        difY = a[i + 7];
        j = 7;
        if (flag1.length > 1) {
          if (flag1.length < 3) {
            difY = difX;
            difX = flag2;
            j--;
          } else {
            difY = flag2;
            difX = flag1.substr(2);
            j -= 2;
          }
          flag2 = flag1.charAt(1);
          flag1 = flag1.charAt(0);
        }
        beziers = arcToSegment(relativeX, relativeY, +a[i + 1], +a[i + 2], +a[i + 3], +flag1, +flag2, (isRelative ? relativeX : 0) + difX * 1, (isRelative ? relativeY : 0) + difY * 1);
        i += j;
        if (beziers) {
          for (j = 0; j < beziers.length; j++) {
            segment.push(beziers[j]);
          }
        }
        relativeX = segment[segment.length - 2];
        relativeY = segment[segment.length - 1];
      } else {
        console.log(errorMessage);
      }
    }
    i = segment.length;
    if (i < 6) {
      path.pop();
      i = 0;
    } else if (segment[0] === segment[i - 2] && segment[1] === segment[i - 1]) {
      segment.closed = true;
    }
    path.totalPoints = points + i;
    return path;
  }
  function rawPathToString(rawPath) {
    if (_isNumber5(rawPath[0])) {
      rawPath = [rawPath];
    }
    var result = "", l = rawPath.length, sl, s, i, segment;
    for (s = 0; s < l; s++) {
      segment = rawPath[s];
      result += "M" + _round5(segment[0]) + "," + _round5(segment[1]) + " C";
      sl = segment.length;
      for (i = 2; i < sl; i++) {
        result += _round5(segment[i++]) + "," + _round5(segment[i++]) + " " + _round5(segment[i++]) + "," + _round5(segment[i++]) + " " + _round5(segment[i++]) + "," + _round5(segment[i]) + " ";
      }
      if (segment.closed) {
        result += "z";
      }
    }
    return result;
  }
  var _svgPathExp, _scientific, _DEG2RAD2, _RAD2DEG2, _sin2, _cos2, _abs2, _sqrt2, _isNumber5, _roundingNum, _round5;
  var init_paths = __esm({
    "node_modules/gsap/utils/paths.js"() {
      init_live_reload();
      _svgPathExp = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig;
      _scientific = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig;
      _DEG2RAD2 = Math.PI / 180;
      _RAD2DEG2 = 180 / Math.PI;
      _sin2 = Math.sin;
      _cos2 = Math.cos;
      _abs2 = Math.abs;
      _sqrt2 = Math.sqrt;
      _isNumber5 = function _isNumber6(value) {
        return typeof value === "number";
      };
      _roundingNum = 1e5;
      _round5 = function _round6(value) {
        return Math.round(value * _roundingNum) / _roundingNum || 0;
      };
    }
  });

  // node_modules/gsap/CustomEase.js
  var gsap4, _coreInitted4, _getGSAP5, _initCore5, _bigNum3, _round7, _bonusValidated, _numExp2, _needsParsingExp, _findMinimum, _normalize, _bezierToPoints, CustomEase;
  var init_CustomEase = __esm({
    "node_modules/gsap/CustomEase.js"() {
      init_live_reload();
      init_paths();
      _getGSAP5 = function _getGSAP6() {
        return gsap4 || typeof window !== "undefined" && (gsap4 = window.gsap) && gsap4.registerPlugin && gsap4;
      };
      _initCore5 = function _initCore6() {
        gsap4 = _getGSAP5();
        if (gsap4) {
          gsap4.registerEase("_CE", CustomEase.create);
          _coreInitted4 = 1;
        } else {
          console.warn("Please gsap.registerPlugin(CustomEase)");
        }
      };
      _bigNum3 = 1e20;
      _round7 = function _round8(value) {
        return ~~(value * 1e3 + (value < 0 ? -0.5 : 0.5)) / 1e3;
      };
      _bonusValidated = 1;
      _numExp2 = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi;
      _needsParsingExp = /[cLlsSaAhHvVtTqQ]/g;
      _findMinimum = function _findMinimum2(values) {
        var l = values.length, min = _bigNum3, i;
        for (i = 1; i < l; i += 6) {
          +values[i] < min && (min = +values[i]);
        }
        return min;
      };
      _normalize = function _normalize2(values, height, originY) {
        if (!originY && originY !== 0) {
          originY = Math.max(+values[values.length - 1], +values[1]);
        }
        var tx = +values[0] * -1, ty = -originY, l = values.length, sx = 1 / (+values[l - 2] + tx), sy = -height || (Math.abs(+values[l - 1] - +values[1]) < 0.01 * (+values[l - 2] - +values[0]) ? _findMinimum(values) + ty : +values[l - 1] + ty), i;
        if (sy) {
          sy = 1 / sy;
        } else {
          sy = -sx;
        }
        for (i = 0; i < l; i += 2) {
          values[i] = (+values[i] + tx) * sx;
          values[i + 1] = (+values[i + 1] + ty) * sy;
        }
      };
      _bezierToPoints = function _bezierToPoints2(x1, y1, x2, y2, x3, y3, x4, y4, threshold, points, index) {
        var x12 = (x1 + x2) / 2, y12 = (y1 + y2) / 2, x23 = (x2 + x3) / 2, y23 = (y2 + y3) / 2, x34 = (x3 + x4) / 2, y34 = (y3 + y4) / 2, x123 = (x12 + x23) / 2, y123 = (y12 + y23) / 2, x234 = (x23 + x34) / 2, y234 = (y23 + y34) / 2, x1234 = (x123 + x234) / 2, y1234 = (y123 + y234) / 2, dx = x4 - x1, dy = y4 - y1, d2 = Math.abs((x2 - x4) * dy - (y2 - y4) * dx), d3 = Math.abs((x3 - x4) * dy - (y3 - y4) * dx), length;
        if (!points) {
          points = [{
            x: x1,
            y: y1
          }, {
            x: x4,
            y: y4
          }];
          index = 1;
        }
        points.splice(index || points.length - 1, 0, {
          x: x1234,
          y: y1234
        });
        if ((d2 + d3) * (d2 + d3) > threshold * (dx * dx + dy * dy)) {
          length = points.length;
          _bezierToPoints2(x1, y1, x12, y12, x123, y123, x1234, y1234, threshold, points, index);
          _bezierToPoints2(x1234, y1234, x234, y234, x34, y34, x4, y4, threshold, points, index + 1 + (points.length - length));
        }
        return points;
      };
      CustomEase = /* @__PURE__ */ function() {
        function CustomEase2(id, data, config3) {
          _coreInitted4 || _initCore5();
          this.id = id;
          _bonusValidated && this.setData(data, config3);
        }
        var _proto = CustomEase2.prototype;
        _proto.setData = function setData(data, config3) {
          config3 = config3 || {};
          data = data || "0,0,1,1";
          var values = data.match(_numExp2), closest = 1, points = [], lookup = [], precision = config3.precision || 1, fast = precision <= 1, l, a1, a2, i, inc, j, point, prevPoint, p;
          this.data = data;
          if (_needsParsingExp.test(data) || ~data.indexOf("M") && data.indexOf("C") < 0) {
            values = stringToRawPath(data)[0];
          }
          l = values.length;
          if (l === 4) {
            values.unshift(0, 0);
            values.push(1, 1);
            l = 8;
          } else if ((l - 2) % 6) {
            throw "Invalid CustomEase";
          }
          if (+values[0] !== 0 || +values[l - 2] !== 1) {
            _normalize(values, config3.height, config3.originY);
          }
          this.segment = values;
          for (i = 2; i < l; i += 6) {
            a1 = {
              x: +values[i - 2],
              y: +values[i - 1]
            };
            a2 = {
              x: +values[i + 4],
              y: +values[i + 5]
            };
            points.push(a1, a2);
            _bezierToPoints(a1.x, a1.y, +values[i], +values[i + 1], +values[i + 2], +values[i + 3], a2.x, a2.y, 1 / (precision * 2e5), points, points.length - 1);
          }
          l = points.length;
          for (i = 0; i < l; i++) {
            point = points[i];
            prevPoint = points[i - 1] || point;
            if ((point.x > prevPoint.x || prevPoint.y !== point.y && prevPoint.x === point.x || point === prevPoint) && point.x <= 1) {
              prevPoint.cx = point.x - prevPoint.x;
              prevPoint.cy = point.y - prevPoint.y;
              prevPoint.n = point;
              prevPoint.nx = point.x;
              if (fast && i > 1 && Math.abs(prevPoint.cy / prevPoint.cx - points[i - 2].cy / points[i - 2].cx) > 2) {
                fast = 0;
              }
              if (prevPoint.cx < closest) {
                if (!prevPoint.cx) {
                  prevPoint.cx = 1e-3;
                  if (i === l - 1) {
                    prevPoint.x -= 1e-3;
                    closest = Math.min(closest, 1e-3);
                    fast = 0;
                  }
                } else {
                  closest = prevPoint.cx;
                }
              }
            } else {
              points.splice(i--, 1);
              l--;
            }
          }
          l = 1 / closest + 1 | 0;
          inc = 1 / l;
          j = 0;
          point = points[0];
          if (fast) {
            for (i = 0; i < l; i++) {
              p = i * inc;
              if (point.nx < p) {
                point = points[++j];
              }
              a1 = point.y + (p - point.x) / point.cx * point.cy;
              lookup[i] = {
                x: p,
                cx: inc,
                y: a1,
                cy: 0,
                nx: 9
              };
              if (i) {
                lookup[i - 1].cy = a1 - lookup[i - 1].y;
              }
            }
            lookup[l - 1].cy = points[points.length - 1].y - a1;
          } else {
            for (i = 0; i < l; i++) {
              if (point.nx < i * inc) {
                point = points[++j];
              }
              lookup[i] = point;
            }
            if (j < points.length - 1) {
              lookup[i - 1] = points[points.length - 2];
            }
          }
          this.ease = function(p2) {
            var point2 = lookup[p2 * l | 0] || lookup[l - 1];
            if (point2.nx < p2) {
              point2 = point2.n;
            }
            return point2.y + (p2 - point2.x) / point2.cx * point2.cy;
          };
          this.ease.custom = this;
          this.id && gsap4 && gsap4.registerEase(this.id, this.ease);
          return this;
        };
        _proto.getSVGData = function getSVGData(config3) {
          return CustomEase2.getSVGData(this, config3);
        };
        CustomEase2.create = function create(id, data, config3) {
          return new CustomEase2(id, data, config3).ease;
        };
        CustomEase2.register = function register(core) {
          gsap4 = core;
          _initCore5();
        };
        CustomEase2.get = function get2(id) {
          return gsap4.parseEase(id);
        };
        CustomEase2.getSVGData = function getSVGData(ease, config3) {
          config3 = config3 || {};
          var width = config3.width || 100, height = config3.height || 100, x = config3.x || 0, y = (config3.y || 0) + height, e = gsap4.utils.toArray(config3.path)[0], a, slope, i, inc, tx, ty, precision, threshold, prevX, prevY;
          if (config3.invert) {
            height = -height;
            y = 0;
          }
          if (typeof ease === "string") {
            ease = gsap4.parseEase(ease);
          }
          if (ease.custom) {
            ease = ease.custom;
          }
          if (ease instanceof CustomEase2) {
            a = rawPathToString(transformRawPath([ease.segment], width, 0, 0, -height, x, y));
          } else {
            a = [x, y];
            precision = Math.max(5, (config3.precision || 1) * 200);
            inc = 1 / precision;
            precision += 2;
            threshold = 5 / precision;
            prevX = _round7(x + inc * width);
            prevY = _round7(y + ease(inc) * -height);
            slope = (prevY - y) / (prevX - x);
            for (i = 2; i < precision; i++) {
              tx = _round7(x + i * inc * width);
              ty = _round7(y + ease(i * inc) * -height);
              if (Math.abs((ty - prevY) / (tx - prevX) - slope) > threshold || i === precision - 1) {
                a.push(prevX, prevY);
                slope = (ty - prevY) / (tx - prevX);
              }
              prevX = tx;
              prevY = ty;
            }
            a = "M" + a.join(",");
          }
          e && e.setAttribute("d", a);
          return a;
        };
        return CustomEase2;
      }();
      _getGSAP5() && gsap4.registerPlugin(CustomEase);
      CustomEase.version = "3.11.4";
    }
  });

  // src/components/nav.ts
  var nav_exports = {};
  __export(nav_exports, {
    default: () => nav_default,
    nav: () => nav
  });
  var nav, nav_default;
  var init_nav = __esm({
    "src/components/nav.ts"() {
      "use strict";
      init_live_reload();
      init_smoothScroll();
      init_gsap();
      init_CustomEase();
      init_ScrollTrigger();
      gsapWithCSS.registerPlugin(ScrollTrigger2);
      gsapWithCSS.registerPlugin(CustomEase);
      nav = () => {
        class Nav {
          constructor() {
            this.nav = document.querySelector(".nav_component");
            this.navBG = document.querySelector(".nav_bg");
            this.navMain = document.querySelector(".w-nav-overlay");
            this.hero = document.querySelector(".section_hero");
            this.navSpacer = document.querySelector(".nav_sticky-spacer");
            this.navLinks = [...document.querySelectorAll(".nav_link")].map(
              (item) => item
            );
            this.navBrand = document.querySelector(".brand_link");
            this.navCart = document.querySelector(".cart_button");
            this.menuButtonWrap = document.querySelector(".menu_button-wrap");
            this.menuButton = document.querySelector(".menu_button");
            this.cartWrapper = document.querySelector(".cart_wrapper");
            this.cartButton = document.querySelector(".cart_button");
            this.storeHeight = 0;
            if (this.navSpacer) this.storeHeight = parseInt(getComputedStyle(this.navSpacer).height);
            this.overlayActive = false;
            this.menuActive = false;
            this.menuLabel = this.menuButtonWrap.querySelector(".menu_button.is-open");
            this.closeLabel = this.menuButtonWrap.querySelector(".menu_button.is-close");
            const windowLocation = window.location.pathname;
            gsapWithCSS.set(this.closeLabel, { display: "none" });
            this.setListeners();
            if (windowLocation === "/") this.scroller();
          }
          setListeners() {
            this.menuButtonWrap.addEventListener("click", () => {
              this.menuActive = !this.menuActive;
              this.overlayActive = true;
              if (this.menuActive === true) {
                if (this.navSpacer) {
                  const getHeight = parseFloat(getComputedStyle(this.navSpacer).height);
                  this.storeHeight = getHeight;
                  this.navCollpase(getHeight);
                }
                this.menuOpen();
              } else {
                this.overlayActive = false;
                this.navExpand();
                this.menuClose();
              }
            });
            this.cartButton.addEventListener("click", () => {
              this.overlayActive = true;
              const getHeight = parseFloat(getComputedStyle(this.navSpacer).height);
              this.storeHeight = getHeight;
              this.navCollpase(getHeight);
            });
            this.cartWrapper.addEventListener("click", () => {
              this.overlayActive = false;
              this.navExpand();
            });
          }
          scroller() {
            const tl = gsapWithCSS.timeline({
              scrollTrigger: {
                trigger: this.hero,
                start: "bottom bottom",
                end: "bottom top",
                scrub: true,
                // markers: true,
                onLeave: () => {
                  gsapWithCSS.to(this.navBG, {
                    opacity: "1"
                  });
                  gsapWithCSS.to(
                    [
                      this.navLinks,
                      this.navBrand,
                      this.navCart,
                      this.menuButton,
                      this.menuLabel,
                      this.closeLabel
                    ],
                    {
                      color: "rgba(255, 140, 0, 1)"
                    }
                  );
                },
                onEnterBack: () => {
                  gsapWithCSS.to(this.navBG, { opacity: "0" });
                  gsapWithCSS.to(
                    [
                      this.navLinks,
                      this.navBrand,
                      this.navCart,
                      this.menuButton,
                      this.menuLabel,
                      this.closeLabel
                    ],
                    {
                      color: "rgba(255, 140, 0, 1)"
                    }
                  );
                }
              }
            });
            tl.to(this.navSpacer, {
              height: "0",
              ease: "power1.out"
            });
            if (parseInt(getComputedStyle(this.navSpacer).height) > 0 && this.overlayActive === true) {
              tl.to(this.nav, {
                top: "0",
                bottom: "auto",
                ease: "power2.out"
              });
            }
          }
          navCollpase(height) {
            stopSmoothScroll();
            if (height > 0)
              gsapWithCSS.to(this.navSpacer, {
                height: 0,
                ease: "expo.out"
              });
          }
          navExpand() {
            if (this.storeHeight > 0) {
              gsapWithCSS.to(this.navSpacer, {
                height: this.storeHeight,
                ease: "expo.out",
                onComplete: () => {
                  startSmoothScroll();
                }
              });
            } else {
              startSmoothScroll();
              console.log("scrolled out of hero");
            }
          }
          menuOpen() {
            const mobileMenu = document.querySelector(".section_mobile-menu");
            const menuLinks = [...document.querySelectorAll(".mobile-menu_link")];
            const menuSocials = document.querySelector(".nav_socials");
            const menuBrand = document.querySelector(".menu_brand");
            this.toggleMenuLabel("close");
            const tl = gsapWithCSS.timeline();
            tl.fromTo(
              mobileMenu,
              { display: "none", y: "100vh", scale: 0.7 },
              { duration: 1.2, display: "block", y: 0, scale: 1, ease: "expo.out" }
            );
            tl.fromTo(
              menuBrand,
              { opacity: 0 },
              { duration: 1, opacity: 0.1, ease: "power2.out" },
              "<.75"
            );
            tl.fromTo(
              menuLinks,
              { opacity: 0, y: "2rem" },
              { opacity: 1, y: "0rem", stagger: 0.2, ease: "power2.inIOut" },
              "<"
            );
            tl.fromTo(
              menuSocials,
              { opacity: 0 },
              { duration: 1, opacity: 1, ease: "power2.inOut" },
              "<.5"
            );
          }
          menuClose() {
            const mobileMenu = document.querySelector(".section_mobile-menu");
            this.toggleMenuLabel("menu");
            const tl = gsapWithCSS.timeline();
            tl.to(mobileMenu, { display: "none", y: "100vh", scale: 0.75, ease: "expo.out" });
          }
          toggleMenuLabel(label) {
            if (label === "close") {
              const tl = gsapWithCSS.timeline();
              tl.fromTo(
                this.closeLabel,
                { y: "2rem", opacity: 0, display: "none" },
                { delay: 0.4, y: 0, opacity: 1, display: "block", ease: "power2.out" }
              );
              tl.to(this.menuLabel, { y: "-2rem", opacity: 0 }, "<");
            } else {
              const tl = gsapWithCSS.timeline();
              tl.to(this.closeLabel, { y: "2rem", opacity: 0, display: "none", ease: "power2.out" });
              tl.to(this.menuLabel, { y: "0rem", opacity: 1, display: "block", ease: "power2.out" }, "<");
            }
          }
        }
        new Nav();
      };
      nav_default = nav;
    }
  });

  // src/components/pageTransition.ts
  var pageTransition_exports = {};
  __export(pageTransition_exports, {
    default: () => pageTransition_default,
    pageTransition: () => pageTransition
  });
  var pageTransition, pageTransition_default;
  var init_pageTransition = __esm({
    "src/components/pageTransition.ts"() {
      "use strict";
      init_live_reload();
      init_heroVideo();
      init_gsap();
      pageTransition = () => {
        class PageTransition {
          constructor() {
            this.transitionElement = document.querySelector(".transition_component");
            this.transitionWrap = document.querySelector(".transition_fill");
            this.links = [...document.querySelectorAll("a")].map((item) => item);
            this.filteredLinks = this.links.filter((link) => {
              const temp = new URL(link.href, window.location.origin);
              const classList = link.className;
              const isInternal = temp.hostname === window.location.host;
              const isNotAnchor = !temp.href.includes("#");
              const isNotExternal = link.target !== "_blank";
              const isExcluded = /(w-commerce|cart_)/.test(classList);
              return isInternal && isNotAnchor && isNotExternal && !isExcluded;
            });
            this.transitionLogos = [...document.querySelectorAll(".preload_path")].map(
              (item) => item
            );
            this.setListeners();
            this.checkPage();
          }
          checkPage() {
            const windowLocation = window.location.pathname;
            if (windowLocation === "/") {
              console.log("HOME");
              heroVideo_default.homeReveal();
            }
            this.animateOut();
          }
          setListeners() {
            this.filteredLinks.forEach((item) => {
              item.addEventListener("click", (e) => {
                e.preventDefault();
                const destination = item.href;
                this.animateIn(destination);
              });
            });
            window.onpageshow = function(event) {
              if (event.persisted) {
                window.location.reload();
              }
            };
          }
          animateOut() {
            const tl = gsapWithCSS.timeline({
              onComplete: () => {
                gsapWithCSS.set("html", { height: "auto" });
                gsapWithCSS.set("body", { overflow: "auto" });
              }
            });
            tl.to(this.transitionLogos, {
              duration: 0.3,
              opacity: 0,
              y: "-100%",
              ease: "circ.out",
              stagger: 0.08
            });
            tl.to(
              this.transitionWrap,
              { duration: 1, scale: 0.6, opacity: 1, y: "-100%", ease: "power2.inOut" },
              "<"
            );
            tl.to(this.transitionElement, {
              display: "none"
            });
          }
          animateIn(link) {
            const tl = gsapWithCSS.timeline({
              onComplete: () => {
                window.location.href = link;
              }
            });
            tl.set(this.transitionElement, {
              display: "block"
            });
            tl.fromTo(
              this.transitionWrap,
              { scale: 0.6, opacity: 0, y: "100%" },
              { duration: 1, scale: 1, opacity: 1, y: "0%", ease: "power2.inOut" }
            );
            tl.fromTo(
              this.transitionLogos,
              { y: "100%", opacity: 0 },
              { duration: 0.3, opacity: 1, y: "0%", ease: "circ.out", stagger: 0.08 },
              "<.5"
            );
          }
        }
        new PageTransition();
      };
      pageTransition_default = pageTransition;
    }
  });

  // node_modules/@finsweet/ts-utils/dist/animations/index.js
  var init_animations = __esm({
    "node_modules/@finsweet/ts-utils/dist/animations/index.js"() {
      init_live_reload();
    }
  });

  // node_modules/@finsweet/ts-utils/dist/type-guards/instances.js
  var init_instances = __esm({
    "node_modules/@finsweet/ts-utils/dist/type-guards/instances.js"() {
      init_live_reload();
    }
  });

  // node_modules/@finsweet/ts-utils/dist/type-guards/primitives.js
  var init_primitives = __esm({
    "node_modules/@finsweet/ts-utils/dist/type-guards/primitives.js"() {
      init_live_reload();
    }
  });

  // node_modules/@finsweet/ts-utils/dist/type-guards/index.js
  var init_type_guards = __esm({
    "node_modules/@finsweet/ts-utils/dist/type-guards/index.js"() {
      init_live_reload();
      init_instances();
      init_primitives();
    }
  });

  // node_modules/@finsweet/ts-utils/dist/webflow/css.js
  var init_css = __esm({
    "node_modules/@finsweet/ts-utils/dist/webflow/css.js"() {
      init_live_reload();
    }
  });

  // node_modules/@finsweet/ts-utils/dist/helpers/index.js
  var init_helpers = __esm({
    "node_modules/@finsweet/ts-utils/dist/helpers/index.js"() {
      init_live_reload();
    }
  });

  // node_modules/@finsweet/ts-utils/dist/components/index.js
  var init_components = __esm({
    "node_modules/@finsweet/ts-utils/dist/components/index.js"() {
      init_live_reload();
    }
  });

  // node_modules/@finsweet/ts-utils/dist/types/apis/Greenhouse.js
  var init_Greenhouse = __esm({
    "node_modules/@finsweet/ts-utils/dist/types/apis/Greenhouse.js"() {
      init_live_reload();
    }
  });

  // node_modules/@finsweet/ts-utils/dist/types/index.js
  var init_types = __esm({
    "node_modules/@finsweet/ts-utils/dist/types/index.js"() {
      init_live_reload();
      init_Greenhouse();
    }
  });

  // node_modules/@finsweet/ts-utils/dist/webflow/breakpoints.js
  var WEBFLOW_BREAKPOINTS;
  var init_breakpoints = __esm({
    "node_modules/@finsweet/ts-utils/dist/webflow/breakpoints.js"() {
      init_live_reload();
      WEBFLOW_BREAKPOINTS = /* @__PURE__ */ new Map([
        ["tiny", "(max-width: 479px)"],
        ["small", "(max-width: 767px)"],
        ["medium", "(max-width: 991px)"],
        ["main", "(min-width: 992px)"]
      ]);
    }
  });

  // node_modules/@finsweet/ts-utils/dist/webflow/Webflow.js
  var init_Webflow = __esm({
    "node_modules/@finsweet/ts-utils/dist/webflow/Webflow.js"() {
      init_live_reload();
    }
  });

  // node_modules/@finsweet/ts-utils/dist/webflow/WebflowElements.js
  var init_WebflowElements = __esm({
    "node_modules/@finsweet/ts-utils/dist/webflow/WebflowElements.js"() {
      init_live_reload();
    }
  });

  // node_modules/@finsweet/ts-utils/dist/webflow/index.js
  var init_webflow = __esm({
    "node_modules/@finsweet/ts-utils/dist/webflow/index.js"() {
      init_live_reload();
      init_breakpoints();
      init_css();
      init_Webflow();
      init_WebflowElements();
    }
  });

  // node_modules/@finsweet/ts-utils/dist/index.js
  var init_dist = __esm({
    "node_modules/@finsweet/ts-utils/dist/index.js"() {
      init_live_reload();
      init_animations();
      init_components();
      init_helpers();
      init_type_guards();
      init_types();
      init_webflow();
    }
  });

  // src/utils/deviceInfo.ts
  var breakpoints, isTouchDevice;
  var init_deviceInfo = __esm({
    "src/utils/deviceInfo.ts"() {
      "use strict";
      init_live_reload();
      init_dist();
      breakpoints = () => {
        let device = "";
        const wBreakpoints = [...WEBFLOW_BREAKPOINTS];
        const breakpoints2 = {
          tiny: 0,
          small: 0,
          medium: 0,
          main: 0
        };
        window.addEventListener("resize", () => {
          init4();
        });
        init4();
        function init4() {
          for (const i in wBreakpoints) {
            const nametTemp = wBreakpoints[i][0];
            const pointTemp = parseInt(wBreakpoints[i][1].split(":")[1].split("p")[0]);
            breakpoints2[nametTemp] = pointTemp;
          }
          const curWidth = window.innerWidth;
          if (curWidth > breakpoints2.main) {
            device = "desktop";
          } else if (curWidth < breakpoints2.main && curWidth > breakpoints2.small) {
            device = "tablet";
          } else if (curWidth < breakpoints2.medium && curWidth > breakpoints2.tiny) {
            device = "mobile-landscape";
          } else if (curWidth < breakpoints2.small) {
            device = "mobile-portrait";
          }
        }
        return [device, window.innerWidth, window.innerHeight];
      };
      isTouchDevice = () => {
        return "ontouchstart" in window || navigator.maxTouchPoints > 0;
      };
    }
  });

  // src/components/cursor.ts
  var cursor_exports = {};
  __export(cursor_exports, {
    cursor: () => cursor,
    default: () => cursor_default
  });
  var cursor, cursor_default;
  var init_cursor = __esm({
    "src/components/cursor.ts"() {
      "use strict";
      init_live_reload();
      init_deviceInfo();
      init_gsap();
      cursor = () => {
        if (isTouchDevice()) {
          const seg = document.querySelector(".trail-segment-template");
          seg.style.display = "none";
          return;
        }
        class CursorInkTrail {
          constructor() {
            this.trailElements = [];
            this.positions = [];
            this.shrinkTimeout = null;
            this.pageWrapper = document.querySelector(".page-wrapper");
            this.cursorWrapper = document.querySelector(".cursor_component");
            this.templateElement = document.querySelector(".trail-segment-template");
            this.trailLength = 10;
            this.defaultColor = "#FF8C00";
            this.hoverColor = "#051B6B";
            this.init();
          }
          init() {
            for (let i = 0; i < this.trailLength; i++) {
              this.positions.push({ x: 0, y: 0 });
            }
            for (let i = 0; i < this.trailLength; i++) {
              const segment = this.templateElement.cloneNode(true);
              segment.style.display = "block";
              gsapWithCSS.set(segment, { opacity: 1 - i / this.trailLength });
              this.trailElements.push(segment);
              this.cursorWrapper.appendChild(segment);
            }
            this.templateElement.style.display = "none";
            window.addEventListener("mousemove", this.handleMouseMove.bind(this));
            window.addEventListener("mouseover", this.handleMouseOver.bind(this));
            window.addEventListener("mouseout", this.handleMouseOut.bind(this));
          }
          handleMouseMove(event) {
            if (this.shrinkTimeout) clearTimeout(this.shrinkTimeout);
            const lastPosition = this.positions[0];
            const dx = event.clientX - lastPosition.x;
            const dy = event.clientY - lastPosition.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const step = 3;
            if (distance > step) {
              const steps = Math.ceil(distance / step);
              for (let i = 1; i <= steps; i++) {
                this.positions.unshift({
                  x: lastPosition.x + dx / steps * i,
                  y: lastPosition.y + dy / steps * i
                });
                this.positions.pop();
              }
            } else {
              this.positions.unshift({ x: event.clientX, y: event.clientY });
              this.positions.pop();
            }
            this.trailElements.forEach((segment, index) => {
              const { x, y } = this.positions[index];
              gsapWithCSS.to(segment, {
                x,
                y,
                opacity: 1 - index / this.trailLength,
                duration: 0.2,
                overwrite: "auto",
                ease: "power1.out"
              });
            });
            this.shrinkTimeout = window.setTimeout(() => this.shrinkTrail(), 500);
          }
          handleMouseOver(event) {
            const target = event.target.closest("[data-hover-element]");
            if (target) {
              this.trailElements.forEach((segment) => {
                gsapWithCSS.to(segment, { backgroundColor: this.hoverColor, duration: 0.2 });
              });
            }
          }
          handleMouseOut(event) {
            const target = event.target.closest("[data-hover-element]");
            if (target) {
              this.trailElements.forEach((segment) => {
                gsapWithCSS.to(segment, { backgroundColor: this.defaultColor, duration: 0.2 });
              });
            }
          }
          shrinkTrail() {
            this.trailElements.forEach((segment) => {
              gsapWithCSS.to(segment, { opacity: 0, duration: 0.3, stagger: 0.2, ease: "power2.out" });
            });
          }
        }
        new CursorInkTrail();
      };
      cursor_default = cursor;
    }
  });

  // src/components/hoverVideos.ts
  var hoverVideos_exports = {};
  __export(hoverVideos_exports, {
    default: () => hoverVideos_default,
    hoverVideos: () => hoverVideos
  });
  var hoverVideos, hoverVideos_default;
  var init_hoverVideos = __esm({
    "src/components/hoverVideos.ts"() {
      "use strict";
      init_live_reload();
      init_gsap();
      hoverVideos = () => {
        class HoverVideos {
          constructor() {
            this.hoverElements = [...document.querySelectorAll("[data-hover-video]")].map(
              (item) => item
            );
            this.initVideos();
            this.setListeners();
          }
          initVideos() {
            this.hoverElements.forEach((element) => {
              const video = element.querySelector("video");
              video.pause();
            });
          }
          setListeners() {
            this.hoverElements.forEach((element) => {
              element.addEventListener("mouseenter", (e) => {
                const target = e.target;
                this.hoverRevealIn(target);
              });
            });
            this.hoverElements.forEach((element) => {
              element.addEventListener("mouseout", (e) => {
                const target = e.target;
                this.hoverRevealOut(target);
              });
            });
          }
          hoverRevealIn(element) {
            const image = element.children[0];
            const video = element.querySelector("video");
            const hoverElements = [...element.querySelectorAll(".hover_frame-element")].map(
              (item) => item
            );
            video.paused ? video.play() : video.pause();
            const tl = gsapWithCSS.timeline();
            tl.to(image, { opacity: 0 });
            tl.fromTo(
              hoverElements,
              { opacity: 0 },
              { duration: 0.5, opacity: 1, stagger: 0.2, ease: "power2.inOut" },
              "<"
            );
          }
          hoverRevealOut(element) {
            const image = element.children[0];
            const video = element.querySelector("video");
            const hoverElements = [...element.querySelectorAll(".hover_frame-element")].map(
              (item) => item
            );
            video.paused ? video.play() : video.pause();
            const tl = gsapWithCSS.timeline();
            tl.to(image, { opacity: 1 });
            tl.to(
              hoverElements,
              {
                duration: 0.5,
                opacity: 0,
                ease: "power4.inOut"
              },
              "<"
            );
          }
        }
        new HoverVideos();
      };
      hoverVideos_default = hoverVideos;
    }
  });

  // src/components/scrollScale.ts
  var scrollScale_exports = {};
  __export(scrollScale_exports, {
    default: () => scrollScale_default,
    scrollScale: () => scrollScale
  });
  var scrollScale, scrollScale_default;
  var init_scrollScale = __esm({
    "src/components/scrollScale.ts"() {
      "use strict";
      init_live_reload();
      init_deviceInfo();
      init_gsap();
      init_ScrollTrigger();
      gsapWithCSS.registerPlugin(ScrollTrigger2);
      scrollScale = () => {
        class ScrollScale {
          constructor() {
            this.scaleParent = document.querySelector(".section_overview");
            this.scaleElement = document.querySelector("[data-scroll-scale]");
            this.scaleFactor = parseFloat(this.scaleElement.dataset.scrollScale);
            this.endValues = "120% bottom";
            const bp = breakpoints();
            if (bp[0] !== "desktop") {
              this.scaleFactor += 0.25;
              this.endValues = "100% bottom";
            }
            this.setupScroller();
          }
          setupScroller() {
            if (this.scaleElement) {
              const tl = gsapWithCSS.timeline({
                scrollTrigger: {
                  trigger: this.scaleParent,
                  start: "top bottom",
                  end: this.endValues,
                  scrub: true
                  // markers: true,
                }
              });
              tl.fromTo(this.scaleElement, { scale: this.scaleFactor }, { scale: 1, ease: "linear" });
            }
          }
        }
        new ScrollScale();
      };
      scrollScale_default = scrollScale;
    }
  });

  // src/components/mediaSlider.ts
  var mediaSlider_exports = {};
  __export(mediaSlider_exports, {
    default: () => mediaSlider_default,
    mediaSlider: () => mediaSlider
  });
  var mediaSlider, mediaSlider_default;
  var init_mediaSlider = __esm({
    "src/components/mediaSlider.ts"() {
      "use strict";
      init_live_reload();
      init_gsap();
      mediaSlider = () => {
        class MediaSlider {
          constructor() {
            this.sliderTrack = document.querySelector(".slider_track");
            this.sliderImages = [...document.querySelectorAll(".slider_image")].map(
              (item) => item
            );
            this.nextButton = document.querySelector("#mediaSliderNext");
            this.prevButton = document.querySelector("#mediaSliderPrev");
            this.labelCurrent = document.querySelector(".slider_i-text.is-current");
            this.labelTotal = document.querySelector(".slider_i-text.is-total");
            this.curIndex = 0;
            this.currentOffset = 0;
            this.pagePadding = 16;
            this.imageSpacing = 16;
            this.setInitialOffset();
            this.setListeners();
          }
          setInitialOffset() {
            this.currentOffset = 1;
            this.updateTextElements();
            this.labelTotal.textContent = this.formatNumber(this.sliderImages.length);
          }
          setListeners() {
            this.nextButton.addEventListener("click", () => this.advance());
            this.prevButton.addEventListener("click", () => this.regress());
            window.addEventListener(
              "resize",
              this.debounce(() => this.resizeHandler(), 200)
            );
          }
          advance() {
            if (this.curIndex < this.sliderImages.length - 1) {
              this.currentOffset += this.sliderImages[this.curIndex].offsetWidth + this.imageSpacing;
              this.curIndex += 1;
              this.updateTextElements();
              this.updateSliderPosition();
            }
          }
          regress() {
            if (this.curIndex > 0) {
              this.curIndex -= 1;
              this.currentOffset -= this.sliderImages[this.curIndex].offsetWidth + this.imageSpacing;
              this.updateTextElements();
              this.updateSliderPosition();
            }
          }
          updateSliderPosition() {
            gsapWithCSS.to(this.sliderTrack, {
              x: -this.currentOffset,
              duration: 0.5,
              ease: "power2.out"
            });
          }
          updateTextElements() {
            this.labelCurrent.textContent = this.formatNumber(this.curIndex + 1);
          }
          formatNumber(num) {
            return num < 10 ? `0${num}` : `${num}`;
          }
          resizeHandler() {
            this.currentOffset = 0;
            for (let i = 0; i < this.curIndex; i++) {
              this.currentOffset += this.sliderImages[i].offsetWidth + this.imageSpacing;
            }
            this.updateSliderPosition();
          }
          // Utility function to debounce the resize event
          debounce(func, wait) {
            let timeout;
            return (...args) => {
              clearTimeout(timeout);
              timeout = window.setTimeout(() => func(...args), wait);
            };
          }
        }
        new MediaSlider();
      };
      mediaSlider_default = mediaSlider;
    }
  });

  // node_modules/@firebase/util/dist/index.esm2017.js
  function deepCopy(value) {
    return deepExtend(void 0, value);
  }
  function deepExtend(target, source) {
    if (!(source instanceof Object)) {
      return source;
    }
    switch (source.constructor) {
      case Date:
        const dateValue = source;
        return new Date(dateValue.getTime());
      case Object:
        if (target === void 0) {
          target = {};
        }
        break;
      case Array:
        target = [];
        break;
      default:
        return source;
    }
    for (const prop in source) {
      if (!source.hasOwnProperty(prop) || !isValidKey(prop)) {
        continue;
      }
      target[prop] = deepExtend(target[prop], source[prop]);
    }
    return target;
  }
  function isValidKey(key) {
    return key !== "__proto__";
  }
  function getUA() {
    if (typeof navigator !== "undefined" && typeof navigator["userAgent"] === "string") {
      return navigator["userAgent"];
    } else {
      return "";
    }
  }
  function isMobileCordova() {
    return typeof window !== "undefined" && // @ts-ignore Setting up an broadly applicable index signature for Window
    // just to deal with this case would probably be a bad idea.
    !!(window["cordova"] || window["phonegap"] || window["PhoneGap"]) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(getUA());
  }
  function isReactNative() {
    return typeof navigator === "object" && navigator["product"] === "ReactNative";
  }
  function isNodeSdk() {
    return CONSTANTS.NODE_CLIENT === true || CONSTANTS.NODE_ADMIN === true;
  }
  function isIndexedDBAvailable() {
    try {
      return typeof indexedDB === "object";
    } catch (e) {
      return false;
    }
  }
  function validateIndexedDBOpenable() {
    return new Promise((resolve, reject) => {
      try {
        let preExist = true;
        const DB_CHECK_NAME = "validate-browser-context-for-indexeddb-analytics-module";
        const request = self.indexedDB.open(DB_CHECK_NAME);
        request.onsuccess = () => {
          request.result.close();
          if (!preExist) {
            self.indexedDB.deleteDatabase(DB_CHECK_NAME);
          }
          resolve(true);
        };
        request.onupgradeneeded = () => {
          preExist = false;
        };
        request.onerror = () => {
          var _a;
          reject(((_a = request.error) === null || _a === void 0 ? void 0 : _a.message) || "");
        };
      } catch (error2) {
        reject(error2);
      }
    });
  }
  function replaceTemplate(template, data) {
    return template.replace(PATTERN, (_, key) => {
      const value = data[key];
      return value != null ? String(value) : `<${key}?>`;
    });
  }
  function jsonEval(str) {
    return JSON.parse(str);
  }
  function stringify(data) {
    return JSON.stringify(data);
  }
  function contains(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
  }
  function safeGet(obj, key) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      return obj[key];
    } else {
      return void 0;
    }
  }
  function isEmpty(obj) {
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        return false;
      }
    }
    return true;
  }
  function map(obj, fn, contextObj) {
    const res = {};
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        res[key] = fn.call(contextObj, obj[key], key, obj);
      }
    }
    return res;
  }
  function querystring(querystringParams) {
    const params = [];
    for (const [key, value] of Object.entries(querystringParams)) {
      if (Array.isArray(value)) {
        value.forEach((arrayVal) => {
          params.push(encodeURIComponent(key) + "=" + encodeURIComponent(arrayVal));
        });
      } else {
        params.push(encodeURIComponent(key) + "=" + encodeURIComponent(value));
      }
    }
    return params.length ? "&" + params.join("&") : "";
  }
  function errorPrefix(fnName, argName) {
    return `${fnName} failed: ${argName} argument `;
  }
  function getModularInstance(service) {
    if (service && service._delegate) {
      return service._delegate;
    } else {
      return service;
    }
  }
  var CONSTANTS, assert, assertionError, stringToByteArray$1, byteArrayToString, base64, DecodeBase64StringError, base64Encode, base64urlEncodeWithoutPadding, base64Decode, Deferred, ERROR_NAME, FirebaseError, ErrorFactory, PATTERN, decode, isValidFormat, isAdmin, Sha1, stringToByteArray, stringLength, MAX_VALUE_MILLIS;
  var init_index_esm2017 = __esm({
    "node_modules/@firebase/util/dist/index.esm2017.js"() {
      init_live_reload();
      CONSTANTS = {
        /**
         * @define {boolean} Whether this is the client Node.js SDK.
         */
        NODE_CLIENT: false,
        /**
         * @define {boolean} Whether this is the Admin Node.js SDK.
         */
        NODE_ADMIN: false,
        /**
         * Firebase SDK Version
         */
        SDK_VERSION: "${JSCORE_VERSION}"
      };
      assert = function(assertion, message) {
        if (!assertion) {
          throw assertionError(message);
        }
      };
      assertionError = function(message) {
        return new Error("Firebase Database (" + CONSTANTS.SDK_VERSION + ") INTERNAL ASSERT FAILED: " + message);
      };
      stringToByteArray$1 = function(str) {
        const out = [];
        let p = 0;
        for (let i = 0; i < str.length; i++) {
          let c = str.charCodeAt(i);
          if (c < 128) {
            out[p++] = c;
          } else if (c < 2048) {
            out[p++] = c >> 6 | 192;
            out[p++] = c & 63 | 128;
          } else if ((c & 64512) === 55296 && i + 1 < str.length && (str.charCodeAt(i + 1) & 64512) === 56320) {
            c = 65536 + ((c & 1023) << 10) + (str.charCodeAt(++i) & 1023);
            out[p++] = c >> 18 | 240;
            out[p++] = c >> 12 & 63 | 128;
            out[p++] = c >> 6 & 63 | 128;
            out[p++] = c & 63 | 128;
          } else {
            out[p++] = c >> 12 | 224;
            out[p++] = c >> 6 & 63 | 128;
            out[p++] = c & 63 | 128;
          }
        }
        return out;
      };
      byteArrayToString = function(bytes) {
        const out = [];
        let pos = 0, c = 0;
        while (pos < bytes.length) {
          const c1 = bytes[pos++];
          if (c1 < 128) {
            out[c++] = String.fromCharCode(c1);
          } else if (c1 > 191 && c1 < 224) {
            const c2 = bytes[pos++];
            out[c++] = String.fromCharCode((c1 & 31) << 6 | c2 & 63);
          } else if (c1 > 239 && c1 < 365) {
            const c2 = bytes[pos++];
            const c3 = bytes[pos++];
            const c4 = bytes[pos++];
            const u = ((c1 & 7) << 18 | (c2 & 63) << 12 | (c3 & 63) << 6 | c4 & 63) - 65536;
            out[c++] = String.fromCharCode(55296 + (u >> 10));
            out[c++] = String.fromCharCode(56320 + (u & 1023));
          } else {
            const c2 = bytes[pos++];
            const c3 = bytes[pos++];
            out[c++] = String.fromCharCode((c1 & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
          }
        }
        return out.join("");
      };
      base64 = {
        /**
         * Maps bytes to characters.
         */
        byteToCharMap_: null,
        /**
         * Maps characters to bytes.
         */
        charToByteMap_: null,
        /**
         * Maps bytes to websafe characters.
         * @private
         */
        byteToCharMapWebSafe_: null,
        /**
         * Maps websafe characters to bytes.
         * @private
         */
        charToByteMapWebSafe_: null,
        /**
         * Our default alphabet, shared between
         * ENCODED_VALS and ENCODED_VALS_WEBSAFE
         */
        ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
        /**
         * Our default alphabet. Value 64 (=) is special; it means "nothing."
         */
        get ENCODED_VALS() {
          return this.ENCODED_VALS_BASE + "+/=";
        },
        /**
         * Our websafe alphabet.
         */
        get ENCODED_VALS_WEBSAFE() {
          return this.ENCODED_VALS_BASE + "-_.";
        },
        /**
         * Whether this browser supports the atob and btoa functions. This extension
         * started at Mozilla but is now implemented by many browsers. We use the
         * ASSUME_* variables to avoid pulling in the full useragent detection library
         * but still allowing the standard per-browser compilations.
         *
         */
        HAS_NATIVE_SUPPORT: typeof atob === "function",
        /**
         * Base64-encode an array of bytes.
         *
         * @param input An array of bytes (numbers with
         *     value in [0, 255]) to encode.
         * @param webSafe Boolean indicating we should use the
         *     alternative alphabet.
         * @return The base64 encoded string.
         */
        encodeByteArray(input, webSafe) {
          if (!Array.isArray(input)) {
            throw Error("encodeByteArray takes an array as a parameter");
          }
          this.init_();
          const byteToCharMap = webSafe ? this.byteToCharMapWebSafe_ : this.byteToCharMap_;
          const output = [];
          for (let i = 0; i < input.length; i += 3) {
            const byte1 = input[i];
            const haveByte2 = i + 1 < input.length;
            const byte2 = haveByte2 ? input[i + 1] : 0;
            const haveByte3 = i + 2 < input.length;
            const byte3 = haveByte3 ? input[i + 2] : 0;
            const outByte1 = byte1 >> 2;
            const outByte2 = (byte1 & 3) << 4 | byte2 >> 4;
            let outByte3 = (byte2 & 15) << 2 | byte3 >> 6;
            let outByte4 = byte3 & 63;
            if (!haveByte3) {
              outByte4 = 64;
              if (!haveByte2) {
                outByte3 = 64;
              }
            }
            output.push(byteToCharMap[outByte1], byteToCharMap[outByte2], byteToCharMap[outByte3], byteToCharMap[outByte4]);
          }
          return output.join("");
        },
        /**
         * Base64-encode a string.
         *
         * @param input A string to encode.
         * @param webSafe If true, we should use the
         *     alternative alphabet.
         * @return The base64 encoded string.
         */
        encodeString(input, webSafe) {
          if (this.HAS_NATIVE_SUPPORT && !webSafe) {
            return btoa(input);
          }
          return this.encodeByteArray(stringToByteArray$1(input), webSafe);
        },
        /**
         * Base64-decode a string.
         *
         * @param input to decode.
         * @param webSafe True if we should use the
         *     alternative alphabet.
         * @return string representing the decoded value.
         */
        decodeString(input, webSafe) {
          if (this.HAS_NATIVE_SUPPORT && !webSafe) {
            return atob(input);
          }
          return byteArrayToString(this.decodeStringToByteArray(input, webSafe));
        },
        /**
         * Base64-decode a string.
         *
         * In base-64 decoding, groups of four characters are converted into three
         * bytes.  If the encoder did not apply padding, the input length may not
         * be a multiple of 4.
         *
         * In this case, the last group will have fewer than 4 characters, and
         * padding will be inferred.  If the group has one or two characters, it decodes
         * to one byte.  If the group has three characters, it decodes to two bytes.
         *
         * @param input Input to decode.
         * @param webSafe True if we should use the web-safe alphabet.
         * @return bytes representing the decoded value.
         */
        decodeStringToByteArray(input, webSafe) {
          this.init_();
          const charToByteMap = webSafe ? this.charToByteMapWebSafe_ : this.charToByteMap_;
          const output = [];
          for (let i = 0; i < input.length; ) {
            const byte1 = charToByteMap[input.charAt(i++)];
            const haveByte2 = i < input.length;
            const byte2 = haveByte2 ? charToByteMap[input.charAt(i)] : 0;
            ++i;
            const haveByte3 = i < input.length;
            const byte3 = haveByte3 ? charToByteMap[input.charAt(i)] : 64;
            ++i;
            const haveByte4 = i < input.length;
            const byte4 = haveByte4 ? charToByteMap[input.charAt(i)] : 64;
            ++i;
            if (byte1 == null || byte2 == null || byte3 == null || byte4 == null) {
              throw new DecodeBase64StringError();
            }
            const outByte1 = byte1 << 2 | byte2 >> 4;
            output.push(outByte1);
            if (byte3 !== 64) {
              const outByte2 = byte2 << 4 & 240 | byte3 >> 2;
              output.push(outByte2);
              if (byte4 !== 64) {
                const outByte3 = byte3 << 6 & 192 | byte4;
                output.push(outByte3);
              }
            }
          }
          return output;
        },
        /**
         * Lazy static initialization function. Called before
         * accessing any of the static map variables.
         * @private
         */
        init_() {
          if (!this.byteToCharMap_) {
            this.byteToCharMap_ = {};
            this.charToByteMap_ = {};
            this.byteToCharMapWebSafe_ = {};
            this.charToByteMapWebSafe_ = {};
            for (let i = 0; i < this.ENCODED_VALS.length; i++) {
              this.byteToCharMap_[i] = this.ENCODED_VALS.charAt(i);
              this.charToByteMap_[this.byteToCharMap_[i]] = i;
              this.byteToCharMapWebSafe_[i] = this.ENCODED_VALS_WEBSAFE.charAt(i);
              this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]] = i;
              if (i >= this.ENCODED_VALS_BASE.length) {
                this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)] = i;
                this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)] = i;
              }
            }
          }
        }
      };
      DecodeBase64StringError = class extends Error {
        constructor() {
          super(...arguments);
          this.name = "DecodeBase64StringError";
        }
      };
      base64Encode = function(str) {
        const utf8Bytes = stringToByteArray$1(str);
        return base64.encodeByteArray(utf8Bytes, true);
      };
      base64urlEncodeWithoutPadding = function(str) {
        return base64Encode(str).replace(/\./g, "");
      };
      base64Decode = function(str) {
        try {
          return base64.decodeString(str, true);
        } catch (e) {
          console.error("base64Decode failed: ", e);
        }
        return null;
      };
      Deferred = class {
        constructor() {
          this.reject = () => {
          };
          this.resolve = () => {
          };
          this.promise = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
          });
        }
        /**
         * Our API internals are not promisified and cannot because our callback APIs have subtle expectations around
         * invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback
         * and returns a node-style callback which will resolve or reject the Deferred's promise.
         */
        wrapCallback(callback) {
          return (error2, value) => {
            if (error2) {
              this.reject(error2);
            } else {
              this.resolve(value);
            }
            if (typeof callback === "function") {
              this.promise.catch(() => {
              });
              if (callback.length === 1) {
                callback(error2);
              } else {
                callback(error2, value);
              }
            }
          };
        }
      };
      ERROR_NAME = "FirebaseError";
      FirebaseError = class _FirebaseError extends Error {
        constructor(code, message, customData) {
          super(message);
          this.code = code;
          this.customData = customData;
          this.name = ERROR_NAME;
          Object.setPrototypeOf(this, _FirebaseError.prototype);
          if (Error.captureStackTrace) {
            Error.captureStackTrace(this, ErrorFactory.prototype.create);
          }
        }
      };
      ErrorFactory = class {
        constructor(service, serviceName, errors) {
          this.service = service;
          this.serviceName = serviceName;
          this.errors = errors;
        }
        create(code, ...data) {
          const customData = data[0] || {};
          const fullCode = `${this.service}/${code}`;
          const template = this.errors[code];
          const message = template ? replaceTemplate(template, customData) : "Error";
          const fullMessage = `${this.serviceName}: ${message} (${fullCode}).`;
          const error2 = new FirebaseError(fullCode, fullMessage, customData);
          return error2;
        }
      };
      PATTERN = /\{\$([^}]+)}/g;
      decode = function(token) {
        let header = {}, claims = {}, data = {}, signature = "";
        try {
          const parts = token.split(".");
          header = jsonEval(base64Decode(parts[0]) || "");
          claims = jsonEval(base64Decode(parts[1]) || "");
          signature = parts[2];
          data = claims["d"] || {};
          delete claims["d"];
        } catch (e) {
        }
        return {
          header,
          claims,
          data,
          signature
        };
      };
      isValidFormat = function(token) {
        const decoded = decode(token), claims = decoded.claims;
        return !!claims && typeof claims === "object" && claims.hasOwnProperty("iat");
      };
      isAdmin = function(token) {
        const claims = decode(token).claims;
        return typeof claims === "object" && claims["admin"] === true;
      };
      Sha1 = class {
        constructor() {
          this.chain_ = [];
          this.buf_ = [];
          this.W_ = [];
          this.pad_ = [];
          this.inbuf_ = 0;
          this.total_ = 0;
          this.blockSize = 512 / 8;
          this.pad_[0] = 128;
          for (let i = 1; i < this.blockSize; ++i) {
            this.pad_[i] = 0;
          }
          this.reset();
        }
        reset() {
          this.chain_[0] = 1732584193;
          this.chain_[1] = 4023233417;
          this.chain_[2] = 2562383102;
          this.chain_[3] = 271733878;
          this.chain_[4] = 3285377520;
          this.inbuf_ = 0;
          this.total_ = 0;
        }
        /**
         * Internal compress helper function.
         * @param buf Block to compress.
         * @param offset Offset of the block in the buffer.
         * @private
         */
        compress_(buf, offset) {
          if (!offset) {
            offset = 0;
          }
          const W = this.W_;
          if (typeof buf === "string") {
            for (let i = 0; i < 16; i++) {
              W[i] = buf.charCodeAt(offset) << 24 | buf.charCodeAt(offset + 1) << 16 | buf.charCodeAt(offset + 2) << 8 | buf.charCodeAt(offset + 3);
              offset += 4;
            }
          } else {
            for (let i = 0; i < 16; i++) {
              W[i] = buf[offset] << 24 | buf[offset + 1] << 16 | buf[offset + 2] << 8 | buf[offset + 3];
              offset += 4;
            }
          }
          for (let i = 16; i < 80; i++) {
            const t = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
            W[i] = (t << 1 | t >>> 31) & 4294967295;
          }
          let a = this.chain_[0];
          let b = this.chain_[1];
          let c = this.chain_[2];
          let d = this.chain_[3];
          let e = this.chain_[4];
          let f, k;
          for (let i = 0; i < 80; i++) {
            if (i < 40) {
              if (i < 20) {
                f = d ^ b & (c ^ d);
                k = 1518500249;
              } else {
                f = b ^ c ^ d;
                k = 1859775393;
              }
            } else {
              if (i < 60) {
                f = b & c | d & (b | c);
                k = 2400959708;
              } else {
                f = b ^ c ^ d;
                k = 3395469782;
              }
            }
            const t = (a << 5 | a >>> 27) + f + e + k + W[i] & 4294967295;
            e = d;
            d = c;
            c = (b << 30 | b >>> 2) & 4294967295;
            b = a;
            a = t;
          }
          this.chain_[0] = this.chain_[0] + a & 4294967295;
          this.chain_[1] = this.chain_[1] + b & 4294967295;
          this.chain_[2] = this.chain_[2] + c & 4294967295;
          this.chain_[3] = this.chain_[3] + d & 4294967295;
          this.chain_[4] = this.chain_[4] + e & 4294967295;
        }
        update(bytes, length) {
          if (bytes == null) {
            return;
          }
          if (length === void 0) {
            length = bytes.length;
          }
          const lengthMinusBlock = length - this.blockSize;
          let n = 0;
          const buf = this.buf_;
          let inbuf = this.inbuf_;
          while (n < length) {
            if (inbuf === 0) {
              while (n <= lengthMinusBlock) {
                this.compress_(bytes, n);
                n += this.blockSize;
              }
            }
            if (typeof bytes === "string") {
              while (n < length) {
                buf[inbuf] = bytes.charCodeAt(n);
                ++inbuf;
                ++n;
                if (inbuf === this.blockSize) {
                  this.compress_(buf);
                  inbuf = 0;
                  break;
                }
              }
            } else {
              while (n < length) {
                buf[inbuf] = bytes[n];
                ++inbuf;
                ++n;
                if (inbuf === this.blockSize) {
                  this.compress_(buf);
                  inbuf = 0;
                  break;
                }
              }
            }
          }
          this.inbuf_ = inbuf;
          this.total_ += length;
        }
        /** @override */
        digest() {
          const digest = [];
          let totalBits = this.total_ * 8;
          if (this.inbuf_ < 56) {
            this.update(this.pad_, 56 - this.inbuf_);
          } else {
            this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
          }
          for (let i = this.blockSize - 1; i >= 56; i--) {
            this.buf_[i] = totalBits & 255;
            totalBits /= 256;
          }
          this.compress_(this.buf_);
          let n = 0;
          for (let i = 0; i < 5; i++) {
            for (let j = 24; j >= 0; j -= 8) {
              digest[n] = this.chain_[i] >> j & 255;
              ++n;
            }
          }
          return digest;
        }
      };
      stringToByteArray = function(str) {
        const out = [];
        let p = 0;
        for (let i = 0; i < str.length; i++) {
          let c = str.charCodeAt(i);
          if (c >= 55296 && c <= 56319) {
            const high = c - 55296;
            i++;
            assert(i < str.length, "Surrogate pair missing trail surrogate.");
            const low = str.charCodeAt(i) - 56320;
            c = 65536 + (high << 10) + low;
          }
          if (c < 128) {
            out[p++] = c;
          } else if (c < 2048) {
            out[p++] = c >> 6 | 192;
            out[p++] = c & 63 | 128;
          } else if (c < 65536) {
            out[p++] = c >> 12 | 224;
            out[p++] = c >> 6 & 63 | 128;
            out[p++] = c & 63 | 128;
          } else {
            out[p++] = c >> 18 | 240;
            out[p++] = c >> 12 & 63 | 128;
            out[p++] = c >> 6 & 63 | 128;
            out[p++] = c & 63 | 128;
          }
        }
        return out;
      };
      stringLength = function(str) {
        let p = 0;
        for (let i = 0; i < str.length; i++) {
          const c = str.charCodeAt(i);
          if (c < 128) {
            p++;
          } else if (c < 2048) {
            p += 2;
          } else if (c >= 55296 && c <= 56319) {
            p += 4;
            i++;
          } else {
            p += 3;
          }
        }
        return p;
      };
      MAX_VALUE_MILLIS = 4 * 60 * 60 * 1e3;
    }
  });

  // node_modules/@firebase/component/dist/esm/index.esm2017.js
  var Component;
  var init_index_esm20172 = __esm({
    "node_modules/@firebase/component/dist/esm/index.esm2017.js"() {
      init_live_reload();
      init_index_esm2017();
      Component = class {
        /**
         *
         * @param name The public service name, e.g. app, auth, firestore, database
         * @param instanceFactory Service factory responsible for creating the public interface
         * @param type whether the service provided by the component is public or private
         */
        constructor(name3, instanceFactory, type) {
          this.name = name3;
          this.instanceFactory = instanceFactory;
          this.type = type;
          this.multipleInstances = false;
          this.serviceProps = {};
          this.instantiationMode = "LAZY";
          this.onInstanceCreated = null;
        }
        setInstantiationMode(mode) {
          this.instantiationMode = mode;
          return this;
        }
        setMultipleInstances(multipleInstances) {
          this.multipleInstances = multipleInstances;
          return this;
        }
        setServiceProps(props) {
          this.serviceProps = props;
          return this;
        }
        setInstanceCreatedCallback(callback) {
          this.onInstanceCreated = callback;
          return this;
        }
      };
    }
  });

  // node_modules/@firebase/logger/dist/esm/index.esm2017.js
  var instances, LogLevel, levelStringToEnum, defaultLogLevel, ConsoleMethod, defaultLogHandler, Logger;
  var init_index_esm20173 = __esm({
    "node_modules/@firebase/logger/dist/esm/index.esm2017.js"() {
      init_live_reload();
      instances = [];
      (function(LogLevel2) {
        LogLevel2[LogLevel2["DEBUG"] = 0] = "DEBUG";
        LogLevel2[LogLevel2["VERBOSE"] = 1] = "VERBOSE";
        LogLevel2[LogLevel2["INFO"] = 2] = "INFO";
        LogLevel2[LogLevel2["WARN"] = 3] = "WARN";
        LogLevel2[LogLevel2["ERROR"] = 4] = "ERROR";
        LogLevel2[LogLevel2["SILENT"] = 5] = "SILENT";
      })(LogLevel || (LogLevel = {}));
      levelStringToEnum = {
        "debug": LogLevel.DEBUG,
        "verbose": LogLevel.VERBOSE,
        "info": LogLevel.INFO,
        "warn": LogLevel.WARN,
        "error": LogLevel.ERROR,
        "silent": LogLevel.SILENT
      };
      defaultLogLevel = LogLevel.INFO;
      ConsoleMethod = {
        [LogLevel.DEBUG]: "log",
        [LogLevel.VERBOSE]: "log",
        [LogLevel.INFO]: "info",
        [LogLevel.WARN]: "warn",
        [LogLevel.ERROR]: "error"
      };
      defaultLogHandler = (instance, logType, ...args) => {
        if (logType < instance.logLevel) {
          return;
        }
        const now = (/* @__PURE__ */ new Date()).toISOString();
        const method = ConsoleMethod[logType];
        if (method) {
          console[method](`[${now}]  ${instance.name}:`, ...args);
        } else {
          throw new Error(`Attempted to log a message with an invalid logType (value: ${logType})`);
        }
      };
      Logger = class {
        /**
         * Gives you an instance of a Logger to capture messages according to
         * Firebase's logging scheme.
         *
         * @param name The name that the logs will be associated with
         */
        constructor(name3) {
          this.name = name3;
          this._logLevel = defaultLogLevel;
          this._logHandler = defaultLogHandler;
          this._userLogHandler = null;
          instances.push(this);
        }
        get logLevel() {
          return this._logLevel;
        }
        set logLevel(val) {
          if (!(val in LogLevel)) {
            throw new TypeError(`Invalid value "${val}" assigned to \`logLevel\``);
          }
          this._logLevel = val;
        }
        // Workaround for setter/getter having to be the same type.
        setLogLevel(val) {
          this._logLevel = typeof val === "string" ? levelStringToEnum[val] : val;
        }
        get logHandler() {
          return this._logHandler;
        }
        set logHandler(val) {
          if (typeof val !== "function") {
            throw new TypeError("Value assigned to `logHandler` must be a function");
          }
          this._logHandler = val;
        }
        get userLogHandler() {
          return this._userLogHandler;
        }
        set userLogHandler(val) {
          this._userLogHandler = val;
        }
        /**
         * The functions below are all based on the `console` interface
         */
        debug(...args) {
          this._userLogHandler && this._userLogHandler(this, LogLevel.DEBUG, ...args);
          this._logHandler(this, LogLevel.DEBUG, ...args);
        }
        log(...args) {
          this._userLogHandler && this._userLogHandler(this, LogLevel.VERBOSE, ...args);
          this._logHandler(this, LogLevel.VERBOSE, ...args);
        }
        info(...args) {
          this._userLogHandler && this._userLogHandler(this, LogLevel.INFO, ...args);
          this._logHandler(this, LogLevel.INFO, ...args);
        }
        warn(...args) {
          this._userLogHandler && this._userLogHandler(this, LogLevel.WARN, ...args);
          this._logHandler(this, LogLevel.WARN, ...args);
        }
        error(...args) {
          this._userLogHandler && this._userLogHandler(this, LogLevel.ERROR, ...args);
          this._logHandler(this, LogLevel.ERROR, ...args);
        }
      };
    }
  });

  // node_modules/idb/build/wrap-idb-value.js
  function getIdbProxyableTypes() {
    return idbProxyableTypes || (idbProxyableTypes = [
      IDBDatabase,
      IDBObjectStore,
      IDBIndex,
      IDBCursor,
      IDBTransaction
    ]);
  }
  function getCursorAdvanceMethods() {
    return cursorAdvanceMethods || (cursorAdvanceMethods = [
      IDBCursor.prototype.advance,
      IDBCursor.prototype.continue,
      IDBCursor.prototype.continuePrimaryKey
    ]);
  }
  function promisifyRequest(request) {
    const promise = new Promise((resolve, reject) => {
      const unlisten = () => {
        request.removeEventListener("success", success);
        request.removeEventListener("error", error2);
      };
      const success = () => {
        resolve(wrap3(request.result));
        unlisten();
      };
      const error2 = () => {
        reject(request.error);
        unlisten();
      };
      request.addEventListener("success", success);
      request.addEventListener("error", error2);
    });
    promise.then((value) => {
      if (value instanceof IDBCursor) {
        cursorRequestMap.set(value, request);
      }
    }).catch(() => {
    });
    reverseTransformCache.set(promise, request);
    return promise;
  }
  function cacheDonePromiseForTransaction(tx) {
    if (transactionDoneMap.has(tx))
      return;
    const done = new Promise((resolve, reject) => {
      const unlisten = () => {
        tx.removeEventListener("complete", complete);
        tx.removeEventListener("error", error2);
        tx.removeEventListener("abort", error2);
      };
      const complete = () => {
        resolve();
        unlisten();
      };
      const error2 = () => {
        reject(tx.error || new DOMException("AbortError", "AbortError"));
        unlisten();
      };
      tx.addEventListener("complete", complete);
      tx.addEventListener("error", error2);
      tx.addEventListener("abort", error2);
    });
    transactionDoneMap.set(tx, done);
  }
  function replaceTraps(callback) {
    idbProxyTraps = callback(idbProxyTraps);
  }
  function wrapFunction(func) {
    if (func === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype)) {
      return function(storeNames, ...args) {
        const tx = func.call(unwrap(this), storeNames, ...args);
        transactionStoreNamesMap.set(tx, storeNames.sort ? storeNames.sort() : [storeNames]);
        return wrap3(tx);
      };
    }
    if (getCursorAdvanceMethods().includes(func)) {
      return function(...args) {
        func.apply(unwrap(this), args);
        return wrap3(cursorRequestMap.get(this));
      };
    }
    return function(...args) {
      return wrap3(func.apply(unwrap(this), args));
    };
  }
  function transformCachableValue(value) {
    if (typeof value === "function")
      return wrapFunction(value);
    if (value instanceof IDBTransaction)
      cacheDonePromiseForTransaction(value);
    if (instanceOfAny(value, getIdbProxyableTypes()))
      return new Proxy(value, idbProxyTraps);
    return value;
  }
  function wrap3(value) {
    if (value instanceof IDBRequest)
      return promisifyRequest(value);
    if (transformCache.has(value))
      return transformCache.get(value);
    const newValue = transformCachableValue(value);
    if (newValue !== value) {
      transformCache.set(value, newValue);
      reverseTransformCache.set(newValue, value);
    }
    return newValue;
  }
  var instanceOfAny, idbProxyableTypes, cursorAdvanceMethods, cursorRequestMap, transactionDoneMap, transactionStoreNamesMap, transformCache, reverseTransformCache, idbProxyTraps, unwrap;
  var init_wrap_idb_value = __esm({
    "node_modules/idb/build/wrap-idb-value.js"() {
      init_live_reload();
      instanceOfAny = (object, constructors) => constructors.some((c) => object instanceof c);
      cursorRequestMap = /* @__PURE__ */ new WeakMap();
      transactionDoneMap = /* @__PURE__ */ new WeakMap();
      transactionStoreNamesMap = /* @__PURE__ */ new WeakMap();
      transformCache = /* @__PURE__ */ new WeakMap();
      reverseTransformCache = /* @__PURE__ */ new WeakMap();
      idbProxyTraps = {
        get(target, prop, receiver) {
          if (target instanceof IDBTransaction) {
            if (prop === "done")
              return transactionDoneMap.get(target);
            if (prop === "objectStoreNames") {
              return target.objectStoreNames || transactionStoreNamesMap.get(target);
            }
            if (prop === "store") {
              return receiver.objectStoreNames[1] ? void 0 : receiver.objectStore(receiver.objectStoreNames[0]);
            }
          }
          return wrap3(target[prop]);
        },
        set(target, prop, value) {
          target[prop] = value;
          return true;
        },
        has(target, prop) {
          if (target instanceof IDBTransaction && (prop === "done" || prop === "store")) {
            return true;
          }
          return prop in target;
        }
      };
      unwrap = (value) => reverseTransformCache.get(value);
    }
  });

  // node_modules/idb/build/index.js
  function openDB(name3, version4, { blocked, upgrade, blocking, terminated } = {}) {
    const request = indexedDB.open(name3, version4);
    const openPromise = wrap3(request);
    if (upgrade) {
      request.addEventListener("upgradeneeded", (event) => {
        upgrade(wrap3(request.result), event.oldVersion, event.newVersion, wrap3(request.transaction), event);
      });
    }
    if (blocked) {
      request.addEventListener("blocked", (event) => blocked(
        // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
        event.oldVersion,
        event.newVersion,
        event
      ));
    }
    openPromise.then((db) => {
      if (terminated)
        db.addEventListener("close", () => terminated());
      if (blocking) {
        db.addEventListener("versionchange", (event) => blocking(event.oldVersion, event.newVersion, event));
      }
    }).catch(() => {
    });
    return openPromise;
  }
  function getMethod(target, prop) {
    if (!(target instanceof IDBDatabase && !(prop in target) && typeof prop === "string")) {
      return;
    }
    if (cachedMethods.get(prop))
      return cachedMethods.get(prop);
    const targetFuncName = prop.replace(/FromIndex$/, "");
    const useIndex = prop !== targetFuncName;
    const isWrite = writeMethods.includes(targetFuncName);
    if (
      // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
      !(targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype) || !(isWrite || readMethods.includes(targetFuncName))
    ) {
      return;
    }
    const method = async function(storeName, ...args) {
      const tx = this.transaction(storeName, isWrite ? "readwrite" : "readonly");
      let target2 = tx.store;
      if (useIndex)
        target2 = target2.index(args.shift());
      return (await Promise.all([
        target2[targetFuncName](...args),
        isWrite && tx.done
      ]))[0];
    };
    cachedMethods.set(prop, method);
    return method;
  }
  var readMethods, writeMethods, cachedMethods;
  var init_build = __esm({
    "node_modules/idb/build/index.js"() {
      init_live_reload();
      init_wrap_idb_value();
      init_wrap_idb_value();
      readMethods = ["get", "getKey", "getAll", "getAllKeys", "count"];
      writeMethods = ["put", "add", "delete", "clear"];
      cachedMethods = /* @__PURE__ */ new Map();
      replaceTraps((oldTraps) => ({
        ...oldTraps,
        get: (target, prop, receiver) => getMethod(target, prop) || oldTraps.get(target, prop, receiver),
        has: (target, prop) => !!getMethod(target, prop) || oldTraps.has(target, prop)
      }));
    }
  });

  // node_modules/@firebase/app/dist/esm/index.esm2017.js
  function isVersionServiceProvider(provider) {
    const component = provider.getComponent();
    return (component === null || component === void 0 ? void 0 : component.type) === "VERSION";
  }
  function _addComponent(app, component) {
    try {
      app.container.addComponent(component);
    } catch (e) {
      logger.debug(`Component ${component.name} failed to register with FirebaseApp ${app.name}`, e);
    }
  }
  function _registerComponent(component) {
    const componentName = component.name;
    if (_components.has(componentName)) {
      logger.debug(`There were multiple attempts to register component ${componentName}.`);
      return false;
    }
    _components.set(componentName, component);
    for (const app of _apps.values()) {
      _addComponent(app, component);
    }
    for (const serverApp of _serverApps.values()) {
      _addComponent(serverApp, component);
    }
    return true;
  }
  function _isFirebaseServerApp(obj) {
    if (obj === null || obj === void 0) {
      return false;
    }
    return obj.settings !== void 0;
  }
  function registerVersion(libraryKeyOrName, version4, variant) {
    var _a;
    let library = (_a = PLATFORM_LOG_STRING[libraryKeyOrName]) !== null && _a !== void 0 ? _a : libraryKeyOrName;
    if (variant) {
      library += `-${variant}`;
    }
    const libraryMismatch = library.match(/\s|\//);
    const versionMismatch = version4.match(/\s|\//);
    if (libraryMismatch || versionMismatch) {
      const warning = [
        `Unable to register library "${library}" with version "${version4}":`
      ];
      if (libraryMismatch) {
        warning.push(`library name "${library}" contains illegal characters (whitespace or "/")`);
      }
      if (libraryMismatch && versionMismatch) {
        warning.push("and");
      }
      if (versionMismatch) {
        warning.push(`version name "${version4}" contains illegal characters (whitespace or "/")`);
      }
      logger.warn(warning.join(" "));
      return;
    }
    _registerComponent(new Component(
      `${library}-version`,
      () => ({ library, version: version4 }),
      "VERSION"
      /* ComponentType.VERSION */
    ));
  }
  function getDbPromise() {
    if (!dbPromise) {
      dbPromise = openDB(DB_NAME, DB_VERSION, {
        upgrade: (db, oldVersion) => {
          switch (oldVersion) {
            case 0:
              try {
                db.createObjectStore(STORE_NAME);
              } catch (e) {
                console.warn(e);
              }
          }
        }
      }).catch((e) => {
        throw ERROR_FACTORY.create("idb-open", {
          originalErrorMessage: e.message
        });
      });
    }
    return dbPromise;
  }
  async function readHeartbeatsFromIndexedDB(app) {
    try {
      const db = await getDbPromise();
      const tx = db.transaction(STORE_NAME);
      const result = await tx.objectStore(STORE_NAME).get(computeKey(app));
      await tx.done;
      return result;
    } catch (e) {
      if (e instanceof FirebaseError) {
        logger.warn(e.message);
      } else {
        const idbGetError = ERROR_FACTORY.create("idb-get", {
          originalErrorMessage: e === null || e === void 0 ? void 0 : e.message
        });
        logger.warn(idbGetError.message);
      }
    }
  }
  async function writeHeartbeatsToIndexedDB(app, heartbeatObject) {
    try {
      const db = await getDbPromise();
      const tx = db.transaction(STORE_NAME, "readwrite");
      const objectStore = tx.objectStore(STORE_NAME);
      await objectStore.put(heartbeatObject, computeKey(app));
      await tx.done;
    } catch (e) {
      if (e instanceof FirebaseError) {
        logger.warn(e.message);
      } else {
        const idbGetError = ERROR_FACTORY.create("idb-set", {
          originalErrorMessage: e === null || e === void 0 ? void 0 : e.message
        });
        logger.warn(idbGetError.message);
      }
    }
  }
  function computeKey(app) {
    return `${app.name}!${app.options.appId}`;
  }
  function getUTCDateString() {
    const today = /* @__PURE__ */ new Date();
    return today.toISOString().substring(0, 10);
  }
  function extractHeartbeatsForHeader(heartbeatsCache, maxSize = MAX_HEADER_BYTES) {
    const heartbeatsToSend = [];
    let unsentEntries = heartbeatsCache.slice();
    for (const singleDateHeartbeat of heartbeatsCache) {
      const heartbeatEntry = heartbeatsToSend.find((hb) => hb.agent === singleDateHeartbeat.agent);
      if (!heartbeatEntry) {
        heartbeatsToSend.push({
          agent: singleDateHeartbeat.agent,
          dates: [singleDateHeartbeat.date]
        });
        if (countBytes(heartbeatsToSend) > maxSize) {
          heartbeatsToSend.pop();
          break;
        }
      } else {
        heartbeatEntry.dates.push(singleDateHeartbeat.date);
        if (countBytes(heartbeatsToSend) > maxSize) {
          heartbeatEntry.dates.pop();
          break;
        }
      }
      unsentEntries = unsentEntries.slice(1);
    }
    return {
      heartbeatsToSend,
      unsentEntries
    };
  }
  function countBytes(heartbeatsCache) {
    return base64urlEncodeWithoutPadding(
      // heartbeatsCache wrapper properties
      JSON.stringify({ version: 2, heartbeats: heartbeatsCache })
    ).length;
  }
  function getEarliestHeartbeatIdx(heartbeats) {
    if (heartbeats.length === 0) {
      return -1;
    }
    let earliestHeartbeatIdx = 0;
    let earliestHeartbeatDate = heartbeats[0].date;
    for (let i = 1; i < heartbeats.length; i++) {
      if (heartbeats[i].date < earliestHeartbeatDate) {
        earliestHeartbeatDate = heartbeats[i].date;
        earliestHeartbeatIdx = i;
      }
    }
    return earliestHeartbeatIdx;
  }
  function registerCoreComponents(variant) {
    _registerComponent(new Component(
      "platform-logger",
      (container) => new PlatformLoggerServiceImpl(container),
      "PRIVATE"
      /* ComponentType.PRIVATE */
    ));
    _registerComponent(new Component(
      "heartbeat",
      (container) => new HeartbeatServiceImpl(container),
      "PRIVATE"
      /* ComponentType.PRIVATE */
    ));
    registerVersion(name$q, version$1, variant);
    registerVersion(name$q, version$1, "esm2017");
    registerVersion("fire-js", "");
  }
  var PlatformLoggerServiceImpl, name$q, version$1, logger, name$p, name$o, name$n, name$m, name$l, name$k, name$j, name$i, name$h, name$g, name$f, name$e, name$d, name$c, name$b, name$a, name$9, name$8, name$7, name$6, name$5, name$4, name$3, name$2, name$1, name, version2, PLATFORM_LOG_STRING, _apps, _serverApps, _components, ERRORS, ERROR_FACTORY, SDK_VERSION, DB_NAME, DB_VERSION, STORE_NAME, dbPromise, MAX_HEADER_BYTES, MAX_NUM_STORED_HEARTBEATS, HeartbeatServiceImpl, HeartbeatStorageImpl;
  var init_index_esm20174 = __esm({
    "node_modules/@firebase/app/dist/esm/index.esm2017.js"() {
      init_live_reload();
      init_index_esm20172();
      init_index_esm20173();
      init_index_esm2017();
      init_index_esm2017();
      init_build();
      PlatformLoggerServiceImpl = class {
        constructor(container) {
          this.container = container;
        }
        // In initial implementation, this will be called by installations on
        // auth token refresh, and installations will send this string.
        getPlatformInfoString() {
          const providers = this.container.getProviders();
          return providers.map((provider) => {
            if (isVersionServiceProvider(provider)) {
              const service = provider.getImmediate();
              return `${service.library}/${service.version}`;
            } else {
              return null;
            }
          }).filter((logString) => logString).join(" ");
        }
      };
      name$q = "@firebase/app";
      version$1 = "0.11.0";
      logger = new Logger("@firebase/app");
      name$p = "@firebase/app-compat";
      name$o = "@firebase/analytics-compat";
      name$n = "@firebase/analytics";
      name$m = "@firebase/app-check-compat";
      name$l = "@firebase/app-check";
      name$k = "@firebase/auth";
      name$j = "@firebase/auth-compat";
      name$i = "@firebase/database";
      name$h = "@firebase/data-connect";
      name$g = "@firebase/database-compat";
      name$f = "@firebase/functions";
      name$e = "@firebase/functions-compat";
      name$d = "@firebase/installations";
      name$c = "@firebase/installations-compat";
      name$b = "@firebase/messaging";
      name$a = "@firebase/messaging-compat";
      name$9 = "@firebase/performance";
      name$8 = "@firebase/performance-compat";
      name$7 = "@firebase/remote-config";
      name$6 = "@firebase/remote-config-compat";
      name$5 = "@firebase/storage";
      name$4 = "@firebase/storage-compat";
      name$3 = "@firebase/firestore";
      name$2 = "@firebase/vertexai";
      name$1 = "@firebase/firestore-compat";
      name = "firebase";
      version2 = "11.3.0";
      PLATFORM_LOG_STRING = {
        [name$q]: "fire-core",
        [name$p]: "fire-core-compat",
        [name$n]: "fire-analytics",
        [name$o]: "fire-analytics-compat",
        [name$l]: "fire-app-check",
        [name$m]: "fire-app-check-compat",
        [name$k]: "fire-auth",
        [name$j]: "fire-auth-compat",
        [name$i]: "fire-rtdb",
        [name$h]: "fire-data-connect",
        [name$g]: "fire-rtdb-compat",
        [name$f]: "fire-fn",
        [name$e]: "fire-fn-compat",
        [name$d]: "fire-iid",
        [name$c]: "fire-iid-compat",
        [name$b]: "fire-fcm",
        [name$a]: "fire-fcm-compat",
        [name$9]: "fire-perf",
        [name$8]: "fire-perf-compat",
        [name$7]: "fire-rc",
        [name$6]: "fire-rc-compat",
        [name$5]: "fire-gcs",
        [name$4]: "fire-gcs-compat",
        [name$3]: "fire-fst",
        [name$1]: "fire-fst-compat",
        [name$2]: "fire-vertex",
        "fire-js": "fire-js",
        // Platform identifier for JS SDK.
        [name]: "fire-js-all"
      };
      _apps = /* @__PURE__ */ new Map();
      _serverApps = /* @__PURE__ */ new Map();
      _components = /* @__PURE__ */ new Map();
      ERRORS = {
        [
          "no-app"
          /* AppError.NO_APP */
        ]: "No Firebase App '{$appName}' has been created - call initializeApp() first",
        [
          "bad-app-name"
          /* AppError.BAD_APP_NAME */
        ]: "Illegal App name: '{$appName}'",
        [
          "duplicate-app"
          /* AppError.DUPLICATE_APP */
        ]: "Firebase App named '{$appName}' already exists with different options or config",
        [
          "app-deleted"
          /* AppError.APP_DELETED */
        ]: "Firebase App named '{$appName}' already deleted",
        [
          "server-app-deleted"
          /* AppError.SERVER_APP_DELETED */
        ]: "Firebase Server App has been deleted",
        [
          "no-options"
          /* AppError.NO_OPTIONS */
        ]: "Need to provide options, when not being deployed to hosting via source.",
        [
          "invalid-app-argument"
          /* AppError.INVALID_APP_ARGUMENT */
        ]: "firebase.{$appName}() takes either no argument or a Firebase App instance.",
        [
          "invalid-log-argument"
          /* AppError.INVALID_LOG_ARGUMENT */
        ]: "First argument to `onLog` must be null or a function.",
        [
          "idb-open"
          /* AppError.IDB_OPEN */
        ]: "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
        [
          "idb-get"
          /* AppError.IDB_GET */
        ]: "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
        [
          "idb-set"
          /* AppError.IDB_WRITE */
        ]: "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
        [
          "idb-delete"
          /* AppError.IDB_DELETE */
        ]: "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",
        [
          "finalization-registry-not-supported"
          /* AppError.FINALIZATION_REGISTRY_NOT_SUPPORTED */
        ]: "FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",
        [
          "invalid-server-app-environment"
          /* AppError.INVALID_SERVER_APP_ENVIRONMENT */
        ]: "FirebaseServerApp is not for use in browser environments."
      };
      ERROR_FACTORY = new ErrorFactory("app", "Firebase", ERRORS);
      SDK_VERSION = version2;
      DB_NAME = "firebase-heartbeat-database";
      DB_VERSION = 1;
      STORE_NAME = "firebase-heartbeat-store";
      dbPromise = null;
      MAX_HEADER_BYTES = 1024;
      MAX_NUM_STORED_HEARTBEATS = 30;
      HeartbeatServiceImpl = class {
        constructor(container) {
          this.container = container;
          this._heartbeatsCache = null;
          const app = this.container.getProvider("app").getImmediate();
          this._storage = new HeartbeatStorageImpl(app);
          this._heartbeatsCachePromise = this._storage.read().then((result) => {
            this._heartbeatsCache = result;
            return result;
          });
        }
        /**
         * Called to report a heartbeat. The function will generate
         * a HeartbeatsByUserAgent object, update heartbeatsCache, and persist it
         * to IndexedDB.
         * Note that we only store one heartbeat per day. So if a heartbeat for today is
         * already logged, subsequent calls to this function in the same day will be ignored.
         */
        async triggerHeartbeat() {
          var _a, _b;
          try {
            const platformLogger = this.container.getProvider("platform-logger").getImmediate();
            const agent = platformLogger.getPlatformInfoString();
            const date = getUTCDateString();
            if (((_a = this._heartbeatsCache) === null || _a === void 0 ? void 0 : _a.heartbeats) == null) {
              this._heartbeatsCache = await this._heartbeatsCachePromise;
              if (((_b = this._heartbeatsCache) === null || _b === void 0 ? void 0 : _b.heartbeats) == null) {
                return;
              }
            }
            if (this._heartbeatsCache.lastSentHeartbeatDate === date || this._heartbeatsCache.heartbeats.some((singleDateHeartbeat) => singleDateHeartbeat.date === date)) {
              return;
            } else {
              this._heartbeatsCache.heartbeats.push({ date, agent });
              if (this._heartbeatsCache.heartbeats.length > MAX_NUM_STORED_HEARTBEATS) {
                const earliestHeartbeatIdx = getEarliestHeartbeatIdx(this._heartbeatsCache.heartbeats);
                this._heartbeatsCache.heartbeats.splice(earliestHeartbeatIdx, 1);
              }
            }
            return this._storage.overwrite(this._heartbeatsCache);
          } catch (e) {
            logger.warn(e);
          }
        }
        /**
         * Returns a base64 encoded string which can be attached to the heartbeat-specific header directly.
         * It also clears all heartbeats from memory as well as in IndexedDB.
         *
         * NOTE: Consuming product SDKs should not send the header if this method
         * returns an empty string.
         */
        async getHeartbeatsHeader() {
          var _a;
          try {
            if (this._heartbeatsCache === null) {
              await this._heartbeatsCachePromise;
            }
            if (((_a = this._heartbeatsCache) === null || _a === void 0 ? void 0 : _a.heartbeats) == null || this._heartbeatsCache.heartbeats.length === 0) {
              return "";
            }
            const date = getUTCDateString();
            const { heartbeatsToSend, unsentEntries } = extractHeartbeatsForHeader(this._heartbeatsCache.heartbeats);
            const headerString = base64urlEncodeWithoutPadding(JSON.stringify({ version: 2, heartbeats: heartbeatsToSend }));
            this._heartbeatsCache.lastSentHeartbeatDate = date;
            if (unsentEntries.length > 0) {
              this._heartbeatsCache.heartbeats = unsentEntries;
              await this._storage.overwrite(this._heartbeatsCache);
            } else {
              this._heartbeatsCache.heartbeats = [];
              void this._storage.overwrite(this._heartbeatsCache);
            }
            return headerString;
          } catch (e) {
            logger.warn(e);
            return "";
          }
        }
      };
      HeartbeatStorageImpl = class {
        constructor(app) {
          this.app = app;
          this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck();
        }
        async runIndexedDBEnvironmentCheck() {
          if (!isIndexedDBAvailable()) {
            return false;
          } else {
            return validateIndexedDBOpenable().then(() => true).catch(() => false);
          }
        }
        /**
         * Read all heartbeats.
         */
        async read() {
          const canUseIndexedDB = await this._canUseIndexedDBPromise;
          if (!canUseIndexedDB) {
            return { heartbeats: [] };
          } else {
            const idbHeartbeatObject = await readHeartbeatsFromIndexedDB(this.app);
            if (idbHeartbeatObject === null || idbHeartbeatObject === void 0 ? void 0 : idbHeartbeatObject.heartbeats) {
              return idbHeartbeatObject;
            } else {
              return { heartbeats: [] };
            }
          }
        }
        // overwrite the storage with the provided heartbeats
        async overwrite(heartbeatsObject) {
          var _a;
          const canUseIndexedDB = await this._canUseIndexedDBPromise;
          if (!canUseIndexedDB) {
            return;
          } else {
            const existingHeartbeatsObject = await this.read();
            return writeHeartbeatsToIndexedDB(this.app, {
              lastSentHeartbeatDate: (_a = heartbeatsObject.lastSentHeartbeatDate) !== null && _a !== void 0 ? _a : existingHeartbeatsObject.lastSentHeartbeatDate,
              heartbeats: heartbeatsObject.heartbeats
            });
          }
        }
        // add heartbeats
        async add(heartbeatsObject) {
          var _a;
          const canUseIndexedDB = await this._canUseIndexedDBPromise;
          if (!canUseIndexedDB) {
            return;
          } else {
            const existingHeartbeatsObject = await this.read();
            return writeHeartbeatsToIndexedDB(this.app, {
              lastSentHeartbeatDate: (_a = heartbeatsObject.lastSentHeartbeatDate) !== null && _a !== void 0 ? _a : existingHeartbeatsObject.lastSentHeartbeatDate,
              heartbeats: [
                ...existingHeartbeatsObject.heartbeats,
                ...heartbeatsObject.heartbeats
              ]
            });
          }
        }
      };
      registerCoreComponents("");
    }
  });

  // node_modules/@firebase/database/dist/index.esm2017.js
  function setSDKVersion(version4) {
    SDK_VERSION2 = version4;
  }
  function each(obj, fn) {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        fn(key, obj[key]);
      }
    }
  }
  function repoInfoNeedsQueryParam(repoInfo) {
    return repoInfo.host !== repoInfo.internalHost || repoInfo.isCustomHost() || repoInfo.includeNamespaceInQueryParams;
  }
  function repoInfoConnectionURL(repoInfo, type, params) {
    assert(typeof type === "string", "typeof type must == string");
    assert(typeof params === "object", "typeof params must == object");
    let connURL;
    if (type === WEBSOCKET) {
      connURL = (repoInfo.secure ? "wss://" : "ws://") + repoInfo.internalHost + "/.ws?";
    } else if (type === LONG_POLLING) {
      connURL = (repoInfo.secure ? "https://" : "http://") + repoInfo.internalHost + "/.lp?";
    } else {
      throw new Error("Unknown connection type: " + type);
    }
    if (repoInfoNeedsQueryParam(repoInfo)) {
      params["ns"] = repoInfo.namespace;
    }
    const pairs = [];
    each(params, (key, value) => {
      pairs.push(key + "=" + value);
    });
    return connURL + pairs.join("&");
  }
  function statsManagerGetCollection(repoInfo) {
    const hashString = repoInfo.toString();
    if (!collections[hashString]) {
      collections[hashString] = new StatsCollection();
    }
    return collections[hashString];
  }
  function statsManagerGetOrCreateReporter(repoInfo, creatorFunction) {
    const hashString = repoInfo.toString();
    if (!reporters[hashString]) {
      reporters[hashString] = creatorFunction();
    }
    return reporters[hashString];
  }
  function newEmptyPath() {
    return new Path("");
  }
  function pathGetFront(path) {
    if (path.pieceNum_ >= path.pieces_.length) {
      return null;
    }
    return path.pieces_[path.pieceNum_];
  }
  function pathGetLength(path) {
    return path.pieces_.length - path.pieceNum_;
  }
  function pathPopFront(path) {
    let pieceNum = path.pieceNum_;
    if (pieceNum < path.pieces_.length) {
      pieceNum++;
    }
    return new Path(path.pieces_, pieceNum);
  }
  function pathGetBack(path) {
    if (path.pieceNum_ < path.pieces_.length) {
      return path.pieces_[path.pieces_.length - 1];
    }
    return null;
  }
  function pathToUrlEncodedString(path) {
    let pathString = "";
    for (let i = path.pieceNum_; i < path.pieces_.length; i++) {
      if (path.pieces_[i] !== "") {
        pathString += "/" + encodeURIComponent(String(path.pieces_[i]));
      }
    }
    return pathString || "/";
  }
  function pathSlice(path, begin = 0) {
    return path.pieces_.slice(path.pieceNum_ + begin);
  }
  function pathParent(path) {
    if (path.pieceNum_ >= path.pieces_.length) {
      return null;
    }
    const pieces = [];
    for (let i = path.pieceNum_; i < path.pieces_.length - 1; i++) {
      pieces.push(path.pieces_[i]);
    }
    return new Path(pieces, 0);
  }
  function pathChild(path, childPathObj) {
    const pieces = [];
    for (let i = path.pieceNum_; i < path.pieces_.length; i++) {
      pieces.push(path.pieces_[i]);
    }
    if (childPathObj instanceof Path) {
      for (let i = childPathObj.pieceNum_; i < childPathObj.pieces_.length; i++) {
        pieces.push(childPathObj.pieces_[i]);
      }
    } else {
      const childPieces = childPathObj.split("/");
      for (let i = 0; i < childPieces.length; i++) {
        if (childPieces[i].length > 0) {
          pieces.push(childPieces[i]);
        }
      }
    }
    return new Path(pieces, 0);
  }
  function pathIsEmpty(path) {
    return path.pieceNum_ >= path.pieces_.length;
  }
  function newRelativePath(outerPath, innerPath) {
    const outer = pathGetFront(outerPath), inner = pathGetFront(innerPath);
    if (outer === null) {
      return innerPath;
    } else if (outer === inner) {
      return newRelativePath(pathPopFront(outerPath), pathPopFront(innerPath));
    } else {
      throw new Error("INTERNAL ERROR: innerPath (" + innerPath + ") is not within outerPath (" + outerPath + ")");
    }
  }
  function pathEquals(path, other) {
    if (pathGetLength(path) !== pathGetLength(other)) {
      return false;
    }
    for (let i = path.pieceNum_, j = other.pieceNum_; i <= path.pieces_.length; i++, j++) {
      if (path.pieces_[i] !== other.pieces_[j]) {
        return false;
      }
    }
    return true;
  }
  function pathContains(path, other) {
    let i = path.pieceNum_;
    let j = other.pieceNum_;
    if (pathGetLength(path) > pathGetLength(other)) {
      return false;
    }
    while (i < path.pieces_.length) {
      if (path.pieces_[i] !== other.pieces_[j]) {
        return false;
      }
      ++i;
      ++j;
    }
    return true;
  }
  function validationPathPush(validationPath, child) {
    if (validationPath.parts_.length > 0) {
      validationPath.byteLength_ += 1;
    }
    validationPath.parts_.push(child);
    validationPath.byteLength_ += stringLength(child);
    validationPathCheckValid(validationPath);
  }
  function validationPathPop(validationPath) {
    const last = validationPath.parts_.pop();
    validationPath.byteLength_ -= stringLength(last);
    if (validationPath.parts_.length > 0) {
      validationPath.byteLength_ -= 1;
    }
  }
  function validationPathCheckValid(validationPath) {
    if (validationPath.byteLength_ > MAX_PATH_LENGTH_BYTES) {
      throw new Error(validationPath.errorPrefix_ + "has a key path longer than " + MAX_PATH_LENGTH_BYTES + " bytes (" + validationPath.byteLength_ + ").");
    }
    if (validationPath.parts_.length > MAX_PATH_DEPTH) {
      throw new Error(validationPath.errorPrefix_ + "path specified exceeds the maximum depth that can be written (" + MAX_PATH_DEPTH + ") or object contains a cycle " + validationPathToErrorString(validationPath));
    }
  }
  function validationPathToErrorString(validationPath) {
    if (validationPath.parts_.length === 0) {
      return "";
    }
    return "in property '" + validationPath.parts_.join(".") + "'";
  }
  function NAME_ONLY_COMPARATOR(left, right) {
    return nameCompare(left.name, right.name);
  }
  function NAME_COMPARATOR(left, right) {
    return nameCompare(left, right);
  }
  function setMaxNode$1(val) {
    MAX_NODE$2 = val;
  }
  function setNodeFromJSON(val) {
    nodeFromJSON$1 = val;
  }
  function setMaxNode(val) {
    MAX_NODE$1 = val;
  }
  function nodeFromJSON(json, priority = null) {
    if (json === null) {
      return ChildrenNode.EMPTY_NODE;
    }
    if (typeof json === "object" && ".priority" in json) {
      priority = json[".priority"];
    }
    assert(priority === null || typeof priority === "string" || typeof priority === "number" || typeof priority === "object" && ".sv" in priority, "Invalid priority type found: " + typeof priority);
    if (typeof json === "object" && ".value" in json && json[".value"] !== null) {
      json = json[".value"];
    }
    if (typeof json !== "object" || ".sv" in json) {
      const jsonLeaf = json;
      return new LeafNode(jsonLeaf, nodeFromJSON(priority));
    }
    if (!(json instanceof Array) && USE_HINZE) {
      const children = [];
      let childrenHavePriority = false;
      const hinzeJsonObj = json;
      each(hinzeJsonObj, (key, child) => {
        if (key.substring(0, 1) !== ".") {
          const childNode = nodeFromJSON(child);
          if (!childNode.isEmpty()) {
            childrenHavePriority = childrenHavePriority || !childNode.getPriority().isEmpty();
            children.push(new NamedNode(key, childNode));
          }
        }
      });
      if (children.length === 0) {
        return ChildrenNode.EMPTY_NODE;
      }
      const childSet = buildChildSet(children, NAME_ONLY_COMPARATOR, (namedNode) => namedNode.name, NAME_COMPARATOR);
      if (childrenHavePriority) {
        const sortedChildSet = buildChildSet(children, PRIORITY_INDEX.getCompare());
        return new ChildrenNode(childSet, nodeFromJSON(priority), new IndexMap({ ".priority": sortedChildSet }, { ".priority": PRIORITY_INDEX }));
      } else {
        return new ChildrenNode(childSet, nodeFromJSON(priority), IndexMap.Default);
      }
    } else {
      let node = ChildrenNode.EMPTY_NODE;
      each(json, (key, childData) => {
        if (contains(json, key)) {
          if (key.substring(0, 1) !== ".") {
            const childNode = nodeFromJSON(childData);
            if (childNode.isLeafNode() || !childNode.isEmpty()) {
              node = node.updateImmediateChild(key, childNode);
            }
          }
        }
      });
      return node.updatePriority(nodeFromJSON(priority));
    }
  }
  function changeValue(snapshotNode) {
    return { type: "value", snapshotNode };
  }
  function changeChildAdded(childName, snapshotNode) {
    return { type: "child_added", snapshotNode, childName };
  }
  function changeChildRemoved(childName, snapshotNode) {
    return { type: "child_removed", snapshotNode, childName };
  }
  function changeChildChanged(childName, snapshotNode, oldSnap) {
    return {
      type: "child_changed",
      snapshotNode,
      childName,
      oldSnap
    };
  }
  function changeChildMoved(childName, snapshotNode) {
    return { type: "child_moved", snapshotNode, childName };
  }
  function queryParamsToRestQueryStringParameters(queryParams) {
    const qs = {};
    if (queryParams.isDefault()) {
      return qs;
    }
    let orderBy;
    if (queryParams.index_ === PRIORITY_INDEX) {
      orderBy = "$priority";
    } else if (queryParams.index_ === VALUE_INDEX) {
      orderBy = "$value";
    } else if (queryParams.index_ === KEY_INDEX) {
      orderBy = "$key";
    } else {
      assert(queryParams.index_ instanceof PathIndex, "Unrecognized index type!");
      orderBy = queryParams.index_.toString();
    }
    qs[
      "orderBy"
      /* REST_QUERY_CONSTANTS.ORDER_BY */
    ] = stringify(orderBy);
    if (queryParams.startSet_) {
      const startParam = queryParams.startAfterSet_ ? "startAfter" : "startAt";
      qs[startParam] = stringify(queryParams.indexStartValue_);
      if (queryParams.startNameSet_) {
        qs[startParam] += "," + stringify(queryParams.indexStartName_);
      }
    }
    if (queryParams.endSet_) {
      const endParam = queryParams.endBeforeSet_ ? "endBefore" : "endAt";
      qs[endParam] = stringify(queryParams.indexEndValue_);
      if (queryParams.endNameSet_) {
        qs[endParam] += "," + stringify(queryParams.indexEndName_);
      }
    }
    if (queryParams.limitSet_) {
      if (queryParams.isViewFromLeft()) {
        qs[
          "limitToFirst"
          /* REST_QUERY_CONSTANTS.LIMIT_TO_FIRST */
        ] = queryParams.limit_;
      } else {
        qs[
          "limitToLast"
          /* REST_QUERY_CONSTANTS.LIMIT_TO_LAST */
        ] = queryParams.limit_;
      }
    }
    return qs;
  }
  function queryParamsGetQueryObject(queryParams) {
    const obj = {};
    if (queryParams.startSet_) {
      obj[
        "sp"
        /* WIRE_PROTOCOL_CONSTANTS.INDEX_START_VALUE */
      ] = queryParams.indexStartValue_;
      if (queryParams.startNameSet_) {
        obj[
          "sn"
          /* WIRE_PROTOCOL_CONSTANTS.INDEX_START_NAME */
        ] = queryParams.indexStartName_;
      }
      obj[
        "sin"
        /* WIRE_PROTOCOL_CONSTANTS.INDEX_START_IS_INCLUSIVE */
      ] = !queryParams.startAfterSet_;
    }
    if (queryParams.endSet_) {
      obj[
        "ep"
        /* WIRE_PROTOCOL_CONSTANTS.INDEX_END_VALUE */
      ] = queryParams.indexEndValue_;
      if (queryParams.endNameSet_) {
        obj[
          "en"
          /* WIRE_PROTOCOL_CONSTANTS.INDEX_END_NAME */
        ] = queryParams.indexEndName_;
      }
      obj[
        "ein"
        /* WIRE_PROTOCOL_CONSTANTS.INDEX_END_IS_INCLUSIVE */
      ] = !queryParams.endBeforeSet_;
    }
    if (queryParams.limitSet_) {
      obj[
        "l"
        /* WIRE_PROTOCOL_CONSTANTS.LIMIT */
      ] = queryParams.limit_;
      let viewFrom = queryParams.viewFrom_;
      if (viewFrom === "") {
        if (queryParams.isViewFromLeft()) {
          viewFrom = "l";
        } else {
          viewFrom = "r";
        }
      }
      obj[
        "vf"
        /* WIRE_PROTOCOL_CONSTANTS.VIEW_FROM */
      ] = viewFrom;
    }
    if (queryParams.index_ !== PRIORITY_INDEX) {
      obj[
        "i"
        /* WIRE_PROTOCOL_CONSTANTS.INDEX */
      ] = queryParams.index_.toString();
    }
    return obj;
  }
  function newSparseSnapshotTree() {
    return {
      value: null,
      children: /* @__PURE__ */ new Map()
    };
  }
  function sparseSnapshotTreeRemember(sparseSnapshotTree, path, data) {
    if (pathIsEmpty(path)) {
      sparseSnapshotTree.value = data;
      sparseSnapshotTree.children.clear();
    } else if (sparseSnapshotTree.value !== null) {
      sparseSnapshotTree.value = sparseSnapshotTree.value.updateChild(path, data);
    } else {
      const childKey = pathGetFront(path);
      if (!sparseSnapshotTree.children.has(childKey)) {
        sparseSnapshotTree.children.set(childKey, newSparseSnapshotTree());
      }
      const child = sparseSnapshotTree.children.get(childKey);
      path = pathPopFront(path);
      sparseSnapshotTreeRemember(child, path, data);
    }
  }
  function sparseSnapshotTreeForEachTree(sparseSnapshotTree, prefixPath, func) {
    if (sparseSnapshotTree.value !== null) {
      func(prefixPath, sparseSnapshotTree.value);
    } else {
      sparseSnapshotTreeForEachChild(sparseSnapshotTree, (key, tree) => {
        const path = new Path(prefixPath.toString() + "/" + key);
        sparseSnapshotTreeForEachTree(tree, path, func);
      });
    }
  }
  function sparseSnapshotTreeForEachChild(sparseSnapshotTree, func) {
    sparseSnapshotTree.children.forEach((tree, key) => {
      func(key, tree);
    });
  }
  function newOperationSourceUser() {
    return {
      fromUser: true,
      fromServer: false,
      queryId: null,
      tagged: false
    };
  }
  function newOperationSourceServer() {
    return {
      fromUser: false,
      fromServer: true,
      queryId: null,
      tagged: false
    };
  }
  function newOperationSourceServerTaggedQuery(queryId) {
    return {
      fromUser: false,
      fromServer: true,
      queryId,
      tagged: true
    };
  }
  function eventGeneratorGenerateEventsForChanges(eventGenerator, changes, eventCache, eventRegistrations) {
    const events = [];
    const moves = [];
    changes.forEach((change) => {
      if (change.type === "child_changed" && eventGenerator.index_.indexedValueChanged(change.oldSnap, change.snapshotNode)) {
        moves.push(changeChildMoved(change.childName, change.snapshotNode));
      }
    });
    eventGeneratorGenerateEventsForType(eventGenerator, events, "child_removed", changes, eventRegistrations, eventCache);
    eventGeneratorGenerateEventsForType(eventGenerator, events, "child_added", changes, eventRegistrations, eventCache);
    eventGeneratorGenerateEventsForType(eventGenerator, events, "child_moved", moves, eventRegistrations, eventCache);
    eventGeneratorGenerateEventsForType(eventGenerator, events, "child_changed", changes, eventRegistrations, eventCache);
    eventGeneratorGenerateEventsForType(eventGenerator, events, "value", changes, eventRegistrations, eventCache);
    return events;
  }
  function eventGeneratorGenerateEventsForType(eventGenerator, events, eventType, changes, registrations, eventCache) {
    const filteredChanges = changes.filter((change) => change.type === eventType);
    filteredChanges.sort((a, b) => eventGeneratorCompareChanges(eventGenerator, a, b));
    filteredChanges.forEach((change) => {
      const materializedChange = eventGeneratorMaterializeSingleChange(eventGenerator, change, eventCache);
      registrations.forEach((registration) => {
        if (registration.respondsTo(change.type)) {
          events.push(registration.createEvent(materializedChange, eventGenerator.query_));
        }
      });
    });
  }
  function eventGeneratorMaterializeSingleChange(eventGenerator, change, eventCache) {
    if (change.type === "value" || change.type === "child_removed") {
      return change;
    } else {
      change.prevName = eventCache.getPredecessorChildName(change.childName, change.snapshotNode, eventGenerator.index_);
      return change;
    }
  }
  function eventGeneratorCompareChanges(eventGenerator, a, b) {
    if (a.childName == null || b.childName == null) {
      throw assertionError("Should only compare child_ events.");
    }
    const aWrapped = new NamedNode(a.childName, a.snapshotNode);
    const bWrapped = new NamedNode(b.childName, b.snapshotNode);
    return eventGenerator.index_.compare(aWrapped, bWrapped);
  }
  function newViewCache(eventCache, serverCache) {
    return { eventCache, serverCache };
  }
  function viewCacheUpdateEventSnap(viewCache, eventSnap, complete, filtered) {
    return newViewCache(new CacheNode(eventSnap, complete, filtered), viewCache.serverCache);
  }
  function viewCacheUpdateServerSnap(viewCache, serverSnap, complete, filtered) {
    return newViewCache(viewCache.eventCache, new CacheNode(serverSnap, complete, filtered));
  }
  function viewCacheGetCompleteEventSnap(viewCache) {
    return viewCache.eventCache.isFullyInitialized() ? viewCache.eventCache.getNode() : null;
  }
  function viewCacheGetCompleteServerSnap(viewCache) {
    return viewCache.serverCache.isFullyInitialized() ? viewCache.serverCache.getNode() : null;
  }
  function compoundWriteAddWrite(compoundWrite, path, node) {
    if (pathIsEmpty(path)) {
      return new CompoundWrite(new ImmutableTree(node));
    } else {
      const rootmost = compoundWrite.writeTree_.findRootMostValueAndPath(path);
      if (rootmost != null) {
        const rootMostPath = rootmost.path;
        let value = rootmost.value;
        const relativePath = newRelativePath(rootMostPath, path);
        value = value.updateChild(relativePath, node);
        return new CompoundWrite(compoundWrite.writeTree_.set(rootMostPath, value));
      } else {
        const subtree = new ImmutableTree(node);
        const newWriteTree2 = compoundWrite.writeTree_.setTree(path, subtree);
        return new CompoundWrite(newWriteTree2);
      }
    }
  }
  function compoundWriteAddWrites(compoundWrite, path, updates) {
    let newWrite = compoundWrite;
    each(updates, (childKey, node) => {
      newWrite = compoundWriteAddWrite(newWrite, pathChild(path, childKey), node);
    });
    return newWrite;
  }
  function compoundWriteRemoveWrite(compoundWrite, path) {
    if (pathIsEmpty(path)) {
      return CompoundWrite.empty();
    } else {
      const newWriteTree2 = compoundWrite.writeTree_.setTree(path, new ImmutableTree(null));
      return new CompoundWrite(newWriteTree2);
    }
  }
  function compoundWriteHasCompleteWrite(compoundWrite, path) {
    return compoundWriteGetCompleteNode(compoundWrite, path) != null;
  }
  function compoundWriteGetCompleteNode(compoundWrite, path) {
    const rootmost = compoundWrite.writeTree_.findRootMostValueAndPath(path);
    if (rootmost != null) {
      return compoundWrite.writeTree_.get(rootmost.path).getChild(newRelativePath(rootmost.path, path));
    } else {
      return null;
    }
  }
  function compoundWriteGetCompleteChildren(compoundWrite) {
    const children = [];
    const node = compoundWrite.writeTree_.value;
    if (node != null) {
      if (!node.isLeafNode()) {
        node.forEachChild(PRIORITY_INDEX, (childName, childNode) => {
          children.push(new NamedNode(childName, childNode));
        });
      }
    } else {
      compoundWrite.writeTree_.children.inorderTraversal((childName, childTree) => {
        if (childTree.value != null) {
          children.push(new NamedNode(childName, childTree.value));
        }
      });
    }
    return children;
  }
  function compoundWriteChildCompoundWrite(compoundWrite, path) {
    if (pathIsEmpty(path)) {
      return compoundWrite;
    } else {
      const shadowingNode = compoundWriteGetCompleteNode(compoundWrite, path);
      if (shadowingNode != null) {
        return new CompoundWrite(new ImmutableTree(shadowingNode));
      } else {
        return new CompoundWrite(compoundWrite.writeTree_.subtree(path));
      }
    }
  }
  function compoundWriteIsEmpty(compoundWrite) {
    return compoundWrite.writeTree_.isEmpty();
  }
  function compoundWriteApply(compoundWrite, node) {
    return applySubtreeWrite(newEmptyPath(), compoundWrite.writeTree_, node);
  }
  function applySubtreeWrite(relativePath, writeTree, node) {
    if (writeTree.value != null) {
      return node.updateChild(relativePath, writeTree.value);
    } else {
      let priorityWrite = null;
      writeTree.children.inorderTraversal((childKey, childTree) => {
        if (childKey === ".priority") {
          assert(childTree.value !== null, "Priority writes must always be leaf nodes");
          priorityWrite = childTree.value;
        } else {
          node = applySubtreeWrite(pathChild(relativePath, childKey), childTree, node);
        }
      });
      if (!node.getChild(relativePath).isEmpty() && priorityWrite !== null) {
        node = node.updateChild(pathChild(relativePath, ".priority"), priorityWrite);
      }
      return node;
    }
  }
  function writeTreeChildWrites(writeTree, path) {
    return newWriteTreeRef(path, writeTree);
  }
  function writeTreeAddOverwrite(writeTree, path, snap3, writeId, visible) {
    assert(writeId > writeTree.lastWriteId, "Stacking an older write on top of newer ones");
    if (visible === void 0) {
      visible = true;
    }
    writeTree.allWrites.push({
      path,
      snap: snap3,
      writeId,
      visible
    });
    if (visible) {
      writeTree.visibleWrites = compoundWriteAddWrite(writeTree.visibleWrites, path, snap3);
    }
    writeTree.lastWriteId = writeId;
  }
  function writeTreeGetWrite(writeTree, writeId) {
    for (let i = 0; i < writeTree.allWrites.length; i++) {
      const record = writeTree.allWrites[i];
      if (record.writeId === writeId) {
        return record;
      }
    }
    return null;
  }
  function writeTreeRemoveWrite(writeTree, writeId) {
    const idx = writeTree.allWrites.findIndex((s) => {
      return s.writeId === writeId;
    });
    assert(idx >= 0, "removeWrite called with nonexistent writeId.");
    const writeToRemove = writeTree.allWrites[idx];
    writeTree.allWrites.splice(idx, 1);
    let removedWriteWasVisible = writeToRemove.visible;
    let removedWriteOverlapsWithOtherWrites = false;
    let i = writeTree.allWrites.length - 1;
    while (removedWriteWasVisible && i >= 0) {
      const currentWrite = writeTree.allWrites[i];
      if (currentWrite.visible) {
        if (i >= idx && writeTreeRecordContainsPath_(currentWrite, writeToRemove.path)) {
          removedWriteWasVisible = false;
        } else if (pathContains(writeToRemove.path, currentWrite.path)) {
          removedWriteOverlapsWithOtherWrites = true;
        }
      }
      i--;
    }
    if (!removedWriteWasVisible) {
      return false;
    } else if (removedWriteOverlapsWithOtherWrites) {
      writeTreeResetTree_(writeTree);
      return true;
    } else {
      if (writeToRemove.snap) {
        writeTree.visibleWrites = compoundWriteRemoveWrite(writeTree.visibleWrites, writeToRemove.path);
      } else {
        const children = writeToRemove.children;
        each(children, (childName) => {
          writeTree.visibleWrites = compoundWriteRemoveWrite(writeTree.visibleWrites, pathChild(writeToRemove.path, childName));
        });
      }
      return true;
    }
  }
  function writeTreeRecordContainsPath_(writeRecord, path) {
    if (writeRecord.snap) {
      return pathContains(writeRecord.path, path);
    } else {
      for (const childName in writeRecord.children) {
        if (writeRecord.children.hasOwnProperty(childName) && pathContains(pathChild(writeRecord.path, childName), path)) {
          return true;
        }
      }
      return false;
    }
  }
  function writeTreeResetTree_(writeTree) {
    writeTree.visibleWrites = writeTreeLayerTree_(writeTree.allWrites, writeTreeDefaultFilter_, newEmptyPath());
    if (writeTree.allWrites.length > 0) {
      writeTree.lastWriteId = writeTree.allWrites[writeTree.allWrites.length - 1].writeId;
    } else {
      writeTree.lastWriteId = -1;
    }
  }
  function writeTreeDefaultFilter_(write) {
    return write.visible;
  }
  function writeTreeLayerTree_(writes, filter, treeRoot) {
    let compoundWrite = CompoundWrite.empty();
    for (let i = 0; i < writes.length; ++i) {
      const write = writes[i];
      if (filter(write)) {
        const writePath = write.path;
        let relativePath;
        if (write.snap) {
          if (pathContains(treeRoot, writePath)) {
            relativePath = newRelativePath(treeRoot, writePath);
            compoundWrite = compoundWriteAddWrite(compoundWrite, relativePath, write.snap);
          } else if (pathContains(writePath, treeRoot)) {
            relativePath = newRelativePath(writePath, treeRoot);
            compoundWrite = compoundWriteAddWrite(compoundWrite, newEmptyPath(), write.snap.getChild(relativePath));
          } else ;
        } else if (write.children) {
          if (pathContains(treeRoot, writePath)) {
            relativePath = newRelativePath(treeRoot, writePath);
            compoundWrite = compoundWriteAddWrites(compoundWrite, relativePath, write.children);
          } else if (pathContains(writePath, treeRoot)) {
            relativePath = newRelativePath(writePath, treeRoot);
            if (pathIsEmpty(relativePath)) {
              compoundWrite = compoundWriteAddWrites(compoundWrite, newEmptyPath(), write.children);
            } else {
              const child = safeGet(write.children, pathGetFront(relativePath));
              if (child) {
                const deepNode = child.getChild(pathPopFront(relativePath));
                compoundWrite = compoundWriteAddWrite(compoundWrite, newEmptyPath(), deepNode);
              }
            }
          } else ;
        } else {
          throw assertionError("WriteRecord should have .snap or .children");
        }
      }
    }
    return compoundWrite;
  }
  function writeTreeCalcCompleteEventCache(writeTree, treePath, completeServerCache, writeIdsToExclude, includeHiddenWrites) {
    if (!writeIdsToExclude && !includeHiddenWrites) {
      const shadowingNode = compoundWriteGetCompleteNode(writeTree.visibleWrites, treePath);
      if (shadowingNode != null) {
        return shadowingNode;
      } else {
        const subMerge = compoundWriteChildCompoundWrite(writeTree.visibleWrites, treePath);
        if (compoundWriteIsEmpty(subMerge)) {
          return completeServerCache;
        } else if (completeServerCache == null && !compoundWriteHasCompleteWrite(subMerge, newEmptyPath())) {
          return null;
        } else {
          const layeredCache = completeServerCache || ChildrenNode.EMPTY_NODE;
          return compoundWriteApply(subMerge, layeredCache);
        }
      }
    } else {
      const merge = compoundWriteChildCompoundWrite(writeTree.visibleWrites, treePath);
      if (!includeHiddenWrites && compoundWriteIsEmpty(merge)) {
        return completeServerCache;
      } else {
        if (!includeHiddenWrites && completeServerCache == null && !compoundWriteHasCompleteWrite(merge, newEmptyPath())) {
          return null;
        } else {
          const filter = function(write) {
            return (write.visible || includeHiddenWrites) && (!writeIdsToExclude || !~writeIdsToExclude.indexOf(write.writeId)) && (pathContains(write.path, treePath) || pathContains(treePath, write.path));
          };
          const mergeAtPath = writeTreeLayerTree_(writeTree.allWrites, filter, treePath);
          const layeredCache = completeServerCache || ChildrenNode.EMPTY_NODE;
          return compoundWriteApply(mergeAtPath, layeredCache);
        }
      }
    }
  }
  function writeTreeCalcCompleteEventChildren(writeTree, treePath, completeServerChildren) {
    let completeChildren = ChildrenNode.EMPTY_NODE;
    const topLevelSet = compoundWriteGetCompleteNode(writeTree.visibleWrites, treePath);
    if (topLevelSet) {
      if (!topLevelSet.isLeafNode()) {
        topLevelSet.forEachChild(PRIORITY_INDEX, (childName, childSnap) => {
          completeChildren = completeChildren.updateImmediateChild(childName, childSnap);
        });
      }
      return completeChildren;
    } else if (completeServerChildren) {
      const merge = compoundWriteChildCompoundWrite(writeTree.visibleWrites, treePath);
      completeServerChildren.forEachChild(PRIORITY_INDEX, (childName, childNode) => {
        const node = compoundWriteApply(compoundWriteChildCompoundWrite(merge, new Path(childName)), childNode);
        completeChildren = completeChildren.updateImmediateChild(childName, node);
      });
      compoundWriteGetCompleteChildren(merge).forEach((namedNode) => {
        completeChildren = completeChildren.updateImmediateChild(namedNode.name, namedNode.node);
      });
      return completeChildren;
    } else {
      const merge = compoundWriteChildCompoundWrite(writeTree.visibleWrites, treePath);
      compoundWriteGetCompleteChildren(merge).forEach((namedNode) => {
        completeChildren = completeChildren.updateImmediateChild(namedNode.name, namedNode.node);
      });
      return completeChildren;
    }
  }
  function writeTreeCalcEventCacheAfterServerOverwrite(writeTree, treePath, childPath, existingEventSnap, existingServerSnap) {
    assert(existingEventSnap || existingServerSnap, "Either existingEventSnap or existingServerSnap must exist");
    const path = pathChild(treePath, childPath);
    if (compoundWriteHasCompleteWrite(writeTree.visibleWrites, path)) {
      return null;
    } else {
      const childMerge = compoundWriteChildCompoundWrite(writeTree.visibleWrites, path);
      if (compoundWriteIsEmpty(childMerge)) {
        return existingServerSnap.getChild(childPath);
      } else {
        return compoundWriteApply(childMerge, existingServerSnap.getChild(childPath));
      }
    }
  }
  function writeTreeCalcCompleteChild(writeTree, treePath, childKey, existingServerSnap) {
    const path = pathChild(treePath, childKey);
    const shadowingNode = compoundWriteGetCompleteNode(writeTree.visibleWrites, path);
    if (shadowingNode != null) {
      return shadowingNode;
    } else {
      if (existingServerSnap.isCompleteForChild(childKey)) {
        const childMerge = compoundWriteChildCompoundWrite(writeTree.visibleWrites, path);
        return compoundWriteApply(childMerge, existingServerSnap.getNode().getImmediateChild(childKey));
      } else {
        return null;
      }
    }
  }
  function writeTreeShadowingWrite(writeTree, path) {
    return compoundWriteGetCompleteNode(writeTree.visibleWrites, path);
  }
  function writeTreeCalcIndexedSlice(writeTree, treePath, completeServerData, startPost, count, reverse, index) {
    let toIterate;
    const merge = compoundWriteChildCompoundWrite(writeTree.visibleWrites, treePath);
    const shadowingNode = compoundWriteGetCompleteNode(merge, newEmptyPath());
    if (shadowingNode != null) {
      toIterate = shadowingNode;
    } else if (completeServerData != null) {
      toIterate = compoundWriteApply(merge, completeServerData);
    } else {
      return [];
    }
    toIterate = toIterate.withIndex(index);
    if (!toIterate.isEmpty() && !toIterate.isLeafNode()) {
      const nodes = [];
      const cmp = index.getCompare();
      const iter = reverse ? toIterate.getReverseIteratorFrom(startPost, index) : toIterate.getIteratorFrom(startPost, index);
      let next = iter.getNext();
      while (next && nodes.length < count) {
        if (cmp(next, startPost) !== 0) {
          nodes.push(next);
        }
        next = iter.getNext();
      }
      return nodes;
    } else {
      return [];
    }
  }
  function newWriteTree() {
    return {
      visibleWrites: CompoundWrite.empty(),
      allWrites: [],
      lastWriteId: -1
    };
  }
  function writeTreeRefCalcCompleteEventCache(writeTreeRef, completeServerCache, writeIdsToExclude, includeHiddenWrites) {
    return writeTreeCalcCompleteEventCache(writeTreeRef.writeTree, writeTreeRef.treePath, completeServerCache, writeIdsToExclude, includeHiddenWrites);
  }
  function writeTreeRefCalcCompleteEventChildren(writeTreeRef, completeServerChildren) {
    return writeTreeCalcCompleteEventChildren(writeTreeRef.writeTree, writeTreeRef.treePath, completeServerChildren);
  }
  function writeTreeRefCalcEventCacheAfterServerOverwrite(writeTreeRef, path, existingEventSnap, existingServerSnap) {
    return writeTreeCalcEventCacheAfterServerOverwrite(writeTreeRef.writeTree, writeTreeRef.treePath, path, existingEventSnap, existingServerSnap);
  }
  function writeTreeRefShadowingWrite(writeTreeRef, path) {
    return writeTreeShadowingWrite(writeTreeRef.writeTree, pathChild(writeTreeRef.treePath, path));
  }
  function writeTreeRefCalcIndexedSlice(writeTreeRef, completeServerData, startPost, count, reverse, index) {
    return writeTreeCalcIndexedSlice(writeTreeRef.writeTree, writeTreeRef.treePath, completeServerData, startPost, count, reverse, index);
  }
  function writeTreeRefCalcCompleteChild(writeTreeRef, childKey, existingServerCache) {
    return writeTreeCalcCompleteChild(writeTreeRef.writeTree, writeTreeRef.treePath, childKey, existingServerCache);
  }
  function writeTreeRefChild(writeTreeRef, childName) {
    return newWriteTreeRef(pathChild(writeTreeRef.treePath, childName), writeTreeRef.writeTree);
  }
  function newWriteTreeRef(path, writeTree) {
    return {
      treePath: path,
      writeTree
    };
  }
  function viewProcessorAssertIndexed(viewProcessor, viewCache) {
    assert(viewCache.eventCache.getNode().isIndexed(viewProcessor.filter.getIndex()), "Event snap not indexed");
    assert(viewCache.serverCache.getNode().isIndexed(viewProcessor.filter.getIndex()), "Server snap not indexed");
  }
  function viewProcessorApplyOperation(viewProcessor, oldViewCache, operation, writesCache, completeCache) {
    const accumulator = new ChildChangeAccumulator();
    let newViewCache2, filterServerNode;
    if (operation.type === OperationType.OVERWRITE) {
      const overwrite = operation;
      if (overwrite.source.fromUser) {
        newViewCache2 = viewProcessorApplyUserOverwrite(viewProcessor, oldViewCache, overwrite.path, overwrite.snap, writesCache, completeCache, accumulator);
      } else {
        assert(overwrite.source.fromServer, "Unknown source.");
        filterServerNode = overwrite.source.tagged || oldViewCache.serverCache.isFiltered() && !pathIsEmpty(overwrite.path);
        newViewCache2 = viewProcessorApplyServerOverwrite(viewProcessor, oldViewCache, overwrite.path, overwrite.snap, writesCache, completeCache, filterServerNode, accumulator);
      }
    } else if (operation.type === OperationType.MERGE) {
      const merge = operation;
      if (merge.source.fromUser) {
        newViewCache2 = viewProcessorApplyUserMerge(viewProcessor, oldViewCache, merge.path, merge.children, writesCache, completeCache, accumulator);
      } else {
        assert(merge.source.fromServer, "Unknown source.");
        filterServerNode = merge.source.tagged || oldViewCache.serverCache.isFiltered();
        newViewCache2 = viewProcessorApplyServerMerge(viewProcessor, oldViewCache, merge.path, merge.children, writesCache, completeCache, filterServerNode, accumulator);
      }
    } else if (operation.type === OperationType.ACK_USER_WRITE) {
      const ackUserWrite = operation;
      if (!ackUserWrite.revert) {
        newViewCache2 = viewProcessorAckUserWrite(viewProcessor, oldViewCache, ackUserWrite.path, ackUserWrite.affectedTree, writesCache, completeCache, accumulator);
      } else {
        newViewCache2 = viewProcessorRevertUserWrite(viewProcessor, oldViewCache, ackUserWrite.path, writesCache, completeCache, accumulator);
      }
    } else if (operation.type === OperationType.LISTEN_COMPLETE) {
      newViewCache2 = viewProcessorListenComplete(viewProcessor, oldViewCache, operation.path, writesCache, accumulator);
    } else {
      throw assertionError("Unknown operation type: " + operation.type);
    }
    const changes = accumulator.getChanges();
    viewProcessorMaybeAddValueEvent(oldViewCache, newViewCache2, changes);
    return { viewCache: newViewCache2, changes };
  }
  function viewProcessorMaybeAddValueEvent(oldViewCache, newViewCache2, accumulator) {
    const eventSnap = newViewCache2.eventCache;
    if (eventSnap.isFullyInitialized()) {
      const isLeafOrEmpty = eventSnap.getNode().isLeafNode() || eventSnap.getNode().isEmpty();
      const oldCompleteSnap = viewCacheGetCompleteEventSnap(oldViewCache);
      if (accumulator.length > 0 || !oldViewCache.eventCache.isFullyInitialized() || isLeafOrEmpty && !eventSnap.getNode().equals(oldCompleteSnap) || !eventSnap.getNode().getPriority().equals(oldCompleteSnap.getPriority())) {
        accumulator.push(changeValue(viewCacheGetCompleteEventSnap(newViewCache2)));
      }
    }
  }
  function viewProcessorGenerateEventCacheAfterServerEvent(viewProcessor, viewCache, changePath, writesCache, source, accumulator) {
    const oldEventSnap = viewCache.eventCache;
    if (writeTreeRefShadowingWrite(writesCache, changePath) != null) {
      return viewCache;
    } else {
      let newEventCache, serverNode;
      if (pathIsEmpty(changePath)) {
        assert(viewCache.serverCache.isFullyInitialized(), "If change path is empty, we must have complete server data");
        if (viewCache.serverCache.isFiltered()) {
          const serverCache = viewCacheGetCompleteServerSnap(viewCache);
          const completeChildren = serverCache instanceof ChildrenNode ? serverCache : ChildrenNode.EMPTY_NODE;
          const completeEventChildren = writeTreeRefCalcCompleteEventChildren(writesCache, completeChildren);
          newEventCache = viewProcessor.filter.updateFullNode(viewCache.eventCache.getNode(), completeEventChildren, accumulator);
        } else {
          const completeNode = writeTreeRefCalcCompleteEventCache(writesCache, viewCacheGetCompleteServerSnap(viewCache));
          newEventCache = viewProcessor.filter.updateFullNode(viewCache.eventCache.getNode(), completeNode, accumulator);
        }
      } else {
        const childKey = pathGetFront(changePath);
        if (childKey === ".priority") {
          assert(pathGetLength(changePath) === 1, "Can't have a priority with additional path components");
          const oldEventNode = oldEventSnap.getNode();
          serverNode = viewCache.serverCache.getNode();
          const updatedPriority = writeTreeRefCalcEventCacheAfterServerOverwrite(writesCache, changePath, oldEventNode, serverNode);
          if (updatedPriority != null) {
            newEventCache = viewProcessor.filter.updatePriority(oldEventNode, updatedPriority);
          } else {
            newEventCache = oldEventSnap.getNode();
          }
        } else {
          const childChangePath = pathPopFront(changePath);
          let newEventChild;
          if (oldEventSnap.isCompleteForChild(childKey)) {
            serverNode = viewCache.serverCache.getNode();
            const eventChildUpdate = writeTreeRefCalcEventCacheAfterServerOverwrite(writesCache, changePath, oldEventSnap.getNode(), serverNode);
            if (eventChildUpdate != null) {
              newEventChild = oldEventSnap.getNode().getImmediateChild(childKey).updateChild(childChangePath, eventChildUpdate);
            } else {
              newEventChild = oldEventSnap.getNode().getImmediateChild(childKey);
            }
          } else {
            newEventChild = writeTreeRefCalcCompleteChild(writesCache, childKey, viewCache.serverCache);
          }
          if (newEventChild != null) {
            newEventCache = viewProcessor.filter.updateChild(oldEventSnap.getNode(), childKey, newEventChild, childChangePath, source, accumulator);
          } else {
            newEventCache = oldEventSnap.getNode();
          }
        }
      }
      return viewCacheUpdateEventSnap(viewCache, newEventCache, oldEventSnap.isFullyInitialized() || pathIsEmpty(changePath), viewProcessor.filter.filtersNodes());
    }
  }
  function viewProcessorApplyServerOverwrite(viewProcessor, oldViewCache, changePath, changedSnap, writesCache, completeCache, filterServerNode, accumulator) {
    const oldServerSnap = oldViewCache.serverCache;
    let newServerCache;
    const serverFilter = filterServerNode ? viewProcessor.filter : viewProcessor.filter.getIndexedFilter();
    if (pathIsEmpty(changePath)) {
      newServerCache = serverFilter.updateFullNode(oldServerSnap.getNode(), changedSnap, null);
    } else if (serverFilter.filtersNodes() && !oldServerSnap.isFiltered()) {
      const newServerNode = oldServerSnap.getNode().updateChild(changePath, changedSnap);
      newServerCache = serverFilter.updateFullNode(oldServerSnap.getNode(), newServerNode, null);
    } else {
      const childKey = pathGetFront(changePath);
      if (!oldServerSnap.isCompleteForPath(changePath) && pathGetLength(changePath) > 1) {
        return oldViewCache;
      }
      const childChangePath = pathPopFront(changePath);
      const childNode = oldServerSnap.getNode().getImmediateChild(childKey);
      const newChildNode = childNode.updateChild(childChangePath, changedSnap);
      if (childKey === ".priority") {
        newServerCache = serverFilter.updatePriority(oldServerSnap.getNode(), newChildNode);
      } else {
        newServerCache = serverFilter.updateChild(oldServerSnap.getNode(), childKey, newChildNode, childChangePath, NO_COMPLETE_CHILD_SOURCE, null);
      }
    }
    const newViewCache2 = viewCacheUpdateServerSnap(oldViewCache, newServerCache, oldServerSnap.isFullyInitialized() || pathIsEmpty(changePath), serverFilter.filtersNodes());
    const source = new WriteTreeCompleteChildSource(writesCache, newViewCache2, completeCache);
    return viewProcessorGenerateEventCacheAfterServerEvent(viewProcessor, newViewCache2, changePath, writesCache, source, accumulator);
  }
  function viewProcessorApplyUserOverwrite(viewProcessor, oldViewCache, changePath, changedSnap, writesCache, completeCache, accumulator) {
    const oldEventSnap = oldViewCache.eventCache;
    let newViewCache2, newEventCache;
    const source = new WriteTreeCompleteChildSource(writesCache, oldViewCache, completeCache);
    if (pathIsEmpty(changePath)) {
      newEventCache = viewProcessor.filter.updateFullNode(oldViewCache.eventCache.getNode(), changedSnap, accumulator);
      newViewCache2 = viewCacheUpdateEventSnap(oldViewCache, newEventCache, true, viewProcessor.filter.filtersNodes());
    } else {
      const childKey = pathGetFront(changePath);
      if (childKey === ".priority") {
        newEventCache = viewProcessor.filter.updatePriority(oldViewCache.eventCache.getNode(), changedSnap);
        newViewCache2 = viewCacheUpdateEventSnap(oldViewCache, newEventCache, oldEventSnap.isFullyInitialized(), oldEventSnap.isFiltered());
      } else {
        const childChangePath = pathPopFront(changePath);
        const oldChild = oldEventSnap.getNode().getImmediateChild(childKey);
        let newChild;
        if (pathIsEmpty(childChangePath)) {
          newChild = changedSnap;
        } else {
          const childNode = source.getCompleteChild(childKey);
          if (childNode != null) {
            if (pathGetBack(childChangePath) === ".priority" && childNode.getChild(pathParent(childChangePath)).isEmpty()) {
              newChild = childNode;
            } else {
              newChild = childNode.updateChild(childChangePath, changedSnap);
            }
          } else {
            newChild = ChildrenNode.EMPTY_NODE;
          }
        }
        if (!oldChild.equals(newChild)) {
          const newEventSnap = viewProcessor.filter.updateChild(oldEventSnap.getNode(), childKey, newChild, childChangePath, source, accumulator);
          newViewCache2 = viewCacheUpdateEventSnap(oldViewCache, newEventSnap, oldEventSnap.isFullyInitialized(), viewProcessor.filter.filtersNodes());
        } else {
          newViewCache2 = oldViewCache;
        }
      }
    }
    return newViewCache2;
  }
  function viewProcessorCacheHasChild(viewCache, childKey) {
    return viewCache.eventCache.isCompleteForChild(childKey);
  }
  function viewProcessorApplyUserMerge(viewProcessor, viewCache, path, changedChildren, writesCache, serverCache, accumulator) {
    let curViewCache = viewCache;
    changedChildren.foreach((relativePath, childNode) => {
      const writePath = pathChild(path, relativePath);
      if (viewProcessorCacheHasChild(viewCache, pathGetFront(writePath))) {
        curViewCache = viewProcessorApplyUserOverwrite(viewProcessor, curViewCache, writePath, childNode, writesCache, serverCache, accumulator);
      }
    });
    changedChildren.foreach((relativePath, childNode) => {
      const writePath = pathChild(path, relativePath);
      if (!viewProcessorCacheHasChild(viewCache, pathGetFront(writePath))) {
        curViewCache = viewProcessorApplyUserOverwrite(viewProcessor, curViewCache, writePath, childNode, writesCache, serverCache, accumulator);
      }
    });
    return curViewCache;
  }
  function viewProcessorApplyMerge(viewProcessor, node, merge) {
    merge.foreach((relativePath, childNode) => {
      node = node.updateChild(relativePath, childNode);
    });
    return node;
  }
  function viewProcessorApplyServerMerge(viewProcessor, viewCache, path, changedChildren, writesCache, serverCache, filterServerNode, accumulator) {
    if (viewCache.serverCache.getNode().isEmpty() && !viewCache.serverCache.isFullyInitialized()) {
      return viewCache;
    }
    let curViewCache = viewCache;
    let viewMergeTree;
    if (pathIsEmpty(path)) {
      viewMergeTree = changedChildren;
    } else {
      viewMergeTree = new ImmutableTree(null).setTree(path, changedChildren);
    }
    const serverNode = viewCache.serverCache.getNode();
    viewMergeTree.children.inorderTraversal((childKey, childTree) => {
      if (serverNode.hasChild(childKey)) {
        const serverChild = viewCache.serverCache.getNode().getImmediateChild(childKey);
        const newChild = viewProcessorApplyMerge(viewProcessor, serverChild, childTree);
        curViewCache = viewProcessorApplyServerOverwrite(viewProcessor, curViewCache, new Path(childKey), newChild, writesCache, serverCache, filterServerNode, accumulator);
      }
    });
    viewMergeTree.children.inorderTraversal((childKey, childMergeTree) => {
      const isUnknownDeepMerge = !viewCache.serverCache.isCompleteForChild(childKey) && childMergeTree.value === null;
      if (!serverNode.hasChild(childKey) && !isUnknownDeepMerge) {
        const serverChild = viewCache.serverCache.getNode().getImmediateChild(childKey);
        const newChild = viewProcessorApplyMerge(viewProcessor, serverChild, childMergeTree);
        curViewCache = viewProcessorApplyServerOverwrite(viewProcessor, curViewCache, new Path(childKey), newChild, writesCache, serverCache, filterServerNode, accumulator);
      }
    });
    return curViewCache;
  }
  function viewProcessorAckUserWrite(viewProcessor, viewCache, ackPath, affectedTree, writesCache, completeCache, accumulator) {
    if (writeTreeRefShadowingWrite(writesCache, ackPath) != null) {
      return viewCache;
    }
    const filterServerNode = viewCache.serverCache.isFiltered();
    const serverCache = viewCache.serverCache;
    if (affectedTree.value != null) {
      if (pathIsEmpty(ackPath) && serverCache.isFullyInitialized() || serverCache.isCompleteForPath(ackPath)) {
        return viewProcessorApplyServerOverwrite(viewProcessor, viewCache, ackPath, serverCache.getNode().getChild(ackPath), writesCache, completeCache, filterServerNode, accumulator);
      } else if (pathIsEmpty(ackPath)) {
        let changedChildren = new ImmutableTree(null);
        serverCache.getNode().forEachChild(KEY_INDEX, (name3, node) => {
          changedChildren = changedChildren.set(new Path(name3), node);
        });
        return viewProcessorApplyServerMerge(viewProcessor, viewCache, ackPath, changedChildren, writesCache, completeCache, filterServerNode, accumulator);
      } else {
        return viewCache;
      }
    } else {
      let changedChildren = new ImmutableTree(null);
      affectedTree.foreach((mergePath, value) => {
        const serverCachePath = pathChild(ackPath, mergePath);
        if (serverCache.isCompleteForPath(serverCachePath)) {
          changedChildren = changedChildren.set(mergePath, serverCache.getNode().getChild(serverCachePath));
        }
      });
      return viewProcessorApplyServerMerge(viewProcessor, viewCache, ackPath, changedChildren, writesCache, completeCache, filterServerNode, accumulator);
    }
  }
  function viewProcessorListenComplete(viewProcessor, viewCache, path, writesCache, accumulator) {
    const oldServerNode = viewCache.serverCache;
    const newViewCache2 = viewCacheUpdateServerSnap(viewCache, oldServerNode.getNode(), oldServerNode.isFullyInitialized() || pathIsEmpty(path), oldServerNode.isFiltered());
    return viewProcessorGenerateEventCacheAfterServerEvent(viewProcessor, newViewCache2, path, writesCache, NO_COMPLETE_CHILD_SOURCE, accumulator);
  }
  function viewProcessorRevertUserWrite(viewProcessor, viewCache, path, writesCache, completeServerCache, accumulator) {
    let complete;
    if (writeTreeRefShadowingWrite(writesCache, path) != null) {
      return viewCache;
    } else {
      const source = new WriteTreeCompleteChildSource(writesCache, viewCache, completeServerCache);
      const oldEventCache = viewCache.eventCache.getNode();
      let newEventCache;
      if (pathIsEmpty(path) || pathGetFront(path) === ".priority") {
        let newNode;
        if (viewCache.serverCache.isFullyInitialized()) {
          newNode = writeTreeRefCalcCompleteEventCache(writesCache, viewCacheGetCompleteServerSnap(viewCache));
        } else {
          const serverChildren = viewCache.serverCache.getNode();
          assert(serverChildren instanceof ChildrenNode, "serverChildren would be complete if leaf node");
          newNode = writeTreeRefCalcCompleteEventChildren(writesCache, serverChildren);
        }
        newNode = newNode;
        newEventCache = viewProcessor.filter.updateFullNode(oldEventCache, newNode, accumulator);
      } else {
        const childKey = pathGetFront(path);
        let newChild = writeTreeRefCalcCompleteChild(writesCache, childKey, viewCache.serverCache);
        if (newChild == null && viewCache.serverCache.isCompleteForChild(childKey)) {
          newChild = oldEventCache.getImmediateChild(childKey);
        }
        if (newChild != null) {
          newEventCache = viewProcessor.filter.updateChild(oldEventCache, childKey, newChild, pathPopFront(path), source, accumulator);
        } else if (viewCache.eventCache.getNode().hasChild(childKey)) {
          newEventCache = viewProcessor.filter.updateChild(oldEventCache, childKey, ChildrenNode.EMPTY_NODE, pathPopFront(path), source, accumulator);
        } else {
          newEventCache = oldEventCache;
        }
        if (newEventCache.isEmpty() && viewCache.serverCache.isFullyInitialized()) {
          complete = writeTreeRefCalcCompleteEventCache(writesCache, viewCacheGetCompleteServerSnap(viewCache));
          if (complete.isLeafNode()) {
            newEventCache = viewProcessor.filter.updateFullNode(newEventCache, complete, accumulator);
          }
        }
      }
      complete = viewCache.serverCache.isFullyInitialized() || writeTreeRefShadowingWrite(writesCache, newEmptyPath()) != null;
      return viewCacheUpdateEventSnap(viewCache, newEventCache, complete, viewProcessor.filter.filtersNodes());
    }
  }
  function viewGetCompleteServerCache(view, path) {
    const cache = viewCacheGetCompleteServerSnap(view.viewCache_);
    if (cache) {
      if (view.query._queryParams.loadsAllData() || !pathIsEmpty(path) && !cache.getImmediateChild(pathGetFront(path)).isEmpty()) {
        return cache.getChild(path);
      }
    }
    return null;
  }
  function viewApplyOperation(view, operation, writesCache, completeServerCache) {
    if (operation.type === OperationType.MERGE && operation.source.queryId !== null) {
      assert(viewCacheGetCompleteServerSnap(view.viewCache_), "We should always have a full cache before handling merges");
      assert(viewCacheGetCompleteEventSnap(view.viewCache_), "Missing event cache, even though we have a server cache");
    }
    const oldViewCache = view.viewCache_;
    const result = viewProcessorApplyOperation(view.processor_, oldViewCache, operation, writesCache, completeServerCache);
    viewProcessorAssertIndexed(view.processor_, result.viewCache);
    assert(result.viewCache.serverCache.isFullyInitialized() || !oldViewCache.serverCache.isFullyInitialized(), "Once a server snap is complete, it should never go back");
    view.viewCache_ = result.viewCache;
    return viewGenerateEventsForChanges_(view, result.changes, result.viewCache.eventCache.getNode(), null);
  }
  function viewGenerateEventsForChanges_(view, changes, eventCache, eventRegistration) {
    const registrations = eventRegistration ? [eventRegistration] : view.eventRegistrations_;
    return eventGeneratorGenerateEventsForChanges(view.eventGenerator_, changes, eventCache, registrations);
  }
  function syncPointSetReferenceConstructor(val) {
    assert(!referenceConstructor$1, "__referenceConstructor has already been defined");
    referenceConstructor$1 = val;
  }
  function syncPointApplyOperation(syncPoint, operation, writesCache, optCompleteServerCache) {
    const queryId = operation.source.queryId;
    if (queryId !== null) {
      const view = syncPoint.views.get(queryId);
      assert(view != null, "SyncTree gave us an op for an invalid query.");
      return viewApplyOperation(view, operation, writesCache, optCompleteServerCache);
    } else {
      let events = [];
      for (const view of syncPoint.views.values()) {
        events = events.concat(viewApplyOperation(view, operation, writesCache, optCompleteServerCache));
      }
      return events;
    }
  }
  function syncPointGetCompleteServerCache(syncPoint, path) {
    let serverCache = null;
    for (const view of syncPoint.views.values()) {
      serverCache = serverCache || viewGetCompleteServerCache(view, path);
    }
    return serverCache;
  }
  function syncTreeSetReferenceConstructor(val) {
    assert(!referenceConstructor, "__referenceConstructor has already been defined");
    referenceConstructor = val;
  }
  function syncTreeApplyUserOverwrite(syncTree, path, newData, writeId, visible) {
    writeTreeAddOverwrite(syncTree.pendingWriteTree_, path, newData, writeId, visible);
    if (!visible) {
      return [];
    } else {
      return syncTreeApplyOperationToSyncPoints_(syncTree, new Overwrite(newOperationSourceUser(), path, newData));
    }
  }
  function syncTreeAckUserWrite(syncTree, writeId, revert = false) {
    const write = writeTreeGetWrite(syncTree.pendingWriteTree_, writeId);
    const needToReevaluate = writeTreeRemoveWrite(syncTree.pendingWriteTree_, writeId);
    if (!needToReevaluate) {
      return [];
    } else {
      let affectedTree = new ImmutableTree(null);
      if (write.snap != null) {
        affectedTree = affectedTree.set(newEmptyPath(), true);
      } else {
        each(write.children, (pathString) => {
          affectedTree = affectedTree.set(new Path(pathString), true);
        });
      }
      return syncTreeApplyOperationToSyncPoints_(syncTree, new AckUserWrite(write.path, affectedTree, revert));
    }
  }
  function syncTreeApplyServerOverwrite(syncTree, path, newData) {
    return syncTreeApplyOperationToSyncPoints_(syncTree, new Overwrite(newOperationSourceServer(), path, newData));
  }
  function syncTreeApplyServerMerge(syncTree, path, changedChildren) {
    const changeTree = ImmutableTree.fromObject(changedChildren);
    return syncTreeApplyOperationToSyncPoints_(syncTree, new Merge(newOperationSourceServer(), path, changeTree));
  }
  function syncTreeApplyTaggedQueryOverwrite(syncTree, path, snap3, tag) {
    const queryKey = syncTreeQueryKeyForTag_(syncTree, tag);
    if (queryKey != null) {
      const r = syncTreeParseQueryKey_(queryKey);
      const queryPath = r.path, queryId = r.queryId;
      const relativePath = newRelativePath(queryPath, path);
      const op = new Overwrite(newOperationSourceServerTaggedQuery(queryId), relativePath, snap3);
      return syncTreeApplyTaggedOperation_(syncTree, queryPath, op);
    } else {
      return [];
    }
  }
  function syncTreeApplyTaggedQueryMerge(syncTree, path, changedChildren, tag) {
    const queryKey = syncTreeQueryKeyForTag_(syncTree, tag);
    if (queryKey) {
      const r = syncTreeParseQueryKey_(queryKey);
      const queryPath = r.path, queryId = r.queryId;
      const relativePath = newRelativePath(queryPath, path);
      const changeTree = ImmutableTree.fromObject(changedChildren);
      const op = new Merge(newOperationSourceServerTaggedQuery(queryId), relativePath, changeTree);
      return syncTreeApplyTaggedOperation_(syncTree, queryPath, op);
    } else {
      return [];
    }
  }
  function syncTreeCalcCompleteEventCache(syncTree, path, writeIdsToExclude) {
    const includeHiddenSets = true;
    const writeTree = syncTree.pendingWriteTree_;
    const serverCache = syncTree.syncPointTree_.findOnPath(path, (pathSoFar, syncPoint) => {
      const relativePath = newRelativePath(pathSoFar, path);
      const serverCache2 = syncPointGetCompleteServerCache(syncPoint, relativePath);
      if (serverCache2) {
        return serverCache2;
      }
    });
    return writeTreeCalcCompleteEventCache(writeTree, path, serverCache, writeIdsToExclude, includeHiddenSets);
  }
  function syncTreeApplyOperationToSyncPoints_(syncTree, operation) {
    return syncTreeApplyOperationHelper_(
      operation,
      syncTree.syncPointTree_,
      /*serverCache=*/
      null,
      writeTreeChildWrites(syncTree.pendingWriteTree_, newEmptyPath())
    );
  }
  function syncTreeApplyOperationHelper_(operation, syncPointTree, serverCache, writesCache) {
    if (pathIsEmpty(operation.path)) {
      return syncTreeApplyOperationDescendantsHelper_(operation, syncPointTree, serverCache, writesCache);
    } else {
      const syncPoint = syncPointTree.get(newEmptyPath());
      if (serverCache == null && syncPoint != null) {
        serverCache = syncPointGetCompleteServerCache(syncPoint, newEmptyPath());
      }
      let events = [];
      const childName = pathGetFront(operation.path);
      const childOperation = operation.operationForChild(childName);
      const childTree = syncPointTree.children.get(childName);
      if (childTree && childOperation) {
        const childServerCache = serverCache ? serverCache.getImmediateChild(childName) : null;
        const childWritesCache = writeTreeRefChild(writesCache, childName);
        events = events.concat(syncTreeApplyOperationHelper_(childOperation, childTree, childServerCache, childWritesCache));
      }
      if (syncPoint) {
        events = events.concat(syncPointApplyOperation(syncPoint, operation, writesCache, serverCache));
      }
      return events;
    }
  }
  function syncTreeApplyOperationDescendantsHelper_(operation, syncPointTree, serverCache, writesCache) {
    const syncPoint = syncPointTree.get(newEmptyPath());
    if (serverCache == null && syncPoint != null) {
      serverCache = syncPointGetCompleteServerCache(syncPoint, newEmptyPath());
    }
    let events = [];
    syncPointTree.children.inorderTraversal((childName, childTree) => {
      const childServerCache = serverCache ? serverCache.getImmediateChild(childName) : null;
      const childWritesCache = writeTreeRefChild(writesCache, childName);
      const childOperation = operation.operationForChild(childName);
      if (childOperation) {
        events = events.concat(syncTreeApplyOperationDescendantsHelper_(childOperation, childTree, childServerCache, childWritesCache));
      }
    });
    if (syncPoint) {
      events = events.concat(syncPointApplyOperation(syncPoint, operation, writesCache, serverCache));
    }
    return events;
  }
  function syncTreeQueryKeyForTag_(syncTree, tag) {
    return syncTree.tagToQueryMap.get(tag);
  }
  function syncTreeParseQueryKey_(queryKey) {
    const splitIndex = queryKey.indexOf("$");
    assert(splitIndex !== -1 && splitIndex < queryKey.length - 1, "Bad queryKey.");
    return {
      queryId: queryKey.substr(splitIndex + 1),
      path: new Path(queryKey.substr(0, splitIndex))
    };
  }
  function syncTreeApplyTaggedOperation_(syncTree, queryPath, operation) {
    const syncPoint = syncTree.syncPointTree_.get(queryPath);
    assert(syncPoint, "Missing sync point for query tag that we're tracking");
    const writesCache = writeTreeChildWrites(syncTree.pendingWriteTree_, queryPath);
    return syncPointApplyOperation(syncPoint, operation, writesCache, null);
  }
  function resolveDeferredValue(node, existingVal, serverValues) {
    const rawPri = node.getPriority().val();
    const priority = resolveDeferredLeafValue(rawPri, existingVal.getImmediateChild(".priority"), serverValues);
    let newNode;
    if (node.isLeafNode()) {
      const leafNode = node;
      const value = resolveDeferredLeafValue(leafNode.getValue(), existingVal, serverValues);
      if (value !== leafNode.getValue() || priority !== leafNode.getPriority().val()) {
        return new LeafNode(value, nodeFromJSON(priority));
      } else {
        return node;
      }
    } else {
      const childrenNode = node;
      newNode = childrenNode;
      if (priority !== childrenNode.getPriority().val()) {
        newNode = newNode.updatePriority(new LeafNode(priority));
      }
      childrenNode.forEachChild(PRIORITY_INDEX, (childName, childNode) => {
        const newChildNode = resolveDeferredValue(childNode, existingVal.getImmediateChild(childName), serverValues);
        if (newChildNode !== childNode) {
          newNode = newNode.updateImmediateChild(childName, newChildNode);
        }
      });
      return newNode;
    }
  }
  function treeSubTree(tree, pathObj) {
    let path = pathObj instanceof Path ? pathObj : new Path(pathObj);
    let child = tree, next = pathGetFront(path);
    while (next !== null) {
      const childNode = safeGet(child.node.children, next) || {
        children: {},
        childCount: 0
      };
      child = new Tree(next, child, childNode);
      path = pathPopFront(path);
      next = pathGetFront(path);
    }
    return child;
  }
  function treeGetValue(tree) {
    return tree.node.value;
  }
  function treeSetValue(tree, value) {
    tree.node.value = value;
    treeUpdateParents(tree);
  }
  function treeHasChildren(tree) {
    return tree.node.childCount > 0;
  }
  function treeIsEmpty(tree) {
    return treeGetValue(tree) === void 0 && !treeHasChildren(tree);
  }
  function treeForEachChild(tree, action) {
    each(tree.node.children, (child, childTree) => {
      action(new Tree(child, tree, childTree));
    });
  }
  function treeForEachDescendant(tree, action, includeSelf, childrenFirst) {
    if (includeSelf && !childrenFirst) {
      action(tree);
    }
    treeForEachChild(tree, (child) => {
      treeForEachDescendant(child, action, true, childrenFirst);
    });
    if (includeSelf && childrenFirst) {
      action(tree);
    }
  }
  function treeForEachAncestor(tree, action, includeSelf) {
    let node = includeSelf ? tree : tree.parent;
    while (node !== null) {
      if (action(node)) {
        return true;
      }
      node = node.parent;
    }
    return false;
  }
  function treeGetPath(tree) {
    return new Path(tree.parent === null ? tree.name : treeGetPath(tree.parent) + "/" + tree.name);
  }
  function treeUpdateParents(tree) {
    if (tree.parent !== null) {
      treeUpdateChild(tree.parent, tree.name, tree);
    }
  }
  function treeUpdateChild(tree, childName, child) {
    const childEmpty = treeIsEmpty(child);
    const childExists = contains(tree.node.children, childName);
    if (childEmpty && childExists) {
      delete tree.node.children[childName];
      tree.node.childCount--;
      treeUpdateParents(tree);
    } else if (!childEmpty && !childExists) {
      tree.node.children[childName] = child.node;
      tree.node.childCount++;
      treeUpdateParents(tree);
    }
  }
  function eventQueueQueueEvents(eventQueue, eventDataList) {
    let currList = null;
    for (let i = 0; i < eventDataList.length; i++) {
      const data = eventDataList[i];
      const path = data.getPath();
      if (currList !== null && !pathEquals(path, currList.path)) {
        eventQueue.eventLists_.push(currList);
        currList = null;
      }
      if (currList === null) {
        currList = { events: [], path };
      }
      currList.events.push(data);
    }
    if (currList) {
      eventQueue.eventLists_.push(currList);
    }
  }
  function eventQueueRaiseEventsForChangedPath(eventQueue, changedPath, eventDataList) {
    eventQueueQueueEvents(eventQueue, eventDataList);
    eventQueueRaiseQueuedEventsMatchingPredicate(eventQueue, (eventPath) => pathContains(eventPath, changedPath) || pathContains(changedPath, eventPath));
  }
  function eventQueueRaiseQueuedEventsMatchingPredicate(eventQueue, predicate) {
    eventQueue.recursionDepth_++;
    let sentAll = true;
    for (let i = 0; i < eventQueue.eventLists_.length; i++) {
      const eventList = eventQueue.eventLists_[i];
      if (eventList) {
        const eventPath = eventList.path;
        if (predicate(eventPath)) {
          eventListRaise(eventQueue.eventLists_[i]);
          eventQueue.eventLists_[i] = null;
        } else {
          sentAll = false;
        }
      }
    }
    if (sentAll) {
      eventQueue.eventLists_ = [];
    }
    eventQueue.recursionDepth_--;
  }
  function eventListRaise(eventList) {
    for (let i = 0; i < eventList.events.length; i++) {
      const eventData = eventList.events[i];
      if (eventData !== null) {
        eventList.events[i] = null;
        const eventFn = eventData.getEventRunner();
        if (logger2) {
          log("event: " + eventData.toString());
        }
        exceptionGuard(eventFn);
      }
    }
  }
  function repoStart(repo, appId, authOverride) {
    repo.stats_ = statsManagerGetCollection(repo.repoInfo_);
    if (repo.forceRestClient_ || beingCrawled()) {
      repo.server_ = new ReadonlyRestClient(repo.repoInfo_, (pathString, data, isMerge, tag) => {
        repoOnDataUpdate(repo, pathString, data, isMerge, tag);
      }, repo.authTokenProvider_, repo.appCheckProvider_);
      setTimeout(() => repoOnConnectStatus(
        repo,
        /* connectStatus= */
        true
      ), 0);
    } else {
      if (typeof authOverride !== "undefined" && authOverride !== null) {
        if (typeof authOverride !== "object") {
          throw new Error("Only objects are supported for option databaseAuthVariableOverride");
        }
        try {
          stringify(authOverride);
        } catch (e) {
          throw new Error("Invalid authOverride provided: " + e);
        }
      }
      repo.persistentConnection_ = new PersistentConnection(repo.repoInfo_, appId, (pathString, data, isMerge, tag) => {
        repoOnDataUpdate(repo, pathString, data, isMerge, tag);
      }, (connectStatus) => {
        repoOnConnectStatus(repo, connectStatus);
      }, (updates) => {
        repoOnServerInfoUpdate(repo, updates);
      }, repo.authTokenProvider_, repo.appCheckProvider_, authOverride);
      repo.server_ = repo.persistentConnection_;
    }
    repo.authTokenProvider_.addTokenChangeListener((token) => {
      repo.server_.refreshAuthToken(token);
    });
    repo.appCheckProvider_.addTokenChangeListener((result) => {
      repo.server_.refreshAppCheckToken(result.token);
    });
    repo.statsReporter_ = statsManagerGetOrCreateReporter(repo.repoInfo_, () => new StatsReporter(repo.stats_, repo.server_));
    repo.infoData_ = new SnapshotHolder();
    repo.infoSyncTree_ = new SyncTree({
      startListening: (query, tag, currentHashFn, onComplete) => {
        let infoEvents = [];
        const node = repo.infoData_.getNode(query._path);
        if (!node.isEmpty()) {
          infoEvents = syncTreeApplyServerOverwrite(repo.infoSyncTree_, query._path, node);
          setTimeout(() => {
            onComplete("ok");
          }, 0);
        }
        return infoEvents;
      },
      stopListening: () => {
      }
    });
    repoUpdateInfo(repo, "connected", false);
    repo.serverSyncTree_ = new SyncTree({
      startListening: (query, tag, currentHashFn, onComplete) => {
        repo.server_.listen(query, currentHashFn, tag, (status, data) => {
          const events = onComplete(status, data);
          eventQueueRaiseEventsForChangedPath(repo.eventQueue_, query._path, events);
        });
        return [];
      },
      stopListening: (query, tag) => {
        repo.server_.unlisten(query, tag);
      }
    });
  }
  function repoServerTime(repo) {
    const offsetNode = repo.infoData_.getNode(new Path(".info/serverTimeOffset"));
    const offset = offsetNode.val() || 0;
    return (/* @__PURE__ */ new Date()).getTime() + offset;
  }
  function repoGenerateServerValues(repo) {
    return generateWithValues({
      timestamp: repoServerTime(repo)
    });
  }
  function repoOnDataUpdate(repo, pathString, data, isMerge, tag) {
    repo.dataUpdateCount++;
    const path = new Path(pathString);
    data = repo.interceptServerDataCallback_ ? repo.interceptServerDataCallback_(pathString, data) : data;
    let events = [];
    if (tag) {
      if (isMerge) {
        const taggedChildren = map(data, (raw) => nodeFromJSON(raw));
        events = syncTreeApplyTaggedQueryMerge(repo.serverSyncTree_, path, taggedChildren, tag);
      } else {
        const taggedSnap = nodeFromJSON(data);
        events = syncTreeApplyTaggedQueryOverwrite(repo.serverSyncTree_, path, taggedSnap, tag);
      }
    } else if (isMerge) {
      const changedChildren = map(data, (raw) => nodeFromJSON(raw));
      events = syncTreeApplyServerMerge(repo.serverSyncTree_, path, changedChildren);
    } else {
      const snap3 = nodeFromJSON(data);
      events = syncTreeApplyServerOverwrite(repo.serverSyncTree_, path, snap3);
    }
    let affectedPath = path;
    if (events.length > 0) {
      affectedPath = repoRerunTransactions(repo, path);
    }
    eventQueueRaiseEventsForChangedPath(repo.eventQueue_, affectedPath, events);
  }
  function repoOnConnectStatus(repo, connectStatus) {
    repoUpdateInfo(repo, "connected", connectStatus);
    if (connectStatus === false) {
      repoRunOnDisconnectEvents(repo);
    }
  }
  function repoOnServerInfoUpdate(repo, updates) {
    each(updates, (key, value) => {
      repoUpdateInfo(repo, key, value);
    });
  }
  function repoUpdateInfo(repo, pathString, value) {
    const path = new Path("/.info/" + pathString);
    const newNode = nodeFromJSON(value);
    repo.infoData_.updateSnapshot(path, newNode);
    const events = syncTreeApplyServerOverwrite(repo.infoSyncTree_, path, newNode);
    eventQueueRaiseEventsForChangedPath(repo.eventQueue_, path, events);
  }
  function repoGetNextWriteId(repo) {
    return repo.nextWriteId_++;
  }
  function repoRunOnDisconnectEvents(repo) {
    repoLog(repo, "onDisconnectEvents");
    const serverValues = repoGenerateServerValues(repo);
    const resolvedOnDisconnectTree = newSparseSnapshotTree();
    sparseSnapshotTreeForEachTree(repo.onDisconnect_, newEmptyPath(), (path, node) => {
      const resolved = resolveDeferredValueTree(path, node, repo.serverSyncTree_, serverValues);
      sparseSnapshotTreeRemember(resolvedOnDisconnectTree, path, resolved);
    });
    let events = [];
    sparseSnapshotTreeForEachTree(resolvedOnDisconnectTree, newEmptyPath(), (path, snap3) => {
      events = events.concat(syncTreeApplyServerOverwrite(repo.serverSyncTree_, path, snap3));
      const affectedPath = repoAbortTransactions(repo, path);
      repoRerunTransactions(repo, affectedPath);
    });
    repo.onDisconnect_ = newSparseSnapshotTree();
    eventQueueRaiseEventsForChangedPath(repo.eventQueue_, newEmptyPath(), events);
  }
  function repoInterrupt(repo) {
    if (repo.persistentConnection_) {
      repo.persistentConnection_.interrupt(INTERRUPT_REASON);
    }
  }
  function repoLog(repo, ...varArgs) {
    let prefix = "";
    if (repo.persistentConnection_) {
      prefix = repo.persistentConnection_.id + ":";
    }
    log(prefix, ...varArgs);
  }
  function repoGetLatestState(repo, path, excludeSets) {
    return syncTreeCalcCompleteEventCache(repo.serverSyncTree_, path, excludeSets) || ChildrenNode.EMPTY_NODE;
  }
  function repoSendReadyTransactions(repo, node = repo.transactionQueueTree_) {
    if (!node) {
      repoPruneCompletedTransactionsBelowNode(repo, node);
    }
    if (treeGetValue(node)) {
      const queue = repoBuildTransactionQueue(repo, node);
      assert(queue.length > 0, "Sending zero length transaction queue");
      const allRun = queue.every(
        (transaction) => transaction.status === 0
        /* TransactionStatus.RUN */
      );
      if (allRun) {
        repoSendTransactionQueue(repo, treeGetPath(node), queue);
      }
    } else if (treeHasChildren(node)) {
      treeForEachChild(node, (childNode) => {
        repoSendReadyTransactions(repo, childNode);
      });
    }
  }
  function repoSendTransactionQueue(repo, path, queue) {
    const setsToIgnore = queue.map((txn) => {
      return txn.currentWriteId;
    });
    const latestState = repoGetLatestState(repo, path, setsToIgnore);
    let snapToSend = latestState;
    const latestHash = latestState.hash();
    for (let i = 0; i < queue.length; i++) {
      const txn = queue[i];
      assert(txn.status === 0, "tryToSendTransactionQueue_: items in queue should all be run.");
      txn.status = 1;
      txn.retryCount++;
      const relativePath = newRelativePath(path, txn.path);
      snapToSend = snapToSend.updateChild(relativePath, txn.currentOutputSnapshotRaw);
    }
    const dataToSend = snapToSend.val(true);
    const pathToSend = path;
    repo.server_.put(pathToSend.toString(), dataToSend, (status) => {
      repoLog(repo, "transaction put response", {
        path: pathToSend.toString(),
        status
      });
      let events = [];
      if (status === "ok") {
        const callbacks = [];
        for (let i = 0; i < queue.length; i++) {
          queue[i].status = 2;
          events = events.concat(syncTreeAckUserWrite(repo.serverSyncTree_, queue[i].currentWriteId));
          if (queue[i].onComplete) {
            callbacks.push(() => queue[i].onComplete(null, true, queue[i].currentOutputSnapshotResolved));
          }
          queue[i].unwatcher();
        }
        repoPruneCompletedTransactionsBelowNode(repo, treeSubTree(repo.transactionQueueTree_, path));
        repoSendReadyTransactions(repo, repo.transactionQueueTree_);
        eventQueueRaiseEventsForChangedPath(repo.eventQueue_, path, events);
        for (let i = 0; i < callbacks.length; i++) {
          exceptionGuard(callbacks[i]);
        }
      } else {
        if (status === "datastale") {
          for (let i = 0; i < queue.length; i++) {
            if (queue[i].status === 3) {
              queue[i].status = 4;
            } else {
              queue[i].status = 0;
            }
          }
        } else {
          warn("transaction at " + pathToSend.toString() + " failed: " + status);
          for (let i = 0; i < queue.length; i++) {
            queue[i].status = 4;
            queue[i].abortReason = status;
          }
        }
        repoRerunTransactions(repo, path);
      }
    }, latestHash);
  }
  function repoRerunTransactions(repo, changedPath) {
    const rootMostTransactionNode = repoGetAncestorTransactionNode(repo, changedPath);
    const path = treeGetPath(rootMostTransactionNode);
    const queue = repoBuildTransactionQueue(repo, rootMostTransactionNode);
    repoRerunTransactionQueue(repo, queue, path);
    return path;
  }
  function repoRerunTransactionQueue(repo, queue, path) {
    if (queue.length === 0) {
      return;
    }
    const callbacks = [];
    let events = [];
    const txnsToRerun = queue.filter((q) => {
      return q.status === 0;
    });
    const setsToIgnore = txnsToRerun.map((q) => {
      return q.currentWriteId;
    });
    for (let i = 0; i < queue.length; i++) {
      const transaction = queue[i];
      const relativePath = newRelativePath(path, transaction.path);
      let abortTransaction = false, abortReason;
      assert(relativePath !== null, "rerunTransactionsUnderNode_: relativePath should not be null.");
      if (transaction.status === 4) {
        abortTransaction = true;
        abortReason = transaction.abortReason;
        events = events.concat(syncTreeAckUserWrite(repo.serverSyncTree_, transaction.currentWriteId, true));
      } else if (transaction.status === 0) {
        if (transaction.retryCount >= MAX_TRANSACTION_RETRIES) {
          abortTransaction = true;
          abortReason = "maxretry";
          events = events.concat(syncTreeAckUserWrite(repo.serverSyncTree_, transaction.currentWriteId, true));
        } else {
          const currentNode = repoGetLatestState(repo, transaction.path, setsToIgnore);
          transaction.currentInputSnapshot = currentNode;
          const newData = queue[i].update(currentNode.val());
          if (newData !== void 0) {
            validateFirebaseData("transaction failed: Data returned ", newData, transaction.path);
            let newDataNode = nodeFromJSON(newData);
            const hasExplicitPriority = typeof newData === "object" && newData != null && contains(newData, ".priority");
            if (!hasExplicitPriority) {
              newDataNode = newDataNode.updatePriority(currentNode.getPriority());
            }
            const oldWriteId = transaction.currentWriteId;
            const serverValues = repoGenerateServerValues(repo);
            const newNodeResolved = resolveDeferredValueSnapshot(newDataNode, currentNode, serverValues);
            transaction.currentOutputSnapshotRaw = newDataNode;
            transaction.currentOutputSnapshotResolved = newNodeResolved;
            transaction.currentWriteId = repoGetNextWriteId(repo);
            setsToIgnore.splice(setsToIgnore.indexOf(oldWriteId), 1);
            events = events.concat(syncTreeApplyUserOverwrite(repo.serverSyncTree_, transaction.path, newNodeResolved, transaction.currentWriteId, transaction.applyLocally));
            events = events.concat(syncTreeAckUserWrite(repo.serverSyncTree_, oldWriteId, true));
          } else {
            abortTransaction = true;
            abortReason = "nodata";
            events = events.concat(syncTreeAckUserWrite(repo.serverSyncTree_, transaction.currentWriteId, true));
          }
        }
      }
      eventQueueRaiseEventsForChangedPath(repo.eventQueue_, path, events);
      events = [];
      if (abortTransaction) {
        queue[i].status = 2;
        (function(unwatcher) {
          setTimeout(unwatcher, Math.floor(0));
        })(queue[i].unwatcher);
        if (queue[i].onComplete) {
          if (abortReason === "nodata") {
            callbacks.push(() => queue[i].onComplete(null, false, queue[i].currentInputSnapshot));
          } else {
            callbacks.push(() => queue[i].onComplete(new Error(abortReason), false, null));
          }
        }
      }
    }
    repoPruneCompletedTransactionsBelowNode(repo, repo.transactionQueueTree_);
    for (let i = 0; i < callbacks.length; i++) {
      exceptionGuard(callbacks[i]);
    }
    repoSendReadyTransactions(repo, repo.transactionQueueTree_);
  }
  function repoGetAncestorTransactionNode(repo, path) {
    let front;
    let transactionNode = repo.transactionQueueTree_;
    front = pathGetFront(path);
    while (front !== null && treeGetValue(transactionNode) === void 0) {
      transactionNode = treeSubTree(transactionNode, front);
      path = pathPopFront(path);
      front = pathGetFront(path);
    }
    return transactionNode;
  }
  function repoBuildTransactionQueue(repo, transactionNode) {
    const transactionQueue = [];
    repoAggregateTransactionQueuesForNode(repo, transactionNode, transactionQueue);
    transactionQueue.sort((a, b) => a.order - b.order);
    return transactionQueue;
  }
  function repoAggregateTransactionQueuesForNode(repo, node, queue) {
    const nodeQueue = treeGetValue(node);
    if (nodeQueue) {
      for (let i = 0; i < nodeQueue.length; i++) {
        queue.push(nodeQueue[i]);
      }
    }
    treeForEachChild(node, (child) => {
      repoAggregateTransactionQueuesForNode(repo, child, queue);
    });
  }
  function repoPruneCompletedTransactionsBelowNode(repo, node) {
    const queue = treeGetValue(node);
    if (queue) {
      let to = 0;
      for (let from = 0; from < queue.length; from++) {
        if (queue[from].status !== 2) {
          queue[to] = queue[from];
          to++;
        }
      }
      queue.length = to;
      treeSetValue(node, queue.length > 0 ? queue : void 0);
    }
    treeForEachChild(node, (childNode) => {
      repoPruneCompletedTransactionsBelowNode(repo, childNode);
    });
  }
  function repoAbortTransactions(repo, path) {
    const affectedPath = treeGetPath(repoGetAncestorTransactionNode(repo, path));
    const transactionNode = treeSubTree(repo.transactionQueueTree_, path);
    treeForEachAncestor(transactionNode, (node) => {
      repoAbortTransactionsOnNode(repo, node);
    });
    repoAbortTransactionsOnNode(repo, transactionNode);
    treeForEachDescendant(transactionNode, (node) => {
      repoAbortTransactionsOnNode(repo, node);
    });
    return affectedPath;
  }
  function repoAbortTransactionsOnNode(repo, node) {
    const queue = treeGetValue(node);
    if (queue) {
      const callbacks = [];
      let events = [];
      let lastSent = -1;
      for (let i = 0; i < queue.length; i++) {
        if (queue[i].status === 3) ;
        else if (queue[i].status === 1) {
          assert(lastSent === i - 1, "All SENT items should be at beginning of queue.");
          lastSent = i;
          queue[i].status = 3;
          queue[i].abortReason = "set";
        } else {
          assert(queue[i].status === 0, "Unexpected transaction status in abort");
          queue[i].unwatcher();
          events = events.concat(syncTreeAckUserWrite(repo.serverSyncTree_, queue[i].currentWriteId, true));
          if (queue[i].onComplete) {
            callbacks.push(queue[i].onComplete.bind(null, new Error("set"), false, null));
          }
        }
      }
      if (lastSent === -1) {
        treeSetValue(node, void 0);
      } else {
        queue.length = lastSent + 1;
      }
      eventQueueRaiseEventsForChangedPath(repo.eventQueue_, treeGetPath(node), events);
      for (let i = 0; i < callbacks.length; i++) {
        exceptionGuard(callbacks[i]);
      }
    }
  }
  function decodePath(pathString) {
    let pathStringDecoded = "";
    const pieces = pathString.split("/");
    for (let i = 0; i < pieces.length; i++) {
      if (pieces[i].length > 0) {
        let piece = pieces[i];
        try {
          piece = decodeURIComponent(piece.replace(/\+/g, " "));
        } catch (e) {
        }
        pathStringDecoded += "/" + piece;
      }
    }
    return pathStringDecoded;
  }
  function decodeQuery(queryString) {
    const results = {};
    if (queryString.charAt(0) === "?") {
      queryString = queryString.substring(1);
    }
    for (const segment of queryString.split("&")) {
      if (segment.length === 0) {
        continue;
      }
      const kv = segment.split("=");
      if (kv.length === 2) {
        results[decodeURIComponent(kv[0])] = decodeURIComponent(kv[1]);
      } else {
        warn(`Invalid query segment '${segment}' in query '${queryString}'`);
      }
    }
    return results;
  }
  function repoManagerDatabaseFromApp(app, authProvider, appCheckProvider, url, nodeAdmin) {
    let dbUrl = url || app.options.databaseURL;
    if (dbUrl === void 0) {
      if (!app.options.projectId) {
        fatal("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp().");
      }
      log("Using default host for project ", app.options.projectId);
      dbUrl = `${app.options.projectId}-default-rtdb.firebaseio.com`;
    }
    let parsedUrl = parseRepoInfo(dbUrl, nodeAdmin);
    let repoInfo = parsedUrl.repoInfo;
    let isEmulator;
    let dbEmulatorHost = void 0;
    if (typeof process !== "undefined" && process.env) {
      dbEmulatorHost = process.env[FIREBASE_DATABASE_EMULATOR_HOST_VAR];
    }
    if (dbEmulatorHost) {
      isEmulator = true;
      dbUrl = `http://${dbEmulatorHost}?ns=${repoInfo.namespace}`;
      parsedUrl = parseRepoInfo(dbUrl, nodeAdmin);
      repoInfo = parsedUrl.repoInfo;
    } else {
      isEmulator = !parsedUrl.repoInfo.secure;
    }
    const authTokenProvider = nodeAdmin && isEmulator ? new EmulatorTokenProvider(EmulatorTokenProvider.OWNER) : new FirebaseAuthTokenProvider(app.name, app.options, authProvider);
    validateUrl("Invalid Firebase Database URL", parsedUrl);
    if (!pathIsEmpty(parsedUrl.path)) {
      fatal("Database URL must point to the root of a Firebase Database (not including a child path).");
    }
    const repo = repoManagerCreateRepo(repoInfo, app, authTokenProvider, new AppCheckTokenProvider(app, appCheckProvider));
    return new Database(repo, app);
  }
  function repoManagerDeleteRepo(repo, appName) {
    const appRepos = repos[appName];
    if (!appRepos || appRepos[repo.key] !== repo) {
      fatal(`Database ${appName}(${repo.repoInfo_}) has already been deleted.`);
    }
    repoInterrupt(repo);
    delete appRepos[repo.key];
  }
  function repoManagerCreateRepo(repoInfo, app, authTokenProvider, appCheckProvider) {
    let appRepos = repos[app.name];
    if (!appRepos) {
      appRepos = {};
      repos[app.name] = appRepos;
    }
    let repo = appRepos[repoInfo.toURLString()];
    if (repo) {
      fatal("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");
    }
    repo = new Repo(repoInfo, useRestClient, authTokenProvider, appCheckProvider);
    appRepos[repoInfo.toURLString()] = repo;
    return repo;
  }
  function registerDatabase(variant) {
    setSDKVersion(SDK_VERSION);
    _registerComponent(new Component(
      "database",
      (container, { instanceIdentifier: url }) => {
        const app = container.getProvider("app").getImmediate();
        const authProvider = container.getProvider("auth-internal");
        const appCheckProvider = container.getProvider("app-check-internal");
        return repoManagerDatabaseFromApp(app, authProvider, appCheckProvider, url);
      },
      "PUBLIC"
      /* ComponentType.PUBLIC */
    ).setMultipleInstances(true));
    registerVersion(name2, version3, variant);
    registerVersion(name2, version3, "esm2017");
  }
  var name2, version3, SDK_VERSION2, DOMStorageWrapper, MemoryStorage, createStoragefor, PersistentStorage, SessionStorage, logClient, LUIDGenerator, sha1, buildLogMessage_, logger2, firstLog_, enableLogging$1, log, logWrapper, error, fatal, warn, warnIfPageIsSecure, isInvalidJSONNumber, executeWhenDOMReady, MIN_NAME, MAX_NAME, nameCompare, stringCompare, requireKey, ObjectToUniqueKey, splitStringBySize, doubleToIEEE754String, isChromeExtensionContentScript, isWindowsStoreApp, INTEGER_REGEXP_, INTEGER_32_MIN, INTEGER_32_MAX, tryParseInt, exceptionGuard, beingCrawled, setTimeoutNonBlocking, AppCheckTokenProvider, FirebaseAuthTokenProvider, EmulatorTokenProvider, PROTOCOL_VERSION, VERSION_PARAM, TRANSPORT_SESSION_PARAM, REFERER_PARAM, FORGE_REF, FORGE_DOMAIN_RE, LAST_SESSION_PARAM, APPLICATION_ID_PARAM, APP_CHECK_TOKEN_PARAM, WEBSOCKET, LONG_POLLING, RepoInfo, StatsCollection, collections, reporters, PacketReceiver, FIREBASE_LONGPOLL_START_PARAM, FIREBASE_LONGPOLL_CLOSE_COMMAND, FIREBASE_LONGPOLL_COMMAND_CB_NAME, FIREBASE_LONGPOLL_DATA_CB_NAME, FIREBASE_LONGPOLL_ID_PARAM, FIREBASE_LONGPOLL_PW_PARAM, FIREBASE_LONGPOLL_SERIAL_PARAM, FIREBASE_LONGPOLL_CALLBACK_ID_PARAM, FIREBASE_LONGPOLL_SEGMENT_NUM_PARAM, FIREBASE_LONGPOLL_SEGMENTS_IN_PACKET, FIREBASE_LONGPOLL_DATA_PARAM, FIREBASE_LONGPOLL_DISCONN_FRAME_REQUEST_PARAM, MAX_URL_DATA_SIZE, SEG_HEADER_SIZE, MAX_PAYLOAD_SIZE, KEEPALIVE_REQUEST_INTERVAL, LP_CONNECT_TIMEOUT, BrowserPollConnection, FirebaseIFrameScriptHolder, WEBSOCKET_MAX_FRAME_SIZE, WEBSOCKET_KEEPALIVE_INTERVAL, WebSocketImpl, WebSocketConnection, TransportManager, UPGRADE_TIMEOUT, DELAY_BEFORE_SENDING_EXTRA_REQUESTS, BYTES_SENT_HEALTHY_OVERRIDE, BYTES_RECEIVED_HEALTHY_OVERRIDE, MESSAGE_TYPE, MESSAGE_DATA, CONTROL_SHUTDOWN, CONTROL_RESET, CONTROL_ERROR, CONTROL_PONG, SWITCH_ACK, END_TRANSMISSION, PING, SERVER_HELLO, Connection, ServerActions, EventEmitter, OnlineMonitor, MAX_PATH_DEPTH, MAX_PATH_LENGTH_BYTES, Path, ValidationPath, VisibilityMonitor, RECONNECT_MIN_DELAY, RECONNECT_MAX_DELAY_DEFAULT, RECONNECT_MAX_DELAY_FOR_ADMINS, RECONNECT_DELAY_MULTIPLIER, RECONNECT_DELAY_RESET_TIMEOUT, SERVER_KILL_INTERRUPT_REASON, INVALID_TOKEN_THRESHOLD, PersistentConnection, NamedNode, Index, __EMPTY_NODE, KeyIndex, KEY_INDEX, SortedMapIterator, LLRBNode, LLRBEmptyNode, SortedMap, MAX_NODE$2, priorityHashText, validatePriorityNode, __childrenNodeConstructor, LeafNode, nodeFromJSON$1, MAX_NODE$1, PriorityIndex, PRIORITY_INDEX, LOG_2, Base12Num, buildChildSet, _defaultIndexMap, fallbackObject, IndexMap, EMPTY_NODE, ChildrenNode, MaxNode, MAX_NODE, USE_HINZE, PathIndex, ValueIndex, VALUE_INDEX, QueryParams, ReadonlyRestClient, SnapshotHolder, StatsListener, FIRST_STATS_MIN_TIME, FIRST_STATS_MAX_TIME, REPORT_STATS_INTERVAL, StatsReporter, OperationType, AckUserWrite, Overwrite, Merge, CacheNode, emptyChildrenSingleton, EmptyChildren, ImmutableTree, CompoundWrite, ChildChangeAccumulator, NoCompleteChildSource_, NO_COMPLETE_CHILD_SOURCE, WriteTreeCompleteChildSource, referenceConstructor$1, referenceConstructor, SyncTree, ExistingValueProvider, DeferredValueProvider, generateWithValues, resolveDeferredLeafValue, resolveScalarDeferredValue, resolveComplexDeferredValue, resolveDeferredValueTree, resolveDeferredValueSnapshot, Tree, INVALID_KEY_REGEX_, INVALID_PATH_REGEX_, MAX_LEAF_SIZE_, isValidKey2, isValidPathString, isValidRootPathString, validateFirebaseData, validateUrl, EventQueue, INTERRUPT_REASON, MAX_TRANSACTION_RETRIES, Repo, parseRepoInfo, parseDatabaseURL, QueryImpl, ReferenceImpl, FIREBASE_DATABASE_EMULATOR_HOST_VAR, repos, useRestClient, Database;
  var init_index_esm20175 = __esm({
    "node_modules/@firebase/database/dist/index.esm2017.js"() {
      init_live_reload();
      init_index_esm20174();
      init_index_esm20172();
      init_index_esm2017();
      init_index_esm20173();
      name2 = "@firebase/database";
      version3 = "1.0.12";
      SDK_VERSION2 = "";
      DOMStorageWrapper = class {
        /**
         * @param domStorage_ - The underlying storage object (e.g. localStorage or sessionStorage)
         */
        constructor(domStorage_) {
          this.domStorage_ = domStorage_;
          this.prefix_ = "firebase:";
        }
        /**
         * @param key - The key to save the value under
         * @param value - The value being stored, or null to remove the key.
         */
        set(key, value) {
          if (value == null) {
            this.domStorage_.removeItem(this.prefixedName_(key));
          } else {
            this.domStorage_.setItem(this.prefixedName_(key), stringify(value));
          }
        }
        /**
         * @returns The value that was stored under this key, or null
         */
        get(key) {
          const storedVal = this.domStorage_.getItem(this.prefixedName_(key));
          if (storedVal == null) {
            return null;
          } else {
            return jsonEval(storedVal);
          }
        }
        remove(key) {
          this.domStorage_.removeItem(this.prefixedName_(key));
        }
        prefixedName_(name3) {
          return this.prefix_ + name3;
        }
        toString() {
          return this.domStorage_.toString();
        }
      };
      MemoryStorage = class {
        constructor() {
          this.cache_ = {};
          this.isInMemoryStorage = true;
        }
        set(key, value) {
          if (value == null) {
            delete this.cache_[key];
          } else {
            this.cache_[key] = value;
          }
        }
        get(key) {
          if (contains(this.cache_, key)) {
            return this.cache_[key];
          }
          return null;
        }
        remove(key) {
          delete this.cache_[key];
        }
      };
      createStoragefor = function(domStorageName) {
        try {
          if (typeof window !== "undefined" && typeof window[domStorageName] !== "undefined") {
            const domStorage = window[domStorageName];
            domStorage.setItem("firebase:sentinel", "cache");
            domStorage.removeItem("firebase:sentinel");
            return new DOMStorageWrapper(domStorage);
          }
        } catch (e) {
        }
        return new MemoryStorage();
      };
      PersistentStorage = createStoragefor("localStorage");
      SessionStorage = createStoragefor("sessionStorage");
      logClient = new Logger("@firebase/database");
      LUIDGenerator = /* @__PURE__ */ function() {
        let id = 1;
        return function() {
          return id++;
        };
      }();
      sha1 = function(str) {
        const utf8Bytes = stringToByteArray(str);
        const sha12 = new Sha1();
        sha12.update(utf8Bytes);
        const sha1Bytes = sha12.digest();
        return base64.encodeByteArray(sha1Bytes);
      };
      buildLogMessage_ = function(...varArgs) {
        let message = "";
        for (let i = 0; i < varArgs.length; i++) {
          const arg = varArgs[i];
          if (Array.isArray(arg) || arg && typeof arg === "object" && // eslint-disable-next-line @typescript-eslint/no-explicit-any
          typeof arg.length === "number") {
            message += buildLogMessage_.apply(null, arg);
          } else if (typeof arg === "object") {
            message += stringify(arg);
          } else {
            message += arg;
          }
          message += " ";
        }
        return message;
      };
      logger2 = null;
      firstLog_ = true;
      enableLogging$1 = function(logger_, persistent) {
        assert(!persistent || logger_ === true || logger_ === false, "Can't turn on custom loggers persistently.");
        if (logger_ === true) {
          logClient.logLevel = LogLevel.VERBOSE;
          logger2 = logClient.log.bind(logClient);
          if (persistent) {
            SessionStorage.set("logging_enabled", true);
          }
        } else if (typeof logger_ === "function") {
          logger2 = logger_;
        } else {
          logger2 = null;
          SessionStorage.remove("logging_enabled");
        }
      };
      log = function(...varArgs) {
        if (firstLog_ === true) {
          firstLog_ = false;
          if (logger2 === null && SessionStorage.get("logging_enabled") === true) {
            enableLogging$1(true);
          }
        }
        if (logger2) {
          const message = buildLogMessage_.apply(null, varArgs);
          logger2(message);
        }
      };
      logWrapper = function(prefix) {
        return function(...varArgs) {
          log(prefix, ...varArgs);
        };
      };
      error = function(...varArgs) {
        const message = "FIREBASE INTERNAL ERROR: " + buildLogMessage_(...varArgs);
        logClient.error(message);
      };
      fatal = function(...varArgs) {
        const message = `FIREBASE FATAL ERROR: ${buildLogMessage_(...varArgs)}`;
        logClient.error(message);
        throw new Error(message);
      };
      warn = function(...varArgs) {
        const message = "FIREBASE WARNING: " + buildLogMessage_(...varArgs);
        logClient.warn(message);
      };
      warnIfPageIsSecure = function() {
        if (typeof window !== "undefined" && window.location && window.location.protocol && window.location.protocol.indexOf("https:") !== -1) {
          warn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");
        }
      };
      isInvalidJSONNumber = function(data) {
        return typeof data === "number" && (data !== data || // NaN
        data === Number.POSITIVE_INFINITY || data === Number.NEGATIVE_INFINITY);
      };
      executeWhenDOMReady = function(fn) {
        if (isNodeSdk() || document.readyState === "complete") {
          fn();
        } else {
          let called = false;
          const wrappedFn = function() {
            if (!document.body) {
              setTimeout(wrappedFn, Math.floor(10));
              return;
            }
            if (!called) {
              called = true;
              fn();
            }
          };
          if (document.addEventListener) {
            document.addEventListener("DOMContentLoaded", wrappedFn, false);
            window.addEventListener("load", wrappedFn, false);
          } else if (document.attachEvent) {
            document.attachEvent("onreadystatechange", () => {
              if (document.readyState === "complete") {
                wrappedFn();
              }
            });
            window.attachEvent("onload", wrappedFn);
          }
        }
      };
      MIN_NAME = "[MIN_NAME]";
      MAX_NAME = "[MAX_NAME]";
      nameCompare = function(a, b) {
        if (a === b) {
          return 0;
        } else if (a === MIN_NAME || b === MAX_NAME) {
          return -1;
        } else if (b === MIN_NAME || a === MAX_NAME) {
          return 1;
        } else {
          const aAsInt = tryParseInt(a), bAsInt = tryParseInt(b);
          if (aAsInt !== null) {
            if (bAsInt !== null) {
              return aAsInt - bAsInt === 0 ? a.length - b.length : aAsInt - bAsInt;
            } else {
              return -1;
            }
          } else if (bAsInt !== null) {
            return 1;
          } else {
            return a < b ? -1 : 1;
          }
        }
      };
      stringCompare = function(a, b) {
        if (a === b) {
          return 0;
        } else if (a < b) {
          return -1;
        } else {
          return 1;
        }
      };
      requireKey = function(key, obj) {
        if (obj && key in obj) {
          return obj[key];
        } else {
          throw new Error("Missing required key (" + key + ") in object: " + stringify(obj));
        }
      };
      ObjectToUniqueKey = function(obj) {
        if (typeof obj !== "object" || obj === null) {
          return stringify(obj);
        }
        const keys = [];
        for (const k in obj) {
          keys.push(k);
        }
        keys.sort();
        let key = "{";
        for (let i = 0; i < keys.length; i++) {
          if (i !== 0) {
            key += ",";
          }
          key += stringify(keys[i]);
          key += ":";
          key += ObjectToUniqueKey(obj[keys[i]]);
        }
        key += "}";
        return key;
      };
      splitStringBySize = function(str, segsize) {
        const len = str.length;
        if (len <= segsize) {
          return [str];
        }
        const dataSegs = [];
        for (let c = 0; c < len; c += segsize) {
          if (c + segsize > len) {
            dataSegs.push(str.substring(c, len));
          } else {
            dataSegs.push(str.substring(c, c + segsize));
          }
        }
        return dataSegs;
      };
      doubleToIEEE754String = function(v) {
        assert(!isInvalidJSONNumber(v), "Invalid JSON number");
        const ebits = 11, fbits = 52;
        const bias = (1 << ebits - 1) - 1;
        let s, e, f, ln, i;
        if (v === 0) {
          e = 0;
          f = 0;
          s = 1 / v === -Infinity ? 1 : 0;
        } else {
          s = v < 0;
          v = Math.abs(v);
          if (v >= Math.pow(2, 1 - bias)) {
            ln = Math.min(Math.floor(Math.log(v) / Math.LN2), bias);
            e = ln + bias;
            f = Math.round(v * Math.pow(2, fbits - ln) - Math.pow(2, fbits));
          } else {
            e = 0;
            f = Math.round(v / Math.pow(2, 1 - bias - fbits));
          }
        }
        const bits = [];
        for (i = fbits; i; i -= 1) {
          bits.push(f % 2 ? 1 : 0);
          f = Math.floor(f / 2);
        }
        for (i = ebits; i; i -= 1) {
          bits.push(e % 2 ? 1 : 0);
          e = Math.floor(e / 2);
        }
        bits.push(s ? 1 : 0);
        bits.reverse();
        const str = bits.join("");
        let hexByteString = "";
        for (i = 0; i < 64; i += 8) {
          let hexByte = parseInt(str.substr(i, 8), 2).toString(16);
          if (hexByte.length === 1) {
            hexByte = "0" + hexByte;
          }
          hexByteString = hexByteString + hexByte;
        }
        return hexByteString.toLowerCase();
      };
      isChromeExtensionContentScript = function() {
        return !!(typeof window === "object" && window["chrome"] && window["chrome"]["extension"] && !/^chrome/.test(window.location.href));
      };
      isWindowsStoreApp = function() {
        return typeof Windows === "object" && typeof Windows.UI === "object";
      };
      INTEGER_REGEXP_ = new RegExp("^-?(0*)\\d{1,10}$");
      INTEGER_32_MIN = -2147483648;
      INTEGER_32_MAX = 2147483647;
      tryParseInt = function(str) {
        if (INTEGER_REGEXP_.test(str)) {
          const intVal = Number(str);
          if (intVal >= INTEGER_32_MIN && intVal <= INTEGER_32_MAX) {
            return intVal;
          }
        }
        return null;
      };
      exceptionGuard = function(fn) {
        try {
          fn();
        } catch (e) {
          setTimeout(() => {
            const stack = e.stack || "";
            warn("Exception was thrown by user callback.", stack);
            throw e;
          }, Math.floor(0));
        }
      };
      beingCrawled = function() {
        const userAgent = typeof window === "object" && window["navigator"] && window["navigator"]["userAgent"] || "";
        return userAgent.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i) >= 0;
      };
      setTimeoutNonBlocking = function(fn, time) {
        const timeout = setTimeout(fn, time);
        if (typeof timeout === "number" && // @ts-ignore Is only defined in Deno environments.
        typeof Deno !== "undefined" && // @ts-ignore Deno and unrefTimer are only defined in Deno environments.
        Deno["unrefTimer"]) {
          Deno.unrefTimer(timeout);
        } else if (typeof timeout === "object" && timeout["unref"]) {
          timeout["unref"]();
        }
        return timeout;
      };
      AppCheckTokenProvider = class {
        constructor(app, appCheckProvider) {
          this.appCheckProvider = appCheckProvider;
          this.appName = app.name;
          if (_isFirebaseServerApp(app) && app.settings.appCheckToken) {
            this.serverAppAppCheckToken = app.settings.appCheckToken;
          }
          this.appCheck = appCheckProvider === null || appCheckProvider === void 0 ? void 0 : appCheckProvider.getImmediate({ optional: true });
          if (!this.appCheck) {
            appCheckProvider === null || appCheckProvider === void 0 ? void 0 : appCheckProvider.get().then((appCheck) => this.appCheck = appCheck);
          }
        }
        getToken(forceRefresh) {
          if (this.serverAppAppCheckToken) {
            if (forceRefresh) {
              throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");
            }
            return Promise.resolve({ token: this.serverAppAppCheckToken });
          }
          if (!this.appCheck) {
            return new Promise((resolve, reject) => {
              setTimeout(() => {
                if (this.appCheck) {
                  this.getToken(forceRefresh).then(resolve, reject);
                } else {
                  resolve(null);
                }
              }, 0);
            });
          }
          return this.appCheck.getToken(forceRefresh);
        }
        addTokenChangeListener(listener) {
          var _a;
          (_a = this.appCheckProvider) === null || _a === void 0 ? void 0 : _a.get().then((appCheck) => appCheck.addTokenListener(listener));
        }
        notifyForInvalidToken() {
          warn(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`);
        }
      };
      FirebaseAuthTokenProvider = class {
        constructor(appName_, firebaseOptions_, authProvider_) {
          this.appName_ = appName_;
          this.firebaseOptions_ = firebaseOptions_;
          this.authProvider_ = authProvider_;
          this.auth_ = null;
          this.auth_ = authProvider_.getImmediate({ optional: true });
          if (!this.auth_) {
            authProvider_.onInit((auth) => this.auth_ = auth);
          }
        }
        getToken(forceRefresh) {
          if (!this.auth_) {
            return new Promise((resolve, reject) => {
              setTimeout(() => {
                if (this.auth_) {
                  this.getToken(forceRefresh).then(resolve, reject);
                } else {
                  resolve(null);
                }
              }, 0);
            });
          }
          return this.auth_.getToken(forceRefresh).catch((error2) => {
            if (error2 && error2.code === "auth/token-not-initialized") {
              log("Got auth/token-not-initialized error.  Treating as null token.");
              return null;
            } else {
              return Promise.reject(error2);
            }
          });
        }
        addTokenChangeListener(listener) {
          if (this.auth_) {
            this.auth_.addAuthTokenListener(listener);
          } else {
            this.authProvider_.get().then((auth) => auth.addAuthTokenListener(listener));
          }
        }
        removeTokenChangeListener(listener) {
          this.authProvider_.get().then((auth) => auth.removeAuthTokenListener(listener));
        }
        notifyForInvalidToken() {
          let errorMessage = 'Provided authentication credentials for the app named "' + this.appName_ + '" are invalid. This usually indicates your app was not initialized correctly. ';
          if ("credential" in this.firebaseOptions_) {
            errorMessage += 'Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.';
          } else if ("serviceAccount" in this.firebaseOptions_) {
            errorMessage += 'Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.';
          } else {
            errorMessage += 'Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.';
          }
          warn(errorMessage);
        }
      };
      EmulatorTokenProvider = class {
        constructor(accessToken) {
          this.accessToken = accessToken;
        }
        getToken(forceRefresh) {
          return Promise.resolve({
            accessToken: this.accessToken
          });
        }
        addTokenChangeListener(listener) {
          listener(this.accessToken);
        }
        removeTokenChangeListener(listener) {
        }
        notifyForInvalidToken() {
        }
      };
      EmulatorTokenProvider.OWNER = "owner";
      PROTOCOL_VERSION = "5";
      VERSION_PARAM = "v";
      TRANSPORT_SESSION_PARAM = "s";
      REFERER_PARAM = "r";
      FORGE_REF = "f";
      FORGE_DOMAIN_RE = /(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/;
      LAST_SESSION_PARAM = "ls";
      APPLICATION_ID_PARAM = "p";
      APP_CHECK_TOKEN_PARAM = "ac";
      WEBSOCKET = "websocket";
      LONG_POLLING = "long_polling";
      RepoInfo = class {
        /**
         * @param host - Hostname portion of the url for the repo
         * @param secure - Whether or not this repo is accessed over ssl
         * @param namespace - The namespace represented by the repo
         * @param webSocketOnly - Whether to prefer websockets over all other transports (used by Nest).
         * @param nodeAdmin - Whether this instance uses Admin SDK credentials
         * @param persistenceKey - Override the default session persistence storage key
         */
        constructor(host, secure, namespace, webSocketOnly, nodeAdmin = false, persistenceKey = "", includeNamespaceInQueryParams = false, isUsingEmulator = false) {
          this.secure = secure;
          this.namespace = namespace;
          this.webSocketOnly = webSocketOnly;
          this.nodeAdmin = nodeAdmin;
          this.persistenceKey = persistenceKey;
          this.includeNamespaceInQueryParams = includeNamespaceInQueryParams;
          this.isUsingEmulator = isUsingEmulator;
          this._host = host.toLowerCase();
          this._domain = this._host.substr(this._host.indexOf(".") + 1);
          this.internalHost = PersistentStorage.get("host:" + host) || this._host;
        }
        isCacheableHost() {
          return this.internalHost.substr(0, 2) === "s-";
        }
        isCustomHost() {
          return this._domain !== "firebaseio.com" && this._domain !== "firebaseio-demo.com";
        }
        get host() {
          return this._host;
        }
        set host(newHost) {
          if (newHost !== this.internalHost) {
            this.internalHost = newHost;
            if (this.isCacheableHost()) {
              PersistentStorage.set("host:" + this._host, this.internalHost);
            }
          }
        }
        toString() {
          let str = this.toURLString();
          if (this.persistenceKey) {
            str += "<" + this.persistenceKey + ">";
          }
          return str;
        }
        toURLString() {
          const protocol = this.secure ? "https://" : "http://";
          const query = this.includeNamespaceInQueryParams ? `?ns=${this.namespace}` : "";
          return `${protocol}${this.host}/${query}`;
        }
      };
      StatsCollection = class {
        constructor() {
          this.counters_ = {};
        }
        incrementCounter(name3, amount = 1) {
          if (!contains(this.counters_, name3)) {
            this.counters_[name3] = 0;
          }
          this.counters_[name3] += amount;
        }
        get() {
          return deepCopy(this.counters_);
        }
      };
      collections = {};
      reporters = {};
      PacketReceiver = class {
        /**
         * @param onMessage_
         */
        constructor(onMessage_) {
          this.onMessage_ = onMessage_;
          this.pendingResponses = [];
          this.currentResponseNum = 0;
          this.closeAfterResponse = -1;
          this.onClose = null;
        }
        closeAfter(responseNum, callback) {
          this.closeAfterResponse = responseNum;
          this.onClose = callback;
          if (this.closeAfterResponse < this.currentResponseNum) {
            this.onClose();
            this.onClose = null;
          }
        }
        /**
         * Each message from the server comes with a response number, and an array of data. The responseNumber
         * allows us to ensure that we process them in the right order, since we can't be guaranteed that all
         * browsers will respond in the same order as the requests we sent
         */
        handleResponse(requestNum, data) {
          this.pendingResponses[requestNum] = data;
          while (this.pendingResponses[this.currentResponseNum]) {
            const toProcess = this.pendingResponses[this.currentResponseNum];
            delete this.pendingResponses[this.currentResponseNum];
            for (let i = 0; i < toProcess.length; ++i) {
              if (toProcess[i]) {
                exceptionGuard(() => {
                  this.onMessage_(toProcess[i]);
                });
              }
            }
            if (this.currentResponseNum === this.closeAfterResponse) {
              if (this.onClose) {
                this.onClose();
                this.onClose = null;
              }
              break;
            }
            this.currentResponseNum++;
          }
        }
      };
      FIREBASE_LONGPOLL_START_PARAM = "start";
      FIREBASE_LONGPOLL_CLOSE_COMMAND = "close";
      FIREBASE_LONGPOLL_COMMAND_CB_NAME = "pLPCommand";
      FIREBASE_LONGPOLL_DATA_CB_NAME = "pRTLPCB";
      FIREBASE_LONGPOLL_ID_PARAM = "id";
      FIREBASE_LONGPOLL_PW_PARAM = "pw";
      FIREBASE_LONGPOLL_SERIAL_PARAM = "ser";
      FIREBASE_LONGPOLL_CALLBACK_ID_PARAM = "cb";
      FIREBASE_LONGPOLL_SEGMENT_NUM_PARAM = "seg";
      FIREBASE_LONGPOLL_SEGMENTS_IN_PACKET = "ts";
      FIREBASE_LONGPOLL_DATA_PARAM = "d";
      FIREBASE_LONGPOLL_DISCONN_FRAME_REQUEST_PARAM = "dframe";
      MAX_URL_DATA_SIZE = 1870;
      SEG_HEADER_SIZE = 30;
      MAX_PAYLOAD_SIZE = MAX_URL_DATA_SIZE - SEG_HEADER_SIZE;
      KEEPALIVE_REQUEST_INTERVAL = 25e3;
      LP_CONNECT_TIMEOUT = 3e4;
      BrowserPollConnection = class _BrowserPollConnection {
        /**
         * @param connId An identifier for this connection, used for logging
         * @param repoInfo The info for the endpoint to send data to.
         * @param applicationId The Firebase App ID for this project.
         * @param appCheckToken The AppCheck token for this client.
         * @param authToken The AuthToken to use for this connection.
         * @param transportSessionId Optional transportSessionid if we are
         * reconnecting for an existing transport session
         * @param lastSessionId Optional lastSessionId if the PersistentConnection has
         * already created a connection previously
         */
        constructor(connId, repoInfo, applicationId, appCheckToken, authToken, transportSessionId, lastSessionId) {
          this.connId = connId;
          this.repoInfo = repoInfo;
          this.applicationId = applicationId;
          this.appCheckToken = appCheckToken;
          this.authToken = authToken;
          this.transportSessionId = transportSessionId;
          this.lastSessionId = lastSessionId;
          this.bytesSent = 0;
          this.bytesReceived = 0;
          this.everConnected_ = false;
          this.log_ = logWrapper(connId);
          this.stats_ = statsManagerGetCollection(repoInfo);
          this.urlFn = (params) => {
            if (this.appCheckToken) {
              params[APP_CHECK_TOKEN_PARAM] = this.appCheckToken;
            }
            return repoInfoConnectionURL(repoInfo, LONG_POLLING, params);
          };
        }
        /**
         * @param onMessage - Callback when messages arrive
         * @param onDisconnect - Callback with connection lost.
         */
        open(onMessage, onDisconnect) {
          this.curSegmentNum = 0;
          this.onDisconnect_ = onDisconnect;
          this.myPacketOrderer = new PacketReceiver(onMessage);
          this.isClosed_ = false;
          this.connectTimeoutTimer_ = setTimeout(() => {
            this.log_("Timed out trying to connect.");
            this.onClosed_();
            this.connectTimeoutTimer_ = null;
          }, Math.floor(LP_CONNECT_TIMEOUT));
          executeWhenDOMReady(() => {
            if (this.isClosed_) {
              return;
            }
            this.scriptTagHolder = new FirebaseIFrameScriptHolder((...args) => {
              const [command, arg1, arg2, arg3, arg4] = args;
              this.incrementIncomingBytes_(args);
              if (!this.scriptTagHolder) {
                return;
              }
              if (this.connectTimeoutTimer_) {
                clearTimeout(this.connectTimeoutTimer_);
                this.connectTimeoutTimer_ = null;
              }
              this.everConnected_ = true;
              if (command === FIREBASE_LONGPOLL_START_PARAM) {
                this.id = arg1;
                this.password = arg2;
              } else if (command === FIREBASE_LONGPOLL_CLOSE_COMMAND) {
                if (arg1) {
                  this.scriptTagHolder.sendNewPolls = false;
                  this.myPacketOrderer.closeAfter(arg1, () => {
                    this.onClosed_();
                  });
                } else {
                  this.onClosed_();
                }
              } else {
                throw new Error("Unrecognized command received: " + command);
              }
            }, (...args) => {
              const [pN, data] = args;
              this.incrementIncomingBytes_(args);
              this.myPacketOrderer.handleResponse(pN, data);
            }, () => {
              this.onClosed_();
            }, this.urlFn);
            const urlParams = {};
            urlParams[FIREBASE_LONGPOLL_START_PARAM] = "t";
            urlParams[FIREBASE_LONGPOLL_SERIAL_PARAM] = Math.floor(Math.random() * 1e8);
            if (this.scriptTagHolder.uniqueCallbackIdentifier) {
              urlParams[FIREBASE_LONGPOLL_CALLBACK_ID_PARAM] = this.scriptTagHolder.uniqueCallbackIdentifier;
            }
            urlParams[VERSION_PARAM] = PROTOCOL_VERSION;
            if (this.transportSessionId) {
              urlParams[TRANSPORT_SESSION_PARAM] = this.transportSessionId;
            }
            if (this.lastSessionId) {
              urlParams[LAST_SESSION_PARAM] = this.lastSessionId;
            }
            if (this.applicationId) {
              urlParams[APPLICATION_ID_PARAM] = this.applicationId;
            }
            if (this.appCheckToken) {
              urlParams[APP_CHECK_TOKEN_PARAM] = this.appCheckToken;
            }
            if (typeof location !== "undefined" && location.hostname && FORGE_DOMAIN_RE.test(location.hostname)) {
              urlParams[REFERER_PARAM] = FORGE_REF;
            }
            const connectURL = this.urlFn(urlParams);
            this.log_("Connecting via long-poll to " + connectURL);
            this.scriptTagHolder.addTag(connectURL, () => {
            });
          });
        }
        /**
         * Call this when a handshake has completed successfully and we want to consider the connection established
         */
        start() {
          this.scriptTagHolder.startLongPoll(this.id, this.password);
          this.addDisconnectPingFrame(this.id, this.password);
        }
        /**
         * Forces long polling to be considered as a potential transport
         */
        static forceAllow() {
          _BrowserPollConnection.forceAllow_ = true;
        }
        /**
         * Forces longpolling to not be considered as a potential transport
         */
        static forceDisallow() {
          _BrowserPollConnection.forceDisallow_ = true;
        }
        // Static method, use string literal so it can be accessed in a generic way
        static isAvailable() {
          if (isNodeSdk()) {
            return false;
          } else if (_BrowserPollConnection.forceAllow_) {
            return true;
          } else {
            return !_BrowserPollConnection.forceDisallow_ && typeof document !== "undefined" && document.createElement != null && !isChromeExtensionContentScript() && !isWindowsStoreApp();
          }
        }
        /**
         * No-op for polling
         */
        markConnectionHealthy() {
        }
        /**
         * Stops polling and cleans up the iframe
         */
        shutdown_() {
          this.isClosed_ = true;
          if (this.scriptTagHolder) {
            this.scriptTagHolder.close();
            this.scriptTagHolder = null;
          }
          if (this.myDisconnFrame) {
            document.body.removeChild(this.myDisconnFrame);
            this.myDisconnFrame = null;
          }
          if (this.connectTimeoutTimer_) {
            clearTimeout(this.connectTimeoutTimer_);
            this.connectTimeoutTimer_ = null;
          }
        }
        /**
         * Triggered when this transport is closed
         */
        onClosed_() {
          if (!this.isClosed_) {
            this.log_("Longpoll is closing itself");
            this.shutdown_();
            if (this.onDisconnect_) {
              this.onDisconnect_(this.everConnected_);
              this.onDisconnect_ = null;
            }
          }
        }
        /**
         * External-facing close handler. RealTime has requested we shut down. Kill our connection and tell the server
         * that we've left.
         */
        close() {
          if (!this.isClosed_) {
            this.log_("Longpoll is being closed.");
            this.shutdown_();
          }
        }
        /**
         * Send the JSON object down to the server. It will need to be stringified, base64 encoded, and then
         * broken into chunks (since URLs have a small maximum length).
         * @param data - The JSON data to transmit.
         */
        send(data) {
          const dataStr = stringify(data);
          this.bytesSent += dataStr.length;
          this.stats_.incrementCounter("bytes_sent", dataStr.length);
          const base64data = base64Encode(dataStr);
          const dataSegs = splitStringBySize(base64data, MAX_PAYLOAD_SIZE);
          for (let i = 0; i < dataSegs.length; i++) {
            this.scriptTagHolder.enqueueSegment(this.curSegmentNum, dataSegs.length, dataSegs[i]);
            this.curSegmentNum++;
          }
        }
        /**
         * This is how we notify the server that we're leaving.
         * We aren't able to send requests with DHTML on a window close event, but we can
         * trigger XHR requests in some browsers (everything but Opera basically).
         */
        addDisconnectPingFrame(id, pw) {
          if (isNodeSdk()) {
            return;
          }
          this.myDisconnFrame = document.createElement("iframe");
          const urlParams = {};
          urlParams[FIREBASE_LONGPOLL_DISCONN_FRAME_REQUEST_PARAM] = "t";
          urlParams[FIREBASE_LONGPOLL_ID_PARAM] = id;
          urlParams[FIREBASE_LONGPOLL_PW_PARAM] = pw;
          this.myDisconnFrame.src = this.urlFn(urlParams);
          this.myDisconnFrame.style.display = "none";
          document.body.appendChild(this.myDisconnFrame);
        }
        /**
         * Used to track the bytes received by this client
         */
        incrementIncomingBytes_(args) {
          const bytesReceived = stringify(args).length;
          this.bytesReceived += bytesReceived;
          this.stats_.incrementCounter("bytes_received", bytesReceived);
        }
      };
      FirebaseIFrameScriptHolder = class _FirebaseIFrameScriptHolder {
        /**
         * @param commandCB - The callback to be called when control commands are received from the server.
         * @param onMessageCB - The callback to be triggered when responses arrive from the server.
         * @param onDisconnect - The callback to be triggered when this tag holder is closed
         * @param urlFn - A function that provides the URL of the endpoint to send data to.
         */
        constructor(commandCB, onMessageCB, onDisconnect, urlFn) {
          this.onDisconnect = onDisconnect;
          this.urlFn = urlFn;
          this.outstandingRequests = /* @__PURE__ */ new Set();
          this.pendingSegs = [];
          this.currentSerial = Math.floor(Math.random() * 1e8);
          this.sendNewPolls = true;
          if (!isNodeSdk()) {
            this.uniqueCallbackIdentifier = LUIDGenerator();
            window[FIREBASE_LONGPOLL_COMMAND_CB_NAME + this.uniqueCallbackIdentifier] = commandCB;
            window[FIREBASE_LONGPOLL_DATA_CB_NAME + this.uniqueCallbackIdentifier] = onMessageCB;
            this.myIFrame = _FirebaseIFrameScriptHolder.createIFrame_();
            let script = "";
            if (this.myIFrame.src && this.myIFrame.src.substr(0, "javascript:".length) === "javascript:") {
              const currentDomain = document.domain;
              script = '<script>document.domain="' + currentDomain + '";<\/script>';
            }
            const iframeContents = "<html><body>" + script + "</body></html>";
            try {
              this.myIFrame.doc.open();
              this.myIFrame.doc.write(iframeContents);
              this.myIFrame.doc.close();
            } catch (e) {
              log("frame writing exception");
              if (e.stack) {
                log(e.stack);
              }
              log(e);
            }
          } else {
            this.commandCB = commandCB;
            this.onMessageCB = onMessageCB;
          }
        }
        /**
         * Each browser has its own funny way to handle iframes. Here we mush them all together into one object that I can
         * actually use.
         */
        static createIFrame_() {
          const iframe = document.createElement("iframe");
          iframe.style.display = "none";
          if (document.body) {
            document.body.appendChild(iframe);
            try {
              const a = iframe.contentWindow.document;
              if (!a) {
                log("No IE domain setting required");
              }
            } catch (e) {
              const domain = document.domain;
              iframe.src = "javascript:void((function(){document.open();document.domain='" + domain + "';document.close();})())";
            }
          } else {
            throw "Document body has not initialized. Wait to initialize Firebase until after the document is ready.";
          }
          if (iframe.contentDocument) {
            iframe.doc = iframe.contentDocument;
          } else if (iframe.contentWindow) {
            iframe.doc = iframe.contentWindow.document;
          } else if (iframe.document) {
            iframe.doc = iframe.document;
          }
          return iframe;
        }
        /**
         * Cancel all outstanding queries and remove the frame.
         */
        close() {
          this.alive = false;
          if (this.myIFrame) {
            this.myIFrame.doc.body.textContent = "";
            setTimeout(() => {
              if (this.myIFrame !== null) {
                document.body.removeChild(this.myIFrame);
                this.myIFrame = null;
              }
            }, Math.floor(0));
          }
          const onDisconnect = this.onDisconnect;
          if (onDisconnect) {
            this.onDisconnect = null;
            onDisconnect();
          }
        }
        /**
         * Actually start the long-polling session by adding the first script tag(s) to the iframe.
         * @param id - The ID of this connection
         * @param pw - The password for this connection
         */
        startLongPoll(id, pw) {
          this.myID = id;
          this.myPW = pw;
          this.alive = true;
          while (this.newRequest_()) {
          }
        }
        /**
         * This is called any time someone might want a script tag to be added. It adds a script tag when there aren't
         * too many outstanding requests and we are still alive.
         *
         * If there are outstanding packet segments to send, it sends one. If there aren't, it sends a long-poll anyways if
         * needed.
         */
        newRequest_() {
          if (this.alive && this.sendNewPolls && this.outstandingRequests.size < (this.pendingSegs.length > 0 ? 2 : 1)) {
            this.currentSerial++;
            const urlParams = {};
            urlParams[FIREBASE_LONGPOLL_ID_PARAM] = this.myID;
            urlParams[FIREBASE_LONGPOLL_PW_PARAM] = this.myPW;
            urlParams[FIREBASE_LONGPOLL_SERIAL_PARAM] = this.currentSerial;
            let theURL = this.urlFn(urlParams);
            let curDataString = "";
            let i = 0;
            while (this.pendingSegs.length > 0) {
              const nextSeg = this.pendingSegs[0];
              if (nextSeg.d.length + SEG_HEADER_SIZE + curDataString.length <= MAX_URL_DATA_SIZE) {
                const theSeg = this.pendingSegs.shift();
                curDataString = curDataString + "&" + FIREBASE_LONGPOLL_SEGMENT_NUM_PARAM + i + "=" + theSeg.seg + "&" + FIREBASE_LONGPOLL_SEGMENTS_IN_PACKET + i + "=" + theSeg.ts + "&" + FIREBASE_LONGPOLL_DATA_PARAM + i + "=" + theSeg.d;
                i++;
              } else {
                break;
              }
            }
            theURL = theURL + curDataString;
            this.addLongPollTag_(theURL, this.currentSerial);
            return true;
          } else {
            return false;
          }
        }
        /**
         * Queue a packet for transmission to the server.
         * @param segnum - A sequential id for this packet segment used for reassembly
         * @param totalsegs - The total number of segments in this packet
         * @param data - The data for this segment.
         */
        enqueueSegment(segnum, totalsegs, data) {
          this.pendingSegs.push({ seg: segnum, ts: totalsegs, d: data });
          if (this.alive) {
            this.newRequest_();
          }
        }
        /**
         * Add a script tag for a regular long-poll request.
         * @param url - The URL of the script tag.
         * @param serial - The serial number of the request.
         */
        addLongPollTag_(url, serial) {
          this.outstandingRequests.add(serial);
          const doNewRequest = () => {
            this.outstandingRequests.delete(serial);
            this.newRequest_();
          };
          const keepaliveTimeout = setTimeout(doNewRequest, Math.floor(KEEPALIVE_REQUEST_INTERVAL));
          const readyStateCB = () => {
            clearTimeout(keepaliveTimeout);
            doNewRequest();
          };
          this.addTag(url, readyStateCB);
        }
        /**
         * Add an arbitrary script tag to the iframe.
         * @param url - The URL for the script tag source.
         * @param loadCB - A callback to be triggered once the script has loaded.
         */
        addTag(url, loadCB) {
          if (isNodeSdk()) {
            this.doNodeLongPoll(url, loadCB);
          } else {
            setTimeout(() => {
              try {
                if (!this.sendNewPolls) {
                  return;
                }
                const newScript = this.myIFrame.doc.createElement("script");
                newScript.type = "text/javascript";
                newScript.async = true;
                newScript.src = url;
                newScript.onload = newScript.onreadystatechange = function() {
                  const rstate = newScript.readyState;
                  if (!rstate || rstate === "loaded" || rstate === "complete") {
                    newScript.onload = newScript.onreadystatechange = null;
                    if (newScript.parentNode) {
                      newScript.parentNode.removeChild(newScript);
                    }
                    loadCB();
                  }
                };
                newScript.onerror = () => {
                  log("Long-poll script failed to load: " + url);
                  this.sendNewPolls = false;
                  this.close();
                };
                this.myIFrame.doc.body.appendChild(newScript);
              } catch (e) {
              }
            }, Math.floor(1));
          }
        }
      };
      WEBSOCKET_MAX_FRAME_SIZE = 16384;
      WEBSOCKET_KEEPALIVE_INTERVAL = 45e3;
      WebSocketImpl = null;
      if (typeof MozWebSocket !== "undefined") {
        WebSocketImpl = MozWebSocket;
      } else if (typeof WebSocket !== "undefined") {
        WebSocketImpl = WebSocket;
      }
      WebSocketConnection = class _WebSocketConnection {
        /**
         * @param connId identifier for this transport
         * @param repoInfo The info for the websocket endpoint.
         * @param applicationId The Firebase App ID for this project.
         * @param appCheckToken The App Check Token for this client.
         * @param authToken The Auth Token for this client.
         * @param transportSessionId Optional transportSessionId if this is connecting
         * to an existing transport session
         * @param lastSessionId Optional lastSessionId if there was a previous
         * connection
         */
        constructor(connId, repoInfo, applicationId, appCheckToken, authToken, transportSessionId, lastSessionId) {
          this.connId = connId;
          this.applicationId = applicationId;
          this.appCheckToken = appCheckToken;
          this.authToken = authToken;
          this.keepaliveTimer = null;
          this.frames = null;
          this.totalFrames = 0;
          this.bytesSent = 0;
          this.bytesReceived = 0;
          this.log_ = logWrapper(this.connId);
          this.stats_ = statsManagerGetCollection(repoInfo);
          this.connURL = _WebSocketConnection.connectionURL_(repoInfo, transportSessionId, lastSessionId, appCheckToken, applicationId);
          this.nodeAdmin = repoInfo.nodeAdmin;
        }
        /**
         * @param repoInfo - The info for the websocket endpoint.
         * @param transportSessionId - Optional transportSessionId if this is connecting to an existing transport
         *                                         session
         * @param lastSessionId - Optional lastSessionId if there was a previous connection
         * @returns connection url
         */
        static connectionURL_(repoInfo, transportSessionId, lastSessionId, appCheckToken, applicationId) {
          const urlParams = {};
          urlParams[VERSION_PARAM] = PROTOCOL_VERSION;
          if (!isNodeSdk() && typeof location !== "undefined" && location.hostname && FORGE_DOMAIN_RE.test(location.hostname)) {
            urlParams[REFERER_PARAM] = FORGE_REF;
          }
          if (transportSessionId) {
            urlParams[TRANSPORT_SESSION_PARAM] = transportSessionId;
          }
          if (lastSessionId) {
            urlParams[LAST_SESSION_PARAM] = lastSessionId;
          }
          if (appCheckToken) {
            urlParams[APP_CHECK_TOKEN_PARAM] = appCheckToken;
          }
          if (applicationId) {
            urlParams[APPLICATION_ID_PARAM] = applicationId;
          }
          return repoInfoConnectionURL(repoInfo, WEBSOCKET, urlParams);
        }
        /**
         * @param onMessage - Callback when messages arrive
         * @param onDisconnect - Callback with connection lost.
         */
        open(onMessage, onDisconnect) {
          this.onDisconnect = onDisconnect;
          this.onMessage = onMessage;
          this.log_("Websocket connecting to " + this.connURL);
          this.everConnected_ = false;
          PersistentStorage.set("previous_websocket_failure", true);
          try {
            let options;
            if (isNodeSdk()) {
              const device = this.nodeAdmin ? "AdminNode" : "Node";
              options = {
                headers: {
                  "User-Agent": `Firebase/${PROTOCOL_VERSION}/${SDK_VERSION2}/${process.platform}/${device}`,
                  "X-Firebase-GMPID": this.applicationId || ""
                }
              };
              if (this.authToken) {
                options.headers["Authorization"] = `Bearer ${this.authToken}`;
              }
              if (this.appCheckToken) {
                options.headers["X-Firebase-AppCheck"] = this.appCheckToken;
              }
              const env = process["env"];
              const proxy = this.connURL.indexOf("wss://") === 0 ? env["HTTPS_PROXY"] || env["https_proxy"] : env["HTTP_PROXY"] || env["http_proxy"];
              if (proxy) {
                options["proxy"] = { origin: proxy };
              }
            }
            this.mySock = new WebSocketImpl(this.connURL, [], options);
          } catch (e) {
            this.log_("Error instantiating WebSocket.");
            const error2 = e.message || e.data;
            if (error2) {
              this.log_(error2);
            }
            this.onClosed_();
            return;
          }
          this.mySock.onopen = () => {
            this.log_("Websocket connected.");
            this.everConnected_ = true;
          };
          this.mySock.onclose = () => {
            this.log_("Websocket connection was disconnected.");
            this.mySock = null;
            this.onClosed_();
          };
          this.mySock.onmessage = (m) => {
            this.handleIncomingFrame(m);
          };
          this.mySock.onerror = (e) => {
            this.log_("WebSocket error.  Closing connection.");
            const error2 = e.message || e.data;
            if (error2) {
              this.log_(error2);
            }
            this.onClosed_();
          };
        }
        /**
         * No-op for websockets, we don't need to do anything once the connection is confirmed as open
         */
        start() {
        }
        static forceDisallow() {
          _WebSocketConnection.forceDisallow_ = true;
        }
        static isAvailable() {
          let isOldAndroid = false;
          if (typeof navigator !== "undefined" && navigator.userAgent) {
            const oldAndroidRegex = /Android ([0-9]{0,}\.[0-9]{0,})/;
            const oldAndroidMatch = navigator.userAgent.match(oldAndroidRegex);
            if (oldAndroidMatch && oldAndroidMatch.length > 1) {
              if (parseFloat(oldAndroidMatch[1]) < 4.4) {
                isOldAndroid = true;
              }
            }
          }
          return !isOldAndroid && WebSocketImpl !== null && !_WebSocketConnection.forceDisallow_;
        }
        /**
         * Returns true if we previously failed to connect with this transport.
         */
        static previouslyFailed() {
          return PersistentStorage.isInMemoryStorage || PersistentStorage.get("previous_websocket_failure") === true;
        }
        markConnectionHealthy() {
          PersistentStorage.remove("previous_websocket_failure");
        }
        appendFrame_(data) {
          this.frames.push(data);
          if (this.frames.length === this.totalFrames) {
            const fullMess = this.frames.join("");
            this.frames = null;
            const jsonMess = jsonEval(fullMess);
            this.onMessage(jsonMess);
          }
        }
        /**
         * @param frameCount - The number of frames we are expecting from the server
         */
        handleNewFrameCount_(frameCount) {
          this.totalFrames = frameCount;
          this.frames = [];
        }
        /**
         * Attempts to parse a frame count out of some text. If it can't, assumes a value of 1
         * @returns Any remaining data to be process, or null if there is none
         */
        extractFrameCount_(data) {
          assert(this.frames === null, "We already have a frame buffer");
          if (data.length <= 6) {
            const frameCount = Number(data);
            if (!isNaN(frameCount)) {
              this.handleNewFrameCount_(frameCount);
              return null;
            }
          }
          this.handleNewFrameCount_(1);
          return data;
        }
        /**
         * Process a websocket frame that has arrived from the server.
         * @param mess - The frame data
         */
        handleIncomingFrame(mess) {
          if (this.mySock === null) {
            return;
          }
          const data = mess["data"];
          this.bytesReceived += data.length;
          this.stats_.incrementCounter("bytes_received", data.length);
          this.resetKeepAlive();
          if (this.frames !== null) {
            this.appendFrame_(data);
          } else {
            const remainingData = this.extractFrameCount_(data);
            if (remainingData !== null) {
              this.appendFrame_(remainingData);
            }
          }
        }
        /**
         * Send a message to the server
         * @param data - The JSON object to transmit
         */
        send(data) {
          this.resetKeepAlive();
          const dataStr = stringify(data);
          this.bytesSent += dataStr.length;
          this.stats_.incrementCounter("bytes_sent", dataStr.length);
          const dataSegs = splitStringBySize(dataStr, WEBSOCKET_MAX_FRAME_SIZE);
          if (dataSegs.length > 1) {
            this.sendString_(String(dataSegs.length));
          }
          for (let i = 0; i < dataSegs.length; i++) {
            this.sendString_(dataSegs[i]);
          }
        }
        shutdown_() {
          this.isClosed_ = true;
          if (this.keepaliveTimer) {
            clearInterval(this.keepaliveTimer);
            this.keepaliveTimer = null;
          }
          if (this.mySock) {
            this.mySock.close();
            this.mySock = null;
          }
        }
        onClosed_() {
          if (!this.isClosed_) {
            this.log_("WebSocket is closing itself");
            this.shutdown_();
            if (this.onDisconnect) {
              this.onDisconnect(this.everConnected_);
              this.onDisconnect = null;
            }
          }
        }
        /**
         * External-facing close handler.
         * Close the websocket and kill the connection.
         */
        close() {
          if (!this.isClosed_) {
            this.log_("WebSocket is being closed");
            this.shutdown_();
          }
        }
        /**
         * Kill the current keepalive timer and start a new one, to ensure that it always fires N seconds after
         * the last activity.
         */
        resetKeepAlive() {
          clearInterval(this.keepaliveTimer);
          this.keepaliveTimer = setInterval(() => {
            if (this.mySock) {
              this.sendString_("0");
            }
            this.resetKeepAlive();
          }, Math.floor(WEBSOCKET_KEEPALIVE_INTERVAL));
        }
        /**
         * Send a string over the websocket.
         *
         * @param str - String to send.
         */
        sendString_(str) {
          try {
            this.mySock.send(str);
          } catch (e) {
            this.log_("Exception thrown from WebSocket.send():", e.message || e.data, "Closing connection.");
            setTimeout(this.onClosed_.bind(this), 0);
          }
        }
      };
      WebSocketConnection.responsesRequiredToBeHealthy = 2;
      WebSocketConnection.healthyTimeout = 3e4;
      TransportManager = class _TransportManager {
        static get ALL_TRANSPORTS() {
          return [BrowserPollConnection, WebSocketConnection];
        }
        /**
         * Returns whether transport has been selected to ensure WebSocketConnection or BrowserPollConnection are not called after
         * TransportManager has already set up transports_
         */
        static get IS_TRANSPORT_INITIALIZED() {
          return this.globalTransportInitialized_;
        }
        /**
         * @param repoInfo - Metadata around the namespace we're connecting to
         */
        constructor(repoInfo) {
          this.initTransports_(repoInfo);
        }
        initTransports_(repoInfo) {
          const isWebSocketsAvailable = WebSocketConnection && WebSocketConnection["isAvailable"]();
          let isSkipPollConnection = isWebSocketsAvailable && !WebSocketConnection.previouslyFailed();
          if (repoInfo.webSocketOnly) {
            if (!isWebSocketsAvailable) {
              warn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway.");
            }
            isSkipPollConnection = true;
          }
          if (isSkipPollConnection) {
            this.transports_ = [WebSocketConnection];
          } else {
            const transports = this.transports_ = [];
            for (const transport of _TransportManager.ALL_TRANSPORTS) {
              if (transport && transport["isAvailable"]()) {
                transports.push(transport);
              }
            }
            _TransportManager.globalTransportInitialized_ = true;
          }
        }
        /**
         * @returns The constructor for the initial transport to use
         */
        initialTransport() {
          if (this.transports_.length > 0) {
            return this.transports_[0];
          } else {
            throw new Error("No transports available");
          }
        }
        /**
         * @returns The constructor for the next transport, or null
         */
        upgradeTransport() {
          if (this.transports_.length > 1) {
            return this.transports_[1];
          } else {
            return null;
          }
        }
      };
      TransportManager.globalTransportInitialized_ = false;
      UPGRADE_TIMEOUT = 6e4;
      DELAY_BEFORE_SENDING_EXTRA_REQUESTS = 5e3;
      BYTES_SENT_HEALTHY_OVERRIDE = 10 * 1024;
      BYTES_RECEIVED_HEALTHY_OVERRIDE = 100 * 1024;
      MESSAGE_TYPE = "t";
      MESSAGE_DATA = "d";
      CONTROL_SHUTDOWN = "s";
      CONTROL_RESET = "r";
      CONTROL_ERROR = "e";
      CONTROL_PONG = "o";
      SWITCH_ACK = "a";
      END_TRANSMISSION = "n";
      PING = "p";
      SERVER_HELLO = "h";
      Connection = class {
        /**
         * @param id - an id for this connection
         * @param repoInfo_ - the info for the endpoint to connect to
         * @param applicationId_ - the Firebase App ID for this project
         * @param appCheckToken_ - The App Check Token for this device.
         * @param authToken_ - The auth token for this session.
         * @param onMessage_ - the callback to be triggered when a server-push message arrives
         * @param onReady_ - the callback to be triggered when this connection is ready to send messages.
         * @param onDisconnect_ - the callback to be triggered when a connection was lost
         * @param onKill_ - the callback to be triggered when this connection has permanently shut down.
         * @param lastSessionId - last session id in persistent connection. is used to clean up old session in real-time server
         */
        constructor(id, repoInfo_, applicationId_, appCheckToken_, authToken_, onMessage_, onReady_, onDisconnect_, onKill_, lastSessionId) {
          this.id = id;
          this.repoInfo_ = repoInfo_;
          this.applicationId_ = applicationId_;
          this.appCheckToken_ = appCheckToken_;
          this.authToken_ = authToken_;
          this.onMessage_ = onMessage_;
          this.onReady_ = onReady_;
          this.onDisconnect_ = onDisconnect_;
          this.onKill_ = onKill_;
          this.lastSessionId = lastSessionId;
          this.connectionCount = 0;
          this.pendingDataMessages = [];
          this.state_ = 0;
          this.log_ = logWrapper("c:" + this.id + ":");
          this.transportManager_ = new TransportManager(repoInfo_);
          this.log_("Connection created");
          this.start_();
        }
        /**
         * Starts a connection attempt
         */
        start_() {
          const conn = this.transportManager_.initialTransport();
          this.conn_ = new conn(this.nextTransportId_(), this.repoInfo_, this.applicationId_, this.appCheckToken_, this.authToken_, null, this.lastSessionId);
          this.primaryResponsesRequired_ = conn["responsesRequiredToBeHealthy"] || 0;
          const onMessageReceived = this.connReceiver_(this.conn_);
          const onConnectionLost = this.disconnReceiver_(this.conn_);
          this.tx_ = this.conn_;
          this.rx_ = this.conn_;
          this.secondaryConn_ = null;
          this.isHealthy_ = false;
          setTimeout(() => {
            this.conn_ && this.conn_.open(onMessageReceived, onConnectionLost);
          }, Math.floor(0));
          const healthyTimeoutMS = conn["healthyTimeout"] || 0;
          if (healthyTimeoutMS > 0) {
            this.healthyTimeout_ = setTimeoutNonBlocking(() => {
              this.healthyTimeout_ = null;
              if (!this.isHealthy_) {
                if (this.conn_ && this.conn_.bytesReceived > BYTES_RECEIVED_HEALTHY_OVERRIDE) {
                  this.log_("Connection exceeded healthy timeout but has received " + this.conn_.bytesReceived + " bytes.  Marking connection healthy.");
                  this.isHealthy_ = true;
                  this.conn_.markConnectionHealthy();
                } else if (this.conn_ && this.conn_.bytesSent > BYTES_SENT_HEALTHY_OVERRIDE) {
                  this.log_("Connection exceeded healthy timeout but has sent " + this.conn_.bytesSent + " bytes.  Leaving connection alive.");
                } else {
                  this.log_("Closing unhealthy connection after timeout.");
                  this.close();
                }
              }
            }, Math.floor(healthyTimeoutMS));
          }
        }
        nextTransportId_() {
          return "c:" + this.id + ":" + this.connectionCount++;
        }
        disconnReceiver_(conn) {
          return (everConnected) => {
            if (conn === this.conn_) {
              this.onConnectionLost_(everConnected);
            } else if (conn === this.secondaryConn_) {
              this.log_("Secondary connection lost.");
              this.onSecondaryConnectionLost_();
            } else {
              this.log_("closing an old connection");
            }
          };
        }
        connReceiver_(conn) {
          return (message) => {
            if (this.state_ !== 2) {
              if (conn === this.rx_) {
                this.onPrimaryMessageReceived_(message);
              } else if (conn === this.secondaryConn_) {
                this.onSecondaryMessageReceived_(message);
              } else {
                this.log_("message on old connection");
              }
            }
          };
        }
        /**
         * @param dataMsg - An arbitrary data message to be sent to the server
         */
        sendRequest(dataMsg) {
          const msg = { t: "d", d: dataMsg };
          this.sendData_(msg);
        }
        tryCleanupConnection() {
          if (this.tx_ === this.secondaryConn_ && this.rx_ === this.secondaryConn_) {
            this.log_("cleaning up and promoting a connection: " + this.secondaryConn_.connId);
            this.conn_ = this.secondaryConn_;
            this.secondaryConn_ = null;
          }
        }
        onSecondaryControl_(controlData) {
          if (MESSAGE_TYPE in controlData) {
            const cmd = controlData[MESSAGE_TYPE];
            if (cmd === SWITCH_ACK) {
              this.upgradeIfSecondaryHealthy_();
            } else if (cmd === CONTROL_RESET) {
              this.log_("Got a reset on secondary, closing it");
              this.secondaryConn_.close();
              if (this.tx_ === this.secondaryConn_ || this.rx_ === this.secondaryConn_) {
                this.close();
              }
            } else if (cmd === CONTROL_PONG) {
              this.log_("got pong on secondary.");
              this.secondaryResponsesRequired_--;
              this.upgradeIfSecondaryHealthy_();
            }
          }
        }
        onSecondaryMessageReceived_(parsedData) {
          const layer = requireKey("t", parsedData);
          const data = requireKey("d", parsedData);
          if (layer === "c") {
            this.onSecondaryControl_(data);
          } else if (layer === "d") {
            this.pendingDataMessages.push(data);
          } else {
            throw new Error("Unknown protocol layer: " + layer);
          }
        }
        upgradeIfSecondaryHealthy_() {
          if (this.secondaryResponsesRequired_ <= 0) {
            this.log_("Secondary connection is healthy.");
            this.isHealthy_ = true;
            this.secondaryConn_.markConnectionHealthy();
            this.proceedWithUpgrade_();
          } else {
            this.log_("sending ping on secondary.");
            this.secondaryConn_.send({ t: "c", d: { t: PING, d: {} } });
          }
        }
        proceedWithUpgrade_() {
          this.secondaryConn_.start();
          this.log_("sending client ack on secondary");
          this.secondaryConn_.send({ t: "c", d: { t: SWITCH_ACK, d: {} } });
          this.log_("Ending transmission on primary");
          this.conn_.send({ t: "c", d: { t: END_TRANSMISSION, d: {} } });
          this.tx_ = this.secondaryConn_;
          this.tryCleanupConnection();
        }
        onPrimaryMessageReceived_(parsedData) {
          const layer = requireKey("t", parsedData);
          const data = requireKey("d", parsedData);
          if (layer === "c") {
            this.onControl_(data);
          } else if (layer === "d") {
            this.onDataMessage_(data);
          }
        }
        onDataMessage_(message) {
          this.onPrimaryResponse_();
          this.onMessage_(message);
        }
        onPrimaryResponse_() {
          if (!this.isHealthy_) {
            this.primaryResponsesRequired_--;
            if (this.primaryResponsesRequired_ <= 0) {
              this.log_("Primary connection is healthy.");
              this.isHealthy_ = true;
              this.conn_.markConnectionHealthy();
            }
          }
        }
        onControl_(controlData) {
          const cmd = requireKey(MESSAGE_TYPE, controlData);
          if (MESSAGE_DATA in controlData) {
            const payload = controlData[MESSAGE_DATA];
            if (cmd === SERVER_HELLO) {
              const handshakePayload = Object.assign({}, payload);
              if (this.repoInfo_.isUsingEmulator) {
                handshakePayload.h = this.repoInfo_.host;
              }
              this.onHandshake_(handshakePayload);
            } else if (cmd === END_TRANSMISSION) {
              this.log_("recvd end transmission on primary");
              this.rx_ = this.secondaryConn_;
              for (let i = 0; i < this.pendingDataMessages.length; ++i) {
                this.onDataMessage_(this.pendingDataMessages[i]);
              }
              this.pendingDataMessages = [];
              this.tryCleanupConnection();
            } else if (cmd === CONTROL_SHUTDOWN) {
              this.onConnectionShutdown_(payload);
            } else if (cmd === CONTROL_RESET) {
              this.onReset_(payload);
            } else if (cmd === CONTROL_ERROR) {
              error("Server Error: " + payload);
            } else if (cmd === CONTROL_PONG) {
              this.log_("got pong on primary.");
              this.onPrimaryResponse_();
              this.sendPingOnPrimaryIfNecessary_();
            } else {
              error("Unknown control packet command: " + cmd);
            }
          }
        }
        /**
         * @param handshake - The handshake data returned from the server
         */
        onHandshake_(handshake) {
          const timestamp = handshake.ts;
          const version4 = handshake.v;
          const host = handshake.h;
          this.sessionId = handshake.s;
          this.repoInfo_.host = host;
          if (this.state_ === 0) {
            this.conn_.start();
            this.onConnectionEstablished_(this.conn_, timestamp);
            if (PROTOCOL_VERSION !== version4) {
              warn("Protocol version mismatch detected");
            }
            this.tryStartUpgrade_();
          }
        }
        tryStartUpgrade_() {
          const conn = this.transportManager_.upgradeTransport();
          if (conn) {
            this.startUpgrade_(conn);
          }
        }
        startUpgrade_(conn) {
          this.secondaryConn_ = new conn(this.nextTransportId_(), this.repoInfo_, this.applicationId_, this.appCheckToken_, this.authToken_, this.sessionId);
          this.secondaryResponsesRequired_ = conn["responsesRequiredToBeHealthy"] || 0;
          const onMessage = this.connReceiver_(this.secondaryConn_);
          const onDisconnect = this.disconnReceiver_(this.secondaryConn_);
          this.secondaryConn_.open(onMessage, onDisconnect);
          setTimeoutNonBlocking(() => {
            if (this.secondaryConn_) {
              this.log_("Timed out trying to upgrade.");
              this.secondaryConn_.close();
            }
          }, Math.floor(UPGRADE_TIMEOUT));
        }
        onReset_(host) {
          this.log_("Reset packet received.  New host: " + host);
          this.repoInfo_.host = host;
          if (this.state_ === 1) {
            this.close();
          } else {
            this.closeConnections_();
            this.start_();
          }
        }
        onConnectionEstablished_(conn, timestamp) {
          this.log_("Realtime connection established.");
          this.conn_ = conn;
          this.state_ = 1;
          if (this.onReady_) {
            this.onReady_(timestamp, this.sessionId);
            this.onReady_ = null;
          }
          if (this.primaryResponsesRequired_ === 0) {
            this.log_("Primary connection is healthy.");
            this.isHealthy_ = true;
          } else {
            setTimeoutNonBlocking(() => {
              this.sendPingOnPrimaryIfNecessary_();
            }, Math.floor(DELAY_BEFORE_SENDING_EXTRA_REQUESTS));
          }
        }
        sendPingOnPrimaryIfNecessary_() {
          if (!this.isHealthy_ && this.state_ === 1) {
            this.log_("sending ping on primary.");
            this.sendData_({ t: "c", d: { t: PING, d: {} } });
          }
        }
        onSecondaryConnectionLost_() {
          const conn = this.secondaryConn_;
          this.secondaryConn_ = null;
          if (this.tx_ === conn || this.rx_ === conn) {
            this.close();
          }
        }
        /**
         * @param everConnected - Whether or not the connection ever reached a server. Used to determine if
         * we should flush the host cache
         */
        onConnectionLost_(everConnected) {
          this.conn_ = null;
          if (!everConnected && this.state_ === 0) {
            this.log_("Realtime connection failed.");
            if (this.repoInfo_.isCacheableHost()) {
              PersistentStorage.remove("host:" + this.repoInfo_.host);
              this.repoInfo_.internalHost = this.repoInfo_.host;
            }
          } else if (this.state_ === 1) {
            this.log_("Realtime connection lost.");
          }
          this.close();
        }
        onConnectionShutdown_(reason) {
          this.log_("Connection shutdown command received. Shutting down...");
          if (this.onKill_) {
            this.onKill_(reason);
            this.onKill_ = null;
          }
          this.onDisconnect_ = null;
          this.close();
        }
        sendData_(data) {
          if (this.state_ !== 1) {
            throw "Connection is not connected";
          } else {
            this.tx_.send(data);
          }
        }
        /**
         * Cleans up this connection, calling the appropriate callbacks
         */
        close() {
          if (this.state_ !== 2) {
            this.log_("Closing realtime connection.");
            this.state_ = 2;
            this.closeConnections_();
            if (this.onDisconnect_) {
              this.onDisconnect_();
              this.onDisconnect_ = null;
            }
          }
        }
        closeConnections_() {
          this.log_("Shutting down all connections");
          if (this.conn_) {
            this.conn_.close();
            this.conn_ = null;
          }
          if (this.secondaryConn_) {
            this.secondaryConn_.close();
            this.secondaryConn_ = null;
          }
          if (this.healthyTimeout_) {
            clearTimeout(this.healthyTimeout_);
            this.healthyTimeout_ = null;
          }
        }
      };
      ServerActions = class {
        put(pathString, data, onComplete, hash) {
        }
        merge(pathString, data, onComplete, hash) {
        }
        /**
         * Refreshes the auth token for the current connection.
         * @param token - The authentication token
         */
        refreshAuthToken(token) {
        }
        /**
         * Refreshes the app check token for the current connection.
         * @param token The app check token
         */
        refreshAppCheckToken(token) {
        }
        onDisconnectPut(pathString, data, onComplete) {
        }
        onDisconnectMerge(pathString, data, onComplete) {
        }
        onDisconnectCancel(pathString, onComplete) {
        }
        reportStats(stats) {
        }
      };
      EventEmitter = class {
        constructor(allowedEvents_) {
          this.allowedEvents_ = allowedEvents_;
          this.listeners_ = {};
          assert(Array.isArray(allowedEvents_) && allowedEvents_.length > 0, "Requires a non-empty array");
        }
        /**
         * To be called by derived classes to trigger events.
         */
        trigger(eventType, ...varArgs) {
          if (Array.isArray(this.listeners_[eventType])) {
            const listeners = [...this.listeners_[eventType]];
            for (let i = 0; i < listeners.length; i++) {
              listeners[i].callback.apply(listeners[i].context, varArgs);
            }
          }
        }
        on(eventType, callback, context3) {
          this.validateEventType_(eventType);
          this.listeners_[eventType] = this.listeners_[eventType] || [];
          this.listeners_[eventType].push({ callback, context: context3 });
          const eventData = this.getInitialEvent(eventType);
          if (eventData) {
            callback.apply(context3, eventData);
          }
        }
        off(eventType, callback, context3) {
          this.validateEventType_(eventType);
          const listeners = this.listeners_[eventType] || [];
          for (let i = 0; i < listeners.length; i++) {
            if (listeners[i].callback === callback && (!context3 || context3 === listeners[i].context)) {
              listeners.splice(i, 1);
              return;
            }
          }
        }
        validateEventType_(eventType) {
          assert(this.allowedEvents_.find((et) => {
            return et === eventType;
          }), "Unknown event: " + eventType);
        }
      };
      OnlineMonitor = class _OnlineMonitor extends EventEmitter {
        static getInstance() {
          return new _OnlineMonitor();
        }
        constructor() {
          super(["online"]);
          this.online_ = true;
          if (typeof window !== "undefined" && typeof window.addEventListener !== "undefined" && !isMobileCordova()) {
            window.addEventListener("online", () => {
              if (!this.online_) {
                this.online_ = true;
                this.trigger("online", true);
              }
            }, false);
            window.addEventListener("offline", () => {
              if (this.online_) {
                this.online_ = false;
                this.trigger("online", false);
              }
            }, false);
          }
        }
        getInitialEvent(eventType) {
          assert(eventType === "online", "Unknown event type: " + eventType);
          return [this.online_];
        }
        currentlyOnline() {
          return this.online_;
        }
      };
      MAX_PATH_DEPTH = 32;
      MAX_PATH_LENGTH_BYTES = 768;
      Path = class {
        /**
         * @param pathOrString - Path string to parse, or another path, or the raw
         * tokens array
         */
        constructor(pathOrString, pieceNum) {
          if (pieceNum === void 0) {
            this.pieces_ = pathOrString.split("/");
            let copyTo = 0;
            for (let i = 0; i < this.pieces_.length; i++) {
              if (this.pieces_[i].length > 0) {
                this.pieces_[copyTo] = this.pieces_[i];
                copyTo++;
              }
            }
            this.pieces_.length = copyTo;
            this.pieceNum_ = 0;
          } else {
            this.pieces_ = pathOrString;
            this.pieceNum_ = pieceNum;
          }
        }
        toString() {
          let pathString = "";
          for (let i = this.pieceNum_; i < this.pieces_.length; i++) {
            if (this.pieces_[i] !== "") {
              pathString += "/" + this.pieces_[i];
            }
          }
          return pathString || "/";
        }
      };
      ValidationPath = class {
        /**
         * @param path - Initial Path.
         * @param errorPrefix_ - Prefix for any error messages.
         */
        constructor(path, errorPrefix_) {
          this.errorPrefix_ = errorPrefix_;
          this.parts_ = pathSlice(path, 0);
          this.byteLength_ = Math.max(1, this.parts_.length);
          for (let i = 0; i < this.parts_.length; i++) {
            this.byteLength_ += stringLength(this.parts_[i]);
          }
          validationPathCheckValid(this);
        }
      };
      VisibilityMonitor = class _VisibilityMonitor extends EventEmitter {
        static getInstance() {
          return new _VisibilityMonitor();
        }
        constructor() {
          super(["visible"]);
          let hidden;
          let visibilityChange;
          if (typeof document !== "undefined" && typeof document.addEventListener !== "undefined") {
            if (typeof document["hidden"] !== "undefined") {
              visibilityChange = "visibilitychange";
              hidden = "hidden";
            } else if (typeof document["mozHidden"] !== "undefined") {
              visibilityChange = "mozvisibilitychange";
              hidden = "mozHidden";
            } else if (typeof document["msHidden"] !== "undefined") {
              visibilityChange = "msvisibilitychange";
              hidden = "msHidden";
            } else if (typeof document["webkitHidden"] !== "undefined") {
              visibilityChange = "webkitvisibilitychange";
              hidden = "webkitHidden";
            }
          }
          this.visible_ = true;
          if (visibilityChange) {
            document.addEventListener(visibilityChange, () => {
              const visible = !document[hidden];
              if (visible !== this.visible_) {
                this.visible_ = visible;
                this.trigger("visible", visible);
              }
            }, false);
          }
        }
        getInitialEvent(eventType) {
          assert(eventType === "visible", "Unknown event type: " + eventType);
          return [this.visible_];
        }
      };
      RECONNECT_MIN_DELAY = 1e3;
      RECONNECT_MAX_DELAY_DEFAULT = 60 * 5 * 1e3;
      RECONNECT_MAX_DELAY_FOR_ADMINS = 30 * 1e3;
      RECONNECT_DELAY_MULTIPLIER = 1.3;
      RECONNECT_DELAY_RESET_TIMEOUT = 3e4;
      SERVER_KILL_INTERRUPT_REASON = "server_kill";
      INVALID_TOKEN_THRESHOLD = 3;
      PersistentConnection = class _PersistentConnection extends ServerActions {
        /**
         * @param repoInfo_ - Data about the namespace we are connecting to
         * @param applicationId_ - The Firebase App ID for this project
         * @param onDataUpdate_ - A callback for new data from the server
         */
        constructor(repoInfo_, applicationId_, onDataUpdate_, onConnectStatus_, onServerInfoUpdate_, authTokenProvider_, appCheckTokenProvider_, authOverride_) {
          super();
          this.repoInfo_ = repoInfo_;
          this.applicationId_ = applicationId_;
          this.onDataUpdate_ = onDataUpdate_;
          this.onConnectStatus_ = onConnectStatus_;
          this.onServerInfoUpdate_ = onServerInfoUpdate_;
          this.authTokenProvider_ = authTokenProvider_;
          this.appCheckTokenProvider_ = appCheckTokenProvider_;
          this.authOverride_ = authOverride_;
          this.id = _PersistentConnection.nextPersistentConnectionId_++;
          this.log_ = logWrapper("p:" + this.id + ":");
          this.interruptReasons_ = {};
          this.listens = /* @__PURE__ */ new Map();
          this.outstandingPuts_ = [];
          this.outstandingGets_ = [];
          this.outstandingPutCount_ = 0;
          this.outstandingGetCount_ = 0;
          this.onDisconnectRequestQueue_ = [];
          this.connected_ = false;
          this.reconnectDelay_ = RECONNECT_MIN_DELAY;
          this.maxReconnectDelay_ = RECONNECT_MAX_DELAY_DEFAULT;
          this.securityDebugCallback_ = null;
          this.lastSessionId = null;
          this.establishConnectionTimer_ = null;
          this.visible_ = false;
          this.requestCBHash_ = {};
          this.requestNumber_ = 0;
          this.realtime_ = null;
          this.authToken_ = null;
          this.appCheckToken_ = null;
          this.forceTokenRefresh_ = false;
          this.invalidAuthTokenCount_ = 0;
          this.invalidAppCheckTokenCount_ = 0;
          this.firstConnection_ = true;
          this.lastConnectionAttemptTime_ = null;
          this.lastConnectionEstablishedTime_ = null;
          if (authOverride_ && !isNodeSdk()) {
            throw new Error("Auth override specified in options, but not supported on non Node.js platforms");
          }
          VisibilityMonitor.getInstance().on("visible", this.onVisible_, this);
          if (repoInfo_.host.indexOf("fblocal") === -1) {
            OnlineMonitor.getInstance().on("online", this.onOnline_, this);
          }
        }
        sendRequest(action, body, onResponse) {
          const curReqNum = ++this.requestNumber_;
          const msg = { r: curReqNum, a: action, b: body };
          this.log_(stringify(msg));
          assert(this.connected_, "sendRequest call when we're not connected not allowed.");
          this.realtime_.sendRequest(msg);
          if (onResponse) {
            this.requestCBHash_[curReqNum] = onResponse;
          }
        }
        get(query) {
          this.initConnection_();
          const deferred = new Deferred();
          const request = {
            p: query._path.toString(),
            q: query._queryObject
          };
          const outstandingGet = {
            action: "g",
            request,
            onComplete: (message) => {
              const payload = message["d"];
              if (message["s"] === "ok") {
                deferred.resolve(payload);
              } else {
                deferred.reject(payload);
              }
            }
          };
          this.outstandingGets_.push(outstandingGet);
          this.outstandingGetCount_++;
          const index = this.outstandingGets_.length - 1;
          if (this.connected_) {
            this.sendGet_(index);
          }
          return deferred.promise;
        }
        listen(query, currentHashFn, tag, onComplete) {
          this.initConnection_();
          const queryId = query._queryIdentifier;
          const pathString = query._path.toString();
          this.log_("Listen called for " + pathString + " " + queryId);
          if (!this.listens.has(pathString)) {
            this.listens.set(pathString, /* @__PURE__ */ new Map());
          }
          assert(query._queryParams.isDefault() || !query._queryParams.loadsAllData(), "listen() called for non-default but complete query");
          assert(!this.listens.get(pathString).has(queryId), `listen() called twice for same path/queryId.`);
          const listenSpec = {
            onComplete,
            hashFn: currentHashFn,
            query,
            tag
          };
          this.listens.get(pathString).set(queryId, listenSpec);
          if (this.connected_) {
            this.sendListen_(listenSpec);
          }
        }
        sendGet_(index) {
          const get2 = this.outstandingGets_[index];
          this.sendRequest("g", get2.request, (message) => {
            delete this.outstandingGets_[index];
            this.outstandingGetCount_--;
            if (this.outstandingGetCount_ === 0) {
              this.outstandingGets_ = [];
            }
            if (get2.onComplete) {
              get2.onComplete(message);
            }
          });
        }
        sendListen_(listenSpec) {
          const query = listenSpec.query;
          const pathString = query._path.toString();
          const queryId = query._queryIdentifier;
          this.log_("Listen on " + pathString + " for " + queryId);
          const req = {
            /*path*/
            p: pathString
          };
          const action = "q";
          if (listenSpec.tag) {
            req["q"] = query._queryObject;
            req["t"] = listenSpec.tag;
          }
          req[
            /*hash*/
            "h"
          ] = listenSpec.hashFn();
          this.sendRequest(action, req, (message) => {
            const payload = message[
              /*data*/
              "d"
            ];
            const status = message[
              /*status*/
              "s"
            ];
            _PersistentConnection.warnOnListenWarnings_(payload, query);
            const currentListenSpec = this.listens.get(pathString) && this.listens.get(pathString).get(queryId);
            if (currentListenSpec === listenSpec) {
              this.log_("listen response", message);
              if (status !== "ok") {
                this.removeListen_(pathString, queryId);
              }
              if (listenSpec.onComplete) {
                listenSpec.onComplete(status, payload);
              }
            }
          });
        }
        static warnOnListenWarnings_(payload, query) {
          if (payload && typeof payload === "object" && contains(payload, "w")) {
            const warnings = safeGet(payload, "w");
            if (Array.isArray(warnings) && ~warnings.indexOf("no_index")) {
              const indexSpec = '".indexOn": "' + query._queryParams.getIndex().toString() + '"';
              const indexPath = query._path.toString();
              warn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${indexSpec} at ${indexPath} to your security rules for better performance.`);
            }
          }
        }
        refreshAuthToken(token) {
          this.authToken_ = token;
          this.log_("Auth token refreshed");
          if (this.authToken_) {
            this.tryAuth();
          } else {
            if (this.connected_) {
              this.sendRequest("unauth", {}, () => {
              });
            }
          }
          this.reduceReconnectDelayIfAdminCredential_(token);
        }
        reduceReconnectDelayIfAdminCredential_(credential) {
          const isFirebaseSecret = credential && credential.length === 40;
          if (isFirebaseSecret || isAdmin(credential)) {
            this.log_("Admin auth credential detected.  Reducing max reconnect time.");
            this.maxReconnectDelay_ = RECONNECT_MAX_DELAY_FOR_ADMINS;
          }
        }
        refreshAppCheckToken(token) {
          this.appCheckToken_ = token;
          this.log_("App check token refreshed");
          if (this.appCheckToken_) {
            this.tryAppCheck();
          } else {
            if (this.connected_) {
              this.sendRequest("unappeck", {}, () => {
              });
            }
          }
        }
        /**
         * Attempts to authenticate with the given credentials. If the authentication attempt fails, it's triggered like
         * a auth revoked (the connection is closed).
         */
        tryAuth() {
          if (this.connected_ && this.authToken_) {
            const token = this.authToken_;
            const authMethod = isValidFormat(token) ? "auth" : "gauth";
            const requestData = { cred: token };
            if (this.authOverride_ === null) {
              requestData["noauth"] = true;
            } else if (typeof this.authOverride_ === "object") {
              requestData["authvar"] = this.authOverride_;
            }
            this.sendRequest(authMethod, requestData, (res) => {
              const status = res[
                /*status*/
                "s"
              ];
              const data = res[
                /*data*/
                "d"
              ] || "error";
              if (this.authToken_ === token) {
                if (status === "ok") {
                  this.invalidAuthTokenCount_ = 0;
                } else {
                  this.onAuthRevoked_(status, data);
                }
              }
            });
          }
        }
        /**
         * Attempts to authenticate with the given token. If the authentication
         * attempt fails, it's triggered like the token was revoked (the connection is
         * closed).
         */
        tryAppCheck() {
          if (this.connected_ && this.appCheckToken_) {
            this.sendRequest("appcheck", { "token": this.appCheckToken_ }, (res) => {
              const status = res[
                /*status*/
                "s"
              ];
              const data = res[
                /*data*/
                "d"
              ] || "error";
              if (status === "ok") {
                this.invalidAppCheckTokenCount_ = 0;
              } else {
                this.onAppCheckRevoked_(status, data);
              }
            });
          }
        }
        /**
         * @inheritDoc
         */
        unlisten(query, tag) {
          const pathString = query._path.toString();
          const queryId = query._queryIdentifier;
          this.log_("Unlisten called for " + pathString + " " + queryId);
          assert(query._queryParams.isDefault() || !query._queryParams.loadsAllData(), "unlisten() called for non-default but complete query");
          const listen = this.removeListen_(pathString, queryId);
          if (listen && this.connected_) {
            this.sendUnlisten_(pathString, queryId, query._queryObject, tag);
          }
        }
        sendUnlisten_(pathString, queryId, queryObj, tag) {
          this.log_("Unlisten on " + pathString + " for " + queryId);
          const req = {
            /*path*/
            p: pathString
          };
          const action = "n";
          if (tag) {
            req["q"] = queryObj;
            req["t"] = tag;
          }
          this.sendRequest(action, req);
        }
        onDisconnectPut(pathString, data, onComplete) {
          this.initConnection_();
          if (this.connected_) {
            this.sendOnDisconnect_("o", pathString, data, onComplete);
          } else {
            this.onDisconnectRequestQueue_.push({
              pathString,
              action: "o",
              data,
              onComplete
            });
          }
        }
        onDisconnectMerge(pathString, data, onComplete) {
          this.initConnection_();
          if (this.connected_) {
            this.sendOnDisconnect_("om", pathString, data, onComplete);
          } else {
            this.onDisconnectRequestQueue_.push({
              pathString,
              action: "om",
              data,
              onComplete
            });
          }
        }
        onDisconnectCancel(pathString, onComplete) {
          this.initConnection_();
          if (this.connected_) {
            this.sendOnDisconnect_("oc", pathString, null, onComplete);
          } else {
            this.onDisconnectRequestQueue_.push({
              pathString,
              action: "oc",
              data: null,
              onComplete
            });
          }
        }
        sendOnDisconnect_(action, pathString, data, onComplete) {
          const request = {
            /*path*/
            p: pathString,
            /*data*/
            d: data
          };
          this.log_("onDisconnect " + action, request);
          this.sendRequest(action, request, (response) => {
            if (onComplete) {
              setTimeout(() => {
                onComplete(response[
                  /*status*/
                  "s"
                ], response[
                  /* data */
                  "d"
                ]);
              }, Math.floor(0));
            }
          });
        }
        put(pathString, data, onComplete, hash) {
          this.putInternal("p", pathString, data, onComplete, hash);
        }
        merge(pathString, data, onComplete, hash) {
          this.putInternal("m", pathString, data, onComplete, hash);
        }
        putInternal(action, pathString, data, onComplete, hash) {
          this.initConnection_();
          const request = {
            /*path*/
            p: pathString,
            /*data*/
            d: data
          };
          if (hash !== void 0) {
            request[
              /*hash*/
              "h"
            ] = hash;
          }
          this.outstandingPuts_.push({
            action,
            request,
            onComplete
          });
          this.outstandingPutCount_++;
          const index = this.outstandingPuts_.length - 1;
          if (this.connected_) {
            this.sendPut_(index);
          } else {
            this.log_("Buffering put: " + pathString);
          }
        }
        sendPut_(index) {
          const action = this.outstandingPuts_[index].action;
          const request = this.outstandingPuts_[index].request;
          const onComplete = this.outstandingPuts_[index].onComplete;
          this.outstandingPuts_[index].queued = this.connected_;
          this.sendRequest(action, request, (message) => {
            this.log_(action + " response", message);
            delete this.outstandingPuts_[index];
            this.outstandingPutCount_--;
            if (this.outstandingPutCount_ === 0) {
              this.outstandingPuts_ = [];
            }
            if (onComplete) {
              onComplete(message[
                /*status*/
                "s"
              ], message[
                /* data */
                "d"
              ]);
            }
          });
        }
        reportStats(stats) {
          if (this.connected_) {
            const request = {
              /*counters*/
              c: stats
            };
            this.log_("reportStats", request);
            this.sendRequest(
              /*stats*/
              "s",
              request,
              (result) => {
                const status = result[
                  /*status*/
                  "s"
                ];
                if (status !== "ok") {
                  const errorReason = result[
                    /* data */
                    "d"
                  ];
                  this.log_("reportStats", "Error sending stats: " + errorReason);
                }
              }
            );
          }
        }
        onDataMessage_(message) {
          if ("r" in message) {
            this.log_("from server: " + stringify(message));
            const reqNum = message["r"];
            const onResponse = this.requestCBHash_[reqNum];
            if (onResponse) {
              delete this.requestCBHash_[reqNum];
              onResponse(message[
                /*body*/
                "b"
              ]);
            }
          } else if ("error" in message) {
            throw "A server-side error has occurred: " + message["error"];
          } else if ("a" in message) {
            this.onDataPush_(message["a"], message["b"]);
          }
        }
        onDataPush_(action, body) {
          this.log_("handleServerMessage", action, body);
          if (action === "d") {
            this.onDataUpdate_(
              body[
                /*path*/
                "p"
              ],
              body[
                /*data*/
                "d"
              ],
              /*isMerge*/
              false,
              body["t"]
            );
          } else if (action === "m") {
            this.onDataUpdate_(
              body[
                /*path*/
                "p"
              ],
              body[
                /*data*/
                "d"
              ],
              /*isMerge=*/
              true,
              body["t"]
            );
          } else if (action === "c") {
            this.onListenRevoked_(body[
              /*path*/
              "p"
            ], body[
              /*query*/
              "q"
            ]);
          } else if (action === "ac") {
            this.onAuthRevoked_(body[
              /*status code*/
              "s"
            ], body[
              /* explanation */
              "d"
            ]);
          } else if (action === "apc") {
            this.onAppCheckRevoked_(body[
              /*status code*/
              "s"
            ], body[
              /* explanation */
              "d"
            ]);
          } else if (action === "sd") {
            this.onSecurityDebugPacket_(body);
          } else {
            error("Unrecognized action received from server: " + stringify(action) + "\nAre you using the latest client?");
          }
        }
        onReady_(timestamp, sessionId) {
          this.log_("connection ready");
          this.connected_ = true;
          this.lastConnectionEstablishedTime_ = (/* @__PURE__ */ new Date()).getTime();
          this.handleTimestamp_(timestamp);
          this.lastSessionId = sessionId;
          if (this.firstConnection_) {
            this.sendConnectStats_();
          }
          this.restoreState_();
          this.firstConnection_ = false;
          this.onConnectStatus_(true);
        }
        scheduleConnect_(timeout) {
          assert(!this.realtime_, "Scheduling a connect when we're already connected/ing?");
          if (this.establishConnectionTimer_) {
            clearTimeout(this.establishConnectionTimer_);
          }
          this.establishConnectionTimer_ = setTimeout(() => {
            this.establishConnectionTimer_ = null;
            this.establishConnection_();
          }, Math.floor(timeout));
        }
        initConnection_() {
          if (!this.realtime_ && this.firstConnection_) {
            this.scheduleConnect_(0);
          }
        }
        onVisible_(visible) {
          if (visible && !this.visible_ && this.reconnectDelay_ === this.maxReconnectDelay_) {
            this.log_("Window became visible.  Reducing delay.");
            this.reconnectDelay_ = RECONNECT_MIN_DELAY;
            if (!this.realtime_) {
              this.scheduleConnect_(0);
            }
          }
          this.visible_ = visible;
        }
        onOnline_(online) {
          if (online) {
            this.log_("Browser went online.");
            this.reconnectDelay_ = RECONNECT_MIN_DELAY;
            if (!this.realtime_) {
              this.scheduleConnect_(0);
            }
          } else {
            this.log_("Browser went offline.  Killing connection.");
            if (this.realtime_) {
              this.realtime_.close();
            }
          }
        }
        onRealtimeDisconnect_() {
          this.log_("data client disconnected");
          this.connected_ = false;
          this.realtime_ = null;
          this.cancelSentTransactions_();
          this.requestCBHash_ = {};
          if (this.shouldReconnect_()) {
            if (!this.visible_) {
              this.log_("Window isn't visible.  Delaying reconnect.");
              this.reconnectDelay_ = this.maxReconnectDelay_;
              this.lastConnectionAttemptTime_ = (/* @__PURE__ */ new Date()).getTime();
            } else if (this.lastConnectionEstablishedTime_) {
              const timeSinceLastConnectSucceeded = (/* @__PURE__ */ new Date()).getTime() - this.lastConnectionEstablishedTime_;
              if (timeSinceLastConnectSucceeded > RECONNECT_DELAY_RESET_TIMEOUT) {
                this.reconnectDelay_ = RECONNECT_MIN_DELAY;
              }
              this.lastConnectionEstablishedTime_ = null;
            }
            const timeSinceLastConnectAttempt = Math.max(0, (/* @__PURE__ */ new Date()).getTime() - this.lastConnectionAttemptTime_);
            let reconnectDelay = Math.max(0, this.reconnectDelay_ - timeSinceLastConnectAttempt);
            reconnectDelay = Math.random() * reconnectDelay;
            this.log_("Trying to reconnect in " + reconnectDelay + "ms");
            this.scheduleConnect_(reconnectDelay);
            this.reconnectDelay_ = Math.min(this.maxReconnectDelay_, this.reconnectDelay_ * RECONNECT_DELAY_MULTIPLIER);
          }
          this.onConnectStatus_(false);
        }
        async establishConnection_() {
          if (this.shouldReconnect_()) {
            this.log_("Making a connection attempt");
            this.lastConnectionAttemptTime_ = (/* @__PURE__ */ new Date()).getTime();
            this.lastConnectionEstablishedTime_ = null;
            const onDataMessage = this.onDataMessage_.bind(this);
            const onReady = this.onReady_.bind(this);
            const onDisconnect = this.onRealtimeDisconnect_.bind(this);
            const connId = this.id + ":" + _PersistentConnection.nextConnectionId_++;
            const lastSessionId = this.lastSessionId;
            let canceled = false;
            let connection = null;
            const closeFn = function() {
              if (connection) {
                connection.close();
              } else {
                canceled = true;
                onDisconnect();
              }
            };
            const sendRequestFn = function(msg) {
              assert(connection, "sendRequest call when we're not connected not allowed.");
              connection.sendRequest(msg);
            };
            this.realtime_ = {
              close: closeFn,
              sendRequest: sendRequestFn
            };
            const forceRefresh = this.forceTokenRefresh_;
            this.forceTokenRefresh_ = false;
            try {
              const [authToken, appCheckToken] = await Promise.all([
                this.authTokenProvider_.getToken(forceRefresh),
                this.appCheckTokenProvider_.getToken(forceRefresh)
              ]);
              if (!canceled) {
                log("getToken() completed. Creating connection.");
                this.authToken_ = authToken && authToken.accessToken;
                this.appCheckToken_ = appCheckToken && appCheckToken.token;
                connection = new Connection(
                  connId,
                  this.repoInfo_,
                  this.applicationId_,
                  this.appCheckToken_,
                  this.authToken_,
                  onDataMessage,
                  onReady,
                  onDisconnect,
                  /* onKill= */
                  (reason) => {
                    warn(reason + " (" + this.repoInfo_.toString() + ")");
                    this.interrupt(SERVER_KILL_INTERRUPT_REASON);
                  },
                  lastSessionId
                );
              } else {
                log("getToken() completed but was canceled");
              }
            } catch (error2) {
              this.log_("Failed to get token: " + error2);
              if (!canceled) {
                if (this.repoInfo_.nodeAdmin) {
                  warn(error2);
                }
                closeFn();
              }
            }
          }
        }
        interrupt(reason) {
          log("Interrupting connection for reason: " + reason);
          this.interruptReasons_[reason] = true;
          if (this.realtime_) {
            this.realtime_.close();
          } else {
            if (this.establishConnectionTimer_) {
              clearTimeout(this.establishConnectionTimer_);
              this.establishConnectionTimer_ = null;
            }
            if (this.connected_) {
              this.onRealtimeDisconnect_();
            }
          }
        }
        resume(reason) {
          log("Resuming connection for reason: " + reason);
          delete this.interruptReasons_[reason];
          if (isEmpty(this.interruptReasons_)) {
            this.reconnectDelay_ = RECONNECT_MIN_DELAY;
            if (!this.realtime_) {
              this.scheduleConnect_(0);
            }
          }
        }
        handleTimestamp_(timestamp) {
          const delta = timestamp - (/* @__PURE__ */ new Date()).getTime();
          this.onServerInfoUpdate_({ serverTimeOffset: delta });
        }
        cancelSentTransactions_() {
          for (let i = 0; i < this.outstandingPuts_.length; i++) {
            const put = this.outstandingPuts_[i];
            if (put && /*hash*/
            "h" in put.request && put.queued) {
              if (put.onComplete) {
                put.onComplete("disconnect");
              }
              delete this.outstandingPuts_[i];
              this.outstandingPutCount_--;
            }
          }
          if (this.outstandingPutCount_ === 0) {
            this.outstandingPuts_ = [];
          }
        }
        onListenRevoked_(pathString, query) {
          let queryId;
          if (!query) {
            queryId = "default";
          } else {
            queryId = query.map((q) => ObjectToUniqueKey(q)).join("$");
          }
          const listen = this.removeListen_(pathString, queryId);
          if (listen && listen.onComplete) {
            listen.onComplete("permission_denied");
          }
        }
        removeListen_(pathString, queryId) {
          const normalizedPathString = new Path(pathString).toString();
          let listen;
          if (this.listens.has(normalizedPathString)) {
            const map2 = this.listens.get(normalizedPathString);
            listen = map2.get(queryId);
            map2.delete(queryId);
            if (map2.size === 0) {
              this.listens.delete(normalizedPathString);
            }
          } else {
            listen = void 0;
          }
          return listen;
        }
        onAuthRevoked_(statusCode, explanation) {
          log("Auth token revoked: " + statusCode + "/" + explanation);
          this.authToken_ = null;
          this.forceTokenRefresh_ = true;
          this.realtime_.close();
          if (statusCode === "invalid_token" || statusCode === "permission_denied") {
            this.invalidAuthTokenCount_++;
            if (this.invalidAuthTokenCount_ >= INVALID_TOKEN_THRESHOLD) {
              this.reconnectDelay_ = RECONNECT_MAX_DELAY_FOR_ADMINS;
              this.authTokenProvider_.notifyForInvalidToken();
            }
          }
        }
        onAppCheckRevoked_(statusCode, explanation) {
          log("App check token revoked: " + statusCode + "/" + explanation);
          this.appCheckToken_ = null;
          this.forceTokenRefresh_ = true;
          if (statusCode === "invalid_token" || statusCode === "permission_denied") {
            this.invalidAppCheckTokenCount_++;
            if (this.invalidAppCheckTokenCount_ >= INVALID_TOKEN_THRESHOLD) {
              this.appCheckTokenProvider_.notifyForInvalidToken();
            }
          }
        }
        onSecurityDebugPacket_(body) {
          if (this.securityDebugCallback_) {
            this.securityDebugCallback_(body);
          } else {
            if ("msg" in body) {
              console.log("FIREBASE: " + body["msg"].replace("\n", "\nFIREBASE: "));
            }
          }
        }
        restoreState_() {
          this.tryAuth();
          this.tryAppCheck();
          for (const queries of this.listens.values()) {
            for (const listenSpec of queries.values()) {
              this.sendListen_(listenSpec);
            }
          }
          for (let i = 0; i < this.outstandingPuts_.length; i++) {
            if (this.outstandingPuts_[i]) {
              this.sendPut_(i);
            }
          }
          while (this.onDisconnectRequestQueue_.length) {
            const request = this.onDisconnectRequestQueue_.shift();
            this.sendOnDisconnect_(request.action, request.pathString, request.data, request.onComplete);
          }
          for (let i = 0; i < this.outstandingGets_.length; i++) {
            if (this.outstandingGets_[i]) {
              this.sendGet_(i);
            }
          }
        }
        /**
         * Sends client stats for first connection
         */
        sendConnectStats_() {
          const stats = {};
          let clientName = "js";
          if (isNodeSdk()) {
            if (this.repoInfo_.nodeAdmin) {
              clientName = "admin_node";
            } else {
              clientName = "node";
            }
          }
          stats["sdk." + clientName + "." + SDK_VERSION2.replace(/\./g, "-")] = 1;
          if (isMobileCordova()) {
            stats["framework.cordova"] = 1;
          } else if (isReactNative()) {
            stats["framework.reactnative"] = 1;
          }
          this.reportStats(stats);
        }
        shouldReconnect_() {
          const online = OnlineMonitor.getInstance().currentlyOnline();
          return isEmpty(this.interruptReasons_) && online;
        }
      };
      PersistentConnection.nextPersistentConnectionId_ = 0;
      PersistentConnection.nextConnectionId_ = 0;
      NamedNode = class _NamedNode {
        constructor(name3, node) {
          this.name = name3;
          this.node = node;
        }
        static Wrap(name3, node) {
          return new _NamedNode(name3, node);
        }
      };
      Index = class {
        /**
         * @returns A standalone comparison function for
         * this index
         */
        getCompare() {
          return this.compare.bind(this);
        }
        /**
         * Given a before and after value for a node, determine if the indexed value has changed. Even if they are different,
         * it's possible that the changes are isolated to parts of the snapshot that are not indexed.
         *
         *
         * @returns True if the portion of the snapshot being indexed changed between oldNode and newNode
         */
        indexedValueChanged(oldNode, newNode) {
          const oldWrapped = new NamedNode(MIN_NAME, oldNode);
          const newWrapped = new NamedNode(MIN_NAME, newNode);
          return this.compare(oldWrapped, newWrapped) !== 0;
        }
        /**
         * @returns a node wrapper that will sort equal to or less than
         * any other node wrapper, using this index
         */
        minPost() {
          return NamedNode.MIN;
        }
      };
      KeyIndex = class extends Index {
        static get __EMPTY_NODE() {
          return __EMPTY_NODE;
        }
        static set __EMPTY_NODE(val) {
          __EMPTY_NODE = val;
        }
        compare(a, b) {
          return nameCompare(a.name, b.name);
        }
        isDefinedOn(node) {
          throw assertionError("KeyIndex.isDefinedOn not expected to be called.");
        }
        indexedValueChanged(oldNode, newNode) {
          return false;
        }
        minPost() {
          return NamedNode.MIN;
        }
        maxPost() {
          return new NamedNode(MAX_NAME, __EMPTY_NODE);
        }
        makePost(indexValue, name3) {
          assert(typeof indexValue === "string", "KeyIndex indexValue must always be a string.");
          return new NamedNode(indexValue, __EMPTY_NODE);
        }
        /**
         * @returns String representation for inclusion in a query spec
         */
        toString() {
          return ".key";
        }
      };
      KEY_INDEX = new KeyIndex();
      SortedMapIterator = class {
        /**
         * @param node - Node to iterate.
         * @param isReverse_ - Whether or not to iterate in reverse
         */
        constructor(node, startKey, comparator, isReverse_, resultGenerator_ = null) {
          this.isReverse_ = isReverse_;
          this.resultGenerator_ = resultGenerator_;
          this.nodeStack_ = [];
          let cmp = 1;
          while (!node.isEmpty()) {
            node = node;
            cmp = startKey ? comparator(node.key, startKey) : 1;
            if (isReverse_) {
              cmp *= -1;
            }
            if (cmp < 0) {
              if (this.isReverse_) {
                node = node.left;
              } else {
                node = node.right;
              }
            } else if (cmp === 0) {
              this.nodeStack_.push(node);
              break;
            } else {
              this.nodeStack_.push(node);
              if (this.isReverse_) {
                node = node.right;
              } else {
                node = node.left;
              }
            }
          }
        }
        getNext() {
          if (this.nodeStack_.length === 0) {
            return null;
          }
          let node = this.nodeStack_.pop();
          let result;
          if (this.resultGenerator_) {
            result = this.resultGenerator_(node.key, node.value);
          } else {
            result = { key: node.key, value: node.value };
          }
          if (this.isReverse_) {
            node = node.left;
            while (!node.isEmpty()) {
              this.nodeStack_.push(node);
              node = node.right;
            }
          } else {
            node = node.right;
            while (!node.isEmpty()) {
              this.nodeStack_.push(node);
              node = node.left;
            }
          }
          return result;
        }
        hasNext() {
          return this.nodeStack_.length > 0;
        }
        peek() {
          if (this.nodeStack_.length === 0) {
            return null;
          }
          const node = this.nodeStack_[this.nodeStack_.length - 1];
          if (this.resultGenerator_) {
            return this.resultGenerator_(node.key, node.value);
          } else {
            return { key: node.key, value: node.value };
          }
        }
      };
      LLRBNode = class _LLRBNode {
        /**
         * @param key - Key associated with this node.
         * @param value - Value associated with this node.
         * @param color - Whether this node is red.
         * @param left - Left child.
         * @param right - Right child.
         */
        constructor(key, value, color, left, right) {
          this.key = key;
          this.value = value;
          this.color = color != null ? color : _LLRBNode.RED;
          this.left = left != null ? left : SortedMap.EMPTY_NODE;
          this.right = right != null ? right : SortedMap.EMPTY_NODE;
        }
        /**
         * Returns a copy of the current node, optionally replacing pieces of it.
         *
         * @param key - New key for the node, or null.
         * @param value - New value for the node, or null.
         * @param color - New color for the node, or null.
         * @param left - New left child for the node, or null.
         * @param right - New right child for the node, or null.
         * @returns The node copy.
         */
        copy(key, value, color, left, right) {
          return new _LLRBNode(key != null ? key : this.key, value != null ? value : this.value, color != null ? color : this.color, left != null ? left : this.left, right != null ? right : this.right);
        }
        /**
         * @returns The total number of nodes in the tree.
         */
        count() {
          return this.left.count() + 1 + this.right.count();
        }
        /**
         * @returns True if the tree is empty.
         */
        isEmpty() {
          return false;
        }
        /**
         * Traverses the tree in key order and calls the specified action function
         * for each node.
         *
         * @param action - Callback function to be called for each
         *   node.  If it returns true, traversal is aborted.
         * @returns The first truthy value returned by action, or the last falsey
         *   value returned by action
         */
        inorderTraversal(action) {
          return this.left.inorderTraversal(action) || !!action(this.key, this.value) || this.right.inorderTraversal(action);
        }
        /**
         * Traverses the tree in reverse key order and calls the specified action function
         * for each node.
         *
         * @param action - Callback function to be called for each
         * node.  If it returns true, traversal is aborted.
         * @returns True if traversal was aborted.
         */
        reverseTraversal(action) {
          return this.right.reverseTraversal(action) || action(this.key, this.value) || this.left.reverseTraversal(action);
        }
        /**
         * @returns The minimum node in the tree.
         */
        min_() {
          if (this.left.isEmpty()) {
            return this;
          } else {
            return this.left.min_();
          }
        }
        /**
         * @returns The maximum key in the tree.
         */
        minKey() {
          return this.min_().key;
        }
        /**
         * @returns The maximum key in the tree.
         */
        maxKey() {
          if (this.right.isEmpty()) {
            return this.key;
          } else {
            return this.right.maxKey();
          }
        }
        /**
         * @param key - Key to insert.
         * @param value - Value to insert.
         * @param comparator - Comparator.
         * @returns New tree, with the key/value added.
         */
        insert(key, value, comparator) {
          let n = this;
          const cmp = comparator(key, n.key);
          if (cmp < 0) {
            n = n.copy(null, null, null, n.left.insert(key, value, comparator), null);
          } else if (cmp === 0) {
            n = n.copy(null, value, null, null, null);
          } else {
            n = n.copy(null, null, null, null, n.right.insert(key, value, comparator));
          }
          return n.fixUp_();
        }
        /**
         * @returns New tree, with the minimum key removed.
         */
        removeMin_() {
          if (this.left.isEmpty()) {
            return SortedMap.EMPTY_NODE;
          }
          let n = this;
          if (!n.left.isRed_() && !n.left.left.isRed_()) {
            n = n.moveRedLeft_();
          }
          n = n.copy(null, null, null, n.left.removeMin_(), null);
          return n.fixUp_();
        }
        /**
         * @param key - The key of the item to remove.
         * @param comparator - Comparator.
         * @returns New tree, with the specified item removed.
         */
        remove(key, comparator) {
          let n, smallest;
          n = this;
          if (comparator(key, n.key) < 0) {
            if (!n.left.isEmpty() && !n.left.isRed_() && !n.left.left.isRed_()) {
              n = n.moveRedLeft_();
            }
            n = n.copy(null, null, null, n.left.remove(key, comparator), null);
          } else {
            if (n.left.isRed_()) {
              n = n.rotateRight_();
            }
            if (!n.right.isEmpty() && !n.right.isRed_() && !n.right.left.isRed_()) {
              n = n.moveRedRight_();
            }
            if (comparator(key, n.key) === 0) {
              if (n.right.isEmpty()) {
                return SortedMap.EMPTY_NODE;
              } else {
                smallest = n.right.min_();
                n = n.copy(smallest.key, smallest.value, null, null, n.right.removeMin_());
              }
            }
            n = n.copy(null, null, null, null, n.right.remove(key, comparator));
          }
          return n.fixUp_();
        }
        /**
         * @returns Whether this is a RED node.
         */
        isRed_() {
          return this.color;
        }
        /**
         * @returns New tree after performing any needed rotations.
         */
        fixUp_() {
          let n = this;
          if (n.right.isRed_() && !n.left.isRed_()) {
            n = n.rotateLeft_();
          }
          if (n.left.isRed_() && n.left.left.isRed_()) {
            n = n.rotateRight_();
          }
          if (n.left.isRed_() && n.right.isRed_()) {
            n = n.colorFlip_();
          }
          return n;
        }
        /**
         * @returns New tree, after moveRedLeft.
         */
        moveRedLeft_() {
          let n = this.colorFlip_();
          if (n.right.left.isRed_()) {
            n = n.copy(null, null, null, null, n.right.rotateRight_());
            n = n.rotateLeft_();
            n = n.colorFlip_();
          }
          return n;
        }
        /**
         * @returns New tree, after moveRedRight.
         */
        moveRedRight_() {
          let n = this.colorFlip_();
          if (n.left.left.isRed_()) {
            n = n.rotateRight_();
            n = n.colorFlip_();
          }
          return n;
        }
        /**
         * @returns New tree, after rotateLeft.
         */
        rotateLeft_() {
          const nl = this.copy(null, null, _LLRBNode.RED, null, this.right.left);
          return this.right.copy(null, null, this.color, nl, null);
        }
        /**
         * @returns New tree, after rotateRight.
         */
        rotateRight_() {
          const nr = this.copy(null, null, _LLRBNode.RED, this.left.right, null);
          return this.left.copy(null, null, this.color, null, nr);
        }
        /**
         * @returns Newt ree, after colorFlip.
         */
        colorFlip_() {
          const left = this.left.copy(null, null, !this.left.color, null, null);
          const right = this.right.copy(null, null, !this.right.color, null, null);
          return this.copy(null, null, !this.color, left, right);
        }
        /**
         * For testing.
         *
         * @returns True if all is well.
         */
        checkMaxDepth_() {
          const blackDepth = this.check_();
          return Math.pow(2, blackDepth) <= this.count() + 1;
        }
        check_() {
          if (this.isRed_() && this.left.isRed_()) {
            throw new Error("Red node has red child(" + this.key + "," + this.value + ")");
          }
          if (this.right.isRed_()) {
            throw new Error("Right child of (" + this.key + "," + this.value + ") is red");
          }
          const blackDepth = this.left.check_();
          if (blackDepth !== this.right.check_()) {
            throw new Error("Black depths differ");
          } else {
            return blackDepth + (this.isRed_() ? 0 : 1);
          }
        }
      };
      LLRBNode.RED = true;
      LLRBNode.BLACK = false;
      LLRBEmptyNode = class {
        /**
         * Returns a copy of the current node.
         *
         * @returns The node copy.
         */
        copy(key, value, color, left, right) {
          return this;
        }
        /**
         * Returns a copy of the tree, with the specified key/value added.
         *
         * @param key - Key to be added.
         * @param value - Value to be added.
         * @param comparator - Comparator.
         * @returns New tree, with item added.
         */
        insert(key, value, comparator) {
          return new LLRBNode(key, value, null);
        }
        /**
         * Returns a copy of the tree, with the specified key removed.
         *
         * @param key - The key to remove.
         * @param comparator - Comparator.
         * @returns New tree, with item removed.
         */
        remove(key, comparator) {
          return this;
        }
        /**
         * @returns The total number of nodes in the tree.
         */
        count() {
          return 0;
        }
        /**
         * @returns True if the tree is empty.
         */
        isEmpty() {
          return true;
        }
        /**
         * Traverses the tree in key order and calls the specified action function
         * for each node.
         *
         * @param action - Callback function to be called for each
         * node.  If it returns true, traversal is aborted.
         * @returns True if traversal was aborted.
         */
        inorderTraversal(action) {
          return false;
        }
        /**
         * Traverses the tree in reverse key order and calls the specified action function
         * for each node.
         *
         * @param action - Callback function to be called for each
         * node.  If it returns true, traversal is aborted.
         * @returns True if traversal was aborted.
         */
        reverseTraversal(action) {
          return false;
        }
        minKey() {
          return null;
        }
        maxKey() {
          return null;
        }
        check_() {
          return 0;
        }
        /**
         * @returns Whether this node is red.
         */
        isRed_() {
          return false;
        }
      };
      SortedMap = class _SortedMap {
        /**
         * @param comparator_ - Key comparator.
         * @param root_ - Optional root node for the map.
         */
        constructor(comparator_, root_ = _SortedMap.EMPTY_NODE) {
          this.comparator_ = comparator_;
          this.root_ = root_;
        }
        /**
         * Returns a copy of the map, with the specified key/value added or replaced.
         * (TODO: We should perhaps rename this method to 'put')
         *
         * @param key - Key to be added.
         * @param value - Value to be added.
         * @returns New map, with item added.
         */
        insert(key, value) {
          return new _SortedMap(this.comparator_, this.root_.insert(key, value, this.comparator_).copy(null, null, LLRBNode.BLACK, null, null));
        }
        /**
         * Returns a copy of the map, with the specified key removed.
         *
         * @param key - The key to remove.
         * @returns New map, with item removed.
         */
        remove(key) {
          return new _SortedMap(this.comparator_, this.root_.remove(key, this.comparator_).copy(null, null, LLRBNode.BLACK, null, null));
        }
        /**
         * Returns the value of the node with the given key, or null.
         *
         * @param key - The key to look up.
         * @returns The value of the node with the given key, or null if the
         * key doesn't exist.
         */
        get(key) {
          let cmp;
          let node = this.root_;
          while (!node.isEmpty()) {
            cmp = this.comparator_(key, node.key);
            if (cmp === 0) {
              return node.value;
            } else if (cmp < 0) {
              node = node.left;
            } else if (cmp > 0) {
              node = node.right;
            }
          }
          return null;
        }
        /**
         * Returns the key of the item *before* the specified key, or null if key is the first item.
         * @param key - The key to find the predecessor of
         * @returns The predecessor key.
         */
        getPredecessorKey(key) {
          let cmp, node = this.root_, rightParent = null;
          while (!node.isEmpty()) {
            cmp = this.comparator_(key, node.key);
            if (cmp === 0) {
              if (!node.left.isEmpty()) {
                node = node.left;
                while (!node.right.isEmpty()) {
                  node = node.right;
                }
                return node.key;
              } else if (rightParent) {
                return rightParent.key;
              } else {
                return null;
              }
            } else if (cmp < 0) {
              node = node.left;
            } else if (cmp > 0) {
              rightParent = node;
              node = node.right;
            }
          }
          throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?");
        }
        /**
         * @returns True if the map is empty.
         */
        isEmpty() {
          return this.root_.isEmpty();
        }
        /**
         * @returns The total number of nodes in the map.
         */
        count() {
          return this.root_.count();
        }
        /**
         * @returns The minimum key in the map.
         */
        minKey() {
          return this.root_.minKey();
        }
        /**
         * @returns The maximum key in the map.
         */
        maxKey() {
          return this.root_.maxKey();
        }
        /**
         * Traverses the map in key order and calls the specified action function
         * for each key/value pair.
         *
         * @param action - Callback function to be called
         * for each key/value pair.  If action returns true, traversal is aborted.
         * @returns The first truthy value returned by action, or the last falsey
         *   value returned by action
         */
        inorderTraversal(action) {
          return this.root_.inorderTraversal(action);
        }
        /**
         * Traverses the map in reverse key order and calls the specified action function
         * for each key/value pair.
         *
         * @param action - Callback function to be called
         * for each key/value pair.  If action returns true, traversal is aborted.
         * @returns True if the traversal was aborted.
         */
        reverseTraversal(action) {
          return this.root_.reverseTraversal(action);
        }
        /**
         * Returns an iterator over the SortedMap.
         * @returns The iterator.
         */
        getIterator(resultGenerator) {
          return new SortedMapIterator(this.root_, null, this.comparator_, false, resultGenerator);
        }
        getIteratorFrom(key, resultGenerator) {
          return new SortedMapIterator(this.root_, key, this.comparator_, false, resultGenerator);
        }
        getReverseIteratorFrom(key, resultGenerator) {
          return new SortedMapIterator(this.root_, key, this.comparator_, true, resultGenerator);
        }
        getReverseIterator(resultGenerator) {
          return new SortedMapIterator(this.root_, null, this.comparator_, true, resultGenerator);
        }
      };
      SortedMap.EMPTY_NODE = new LLRBEmptyNode();
      priorityHashText = function(priority) {
        if (typeof priority === "number") {
          return "number:" + doubleToIEEE754String(priority);
        } else {
          return "string:" + priority;
        }
      };
      validatePriorityNode = function(priorityNode) {
        if (priorityNode.isLeafNode()) {
          const val = priorityNode.val();
          assert(typeof val === "string" || typeof val === "number" || typeof val === "object" && contains(val, ".sv"), "Priority must be a string or number.");
        } else {
          assert(priorityNode === MAX_NODE$2 || priorityNode.isEmpty(), "priority of unexpected type.");
        }
        assert(priorityNode === MAX_NODE$2 || priorityNode.getPriority().isEmpty(), "Priority nodes can't have a priority of their own.");
      };
      LeafNode = class _LeafNode {
        static set __childrenNodeConstructor(val) {
          __childrenNodeConstructor = val;
        }
        static get __childrenNodeConstructor() {
          return __childrenNodeConstructor;
        }
        /**
         * @param value_ - The value to store in this leaf node. The object type is
         * possible in the event of a deferred value
         * @param priorityNode_ - The priority of this node.
         */
        constructor(value_, priorityNode_ = _LeafNode.__childrenNodeConstructor.EMPTY_NODE) {
          this.value_ = value_;
          this.priorityNode_ = priorityNode_;
          this.lazyHash_ = null;
          assert(this.value_ !== void 0 && this.value_ !== null, "LeafNode shouldn't be created with null/undefined value.");
          validatePriorityNode(this.priorityNode_);
        }
        /** @inheritDoc */
        isLeafNode() {
          return true;
        }
        /** @inheritDoc */
        getPriority() {
          return this.priorityNode_;
        }
        /** @inheritDoc */
        updatePriority(newPriorityNode) {
          return new _LeafNode(this.value_, newPriorityNode);
        }
        /** @inheritDoc */
        getImmediateChild(childName) {
          if (childName === ".priority") {
            return this.priorityNode_;
          } else {
            return _LeafNode.__childrenNodeConstructor.EMPTY_NODE;
          }
        }
        /** @inheritDoc */
        getChild(path) {
          if (pathIsEmpty(path)) {
            return this;
          } else if (pathGetFront(path) === ".priority") {
            return this.priorityNode_;
          } else {
            return _LeafNode.__childrenNodeConstructor.EMPTY_NODE;
          }
        }
        hasChild() {
          return false;
        }
        /** @inheritDoc */
        getPredecessorChildName(childName, childNode) {
          return null;
        }
        /** @inheritDoc */
        updateImmediateChild(childName, newChildNode) {
          if (childName === ".priority") {
            return this.updatePriority(newChildNode);
          } else if (newChildNode.isEmpty() && childName !== ".priority") {
            return this;
          } else {
            return _LeafNode.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(childName, newChildNode).updatePriority(this.priorityNode_);
          }
        }
        /** @inheritDoc */
        updateChild(path, newChildNode) {
          const front = pathGetFront(path);
          if (front === null) {
            return newChildNode;
          } else if (newChildNode.isEmpty() && front !== ".priority") {
            return this;
          } else {
            assert(front !== ".priority" || pathGetLength(path) === 1, ".priority must be the last token in a path");
            return this.updateImmediateChild(front, _LeafNode.__childrenNodeConstructor.EMPTY_NODE.updateChild(pathPopFront(path), newChildNode));
          }
        }
        /** @inheritDoc */
        isEmpty() {
          return false;
        }
        /** @inheritDoc */
        numChildren() {
          return 0;
        }
        /** @inheritDoc */
        forEachChild(index, action) {
          return false;
        }
        val(exportFormat) {
          if (exportFormat && !this.getPriority().isEmpty()) {
            return {
              ".value": this.getValue(),
              ".priority": this.getPriority().val()
            };
          } else {
            return this.getValue();
          }
        }
        /** @inheritDoc */
        hash() {
          if (this.lazyHash_ === null) {
            let toHash = "";
            if (!this.priorityNode_.isEmpty()) {
              toHash += "priority:" + priorityHashText(this.priorityNode_.val()) + ":";
            }
            const type = typeof this.value_;
            toHash += type + ":";
            if (type === "number") {
              toHash += doubleToIEEE754String(this.value_);
            } else {
              toHash += this.value_;
            }
            this.lazyHash_ = sha1(toHash);
          }
          return this.lazyHash_;
        }
        /**
         * Returns the value of the leaf node.
         * @returns The value of the node.
         */
        getValue() {
          return this.value_;
        }
        compareTo(other) {
          if (other === _LeafNode.__childrenNodeConstructor.EMPTY_NODE) {
            return 1;
          } else if (other instanceof _LeafNode.__childrenNodeConstructor) {
            return -1;
          } else {
            assert(other.isLeafNode(), "Unknown node type");
            return this.compareToLeafNode_(other);
          }
        }
        /**
         * Comparison specifically for two leaf nodes
         */
        compareToLeafNode_(otherLeaf) {
          const otherLeafType = typeof otherLeaf.value_;
          const thisLeafType = typeof this.value_;
          const otherIndex = _LeafNode.VALUE_TYPE_ORDER.indexOf(otherLeafType);
          const thisIndex = _LeafNode.VALUE_TYPE_ORDER.indexOf(thisLeafType);
          assert(otherIndex >= 0, "Unknown leaf type: " + otherLeafType);
          assert(thisIndex >= 0, "Unknown leaf type: " + thisLeafType);
          if (otherIndex === thisIndex) {
            if (thisLeafType === "object") {
              return 0;
            } else {
              if (this.value_ < otherLeaf.value_) {
                return -1;
              } else if (this.value_ === otherLeaf.value_) {
                return 0;
              } else {
                return 1;
              }
            }
          } else {
            return thisIndex - otherIndex;
          }
        }
        withIndex() {
          return this;
        }
        isIndexed() {
          return true;
        }
        equals(other) {
          if (other === this) {
            return true;
          } else if (other.isLeafNode()) {
            const otherLeaf = other;
            return this.value_ === otherLeaf.value_ && this.priorityNode_.equals(otherLeaf.priorityNode_);
          } else {
            return false;
          }
        }
      };
      LeafNode.VALUE_TYPE_ORDER = ["object", "boolean", "number", "string"];
      PriorityIndex = class extends Index {
        compare(a, b) {
          const aPriority = a.node.getPriority();
          const bPriority = b.node.getPriority();
          const indexCmp = aPriority.compareTo(bPriority);
          if (indexCmp === 0) {
            return nameCompare(a.name, b.name);
          } else {
            return indexCmp;
          }
        }
        isDefinedOn(node) {
          return !node.getPriority().isEmpty();
        }
        indexedValueChanged(oldNode, newNode) {
          return !oldNode.getPriority().equals(newNode.getPriority());
        }
        minPost() {
          return NamedNode.MIN;
        }
        maxPost() {
          return new NamedNode(MAX_NAME, new LeafNode("[PRIORITY-POST]", MAX_NODE$1));
        }
        makePost(indexValue, name3) {
          const priorityNode = nodeFromJSON$1(indexValue);
          return new NamedNode(name3, new LeafNode("[PRIORITY-POST]", priorityNode));
        }
        /**
         * @returns String representation for inclusion in a query spec
         */
        toString() {
          return ".priority";
        }
      };
      PRIORITY_INDEX = new PriorityIndex();
      LOG_2 = Math.log(2);
      Base12Num = class {
        constructor(length) {
          const logBase2 = (num) => (
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            parseInt(Math.log(num) / LOG_2, 10)
          );
          const bitMask = (bits) => parseInt(Array(bits + 1).join("1"), 2);
          this.count = logBase2(length + 1);
          this.current_ = this.count - 1;
          const mask = bitMask(this.count);
          this.bits_ = length + 1 & mask;
        }
        nextBitIsOne() {
          const result = !(this.bits_ & 1 << this.current_);
          this.current_--;
          return result;
        }
      };
      buildChildSet = function(childList, cmp, keyFn, mapSortFn) {
        childList.sort(cmp);
        const buildBalancedTree = function(low, high) {
          const length = high - low;
          let namedNode;
          let key;
          if (length === 0) {
            return null;
          } else if (length === 1) {
            namedNode = childList[low];
            key = keyFn ? keyFn(namedNode) : namedNode;
            return new LLRBNode(key, namedNode.node, LLRBNode.BLACK, null, null);
          } else {
            const middle = parseInt(length / 2, 10) + low;
            const left = buildBalancedTree(low, middle);
            const right = buildBalancedTree(middle + 1, high);
            namedNode = childList[middle];
            key = keyFn ? keyFn(namedNode) : namedNode;
            return new LLRBNode(key, namedNode.node, LLRBNode.BLACK, left, right);
          }
        };
        const buildFrom12Array = function(base122) {
          let node = null;
          let root2 = null;
          let index = childList.length;
          const buildPennant = function(chunkSize, color) {
            const low = index - chunkSize;
            const high = index;
            index -= chunkSize;
            const childTree = buildBalancedTree(low + 1, high);
            const namedNode = childList[low];
            const key = keyFn ? keyFn(namedNode) : namedNode;
            attachPennant(new LLRBNode(key, namedNode.node, color, null, childTree));
          };
          const attachPennant = function(pennant) {
            if (node) {
              node.left = pennant;
              node = pennant;
            } else {
              root2 = pennant;
              node = pennant;
            }
          };
          for (let i = 0; i < base122.count; ++i) {
            const isOne = base122.nextBitIsOne();
            const chunkSize = Math.pow(2, base122.count - (i + 1));
            if (isOne) {
              buildPennant(chunkSize, LLRBNode.BLACK);
            } else {
              buildPennant(chunkSize, LLRBNode.BLACK);
              buildPennant(chunkSize, LLRBNode.RED);
            }
          }
          return root2;
        };
        const base12 = new Base12Num(childList.length);
        const root = buildFrom12Array(base12);
        return new SortedMap(mapSortFn || cmp, root);
      };
      fallbackObject = {};
      IndexMap = class _IndexMap {
        /**
         * The default IndexMap for nodes without a priority
         */
        static get Default() {
          assert(fallbackObject && PRIORITY_INDEX, "ChildrenNode.ts has not been loaded");
          _defaultIndexMap = _defaultIndexMap || new _IndexMap({ ".priority": fallbackObject }, { ".priority": PRIORITY_INDEX });
          return _defaultIndexMap;
        }
        constructor(indexes_, indexSet_) {
          this.indexes_ = indexes_;
          this.indexSet_ = indexSet_;
        }
        get(indexKey) {
          const sortedMap = safeGet(this.indexes_, indexKey);
          if (!sortedMap) {
            throw new Error("No index defined for " + indexKey);
          }
          if (sortedMap instanceof SortedMap) {
            return sortedMap;
          } else {
            return null;
          }
        }
        hasIndex(indexDefinition) {
          return contains(this.indexSet_, indexDefinition.toString());
        }
        addIndex(indexDefinition, existingChildren) {
          assert(indexDefinition !== KEY_INDEX, "KeyIndex always exists and isn't meant to be added to the IndexMap.");
          const childList = [];
          let sawIndexedValue = false;
          const iter = existingChildren.getIterator(NamedNode.Wrap);
          let next = iter.getNext();
          while (next) {
            sawIndexedValue = sawIndexedValue || indexDefinition.isDefinedOn(next.node);
            childList.push(next);
            next = iter.getNext();
          }
          let newIndex;
          if (sawIndexedValue) {
            newIndex = buildChildSet(childList, indexDefinition.getCompare());
          } else {
            newIndex = fallbackObject;
          }
          const indexName = indexDefinition.toString();
          const newIndexSet = Object.assign({}, this.indexSet_);
          newIndexSet[indexName] = indexDefinition;
          const newIndexes = Object.assign({}, this.indexes_);
          newIndexes[indexName] = newIndex;
          return new _IndexMap(newIndexes, newIndexSet);
        }
        /**
         * Ensure that this node is properly tracked in any indexes that we're maintaining
         */
        addToIndexes(namedNode, existingChildren) {
          const newIndexes = map(this.indexes_, (indexedChildren, indexName) => {
            const index = safeGet(this.indexSet_, indexName);
            assert(index, "Missing index implementation for " + indexName);
            if (indexedChildren === fallbackObject) {
              if (index.isDefinedOn(namedNode.node)) {
                const childList = [];
                const iter = existingChildren.getIterator(NamedNode.Wrap);
                let next = iter.getNext();
                while (next) {
                  if (next.name !== namedNode.name) {
                    childList.push(next);
                  }
                  next = iter.getNext();
                }
                childList.push(namedNode);
                return buildChildSet(childList, index.getCompare());
              } else {
                return fallbackObject;
              }
            } else {
              const existingSnap = existingChildren.get(namedNode.name);
              let newChildren = indexedChildren;
              if (existingSnap) {
                newChildren = newChildren.remove(new NamedNode(namedNode.name, existingSnap));
              }
              return newChildren.insert(namedNode, namedNode.node);
            }
          });
          return new _IndexMap(newIndexes, this.indexSet_);
        }
        /**
         * Create a new IndexMap instance with the given value removed
         */
        removeFromIndexes(namedNode, existingChildren) {
          const newIndexes = map(this.indexes_, (indexedChildren) => {
            if (indexedChildren === fallbackObject) {
              return indexedChildren;
            } else {
              const existingSnap = existingChildren.get(namedNode.name);
              if (existingSnap) {
                return indexedChildren.remove(new NamedNode(namedNode.name, existingSnap));
              } else {
                return indexedChildren;
              }
            }
          });
          return new _IndexMap(newIndexes, this.indexSet_);
        }
      };
      ChildrenNode = class _ChildrenNode {
        static get EMPTY_NODE() {
          return EMPTY_NODE || (EMPTY_NODE = new _ChildrenNode(new SortedMap(NAME_COMPARATOR), null, IndexMap.Default));
        }
        /**
         * @param children_ - List of children of this node..
         * @param priorityNode_ - The priority of this node (as a snapshot node).
         */
        constructor(children_, priorityNode_, indexMap_) {
          this.children_ = children_;
          this.priorityNode_ = priorityNode_;
          this.indexMap_ = indexMap_;
          this.lazyHash_ = null;
          if (this.priorityNode_) {
            validatePriorityNode(this.priorityNode_);
          }
          if (this.children_.isEmpty()) {
            assert(!this.priorityNode_ || this.priorityNode_.isEmpty(), "An empty node cannot have a priority");
          }
        }
        /** @inheritDoc */
        isLeafNode() {
          return false;
        }
        /** @inheritDoc */
        getPriority() {
          return this.priorityNode_ || EMPTY_NODE;
        }
        /** @inheritDoc */
        updatePriority(newPriorityNode) {
          if (this.children_.isEmpty()) {
            return this;
          } else {
            return new _ChildrenNode(this.children_, newPriorityNode, this.indexMap_);
          }
        }
        /** @inheritDoc */
        getImmediateChild(childName) {
          if (childName === ".priority") {
            return this.getPriority();
          } else {
            const child = this.children_.get(childName);
            return child === null ? EMPTY_NODE : child;
          }
        }
        /** @inheritDoc */
        getChild(path) {
          const front = pathGetFront(path);
          if (front === null) {
            return this;
          }
          return this.getImmediateChild(front).getChild(pathPopFront(path));
        }
        /** @inheritDoc */
        hasChild(childName) {
          return this.children_.get(childName) !== null;
        }
        /** @inheritDoc */
        updateImmediateChild(childName, newChildNode) {
          assert(newChildNode, "We should always be passing snapshot nodes");
          if (childName === ".priority") {
            return this.updatePriority(newChildNode);
          } else {
            const namedNode = new NamedNode(childName, newChildNode);
            let newChildren, newIndexMap;
            if (newChildNode.isEmpty()) {
              newChildren = this.children_.remove(childName);
              newIndexMap = this.indexMap_.removeFromIndexes(namedNode, this.children_);
            } else {
              newChildren = this.children_.insert(childName, newChildNode);
              newIndexMap = this.indexMap_.addToIndexes(namedNode, this.children_);
            }
            const newPriority = newChildren.isEmpty() ? EMPTY_NODE : this.priorityNode_;
            return new _ChildrenNode(newChildren, newPriority, newIndexMap);
          }
        }
        /** @inheritDoc */
        updateChild(path, newChildNode) {
          const front = pathGetFront(path);
          if (front === null) {
            return newChildNode;
          } else {
            assert(pathGetFront(path) !== ".priority" || pathGetLength(path) === 1, ".priority must be the last token in a path");
            const newImmediateChild = this.getImmediateChild(front).updateChild(pathPopFront(path), newChildNode);
            return this.updateImmediateChild(front, newImmediateChild);
          }
        }
        /** @inheritDoc */
        isEmpty() {
          return this.children_.isEmpty();
        }
        /** @inheritDoc */
        numChildren() {
          return this.children_.count();
        }
        /** @inheritDoc */
        val(exportFormat) {
          if (this.isEmpty()) {
            return null;
          }
          const obj = {};
          let numKeys = 0, maxKey = 0, allIntegerKeys = true;
          this.forEachChild(PRIORITY_INDEX, (key, childNode) => {
            obj[key] = childNode.val(exportFormat);
            numKeys++;
            if (allIntegerKeys && _ChildrenNode.INTEGER_REGEXP_.test(key)) {
              maxKey = Math.max(maxKey, Number(key));
            } else {
              allIntegerKeys = false;
            }
          });
          if (!exportFormat && allIntegerKeys && maxKey < 2 * numKeys) {
            const array = [];
            for (const key in obj) {
              array[key] = obj[key];
            }
            return array;
          } else {
            if (exportFormat && !this.getPriority().isEmpty()) {
              obj[".priority"] = this.getPriority().val();
            }
            return obj;
          }
        }
        /** @inheritDoc */
        hash() {
          if (this.lazyHash_ === null) {
            let toHash = "";
            if (!this.getPriority().isEmpty()) {
              toHash += "priority:" + priorityHashText(this.getPriority().val()) + ":";
            }
            this.forEachChild(PRIORITY_INDEX, (key, childNode) => {
              const childHash = childNode.hash();
              if (childHash !== "") {
                toHash += ":" + key + ":" + childHash;
              }
            });
            this.lazyHash_ = toHash === "" ? "" : sha1(toHash);
          }
          return this.lazyHash_;
        }
        /** @inheritDoc */
        getPredecessorChildName(childName, childNode, index) {
          const idx = this.resolveIndex_(index);
          if (idx) {
            const predecessor = idx.getPredecessorKey(new NamedNode(childName, childNode));
            return predecessor ? predecessor.name : null;
          } else {
            return this.children_.getPredecessorKey(childName);
          }
        }
        getFirstChildName(indexDefinition) {
          const idx = this.resolveIndex_(indexDefinition);
          if (idx) {
            const minKey = idx.minKey();
            return minKey && minKey.name;
          } else {
            return this.children_.minKey();
          }
        }
        getFirstChild(indexDefinition) {
          const minKey = this.getFirstChildName(indexDefinition);
          if (minKey) {
            return new NamedNode(minKey, this.children_.get(minKey));
          } else {
            return null;
          }
        }
        /**
         * Given an index, return the key name of the largest value we have, according to that index
         */
        getLastChildName(indexDefinition) {
          const idx = this.resolveIndex_(indexDefinition);
          if (idx) {
            const maxKey = idx.maxKey();
            return maxKey && maxKey.name;
          } else {
            return this.children_.maxKey();
          }
        }
        getLastChild(indexDefinition) {
          const maxKey = this.getLastChildName(indexDefinition);
          if (maxKey) {
            return new NamedNode(maxKey, this.children_.get(maxKey));
          } else {
            return null;
          }
        }
        forEachChild(index, action) {
          const idx = this.resolveIndex_(index);
          if (idx) {
            return idx.inorderTraversal((wrappedNode) => {
              return action(wrappedNode.name, wrappedNode.node);
            });
          } else {
            return this.children_.inorderTraversal(action);
          }
        }
        getIterator(indexDefinition) {
          return this.getIteratorFrom(indexDefinition.minPost(), indexDefinition);
        }
        getIteratorFrom(startPost, indexDefinition) {
          const idx = this.resolveIndex_(indexDefinition);
          if (idx) {
            return idx.getIteratorFrom(startPost, (key) => key);
          } else {
            const iterator = this.children_.getIteratorFrom(startPost.name, NamedNode.Wrap);
            let next = iterator.peek();
            while (next != null && indexDefinition.compare(next, startPost) < 0) {
              iterator.getNext();
              next = iterator.peek();
            }
            return iterator;
          }
        }
        getReverseIterator(indexDefinition) {
          return this.getReverseIteratorFrom(indexDefinition.maxPost(), indexDefinition);
        }
        getReverseIteratorFrom(endPost, indexDefinition) {
          const idx = this.resolveIndex_(indexDefinition);
          if (idx) {
            return idx.getReverseIteratorFrom(endPost, (key) => {
              return key;
            });
          } else {
            const iterator = this.children_.getReverseIteratorFrom(endPost.name, NamedNode.Wrap);
            let next = iterator.peek();
            while (next != null && indexDefinition.compare(next, endPost) > 0) {
              iterator.getNext();
              next = iterator.peek();
            }
            return iterator;
          }
        }
        compareTo(other) {
          if (this.isEmpty()) {
            if (other.isEmpty()) {
              return 0;
            } else {
              return -1;
            }
          } else if (other.isLeafNode() || other.isEmpty()) {
            return 1;
          } else if (other === MAX_NODE) {
            return -1;
          } else {
            return 0;
          }
        }
        withIndex(indexDefinition) {
          if (indexDefinition === KEY_INDEX || this.indexMap_.hasIndex(indexDefinition)) {
            return this;
          } else {
            const newIndexMap = this.indexMap_.addIndex(indexDefinition, this.children_);
            return new _ChildrenNode(this.children_, this.priorityNode_, newIndexMap);
          }
        }
        isIndexed(index) {
          return index === KEY_INDEX || this.indexMap_.hasIndex(index);
        }
        equals(other) {
          if (other === this) {
            return true;
          } else if (other.isLeafNode()) {
            return false;
          } else {
            const otherChildrenNode = other;
            if (!this.getPriority().equals(otherChildrenNode.getPriority())) {
              return false;
            } else if (this.children_.count() === otherChildrenNode.children_.count()) {
              const thisIter = this.getIterator(PRIORITY_INDEX);
              const otherIter = otherChildrenNode.getIterator(PRIORITY_INDEX);
              let thisCurrent = thisIter.getNext();
              let otherCurrent = otherIter.getNext();
              while (thisCurrent && otherCurrent) {
                if (thisCurrent.name !== otherCurrent.name || !thisCurrent.node.equals(otherCurrent.node)) {
                  return false;
                }
                thisCurrent = thisIter.getNext();
                otherCurrent = otherIter.getNext();
              }
              return thisCurrent === null && otherCurrent === null;
            } else {
              return false;
            }
          }
        }
        /**
         * Returns a SortedMap ordered by index, or null if the default (by-key) ordering can be used
         * instead.
         *
         */
        resolveIndex_(indexDefinition) {
          if (indexDefinition === KEY_INDEX) {
            return null;
          } else {
            return this.indexMap_.get(indexDefinition.toString());
          }
        }
      };
      ChildrenNode.INTEGER_REGEXP_ = /^(0|[1-9]\d*)$/;
      MaxNode = class extends ChildrenNode {
        constructor() {
          super(new SortedMap(NAME_COMPARATOR), ChildrenNode.EMPTY_NODE, IndexMap.Default);
        }
        compareTo(other) {
          if (other === this) {
            return 0;
          } else {
            return 1;
          }
        }
        equals(other) {
          return other === this;
        }
        getPriority() {
          return this;
        }
        getImmediateChild(childName) {
          return ChildrenNode.EMPTY_NODE;
        }
        isEmpty() {
          return false;
        }
      };
      MAX_NODE = new MaxNode();
      Object.defineProperties(NamedNode, {
        MIN: {
          value: new NamedNode(MIN_NAME, ChildrenNode.EMPTY_NODE)
        },
        MAX: {
          value: new NamedNode(MAX_NAME, MAX_NODE)
        }
      });
      KeyIndex.__EMPTY_NODE = ChildrenNode.EMPTY_NODE;
      LeafNode.__childrenNodeConstructor = ChildrenNode;
      setMaxNode$1(MAX_NODE);
      setMaxNode(MAX_NODE);
      USE_HINZE = true;
      setNodeFromJSON(nodeFromJSON);
      PathIndex = class extends Index {
        constructor(indexPath_) {
          super();
          this.indexPath_ = indexPath_;
          assert(!pathIsEmpty(indexPath_) && pathGetFront(indexPath_) !== ".priority", "Can't create PathIndex with empty path or .priority key");
        }
        extractChild(snap3) {
          return snap3.getChild(this.indexPath_);
        }
        isDefinedOn(node) {
          return !node.getChild(this.indexPath_).isEmpty();
        }
        compare(a, b) {
          const aChild = this.extractChild(a.node);
          const bChild = this.extractChild(b.node);
          const indexCmp = aChild.compareTo(bChild);
          if (indexCmp === 0) {
            return nameCompare(a.name, b.name);
          } else {
            return indexCmp;
          }
        }
        makePost(indexValue, name3) {
          const valueNode = nodeFromJSON(indexValue);
          const node = ChildrenNode.EMPTY_NODE.updateChild(this.indexPath_, valueNode);
          return new NamedNode(name3, node);
        }
        maxPost() {
          const node = ChildrenNode.EMPTY_NODE.updateChild(this.indexPath_, MAX_NODE);
          return new NamedNode(MAX_NAME, node);
        }
        toString() {
          return pathSlice(this.indexPath_, 0).join("/");
        }
      };
      ValueIndex = class extends Index {
        compare(a, b) {
          const indexCmp = a.node.compareTo(b.node);
          if (indexCmp === 0) {
            return nameCompare(a.name, b.name);
          } else {
            return indexCmp;
          }
        }
        isDefinedOn(node) {
          return true;
        }
        indexedValueChanged(oldNode, newNode) {
          return !oldNode.equals(newNode);
        }
        minPost() {
          return NamedNode.MIN;
        }
        maxPost() {
          return NamedNode.MAX;
        }
        makePost(indexValue, name3) {
          const valueNode = nodeFromJSON(indexValue);
          return new NamedNode(name3, valueNode);
        }
        /**
         * @returns String representation for inclusion in a query spec
         */
        toString() {
          return ".value";
        }
      };
      VALUE_INDEX = new ValueIndex();
      QueryParams = class _QueryParams {
        constructor() {
          this.limitSet_ = false;
          this.startSet_ = false;
          this.startNameSet_ = false;
          this.startAfterSet_ = false;
          this.endSet_ = false;
          this.endNameSet_ = false;
          this.endBeforeSet_ = false;
          this.limit_ = 0;
          this.viewFrom_ = "";
          this.indexStartValue_ = null;
          this.indexStartName_ = "";
          this.indexEndValue_ = null;
          this.indexEndName_ = "";
          this.index_ = PRIORITY_INDEX;
        }
        hasStart() {
          return this.startSet_;
        }
        /**
         * @returns True if it would return from left.
         */
        isViewFromLeft() {
          if (this.viewFrom_ === "") {
            return this.startSet_;
          } else {
            return this.viewFrom_ === "l";
          }
        }
        /**
         * Only valid to call if hasStart() returns true
         */
        getIndexStartValue() {
          assert(this.startSet_, "Only valid if start has been set");
          return this.indexStartValue_;
        }
        /**
         * Only valid to call if hasStart() returns true.
         * Returns the starting key name for the range defined by these query parameters
         */
        getIndexStartName() {
          assert(this.startSet_, "Only valid if start has been set");
          if (this.startNameSet_) {
            return this.indexStartName_;
          } else {
            return MIN_NAME;
          }
        }
        hasEnd() {
          return this.endSet_;
        }
        /**
         * Only valid to call if hasEnd() returns true.
         */
        getIndexEndValue() {
          assert(this.endSet_, "Only valid if end has been set");
          return this.indexEndValue_;
        }
        /**
         * Only valid to call if hasEnd() returns true.
         * Returns the end key name for the range defined by these query parameters
         */
        getIndexEndName() {
          assert(this.endSet_, "Only valid if end has been set");
          if (this.endNameSet_) {
            return this.indexEndName_;
          } else {
            return MAX_NAME;
          }
        }
        hasLimit() {
          return this.limitSet_;
        }
        /**
         * @returns True if a limit has been set and it has been explicitly anchored
         */
        hasAnchoredLimit() {
          return this.limitSet_ && this.viewFrom_ !== "";
        }
        /**
         * Only valid to call if hasLimit() returns true
         */
        getLimit() {
          assert(this.limitSet_, "Only valid if limit has been set");
          return this.limit_;
        }
        getIndex() {
          return this.index_;
        }
        loadsAllData() {
          return !(this.startSet_ || this.endSet_ || this.limitSet_);
        }
        isDefault() {
          return this.loadsAllData() && this.index_ === PRIORITY_INDEX;
        }
        copy() {
          const copy = new _QueryParams();
          copy.limitSet_ = this.limitSet_;
          copy.limit_ = this.limit_;
          copy.startSet_ = this.startSet_;
          copy.startAfterSet_ = this.startAfterSet_;
          copy.indexStartValue_ = this.indexStartValue_;
          copy.startNameSet_ = this.startNameSet_;
          copy.indexStartName_ = this.indexStartName_;
          copy.endSet_ = this.endSet_;
          copy.endBeforeSet_ = this.endBeforeSet_;
          copy.indexEndValue_ = this.indexEndValue_;
          copy.endNameSet_ = this.endNameSet_;
          copy.indexEndName_ = this.indexEndName_;
          copy.index_ = this.index_;
          copy.viewFrom_ = this.viewFrom_;
          return copy;
        }
      };
      ReadonlyRestClient = class _ReadonlyRestClient extends ServerActions {
        reportStats(stats) {
          throw new Error("Method not implemented.");
        }
        static getListenId_(query, tag) {
          if (tag !== void 0) {
            return "tag$" + tag;
          } else {
            assert(query._queryParams.isDefault(), "should have a tag if it's not a default query.");
            return query._path.toString();
          }
        }
        /**
         * @param repoInfo_ - Data about the namespace we are connecting to
         * @param onDataUpdate_ - A callback for new data from the server
         */
        constructor(repoInfo_, onDataUpdate_, authTokenProvider_, appCheckTokenProvider_) {
          super();
          this.repoInfo_ = repoInfo_;
          this.onDataUpdate_ = onDataUpdate_;
          this.authTokenProvider_ = authTokenProvider_;
          this.appCheckTokenProvider_ = appCheckTokenProvider_;
          this.log_ = logWrapper("p:rest:");
          this.listens_ = {};
        }
        /** @inheritDoc */
        listen(query, currentHashFn, tag, onComplete) {
          const pathString = query._path.toString();
          this.log_("Listen called for " + pathString + " " + query._queryIdentifier);
          const listenId = _ReadonlyRestClient.getListenId_(query, tag);
          const thisListen = {};
          this.listens_[listenId] = thisListen;
          const queryStringParameters = queryParamsToRestQueryStringParameters(query._queryParams);
          this.restRequest_(pathString + ".json", queryStringParameters, (error2, result) => {
            let data = result;
            if (error2 === 404) {
              data = null;
              error2 = null;
            }
            if (error2 === null) {
              this.onDataUpdate_(
                pathString,
                data,
                /*isMerge=*/
                false,
                tag
              );
            }
            if (safeGet(this.listens_, listenId) === thisListen) {
              let status;
              if (!error2) {
                status = "ok";
              } else if (error2 === 401) {
                status = "permission_denied";
              } else {
                status = "rest_error:" + error2;
              }
              onComplete(status, null);
            }
          });
        }
        /** @inheritDoc */
        unlisten(query, tag) {
          const listenId = _ReadonlyRestClient.getListenId_(query, tag);
          delete this.listens_[listenId];
        }
        get(query) {
          const queryStringParameters = queryParamsToRestQueryStringParameters(query._queryParams);
          const pathString = query._path.toString();
          const deferred = new Deferred();
          this.restRequest_(pathString + ".json", queryStringParameters, (error2, result) => {
            let data = result;
            if (error2 === 404) {
              data = null;
              error2 = null;
            }
            if (error2 === null) {
              this.onDataUpdate_(
                pathString,
                data,
                /*isMerge=*/
                false,
                /*tag=*/
                null
              );
              deferred.resolve(data);
            } else {
              deferred.reject(new Error(data));
            }
          });
          return deferred.promise;
        }
        /** @inheritDoc */
        refreshAuthToken(token) {
        }
        /**
         * Performs a REST request to the given path, with the provided query string parameters,
         * and any auth credentials we have.
         */
        restRequest_(pathString, queryStringParameters = {}, callback) {
          queryStringParameters["format"] = "export";
          return Promise.all([
            this.authTokenProvider_.getToken(
              /*forceRefresh=*/
              false
            ),
            this.appCheckTokenProvider_.getToken(
              /*forceRefresh=*/
              false
            )
          ]).then(([authToken, appCheckToken]) => {
            if (authToken && authToken.accessToken) {
              queryStringParameters["auth"] = authToken.accessToken;
            }
            if (appCheckToken && appCheckToken.token) {
              queryStringParameters["ac"] = appCheckToken.token;
            }
            const url = (this.repoInfo_.secure ? "https://" : "http://") + this.repoInfo_.host + pathString + "?ns=" + this.repoInfo_.namespace + querystring(queryStringParameters);
            this.log_("Sending REST request for " + url);
            const xhr = new XMLHttpRequest();
            xhr.onreadystatechange = () => {
              if (callback && xhr.readyState === 4) {
                this.log_("REST Response for " + url + " received. status:", xhr.status, "response:", xhr.responseText);
                let res = null;
                if (xhr.status >= 200 && xhr.status < 300) {
                  try {
                    res = jsonEval(xhr.responseText);
                  } catch (e) {
                    warn("Failed to parse JSON response for " + url + ": " + xhr.responseText);
                  }
                  callback(null, res);
                } else {
                  if (xhr.status !== 401 && xhr.status !== 404) {
                    warn("Got unsuccessful REST response for " + url + " Status: " + xhr.status);
                  }
                  callback(xhr.status);
                }
                callback = null;
              }
            };
            xhr.open(
              "GET",
              url,
              /*asynchronous=*/
              true
            );
            xhr.send();
          });
        }
      };
      SnapshotHolder = class {
        constructor() {
          this.rootNode_ = ChildrenNode.EMPTY_NODE;
        }
        getNode(path) {
          return this.rootNode_.getChild(path);
        }
        updateSnapshot(path, newSnapshotNode) {
          this.rootNode_ = this.rootNode_.updateChild(path, newSnapshotNode);
        }
      };
      StatsListener = class {
        constructor(collection_) {
          this.collection_ = collection_;
          this.last_ = null;
        }
        get() {
          const newStats = this.collection_.get();
          const delta = Object.assign({}, newStats);
          if (this.last_) {
            each(this.last_, (stat, value) => {
              delta[stat] = delta[stat] - value;
            });
          }
          this.last_ = newStats;
          return delta;
        }
      };
      FIRST_STATS_MIN_TIME = 10 * 1e3;
      FIRST_STATS_MAX_TIME = 30 * 1e3;
      REPORT_STATS_INTERVAL = 5 * 60 * 1e3;
      StatsReporter = class {
        constructor(collection, server_) {
          this.server_ = server_;
          this.statsToReport_ = {};
          this.statsListener_ = new StatsListener(collection);
          const timeout = FIRST_STATS_MIN_TIME + (FIRST_STATS_MAX_TIME - FIRST_STATS_MIN_TIME) * Math.random();
          setTimeoutNonBlocking(this.reportStats_.bind(this), Math.floor(timeout));
        }
        reportStats_() {
          const stats = this.statsListener_.get();
          const reportedStats = {};
          let haveStatsToReport = false;
          each(stats, (stat, value) => {
            if (value > 0 && contains(this.statsToReport_, stat)) {
              reportedStats[stat] = value;
              haveStatsToReport = true;
            }
          });
          if (haveStatsToReport) {
            this.server_.reportStats(reportedStats);
          }
          setTimeoutNonBlocking(this.reportStats_.bind(this), Math.floor(Math.random() * 2 * REPORT_STATS_INTERVAL));
        }
      };
      (function(OperationType2) {
        OperationType2[OperationType2["OVERWRITE"] = 0] = "OVERWRITE";
        OperationType2[OperationType2["MERGE"] = 1] = "MERGE";
        OperationType2[OperationType2["ACK_USER_WRITE"] = 2] = "ACK_USER_WRITE";
        OperationType2[OperationType2["LISTEN_COMPLETE"] = 3] = "LISTEN_COMPLETE";
      })(OperationType || (OperationType = {}));
      AckUserWrite = class _AckUserWrite {
        /**
         * @param affectedTree - A tree containing true for each affected path. Affected paths can't overlap.
         */
        constructor(path, affectedTree, revert) {
          this.path = path;
          this.affectedTree = affectedTree;
          this.revert = revert;
          this.type = OperationType.ACK_USER_WRITE;
          this.source = newOperationSourceUser();
        }
        operationForChild(childName) {
          if (!pathIsEmpty(this.path)) {
            assert(pathGetFront(this.path) === childName, "operationForChild called for unrelated child.");
            return new _AckUserWrite(pathPopFront(this.path), this.affectedTree, this.revert);
          } else if (this.affectedTree.value != null) {
            assert(this.affectedTree.children.isEmpty(), "affectedTree should not have overlapping affected paths.");
            return this;
          } else {
            const childTree = this.affectedTree.subtree(new Path(childName));
            return new _AckUserWrite(newEmptyPath(), childTree, this.revert);
          }
        }
      };
      Overwrite = class _Overwrite {
        constructor(source, path, snap3) {
          this.source = source;
          this.path = path;
          this.snap = snap3;
          this.type = OperationType.OVERWRITE;
        }
        operationForChild(childName) {
          if (pathIsEmpty(this.path)) {
            return new _Overwrite(this.source, newEmptyPath(), this.snap.getImmediateChild(childName));
          } else {
            return new _Overwrite(this.source, pathPopFront(this.path), this.snap);
          }
        }
      };
      Merge = class _Merge {
        constructor(source, path, children) {
          this.source = source;
          this.path = path;
          this.children = children;
          this.type = OperationType.MERGE;
        }
        operationForChild(childName) {
          if (pathIsEmpty(this.path)) {
            const childTree = this.children.subtree(new Path(childName));
            if (childTree.isEmpty()) {
              return null;
            } else if (childTree.value) {
              return new Overwrite(this.source, newEmptyPath(), childTree.value);
            } else {
              return new _Merge(this.source, newEmptyPath(), childTree);
            }
          } else {
            assert(pathGetFront(this.path) === childName, "Can't get a merge for a child not on the path of the operation");
            return new _Merge(this.source, pathPopFront(this.path), this.children);
          }
        }
        toString() {
          return "Operation(" + this.path + ": " + this.source.toString() + " merge: " + this.children.toString() + ")";
        }
      };
      CacheNode = class {
        constructor(node_, fullyInitialized_, filtered_) {
          this.node_ = node_;
          this.fullyInitialized_ = fullyInitialized_;
          this.filtered_ = filtered_;
        }
        /**
         * Returns whether this node was fully initialized with either server data or a complete overwrite by the client
         */
        isFullyInitialized() {
          return this.fullyInitialized_;
        }
        /**
         * Returns whether this node is potentially missing children due to a filter applied to the node
         */
        isFiltered() {
          return this.filtered_;
        }
        isCompleteForPath(path) {
          if (pathIsEmpty(path)) {
            return this.isFullyInitialized() && !this.filtered_;
          }
          const childKey = pathGetFront(path);
          return this.isCompleteForChild(childKey);
        }
        isCompleteForChild(key) {
          return this.isFullyInitialized() && !this.filtered_ || this.node_.hasChild(key);
        }
        getNode() {
          return this.node_;
        }
      };
      EmptyChildren = () => {
        if (!emptyChildrenSingleton) {
          emptyChildrenSingleton = new SortedMap(stringCompare);
        }
        return emptyChildrenSingleton;
      };
      ImmutableTree = class _ImmutableTree {
        static fromObject(obj) {
          let tree = new _ImmutableTree(null);
          each(obj, (childPath, childSnap) => {
            tree = tree.set(new Path(childPath), childSnap);
          });
          return tree;
        }
        constructor(value, children = EmptyChildren()) {
          this.value = value;
          this.children = children;
        }
        /**
         * True if the value is empty and there are no children
         */
        isEmpty() {
          return this.value === null && this.children.isEmpty();
        }
        /**
         * Given a path and predicate, return the first node and the path to that node
         * where the predicate returns true.
         *
         * TODO Do a perf test -- If we're creating a bunch of `{path: value:}`
         * objects on the way back out, it may be better to pass down a pathSoFar obj.
         *
         * @param relativePath - The remainder of the path
         * @param predicate - The predicate to satisfy to return a node
         */
        findRootMostMatchingPathAndValue(relativePath, predicate) {
          if (this.value != null && predicate(this.value)) {
            return { path: newEmptyPath(), value: this.value };
          } else {
            if (pathIsEmpty(relativePath)) {
              return null;
            } else {
              const front = pathGetFront(relativePath);
              const child = this.children.get(front);
              if (child !== null) {
                const childExistingPathAndValue = child.findRootMostMatchingPathAndValue(pathPopFront(relativePath), predicate);
                if (childExistingPathAndValue != null) {
                  const fullPath = pathChild(new Path(front), childExistingPathAndValue.path);
                  return { path: fullPath, value: childExistingPathAndValue.value };
                } else {
                  return null;
                }
              } else {
                return null;
              }
            }
          }
        }
        /**
         * Find, if it exists, the shortest subpath of the given path that points a defined
         * value in the tree
         */
        findRootMostValueAndPath(relativePath) {
          return this.findRootMostMatchingPathAndValue(relativePath, () => true);
        }
        /**
         * @returns The subtree at the given path
         */
        subtree(relativePath) {
          if (pathIsEmpty(relativePath)) {
            return this;
          } else {
            const front = pathGetFront(relativePath);
            const childTree = this.children.get(front);
            if (childTree !== null) {
              return childTree.subtree(pathPopFront(relativePath));
            } else {
              return new _ImmutableTree(null);
            }
          }
        }
        /**
         * Sets a value at the specified path.
         *
         * @param relativePath - Path to set value at.
         * @param toSet - Value to set.
         * @returns Resulting tree.
         */
        set(relativePath, toSet) {
          if (pathIsEmpty(relativePath)) {
            return new _ImmutableTree(toSet, this.children);
          } else {
            const front = pathGetFront(relativePath);
            const child = this.children.get(front) || new _ImmutableTree(null);
            const newChild = child.set(pathPopFront(relativePath), toSet);
            const newChildren = this.children.insert(front, newChild);
            return new _ImmutableTree(this.value, newChildren);
          }
        }
        /**
         * Removes the value at the specified path.
         *
         * @param relativePath - Path to value to remove.
         * @returns Resulting tree.
         */
        remove(relativePath) {
          if (pathIsEmpty(relativePath)) {
            if (this.children.isEmpty()) {
              return new _ImmutableTree(null);
            } else {
              return new _ImmutableTree(null, this.children);
            }
          } else {
            const front = pathGetFront(relativePath);
            const child = this.children.get(front);
            if (child) {
              const newChild = child.remove(pathPopFront(relativePath));
              let newChildren;
              if (newChild.isEmpty()) {
                newChildren = this.children.remove(front);
              } else {
                newChildren = this.children.insert(front, newChild);
              }
              if (this.value === null && newChildren.isEmpty()) {
                return new _ImmutableTree(null);
              } else {
                return new _ImmutableTree(this.value, newChildren);
              }
            } else {
              return this;
            }
          }
        }
        /**
         * Gets a value from the tree.
         *
         * @param relativePath - Path to get value for.
         * @returns Value at path, or null.
         */
        get(relativePath) {
          if (pathIsEmpty(relativePath)) {
            return this.value;
          } else {
            const front = pathGetFront(relativePath);
            const child = this.children.get(front);
            if (child) {
              return child.get(pathPopFront(relativePath));
            } else {
              return null;
            }
          }
        }
        /**
         * Replace the subtree at the specified path with the given new tree.
         *
         * @param relativePath - Path to replace subtree for.
         * @param newTree - New tree.
         * @returns Resulting tree.
         */
        setTree(relativePath, newTree) {
          if (pathIsEmpty(relativePath)) {
            return newTree;
          } else {
            const front = pathGetFront(relativePath);
            const child = this.children.get(front) || new _ImmutableTree(null);
            const newChild = child.setTree(pathPopFront(relativePath), newTree);
            let newChildren;
            if (newChild.isEmpty()) {
              newChildren = this.children.remove(front);
            } else {
              newChildren = this.children.insert(front, newChild);
            }
            return new _ImmutableTree(this.value, newChildren);
          }
        }
        /**
         * Performs a depth first fold on this tree. Transforms a tree into a single
         * value, given a function that operates on the path to a node, an optional
         * current value, and a map of child names to folded subtrees
         */
        fold(fn) {
          return this.fold_(newEmptyPath(), fn);
        }
        /**
         * Recursive helper for public-facing fold() method
         */
        fold_(pathSoFar, fn) {
          const accum = {};
          this.children.inorderTraversal((childKey, childTree) => {
            accum[childKey] = childTree.fold_(pathChild(pathSoFar, childKey), fn);
          });
          return fn(pathSoFar, this.value, accum);
        }
        /**
         * Find the first matching value on the given path. Return the result of applying f to it.
         */
        findOnPath(path, f) {
          return this.findOnPath_(path, newEmptyPath(), f);
        }
        findOnPath_(pathToFollow, pathSoFar, f) {
          const result = this.value ? f(pathSoFar, this.value) : false;
          if (result) {
            return result;
          } else {
            if (pathIsEmpty(pathToFollow)) {
              return null;
            } else {
              const front = pathGetFront(pathToFollow);
              const nextChild = this.children.get(front);
              if (nextChild) {
                return nextChild.findOnPath_(pathPopFront(pathToFollow), pathChild(pathSoFar, front), f);
              } else {
                return null;
              }
            }
          }
        }
        foreachOnPath(path, f) {
          return this.foreachOnPath_(path, newEmptyPath(), f);
        }
        foreachOnPath_(pathToFollow, currentRelativePath, f) {
          if (pathIsEmpty(pathToFollow)) {
            return this;
          } else {
            if (this.value) {
              f(currentRelativePath, this.value);
            }
            const front = pathGetFront(pathToFollow);
            const nextChild = this.children.get(front);
            if (nextChild) {
              return nextChild.foreachOnPath_(pathPopFront(pathToFollow), pathChild(currentRelativePath, front), f);
            } else {
              return new _ImmutableTree(null);
            }
          }
        }
        /**
         * Calls the given function for each node in the tree that has a value.
         *
         * @param f - A function to be called with the path from the root of the tree to
         * a node, and the value at that node. Called in depth-first order.
         */
        foreach(f) {
          this.foreach_(newEmptyPath(), f);
        }
        foreach_(currentRelativePath, f) {
          this.children.inorderTraversal((childName, childTree) => {
            childTree.foreach_(pathChild(currentRelativePath, childName), f);
          });
          if (this.value) {
            f(currentRelativePath, this.value);
          }
        }
        foreachChild(f) {
          this.children.inorderTraversal((childName, childTree) => {
            if (childTree.value) {
              f(childName, childTree.value);
            }
          });
        }
      };
      CompoundWrite = class _CompoundWrite {
        constructor(writeTree_) {
          this.writeTree_ = writeTree_;
        }
        static empty() {
          return new _CompoundWrite(new ImmutableTree(null));
        }
      };
      ChildChangeAccumulator = class {
        constructor() {
          this.changeMap = /* @__PURE__ */ new Map();
        }
        trackChildChange(change) {
          const type = change.type;
          const childKey = change.childName;
          assert(type === "child_added" || type === "child_changed" || type === "child_removed", "Only child changes supported for tracking");
          assert(childKey !== ".priority", "Only non-priority child changes can be tracked.");
          const oldChange = this.changeMap.get(childKey);
          if (oldChange) {
            const oldType = oldChange.type;
            if (type === "child_added" && oldType === "child_removed") {
              this.changeMap.set(childKey, changeChildChanged(childKey, change.snapshotNode, oldChange.snapshotNode));
            } else if (type === "child_removed" && oldType === "child_added") {
              this.changeMap.delete(childKey);
            } else if (type === "child_removed" && oldType === "child_changed") {
              this.changeMap.set(childKey, changeChildRemoved(childKey, oldChange.oldSnap));
            } else if (type === "child_changed" && oldType === "child_added") {
              this.changeMap.set(childKey, changeChildAdded(childKey, change.snapshotNode));
            } else if (type === "child_changed" && oldType === "child_changed") {
              this.changeMap.set(childKey, changeChildChanged(childKey, change.snapshotNode, oldChange.oldSnap));
            } else {
              throw assertionError("Illegal combination of changes: " + change + " occurred after " + oldChange);
            }
          } else {
            this.changeMap.set(childKey, change);
          }
        }
        getChanges() {
          return Array.from(this.changeMap.values());
        }
      };
      NoCompleteChildSource_ = class {
        getCompleteChild(childKey) {
          return null;
        }
        getChildAfterChild(index, child, reverse) {
          return null;
        }
      };
      NO_COMPLETE_CHILD_SOURCE = new NoCompleteChildSource_();
      WriteTreeCompleteChildSource = class {
        constructor(writes_, viewCache_, optCompleteServerCache_ = null) {
          this.writes_ = writes_;
          this.viewCache_ = viewCache_;
          this.optCompleteServerCache_ = optCompleteServerCache_;
        }
        getCompleteChild(childKey) {
          const node = this.viewCache_.eventCache;
          if (node.isCompleteForChild(childKey)) {
            return node.getNode().getImmediateChild(childKey);
          } else {
            const serverNode = this.optCompleteServerCache_ != null ? new CacheNode(this.optCompleteServerCache_, true, false) : this.viewCache_.serverCache;
            return writeTreeRefCalcCompleteChild(this.writes_, childKey, serverNode);
          }
        }
        getChildAfterChild(index, child, reverse) {
          const completeServerData = this.optCompleteServerCache_ != null ? this.optCompleteServerCache_ : viewCacheGetCompleteServerSnap(this.viewCache_);
          const nodes = writeTreeRefCalcIndexedSlice(this.writes_, completeServerData, child, 1, reverse, index);
          if (nodes.length === 0) {
            return null;
          } else {
            return nodes[0];
          }
        }
      };
      SyncTree = class {
        /**
         * @param listenProvider_ - Used by SyncTree to start / stop listening
         *   to server data.
         */
        constructor(listenProvider_) {
          this.listenProvider_ = listenProvider_;
          this.syncPointTree_ = new ImmutableTree(null);
          this.pendingWriteTree_ = newWriteTree();
          this.tagToQueryMap = /* @__PURE__ */ new Map();
          this.queryToTagMap = /* @__PURE__ */ new Map();
        }
      };
      ExistingValueProvider = class _ExistingValueProvider {
        constructor(node_) {
          this.node_ = node_;
        }
        getImmediateChild(childName) {
          const child = this.node_.getImmediateChild(childName);
          return new _ExistingValueProvider(child);
        }
        node() {
          return this.node_;
        }
      };
      DeferredValueProvider = class _DeferredValueProvider {
        constructor(syncTree, path) {
          this.syncTree_ = syncTree;
          this.path_ = path;
        }
        getImmediateChild(childName) {
          const childPath = pathChild(this.path_, childName);
          return new _DeferredValueProvider(this.syncTree_, childPath);
        }
        node() {
          return syncTreeCalcCompleteEventCache(this.syncTree_, this.path_);
        }
      };
      generateWithValues = function(values) {
        values = values || {};
        values["timestamp"] = values["timestamp"] || (/* @__PURE__ */ new Date()).getTime();
        return values;
      };
      resolveDeferredLeafValue = function(value, existingVal, serverValues) {
        if (!value || typeof value !== "object") {
          return value;
        }
        assert(".sv" in value, "Unexpected leaf node or priority contents");
        if (typeof value[".sv"] === "string") {
          return resolveScalarDeferredValue(value[".sv"], existingVal, serverValues);
        } else if (typeof value[".sv"] === "object") {
          return resolveComplexDeferredValue(value[".sv"], existingVal);
        } else {
          assert(false, "Unexpected server value: " + JSON.stringify(value, null, 2));
        }
      };
      resolveScalarDeferredValue = function(op, existing, serverValues) {
        switch (op) {
          case "timestamp":
            return serverValues["timestamp"];
          default:
            assert(false, "Unexpected server value: " + op);
        }
      };
      resolveComplexDeferredValue = function(op, existing, unused) {
        if (!op.hasOwnProperty("increment")) {
          assert(false, "Unexpected server value: " + JSON.stringify(op, null, 2));
        }
        const delta = op["increment"];
        if (typeof delta !== "number") {
          assert(false, "Unexpected increment value: " + delta);
        }
        const existingNode = existing.node();
        assert(existingNode !== null && typeof existingNode !== "undefined", "Expected ChildrenNode.EMPTY_NODE for nulls");
        if (!existingNode.isLeafNode()) {
          return delta;
        }
        const leaf = existingNode;
        const existingVal = leaf.getValue();
        if (typeof existingVal !== "number") {
          return delta;
        }
        return existingVal + delta;
      };
      resolveDeferredValueTree = function(path, node, syncTree, serverValues) {
        return resolveDeferredValue(node, new DeferredValueProvider(syncTree, path), serverValues);
      };
      resolveDeferredValueSnapshot = function(node, existing, serverValues) {
        return resolveDeferredValue(node, new ExistingValueProvider(existing), serverValues);
      };
      Tree = class {
        /**
         * @param name - Optional name of the node.
         * @param parent - Optional parent node.
         * @param node - Optional node to wrap.
         */
        constructor(name3 = "", parent = null, node = { children: {}, childCount: 0 }) {
          this.name = name3;
          this.parent = parent;
          this.node = node;
        }
      };
      INVALID_KEY_REGEX_ = /[\[\].#$\/\u0000-\u001F\u007F]/;
      INVALID_PATH_REGEX_ = /[\[\].#$\u0000-\u001F\u007F]/;
      MAX_LEAF_SIZE_ = 10 * 1024 * 1024;
      isValidKey2 = function(key) {
        return typeof key === "string" && key.length !== 0 && !INVALID_KEY_REGEX_.test(key);
      };
      isValidPathString = function(pathString) {
        return typeof pathString === "string" && pathString.length !== 0 && !INVALID_PATH_REGEX_.test(pathString);
      };
      isValidRootPathString = function(pathString) {
        if (pathString) {
          pathString = pathString.replace(/^\/*\.info(\/|$)/, "/");
        }
        return isValidPathString(pathString);
      };
      validateFirebaseData = function(errorPrefix2, data, path_) {
        const path = path_ instanceof Path ? new ValidationPath(path_, errorPrefix2) : path_;
        if (data === void 0) {
          throw new Error(errorPrefix2 + "contains undefined " + validationPathToErrorString(path));
        }
        if (typeof data === "function") {
          throw new Error(errorPrefix2 + "contains a function " + validationPathToErrorString(path) + " with contents = " + data.toString());
        }
        if (isInvalidJSONNumber(data)) {
          throw new Error(errorPrefix2 + "contains " + data.toString() + " " + validationPathToErrorString(path));
        }
        if (typeof data === "string" && data.length > MAX_LEAF_SIZE_ / 3 && stringLength(data) > MAX_LEAF_SIZE_) {
          throw new Error(errorPrefix2 + "contains a string greater than " + MAX_LEAF_SIZE_ + " utf8 bytes " + validationPathToErrorString(path) + " ('" + data.substring(0, 50) + "...')");
        }
        if (data && typeof data === "object") {
          let hasDotValue = false;
          let hasActualChild = false;
          each(data, (key, value) => {
            if (key === ".value") {
              hasDotValue = true;
            } else if (key !== ".priority" && key !== ".sv") {
              hasActualChild = true;
              if (!isValidKey2(key)) {
                throw new Error(errorPrefix2 + " contains an invalid key (" + key + ") " + validationPathToErrorString(path) + `.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);
              }
            }
            validationPathPush(path, key);
            validateFirebaseData(errorPrefix2, value, path);
            validationPathPop(path);
          });
          if (hasDotValue && hasActualChild) {
            throw new Error(errorPrefix2 + ' contains ".value" child ' + validationPathToErrorString(path) + " in addition to actual children.");
          }
        }
      };
      validateUrl = function(fnName, parsedUrl) {
        const pathString = parsedUrl.path.toString();
        if (!(typeof parsedUrl.repoInfo.host === "string") || parsedUrl.repoInfo.host.length === 0 || !isValidKey2(parsedUrl.repoInfo.namespace) && parsedUrl.repoInfo.host.split(":")[0] !== "localhost" || pathString.length !== 0 && !isValidRootPathString(pathString)) {
          throw new Error(errorPrefix(fnName, "url") + `must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`);
        }
      };
      EventQueue = class {
        constructor() {
          this.eventLists_ = [];
          this.recursionDepth_ = 0;
        }
      };
      INTERRUPT_REASON = "repo_interrupt";
      MAX_TRANSACTION_RETRIES = 25;
      Repo = class {
        constructor(repoInfo_, forceRestClient_, authTokenProvider_, appCheckProvider_) {
          this.repoInfo_ = repoInfo_;
          this.forceRestClient_ = forceRestClient_;
          this.authTokenProvider_ = authTokenProvider_;
          this.appCheckProvider_ = appCheckProvider_;
          this.dataUpdateCount = 0;
          this.statsListener_ = null;
          this.eventQueue_ = new EventQueue();
          this.nextWriteId_ = 1;
          this.interceptServerDataCallback_ = null;
          this.onDisconnect_ = newSparseSnapshotTree();
          this.transactionQueueTree_ = new Tree();
          this.persistentConnection_ = null;
          this.key = this.repoInfo_.toURLString();
        }
        /**
         * @returns The URL corresponding to the root of this Firebase.
         */
        toString() {
          return (this.repoInfo_.secure ? "https://" : "http://") + this.repoInfo_.host;
        }
      };
      parseRepoInfo = function(dataURL, nodeAdmin) {
        const parsedUrl = parseDatabaseURL(dataURL), namespace = parsedUrl.namespace;
        if (parsedUrl.domain === "firebase.com") {
          fatal(parsedUrl.host + " is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead");
        }
        if ((!namespace || namespace === "undefined") && parsedUrl.domain !== "localhost") {
          fatal("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com");
        }
        if (!parsedUrl.secure) {
          warnIfPageIsSecure();
        }
        const webSocketOnly = parsedUrl.scheme === "ws" || parsedUrl.scheme === "wss";
        return {
          repoInfo: new RepoInfo(
            parsedUrl.host,
            parsedUrl.secure,
            namespace,
            webSocketOnly,
            nodeAdmin,
            /*persistenceKey=*/
            "",
            /*includeNamespaceInQueryParams=*/
            namespace !== parsedUrl.subdomain
          ),
          path: new Path(parsedUrl.pathString)
        };
      };
      parseDatabaseURL = function(dataURL) {
        let host = "", domain = "", subdomain = "", pathString = "", namespace = "";
        let secure = true, scheme = "https", port = 443;
        if (typeof dataURL === "string") {
          let colonInd = dataURL.indexOf("//");
          if (colonInd >= 0) {
            scheme = dataURL.substring(0, colonInd - 1);
            dataURL = dataURL.substring(colonInd + 2);
          }
          let slashInd = dataURL.indexOf("/");
          if (slashInd === -1) {
            slashInd = dataURL.length;
          }
          let questionMarkInd = dataURL.indexOf("?");
          if (questionMarkInd === -1) {
            questionMarkInd = dataURL.length;
          }
          host = dataURL.substring(0, Math.min(slashInd, questionMarkInd));
          if (slashInd < questionMarkInd) {
            pathString = decodePath(dataURL.substring(slashInd, questionMarkInd));
          }
          const queryParams = decodeQuery(dataURL.substring(Math.min(dataURL.length, questionMarkInd)));
          colonInd = host.indexOf(":");
          if (colonInd >= 0) {
            secure = scheme === "https" || scheme === "wss";
            port = parseInt(host.substring(colonInd + 1), 10);
          } else {
            colonInd = host.length;
          }
          const hostWithoutPort = host.slice(0, colonInd);
          if (hostWithoutPort.toLowerCase() === "localhost") {
            domain = "localhost";
          } else if (hostWithoutPort.split(".").length <= 2) {
            domain = hostWithoutPort;
          } else {
            const dotInd = host.indexOf(".");
            subdomain = host.substring(0, dotInd).toLowerCase();
            domain = host.substring(dotInd + 1);
            namespace = subdomain;
          }
          if ("ns" in queryParams) {
            namespace = queryParams["ns"];
          }
        }
        return {
          host,
          port,
          domain,
          subdomain,
          secure,
          scheme,
          pathString,
          namespace
        };
      };
      QueryImpl = class _QueryImpl {
        /**
         * @hideconstructor
         */
        constructor(_repo, _path, _queryParams, _orderByCalled) {
          this._repo = _repo;
          this._path = _path;
          this._queryParams = _queryParams;
          this._orderByCalled = _orderByCalled;
        }
        get key() {
          if (pathIsEmpty(this._path)) {
            return null;
          } else {
            return pathGetBack(this._path);
          }
        }
        get ref() {
          return new ReferenceImpl(this._repo, this._path);
        }
        get _queryIdentifier() {
          const obj = queryParamsGetQueryObject(this._queryParams);
          const id = ObjectToUniqueKey(obj);
          return id === "{}" ? "default" : id;
        }
        /**
         * An object representation of the query parameters used by this Query.
         */
        get _queryObject() {
          return queryParamsGetQueryObject(this._queryParams);
        }
        isEqual(other) {
          other = getModularInstance(other);
          if (!(other instanceof _QueryImpl)) {
            return false;
          }
          const sameRepo = this._repo === other._repo;
          const samePath = pathEquals(this._path, other._path);
          const sameQueryIdentifier = this._queryIdentifier === other._queryIdentifier;
          return sameRepo && samePath && sameQueryIdentifier;
        }
        toJSON() {
          return this.toString();
        }
        toString() {
          return this._repo.toString() + pathToUrlEncodedString(this._path);
        }
      };
      ReferenceImpl = class _ReferenceImpl extends QueryImpl {
        /** @hideconstructor */
        constructor(repo, path) {
          super(repo, path, new QueryParams(), false);
        }
        get parent() {
          const parentPath = pathParent(this._path);
          return parentPath === null ? null : new _ReferenceImpl(this._repo, parentPath);
        }
        get root() {
          let ref2 = this;
          while (ref2.parent !== null) {
            ref2 = ref2.parent;
          }
          return ref2;
        }
      };
      syncPointSetReferenceConstructor(ReferenceImpl);
      syncTreeSetReferenceConstructor(ReferenceImpl);
      FIREBASE_DATABASE_EMULATOR_HOST_VAR = "FIREBASE_DATABASE_EMULATOR_HOST";
      repos = {};
      useRestClient = false;
      Database = class {
        /** @hideconstructor */
        constructor(_repoInternal, app) {
          this._repoInternal = _repoInternal;
          this.app = app;
          this["type"] = "database";
          this._instanceStarted = false;
        }
        get _repo() {
          if (!this._instanceStarted) {
            repoStart(this._repoInternal, this.app.options.appId, this.app.options["databaseAuthVariableOverride"]);
            this._instanceStarted = true;
          }
          return this._repoInternal;
        }
        get _root() {
          if (!this._rootInternal) {
            this._rootInternal = new ReferenceImpl(this._repo, newEmptyPath());
          }
          return this._rootInternal;
        }
        _delete() {
          if (this._rootInternal !== null) {
            repoManagerDeleteRepo(this._repo, this.app.name);
            this._repoInternal = null;
            this._rootInternal = null;
          }
          return Promise.resolve();
        }
        _checkNotDeleted(apiName) {
          if (this._rootInternal === null) {
            fatal("Cannot call " + apiName + " on a deleted database.");
          }
        }
      };
      PersistentConnection.prototype.simpleListen = function(pathString, onComplete) {
        this.sendRequest("q", { p: pathString }, onComplete);
      };
      PersistentConnection.prototype.echo = function(data, onEcho) {
        this.sendRequest("echo", { d: data }, onEcho);
      };
      registerDatabase();
    }
  });

  // node_modules/firebase/database/dist/esm/index.esm.js
  var init_index_esm = __esm({
    "node_modules/firebase/database/dist/esm/index.esm.js"() {
      init_live_reload();
      init_index_esm20175();
    }
  });

  // src/components/mosaicScroll.ts
  var mosaicScroll_exports = {};
  __export(mosaicScroll_exports, {
    default: () => mosaicScroll_default,
    mosaicScroll: () => mosaicScroll
  });
  var mosaicScroll, mosaicScroll_default;
  var init_mosaicScroll = __esm({
    "src/components/mosaicScroll.ts"() {
      "use strict";
      init_live_reload();
      init_index_esm();
      init_gsap();
      mosaicScroll = () => {
        class MosaicScroll {
          constructor() {
            this.component = document.querySelector(".mosaic_component");
            this.svgBG = [...document.querySelectorAll(".mosaic_svg")].map((item) => item);
            this.images = [...document.querySelectorAll(".mosaic_img")].map(
              (item) => item
            );
            this.svgLayers = [...document.querySelectorAll(".mosaic_svg-group")].map(
              (item) => item
            );
            this.tracks = [...document.querySelectorAll(".mosaic_spacer")].map(
              (item) => item
            );
            this.getColors = [...document.querySelectorAll(".mosaic_color")];
            const colorRef = this.extractColors();
            this.bgColors = colorRef.filter((_, i) => i % 2 === 0);
            this.textColors = colorRef.filter((_, i) => i % 2 === 1);
            this.revealSection();
            this.setScroller();
          }
          setScroller() {
            for (let i = 0; i < this.tracks.length; i++) {
              const item = this.tracks[i];
              const tl = gsapWithCSS.timeline({
                scrollTrigger: {
                  trigger: item,
                  start: "top bottom",
                  end: "top top",
                  scrub: true,
                  onUpdate: (self2) => this.updateBackgroundTransition(self2.progress, i)
                  // markers: true,
                }
              });
              tl.fromTo(
                this.images[i],
                { opacity: 0, y: "4rem", rotateY: "20deg" },
                { opacity: 1, y: "0rem", rotateY: "0deg", ease: "linear" }
              );
            }
          }
          updateBackgroundTransition(progress, index) {
            if (index >= 0 && index < this.bgColors.length - 1) {
              const nextColor = this.bgColors[index + 1];
              const currentColor = this.bgColors[index];
              const nextText = this.textColors[index + 1];
              const currentText = this.textColors[index];
              gsapWithCSS.to(this.component, {
                backgroundColor: gsapWithCSS.utils.interpolate(currentColor, nextColor, progress),
                overwrite: true,
                duration: 0
              });
              gsapWithCSS.to(this.svgBG, {
                color: gsapWithCSS.utils.interpolate(currentText, nextText, progress),
                overwrite: true,
                duration: 0,
                ease: "linear"
              });
            }
          }
          revealSection() {
            const tl = gsapWithCSS.timeline({
              scrollTrigger: {
                trigger: this.component,
                start: "top 85%",
                end: "top 85%",
                // markers: true,
                toggleActions: "play none reverse none"
              }
            });
            tl.fromTo(
              this.svgLayers,
              { opacity: 0, y: "2rem" },
              { duration: 1.2, opacity: 1, y: "0rem", stagger: 0.2, ease: "power3.out" }
            );
          }
          extractColors() {
            const colorRef = [];
            this.getColors.forEach((item) => {
              const getItem = getComputedStyle(item);
              const getColor = getItem.backgroundColor;
              colorRef.push(getColor);
            });
            return colorRef;
          }
        }
        new MosaicScroll();
      };
      mosaicScroll_default = mosaicScroll;
    }
  });

  // src/components/shopSlider.ts
  var shopSlider_exports = {};
  __export(shopSlider_exports, {
    default: () => shopSlider_default,
    shopSlider: () => shopSlider
  });
  var shopSlider, shopSlider_default;
  var init_shopSlider = __esm({
    "src/components/shopSlider.ts"() {
      "use strict";
      init_live_reload();
      init_gsap();
      shopSlider = () => {
        class ShopSlider {
          constructor() {
            this.imageFeed = [...document.querySelectorAll(".slider_data-img")].map(
              (item) => item
            );
            this.bgImages = [...document.querySelectorAll(".shop_slider-img")].map(
              (item) => item
            );
            this.previewWraps = [...document.querySelectorAll(".slider_preview-wrap")].map(
              (item) => item
            );
            this.previewImages = [...document.querySelectorAll(".slider_preview-img")].map(
              (item) => item
            );
            this.pIndicators = [...document.querySelectorAll(".slider_preview-indicator")].map(
              (item) => item
            );
            this.labelCurrent = document.querySelector(
              ".slider_i-text.is-shop.is-current"
            );
            this.labelTotal = document.querySelector(".slider_i-text.is-shop.is-total");
            this.currentIndex = 0;
            this.rotationInterval = 5e3;
            this.setupImages();
            this.startRotation();
          }
          setupImages() {
            for (let i = 0; i < 4; i++) {
              const item = this.imageFeed[i];
              this.bgImages[i].src = item.src;
              this.previewImages[i].src = item.src;
              if (i !== 0) {
                gsapWithCSS.set(this.bgImages[i], { opacity: 0 });
              }
              this.labelTotal.textContent = this.formatNumber(this.bgImages.length);
            }
          }
          startRotation() {
            this.updateIndicator(this.currentIndex);
            this.updateImages(this.bgImages.length - 1, this.currentIndex);
            this.setActivePreview(this.currentIndex);
            this.updateTextElements();
            setInterval(() => {
              const previousIndex = this.currentIndex;
              this.currentIndex = (this.currentIndex + 1) % this.bgImages.length;
              this.updateIndicator(this.currentIndex);
              this.updateImages(previousIndex, this.currentIndex);
              this.setActivePreview(this.currentIndex);
              this.updateTextElements();
            }, this.rotationInterval);
          }
          updateImages(prevIndex, currentIndex) {
            gsapWithCSS.to(this.bgImages[prevIndex], { opacity: 0, duration: 1 });
            gsapWithCSS.to(this.bgImages[currentIndex], { opacity: 1, duration: 1 });
          }
          updateIndicator(currentIndex) {
            const tl = gsapWithCSS.timeline({
              onComplete: () => {
                gsapWithCSS.to(this.pIndicators[currentIndex], { duration: 0, x: "0%", ease: "linear" });
              }
            });
            tl.fromTo(
              this.pIndicators[currentIndex],
              { x: "0%" },
              {
                duration: this.rotationInterval / 1e3,
                x: "100%",
                ease: "linear"
              }
            );
          }
          setActivePreview(currentIndex) {
            this.previewWraps.forEach((wrap4, index) => {
              if (index !== currentIndex) {
                wrap4.classList.remove("is-active");
                gsapWithCSS.to(wrap4, { borderColor: "transparent", duration: 0.5 });
              }
            });
            this.previewWraps[currentIndex].classList.add("is-active");
            gsapWithCSS.to(this.previewWraps[currentIndex], { borderColor: "currentColor", duration: 0.5 });
          }
          updateTextElements() {
            this.labelCurrent.textContent = this.formatNumber(this.currentIndex + 1);
          }
          formatNumber(num) {
            return num < 10 ? `0${num}` : `${num}`;
          }
        }
        new ShopSlider();
      };
      shopSlider_default = shopSlider;
    }
  });

  // src/components/shop.ts
  var shop_exports = {};
  __export(shop_exports, {
    default: () => shop_default,
    shop: () => shop
  });
  var shop, shop_default;
  var init_shop = __esm({
    "src/components/shop.ts"() {
      "use strict";
      init_live_reload();
      shop = () => {
        class Shop {
          constructor() {
            this.shopItems = [...document.querySelectorAll(".shop_item")].map(
              (item) => item
            );
            this.setListeners();
          }
          setListeners() {
            this.shopItems.forEach((item) => {
              item.addEventListener("mouseover", () => {
                console.log("over");
              });
            });
          }
        }
      };
      shop_default = shop;
    }
  });

  // src/components/product.ts
  var product_exports = {};
  __export(product_exports, {
    default: () => product_default,
    productSlider: () => productSlider
  });
  var productSlider, product_default;
  var init_product = __esm({
    "src/components/product.ts"() {
      "use strict";
      init_live_reload();
      init_gsap();
      productSlider = () => {
        class ProductSlider {
          constructor() {
            this.previews = document.querySelectorAll(".p-slider_preview-item");
            this.sliderImages = document.querySelectorAll(".p-slider_img");
            this.activeIndex = 0;
            this.init();
          }
          init() {
            if (this.previews.length !== this.sliderImages.length) {
              console.error("Mismatch in number of preview and slider images.");
              return;
            }
            this.sliderImages.forEach((img, index) => {
              gsapWithCSS.set(img, { opacity: index === this.activeIndex ? 1 : 0 });
            });
            this.previews.forEach((preview, index) => {
              if (index === this.activeIndex) {
                preview.classList.add("is-active");
              } else {
                preview.classList.remove("is-active");
              }
              preview.addEventListener("click", () => this.handlePreviewClick(index));
            });
          }
          handlePreviewClick(index) {
            if (index === this.activeIndex) return;
            const currentImage = this.sliderImages[this.activeIndex];
            const nextImage = this.sliderImages[index];
            const currentPreview = this.previews[this.activeIndex];
            const nextPreview = this.previews[index];
            const tl = gsapWithCSS.timeline();
            tl.to(currentImage, { opacity: 0, duration: 0.5, ease: "power1.out" });
            tl.to(nextImage, { opacity: 1, duration: 0.5, ease: "power1.in" }, "<");
            currentPreview.classList.remove("is-active");
            nextPreview.classList.add("is-active");
            this.activeIndex = index;
          }
        }
        new ProductSlider();
      };
      product_default = productSlider;
    }
  });

  // src/components/banner.ts
  var banner_exports = {};
  __export(banner_exports, {
    banner: () => banner,
    default: () => banner_default
  });
  var banner, banner_default;
  var init_banner = __esm({
    "src/components/banner.ts"() {
      "use strict";
      init_live_reload();
      init_gsap();
      banner = () => {
        class Banner {
          constructor() {
            this.bannerTrack = document.querySelector(".banner_track");
            if (this.bannerTrack) this.setLiisteners();
          }
          setLiisteners() {
            this.bannerMove();
            window.addEventListener("resize", () => {
              this.bannerMove();
            });
          }
          bannerMove() {
            const movement = this.bannerTrack.clientWidth - window.innerWidth;
            const speed = 50;
            const dur = Math.abs(movement / speed);
            const tl = gsapWithCSS.timeline({ repeat: -1, yoyo: true });
            tl.to(this.bannerTrack, { duration: dur, x: -movement, ease: "linear" });
          }
        }
        new Banner();
      };
      banner_default = banner;
    }
  });

  // src/utils/formHandler.ts
  var formHandler_exports = {};
  __export(formHandler_exports, {
    default: () => formHandler_default,
    formHandler: () => formHandler
  });
  var formHandler, formHandler_default;
  var init_formHandler = __esm({
    "src/utils/formHandler.ts"() {
      "use strict";
      init_live_reload();
      init_gsap();
      formHandler = () => {
        class FormHandler {
          constructor() {
            this.formWrap = document.querySelector(".form_wrap");
            this.form = document.querySelector("[data-mail-form]");
            this.successElement = this.formWrap.querySelector(".form_success");
            this.errorElement = this.formWrap.querySelector(".form_error");
            this.formButton = this.form.querySelector("input[type=submit]");
            this.endpoint = this.form.action;
            this.setListener();
            this.resetFormStatus();
          }
          setListener() {
            this.form.addEventListener("submit", async (e) => {
              e.preventDefault();
              e.stopPropagation();
              const input = document.querySelector('input[data-name="Email"]');
              const email = input.value.trim();
              this.formButton.value = "Submitting...";
              if (!email || !this.isValidEmail(email)) {
                this.showError("Please enter a valid email");
                return;
              }
              const payload = { email };
              try {
                const response = await fetch(this.endpoint, {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(payload)
                });
                const data = await response.json();
                if (!response.ok) {
                  let err = data.error.detail;
                  const errTitle = data.error.title;
                  if (errTitle === "Member Exists") {
                    err = "You are already a member!";
                    this.errorElement.style.backgroundColor = "#F18A00";
                  } else {
                    this.errorElement.style.backgroundColor = "#751E03";
                  }
                  this.showError(err);
                } else {
                  this.showSuccess();
                }
              } catch (error2) {
                console.log("Network Error!!!", error2);
                this.showError("Network error. Please try again later.");
              }
            });
          }
          isValidEmail(email) {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailPattern.test(email);
          }
          showSuccess() {
            this.resetFormStatus();
            const tl = gsapWithCSS.timeline();
            tl.to(this.form, { display: "none" });
            tl.to(this.successElement, { display: "block" });
            this.formButton.value = "Submit";
          }
          showError(msg) {
            const errorText = this.errorElement.children[0];
            errorText.innerHTML = msg;
            gsapWithCSS.to(this.errorElement, { display: "block" });
            this.formButton.value = "Submit";
          }
          resetFormStatus() {
            gsapWithCSS.to(this.successElement, { display: "none" });
            gsapWithCSS.to(this.errorElement, { display: "none" });
          }
        }
        new FormHandler();
      };
      formHandler_default = formHandler;
    }
  });

  // src/index.ts
  init_live_reload();

  // src/components/shopify.ts
  init_live_reload();
  var DEFAULTS = {
    moneyFormat: "%24%7B%7Bamount%7D%7D",
    productSelector: ".product_buy",
    productIdAttr: "data-shopify-product-id",
    rootMargin: "300px",
    sdkUrl: "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js",
    alignment: "data-shopify-alignment"
  };
  var Shopify = class {
    constructor(options) {
      this.io = null;
      this.initialized = false;
      this.sdkLoaded = false;
      this.sdkPromise = null;
      // ---- internals ----
      this.onIntersect = (entries) => {
        console.log("intersect");
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          this.io?.unobserve(entry.target);
          this.ensureSdk().then(() => this.mount(entry.target));
        });
      };
      console.log("!!Shopify!!");
      if (!options?.domain || !options?.token) {
        throw new Error('Shopify: "domain" and "token" are required.');
      }
      this.opts = { ...DEFAULTS, ...options };
    }
    init() {
      console.log("init");
      if (this.initialized) return;
      this.initialized = true;
      const nodes = Array.from(
        document.querySelectorAll(`[${this.opts.productIdAttr}]`)
      );
      console.log("nodes", nodes);
      if (!nodes.length) return;
      this.io = new IntersectionObserver(this.onIntersect, { rootMargin: this.opts.rootMargin });
      nodes.forEach((el) => this.io.observe(el));
    }
    /** Clean up (optional) */
    destroy() {
      this.io?.disconnect();
      this.io = null;
    }
    ensureSdk() {
      if (this.sdkLoaded || window.ShopifyBuy && window.ShopifyBuy.UI) {
        this.sdkLoaded = true;
        return Promise.resolve();
      }
      return new Promise((resolve) => {
        const s = document.createElement("script");
        s.async = true;
        s.src = this.opts.sdkUrl;
        s.onload = () => {
          this.sdkLoaded = true;
          resolve();
        };
        document.head.appendChild(s);
        console.log("script", s);
      });
    }
    mount(node) {
      console.log("mount", node);
      const productId = node.getAttribute(this.opts.productIdAttr);
      console.log("!!!!", productId);
      if (!productId) return;
      console.log("SHOPIFY", productId);
      const client = window.ShopifyBuy.buildClient({
        domain: this.opts.domain,
        storefrontAccessToken: this.opts.token
      });
      const shopAlignment = node.getAttribute(this.opts.alignment) || "left";
      window.ShopifyBuy.UI.onReady(client).then((ui) => {
        ui.createComponent("product", {
          id: productId,
          node,
          moneyFormat: "%24%7B%7Bamount%7D%7D",
          options: {
            product: {
              styles: {
                product: {
                  "@media (min-width: 601px)": {
                    "max-width": "calc(25% - 20px)",
                    // 'margin-left': '20px',
                    "margin-bottom": "50px"
                  },
                  "text-align": shopAlignment
                  // display: 'flex',
                  // 'flex-direction': 'column',
                  // 'justify-content': 'flex-end',
                  // 'align-items': 'flex-end',
                },
                button: {
                  "font-family": "Quantico, sans-serif",
                  "font-weight": "bold",
                  "font-size": "16px",
                  "padding-top": "16px",
                  "padding-bottom": "16px",
                  color: "#E9ECF3",
                  "background-color": "#ff8c00",
                  ":hover": {
                    "background-color": "#0b7aa1"
                  },
                  ":focus": {
                    "background-color": "#0b7aa1"
                  },
                  "border-radius": "0px",
                  "padding-left": "32px",
                  "padding-right": "32px",
                  border: "0px solid #01071C !important"
                },
                quantityInput: {
                  "font-size": "16px",
                  "padding-top": "16px",
                  "padding-bottom": "16px",
                  "font-family": "Quantico, sans-serif",
                  "font-weight": "700",
                  color: "#FF8C00",
                  border: "0px solid #01071C",
                  "border-radius": "0px",
                  background: "#E9ECF3 !important"
                }
              },
              buttonDestination: "checkout",
              contents: {
                img: false,
                button: false,
                buttonWithQuantity: true,
                title: false,
                price: false
              },
              text: {
                button: "Buy Now"
              },
              googleFonts: ["Quantico"]
            },
            productSet: {
              styles: {
                products: {
                  "@media (min-width: 601px)": {
                    "margin-left": "-20px"
                  }
                }
              }
            },
            modalProduct: {
              contents: {
                img: false,
                imgWithCarousel: true,
                button: false,
                buttonWithQuantity: true
              },
              styles: {
                product: {
                  "@media (min-width: 601px)": {
                    "max-width": "100%",
                    "margin-left": "0px",
                    "margin-bottom": "0px"
                  }
                },
                button: {
                  "font-family": "Quantico, sans-serif",
                  "font-weight": "bold",
                  "font-size": "16px",
                  "padding-top": "16px",
                  "padding-bottom": "16px",
                  color: "#ff8c00",
                  ":hover": {
                    color: "#ff8c00",
                    "background-color": "#0b7aa1"
                  },
                  "background-color": "#0c87b3",
                  ":focus": {
                    "background-color": "#0b7aa1"
                  },
                  "border-radius": "0px",
                  "padding-left": "32px",
                  "padding-right": "32px",
                  border: "1px solid #01071C"
                },
                quantityInput: {
                  "font-size": "16px",
                  "padding-top": "16px",
                  "padding-bottom": "16px"
                }
              },
              googleFonts: ["Quantico"],
              text: {
                button: "Add to cart"
              }
            }
            // option: {},
            // // cart: false,
            // // toggle: false,
            // cart: {
            //   styles: {
            //     button: {
            //       'font-family': 'Quantico, sans-serif',
            //       'font-weight': 'bold',
            //       'font-size': '16px',
            //       'padding-top': '16px',
            //       'padding-bottom': '16px',
            //       color: '#ff8c00',
            //       ':hover': {
            //         color: '#ff8c00',
            //         'background-color': '#0b7aa1',
            //       },
            //       'background-color': '#0c87b3',
            //       ':focus': {
            //         'background-color': '#0b7aa1',
            //       },
            //       'border-radius': '0px',
            //     },
            //   },
            //   text: {
            //     total: 'Subtotal',
            //     button: 'Checkout',
            //   },
            //   googleFonts: ['Quantico'],
            // },
            // toggle: {
            //   styles: {
            //     toggle: {
            //       'font-family': 'Quantico, sans-serif',
            //       'font-weight': 'bold',
            //       'background-color': '#0c87b3',
            //       ':hover': {
            //         'background-color': '#0b7aa1',
            //       },
            //       ':focus': {
            //         'background-color': '#0b7aa1',
            //       },
            //     },
            //     count: {
            //       'font-size': '16px',
            //       color: '#ff8c00',
            //       ':hover': {
            //         color: '#ff8c00',
            //       },
            //     },
            //     iconPath: {
            //       fill: '#ff8c00',
            //     },
            //   },
            //   googleFonts: ['Quantico'],
            // },
          }
        });
      });
    }
  };
  var shopify = (options) => {
    const instance = new Shopify(options);
    instance.init();
    return instance;
  };
  var shopify_default = shopify;

  // src/index.ts
  init_verify();
  init_editorCheck();

  // src/utils/loadComponent.ts
  init_live_reload();
  var loadComponent = (selector3, importModule) => {
    const element = document.querySelector(selector3);
    if (element) {
      importModule().then((module) => {
        module.default();
      });
    }
  };

  // src/index.ts
  init_smoothScroll();
  init_verifyCookie();
  window.Webflow ||= [];
  window.Webflow.push(() => {
    console.log("/// Oakley ///");
    window.addEventListener("click", (e) => {
      console.log(e.target);
    });
    initSmoothScroll();
    const env = getWebflowEnv();
    const isEnv = env === "editor" || env === "preview";
    if (!isEnv) {
      if (!verifyCookie_default.isVerified()) {
        loadComponent(".verify_component", () => Promise.resolve().then(() => (init_verify(), verify_exports)));
      } else {
        hideVerifyComponent();
      }
    } else {
      hideVerifyComponent();
    }
    shopify_default({ domain: "8z7y38-9x.myshopify.com", token: "ab800f336b7f7dc65afdafcaf40cb884" });
    loadComponent(".nav_component", () => Promise.resolve().then(() => (init_nav(), nav_exports)));
    loadComponent(".transition_component", () => Promise.resolve().then(() => (init_pageTransition(), pageTransition_exports)));
    loadComponent(".cursor_component", () => Promise.resolve().then(() => (init_cursor(), cursor_exports)));
    loadComponent("[data-hover-video]", () => Promise.resolve().then(() => (init_hoverVideos(), hoverVideos_exports)));
    loadComponent(".overview_component", () => Promise.resolve().then(() => (init_scrollScale(), scrollScale_exports)));
    loadComponent(".slider_component", () => Promise.resolve().then(() => (init_mediaSlider(), mediaSlider_exports)));
    loadComponent(".mosaic_component", () => Promise.resolve().then(() => (init_mosaicScroll(), mosaicScroll_exports)));
    loadComponent(".shop-slider_component", () => Promise.resolve().then(() => (init_shopSlider(), shopSlider_exports)));
    loadComponent(".shop_component", () => Promise.resolve().then(() => (init_shop(), shop_exports)));
    loadComponent(".product_component", () => Promise.resolve().then(() => (init_product(), product_exports)));
    loadComponent(".banner_component", () => Promise.resolve().then(() => (init_banner(), banner_exports)));
    loadComponent("[data-mail-form]", () => Promise.resolve().then(() => (init_formHandler(), formHandler_exports)));
  });
})();
/*! Bundled license information:

gsap/gsap-core.js:
  (*!
   * GSAP 3.11.4
   * https://greensock.com
   *
   * @license Copyright 2008-2022, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.11.4
   * https://greensock.com
   *
   * Copyright 2008-2022, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/Observer.js:
  (*!
   * Observer 3.11.4
   * https://greensock.com
   *
   * @license Copyright 2008-2022, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/ScrollTrigger.js:
  (*!
   * ScrollTrigger 3.11.4
   * https://greensock.com
   *
   * @license Copyright 2008-2022, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/utils/paths.js:
  (*!
   * paths 3.11.4
   * https://greensock.com
   *
   * Copyright 2008-2022, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CustomEase.js:
  (*!
   * CustomEase 3.11.4
   * https://greensock.com
   *
   * @license Copyright 2008-2022, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/component/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/logger/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/database/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
*/
//# sourceMappingURL=index.js.map
