const _0x298d4f = _0x23d4;
(function (_0x40d7fa, _0x1363fc) {
  const _0x594e83 = _0x23d4, _0x1ea471 = _0x40d7fa();
  while (true) {
    try {
      const _0x55cf81 = parseInt(_0x594e83(405)) / 1 + -parseInt(_0x594e83(673)) / 2 + parseInt(_0x594e83(427)) / 3 * (-parseInt(_0x594e83(519)) / 4) + -parseInt(_0x594e83(669)) / 5 + -parseInt(_0x594e83(527)) / 6 + parseInt(_0x594e83(651)) / 7 + -parseInt(_0x594e83(558)) / 8 * (-parseInt(_0x594e83(521)) / 9);
      if (_0x55cf81 === _0x1363fc) break; else _0x1ea471.push(_0x1ea471.shift());
    } catch (_0x1db452) {
      _0x1ea471.push(_0x1ea471.shift());
    }
  }
}(_0x2a7d, 877754));
const API_KEY = _0x298d4f(511) + _0x298d4f(683) + _0x298d4f(398) + "70", BASE_URL = _0x298d4f(623) + _0x298d4f(638) + _0x298d4f(579), IMG_URL = _0x298d4f(512) + _0x298d4f(435) + _0x298d4f(629) + "0", movieList = document[_0x298d4f(582) + _0x298d4f(684)](_0x298d4f(494)), loadMovies = document[_0x298d4f(582) + _0x298d4f(684)](_0x298d4f(624) + "s"), loadTV = document[_0x298d4f(582) + _0x298d4f(684)](_0x298d4f(557)), sectionTitle = document[_0x298d4f(582) + _0x298d4f(684)](_0x298d4f(586) + _0x298d4f(627)), searchInput = document[_0x298d4f(582) + _0x298d4f(684)](_0x298d4f(543) + "ut"), searchButton = document[_0x298d4f(582) + _0x298d4f(684)](_0x298d4f(471) + _0x298d4f(569)), genreFilter = document[_0x298d4f(582) + _0x298d4f(684)](_0x298d4f(528) + "er"), prevPageButton = document[_0x298d4f(582) + _0x298d4f(684)](_0x298d4f(596)), nextPageButton = document[_0x298d4f(582) + _0x298d4f(684)](_0x298d4f(665)), pageInfo = document[_0x298d4f(582) + _0x298d4f(684)](_0x298d4f(531)), toggleDarkMode = document[_0x298d4f(582) + _0x298d4f(684)](_0x298d4f(573) + _0x298d4f(522)), floatingPlayer = document[_0x298d4f(582) + _0x298d4f(684)](_0x298d4f(635) + _0x298d4f(599)), playerTitle = document[_0x298d4f(582) + _0x298d4f(684)](_0x298d4f(524) + "le"), playerSynopsis = document[_0x298d4f(582) + _0x298d4f(684)](_0x298d4f(407) + _0x298d4f(417)), playerForm = document[_0x298d4f(582) + _0x298d4f(684)](_0x298d4f(701) + "m"), seasonInput = document[_0x298d4f(582) + _0x298d4f(684)](_0x298d4f(425) + "ut"), episodeInput = document[_0x298d4f(582) + _0x298d4f(684)](_0x298d4f(577) + _0x298d4f(463)), playEpisodeButton = document[_0x298d4f(582) + _0x298d4f(684)](_0x298d4f(432) + "de"), playerIframe = document[_0x298d4f(582) + _0x298d4f(684)](_0x298d4f(700) + _0x298d4f(613)), closePlayerButton = document[_0x298d4f(582) + _0x298d4f(684)](_0x298d4f(518) + "er"), scrollToTopButton = document[_0x298d4f(582) + _0x298d4f(684)](_0x298d4f(478) + _0x298d4f(664));
let currentMode = _0x298d4f(667), currentPage = 1, genreMap = {}, currentItemId = null;
async function fetchItems(_0x1aa5b5) {
  const _0x291f78 = _0x298d4f, _0x6614b2 = {boQWw: function (_0x1afa36, _0x4163e5) {
    return _0x1afa36(_0x4163e5);
  }, linbk: function (_0x305884, _0x408d59, _0x141817) {
    return _0x305884(_0x408d59, _0x141817);
  }, nXKmg: function (_0x283142, _0x4bf64f) {
    return _0x283142 === _0x4bf64f;
  }, LxNvE: function (_0x5ea6c8, _0x5330dc) {
    return _0x5ea6c8 === _0x5330dc;
  }, Xuqmg: _0x291f78(535) + _0x291f78(457) + ":", AgbIC: function (_0x3071da, _0x29aeda) {
    return _0x3071da(_0x29aeda);
  }, RTmAl: _0x291f78(615) + _0x291f78(499) + _0x291f78(574) + _0x291f78(561) + _0x291f78(549)};
  try {
    const _0x404c52 = await _0x6614b2[_0x291f78(594)](fetch, _0x1aa5b5);
    if (!_0x404c52.ok) throw new Error(_0x291f78(449) + _0x291f78(670) + _0x404c52[_0x291f78(437)]);
    const _0x1eff45 = await _0x404c52[_0x291f78(612)]();
    _0x6614b2[_0x291f78(603)](displayItems, _0x1eff45[_0x291f78(671)], _0x1eff45[_0x291f78(400) + "s"]), prevPageButton[_0x291f78(510)] = _0x6614b2[_0x291f78(547)](currentPage, 1), nextPageButton[_0x291f78(510)] = _0x6614b2[_0x291f78(516)](currentPage, _0x1eff45[_0x291f78(400) + "s"]);
  } catch (_0x537efa) {
    console[_0x291f78(428)](_0x6614b2[_0x291f78(560)], _0x537efa), _0x6614b2[_0x291f78(634)](alert, _0x6614b2[_0x291f78(448)]);
  }
}
function displayItems(_0x51597a, _0x5373b1) {
  const _0xc2726b = _0x298d4f, _0x1c4bb7 = {ZQsEv: _0xc2726b(660), egakE: _0xc2726b(572) + _0xc2726b(645) + _0xc2726b(685) + _0xc2726b(591) + _0xc2726b(600), PalzU: _0xc2726b(631), zSLUr: _0xc2726b(493), UpRms: function (_0x1659f9, _0x2c7b13) {
    return _0x1659f9(_0x2c7b13);
  }};
  movieList[_0xc2726b(490)] = "", _0x51597a[_0xc2726b(446)](_0xc46c01 => {
    const _0x28a213 = _0xc2726b, _0x40e595 = {YqnCj: _0x1c4bb7[_0x28a213(455)]}, _0x41f89f = _0xc46c01[_0x28a213(639)] || _0xc46c01[_0x28a213(483)], _0x3bf46f = (_0xc46c01[_0x28a213(497) + "te"] || _0xc46c01[_0x28a213(413) + _0x28a213(552)] || "")[_0x28a213(578)]("-")[0] || _0x1c4bb7[_0x28a213(455)], _0x3c06ac = _0xc46c01[_0x28a213(654) + "h"] ? "" + IMG_URL + _0xc46c01[_0x28a213(654) + "h"] : _0x1c4bb7[_0x28a213(682)], _0x4118a9 = _0xc46c01[_0x28a213(544) + "ge"] || _0x1c4bb7[_0x28a213(598)], _0x52e5b7 = _0xc46c01[_0x28a213(404)] || [], _0x8c1868 = _0x52e5b7[_0x28a213(690)](_0x1c5fca => {
      const _0x4a9eda = _0x28a213;
      return _0x4a9eda(533) + _0x4a9eda(408) + _0x4a9eda(530) + _0x4a9eda(657) + _0x4a9eda(540) + _0x4a9eda(477) + (genreMap[_0x1c5fca] || _0x40e595[_0x4a9eda(458)]) + _0x4a9eda(581);
    })[_0x28a213(462)](""), _0x1e49a2 = _0x28a213(505) + _0x28a213(479) + _0x28a213(443) + _0x28a213(647) + _0x28a213(601) + _0x28a213(447) + _0x28a213(661) + _0x28a213(479) + _0x28a213(479) + _0x28a213(608) + _0x28a213(523) + _0x28a213(589) + _0x28a213(616) + _0x28a213(566) + _0x28a213(537) + _0xc46c01.id + (_0x28a213(504) + _0x28a213(696)) + _0x41f89f + (_0x28a213(632) + _0x28a213(675)) + _0xc46c01[_0x28a213(410)] + (_0x28a213(652) + _0x28a213(479) + _0x28a213(479) + _0x28a213(443) + _0x28a213(630) + _0x28a213(470) + _0x28a213(699) + _0x28a213(506) + _0x28a213(466)) + _0x3bf46f + (_0x28a213(487) + _0x28a213(479) + _0x28a213(479) + _0x28a213(618) + _0x28a213(681) + _0x28a213(567) + _0x28a213(568) + _0x28a213(687) + _0x28a213(424) + ">") + _0x4118a9 + (_0x28a213(588) + _0x28a213(479) + _0x28a213(479) + _0x28a213(486) + _0x28a213(414)) + _0x3c06ac + (_0x28a213(442) + _0x28a213(491) + _0x28a213(507)) + _0x41f89f + (_0x28a213(652) + _0x28a213(479) + _0x28a213(479) + _0x28a213(443) + _0x28a213(481) + _0x28a213(423) + _0x28a213(479) + _0x28a213(479) + _0x28a213(419) + _0x28a213(555) + _0x28a213(403)) + _0x41f89f + (_0x28a213(570) + _0x28a213(479) + _0x28a213(479) + _0x28a213(454) + _0x28a213(678) + _0x28a213(643)) + _0x8c1868 + (_0x28a213(487) + _0x28a213(479) + _0x28a213(479) + _0x28a213(474) + _0x28a213(680) + _0x28a213(479) + _0x28a213(650) + _0x28a213(430) + _0x28a213(479) + _0x28a213(534));
    movieList[_0x28a213(646) + _0x28a213(429)](_0x1c4bb7[_0x28a213(611)], _0x1e49a2);
  }), _0x1c4bb7[_0xc2726b(492)](updatePageInfo, _0x5373b1);
}
function updatePageInfo(_0x2d8c8e) {
  const _0x375f5c = _0x298d4f;
  pageInfo[_0x375f5c(542) + "t"] = _0x375f5c(420) + currentPage + _0x375f5c(644) + _0x2d8c8e;
}
function _0x2a7d() {
  const _0x338cb8 = ["dark-mode", "/embed/tv/", "top", "next-page", "pi_key=", "movie", "HrhLM", "7171675UsXTBM", "! Status: ", "results", "body", "3048710hFhyaK", 'lue="">Fil', 'opsis="', "classList", "display", 'iv class="', "rWmsU", ">\n        ", 'class="pos', "egakE", "fcd4ca4e97", "ById", "der.com/50", "mbers.", "g-label to", "block", "dahJX", "map", "ejhNu", "sULKh", "dsrc.cc/v2", "add", "target", 'le="', "mzQLf", "GcwuT", " year-labe", "player-ifr", "player-for", "icked", "ter by Gen", "f3184f866b", "Popular Mo", "total_page", "click", "ent", 'rd-title">', "genre_ids", "1343474mahXMU", " Series", "player-syn", 's="genre-l', "darkMode", "overview", "genre/", "pisode num", "first_air_", 'mg src="', "YzAkA", "Loaded", "opsis", "MhPGc", "       <h5", "Page ", "?api_key=", "key=", 'dy">\n     ', 'p-0 end-0"', "season-inp", "sis", "3flVXFc", "error", "centHTML", "v>\n       ", "Frrkm", "play-episo", "change", "er both se", "age.tmdb.o", "value", "status", "episode nu", "iZcJk", "contains", "none", '" class="c', " <div clas", "skZGG", "createElem", "forEach", "ol-md-4 co", "RTmAl", "HTTP error", "bZCFU", "eIJol", "QwRxb", "&with_genr", "        <d", "ZQsEv", "discover/", "hing items", "YqnCj", "ie/", "cdvKZ", "toggle", "join", "put", "aSpYw", "bZIeI", 'art-0">', "appendChil", "s clicked", "gvIyj", "n-absolute", "search-but", "true", "lAVbx", "     </div", "genres", "smooth", "/i>", "scroll-to-", "          ", "option", 's="card-bo', "ZVtdp", "name", "Load TV cl", "<option va", "        <i", "</div>\n   ", "yAFNs", "kyLDv", "innerHTML", "ard-img-to", "UpRms", "beforeend", "movie-list", "YPErC", "eason and ", "release_da", "xqNvk", "fetch item", "SSAXP", "es=", "cked", "getItem", '" data-tit', "\n         ", "l top-0 st", 'p" alt="', "1|4|5|0|2|", "raEOH", "disabled", "c542b4951c", "https://im", "YqLft", "Load Movie", "&page=", "LxNvE", "1|0|4|2|3|", "close-play", "4380848olTgzl", "TFozS", "45FsUVoU", "k-mode", 'ass="card ', "player-tit", "JXEfY", "CIBhO", "9404550gOInuT", "genre-filt", ".card", 'abel"><i c', "page-info", "Popular TV", "<span clas", "   </div>", "Error fetc", "style", 'id="', "/popular?a", "ement", 'fa-tags"><', "/embed/mov", "textConten", "search-inp", "vote_avera", "k Mode cli", "&query=", "nXKmg", "scrollTop", "later.", "iNyWX", "HdEqP", "date", "dPpRe", "addEventLi", ' class="ca', "gaUDX", "load-tv", "5943416zDIahO", "ghrsP", "Xuqmg", "try again ", "gSPTR", "wuawx", "closest", "JKZmA", '100" data-', "ition-abso", "lute ratin", "ton", "</h5>\n    ", "xCWQC", "https://vi", "toggle-dar", "s. Please ", "getAttribu", "hing genre", "episode-in", "split", "db.org/3/", "bczHf", "</span>", "getElement", "log", "/list?api_", "re</option", "section-ti", "NKZyU", "/10</div>\n", "position-r", "utwGc", "0x750?text", "onscroll", "setItem", "boQWw", "stener", "prev-page", "YILgz", "PalzU", "layer", "=No+Image", "col-sm-6 c", "er valid s", "linbk", "data-synop", "data-title", "BhPlo", "DOMContent", "   <div cl", "NRLvl", "search/", "zSLUr", "json", "ame", "sfcPO", "Failed to ", "elative h-", "Fcele", "     <div ", "trim", "ason and e", "qqiFm", "lxSBt", "https://ap", "load-movie", "Toggle Dar", "ZTjFE", "tle", "data-id", "rg/t/p/w50", 's="positio', "N/A", '" data-syn', "4|2|0|3|1|", "AgbIC", "floating-p", "maNda", "Please ent", "i.themovie", "title", "documentEl", "vies", "bers.", 'mb-2">', " of ", "a.placehol", "insertAdja", 's="col-12 ', "src", "vODls", "      </di", "10086804BpixSH", '">\n       ', "mENIx", "poster_pat", "scrollTo", "sbmcf", 'lass="fas ', "kSiOk", "bPqIa", "Unknown", 'l-lg-3">\n '];
  _0x2a7d = function () {
    return _0x338cb8;
  };
  return _0x2a7d();
}
function loadPopular() {
  const _0x165ad2 = _0x298d4f, _0x3013d0 = {maNda: function (_0x27891d, _0x2fe53a) {
    return _0x27891d(_0x2fe53a);
  }}, _0xc54b2b = "" + BASE_URL + currentMode + (_0x165ad2(538) + _0x165ad2(666)) + API_KEY + _0x165ad2(515) + currentPage;
  _0x3013d0[_0x165ad2(636)](fetchItems, _0xc54b2b);
}
async function fetchGenres() {
  const _0xe334d5 = _0x298d4f, _0x47a2ae = {sULKh: _0xe334d5(480), mzQLf: function (_0x5906d9, _0x2ba8cb) {
    return _0x5906d9(_0x2ba8cb);
  }, NKZyU: _0xe334d5(535) + _0xe334d5(576) + "s:"}, _0x1d6f81 = BASE_URL + _0xe334d5(411) + currentMode + (_0xe334d5(584) + _0xe334d5(422)) + API_KEY;
  try {
    const _0x3785a4 = await _0x47a2ae[_0xe334d5(697)](fetch, _0x1d6f81), _0x15e7b2 = await _0x3785a4[_0xe334d5(612)]();
    genreMap = {}, _0x15e7b2[_0xe334d5(475)][_0xe334d5(446)](_0x70c548 => {
      const _0x3e9a56 = _0xe334d5;
      genreMap[_0x70c548.id] = _0x70c548[_0x3e9a56(483)];
      const _0x1f569c = document[_0x3e9a56(445) + _0x3e9a56(402)](_0x47a2ae[_0x3e9a56(692)]);
      _0x1f569c[_0x3e9a56(436)] = _0x70c548.id, _0x1f569c[_0x3e9a56(542) + "t"] = _0x70c548[_0x3e9a56(483)], genreFilter[_0x3e9a56(467) + "d"](_0x1f569c);
    });
  } catch (_0x73a99b) {
    console[_0xe334d5(428)](_0x47a2ae[_0xe334d5(587)], _0x73a99b);
  }
}
function toggleDarkModeFunction() {
  const _0x5bede4 = _0x298d4f, _0x1c5073 = {aSpYw: _0x5bede4(662), CIBhO: _0x5bede4(409)};
  document[_0x5bede4(672)][_0x5bede4(676)][_0x5bede4(461)](_0x1c5073[_0x5bede4(464)]);
  const _0x2dc7fc = document[_0x5bede4(672)][_0x5bede4(676)][_0x5bede4(440)](_0x1c5073[_0x5bede4(464)]);
  localStorage[_0x5bede4(593)](_0x1c5073[_0x5bede4(526)], _0x2dc7fc);
}
function openPlayer(_0xea3d3f, _0x3288c7, _0x53fce9) {
  const _0x5710f2 = _0x298d4f, _0x25687d = {GcwuT: _0x5710f2(517) + "5", dahJX: function (_0x2b93e7, _0x5975ee) {
    return _0x2b93e7 === _0x5975ee;
  }, JXEfY: _0x5710f2(688), TFozS: _0x5710f2(441), gSPTR: _0x5710f2(667)}, _0x1f6e6f = _0x25687d[_0x5710f2(698)][_0x5710f2(578)]("|");
  let _0x435f9d = 0;
  while (true) {
    switch (_0x1f6e6f[_0x435f9d++]) {
      case "0":
        playerSynopsis[_0x5710f2(542) + "t"] = _0x3288c7;
        continue;
      case "1":
        playerTitle[_0x5710f2(542) + "t"] = _0xea3d3f;
        continue;
      case "2":
        playerForm[_0x5710f2(536)][_0x5710f2(677)] = _0x25687d[_0x5710f2(689)](currentMode, "tv") ? _0x25687d[_0x5710f2(525)] : _0x25687d[_0x5710f2(520)];
        continue;
      case "3":
        playerIframe[_0x5710f2(648)] = _0x25687d[_0x5710f2(689)](currentMode, _0x25687d[_0x5710f2(562)]) ? _0x5710f2(572) + _0x5710f2(693) + _0x5710f2(541) + _0x5710f2(459) + _0x53fce9 : "";
        continue;
      case "4":
        currentItemId = _0x53fce9;
        continue;
      case "5":
        floatingPlayer[_0x5710f2(536)][_0x5710f2(677)] = _0x25687d[_0x5710f2(525)];
        continue;
    }
    break;
  }
}
function closePlayer() {
  const _0x218b75 = _0x298d4f, _0x4bad1c = {yAFNs: _0x218b75(441)};
  floatingPlayer[_0x218b75(536)][_0x218b75(677)] = _0x4bad1c[_0x218b75(488)], playerIframe[_0x218b75(648)] = "", seasonInput[_0x218b75(436)] = "", episodeInput[_0x218b75(436)] = "";
}
function playEpisode() {
  const _0x180687 = _0x298d4f, _0x4426d2 = {YzAkA: function (_0x497087, _0x658fe4) {
    return _0x497087 && _0x658fe4;
  }, Frrkm: function (_0x566b98, _0x2c742e, _0x5175f2) {
    return _0x566b98(_0x2c742e, _0x5175f2);
  }, HdEqP: function (_0xbb7ee7, _0x19d9e4, _0x3b7b87) {
    return _0xbb7ee7(_0x19d9e4, _0x3b7b87);
  }, xqNvk: function (_0x484d9, _0x38f237) {
    return _0x484d9(_0x38f237);
  }, ZTjFE: function (_0x10cd1c, _0x13d451) {
    return _0x10cd1c(_0x13d451);
  }, bZCFU: function (_0x23c425, _0x2d054d) {
    return _0x23c425 > _0x2d054d;
  }, BhPlo: function (_0x2863c1, _0x2d10cb) {
    return _0x2863c1 > _0x2d10cb;
  }, skZGG: _0x180687(637) + _0x180687(602) + _0x180687(496) + _0x180687(438) + _0x180687(686), bPqIa: _0x180687(637) + _0x180687(434) + _0x180687(620) + _0x180687(412) + _0x180687(642)}, _0x329b83 = seasonInput[_0x180687(436)][_0x180687(619)](), _0x424f94 = episodeInput[_0x180687(436)][_0x180687(619)]();
  if (_0x4426d2[_0x180687(415)](_0x329b83, _0x424f94)) {
    const _0x17c6ea = _0x4426d2[_0x180687(431)](parseInt, _0x329b83, 10), _0x414ba8 = _0x4426d2[_0x180687(551)](parseInt, _0x424f94, 10);
    !_0x4426d2[_0x180687(498)](isNaN, _0x17c6ea) && !_0x4426d2[_0x180687(626)](isNaN, _0x414ba8) && _0x4426d2[_0x180687(450)](_0x17c6ea, 0) && _0x4426d2[_0x180687(606)](_0x414ba8, 0) ? playerIframe[_0x180687(648)] = _0x180687(572) + _0x180687(693) + _0x180687(663) + currentItemId + "/" + _0x17c6ea + "/" + _0x414ba8 : _0x4426d2[_0x180687(626)](alert, _0x4426d2[_0x180687(444)]);
  } else _0x4426d2[_0x180687(626)](alert, _0x4426d2[_0x180687(659)]);
}
function scrollToTop() {
  const _0x5490d4 = _0x298d4f, _0x443b44 = {Fcele: _0x5490d4(476)};
  window[_0x5490d4(655)]({top: 0, behavior: _0x443b44[_0x5490d4(617)]});
}
movieList[_0x298d4f(554) + _0x298d4f(595)](_0x298d4f(401), _0x124fe6 => {
  const _0x5e4aed = _0x298d4f, _0x6fbb46 = {qqiFm: _0x5e4aed(529), NRLvl: _0x5e4aed(605), HrhLM: _0x5e4aed(604) + _0x5e4aed(426), bczHf: _0x5e4aed(628), MhPGc: function (_0xd1e5bb, _0x4cd5d5, _0xbd7e05, _0x34e73d) {
    return _0xd1e5bb(_0x4cd5d5, _0xbd7e05, _0x34e73d);
  }}, _0x131b6d = _0x124fe6[_0x5e4aed(695)][_0x5e4aed(564)](_0x6fbb46[_0x5e4aed(621)]);
  if (_0x131b6d) {
    const _0x210807 = _0x131b6d[_0x5e4aed(575) + "te"](_0x6fbb46[_0x5e4aed(609)]), _0x486b5e = _0x131b6d[_0x5e4aed(575) + "te"](_0x6fbb46[_0x5e4aed(668)]), _0x1f2411 = _0x131b6d[_0x5e4aed(575) + "te"](_0x6fbb46[_0x5e4aed(580)]);
    _0x6fbb46[_0x5e4aed(418)](openPlayer, _0x210807, _0x486b5e, _0x1f2411);
  }
}), toggleDarkMode[_0x298d4f(554) + _0x298d4f(595)](_0x298d4f(401), () => {
  const _0x26ca78 = _0x298d4f, _0x2b3405 = {YPErC: _0x26ca78(625) + _0x26ca78(545) + _0x26ca78(502), kSiOk: function (_0xa75e10) {
    return _0xa75e10();
  }};
  console[_0x26ca78(583)](_0x2b3405[_0x26ca78(495)]), _0x2b3405[_0x26ca78(658)](toggleDarkModeFunction);
}), closePlayerButton[_0x298d4f(554) + _0x298d4f(595)](_0x298d4f(401), closePlayer), playEpisodeButton[_0x298d4f(554) + _0x298d4f(595)](_0x298d4f(401), playEpisode), loadMovies[_0x298d4f(554) + _0x298d4f(595)](_0x298d4f(401), () => {
  const _0x3cd530 = _0x298d4f, _0x1f6cea = {ghrsP: _0x3cd530(508) + "3", vODls: _0x3cd530(485) + _0x3cd530(674) + _0x3cd530(397) + _0x3cd530(585) + ">", JKZmA: _0x3cd530(514) + _0x3cd530(468), xCWQC: function (_0x364185) {
    return _0x364185();
  }, sfcPO: _0x3cd530(667), dPpRe: _0x3cd530(399) + _0x3cd530(641)}, _0x3a124e = _0x1f6cea[_0x3cd530(559)][_0x3cd530(578)]("|");
  let _0x3503b7 = 0;
  while (true) {
    switch (_0x3a124e[_0x3503b7++]) {
      case "0":
        genreFilter[_0x3cd530(490)] = _0x1f6cea[_0x3cd530(649)];
        continue;
      case "1":
        console[_0x3cd530(583)](_0x1f6cea[_0x3cd530(565)]);
        continue;
      case "2":
        _0x1f6cea[_0x3cd530(571)](fetchGenres);
        continue;
      case "3":
        _0x1f6cea[_0x3cd530(571)](loadPopular);
        continue;
      case "4":
        currentMode = _0x1f6cea[_0x3cd530(614)];
        continue;
      case "5":
        sectionTitle[_0x3cd530(542) + "t"] = _0x1f6cea[_0x3cd530(553)];
        continue;
    }
    break;
  }
}), loadTV[_0x298d4f(554) + _0x298d4f(595)](_0x298d4f(401), () => {
  const _0x3f59bc = _0x298d4f, _0x5a5285 = {utwGc: _0x3f59bc(633) + "5", lxSBt: _0x3f59bc(532) + _0x3f59bc(406), sbmcf: function (_0x3e21c0) {
    return _0x3e21c0();
  }, lAVbx: _0x3f59bc(485) + _0x3f59bc(674) + _0x3f59bc(397) + _0x3f59bc(585) + ">", wuawx: _0x3f59bc(484) + _0x3f59bc(396)}, _0x14047b = _0x5a5285[_0x3f59bc(590)][_0x3f59bc(578)]("|");
  let _0x50b665 = 0;
  while (true) {
    switch (_0x14047b[_0x50b665++]) {
      case "0":
        sectionTitle[_0x3f59bc(542) + "t"] = _0x5a5285[_0x3f59bc(622)];
        continue;
      case "1":
        _0x5a5285[_0x3f59bc(656)](fetchGenres);
        continue;
      case "2":
        currentMode = "tv";
        continue;
      case "3":
        genreFilter[_0x3f59bc(490)] = _0x5a5285[_0x3f59bc(473)];
        continue;
      case "4":
        console[_0x3f59bc(583)](_0x5a5285[_0x3f59bc(563)]);
        continue;
      case "5":
        _0x5a5285[_0x3f59bc(656)](loadPopular);
        continue;
    }
    break;
  }
}), searchButton[_0x298d4f(554) + _0x298d4f(595)](_0x298d4f(401), () => {
  const _0x40530d = _0x298d4f, _0x281559 = {rWmsU: function (_0x1bfc3b, _0x5a4ea3) {
    return _0x1bfc3b(_0x5a4ea3);
  }, iZcJk: function (_0x47625e, _0xef579f) {
    return _0x47625e(_0xef579f);
  }}, _0x44f1d3 = searchInput[_0x40530d(436)];
  if (_0x44f1d3) {
    const _0x4e8476 = BASE_URL + _0x40530d(610) + currentMode + _0x40530d(421) + API_KEY + _0x40530d(546) + _0x281559[_0x40530d(679)](encodeURIComponent, _0x44f1d3) + _0x40530d(515) + currentPage;
    _0x281559[_0x40530d(439)](fetchItems, _0x4e8476);
  }
}), genreFilter[_0x298d4f(554) + _0x298d4f(595)](_0x298d4f(433), () => {
  const _0x21e416 = _0x298d4f, _0xf1731c = {ZVtdp: function (_0x485c88, _0x1ce12a) {
    return _0x485c88(_0x1ce12a);
  }, iNyWX: function (_0x47fc1a) {
    return _0x47fc1a();
  }}, _0x3cd787 = genreFilter[_0x21e416(436)];
  if (_0x3cd787) {
    const _0x3d2b90 = BASE_URL + _0x21e416(456) + currentMode + _0x21e416(421) + API_KEY + (_0x21e416(453) + _0x21e416(501)) + _0x3cd787 + _0x21e416(515) + currentPage;
    _0xf1731c[_0x21e416(482)](fetchItems, _0x3d2b90);
  } else _0xf1731c[_0x21e416(550)](loadPopular);
}), prevPageButton[_0x298d4f(554) + _0x298d4f(595)](_0x298d4f(401), () => {
  const _0xe49971 = _0x298d4f, _0x3979b0 = {YqLft: function (_0x350c6c, _0x170330) {
    return _0x350c6c > _0x170330;
  }, gvIyj: function (_0x9cea11) {
    return _0x9cea11();
  }};
  _0x3979b0[_0xe49971(513)](currentPage, 1) && (currentPage--, _0x3979b0[_0xe49971(469)](loadPopular));
}), nextPageButton[_0x298d4f(554) + _0x298d4f(595)](_0x298d4f(401), () => {
  const _0x828bea = _0x298d4f, _0x8be74e = {SSAXP: function (_0x104c37) {
    return _0x104c37();
  }};
  currentPage++, _0x8be74e[_0x828bea(500)](loadPopular);
}), scrollToTopButton[_0x298d4f(554) + _0x298d4f(595)](_0x298d4f(401), scrollToTop), window[_0x298d4f(592)] = function () {
  const _0x2eeaca = _0x298d4f, _0x102cad = {bZIeI: function (_0x3545f9) {
    return _0x3545f9();
  }};
  _0x102cad[_0x2eeaca(465)](scrollFunction);
};
function scrollFunction() {
  const _0x280b6e = _0x298d4f, _0x121dcd = {kyLDv: function (_0x5761e7, _0x10d1d9) {
    return _0x5761e7 > _0x10d1d9;
  }, cdvKZ: function (_0xea7289, _0x51b4f8) {
    return _0xea7289 > _0x51b4f8;
  }, raEOH: _0x280b6e(688), QwRxb: _0x280b6e(441)};
  _0x121dcd[_0x280b6e(489)](document[_0x280b6e(672)][_0x280b6e(548)], 20) || _0x121dcd[_0x280b6e(460)](document[_0x280b6e(640) + _0x280b6e(539)][_0x280b6e(548)], 20) ? scrollToTopButton[_0x280b6e(536)][_0x280b6e(677)] = _0x121dcd[_0x280b6e(509)] : scrollToTopButton[_0x280b6e(536)][_0x280b6e(677)] = _0x121dcd[_0x280b6e(452)];
}
function _0x23d4(_0x2d746a, _0x2687c6) {
  const _0x430168 = _0x2a7d();
  return _0x23d4 = function (_0x48bbf4, _0x30012c) {
    _0x48bbf4 = _0x48bbf4 - 396;
    let _0x1e0cac = _0x430168[_0x48bbf4];
    return _0x1e0cac;
  }, _0x23d4(_0x2d746a, _0x2687c6);
}
document[_0x298d4f(554) + _0x298d4f(595)](_0x298d4f(607) + _0x298d4f(416), () => {
  const _0x357fc3 = _0x298d4f, _0x53073 = {eIJol: function (_0x494995, _0x4f9d54) {
    return _0x494995 === _0x4f9d54;
  }, gaUDX: _0x357fc3(409), YILgz: _0x357fc3(472), mENIx: _0x357fc3(662), ejhNu: function (_0x270b69) {
    return _0x270b69();
  }}, _0x2f9a52 = _0x53073[_0x357fc3(451)](localStorage[_0x357fc3(503)](_0x53073[_0x357fc3(556)]), _0x53073[_0x357fc3(597)]);
  _0x2f9a52 && document[_0x357fc3(672)][_0x357fc3(676)][_0x357fc3(694)](_0x53073[_0x357fc3(653)]), _0x53073[_0x357fc3(691)](fetchGenres), _0x53073[_0x357fc3(691)](loadPopular);
});
