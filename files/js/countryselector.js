/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/countryselector/countryselector.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/countryselector/countryselector.ts":
/*!************************************************!*\
  !*** ./src/countryselector/countryselector.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function getLink(locale, lang) {
    if (lang) {
        var parts = locale.split('-');
        parts[0] = lang;
        locale = parts.join('-');
    }
    var hrefData = window.hrefData;
    if (hrefData) {
        var linkData = hrefData[locale];
        if (linkData) {
            var link = document.createElement("link");
            link.href = hrefData[locale];
            return link && link.href;
        }
        else {
            return null;
        }
    }
    //else fallback to href lang
    var hrefLink = document.querySelector("link[hreflang='" + locale + "']");
    return hrefLink && hrefLink.href;
}
function redirect(link) {
    var locale = link.language;
    var lang = window.__headerData.lang;
    return getLink(locale, lang) || getLink(locale) || getLink(locale, 'en') || link.url;
}
function createCountryLink(link) {
    var countryLinkHtml = "<li><a href=\"" + redirect(link) + "\">" + link.name + "</a></li>";
    return countryLinkHtml;
}
function createRegion(regionInfo) {
    var countries = "";
    regionInfo.links.forEach(function (link) {
        countries += createCountryLink(link);
    });
    var regionHtml = "\n    <div class=\"country-dropdown-list\">\n        <span>" + regionInfo.region + "</span>\n        <ul>\n            " + countries + "\n        </ul>\n    </div>";
    return regionHtml;
}
function createRegions(countryData) {
    var regionsHtml = "";
    countryData.regionInfo.forEach(function (region) {
        regionsHtml += createRegion(region);
    });
    return regionsHtml;
}
function createDropdown(showFlag, dropdown) {
    if (__countryData) {
        var data = __countryData;
        var flagImage = "";
        if (showFlag) {
            flagImage = "<img src=\"" + data.flag + "\" alt=\"" + data.flagAlt + "\" />";
        }
        dropdown.innerHTML = "\n        <div class=\"country-dropdown\">\n            <div>" + flagImage + data.country + "</div>\n            <div class=\"country-drawer closed\" id=\"country-drawer\">\n              <input id=\"country-input\" type=\"text\" value=\"\" />\n              " + createRegions(data) + "\n            </div>\n        </div>";
        // attach event listener to input for searching
        var ci = dropdown.querySelector('#country-input');
        if (ci) {
            ci.addEventListener('input', function (e) {
                countrySearch(dropdown);
            });
        }
    }
}
function closeDropdowns() {
    var drawers = document.querySelectorAll('#country-drawer');
    if (drawers) {
        drawers.forEach(function (drawer) {
            if (!drawer.classList.contains('closed')) {
                drawer.classList.add('closed');
                var input = drawer.querySelector('#country-input');
                if (input) {
                    input.value = "";
                    var event_1 = document.createEvent("Event");
                    event_1.initEvent("input", false, true);
                    input.dispatchEvent(event_1);
                }
            }
        });
    }
}
function toggleDropdown(dropdown) {
    var drawer = dropdown.querySelector('#country-drawer');
    if (drawer) {
        if (drawer.classList.contains('closed')) {
            drawer.classList.remove('closed');
        }
        else {
            closeDropdowns();
        }
    }
}
function countrySearch(dropdown) {
    var filter, txtValue;
    var input = dropdown.querySelector("#country-input");
    if (input) {
        filter = input.value.toUpperCase();
        var regions = document.querySelectorAll(".country-dropdown-list");
        regions.forEach(function (region) {
            var ul = region.querySelector("ul");
            if (ul) {
                var li = ul.getElementsByTagName("li");
                var matches = 0;
                for (var i = 0; i < li.length; i++) {
                    var a = li[i].getElementsByTagName("a")[0];
                    txtValue = a.textContent || a.innerText;
                    if (txtValue.toUpperCase().indexOf(filter) > -1) {
                        li[i].style.display = "";
                        matches++;
                    }
                    else {
                        li[i].style.display = "none";
                    }
                }
                if (matches > 0) {
                    region.style.display = "";
                }
                else {
                    region.style.display = "none";
                }
            }
        });
    }
}
function addClickEvent(e, el) {
    var cdbm = el.querySelector('.country-dropdown > div');
    if (cdbm) {
        cdbm.addEventListener('click', function (e) {
            toggleDropdown(el);
        });
    }
}
window.addEventListener('DOMContentLoaded', function (e) {
    var countryDropdownBtn = document.querySelector('#country-dropdown');
    var countryDropdownBtnMobile = document.querySelector('#country-dropdown-panel');
    createDropdown(true, countryDropdownBtnMobile);
    createDropdown(false, countryDropdownBtn);
    addClickEvent(e, countryDropdownBtn);
    addClickEvent(e, countryDropdownBtnMobile);
});
// Since .closest isn't supported in IE
function checkAncestorByClass(el, selector) {
    var documentEl = document.querySelector("." + selector);
    if (!documentEl) {
        return null;
    }
    if (el === documentEl) {
        return el;
    }
    var ancestor = el.parentElement;
    while (ancestor != null) {
        if (ancestor.classList != null && ancestor.classList.contains(selector)) {
            return ancestor;
        }
        ancestor = ancestor.parentElement;
    }
    return null;
}
document.addEventListener('click', function (e) {
    if (e.target instanceof Element && !checkAncestorByClass(e.target, 'country-dropdown')) {
        closeDropdowns();
    }
});


/***/ })

/******/ });
//# sourceMappingURL=countryselectorraw.js.map