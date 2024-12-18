const _0x172fe7 = _0x231a;
function _0x17e5() {
  const _0x3fc242 = ["stener", "yer", "none", "movie", "<p>Failed ", "f3184f866b", "lYqcw", "overview", "/p>", "s availabl", "hEYYD", "display", "iframe-pla", "      <div", "pi_key=", '">\n       ', "12453243qoHgXC", "ById", "?api_key=", "toFixed", "bIhEe", "/trending/", "results", "in later.<", "vyRRA", "><i class=", "BijWS", "=No+Image", "title", "kXpID", "input", "fas fa-tv", "          ", "\n         ", "to load mo", "BOyCy", "jLGbW", "click", "EWiPi", "aEqbp", "35JDkLbJ", "fcd4ca4e97", "rg/t/p/w50", "kszzn", "kjEvF", "c542b4951c", "No Rating", "DzBrI", "status", "TV Series", 'ting">', "sRJEx", "vote_avera", "i_key=", "RnFEi", "https://im", "   ", "</span>\n  ", "tainer", "0x300?text", "loading", "Movie", "1760480zYlNCe", "movies-con", "createElem", "ImxTB", '" alt="', "jgAYq", "UGWxW", "qeepb", "opsis", 'mg src="', "media_type", "value", "all", "WDlna", "ed/tv/", "</div>\n   ", "weqoa", "QbnJw", "uLfzI", "vailable", 'ss="label"', "appendChil", "1743942fQabtf", "&page=", "No synopsi", "poster_pat", "style", ' class="ra', "next", "movie-card", "forEach", "der.com/20", "movie/week", "iframe-syn", "textConten", "   <h3>", "4SaVuFS", "/search/mu", "2teWrKX", "AUAnv", "zBZXi", "https://ap", "getElement", "BgSjQ", "tv/week?ap", "ent", "No title a", "innerHTML", "5LRxMLH", "vies. Plea", "lti?api_ke", "/10 ⭐", "se try aga", "311265ljYAdK", "src", "prev", "        <i", " <span cla", "zUKHM", "age.tmdb.o", "change", "cEsxT", "iqIwF", '"></i> ', "Error: ", "gviJH", "div", "target", "block", "</h3>\n    ", "dYhfz", "https://em", "a.placehol", "iframe-con", "className", "fas fa-fil", "608998dPUlUN", "bed.su/emb", "search", "1569489OwdeTn", "cAaYD", "db.org/3", "EpxoF", "360iCvoLH", "error", "iframe-tit", "/1/1", "category", "name", "ed/movie/", "json", "addEventLi", "49927176JkXoOf", "WpcKW", "i.themovie", "obHAn", "https://vi", "all/week?a", "&query="];
  _0x17e5 = function () {
    return _0x3fc242;
  };
  return _0x17e5();
}
(function (_0x5080ec, _0x52db47) {
  const _0xe31218 = _0x231a, _0xdc69af = _0x5080ec();
  while (true) {
    try {
      const _0x5772c3 = -parseInt(_0xe31218(409)) / 1 * (parseInt(_0xe31218(532)) / 2) + -parseInt(_0xe31218(412)) / 3 * (-parseInt(_0xe31218(530)) / 4) + parseInt(_0xe31218(381)) / 5 * (parseInt(_0xe31218(516)) / 6) + parseInt(_0xe31218(472)) / 7 * (-parseInt(_0xe31218(494)) / 8) + -parseInt(_0xe31218(386)) / 9 * (parseInt(_0xe31218(416)) / 10) + -parseInt(_0xe31218(448)) / 11 + parseInt(_0xe31218(425)) / 12;
      if (_0x5772c3 === _0x52db47) break; else _0xdc69af.push(_0xdc69af.shift());
    } catch (_0x260118) {
      _0xdc69af.push(_0xdc69af.shift());
    }
  }
}(_0x17e5, 887947));
const API_KEY = _0x172fe7(477) + _0x172fe7(473) + _0x172fe7(437) + "70", BASE_URL = _0x172fe7(535) + _0x172fe7(427) + _0x172fe7(414), IMAGE_URL = _0x172fe7(487) + _0x172fe7(392) + _0x172fe7(474) + "0", moviesContainer = document[_0x172fe7(536) + _0x172fe7(449)](_0x172fe7(495) + _0x172fe7(490)), searchInput = document[_0x172fe7(536) + _0x172fe7(449)](_0x172fe7(411)), categorySelect = document[_0x172fe7(536) + _0x172fe7(449)](_0x172fe7(420)), prevButton = document[_0x172fe7(536) + _0x172fe7(449)](_0x172fe7(388)), nextButton = document[_0x172fe7(536) + _0x172fe7(449)](_0x172fe7(522)), iframeContainer = document[_0x172fe7(536) + _0x172fe7(449)](_0x172fe7(406) + _0x172fe7(490)), iframePlayer = document[_0x172fe7(536) + _0x172fe7(449)](_0x172fe7(444) + _0x172fe7(433)), loadingElement = document[_0x172fe7(536) + _0x172fe7(449)](_0x172fe7(492)), iframeSynopsis = document[_0x172fe7(536) + _0x172fe7(449)](_0x172fe7(527) + _0x172fe7(502)), iframeTitle = document[_0x172fe7(536) + _0x172fe7(449)](_0x172fe7(418) + "le");
let currentPage = 1, currentCategory = _0x172fe7(506);
function _0x231a(_0x3c73a4, _0x12f16e) {
  const _0x224255 = _0x17e5();
  return _0x231a = function (_0x43e17f, _0x47a31c) {
    _0x43e17f = _0x43e17f - 376;
    let _0x49bb19 = _0x224255[_0x43e17f];
    return _0x49bb19;
  }, _0x231a(_0x3c73a4, _0x12f16e);
}
function setLoading(_0x259409) {
  const _0x9f5961 = _0x172fe7, _0x151d5f = {zUKHM: _0x9f5961(401), UGWxW: _0x9f5961(434)};
  loadingElement[_0x9f5961(520)][_0x9f5961(443)] = _0x259409 ? _0x151d5f[_0x9f5961(391)] : _0x151d5f[_0x9f5961(500)];
}
async function fetchMovies(_0x236a2c) {
  const _0x5e9069 = _0x172fe7, _0x550d31 = {BOyCy: function (_0x1d6e21, _0x8f58bd) {
    return _0x1d6e21(_0x8f58bd);
  }, kjEvF: function (_0xf52de6, _0x350196) {
    return _0xf52de6(_0x350196);
  }, cAaYD: _0x5e9069(436) + _0x5e9069(466) + _0x5e9069(382) + _0x5e9069(385) + _0x5e9069(455) + _0x5e9069(440), weqoa: function (_0x2f24cd, _0x2a51d1) {
    return _0x2f24cd(_0x2a51d1);
  }};
  _0x550d31[_0x5e9069(467)](setLoading, true);
  try {
    const _0xcff012 = await _0x550d31[_0x5e9069(476)](fetch, _0x236a2c);
    if (!_0xcff012.ok) throw new Error(_0x5e9069(397) + _0xcff012[_0x5e9069(480)]);
    const _0x4018e4 = await _0xcff012[_0x5e9069(423)]();
    _0x550d31[_0x5e9069(476)](displayMovies, _0x4018e4[_0x5e9069(454)]);
  } catch (_0x5773c3) {
    console[_0x5e9069(417)](_0x5773c3), moviesContainer[_0x5e9069(380)] = _0x550d31[_0x5e9069(413)];
  } finally {
    _0x550d31[_0x5e9069(510)](setLoading, false);
  }
}
function displayMovies(_0x662f1a) {
  const _0x1e75cf = _0x172fe7, _0x5a1ee0 = {BgSjQ: _0x1e75cf(399), BijWS: _0x1e75cf(523), EWiPi: function (_0x37f533, _0x3aa622) {
    return _0x37f533 === _0x3aa622;
  }, sRJEx: _0x1e75cf(435), qeepb: _0x1e75cf(493), dYhfz: _0x1e75cf(481), bIhEe: _0x1e75cf(408) + "m", lYqcw: _0x1e75cf(463), uLfzI: function (_0x595978, _0x15541e) {
    return _0x595978 + _0x15541e;
  }, WDlna: _0x1e75cf(384), zBZXi: _0x1e75cf(478), gviJH: _0x1e75cf(469), iqIwF: _0x1e75cf(429) + _0x1e75cf(405) + _0x1e75cf(525) + _0x1e75cf(491) + _0x1e75cf(459)};
  moviesContainer[_0x1e75cf(380)] = "";
  const _0x3c0d33 = _0x5a1ee0[_0x1e75cf(395)];
  _0x662f1a[_0x1e75cf(524)](_0x539e17 => {
    const _0x408abf = _0x1e75cf, _0x21ac7a = document[_0x408abf(496) + _0x408abf(378)](_0x5a1ee0[_0x408abf(376)]);
    _0x21ac7a[_0x408abf(407)] = _0x5a1ee0[_0x408abf(458)];
    const _0x62bbb3 = _0x5a1ee0[_0x408abf(470)](_0x539e17[_0x408abf(504)], _0x5a1ee0[_0x408abf(483)]) ? _0x5a1ee0[_0x408abf(501)] : _0x5a1ee0[_0x408abf(403)], _0x290bce = _0x5a1ee0[_0x408abf(470)](_0x539e17[_0x408abf(504)], _0x5a1ee0[_0x408abf(483)]) ? _0x5a1ee0[_0x408abf(452)] : _0x5a1ee0[_0x408abf(438)], _0x2886ed = _0x539e17[_0x408abf(519) + "h"] ? "" + IMAGE_URL + _0x539e17[_0x408abf(519) + "h"] : _0x3c0d33;
    _0x21ac7a[_0x408abf(380)] = _0x408abf(465) + _0x408abf(464) + _0x408abf(390) + _0x408abf(514) + _0x408abf(457) + '"' + _0x290bce + _0x408abf(396) + _0x62bbb3 + (_0x408abf(489) + _0x408abf(464) + _0x408abf(389) + _0x408abf(503)) + _0x2886ed + _0x408abf(498) + (_0x539e17[_0x408abf(460)] || _0x539e17[_0x408abf(421)]) + (_0x408abf(447) + _0x408abf(464) + _0x408abf(529)) + (_0x539e17[_0x408abf(460)] || _0x539e17[_0x408abf(421)]) + (_0x408abf(402) + _0x408abf(464) + _0x408abf(445) + _0x408abf(521) + _0x408abf(482)) + (_0x539e17[_0x408abf(484) + "ge"] ? _0x5a1ee0[_0x408abf(512)](_0x539e17[_0x408abf(484) + "ge"][_0x408abf(451)](1), _0x5a1ee0[_0x408abf(507)]) : _0x5a1ee0[_0x408abf(534)]) + (_0x408abf(509) + _0x408abf(464) + _0x408abf(488)), _0x21ac7a[_0x408abf(424) + _0x408abf(432)](_0x5a1ee0[_0x408abf(398)], () => openIframe(_0x539e17)), moviesContainer[_0x408abf(515) + "d"](_0x21ac7a);
  });
}
function openIframe(_0x293669) {
  const _0xad6af6 = _0x172fe7, _0x1ff05a = {WpcKW: function (_0x47956b, _0x21f8d3) {
    return _0x47956b === _0x21f8d3;
  }, vyRRA: _0xad6af6(435), hEYYD: _0xad6af6(379) + _0xad6af6(513), RnFEi: _0xad6af6(518) + _0xad6af6(441) + "e.", kszzn: _0xad6af6(401)}, _0x4dc3e0 = _0x1ff05a[_0xad6af6(426)](_0x293669[_0xad6af6(504)], _0x1ff05a[_0xad6af6(456)]) ? _0x1ff05a[_0xad6af6(456)] : "tv", _0x3b9701 = _0x293669.id;
  iframePlayer[_0xad6af6(387)] = _0x1ff05a[_0xad6af6(426)](_0x4dc3e0, _0x1ff05a[_0xad6af6(456)]) ? _0xad6af6(404) + _0xad6af6(410) + _0xad6af6(422) + _0x3b9701 : _0xad6af6(404) + _0xad6af6(410) + _0xad6af6(508) + _0x3b9701 + _0xad6af6(419), iframeTitle[_0xad6af6(528) + "t"] = _0x293669[_0xad6af6(460)] || _0x293669[_0xad6af6(421)] || _0x1ff05a[_0xad6af6(442)], iframeSynopsis[_0xad6af6(528) + "t"] = _0x293669[_0xad6af6(439)] || _0x1ff05a[_0xad6af6(486)], iframeContainer[_0xad6af6(520)][_0xad6af6(443)] = _0x1ff05a[_0xad6af6(475)];
}
function closeIframe() {
  const _0x4d4a31 = _0x172fe7, _0xbc8cad = {EpxoF: _0x4d4a31(434)};
  iframeContainer[_0x4d4a31(520)][_0x4d4a31(443)] = _0xbc8cad[_0x4d4a31(415)], iframePlayer[_0x4d4a31(387)] = "";
}
searchInput[_0x172fe7(424) + _0x172fe7(432)](_0x172fe7(462), () => {
  const _0x51f7ff = _0x172fe7, _0x5ce890 = {cEsxT: function (_0x5016ab, _0x2e8318) {
    return _0x5016ab(_0x2e8318);
  }, kXpID: function (_0x9fd16a) {
    return _0x9fd16a();
  }}, _0x4ea3fc = searchInput[_0x51f7ff(505)];
  _0x4ea3fc ? _0x5ce890[_0x51f7ff(394)](fetchMovies, BASE_URL + (_0x51f7ff(531) + _0x51f7ff(383) + "y=") + API_KEY + _0x51f7ff(431) + _0x4ea3fc) : _0x5ce890[_0x51f7ff(461)](loadMovies);
}), categorySelect[_0x172fe7(424) + _0x172fe7(432)](_0x172fe7(393), _0x3bc2ed => {
  const _0x47cbc1 = _0x172fe7, _0x453f46 = {AUAnv: function (_0x7fd7bf) {
    return _0x7fd7bf();
  }};
  currentCategory = _0x3bc2ed[_0x47cbc1(400)][_0x47cbc1(505)], currentPage = 1, _0x453f46[_0x47cbc1(533)](loadMovies);
}), prevButton[_0x172fe7(424) + _0x172fe7(432)](_0x172fe7(469), () => {
  const _0x3bebfe = _0x172fe7, _0x315fcc = {aEqbp: function (_0x4b13eb, _0x5bfe1b) {
    return _0x4b13eb > _0x5bfe1b;
  }, jgAYq: function (_0x4d5c62) {
    return _0x4d5c62();
  }};
  _0x315fcc[_0x3bebfe(471)](currentPage, 1) && (currentPage--, _0x315fcc[_0x3bebfe(499)](loadMovies));
}), nextButton[_0x172fe7(424) + _0x172fe7(432)](_0x172fe7(469), () => {
  const _0x2b8b2b = _0x172fe7, _0x9c87f5 = {obHAn: function (_0x20e732) {
    return _0x20e732();
  }};
  currentPage++, _0x9c87f5[_0x2b8b2b(428)](loadMovies);
});
function loadMovies() {
  const _0x1ebbc7 = _0x172fe7, _0x527f84 = {QbnJw: function (_0x33e204, _0x155b18) {
    return _0x33e204 === _0x155b18;
  }, ImxTB: _0x1ebbc7(435), DzBrI: function (_0x49e356, _0x41b267) {
    return _0x49e356 === _0x41b267;
  }, jLGbW: function (_0x1884e7, _0x585fc0) {
    return _0x1884e7(_0x585fc0);
  }};
  let _0x1dbc4f = BASE_URL + (_0x1ebbc7(453) + _0x1ebbc7(430) + _0x1ebbc7(446)) + API_KEY + _0x1ebbc7(517) + currentPage;
  if (_0x527f84[_0x1ebbc7(511)](currentCategory, _0x527f84[_0x1ebbc7(497)])) _0x1dbc4f = BASE_URL + (_0x1ebbc7(453) + _0x1ebbc7(526) + _0x1ebbc7(450)) + API_KEY + _0x1ebbc7(517) + currentPage; else _0x527f84[_0x1ebbc7(479)](currentCategory, "tv") && (_0x1dbc4f = BASE_URL + (_0x1ebbc7(453) + _0x1ebbc7(377) + _0x1ebbc7(485)) + API_KEY + _0x1ebbc7(517) + currentPage);
  _0x527f84[_0x1ebbc7(468)](fetchMovies, _0x1dbc4f);
}
loadMovies();
