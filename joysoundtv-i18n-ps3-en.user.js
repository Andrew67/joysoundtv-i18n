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

// Translate the login page (by detecting the login header)
if (domNodeExists('h2.subtitle.login')) {
    domReplaceTextInHtmlIfExists('title', 'ログイン', 'Log In');
    domReplaceTextIfExists('h2.subtitle.login', '', 'Log In');
    domReplaceTextIfExists('h3.subtitle.gy', 'パスワード', 'Password (パスワード)');
    domReplaceTextIfExists('h3.subtitle.gy', 'かんたんログイン', 'Easy Login');
    domReplaceTextInHtmlIfExists('p.mb30', 'ログイン状態を保持する', 'Stay logged in');
    domReplaceTextIfExists('ul.kome > li', 'ログアウト', '※ Logging out will undo the "Stay logged in" option.');
    domAddClassIfExists('p.btn', '', 'loginBtn');
    domReplaceTextIfExists('.loginBtn > a', '', 'Log In');
    domReplaceTextInHtmlIfExists('p.copyright', /.*※当サイトのすべての文章や画像などの無断転載・引用を禁じます。/, "※ Unauthorized reproduction of this website's content is forbidden.");

    domReplaceTextInHtmlIfExists('p.message', /.*パスワードが間違っています.*/, 'The Password is incorrect.<br>(QR Codes are valid from one hour after they are issued. Please enter a reissued QR Code or Password.)');
    domReplaceTextInHtmlIfExists('p.message', /.*有効期限が切れています.*/, 'The QR Code or Password you have entered is expired.<br>Please enter a reissued QR Code or Password.');
    domReplaceTextIfExists('p.message', 'パスワードを入力してください。', 'Please enter a Password.');
}

// Translate main menu page (by detecting search form)
if (domNodeExists('[name=webtool_search_form]')) {
    domReplaceTextIfExists('h2.subtitle.bl', '', 'Search Menu');
    domReplaceTextIfExists('h2.subtitle.pp', '', 'Categories');
    domReplaceTextIfExists('h2.subtitle.gr', '', 'My Data');

    domReplaceTextIfExists('option[value="0"]', '', 'Select a genre');
    domReplaceTextIfExists('option[value="8"]', '', 'Anime / Tokusatsu');
    domReplaceTextIfExists('option[value="9"]', '', 'Video Games');
    domReplaceTextIfExists('option[value="28"]', '', 'TV Dramas');
    domReplaceTextIfExists('option[value="42"]', '', 'TV / Radio');
    domReplaceTextIfExists('option[value="44"]', '', 'Movies');
    domReplaceTextIfExists('option[value="2"]', '', 'Western');
    domReplaceTextIfExists('option[value="5"]', '', 'Musicals');
    domReplaceTextIfExists('option[value="17"]', '', 'Pop');
    domReplaceTextIfExists('option[value="16"]', '', 'Rock');
    domReplaceTextIfExists('option[value="19"]', '', 'R&B / Soul / Hip-Hop');
    domReplaceTextIfExists('option[value="29"]', '', 'Medley');
    domReplaceTextIfExists('option[value="30"]', '', 'Sports');
    domReplaceTextIfExists('option[value="32"]', '', 'Wedding');
    domReplaceTextIfExists('option[value="31"]', '', 'Christmas');
    domReplaceTextIfExists('option[value="33"]', '', 'Choir');
    domReplaceTextIfExists('option[value="22"]', '', 'Kids');
    domReplaceTextIfExists('option[value="12"]', '', "Folk (Min'you / Enka / Kayoukyoku)");

    domReplaceTextIfExists('#match_type_partial_label', '', 'Contains');
    domReplaceTextIfExists('#match_type_head_label', '', 'Starts with');
}