const _0x408d4b = _0x2cdb;
(function (_0x1604af, _0x326433) {
  const _0x227526 = _0x2cdb, _0x3c13f2 = _0x1604af();
  while (true) {
    try {
      const _0x444cff = parseInt(_0x227526(447)) / 1 + -parseInt(_0x227526(487)) / 2 * (parseInt(_0x227526(346)) / 3) + -parseInt(_0x227526(449)) / 4 * (parseInt(_0x227526(636)) / 5) + -parseInt(_0x227526(360)) / 6 * (parseInt(_0x227526(554)) / 7) + parseInt(_0x227526(330)) / 8 * (parseInt(_0x227526(616)) / 9) + parseInt(_0x227526(603)) / 10 * (-parseInt(_0x227526(372)) / 11) + parseInt(_0x227526(673)) / 12;
      if (_0x444cff === _0x326433) break; else _0x3c13f2.push(_0x3c13f2.shift());
    } catch (_0x18cefe) {
      _0x3c13f2.push(_0x3c13f2.shift());
    }
  }
}(_0x11af, 532731));
const API_KEY = _0x408d4b(341) + _0x408d4b(642) + _0x408d4b(549) + "70", BASE_URL = _0x408d4b(338) + _0x408d4b(612) + _0x408d4b(534), IMAGE_PATH = _0x408d4b(676) + _0x408d4b(696) + _0x408d4b(425) + "0", PLACEHOLDER_IMG = _0x408d4b(510) + _0x408d4b(517) + _0x408d4b(390) + _0x408d4b(619) + _0x408d4b(594) + _0x408d4b(413), moviesContainer = document[_0x408d4b(508) + _0x408d4b(698)](_0x408d4b(459)), loading = document[_0x408d4b(508) + _0x408d4b(698)](_0x408d4b(584)), noResults = document[_0x408d4b(456) + _0x408d4b(654)](_0x408d4b(313) + "s"), backToTopBtn = document[_0x408d4b(508) + _0x408d4b(698)](_0x408d4b(471)), searchInput = document[_0x408d4b(508) + _0x408d4b(698)](_0x408d4b(693) + "t"), genreSelect = document[_0x408d4b(508) + _0x408d4b(698)](_0x408d4b(533) + "t"), contentTypeSelect = document[_0x408d4b(508) + _0x408d4b(698)](_0x408d4b(574) + "e"), darkModeToggle = document[_0x408d4b(508) + _0x408d4b(698)](_0x408d4b(335) + _0x408d4b(364)), joinTelegramBtn = document[_0x408d4b(508) + _0x408d4b(698)](_0x408d4b(433) + _0x408d4b(379)), seasonInput = document[_0x408d4b(508) + _0x408d4b(698)](_0x408d4b(323) + "t"), episodeInput = document[_0x408d4b(508) + _0x408d4b(698)](_0x408d4b(468) + "ut"), playEpisodeBtn = document[_0x408d4b(508) + _0x408d4b(698)](_0x408d4b(652) + _0x408d4b(458)), seasonEpisodeControls = document[_0x408d4b(508) + _0x408d4b(698)](_0x408d4b(460) + _0x408d4b(496) + "s"), lastWatchedInfo = document[_0x408d4b(508) + _0x408d4b(698)](_0x408d4b(626) + _0x408d4b(699)), modalOverlay = document[_0x408d4b(508) + _0x408d4b(698)](_0x408d4b(451) + "ay"), modalHeader = document[_0x408d4b(508) + _0x408d4b(698)](_0x408d4b(640) + "r"), modalOverview = document[_0x408d4b(508) + _0x408d4b(698)](_0x408d4b(649) + _0x408d4b(476)), modalDetails = document[_0x408d4b(508) + _0x408d4b(698)](_0x408d4b(515) + "ls"), modalPlayer = document[_0x408d4b(508) + _0x408d4b(698)](_0x408d4b(333) + "r"), modalCloseBtn = document[_0x408d4b(508) + _0x408d4b(698)](_0x408d4b(559) + _0x408d4b(600)), trailerBtn = document[_0x408d4b(508) + _0x408d4b(698)](_0x408d4b(339));
let currentPage = 1, totalPages = 1, currentQuery = "", currentGenre = "", currentContentType = _0x408d4b(472), isSearchMode = false, genreMap = {}, trailerKey = null, isTrailerPlaying = false, currentItem = null;
function debounce(_0x192539, _0x2eedad) {
  const _0x526ae9 = {XxqnZ: function (_0x1cdf6c, _0x171f87) {
    return _0x1cdf6c(_0x171f87);
  }, LgHYD: function (_0x4f92cb, _0x4b6402, _0xad3c9d) {
    return _0x4f92cb(_0x4b6402, _0xad3c9d);
  }};
  let _0x6eff8;
  return function (..._0x3fa56c) {
    const _0x108891 = _0x2cdb;
    _0x526ae9[_0x108891(318)](clearTimeout, _0x6eff8), _0x6eff8 = _0x526ae9[_0x108891(479)](setTimeout, () => {
      const _0x4ff3e9 = _0x108891;
      _0x192539[_0x4ff3e9(657)](this, _0x3fa56c);
    }, _0x2eedad);
  };
}
async function fetchGenres() {
  const _0x5e59ee = _0x408d4b, _0x2e66b5 = {GyeeJ: function (_0x31e4f7, _0x54effc) {
    return _0x31e4f7(_0x54effc);
  }, mZChb: function (_0x4c04ed, _0x59e465) {
    return _0x4c04ed(_0x59e465);
  }, QtjMf: function (_0xd1936f) {
    return _0xd1936f();
  }, YPcLC: _0x5e59ee(528) + _0x5e59ee(464) + "s:"};
  try {
    const [_0x234a0e, _0x352885] = await Promise[_0x5e59ee(682)]([_0x2e66b5[_0x5e59ee(411)](fetch, BASE_URL + (_0x5e59ee(577) + _0x5e59ee(606) + _0x5e59ee(671)) + API_KEY + (_0x5e59ee(514) + _0x5e59ee(483))), _0x2e66b5[_0x5e59ee(617)](fetch, BASE_URL + (_0x5e59ee(625) + _0x5e59ee(473) + _0x5e59ee(586)) + API_KEY + (_0x5e59ee(514) + _0x5e59ee(483)))]), _0x5c74cc = await _0x234a0e[_0x5e59ee(539)](), _0x342074 = await _0x352885[_0x5e59ee(539)](), _0x47ca49 = {};
    _0x5c74cc[_0x5e59ee(462)][_0x5e59ee(426)](_0x5bcaf2 => {
      const _0x6a4e38 = _0x5e59ee;
      _0x47ca49[_0x6a4e38(648) + _0x5bcaf2.id] = _0x5bcaf2[_0x6a4e38(544)];
    }), _0x342074[_0x5e59ee(462)][_0x5e59ee(426)](_0x1a70a8 => {
      const _0x535394 = _0x5e59ee;
      _0x47ca49[_0x535394(659) + _0x1a70a8.id] = _0x1a70a8[_0x535394(544)];
    }), genreMap = _0x47ca49, _0x2e66b5[_0x5e59ee(418)](populateGenreOptions);
  } catch (_0x2700bb) {
    console[_0x5e59ee(541)](_0x2e66b5[_0x5e59ee(639)], _0x2700bb);
  }
}
function populateGenreOptions() {
  const _0x46479f = _0x408d4b, _0x5df4f7 = {lDLAS: _0x46479f(463) + _0x46479f(615) + _0x46479f(645) + _0x46479f(585), CFBME: function (_0x67dc69, _0x525d70) {
    return _0x67dc69 + _0x525d70;
  }, Txgar: _0x46479f(383)};
  genreSelect[_0x46479f(587)] = _0x5df4f7[_0x46479f(691)];
  const _0x195d3d = _0x5df4f7[_0x46479f(489)](currentContentType, "-"), _0x34590f = new Set;
  for (const _0x1f8b59 in genreMap) {
    if (_0x1f8b59[_0x46479f(448)](_0x195d3d)) {
      const _0x343a61 = _0x1f8b59[_0x46479f(632)]("-")[1], _0x5dcabc = genreMap[_0x1f8b59];
      if (!_0x34590f[_0x46479f(571)](_0x343a61)) {
        const _0x51b5fd = document[_0x46479f(402) + _0x46479f(522)](_0x5df4f7[_0x46479f(627)]);
        _0x51b5fd[_0x46479f(580)] = _0x343a61, _0x51b5fd[_0x46479f(317) + "t"] = _0x5dcabc, genreSelect[_0x46479f(332) + "d"](_0x51b5fd), _0x34590f[_0x46479f(530)](_0x343a61);
      }
    }
  }
}
function buildEndpoint(_0x2abc4f = currentPage) {
  const _0x5508ca = _0x408d4b, _0x2a47dc = {bPxlA: function (_0x2d7f04, _0x15eae4) {
    return _0x2d7f04 > _0x15eae4;
  }, IdfwL: function (_0x152409, _0x545823) {
    return _0x152409(_0x545823);
  }};
  let _0x28ae24 = "";
  return isSearchMode && _0x2a47dc[_0x5508ca(480)](currentQuery[_0x5508ca(641)], 0) ? _0x28ae24 = BASE_URL + _0x5508ca(647) + currentContentType + _0x5508ca(521) + API_KEY + (_0x5508ca(514) + _0x5508ca(548) + "y=") + _0x2a47dc[_0x5508ca(481)](encodeURIComponent, currentQuery) + _0x5508ca(509) + _0x2abc4f + (_0x5508ca(535) + _0x5508ca(336)) : (_0x28ae24 = BASE_URL + _0x5508ca(350) + currentContentType + _0x5508ca(521) + API_KEY + (_0x5508ca(514) + _0x5508ca(365) + _0x5508ca(499) + _0x5508ca(491) + _0x5508ca(482)) + _0x2abc4f, currentGenre && (_0x28ae24 += _0x5508ca(576) + _0x5508ca(665) + currentGenre)), _0x28ae24;
}
function showContent(_0x34ed4f) {
  const _0x5f51dd = _0x408d4b, _0x3851ac = {OtQOY: function (_0x506017, _0x3ece27) {
    return _0x506017 === _0x3ece27;
  }, DlUuZ: _0x5f51dd(415), RvqQO: function (_0x39f42e, _0x39b515) {
    return _0x39f42e(_0x39b515);
  }, ZsXSy: function (_0x385778, _0x26a0d0) {
    return _0x385778 + _0x26a0d0;
  }, klLRZ: _0x5f51dd(637), LijMs: _0x5f51dd(599), IcLxr: _0x5f51dd(513), NxTxC: _0x5f51dd(527), dwnDU: _0x5f51dd(661) + _0x5f51dd(503), lWMSA: _0x5f51dd(351), pLqhr: _0x5f51dd(431), IRLrf: _0x5f51dd(396) + _0x5f51dd(439) + _0x5f51dd(593), lzwMK: _0x5f51dd(414), rGiAB: _0x5f51dd(667), KQWTX: _0x5f51dd(366), qlirx: _0x5f51dd(643)};
  moviesContainer[_0x5f51dd(587)] = "";
  if (!_0x34ed4f || _0x3851ac[_0x5f51dd(581)](_0x34ed4f[_0x5f51dd(641)], 0)) {
    noResults[_0x5f51dd(655)][_0x5f51dd(412)] = _0x3851ac[_0x5f51dd(369)];
    return;
  }
  noResults[_0x5f51dd(655)][_0x5f51dd(412)] = _0x3851ac[_0x5f51dd(347)], _0x34ed4f[_0x5f51dd(426)](_0x1d6988 => {
    const _0x13bf55 = _0x5f51dd, _0x5131b7 = {waYCD: function (_0x1cd048, _0x4547fa) {
      const _0x5949e3 = _0x2cdb;
      return _0x3851ac[_0x5949e3(581)](_0x1cd048, _0x4547fa);
    }, vnHqB: _0x3851ac[_0x13bf55(377)], GUsRY: function (_0x42f92d, _0x3e4246) {
      const _0x16478e = _0x13bf55;
      return _0x3851ac[_0x16478e(581)](_0x42f92d, _0x3e4246);
    }, mvQYp: function (_0xd23d74, _0x985332) {
      const _0x359a7d = _0x13bf55;
      return _0x3851ac[_0x359a7d(342)](_0xd23d74, _0x985332);
    }}, _0x27cb56 = (_0x1d6988[_0x13bf55(525)] || [])[_0x13bf55(601)](_0x3a21ca => genreMap[currentContentType + "-" + _0x3a21ca])[_0x13bf55(370)](Boolean)[_0x13bf55(424)](", "), _0x17bde5 = _0x1d6988[_0x13bf55(465) + "h"] ? _0x3851ac[_0x13bf55(376)](IMAGE_PATH, _0x1d6988[_0x13bf55(465) + "h"]) : PLACEHOLDER_IMG, _0x5d0c8d = _0x1d6988[_0x13bf55(523)] || _0x1d6988[_0x13bf55(544)] || _0x3851ac[_0x13bf55(532)], _0x4ae9c8 = _0x1d6988[_0x13bf55(434) + "ge"] ? _0x1d6988[_0x13bf55(434) + "ge"][_0x13bf55(430)](1) : _0x3851ac[_0x13bf55(582)], _0x99ac6a = _0x1d6988[_0x13bf55(337) + "te"] || _0x1d6988[_0x13bf55(589) + _0x13bf55(441)] || _0x3851ac[_0x13bf55(438)], _0xe15b7a = document[_0x13bf55(402) + _0x13bf55(522)](_0x3851ac[_0x13bf55(371)]);
    _0xe15b7a[_0x13bf55(695)] = _0x3851ac[_0x13bf55(569)], _0xe15b7a[_0x13bf55(590) + "te"](_0x3851ac[_0x13bf55(679)], "0"), _0xe15b7a[_0x13bf55(590) + "te"](_0x3851ac[_0x13bf55(511)], _0x5d0c8d + _0x13bf55(572) + _0x4ae9c8 + (_0x13bf55(484) + _0x13bf55(685)) + _0x99ac6a), _0xe15b7a[_0x13bf55(587)] = _0x13bf55(322) + _0x13bf55(651) + '"' + _0x17bde5 + (_0x13bf55(536) + _0x13bf55(545)) + _0x5d0c8d + (_0x13bf55(560) + _0x13bf55(658) + _0x13bf55(361) + _0x13bf55(564) + _0x13bf55(373) + _0x13bf55(435) + '"') + (_0x1d6988[_0x13bf55(357)] || _0x3851ac[_0x13bf55(573)]) + (_0x13bf55(345) + _0x13bf55(361) + _0x13bf55(629) + _0x13bf55(422) + _0x13bf55(355)) + _0x5d0c8d + (_0x13bf55(662) + _0x13bf55(492) + _0x13bf55(401) + _0x13bf55(660)) + _0x4ae9c8 + _0x13bf55(578) + _0x99ac6a + (_0x13bf55(662) + _0x13bf55(492) + _0x13bf55(401) + _0x13bf55(454)) + _0x27cb56 + (_0x13bf55(662) + _0x13bf55(389) + _0x13bf55(680) + "  "), _0xe15b7a[_0x13bf55(354) + _0x13bf55(570)](_0x3851ac[_0x13bf55(375)], () => openModal(_0x1d6988)), _0xe15b7a[_0x13bf55(354) + _0x13bf55(570)](_0x3851ac[_0x13bf55(324)], _0x28f7a7 => {
      const _0x16600c = _0x13bf55;
      (_0x5131b7[_0x16600c(326)](_0x28f7a7[_0x16600c(409)], _0x5131b7[_0x16600c(315)]) || _0x5131b7[_0x16600c(349)](_0x28f7a7[_0x16600c(409)], " ")) && (_0x28f7a7[_0x16600c(368) + _0x16600c(562)](), _0x5131b7[_0x16600c(623)](openModal, _0x1d6988));
    }), moviesContainer[_0x13bf55(332) + "d"](_0xe15b7a);
  });
}
function appendContent(_0xf0b546) {
  const _0x139dd2 = _0x408d4b, _0x599a3f = {pXGzj: function (_0x7e0dbb, _0x308cd6) {
    return _0x7e0dbb === _0x308cd6;
  }, nYcke: _0x139dd2(415), mUkii: function (_0x5c289c, _0x5a671a) {
    return _0x5c289c(_0x5a671a);
  }, iltGf: function (_0x2a2097, _0x245fcc) {
    return _0x2a2097 + _0x245fcc;
  }, CqPYd: _0x139dd2(637), wKDhq: _0x139dd2(599), vsVip: _0x139dd2(513), vENPF: _0x139dd2(527), lKCRr: _0x139dd2(661) + _0x139dd2(503), VfDHT: _0x139dd2(351), Ptebb: _0x139dd2(431), mQvyd: _0x139dd2(396) + _0x139dd2(439) + _0x139dd2(593), UjllV: _0x139dd2(414), vNRQw: _0x139dd2(667), tznrE: function (_0x2420ab, _0x434080) {
    return _0x2420ab === _0x434080;
  }};
  if (!_0xf0b546 || _0x599a3f[_0x139dd2(596)](_0xf0b546[_0x139dd2(641)], 0)) return;
  _0xf0b546[_0x139dd2(426)](_0xeb075f => {
    const _0x194e0c = _0x139dd2, _0x4a2d07 = (_0xeb075f[_0x194e0c(525)] || [])[_0x194e0c(601)](_0x391f4c => genreMap[currentContentType + "-" + _0x391f4c])[_0x194e0c(370)](Boolean)[_0x194e0c(424)](", "), _0x58e603 = _0xeb075f[_0x194e0c(465) + "h"] ? _0x599a3f[_0x194e0c(692)](IMAGE_PATH, _0xeb075f[_0x194e0c(465) + "h"]) : PLACEHOLDER_IMG, _0x4d349a = _0xeb075f[_0x194e0c(523)] || _0xeb075f[_0x194e0c(544)] || _0x599a3f[_0x194e0c(501)], _0xf776c5 = _0xeb075f[_0x194e0c(434) + "ge"] ? _0xeb075f[_0x194e0c(434) + "ge"][_0x194e0c(430)](1) : _0x599a3f[_0x194e0c(325)], _0x101e98 = _0xeb075f[_0x194e0c(337) + "te"] || _0xeb075f[_0x194e0c(589) + _0x194e0c(441)] || _0x599a3f[_0x194e0c(367)], _0x56cf0f = document[_0x194e0c(402) + _0x194e0c(522)](_0x599a3f[_0x194e0c(512)]);
    _0x56cf0f[_0x194e0c(695)] = _0x599a3f[_0x194e0c(520)], _0x56cf0f[_0x194e0c(590) + "te"](_0x599a3f[_0x194e0c(674)], "0"), _0x56cf0f[_0x194e0c(590) + "te"](_0x599a3f[_0x194e0c(519)], _0x4d349a + _0x194e0c(572) + _0xf776c5 + (_0x194e0c(484) + _0x194e0c(685)) + _0x101e98), _0x56cf0f[_0x194e0c(587)] = _0x194e0c(322) + _0x194e0c(651) + '"' + _0x58e603 + (_0x194e0c(536) + _0x194e0c(545)) + _0x4d349a + (_0x194e0c(560) + _0x194e0c(658) + _0x194e0c(361) + _0x194e0c(564) + _0x194e0c(373) + _0x194e0c(435) + '"') + (_0xeb075f[_0x194e0c(357)] || _0x599a3f[_0x194e0c(388)]) + (_0x194e0c(345) + _0x194e0c(568) + _0x194e0c(410) + _0x194e0c(697)) + _0x4d349a + (_0x194e0c(662) + _0x194e0c(492) + _0x194e0c(401) + _0x194e0c(660)) + _0xf776c5 + _0x194e0c(578) + _0x101e98 + (_0x194e0c(662) + _0x194e0c(492) + _0x194e0c(401) + _0x194e0c(454)) + _0x4a2d07 + (_0x194e0c(662) + _0x194e0c(389) + _0x194e0c(680) + "  "), _0x56cf0f[_0x194e0c(354) + _0x194e0c(570)](_0x599a3f[_0x194e0c(524)], () => openModal(_0xeb075f)), _0x56cf0f[_0x194e0c(354) + _0x194e0c(570)](_0x599a3f[_0x194e0c(498)], _0x1c1992 => {
      const _0x3b0bb9 = _0x194e0c;
      (_0x599a3f[_0x3b0bb9(485)](_0x1c1992[_0x3b0bb9(409)], _0x599a3f[_0x3b0bb9(567)]) || _0x599a3f[_0x3b0bb9(485)](_0x1c1992[_0x3b0bb9(409)], " ")) && (_0x1c1992[_0x3b0bb9(368) + _0x3b0bb9(562)](), _0x599a3f[_0x3b0bb9(467)](openModal, _0xeb075f));
    }), moviesContainer[_0x194e0c(332) + "d"](_0x56cf0f);
  });
}
async function fetchContent() {
  const _0x40fd17 = _0x408d4b, _0x41a1f3 = {EsiXv: _0x40fd17(366), cDJgp: _0x40fd17(643), xkleD: function (_0x43e627, _0x184ac8) {
    return _0x43e627 === _0x184ac8;
  }, fnClS: function (_0x304a6c) {
    return _0x304a6c();
  }, CExDi: function (_0x4e3d8d, _0x106335) {
    return _0x4e3d8d(_0x106335);
  }, EtkQe: function (_0x367efe, _0x495adc) {
    return _0x367efe === _0x495adc;
  }, hpIUz: _0x40fd17(528) + _0x40fd17(387) + _0x40fd17(420), ceSgm: _0x40fd17(624) + _0x40fd17(421) + _0x40fd17(638) + _0x40fd17(507) + _0x40fd17(442) + _0x40fd17(650) + _0x40fd17(359)};
  loading[_0x40fd17(655)][_0x40fd17(412)] = _0x41a1f3[_0x40fd17(327)], noResults[_0x40fd17(655)][_0x40fd17(412)] = _0x41a1f3[_0x40fd17(500)];
  _0x41a1f3[_0x40fd17(428)](currentPage, 1) && (moviesContainer[_0x40fd17(587)] = "");
  try {
    const _0x5ecf6c = _0x41a1f3[_0x40fd17(575)](buildEndpoint), _0x3a6604 = await _0x41a1f3[_0x40fd17(686)](fetch, _0x5ecf6c), _0x2abdc5 = await _0x3a6604[_0x40fd17(539)]();
    totalPages = _0x2abdc5[_0x40fd17(550) + "s"] || 1, !_0x2abdc5[_0x40fd17(453)] || _0x41a1f3[_0x40fd17(428)](_0x2abdc5[_0x40fd17(453)][_0x40fd17(641)], 0) ? _0x41a1f3[_0x40fd17(552)](currentPage, 1) && (noResults[_0x40fd17(655)][_0x40fd17(412)] = _0x41a1f3[_0x40fd17(327)]) : _0x41a1f3[_0x40fd17(428)](currentPage, 1) ? _0x41a1f3[_0x40fd17(686)](showContent, _0x2abdc5[_0x40fd17(453)]) : _0x41a1f3[_0x40fd17(686)](appendContent, _0x2abdc5[_0x40fd17(453)]);
  } catch (_0x42b61e) {
    console[_0x40fd17(541)](_0x41a1f3[_0x40fd17(690)], _0x42b61e), _0x41a1f3[_0x40fd17(428)](currentPage, 1) && (noResults[_0x40fd17(655)][_0x40fd17(412)] = _0x41a1f3[_0x40fd17(327)], noResults[_0x40fd17(317) + "t"] = _0x41a1f3[_0x40fd17(432)]);
  } finally {
    loading[_0x40fd17(655)][_0x40fd17(412)] = _0x41a1f3[_0x40fd17(500)];
  }
}
const handleSearch = debounce(() => {
  const _0x258bb0 = _0x408d4b, _0x51f97e = {VIDXp: function (_0x6bd17f, _0x3a6329) {
    return _0x6bd17f > _0x3a6329;
  }, aHouT: function (_0x766be2) {
    return _0x766be2();
  }};
  currentQuery = searchInput[_0x258bb0(580)][_0x258bb0(319)](), currentPage = 1, isSearchMode = _0x51f97e[_0x258bb0(399)](currentQuery[_0x258bb0(641)], 0), _0x51f97e[_0x258bb0(446)](fetchContent);
}, 300);
searchInput[_0x408d4b(354) + _0x408d4b(570)](_0x408d4b(620), handleSearch), genreSelect[_0x408d4b(354) + _0x408d4b(570)](_0x408d4b(381), () => {
  const _0x22c9d8 = _0x408d4b, _0x28ad40 = {TMzSY: function (_0x31651c) {
    return _0x31651c();
  }};
  currentGenre = genreSelect[_0x22c9d8(580)], currentPage = 1, _0x28ad40[_0x22c9d8(427)](fetchContent);
}), contentTypeSelect[_0x408d4b(354) + _0x408d4b(570)](_0x408d4b(381), () => {
  const _0x43e1ee = _0x408d4b, _0x12a8bc = {crNsB: _0x43e1ee(444) + "1", MnqtT: function (_0x403937) {
    return _0x403937();
  }}, _0xd8df78 = _0x12a8bc[_0x43e1ee(566)][_0x43e1ee(632)]("|");
  let _0x5c1f1c = 0;
  while (true) {
    switch (_0xd8df78[_0x5c1f1c++]) {
      case "0":
        currentPage = 1;
        continue;
      case "1":
        _0x12a8bc[_0x43e1ee(437)](fetchContent);
        continue;
      case "2":
        _0x12a8bc[_0x43e1ee(437)](populateGenreOptions);
        continue;
      case "3":
        currentContentType = contentTypeSelect[_0x43e1ee(580)];
        continue;
      case "4":
        currentGenre = "";
        continue;
      case "5":
        genreSelect[_0x43e1ee(580)] = "";
        continue;
    }
    break;
  }
}), backToTopBtn[_0x408d4b(354) + _0x408d4b(570)](_0x408d4b(414), () => {
  const _0x50fae5 = _0x408d4b, _0x3a864f = {ViSlg: _0x50fae5(408)};
  window[_0x50fae5(531)]({top: 0, behavior: _0x3a864f[_0x50fae5(407)]});
}), window[_0x408d4b(354) + _0x408d4b(570)](_0x408d4b(417), () => {
  const _0xd48d90 = _0x408d4b, _0x47eb27 = {jQdsD: function (_0x325ea1, _0x28c26b) {
    return _0x325ea1 > _0x28c26b;
  }, ZyFGZ: _0xd48d90(366), tvrDs: _0xd48d90(643), lJAcL: function (_0xcd9e7b, _0x3ba31d) {
    return _0xcd9e7b >= _0x3ba31d;
  }, Yzxpr: function (_0x1bc3d3, _0x24e48a) {
    return _0x1bc3d3 + _0x24e48a;
  }, Edfhn: function (_0x15d5c8, _0x154d29) {
    return _0x15d5c8 - _0x154d29;
  }, kMgge: function (_0x5c7b26, _0x48f500) {
    return _0x5c7b26 < _0x48f500;
  }, nTtYc: function (_0x5b7cf5, _0x308f5e) {
    return _0x5b7cf5 === _0x308f5e;
  }, weafa: function (_0x56a18e) {
    return _0x56a18e();
  }};
  _0x47eb27[_0xd48d90(621)](window[_0xd48d90(490)], 300) ? backToTopBtn[_0xd48d90(655)][_0xd48d90(412)] = _0x47eb27[_0xd48d90(393)] : backToTopBtn[_0xd48d90(655)][_0xd48d90(412)] = _0x47eb27[_0xd48d90(497)], _0x47eb27[_0xd48d90(477)](_0x47eb27[_0xd48d90(331)](window[_0xd48d90(344) + "t"], window[_0xd48d90(490)]), _0x47eb27[_0xd48d90(694)](document[_0xd48d90(378)][_0xd48d90(505) + "ht"], 500)) && _0x47eb27[_0xd48d90(557)](currentPage, totalPages) && _0x47eb27[_0xd48d90(588)](loading[_0xd48d90(655)][_0xd48d90(412)], _0x47eb27[_0xd48d90(497)]) && (currentPage++, _0x47eb27[_0xd48d90(538)](fetchContent));
});
function loadDarkModeSetting() {
  const _0x4fd9cb = _0x408d4b, _0x510b13 = {pGzDM: function (_0xaf6260, _0x55970c) {
    return _0xaf6260 === _0x55970c;
  }, GPuBG: _0x4fd9cb(416), PlClQ: _0x4fd9cb(320), CrPsX: _0x4fd9cb(633), RrtlH: _0x4fd9cb(613) + "ed", pXTLy: _0x4fd9cb(518)};
  _0x510b13[_0x4fd9cb(537)](localStorage[_0x4fd9cb(591)](_0x510b13[_0x4fd9cb(678)]), _0x510b13[_0x4fd9cb(563)]) && (document[_0x4fd9cb(378)][_0x4fd9cb(395)][_0x4fd9cb(530)](_0x510b13[_0x4fd9cb(622)]), darkModeToggle[_0x4fd9cb(590) + "te"](_0x510b13[_0x4fd9cb(631)], _0x510b13[_0x4fd9cb(312)]), darkModeToggle[_0x4fd9cb(317) + "t"] = "☀️");
}
loadDarkModeSetting(), darkModeToggle[_0x408d4b(354) + _0x408d4b(570)](_0x408d4b(414), () => {
  const _0x46f370 = _0x408d4b, _0xb92784 = {oYIPm: _0x46f370(633), sPTsK: _0x46f370(613) + "ed", UnLwL: _0x46f370(416), oQbau: _0x46f370(320), ZRrOZ: _0x46f370(494)};
  document[_0x46f370(378)][_0x46f370(395)][_0x46f370(356)](_0xb92784[_0x46f370(436)]);
  const _0x4f6c6a = document[_0x46f370(378)][_0x46f370(395)][_0x46f370(684)](_0xb92784[_0x46f370(436)]);
  darkModeToggle[_0x46f370(590) + "te"](_0xb92784[_0x46f370(384)], _0x4f6c6a[_0x46f370(611)]()), darkModeToggle[_0x46f370(317) + "t"] = _0x4f6c6a ? "☀️" : "🌙", localStorage[_0x46f370(429)](_0xb92784[_0x46f370(504)], _0x4f6c6a ? _0xb92784[_0x46f370(592)] : _0xb92784[_0x46f370(443)]);
}), joinTelegramBtn[_0x408d4b(354) + _0x408d4b(570)](_0x408d4b(414), () => {
  const _0x22ae97 = _0x408d4b, _0x1751b4 = {dqxlW: _0x22ae97(565) + _0x22ae97(666) + _0x22ae97(553), XJCFu: _0x22ae97(321), Fwfln: _0x22ae97(316)};
  window[_0x22ae97(403)](_0x1751b4[_0x22ae97(493)], _0x1751b4[_0x22ae97(353)], _0x1751b4[_0x22ae97(470)]);
});
async function fetchTrailer(_0x33e539, _0x5d032a) {
  const _0x441dac = _0x408d4b, _0x44cfaa = {JsQvc: function (_0x2b19f4, _0x1d7325) {
    return _0x2b19f4(_0x1d7325);
  }, OHKkV: function (_0x1b68c4, _0x57e258) {
    return _0x1b68c4 > _0x57e258;
  }, ntgaw: _0x441dac(528) + _0x441dac(455) + _0x441dac(598)};
  try {
    const _0x40f0ea = await _0x44cfaa[_0x441dac(386)](fetch, BASE_URL + "/" + _0x5d032a + "/" + _0x33e539 + (_0x441dac(404) + _0x441dac(671)) + API_KEY + (_0x441dac(514) + _0x441dac(483))), _0x1c3299 = await _0x40f0ea[_0x441dac(539)]();
    if (_0x1c3299[_0x441dac(453)] && _0x44cfaa[_0x441dac(385)](_0x1c3299[_0x441dac(453)][_0x441dac(641)], 0)) {
      const _0x27e2a0 = _0x1c3299[_0x441dac(453)][_0x441dac(668)](_0x19cd9f => _0x19cd9f[_0x441dac(423)] === _0x441dac(670) && _0x19cd9f[_0x441dac(440)] === _0x441dac(683) && _0x19cd9f[_0x441dac(677)] === true) || _0x1c3299[_0x441dac(453)][_0x441dac(668)](_0x48859d => _0x48859d[_0x441dac(423)] === _0x441dac(670) && _0x48859d[_0x441dac(440)] === _0x441dac(683));
      if (_0x27e2a0) return _0x27e2a0[_0x441dac(409)];
    }
    return null;
  } catch (_0x4c4828) {
    return console[_0x441dac(541)](_0x44cfaa[_0x441dac(634)], _0x4c4828), null;
  }
}
async function openModal(_0x3a4690) {
  const _0x1651eb = _0x408d4b, _0x5a7a42 = {ErUhY: _0x1651eb(637), rwXuK: _0x1651eb(396) + _0x1651eb(439) + _0x1651eb(593), rbeWj: _0x1651eb(599), iHXYJ: _0x1651eb(513), qMUSP: _0x1651eb(478) + _0x1651eb(445), oGUfE: function (_0x10aef9, _0x519139, _0x30e84b) {
    return _0x10aef9(_0x519139, _0x30e84b);
  }, ODLUE: function (_0x45c6e9, _0x8b795f) {
    return _0x45c6e9 === _0x8b795f;
  }, LqHYu: _0x1651eb(366), BDvfP: _0x1651eb(643), VyuKn: _0x1651eb(363)};
  currentItem = _0x3a4690, modalHeader[_0x1651eb(317) + "t"] = _0x3a4690[_0x1651eb(523)] || _0x3a4690[_0x1651eb(544)] || _0x5a7a42[_0x1651eb(669)], modalOverview[_0x1651eb(317) + "t"] = _0x3a4690[_0x1651eb(357)] || _0x5a7a42[_0x1651eb(614)];
  const _0x276024 = _0x3a4690[_0x1651eb(434) + "ge"] ? _0x3a4690[_0x1651eb(434) + "ge"][_0x1651eb(430)](1) : _0x5a7a42[_0x1651eb(602)], _0x27bcd2 = _0x3a4690[_0x1651eb(337) + "te"] || _0x3a4690[_0x1651eb(589) + _0x1651eb(441)] || _0x5a7a42[_0x1651eb(406)], _0x5adc0f = (_0x3a4690[_0x1651eb(525)] || [])[_0x1651eb(601)](_0x20c2da => genreMap[currentContentType + "-" + _0x20c2da])[_0x1651eb(370)](Boolean);
  modalDetails[_0x1651eb(587)] = _0x1651eb(561) + _0x1651eb(543) + ": " + _0x276024 + (_0x1651eb(688) + _0x1651eb(516) + _0x1651eb(628) + ": ") + _0x27bcd2 + (_0x1651eb(688) + _0x1651eb(334) + _0x1651eb(556)) + _0x5adc0f + (_0x1651eb(688) + " "), trailerKey = null, isTrailerPlaying = false, trailerBtn[_0x1651eb(317) + "t"] = _0x5a7a42[_0x1651eb(644)], trailerBtn[_0x1651eb(494)] = true, trailerKey = await _0x5a7a42[_0x1651eb(469)](fetchTrailer, _0x3a4690.id, currentContentType);
  trailerKey ? trailerBtn[_0x1651eb(494)] = false : trailerBtn[_0x1651eb(494)] = true;
  if (_0x5a7a42[_0x1651eb(486)](currentContentType, "tv")) {
    seasonEpisodeControls[_0x1651eb(655)][_0x1651eb(412)] = _0x5a7a42[_0x1651eb(635)];
    const _0x4b8e5a = JSON[_0x1651eb(452)](localStorage[_0x1651eb(591)](_0x1651eb(659) + _0x3a4690.id) || "{}"), _0x42f94c = _0x4b8e5a[_0x1651eb(663)] || 1, _0x27e549 = _0x4b8e5a[_0x1651eb(607)] || 1;
    seasonInput[_0x1651eb(580)] = _0x42f94c, episodeInput[_0x1651eb(580)] = _0x27e549, lastWatchedInfo[_0x1651eb(317) + "t"] = _0x1651eb(555) + _0x1651eb(526) + " " + _0x42f94c + _0x1651eb(540) + _0x27e549, modalPlayer[_0x1651eb(579)] = _0x1651eb(547) + _0x1651eb(461) + _0x1651eb(689) + _0x1651eb(551) + _0x3a4690.id + "/" + _0x42f94c + "/" + _0x27e549;
  } else seasonEpisodeControls[_0x1651eb(655)][_0x1651eb(412)] = _0x5a7a42[_0x1651eb(340)], lastWatchedInfo[_0x1651eb(317) + "t"] = "", modalPlayer[_0x1651eb(579)] = _0x1651eb(547) + _0x1651eb(461) + _0x1651eb(474) + _0x1651eb(502) + _0x3a4690.id;
  modalOverlay[_0x1651eb(655)][_0x1651eb(412)] = _0x5a7a42[_0x1651eb(635)], modalOverlay[_0x1651eb(558)](), document[_0x1651eb(378)][_0x1651eb(655)][_0x1651eb(646)] = _0x5a7a42[_0x1651eb(610)];
}
function _0x2cdb(_0x7b184e, _0x20896d) {
  const _0x43a6f6 = _0x11af();
  return _0x2cdb = function (_0x5cdca9, _0x588b05) {
    _0x5cdca9 = _0x5cdca9 - 312;
    let _0x55ae81 = _0x43a6f6[_0x5cdca9];
    return _0x55ae81;
  }, _0x2cdb(_0x7b184e, _0x20896d);
}
trailerBtn[_0x408d4b(354) + _0x408d4b(570)](_0x408d4b(414), () => {
  const _0x4c2935 = _0x408d4b, _0x39b9bb = {YMKUI: _0x4c2935(394), citRy: _0x4c2935(457) + _0x4c2935(597), PqsVK: _0x4c2935(643), vwWty: function (_0x3dc417, _0x45acf7) {
    return _0x3dc417 === _0x45acf7;
  }, TsSKH: function (_0x1a671f, _0x154ff7) {
    return _0x1a671f(_0x154ff7);
  }, JJFSU: _0x4c2935(366), XYAYo: _0x4c2935(495), aFHcY: _0x4c2935(478) + _0x4c2935(445)};
  if (!trailerKey) return;
  if (!isTrailerPlaying) {
    const _0x36482b = _0x39b9bb[_0x4c2935(609)][_0x4c2935(632)]("|");
    let _0x596511 = 0;
    while (true) {
      switch (_0x36482b[_0x596511++]) {
        case "0":
          trailerBtn[_0x4c2935(317) + "t"] = _0x39b9bb[_0x4c2935(630)];
          continue;
        case "1":
          isTrailerPlaying = true;
          continue;
        case "2":
          modalPlayer[_0x4c2935(579)] = _0x4c2935(542) + _0x4c2935(343) + _0x4c2935(672) + trailerKey + (_0x4c2935(352) + _0x4c2935(546));
          continue;
        case "3":
          seasonEpisodeControls[_0x4c2935(655)][_0x4c2935(412)] = _0x39b9bb[_0x4c2935(314)];
          continue;
        case "4":
          lastWatchedInfo[_0x4c2935(655)][_0x4c2935(412)] = _0x39b9bb[_0x4c2935(314)];
          continue;
      }
      break;
    }
  } else {
    if (_0x39b9bb[_0x4c2935(618)](currentContentType, "tv")) {
      const _0x41acc7 = _0x39b9bb[_0x4c2935(405)](parseInt, seasonInput[_0x4c2935(580)] || "1"), _0x525350 = _0x39b9bb[_0x4c2935(405)](parseInt, episodeInput[_0x4c2935(580)] || "1");
      modalPlayer[_0x4c2935(579)] = _0x4c2935(547) + _0x4c2935(461) + _0x4c2935(689) + _0x4c2935(551) + currentItem.id + "/" + _0x41acc7 + "/" + _0x525350, seasonEpisodeControls[_0x4c2935(655)][_0x4c2935(412)] = _0x39b9bb[_0x4c2935(488)], lastWatchedInfo[_0x4c2935(655)][_0x4c2935(412)] = _0x39b9bb[_0x4c2935(583)];
    } else modalPlayer[_0x4c2935(579)] = _0x4c2935(547) + _0x4c2935(461) + _0x4c2935(474) + _0x4c2935(502) + currentItem.id, seasonEpisodeControls[_0x4c2935(655)][_0x4c2935(412)] = _0x39b9bb[_0x4c2935(314)], lastWatchedInfo[_0x4c2935(655)][_0x4c2935(412)] = _0x39b9bb[_0x4c2935(314)];
    trailerBtn[_0x4c2935(317) + "t"] = _0x39b9bb[_0x4c2935(475)], isTrailerPlaying = false;
  }
}), playEpisodeBtn[_0x408d4b(397)] = () => {
  const _0x1e5705 = _0x408d4b, _0x1146ed = {iOpeK: function (_0x20e1b7, _0x38851b) {
    return _0x20e1b7(_0x38851b);
  }, RbBDq: function (_0xd91628, _0xe74750) {
    return _0xd91628(_0xe74750);
  }, vNVdi: function (_0x1f881b, _0x3a2b27) {
    return _0x1f881b(_0x3a2b27);
  }, YvMtm: function (_0x4b11c4, _0x21595d) {
    return _0x4b11c4 > _0x21595d;
  }, aDuHw: function (_0x24a9e2, _0x4a19fa) {
    return _0x24a9e2 > _0x4a19fa;
  }, GlIsN: _0x1e5705(478) + _0x1e5705(445), tGHRH: _0x1e5705(366), OwGFA: _0x1e5705(495)}, _0x2e8bee = _0x1146ed[_0x1e5705(529)](parseInt, seasonInput[_0x1e5705(580)] || "1"), _0x215b1b = _0x1146ed[_0x1e5705(529)](parseInt, episodeInput[_0x1e5705(580)] || "1");
  !_0x1146ed[_0x1e5705(595)](isNaN, _0x2e8bee) && !_0x1146ed[_0x1e5705(329)](isNaN, _0x215b1b) && _0x1146ed[_0x1e5705(362)](_0x2e8bee, 0) && _0x1146ed[_0x1e5705(604)](_0x215b1b, 0) && (modalPlayer[_0x1e5705(579)] = _0x1e5705(547) + _0x1e5705(461) + _0x1e5705(689) + _0x1e5705(551) + currentItem.id + "/" + _0x2e8bee + "/" + _0x215b1b, localStorage[_0x1e5705(429)](_0x1e5705(659) + currentItem.id, JSON[_0x1e5705(400)]({season: _0x2e8bee, episode: _0x215b1b})), lastWatchedInfo[_0x1e5705(317) + "t"] = _0x1e5705(555) + _0x1e5705(526) + " " + _0x2e8bee + _0x1e5705(540) + _0x215b1b, isTrailerPlaying && (trailerBtn[_0x1e5705(317) + "t"] = _0x1146ed[_0x1e5705(382)], isTrailerPlaying = false, seasonEpisodeControls[_0x1e5705(655)][_0x1e5705(412)] = _0x1146ed[_0x1e5705(466)], lastWatchedInfo[_0x1e5705(655)][_0x1e5705(412)] = _0x1146ed[_0x1e5705(419)]));
};
function _0x11af() {
  const _0x1c1333 = ["eBtn", "movies", "seasonEpis", "tsembed.cc", "genres", "<option va", "hing genre", "poster_pat", "tGHRH", "mUkii", "episodeInp", "oGUfE", "Fwfln", "backToTop", "movie", "list?api_k", "/embed/mov", "aFHcY", "iew", "lJAcL", "Tonton Tra", "LgHYD", "bPxlA", "IdfwL", "page=", "en-US", ", released", "pXGzj", "ODLUE", "58238fNMKmK", "JJFSU", "CFBME", "scrollY", "rity.desc&", "         <", "dqxlW", "disabled", "inline", "odeControl", "tvrDs", "vNRQw", "_by=popula", "cDJgp", "CqPYd", "ie/?id=", " fade-in", "UnLwL", "offsetHeig", "1|4|3|6|5|", " check you", "getElement", "&page=", "https://wa", "pLqhr", "vENPF", "Unknown", "&language=", "modalDetai", "   <p>📅 Re", "rtakita.gi", "true", "Ptebb", "lKCRr", "?api_key=", "ent", "title", "UjllV", "genre_ids", "ed: Season", "div", "Error fetc", "iOpeK", "add", "scrollTo", "klLRZ", "genreSelec", "db.org/3", "&include_a", '" alt="Pos', "pGzDM", "weafa", "json", " Episode ", "error", "https://ww", "p>⭐ Rating", "name", "ter of ", "1&rel=0", "https://le", "en-US&quer", "f3184f866b", "total_page", "?id=", "EtkQe", "tmovie", "70MEVAVO", "Last watch", "nres: ", "kMgge", "focus", "modalClose", '" loading=', "\n        <", "ault", "PlClQ", "<div class", "https://t.", "crNsB", "nYcke", "     <div ", "dwnDU", "stener", "has", ", rating ", "IRLrf", "contentTyp", "fnClS", "&with_genr", "/genre/mov", " | 📅 ", "src", "value", "OtQOY", "LijMs", "XYAYo", "loading", "ption>", "ey=", "innerHTML", "nTtYc", "first_air_", "setAttribu", "getItem", "oQbau", "able.", "b.io/NO%20", "RbBDq", "tznrE", "ler", "er:", "N/A", "Btn", "map", "rbeWj", "295030xMhglu", "aDuHw", "WvIGG", "ie/list?ap", "episode", "KNnjK", "YMKUI", "VyuKn", "toString", "i.themovie", "aria-press", "rwXuK", 'lue="">All', "307557KwokeI", "mZChb", "vwWty", "vies.githu", "input", "jQdsD", "CrPsX", "mvQYp", "Failed to ", "/genre/tv/", "lastWatche", "Txgar", "lease Date", "       <di", "citRy", "RrtlH", "split", "light-mode", "ntgaw", "LqHYu", "642045khfViT", "Untitled", "nt. Please", "YPcLC", "modalHeade", "length", "fcd4ca4e97", "none", "qMUSP", " Genres</o", "overflow", "/search/", "movie-", "modalOverv", "on and try", " <img src=", "playEpisod", "jDXuY", "tor", "style", "Escape", "apply", '"lazy" />\n', "tv-", '"meta">⭐ ', "movie-card", "</div>\n   ", "season", "UbISj", "es=", "me/cinenes", "keydown", "find", "ErUhY", "YouTube", "i_key=", "com/embed/", "7974408hYpWun", "VfDHT", "bXqTX", "https://im", "official", "GPuBG", "lWMSA", "iv>\n      ", "YEySn", "all", "Trailer", "contains", " on ", "CExDi", "CsUWE", "</p>\n     ", "/embed/tv/", "hpIUz", "lDLAS", "iltGf", "searchInpu", "Edfhn", "className", "age.tmdb.o", 'le">', "ById", "dInfo", "qtKCc", "pXTLy", ".no-result", "PqsVK", "vnHqB", "noopener", "textConten", "XxqnZ", "trim", "enabled", "_blank", "\n         ", "seasonInpu", "rGiAB", "wKDhq", "waYCD", "EsiXv", "lftiX", "vNVdi", "168rxmbgm", "Yzxpr", "appendChil", "modalPlaye", "   <p>🎭 Ge", "darkModeTo", "dult=false", "release_da", "https://ap", "trailerBtn", "BDvfP", "c542b4951c", "RvqQO", "w.youtube.", "innerHeigh", '">\n       ', "3SGfcrU", "qlirx", "mqCID", "GUsRY", "/discover/", "tabindex", "?autoplay=", "XJCFu", "addEventLi", 'itle">', "toggle", "overview", "tHYzc", " again.", "576492ybPnmd", "          ", "YvMtm", "hidden", "ggle", "en-US&sort", "flex", "vsVip", "preventDef", "KQWTX", "filter", "NxTxC", "132PGkYXL", '="movie-in', "ZwIdq", "lzwMK", "ZsXSy", "DlUuZ", "body", "amBtn", "rBoQU", "change", "GlIsN", "option", "sPTsK", "OHKkV", "JsQvc", "hing conte", "mQvyd", "       </d", "thub.io/mo", "7|2|0", "aJzyc", "ZyFGZ", "2|0|1|3|4", "classList", "No descrip", "onclick", "then", "VIDXp", "stringify", "div class=", "createElem", "open", "/videos?ap", "TsSKH", "iHXYJ", "ViSlg", "smooth", "key", 'class="tit', "GyeeJ", "display", "IMAGE.png", "click", "Enter", "darkMode", "scroll", "QtjMf", "OwGFA", "nt:", "load conte", 'v class="t', "site", "join", "rg/t/p/w50", "forEach", "TMzSY", "xkleD", "setItem", "toFixed", "aria-label", "ceSgm", "joinTelegr", "vote_avera", 'fo" title=', "oYIPm", "MnqtT", "IcLxr", "tion avail", "type", "date", "r connecti", "ZRrOZ", "3|4|5|0|2|", "iler", "aHouT", "879766IKHacU", "startsWith", "12sinGVL", "target", "modalOverl", "parse", "results", '"genres">', "hing trail", "querySelec", "Tutup Trai"];
  _0x11af = function () {
    return _0x1c1333;
  };
  return _0x11af();
}
function closeModal() {
  const _0x3a7419 = _0x408d4b, _0x285297 = {UbISj: _0x3a7419(506) + _0x3a7419(391), KNnjK: function (_0x23fc00, _0x3fd51d) {
    return _0x23fc00 === _0x3fd51d;
  }, mqCID: _0x3a7419(366), rBoQU: _0x3a7419(643), YEySn: _0x3a7419(495), ZwIdq: _0x3a7419(478) + _0x3a7419(445)}, _0x1e1691 = _0x285297[_0x3a7419(664)][_0x3a7419(632)]("|");
  let _0x70ed7 = 0;
  while (true) {
    switch (_0x1e1691[_0x70ed7++]) {
      case "0":
        seasonEpisodeControls[_0x3a7419(655)][_0x3a7419(412)] = _0x285297[_0x3a7419(608)](currentContentType, "tv") ? _0x285297[_0x3a7419(348)] : _0x285297[_0x3a7419(380)];
        continue;
      case "1":
        modalOverlay[_0x3a7419(655)][_0x3a7419(412)] = _0x285297[_0x3a7419(380)];
        continue;
      case "2":
        lastWatchedInfo[_0x3a7419(655)][_0x3a7419(412)] = _0x285297[_0x3a7419(681)];
        continue;
      case "3":
        trailerBtn[_0x3a7419(317) + "t"] = _0x285297[_0x3a7419(374)];
        continue;
      case "4":
        modalPlayer[_0x3a7419(579)] = "";
        continue;
      case "5":
        isTrailerPlaying = false;
        continue;
      case "6":
        trailerBtn[_0x3a7419(494)] = true;
        continue;
      case "7":
        document[_0x3a7419(378)][_0x3a7419(655)][_0x3a7419(646)] = "";
        continue;
    }
    break;
  }
}
modalCloseBtn[_0x408d4b(354) + _0x408d4b(570)](_0x408d4b(414), closeModal), modalOverlay[_0x408d4b(354) + _0x408d4b(570)](_0x408d4b(414), _0x31f175 => {
  const _0x16a831 = _0x408d4b, _0x518bb4 = {CsUWE: function (_0x76b606, _0x4148da) {
    return _0x76b606 === _0x4148da;
  }, aJzyc: function (_0x5c5960) {
    return _0x5c5960();
  }};
  _0x518bb4[_0x16a831(687)](_0x31f175[_0x16a831(450)], modalOverlay) && _0x518bb4[_0x16a831(392)](closeModal);
}), window[_0x408d4b(354) + _0x408d4b(570)](_0x408d4b(667), _0x17dc88 => {
  const _0x19d896 = _0x408d4b, _0x5c0fa2 = {lftiX: function (_0x4ccd0f, _0x4bfc2) {
    return _0x4ccd0f === _0x4bfc2;
  }, qtKCc: _0x19d896(656), WvIGG: function (_0x17daea, _0xb471e3) {
    return _0x17daea === _0xb471e3;
  }, tHYzc: _0x19d896(366), bXqTX: function (_0x5a4284) {
    return _0x5a4284();
  }};
  _0x5c0fa2[_0x19d896(328)](_0x17dc88[_0x19d896(409)], _0x5c0fa2[_0x19d896(700)]) && _0x5c0fa2[_0x19d896(605)](modalOverlay[_0x19d896(655)][_0x19d896(412)], _0x5c0fa2[_0x19d896(358)]) && _0x5c0fa2[_0x19d896(675)](closeModal);
}), fetchGenres()[_0x408d4b(398)](() => {
  const _0x371764 = _0x408d4b, _0x1f5d00 = {jDXuY: function (_0x1550ee) {
    return _0x1550ee();
  }};
  _0x1f5d00[_0x371764(653)](populateGenreOptions), _0x1f5d00[_0x371764(653)](fetchContent);
});
