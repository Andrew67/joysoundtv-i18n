/*! joysoundtv-i18n | https://github.com/Andrew67/joysoundtv-i18n */
/*
    Copyright (c) 2017 Andrés Cordero

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
"use strict";

/** Checks whether the given selector matches at least one node. */
function domNodeExists (selector) {
    return document.querySelector(selector) !== null;
}

/**
 * Replaces the matching elements' innerText if they exist.
 * @param selector - Query selector.
 * @param containsText - Text to search for (does not need to be complete).
 * @param newText - Replacement text, which completely replaces the old innerText.
 */
function domReplaceTextIfExists (selector, containsText, newText) {
    const nodes = document.querySelectorAll(selector);
    for (let node of nodes) {
        if (node.innerText.includes(containsText)) {
            node.innerText = newText;
        }
    }
}

/**
 * Replaces the matching elements' innerText if they exist.
 * @param selector - Query selector.
 * @param map - Map of original text (must match entirely) to new text mapping.
 */
function domReplaceTextUsingMapIfExists (selector, map) {
    const nodes = document.querySelectorAll(selector);
    for (let node of nodes) {
        if (map.has(node.innerText.trim())) {
            node.innerText = map.get(node.innerText);
        }
    }
}

/**
 * Replaces the matching elements' innerHTML with the given child tag and inner text.
 * @param selector - Query selector.
 * @param childTag - Type of child tag to inject (DOM_A / DOM_SPAN; default is DOM_SPAN).
 * @param newText - Replacement text, which will show in place of old contents.
 */
const DOM_A = 'a', DOM_SPAN = 'span';
function domReplaceWithChildTagIfExists (selector, childTag, newText) {
    const nodes = document.querySelectorAll(selector);
    for (let node of nodes) {
        const newChildNode = document.createElement((childTag === DOM_A) ? 'a' : 'span');
        newChildNode.innerText = newText;
        node.innerHTML = '';
        node.appendChild(newChildNode);
    }
}

/**
 * Replaces the matching elements' innerHTML if they exist.
 * @param selector - Query selector.
 * @param oldText - Text to replace (in it's entirety, or a regex).
 * @param newText - Replacement text, which replaces oldText (can use regex matching).
 */
function domReplaceTextInHtmlIfExists (selector, oldText, newText) {
    const nodes = document.querySelectorAll(selector);
    for (let node of nodes) {
        if ((typeof oldText === 'string' && node.innerHTML.includes(oldText)) ||
            (oldText instanceof RegExp && node.innerHTML.match(oldText))) {
            node.innerHTML = node.innerHTML.replace(oldText, newText);
        }
    }
}

/**
 * Adds the given class to matching elements.
 * @param selector - Query selector
 * @param containsText - Text to search for (does not need to be complete)
 * @param className - Class to add
 */
function domAddClassIfExists (selector, containsText, className) {
    const nodes = document.querySelectorAll(selector);
    for (let node of nodes) {
        if (node.innerText.includes(containsText)) {
            node.classList.add(className);
        }
    }
}

/**
 * Escapes key HTML entities in the given string.
 * @param unescapedString
 * @returns string
 */
function htmlEntities (unescapedString) {
    if (unescapedString) return unescapedString.replace(/&/g, '&amp;').replace(/</g, '&lt;');
    else return '';
}