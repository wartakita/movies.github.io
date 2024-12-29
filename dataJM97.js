const _0x30fdcc = _0x1072;
(function (_0xd083f1, _0x19d506) {
  const _0x39f412 = _0x1072, _0x125ee7 = _0xd083f1();
  while (true) {
    try {
      const _0x18f2c4 = parseInt(_0x39f412(498)) / 1 + parseInt(_0x39f412(598)) / 2 * (-parseInt(_0x39f412(545)) / 3) + -parseInt(_0x39f412(439)) / 4 + parseInt(_0x39f412(573)) / 5 * (parseInt(_0x39f412(501)) / 6) + parseInt(_0x39f412(466)) / 7 * (-parseInt(_0x39f412(500)) / 8) + parseInt(_0x39f412(490)) / 9 + parseInt(_0x39f412(509)) / 10 * (parseInt(_0x39f412(469)) / 11);
      if (_0x18f2c4 === _0x19d506) break; else _0x125ee7.push(_0x125ee7.shift());
    } catch (_0x25f118) {
      _0x125ee7.push(_0x125ee7.shift());
    }
  }
}(_0x48b0, 738770));
const API_KEY = _0x30fdcc(534) + _0x30fdcc(514) + _0x30fdcc(537) + "70", BASE_URL = _0x30fdcc(525) + _0x30fdcc(562) + _0x30fdcc(595), IMAGE_URL = _0x30fdcc(444) + _0x30fdcc(555) + _0x30fdcc(445) + "0", moviesContainer = document[_0x30fdcc(502) + _0x30fdcc(602)](_0x30fdcc(551) + _0x30fdcc(566)), searchInput = document[_0x30fdcc(502) + _0x30fdcc(602)](_0x30fdcc(580)), categorySelect = document[_0x30fdcc(502) + _0x30fdcc(602)](_0x30fdcc(570)), prevButton = document[_0x30fdcc(502) + _0x30fdcc(602)](_0x30fdcc(450)), nextButton = document[_0x30fdcc(502) + _0x30fdcc(602)](_0x30fdcc(519)), iframeContainer = document[_0x30fdcc(502) + _0x30fdcc(602)](_0x30fdcc(505) + _0x30fdcc(566)), iframePlayer = document[_0x30fdcc(502) + _0x30fdcc(602)](_0x30fdcc(532) + _0x30fdcc(473)), loadingElement = document[_0x30fdcc(502) + _0x30fdcc(602)](_0x30fdcc(584)), iframeSynopsis = document[_0x30fdcc(502) + _0x30fdcc(602)](_0x30fdcc(487) + _0x30fdcc(507)), iframeTitle = document[_0x30fdcc(502) + _0x30fdcc(602)](_0x30fdcc(462) + "le"), seasonInput = document[_0x30fdcc(502) + _0x30fdcc(602)](_0x30fdcc(587) + "ut"), episodeInput = document[_0x30fdcc(502) + _0x30fdcc(602)](_0x30fdcc(510) + _0x30fdcc(553));
let currentPage = 1, currentCategory = _0x30fdcc(563), currentMovie = null;
function setLoading(_0x455bf1) {
  const _0x4db524 = _0x30fdcc, _0x38420b = {dXkxe: _0x4db524(464), ePcmm: _0x4db524(526)};
  loadingElement[_0x4db524(460)][_0x4db524(435)] = _0x455bf1 ? _0x38420b[_0x4db524(516)] : _0x38420b[_0x4db524(548)];
}
async function fetchMovies(_0x51500c) {
  const _0xf58d36 = _0x30fdcc, _0x26e164 = {Pbcir: function (_0xd983e1, _0x5f1e73) {
    return _0xd983e1(_0x5f1e73);
  }, ETKrM: function (_0x303c13, _0x456f0b) {
    return _0x303c13(_0x456f0b);
  }, RuvCB: _0xf58d36(561) + _0xf58d36(594) + _0xf58d36(470) + _0xf58d36(471) + _0xf58d36(447) + _0xf58d36(504), MTILm: function (_0x715a61, _0x32a1a0) {
    return _0x715a61(_0x32a1a0);
  }};
  _0x26e164[_0xf58d36(494)](setLoading, true);
  try {
    const _0x83f47a = await _0x26e164[_0xf58d36(494)](fetch, _0x51500c);
    if (!_0x83f47a.ok) throw new Error(_0xf58d36(596) + _0x83f47a[_0xf58d36(599)]);
    const _0x5be32c = await _0x83f47a[_0xf58d36(442)]();
    _0x26e164[_0xf58d36(564)](displayMovies, _0x5be32c[_0xf58d36(479)]);
  } catch (_0x49a03e) {
    console[_0xf58d36(588)](_0x49a03e), moviesContainer[_0xf58d36(603)] = _0x26e164[_0xf58d36(492)];
  } finally {
    _0x26e164[_0xf58d36(463)](setLoading, false);
  }
}
function _0x1072(_0x5cfb2f, _0x1aaf25) {
  const _0x36e7db = _0x48b0();
  return _0x1072 = function (_0x2b2734, _0x317af4) {
    _0x2b2734 = _0x2b2734 - 433;
    let _0x22ef1d = _0x36e7db[_0x2b2734];
    return _0x22ef1d;
  }, _0x1072(_0x5cfb2f, _0x1aaf25);
}
function displayMovies(_0x4c1ca1) {
  const _0x28fc31 = _0x30fdcc, _0x35390c = {biAtw: _0x28fc31(574), NRnZG: _0x28fc31(437), dlyPu: function (_0x1693ec, _0x33d53a) {
    return _0x1693ec === _0x33d53a;
  }, rmoHj: _0x28fc31(597), sTxlU: _0x28fc31(458), DqZlD: _0x28fc31(506), mJYEF: function (_0x1f0f8c, _0x1bc3e8) {
    return _0x1f0f8c === _0x1bc3e8;
  }, xcbzc: _0x28fc31(569) + "m", EfVXC: _0x28fc31(452), MnhRY: function (_0xd6057b, _0x5b5fc4) {
    return _0xd6057b + _0x5b5fc4;
  }, zIeEp: _0x28fc31(556), nxJcy: _0x28fc31(578), fwzzn: _0x28fc31(449), CNbMy: _0x28fc31(511) + _0x28fc31(542) + _0x28fc31(585) + _0x28fc31(549) + _0x28fc31(546)};
  moviesContainer[_0x28fc31(603)] = "";
  const _0x15c650 = _0x35390c[_0x28fc31(536)];
  _0x4c1ca1[_0x28fc31(543)](_0x2bfb39 => {
    const _0xeea947 = _0x28fc31, _0x4b5305 = document[_0xeea947(457) + _0xeea947(459)](_0x35390c[_0xeea947(544)]);
    _0x4b5305[_0xeea947(560)] = _0x35390c[_0xeea947(557)];
    const _0x5c64f6 = _0x35390c[_0xeea947(529)](_0x2bfb39[_0xeea947(600)], _0x35390c[_0xeea947(520)]) ? _0x35390c[_0xeea947(571)] : _0x35390c[_0xeea947(583)], _0x420978 = _0x35390c[_0xeea947(604)](_0x2bfb39[_0xeea947(600)], _0x35390c[_0xeea947(520)]) ? _0x35390c[_0xeea947(581)] : _0x35390c[_0xeea947(538)], _0xd3ff09 = _0x2bfb39[_0xeea947(446) + "h"] ? "" + IMAGE_URL + _0x2bfb39[_0xeea947(446) + "h"] : _0x15c650;
    _0x4b5305[_0xeea947(603)] = _0xeea947(499) + _0xeea947(474) + _0xeea947(485) + _0xeea947(456) + _0xeea947(572) + '"' + _0x420978 + _0xeea947(523) + _0x5c64f6 + (_0xeea947(513) + _0xeea947(474) + _0xeea947(605) + _0xeea947(558)) + _0xd3ff09 + _0xeea947(481) + (_0x2bfb39[_0xeea947(508)] || _0x2bfb39[_0xeea947(590)]) + (_0xeea947(478) + _0xeea947(474) + _0xeea947(480)) + (_0x2bfb39[_0xeea947(508)] || _0x2bfb39[_0xeea947(590)]) + (_0xeea947(606) + _0xeea947(474) + _0xeea947(436) + _0xeea947(531) + _0xeea947(497)) + (_0x2bfb39[_0xeea947(475) + "ge"] ? _0x35390c[_0xeea947(527)](_0x2bfb39[_0xeea947(475) + "ge"][_0xeea947(483)](1), _0x35390c[_0xeea947(579)]) : _0x35390c[_0xeea947(486)]) + (_0xeea947(512) + _0xeea947(474) + _0xeea947(592)), _0x4b5305[_0xeea947(601) + _0xeea947(547)](_0x35390c[_0xeea947(568)], () => openIframe(_0x2bfb39)), moviesContainer[_0xeea947(530) + "d"](_0x4b5305);
  });
}
function openIframe(_0x3e3e3c) {
  const _0x206584 = _0x30fdcc, _0x7accab = {RecVP: function (_0x46c941, _0x5a4990) {
    return _0x46c941 === _0x5a4990;
  }, tJnqr: _0x206584(597), VoyPV: _0x206584(526), IBEcA: function (_0x2ecc2a, _0x1749c8) {
    return _0x2ecc2a === _0x1749c8;
  }, WaXXH: function (_0x3a09d0, _0xb93bc3) {
    return _0x3a09d0 > _0xb93bc3;
  }, NkWRT: _0x206584(464), lZerV: _0x206584(540) + _0x206584(550), MYgtP: _0x206584(434) + _0x206584(465) + "e."};
  currentMovie = _0x3e3e3c;
  const _0x484a3b = _0x7accab[_0x206584(455)](_0x3e3e3c[_0x206584(600)], _0x7accab[_0x206584(468)]) ? _0x7accab[_0x206584(468)] : "tv", _0x92e15b = _0x3e3e3c.id;
  let _0x1f98c8;
  if (_0x7accab[_0x206584(455)](_0x484a3b, _0x7accab[_0x206584(468)])) _0x1f98c8 = _0x206584(433) + _0x206584(521) + _0x206584(522) + _0x206584(554) + _0x92e15b, seasonInput[_0x206584(460)][_0x206584(435)] = _0x7accab[_0x206584(441)], episodeInput[_0x206584(460)][_0x206584(435)] = _0x7accab[_0x206584(441)]; else {
    if (_0x7accab[_0x206584(454)](_0x484a3b, "tv")) {
      const _0x16b75a = _0x3e3e3c[_0x206584(575)] && _0x7accab[_0x206584(476)](_0x3e3e3c[_0x206584(575)][_0x206584(535)], 0) ? _0x3e3e3c[_0x206584(575)][0][_0x206584(539) + _0x206584(524)] : 1, _0x510fb4 = 1;
      _0x1f98c8 = _0x206584(433) + _0x206584(521) + _0x206584(522) + _0x206584(552) + _0x92e15b + "/" + _0x16b75a + "/" + _0x510fb4, seasonInput[_0x206584(565)] = _0x16b75a, episodeInput[_0x206584(565)] = _0x510fb4, seasonInput[_0x206584(460)][_0x206584(435)] = _0x7accab[_0x206584(503)], episodeInput[_0x206584(460)][_0x206584(435)] = _0x7accab[_0x206584(503)];
    }
  }
  iframePlayer[_0x206584(586)] = _0x1f98c8, iframeTitle[_0x206584(496) + "t"] = _0x3e3e3c[_0x206584(508)] || _0x3e3e3c[_0x206584(590)] || _0x7accab[_0x206584(582)], iframeSynopsis[_0x206584(496) + "t"] = _0x3e3e3c[_0x206584(477)] || _0x7accab[_0x206584(482)], iframeContainer[_0x206584(460)][_0x206584(435)] = _0x7accab[_0x206584(503)];
}
function closeIframe() {
  const _0x3e4b31 = _0x30fdcc, _0x441634 = {WMeUY: _0x3e4b31(526)};
  iframeContainer[_0x3e4b31(460)][_0x3e4b31(435)] = _0x441634[_0x3e4b31(591)], iframePlayer[_0x3e4b31(586)] = "";
}
function updateIframe() {
  const _0x15ec23 = _0x30fdcc, _0x257394 = {bYcFx: function (_0x10a8ed, _0x299a20) {
    return _0x10a8ed !== _0x299a20;
  }, kIfrC: function (_0x43b40b, _0x56b13a, _0x13b5bd) {
    return _0x43b40b(_0x56b13a, _0x13b5bd);
  }, HQjPI: function (_0x3b36ee, _0x1b6fe8, _0x5ce111) {
    return _0x3b36ee(_0x1b6fe8, _0x5ce111);
  }};
  if (!currentMovie || _0x257394[_0x15ec23(472)](currentMovie[_0x15ec23(600)], "tv")) return;
  const _0x44e703 = _0x257394[_0x15ec23(440)](parseInt, seasonInput[_0x15ec23(565)], 10) || 1, _0x28f51b = _0x257394[_0x15ec23(577)](parseInt, episodeInput[_0x15ec23(565)], 10) || 1, _0x5411e3 = currentMovie.id, _0x14adf6 = _0x15ec23(433) + _0x15ec23(521) + _0x15ec23(522) + _0x15ec23(552) + _0x5411e3 + "/" + _0x44e703 + "/" + _0x28f51b;
  iframePlayer[_0x15ec23(586)] = _0x14adf6;
}
searchInput[_0x30fdcc(601) + _0x30fdcc(547)](_0x30fdcc(495), () => {
  const _0x40dfa5 = _0x30fdcc, _0x103b77 = {ECGiL: function (_0x37b8b7, _0x244d74) {
    return _0x37b8b7(_0x244d74);
  }, Mjnfa: function (_0x1043f3) {
    return _0x1043f3();
  }}, _0x227812 = searchInput[_0x40dfa5(565)];
  _0x227812 ? _0x103b77[_0x40dfa5(488)](fetchMovies, BASE_URL + (_0x40dfa5(576) + _0x40dfa5(515) + "y=") + API_KEY + _0x40dfa5(559) + _0x227812) : _0x103b77[_0x40dfa5(517)](loadMovies);
}), categorySelect[_0x30fdcc(601) + _0x30fdcc(547)](_0x30fdcc(533), _0x460cd0 => {
  const _0x500b02 = _0x30fdcc, _0x30d474 = {SmiNk: function (_0x2fe075) {
    return _0x2fe075();
  }};
  currentCategory = _0x460cd0[_0x500b02(484)][_0x500b02(565)], currentPage = 1, _0x30d474[_0x500b02(453)](loadMovies);
}), prevButton[_0x30fdcc(601) + _0x30fdcc(547)](_0x30fdcc(449), () => {
  const _0x4e7641 = _0x30fdcc, _0x20843c = {meaKh: function (_0x5ee361, _0xe57807) {
    return _0x5ee361 > _0xe57807;
  }, BXPqz: function (_0x18b1f8) {
    return _0x18b1f8();
  }};
  _0x20843c[_0x4e7641(443)](currentPage, 1) && (currentPage--, _0x20843c[_0x4e7641(493)](loadMovies));
}), nextButton[_0x30fdcc(601) + _0x30fdcc(547)](_0x30fdcc(449), () => {
  const _0x6eb76d = _0x30fdcc, _0x3223ec = {YBOVj: function (_0x360c62) {
    return _0x360c62();
  }};
  currentPage++, _0x3223ec[_0x6eb76d(518)](loadMovies);
});
function loadMovies() {
  const _0x503f8e = _0x30fdcc, _0xfb17a2 = {GDQQj: function (_0x86d5ca, _0x369580) {
    return _0x86d5ca === _0x369580;
  }, cFmBu: _0x503f8e(597), YRidD: function (_0x406623, _0x25d6fe) {
    return _0x406623 === _0x25d6fe;
  }, zMekG: function (_0x333086, _0x30d0ee) {
    return _0x333086(_0x30d0ee);
  }};
  let _0x34f14d = BASE_URL + (_0x503f8e(541) + _0x503f8e(593) + _0x503f8e(438)) + API_KEY + _0x503f8e(489) + currentPage;
  if (_0xfb17a2[_0x503f8e(528)](currentCategory, _0xfb17a2[_0x503f8e(589)])) _0x34f14d = BASE_URL + (_0x503f8e(541) + _0x503f8e(567) + _0x503f8e(491)) + API_KEY + _0x503f8e(489) + currentPage; else _0xfb17a2[_0x503f8e(448)](currentCategory, "tv") && (_0x34f14d = BASE_URL + (_0x503f8e(541) + _0x503f8e(461) + _0x503f8e(467)) + API_KEY + _0x503f8e(489) + currentPage);
  _0xfb17a2[_0x503f8e(451)](fetchMovies, _0x34f14d);
}
loadMovies();
function _0x48b0() {
  const _0x550068 = ["season-inp", "error", "cFmBu", "name", "WMeUY", "   ", "all/week?a", "to load mo", "db.org/3", "Error: ", "movie", "2CpAjKJ", "status", "media_type", "addEventLi", "ById", "innerHTML", "mJYEF", "        <i", "</h3>\n    ", "https://pl", "No synopsi", "display", "      <div", "movie-card", "pi_key=", "4175044dtPlCp", "kIfrC", "VoyPV", "json", "meaKh", "https://im", "rg/t/p/w50", "poster_pat", "in later.<", "YRidD", "click", "prev", "zMekG", "fas fa-tv", "SmiNk", "IBEcA", "RecVP", 'ss="label"', "createElem", "Movie", "ent", "style", "tv/week?ap", "iframe-tit", "MTILm", "block", "s availabl", "8475327YEVdxA", "i_key=", "tJnqr", "132euHVMH", "vies. Plea", "se try aga", "bYcFx", "yer", "          ", "vote_avera", "WaXXH", "overview", '">\n       ', "results", "   <h3>", '" alt="', "MYgtP", "toFixed", "target", " <span cla", "nxJcy", "iframe-syn", "ECGiL", "&page=", "5433939UfbHsx", "?api_key=", "RuvCB", "BXPqz", "Pbcir", "input", "textConten", 'ting">', "1453421DeSArp", "\n         ", "8qOeBQM", "948JmJOlh", "getElement", "NkWRT", "/p>", "iframe-con", "TV Series", "opsis", "title", "1333390IDSGTc", "episode-in", "https://vi", "</div>\n   ", "</span>\n  ", "fcd4ca4e97", "lti?api_ke", "dXkxe", "Mjnfa", "YBOVj", "next", "rmoHj", "ayer.autoe", "mbed.cc/em", '"></i> ', "ber", "https://ap", "none", "MnhRY", "GDQQj", "dlyPu", "appendChil", ' class="ra', "iframe-pla", "change", "c542b4951c", "length", "CNbMy", "f3184f866b", "EfVXC", "season_num", "No title a", "/trending/", "a.placehol", "forEach", "biAtw", "2567814QlROrc", "=No+Image", "stener", "ePcmm", "0x300?text", "vailable", "movies-con", "bed/tv/", "put", "bed/movie/", "age.tmdb.o", "/10 ⭐", "NRnZG", 'mg src="', "&query=", "className", "<p>Failed ", "i.themovie", "all", "ETKrM", "value", "tainer", "movie/week", "fwzzn", "fas fa-fil", "category", "sTxlU", "><i class=", "6075PzWWlm", "div", "seasons", "/search/mu", "HQjPI", "No Rating", "zIeEp", "search", "xcbzc", "lZerV", "DqZlD", "loading", "der.com/20", "src"];
  _0x48b0 = function () {
    return _0x550068;
  };
  return _0x48b0();
}
