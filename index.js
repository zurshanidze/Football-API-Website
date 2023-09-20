let premierLeague = document.getElementById("39");
let championship = document.getElementById("40");
let bundesliga = document.getElementById("78");
let bundesliga2 = document.getElementById("79");
let serieA = document.getElementById("135");
let serieB = document.getElementById("136");
let laLiga = document.getElementById("140");
let SegundaDivision = document.getElementById("141");
let eredivisie = document.getElementById("88");
let jupilerProLeague = document.getElementById("144");
let ligue1 = document.getElementById("61");
let primeiraLiga = document.getElementById("94");
let premiership = document.getElementById("179");

let championsLeague = document.getElementById("2");
let europaLeague = document.getElementById("3");
let europaConferenceLeague = document.getElementById("848");

let minus1day = document.getElementById("minus1day");
let plus1day = document.getElementById("plus1day");

const matchList = document.querySelector(".match-list");

let liCountries = document.querySelectorAll(".country");
let liCountriesArray = [...liCountries];
let lieachCountry = liCountriesArray.map(
  (country) => country.attributes.name.nodeValue
);
// console.log(lieachCountry, "lieachCountry")

let navLeagues = [
  premierLeague,
  championship,
  bundesliga,
  bundesliga2,
  serieA,
  serieB,
  laLiga,
  SegundaDivision,
  eredivisie,
  ligue1,
  jupilerProLeague,
  primeiraLiga,
  premiership,
  championsLeague,
  europaLeague,
  europaConferenceLeague,
];
let UefaTournaments = [championsLeague, europaLeague, europaConferenceLeague];
let myEachLeague = [];

let currentLeagueMatchesYesterday_Active;
let allChampionshipsObject_TodayAndYesterday;

let eachLeagueMatchesYesterday;
let eachLeagueMatchesToday;
let todayAndYesterday_EachLeagueMatches;

// Date initialization
let TodayDateTime = new Date(); // let curntDateInMs = Date.parse(TodayDateTime);
var currentDateTime;
var previousDay;
let DateTimeForCalendarFormat;

let dayWithoutZero;
let day;
let monthWithoutZero;
let month;
let year;

// date Function
// (returns "year", "month", "day" - to assign to "Date" variable)
function getSeparately_MonthDayYear(todayDate) {
  dayWithoutZero = todayDate.getDate();
  day = dayWithoutZero > 9 ? dayWithoutZero : "0" + dayWithoutZero;
  monthWithoutZero = todayDate.getMonth();
  month =
    monthWithoutZero >= 9 ? monthWithoutZero + 1 : "0" + (monthWithoutZero + 1);
  year = todayDate.getFullYear();
}
getSeparately_MonthDayYear(TodayDateTime);
// returns "year", "month", "day" - to assign to "TodayDateTime"
TodayDateTime = month + "-" + day + "-" + year;
currentDateTime = year + "-" + month + "-" + day;
DateTimeFormatForInput = year + "-" + month + "-" + day;

// CREATE PREVIOUS DAY FUNCTION
let curntDateInMs = Date.parse(currentDateTime);
let previousDayInMS = curntDateInMs - 1000 * 60 * 60 * 24;
previousDay = new Date(previousDayInMS);

getSeparately_MonthDayYear(previousDay); // returns "year", "month", "day" - to assign to "previousDay"
previousDay = year + "-" + month + "-" + day;
// console.log(previousDay, "previousDay", previousDayInMS, "previousDayInMS");
// console.log(currentDateTime, "currentDateTime", curntDateInMs, "curntDateInMs");

// get "Date" div
let dateTime = document.getElementById("dateTime");
let chooseDate = document.getElementById("chooseDate");

// Add Functions on Date and Calendar
dateTime.addEventListener("click", changeDateOnCLick);
chooseDate.addEventListener("change", selectedDateFromCalendar);

// Function For Date Calendar Toggle
function changeDateOnCLick() {
  chooseDate.classList.toggle("active");
  chooseDate.value = DateTimeFormatForInput;
}

// Function For Selecting Date
function selectedDateFromCalendar() {
  curntDateInMs = Date.parse(chooseDate.value);
  currentDateTime = new Date(curntDateInMs);

  getSeparately_MonthDayYear(currentDateTime); // returns "year", "month", "day" - to assign to "currentDateTime"
  currentDateTime = year + "-" + month + "-" + day;
  dateTime.innerText = month + "-" + day + "-" + year;
  chooseDate.classList.toggle("active");

  // matchList.removeChild(leagueNameH3);
  [...matchList.childNodes].map((myMatch) => {
    matchList.removeChild(myMatch);
  });

  // Call again Function to Add - "active-league" Class to active Leagues in current Date
  // ApiResponse_ForActiveLeague()
}

minus1day.addEventListener("click", minus1DayFunc);
plus1day.addEventListener("click", plus1DayFunc);

function minus1DayFunc() {
  curntDateInMs = curntDateInMs - 1000 * 60 * 60 * 24;
  previousDayInMS = previousDayInMS - 1000 * 60 * 60 * 24;

  // console.log(previousDay, "previousDay", previousDayInMS, "previousDayInMS");
  // console.log(
  //   currentDateTime,
  //   "currentDateTime",
  //   curntDateInMs,
  //   "curntDateInMs"
  // );

  currentDateTime = new Date(curntDateInMs);
  previousDay = new Date(previousDayInMS);

  getSeparately_MonthDayYear(currentDateTime); // returns "year", "month", "day" - to assign to "currentDateTime"
  currentDateTime = year + "-" + month + "-" + day;
  DateTimeFormatForInput = currentDateTime;
  TodayDateTime = currentDateTime;

  dateTime.innerText = month + "-" + day + "-" + year;
  chooseDate.value = DateTimeFormatForInput;
  // console.log(currentDateTime, "currentDateTime -");

  getSeparately_MonthDayYear(previousDay); // returns "year", "month", "day" - to assign to "previousDay"
  previousDay = year + "-" + month + "-" + day;
  // console.log(previousDay, "previousDay -");

  [...matchList.childNodes].map((myMatch) => {
    matchList.removeChild(myMatch);
  });

  myEachLeague = [];
  eachLeagueMatchesYesterday = [];
  eachLeagueMatchesToday = [];
  todayAndYesterday_EachLeagueMatches = [];

  // Call again Function to Add - "active-league" Class to active Leagues in current Date
  // ApiResponse_ForActiveLeague()
}

function plus1DayFunc() {
  curntDateInMs = curntDateInMs + 1000 * 60 * 60 * 24;
  previousDayInMS = previousDayInMS + 1000 * 60 * 60 * 24;

  currentDateTime = new Date(curntDateInMs);
  previousDay = new Date(previousDayInMS);

  getSeparately_MonthDayYear(currentDateTime); // result of this Function assign to "currentDateTime"
  currentDateTime = year + "-" + month + "-" + day;
  DateTimeFormatForInput = currentDateTime;
  TodayDateTime = currentDateTime;

  dateTime.innerText = month + "-" + day + "-" + year;
  chooseDate.value = DateTimeFormatForInput;
  // console.log(currentDateTime, "currentDateTime +");

  getSeparately_MonthDayYear(previousDay); // result of this Function assign to "previousDay"
  previousDay = year + "-" + month + "-" + day;
  // console.log(previousDay, "previousDay +");

  [...matchList.childNodes].map((myMatch) => {
    matchList.removeChild(myMatch);
  });

  myEachLeague = [];
  eachLeagueMatchesYesterday = [];
  eachLeagueMatchesToday = [];
  todayAndYesterday_EachLeagueMatches = [];

  // Call again Function to Add - "active-league" Class to active Leagues in current Date
  // ApiResponse_ForActiveLeague()
}

// Request Object Template For Leagues & Matches Obj
function sendRequestObj_ForLeaguesObj(Date) {
  return (options = {
    method: "GET",
    url: "https://api-football-beta.p.rapidapi.com/fixtures",
    params: { date: Date },
    headers: {
      "X-RapidAPI-Host": "api-football-beta.p.rapidapi.com",
      "X-RapidAPI-Key": "a6de39b80emsh2c79d430e72f9d6p1148c9jsna256d95e8fca",
    },
  });
}

// Request Object Template For Leagues Flags & Logos Obj
function sendRequestObj_ForLeaguesFlagsAndLogos(navLeague) {
  return (options2 = {
    method: "GET",
    url: "https://api-football-beta.p.rapidapi.com/leagues",
    params: { id: `${parseInt(navLeague.id)}` },
    headers: {
      "X-RapidAPI-Key": "a6de39b80emsh2c79d430e72f9d6p1148c9jsna256d95e8fca",
      "X-RapidAPI-Host": "api-football-beta.p.rapidapi.com",
    },
  });
}

// Response Object Template For Active Leagues
function ApiResponse_ForActiveLeague() {
  // On Load Window Check Which League has an Matches Today and Show them with Green Animation by Adding proper class
  axios
    .request(sendRequestObj_ForLeaguesObj(currentDateTime))
    .then(function (response) {
      const allChampionshipsObjectToday = response.data.response;
      // console.log(allChampionshipsObjectToday);

      allChampionshipsObject_TodayAndYesterday =
        allChampionshipsObjectToday.concat(allChampionshipsObjectToday);

      // After Page Load if Navleagues has class - "active-league"
      // Remove the class - "active-league"
      navLeagues.map((navLeague) => {
        navLeague.classList.remove("active-league");
      });

      // After - Remove class - "active-league"
      // check Navleagues who has Matches
      // and then add class - "active-league"
      navLeagues.map((navLeague) => {
        allChampionshipsObject_TodayAndYesterday.filter(
          (eachChampionshipTodayAndYesterday) => {
            if (eachChampionshipTodayAndYesterday.league.id == navLeague.id) {
              if (navLeague.classList.contains("active-league")) {
                // console.log("test2");
                return navLeague;
              } else {
                // console.log("test3");
                return navLeague.classList.add("active-league");
              }
            }
          }
        );
      });
    })
    .catch(function (error) {
      console.error(error);

      if (error.response.status == 429) {
        let tooManyRequests = document.getElementById("too-many-requests");
        tooManyRequests.classList.add("exaggerated");
      }
    });

  axios
    .request(sendRequestObj_ForLeaguesObj(previousDay))
    .then(function (response) {
      const allChampionshipsObject_Yesterday = response.data.response;
      // console.log(allChampionshipsObject_Yesterday)

      let currentLeagueMatchesYesterday =
        allChampionshipsObject_Yesterday.filter(
          (eachChampionship_Yesterday) => {
            return eachChampionship_Yesterday.league.id == navLeague.id;
          }
        );

      currentLeagueMatchesYesterday_Active =
        currentLeagueMatchesYesterday.filter((yesterdayMatches) => {
          return (
            yesterdayMatches.status == "1H" ||
            yesterdayMatches.status == "HT" ||
            yesterdayMatches.status == "2H" ||
            yesterdayMatches.status == "ET" ||
            yesterdayMatches.status == "P"
          );
        });
    })
    .catch(function (error) {
      console.error(error);

      if (error.response.status == 429) {
        let tooManyRequests = document.getElementById("too-many-requests");
        tooManyRequests.classList.add("exaggerated");
      }
    });
}

window.addEventListener("load", () => {
  // On window Load - "Date" div assign to the "Today DateTime"
  dateTime.innerText = TodayDateTime;

  // console.log(previousDay, "previousDay");
  // console.log(currentDateTime, "currentDateTime");
  // console.log(currentDateTime, "currentDateTime Static");

  // On window Load Function to Add - "active-league" Class to active Leagues in current Date
  ApiResponse_ForActiveLeague();

  // on Load window Return Flags to each League
  const options = {
    method: "GET",
    url: "https://api-football-beta.p.rapidapi.com/leagues",
    params: { id: `${parseInt(navLeague.id)}` },
    headers: {
      "X-RapidAPI-Key": "a6de39b80emsh2c79d430e72f9d6p1148c9jsna256d95e8fca",
      "X-RapidAPI-Host": "api-football-beta.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      // console.log(response.data, "- response.data", navLeague.id, "-this.navLeague.id");

      let countryAndLeagueObj = response.data;
      let countryObj = countryAndLeagueObj.response[0].country.name;
      let countryFlag = countryAndLeagueObj.response[0].country.flag;

      liCountriesArray.map((country) => {
        if (country.attributes.name.nodeValue == countryObj) {
          // console.log("hello1")
          country.classList.add("country");
          let countryFlagForCountry = document.createElement("div");
          countryFlagForCountry.style.backgroundImage = `url("${countryFlag}")`;
          countryFlagForCountry.classList.add("country-flag");
          // console.log(country.firstElementChild, "country.firstChild")
          country.prepend(countryFlagForCountry);
        }
      });
    })
    .catch(function (error) {
      console.error(error);

      if (error.response.status == 429) {
        let tooManyRequests = document.getElementById("too-many-requests");
        tooManyRequests.classList.add("exaggerated");
      }
    });
});

// On Load Window Return Logo for Eurpean Tournaments

// get Uefa Tournaments elements from Nodelist
// Map Through over the Uefa "a" Elements,
// create sibling "div" elements for Logo
// and added to it's parent "li" elements
UefaTournaments.map((UefaTournament) => {
  // On Load Window Send request object
  // fetch response object for logo
  // and Return Logo for Eurpean Tournaments
  axios
    .request(sendRequestObj_ForLeaguesFlagsAndLogos(UefaTournament))
    .then(function (response) {
      // Get Response Data
      let countryAndLeagueObj = response.data;
      let leagueObj = countryAndLeagueObj.response[0].league.name;
      let leagueLogo = countryAndLeagueObj.response[0].league.logo;

      // get List of Uefa "li" Elements from Nodelist
      let liEuropeanTournaments = document.querySelectorAll(".World");
      let liEuropeanTournamentsArray = [...liEuropeanTournaments];

      // Map Through over the Uefa "li" Elements
      // and add logos from "Responsed Data"
      liEuropeanTournamentsArray.map((europeanTournament) => {
        if (europeanTournament.attributes.name.nodeValue == leagueObj) {
          // console.log("hello2")
          let logoForEuropeanTournament = document.createElement("div");
          logoForEuropeanTournament.style.backgroundImage = `url("${leagueLogo}")`;
          logoForEuropeanTournament.classList.add("europeanTournamentLogo");
          // console.log(europeanTournament, "europeanTournament")
          europeanTournament.prepend(logoForEuropeanTournament);
        }
      });
    })
    .catch(function (error) {
      console.error(error);
      if (error.response.status == 429) {
        let tooManyRequests = document.getElementById("too-many-requests");
        tooManyRequests.classList.add("exaggerated");
      }
    });
});

// (in WIndow Load function)
// call arrow function to iterate over Navleagues
// to fetch 2 APi objects

// 1 - For current Date Leagues & matches
// 2 - For Opened Leagues Logos
navLeagues.map((navLeague) =>
  navLeague.addEventListener("click", () => {
    const sendRequestObj_optionsToday =
      sendRequestObj_ForLeaguesObj(currentDateTime);
    const sendRequestObj_optionsPreviousDay =
      sendRequestObj_ForLeaguesObj(previousDay);
    const sendRequestObj_ForLeagues_FlagsAndLogos =
      sendRequestObj_ForLeaguesFlagsAndLogos(navLeague);

    // FIRST REQUEST FOR "TODAY" LEAGUES & MATCHES
    axios
      .request(sendRequestObj_optionsToday)
      .then(function (response) {
        // console.log(response.data.response, "Today");
        // console.log(response.data.response.filter((eachCountryLeague) => {
        //     return eachCountryLeague.league.id == navLeague.id
        // }));
        const allChampionshipsObject = response.data.response;

        const currentLeagueMatches = allChampionshipsObject.filter(
          (eachCountryLeague) => {
            return (
              eachCountryLeague.league.name == navLeague.name &&
              eachCountryLeague.league.id == navLeague.id
            );
          }
        );
        // console.log(currentLeagueMatches, "currentLeagueMatches.league.name");

        eachLeagueMatchesToday = currentLeagueMatches.map((match) => {
          return {
            eachMatchLeagueName: match.league.name,
            eachMatchLeagueFlag: match.league.flag,
            eachMatchLeagueLogo: match.league.logo,
            eachMatchLeagueRound: match.league.round,
            eachMatchLeagueSeason: match.league.season,
            eachMatchId: match.fixture.id,
            eachMatchDate: match.fixture.date,
            eachMatchTime_hours: new Date(match.fixture.date).getHours(),
            eachMatchTime_minutes: new Date(match.fixture.date).getMinutes(),
            eachMatchTime_seconds: new Date(match.fixture.date).getSeconds(),
            eachMatchTimestamp: match.fixture.timestamp,
            eachMatchMinutes: match.fixture.status.elapsed,
            eachMatchStatus: match.fixture.status.short,
            team1Id: match.teams.home.id,
            team2Id: match.teams.away.id,
            eachMatchTeam1: match.teams.home.name,
            eachMatchTeam1Logo: match.teams.home.logo,
            eachMatchTeam2: match.teams.away.name,
            eachMatchTeam2Logo: match.teams.away.logo,
            eachMatchGoals: match.goals.home + " - " + match.goals.away,
            eachMatchHalfScore:
              match.score.halftime.home + " - " + match.score.halftime.away,
            eachMatchScore:
              match.score.fulltime.home + " - " + match.score.fulltime.away,
            eachMatchExtraTimeScore:
              match.score.extratime.home + " - " + match.score.extratime.away,
            eachMatchPenalty:
              match.score.penalty.home + " - " + match.score.penalty.away,
          };
        });
        // console.log(eachLeagueMatchesToday, "eachLeagueMatchesToday")

        function leagueNameH3Func() {
          if (
            ![...matchList.childNodes].some(
              (lgNameH3) => lgNameH3.id == navLeague.id
            )
          ) {
            var leagueNameAndMatchesWrapper = document.createElement("div");
            leagueNameAndMatchesWrapper.classList.add("LeagueName");
            leagueNameAndMatchesWrapper.id = `${navLeague.id}`;
            leagueNameAndMatchesWrapper.setAttribute(
              "name",
              `${navLeague.name}`
            );

            var leagueNameH3 = document.createElement("h3");
            leagueNameH3.classList.add("LeagueNameH3");
            leagueNameH3.id = `${navLeague.id}`;
            leagueNameH3.innerText = navLeague.name;

            // console.log(navLeague.name, "name", leagueNameH3.id, "id")
            leagueNameAndMatchesWrapper.appendChild(leagueNameH3);

            if (currentLeagueMatches.length == 0) {
              var NoMatches = document.createElement("div");
              leagueNameAndMatchesWrapper.style.flexDirection = "column";
              NoMatches.classList.add("no-matches");
              NoMatches.innerText = "There is no matches today";
              leagueNameAndMatchesWrapper.appendChild(NoMatches);

              // console.log("There is no match today");
            }

            matchList.appendChild(leagueNameAndMatchesWrapper);

            //  INVOKE "getLogo()" FUNCTION
            //  TO GET RESPONSE_OBJ FOR LOGO
            getLogo(
              sendRequestObj_ForLeagues_FlagsAndLogos,
              leagueNameAndMatchesWrapper
            );
          } else {
            [...matchList.childNodes].map((leagueNameH3) => {
              if (navLeague.id == leagueNameH3.id)
                return matchList.removeChild(leagueNameH3);
            });
          }
        }
        leagueNameH3Func();
        // console.log(myEachLeague, "myEachLeague")

        // create "getLogo()" Function
        // send in it as a parameter "options2" to get Response_obj for Logos &
        // invoke it in Function "leagueNameH3Func" - into "createLeaguesAndMatches()" Function
        function getLogo(options2, leagueNameAndMatchesWrapper) {
          axios
            .request(options2)
            .then(function (response) {
              let countryAndLeagueObj = response.data;

              let leagueObj = countryAndLeagueObj.response[0].league.name;
              let leagueLogo = countryAndLeagueObj.response[0].league.logo;

              if (
                leagueNameAndMatchesWrapper.attributes.name.nodeValue ==
                leagueObj
              ) {
                var LogoDiv = document.createElement("div");
                LogoDiv.classList.add("league-logo");
                LogoDiv.id = `${navLeague.name}`;
                LogoDiv.style.backgroundImage = `url("${leagueLogo}")`;
                leagueNameAndMatchesWrapper.prepend(LogoDiv);
              }
            })
            .catch(function (error) {
              console.error(error);

              if (error.response.status == 429) {
                let tooManyRequests =
                  document.getElementById("too-many-requests");
                tooManyRequests.classList.add("exaggerated");
              }
            });
        }

        // Get Today Matches Array for Current League &
        // Get Yesterday Matches Array for current League (which matches are "active")
        // Concatinate in one Array - "todayAndYesterday_EachLeagueMatches"
        // Yesterday Matches & Today Matches - for "current League" in one array to Display
        todayAndYesterday_EachLeagueMatches = eachLeagueMatchesYesterday.concat(
          eachLeagueMatchesToday
        );

        function eachMatchesFixturesAndScores() {
          // console.log(
          //   todayAndYesterday_EachLeagueMatches,
          //   "todayAndYesterday_EachLeagueMatches"
          // );

          // here Experimental "todayAndYesterday_EachLeagueMatches" instead of "eachLeagueMatches"
          todayAndYesterday_EachLeagueMatches.filter((match) => {
            if (
              !myEachLeague.some(
                (myMatch) => myMatch.eachMatchId == match.eachMatchId
              )
            ) {
              myEachLeague.push(match);

              let team1Logo = document.createElement("div");
              team1Logo.classList.add("teamLogo", "team-1st-logo");
              // team1Logo.id = match.eachMatchTeam1Logo;
              team1Logo.style.backgroundImage = `url("${match.eachMatchTeam1Logo}")`;

              // create Team 1 div (and append to the "Match Wrapper" Div)
              let team1 = document.createElement("div");
              team1.classList.add("team", "team-1st");
              team1.id = match.team1Id;
              !team1.id ? team1.id : (team1.innerText = match.eachMatchTeam1);

              // create Time-Score div (and append to the "Match Wrapper" Div)
              let timeScore = document.createElement("div");
              let match_Time = document.createElement("div");
              let matchStatus = document.createElement("div");
              let matchMinutes = document.createElement("div");

              match_Time.appendChild(matchStatus);
              match_Time.appendChild(matchMinutes);

              timeScore.classList.add("time-score");
              timeScore.id = "time-score";

              match_Time.classList.add("match-time");
              matchStatus.classList.add("match-status");

              // console.log(match.eachMatchTime_hours,
              //             match.eachMatchTime_minutes)

              if (match.eachMatchTime_hours < 10) {
                match.eachMatchTime_hours = "0" + match.eachMatchTime_hours;
              }
              if (match.eachMatchTime_minutes < 10) {
                match.eachMatchTime_minutes = "0" + match.eachMatchTime_minutes;
              }

              let MatchTime =
                match.eachMatchTime_hours + ":" + match.eachMatchTime_minutes;
              // console.log(MatchTime, "MatchTime")

              // Chceck is Match No Started, Started, or Finished and apply result in time-score Div
              // eachMatchStatus ....
              if (match.eachMatchStatus == "PST") {
                matchStatus.innerText = match.eachMatchStatus;
                timeScore.style.fontSize = "12px";
                timeScore.innerText = "Match Postponed";
              } else if (match.eachMatchStatus == "NS") {
                // console.log("test1")
                matchStatus.innerText = match.eachMatchStatus;
                match_Time.style.fontSize = "15px";
                match_Time.innerText = MatchTime;
                timeScore.innerText = "VS";
                timeScore.style.color = "rgb(31, 34, 180)";
              } else if (match.eachMatchStatus == "1H") {
                // console.log("test2")
                matchMinutes.innerText = match.eachMatchMinutes;
                match_Time.appendChild(matchMinutes);
                timeScore.innerText = match.eachMatchGoals;

                matchMinutes.classList.add("match-minutes");
                timeScore.classList.add("active-game");
              } else if (match.eachMatchStatus == "HT") {
                // console.log("test2")
                matchStatus.innerText = match.eachMatchStatus;
                match_Time.classList.add("match-HT");
                timeScore.innerText = match.eachMatchGoals;
                timeScore.classList.add("active-game");
              } else if (match.eachMatchStatus == "2H") {
                // console.log("test3")
                matchMinutes.innerText = match.eachMatchMinutes;
                match_Time.appendChild(matchMinutes);
                timeScore.innerText = match.eachMatchGoals;

                matchMinutes.classList.add("match-minutes");
                timeScore.classList.add("active-game");
              } else if (
                match.eachMatchStatus == "FT" ||
                match.eachMatchStatus == "AET" ||
                match.eachMatchStatus == "BT"
              ) {
                // console.log("test4")
                matchStatus.innerText = match.eachMatchStatus;
                timeScore.innerText = match.eachMatchScore;
                timeScore.classList.remove("active-game");
                match_Time.style.color = "red";
                // console.log(match.eachMatchHalfScore, "match.eachMatchHalfScore")
              } else if (match.eachMatchStatus == "ET") {
                // console.log("test4")
                match_Time.innerText = match.eachMatchStatus;
                matchMinutes.innerText = match.eachMatchMinutes;
                match_Time.appendChild(matchMinutes);
                timeScore.innerText = match.eachMatchGoals;

                matchMinutes.classList.add("match-minutes");
                timeScore.classList.add("active-game");
                // console.log(match.eachMatchHalfScore, "match.eachMatchHalfScore")
              } else if (match.eachMatchStatus == "P") {
                matchStatus.innerText = "Penalty in Progress";
                match_Time.style.color = "rgb(22, 34, 128)";

                if (
                  match.score.penalty.home == null ||
                  match.score.penalty.away == null
                ) {
                  match.score.penalty.home == 0;
                  match.score.penalty.away == 0;
                  match.eachMatchPenalty =
                    match.score.penalty.home + " - " + match.score.penalty.away;
                  penaltyDiv.innerText = "VS";
                }
                timeScore.innerText = match.eachMatchGoals;
                timeScore.classList.add("active-game");

                let penaltyDiv = document.createElement("div");
                penaltyDiv.innerText = match.eachMatchPenalty;
                penaltyDiv.classList.add("penalty");
                timeScore.appendChild(penaltyDiv);
                // penaltyDiv.style.color = "blue"
                penaltyDiv.style.color = "rgb(22, 34, 128)";
              } else if (match.eachMatchStatus == "PEN") {
                matchStatus.innerText = "FT";
                match_Time.style.color = "red";

                timeScore.innerText = match.eachMatchExtraTimeScore;
                timeScore.classList.remove("active-game");

                let penaltyDiv = document.createElement("div");
                penaltyDiv.innerText = match.eachMatchPenalty;
                penaltyDiv.classList.add("penalty");
                timeScore.appendChild(penaltyDiv);
                // penaltyDiv.style.color = "blue"
                penaltyDiv.style.color = "rgb(22, 34, 128)";
              }

              timeScore.appendChild(match_Time);

              let team2Logo = document.createElement("div");
              team2Logo.classList.add("teamLogo", "team-2st-logo");
              // team1Logo.id = match.eachMatchTeam1Logo;
              team2Logo.style.backgroundImage = `url("${match.eachMatchTeam2Logo}")`;

              // create Team 2 div (and append to the "Match Wrapper" Div)
              let team2 = document.createElement("div");
              team2.classList.add("team", "team-2nd");
              team2.id = match.team1Id;
              team2.innerText = match.eachMatchTeam2;

              // create "Match Wrapper" Div element for Matches
              let matchWrapper = document.createElement("div");
              matchWrapper.classList.add("match-wrapper");
              matchWrapper.id = match.eachMatchId;

              matchWrapper.appendChild(team1Logo);
              matchWrapper.appendChild(team1);
              matchWrapper.appendChild(timeScore);
              matchWrapper.appendChild(team2);
              matchWrapper.appendChild(team2Logo);

              // append wrapper DOM element for Matches to the Match List element
              matchList.appendChild(matchWrapper);
            } else {
              // Remove matches on second click on the "navLeague", because there are all matches from current "eachLeague"
              // So while "myEachLeague" contains all matches from current "eachLeague"
              // in this filter it will be become Empty array
              myEachLeague = myEachLeague.filter(
                (myMatch) => myMatch.eachMatchId != match.eachMatchId
              );

              // So here will be removed all "MatchList" Div
              [...matchList.childNodes].map((myMatch) => {
                if (myMatch.id == match.eachMatchId) {
                  // console.log(myEachLeague, "myEachLeague", myMatch.id, "myMatch.id", match.eachMatchId, "match.eachMatchId")
                  matchList.removeChild(myMatch);
                }
              });
            }
          });
        }
        eachMatchesFixturesAndScores();
      })
      .catch(function (error) {
        console.error(error);

        if (error.response.status == 429) {
          let tooManyRequests = document.getElementById("too-many-requests");
          tooManyRequests.classList.add("exaggerated");
        }
      });

    // SECOND REQUEST FOR "YESTERDAY" LEAGUES & MATCHES
    axios
      .request(sendRequestObj_optionsPreviousDay)
      .then(function (response) {
        // console.log(
        //   response.data.response,
        //   "Previous Day",
        //   sendRequestObj_optionsPreviousDay,
        //   "sendRequestObj_optionsPreviousDay"
        // );
        // createLeaguesAndMatches(allChampionshipsObject_Yesterday)
        const allChampionshipsObject_Yesterday = response.data.response;

        const currentLeagueMatchesYesterday =
          allChampionshipsObject_Yesterday.filter((eachCountryLeague) => {
            return (
              eachCountryLeague.league.name == navLeague.name &&
              eachCountryLeague.league.id == navLeague.id
            );
          });
        // console.log(currentLeagueMatches, "currentLeagueMatches.league.name");

        // Get all yesterday matches from Current League
        eachLeagueMatchesYesterday = currentLeagueMatchesYesterday.map(
          (match) => {
            return {
              eachMatchLeagueName: match.league.name,
              eachMatchLeagueFlag: match.league.flag,
              eachMatchLeagueLogo: match.league.logo,
              eachMatchLeagueRound: match.league.round,
              eachMatchLeagueSeason: match.league.season,
              eachMatchId: match.fixture.id,
              eachMatchDate: match.fixture.date,
              eachMatchTime_hours: new Date(match.fixture.date).getHours(),
              eachMatchTime_minutes: new Date(match.fixture.date).getMinutes(),
              eachMatchTime_seconds: new Date(match.fixture.date).getSeconds(),
              eachMatchTimestamp: match.fixture.timestamp,
              eachMatchMinutes: match.fixture.status.elapsed,
              eachMatchStatus: match.fixture.status.short,
              team1Id: match.teams.home.id,
              team2Id: match.teams.away.id,
              eachMatchTeam1: match.teams.home.name,
              eachMatchTeam1Logo: match.teams.home.logo,
              eachMatchTeam2: match.teams.away.name,
              eachMatchTeam2Logo: match.teams.away.logo,
              eachMatchGoals: match.goals.home + " - " + match.goals.away,
              eachMatchHalfScore:
                match.score.halftime.home + " - " + match.score.halftime.away,
              eachMatchScore:
                match.score.fulltime.home + " - " + match.score.fulltime.away,
              eachMatchExtraTimeScore:
                match.score.extratime.home + " - " + match.score.extratime.away,
              eachMatchPenalty:
                match.score.penalty.home + " - " + match.score.penalty.away,
            };
          }
        );
        // console.log(eachLeagueMatchesYesterday, "eachLeagueMatchesYesterday");

        // Filter only Those yesterday Matches which is Active from Current League
        // (to show after new day starts at 12AM)
        eachLeagueMatchesYesterday = eachLeagueMatchesYesterday.filter(
          (match) => {
            return (
              match.eachMatchStatus == "1H" ||
              match.eachMatchStatus == "HT" ||
              match.eachMatchStatus == "2H" ||
              match.eachMatchStatus == "ET" ||
              match.eachMatchStatus == "P"
            );
          }
        );

        //           // Create The Function "todayAndYesterday_EachLeagueMatches"
        //           // where Yesterday Matches & Today Matches - concat in one array to Display
        // function todayAndYesterday_EachLeagueMatches(yesterdayMatches, todayMatches){
        //   todayAndYesterday_EachLeagueMatches = yesterdayMatches.concat(todayMatches)
        // }
        // todayAndYesterday_EachLeagueMatches(eachLeagueMatchesYesterday, eachLeagueMatchesToday)
        // // console.log(todayAndYesterday_EachLeagueMatches, "todayAndYesterday_EachLeagueMatches")
      })
      .catch(function (error) {
        console.error(error);
        if (error.response.status == 429) {
          let tooManyRequests = document.getElementById("too-many-requests");
          tooManyRequests.classList.add("exaggerated");
        }
      });
  })
);

//
//
//
//
//
//
//
//
//
//

// 1) converting date

// let currentDateTime = new Date().toISOString().substr(0, 19).replace('T', ' ');

// 2) converting date (Hard way)

// let date = new Date();
// var monthWithoutZero = date.getUTCMonth()
// var month = (monthWithoutZero >= 9) ? (monthWithoutZero+1) : "0"+(monthWithoutZero+1)

// var day = date.getUTCDate();
// var year = date.getUTCFullYear();
// let currentDateTime = year + "-" + month + "-" + (day);

// console.log(currentDateTime)
