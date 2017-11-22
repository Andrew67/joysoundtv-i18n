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

// Translate global strings
domReplaceTextInHtmlIfExists('p.copyright', /.*※当サイトのすべての文章や画像などの無断転載・引用を禁じます。/, "※ Unauthorized reproduction of this website's content is forbidden.");

// Translate the login page (by detecting the login header)
if (domNodeExists('h2.subtitle.login')) {
    domReplaceTextInHtmlIfExists('title', 'ログイン', 'Log In');
    domReplaceTextIfExists('h2.subtitle.login', '', 'Log In');
    domReplaceTextIfExists('h3.subtitle.gy', 'パスワード', 'Password (パスワード)');
    domReplaceTextIfExists('h3.subtitle.gy', 'かんたんログイン', 'Easy Login');
    domReplaceTextInHtmlIfExists('p.mb30', 'ログイン状態を保持する', '<label for="el">Stay logged in</label>');
    domReplaceTextIfExists('ul.kome > li', 'ログアウト', '※ Logging out will undo the "Stay logged in" option.');
    domAddClassIfExists('p.btn', '', 'loginBtn');
    domReplaceTextInHtmlIfExists('.loginBtn > a', /.*/, '<span>Log In</span>');

    domReplaceTextInHtmlIfExists('p.message', /.*パスワードが間違っています.*/, 'The Password is incorrect.<br>(QR Codes are valid from one hour after they are issued. Please enter a reissued QR Code or Password.)');
    domReplaceTextInHtmlIfExists('p.message', /.*有効期限が切れています.*/, 'The QR Code or Password you have entered is expired.<br>Please enter a reissued QR Code or Password.');
    domReplaceTextIfExists('p.message', 'パスワードを入力してください。', 'Please enter a Password.');
}

// Translate main menu page (by detecting the categories header)
if (domNodeExists('h2.subtitle.pp')) {
    domReplaceTextIfExists('h2.subtitle.bl', '', 'Search Menu');
    domReplaceTextIfExists('h2.subtitle.pp', '', 'Categories');
    domReplaceTextIfExists('h2.subtitle.gr', '', 'My Data');
}

// Translate search form
if (domNodeExists('[name=webtool_search_form]')) {
    domReplaceTextIfExists('select.genre > option[value="0"]', '', 'Select a genre');
    domReplaceTextIfExists('select.genre > option[value="8"]', '', 'Anime / Tokusatsu');
    domReplaceTextIfExists('select.genre > option[value="9"]', '', 'Video Games');
    domReplaceTextIfExists('select.genre > option[value="28"]', '', 'TV Dramas');
    domReplaceTextIfExists('select.genre > option[value="42"]', '', 'TV / Radio');
    domReplaceTextIfExists('select.genre > option[value="44"]', '', 'Movies');
    domReplaceTextIfExists('select.genre > option[value="2"]', '', 'Western');
    domReplaceTextIfExists('select.genre > option[value="5"]', '', 'Musicals');
    domReplaceTextIfExists('select.genre > option[value="17"]', '', 'Pop');
    domReplaceTextIfExists('select.genre > option[value="16"]', '', 'Rock');
    domReplaceTextIfExists('select.genre > option[value="19"]', '', 'R&B / Soul / Hip-Hop');
    domReplaceTextIfExists('select.genre > option[value="29"]', '', 'Medley');
    domReplaceTextIfExists('select.genre > option[value="30"]', '', 'Sports');
    domReplaceTextIfExists('select.genre > option[value="32"]', '', 'Wedding');
    domReplaceTextIfExists('select.genre > option[value="31"]', '', 'Christmas');
    domReplaceTextIfExists('select.genre > option[value="33"]', '', 'Choir');
    domReplaceTextIfExists('select.genre > option[value="22"]', '', 'Kids');
    domReplaceTextIfExists('select.genre > option[value="12"]', '', "Folk (Min'you / Enka / Kayoukyoku)");

    domReplaceTextIfExists('#match_type_partial_label', '', 'Contains');
    domReplaceTextIfExists('#match_type_head_label', '', 'Starts with');
    domReplaceTextInHtmlIfExists('.search_btn > a', /.*/, '🔍 Search');
}

// Translate search results (by detecting the pager)
if (domNodeExists('span#paging_root')) {
    domAddClassIfExists('title', '', 'hasSearchParam');
    domAddClassIfExists('h2.subtitle.bl', 'で検索中', 'hasSearchParam');
    domReplaceTextInHtmlIfExists('.hasSearchParam', /「(.*)」で検索中/, 'Searching for: $1');
    domReplaceTextInHtmlIfExists('#paging_root > p.mb10.clear', /1件\((.*)件目表示\)/, '1 result');
    domReplaceTextInHtmlIfExists('#paging_root > p.mb10.clear', /(.*)件\((.*)件目表示\)/, '$1 results (displaying $2)');
    domReplaceTextInHtmlIfExists('.pagenav .prev a', /前の(.*)件/, ' Previous $1');
    domReplaceTextInHtmlIfExists('.pagenav .next a', /次の(.*)件/, 'Next $1 ');
}