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

/** Featured category translations (similar to genres) */
const featured_categories = new Map([
    ['盛り上げソング', 'Lively Songs'],
    ['ドラマ・アニメソング', 'Drama & Anime Songs'],
    ['バラード', 'Ballads'],
    ['スポーツソング', 'Sports Songs'],
    ['夏のうた', 'Summer Songs'],
    ['旅のうた', 'Travel Songs'],
    ['雨のうた', 'Rainy Day Songs'],
    ['新生活ソング', 'New Lifestyle Songs'],
    ['卒業ソング', 'Graduation Songs'],
    ['恋のうた', 'Love Songs'],
    ['冬のうた', 'Winter Songs'],
    ['クリスマスソング', 'Christmas Songs'],
    ['宴会ソングピックアップ　カラオケスタート編', 'Party Song Picks']
]);

/** "My Data" section translations */
const mydata_sections = new Map([
    ['マイうた', 'My Songs'],
    ['マイアーティスト', 'My Artists'],
    ['りれき', 'History']
]);

/** Months (used for new arrivals) */
const months = ['', 'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];

// Translate global strings
domDoCallbackIfExists('p.copyright', '※当サイトのすべての文章や画像などの無断転載・引用を禁じます。', function (el) {
    el.childNodes[0].textContent = "※ Unauthorized reproduction of this website's content is forbidden.";
});
domReplaceTextIfExists('a', 'はい', 'Yes');
domReplaceTextIfExists('a', 'いいえ', 'No');
domReplaceTextIfExists('button', '閉じる', 'OK');
domReplaceWithChildTagIfExists('ul#gnav > li.g01 > a', DOM_SPAN, 'How-to');
domReplaceWithChildTagIfExists('ul#gnav > li.g02 > a', DOM_SPAN, 'Categories');
domReplaceTextUsingMapIfExists('ul#gnav > li.g02 > ul.sub a', categories);
domReplaceWithChildTagIfExists('ul#gnav > li.g03 > a', DOM_SPAN, 'My Data');
domReplaceTextUsingMapIfExists('ul#gnav > li.g03 > ul.sub a', mydata_sections);
domReplaceWithChildTagIfExists('ul#gnav > li.g04 > a', DOM_SPAN, 'Queue');
domReplaceWithChildTagIfExists('ul#gnav > li.g05 > a', DOM_SPAN, 'Search');
domReplaceWithChildTagIfExists('a[href="/kyokunavi/ps3/session/logout"]', DOM_SPAN, 'Log Out');

// Translate the login page (by detecting the login header)
if (domNodeExists('h2.subtitle.login')) {
    domReplaceTextIfExists('title', 'ログイン', 'Log In');
    domReplaceTextIfExists('h2.subtitle.login', /.*/, 'Log In');
    domReplaceTextIfExists('h3.subtitle.gy', 'パスワード', 'Password (パスワード)');
    domReplaceTextIfExists('h3.subtitle.gy', 'かんたんログイン', 'Easy Login');
    domDoCallbackIfExists('p.mb30', 'ログイン状態を保持する', function (el) {
        const newLabel = document.createElement('label');
        newLabel.setAttribute('for', 'el');
        newLabel.innerText = 'Stay logged in';
        el.replaceChild(newLabel, el.childNodes[1]);
    });
    domReplaceTextIfExists('ul.kome > li', /.*ログアウト.*/, '※ Logging out will undo the "Stay logged in" option.');
    domAddClassIfExists('p.btn', '', 'loginBtn');
    domReplaceWithChildTagIfExists('.loginBtn > a', DOM_SPAN, 'Log In');

    domDoCallbackIfExists('p.message', 'パスワードが間違っています', function (el) {
        el.innerHTML = 'The Password is incorrect.<br>' +
            '(QR Codes are valid from one hour after they are issued. Please enter a reissued QR Code or Password.)';
    });

    domDoCallbackIfExists('p.message', '有効期限が切れています', function (el) {
        el.innerHTML = 'The QR Code or Password you have entered is expired.<br>' +
            'Please enter a reissued QR Code or Password.';
    });
    domReplaceTextIfExists('p.message', 'パスワードを入力してください。', 'Please enter a Password.');
    domReplaceTextIfExists('p.message', 'かんたんログインが無効になりました。', 'Easy Login has been invalidated.');
    domReplaceTextIfExists('p.message', '再度ログインしてください。', 'Please log in again.');
    domReplaceTextIfExists('p.message', 'セッションタイムアウトしました。', 'The session has timed out.');
}

// Translate main menu page (by detecting the categories header)
if (domNodeExists('h2.subtitle.pp')) {
    domReplaceTextIfExists('h2.subtitle.bl', /.*/, 'Search Menu');
    domReplaceTextIfExists('div.error', '選曲番号を正しく入力してください。', 'Please enter a valid Song ID.');
    domReplaceTextIfExists('div.error', '検索条件に該当する楽曲が見つかりませんでした。',
        'Unable to find songs that match the given search criteria.');
    domReplaceTextIfExists('div.error', '検索条件に該当する歌手が見つかりませんでした。',
        'Unable to find artists that match the given search criteria.');
    domReplaceTextIfExists('div.error', '検索のヒント：ひらがなでも検索することができます。',
        'Search tip: Searching using hiragana (ひらがな) is also possible.');

    domReplaceTextIfExists('h2.subtitle.pp', /.*/, 'Categories');
    domReplaceWithChildTagIfExists('ul.info li.i01 a', DOM_SPAN, categories.get('総合ランキング'));
    domReplaceWithChildTagIfExists('ul.info li.i02 a', DOM_SPAN, categories.get('新着曲'));
    domReplaceWithChildTagIfExists('ul.info li.i03 a', DOM_SPAN, categories.get('ジャンル別ランキング'));
    domReplaceWithChildTagIfExists('ul.info li.i04 a', DOM_SPAN, categories.get('特集'));

    domReplaceTextIfExists('h2.subtitle.gr', /.*/, 'My Data');
    domReplaceWithChildTagIfExists('ul.mydata li.m01 a', DOM_SPAN, mydata_sections.get('マイうた'));
    domReplaceWithChildTagIfExists('ul.mydata li.m02 a', DOM_SPAN, mydata_sections.get('マイアーティスト'));
    domReplaceWithChildTagIfExists('ul.mydata li.m03 a', DOM_SPAN, mydata_sections.get('りれき'));
}

// Translate search form
if (domNodeExists('[name=webtool_search_form]')) {
    domReplaceTextUsingMapIfExists('select.genre > option', genres);
    domReplaceWithChildTagIfExists('#search_type_song span', DOM_A, 'Title');
    domReplaceWithChildTagIfExists('#search_type_artist span', DOM_A, 'Artist');
    domReplaceWithChildTagIfExists('#search_type_keyword span', DOM_A, 'Keyword');
    domReplaceWithChildTagIfExists('#search_type_karaoke_id span', DOM_A, 'Song ID');
    domReplaceTextIfExists('#match_type_partial_label', /.*/, 'Contains');
    domReplaceTextIfExists('#match_type_head_label', /.*/, 'Starts with');
    domReplaceWithChildTagIfExists('.search_btn > a', DOM_SPAN, 'Search');
}

// Translate search query (can appear in main page as well as search results page)
domAddClassIfExists('title, h2.subtitle.bl, h2.subtitle.pp02, h2.subtitle.gr', '', 'hasSearchParam');
const iw = new URLSearchParams(document.location.search.substring(1)).get('iw');
domReplaceTextIfExists('.hasSearchParam', /「(.*)」で検索中/, function (match, p1) {
    return 'Searching for: ' + (iw || p1);
});

// Genre search
domReplaceTextIfExists('.hasSearchParam', /「(.*)」を検索中/, function (match, p1) {
    if (genres.has(p1)) return 'Searching for genre: ' + genres.get(p1);
    return 'Searching for: ' + p1;
});

// Song ID search
domReplaceTextIfExists('.hasSearchParam', '選曲番号検索', 'Song ID Search' + (iw ? ': ' + iw : ''));

// Translate search results page items
// (by detecting the pager / my data header (with no category header) / queue delete buttons)
if (domNodeExists('span#paging_root, ul.reserve_list') ||
    (domNodeExists('h2.subtitle.gr') && !domNodeExists('h2.subtitle.pp'))) {
    // Navigation
    domReplaceTextIfExists('#paging_root > p.mb10.clear', /^1件\((.*)件目表示\)/, '1 result');
    domReplaceTextIfExists('#paging_root > p.mb10.clear', /(.*)件\((.*)件目表示\)/, '$1 results (displaying $2)');
    domReplaceTextIfExists('.pagenav .prev a', /前の(.*)件/, ' Previous $1');
    domReplaceTextIfExists('.pagenav .next a', /次の(.*)件/, 'Next $1 ');
    domReplaceTextIfExists('p.mark_ps3', '採点不可', 'Scoring unavailable');

    // Hide the rank kanji for ranking lists
    domReplaceTextIfExists('li.item_song_option p.ranking', '位', '');

    // Song queue header and options
    domReplaceTextIfExists('title', '予約一覧', 'Queue');
    domReplaceTextIfExists('h2.subtitle.ye', '予約一覧', 'Queue');
    domReplaceTextIfExists('.reserve_list a', '選択削除', 'Delete selected');
    // TODO: Use MutationObserver to support dynamic text replacement for "Connecting..." and success/error messages
    domReplaceTextIfExists('#schedule_selectdel_confirm h2:first-child', /.*/, 'Delete selected songs from the queue?');
    domReplaceTextIfExists('#schedule_selectdel_confirm h2.p_yes', /.*/,
        'The selected songs have been successfully deleted.');
    domReplaceTextIfExists('.reserve_list a', 'すべて削除', 'Delete all');
    // TODO: Use MutationObserver to support dynamic text replacement for "Connecting..." and success/error messages
    domReplaceTextIfExists('#schedule_del_confirm h2:first-child', /.*/, 'Delete all songs from the queue?');
    domReplaceTextIfExists('#schedule_del_confirm h2.p_yes', /.*/, 'The queue has been successfully deleted.');

    // Song action items
    domReplaceTextIfExists('.data th', '歌い出し', 'First line');
    domReplaceTextIfExists('.data th', 'タイアップ', 'Tie-in');

    domReplaceTextIfExists('.result_btn.keyset dt', /.*/, '● Reserve');

    domReplaceTextIfExists('.reserve_m.key .key_t', 'キー設定', 'Key');
    domReplaceTextIfExists('.reserve_m.key .key_btn option[value="0"]', /.*/, '0 (Original)');
    domReplaceTextIfExists('.reserve_m.key .set_originalkey_selectbox_process > a', /.*/, 'Reset');

    domReplaceTextIfExists('.reserve_m.key .key_t', '曲タイプ', 'Video');
    domReplaceTextIfExists('.reserve_m.key .key_btn option[value="sound"]', /.*/, 'Off');
    domReplaceTextIfExists('.reserve_m.key .key_btn option[value="movie"]', /.*/, 'On');

    domReplaceTextIfExists('.result_btn dt:first-child:empty', '',
        'Select a scoring/grading option below to add song to queue:');
    domReplaceTextIfExists('.reserve_m a', '全国採点', 'Ranking');
    domReplaceTextIfExists('.reserve_m a', '分析採点', 'Analysis');
    domReplaceTextIfExists('.reserve_m a', '採点オフ', 'Off');
    // TODO: Use MutationObserver to support dynamic text replacement for "Connecting..." and success/error messages
    domReplaceTextIfExists('#schedule_add_sub h2:first-child', /.*/, 'Reservation complete.');

    domReplaceTextIfExists('.result_btn dt', '●登録', '● My Data');
    // CSS is used to provide the "Save/Delete" text
    domReplaceTextIfExists('.result_btn .regist_m .mysong', /.*/, 'song');
    domReplaceTextIfExists('.result_btn .regist_m .myartist', /.*/, 'artist');

    domReplaceTextIfExists('.result_btn dt', '●アーティスト', '● Artist');
    domReplaceTextIfExists('.result_btn .regist_m.m_list a', /.*/, 'See more songs');

    // Translate category types and genres when showing the category pages
    domReplaceTextUsingMapIfExists('.hasSearchParam', categories);
    domReplaceTextUsingMapIfExists('.hasSearchParam', genres);
    domReplaceTextIfExists('.hasSearchParam', /^(.*) \|/, function (match, p1) {
        if (categories.has(p1)) return categories.get(p1) + ' |';
        return p1 + ' |';
    });
    domReplaceTextIfExists('.hasSearchParam', /^(.*) \|/, function (match, p1) {
        if (genres.has(p1)) return genres.get(p1) + ' |';
        return p1 + ' |';
    });
    domReplaceTextUsingMapIfExists('.item_category a', genres);

    // Translate new arrivals
    domReplaceTextIfExists('.hasSearchParam', /新着曲/, categories.get('新着曲') + ' ');
    domReplaceTextIfExists('.item_category a', /(.*)月(.*)日の新着一覧へ/, function (match, p1, p2) {
        return months[p1] + ' ' + p2;
    });

    // Translate featured categories
    // Strip the "featured" marker, then match using the map (like for genres)
    domReplaceTextIfExists('.hasSearchParam, .item_category a', /特集[　 ]/, '');
    domReplaceTextUsingMapIfExists('.hasSearchParam, .item_category a', featured_categories);
    domReplaceTextIfExists('.hasSearchParam', /^(.*) \|/, function (match, p1) {
        if (featured_categories.has(p1)) return featured_categories.get(p1) + ' |';
        return p1 + ' |';
    });

    // Translate "My Data" sections
    domReplaceTextUsingMapIfExists('.hasSearchParam', mydata_sections);
    domReplaceTextIfExists('.hasSearchParam', /^(.*) \|/, function (match, p1) {
        if (mydata_sections.has(p1)) return mydata_sections.get(p1) + ' |';
        return p1 + ' |';
    });
    domDoCallbackIfExists('.inner', '登録されていません。', function (el) {
        el.childNodes[el.childNodes.length - 1].textContent = 'No entries.';
    });
    // TODO: Use MutationObserver to support dynamic text replacement for "Connecting..." and success/error messages
    domReplaceTextIfExists('#favorite_edit_sub h2:first-child', /.*/, 'Changes to "My Data" successfully completed.');
}