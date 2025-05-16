const _0x378ba2 = _0x58c3;
(function (_0x3bb952, _0x3ab820) {
  const _0x75c7b2 = _0x58c3, _0x3d1f38 = _0x3bb952();
  while (true) {
    try {
      const _0x5ef206 = parseInt(_0x75c7b2(606)) / 1 + parseInt(_0x75c7b2(887)) / 2 + parseInt(_0x75c7b2(633)) / 3 + -parseInt(_0x75c7b2(541)) / 4 * (parseInt(_0x75c7b2(708)) / 5) + parseInt(_0x75c7b2(498)) / 6 + parseInt(_0x75c7b2(698)) / 7 * (parseInt(_0x75c7b2(765)) / 8) + parseInt(_0x75c7b2(852)) / 9 * (-parseInt(_0x75c7b2(788)) / 10);
      if (_0x5ef206 === _0x3ab820) break; else _0x3d1f38.push(_0x3d1f38.shift());
    } catch (_0x2324a8) {
      _0x3d1f38.push(_0x3d1f38.shift());
    }
  }
}(_0x206a, 145205));
function _0x58c3(_0x378f2f, _0x251ab0) {
  const _0x4b51b7 = _0x206a();
  return _0x58c3 = function (_0x3991fb, _0x5768e2) {
    _0x3991fb = _0x3991fb - 495;
    let _0x5cb731 = _0x4b51b7[_0x3991fb];
    return _0x5cb731;
  }, _0x58c3(_0x378f2f, _0x251ab0);
}
const API_KEY = _0x378ba2(732) + _0x378ba2(650) + _0x378ba2(693) + "70", BASE_URL = _0x378ba2(711) + _0x378ba2(770) + _0x378ba2(694), IMAGE_PATH = _0x378ba2(668) + _0x378ba2(751) + _0x378ba2(537) + "0", PLACEHOLDER_IMG = _0x378ba2(784) + _0x378ba2(815) + _0x378ba2(849) + _0x378ba2(579) + _0x378ba2(649) + _0x378ba2(529), moviesContainer = document[_0x378ba2(635) + _0x378ba2(664)](_0x378ba2(782)), loading = document[_0x378ba2(635) + _0x378ba2(664)](_0x378ba2(874)), noResults = document[_0x378ba2(611) + _0x378ba2(888)](_0x378ba2(773) + "s"), backToTopBtn = document[_0x378ba2(635) + _0x378ba2(664)](_0x378ba2(755)), searchInput = document[_0x378ba2(635) + _0x378ba2(664)](_0x378ba2(840) + "t"), genreSelect = document[_0x378ba2(635) + _0x378ba2(664)](_0x378ba2(848) + "t"), contentTypeSelect = document[_0x378ba2(635) + _0x378ba2(664)](_0x378ba2(825) + "e"), darkModeToggle = document[_0x378ba2(635) + _0x378ba2(664)](_0x378ba2(656) + _0x378ba2(497)), joinTelegramBtn = document[_0x378ba2(635) + _0x378ba2(664)](_0x378ba2(527) + _0x378ba2(509)), seasonInput = document[_0x378ba2(635) + _0x378ba2(664)](_0x378ba2(675) + "t"), episodeInput = document[_0x378ba2(635) + _0x378ba2(664)](_0x378ba2(797) + "ut"), playEpisodeBtn = document[_0x378ba2(635) + _0x378ba2(664)](_0x378ba2(500) + _0x378ba2(534)), seasonEpisodeControls = document[_0x378ba2(635) + _0x378ba2(664)](_0x378ba2(632) + _0x378ba2(667) + "s"), lastWatchedInfo = document[_0x378ba2(635) + _0x378ba2(664)](_0x378ba2(793) + _0x378ba2(728)), modalOverlay = document[_0x378ba2(635) + _0x378ba2(664)](_0x378ba2(516) + "ay"), modalHeader = document[_0x378ba2(635) + _0x378ba2(664)](_0x378ba2(548) + "r"), modalOverview = document[_0x378ba2(635) + _0x378ba2(664)](_0x378ba2(706) + _0x378ba2(622)), modalDetails = document[_0x378ba2(635) + _0x378ba2(664)](_0x378ba2(766) + "ls"), modalPlayer = document[_0x378ba2(635) + _0x378ba2(664)](_0x378ba2(557) + "r"), modalCloseBtn = document[_0x378ba2(635) + _0x378ba2(664)](_0x378ba2(567) + _0x378ba2(662)), trailerBtn = document[_0x378ba2(635) + _0x378ba2(664)](_0x378ba2(570));
let currentPage = 1, totalPages = 1, currentQuery = "", currentGenre = "", currentContentType = _0x378ba2(569), isSearchMode = false, genreMap = {}, trailerKey = null, isTrailerPlaying = false, currentItem = null;
function debounce(_0x1c1763, _0x2fa7c2) {
  const _0x2ed225 = {sdYgb: function (_0x589821, _0x45efa1) {
    return _0x589821(_0x45efa1);
  }, FmSEX: function (_0xf723d, _0x261dba, _0x47be4c) {
    return _0xf723d(_0x261dba, _0x47be4c);
  }};
  let _0x454e9e;
  return function (..._0x4cd7ff) {
    const _0x4f8e66 = _0x58c3;
    _0x2ed225[_0x4f8e66(718)](clearTimeout, _0x454e9e), _0x454e9e = _0x2ed225[_0x4f8e66(518)](setTimeout, () => {
      const _0x7b1e5f = _0x4f8e66;
      _0x1c1763[_0x7b1e5f(564)](this, _0x4cd7ff);
    }, _0x2fa7c2);
  };
}
async function fetchGenres() {
  const _0x27e3c0 = _0x378ba2, _0x498da7 = {DVsAF: function (_0x26e179, _0x31881c) {
    return _0x26e179(_0x31881c);
  }, Uzfjt: function (_0x1cafc5, _0xc3f72c) {
    return _0x1cafc5(_0xc3f72c);
  }, cvGdC: function (_0x1abded) {
    return _0x1abded();
  }, FjlEm: _0x27e3c0(651) + _0x27e3c0(626) + "s:"};
  try {
    const [_0x73e37c, _0x269aee] = await Promise[_0x27e3c0(847)]([_0x498da7[_0x27e3c0(639)](fetch, BASE_URL + (_0x27e3c0(644) + _0x27e3c0(625) + _0x27e3c0(586)) + API_KEY + (_0x27e3c0(789) + _0x27e3c0(774))), _0x498da7[_0x27e3c0(787)](fetch, BASE_URL + (_0x27e3c0(623) + _0x27e3c0(648) + _0x27e3c0(552)) + API_KEY + (_0x27e3c0(789) + _0x27e3c0(774)))]), _0x27edc1 = await _0x73e37c[_0x27e3c0(604)](), _0x3af5c3 = await _0x269aee[_0x27e3c0(604)](), _0x58c3e1 = {};
    _0x27edc1[_0x27e3c0(634)][_0x27e3c0(530)](_0x108c9a => {
      const _0x22a932 = _0x27e3c0;
      _0x58c3e1[_0x22a932(608) + _0x108c9a.id] = _0x108c9a[_0x22a932(553)];
    }), _0x3af5c3[_0x27e3c0(634)][_0x27e3c0(530)](_0x821bba => {
      const _0x1d15d4 = _0x27e3c0;
      _0x58c3e1[_0x1d15d4(641) + _0x821bba.id] = _0x821bba[_0x1d15d4(553)];
    }), genreMap = _0x58c3e1, _0x498da7[_0x27e3c0(802)](populateGenreOptions);
  } catch (_0xf21dcd) {
    console[_0x27e3c0(809)](_0x498da7[_0x27e3c0(589)], _0xf21dcd);
  }
}
function _0x206a() {
  const _0x25a12a = ["1&rel=0", "true", "McSjd", "bnych", "</div>\n   ", "KTbVE", "AvZMZ", "age.tmdb.o", "keydown", "vote_avera", "overflow", "backToTop", "offsetHeig", "xsCgx", "first_air_", "HkrTV", "FVNAk", "No descrip", "</p>\n     ", "iuOIX", "Tonton Tra", "32xKCpgt", "modalDetai", "nzYka", "zSmBV", "YLDID", "i.themovie", "jEFAc", "KfYvO", ".no-result", "en-US", 'fo" title=', "body", "hidden", "focus", "&page=", "Untitled", "xWbhf", "movies", "sMOJY", "https://wa", "GDMcz", "UjUYK", "Uzfjt", "180JTWEtF", "&language=", "TnHJS", "BbSld", "noopener", "lastWatche", '"meta">⭐ ', "title", "episode", "episodeInp", " check you", "ler", "QWoaO", "?api_key=", "cvGdC", "able.", "setItem", "appendChil", "fgQLA", "xWEHL", "tsembed.cc", "error", '" loading=', "innerHTML", "7|6|5|3|0|", "movie-card", 'class="tit', "rtakita.gi", "BZvTa", "RoSBU", "PgfEJ", "disabled", "nt:", "ekvcj", "       <di", "Trailer", "WxFxD", "contentTyp", "         <", "release_da", "site", "setAttribu", "poster_pat", "toggle", "UqOhV", "urgXf", "split", "QftFB", "click", "tNNlR", "src", "w.youtube.", "searchInpu", "Tutup Trai", "innerHeigh", "kWYAH", "on and try", "          ", "me/joincha", "all", "genreSelec", "thub.io/mo", '"lazy" />\n', "Unknown", "318807IiUieN", "KjhVG", "season", ", released", "official", "NLptV", "iler", "Ltpjw", "SOfJA", "ckDWn", "?autoplay=", "onclick", "YNrPr", "/embed/tv/", "genre_ids", "Last watch", "tabindex", "startsWith", "DGIPy", "LnXjG", "dqlSq", "zhYxb", "loading", "gtNeM", "aqCJM", " on ", "       </d", "getItem", "createElem", "jZTnQ", "IDWyr", "_by=popula", "find", "dBgMU", "uirzk", "75664mmucgg", "tor", "value", "rxFCK", "ggle", "1569864nTXCMl", "SHgVr", "playEpisod", "https://le", "display", "LsXfg", "es=", "Ekldm", "toFixed", "join", "IcXry", "amBtn", 'v class="t', "?id=", "_blank", "total_page", "JUIGg", "load conte", "modalOverl", "BFfzT", "FmSEX", "sxCUQ", " <img src=", "change", "hing trail", "RTanV", "/discover/", "add", "className", "joinTelegr", "/embed/mov", "IMAGE.png", "forEach", "peOrb", "<option va", "tion avail", "eBtn", "rity.desc&", " Genres</o", "rg/t/p/w50", "KyODY", "page=", "stener", "784ZmLAHi", "cjrEY", "FzJGi", "scrollTo", "FYunf", "div class=", " fade-in", "modalHeade", "type", "<div class", 'lue="">All', "ey=", "name", "t/ExampleI", "input", "Failed to ", "modalPlaye", "hing conte", "com/embed/", "lVPdI", "then", "     <div ", "GRoSM", "apply", "UJBJM", "aria-label", "modalClose", "thGBn", "movie", "trailerBtn", " | 📅 ", "en-US&sort", "qCFPA", "textConten", "EpKjH", "scrollY", "length", "kIRsi", "vies.githu", '" alt="Pos', "nt. Please", "oHcSq", "flex", "enabled", "rAvXN", "i_key=", "Gtovy", "bbXYE", "FjlEm", "wFXfa", "MdJOR", "trim", "\n        <", "EroVb", "WxBrs", "p>⭐ Rating", "nMQKI", "ption>", "ter of ", "SsEzQ", "div", "addEventLi", "edrgj", "json", "smooth", "174067xiAoMm", "oQVPP", "movie-", "woBBa", "parse", "querySelec", "sgzWN", "contains", "ent", "qshyL", "1|4|3|2|0|", "2|1|4|0|3", "N/A", "BSKZw", "Escape", "rPvFN", "iew", "/genre/tv/", "nres: ", "ie/list?ap", "hing genre", "mqsjg", "EXTBb", "darkMode", "bdVza", "r connecti", "seasonEpis", "594840hclhAL", "genres", "getElement", "has", "overview", "FEwIk", "DVsAF", "iv>\n      ", "tv-", "Enter", "https://t.", "/genre/mov", "scroll", "preventDef", "2|4|1", "list?api_k", "b.io/NO%20", "fcd4ca4e97", "Error fetc", "toString", "gFtLH", 'le">', "dult=false", "darkModeTo", "gPnOF", "cnAYU", "style", "filter", "BdNkC", "Btn", "ed: Season", "ById", "ccTkY", "ldYLD", "odeControl", "https://im", "RpvDY", '">\n       ', "SEJLF", "AxXaf", "light-mode", "HtJWl", "seasonInpu", "aria-press", "&include_a", "lease Date", "hCQaA", "er:", "SpEeX", "option", " again.", "uZpQL", "en-US&quer", "map", "KHcKl", "ie/?id=", "\n         ", "stringify", "ault", "open", "f3184f866b", "db.org/3", "kVTyL", "lUNrq", "classList", "212422vuTbgQ", "key", "pbKlI", "target", "gYKZt", "qEWIv", "znPAI", "WXdIL", "modalOverv", '="movie-in', "265DKFaIw", "cZfUR", "date", "https://ap", "   <p>📅 Re", " Episode ", "nviteLink", "https://ww", "lEGqX", "/videos?ap", "sdYgb", "YzJsQ", "results", "YxLeA", '"genres">', "inline", "KoMzg", "/search/", "   <p>🎭 Ge", "GXktU", "dInfo", "wEhKF", "ncpkl", "jJIEA", "c542b4951c", "JgvDm", "none", ", rating ", "cBEbI", "EaBXr", 'itle">', "tejaG", "AtXZO", "&with_genr", "YouTube", "bGtqK"];
  _0x206a = function () {
    return _0x25a12a;
  };
  return _0x206a();
}
function populateGenreOptions() {
  const _0x3a063e = _0x378ba2, _0x1b5867 = {BbSld: _0x3a063e(532) + _0x3a063e(551) + _0x3a063e(536) + _0x3a063e(598), YLDID: function (_0x447db0, _0x50728b) {
    return _0x447db0 + _0x50728b;
  }, qshyL: _0x3a063e(682)};
  genreSelect[_0x3a063e(811)] = _0x1b5867[_0x3a063e(791)];
  const _0x1b04b6 = _0x1b5867[_0x3a063e(769)](currentContentType, "-"), _0x41bc32 = new Set;
  for (const _0x1c16d5 in genreMap) {
    if (_0x1c16d5[_0x3a063e(869)](_0x1b04b6)) {
      const _0x3a0b5e = _0x1c16d5[_0x3a063e(834)]("-")[1], _0x2a0428 = genreMap[_0x1c16d5];
      if (!_0x41bc32[_0x3a063e(636)](_0x3a0b5e)) {
        const _0x317c56 = document[_0x3a063e(880) + _0x3a063e(614)](_0x1b5867[_0x3a063e(615)]);
        _0x317c56[_0x3a063e(495)] = _0x3a0b5e, _0x317c56[_0x3a063e(574) + "t"] = _0x2a0428, genreSelect[_0x3a063e(805) + "d"](_0x317c56), _0x41bc32[_0x3a063e(525)](_0x3a0b5e);
      }
    }
  }
}
function buildEndpoint(_0x6f793b = currentPage) {
  const _0x8fbb74 = _0x378ba2, _0x5ab421 = {YxLeA: function (_0x1add98, _0x45781f) {
    return _0x1add98 > _0x45781f;
  }, KjhVG: function (_0x51221f, _0x2f1222) {
    return _0x51221f(_0x2f1222);
  }};
  let _0x54f4fc = "";
  return isSearchMode && _0x5ab421[_0x8fbb74(721)](currentQuery[_0x8fbb74(577)], 0) ? _0x54f4fc = BASE_URL + _0x8fbb74(725) + currentContentType + _0x8fbb74(801) + API_KEY + (_0x8fbb74(789) + _0x8fbb74(685) + "y=") + _0x5ab421[_0x8fbb74(853)](encodeURIComponent, currentQuery) + _0x8fbb74(779) + _0x6f793b + (_0x8fbb74(677) + _0x8fbb74(655)) : (_0x54f4fc = BASE_URL + _0x8fbb74(524) + currentContentType + _0x8fbb74(801) + API_KEY + (_0x8fbb74(789) + _0x8fbb74(572) + _0x8fbb74(883) + _0x8fbb74(535) + _0x8fbb74(539)) + _0x6f793b, currentGenre && (_0x54f4fc += _0x8fbb74(741) + _0x8fbb74(504) + currentGenre)), _0x54f4fc;
}
function showContent(_0x29c568) {
  const _0x17fece = _0x378ba2, _0x2ca211 = {ekvcj: function (_0x539b81, _0x298ac1) {
    return _0x539b81 === _0x298ac1;
  }, JgvDm: _0x17fece(642), WxBrs: function (_0x180f45, _0x1bfa38) {
    return _0x180f45(_0x1bfa38);
  }, SOfJA: function (_0x253c0e, _0xdb36b9) {
    return _0x253c0e + _0xdb36b9;
  }, NLptV: _0x17fece(780), jZTnQ: _0x17fece(618), cjrEY: _0x17fece(851), rAvXN: _0x17fece(601), cBEbI: _0x17fece(813) + _0x17fece(547), RpvDY: _0x17fece(868), IDWyr: _0x17fece(566), pbKlI: _0x17fece(761) + _0x17fece(533) + _0x17fece(803), FYunf: _0x17fece(836), hCQaA: _0x17fece(752), rPvFN: _0x17fece(583), bdVza: _0x17fece(734)};
  moviesContainer[_0x17fece(811)] = "";
  if (!_0x29c568 || _0x2ca211[_0x17fece(821)](_0x29c568[_0x17fece(577)], 0)) {
    noResults[_0x17fece(659)][_0x17fece(502)] = _0x2ca211[_0x17fece(621)];
    return;
  }
  noResults[_0x17fece(659)][_0x17fece(502)] = _0x2ca211[_0x17fece(630)], _0x29c568[_0x17fece(530)](_0x1faab3 => {
    const _0x4ff6ae = _0x17fece, _0x94aa4c = {znPAI: function (_0x495eb8, _0x154828) {
      const _0x5805bf = _0x58c3;
      return _0x2ca211[_0x5805bf(821)](_0x495eb8, _0x154828);
    }, qEWIv: _0x2ca211[_0x4ff6ae(733)], wEhKF: function (_0x1a92ff, _0x12c6df) {
      const _0x801b73 = _0x4ff6ae;
      return _0x2ca211[_0x801b73(821)](_0x1a92ff, _0x12c6df);
    }, RoSBU: function (_0x10add8, _0x1eb521) {
      const _0x42dc3c = _0x4ff6ae;
      return _0x2ca211[_0x42dc3c(595)](_0x10add8, _0x1eb521);
    }}, _0x29f558 = (_0x1faab3[_0x4ff6ae(866)] || [])[_0x4ff6ae(686)](_0xd89651 => genreMap[currentContentType + "-" + _0xd89651])[_0x4ff6ae(660)](Boolean)[_0x4ff6ae(507)](", "), _0x14041c = _0x1faab3[_0x4ff6ae(830) + "h"] ? _0x2ca211[_0x4ff6ae(860)](IMAGE_PATH, _0x1faab3[_0x4ff6ae(830) + "h"]) : PLACEHOLDER_IMG, _0x1143ea = _0x1faab3[_0x4ff6ae(795)] || _0x1faab3[_0x4ff6ae(553)] || _0x2ca211[_0x4ff6ae(857)], _0x11cefc = _0x1faab3[_0x4ff6ae(753) + "ge"] ? _0x1faab3[_0x4ff6ae(753) + "ge"][_0x4ff6ae(506)](1) : _0x2ca211[_0x4ff6ae(881)], _0x587e3f = _0x1faab3[_0x4ff6ae(827) + "te"] || _0x1faab3[_0x4ff6ae(758) + _0x4ff6ae(710)] || _0x2ca211[_0x4ff6ae(542)], _0x2720a4 = document[_0x4ff6ae(880) + _0x4ff6ae(614)](_0x2ca211[_0x4ff6ae(585)]);
    _0x2720a4[_0x4ff6ae(526)] = _0x2ca211[_0x4ff6ae(736)], _0x2720a4[_0x4ff6ae(829) + "te"](_0x2ca211[_0x4ff6ae(669)], "0"), _0x2720a4[_0x4ff6ae(829) + "te"](_0x2ca211[_0x4ff6ae(882)], _0x1143ea + _0x4ff6ae(735) + _0x11cefc + (_0x4ff6ae(855) + _0x4ff6ae(877)) + _0x587e3f), _0x2720a4[_0x4ff6ae(811)] = _0x4ff6ae(689) + _0x4ff6ae(520) + '"' + _0x14041c + (_0x4ff6ae(580) + _0x4ff6ae(599)) + _0x1143ea + (_0x4ff6ae(810) + _0x4ff6ae(850) + _0x4ff6ae(845) + _0x4ff6ae(550) + _0x4ff6ae(707) + _0x4ff6ae(775) + '"') + (_0x1faab3[_0x4ff6ae(637)] || _0x2ca211[_0x4ff6ae(700)]) + (_0x4ff6ae(670) + _0x4ff6ae(845) + _0x4ff6ae(822) + _0x4ff6ae(510) + _0x4ff6ae(738)) + _0x1143ea + (_0x4ff6ae(748) + _0x4ff6ae(826) + _0x4ff6ae(546) + _0x4ff6ae(794)) + _0x11cefc + _0x4ff6ae(571) + _0x587e3f + (_0x4ff6ae(748) + _0x4ff6ae(826) + _0x4ff6ae(546) + _0x4ff6ae(722)) + _0x29f558 + (_0x4ff6ae(748) + _0x4ff6ae(878) + _0x4ff6ae(640) + "  "), _0x2720a4[_0x4ff6ae(602) + _0x4ff6ae(540)](_0x2ca211[_0x4ff6ae(545)], () => openModal(_0x1faab3)), _0x2720a4[_0x4ff6ae(602) + _0x4ff6ae(540)](_0x2ca211[_0x4ff6ae(679)], _0x444241 => {
      const _0x211f08 = _0x4ff6ae;
      (_0x94aa4c[_0x211f08(704)](_0x444241[_0x211f08(699)], _0x94aa4c[_0x211f08(703)]) || _0x94aa4c[_0x211f08(729)](_0x444241[_0x211f08(699)], " ")) && (_0x444241[_0x211f08(646) + _0x211f08(691)](), _0x94aa4c[_0x211f08(817)](openModal, _0x1faab3));
    }), moviesContainer[_0x4ff6ae(805) + "d"](_0x2720a4);
  });
}
function appendContent(_0x4e32c1) {
  const _0x1ba297 = _0x378ba2, _0x3e714c = {TnHJS: function (_0x43c2ff, _0x5dbd40) {
    return _0x43c2ff === _0x5dbd40;
  }, SHgVr: _0x1ba297(642), BFfzT: function (_0x3b39e4, _0x202a53) {
    return _0x3b39e4(_0x202a53);
  }, wFXfa: function (_0x2009e2, _0x36f12f) {
    return _0x2009e2 + _0x36f12f;
  }, QWoaO: _0x1ba297(780), sgzWN: _0x1ba297(618), McSjd: _0x1ba297(851), SsEzQ: _0x1ba297(601), KfYvO: _0x1ba297(813) + _0x1ba297(547), KHcKl: _0x1ba297(868), DGIPy: _0x1ba297(566), mqsjg: _0x1ba297(761) + _0x1ba297(533) + _0x1ba297(803), oQVPP: _0x1ba297(836), lEGqX: _0x1ba297(752)};
  if (!_0x4e32c1 || _0x3e714c[_0x1ba297(790)](_0x4e32c1[_0x1ba297(577)], 0)) return;
  _0x4e32c1[_0x1ba297(530)](_0x310029 => {
    const _0x2b4631 = _0x1ba297, _0xf7849b = {LnXjG: function (_0xfba238, _0x2a7d9e) {
      const _0x241cf9 = _0x58c3;
      return _0x3e714c[_0x241cf9(790)](_0xfba238, _0x2a7d9e);
    }, tNNlR: _0x3e714c[_0x2b4631(499)], FzJGi: function (_0xad2f90, _0xfca410) {
      const _0x5ef636 = _0x2b4631;
      return _0x3e714c[_0x5ef636(517)](_0xad2f90, _0xfca410);
    }}, _0x1025c4 = (_0x310029[_0x2b4631(866)] || [])[_0x2b4631(686)](_0x38f4e6 => genreMap[currentContentType + "-" + _0x38f4e6])[_0x2b4631(660)](Boolean)[_0x2b4631(507)](", "), _0x9b38bf = _0x310029[_0x2b4631(830) + "h"] ? _0x3e714c[_0x2b4631(590)](IMAGE_PATH, _0x310029[_0x2b4631(830) + "h"]) : PLACEHOLDER_IMG, _0x13cdf1 = _0x310029[_0x2b4631(795)] || _0x310029[_0x2b4631(553)] || _0x3e714c[_0x2b4631(800)], _0x436ce4 = _0x310029[_0x2b4631(753) + "ge"] ? _0x310029[_0x2b4631(753) + "ge"][_0x2b4631(506)](1) : _0x3e714c[_0x2b4631(612)], _0x2d814b = _0x310029[_0x2b4631(827) + "te"] || _0x310029[_0x2b4631(758) + _0x2b4631(710)] || _0x3e714c[_0x2b4631(746)], _0x5aa324 = document[_0x2b4631(880) + _0x2b4631(614)](_0x3e714c[_0x2b4631(600)]);
    _0x5aa324[_0x2b4631(526)] = _0x3e714c[_0x2b4631(772)], _0x5aa324[_0x2b4631(829) + "te"](_0x3e714c[_0x2b4631(687)], "0"), _0x5aa324[_0x2b4631(829) + "te"](_0x3e714c[_0x2b4631(870)], _0x13cdf1 + _0x2b4631(735) + _0x436ce4 + (_0x2b4631(855) + _0x2b4631(877)) + _0x2d814b), _0x5aa324[_0x2b4631(811)] = _0x2b4631(689) + _0x2b4631(520) + '"' + _0x9b38bf + (_0x2b4631(580) + _0x2b4631(599)) + _0x13cdf1 + (_0x2b4631(810) + _0x2b4631(850) + _0x2b4631(845) + _0x2b4631(550) + _0x2b4631(707) + _0x2b4631(775) + '"') + (_0x310029[_0x2b4631(637)] || _0x3e714c[_0x2b4631(627)]) + (_0x2b4631(670) + _0x2b4631(562) + _0x2b4631(814) + _0x2b4631(654)) + _0x13cdf1 + (_0x2b4631(748) + _0x2b4631(826) + _0x2b4631(546) + _0x2b4631(794)) + _0x436ce4 + _0x2b4631(571) + _0x2d814b + (_0x2b4631(748) + _0x2b4631(826) + _0x2b4631(546) + _0x2b4631(722)) + _0x1025c4 + (_0x2b4631(748) + _0x2b4631(878) + _0x2b4631(640) + "  "), _0x5aa324[_0x2b4631(602) + _0x2b4631(540)](_0x3e714c[_0x2b4631(607)], () => openModal(_0x310029)), _0x5aa324[_0x2b4631(602) + _0x2b4631(540)](_0x3e714c[_0x2b4631(716)], _0x44c004 => {
      const _0x49715c = _0x2b4631;
      (_0xf7849b[_0x49715c(871)](_0x44c004[_0x49715c(699)], _0xf7849b[_0x49715c(837)]) || _0xf7849b[_0x49715c(871)](_0x44c004[_0x49715c(699)], " ")) && (_0x44c004[_0x49715c(646) + _0x49715c(691)](), _0xf7849b[_0x49715c(543)](openModal, _0x310029));
    }), moviesContainer[_0x2b4631(805) + "d"](_0x5aa324);
  });
}
async function fetchContent() {
  const _0x127faf = _0x378ba2, _0x313185 = {lUNrq: _0x127faf(583), qCFPA: _0x127faf(734), KyODY: function (_0x2da768, _0x36e1f6) {
    return _0x2da768 === _0x36e1f6;
  }, bGtqK: function (_0x2a59d8) {
    return _0x2a59d8();
  }, kIRsi: function (_0x552167, _0xb4ead6) {
    return _0x552167(_0xb4ead6);
  }, dBgMU: function (_0x4e4d53, _0xceaecd) {
    return _0x4e4d53 === _0xceaecd;
  }, FEwIk: function (_0x154e52, _0x2c6297) {
    return _0x154e52 === _0x2c6297;
  }, BZvTa: function (_0x1458c2, _0x127863) {
    return _0x1458c2(_0x127863);
  }, GXktU: _0x127faf(651) + _0x127faf(558) + _0x127faf(820), bbXYE: function (_0x2bd599, _0x3aa599) {
    return _0x2bd599 === _0x3aa599;
  }, peOrb: _0x127faf(556) + _0x127faf(515) + _0x127faf(581) + _0x127faf(798) + _0x127faf(631) + _0x127faf(844) + _0x127faf(683)};
  loading[_0x127faf(659)][_0x127faf(502)] = _0x313185[_0x127faf(696)], noResults[_0x127faf(659)][_0x127faf(502)] = _0x313185[_0x127faf(573)];
  _0x313185[_0x127faf(538)](currentPage, 1) && (moviesContainer[_0x127faf(811)] = "");
  try {
    const _0xbbfa1e = _0x313185[_0x127faf(743)](buildEndpoint), _0x59ac74 = await _0x313185[_0x127faf(578)](fetch, _0xbbfa1e), _0x23b2c8 = await _0x59ac74[_0x127faf(604)]();
    totalPages = _0x23b2c8[_0x127faf(513) + "s"] || 1, !_0x23b2c8[_0x127faf(720)] || _0x313185[_0x127faf(885)](_0x23b2c8[_0x127faf(720)][_0x127faf(577)], 0) ? _0x313185[_0x127faf(638)](currentPage, 1) && (noResults[_0x127faf(659)][_0x127faf(502)] = _0x313185[_0x127faf(696)]) : _0x313185[_0x127faf(885)](currentPage, 1) ? _0x313185[_0x127faf(816)](showContent, _0x23b2c8[_0x127faf(720)]) : _0x313185[_0x127faf(578)](appendContent, _0x23b2c8[_0x127faf(720)]);
  } catch (_0x5d5639) {
    console[_0x127faf(809)](_0x313185[_0x127faf(727)], _0x5d5639), _0x313185[_0x127faf(588)](currentPage, 1) && (noResults[_0x127faf(659)][_0x127faf(502)] = _0x313185[_0x127faf(696)], noResults[_0x127faf(574) + "t"] = _0x313185[_0x127faf(531)]);
  } finally {
    loading[_0x127faf(659)][_0x127faf(502)] = _0x313185[_0x127faf(573)];
  }
}
const handleSearch = debounce(() => {
  const _0x5a0098 = _0x378ba2, _0x30f22a = {sMOJY: function (_0x116277, _0x5bd39a) {
    return _0x116277 > _0x5bd39a;
  }, zhYxb: function (_0x3b21fd) {
    return _0x3b21fd();
  }};
  currentQuery = searchInput[_0x5a0098(495)][_0x5a0098(592)](), currentPage = 1, isSearchMode = _0x30f22a[_0x5a0098(783)](currentQuery[_0x5a0098(577)], 0), _0x30f22a[_0x5a0098(873)](fetchContent);
}, 300);
searchInput[_0x378ba2(602) + _0x378ba2(540)](_0x378ba2(555), handleSearch), genreSelect[_0x378ba2(602) + _0x378ba2(540)](_0x378ba2(521), () => {
  const _0x2fc5e6 = _0x378ba2, _0x2d52be = {thGBn: function (_0x1109ba) {
    return _0x1109ba();
  }};
  currentGenre = genreSelect[_0x2fc5e6(495)], currentPage = 1, _0x2d52be[_0x2fc5e6(568)](fetchContent);
}), contentTypeSelect[_0x378ba2(602) + _0x378ba2(540)](_0x378ba2(521), () => {
  const _0x55eee1 = _0x378ba2, _0x2c43f2 = {nzYka: _0x55eee1(616) + "5", xWbhf: function (_0x3dcc30) {
    return _0x3dcc30();
  }, SpEeX: function (_0x552b5d) {
    return _0x552b5d();
  }}, _0x581b1b = _0x2c43f2[_0x55eee1(767)][_0x55eee1(834)]("|");
  let _0x5f2b04 = 0;
  while (true) {
    switch (_0x581b1b[_0x5f2b04++]) {
      case "0":
        _0x2c43f2[_0x55eee1(781)](populateGenreOptions);
        continue;
      case "1":
        currentContentType = contentTypeSelect[_0x55eee1(495)];
        continue;
      case "2":
        currentPage = 1;
        continue;
      case "3":
        genreSelect[_0x55eee1(495)] = "";
        continue;
      case "4":
        currentGenre = "";
        continue;
      case "5":
        _0x2c43f2[_0x55eee1(681)](fetchContent);
        continue;
    }
    break;
  }
}), backToTopBtn[_0x378ba2(602) + _0x378ba2(540)](_0x378ba2(836), () => {
  const _0x37653f = _0x378ba2, _0xe40e51 = {WxFxD: _0x37653f(605)};
  window[_0x37653f(544)]({top: 0, behavior: _0xe40e51[_0x37653f(824)]});
}), window[_0x378ba2(602) + _0x378ba2(540)](_0x378ba2(645), () => {
  const _0x3c4257 = _0x378ba2, _0x402c86 = {edrgj: function (_0x44793f, _0x4a2019) {
    return _0x44793f > _0x4a2019;
  }, aqCJM: _0x3c4257(583), QftFB: _0x3c4257(734), SEJLF: function (_0x1e414c, _0x14cc76) {
    return _0x1e414c >= _0x14cc76;
  }, jJIEA: function (_0x33d44d, _0x2f8ef6) {
    return _0x33d44d + _0x2f8ef6;
  }, IcXry: function (_0x30f127, _0x2267fb) {
    return _0x30f127 - _0x2267fb;
  }, rxFCK: function (_0x33a631, _0x5511e9) {
    return _0x33a631 < _0x5511e9;
  }, AxXaf: function (_0x5377c8, _0x31e9a6) {
    return _0x5377c8 === _0x31e9a6;
  }, ckDWn: function (_0x243638) {
    return _0x243638();
  }};
  _0x402c86[_0x3c4257(603)](window[_0x3c4257(576)], 300) ? backToTopBtn[_0x3c4257(659)][_0x3c4257(502)] = _0x402c86[_0x3c4257(876)] : backToTopBtn[_0x3c4257(659)][_0x3c4257(502)] = _0x402c86[_0x3c4257(835)], _0x402c86[_0x3c4257(671)](_0x402c86[_0x3c4257(731)](window[_0x3c4257(842) + "t"], window[_0x3c4257(576)]), _0x402c86[_0x3c4257(508)](document[_0x3c4257(776)][_0x3c4257(756) + "ht"], 500)) && _0x402c86[_0x3c4257(496)](currentPage, totalPages) && _0x402c86[_0x3c4257(672)](loading[_0x3c4257(659)][_0x3c4257(502)], _0x402c86[_0x3c4257(835)]) && (currentPage++, _0x402c86[_0x3c4257(861)](fetchContent));
});
function loadDarkModeSetting() {
  const _0x8835e6 = _0x378ba2, _0x3a2c73 = {AtXZO: function (_0x453f0d, _0x2a5178) {
    return _0x453f0d === _0x2a5178;
  }, ldYLD: _0x8835e6(629), MdJOR: _0x8835e6(584), urgXf: _0x8835e6(673), UqOhV: _0x8835e6(676) + "ed", EpKjH: _0x8835e6(745)};
  _0x3a2c73[_0x8835e6(740)](localStorage[_0x8835e6(879)](_0x3a2c73[_0x8835e6(666)]), _0x3a2c73[_0x8835e6(591)]) && (document[_0x8835e6(776)][_0x8835e6(697)][_0x8835e6(525)](_0x3a2c73[_0x8835e6(833)]), darkModeToggle[_0x8835e6(829) + "te"](_0x3a2c73[_0x8835e6(832)], _0x3a2c73[_0x8835e6(575)]), darkModeToggle[_0x8835e6(574) + "t"] = "☀️");
}
loadDarkModeSetting(), darkModeToggle[_0x378ba2(602) + _0x378ba2(540)](_0x378ba2(836), () => {
  const _0x21c4f9 = _0x378ba2, _0x10464a = {LsXfg: _0x21c4f9(673), EroVb: _0x21c4f9(676) + "ed", Ekldm: _0x21c4f9(629), oHcSq: _0x21c4f9(584), xsCgx: _0x21c4f9(819)};
  document[_0x21c4f9(776)][_0x21c4f9(697)][_0x21c4f9(831)](_0x10464a[_0x21c4f9(503)]);
  const _0x2c1dff = document[_0x21c4f9(776)][_0x21c4f9(697)][_0x21c4f9(613)](_0x10464a[_0x21c4f9(503)]);
  darkModeToggle[_0x21c4f9(829) + "te"](_0x10464a[_0x21c4f9(594)], _0x2c1dff[_0x21c4f9(652)]()), darkModeToggle[_0x21c4f9(574) + "t"] = _0x2c1dff ? "☀️" : "🌙", localStorage[_0x21c4f9(804)](_0x10464a[_0x21c4f9(505)], _0x2c1dff ? _0x10464a[_0x21c4f9(582)] : _0x10464a[_0x21c4f9(757)]);
}), joinTelegramBtn[_0x378ba2(602) + _0x378ba2(540)](_0x378ba2(836), () => {
  const _0x24e46a = _0x378ba2, _0x520f1d = {tejaG: _0x24e46a(643) + _0x24e46a(846) + _0x24e46a(554) + _0x24e46a(714), lVPdI: _0x24e46a(512), cnAYU: _0x24e46a(792)};
  window[_0x24e46a(692)](_0x520f1d[_0x24e46a(739)], _0x520f1d[_0x24e46a(560)], _0x520f1d[_0x24e46a(658)]);
});
async function fetchTrailer(_0x16c8b9, _0x5ae529) {
  const _0x255fa5 = _0x378ba2, _0x28deeb = {woBBa: function (_0xdbcf47, _0xf7c70c) {
    return _0xdbcf47(_0xf7c70c);
  }, ccTkY: function (_0x3e4ba2, _0x105279) {
    return _0x3e4ba2 > _0x105279;
  }, BSKZw: _0x255fa5(651) + _0x255fa5(522) + _0x255fa5(680)};
  try {
    const _0x307772 = await _0x28deeb[_0x255fa5(609)](fetch, BASE_URL + "/" + _0x5ae529 + "/" + _0x16c8b9 + (_0x255fa5(717) + _0x255fa5(586)) + API_KEY + (_0x255fa5(789) + _0x255fa5(774))), _0x2310da = await _0x307772[_0x255fa5(604)]();
    if (_0x2310da[_0x255fa5(720)] && _0x28deeb[_0x255fa5(665)](_0x2310da[_0x255fa5(720)][_0x255fa5(577)], 0)) {
      const _0x1a75c0 = _0x2310da[_0x255fa5(720)][_0x255fa5(884)](_0x11fa35 => _0x11fa35[_0x255fa5(828)] === _0x255fa5(742) && _0x11fa35[_0x255fa5(549)] === _0x255fa5(823) && _0x11fa35[_0x255fa5(856)] === true) || _0x2310da[_0x255fa5(720)][_0x255fa5(884)](_0x537a7f => _0x537a7f[_0x255fa5(828)] === _0x255fa5(742) && _0x537a7f[_0x255fa5(549)] === _0x255fa5(823));
      if (_0x1a75c0) return _0x1a75c0[_0x255fa5(699)];
    }
    return null;
  } catch (_0x3b3a48) {
    return console[_0x255fa5(809)](_0x28deeb[_0x255fa5(619)], _0x3b3a48), null;
  }
}
async function openModal(_0x2f7716) {
  const _0xe8c27e = _0x378ba2, _0x4ab97e = {kWYAH: _0xe8c27e(780), sxCUQ: _0xe8c27e(761) + _0xe8c27e(533) + _0xe8c27e(803), gFtLH: _0xe8c27e(618), gtNeM: _0xe8c27e(851), dqlSq: _0xe8c27e(764) + _0xe8c27e(858), PgfEJ: function (_0x4dbc9b, _0x40c217, _0x4ec860) {
    return _0x4dbc9b(_0x40c217, _0x4ec860);
  }, cZfUR: function (_0x350662, _0x12936a) {
    return _0x350662 === _0x12936a;
  }, HkrTV: _0xe8c27e(583), RTanV: _0xe8c27e(734), uirzk: _0xe8c27e(777)};
  currentItem = _0x2f7716, modalHeader[_0xe8c27e(574) + "t"] = _0x2f7716[_0xe8c27e(795)] || _0x2f7716[_0xe8c27e(553)] || _0x4ab97e[_0xe8c27e(843)], modalOverview[_0xe8c27e(574) + "t"] = _0x2f7716[_0xe8c27e(637)] || _0x4ab97e[_0xe8c27e(519)];
  const _0x4d6ff5 = _0x2f7716[_0xe8c27e(753) + "ge"] ? _0x2f7716[_0xe8c27e(753) + "ge"][_0xe8c27e(506)](1) : _0x4ab97e[_0xe8c27e(653)], _0x3fa815 = _0x2f7716[_0xe8c27e(827) + "te"] || _0x2f7716[_0xe8c27e(758) + _0xe8c27e(710)] || _0x4ab97e[_0xe8c27e(875)], _0x8f47ac = (_0x2f7716[_0xe8c27e(866)] || [])[_0xe8c27e(686)](_0x8ab12f => genreMap[currentContentType + "-" + _0x8ab12f])[_0xe8c27e(660)](Boolean);
  modalDetails[_0xe8c27e(811)] = _0xe8c27e(593) + _0xe8c27e(596) + ": " + _0x4d6ff5 + (_0xe8c27e(762) + _0xe8c27e(712) + _0xe8c27e(678) + ": ") + _0x3fa815 + (_0xe8c27e(762) + _0xe8c27e(726) + _0xe8c27e(624)) + _0x8f47ac + (_0xe8c27e(762) + " "), trailerKey = null, isTrailerPlaying = false, trailerBtn[_0xe8c27e(574) + "t"] = _0x4ab97e[_0xe8c27e(872)], trailerBtn[_0xe8c27e(819)] = true, trailerKey = await _0x4ab97e[_0xe8c27e(818)](fetchTrailer, _0x2f7716.id, currentContentType);
  trailerKey ? trailerBtn[_0xe8c27e(819)] = false : trailerBtn[_0xe8c27e(819)] = true;
  if (_0x4ab97e[_0xe8c27e(709)](currentContentType, "tv")) {
    seasonEpisodeControls[_0xe8c27e(659)][_0xe8c27e(502)] = _0x4ab97e[_0xe8c27e(759)];
    const _0x479f2e = JSON[_0xe8c27e(610)](localStorage[_0xe8c27e(879)](_0xe8c27e(641) + _0x2f7716.id) || "{}"), _0xc2237f = _0x479f2e[_0xe8c27e(854)] || 1, _0x3b39da = _0x479f2e[_0xe8c27e(796)] || 1;
    seasonInput[_0xe8c27e(495)] = _0xc2237f, episodeInput[_0xe8c27e(495)] = _0x3b39da, lastWatchedInfo[_0xe8c27e(574) + "t"] = _0xe8c27e(867) + _0xe8c27e(663) + " " + _0xc2237f + _0xe8c27e(713) + _0x3b39da, modalPlayer[_0xe8c27e(838)] = _0xe8c27e(501) + _0xe8c27e(808) + _0xe8c27e(865) + _0xe8c27e(511) + _0x2f7716.id + "/" + _0xc2237f + "/" + _0x3b39da;
  } else seasonEpisodeControls[_0xe8c27e(659)][_0xe8c27e(502)] = _0x4ab97e[_0xe8c27e(523)], lastWatchedInfo[_0xe8c27e(574) + "t"] = "", modalPlayer[_0xe8c27e(838)] = _0xe8c27e(501) + _0xe8c27e(808) + _0xe8c27e(528) + _0xe8c27e(688) + _0x2f7716.id;
  modalOverlay[_0xe8c27e(659)][_0xe8c27e(502)] = _0x4ab97e[_0xe8c27e(759)], modalOverlay[_0xe8c27e(778)](), document[_0xe8c27e(776)][_0xe8c27e(659)][_0xe8c27e(754)] = _0x4ab97e[_0xe8c27e(886)];
}
trailerBtn[_0x378ba2(602) + _0x378ba2(540)](_0x378ba2(836), () => {
  const _0x6bd70c = _0x378ba2, _0x17ee62 = {gYKZt: _0x6bd70c(617), FVNAk: _0x6bd70c(734), xWEHL: _0x6bd70c(841) + _0x6bd70c(799), UjUYK: function (_0x4a3321, _0xe23ffd) {
    return _0x4a3321 === _0xe23ffd;
  }, Gtovy: function (_0x4e58ba, _0x5c2783) {
    return _0x4e58ba(_0x5c2783);
  }, jEFAc: function (_0x13b8b6, _0x1a2d5a) {
    return _0x13b8b6(_0x1a2d5a);
  }, AvZMZ: _0x6bd70c(583), UJBJM: _0x6bd70c(723), YzJsQ: _0x6bd70c(764) + _0x6bd70c(858)};
  if (!trailerKey) return;
  if (!isTrailerPlaying) {
    const _0x152948 = _0x17ee62[_0x6bd70c(702)][_0x6bd70c(834)]("|");
    let _0x561536 = 0;
    while (true) {
      switch (_0x152948[_0x561536++]) {
        case "0":
          seasonEpisodeControls[_0x6bd70c(659)][_0x6bd70c(502)] = _0x17ee62[_0x6bd70c(760)];
          continue;
        case "1":
          trailerBtn[_0x6bd70c(574) + "t"] = _0x17ee62[_0x6bd70c(807)];
          continue;
        case "2":
          modalPlayer[_0x6bd70c(838)] = _0x6bd70c(715) + _0x6bd70c(839) + _0x6bd70c(559) + trailerKey + (_0x6bd70c(862) + _0x6bd70c(744));
          continue;
        case "3":
          lastWatchedInfo[_0x6bd70c(659)][_0x6bd70c(502)] = _0x17ee62[_0x6bd70c(760)];
          continue;
        case "4":
          isTrailerPlaying = true;
          continue;
      }
      break;
    }
  } else {
    if (_0x17ee62[_0x6bd70c(786)](currentContentType, "tv")) {
      const _0x5c687e = _0x17ee62[_0x6bd70c(587)](parseInt, seasonInput[_0x6bd70c(495)] || "1"), _0x1d5180 = _0x17ee62[_0x6bd70c(771)](parseInt, episodeInput[_0x6bd70c(495)] || "1");
      modalPlayer[_0x6bd70c(838)] = _0x6bd70c(501) + _0x6bd70c(808) + _0x6bd70c(865) + _0x6bd70c(511) + currentItem.id + "/" + _0x5c687e + "/" + _0x1d5180, seasonEpisodeControls[_0x6bd70c(659)][_0x6bd70c(502)] = _0x17ee62[_0x6bd70c(750)], lastWatchedInfo[_0x6bd70c(659)][_0x6bd70c(502)] = _0x17ee62[_0x6bd70c(565)];
    } else modalPlayer[_0x6bd70c(838)] = _0x6bd70c(501) + _0x6bd70c(808) + _0x6bd70c(528) + _0x6bd70c(688) + currentItem.id, seasonEpisodeControls[_0x6bd70c(659)][_0x6bd70c(502)] = _0x17ee62[_0x6bd70c(760)], lastWatchedInfo[_0x6bd70c(659)][_0x6bd70c(502)] = _0x17ee62[_0x6bd70c(760)];
    trailerBtn[_0x6bd70c(574) + "t"] = _0x17ee62[_0x6bd70c(719)], isTrailerPlaying = false;
  }
}), playEpisodeBtn[_0x378ba2(863)] = () => {
  const _0x27adb7 = _0x378ba2, _0x3f5200 = {EXTBb: function (_0x56d17b, _0x201482) {
    return _0x56d17b(_0x201482);
  }, iuOIX: function (_0x10804e, _0x91c291) {
    return _0x10804e(_0x91c291);
  }, JUIGg: function (_0x433b32, _0x4565c0) {
    return _0x433b32(_0x4565c0);
  }, KoMzg: function (_0x805707, _0x5c34f9) {
    return _0x805707 > _0x5c34f9;
  }, GRoSM: function (_0x4b67cf, _0x37f27c) {
    return _0x4b67cf > _0x37f27c;
  }, EaBXr: _0x27adb7(764) + _0x27adb7(858), GDMcz: _0x27adb7(583), bnych: _0x27adb7(723)}, _0x995fe = _0x3f5200[_0x27adb7(628)](parseInt, seasonInput[_0x27adb7(495)] || "1"), _0x65f82f = _0x3f5200[_0x27adb7(763)](parseInt, episodeInput[_0x27adb7(495)] || "1");
  !_0x3f5200[_0x27adb7(514)](isNaN, _0x995fe) && !_0x3f5200[_0x27adb7(628)](isNaN, _0x65f82f) && _0x3f5200[_0x27adb7(724)](_0x995fe, 0) && _0x3f5200[_0x27adb7(563)](_0x65f82f, 0) && (modalPlayer[_0x27adb7(838)] = _0x27adb7(501) + _0x27adb7(808) + _0x27adb7(865) + _0x27adb7(511) + currentItem.id + "/" + _0x995fe + "/" + _0x65f82f, localStorage[_0x27adb7(804)](_0x27adb7(641) + currentItem.id, JSON[_0x27adb7(690)]({season: _0x995fe, episode: _0x65f82f})), lastWatchedInfo[_0x27adb7(574) + "t"] = _0x27adb7(867) + _0x27adb7(663) + " " + _0x995fe + _0x27adb7(713) + _0x65f82f, isTrailerPlaying && (trailerBtn[_0x27adb7(574) + "t"] = _0x3f5200[_0x27adb7(737)], isTrailerPlaying = false, seasonEpisodeControls[_0x27adb7(659)][_0x27adb7(502)] = _0x3f5200[_0x27adb7(785)], lastWatchedInfo[_0x27adb7(659)][_0x27adb7(502)] = _0x3f5200[_0x27adb7(747)]));
};
function closeModal() {
  const _0x1ea368 = _0x378ba2, _0x319e68 = {uZpQL: _0x1ea368(812) + _0x1ea368(647), Ltpjw: function (_0x488d21, _0x3f4a47) {
    return _0x488d21 === _0x3f4a47;
  }, YNrPr: _0x1ea368(583), ncpkl: _0x1ea368(734), gPnOF: _0x1ea368(723), WXdIL: _0x1ea368(764) + _0x1ea368(858)}, _0x46eb1c = _0x319e68[_0x1ea368(684)][_0x1ea368(834)]("|");
  let _0x35fc78 = 0;
  while (true) {
    switch (_0x46eb1c[_0x35fc78++]) {
      case "0":
        isTrailerPlaying = false;
        continue;
      case "1":
        seasonEpisodeControls[_0x1ea368(659)][_0x1ea368(502)] = _0x319e68[_0x1ea368(859)](currentContentType, "tv") ? _0x319e68[_0x1ea368(864)] : _0x319e68[_0x1ea368(730)];
        continue;
      case "2":
        document[_0x1ea368(776)][_0x1ea368(659)][_0x1ea368(754)] = "";
        continue;
      case "3":
        trailerBtn[_0x1ea368(819)] = true;
        continue;
      case "4":
        lastWatchedInfo[_0x1ea368(659)][_0x1ea368(502)] = _0x319e68[_0x1ea368(657)];
        continue;
      case "5":
        trailerBtn[_0x1ea368(574) + "t"] = _0x319e68[_0x1ea368(705)];
        continue;
      case "6":
        modalPlayer[_0x1ea368(838)] = "";
        continue;
      case "7":
        modalOverlay[_0x1ea368(659)][_0x1ea368(502)] = _0x319e68[_0x1ea368(730)];
        continue;
    }
    break;
  }
}
modalCloseBtn[_0x378ba2(602) + _0x378ba2(540)](_0x378ba2(836), closeModal), modalOverlay[_0x378ba2(602) + _0x378ba2(540)](_0x378ba2(836), _0x19a462 => {
  const _0x50a143 = _0x378ba2, _0x5520b0 = {kVTyL: function (_0x5e6c1b, _0x50ee12) {
    return _0x5e6c1b === _0x50ee12;
  }, BdNkC: function (_0xf5de88) {
    return _0xf5de88();
  }};
  _0x5520b0[_0x50a143(695)](_0x19a462[_0x50a143(701)], modalOverlay) && _0x5520b0[_0x50a143(661)](closeModal);
}), window[_0x378ba2(602) + _0x378ba2(540)](_0x378ba2(752), _0x4d5643 => {
  const _0xaaeee7 = _0x378ba2, _0x1219a7 = {zSmBV: function (_0x4056e3, _0x4d4fab) {
    return _0x4056e3 === _0x4d4fab;
  }, fgQLA: _0xaaeee7(620), nMQKI: _0xaaeee7(583), KTbVE: function (_0x527f02) {
    return _0x527f02();
  }};
  _0x1219a7[_0xaaeee7(768)](_0x4d5643[_0xaaeee7(699)], _0x1219a7[_0xaaeee7(806)]) && _0x1219a7[_0xaaeee7(768)](modalOverlay[_0xaaeee7(659)][_0xaaeee7(502)], _0x1219a7[_0xaaeee7(597)]) && _0x1219a7[_0xaaeee7(749)](closeModal);
}), fetchGenres()[_0x378ba2(561)](() => {
  const _0x230e06 = _0x378ba2, _0x325c96 = {HtJWl: function (_0x346839) {
    return _0x346839();
  }};
  _0x325c96[_0x230e06(674)](populateGenreOptions), _0x325c96[_0x230e06(674)](fetchContent);
});
