const _0x5afef5 = _0x229d;
(function (_0x47d1ed, _0x376199) {
  const _0x53a7da = _0x229d, _0x188024 = _0x47d1ed();
  while (true) {
    try {
      const _0x249385 = -parseInt(_0x53a7da(306)) / 1 + parseInt(_0x53a7da(411)) / 2 * (parseInt(_0x53a7da(277)) / 3) + parseInt(_0x53a7da(322)) / 4 * (parseInt(_0x53a7da(368)) / 5) + -parseInt(_0x53a7da(401)) / 6 * (parseInt(_0x53a7da(413)) / 7) + -parseInt(_0x53a7da(382)) / 8 + parseInt(_0x53a7da(356)) / 9 * (parseInt(_0x53a7da(317)) / 10) + -parseInt(_0x53a7da(300)) / 11 * (-parseInt(_0x53a7da(325)) / 12);
      if (_0x249385 === _0x376199) break; else _0x188024.push(_0x188024.shift());
    } catch (_0x155dbd) {
      _0x188024.push(_0x188024.shift());
    }
  }
}(_0x4952, 919867));
const apiKey = _0x5afef5(327) + _0x5afef5(309) + _0x5afef5(424) + "70", baseUrl = _0x5afef5(335) + _0x5afef5(400) + _0x5afef5(343);
let genres = [], allMovies = [], allTvShows = [], currentPage = 1, totalPages = 1, searchQuery = "";
async function fetchGenres() {
  const _0x35093d = _0x5afef5, _0x2f7fa5 = {YLoYN: _0x35093d(333), rxIgr: function (_0x4a7917, _0x4e500f) {
    return _0x4a7917(_0x4e500f);
  }, ENfPj: function (_0x3dfdb3, _0x282fa2) {
    return _0x3dfdb3(_0x282fa2);
  }, uoRhI: _0x35093d(420) + "er", xwIbu: _0x35093d(355) + _0x35093d(324) + _0x35093d(383) + _0x35093d(381)};
  try {
    const _0x308629 = await _0x2f7fa5[_0x35093d(308)](fetch, baseUrl + (_0x35093d(406) + _0x35093d(391) + _0x35093d(334)) + apiKey + (_0x35093d(289) + _0x35093d(281))), _0x18a676 = await _0x308629[_0x35093d(425)]();
    genres = _0x18a676[_0x35093d(330)];
    const _0x3acf2c = await _0x2f7fa5[_0x35093d(323)](fetch, baseUrl + (_0x35093d(299) + _0x35093d(279) + _0x35093d(409)) + apiKey + (_0x35093d(289) + _0x35093d(281))), _0xca013f = await _0x3acf2c[_0x35093d(425)]();
    genres = [...genres, ..._0xca013f[_0x35093d(330)]];
    const _0x246330 = document[_0x35093d(371) + _0x35093d(341)](_0x2f7fa5[_0x35093d(396)]);
    genres[_0x35093d(362)](_0x1cfb2e => {
      const _0x55d9c0 = _0x35093d, _0x18f0a5 = document[_0x55d9c0(408) + _0x55d9c0(278)](_0x2f7fa5[_0x55d9c0(379)]);
      _0x18f0a5[_0x55d9c0(329)] = _0x1cfb2e.id, _0x18f0a5[_0x55d9c0(357) + "t"] = _0x1cfb2e[_0x55d9c0(342)], _0x246330[_0x55d9c0(326) + "d"](_0x18f0a5);
    });
  } catch (_0xa3357) {
    _0x2f7fa5[_0x35093d(308)](alert, _0x2f7fa5[_0x35093d(418)]);
  }
}
async function fetchContent(_0x70595c, _0x4e32f1 = null, _0x16c834 = "") {
  const _0x1bdb83 = _0x5afef5, _0x1882f8 = {VHIdA: function (_0x236589, _0x9458a8) {
    return _0x236589(_0x9458a8);
  }, MsSnB: function (_0x42ecf3, _0x4809cd) {
    return _0x42ecf3 === _0x4809cd;
  }, EySMm: _0x1bdb83(389), mHPiK: function (_0x2f7bcc, _0x29f188) {
    return _0x2f7bcc(_0x29f188);
  }, IcpEq: function (_0x34e395) {
    return _0x34e395();
  }, VdMPo: _0x1bdb83(355) + _0x1bdb83(324) + _0x1bdb83(383) + _0x1bdb83(376)};
  try {
    let _0x447313 = baseUrl + _0x1bdb83(312) + _0x70595c + _0x1bdb83(430) + apiKey + (_0x1bdb83(289) + _0x1bdb83(265) + "=") + currentPage;
    if (_0x4e32f1) _0x447313 += _0x1bdb83(374) + _0x1bdb83(290) + _0x4e32f1;
    _0x16c834 && (_0x447313 = baseUrl + _0x1bdb83(390) + _0x70595c + _0x1bdb83(430) + apiKey + (_0x1bdb83(289) + _0x1bdb83(265) + "=") + currentPage + _0x1bdb83(318) + _0x16c834);
    const _0x2abebc = await _0x1882f8[_0x1bdb83(404)](fetch, _0x447313), _0x44d52b = await _0x2abebc[_0x1bdb83(425)]();
    if (_0x1882f8[_0x1bdb83(344)](_0x70595c, _0x1882f8[_0x1bdb83(360)])) allMovies = _0x44d52b[_0x1bdb83(422)], totalPages = _0x44d52b[_0x1bdb83(353) + "s"], _0x1882f8[_0x1bdb83(404)](displayMovies, allMovies); else _0x1882f8[_0x1bdb83(344)](_0x70595c, "tv") && (allTvShows = _0x44d52b[_0x1bdb83(422)], totalPages = _0x44d52b[_0x1bdb83(353) + "s"], _0x1882f8[_0x1bdb83(346)](displayTvShows, allTvShows));
    _0x1882f8[_0x1bdb83(267)](displayPagination);
  } catch (_0x540e59) {
    _0x1882f8[_0x1bdb83(404)](alert, _0x1882f8[_0x1bdb83(358)]);
  }
}
async function fetchTrendingMovies() {
  const _0x8a72a1 = _0x5afef5, _0x4f8ee0 = {rJlWQ: function (_0x1dd274, _0x13efab) {
    return _0x1dd274(_0x13efab);
  }, czsMT: _0x8a72a1(355) + _0x8a72a1(324) + _0x8a72a1(423) + _0x8a72a1(302) + _0x8a72a1(429)};
  try {
    const _0x2b4177 = await _0x4f8ee0[_0x8a72a1(373)](fetch, baseUrl + (_0x8a72a1(336) + _0x8a72a1(304) + _0x8a72a1(291)) + apiKey), _0x3fc50d = await _0x2b4177[_0x8a72a1(425)]();
    allMovies = _0x3fc50d[_0x8a72a1(422)], _0x4f8ee0[_0x8a72a1(373)](displayMovies, allMovies);
  } catch (_0x197639) {
    _0x4f8ee0[_0x8a72a1(373)](alert, _0x4f8ee0[_0x8a72a1(432)]);
  }
}
async function fetchTrendingTvShows() {
  const _0x3a562f = _0x5afef5, _0x1f3113 = {RIxcv: function (_0x161bb7, _0x10f55b) {
    return _0x161bb7(_0x10f55b);
  }, buyaP: function (_0x373417, _0x1bd282) {
    return _0x373417(_0x1bd282);
  }, QbDXL: _0x3a562f(355) + _0x3a562f(324) + _0x3a562f(423) + _0x3a562f(266) + _0x3a562f(295)};
  try {
    const _0x107643 = await _0x1f3113[_0x3a562f(286)](fetch, baseUrl + (_0x3a562f(336) + _0x3a562f(386) + _0x3a562f(419)) + apiKey), _0x4d8876 = await _0x107643[_0x3a562f(425)]();
    allTvShows = _0x4d8876[_0x3a562f(422)], _0x1f3113[_0x3a562f(286)](displayTvShows, allTvShows);
  } catch (_0x12531a) {
    _0x1f3113[_0x3a562f(283)](alert, _0x1f3113[_0x3a562f(273)]);
  }
}
function displayMovies(_0x4e2c68) {
  const _0x452b11 = _0x5afef5, _0x24836a = {hivPl: _0x452b11(427), iEAsH: _0x452b11(405), cRmjJ: _0x452b11(354), eGbir: _0x452b11(332), ZFlkx: _0x452b11(320), NtVQu: _0x452b11(415), STqim: _0x452b11(351), WmJKA: _0x452b11(307), aFKXu: _0x452b11(311) + _0x452b11(319) + _0x452b11(347) + _0x452b11(414), MSXJI: _0x452b11(280) + _0x452b11(310)}, _0x3392c3 = document[_0x452b11(371) + _0x452b11(341)](_0x24836a[_0x452b11(375)]);
  _0x3392c3[_0x452b11(315)] = "", _0x4e2c68[_0x452b11(362)](_0x54524b => {
    const _0x3ad0fd = _0x452b11, _0x52f922 = document[_0x3ad0fd(408) + _0x3ad0fd(278)](_0x24836a[_0x3ad0fd(399)]);
    _0x52f922[_0x3ad0fd(268)][_0x3ad0fd(359)](_0x24836a[_0x3ad0fd(369)]);
    const _0x2e5e76 = document[_0x3ad0fd(408) + _0x3ad0fd(278)](_0x24836a[_0x3ad0fd(403)]);
    _0x2e5e76[_0x3ad0fd(287)] = _0x3ad0fd(274) + _0x3ad0fd(350) + _0x3ad0fd(410) + "0" + _0x54524b[_0x3ad0fd(434) + "h"], _0x2e5e76[_0x3ad0fd(345)] = _0x54524b[_0x3ad0fd(339)], _0x52f922[_0x3ad0fd(326) + "d"](_0x2e5e76);
    const _0x4bb590 = document[_0x3ad0fd(408) + _0x3ad0fd(278)](_0x24836a[_0x3ad0fd(399)]);
    _0x4bb590[_0x3ad0fd(268)][_0x3ad0fd(359)](_0x24836a[_0x3ad0fd(366)]), _0x4bb590[_0x3ad0fd(315)] = _0x3ad0fd(349) + _0x54524b[_0x3ad0fd(339)] + (_0x3ad0fd(393) + _0x3ad0fd(328)) + _0x54524b[_0x3ad0fd(378) + "ge"] + _0x3ad0fd(364);
    const _0x1d11e4 = document[_0x3ad0fd(408) + _0x3ad0fd(278)](_0x24836a[_0x3ad0fd(361)]);
    _0x1d11e4[_0x3ad0fd(268)][_0x3ad0fd(359)](_0x24836a[_0x3ad0fd(417)]), _0x1d11e4[_0x3ad0fd(357) + "t"] = _0x24836a[_0x3ad0fd(338)], _0x1d11e4[_0x3ad0fd(284)] = () => window[_0x3ad0fd(337)][_0x3ad0fd(294)] = _0x3ad0fd(321) + _0x3ad0fd(431) + _0x3ad0fd(271) + _0x3ad0fd(380) + _0x3ad0fd(297) + _0x54524b.id + _0x3ad0fd(288), _0x4bb590[_0x3ad0fd(326) + "d"](_0x1d11e4);
    const _0x271fcb = document[_0x3ad0fd(408) + _0x3ad0fd(278)](_0x24836a[_0x3ad0fd(399)]);
    _0x271fcb[_0x3ad0fd(268)][_0x3ad0fd(359)](_0x24836a[_0x3ad0fd(426)]), _0x271fcb[_0x3ad0fd(315)] = _0x24836a[_0x3ad0fd(372)], _0x52f922[_0x3ad0fd(326) + "d"](_0x271fcb), _0x52f922[_0x3ad0fd(326) + "d"](_0x4bb590), _0x3392c3[_0x3ad0fd(326) + "d"](_0x52f922);
  });
}
function displayTvShows(_0x444350) {
  const _0x3366cc = _0x5afef5, _0xbd912a = {jcIPV: _0x3366cc(427), lEbQh: _0x3366cc(296) + "rd", PpDjE: _0x3366cc(354), njoJD: _0x3366cc(392), gYdjQ: _0x3366cc(320), gPlcj: _0x3366cc(415), BTNHn: _0x3366cc(351), NJILf: _0x3366cc(307), xsHWq: _0x3366cc(311) + _0x3366cc(367) + _0x3366cc(394) + _0x3366cc(272), QaDtM: _0x3366cc(292) + _0x3366cc(293)}, _0x594b29 = document[_0x3366cc(371) + _0x3366cc(341)](_0xbd912a[_0x3366cc(270)]);
  _0x594b29[_0x3366cc(315)] = "", _0x444350[_0x3366cc(362)](_0x3c8d4b => {
    const _0x101558 = _0x3366cc, _0x34bab1 = document[_0x101558(408) + _0x101558(278)](_0xbd912a[_0x101558(285)]);
    _0x34bab1[_0x101558(268)][_0x101558(359)](_0xbd912a[_0x101558(387)]);
    const _0x542feb = document[_0x101558(408) + _0x101558(278)](_0xbd912a[_0x101558(340)]);
    _0x542feb[_0x101558(287)] = _0x101558(274) + _0x101558(350) + _0x101558(410) + "0" + _0x3c8d4b[_0x101558(434) + "h"], _0x542feb[_0x101558(345)] = _0x3c8d4b[_0x101558(342)], _0x34bab1[_0x101558(326) + "d"](_0x542feb);
    const _0x5e0491 = document[_0x101558(408) + _0x101558(278)](_0xbd912a[_0x101558(285)]);
    _0x5e0491[_0x101558(268)][_0x101558(359)](_0xbd912a[_0x101558(363)]), _0x5e0491[_0x101558(315)] = _0x101558(349) + _0x3c8d4b[_0x101558(342)] + (_0x101558(393) + _0x101558(328)) + _0x3c8d4b[_0x101558(378) + "ge"] + _0x101558(364);
    const _0x527a42 = document[_0x101558(408) + _0x101558(278)](_0xbd912a[_0x101558(263)]);
    _0x527a42[_0x101558(268)][_0x101558(359)](_0xbd912a[_0x101558(269)]), _0x527a42[_0x101558(357) + "t"] = _0xbd912a[_0x101558(421)], _0x527a42[_0x101558(284)] = () => window[_0x101558(337)][_0x101558(294)] = _0x101558(321) + _0x101558(431) + _0x101558(271) + _0x101558(380) + _0x101558(297) + _0x3c8d4b.id + (_0x101558(264) + _0x101558(331)), _0x5e0491[_0x101558(326) + "d"](_0x527a42);
    const _0x522f3c = document[_0x101558(408) + _0x101558(278)](_0xbd912a[_0x101558(285)]);
    _0x522f3c[_0x101558(268)][_0x101558(359)](_0xbd912a[_0x101558(314)]), _0x522f3c[_0x101558(315)] = _0xbd912a[_0x101558(428)], _0x34bab1[_0x101558(326) + "d"](_0x522f3c), _0x34bab1[_0x101558(326) + "d"](_0x5e0491), _0x594b29[_0x101558(326) + "d"](_0x34bab1);
  });
}
function _0x4952() {
  const _0x2eb24f = ["1&e=1", "movie-info", "option", "i_key=", "https://ap", "/trending/", "location", "STqim", "title", "PpDjE", "ById", "name", "db.org/3", "MsSnB", "alt", "mHPiK", 'm"></i> Mo', "zAHow", "<h3>", "age.tmdb.o", "Watch Now", "RpOFT", "total_page", "img", "There was ", "62973uifleb", "textConten", "VdMPo", "add", "EySMm", "ZFlkx", "forEach", "njoJD", "</p>", "lCaEN", "eGbir", 'fas fa-tv"', "890UnpbXr", "iEAsH", "disabled", "getElement", "aFKXu", "rJlWQ", "&with_genr", "MSXJI", "e content.", "mEMuQ", "vote_avera", "YLoYN", "tream.php?", "e genres.", "10840216fQsfUw", "etching th", "qWYgK", "search-inp", "tv/day?api", "lEbQh", "ISWOq", "movie", "/search/", "ie/list?ap", "tv-info", "</h3><p>Ra", "></i> TV S", "evjWQ", "uoRhI", "NtLSi", "JkjXq", "hivPl", "i.themovie", "12GGCyuc", "AllJa", "cRmjJ", "VHIdA", "movie-card", "/genre/mov", "XmYVx", "createElem", "ey=", "rg/t/p/w50", "70294DjTlRI", "pagination", "1031135GLMGPv", "vie", "btn", "oIyyv", "NtVQu", "xwIbu", "_key=", "genre-filt", "BTNHn", "results", "etching tr", "f3184f866b", "json", "WmJKA", "div", "xsHWq", "ies.", "?api_key=", "ltiembed.m", "czsMT", "fNEIa", "poster_pat", "gYdjQ", "&tmdb=1&s=", "en-US&page", "ending TV ", "IcpEq", "classList", "gPlcj", "QaDtM", "ov/directs", "eries", "QbDXL", "https://im", "bcQaQ", " of ", "87xIDdvV", "ent", "list?api_k", "movies-con", "en-US", "Page ", "buyaP", "onclick", "jcIPV", "RIxcv", "src", "&tmdb=1", "&language=", "es=", "api_key=", "tv-shows-c", "ontainer", "href", "shows.", "tv-show-ca", "video_id=", "yMJCT", "/genre/tv/", "44jVwNvl", "JVtUU", "ending mov", "ppCzP", "movie/day?", "Next", "1290948WIEKMD", "label", "rxIgr", "fcd4ca4e97", "tainer", '<i class="', "/discover/", "span", "NJILf", "innerHTML", "Previous", "1610AmuJps", "&query=", "fas fa-fil", "button", "https://mu", "24416kqijPL", "ENfPj", "an error f", "1884480fsiQea", "appendChil", "c542b4951c", "ting: ", "value", "genres"];
  _0x4952 = function () {
    return _0x2eb24f;
  };
  return _0x4952();
}
function _0x229d(_0x23a99e, _0x3bb73c) {
  const _0x42bae9 = _0x4952();
  return _0x229d = function (_0x2009de, _0x3d1fe1) {
    _0x2009de = _0x2009de - 263;
    let _0x3305ee = _0x42bae9[_0x2009de];
    return _0x3305ee;
  }, _0x229d(_0x23a99e, _0x3bb73c);
}
function displayPagination() {
  const _0x5e95a7 = _0x5afef5, _0x44b6af = {oIyyv: function (_0x5b373f, _0x3f7402, _0x2eb173, _0x3f32ff) {
    return _0x5b373f(_0x3f7402, _0x2eb173, _0x3f32ff);
  }, RpOFT: _0x5e95a7(389), bcQaQ: function (_0x16af11, _0x1b00df, _0x2103c0, _0x479b14) {
    return _0x16af11(_0x1b00df, _0x2103c0, _0x479b14);
  }, fNEIa: function (_0x3dde13, _0x35b5f4, _0x510518, _0x11939a) {
    return _0x3dde13(_0x35b5f4, _0x510518, _0x11939a);
  }, JkjXq: _0x5e95a7(412), NtLSi: _0x5e95a7(320), evjWQ: _0x5e95a7(316), XmYVx: function (_0x4d6846, _0x5b2396) {
    return _0x4d6846 === _0x5b2396;
  }, qWYgK: _0x5e95a7(313), mEMuQ: _0x5e95a7(305)}, _0x3664a1 = document[_0x5e95a7(371) + _0x5e95a7(341)](_0x44b6af[_0x5e95a7(398)]);
  _0x3664a1[_0x5e95a7(315)] = "";
  const _0x3c7b4d = document[_0x5e95a7(408) + _0x5e95a7(278)](_0x44b6af[_0x5e95a7(397)]);
  _0x3c7b4d[_0x5e95a7(357) + "t"] = _0x44b6af[_0x5e95a7(395)], _0x3c7b4d[_0x5e95a7(370)] = _0x44b6af[_0x5e95a7(407)](currentPage, 1), _0x3c7b4d[_0x5e95a7(284)] = () => {
    const _0x376c9e = _0x5e95a7;
    currentPage--, _0x44b6af[_0x376c9e(416)](fetchContent, _0x44b6af[_0x376c9e(352)], null, searchQuery), _0x44b6af[_0x376c9e(275)](fetchContent, "tv", null, searchQuery);
  }, _0x3664a1[_0x5e95a7(326) + "d"](_0x3c7b4d);
  const _0x52b59d = document[_0x5e95a7(408) + _0x5e95a7(278)](_0x44b6af[_0x5e95a7(384)]);
  _0x52b59d[_0x5e95a7(357) + "t"] = _0x5e95a7(282) + currentPage + _0x5e95a7(276) + totalPages, _0x3664a1[_0x5e95a7(326) + "d"](_0x52b59d);
  const _0x3d3b67 = document[_0x5e95a7(408) + _0x5e95a7(278)](_0x44b6af[_0x5e95a7(397)]);
  _0x3d3b67[_0x5e95a7(357) + "t"] = _0x44b6af[_0x5e95a7(377)], _0x3d3b67[_0x5e95a7(370)] = _0x44b6af[_0x5e95a7(407)](currentPage, totalPages), _0x3d3b67[_0x5e95a7(284)] = () => {
    const _0x14e475 = _0x5e95a7;
    currentPage++, _0x44b6af[_0x14e475(416)](fetchContent, _0x44b6af[_0x14e475(352)], null, searchQuery), _0x44b6af[_0x14e475(433)](fetchContent, "tv", null, searchQuery);
  }, _0x3664a1[_0x5e95a7(326) + "d"](_0x3d3b67);
}
function filterContent() {
  const _0x39fa73 = _0x5afef5, _0x49ff1d = {yMJCT: _0x39fa73(420) + "er", AllJa: function (_0x2f2b25, _0x5a357d, _0x31a90e, _0x324e14) {
    return _0x2f2b25(_0x5a357d, _0x31a90e, _0x324e14);
  }, ppCzP: _0x39fa73(389)}, _0x444296 = document[_0x39fa73(371) + _0x39fa73(341)](_0x49ff1d[_0x39fa73(298)])[_0x39fa73(329)];
  _0x49ff1d[_0x39fa73(402)](fetchContent, _0x49ff1d[_0x39fa73(303)], _0x444296, searchQuery), _0x49ff1d[_0x39fa73(402)](fetchContent, "tv", _0x444296, searchQuery);
}
function searchContent() {
  const _0xc08448 = _0x5afef5, _0x16e651 = {lCaEN: _0xc08448(385) + "ut", JVtUU: function (_0x42460a, _0x46534d, _0x37216f, _0x5487c6) {
    return _0x42460a(_0x46534d, _0x37216f, _0x5487c6);
  }, ISWOq: _0xc08448(389)};
  searchQuery = document[_0xc08448(371) + _0xc08448(341)](_0x16e651[_0xc08448(365)])[_0xc08448(329)], _0x16e651[_0xc08448(301)](fetchContent, _0x16e651[_0xc08448(388)], null, searchQuery), _0x16e651[_0xc08448(301)](fetchContent, "tv", null, searchQuery);
}
async function init() {
  const _0x4de525 = _0x5afef5, _0x5bbe19 = {zAHow: function (_0x55e863) {
    return _0x55e863();
  }};
  await _0x5bbe19[_0x4de525(348)](fetchGenres), _0x5bbe19[_0x4de525(348)](fetchTrendingMovies), _0x5bbe19[_0x4de525(348)](fetchTrendingTvShows);
}
init();
