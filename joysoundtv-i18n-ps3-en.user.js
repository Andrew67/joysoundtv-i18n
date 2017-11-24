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

/** Category translations (used for main page buttons, big button drop-down and results pages) */
const categories = new Map([
    ['総合ランキング', 'Overall Rank'],
    ['ジャンル別ランキング', 'Rankings by Genre'],
    ['新着曲', 'New Arrivals'],
    ['特集', 'Featured'],
    ['いままでの特集', 'Featured']
]);

/** Months (used for new arrivals) */
const months = ['', 'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];

// Translate global strings
domReplaceTextInHtmlIfExists('p.copyright', /.*※当サイトのすべての文章や画像などの無断転載・引用を禁じます。/,
    "※ Unauthorized reproduction of this website's content is forbidden.");
domReplaceTextIfExists('a', 'はい', 'Yes');
domReplaceTextIfExists('a', 'いいえ', 'No');
domReplaceTextIfExists('ul#gnav > li.g01 > a', '', 'How-to');
domReplaceTextIfExists('ul#gnav > li.g02 > a', '', 'Categories');
domReplaceTextUsingMapIfExists('ul#gnav > li.g02 > ul.sub a', categories);
domReplaceTextIfExists('ul#gnav > li.g03 > a', '', 'My Data');
domReplaceTextIfExists('ul#gnav > li.g04 > a', '', 'Queue');
domReplaceTextIfExists('ul#gnav > li.g05 > a', '', 'Search');

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

    domReplaceTextInHtmlIfExists('p.message', /.*パスワードが間違っています.*/,
        'The Password is incorrect.<br>(QR Codes are valid from one hour after they are issued. Please enter a reissued QR Code or Password.)');
    domReplaceTextInHtmlIfExists('p.message', /.*有効期限が切れています.*/,
        'The QR Code or Password you have entered is expired.<br>Please enter a reissued QR Code or Password.');
    domReplaceTextIfExists('p.message', 'パスワードを入力してください。', 'Please enter a Password.');
}

// Translate main menu page (by detecting the categories header)
if (domNodeExists('h2.subtitle.pp')) {
    domReplaceTextIfExists('h2.subtitle.bl', '', 'Search Menu');

    domReplaceTextIfExists('h2.subtitle.pp', '', 'Categories');
    domReplaceTextInHtmlIfExists('ul.info li.i01 a', /.*/, '<span>' + categories.get('総合ランキング') + '</span>');
    domReplaceTextInHtmlIfExists('ul.info li.i02 a', /.*/, '<span>' + categories.get('新着曲') + '</span>');
    domReplaceTextInHtmlIfExists('ul.info li.i03 a', /.*/, '<span>' + categories.get('ジャンル別ランキング') + '</span>');
    domReplaceTextInHtmlIfExists('ul.info li.i04 a', /.*/, '<span>' + categories.get('特集') + '</span>');

    domReplaceTextIfExists('h2.subtitle.gr', '', 'My Data');
    domReplaceTextInHtmlIfExists('ul.mydata li.m01 a', /.*/, '<span>My Songs</span>');
    domReplaceTextInHtmlIfExists('ul.mydata li.m02 a', /.*/, '<span>My Artists</span>');
    domReplaceTextInHtmlIfExists('ul.mydata li.m03 a', /.*/, '<span>History</span>');
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
// TODO: Use URLSearchParams to parse out search parameter from URL, as the page one cuts off after 10 characters
domAddClassIfExists('title', '', 'hasSearchParam');
domAddClassIfExists('h2.subtitle.bl', '', 'hasSearchParam');
domAddClassIfExists('h2.subtitle.pp02', '', 'hasSearchParam');
domReplaceTextInHtmlIfExists('.hasSearchParam', /「(.*)」で検索中/, 'Searching for: $1');

// Genre search
domReplaceTextInHtmlIfExists('.hasSearchParam', /「(.*)」を検索中/, function (match, p1) {
    if (genres.has(p1)) return 'Searching for genre: ' + genres.get(p1);
    return 'Searching for: ' + p1;
});

// Translate search results page items (by detecting the pager)
if (domNodeExists('span#paging_root')) {
    // Song ID search
    // TODO: Use URLSearchParams to parse out search parameter from URL, as the song ID search does not show it at all
    domAddClassIfExists('title', '選曲番号検索', 'hasSearchParam');
    domAddClassIfExists('h2.subtitle.bl', '選曲番号検索', 'hasSearchParam');
    domReplaceTextInHtmlIfExists('.hasSearchParam', /選曲番号検索/, 'Song ID Search');

    // Navigation
    domReplaceTextInHtmlIfExists('#paging_root > p.mb10.clear', /^1件\((.*)件目表示\)/, '1 result');
    domReplaceTextInHtmlIfExists('#paging_root > p.mb10.clear', /(.*)件\((.*)件目表示\)/, '$1 results (displaying $2)');
    domReplaceTextInHtmlIfExists('.pagenav .prev a', /前の(.*)件/, ' Previous $1');
    domReplaceTextInHtmlIfExists('.pagenav .next a', /次の(.*)件/, 'Next $1 ');
    domReplaceTextIfExists('p.mark_ps3', '採点不可', 'Scoring unavailable');

    // Hide the rank kanji for ranking lists
    domReplaceTextInHtmlIfExists('li.item_song_option p.ranking', '位', '');

    // Song queue header and options
    domReplaceTextInHtmlIfExists('title', '予約一覧', 'Queue');
    domReplaceTextIfExists('h2.subtitle.ye', '予約一覧', 'Queue');
    domReplaceTextIfExists('.reserve_list a', '選択削除', 'Delete selected');
    domReplaceTextIfExists('#schedule_selectdel_confirm h2', '', 'Delete selected songs from the queue?');
    domReplaceTextIfExists('.reserve_list a', 'すべて削除', 'Delete all');
    domReplaceTextIfExists('#schedule_del_confirm h2', '', 'Delete all songs from the queue?');

    // Song action items
    domReplaceTextIfExists('.data th', '歌い出し', 'First line');
    domReplaceTextIfExists('.data th', 'タイアップ', 'Tie-in');

    domReplaceTextIfExists('.result_btn.keyset dt', '', '● Reserve');

    domReplaceTextIfExists('.reserve_m.key .key_t', 'キー設定', 'Key');
    domReplaceTextIfExists('.reserve_m.key .key_btn option[value="0"]', '', '0 (Original)');
    domReplaceTextIfExists('.reserve_m.key .set_originalkey_selectbox_process > a', '', 'Reset');

    domReplaceTextIfExists('.reserve_m.key .key_t', '曲タイプ', 'Video');
    domReplaceTextIfExists('.reserve_m.key .key_btn option[value="sound"]', '', 'Off');
    domReplaceTextIfExists('.reserve_m.key .key_btn option[value="movie"]', '', 'On');

    domReplaceTextIfExists('.result_btn dt:first-child:empty', '', 'Select a scoring/grading option below to add song to queue:');
    domReplaceTextIfExists('.reserve_m a', '全国採点', 'Ranking');
    domReplaceTextIfExists('.reserve_m a', '分析採点', 'Analysis');
    domReplaceTextIfExists('.reserve_m a', '採点オフ', 'Off');

    domReplaceTextIfExists('.result_btn dt', '●登録', '● My Data');
    // CSS is used to provide the "Save/Delete" text
    domReplaceTextIfExists('.result_btn .regist_m .mysong', '', 'song');
    domReplaceTextIfExists('.result_btn .regist_m .myartist', '', 'artist');

    domReplaceTextIfExists('.result_btn dt', '●アーティスト', '● Artist');
    domReplaceTextIfExists('.result_btn .regist_m.m_list a', '', 'See more songs');

    // Translate category types and genres when showing the category pages
    domReplaceTextUsingMapIfExists('.hasSearchParam', categories);
    domReplaceTextUsingMapIfExists('.hasSearchParam', genres);
    domReplaceTextInHtmlIfExists('.hasSearchParam', /^(.*) \|/, function (match, p1) {
        if (categories.has(p1)) return categories.get(p1) + ' |';
        return p1 + ' |';
    });
    domReplaceTextInHtmlIfExists('.hasSearchParam', /^(.*) \|/, function (match, p1) {
        if (genres.has(p1)) return genres.get(p1) + ' |';
        return p1 + ' |';
    });
    domReplaceTextUsingMapIfExists('.item_category a', genres);

    // Translate new arrivals
    domReplaceTextInHtmlIfExists('.hasSearchParam', /新着曲/, categories.get('新着曲') + ' ');
    domReplaceTextInHtmlIfExists('.item_category a', /(.*)月(.*)日の新着一覧へ/, function (match, p1, p2) {
        return months[p1] + ' ' + p2;
    });
}