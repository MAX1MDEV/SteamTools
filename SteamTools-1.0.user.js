// ==UserScript==
// @name         SteamTools
// @author       MaximDev
// @namespace    MAX1MDEV
// @version      1.0
// @match        https://store.steampowered.com/wishlist/id/*
// @description  SteamTools
// @icon         https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/768px-Steam_icon_logo.svg.png
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let isRunning = false;
    let intervalId;
    const menu = document.createElement('div');
    menu.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: #1b2838;
        padding: 10px;
        border-radius: 5px;
        z-index: 9999;
    `;
    const button = document.createElement('button');
    button.textContent = 'Начать';
    button.style.cssText = `
        background-color: #66c0f4;
        color: white;
        border: none;
        padding: 5px 10px;
        border-radius: 3px;
        cursor: pointer;
    `;
    menu.appendChild(button);
    document.body.appendChild(menu);
    function removeGames() {
        const buttons = document.querySelectorAll('button.nK8lTB5HZ5o-.Focusable');
        buttons.forEach(button => button.click());
    }
    button.addEventListener('click', function() {
        if (!isRunning) {
            isRunning = true;
            button.textContent = 'Остановить';
            button.style.backgroundColor = '#d94126';

            intervalId = setInterval(removeGames, 1000);
            removeGames();
        } else {
            isRunning = false;
            button.textContent = 'Начать';
            button.style.backgroundColor = '#66c0f4';

            clearInterval(intervalId);
        }
    });
})();