const _0x27000b = _0xcf58;
function _0xcf58(_0x21f344, _0x3a2d3f) {
  const _0x108735 = _0x2618();
  return _0xcf58 = function (_0x117b68, _0x13fdb5) {
    _0x117b68 = _0x117b68 - 395;
    let _0x4e4cf2 = _0x108735[_0x117b68];
    return _0x4e4cf2;
  }, _0xcf58(_0x21f344, _0x3a2d3f);
}
(function (_0x45489b, _0x1a84b4) {
  const _0x68bbc5 = _0xcf58, _0x67316a = _0x45489b();
  while (true) {
    try {
      const _0x13446c = -parseInt(_0x68bbc5(651)) / 1 * (-parseInt(_0x68bbc5(423)) / 2) + -parseInt(_0x68bbc5(435)) / 3 + -parseInt(_0x68bbc5(443)) / 4 * (-parseInt(_0x68bbc5(746)) / 5) + -parseInt(_0x68bbc5(401)) / 6 + -parseInt(_0x68bbc5(765)) / 7 * (-parseInt(_0x68bbc5(421)) / 8) + -parseInt(_0x68bbc5(454)) / 9 + -parseInt(_0x68bbc5(476)) / 10 * (-parseInt(_0x68bbc5(441)) / 11);
      if (_0x13446c === _0x1a84b4) break; else _0x67316a.push(_0x67316a.shift());
    } catch (_0x1ef6d6) {
      _0x67316a.push(_0x67316a.shift());
    }
  }
}(_0x2618, 303274));
const API_KEY = _0x27000b(723) + _0x27000b(716) + _0x27000b(588) + "70", BASE_URL = _0x27000b(580) + _0x27000b(767) + _0x27000b(574), IMG_URL = _0x27000b(592) + _0x27000b(774) + _0x27000b(745) + _0x27000b(544), movieList = document[_0x27000b(485) + _0x27000b(539)](_0x27000b(502)), trendingList = document[_0x27000b(485) + _0x27000b(539)](_0x27000b(773) + _0x27000b(634)), loadMovies = document[_0x27000b(485) + _0x27000b(539)](_0x27000b(456) + "s"), loadTV = document[_0x27000b(485) + _0x27000b(539)](_0x27000b(689)), sectionTitle = document[_0x27000b(485) + _0x27000b(539)](_0x27000b(482) + _0x27000b(516)), trendingTitle = document[_0x27000b(485) + _0x27000b(539)](_0x27000b(571) + _0x27000b(677)), searchInput = document[_0x27000b(485) + _0x27000b(539)](_0x27000b(535) + "ut"), searchButton = document[_0x27000b(485) + _0x27000b(539)](_0x27000b(558) + _0x27000b(413)), genreFilter = document[_0x27000b(485) + _0x27000b(539)](_0x27000b(656) + "er"), prevPageButton = document[_0x27000b(485) + _0x27000b(539)](_0x27000b(711)), nextPageButton = document[_0x27000b(485) + _0x27000b(539)](_0x27000b(751)), pageInfo = document[_0x27000b(485) + _0x27000b(539)](_0x27000b(406)), toggleDarkMode = document[_0x27000b(485) + _0x27000b(539)](_0x27000b(521) + _0x27000b(602)), floatingPlayer = document[_0x27000b(485) + _0x27000b(539)](_0x27000b(576) + _0x27000b(635)), playerTitle = document[_0x27000b(485) + _0x27000b(539)](_0x27000b(777) + "le"), playerSynopsis = document[_0x27000b(485) + _0x27000b(539)](_0x27000b(669) + _0x27000b(747)), playerForm = document[_0x27000b(485) + _0x27000b(539)](_0x27000b(740) + "m"), seasonInput = document[_0x27000b(485) + _0x27000b(539)](_0x27000b(770) + "ut"), episodeInput = document[_0x27000b(485) + _0x27000b(539)](_0x27000b(668) + _0x27000b(600)), playEpisodeButton = document[_0x27000b(485) + _0x27000b(539)](_0x27000b(463) + "de"), playerIframe = document[_0x27000b(485) + _0x27000b(539)](_0x27000b(486) + _0x27000b(707)), closePlayerButton = document[_0x27000b(485) + _0x27000b(539)](_0x27000b(727) + "er"), scrollToTopButton = document[_0x27000b(485) + _0x27000b(539)](_0x27000b(671) + _0x27000b(462));
let currentMode = _0x27000b(447), currentPage = 1, genreMap = {}, currentItemId = null;
async function fetchItems(_0x174b2b) {
  const _0x53e82e = _0x27000b, _0xe0f4b3 = {CAiYu: function (_0x4a4812, _0x4d07fa) {
    return _0x4a4812(_0x4d07fa);
  }, pBDPG: function (_0x722fce, _0x1646b6, _0x40ebec) {
    return _0x722fce(_0x1646b6, _0x40ebec);
  }, DwlPE: function (_0x308681, _0x2fa266) {
    return _0x308681 === _0x2fa266;
  }, cNKzs: function (_0x56043d, _0x4597c8) {
    return _0x56043d === _0x4597c8;
  }, fzfkB: _0x53e82e(450) + _0x53e82e(471) + ":", AhlkQ: _0x53e82e(609) + _0x53e82e(484) + _0x53e82e(735) + _0x53e82e(664) + _0x53e82e(638)};
  try {
    const _0x366e4a = await _0xe0f4b3[_0x53e82e(730)](fetch, _0x174b2b);
    if (!_0x366e4a.ok) throw new Error(_0x53e82e(519) + _0x53e82e(458) + _0x366e4a[_0x53e82e(734)]);
    const _0x3c77bb = await _0x366e4a[_0x53e82e(436)]();
    _0xe0f4b3[_0x53e82e(619)](displayItems, _0x3c77bb[_0x53e82e(566)], _0x3c77bb[_0x53e82e(718) + "s"]), prevPageButton[_0x53e82e(537)] = _0xe0f4b3[_0x53e82e(527)](currentPage, 1), nextPageButton[_0x53e82e(537)] = _0xe0f4b3[_0x53e82e(629)](currentPage, _0x3c77bb[_0x53e82e(718) + "s"]);
  } catch (_0x59ea36) {
    console[_0x53e82e(714)](_0xe0f4b3[_0x53e82e(623)], _0x59ea36), _0xe0f4b3[_0x53e82e(730)](alert, _0xe0f4b3[_0x53e82e(772)]);
  }
}
function displayItems(_0x4fe66f, _0x2e6d6a) {
  const _0x453cc0 = _0x27000b, _0x2e13e7 = {rtpMc: _0x453cc0(737), QlJUX: _0x453cc0(625) + _0x453cc0(687) + _0x453cc0(666) + _0x453cc0(517) + _0x453cc0(768), SEBbU: _0x453cc0(509), HYRcz: _0x453cc0(444), XHnia: function (_0x5dd583, _0x13f5ce) {
    return _0x5dd583(_0x13f5ce);
  }};
  movieList[_0x453cc0(682)] = "", _0x4fe66f[_0x453cc0(469)](_0x1aa40e => {
    const _0x4fdf5d = _0x453cc0, _0x2aadc7 = {WcmHL: _0x2e13e7[_0x4fdf5d(474)]}, _0x1b172c = _0x1aa40e[_0x4fdf5d(411)] || _0x1aa40e[_0x4fdf5d(397)], _0xfe9f86 = (_0x1aa40e[_0x4fdf5d(659) + "te"] || _0x1aa40e[_0x4fdf5d(722) + _0x4fdf5d(402)] || "")[_0x4fdf5d(778)]("-")[0] || _0x2e13e7[_0x4fdf5d(474)], _0x5ce7fb = _0x1aa40e[_0x4fdf5d(675) + "h"] ? "" + IMG_URL + _0x1aa40e[_0x4fdf5d(675) + "h"] : _0x2e13e7[_0x4fdf5d(636)], _0x293c64 = _0x1aa40e[_0x4fdf5d(440) + "ge"] || _0x2e13e7[_0x4fdf5d(526)], _0x407321 = _0x1aa40e[_0x4fdf5d(665)] || [], _0x148f0d = _0x407321[_0x4fdf5d(472)](_0x3315a6 => {
      const _0x426691 = _0x4fdf5d;
      return _0x426691(546) + _0x426691(742) + _0x426691(703) + _0x426691(437) + _0x426691(596) + _0x426691(614) + (genreMap[_0x3315a6] || _0x2aadc7[_0x426691(478)]) + _0x426691(764);
    })[_0x4fdf5d(483)](""), _0x261e44 = _0x4fdf5d(498) + _0x4fdf5d(470) + _0x4fdf5d(585) + _0x4fdf5d(424) + _0x4fdf5d(541) + _0x4fdf5d(683) + _0x4fdf5d(543) + _0x4fdf5d(470) + _0x4fdf5d(470) + _0x4fdf5d(766) + _0x4fdf5d(515) + _0x4fdf5d(688) + _0x4fdf5d(434) + _0x4fdf5d(555) + _0x4fdf5d(457) + _0x1aa40e.id + (_0x4fdf5d(759) + _0x4fdf5d(661)) + _0x1b172c + (_0x4fdf5d(398) + _0x4fdf5d(536)) + _0x1aa40e[_0x4fdf5d(545)] + (_0x4fdf5d(563) + _0x4fdf5d(470) + _0x4fdf5d(470) + _0x4fdf5d(585) + _0x4fdf5d(427) + _0x4fdf5d(428) + _0x4fdf5d(652) + _0x4fdf5d(779) + _0x4fdf5d(504)) + _0xfe9f86 + (_0x4fdf5d(761) + _0x4fdf5d(470) + _0x4fdf5d(470) + _0x4fdf5d(695) + _0x4fdf5d(601) + _0x4fdf5d(548) + _0x4fdf5d(709) + _0x4fdf5d(561) + _0x4fdf5d(621) + ">") + _0x293c64 + (_0x4fdf5d(657) + _0x4fdf5d(470) + _0x4fdf5d(470) + _0x4fdf5d(419) + _0x4fdf5d(564)) + _0x5ce7fb + (_0x4fdf5d(500) + _0x4fdf5d(710) + _0x4fdf5d(445)) + _0x1b172c + (_0x4fdf5d(563) + _0x4fdf5d(470) + _0x4fdf5d(470) + _0x4fdf5d(585) + _0x4fdf5d(608) + _0x4fdf5d(407) + _0x4fdf5d(470) + _0x4fdf5d(470) + _0x4fdf5d(493) + _0x4fdf5d(439) + _0x4fdf5d(522)) + _0x1b172c + (_0x4fdf5d(420) + _0x4fdf5d(470) + _0x4fdf5d(470) + _0x4fdf5d(708) + _0x4fdf5d(395) + _0x4fdf5d(750)) + _0x148f0d + (_0x4fdf5d(761) + _0x4fdf5d(470) + _0x4fdf5d(470) + _0x4fdf5d(589) + _0x4fdf5d(409) + _0x4fdf5d(568)) + _0x1aa40e[_0x4fdf5d(545)][_0x4fdf5d(404)](0, 100) + (_0x4fdf5d(698) + _0x4fdf5d(470) + _0x4fdf5d(470) + _0x4fdf5d(715) + _0x4fdf5d(640) + _0x4fdf5d(470) + _0x4fdf5d(559) + _0x4fdf5d(650) + _0x4fdf5d(470) + _0x4fdf5d(583));
    movieList[_0x4fdf5d(581) + _0x4fdf5d(518)](_0x2e13e7[_0x4fdf5d(554)], _0x261e44);
  }), _0x2e13e7[_0x453cc0(618)](updatePageInfo, _0x2e6d6a);
}
function displayTrendingItems(_0x292494) {
  const _0x72bec0 = _0x27000b, _0x24374f = {grclu: _0x72bec0(737), WJytZ: _0x72bec0(625) + _0x72bec0(687) + _0x72bec0(666) + _0x72bec0(517) + _0x72bec0(768), pgnQw: _0x72bec0(509), ocOZW: function (_0x4ab86f, _0x4f0e58) {
    return _0x4ab86f === _0x4f0e58;
  }, lbjUW: _0x72bec0(760), OMSyR: _0x72bec0(444), MoiEp: _0x72bec0(506) + _0x72bec0(549)}, _0x5aae8c = document[_0x72bec0(485) + _0x72bec0(539)](_0x24374f[_0x72bec0(524)]);
  _0x5aae8c[_0x72bec0(682)] = "", _0x292494[_0x72bec0(469)]((_0x5b1c73, _0x2560f7) => {
    const _0x451936 = _0x72bec0, _0x6eab34 = {WNDmI: _0x24374f[_0x451936(717)]}, _0x373dac = _0x5b1c73[_0x451936(411)] || _0x5b1c73[_0x451936(397)], _0x35b428 = (_0x5b1c73[_0x451936(659) + "te"] || _0x5b1c73[_0x451936(722) + _0x451936(402)] || "")[_0x451936(778)]("-")[0] || _0x24374f[_0x451936(717)], _0x4f674d = _0x5b1c73[_0x451936(675) + "h"] ? "" + IMG_URL + _0x5b1c73[_0x451936(675) + "h"] : _0x24374f[_0x451936(775)], _0x10a606 = _0x5b1c73[_0x451936(440) + "ge"] || _0x24374f[_0x451936(597)], _0x2105c5 = _0x5b1c73[_0x451936(665)] || [], _0x1618ea = _0x2105c5[_0x451936(472)](_0xa82c2e => {
      const _0x4d978e = _0x451936;
      return _0x4d978e(546) + _0x4d978e(742) + _0x4d978e(703) + _0x4d978e(437) + _0x4d978e(596) + _0x4d978e(614) + (genreMap[_0xa82c2e] || _0x6eab34[_0x4d978e(670)]) + _0x4d978e(764);
    })[_0x451936(483)](""), _0x5c016a = _0x451936(498) + _0x451936(470) + _0x451936(585) + _0x451936(410) + _0x451936(758) + (_0x24374f[_0x451936(679)](_0x2560f7, 0) ? _0x24374f[_0x451936(646)] : "") + (_0x451936(563) + _0x451936(470) + _0x451936(396) + _0x451936(648) + _0x451936(487) + _0x451936(756) + _0x451936(674) + _0x451936(763)) + _0x5b1c73.id + (_0x451936(759) + _0x451936(661)) + _0x373dac + (_0x451936(398) + _0x451936(536)) + _0x5b1c73[_0x451936(545)] + (_0x451936(563) + _0x451936(470) + _0x451936(470) + _0x451936(585) + _0x451936(427) + _0x451936(428) + _0x451936(652) + _0x451936(779) + _0x451936(504)) + _0x35b428 + (_0x451936(761) + _0x451936(470) + _0x451936(470) + _0x451936(695) + _0x451936(601) + _0x451936(548) + _0x451936(709) + _0x451936(561) + _0x451936(621) + ">") + _0x10a606 + (_0x451936(657) + _0x451936(470) + _0x451936(470) + _0x451936(419) + _0x451936(564)) + _0x4f674d + (_0x451936(500) + _0x451936(710) + _0x451936(445)) + _0x373dac + (_0x451936(563) + _0x451936(470) + _0x451936(470) + _0x451936(585) + _0x451936(608) + _0x451936(407) + _0x451936(470) + _0x451936(470) + _0x451936(493) + _0x451936(439) + _0x451936(522)) + _0x373dac + (_0x451936(420) + _0x451936(470) + _0x451936(470) + _0x451936(708) + _0x451936(395) + _0x451936(750)) + _0x1618ea + (_0x451936(761) + _0x451936(470) + _0x451936(470) + _0x451936(589) + _0x451936(409) + _0x451936(568)) + _0x5b1c73[_0x451936(545)][_0x451936(404)](0, 100) + (_0x451936(698) + _0x451936(470) + _0x451936(470) + _0x451936(715) + _0x451936(640) + _0x451936(470) + _0x451936(559) + _0x451936(650) + _0x451936(470) + _0x451936(583));
    _0x5aae8c[_0x451936(581) + _0x451936(518)](_0x24374f[_0x451936(466)], _0x5c016a);
  });
}
function updatePageInfo(_0x477857) {
  const _0x266bae = _0x27000b;
  pageInfo[_0x266bae(769) + "t"] = _0x266bae(654) + currentPage + _0x266bae(569) + _0x477857;
}
function loadPopular() {
  const _0x467854 = _0x27000b, _0x326fd1 = {aICYf: function (_0x4c191b, _0x394fb3) {
    return _0x4c191b(_0x394fb3);
  }}, _0x27297b = "" + BASE_URL + currentMode + (_0x467854(755) + _0x467854(736)) + API_KEY + _0x467854(603) + currentPage;
  _0x326fd1[_0x467854(590)](fetchItems, _0x27297b);
}
async function fetchGenres() {
  const _0x38e3b4 = _0x27000b, _0x4404da = {Uvjmf: _0x38e3b4(685), IEAni: function (_0x1adfbe, _0x1d1c16) {
    return _0x1adfbe(_0x1d1c16);
  }, LWfWI: _0x38e3b4(450) + _0x38e3b4(672) + "s:"}, _0x137172 = BASE_URL + _0x38e3b4(655) + currentMode + (_0x38e3b4(644) + _0x38e3b4(606)) + API_KEY;
  try {
    const _0x14b3bb = await _0x4404da[_0x38e3b4(508)](fetch, _0x137172), _0x2bb65b = await _0x14b3bb[_0x38e3b4(436)]();
    genreMap = {}, _0x2bb65b[_0x38e3b4(431)][_0x38e3b4(469)](_0x157d4b => {
      const _0x2357c5 = _0x38e3b4;
      genreMap[_0x157d4b.id] = _0x157d4b[_0x2357c5(397)];
      const _0x3088b5 = document[_0x2357c5(452) + _0x2357c5(627)](_0x4404da[_0x2357c5(477)]);
      _0x3088b5[_0x2357c5(642)] = _0x157d4b.id, _0x3088b5[_0x2357c5(769) + "t"] = _0x157d4b[_0x2357c5(397)], genreFilter[_0x2357c5(684) + "d"](_0x3088b5);
    });
  } catch (_0x54aa12) {
    console[_0x38e3b4(714)](_0x4404da[_0x38e3b4(405)], _0x54aa12);
  }
}
async function fetchTrending() {
  const _0x2b3282 = _0x27000b, _0x50748a = {GsUFn: function (_0x5576b9, _0x3f4a43) {
    return _0x5576b9(_0x3f4a43);
  }, jqNze: function (_0x496fa0, _0x3b9b53) {
    return _0x496fa0(_0x3b9b53);
  }, GVHeO: _0x2b3282(450) + _0x2b3282(422) + _0x2b3282(418), bdkhJ: _0x2b3282(609) + _0x2b3282(599) + _0x2b3282(738) + _0x2b3282(595) + _0x2b3282(749) + _0x2b3282(693)}, _0x263095 = BASE_URL + _0x2b3282(624) + currentMode + (_0x2b3282(475) + _0x2b3282(473)) + API_KEY;
  try {
    const _0x5c4d9 = await _0x50748a[_0x2b3282(632)](fetch, _0x263095), _0x373c94 = await _0x5c4d9[_0x2b3282(436)]();
    _0x50748a[_0x2b3282(557)](displayTrendingItems, _0x373c94[_0x2b3282(566)]);
  } catch (_0x36557b) {
    console[_0x2b3282(714)](_0x50748a[_0x2b3282(446)], _0x36557b), _0x50748a[_0x2b3282(557)](alert, _0x50748a[_0x2b3282(731)]);
  }
}
function _0x2618() {
  const _0x1b6e4 = ["Popular TV", "isIntersec", "...</p>\n  ", "add", "DGTmh", "target", "slice", 'abel"><i c', "<option va", "0|6|2|1|5|", "oqRpF", "ame", "        <d", "lute ratin", "ard-img-to", "prev-page", "eoyiv", "dataset", "error", "      </di", "fcd4ca4e97", "grclu", "total_page", "ting", "2|7|1", "TmQUp", "first_air_", "c542b4951c", "Toggle Dar", "YccdE", "IfLFE", "close-play", "KoLut", "KxAnB", "CAiYu", "bdkhJ", "log", "addEventLi", "status", "s. Please ", "pi_key=", "Unknown", "ding items", "trim", "player-for", "smooth", 's="genre-l', "QdvWF", "ByVAm", "iedb.org/t", "190mrRZXu", "opsis", "vies", "ry again l", 'mb-2">', "next-page", "SiLMp", "Intersecti", "display", "/popular?a", "on-relativ", "eMehY", "l-item ", '" data-tit', "active", "</div>\n   ", "Uzzjs", 'ata-id="', "</span>", "49CPQfWQ", "   <div cl", "i.themovie", "=No+Image", "textConten", "season-inp", "HJgRq", "AhlkQ", "trending-c", "dia.themov", "WJytZ", "es=", "player-tit", "split", "l top-0 st", "mbers.", "Vsdbx", 'iv class="', "       <di", "name", '" data-syn', "vpEyL", "DXLdW", "2030694drCiph", "date", "4|3|7", "substring", "LWfWI", "page-info", 'dy">\n     ', "wohAX", 'p class="c', 's="carouse', "title", "wSlES", "ton", "data-title", "scrollTop", "ZgGvn", "jIDRR", "ing items:", "        <i", "</h5>\n    ", "213968QcwTPr", "hing trend", "8486MBtGBF", 's="col-12 ', "Load Movie", "RJpWn", 's="positio', "n-absolute", "QYzxp", "cked", "genres", "dsrc.cc/v2", "er both se", "elative h-", "876195MiWWht", "json", 'lass="fas ', "classList", ' class="ca', "vote_avera", "44NHNNNe", "darkMode", "27680DfbWEZ", "beforeend", 'p" alt="', "GVHeO", "movie", "data-synop", "oHfpf", "Error fetc", "&with_genr", "createElem", "ydHTJ", "3626685luqYie", "eason and ", "load-movie", 'id="', "! Status: ", "querySelec", "rHqpE", "TNxCp", "top", "play-episo", "ie/", "block", "OMSyR", "style", "click", "forEach", "          ", "hing items", "map", "ey=", "rtpMc", "/day?api_k", "2205820KpyjKg", "Uvjmf", "WcmHL", "ason and e", "re</option", "yvzKx", "section-ti", "join", "fetch item", "getElement", "player-ifr", "ard positi", " Series", "BYgRs", "data-id", "observe", "Please ent", "       <h5", "img.lazylo", "lazyload", "HIERS", "ZvKSv", "\n         ", "V Series T", '" class="c', "hoEFP", "movie-list", "DiwEE", 'art-0">', "lPddA", "carousel-i", "discover/", "IEAni", "N/A", "XWSVd", "yMIGG", "getAttribu", "LaBYA", "NbezK", 'ass="card ', "tle", "0x750?text", "centHTML", "HTTP error", "jTxTu", "toggle-dar", 'rd-title">', "URuIo", "MoiEp", "stener", "SEBbU", "DwlPE", "YIaih", "WBMPE", "WwKHn", "abUaY", "MBYIX", "KXYGG", "src", "search-inp", 'opsis="', "disabled", "k Mode cli", "ById", "ement", "col-sm-6 c", "Popular Mo", 'l-lg-3">\n ', "/p/w1280", "overview", "<span clas", "/embed/mov", "ition-abso", "nner", "tKdze", "Sfhmp", "Trending T", "rVxca", "HYRcz", '100" data-', "StFql", "jqNze", "search-but", "       </d", "true", "g-label to", "closest", '">\n       ', 'mg src="', "onObserver", "results", "dark-mode", 'ard-text">', " of ", "ogJIV", "trending-t", "none", "toggle", "db.org/3/", "?api_key=", "floating-p", "WEqFK", "OnfMY", "Loaded", "https://ap", "insertAdja", "4|2|3|0|5|", "    </div>", "pisode num", " <div clas", "Load TV cl", "icked", "f3184f866b", "         <", "aICYf", "DeGqx", "https://me", "LJbxH", "call", ". Please t", 'fa-tags"><', "pgnQw", "hVuHm", "fetch tren", "put", 'class="pos', "k-mode", "&page=", "setItem", "fnLoy", "key=", 'lue="">Fil', 's="card-bo', "Failed to ", "ter by Gen", "onscroll", "yAjxE", "documentEl", "/i>", "hLAoF", "remove", "/embed/tv/", "XHnia", "pBDPG", "XIGGp", 'p-0 end-0"', "OukFR", "fzfkB", "trending/", "https://vi", "ovies Toda", "ent", "scrollTo", "cNKzs", "5|4|3|6|0|", "body", "GsUFn", "&query=", "arousel", "layer", "QlJUX", "er valid s", "later.", "oday", "v>\n       ", ".card", "value", "juzJB", "/list?api_", "sis", "lbjUW", "RxBYT", 'v class="c', "NjkIi", "iv>\n      ", "1TunWGU", " year-labe", "search/", "Page ", "genre/", "genre-filt", "/10</div>\n", "dvOMF", "release_da", "Trending M", 'le="', "ZbscN", "ZOfvT", "try again ", "genre_ids", "der.com/50", "AwqxP", "episode-in", "player-syn", "WNDmI", "scroll-to-", "hing genre", "DOMContent", 'e h-100" d', "poster_pat", "bers.", "itle", "getItem", "ocOZW", "unobserve", "episode nu", "innerHTML", "ol-md-4 co", "appendChil", "option", "torAll", "a.placehol", "position-r", "load-tv", "XQUYO", "s clicked", "contains", "ater.", "change", "     <div "];
  _0x2618 = function () {
    return _0x1b6e4;
  };
  return _0x2618();
}
function toggleDarkModeFunction() {
  const _0x5e2874 = _0x27000b, _0x13f8c9 = {WEqFK: _0x5e2874(567), ZgGvn: _0x5e2874(442)};
  document[_0x5e2874(631)][_0x5e2874(438)][_0x5e2874(573)](_0x13f8c9[_0x5e2874(577)]);
  const _0x35cc9b = document[_0x5e2874(631)][_0x5e2874(438)][_0x5e2874(692)](_0x13f8c9[_0x5e2874(577)]);
  localStorage[_0x5e2874(604)](_0x13f8c9[_0x5e2874(416)], _0x35cc9b);
}
function openPlayer(_0x4dbd41, _0x5d5608, _0xba3824) {
  const _0x474136 = _0x27000b, _0x420996 = {RxBYT: _0x474136(582) + "1", hLAoF: function (_0x46847f, _0x2f3ec7) {
    return _0x46847f === _0x2f3ec7;
  }, TmQUp: _0x474136(465), dvOMF: _0x474136(572), ZOfvT: _0x474136(447)}, _0x13ccb6 = _0x420996[_0x474136(647)][_0x474136(778)]("|");
  let _0x1241f0 = 0;
  while (true) {
    switch (_0x13ccb6[_0x1241f0++]) {
      case "0":
        playerForm[_0x474136(467)][_0x474136(754)] = _0x420996[_0x474136(615)](currentMode, "tv") ? _0x420996[_0x474136(721)] : _0x420996[_0x474136(658)];
        continue;
      case "1":
        floatingPlayer[_0x474136(467)][_0x474136(754)] = _0x420996[_0x474136(721)];
        continue;
      case "2":
        playerSynopsis[_0x474136(769) + "t"] = _0x5d5608;
        continue;
      case "3":
        currentItemId = _0xba3824;
        continue;
      case "4":
        playerTitle[_0x474136(769) + "t"] = _0x4dbd41;
        continue;
      case "5":
        playerIframe[_0x474136(534)] = _0x420996[_0x474136(615)](currentMode, _0x420996[_0x474136(663)]) ? _0x474136(625) + _0x474136(432) + _0x474136(547) + _0x474136(464) + _0xba3824 : "";
        continue;
    }
    break;
  }
}
function closePlayer() {
  const _0x2515e3 = _0x27000b, _0x22d894 = {Vsdbx: _0x2515e3(572)};
  floatingPlayer[_0x2515e3(467)][_0x2515e3(754)] = _0x22d894[_0x2515e3(781)], playerIframe[_0x2515e3(534)] = "", seasonInput[_0x2515e3(642)] = "", episodeInput[_0x2515e3(642)] = "";
}
function playEpisode() {
  const _0x49cbf0 = _0x27000b, _0x7f9e96 = {vpEyL: function (_0x3ea215, _0x508e3f) {
    return _0x3ea215 && _0x508e3f;
  }, KXYGG: function (_0x597e63, _0xba23c1, _0x347a92) {
    return _0x597e63(_0xba23c1, _0x347a92);
  }, YIaih: function (_0x437d40, _0x4427f8, _0x10d3a5) {
    return _0x437d40(_0x4427f8, _0x10d3a5);
  }, LJbxH: function (_0x39e81c, _0x1ba2db) {
    return _0x39e81c(_0x1ba2db);
  }, BYgRs: function (_0x26af1d, _0x4bd2cd) {
    return _0x26af1d > _0x4bd2cd;
  }, OnfMY: function (_0x3e65c7, _0x3c1cf4) {
    return _0x3e65c7 > _0x3c1cf4;
  }, oqRpF: function (_0x1d0856, _0x4c3014) {
    return _0x1d0856(_0x4c3014);
  }, HJgRq: _0x49cbf0(492) + _0x49cbf0(637) + _0x49cbf0(455) + _0x49cbf0(681) + _0x49cbf0(780), DXLdW: _0x49cbf0(492) + _0x49cbf0(433) + _0x49cbf0(479) + _0x49cbf0(584) + _0x49cbf0(676)}, _0x385764 = seasonInput[_0x49cbf0(642)][_0x49cbf0(739)](), _0x2b1e08 = episodeInput[_0x49cbf0(642)][_0x49cbf0(739)]();
  if (_0x7f9e96[_0x49cbf0(399)](_0x385764, _0x2b1e08)) {
    const _0x178d37 = _0x7f9e96[_0x49cbf0(533)](parseInt, _0x385764, 10), _0x4750d6 = _0x7f9e96[_0x49cbf0(528)](parseInt, _0x2b1e08, 10);
    !_0x7f9e96[_0x49cbf0(593)](isNaN, _0x178d37) && !_0x7f9e96[_0x49cbf0(593)](isNaN, _0x4750d6) && _0x7f9e96[_0x49cbf0(489)](_0x178d37, 0) && _0x7f9e96[_0x49cbf0(578)](_0x4750d6, 0) ? playerIframe[_0x49cbf0(534)] = _0x49cbf0(625) + _0x49cbf0(432) + _0x49cbf0(617) + currentItemId + "/" + _0x178d37 + "/" + _0x4750d6 : _0x7f9e96[_0x49cbf0(706)](alert, _0x7f9e96[_0x49cbf0(771)]);
  } else _0x7f9e96[_0x49cbf0(593)](alert, _0x7f9e96[_0x49cbf0(400)]);
}
function scrollToTop() {
  const _0x2844f2 = _0x27000b, _0x5f293e = {SiLMp: _0x2844f2(741)};
  window[_0x2844f2(628)]({top: 0, behavior: _0x5f293e[_0x2844f2(752)]});
}
movieList[_0x27000b(733) + _0x27000b(525)](_0x27000b(468), _0xf589dd => {
  const _0x55397c = _0x27000b, _0x735039 = {NbezK: _0x55397c(641), XQUYO: _0x55397c(414), MBYIX: _0x55397c(448) + _0x55397c(645), DiwEE: _0x55397c(490), TNxCp: function (_0x4ae96e, _0x1cc632, _0x200af0, _0x1537e3) {
    return _0x4ae96e(_0x1cc632, _0x200af0, _0x1537e3);
  }}, _0x5314cc = _0xf589dd[_0x55397c(701)][_0x55397c(562)](_0x735039[_0x55397c(514)]);
  if (_0x5314cc) {
    const _0x29dc3f = _0x5314cc[_0x55397c(512) + "te"](_0x735039[_0x55397c(690)]), _0x5bf408 = _0x5314cc[_0x55397c(512) + "te"](_0x735039[_0x55397c(532)]), _0x39a24b = _0x5314cc[_0x55397c(512) + "te"](_0x735039[_0x55397c(503)]);
    _0x735039[_0x55397c(461)](openPlayer, _0x29dc3f, _0x5bf408, _0x39a24b);
  }
}), trendingList[_0x27000b(733) + _0x27000b(525)](_0x27000b(468), _0x1b0d2e => {
  const _0x458e61 = _0x27000b, _0xcebeb6 = {tKdze: _0x458e61(641), YccdE: _0x458e61(414), IfLFE: _0x458e61(448) + _0x458e61(645), ZbscN: _0x458e61(490), KxAnB: function (_0xfacc55, _0x383790, _0x1433f5, _0x12bd02) {
    return _0xfacc55(_0x383790, _0x1433f5, _0x12bd02);
  }}, _0x193d11 = _0x1b0d2e[_0x458e61(701)][_0x458e61(562)](_0xcebeb6[_0x458e61(550)]);
  if (_0x193d11) {
    const _0x3ee271 = _0x193d11[_0x458e61(512) + "te"](_0xcebeb6[_0x458e61(725)]), _0x43c644 = _0x193d11[_0x458e61(512) + "te"](_0xcebeb6[_0x458e61(726)]), _0x2627e7 = _0x193d11[_0x458e61(512) + "te"](_0xcebeb6[_0x458e61(662)]);
    _0xcebeb6[_0x458e61(729)](openPlayer, _0x3ee271, _0x43c644, _0x2627e7);
  }
}), toggleDarkMode[_0x27000b(733) + _0x27000b(525)](_0x27000b(468), () => {
  const _0x28c432 = _0x27000b, _0x1d50d8 = {lPddA: _0x28c432(724) + _0x28c432(538) + _0x28c432(430), KoLut: function (_0x5650a9) {
    return _0x5650a9();
  }};
  console[_0x28c432(732)](_0x1d50d8[_0x28c432(505)]), _0x1d50d8[_0x28c432(728)](toggleDarkModeFunction);
}), closePlayerButton[_0x27000b(733) + _0x27000b(525)](_0x27000b(468), closePlayer), playEpisodeButton[_0x27000b(733) + _0x27000b(525)](_0x27000b(468), playEpisode), loadMovies[_0x27000b(733) + _0x27000b(525)](_0x27000b(468), () => {
  const _0x595639 = _0x27000b, _0x1ed902 = {fnLoy: _0x595639(630) + _0x595639(720), juzJB: _0x595639(704) + _0x595639(607) + _0x595639(610) + _0x595639(480) + ">", DGTmh: function (_0x2cc150) {
    return _0x2cc150();
  }, Uzzjs: function (_0x257e73) {
    return _0x257e73();
  }, OukFR: _0x595639(542) + _0x595639(748), jIDRR: _0x595639(447), ZvKSv: _0x595639(425) + _0x595639(691), LaBYA: _0x595639(660) + _0x595639(626) + "y", abUaY: function (_0x4f9af2) {
    return _0x4f9af2();
  }}, _0x103831 = _0x1ed902[_0x595639(605)][_0x595639(778)]("|");
  let _0x1ea270 = 0;
  while (true) {
    switch (_0x103831[_0x1ea270++]) {
      case "0":
        genreFilter[_0x595639(682)] = _0x1ed902[_0x595639(643)];
        continue;
      case "1":
        _0x1ed902[_0x595639(700)](fetchTrending);
        continue;
      case "2":
        _0x1ed902[_0x595639(762)](fetchGenres);
        continue;
      case "3":
        sectionTitle[_0x595639(769) + "t"] = _0x1ed902[_0x595639(622)];
        continue;
      case "4":
        currentMode = _0x1ed902[_0x595639(417)];
        continue;
      case "5":
        console[_0x595639(732)](_0x1ed902[_0x595639(497)]);
        continue;
      case "6":
        trendingTitle[_0x595639(769) + "t"] = _0x1ed902[_0x595639(513)];
        continue;
      case "7":
        _0x1ed902[_0x595639(531)](loadPopular);
        continue;
    }
    break;
  }
}), loadTV[_0x27000b(733) + _0x27000b(525)](_0x27000b(468), () => {
  const _0x55383c = _0x27000b, _0x2e2ddf = {Sfhmp: _0x55383c(705) + _0x55383c(403), QdvWF: _0x55383c(586) + _0x55383c(587), DeGqx: _0x55383c(552) + _0x55383c(499) + _0x55383c(639), URuIo: _0x55383c(696) + _0x55383c(488), QYzxp: function (_0x520f8c) {
    return _0x520f8c();
  }, WwKHn: function (_0x499242) {
    return _0x499242();
  }, HIERS: _0x55383c(704) + _0x55383c(607) + _0x55383c(610) + _0x55383c(480) + ">"}, _0xeb5ab4 = _0x2e2ddf[_0x55383c(551)][_0x55383c(778)]("|");
  let _0x54cee4 = 0;
  while (true) {
    switch (_0xeb5ab4[_0x54cee4++]) {
      case "0":
        console[_0x55383c(732)](_0x2e2ddf[_0x55383c(743)]);
        continue;
      case "1":
        trendingTitle[_0x55383c(769) + "t"] = _0x2e2ddf[_0x55383c(591)];
        continue;
      case "2":
        sectionTitle[_0x55383c(769) + "t"] = _0x2e2ddf[_0x55383c(523)];
        continue;
      case "3":
        _0x2e2ddf[_0x55383c(429)](loadPopular);
        continue;
      case "4":
        _0x2e2ddf[_0x55383c(530)](fetchGenres);
        continue;
      case "5":
        genreFilter[_0x55383c(682)] = _0x2e2ddf[_0x55383c(496)];
        continue;
      case "6":
        currentMode = "tv";
        continue;
      case "7":
        _0x2e2ddf[_0x55383c(530)](fetchTrending);
        continue;
    }
    break;
  }
}), searchButton[_0x27000b(733) + _0x27000b(525)](_0x27000b(468), () => {
  const _0x47fc53 = _0x27000b, _0x3e0742 = {ogJIV: function (_0x1f07bb, _0x791373) {
    return _0x1f07bb(_0x791373);
  }}, _0x104f3e = searchInput[_0x47fc53(642)];
  if (_0x104f3e) {
    const _0x292f8a = BASE_URL + _0x47fc53(653) + currentMode + _0x47fc53(575) + API_KEY + _0x47fc53(633) + _0x3e0742[_0x47fc53(570)](encodeURIComponent, _0x104f3e) + _0x47fc53(603) + currentPage;
    _0x3e0742[_0x47fc53(570)](fetchItems, _0x292f8a);
  }
}), genreFilter[_0x27000b(733) + _0x27000b(525)](_0x27000b(694), () => {
  const _0x33ce7c = _0x27000b, _0x10fa81 = {WBMPE: function (_0x5e2a5a, _0x5e439b) {
    return _0x5e2a5a(_0x5e439b);
  }, rVxca: function (_0x5b0c91) {
    return _0x5b0c91();
  }}, _0x512a32 = genreFilter[_0x33ce7c(642)];
  if (_0x512a32) {
    const _0x299f51 = BASE_URL + _0x33ce7c(507) + currentMode + _0x33ce7c(575) + API_KEY + (_0x33ce7c(451) + _0x33ce7c(776)) + _0x512a32 + _0x33ce7c(603) + currentPage;
    _0x10fa81[_0x33ce7c(529)](fetchItems, _0x299f51);
  } else _0x10fa81[_0x33ce7c(553)](loadPopular);
}), prevPageButton[_0x27000b(733) + _0x27000b(525)](_0x27000b(468), () => {
  const _0x4fc593 = _0x27000b, _0x485052 = {oHfpf: function (_0x9448b8, _0x4985a9) {
    return _0x9448b8 > _0x4985a9;
  }, jTxTu: function (_0x9a12a0) {
    return _0x9a12a0();
  }};
  _0x485052[_0x4fc593(449)](currentPage, 1) && (currentPage--, _0x485052[_0x4fc593(520)](loadPopular));
}), nextPageButton[_0x27000b(733) + _0x27000b(525)](_0x27000b(468), () => {
  const _0x3ccc18 = _0x27000b, _0x27ac23 = {AwqxP: function (_0x1bff94) {
    return _0x1bff94();
  }};
  currentPage++, _0x27ac23[_0x3ccc18(667)](loadPopular);
}), scrollToTopButton[_0x27000b(733) + _0x27000b(525)](_0x27000b(468), scrollToTop), window[_0x27000b(611)] = function () {
  const _0x297c63 = _0x27000b, _0x2af8ca = {ydHTJ: function (_0x4e26fb) {
    return _0x4e26fb();
  }};
  _0x2af8ca[_0x297c63(453)](scrollFunction);
};
function scrollFunction() {
  const _0x3c469f = _0x27000b, _0x2e9b06 = {yvzKx: function (_0x23e93, _0x13ddc8) {
    return _0x23e93 > _0x13ddc8;
  }, ByVAm: function (_0x538310, _0x18e42f) {
    return _0x538310 > _0x18e42f;
  }, wohAX: _0x3c469f(465), wSlES: _0x3c469f(572)};
  _0x2e9b06[_0x3c469f(481)](document[_0x3c469f(631)][_0x3c469f(415)], 20) || _0x2e9b06[_0x3c469f(744)](document[_0x3c469f(613) + _0x3c469f(540)][_0x3c469f(415)], 20) ? scrollToTopButton[_0x3c469f(467)][_0x3c469f(754)] = _0x2e9b06[_0x3c469f(408)] : scrollToTopButton[_0x3c469f(467)][_0x3c469f(754)] = _0x2e9b06[_0x3c469f(412)];
}
document[_0x27000b(733) + _0x27000b(525)](_0x27000b(673) + _0x27000b(579), () => {
  const _0x4ed5af = _0x27000b, _0x4414c7 = {rHqpE: function (_0x31885b, _0x3caaa9) {
    return _0x31885b === _0x3caaa9;
  }, yAjxE: _0x4ed5af(442), hVuHm: _0x4ed5af(560), eoyiv: _0x4ed5af(567), StFql: function (_0xf4d3eb) {
    return _0xf4d3eb();
  }, yMIGG: function (_0x517ff3) {
    return _0x517ff3();
  }, RJpWn: function (_0x34aaed) {
    return _0x34aaed();
  }}, _0x55c20f = _0x4414c7[_0x4ed5af(460)](localStorage[_0x4ed5af(678)](_0x4414c7[_0x4ed5af(612)]), _0x4414c7[_0x4ed5af(598)]);
  _0x55c20f && document[_0x4ed5af(631)][_0x4ed5af(438)][_0x4ed5af(699)](_0x4414c7[_0x4ed5af(712)]), _0x4414c7[_0x4ed5af(556)](fetchGenres), _0x4414c7[_0x4ed5af(511)](loadPopular), _0x4414c7[_0x4ed5af(426)](fetchTrending);
}), document[_0x27000b(733) + _0x27000b(525)](_0x27000b(673) + _0x27000b(579), function () {
  const _0xc621e8 = _0x27000b, _0x31bdc1 = {eMehY: _0xc621e8(495), hoEFP: _0xc621e8(494) + "ad", NjkIi: function (_0x1b5003, _0x330bd3) {
    return _0x1b5003 in _0x330bd3;
  }, XIGGp: _0xc621e8(753) + _0xc621e8(565)};
  var _0x2ab5cb = [][_0xc621e8(702)][_0xc621e8(594)](document[_0xc621e8(459) + _0xc621e8(686)](_0x31bdc1[_0xc621e8(501)]));
  if (_0x31bdc1[_0xc621e8(649)](_0x31bdc1[_0xc621e8(620)], window)) {
    let _0x9c6f8b = new IntersectionObserver(function (_0x5ee2d2, _0x45c31b) {
      const _0x1b86c2 = _0xc621e8, _0x39d81b = {XWSVd: _0x31bdc1[_0x1b86c2(757)]};
      _0x5ee2d2[_0x1b86c2(469)](function (_0x14db14) {
        const _0x40e384 = _0x1b86c2;
        if (_0x14db14[_0x40e384(697) + _0x40e384(719)]) {
          let _0x368b37 = _0x14db14[_0x40e384(701)];
          _0x368b37[_0x40e384(534)] = _0x368b37[_0x40e384(713)][_0x40e384(534)], _0x368b37[_0x40e384(438)][_0x40e384(616)](_0x39d81b[_0x40e384(510)]), _0x9c6f8b[_0x40e384(680)](_0x368b37);
        }
      });
    });
    _0x2ab5cb[_0xc621e8(469)](function (_0x1956c7) {
      const _0x3a0de4 = _0xc621e8;
      _0x9c6f8b[_0x3a0de4(491)](_0x1956c7);
    });
  }
});
