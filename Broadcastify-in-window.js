// ==UserScript==
// @name         Broadcastify in the same window
// @namespace    http://tampermonkey.net/
// @version      2024-02-05
// @description  Changes the play button links to launch in the current window
// @author       Jarve1024
// @match        https://www.broadcastify.com/listen/*
// @icon         https://s.broadcastify.com/i/Facebook-Icon.png
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    Array.from(document.getElementsByClassName("button-play")).forEach(
        function(element, index, array) {
                var hr = element.href;
                var firstIndex=hr.indexOf('\'')+1;
                var secIndex =hr.substring(firstIndex).indexOf('\'') + firstIndex;
                var dest = hr.substring(firstIndex,secIndex);
                element.href = "https://www.broadcastify.com" + dest;
            }
        )
    }
    )();
