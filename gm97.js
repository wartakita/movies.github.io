const _0x51e6e5 = _0x5931;
(function (_0x59f6c1, _0x265876) {
  const _0x16f055 = _0x5931, _0x361993 = _0x59f6c1();
  while (true) {
    try {
      const _0x2e3c63 = -parseInt(_0x16f055(368)) / 1 + parseInt(_0x16f055(289)) / 2 * (parseInt(_0x16f055(388)) / 3) + parseInt(_0x16f055(461)) / 4 * (-parseInt(_0x16f055(259)) / 5) + parseInt(_0x16f055(248)) / 6 + -parseInt(_0x16f055(494)) / 7 + parseInt(_0x16f055(296)) / 8 + parseInt(_0x16f055(543)) / 9 * (parseInt(_0x16f055(531)) / 10);
      if (_0x2e3c63 === _0x265876) break; else _0x361993.push(_0x361993.shift());
    } catch (_0x37e9e3) {
      _0x361993.push(_0x361993.shift());
    }
  }
}(_0x2307, 860202));
const API_KEY = _0x51e6e5(413) + _0x51e6e5(399) + _0x51e6e5(376) + "70", BASE_URL = _0x51e6e5(342) + _0x51e6e5(414) + _0x51e6e5(280), IMG_URL = _0x51e6e5(523) + _0x51e6e5(426) + _0x51e6e5(522) + "0", movieList = document[_0x51e6e5(456) + _0x51e6e5(457)](_0x51e6e5(356)), loadMovies = document[_0x51e6e5(456) + _0x51e6e5(457)](_0x51e6e5(373) + "s"), loadTV = document[_0x51e6e5(456) + _0x51e6e5(457)](_0x51e6e5(502)), sectionTitle = document[_0x51e6e5(456) + _0x51e6e5(457)](_0x51e6e5(275) + _0x51e6e5(284)), searchInput = document[_0x51e6e5(456) + _0x51e6e5(457)](_0x51e6e5(270) + "ut"), searchButton = document[_0x51e6e5(456) + _0x51e6e5(457)](_0x51e6e5(336) + _0x51e6e5(359)), genreFilter = document[_0x51e6e5(456) + _0x51e6e5(457)](_0x51e6e5(295) + "er"), prevPageButton = document[_0x51e6e5(456) + _0x51e6e5(457)](_0x51e6e5(404)), nextPageButton = document[_0x51e6e5(456) + _0x51e6e5(457)](_0x51e6e5(276)), pageInfo = document[_0x51e6e5(456) + _0x51e6e5(457)](_0x51e6e5(255)), toggleDarkMode = document[_0x51e6e5(456) + _0x51e6e5(457)](_0x51e6e5(301) + _0x51e6e5(348)), floatingPlayer = document[_0x51e6e5(456) + _0x51e6e5(457)](_0x51e6e5(489) + _0x51e6e5(387)), playerTitle = document[_0x51e6e5(456) + _0x51e6e5(457)](_0x51e6e5(371) + "le"), playerSynopsis = document[_0x51e6e5(456) + _0x51e6e5(457)](_0x51e6e5(283) + _0x51e6e5(319)), playerForm = document[_0x51e6e5(456) + _0x51e6e5(457)](_0x51e6e5(358) + "m"), seasonInput = document[_0x51e6e5(456) + _0x51e6e5(457)](_0x51e6e5(397) + "ut"), episodeInput = document[_0x51e6e5(456) + _0x51e6e5(457)](_0x51e6e5(529) + _0x51e6e5(537)), playEpisodeButton = document[_0x51e6e5(456) + _0x51e6e5(457)](_0x51e6e5(394) + "de"), playerIframe = document[_0x51e6e5(456) + _0x51e6e5(457)](_0x51e6e5(266) + _0x51e6e5(429)), closePlayerButton = document[_0x51e6e5(456) + _0x51e6e5(457)](_0x51e6e5(372) + "er"), scrollToTopButton = document[_0x51e6e5(456) + _0x51e6e5(457)](_0x51e6e5(544) + _0x51e6e5(344));
let currentMode = _0x51e6e5(260), currentPage = 1, genreMap = {}, currentItemId = null;
async function fetchItems(_0x26feb7) {
  const _0x53668f = _0x51e6e5, _0x332d59 = {XAmNW: function (_0x40b921, _0x171cce) {
    return _0x40b921(_0x171cce);
  }, kGBSV: function (_0x55a84f, _0x5263a7, _0x30aa26) {
    return _0x55a84f(_0x5263a7, _0x30aa26);
  }, kXBmr: function (_0x422c97, _0x587536) {
    return _0x422c97 === _0x587536;
  }, sbjNm: _0x53668f(298) + _0x53668f(318) + ":", QGfLl: _0x53668f(272) + _0x53668f(545) + _0x53668f(500) + _0x53668f(269) + _0x53668f(383)};
  try {
    const _0x2dda39 = await _0x332d59[_0x53668f(446)](fetch, _0x26feb7);
    if (!_0x2dda39.ok) throw new Error(_0x53668f(445) + _0x53668f(268) + _0x2dda39[_0x53668f(247)]);
    const _0x18d20c = await _0x2dda39[_0x53668f(420)]();
    _0x332d59[_0x53668f(267)](displayItems, _0x18d20c[_0x53668f(288)], _0x18d20c[_0x53668f(508) + "s"]), prevPageButton[_0x53668f(480)] = _0x332d59[_0x53668f(406)](currentPage, 1), nextPageButton[_0x53668f(480)] = _0x332d59[_0x53668f(406)](currentPage, _0x18d20c[_0x53668f(508) + "s"]);
  } catch (_0x1c4a3f) {
    console[_0x53668f(385)](_0x332d59[_0x53668f(326)], _0x1c4a3f), _0x332d59[_0x53668f(446)](alert, _0x332d59[_0x53668f(511)]);
  }
}
function displayItems(_0x2a7204, _0x245ee0) {
  const _0x1dfe41 = _0x51e6e5, _0x33e56e = {EMMaU: _0x1dfe41(252), vCYWz: _0x1dfe41(463) + _0x1dfe41(306) + _0x1dfe41(389) + _0x1dfe41(465) + _0x1dfe41(340), WifcI: _0x1dfe41(521), CBcUc: _0x1dfe41(381), HYrhi: function (_0x5682f3, _0x2a1251) {
    return _0x5682f3(_0x2a1251);
  }};
  movieList[_0x1dfe41(302)] = "", _0x2a7204[_0x1dfe41(307)](_0x324799 => {
    const _0x31e738 = _0x1dfe41, _0x36b722 = _0x324799[_0x31e738(473)] || _0x324799[_0x31e738(428)], _0x10ebc1 = (_0x324799[_0x31e738(246) + "te"] || _0x324799[_0x31e738(338) + _0x31e738(442)] || "")[_0x31e738(294)]("-")[0] || _0x33e56e[_0x31e738(417)], _0xb8a5f6 = _0x324799[_0x31e738(524) + "h"] ? "" + IMG_URL + _0x324799[_0x31e738(524) + "h"] : _0x33e56e[_0x31e738(322)], _0x26955b = _0x324799[_0x31e738(477) + "ge"] || _0x33e56e[_0x31e738(335)], _0x2ca322 = _0x324799[_0x31e738(496)] || [], _0x494090 = _0x2ca322[_0x31e738(262)](_0x461cb0 => {
      const _0x518a38 = _0x31e738;
      return _0x518a38(409) + _0x518a38(437) + _0x518a38(534) + _0x518a38(398) + _0x518a38(507) + _0x518a38(384) + (genreMap[_0x461cb0] || _0x33e56e[_0x518a38(417)]) + _0x518a38(374);
    })[_0x31e738(479)](""), _0x4af9e9 = _0x31e738(431) + _0x31e738(303) + _0x31e738(459) + _0x31e738(430) + _0x31e738(317) + _0x31e738(379) + _0x31e738(320) + _0x31e738(303) + _0x31e738(303) + _0x31e738(363) + _0x31e738(525) + _0x31e738(514) + _0x31e738(395) + _0x31e738(341) + _0x31e738(468) + _0x324799.id + (_0x31e738(300) + _0x31e738(474)) + _0x36b722 + (_0x31e738(427) + _0x31e738(422)) + _0x324799[_0x31e738(285)] + (_0x31e738(312) + _0x31e738(303) + _0x31e738(303) + _0x31e738(459) + _0x31e738(418) + _0x31e738(423) + _0x31e738(297) + _0x31e738(450) + _0x31e738(291)) + _0x10ebc1 + (_0x31e738(492) + _0x31e738(303) + _0x31e738(303) + _0x31e738(396) + _0x31e738(400) + _0x31e738(490) + _0x31e738(536) + _0x31e738(503) + _0x31e738(310) + ">") + _0x26955b + (_0x31e738(287) + _0x31e738(303) + _0x31e738(303) + _0x31e738(438) + _0x31e738(518)) + _0xb8a5f6 + (_0x31e738(472) + _0x31e738(458) + _0x31e738(345)) + _0x36b722 + (_0x31e738(312) + _0x31e738(303) + _0x31e738(303) + _0x31e738(459) + _0x31e738(360) + _0x31e738(286) + _0x31e738(303) + _0x31e738(303) + _0x31e738(330) + _0x31e738(367) + _0x31e738(476)) + _0x36b722 + (_0x31e738(485) + _0x31e738(303) + _0x31e738(303) + _0x31e738(488) + _0x31e738(258) + _0x31e738(505)) + _0x494090 + (_0x31e738(492) + _0x31e738(303) + _0x31e738(303) + _0x31e738(454) + _0x31e738(487) + _0x31e738(303) + _0x31e738(424) + _0x31e738(386) + _0x31e738(303) + _0x31e738(256));
    movieList[_0x31e738(264) + _0x31e738(365)](_0x33e56e[_0x31e738(436)], _0x4af9e9);
  }), _0x33e56e[_0x1dfe41(447)](updatePageInfo, _0x245ee0);
}
function _0x2307() {
  const _0x3661ad = ["ition-abso", "value", "</div>\n   ", "Popular TV", "2825361lTNWmN", "?api_key=", "genre_ids", "RPuIe", "rwIDN", "target", "s. Please ", "k Mode cli", "load-tv", "g-label to", "fsqHO", 'mb-2">', "oRffl", 'fa-tags"><', "total_page", "3|1|5|0|2|", "qGFbs", "QGfLl", "EObqk", "QOWUK", "position-r", "add", "gRaKK", "hidsI", 'mg src="', "gUods", "data-synop", "N/A", "rg/t/p/w50", "https://im", "poster_pat", 'ass="card ', "sis", "s clicked", "ammrE", "episode-in", "/embed/tv/", "190sNFfOP", "true", "okBhB", 'abel"><i c', "zIMaX", "lute ratin", "put", "none", "search/", "src", "episode nu", "QEVVw", "1086273lJxgaj", "scroll-to-", "fetch item", "ATHjz", "lqESK", "ULstD", "dkfXN", "display", "mbers.", "release_da", "status", "4782120cSXPCB", "IJYHT", "data-title", "style", "Unknown", "closest", "genres", "page-info", "   </div>", "jDLNc", 'iv class="', "2371660DcRxzu", "movie", "&page=", "map", "xzwOf", "insertAdja", "VCNPv", "player-ifr", "kGBSV", "! Status: ", "try again ", "search-inp", "btOai", "Failed to ", "onscroll", "ATTSc", "section-ti", "next-page", "Ubans", "block", "TCVhg", "db.org/3/", "XZTlG", "eason and ", "player-syn", "tle", "overview", 'dy">\n     ', "/10</div>\n", "results", "16550FDRiPW", "/embed/mov", 'art-0">', "ElpHB", "Page ", "split", "genre-filt", "1106392TFwroE", " year-labe", "Error fetc", "ent", '" data-tit', "toggle-dar", "innerHTML", "          ", "hbxEZ", "SoEqB", "a.placehol", "forEach", "createElem", "PJDMN", 'p-0 end-0"', "getItem", '">\n       ', "er valid s", "FnnvW", "Please ent", "fSuLq", "col-sm-6 c", "hing items", "opsis", 'l-lg-3">\n ', "setItem", "vCYWz", "bers.", "darkMode", "change", "sbjNm", "mfEhm", "/list?api_", "dark-mode", "       <h5", "es=", "option", "hing genre", "fAMcv", "WifcI", "search-but", "<option va", "first_air_", "QFtZe", "=No+Image", '100" data-', "https://ap", "ie/", "top", 'p" alt="', "&query=", "dsrc.cc/v2", "k-mode", "re</option", "body", "EStkm", "cked", "opdix", "NssGx", "cwFrV", "movie-list", "Load TV cl", "player-for", "ton", 's="card-bo', "textConten", "wuPnP", "   <div cl", "click", "centHTML", "er both se", ' class="ca', "831366fPigWn", "2|3|5|0|4|", "ftwUW", "player-tit", "close-play", "load-movie", "</span>", "smooth", "f3184f866b", "aLgiS", "kPhxz", "ol-md-4 co", "icked", "beforeend", "qWrkK", "later.", "/i>", "error", "v>\n       ", "layer", "105EwuPoy", "der.com/50", "gbaMv", "wXdrx", "DDxWT", "rgHkc", "play-episo", "elative h-", "     <div ", "season-inp", 'lass="fas ', "fcd4ca4e97", 'class="pos', " Series", "hJtOa", "vies", "prev-page", "ement", "kXBmr", "scrollTo", "ter by Gen", "<span clas", "toggle", "ChQiJ", ".card", "c542b4951c", "i.themovie", "JZpdT", "documentEl", "EMMaU", 's="positio', "log", "json", "data-id", 'opsis="', "n-absolute", "      </di", "Popular Mo", "age.tmdb.o", '" data-syn', "name", "ame", 's="col-12 ', "\n         ", "gdPYW", "ZSsFu", "HYKSd", "&with_genr", "CBcUc", 's="genre-l', "        <i", "Loaded", "1|2|5|4|3|", "classList", "date", 'lue="">Fil', "Toggle Dar", "HTTP error", "XAmNW", "HYrhi", "/popular?a", "trim", "l top-0 st", "getAttribu", "scrollTop", "genre/", "     </div", "DOMContent", "getElement", "ById", "ard-img-to", " <div clas", "wuAYI", "12hNcxOZ", "Load Movie", "https://vi", "stener", "0x750?text", "kmzvW", "appendChil", 'id="', "ason and e", "pisode num", "contains", '" class="c', "title", 'le="', "discover/", 'rd-title">', "vote_avera", "DWaxq", "join", "disabled", "NASoz", "key=", "addEventLi", "pi_key=", "</h5>\n    ", " of ", ">\n        ", "        <d", "floating-p"];
  _0x2307 = function () {
    return _0x3661ad;
  };
  return _0x2307();
}
function updatePageInfo(_0x5118b8) {
  const _0x4cf2e0 = _0x51e6e5;
  pageInfo[_0x4cf2e0(361) + "t"] = _0x4cf2e0(293) + currentPage + _0x4cf2e0(486) + _0x5118b8;
}
function loadPopular() {
  const _0x283a31 = _0x51e6e5, _0x1137ab = {ChQiJ: function (_0x1abed8, _0x3a5fdc) {
    return _0x1abed8(_0x3a5fdc);
  }}, _0x2bb4cf = "" + BASE_URL + currentMode + (_0x283a31(448) + _0x283a31(484)) + API_KEY + _0x283a31(261) + currentPage;
  _0x1137ab[_0x283a31(411)](fetchItems, _0x2bb4cf);
}
async function fetchGenres() {
  const _0x1faf0c = _0x51e6e5, _0x2594f2 = {ftwUW: _0x1faf0c(332), ATHjz: function (_0x306dfd, _0x3b93f3) {
    return _0x306dfd(_0x3b93f3);
  }, qGFbs: _0x1faf0c(298) + _0x1faf0c(333) + "s:"}, _0x10acc8 = BASE_URL + _0x1faf0c(453) + currentMode + (_0x1faf0c(328) + _0x1faf0c(482)) + API_KEY;
  try {
    const _0x4d3805 = await _0x2594f2[_0x1faf0c(546)](fetch, _0x10acc8), _0xbda769 = await _0x4d3805[_0x1faf0c(420)]();
    genreMap = {}, _0xbda769[_0x1faf0c(254)][_0x1faf0c(307)](_0x329dd4 => {
      const _0x132fe8 = _0x1faf0c;
      genreMap[_0x329dd4.id] = _0x329dd4[_0x132fe8(428)];
      const _0xd979c8 = document[_0x132fe8(308) + _0x132fe8(299)](_0x2594f2[_0x132fe8(370)]);
      _0xd979c8[_0x132fe8(491)] = _0x329dd4.id, _0xd979c8[_0x132fe8(361) + "t"] = _0x329dd4[_0x132fe8(428)], genreFilter[_0x132fe8(467) + "d"](_0xd979c8);
    });
  } catch (_0x3a4dd9) {
    console[_0x1faf0c(385)](_0x2594f2[_0x1faf0c(510)], _0x3a4dd9);
  }
}
function toggleDarkModeFunction() {
  const _0x2ac4fb = _0x51e6e5, _0x1455d3 = {VCNPv: _0x2ac4fb(329), DWaxq: _0x2ac4fb(324)};
  document[_0x2ac4fb(350)][_0x2ac4fb(441)][_0x2ac4fb(410)](_0x1455d3[_0x2ac4fb(265)]);
  const _0xa6fa5f = document[_0x2ac4fb(350)][_0x2ac4fb(441)][_0x2ac4fb(471)](_0x1455d3[_0x2ac4fb(265)]);
  localStorage[_0x2ac4fb(321)](_0x1455d3[_0x2ac4fb(478)], _0xa6fa5f);
}
function openPlayer(_0x173b76, _0x4a3951, _0x5e2fd1) {
  const _0x2c0939 = _0x51e6e5, _0x4d72c7 = {mfEhm: _0x2c0939(440) + "0", wXdrx: _0x2c0939(278), QEVVw: function (_0x48bcc1, _0x2b747f) {
    return _0x48bcc1 === _0x2b747f;
  }, gdPYW: _0x2c0939(260), SoEqB: function (_0x3370e4, _0x19b296) {
    return _0x3370e4 === _0x19b296;
  }, gRaKK: _0x2c0939(538)}, _0x3c0d66 = _0x4d72c7[_0x2c0939(327)][_0x2c0939(294)]("|");
  let _0x4dce78 = 0;
  while (true) {
    switch (_0x3c0d66[_0x4dce78++]) {
      case "0":
        floatingPlayer[_0x2c0939(251)][_0x2c0939(244)] = _0x4d72c7[_0x2c0939(391)];
        continue;
      case "1":
        playerTitle[_0x2c0939(361) + "t"] = _0x173b76;
        continue;
      case "2":
        playerSynopsis[_0x2c0939(361) + "t"] = _0x4a3951;
        continue;
      case "3":
        playerIframe[_0x2c0939(540)] = _0x4d72c7[_0x2c0939(542)](currentMode, _0x4d72c7[_0x2c0939(432)]) ? _0x2c0939(463) + _0x2c0939(347) + _0x2c0939(290) + _0x2c0939(343) + _0x5e2fd1 : "";
        continue;
      case "4":
        playerForm[_0x2c0939(251)][_0x2c0939(244)] = _0x4d72c7[_0x2c0939(305)](currentMode, "tv") ? _0x4d72c7[_0x2c0939(391)] : _0x4d72c7[_0x2c0939(516)];
        continue;
      case "5":
        currentItemId = _0x5e2fd1;
        continue;
    }
    break;
  }
}
function closePlayer() {
  const _0x1ed550 = _0x51e6e5, _0x7a148c = {gbaMv: _0x1ed550(538)};
  floatingPlayer[_0x1ed550(251)][_0x1ed550(244)] = _0x7a148c[_0x1ed550(390)], playerIframe[_0x1ed550(540)] = "", seasonInput[_0x1ed550(491)] = "", episodeInput[_0x1ed550(491)] = "";
}
function playEpisode() {
  const _0x348afc = _0x51e6e5, _0xd464f = {fsqHO: function (_0x2d2a52, _0xdef4d6) {
    return _0x2d2a52 && _0xdef4d6;
  }, ammrE: function (_0x416ac5, _0x45e641, _0x45e015) {
    return _0x416ac5(_0x45e641, _0x45e015);
  }, kmzvW: function (_0xd40ece, _0x4bf507, _0x580a52) {
    return _0xd40ece(_0x4bf507, _0x580a52);
  }, wuPnP: function (_0x32988d, _0xeefa90) {
    return _0x32988d(_0xeefa90);
  }, xzwOf: function (_0x72e03c, _0x43b9ba) {
    return _0x72e03c(_0x43b9ba);
  }, ElpHB: function (_0x3241fe, _0xc2d3b3) {
    return _0x3241fe > _0xc2d3b3;
  }, btOai: function (_0x67f5cd, _0x1d3d6a) {
    return _0x67f5cd(_0x1d3d6a);
  }, lqESK: _0x348afc(315) + _0x348afc(313) + _0x348afc(282) + _0x348afc(541) + _0x348afc(245), DDxWT: function (_0x1f636b, _0x23fa06) {
    return _0x1f636b(_0x23fa06);
  }, fAMcv: _0x348afc(315) + _0x348afc(366) + _0x348afc(469) + _0x348afc(470) + _0x348afc(323)}, _0x3f20eb = seasonInput[_0x348afc(491)][_0x348afc(449)](), _0x10eca9 = episodeInput[_0x348afc(491)][_0x348afc(449)]();
  if (_0xd464f[_0x348afc(504)](_0x3f20eb, _0x10eca9)) {
    const _0x1d941e = _0xd464f[_0x348afc(528)](parseInt, _0x3f20eb, 10), _0x40cb59 = _0xd464f[_0x348afc(466)](parseInt, _0x10eca9, 10);
    !_0xd464f[_0x348afc(362)](isNaN, _0x1d941e) && !_0xd464f[_0x348afc(263)](isNaN, _0x40cb59) && _0xd464f[_0x348afc(292)](_0x1d941e, 0) && _0xd464f[_0x348afc(292)](_0x40cb59, 0) ? playerIframe[_0x348afc(540)] = _0x348afc(463) + _0x348afc(347) + _0x348afc(530) + currentItemId + "/" + _0x1d941e + "/" + _0x40cb59 : _0xd464f[_0x348afc(271)](alert, _0xd464f[_0x348afc(547)]);
  } else _0xd464f[_0x348afc(392)](alert, _0xd464f[_0x348afc(334)]);
}
function scrollToTop() {
  const _0x411296 = _0x51e6e5, _0x1dc0bf = {hbxEZ: _0x411296(375)};
  window[_0x411296(407)]({top: 0, behavior: _0x1dc0bf[_0x411296(304)]});
}
movieList[_0x51e6e5(483) + _0x51e6e5(464)](_0x51e6e5(364), _0x42ba07 => {
  const _0x1b3209 = _0x51e6e5, _0x5c605b = {QOWUK: _0x1b3209(412), hidsI: _0x1b3209(250), TCVhg: _0x1b3209(520) + _0x1b3209(526), ATTSc: _0x1b3209(421), NssGx: function (_0x17e6f3, _0xf4fef0, _0x4dafc5, _0x2245b4) {
    return _0x17e6f3(_0xf4fef0, _0x4dafc5, _0x2245b4);
  }}, _0x480cec = _0x42ba07[_0x1b3209(499)][_0x1b3209(253)](_0x5c605b[_0x1b3209(513)]);
  if (_0x480cec) {
    const _0x15331f = _0x480cec[_0x1b3209(451) + "te"](_0x5c605b[_0x1b3209(517)]), _0x41e2b1 = _0x480cec[_0x1b3209(451) + "te"](_0x5c605b[_0x1b3209(279)]), _0x4c58be = _0x480cec[_0x1b3209(451) + "te"](_0x5c605b[_0x1b3209(274)]);
    _0x5c605b[_0x1b3209(354)](openPlayer, _0x15331f, _0x41e2b1, _0x4c58be);
  }
}), toggleDarkMode[_0x51e6e5(483) + _0x51e6e5(464)](_0x51e6e5(364), () => {
  const _0x59ac47 = _0x51e6e5, _0x2f7d5b = {Ubans: _0x59ac47(444) + _0x59ac47(501) + _0x59ac47(352), RPuIe: function (_0x533439) {
    return _0x533439();
  }};
  console[_0x59ac47(419)](_0x2f7d5b[_0x59ac47(277)]), _0x2f7d5b[_0x59ac47(497)](toggleDarkModeFunction);
}), closePlayerButton[_0x51e6e5(483) + _0x51e6e5(464)](_0x51e6e5(364), closePlayer), playEpisodeButton[_0x51e6e5(483) + _0x51e6e5(464)](_0x51e6e5(364), playEpisode), loadMovies[_0x51e6e5(483) + _0x51e6e5(464)](_0x51e6e5(364), () => {
  const _0x59b563 = _0x51e6e5, _0xbb09b7 = {PJDMN: _0x59b563(509) + "4", JZpdT: _0x59b563(337) + _0x59b563(443) + _0x59b563(408) + _0x59b563(349) + ">", rgHkc: _0x59b563(260), hJtOa: function (_0x35e8e7) {
    return _0x35e8e7();
  }, okBhB: _0x59b563(462) + _0x59b563(527), kPhxz: _0x59b563(425) + _0x59b563(403)}, _0x92332c = _0xbb09b7[_0x59b563(309)][_0x59b563(294)]("|");
  let _0x937888 = 0;
  while (true) {
    switch (_0x92332c[_0x937888++]) {
      case "0":
        genreFilter[_0x59b563(302)] = _0xbb09b7[_0x59b563(415)];
        continue;
      case "1":
        currentMode = _0xbb09b7[_0x59b563(393)];
        continue;
      case "2":
        _0xbb09b7[_0x59b563(402)](fetchGenres);
        continue;
      case "3":
        console[_0x59b563(419)](_0xbb09b7[_0x59b563(533)]);
        continue;
      case "4":
        _0xbb09b7[_0x59b563(402)](loadPopular);
        continue;
      case "5":
        sectionTitle[_0x59b563(361) + "t"] = _0xbb09b7[_0x59b563(378)];
        continue;
    }
    break;
  }
}), loadTV[_0x51e6e5(483) + _0x51e6e5(464)](_0x51e6e5(364), () => {
  const _0x39ba70 = _0x51e6e5, _0x3d0b53 = {cwFrV: _0x39ba70(369) + "1", oRffl: _0x39ba70(337) + _0x39ba70(443) + _0x39ba70(408) + _0x39ba70(349) + ">", opdix: function (_0x4bf6f6) {
    return _0x4bf6f6();
  }, QFtZe: _0x39ba70(357) + _0x39ba70(380), rwIDN: _0x39ba70(493) + _0x39ba70(401)}, _0x3ca7a8 = _0x3d0b53[_0x39ba70(355)][_0x39ba70(294)]("|");
  let _0x536c16 = 0;
  while (true) {
    switch (_0x3ca7a8[_0x536c16++]) {
      case "0":
        genreFilter[_0x39ba70(302)] = _0x3d0b53[_0x39ba70(506)];
        continue;
      case "1":
        _0x3d0b53[_0x39ba70(353)](loadPopular);
        continue;
      case "2":
        console[_0x39ba70(419)](_0x3d0b53[_0x39ba70(339)]);
        continue;
      case "3":
        currentMode = "tv";
        continue;
      case "4":
        _0x3d0b53[_0x39ba70(353)](fetchGenres);
        continue;
      case "5":
        sectionTitle[_0x39ba70(361) + "t"] = _0x3d0b53[_0x39ba70(498)];
        continue;
    }
    break;
  }
}), searchButton[_0x51e6e5(483) + _0x51e6e5(464)](_0x51e6e5(364), () => {
  const _0x4f9b59 = _0x51e6e5, _0x555e95 = {EStkm: function (_0x52610c, _0x23b441) {
    return _0x52610c(_0x23b441);
  }, gUods: function (_0xba8c67, _0x5e6924) {
    return _0xba8c67(_0x5e6924);
  }}, _0x4840e9 = searchInput[_0x4f9b59(491)];
  if (_0x4840e9) {
    const _0x4e95a4 = BASE_URL + _0x4f9b59(539) + currentMode + _0x4f9b59(495) + API_KEY + _0x4f9b59(346) + _0x555e95[_0x4f9b59(351)](encodeURIComponent, _0x4840e9) + _0x4f9b59(261) + currentPage;
    _0x555e95[_0x4f9b59(519)](fetchItems, _0x4e95a4);
  }
}), genreFilter[_0x51e6e5(483) + _0x51e6e5(464)](_0x51e6e5(325), () => {
  const _0x3e2f79 = _0x51e6e5, _0x1b5ad1 = {fSuLq: function (_0x4c54aa, _0x32e67e) {
    return _0x4c54aa(_0x32e67e);
  }, FnnvW: function (_0x11993a) {
    return _0x11993a();
  }}, _0x3b4820 = genreFilter[_0x3e2f79(491)];
  if (_0x3b4820) {
    const _0x1b2613 = BASE_URL + _0x3e2f79(475) + currentMode + _0x3e2f79(495) + API_KEY + (_0x3e2f79(435) + _0x3e2f79(331)) + _0x3b4820 + _0x3e2f79(261) + currentPage;
    _0x1b5ad1[_0x3e2f79(316)](fetchItems, _0x1b2613);
  } else _0x1b5ad1[_0x3e2f79(314)](loadPopular);
}), prevPageButton[_0x51e6e5(483) + _0x51e6e5(464)](_0x51e6e5(364), () => {
  const _0x3ec56c = _0x51e6e5, _0x316fe2 = {HYKSd: function (_0x5da106, _0x174d59) {
    return _0x5da106 > _0x174d59;
  }, ZSsFu: function (_0xcbc40d) {
    return _0xcbc40d();
  }};
  _0x316fe2[_0x3ec56c(434)](currentPage, 1) && (currentPage--, _0x316fe2[_0x3ec56c(433)](loadPopular));
}), nextPageButton[_0x51e6e5(483) + _0x51e6e5(464)](_0x51e6e5(364), () => {
  const _0x40fa5f = _0x51e6e5, _0x593c60 = {jDLNc: function (_0x42d6bb) {
    return _0x42d6bb();
  }};
  currentPage++, _0x593c60[_0x40fa5f(257)](loadPopular);
}), scrollToTopButton[_0x51e6e5(483) + _0x51e6e5(464)](_0x51e6e5(364), scrollToTop), window[_0x51e6e5(273)] = function () {
  const _0x145dce = _0x51e6e5, _0x130a82 = {IJYHT: function (_0x33963b) {
    return _0x33963b();
  }};
  _0x130a82[_0x145dce(249)](scrollFunction);
};
function scrollFunction() {
  const _0x4852db = _0x51e6e5, _0x52aec0 = {dkfXN: function (_0x26fe7d, _0x5a1d6a) {
    return _0x26fe7d > _0x5a1d6a;
  }, wuAYI: _0x4852db(278), zIMaX: _0x4852db(538)};
  _0x52aec0[_0x4852db(549)](document[_0x4852db(350)][_0x4852db(452)], 20) || _0x52aec0[_0x4852db(549)](document[_0x4852db(416) + _0x4852db(405)][_0x4852db(452)], 20) ? scrollToTopButton[_0x4852db(251)][_0x4852db(244)] = _0x52aec0[_0x4852db(460)] : scrollToTopButton[_0x4852db(251)][_0x4852db(244)] = _0x52aec0[_0x4852db(535)];
}
function _0x5931(_0x3a2212, _0x31bd91) {
  const _0x41b856 = _0x2307();
  return _0x5931 = function (_0x15f6d8, _0x7bffe0) {
    _0x15f6d8 = _0x15f6d8 - 244;
    let _0x1501fd = _0x41b856[_0x15f6d8];
    return _0x1501fd;
  }, _0x5931(_0x3a2212, _0x31bd91);
}
document[_0x51e6e5(483) + _0x51e6e5(464)](_0x51e6e5(455) + _0x51e6e5(439), () => {
  const _0x500ce6 = _0x51e6e5, _0x1f00e0 = {aLgiS: function (_0x39fbd2, _0x5abb49) {
    return _0x39fbd2 === _0x5abb49;
  }, qWrkK: _0x500ce6(324), ULstD: _0x500ce6(532), NASoz: _0x500ce6(329), XZTlG: function (_0x696dca) {
    return _0x696dca();
  }, EObqk: function (_0x4136b7) {
    return _0x4136b7();
  }}, _0x4b9cc6 = _0x1f00e0[_0x500ce6(377)](localStorage[_0x500ce6(311)](_0x1f00e0[_0x500ce6(382)]), _0x1f00e0[_0x500ce6(548)]);
  _0x4b9cc6 && document[_0x500ce6(350)][_0x500ce6(441)][_0x500ce6(515)](_0x1f00e0[_0x500ce6(481)]), _0x1f00e0[_0x500ce6(281)](fetchGenres), _0x1f00e0[_0x500ce6(512)](loadPopular);
});
