const _0x5a080d = _0x4e17;
(function (_0x109389, _0x10278f) {
  const _0x50ef47 = _0x4e17, _0x519ab8 = _0x109389();
  while (true) {
    try {
      const _0x5cd38c = -parseInt(_0x50ef47(523)) / 1 + parseInt(_0x50ef47(252)) / 2 + -parseInt(_0x50ef47(380)) / 3 * (parseInt(_0x50ef47(421)) / 4) + parseInt(_0x50ef47(254)) / 5 + -parseInt(_0x50ef47(320)) / 6 * (-parseInt(_0x50ef47(364)) / 7) + -parseInt(_0x50ef47(387)) / 8 + parseInt(_0x50ef47(457)) / 9;
      if (_0x5cd38c === _0x10278f) break; else _0x519ab8.push(_0x519ab8.shift());
    } catch (_0x42be12) {
      _0x519ab8.push(_0x519ab8.shift());
    }
  }
}(_0x160d, 761968));
const API_KEY = _0x5a080d(325) + _0x5a080d(313) + _0x5a080d(442) + "70", BASE_URL = _0x5a080d(437) + _0x5a080d(469) + _0x5a080d(533), IMG_URL = _0x5a080d(334) + _0x5a080d(361) + _0x5a080d(420) + "0", movieList = document[_0x5a080d(517) + _0x5a080d(318)](_0x5a080d(453)), loadMovies = document[_0x5a080d(517) + _0x5a080d(318)](_0x5a080d(283) + "s"), loadTV = document[_0x5a080d(517) + _0x5a080d(318)](_0x5a080d(314)), sectionTitle = document[_0x5a080d(517) + _0x5a080d(318)](_0x5a080d(295) + _0x5a080d(274)), searchInput = document[_0x5a080d(517) + _0x5a080d(318)](_0x5a080d(259) + "ut"), searchButton = document[_0x5a080d(517) + _0x5a080d(318)](_0x5a080d(309) + _0x5a080d(302)), genreFilter = document[_0x5a080d(517) + _0x5a080d(318)](_0x5a080d(299) + "er"), prevPageButton = document[_0x5a080d(517) + _0x5a080d(318)](_0x5a080d(366)), nextPageButton = document[_0x5a080d(517) + _0x5a080d(318)](_0x5a080d(468)), pageInfo = document[_0x5a080d(517) + _0x5a080d(318)](_0x5a080d(514)), toggleDarkMode = document[_0x5a080d(517) + _0x5a080d(318)](_0x5a080d(477) + _0x5a080d(423)), floatingPlayer = document[_0x5a080d(517) + _0x5a080d(318)](_0x5a080d(311) + _0x5a080d(480)), playerTitle = document[_0x5a080d(517) + _0x5a080d(318)](_0x5a080d(292) + "le"), playerSynopsis = document[_0x5a080d(517) + _0x5a080d(318)](_0x5a080d(354) + _0x5a080d(327)), playerForm = document[_0x5a080d(517) + _0x5a080d(318)](_0x5a080d(414) + "m"), seasonInput = document[_0x5a080d(517) + _0x5a080d(318)](_0x5a080d(389) + "ut"), episodeInput = document[_0x5a080d(517) + _0x5a080d(318)](_0x5a080d(525) + _0x5a080d(481)), playEpisodeButton = document[_0x5a080d(517) + _0x5a080d(318)](_0x5a080d(435) + "de"), playerIframe = document[_0x5a080d(517) + _0x5a080d(318)](_0x5a080d(331) + _0x5a080d(398)), closePlayerButton = document[_0x5a080d(517) + _0x5a080d(318)](_0x5a080d(507) + "er");
let currentMode = _0x5a080d(333), currentPage = 1, genreMap = {}, currentItemId = null;
async function fetchItems(_0x4051b5) {
  const _0x206699 = _0x5a080d, _0x1623e2 = {EiiRE: function (_0xec4920, _0x38881f) {
    return _0xec4920(_0x38881f);
  }, KVidd: function (_0x30829a, _0x1e38fe, _0x20ed51) {
    return _0x30829a(_0x1e38fe, _0x20ed51);
  }, UtVAw: function (_0xeef1e7, _0x1074cc) {
    return _0xeef1e7 === _0x1074cc;
  }, kasRo: _0x206699(276) + _0x206699(289) + ":", unooK: function (_0x2206d0, _0x2067d6) {
    return _0x2206d0(_0x2067d6);
  }, DlAlf: _0x206699(502) + _0x206699(539) + _0x206699(317) + _0x206699(336) + _0x206699(427)};
  try {
    const _0x1d7431 = await _0x1623e2[_0x206699(397)](fetch, _0x4051b5);
    if (!_0x1d7431.ok) throw new Error(_0x206699(369) + _0x206699(506) + _0x1d7431[_0x206699(418)]);
    const _0x55f0cd = await _0x1d7431[_0x206699(258)]();
    _0x1623e2[_0x206699(404)](displayItems, _0x55f0cd[_0x206699(447)], _0x55f0cd[_0x206699(269) + "s"]), prevPageButton[_0x206699(358)] = _0x1623e2[_0x206699(495)](currentPage, 1), nextPageButton[_0x206699(358)] = _0x1623e2[_0x206699(495)](currentPage, _0x55f0cd[_0x206699(269) + "s"]);
  } catch (_0x1e8700) {
    console[_0x206699(483)](_0x1623e2[_0x206699(455)], _0x1e8700), _0x1623e2[_0x206699(372)](alert, _0x1623e2[_0x206699(293)]);
  }
}
function displayItems(_0x2ee777, _0x3e582c) {
  const _0x185d29 = _0x5a080d, _0x121575 = {tOmdG: _0x185d29(340), aApWQ: _0x185d29(439) + _0x185d29(489) + _0x185d29(451) + _0x185d29(456) + _0x185d29(526), eHMvT: _0x185d29(484), VDHNr: _0x185d29(321), EgGqH: function (_0x4800cd, _0x1805af) {
    return _0x4800cd(_0x1805af);
  }};
  movieList[_0x185d29(521)] = "", _0x2ee777[_0x185d29(395)](_0x579d18 => {
    const _0x2d070e = _0x185d29, _0x5ce12a = {Stvcg: _0x121575[_0x2d070e(530)]}, _0x3db836 = _0x579d18[_0x2d070e(341)] || _0x579d18[_0x2d070e(405)], _0x4f9ce3 = (_0x579d18[_0x2d070e(385) + "te"] || _0x579d18[_0x2d070e(322) + _0x2d070e(407)] || "")[_0x2d070e(287)]("-")[0] || _0x121575[_0x2d070e(530)], _0x155521 = _0x579d18[_0x2d070e(452) + "h"] ? "" + IMG_URL + _0x579d18[_0x2d070e(452) + "h"] : _0x121575[_0x2d070e(464)], _0x4f1672 = _0x579d18[_0x2d070e(298) + "ge"] || _0x121575[_0x2d070e(363)], _0x4be7cd = _0x579d18[_0x2d070e(424)] || [], _0x5cfe84 = _0x4be7cd[_0x2d070e(403)](_0x4a8948 => {
      const _0x1a3ab5 = _0x2d070e;
      return _0x1a3ab5(473) + _0x1a3ab5(515) + _0x1a3ab5(278) + _0x1a3ab5(263) + _0x1a3ab5(350) + _0x1a3ab5(373) + (genreMap[_0x4a8948] || _0x5ce12a[_0x1a3ab5(310)]) + _0x1a3ab5(532);
    })[_0x2d070e(296)](""), _0x572822 = _0x2d070e(416) + _0x2d070e(379) + _0x2d070e(308) + _0x2d070e(400) + _0x2d070e(342) + _0x2d070e(377) + _0x2d070e(255) + _0x2d070e(379) + _0x2d070e(379) + _0x2d070e(461) + _0x2d070e(297) + _0x2d070e(253) + _0x2d070e(462) + _0x2d070e(383) + _0x2d070e(431) + _0x579d18.id + (_0x2d070e(339) + _0x2d070e(324)) + _0x3db836 + (_0x2d070e(537) + _0x2d070e(382)) + _0x579d18[_0x2d070e(345)] + (_0x2d070e(344) + _0x2d070e(379) + _0x2d070e(379) + _0x2d070e(308) + _0x2d070e(415) + _0x2d070e(492) + _0x2d070e(486) + _0x2d070e(497) + _0x2d070e(440)) + _0x4f9ce3 + (_0x2d070e(249) + _0x2d070e(379) + _0x2d070e(379) + _0x2d070e(307) + _0x2d070e(401) + _0x2d070e(367) + _0x2d070e(303) + _0x2d070e(375) + _0x2d070e(482) + ">") + _0x4f1672 + (_0x2d070e(332) + _0x2d070e(379) + _0x2d070e(379) + _0x2d070e(351) + _0x2d070e(522)) + _0x155521 + (_0x2d070e(446) + _0x2d070e(376) + _0x2d070e(504)) + _0x3db836 + (_0x2d070e(344) + _0x2d070e(379) + _0x2d070e(379) + _0x2d070e(308) + _0x2d070e(291) + _0x2d070e(390) + _0x2d070e(379) + _0x2d070e(379) + _0x2d070e(328) + _0x2d070e(394) + _0x2d070e(413)) + _0x3db836 + (_0x2d070e(312) + _0x2d070e(379) + _0x2d070e(379) + _0x2d070e(501) + _0x2d070e(426) + _0x2d070e(360)) + _0x5cfe84 + (_0x2d070e(249) + _0x2d070e(379) + _0x2d070e(379) + _0x2d070e(290) + _0x2d070e(490) + _0x2d070e(379) + _0x2d070e(496) + _0x2d070e(445) + _0x2d070e(379) + _0x2d070e(378));
    movieList[_0x2d070e(250) + _0x2d070e(479)](_0x121575[_0x2d070e(374)], _0x572822);
  }), _0x121575[_0x185d29(264)](updatePageInfo, _0x3e582c);
}
function _0x4e17(_0x85eeb0, _0x246dfd) {
  const _0x3a48dc = _0x160d();
  return _0x4e17 = function (_0x336ce7, _0x166888) {
    _0x336ce7 = _0x336ce7 - 249;
    let _0x4be480 = _0x3a48dc[_0x336ce7];
    return _0x4be480;
  }, _0x4e17(_0x85eeb0, _0x246dfd);
}
function updatePageInfo(_0x222146) {
  const _0x33b712 = _0x5a080d;
  pageInfo[_0x33b712(408) + "t"] = _0x33b712(520) + currentPage + _0x33b712(304) + _0x222146;
}
function loadPopular() {
  const _0x5ad4c6 = _0x5a080d, _0x3c930c = {dudjr: function (_0x247334, _0x4ad6f0) {
    return _0x247334(_0x4ad6f0);
  }}, _0x491df4 = "" + BASE_URL + currentMode + (_0x5ad4c6(285) + _0x5ad4c6(419)) + API_KEY + _0x5ad4c6(319) + currentPage;
  _0x3c930c[_0x5ad4c6(432)](fetchItems, _0x491df4);
}
function _0x160d() {
  const _0x24935d = ["map", "KVidd", "name", "closest", "date", "textConten", "es=", "esquj", "HRIYx", "IpeUw", 'rd-title">', "player-for", 's="positio', "\n         ", "hing genre", "status", "pi_key=", "rg/t/p/w50", "1372nTvkNv", "genre/", "k-mode", "genre_ids", "bed/tv/", 'iv class="', "later.", "search/", "Load Movie", "add", 'id="', "dudjr", "fLmZH", "true", "play-episo", "GEWZG", "https://ap", "Popular Mo", "https://vi", 'art-0">', "NNqCN", "f3184f866b", "Popular TV", "vMHUi", "v>\n       ", '" class="c', "results", "click", "getAttribu", "Load TV cl", "der.com/50", "poster_pat", "movie-list", "ent", "kasRo", "0x750?text", "14328081rnWHVR", "&with_genr", "data-title", "Istqv", "   <div cl", "elative h-", "kScwO", "aApWQ", "eason and ", "style", "hYXQz", "next-page", "i.themovie", "<option va", "discover/", "dark-mode", "<span clas", "bers.", "jVQqn", "bed/movie/", "toggle-dar", "GtPQi", "centHTML", "layer", "put", 'p-0 end-0"', "error", "N/A", "YiFEM", " year-labe", "IjRBK", "Please ent", "a.placehol", ">\n        ", "setItem", "n-absolute", "bjqRp", "data-synop", "UtVAw", "      </di", "l top-0 st", "target", "body", "log", "        <d", "Failed to ", "option", 'p" alt="', "createElem", "! Status: ", "close-play", "Loaded", "re</option", "0|1|2|4|5|", "lyHzU", "change", "trim", "page-info", 's="genre-l', "&query=", "getElement", "classList", "ftmkU", "Page ", "innerHTML", 'mg src="', "716271ZAEKdq", "appendChil", "episode-in", "=No+Image", "LLtvI", " Series", "mbed.cc/em", "tOmdG", "wUHeA", "</span>", "db.org/3/", "s clicked", "VWLgg", "ter by Gen", '" data-syn', "JRnzY", "fetch item", "</div>\n   ", "insertAdja", "WhhDO", "248192IbpwWA", "position-r", "4377880mKvqkL", 'l-lg-3">\n ', "getItem", "er valid s", "json", "search-inp", "pisode num", "EnySQ", "contains", 'lass="fas ', "EgGqH", "sHzdA", "xJqtB", "ECQoc", "IiYvL", "total_page", "izkZq", "vies", 'lue="">Fil', "XhRBC", "tle", "Qxdjg", "Error fetc", "YMLuB", 'abel"><i c', "key=", "value", "episode nu", "djDSl", "load-movie", "genres", "/popular?a", "icked", "split", "lIhBI", "hing items", "     </div", 's="card-bo', "player-tit", "DlAlf", "fFqKv", "section-ti", "join", 'ass="card ', "vote_avera", "genre-filt", "bBuTq", "none", "ton", "lute ratin", " of ", "0|3|5|1|4|", "cked", "     <div ", " <div clas", "search-but", "Stvcg", "floating-p", "</h5>\n    ", "fcd4ca4e97", "load-tv", "addEventLi", "block", "s. Please ", "ById", "&page=", "24VOjBEF", "beforeend", "first_air_", "vFmEO", 'le="', "c542b4951c", "4|5|0|1|2|", "opsis", "       <h5", "LzHLz", "Esqdt", "player-ifr", "/10</div>\n", "movie", "https://im", "gSCsY", "try again ", "YTUfV", "ason and e", '" data-tit', "Unknown", "title", "col-sm-6 c", "HMUxs", '">\n       ', "overview", "er both se", "DOMContent", "display", "https://pl", 'fa-tags"><', "        <i", "k Mode cli", "mdZhk", "player-syn", "data-id", "toggle", "zdrfC", "disabled", "mbers.", 'mb-2">', "age.tmdb.o", "FtNVt", "eHMvT", "1280447ZOUpxU", "aaEkg", "prev-page", "ition-abso", "/list?api_", "HTTP error", "src", "JsFXr", "unooK", "/i>", "VDHNr", "g-label to", "ard-img-to", "ol-md-4 co", "   </div>", "          ", "9879ksqvsj", ".card", 'opsis="', '100" data-', "KERCu", "release_da", "stener", "5725016FYMFqd", "jGchh", "season-inp", 'dy">\n     ', "Toggle Dar", "sis", "ayer.autoe", ' class="ca', "forEach", "darkMode", "EiiRE", "ame", "?api_key=", 's="col-12 ', 'class="pos', "HyRfH"];
  _0x160d = function () {
    return _0x24935d;
  };
  return _0x160d();
}
async function fetchGenres() {
  const _0x4ad703 = _0x5a080d, _0x3a18d0 = {xJqtB: _0x4ad703(503), mdZhk: function (_0x153a7c, _0x531e97) {
    return _0x153a7c(_0x531e97);
  }, JRnzY: _0x4ad703(276) + _0x4ad703(417) + "s:"}, _0x11ca82 = BASE_URL + _0x4ad703(422) + currentMode + (_0x4ad703(368) + _0x4ad703(279)) + API_KEY;
  try {
    const _0x4ccaec = await _0x3a18d0[_0x4ad703(353)](fetch, _0x11ca82), _0x45d541 = await _0x4ccaec[_0x4ad703(258)]();
    genreMap = {}, _0x45d541[_0x4ad703(284)][_0x4ad703(395)](_0x2c9735 => {
      const _0x517e6b = _0x4ad703;
      genreMap[_0x2c9735.id] = _0x2c9735[_0x517e6b(405)];
      const _0x1116f6 = document[_0x517e6b(505) + _0x517e6b(454)](_0x3a18d0[_0x517e6b(266)]);
      _0x1116f6[_0x517e6b(280)] = _0x2c9735.id, _0x1116f6[_0x517e6b(408) + "t"] = _0x2c9735[_0x517e6b(405)], genreFilter[_0x517e6b(524) + "d"](_0x1116f6);
    });
  } catch (_0x13080e) {
    console[_0x4ad703(483)](_0x3a18d0[_0x4ad703(538)], _0x13080e);
  }
}
function toggleDarkModeFunction() {
  const _0x2dc9bf = _0x5a080d, _0x111e51 = {YiFEM: _0x2dc9bf(472), HyRfH: _0x2dc9bf(396)};
  document[_0x2dc9bf(499)][_0x2dc9bf(518)][_0x2dc9bf(356)](_0x111e51[_0x2dc9bf(485)]);
  const _0x1a5b50 = document[_0x2dc9bf(499)][_0x2dc9bf(518)][_0x2dc9bf(262)](_0x111e51[_0x2dc9bf(485)]);
  localStorage[_0x2dc9bf(491)](_0x111e51[_0x2dc9bf(402)], _0x1a5b50);
}
function openPlayer(_0x5e58cf, _0x2eb6b9, _0x3adb45) {
  const _0x3a0614 = _0x5a080d, _0x2ebe13 = {jGchh: _0x3a0614(510) + "3", LLtvI: _0x3a0614(316), vMHUi: function (_0x2bf9b3, _0xc94a5e) {
    return _0x2bf9b3 === _0xc94a5e;
  }, izkZq: _0x3a0614(301), gSCsY: function (_0x8a0165, _0x4fd6b7) {
    return _0x8a0165 === _0x4fd6b7;
  }, VWLgg: _0x3a0614(333)}, _0x22fcd0 = _0x2ebe13[_0x3a0614(388)][_0x3a0614(287)]("|");
  let _0x44c70d = 0;
  while (true) {
    switch (_0x22fcd0[_0x44c70d++]) {
      case "0":
        playerTitle[_0x3a0614(408) + "t"] = _0x5e58cf;
        continue;
      case "1":
        playerSynopsis[_0x3a0614(408) + "t"] = _0x2eb6b9;
        continue;
      case "2":
        currentItemId = _0x3adb45;
        continue;
      case "3":
        floatingPlayer[_0x3a0614(466)][_0x3a0614(348)] = _0x2ebe13[_0x3a0614(527)];
        continue;
      case "4":
        playerForm[_0x3a0614(466)][_0x3a0614(348)] = _0x2ebe13[_0x3a0614(444)](currentMode, "tv") ? _0x2ebe13[_0x3a0614(527)] : _0x2ebe13[_0x3a0614(270)];
        continue;
      case "5":
        playerIframe[_0x3a0614(370)] = _0x2ebe13[_0x3a0614(335)](currentMode, _0x2ebe13[_0x3a0614(535)]) ? _0x3a0614(349) + _0x3a0614(393) + _0x3a0614(529) + _0x3a0614(476) + _0x3adb45 : "";
        continue;
    }
    break;
  }
}
function closePlayer() {
  const _0x2cefda = _0x5a080d, _0x2f30eb = {Istqv: _0x2cefda(301)};
  floatingPlayer[_0x2cefda(466)][_0x2cefda(348)] = _0x2f30eb[_0x2cefda(460)], playerIframe[_0x2cefda(370)] = "", seasonInput[_0x2cefda(280)] = "", episodeInput[_0x2cefda(280)] = "";
}
function playEpisode() {
  const _0x1a93e8 = _0x5a080d, _0xbac186 = {EnySQ: function (_0x506884, _0x503ccf) {
    return _0x506884 && _0x503ccf;
  }, NNqCN: function (_0x84532, _0x5bac27, _0x3b744b) {
    return _0x84532(_0x5bac27, _0x3b744b);
  }, bBuTq: function (_0x2e9f5c, _0x51030c) {
    return _0x2e9f5c(_0x51030c);
  }, XhRBC: function (_0x27c96b, _0x4929a8) {
    return _0x27c96b > _0x4929a8;
  }, esquj: function (_0x5230c5, _0x38c904) {
    return _0x5230c5(_0x38c904);
  }, lyHzU: _0x1a93e8(488) + _0x1a93e8(257) + _0x1a93e8(465) + _0x1a93e8(281) + _0x1a93e8(359), IiYvL: function (_0x482226, _0x33bcfe) {
    return _0x482226(_0x33bcfe);
  }, jVQqn: _0x1a93e8(488) + _0x1a93e8(346) + _0x1a93e8(338) + _0x1a93e8(260) + _0x1a93e8(474)}, _0x56851b = seasonInput[_0x1a93e8(280)][_0x1a93e8(513)](), _0x4819be = episodeInput[_0x1a93e8(280)][_0x1a93e8(513)]();
  if (_0xbac186[_0x1a93e8(261)](_0x56851b, _0x4819be)) {
    const _0x1baec7 = _0xbac186[_0x1a93e8(441)](parseInt, _0x56851b, 10), _0x425ff5 = _0xbac186[_0x1a93e8(441)](parseInt, _0x4819be, 10);
    !_0xbac186[_0x1a93e8(300)](isNaN, _0x1baec7) && !_0xbac186[_0x1a93e8(300)](isNaN, _0x425ff5) && _0xbac186[_0x1a93e8(273)](_0x1baec7, 0) && _0xbac186[_0x1a93e8(273)](_0x425ff5, 0) ? playerIframe[_0x1a93e8(370)] = _0x1a93e8(349) + _0x1a93e8(393) + _0x1a93e8(529) + _0x1a93e8(425) + currentItemId + "/" + _0x1baec7 + "/" + _0x425ff5 : _0xbac186[_0x1a93e8(410)](alert, _0xbac186[_0x1a93e8(511)]);
  } else _0xbac186[_0x1a93e8(268)](alert, _0xbac186[_0x1a93e8(475)]);
}
movieList[_0x5a080d(315) + _0x5a080d(386)](_0x5a080d(448), _0x149fab => {
  const _0x28c08a = _0x5a080d, _0x33629c = {djDSl: _0x28c08a(381), wUHeA: _0x28c08a(459), GEWZG: _0x28c08a(494) + _0x28c08a(392), GtPQi: _0x28c08a(355), FtNVt: function (_0x18fc70, _0x849284, _0x306383, _0x2a0884) {
    return _0x18fc70(_0x849284, _0x306383, _0x2a0884);
  }}, _0x5981a8 = _0x149fab[_0x28c08a(498)][_0x28c08a(406)](_0x33629c[_0x28c08a(282)]);
  if (_0x5981a8) {
    const _0x267578 = _0x5981a8[_0x28c08a(449) + "te"](_0x33629c[_0x28c08a(531)]), _0x3e5581 = _0x5981a8[_0x28c08a(449) + "te"](_0x33629c[_0x28c08a(436)]), _0x530d68 = _0x5981a8[_0x28c08a(449) + "te"](_0x33629c[_0x28c08a(478)]);
    _0x33629c[_0x28c08a(362)](openPlayer, _0x267578, _0x3e5581, _0x530d68);
  }
}), toggleDarkMode[_0x5a080d(315) + _0x5a080d(386)](_0x5a080d(448), () => {
  const _0x1c8e1a = _0x5a080d, _0x15c0e4 = {IpeUw: _0x1c8e1a(391) + _0x1c8e1a(352) + _0x1c8e1a(306), LzHLz: function (_0x1d52f0) {
    return _0x1d52f0();
  }};
  console[_0x1c8e1a(500)](_0x15c0e4[_0x1c8e1a(412)]), _0x15c0e4[_0x1c8e1a(329)](toggleDarkModeFunction);
}), closePlayerButton[_0x5a080d(315) + _0x5a080d(386)](_0x5a080d(448), closePlayer), playEpisodeButton[_0x5a080d(315) + _0x5a080d(386)](_0x5a080d(448), playEpisode), loadMovies[_0x5a080d(315) + _0x5a080d(386)](_0x5a080d(448), () => {
  const _0x550d3c = _0x5a080d, _0x35e690 = {Esqdt: _0x550d3c(326) + "3", WhhDO: _0x550d3c(438) + _0x550d3c(271), fLmZH: _0x550d3c(470) + _0x550d3c(272) + _0x550d3c(536) + _0x550d3c(509) + ">", KERCu: function (_0x474a9b) {
    return _0x474a9b();
  }, YMLuB: _0x550d3c(429) + _0x550d3c(534), YTUfV: _0x550d3c(333)}, _0x13951e = _0x35e690[_0x550d3c(330)][_0x550d3c(287)]("|");
  let _0x43a9f2 = 0;
  while (true) {
    switch (_0x13951e[_0x43a9f2++]) {
      case "0":
        sectionTitle[_0x550d3c(408) + "t"] = _0x35e690[_0x550d3c(251)];
        continue;
      case "1":
        genreFilter[_0x550d3c(521)] = _0x35e690[_0x550d3c(433)];
        continue;
      case "2":
        _0x35e690[_0x550d3c(384)](fetchGenres);
        continue;
      case "3":
        _0x35e690[_0x550d3c(384)](loadPopular);
        continue;
      case "4":
        console[_0x550d3c(500)](_0x35e690[_0x550d3c(277)]);
        continue;
      case "5":
        currentMode = _0x35e690[_0x550d3c(337)];
        continue;
    }
    break;
  }
}), loadTV[_0x5a080d(315) + _0x5a080d(386)](_0x5a080d(448), () => {
  const _0x5cedec = _0x5a080d, _0x31244e = {ftmkU: _0x5cedec(305) + "2", HMUxs: _0x5cedec(450) + _0x5cedec(286), kScwO: _0x5cedec(470) + _0x5cedec(272) + _0x5cedec(536) + _0x5cedec(509) + ">", IjRBK: function (_0x2e082f) {
    return _0x2e082f();
  }, vFmEO: _0x5cedec(443) + _0x5cedec(528)}, _0x453558 = _0x31244e[_0x5cedec(519)][_0x5cedec(287)]("|");
  let _0x118487 = 0;
  while (true) {
    switch (_0x453558[_0x118487++]) {
      case "0":
        console[_0x5cedec(500)](_0x31244e[_0x5cedec(343)]);
        continue;
      case "1":
        genreFilter[_0x5cedec(521)] = _0x31244e[_0x5cedec(463)];
        continue;
      case "2":
        _0x31244e[_0x5cedec(487)](loadPopular);
        continue;
      case "3":
        currentMode = "tv";
        continue;
      case "4":
        _0x31244e[_0x5cedec(487)](fetchGenres);
        continue;
      case "5":
        sectionTitle[_0x5cedec(408) + "t"] = _0x31244e[_0x5cedec(323)];
        continue;
    }
    break;
  }
}), searchButton[_0x5a080d(315) + _0x5a080d(386)](_0x5a080d(448), () => {
  const _0x5e9c74 = _0x5a080d, _0x5c7e26 = {fFqKv: function (_0x350b92, _0x99efd1) {
    return _0x350b92(_0x99efd1);
  }}, _0x53c0b5 = searchInput[_0x5e9c74(280)];
  if (_0x53c0b5) {
    const _0x3fe1d6 = BASE_URL + _0x5e9c74(428) + currentMode + _0x5e9c74(399) + API_KEY + _0x5e9c74(516) + _0x5c7e26[_0x5e9c74(294)](encodeURIComponent, _0x53c0b5) + _0x5e9c74(319) + currentPage;
    _0x5c7e26[_0x5e9c74(294)](fetchItems, _0x3fe1d6);
  }
}), genreFilter[_0x5a080d(315) + _0x5a080d(386)](_0x5a080d(512), () => {
  const _0x34afd3 = _0x5a080d, _0x109446 = {Qxdjg: function (_0x6208be, _0x3bafbf) {
    return _0x6208be(_0x3bafbf);
  }, lIhBI: function (_0x2d501d) {
    return _0x2d501d();
  }}, _0x46cbc6 = genreFilter[_0x34afd3(280)];
  if (_0x46cbc6) {
    const _0x5b913e = BASE_URL + _0x34afd3(471) + currentMode + _0x34afd3(399) + API_KEY + (_0x34afd3(458) + _0x34afd3(409)) + _0x46cbc6 + _0x34afd3(319) + currentPage;
    _0x109446[_0x34afd3(275)](fetchItems, _0x5b913e);
  } else _0x109446[_0x34afd3(288)](loadPopular);
}), prevPageButton[_0x5a080d(315) + _0x5a080d(386)](_0x5a080d(448), () => {
  const _0x7ec1ab = _0x5a080d, _0x32e82a = {bjqRp: function (_0x5d9aa4, _0x3b281f) {
    return _0x5d9aa4 > _0x3b281f;
  }, aaEkg: function (_0x3e08c3) {
    return _0x3e08c3();
  }};
  _0x32e82a[_0x7ec1ab(493)](currentPage, 1) && (currentPage--, _0x32e82a[_0x7ec1ab(365)](loadPopular));
}), nextPageButton[_0x5a080d(315) + _0x5a080d(386)](_0x5a080d(448), () => {
  const _0x3a8f2e = _0x5a080d, _0x37c3d1 = {zdrfC: function (_0x5d0374) {
    return _0x5d0374();
  }};
  currentPage++, _0x37c3d1[_0x3a8f2e(357)](loadPopular);
}), document[_0x5a080d(315) + _0x5a080d(386)](_0x5a080d(347) + _0x5a080d(508), () => {
  const _0x6e69b0 = _0x5a080d, _0x5a0595 = {sHzdA: function (_0x50d971, _0x1bce55) {
    return _0x50d971 === _0x1bce55;
  }, hYXQz: _0x6e69b0(396), JsFXr: _0x6e69b0(434), HRIYx: _0x6e69b0(472), ECQoc: function (_0x26f523) {
    return _0x26f523();
  }}, _0x5b6a11 = _0x5a0595[_0x6e69b0(265)](localStorage[_0x6e69b0(256)](_0x5a0595[_0x6e69b0(467)]), _0x5a0595[_0x6e69b0(371)]);
  _0x5b6a11 && document[_0x6e69b0(499)][_0x6e69b0(518)][_0x6e69b0(430)](_0x5a0595[_0x6e69b0(411)]), _0x5a0595[_0x6e69b0(267)](fetchGenres), _0x5a0595[_0x6e69b0(267)](loadPopular);
});
