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

/** Genre translations (used for drop-down and search results page) */
const genres = new Map([
    ['ジャンルを選ぶ', 'Select a genre'],
    ['アニメ/特撮', 'Anime / Tokusatsu'],
    ['ゲーム', 'Video Games'],
    ['VOCALOID', 'VOCALOID'],
    ['TVドラマ', 'TV Dramas'],
    ['TV･ラジオ', 'TV / Radio'],
    ['CM', 'CM'],
    ['映画', 'Movies'],
    ['洋楽', 'Western'],
    ['K-POP', 'K-POP'],
    ['ミュージカル', 'Musicals'],
    ['ポップス', 'Pop'],
    ['ロック', 'Rock'],
    ['R＆B/ソウル/ヒップホップ', 'R&B / Soul / Hip-Hop'],
    ['メドレー', 'Medley'],
    ['スポーツ/応援歌', 'Sports'],
    ['ウェディング', 'Wedding'],
    ['クリスマス', 'Christmas'],
    ['合唱', 'Choir'],
    ['童謡/唱歌/キッズ', 'Kids'],
    ['民謡/演歌/歌謡曲', "Folk (Min'you / Enka / Kayoukyoku)"]
]);

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
    domReplaceTextUsingMapIfExists('select.genre > option', genres);
    domReplaceTextInHtmlIfExists('#search_type_song span', /.*/, '<a>Name</a>');
    domReplaceTextInHtmlIfExists('#search_type_artist span', /.*/, '<a>Artist</a>');
    domReplaceTextInHtmlIfExists('#search_type_keyword span', /.*/, '<a>Keyword</a>');
    domReplaceTextInHtmlIfExists('#search_type_karaoke_id span', /.*/, '<a>Song ID</a>');
    domReplaceTextIfExists('#match_type_partial_label', '', 'Contains');
    domReplaceTextIfExists('#match_type_head_label', '', 'Starts with');
    domReplaceTextInHtmlIfExists('.search_btn > a', /.*/, '<span>Search</span>');
}

// Translate search query (can appear in main page as well as search results page)
domAddClassIfExists('title', 'で検索中', 'hasSearchParam');
domAddClassIfExists('h2.subtitle.bl', 'で検索中', 'hasSearchParam');
domReplaceTextInHtmlIfExists('.hasSearchParam', /「(.*)」で検索中/, 'Searching for: $1');

// Genre search
domAddClassIfExists('title', 'を検索中', 'hasSearchParam');
domAddClassIfExists('h2.subtitle.bl', 'を検索中', 'hasSearchParam');
domReplaceTextInHtmlIfExists('.hasSearchParam', /「(.*)」を検索中/, function (match, p1) {
    if (genres.has(p1)) return 'Searching for genre: ' + genres.get(p1);
    return 'Searching for: ' + p1;
});

// Translate search results page items (by detecting the pager)
if (domNodeExists('span#paging_root')) {
    domReplaceTextInHtmlIfExists('#paging_root > p.mb10.clear', /^1件\((.*)件目表示\)/, '1 result');
    domReplaceTextInHtmlIfExists('#paging_root > p.mb10.clear', /(.*)件\((.*)件目表示\)/, '$1 results (displaying $2)');
    domReplaceTextInHtmlIfExists('.pagenav .prev a', /前の(.*)件/, ' Previous $1');
    domReplaceTextInHtmlIfExists('.pagenav .next a', /次の(.*)件/, 'Next $1 ');
}