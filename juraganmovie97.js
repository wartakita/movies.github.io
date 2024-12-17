const _0x198bc5 = _0x5009;
(function (_0x57a0a9, _0x40e50e) {
  const _0x2ab426 = _0x5009, _0x1d2252 = _0x57a0a9();
  while (true) {
    try {
      const _0x49b56f = -parseInt(_0x2ab426(265)) / 1 + -parseInt(_0x2ab426(221)) / 2 + parseInt(_0x2ab426(341)) / 3 + -parseInt(_0x2ab426(298)) / 4 + -parseInt(_0x2ab426(371)) / 5 * (parseInt(_0x2ab426(333)) / 6) + parseInt(_0x2ab426(366)) / 7 + parseInt(_0x2ab426(222)) / 8;
      if (_0x49b56f === _0x40e50e) break; else _0x1d2252.push(_0x1d2252.shift());
    } catch (_0x319ec2) {
      _0x1d2252.push(_0x1d2252.shift());
    }
  }
}(_0x50b7, 300086));
const apiKey = _0x198bc5(372) + _0x198bc5(239) + _0x198bc5(340) + "70", baseUrl = _0x198bc5(235) + _0x198bc5(285) + _0x198bc5(297);
let genres = [], allMovies = [], allTvShows = [], currentPage = 1, totalPages = 1, searchQuery = "";
function _0x5009(_0x4c21c3, _0x507f36) {
  const _0xb515d4 = _0x50b7();
  return _0x5009 = function (_0x1f7d66, _0x27d715) {
    _0x1f7d66 = _0x1f7d66 - 219;
    let _0x3eebaa = _0xb515d4[_0x1f7d66];
    return _0x3eebaa;
  }, _0x5009(_0x4c21c3, _0x507f36);
}
async function fetchGenres() {
  const _0x22f371 = _0x198bc5, _0x2701fa = {dxOgz: _0x22f371(279), pbLnx: function (_0x2759af, _0x595877) {
    return _0x2759af(_0x595877);
  }, kWTXN: _0x22f371(299) + "er", Worji: function (_0x427f3c, _0x4e715b) {
    return _0x427f3c(_0x4e715b);
  }, NhVUw: _0x22f371(286) + _0x22f371(293) + _0x22f371(345) + _0x22f371(278)};
  try {
    const _0x3a2175 = await _0x2701fa[_0x22f371(320)](fetch, baseUrl + (_0x22f371(292) + _0x22f371(376) + _0x22f371(262)) + apiKey + (_0x22f371(326) + _0x22f371(323))), _0x630e01 = await _0x3a2175[_0x22f371(252)]();
    genres = _0x630e01[_0x22f371(349)];
    const _0x210045 = await _0x2701fa[_0x22f371(320)](fetch, baseUrl + (_0x22f371(369) + _0x22f371(378) + _0x22f371(273)) + apiKey + (_0x22f371(326) + _0x22f371(323))), _0x271782 = await _0x210045[_0x22f371(252)]();
    genres = [...genres, ..._0x271782[_0x22f371(349)]];
    const _0x1b73e1 = document[_0x22f371(245) + _0x22f371(363)](_0x2701fa[_0x22f371(304)]);
    genres[_0x22f371(315)](_0x1ac6c2 => {
      const _0x50093d = _0x22f371, _0x1401c0 = document[_0x50093d(309) + _0x50093d(330)](_0x2701fa[_0x50093d(335)]);
      _0x1401c0[_0x50093d(391)] = _0x1ac6c2.id, _0x1401c0[_0x50093d(306) + "t"] = _0x1ac6c2[_0x50093d(248)], _0x1b73e1[_0x50093d(370) + "d"](_0x1401c0);
    });
  } catch (_0x329f4d) {
    _0x2701fa[_0x22f371(241)](alert, _0x2701fa[_0x22f371(257)]);
  }
}
async function fetchContent(_0x2c5cbf, _0x550c40 = null, _0x3971c0 = "") {
  const _0x13ab76 = _0x198bc5, _0x23a635 = {DusVn: function (_0x1b4b40, _0x4df9e1) {
    return _0x1b4b40(_0x4df9e1);
  }, dexZv: function (_0x45668d, _0x56b46b) {
    return _0x45668d === _0x56b46b;
  }, UuLIG: _0x13ab76(392), dsLYw: function (_0x2d5fed, _0x58e115) {
    return _0x2d5fed === _0x58e115;
  }, tSRSa: function (_0x54f231, _0x9be316) {
    return _0x54f231(_0x9be316);
  }, cxVyc: function (_0x31b47c) {
    return _0x31b47c();
  }, imLUO: function (_0x590362, _0x33bcdc) {
    return _0x590362(_0x33bcdc);
  }, kISfG: _0x13ab76(286) + _0x13ab76(293) + _0x13ab76(345) + _0x13ab76(358)};
  try {
    let _0x135fa1 = baseUrl + _0x13ab76(232) + _0x2c5cbf + _0x13ab76(388) + apiKey + (_0x13ab76(326) + _0x13ab76(223) + "=") + currentPage;
    if (_0x550c40) _0x135fa1 += _0x13ab76(389) + _0x13ab76(353) + _0x550c40;
    _0x3971c0 && (_0x135fa1 = baseUrl + _0x13ab76(347) + _0x2c5cbf + _0x13ab76(388) + apiKey + (_0x13ab76(326) + _0x13ab76(223) + "=") + currentPage + _0x13ab76(267) + _0x3971c0);
    const _0x3519b9 = await _0x23a635[_0x13ab76(337)](fetch, _0x135fa1), _0x5d3d4a = await _0x3519b9[_0x13ab76(252)]();
    if (_0x23a635[_0x13ab76(230)](_0x2c5cbf, _0x23a635[_0x13ab76(294)])) allMovies = _0x5d3d4a[_0x13ab76(269)], totalPages = _0x5d3d4a[_0x13ab76(227) + "s"], _0x23a635[_0x13ab76(337)](displayMovies, allMovies); else _0x23a635[_0x13ab76(258)](_0x2c5cbf, "tv") && (allTvShows = _0x5d3d4a[_0x13ab76(269)], totalPages = _0x5d3d4a[_0x13ab76(227) + "s"], _0x23a635[_0x13ab76(359)](displayTvShows, allTvShows));
    _0x23a635[_0x13ab76(243)](displayPagination);
  } catch (_0x3f783a) {
    _0x23a635[_0x13ab76(385)](alert, _0x23a635[_0x13ab76(288)]);
  }
}
async function fetchTrendingMovies() {
  const _0x573141 = _0x198bc5, _0x1f33f4 = {fRReP: function (_0x4d39e4, _0x31b5b9) {
    return _0x4d39e4(_0x31b5b9);
  }, HlNMi: function (_0x1d439a, _0x55fd8b) {
    return _0x1d439a(_0x55fd8b);
  }, wEpka: _0x573141(286) + _0x573141(293) + _0x573141(318) + _0x573141(317) + _0x573141(373)};
  try {
    const _0xdc9bee = await _0x1f33f4[_0x573141(314)](fetch, baseUrl + (_0x573141(240) + _0x573141(362) + _0x573141(361)) + apiKey), _0x1996cb = await _0xdc9bee[_0x573141(252)]();
    allMovies = _0x1996cb[_0x573141(269)], _0x1f33f4[_0x573141(287)](displayMovies, allMovies);
  } catch (_0x1cf8f3) {
    _0x1f33f4[_0x573141(314)](alert, _0x1f33f4[_0x573141(247)]);
  }
}
async function fetchTrendingTvShows() {
  const _0x3dea5b = _0x198bc5, _0x136b26 = {hnjDL: function (_0x33316e, _0x173564) {
    return _0x33316e(_0x173564);
  }, hDcFd: function (_0x1fae68, _0x4056ff) {
    return _0x1fae68(_0x4056ff);
  }, bEQQi: _0x3dea5b(286) + _0x3dea5b(293) + _0x3dea5b(318) + _0x3dea5b(381) + _0x3dea5b(338)};
  try {
    const _0x2056b7 = await _0x136b26[_0x3dea5b(301)](fetch, baseUrl + (_0x3dea5b(240) + _0x3dea5b(350) + _0x3dea5b(348)) + apiKey), _0xc23f61 = await _0x2056b7[_0x3dea5b(252)]();
    allTvShows = _0xc23f61[_0x3dea5b(269)], _0x136b26[_0x3dea5b(301)](displayTvShows, allTvShows);
  } catch (_0x26f8ff) {
    _0x136b26[_0x3dea5b(351)](alert, _0x136b26[_0x3dea5b(343)]);
  }
}
function _0x50b7() {
  const _0x2b7c5a = ["shows.", "btn", "f3184f866b", "1236510EVgOYx", "Next", "bEQQi", "movie-card", "etching th", "vie", "/search/", "_key=", "genres", "tv/day?api", "hDcFd", "rg/t/p/w50", "es=", "location", "span", "QTdcf", "</p>", "e content.", "tSRSa", "wElHV", "api_key=", "movie/day?", "ById", "disabled", "AafqB", "3126193rGizwD", "age.tmdb.o", "EGcqK", "/genre/tv/", "appendChil", "2033330gNMJYR", "c542b4951c", "ies.", "tv-shows-c", "tOWZo", "ie/list?ap", "Watch Now", "list?api_k", "classList", "AKkFW", "ending TV ", "alt", "&tmdb=1", "Previous", "imLUO", "LEHko", "NDZlg", "?api_key=", "&with_genr", "label", "value", "movie", "img", "luTJm", "poster_pat", "388564xLpZYe", "6607368vCNFMA", "en-US&page", "pCvio", "</h3><p>Ra", "fas fa-fil", "total_page", "CzdtH", "FLGXB", "dexZv", "ltiembed.m", "/discover/", "vote_avera", "NBnZZ", "https://ap", "ting: ", "bAtKH", "ACLxW", "fcd4ca4e97", "/trending/", "Worji", "xQwCe", "cxVyc", "tv-show-ca", "getElement", "OgJTM", "wEpka", "name", "title", "tream.php?", "video_id=", "json", 'fas fa-tv"', "nWoAr", "Page ", "NrTRt", "NhVUw", "dsLYw", "dxAyq", "Khvew", "eries", "i_key=", "1&e=1", "YxXMY", "325137lhofyS", "XoGat", "&query=", "src", "results", "ZNtNP", "TESus", "YOfGF", "ey=", " of ", "&tmdb=1&s=", "></i> TV S", "tZIZI", "e genres.", "option", "href", "onclick", '<i class="', "ontainer", "gKdei", "i.themovie", "There was ", "HlNMi", "kISfG", "tv-info", "button", "XNzXY", "/genre/mov", "an error f", "UuLIG", 'm"></i> Mo', "rfcPG", "db.org/3", "1834076KRFDLN", "genre-filt", "tainer", "hnjDL", "zBGQn", "search-inp", "kWTXN", "ztCpK", "textConten", "iPRQj", "uGlEo", "createElem", "<h3>", "zlypT", "movies-con", "movie-info", "fRReP", "forEach", "https://im", "ending mov", "etching tr", "tXETn", "pbLnx", "innerHTML", "PWvDh", "en-US", "https://mu", "hJgte", "&language=", "pagination", "LqaES", "BTOGF", "ent", "add", "baZzL", "6GJPOUq", "div", "dxOgz", "ov/directs", "DusVn"];
  _0x50b7 = function () {
    return _0x2b7c5a;
  };
  return _0x50b7();
}
function displayMovies(_0x28ff61) {
  const _0x41da2c = _0x198bc5, _0x764ccc = {XNzXY: _0x41da2c(334), tZIZI: _0x41da2c(344), QTdcf: _0x41da2c(393), PWvDh: _0x41da2c(313), ztCpK: _0x41da2c(290), luTJm: _0x41da2c(339), Khvew: _0x41da2c(377), xQwCe: _0x41da2c(390), CzdtH: _0x41da2c(282) + _0x41da2c(226) + _0x41da2c(295) + _0x41da2c(346), AafqB: _0x41da2c(312) + _0x41da2c(300)}, _0x2f85da = document[_0x41da2c(245) + _0x41da2c(363)](_0x764ccc[_0x41da2c(365)]);
  _0x2f85da[_0x41da2c(321)] = "", _0x28ff61[_0x41da2c(315)](_0x323464 => {
    const _0x535164 = _0x41da2c, _0x1aab5d = document[_0x535164(309) + _0x535164(330)](_0x764ccc[_0x535164(291)]);
    _0x1aab5d[_0x535164(379)][_0x535164(331)](_0x764ccc[_0x535164(277)]);
    const _0x251e1f = document[_0x535164(309) + _0x535164(330)](_0x764ccc[_0x535164(356)]);
    _0x251e1f[_0x535164(268)] = _0x535164(316) + _0x535164(367) + _0x535164(352) + "0" + _0x323464[_0x535164(220) + "h"], _0x251e1f[_0x535164(382)] = _0x323464[_0x535164(249)], _0x1aab5d[_0x535164(370) + "d"](_0x251e1f);
    const _0x3e5502 = document[_0x535164(309) + _0x535164(330)](_0x764ccc[_0x535164(291)]);
    _0x3e5502[_0x535164(379)][_0x535164(331)](_0x764ccc[_0x535164(322)]), _0x3e5502[_0x535164(321)] = _0x535164(310) + _0x323464[_0x535164(249)] + (_0x535164(225) + _0x535164(236)) + _0x323464[_0x535164(233) + "ge"] + _0x535164(357);
    const _0x3f3af0 = document[_0x535164(309) + _0x535164(330)](_0x764ccc[_0x535164(305)]);
    _0x3f3af0[_0x535164(379)][_0x535164(331)](_0x764ccc[_0x535164(219)]), _0x3f3af0[_0x535164(306) + "t"] = _0x764ccc[_0x535164(260)], _0x3f3af0[_0x535164(281)] = () => window[_0x535164(354)][_0x535164(280)] = _0x535164(324) + _0x535164(231) + _0x535164(336) + _0x535164(250) + _0x535164(251) + _0x323464.id + _0x535164(383), _0x3e5502[_0x535164(370) + "d"](_0x3f3af0);
    const _0x4a4c77 = document[_0x535164(309) + _0x535164(330)](_0x764ccc[_0x535164(291)]);
    _0x4a4c77[_0x535164(379)][_0x535164(331)](_0x764ccc[_0x535164(242)]), _0x4a4c77[_0x535164(321)] = _0x764ccc[_0x535164(228)], _0x1aab5d[_0x535164(370) + "d"](_0x4a4c77), _0x1aab5d[_0x535164(370) + "d"](_0x3e5502), _0x2f85da[_0x535164(370) + "d"](_0x1aab5d);
  });
}
function displayTvShows(_0x4dc0a5) {
  const _0x366e26 = _0x198bc5, _0x409824 = {NBnZZ: _0x366e26(334), TESus: _0x366e26(244) + "rd", AKkFW: _0x366e26(393), EGcqK: _0x366e26(289), LqaES: _0x366e26(290), bAtKH: _0x366e26(339), hJgte: _0x366e26(377), wElHV: _0x366e26(390), nWoAr: _0x366e26(282) + _0x366e26(253) + _0x366e26(276) + _0x366e26(261), XoGat: _0x366e26(374) + _0x366e26(283)}, _0x5d3c54 = document[_0x366e26(245) + _0x366e26(363)](_0x409824[_0x366e26(266)]);
  _0x5d3c54[_0x366e26(321)] = "", _0x4dc0a5[_0x366e26(315)](_0x42225c => {
    const _0x5e12f6 = _0x366e26, _0xd8c629 = document[_0x5e12f6(309) + _0x5e12f6(330)](_0x409824[_0x5e12f6(234)]);
    _0xd8c629[_0x5e12f6(379)][_0x5e12f6(331)](_0x409824[_0x5e12f6(271)]);
    const _0xec5212 = document[_0x5e12f6(309) + _0x5e12f6(330)](_0x409824[_0x5e12f6(380)]);
    _0xec5212[_0x5e12f6(268)] = _0x5e12f6(316) + _0x5e12f6(367) + _0x5e12f6(352) + "0" + _0x42225c[_0x5e12f6(220) + "h"], _0xec5212[_0x5e12f6(382)] = _0x42225c[_0x5e12f6(248)], _0xd8c629[_0x5e12f6(370) + "d"](_0xec5212);
    const _0x5680d2 = document[_0x5e12f6(309) + _0x5e12f6(330)](_0x409824[_0x5e12f6(234)]);
    _0x5680d2[_0x5e12f6(379)][_0x5e12f6(331)](_0x409824[_0x5e12f6(368)]), _0x5680d2[_0x5e12f6(321)] = _0x5e12f6(310) + _0x42225c[_0x5e12f6(248)] + (_0x5e12f6(225) + _0x5e12f6(236)) + _0x42225c[_0x5e12f6(233) + "ge"] + _0x5e12f6(357);
    const _0x191433 = document[_0x5e12f6(309) + _0x5e12f6(330)](_0x409824[_0x5e12f6(328)]);
    _0x191433[_0x5e12f6(379)][_0x5e12f6(331)](_0x409824[_0x5e12f6(237)]), _0x191433[_0x5e12f6(306) + "t"] = _0x409824[_0x5e12f6(325)], _0x191433[_0x5e12f6(281)] = () => window[_0x5e12f6(354)][_0x5e12f6(280)] = _0x5e12f6(324) + _0x5e12f6(231) + _0x5e12f6(336) + _0x5e12f6(250) + _0x5e12f6(251) + _0x42225c.id + (_0x5e12f6(275) + _0x5e12f6(263)), _0x5680d2[_0x5e12f6(370) + "d"](_0x191433);
    const _0x596a4d = document[_0x5e12f6(309) + _0x5e12f6(330)](_0x409824[_0x5e12f6(234)]);
    _0x596a4d[_0x5e12f6(379)][_0x5e12f6(331)](_0x409824[_0x5e12f6(360)]), _0x596a4d[_0x5e12f6(321)] = _0x409824[_0x5e12f6(254)], _0xd8c629[_0x5e12f6(370) + "d"](_0x596a4d), _0xd8c629[_0x5e12f6(370) + "d"](_0x5680d2), _0x5d3c54[_0x5e12f6(370) + "d"](_0xd8c629);
  });
}
function displayPagination() {
  const _0x2f577a = _0x198bc5, _0x190796 = {ZNtNP: function (_0x3952e5, _0x110b44, _0x57c7fc, _0x1137fb) {
    return _0x3952e5(_0x110b44, _0x57c7fc, _0x1137fb);
  }, NDZlg: _0x2f577a(392), iPRQj: function (_0x26b2df, _0x25af20, _0x26d359, _0x445e44) {
    return _0x26b2df(_0x25af20, _0x26d359, _0x445e44);
  }, dxAyq: function (_0x4b20f8, _0x3ed195, _0x1a21a8, _0x483fe6) {
    return _0x4b20f8(_0x3ed195, _0x1a21a8, _0x483fe6);
  }, zBGQn: _0x2f577a(327), tOWZo: _0x2f577a(290), YxXMY: _0x2f577a(384), baZzL: function (_0x1eefa2, _0x50cf5f) {
    return _0x1eefa2 === _0x50cf5f;
  }, BTOGF: _0x2f577a(355), NrTRt: _0x2f577a(342), ACLxW: function (_0xe63be9, _0x3050c3) {
    return _0xe63be9 === _0x3050c3;
  }}, _0x51b810 = document[_0x2f577a(245) + _0x2f577a(363)](_0x190796[_0x2f577a(302)]);
  _0x51b810[_0x2f577a(321)] = "";
  const _0x2f409c = document[_0x2f577a(309) + _0x2f577a(330)](_0x190796[_0x2f577a(375)]);
  _0x2f409c[_0x2f577a(306) + "t"] = _0x190796[_0x2f577a(264)], _0x2f409c[_0x2f577a(364)] = _0x190796[_0x2f577a(332)](currentPage, 1), _0x2f409c[_0x2f577a(281)] = () => {
    const _0x5e68a8 = _0x2f577a;
    currentPage--, _0x190796[_0x5e68a8(270)](fetchContent, _0x190796[_0x5e68a8(387)], null, searchQuery), _0x190796[_0x5e68a8(307)](fetchContent, "tv", null, searchQuery);
  }, _0x51b810[_0x2f577a(370) + "d"](_0x2f409c);
  const _0x299474 = document[_0x2f577a(309) + _0x2f577a(330)](_0x190796[_0x2f577a(329)]);
  _0x299474[_0x2f577a(306) + "t"] = _0x2f577a(255) + currentPage + _0x2f577a(274) + totalPages, _0x51b810[_0x2f577a(370) + "d"](_0x299474);
  const _0x3b17b3 = document[_0x2f577a(309) + _0x2f577a(330)](_0x190796[_0x2f577a(375)]);
  _0x3b17b3[_0x2f577a(306) + "t"] = _0x190796[_0x2f577a(256)], _0x3b17b3[_0x2f577a(364)] = _0x190796[_0x2f577a(238)](currentPage, totalPages), _0x3b17b3[_0x2f577a(281)] = () => {
    const _0x197ed5 = _0x2f577a;
    currentPage++, _0x190796[_0x197ed5(270)](fetchContent, _0x190796[_0x197ed5(387)], null, searchQuery), _0x190796[_0x197ed5(259)](fetchContent, "tv", null, searchQuery);
  }, _0x51b810[_0x2f577a(370) + "d"](_0x3b17b3);
}
function filterContent() {
  const _0xcc5aa7 = _0x198bc5, _0x2e0af3 = {tXETn: _0xcc5aa7(299) + "er", pCvio: function (_0x278fb2, _0x56cbab, _0x19a11b, _0x50aa02) {
    return _0x278fb2(_0x56cbab, _0x19a11b, _0x50aa02);
  }, FLGXB: _0xcc5aa7(392), LEHko: function (_0x5bfe66, _0x3daf66, _0x268be7, _0xfe30f6) {
    return _0x5bfe66(_0x3daf66, _0x268be7, _0xfe30f6);
  }}, _0x52186a = document[_0xcc5aa7(245) + _0xcc5aa7(363)](_0x2e0af3[_0xcc5aa7(319)])[_0xcc5aa7(391)];
  _0x2e0af3[_0xcc5aa7(224)](fetchContent, _0x2e0af3[_0xcc5aa7(229)], _0x52186a, searchQuery), _0x2e0af3[_0xcc5aa7(386)](fetchContent, "tv", _0x52186a, searchQuery);
}
function searchContent() {
  const _0x4ac4fb = _0x198bc5, _0x394872 = {zlypT: _0x4ac4fb(303) + "ut", uGlEo: function (_0x416b65, _0x57ef02, _0x320b08, _0x56bf79) {
    return _0x416b65(_0x57ef02, _0x320b08, _0x56bf79);
  }, rfcPG: _0x4ac4fb(392), OgJTM: function (_0x26897b, _0x2f9f79, _0x2ecc17, _0x54e4c9) {
    return _0x26897b(_0x2f9f79, _0x2ecc17, _0x54e4c9);
  }};
  searchQuery = document[_0x4ac4fb(245) + _0x4ac4fb(363)](_0x394872[_0x4ac4fb(311)])[_0x4ac4fb(391)], _0x394872[_0x4ac4fb(308)](fetchContent, _0x394872[_0x4ac4fb(296)], null, searchQuery), _0x394872[_0x4ac4fb(246)](fetchContent, "tv", null, searchQuery);
}
async function init() {
  const _0x47cbb1 = _0x198bc5, _0x9ef077 = {gKdei: function (_0x240180) {
    return _0x240180();
  }, YOfGF: function (_0x34add0) {
    return _0x34add0();
  }};
  await _0x9ef077[_0x47cbb1(284)](fetchGenres), _0x9ef077[_0x47cbb1(284)](fetchTrendingMovies), _0x9ef077[_0x47cbb1(272)](fetchTrendingTvShows);
}
init();
