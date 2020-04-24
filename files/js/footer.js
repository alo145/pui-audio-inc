// JavaScript source code
function runFooterScript() {
    var __footerLayout = {
        body : document.getElementsByTagName('body')[0],
        headerDiv : document.getElementsByClassName('header')[0],
        footerDiv : document.getElementsByClassName('footer')[0],
        isiDevice : /ipad|iphone|ipod/i.test(navigator.userAgent.toLowerCase()),
        isAndroid : /android/i.test(navigator.userAgent.toLowerCase()),
        feedbackButton : document.querySelector('.footer #feedback'),
        optGlobalVar : document.getElementsByClassName('.optimizely-info')[0],
        readCookie : function (name) {
            "use strict";
            var nameEQ = name + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') c = c.substring(1, c.length);
                if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
            }
            return null;
        },
        checkVisible : function (elm) {
            "use strict";
            var rect = elm.getBoundingClientRect();
            var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
            return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
        },

        moveFeedback : function () {
            var feedback = document.getElementById("floater");
            if (!__footerLayout.checkVisible(__footerLayout.footerDiv) && document.querySelector('.floating')) {
                feedback.className = feedback.className.replace('floating', '')
            } else if (__footerLayout.checkVisible(__footerLayout.footerDiv) && !document.querySelector('.floating')) {
                feedback.className = feedback.className + ' floating';
            }
        },
        setFullsite : function () {
            __footerLayout.body.className += ' fullsite';
            __footerLayout.headerDiv.className = __footerLayout.headerDiv.className.replace('resp', '')
            __footerLayout.footerDiv.className = __footerLayout.footerDiv.className.replace('resp', '')
        },
        sendFeedback : function () {
            if(window.optimizely && window.optimizely.data && document.querySelectorAll('script[src*="//cdn.optimizely.com"]').length > 0) {
                var optExpName;
                var optExpVar;
                var optExpNum = 1;
                var optimizelyTest = "";
                var activeExps = optimizely.get("state").getActiveExperimentIds();
                if(Object.keys(activeExps).length > 0 && typeof activeExps !== "undefined") {
                    for(var i = activeExps.length - 1; i >= 0; i--) {
                        var exp = activeExps[i];
                        optExpName = optimizely.get("data").experiments[exp].name;
                        optExpVar = optimizely.get("state").getVariationMap()[exp].name;
                        optExpName = optExpName.replace(/[^\w-]/gi, '+');
                        optExpVar = optExpVar.replace(/[^\w]/gi, '+');
                        optimizelyTest += "&optExpName"+optExpNum+"="+optExpName+"&optExpVar"+optExpNum+"="+optExpVar;  
                        optExpNum++;
                    }
                } else {
                    // NO ACTIVE EXPERIMENTS
                    optimizelyTest = "";
                }
            } else {
                // NO OR INCORRECT OPTIMIZELY SNIPPET
                optimizelyTest = "";
            }

            // IF __headerData is undefined, use utag_data instead.  If utag_data is undefined, use simplified link.
            if(typeof __headerData !== "undefined") {
                var feedbackURL = "https://surveydirector.qualtrics.com/SD/?Q_SDID=SD_3UhijQGKDeuapz7&domain="+__headerData.site+"&lang="+__headerData.lang+"&currency="+__headerData.cur+"&url="+location+optimizelyTest;
                window.open(feedbackURL, '_blank');
            } else if(typeof utag_data !== "undefined") {
                var feedbackURL = "https://surveydirector.qualtrics.com/SD/?Q_SDID=SD_3UhijQGKDeuapz7&domain="+utag_data.page_site+"&lang="+utag_data.page_language+"&url="+location+optimizelyTest;
                window.open(feedbackURL, '_blank');
            } else {
                var feedbackURL = "https://surveydirector.qualtrics.com/SD/?Q_SDID=SD_3UhijQGKDeuapz7&url="+location+optimizelyTest;
                window.open(feedbackURL, '_blank');
            }
        }
    }

    //feedback and live chat float triggers
    if (document.getElementById("floater")) {
        window.addEventListener('scroll', __footerLayout.moveFeedback);
        window.onload = __footerLayout.moveFeedback();
    }

    if (document.querySelector('.footer #feedback')) {
        __footerLayout.feedbackButton.addEventListener('click', __footerLayout.sendFeedback);    
    }
}

function waitForElementToDisplay(selector, time) {
  if(document.querySelector(selector)!=null) {
    runFooterScript();
    return;
  }
  else {
    setTimeout(function() {
      waitForElementToDisplay(selector, time);
    }, time);
  }
} waitForElementToDisplay("#footer", 250);