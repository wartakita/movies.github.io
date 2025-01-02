const _0x594796 = _0xc52a;
(function (_0xd41436, _0x96c044) {
  const _0x5cb7f2 = _0xc52a, _0x6e1f57 = _0xd41436();
  while (true) {
    try {
      const _0x238ad8 = -parseInt(_0x5cb7f2(427)) / 1 * (parseInt(_0x5cb7f2(595)) / 2) + -parseInt(_0x5cb7f2(654)) / 3 * (-parseInt(_0x5cb7f2(741)) / 4) + -parseInt(_0x5cb7f2(407)) / 5 * (-parseInt(_0x5cb7f2(701)) / 6) + parseInt(_0x5cb7f2(565)) / 7 + -parseInt(_0x5cb7f2(439)) / 8 * (parseInt(_0x5cb7f2(754)) / 9) + -parseInt(_0x5cb7f2(617)) / 10 + parseInt(_0x5cb7f2(515)) / 11;
      if (_0x238ad8 === _0x96c044) break; else _0x6e1f57.push(_0x6e1f57.shift());
    } catch (_0x10a439) {
      _0x6e1f57.push(_0x6e1f57.shift());
    }
  }
}(_0x2d3e, 643998));
const API_KEY = _0x594796(739) + _0x594796(445) + _0x594796(618) + "70", BASE_URL = _0x594796(510) + _0x594796(486) + _0x594796(786), IMG_URL = _0x594796(397) + _0x594796(624) + _0x594796(558) + "0", searchInput = document[_0x594796(584) + _0x594796(554)](_0x594796(464) + "ut"), prevButton = document[_0x594796(584) + _0x594796(554)](_0x594796(649) + "n"), nextButton = document[_0x594796(584) + _0x594796(554)](_0x594796(746) + "n"), paginationInfo = document[_0x594796(584) + _0x594796(554)](_0x594796(500) + _0x594796(661)), loader = document[_0x594796(584) + _0x594796(554)](_0x594796(535)), floatingPlayer = document[_0x594796(584) + _0x594796(554)](_0x594796(732) + _0x594796(541)), playerIframe = document[_0x594796(584) + _0x594796(554)](_0x594796(597) + _0x594796(610)), playerTitle = document[_0x594796(584) + _0x594796(554)](_0x594796(611) + "le"), playerSynopsis = document[_0x594796(584) + _0x594796(554)](_0x594796(635) + _0x594796(658)), closePlayerButton = document[_0x594796(584) + _0x594796(554)](_0x594796(449) + "er"), tvSeriesForm = document[_0x594796(584) + _0x594796(554)](_0x594796(697) + _0x594796(495)), seasonNumberInput = document[_0x594796(584) + _0x594796(554)](_0x594796(434) + _0x594796(520)), episodeNumberInput = document[_0x594796(584) + _0x594796(554)](_0x594796(648) + _0x594796(612)), playEpisodeButton = document[_0x594796(584) + _0x594796(554)](_0x594796(787) + "de"), scrollToTopButton = document[_0x594796(584) + _0x594796(554)](_0x594796(616) + _0x594796(460)), state = {currentPage: 1, totalPages: 1, currentView: _0x594796(790) + _0x594796(441), currentQuery: "", currentTMDBId: null, currentType: null, genreMap: {}};
function updateState(_0x9a0b6c) {
  const _0x40dbfd = _0x594796, _0xec0986 = {LZTYq: function (_0x4378f3, _0xdba454, _0x132832) {
    return _0x4378f3(_0xdba454, _0x132832);
  }, Uuxtg: function (_0x1481ca, _0x18d02c) {
    return _0x1481ca === _0x18d02c;
  }, eQKnv: _0x40dbfd(790) + _0x40dbfd(441), znOAF: function (_0x3d919f, _0x983b76) {
    return _0x3d919f(_0x983b76);
  }, gDkpm: function (_0x34c738, _0x2f15cd) {
    return _0x34c738 === _0x2f15cd;
  }, WjYgj: _0x40dbfd(568) + _0x40dbfd(704), nieIb: function (_0x5a92bd, _0x2f5744) {
    return _0x5a92bd === _0x2f5744;
  }, DsfHO: _0x40dbfd(555) + _0x40dbfd(487), Mkbdy: _0x40dbfd(718) + _0x40dbfd(534), sGWLA: function (_0x476fce, _0xdb0bd9) {
    return _0x476fce === _0xdb0bd9;
  }, wNxIU: _0x40dbfd(410), dhHqo: function (_0xdb302, _0x31fbd2) {
    return _0xdb302(_0x31fbd2);
  }, qOsug: function (_0xcb31d3, _0x6b6fe) {
    return _0xcb31d3 === _0x6b6fe;
  }, jFxKl: _0x40dbfd(504) + "ay", kmBem: function (_0x388cb7, _0x152ac1) {
    return _0x388cb7(_0x152ac1);
  }, bvlsZ: _0x40dbfd(705), aMfNR: function (_0x1977d5, _0x41c418) {
    return _0x1977d5(_0x41c418);
  }, rQtsM: function (_0x5bffea, _0x3987f1) {
    return _0x5bffea === _0x3987f1;
  }, IfIxv: _0x40dbfd(718) + "tv", mHAVe: function (_0x2569ac, _0x3fd9cd) {
    return _0x2569ac(_0x3fd9cd);
  }, wlqtC: _0x40dbfd(664), kZZNZ: function (_0x237781, _0x45da2a) {
    return _0x237781(_0x45da2a);
  }};
  Object[_0x40dbfd(734)](state, _0x9a0b6c), _0xec0986[_0x40dbfd(660)](updatePagination, state[_0x40dbfd(421) + "e"], state[_0x40dbfd(736)]);
  if (_0xec0986[_0x40dbfd(551)](state[_0x40dbfd(775) + "w"], _0xec0986[_0x40dbfd(443)])) _0xec0986[_0x40dbfd(446)](fetchPopularMovies, state[_0x40dbfd(421) + "e"]); else {
    if (_0xec0986[_0x40dbfd(481)](state[_0x40dbfd(775) + "w"], _0xec0986[_0x40dbfd(492)])) _0xec0986[_0x40dbfd(446)](fetchUpcomingMovies, state[_0x40dbfd(421) + "e"]); else {
      if (_0xec0986[_0x40dbfd(744)](state[_0x40dbfd(775) + "w"], _0xec0986[_0x40dbfd(571)])) _0xec0986[_0x40dbfd(446)](fetchNowPlayingMovies, state[_0x40dbfd(421) + "e"]); else {
        if (_0xec0986[_0x40dbfd(744)](state[_0x40dbfd(775) + "w"], _0xec0986[_0x40dbfd(512)])) _0xec0986[_0x40dbfd(446)](fetchTopRatedMovies, state[_0x40dbfd(421) + "e"]); else {
          if (_0xec0986[_0x40dbfd(423)](state[_0x40dbfd(775) + "w"], _0xec0986[_0x40dbfd(484)])) _0xec0986[_0x40dbfd(474)](fetchPopularTVSeries, state[_0x40dbfd(421) + "e"]); else {
            if (_0xec0986[_0x40dbfd(692)](state[_0x40dbfd(775) + "w"], _0xec0986[_0x40dbfd(479)])) _0xec0986[_0x40dbfd(698)](fetchAiringToday, state[_0x40dbfd(421) + "e"]); else {
              if (_0xec0986[_0x40dbfd(744)](state[_0x40dbfd(775) + "w"], _0xec0986[_0x40dbfd(650)])) _0xec0986[_0x40dbfd(634)](fetchOnTV, state[_0x40dbfd(421) + "e"]); else {
                if (_0xec0986[_0x40dbfd(454)](state[_0x40dbfd(775) + "w"], _0xec0986[_0x40dbfd(659)])) _0xec0986[_0x40dbfd(440)](fetchTopRatedTVSeries, state[_0x40dbfd(421) + "e"]); else {
                  if (_0xec0986[_0x40dbfd(481)](state[_0x40dbfd(775) + "w"], _0xec0986[_0x40dbfd(782)])) _0xec0986[_0x40dbfd(769)](fetchSearchResults, state[_0x40dbfd(421) + "e"]);
                }
              }
            }
          }
        }
      }
    }
  }
}
function showLoader() {
  const _0x268938 = _0x594796, _0x553600 = {VHARe: _0x268938(681)};
  loader[_0x268938(499)][_0x268938(735)] = _0x553600[_0x268938(582)];
}
function hideLoader() {
  const _0x44c64c = _0x594796, _0x4f43df = {ijgNY: _0x44c64c(409)};
  loader[_0x44c64c(499)][_0x44c64c(735)] = _0x4f43df[_0x44c64c(613)];
}
function updatePagination(_0x4b704b, _0x5468c7) {
  const _0x303226 = _0x594796, _0x17f8db = {hlTRa: _0x303226(585), eQElH: function (_0x31f820, _0x501c33) {
    return _0x31f820 <= _0x501c33;
  }, mgzab: function (_0x210d19, _0x53acd7) {
    return _0x210d19 >= _0x53acd7;
  }}, _0x4aa936 = _0x17f8db[_0x303226(667)][_0x303226(670)]("|");
  let _0x3919dc = 0;
  while (true) {
    switch (_0x4aa936[_0x3919dc++]) {
      case "0":
        state[_0x303226(736)] = _0x5468c7;
        continue;
      case "1":
        state[_0x303226(421) + "e"] = _0x4b704b;
        continue;
      case "2":
        prevButton[_0x303226(723)] = _0x17f8db[_0x303226(557)](_0x4b704b, 1);
        continue;
      case "3":
        nextButton[_0x303226(723)] = _0x17f8db[_0x303226(766)](_0x4b704b, _0x5468c7);
        continue;
      case "4":
        paginationInfo[_0x303226(642) + "t"] = _0x303226(629) + _0x4b704b + _0x303226(435) + _0x5468c7;
        continue;
    }
    break;
  }
}
async function fetchData(_0x5c75cd, _0x2ff145 = 1, _0x2b5b09 = "") {
  const _0x4dee74 = _0x594796, _0x40e671 = {BEmkG: function (_0x550a41) {
    return _0x550a41();
  }, IqsLE: function (_0x4be8bb, _0x1ab8e7) {
    return _0x4be8bb(_0x1ab8e7);
  }, fMqAw: function (_0x1077e2) {
    return _0x1077e2();
  }, ObnBR: _0x4dee74(677) + _0x4dee74(418), ZEQHa: _0x4dee74(430) + _0x4dee74(406) + _0x4dee74(679) + _0x4dee74(428) + _0x4dee74(727), RGlAu: _0x4dee74(412) + "t"};
  _0x40e671[_0x4dee74(780)](showLoader);
  const _0x2f9552 = _0x2b5b09 ? "" + BASE_URL + _0x5c75cd + _0x4dee74(760) + API_KEY + (_0x4dee74(530) + _0x4dee74(542) + "=") + _0x2ff145 + _0x4dee74(573) + _0x2b5b09 : "" + BASE_URL + _0x5c75cd + _0x4dee74(760) + API_KEY + (_0x4dee74(530) + _0x4dee74(542) + "=") + _0x2ff145;
  try {
    const _0x1b118b = await _0x40e671[_0x4dee74(630)](fetch, _0x2f9552);
    if (!_0x1b118b.ok) throw new Error(_0x4dee74(640) + _0x4dee74(600) + _0x1b118b[_0x4dee74(645)]);
    const _0x44fac6 = await _0x1b118b[_0x4dee74(768)]();
    return _0x40e671[_0x4dee74(780)](hideLoader), _0x44fac6;
  } catch (_0x57b0d9) {
    _0x40e671[_0x4dee74(450)](hideLoader), console[_0x4dee74(402)](_0x40e671[_0x4dee74(693)], _0x57b0d9), _0x40e671[_0x4dee74(630)](alert, _0x40e671[_0x4dee74(714)]);
    const _0x183c34 = document[_0x4dee74(584) + _0x4dee74(554)](_0x40e671[_0x4dee74(561)]);
    _0x183c34[_0x4dee74(772)] = _0x4dee74(399) + _0x4dee74(601) + _0x4dee74(784) + _0x4dee74(633) + _0x4dee74(696) + _0x4dee74(686) + _0x4dee74(666) + _0x4dee74(777) + _0x4dee74(729);
  }
}
async function fetchGenres() {
  const _0x1e4250 = _0x594796, _0x4aa4b8 = {UVQBG: function (_0x36f380, _0x1ac407) {
    return _0x36f380(_0x1ac407);
  }, Vqawf: function (_0xa975ab, _0x356d09) {
    return _0xa975ab(_0x356d09);
  }, hipRp: _0x1e4250(677) + _0x1e4250(580) + "s:"}, _0x19efbf = BASE_URL + (_0x1e4250(588) + _0x1e4250(614) + _0x1e4250(543)) + API_KEY + (_0x1e4250(530) + _0x1e4250(457));
  try {
    const _0x51fb94 = await _0x4aa4b8[_0x1e4250(488)](fetch, _0x19efbf);
    if (!_0x51fb94.ok) throw new Error(_0x1e4250(640) + _0x1e4250(600) + _0x51fb94[_0x1e4250(645)]);
    const _0x1dc5d4 = await _0x51fb94[_0x1e4250(768)](), _0x3d0936 = {};
    _0x1dc5d4[_0x1e4250(490)][_0x1e4250(687)](_0x2271dd => {
      const _0x14a055 = _0x1e4250;
      _0x3d0936[_0x2271dd.id] = _0x2271dd[_0x14a055(619)];
    }), _0x4aa4b8[_0x1e4250(517)](updateState, {genreMap: _0x3d0936});
  } catch (_0x1e24ee) {
    console[_0x1e4250(402)](_0x4aa4b8[_0x1e4250(494)], _0x1e24ee);
  }
}
async function fetchPopularMovies(_0x4b7e85 = 1) {
  const _0x427ff3 = _0x594796, _0x1d8f5f = {AIKYY: function (_0x5bc94b, _0x49abf3, _0x3f4392) {
    return _0x5bc94b(_0x49abf3, _0x3f4392);
  }, QtLwc: _0x427ff3(505) + _0x427ff3(716), tjeDE: function (_0x255202, _0x54e767, _0x2c6d32) {
    return _0x255202(_0x54e767, _0x2c6d32);
  }, hvwzw: _0x427ff3(790) + _0x427ff3(441), JXmWh: function (_0x239f03, _0x466c20, _0x36a97f) {
    return _0x239f03(_0x466c20, _0x36a97f);
  }}, _0x4d5743 = await _0x1d8f5f[_0x427ff3(604)](fetchData, _0x1d8f5f[_0x427ff3(567)], _0x4b7e85);
  _0x4d5743 && (_0x1d8f5f[_0x427ff3(731)](renderContent, _0x4d5743[_0x427ff3(761)], _0x1d8f5f[_0x427ff3(553)]), _0x1d8f5f[_0x427ff3(763)](updatePagination, _0x4d5743[_0x427ff3(699)], _0x4d5743[_0x427ff3(432) + "s"]));
}
async function fetchUpcomingMovies(_0x3e3da4 = 1) {
  const _0x3d3a9b = _0x594796, _0x9d3c66 = {ibMhM: function (_0x34bdfe, _0x393663, _0x3887a5) {
    return _0x34bdfe(_0x393663, _0x3887a5);
  }, aTcFj: _0x3d3a9b(781) + _0x3d3a9b(608), nrjnr: _0x3d3a9b(568) + _0x3d3a9b(704), vSNcJ: function (_0x4118f4, _0x146629, _0x1d1af3) {
    return _0x4118f4(_0x146629, _0x1d1af3);
  }}, _0x2251ed = await _0x9d3c66[_0x3d3a9b(404)](fetchData, _0x9d3c66[_0x3d3a9b(529)], _0x3e3da4);
  _0x2251ed && (_0x9d3c66[_0x3d3a9b(404)](renderContent, _0x2251ed[_0x3d3a9b(761)], _0x9d3c66[_0x3d3a9b(703)]), _0x9d3c66[_0x3d3a9b(778)](updatePagination, _0x2251ed[_0x3d3a9b(699)], _0x2251ed[_0x3d3a9b(432) + "s"]));
}
async function fetchNowPlayingMovies(_0x21bda0 = 1) {
  const _0x313f77 = _0x594796, _0x2249eb = {YOZot: function (_0x4d2751, _0x5dda34, _0x251917) {
    return _0x4d2751(_0x5dda34, _0x251917);
  }, xqrKr: _0x313f77(755) + _0x313f77(655), MylwA: function (_0x1abff5, _0x5914e3, _0x11f6a0) {
    return _0x1abff5(_0x5914e3, _0x11f6a0);
  }, APGLH: _0x313f77(555) + _0x313f77(487)}, _0x2738fa = await _0x2249eb[_0x313f77(719)](fetchData, _0x2249eb[_0x313f77(647)], _0x21bda0);
  _0x2738fa && (_0x2249eb[_0x313f77(431)](renderContent, _0x2738fa[_0x313f77(761)], _0x2249eb[_0x313f77(671)]), _0x2249eb[_0x313f77(719)](updatePagination, _0x2738fa[_0x313f77(699)], _0x2738fa[_0x313f77(432) + "s"]));
}
function _0xc52a(_0x1f472c, _0x2637a1) {
  const _0x45555f = _0x2d3e();
  return _0xc52a = function (_0x1959e9, _0x7276d1) {
    _0x1959e9 = _0x1959e9 - 397;
    let _0x38fbe5 = _0x45555f[_0x1959e9];
    return _0x38fbe5;
  }, _0xc52a(_0x1f472c, _0x2637a1);
}
async function fetchTopRatedMovies(_0xe5462f = 1) {
  const _0x3ca9fd = _0x594796, _0x9a2e33 = {TTgLI: function (_0x133fb0, _0x4a5fc0, _0x237279) {
    return _0x133fb0(_0x4a5fc0, _0x237279);
  }, RhDFZ: _0x3ca9fd(483) + _0x3ca9fd(764), AebGT: _0x3ca9fd(718) + _0x3ca9fd(534), wEUWh: function (_0x59b2b9, _0x4ae039, _0x3737c4) {
    return _0x59b2b9(_0x4ae039, _0x3737c4);
  }}, _0x1a2972 = await _0x9a2e33[_0x3ca9fd(398)](fetchData, _0x9a2e33[_0x3ca9fd(465)], _0xe5462f);
  _0x1a2972 && (_0x9a2e33[_0x3ca9fd(398)](renderContent, _0x1a2972[_0x3ca9fd(761)], _0x9a2e33[_0x3ca9fd(771)]), _0x9a2e33[_0x3ca9fd(525)](updatePagination, _0x1a2972[_0x3ca9fd(699)], _0x1a2972[_0x3ca9fd(432) + "s"]));
}
async function fetchPopularTVSeries(_0x302bad = 1) {
  const _0x4e679a = _0x594796, _0x1e2002 = {cRkoV: function (_0x25146c, _0xe15219, _0x291f3f) {
    return _0x25146c(_0xe15219, _0x291f3f);
  }, SefSP: _0x4e679a(513) + "r", qatVP: _0x4e679a(410)}, _0xf04fc3 = await _0x1e2002[_0x4e679a(651)](fetchData, _0x1e2002[_0x4e679a(475)], _0x302bad);
  _0xf04fc3 && (_0x1e2002[_0x4e679a(651)](renderContent, _0xf04fc3[_0x4e679a(761)], _0x1e2002[_0x4e679a(502)]), _0x1e2002[_0x4e679a(651)](updatePagination, _0xf04fc3[_0x4e679a(699)], _0xf04fc3[_0x4e679a(432) + "s"]));
}
async function fetchAiringToday(_0x150041 = 1) {
  const _0x300bb7 = _0x594796, _0x16095a = {NxhNx: function (_0x3d6ff4, _0x33b052, _0x1ac7c2) {
    return _0x3d6ff4(_0x33b052, _0x1ac7c2);
  }, JVHSN: _0x300bb7(518) + _0x300bb7(498), hGzMs: _0x300bb7(504) + "ay", nsLAG: function (_0x298a15, _0x25c877, _0x171399) {
    return _0x298a15(_0x25c877, _0x171399);
  }}, _0xbd4956 = await _0x16095a[_0x300bb7(503)](fetchData, _0x16095a[_0x300bb7(748)], _0x150041);
  _0xbd4956 && (_0x16095a[_0x300bb7(503)](renderContent, _0xbd4956[_0x300bb7(761)], _0x16095a[_0x300bb7(596)]), _0x16095a[_0x300bb7(770)](updatePagination, _0xbd4956[_0x300bb7(699)], _0xbd4956[_0x300bb7(432) + "s"]));
}
async function fetchOnTV(_0x44741c = 1) {
  const _0x424da1 = _0x594796, _0x18e8a7 = {sQwWb: function (_0xf60842, _0x1646ed, _0x1796cf) {
    return _0xf60842(_0x1646ed, _0x1796cf);
  }, EPFJI: _0x424da1(742) + _0x424da1(468), BMKPA: _0x424da1(705), blqrR: function (_0x359deb, _0x2d0c5c, _0x84486c) {
    return _0x359deb(_0x2d0c5c, _0x84486c);
  }}, _0x4e5f32 = await _0x18e8a7[_0x424da1(461)](fetchData, _0x18e8a7[_0x424da1(469)], _0x44741c);
  _0x4e5f32 && (_0x18e8a7[_0x424da1(461)](renderContent, _0x4e5f32[_0x424da1(761)], _0x18e8a7[_0x424da1(591)]), _0x18e8a7[_0x424da1(626)](updatePagination, _0x4e5f32[_0x424da1(699)], _0x4e5f32[_0x424da1(432) + "s"]));
}
async function fetchTopRatedTVSeries(_0x2f28e4 = 1) {
  const _0x19932c = _0x594796, _0x17799f = {frEpq: function (_0x37a89a, _0x731403, _0x489414) {
    return _0x37a89a(_0x731403, _0x489414);
  }, WGtlf: _0x19932c(476) + _0x19932c(789), YTrlL: _0x19932c(718) + "tv", SemrC: function (_0x32126a, _0x15274c, _0x440860) {
    return _0x32126a(_0x15274c, _0x440860);
  }}, _0x5a736d = await _0x17799f[_0x19932c(753)](fetchData, _0x17799f[_0x19932c(537)], _0x2f28e4);
  _0x5a736d && (_0x17799f[_0x19932c(753)](renderContent, _0x5a736d[_0x19932c(761)], _0x17799f[_0x19932c(544)]), _0x17799f[_0x19932c(788)](updatePagination, _0x5a736d[_0x19932c(699)], _0x5a736d[_0x19932c(432) + "s"]));
}
async function fetchSearchResults(_0x383689 = 1) {
  const _0x181eb5 = _0x594796, _0x466c72 = {FjJHg: function (_0x369e15, _0x1508f2, _0x10a548, _0x6766be) {
    return _0x369e15(_0x1508f2, _0x10a548, _0x6766be);
  }, GMVPO: _0x181eb5(536) + _0x181eb5(637), YjCOR: function (_0x171493, _0x5bfa98, _0x35ab03) {
    return _0x171493(_0x5bfa98, _0x35ab03);
  }, osZDF: _0x181eb5(664), kIJMT: function (_0x3a2491, _0x69f269, _0x48f491) {
    return _0x3a2491(_0x69f269, _0x48f491);
  }};
  if (!state[_0x181eb5(684) + "ry"]) return;
  const _0x2c71e7 = await _0x466c72[_0x181eb5(709)](fetchData, _0x466c72[_0x181eb5(546)], _0x383689, state[_0x181eb5(684) + "ry"]);
  _0x2c71e7 && (_0x466c72[_0x181eb5(776)](renderContent, _0x2c71e7[_0x181eb5(761)], _0x466c72[_0x181eb5(656)]), _0x466c72[_0x181eb5(665)](updatePagination, _0x2c71e7[_0x181eb5(699)], _0x2c71e7[_0x181eb5(432) + "s"]));
}
function renderContent(_0x41dfb6, _0x5966db) {
  const _0x2f9f10 = _0x594796, _0x5a74b1 = {WDqNR: _0x2f9f10(527) + _0x2f9f10(570), ChdDz: _0x2f9f10(644) + _0x2f9f10(631) + _0x2f9f10(706) + _0x2f9f10(405) + _0x2f9f10(448), ExwKw: _0x2f9f10(668), EJHRD: _0x2f9f10(412) + "t"}, _0x17f821 = document[_0x2f9f10(584) + _0x2f9f10(554)](_0x5a74b1[_0x2f9f10(447)]);
  _0x17f821[_0x2f9f10(772)] = _0x41dfb6[_0x2f9f10(638)](_0x2a426f => {
    const _0x5be6f4 = _0x2f9f10, _0x235301 = _0x2a426f[_0x5be6f4(482)] || _0x2a426f[_0x5be6f4(619)] || _0x5a74b1[_0x5be6f4(489)], _0x41b25c = _0x2a426f[_0x5be6f4(609) + "h"] ? "" + IMG_URL + _0x2a426f[_0x5be6f4(609) + "h"] : _0x5a74b1[_0x5be6f4(712)], _0x135edd = _0x2a426f[_0x5be6f4(516) + "ge"] ? _0x2a426f[_0x5be6f4(516) + "ge"][_0x5be6f4(605)](1) : _0x5a74b1[_0x5be6f4(583)], _0x51db22 = _0x2a426f.id, _0x2a75f7 = _0x2a426f[_0x5be6f4(556) + "te"] ? _0x2a426f[_0x5be6f4(556) + "te"][_0x5be6f4(670)]("-")[0] : _0x2a426f[_0x5be6f4(673) + _0x5be6f4(593)] ? _0x2a426f[_0x5be6f4(673) + _0x5be6f4(593)][_0x5be6f4(670)]("-")[0] : _0x5a74b1[_0x5be6f4(583)], _0x4f0100 = _0x2a426f[_0x5be6f4(594)] ? _0x2a426f[_0x5be6f4(594)][_0x5be6f4(638)](_0x907094 => state[_0x5be6f4(774)][_0x907094])[_0x5be6f4(694)](", ") : _0x5a74b1[_0x5be6f4(583)];
    return _0x5be6f4(688) + _0x5be6f4(562) + _0x5be6f4(767) + _0x5be6f4(496) + _0x5be6f4(587) + _0x5be6f4(675) + _0x5be6f4(501) + _0x5be6f4(562) + _0x5be6f4(562) + _0x5be6f4(433) + _0x5be6f4(750) + _0x5be6f4(538) + _0x5be6f4(509) + _0x5be6f4(621) + _0x5be6f4(579) + _0x51db22 + (_0x5be6f4(643) + _0x5be6f4(738)) + _0x5966db + (_0x5be6f4(506) + _0x5be6f4(549)) + _0x235301 + (_0x5be6f4(620) + _0x5be6f4(663)) + _0x2a426f[_0x5be6f4(641)] + (_0x5be6f4(526) + _0x5be6f4(562) + _0x5be6f4(562) + _0x5be6f4(751) + _0x5be6f4(615)) + _0x41b25c + (_0x5be6f4(411) + _0x5be6f4(472) + _0x5be6f4(682)) + _0x235301 + (_0x5be6f4(526) + _0x5be6f4(562) + _0x5be6f4(562) + _0x5be6f4(767) + _0x5be6f4(415) + _0x5be6f4(713)) + _0x2a75f7 + (_0x5be6f4(497) + _0x5be6f4(562) + _0x5be6f4(562) + _0x5be6f4(653) + _0x5be6f4(508) + _0x5be6f4(575) + _0x5be6f4(526) + _0x5be6f4(562) + _0x5be6f4(562) + _0x5be6f4(653) + _0x5be6f4(636) + _0x5be6f4(552) + '">') + _0x235301 + (_0x5be6f4(559) + _0x5be6f4(562) + _0x5be6f4(562) + _0x5be6f4(562) + _0x5be6f4(433) + _0x5be6f4(695) + _0x5be6f4(526) + _0x5be6f4(562) + _0x5be6f4(562) + _0x5be6f4(562) + _0x5be6f4(480) + _0x5be6f4(576) + _0x5be6f4(545) + _0x5be6f4(688) + _0x5be6f4(562) + _0x5be6f4(562) + _0x5be6f4(562) + _0x5be6f4(711) + _0x5be6f4(532) + _0x5be6f4(563) + _0x5be6f4(562) + _0x5be6f4(562) + _0x5be6f4(562) + _0x5be6f4(653) + _0x5be6f4(702) + _0x5be6f4(717) + _0x5be6f4(581) + _0x5be6f4(562) + _0x5be6f4(562) + _0x5be6f4(562) + _0x5be6f4(627) + _0x5be6f4(459) + _0x5be6f4(467) + _0x5be6f4(740) + _0x5be6f4(562) + _0x5be6f4(562) + _0x5be6f4(562) + _0x5be6f4(438) + _0x5be6f4(745) + _0x5be6f4(453) + _0x5be6f4(603) + _0x5be6f4(562) + _0x5be6f4(562) + _0x5be6f4(562) + _0x5be6f4(720)) + _0x135edd + (_0x5be6f4(420) + _0x5be6f4(562) + _0x5be6f4(562) + _0x5be6f4(562) + _0x5be6f4(478) + _0x5be6f4(688) + _0x5be6f4(562) + _0x5be6f4(562) + _0x5be6f4(452) + _0x5be6f4(765) + _0x5be6f4(408) + '">') + _0x4f0100 + (_0x5be6f4(497) + _0x5be6f4(562) + _0x5be6f4(562) + _0x5be6f4(653) + _0x5be6f4(592) + _0x5be6f4(562) + _0x5be6f4(562) + _0x5be6f4(478) + _0x5be6f4(688) + _0x5be6f4(562) + _0x5be6f4(528) + ">");
  })[_0x2f9f10(694)]("");
}
document[_0x594796(584) + _0x594796(554)](_0x594796(412) + "t")[_0x594796(599) + _0x594796(455)](_0x594796(783), _0x43af8e => {
  const _0x2277d2 = _0x594796, _0x25fa2a = {ybzKx: _0x2277d2(690), PGfYk: _0x2277d2(458) + "id", nqsBX: _0x2277d2(577), wFdJo: _0x2277d2(540), LqHhH: _0x2277d2(550) + _0x2277d2(401), ggQIO: function (_0x102f54, _0xd60fa1, _0x533c9c, _0x15e571, _0x9917a9) {
    return _0x102f54(_0xd60fa1, _0x533c9c, _0x15e571, _0x9917a9);
  }}, _0x4fc1bf = _0x43af8e[_0x2277d2(625)][_0x2277d2(436)](_0x25fa2a[_0x2277d2(639)]);
  if (_0x4fc1bf) {
    const _0x1fce3a = _0x4fc1bf[_0x2277d2(572) + "te"](_0x25fa2a[_0x2277d2(417)]), _0x490470 = _0x4fc1bf[_0x2277d2(572) + "te"](_0x25fa2a[_0x2277d2(785)]), _0x4d3a73 = _0x4fc1bf[_0x2277d2(572) + "te"](_0x25fa2a[_0x2277d2(589)]), _0x1a2d0a = _0x4fc1bf[_0x2277d2(572) + "te"](_0x25fa2a[_0x2277d2(425)]);
    state[_0x2277d2(560) + _0x2277d2(607)] = _0x1fce3a, state[_0x2277d2(678) + "e"] = _0x490470, _0x25fa2a[_0x2277d2(689)](openPlayer, _0x4d3a73, _0x1a2d0a, _0x1fce3a, _0x490470);
  }
});
function openPlayer(_0x534fcb, _0x420da4, _0x53212a, _0x226191) {
  const _0xecea79 = _0x594796, _0x184aeb = {BkwZe: function (_0x344508, _0x39b563) {
    return _0x344508 === _0x39b563;
  }, Kjupp: _0xecea79(790) + _0xecea79(441), HrBhF: _0xecea79(568) + _0xecea79(704), GnmVR: function (_0x1973fa, _0x244058) {
    return _0x1973fa === _0x244058;
  }, ZcgBU: _0xecea79(555) + _0xecea79(487), mtJBf: function (_0x4c1a85, _0x35544b) {
    return _0x4c1a85 === _0x35544b;
  }, fMYlC: _0xecea79(718) + _0xecea79(534), JJIGV: _0xecea79(409), miKav: _0xecea79(410), sxJmV: _0xecea79(504) + "ay", rUEpT: _0xecea79(705), eJGAH: function (_0xd303a1, _0x2a11f4) {
    return _0xd303a1 === _0x2a11f4;
  }, DbOHy: _0xecea79(718) + "tv", DjCOB: _0xecea79(681), kYkLr: _0xecea79(669)};
  playerTitle[_0xecea79(642) + "t"] = _0x534fcb, playerSynopsis[_0xecea79(642) + "t"] = _0x420da4;
  if (_0x184aeb[_0xecea79(586)](_0x226191, _0x184aeb[_0xecea79(491)]) || _0x184aeb[_0xecea79(586)](_0x226191, _0x184aeb[_0xecea79(676)]) || _0x184aeb[_0xecea79(547)](_0x226191, _0x184aeb[_0xecea79(477)]) || _0x184aeb[_0xecea79(725)](_0x226191, _0x184aeb[_0xecea79(413)])) playerIframe[_0xecea79(721)] = _0xecea79(426) + _0xecea79(758) + _0xecea79(683) + _0xecea79(730) + _0x53212a, tvSeriesForm[_0xecea79(499)][_0xecea79(735)] = _0x184aeb[_0xecea79(442)]; else (_0x184aeb[_0xecea79(586)](_0x226191, _0x184aeb[_0xecea79(623)]) || _0x184aeb[_0xecea79(725)](_0x226191, _0x184aeb[_0xecea79(507)]) || _0x184aeb[_0xecea79(586)](_0x226191, _0x184aeb[_0xecea79(564)]) || _0x184aeb[_0xecea79(470)](_0x226191, _0x184aeb[_0xecea79(652)])) && (playerIframe[_0xecea79(721)] = _0xecea79(426) + _0xecea79(758) + _0xecea79(683) + _0xecea79(590) + _0x53212a + _0xecea79(522), tvSeriesForm[_0xecea79(499)][_0xecea79(735)] = _0x184aeb[_0xecea79(514)]);
  floatingPlayer[_0xecea79(499)][_0xecea79(735)] = _0x184aeb[_0xecea79(756)];
}
function _0x2d3e() {
  const _0x8c8bfb = ["i.themovie", "g-movies", "UVQBG", "WDqNR", "genres", "Kjupp", "WjYgj", "aLEQA", "hipRp", "form", 'class="col', "</div>\n   ", "_today", "style", "pagination", '2">\n      ', "qatVP", "NxhNx", "airing-tod", "/movie/pop", '" data-tit', "sxJmV", "div class=", "t-white mb", "https://ap", "3|6", "Mkbdy", "/tv/popula", "DjCOB", "6138858LNgZjE", "vote_avera", "Vqawf", "/tv/airing", "qCOpL", "ber", "sxeQh", "/1/1", "IcYSe", "er valid s", "wEUWh", '">\n       ', "No Title A", "     </div", "aTcFj", "&language=", "mbers.", '"fas fa-st', "eason and ", "movies", "loader", "/search/mu", "WGtlf", "g-dark tex", "pXOxX", "data-title", "layer", "en-US&page", "i_key=", "YTrlL", 'star"></i>', "GMVPO", "GnmVR", "mjaBX", 'le="', "data-synop", "Uuxtg", "card-title", "hvwzw", "ById", "now-playin", "release_da", "eQElH", "rg/t/p/w50", "</h5>\n    ", "currentTMD", "RGlAu", "          ", 'ar"></i>\n ', "rUEpT", "7357147iVomJg", "oXvvV", "QtLwc", "upcoming-m", "Please ent", "vailable", "DsfHO", "getAttribu", "&query=", "VtzqL", '"card-body', 's="fas fa-', "data-type", "uVPiz", 'mdb-id="', "hing genre", '"></i>\n   ', "VHARe", "ExwKw", "getElement", "1|0|2|3|4", "BkwZe", "-md-3 col-", "/genre/mov", "wFdJo", "bed/tv/", "BMKPA", "/div>\n    ", "date", "genre_ids", "4axxZHK", "hGzMs", "player-ifr", "scroll", "addEventLi", "! Status: ", '="alert al', "DYgDz", "i>\n       ", "AIKYY", "toFixed", "sPveU", "BId", "oming", "poster_pat", "ame", "player-tit", "mber", "ijgNY", "ie/list?ap", 'src="', "scroll-to-", "11651280deToNi", "f3184f866b", "name", '" data-syn', '-3" data-t', "dDiLM", "miKav", "age.tmdb.o", "target", "blqrR", "       <i ", "Qgubx", "Page ", "IqsLE", "a.placehol", "JWzNh", '">Failed t', "aMfNR", "player-syn", 'h5 class="', "lti", "map", "ybzKx", "HTTP error", "overview", "textConten", '" data-typ', "https://vi", "status", "EeWWh", "xqrKr", "episode-nu", "prev-butto", "bvlsZ", "cRkoV", "DbOHy", "         <", "18555SWSdtM", "_playing", "osZDF", "lXqTC", "opsis", "IfIxv", "LZTYq", "-info", "trim", 'opsis="', "search", "kIJMT", " try again", "hlTRa", "N/A", "flex", "split", "APGLH", "episode nu", "first_air_", "0|2|1|4|5|", "sm-6 col-1", "HrBhF", "Error fetc", "currentTyp", ". Please t", "guPMc", "block", 'p" alt="', "mbed.cc/em", "currentQue", "lnXpH", "ta. Please", "forEach", "\n         ", "ggQIO", ".card", "smooth", "qOsug", "ObnBR", "join", 'ss="rating', "o fetch da", "tv-series-", "kmBem", "page", "pisode num", "12WSOckp", 'i class="f', "nrjnr", "ovies", "on-tv", "der.com/20", "er both se", "CKfXx", "FjJHg", "pLehV", " <i class=", "ChdDz", 'r-label">', "ZEQHa", "CfMiy", "ular", "as fa-star", "top-rated-", "YOZot", "   <span>", "src", "ovies-tab", "disabled", "value", "mtJBf", "scrollTo", "ater.", "yWDms", "iv>", "bed/movie/", "tjeDE", "floating-p", "EXCqJ", "assign", "display", "totalPages", "vies-tab", 'e="', "c542b4951c", "</i>\n     ", "88LqKkRK", "/tv/on_the", "ement", "nieIb", 'ass="fas f', "next-butto", "documentEl", "JVHSN", "pXIwV", 'ss="card b', "     <img ", "DoxVX", "frEpq", "63xqODwD", "/movie/now", "kYkLr", "tv-tab", "ayer.autoe", "zYmEa", "?api_key=", "results", "anLPr", "JXmWh", "_rated", 'v class="g', "mgzab", "     <div ", "json", "kZZNZ", "nsLAG", "AebGT", "innerHTML", "DKEhS", "genreMap", "currentVie", "YjCOR", " later.</d", "vSNcJ", "movies-tab", "BEmkG", "/movie/upc", "wlqtC", "click", "ert-danger", "nqsBX", "db.org/3", "play-episo", "SemrC", "ted", "popular-mo", "https://im", "TTgLI", "<div class", "scrollTop", "sis", "error", "input", "ibMhM", "0x300?text", "fetch data", "722770wLbrsh", "enre-label", "none", "popular-tv", '" class="c', "movies-lis", "fMYlC", "ay-tab", 'class="yea', "SoJVY", "PGfYk", "hing data:", "QZSqR", "</span>\n  ", "currentPag", "fXTlU", "sGWLA", "LPHfG", "LqHhH", "https://pl", "65847IGsTdS", "ry again l", "rbFlV", "Failed to ", "MylwA", "total_page", "  <div cla", "season-num", " of ", "closest", "bers.", "     <i cl", "106808nNqNlw", "mHAVe", "vies", "JJIGV", "eQKnv", "mdVpn", "fcd4ca4e97", "znOAF", "EJHRD", "=No+Image", "close-play", "fMqAw", "-tab", "       <di", 'a-star"></', "rQtsM", "stener", "Ztrfb", "en-US", "data-tmdb-", 'class="fas', "top", "sQwWb", "on-tv-tab", "wRbQC", "search-inp", "RhDFZ", "bmFdS", ' fa-star">', "_air", "EPFJI", "eJGAH", "body", "ard-img-to", "ason and e", "dhHqo", "SefSP", "/tv/top_ra", "ZcgBU", "    </div>", "jFxKl", "   <i clas", "gDkpm", "title", "/movie/top", "wNxIU", "g-movies-t"];
  _0x2d3e = function () {
    return _0x8c8bfb;
  };
  return _0x2d3e();
}
closePlayerButton[_0x594796(599) + _0x594796(455)](_0x594796(783), () => {
  const _0x753a5c = _0x594796, _0x4c1c22 = {sPveU: _0x753a5c(674) + _0x753a5c(511), Qgubx: _0x753a5c(409)}, _0x5203a5 = _0x4c1c22[_0x753a5c(606)][_0x753a5c(670)]("|");
  let _0x26cbe4 = 0;
  while (true) {
    switch (_0x5203a5[_0x26cbe4++]) {
      case "0":
        floatingPlayer[_0x753a5c(499)][_0x753a5c(735)] = _0x4c1c22[_0x753a5c(628)];
        continue;
      case "1":
        playerTitle[_0x753a5c(642) + "t"] = "";
        continue;
      case "2":
        playerIframe[_0x753a5c(721)] = "";
        continue;
      case "3":
        state[_0x753a5c(678) + "e"] = null;
        continue;
      case "4":
        playerSynopsis[_0x753a5c(642) + "t"] = "";
        continue;
      case "5":
        state[_0x753a5c(560) + _0x753a5c(607)] = null;
        continue;
      case "6":
        tvSeriesForm[_0x753a5c(499)][_0x753a5c(735)] = _0x4c1c22[_0x753a5c(628)];
        continue;
    }
    break;
  }
}), playEpisodeButton[_0x594796(599) + _0x594796(455)](_0x594796(783), () => {
  const _0x51fbf8 = _0x594796, _0x489b3f = {mdVpn: function (_0x58024b, _0x2694db) {
    return _0x58024b && _0x2694db;
  }, EeWWh: function (_0x21cd70, _0x47191a) {
    return _0x21cd70(_0x47191a);
  }, zYmEa: _0x51fbf8(569) + _0x51fbf8(524) + _0x51fbf8(533) + _0x51fbf8(672) + _0x51fbf8(531), aLEQA: _0x51fbf8(569) + _0x51fbf8(707) + _0x51fbf8(473) + _0x51fbf8(700) + _0x51fbf8(437)}, _0x361813 = seasonNumberInput[_0x51fbf8(724)][_0x51fbf8(662)](), _0x5d1e9b = episodeNumberInput[_0x51fbf8(724)][_0x51fbf8(662)]();
  _0x489b3f[_0x51fbf8(444)](_0x361813, _0x5d1e9b) ? !_0x489b3f[_0x51fbf8(646)](isNaN, _0x361813) && !_0x489b3f[_0x51fbf8(646)](isNaN, _0x5d1e9b) ? playerIframe[_0x51fbf8(721)] = _0x51fbf8(426) + _0x51fbf8(758) + _0x51fbf8(683) + _0x51fbf8(590) + state[_0x51fbf8(560) + _0x51fbf8(607)] + "/" + _0x361813 + "/" + _0x5d1e9b : _0x489b3f[_0x51fbf8(646)](alert, _0x489b3f[_0x51fbf8(759)]) : _0x489b3f[_0x51fbf8(646)](alert, _0x489b3f[_0x51fbf8(493)]);
}), prevButton[_0x594796(599) + _0x594796(455)](_0x594796(783), () => {
  const _0x3a5310 = _0x594796, _0x2bf8ba = {QZSqR: function (_0x41ae27, _0x35c360) {
    return _0x41ae27 > _0x35c360;
  }, pLehV: function (_0x257399, _0x1725e4) {
    return _0x257399(_0x1725e4);
  }, rbFlV: function (_0x56c947, _0x1a4c73) {
    return _0x56c947 - _0x1a4c73;
  }};
  _0x2bf8ba[_0x3a5310(419)](state[_0x3a5310(421) + "e"], 1) && _0x2bf8ba[_0x3a5310(710)](updateState, {currentPage: _0x2bf8ba[_0x3a5310(429)](state[_0x3a5310(421) + "e"], 1)});
}), nextButton[_0x594796(599) + _0x594796(455)](_0x594796(783), () => {
  const _0x4ed695 = _0x594796, _0x330be1 = {DoxVX: function (_0x2242f9, _0xd3cbbd) {
    return _0x2242f9 < _0xd3cbbd;
  }, yWDms: function (_0x3ec2f7, _0x326231) {
    return _0x3ec2f7(_0x326231);
  }, pXIwV: function (_0x4a768b, _0x185755) {
    return _0x4a768b + _0x185755;
  }};
  _0x330be1[_0x4ed695(752)](state[_0x4ed695(421) + "e"], state[_0x4ed695(736)]) && _0x330be1[_0x4ed695(728)](updateState, {currentPage: _0x330be1[_0x4ed695(749)](state[_0x4ed695(421) + "e"], 1)});
}), document[_0x594796(584) + _0x594796(554)](_0x594796(790) + _0x594796(737))[_0x594796(599) + _0x594796(455)](_0x594796(783), () => {
  const _0x53afb0 = _0x594796, _0x444799 = {IcYSe: function (_0x210666, _0x3f291b) {
    return _0x210666(_0x3f291b);
  }, JWzNh: _0x53afb0(790) + _0x53afb0(441)};
  _0x444799[_0x53afb0(523)](updateState, {currentView: _0x444799[_0x53afb0(632)], currentPage: 1});
}), document[_0x594796(584) + _0x594796(554)](_0x594796(568) + _0x594796(722))[_0x594796(599) + _0x594796(455)](_0x594796(783), () => {
  const _0x1a9886 = _0x594796, _0x51ca5e = {DKEhS: function (_0x5f398e, _0x2d5301) {
    return _0x5f398e(_0x2d5301);
  }, mjaBX: _0x1a9886(568) + _0x1a9886(704)};
  _0x51ca5e[_0x1a9886(773)](updateState, {currentView: _0x51ca5e[_0x1a9886(548)], currentPage: 1});
}), document[_0x594796(584) + _0x594796(554)](_0x594796(555) + _0x594796(485) + "ab")[_0x594796(599) + _0x594796(455)](_0x594796(783), () => {
  const _0x5846af = _0x594796, _0x1709df = {oXvvV: function (_0xa6d27, _0x25d6f1) {
    return _0xa6d27(_0x25d6f1);
  }, dDiLM: _0x5846af(555) + _0x5846af(487)};
  _0x1709df[_0x5846af(566)](updateState, {currentView: _0x1709df[_0x5846af(622)], currentPage: 1});
}), document[_0x594796(584) + _0x594796(554)](_0x594796(718) + _0x594796(779))[_0x594796(599) + _0x594796(455)](_0x594796(783), () => {
  const _0x41e9dc = _0x594796, _0x2cdb5c = {DYgDz: function (_0x32c650, _0x1c0df0) {
    return _0x32c650(_0x1c0df0);
  }, CKfXx: _0x41e9dc(718) + _0x41e9dc(534)};
  _0x2cdb5c[_0x41e9dc(602)](updateState, {currentView: _0x2cdb5c[_0x41e9dc(708)], currentPage: 1});
}), document[_0x594796(584) + _0x594796(554)](_0x594796(410) + _0x594796(451))[_0x594796(599) + _0x594796(455)](_0x594796(783), () => {
  const _0x933829 = _0x594796, _0x37ca13 = {bmFdS: function (_0x5aba8d, _0x6bd010) {
    return _0x5aba8d(_0x6bd010);
  }, LPHfG: _0x933829(410)};
  _0x37ca13[_0x933829(466)](updateState, {currentView: _0x37ca13[_0x933829(424)], currentPage: 1});
}), document[_0x594796(584) + _0x594796(554)](_0x594796(504) + _0x594796(414))[_0x594796(599) + _0x594796(455)](_0x594796(783), () => {
  const _0x1add9d = _0x594796, _0x3d9aa8 = {qCOpL: function (_0x4ff3f9, _0x1ce460) {
    return _0x4ff3f9(_0x1ce460);
  }, EXCqJ: _0x1add9d(504) + "ay"};
  _0x3d9aa8[_0x1add9d(519)](updateState, {currentView: _0x3d9aa8[_0x1add9d(733)], currentPage: 1});
}), document[_0x594796(584) + _0x594796(554)](_0x594796(462))[_0x594796(599) + _0x594796(455)](_0x594796(783), () => {
  const _0x43c1e4 = _0x594796, _0x11a146 = {guPMc: function (_0x3717b0, _0x2033b0) {
    return _0x3717b0(_0x2033b0);
  }, sxeQh: _0x43c1e4(705)};
  _0x11a146[_0x43c1e4(680)](updateState, {currentView: _0x11a146[_0x43c1e4(521)], currentPage: 1});
}), document[_0x594796(584) + _0x594796(554)](_0x594796(718) + _0x594796(757))[_0x594796(599) + _0x594796(455)](_0x594796(783), () => {
  const _0x46b78e = _0x594796, _0x3551e9 = {anLPr: function (_0x3c12a5, _0x2fec94) {
    return _0x3c12a5(_0x2fec94);
  }, fXTlU: _0x46b78e(718) + "tv"};
  _0x3551e9[_0x46b78e(762)](updateState, {currentView: _0x3551e9[_0x46b78e(422)], currentPage: 1});
}), searchInput[_0x594796(599) + _0x594796(455)](_0x594796(403), _0x2f5eef => {
  const _0x4059c2 = _0x594796, _0x4b3b5b = {lXqTC: function (_0x3bed1c, _0x12d860) {
    return _0x3bed1c(_0x12d860);
  }, pXOxX: _0x4059c2(664), wRbQC: function (_0x5e1df8, _0x1080db) {
    return _0x5e1df8(_0x1080db);
  }, SoJVY: _0x4059c2(790) + _0x4059c2(441)}, _0x556b54 = _0x2f5eef[_0x4059c2(625)][_0x4059c2(724)][_0x4059c2(662)]();
  _0x556b54 ? _0x4b3b5b[_0x4059c2(657)](updateState, {currentView: _0x4b3b5b[_0x4059c2(539)], currentQuery: _0x556b54, currentPage: 1}) : _0x4b3b5b[_0x4059c2(463)](updateState, {currentView: _0x4b3b5b[_0x4059c2(416)], currentQuery: "", currentPage: 1});
});
function scrollToTop() {
  const _0x54315f = _0x594796, _0x137206 = {CfMiy: _0x54315f(691)};
  window[_0x54315f(726)]({top: 0, behavior: _0x137206[_0x54315f(715)]});
}
function toggleScrollToTopButton() {
  const _0x251260 = _0x594796, _0x4baec4 = {lnXpH: function (_0xf5b19e, _0x210211) {
    return _0xf5b19e > _0x210211;
  }, uVPiz: function (_0x528282, _0x64f859) {
    return _0x528282 > _0x64f859;
  }, Ztrfb: _0x251260(681), VtzqL: _0x251260(409)};
  _0x4baec4[_0x251260(685)](document[_0x251260(471)][_0x251260(400)], 20) || _0x4baec4[_0x251260(578)](document[_0x251260(747) + _0x251260(743)][_0x251260(400)], 20) ? scrollToTopButton[_0x251260(499)][_0x251260(735)] = _0x4baec4[_0x251260(456)] : scrollToTopButton[_0x251260(499)][_0x251260(735)] = _0x4baec4[_0x251260(574)];
}
window[_0x594796(599) + _0x594796(455)](_0x594796(598), toggleScrollToTopButton), scrollToTopButton[_0x594796(599) + _0x594796(455)](_0x594796(783), scrollToTop), fetchGenres(), updateState({currentView: _0x594796(790) + _0x594796(441), currentPage: 1});
