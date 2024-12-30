const _0x43658b = _0x4f8d;
(function (_0x17c1a6, _0x1cbc1b) {
  const _0xa276d7 = _0x4f8d, _0x43127b = _0x17c1a6();
  while (true) {
    try {
      const _0x3e4d5d = parseInt(_0xa276d7(387)) / 1 * (-parseInt(_0xa276d7(362)) / 2) + -parseInt(_0xa276d7(415)) / 3 + -parseInt(_0xa276d7(403)) / 4 * (parseInt(_0xa276d7(277)) / 5) + parseInt(_0xa276d7(273)) / 6 + parseInt(_0xa276d7(325)) / 7 * (-parseInt(_0xa276d7(276)) / 8) + -parseInt(_0xa276d7(385)) / 9 * (-parseInt(_0xa276d7(414)) / 10) + parseInt(_0xa276d7(338)) / 11 * (parseInt(_0xa276d7(317)) / 12);
      if (_0x3e4d5d === _0x1cbc1b) break; else _0x43127b.push(_0x43127b.shift());
    } catch (_0x495133) {
      _0x43127b.push(_0x43127b.shift());
    }
  }
}(_0x265e, 567806));
const API_KEY = _0x43658b(332) + _0x43658b(312) + _0x43658b(388) + "70", BASE_URL = _0x43658b(244) + _0x43658b(341) + _0x43658b(413), IMAGE_URL = _0x43658b(339) + _0x43658b(309) + _0x43658b(255) + "0", moviesContainer = document[_0x43658b(354) + _0x43658b(316)](_0x43658b(248) + _0x43658b(358)), searchInput = document[_0x43658b(354) + _0x43658b(316)](_0x43658b(222)), categorySelect = document[_0x43658b(354) + _0x43658b(316)](_0x43658b(333)), genreSelect = document[_0x43658b(354) + _0x43658b(316)](_0x43658b(303)), yearSelect = document[_0x43658b(354) + _0x43658b(316)](_0x43658b(250)), prevButton = document[_0x43658b(354) + _0x43658b(316)](_0x43658b(402)), nextButton = document[_0x43658b(354) + _0x43658b(316)](_0x43658b(329)), iframeContainer = document[_0x43658b(354) + _0x43658b(316)](_0x43658b(283) + _0x43658b(358)), iframePlayer = document[_0x43658b(354) + _0x43658b(316)](_0x43658b(260) + _0x43658b(394)), loadingElement = document[_0x43658b(354) + _0x43658b(316)](_0x43658b(371)), iframeSynopsis = document[_0x43658b(354) + _0x43658b(316)](_0x43658b(417) + _0x43658b(410)), iframeTitle = document[_0x43658b(354) + _0x43658b(316)](_0x43658b(280) + "le"), seasonInput = document[_0x43658b(354) + _0x43658b(316)](_0x43658b(232) + "ut"), episodeInput = document[_0x43658b(354) + _0x43658b(316)](_0x43658b(409) + _0x43658b(335));
let currentPage = 1, currentCategory = _0x43658b(254), currentGenre = _0x43658b(254), currentYear = _0x43658b(254), currentMovie = null;
function setLoading(_0x576ded) {
  const _0x2e5588 = _0x43658b, _0x2a5d02 = {JbkJA: _0x2e5588(397), mPkoB: _0x2e5588(373)};
  loadingElement[_0x2e5588(356)][_0x2e5588(293)] = _0x576ded ? _0x2a5d02[_0x2e5588(284)] : _0x2a5d02[_0x2e5588(265)];
}
async function fetchMovies(_0x11eaf8) {
  const _0x47046b = _0x43658b, _0x91b446 = {TdQdC: function (_0xf3ee2c, _0x20fdb6) {
    return _0xf3ee2c(_0x20fdb6);
  }, KWGmo: function (_0x728afc, _0x127edc) {
    return _0x728afc(_0x127edc);
  }, dzXKk: _0x47046b(331) + _0x47046b(257) + _0x47046b(266) + _0x47046b(361) + _0x47046b(379) + _0x47046b(366)};
  _0x91b446[_0x47046b(363)](setLoading, true);
  try {
    const _0xa5fd8f = await _0x91b446[_0x47046b(348)](fetch, _0x11eaf8);
    if (!_0xa5fd8f.ok) throw new Error(_0x47046b(251) + _0xa5fd8f[_0x47046b(377)]);
    const _0x69bce4 = await _0xa5fd8f[_0x47046b(289)]();
    _0x91b446[_0x47046b(363)](displayMovies, _0x69bce4[_0x47046b(399)]);
  } catch (_0x2b063b) {
    console[_0x47046b(400)](_0x2b063b), moviesContainer[_0x47046b(380)] = _0x91b446[_0x47046b(342)];
  } finally {
    _0x91b446[_0x47046b(348)](setLoading, false);
  }
}
function _0x4f8d(_0xdba8f7, _0x3b6efa) {
  const _0x41e40c = _0x265e();
  return _0x4f8d = function (_0x1bd174, _0xf1e6b3) {
    _0x1bd174 = _0x1bd174 - 219;
    let _0x54f967 = _0x41e40c[_0x1bd174];
    return _0x54f967;
  }, _0x4f8d(_0xdba8f7, _0x3b6efa);
}
function _0x265e() {
  const _0x395697 = ["2085459ECegtd", 'mg src="', "iframe-syn", "oKxia", "BhOTl", "pltuA", "search", "FSciH", "genres", "</div>\n   ", "OTyZP", "vote_avera", "\n         ", "WVfsL", "UfPdc", "=No+Image", "season-inp", "        <i", "addEventLi", "TV Series", "xyBeF", "sDsJK", "tv?api_key", "No synopsi", "title", "SUzao", "stener", "><i class=", "https://ap", "length", "option", "bbfjC", "movies-con", '">\n       ', "year", "Error: ", "name", "a.placehol", "all", "rg/t/p/w50", "_date_year", "to load mo", "&with_genr", "es=", "iframe-pla", "input", "click", "bed/tv/", "change", "mPkoB", "vies. Plea", "dHyiz", "ber", "/10 ⭐", "src", "lti?api_ke", "value", "4606980IbhkpR", "/discover/", "target", "32MFZFFT", "20YznfYx", "WJZdP", "div", "iframe-tit", "/search/mu", "https://vi", "iframe-con", "JbkJA", "lKshI", "&first_air", "&page=", "   ", "json", "der.com/20", "zuFKz", "tFBAp", "display", "fas fa-fil", "BRLzc", "elease_yea", "ayer.autoe", "DCBWE", "seasons", "hdJyu", "s availabl", "ent", "genre", "key=", "textConten", "JWbhl", "      <div", "mmQNl", "age.tmdb.o", "XhcUM", "mbed.cc/em", "fcd4ca4e97", "/genre/mov", "ceLhm", "movie", "ById", "12937164xTEfBV", "ZYCIR", "NknTA", "No Rating", "https://pl", "appendChil", "season_num", "   <h3>", "861014XSgxdZ", "ZZAFC", "/trending/", "yPTHc", "next", "HTjHs", "<p>Failed ", "c542b4951c", "category", "EHYDi", "put", "0x300?text", '"></i> ', "11YdDgfP", "https://im", " <span cla", "i.themovie", "dzXKk", "poster_pat", "cPXNT", "No title a", "media_type", "jCsTm", "KWGmo", '" alt="', "className", "pi_key=", "movie-card", "PeBhC", "getElement", "all/week?a", "style", "toFixed", "tainer", "gWPZw", "lnQyc", "se try aga", "388666AaNEjv", "TdQdC", "tuPAz", "overview", "/p>", "</h3>\n    ", 'ss="label"', "sifUV", "HkQSp", "loading", "DaNUU", "none", "AGLzZ", "nbhSi", 'ting">', "status", "&query=", "in later.<", "innerHTML", "getFullYea", "forEach", "          ", "KCSOz", "9NYZjSX", "i_key=", "1eVEsaW", "f3184f866b", ' class="ra', "vLrZI", "hHVys", "vailable", "fas fa-tv", "yer", "bed/movie/", "Movie", "block", "movie?api_", "results", "error", "qzNdR", "prev", "225176gUmXzj", "NSkkQ", "</span>\n  ", "rdppN", "&primary_r", "createElem", "episode-in", "opsis", "ie/list?ap", "ZYagV", "db.org/3", "3285490QZSzGS"];
  _0x265e = function () {
    return _0x395697;
  };
  return _0x265e();
}
function displayMovies(_0x378d4a) {
  const _0x26d7ce = _0x43658b, _0x4e6bca = {JWbhl: _0x26d7ce(279), sifUV: _0x26d7ce(352), SUzao: function (_0x59db80, _0x1dc6b7) {
    return _0x59db80 === _0x1dc6b7;
  }, sDsJK: _0x26d7ce(315), mmQNl: _0x26d7ce(396), DCBWE: _0x26d7ce(235), nbhSi: function (_0x18e039, _0x3f57d3) {
    return _0x18e039 === _0x3f57d3;
  }, BhOTl: _0x26d7ce(294) + "m", rdppN: _0x26d7ce(393), NSkkQ: function (_0x3bca46, _0x4473a7) {
    return _0x3bca46 + _0x4473a7;
  }, HTjHs: _0x26d7ce(269), xyBeF: _0x26d7ce(320), yPTHc: _0x26d7ce(262), FSciH: _0x26d7ce(282) + _0x26d7ce(253) + _0x26d7ce(290) + _0x26d7ce(336) + _0x26d7ce(231)};
  moviesContainer[_0x26d7ce(380)] = "";
  const _0x2ac9a4 = _0x4e6bca[_0x26d7ce(223)];
  _0x378d4a[_0x26d7ce(382)](_0x579147 => {
    const _0x1ca108 = _0x26d7ce, _0x895d81 = document[_0x1ca108(408) + _0x1ca108(302)](_0x4e6bca[_0x1ca108(306)]);
    _0x895d81[_0x1ca108(350)] = _0x4e6bca[_0x1ca108(369)];
    const _0x53b391 = _0x4e6bca[_0x1ca108(241)](_0x579147[_0x1ca108(346)], _0x4e6bca[_0x1ca108(237)]) ? _0x4e6bca[_0x1ca108(308)] : _0x4e6bca[_0x1ca108(298)], _0x698c69 = _0x4e6bca[_0x1ca108(375)](_0x579147[_0x1ca108(346)], _0x4e6bca[_0x1ca108(237)]) ? _0x4e6bca[_0x1ca108(220)] : _0x4e6bca[_0x1ca108(406)], _0x22e801 = _0x579147[_0x1ca108(343) + "h"] ? "" + IMAGE_URL + _0x579147[_0x1ca108(343) + "h"] : _0x2ac9a4;
    _0x895d81[_0x1ca108(380)] = _0x1ca108(228) + _0x1ca108(383) + _0x1ca108(340) + _0x1ca108(368) + _0x1ca108(243) + '"' + _0x698c69 + _0x1ca108(337) + _0x53b391 + (_0x1ca108(405) + _0x1ca108(383) + _0x1ca108(233) + _0x1ca108(416)) + _0x22e801 + _0x1ca108(349) + (_0x579147[_0x1ca108(240)] || _0x579147[_0x1ca108(252)]) + (_0x1ca108(249) + _0x1ca108(383) + _0x1ca108(324)) + (_0x579147[_0x1ca108(240)] || _0x579147[_0x1ca108(252)]) + (_0x1ca108(367) + _0x1ca108(383) + _0x1ca108(307) + _0x1ca108(389) + _0x1ca108(376)) + (_0x579147[_0x1ca108(227) + "ge"] ? _0x4e6bca[_0x1ca108(404)](_0x579147[_0x1ca108(227) + "ge"][_0x1ca108(357)](1), _0x4e6bca[_0x1ca108(330)]) : _0x4e6bca[_0x1ca108(236)]) + (_0x1ca108(225) + _0x1ca108(383) + _0x1ca108(288)), _0x895d81[_0x1ca108(234) + _0x1ca108(242)](_0x4e6bca[_0x1ca108(328)], () => openIframe(_0x579147)), moviesContainer[_0x1ca108(322) + "d"](_0x895d81);
  });
}
function openIframe(_0x150077) {
  const _0x5dc754 = _0x43658b, _0x2eb337 = {qzNdR: function (_0xaf230e, _0x3072f2) {
    return _0xaf230e === _0x3072f2;
  }, zuFKz: _0x5dc754(315), ceLhm: function (_0x5bf917, _0x4b3208) {
    return _0x5bf917 === _0x4b3208;
  }, tFBAp: _0x5dc754(373), tuPAz: function (_0x16e531, _0x2c5c5e) {
    return _0x16e531 === _0x2c5c5e;
  }, cPXNT: function (_0x4b8a8e, _0x1d967c) {
    return _0x4b8a8e > _0x1d967c;
  }, pltuA: _0x5dc754(397), ZYagV: _0x5dc754(345) + _0x5dc754(392), DaNUU: _0x5dc754(239) + _0x5dc754(301) + "e."};
  currentMovie = _0x150077;
  const _0x3203c5 = _0x2eb337[_0x5dc754(401)](_0x150077[_0x5dc754(346)], _0x2eb337[_0x5dc754(291)]) ? _0x2eb337[_0x5dc754(291)] : "tv", _0x516831 = _0x150077.id;
  let _0x55c9c0;
  if (_0x2eb337[_0x5dc754(314)](_0x3203c5, _0x2eb337[_0x5dc754(291)])) _0x55c9c0 = _0x5dc754(321) + _0x5dc754(297) + _0x5dc754(311) + _0x5dc754(395) + _0x516831, seasonInput[_0x5dc754(356)][_0x5dc754(293)] = _0x2eb337[_0x5dc754(292)], episodeInput[_0x5dc754(356)][_0x5dc754(293)] = _0x2eb337[_0x5dc754(292)]; else {
    if (_0x2eb337[_0x5dc754(364)](_0x3203c5, "tv")) {
      const _0x2060ae = _0x150077[_0x5dc754(299)] && _0x2eb337[_0x5dc754(344)](_0x150077[_0x5dc754(299)][_0x5dc754(245)], 0) ? _0x150077[_0x5dc754(299)][0][_0x5dc754(323) + _0x5dc754(268)] : 1, _0x579954 = 1;
      _0x55c9c0 = _0x5dc754(321) + _0x5dc754(297) + _0x5dc754(311) + _0x5dc754(263) + _0x516831 + "/" + _0x2060ae + "/" + _0x579954, seasonInput[_0x5dc754(272)] = _0x2060ae, episodeInput[_0x5dc754(272)] = _0x579954, seasonInput[_0x5dc754(356)][_0x5dc754(293)] = _0x2eb337[_0x5dc754(221)], episodeInput[_0x5dc754(356)][_0x5dc754(293)] = _0x2eb337[_0x5dc754(221)];
    }
  }
  iframePlayer[_0x5dc754(270)] = _0x55c9c0, iframeTitle[_0x5dc754(305) + "t"] = _0x150077[_0x5dc754(240)] || _0x150077[_0x5dc754(252)] || _0x2eb337[_0x5dc754(412)], iframeSynopsis[_0x5dc754(305) + "t"] = _0x150077[_0x5dc754(365)] || _0x2eb337[_0x5dc754(372)], iframeContainer[_0x5dc754(356)][_0x5dc754(293)] = _0x2eb337[_0x5dc754(221)];
}
function closeIframe() {
  const _0x12dca1 = _0x43658b, _0x27633f = {EHYDi: _0x12dca1(373)};
  iframeContainer[_0x12dca1(356)][_0x12dca1(293)] = _0x27633f[_0x12dca1(334)], iframePlayer[_0x12dca1(270)] = "";
}
function updateIframe() {
  const _0x55a1f4 = _0x43658b, _0x35ecbf = {hHVys: function (_0x2c9950, _0x20f3b7) {
    return _0x2c9950 !== _0x20f3b7;
  }, WJZdP: function (_0x5854a2, _0x4c648c, _0x331761) {
    return _0x5854a2(_0x4c648c, _0x331761);
  }, UfPdc: function (_0x3241c0, _0x3c368f, _0x2f97fe) {
    return _0x3241c0(_0x3c368f, _0x2f97fe);
  }};
  if (!currentMovie || _0x35ecbf[_0x55a1f4(391)](currentMovie[_0x55a1f4(346)], "tv")) return;
  const _0x1ec6dd = _0x35ecbf[_0x55a1f4(278)](parseInt, seasonInput[_0x55a1f4(272)], 10) || 1, _0x65ad45 = _0x35ecbf[_0x55a1f4(230)](parseInt, episodeInput[_0x55a1f4(272)], 10) || 1, _0x5e5208 = currentMovie.id, _0x11a40f = _0x55a1f4(321) + _0x55a1f4(297) + _0x55a1f4(311) + _0x55a1f4(263) + _0x5e5208 + "/" + _0x1ec6dd + "/" + _0x65ad45;
  iframePlayer[_0x55a1f4(270)] = _0x11a40f;
}
searchInput[_0x43658b(234) + _0x43658b(242)](_0x43658b(261), () => {
  const _0x336e3b = _0x43658b, _0x14e434 = {lKshI: function (_0x2932d6, _0x3debc5) {
    return _0x2932d6(_0x3debc5);
  }, BRLzc: function (_0x4a3fb8) {
    return _0x4a3fb8();
  }}, _0x2b27e8 = searchInput[_0x336e3b(272)];
  _0x2b27e8 ? _0x14e434[_0x336e3b(285)](fetchMovies, BASE_URL + (_0x336e3b(281) + _0x336e3b(271) + "y=") + API_KEY + _0x336e3b(378) + _0x2b27e8) : _0x14e434[_0x336e3b(295)](loadMovies);
}), categorySelect[_0x43658b(234) + _0x43658b(242)](_0x43658b(264), _0x3dd12f => {
  const _0x5ef0a1 = _0x43658b, _0x1aba22 = {KCSOz: function (_0x4dbc18) {
    return _0x4dbc18();
  }};
  currentCategory = _0x3dd12f[_0x5ef0a1(275)][_0x5ef0a1(272)], currentPage = 1, _0x1aba22[_0x5ef0a1(384)](loadMovies);
}), genreSelect[_0x43658b(234) + _0x43658b(242)](_0x43658b(264), _0x3dc830 => {
  const _0x55266b = _0x43658b, _0x4c953f = {gWPZw: function (_0x40fae1) {
    return _0x40fae1();
  }};
  currentGenre = _0x3dc830[_0x55266b(275)][_0x55266b(272)], currentPage = 1, _0x4c953f[_0x55266b(359)](loadMovies);
}), yearSelect[_0x43658b(234) + _0x43658b(242)](_0x43658b(264), _0x357788 => {
  const _0x1442ab = _0x43658b, _0x12055a = {dHyiz: function (_0x42b59d) {
    return _0x42b59d();
  }};
  currentYear = _0x357788[_0x1442ab(275)][_0x1442ab(272)], currentPage = 1, _0x12055a[_0x1442ab(267)](loadMovies);
}), prevButton[_0x43658b(234) + _0x43658b(242)](_0x43658b(262), () => {
  const _0x154e0c = _0x43658b, _0xbfab0 = {AGLzZ: function (_0x4fa8a7, _0x52fb2c) {
    return _0x4fa8a7 > _0x52fb2c;
  }, jCsTm: function (_0x5abe6e) {
    return _0x5abe6e();
  }};
  _0xbfab0[_0x154e0c(374)](currentPage, 1) && (currentPage--, _0xbfab0[_0x154e0c(347)](loadMovies));
}), nextButton[_0x43658b(234) + _0x43658b(242)](_0x43658b(262), () => {
  const _0x52e8fd = _0x43658b, _0x4047df = {ZYCIR: function (_0xa466ff) {
    return _0xa466ff();
  }};
  currentPage++, _0x4047df[_0x52e8fd(318)](loadMovies);
});
async function fetchGenres() {
  const _0x4c7877 = _0x43658b, _0x16202e = {OTyZP: _0x4c7877(246), HkQSp: function (_0x13174f, _0x7fa531) {
    return _0x13174f(_0x7fa531);
  }};
  try {
    const _0x34e50e = await _0x16202e[_0x4c7877(370)](fetch, BASE_URL + (_0x4c7877(313) + _0x4c7877(411) + _0x4c7877(386)) + API_KEY);
    if (!_0x34e50e.ok) throw new Error(_0x4c7877(251) + _0x34e50e[_0x4c7877(377)]);
    const _0x2dea19 = await _0x34e50e[_0x4c7877(289)](), _0x408125 = _0x2dea19[_0x4c7877(224)];
    _0x408125[_0x4c7877(382)](_0x4d01a2 => {
      const _0x41544e = _0x4c7877, _0x262149 = document[_0x41544e(408) + _0x41544e(302)](_0x16202e[_0x41544e(226)]);
      _0x262149[_0x41544e(272)] = _0x4d01a2.id, _0x262149[_0x41544e(305) + "t"] = _0x4d01a2[_0x41544e(252)], genreSelect[_0x41544e(322) + "d"](_0x262149);
    });
  } catch (_0x2f8093) {
    console[_0x4c7877(400)](_0x2f8093);
  }
}
function loadMovies() {
  const _0x213f99 = _0x43658b, _0x5a65fc = {hdJyu: function (_0x1b41f0, _0x4eaac9) {
    return _0x1b41f0 === _0x4eaac9;
  }, lnQyc: _0x213f99(315), XhcUM: function (_0x109bc4, _0xa0bc99) {
    return _0x109bc4 !== _0xa0bc99;
  }, ZZAFC: _0x213f99(254), vLrZI: function (_0x569a80, _0xd8e0e4) {
    return _0x569a80 !== _0xd8e0e4;
  }, oKxia: function (_0x575fb6, _0x1301e1) {
    return _0x575fb6 === _0x1301e1;
  }, bbfjC: function (_0x34eb05, _0x31073d) {
    return _0x34eb05 !== _0x31073d;
  }, NknTA: function (_0x3f2a4d, _0x36a390) {
    return _0x3f2a4d(_0x36a390);
  }};
  let _0x21580e = BASE_URL + (_0x213f99(327) + _0x213f99(355) + _0x213f99(351)) + API_KEY + _0x213f99(287) + currentPage;
  if (_0x5a65fc[_0x213f99(300)](currentCategory, _0x5a65fc[_0x213f99(360)])) _0x21580e = BASE_URL + (_0x213f99(274) + _0x213f99(398) + _0x213f99(304)) + API_KEY + _0x213f99(287) + currentPage, _0x5a65fc[_0x213f99(310)](currentGenre, _0x5a65fc[_0x213f99(326)]) && (_0x21580e += _0x213f99(258) + _0x213f99(259) + currentGenre), _0x5a65fc[_0x213f99(390)](currentYear, _0x5a65fc[_0x213f99(326)]) && (_0x21580e += _0x213f99(407) + _0x213f99(296) + "r=" + currentYear); else _0x5a65fc[_0x213f99(219)](currentCategory, "tv") && (_0x21580e = BASE_URL + (_0x213f99(274) + _0x213f99(238) + "=") + API_KEY + _0x213f99(287) + currentPage, _0x5a65fc[_0x213f99(247)](currentGenre, _0x5a65fc[_0x213f99(326)]) && (_0x21580e += _0x213f99(258) + _0x213f99(259) + currentGenre), _0x5a65fc[_0x213f99(310)](currentYear, _0x5a65fc[_0x213f99(326)]) && (_0x21580e += _0x213f99(286) + _0x213f99(256) + "=" + currentYear));
  _0x5a65fc[_0x213f99(319)](fetchMovies, _0x21580e);
}
function populateYearSelect() {
  const _0x208dcf = _0x43658b, _0x2a22fe = {PeBhC: function (_0x4ccef3, _0x584641) {
    return _0x4ccef3 >= _0x584641;
  }, WVfsL: _0x208dcf(246)}, _0x58e9d2 = (new Date)[_0x208dcf(381) + "r"]();
  for (let _0x1613bd = _0x58e9d2; _0x2a22fe[_0x208dcf(353)](_0x1613bd, 1900); _0x1613bd--) {
    const _0x8bd632 = document[_0x208dcf(408) + _0x208dcf(302)](_0x2a22fe[_0x208dcf(229)]);
    _0x8bd632[_0x208dcf(272)] = _0x1613bd, _0x8bd632[_0x208dcf(305) + "t"] = _0x1613bd, yearSelect[_0x208dcf(322) + "d"](_0x8bd632);
  }
}
fetchGenres(), populateYearSelect(), loadMovies();
