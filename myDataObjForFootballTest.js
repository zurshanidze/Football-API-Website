data = [
      {
        league: {name: "Premier League", id: "39"},
        fixture: 
              {id: "1111",
               day: "4",
               status: {short: "1H"}
              },
        teams: {
                home: {id: "14", name: "Arsenal"},
                away: {id: "17", name: "Totenham"}
                },
        score: {
                halftime: {home: "0", away: "0"},
                fulltime: {home: "2", away: "0"}
        },
        goals: {
                home: "2",
                away: "0"
        }
      },
      {
        league: {name: "Premier League", id: "39"},
        fixture: 
              {id: "1122",
               day: "4",
               status: {short: "FT"}
              },
        teams: {
                home: {id: "15", name: "Liverpool"},
                away: {id: "19", name: "Burnley"}
                },
        score: {
                halftime: {home: "2", away: "1"},
                fulltime: {home: "5", away: "1"}
        },
        goals: {
                home: "5",
                away: "1"
        }
      },  
      {
        league: {name: "Bundesliga", id: "78"},
        fixture: 
              {id: "2222",
               day: "4",
               status: {short: "FT"}
              },
        teams: {
                home: {id: "21", name: "Bayern"},
                away: {id: "27", name: "Dortmund"}
                },
        score: {
                halftime: {home: "1", away: "1"},
                fulltime: {home: "4", away: "2"}
        },
        goals: {
                home: "4",
                away: "2"
        }
      },
      {
        league: {name: "Bundesliga", id: "78"},
        fixture: 
              {id: "2233",
               day: "4",
               status: {short: "FT"}
              },
        teams: {
                home: {id: "22", name: "Augsburg"},
                away: {id: "28", name: "Leverkusen"}
                },
        score: {
                halftime: {home: "0", away: "1"},
                fulltime: {home: "0", away: "2"}}
      },
      {
        league: {name: "Serie A", id: "135"},
        fixture: 
              {id: "3333",
               day: "4",
              },
        teams: {
                home: {id: "34", name: "Inter"},
                away: {id: "35", name: "Napol"}
                },
        score: {
                halftime: {home: "2", away: "1"},
                fulltime: {home: "2", away: "3"}}
      },
      {
        league: {name: "La Liga", id: "140"},
        fixture: 
              {id: "4444",
               day: "4",
              },
        teams: {
                home: {id: "41", name: "Celta"},
                away: {id: "45", name: "Villareal"}
                },
        score: {
                halftime: {home: "2", away: "1"},
                fulltime: {home: "3", away: "1"}}
      },
      {
        league: {name: "La Liga", id: "140"},
        fixture: 
              {id: "4455",
               day: "4",
               status: {short: "HT"}
              },
        teams: {
                home: {id: "43", name: "Sevilia"},
                away: {id: "47", name: "Bilbao"}
                },
        score: {
                halftime: {home: "0", away: "1"},
                fulltime: {home: "1", away: "1"}}
      },
      {
        league: {name: "Eredivisie", id: "88"},
        fixture: 
              {id: "5555",
               day: "4",
              },
        teams: {
                home: {id: "52", name: "PSV"},
                away: {id: "58", name: "Twente"}
                },
        score: {
                halftime: {home: "2", away: "2"},
                fulltime: {home: "4", away: "3"}}
      },
      {
        league: {name: "Eredivisie", id: "88"},
        fixture: 
              {id: "5566",
               day: "4",
              },
        teams: {
                home: {id: "54", name: "Feynoord"},
                away: {id: "57", name: "Ajax"}
                },
        score: {
                halftime: {home: "1", away: "2"},
                fulltime: {home: "1", away: "3"}}
      },
    ]



    data2 = [
            {
        league: {name: "Premier League", id: "39"},
        fixture: 
              {id: "1117",
               day: "4",
               status: {short: "1H"}
              },
        teams: {
                home: {id: "14", name: "West Ham"},
                away: {id: "17", name: "Southhampton"}
                },
        score: {
                halftime: {home: "0", away: "0"},
                fulltime: {home: "2", away: "0"}
        },
        goals: {
                home: "20",
                away: "10"
        }
      },
      {
        league: {name: "Premier League", id: "39"},
        fixture: 
              {id: "1127",
               day: "4",
               status: {short: "HT"}
              },
        teams: {
                home: {id: "15", name: "Man city"},
                away: {id: "19", name: "Leicester"}
                },
        score: {
                halftime: {home: "2", away: "1"},
                fulltime: {home: "5", away: "1"}
        },
        goals: {
                home: "50",
                away: "10"
        }
      }, 
    ]
    



let premierLeague = document.getElementById("39")
let championship = document.getElementById("40")
let bundesliga = document.getElementById("78")
let bundesliga2 = document.getElementById("79")
let serieA = document.getElementById("135")
let serieB = document.getElementById("136")
let laLiga = document.getElementById("140")
let SegundaDivision = document.getElementById("141")
let eredivisie = document.getElementById("88")
let jupilerProLeague = document.getElementById("144")
let ligue1 = document.getElementById("61")
let primeiraLiga = document.getElementById("94")
let premiership = document.getElementById("179")

let championsLeague = document.getElementById("2")
let europaLeague = document.getElementById("3")
let europaConferenceLeague = document.getElementById("848")

let minus1day = document.getElementById("minus1day");
let plus1day = document.getElementById("plus1day");

const matchList = document.querySelector(".match-list");

let liCountries = document.querySelectorAll(".country")
let liCountriesArray = [...liCountries]
let lieachCountry = liCountriesArray.map((country)=> country.attributes.name.nodeValue)
// console.log(lieachCountry, "lieachCountry")



let navLeagues = [premierLeague, championship, bundesliga, bundesliga2, serieA, serieB, laLiga, SegundaDivision, 
                  eredivisie, ligue1, jupilerProLeague, primeiraLiga, premiership,
                  championsLeague, europaLeague, europaConferenceLeague]
let UefaTournaments = [championsLeague, europaLeague, europaConferenceLeague]
let myEachLeague = [];




navLeagues.map((navLeague) => 
  navLeague.addEventListener("click", () => {
        // const allChampionshipsObject = response.data.response
    const allChampionshipsObject = data

    // console.log(allChampionshipsObject, "all Championships Object")    

    const currentLeagueMatches = allChampionshipsObject.filter((eachCountryLeague) => {
        return eachCountryLeague.league.name == navLeague.name && eachCountryLeague.league.id == navLeague.id
    })
    console.log(currentLeagueMatches, "currentLeague")
    // console.log(todayAndYesterday_EachLeagueMatches, "todayAndYesterday_EachLeagueMatches")

    const eachLeagueMatchesToday = currentLeagueMatches.map((match) => {
      return({
        eachMatchLeagueName: match.league.name,
        eachMatchLeagueFlag: match.league.flag,
        eachMatchLeagueLogo: match.league.logo,
        eachMatchLeagueRound: match.league.round,
        eachMatchLeagueSeason: match.league.season,
        eachMatchId: match.fixture.id,
        eachMatchDate: match.fixture.date,
        eachMatchTime_hours:new Date(match.fixture.date).getHours(),
        eachMatchTime_minutes:new Date(match.fixture.date).getMinutes(),
        eachMatchTime_seconds:new Date(match.fixture.date).getSeconds(),
        eachMatchTimestamp: match.fixture.timestamp,
        // eachMatchMinutes: match.fixture.status.elapsed,
        eachMatchStatus: match.fixture.status.short,
        team1Id:  match.teams.home.id,
        team2Id: match.teams.away.id,
        eachMatchTeam1: match.teams.home.name,
        eachMatchTeam1Logo: match.teams.home.logo,
        eachMatchTeam2: match.teams.away.name,
        eachMatchTeam2Logo: match.teams.away.logo,
        // eachMatchGoals: match.goals.home + " - " + match.goals.away,
        eachMatchHalfScore: match.score.halftime.home + " - " + match.score.halftime.away,
        eachMatchScore: match.score.fulltime.home + " - " + match.score.fulltime.away,
        // eachMatchExtraTimeScore: match.score.extratime.home + " - " + match.score.extratime.away,
        // eachMatchPenalty: match.score.penalty.home + " - " + match.score.penalty.away,
        }
      )                  
    })
    // console.log(eachLeagueMatches, "eachLeagueMatches")
    // todayAndYesterday_EachLeagueMatches.push(eachLeagueMatches.map((match) => match))
    console.log(eachLeagueMatchesToday, "eachLeagueMatchesToday")


    const allChampionshipsObjectYesterday = data2
    // console.log(allChampionshipsObject, "all Championships Object")    

    const currentLeagueMatchesYesterday = allChampionshipsObjectYesterday.filter((eachCountryLeague) => {
        return eachCountryLeague.league.name == navLeague.name && eachCountryLeague.league.id == navLeague.id
    })
    console.log(currentLeagueMatches, "currentLeague")

    // console.log(todayAndYesterday_EachLeagueMatches, "todayAndYesterday_EachLeagueMatches")

    let eachLeagueMatchesYesterday = currentLeagueMatchesYesterday.map((match) => {
        return({
        eachMatchLeagueName: match.league.name,
        eachMatchLeagueFlag: match.league.flag,
        eachMatchLeagueLogo: match.league.logo,
        eachMatchLeagueRound: match.league.round,
        eachMatchLeagueSeason: match.league.season,
        eachMatchId: match.fixture.id,
        eachMatchDate: match.fixture.date,
        eachMatchTime_hours:new Date(match.fixture.date).getHours(),
        eachMatchTime_minutes:new Date(match.fixture.date).getMinutes(),
        eachMatchTime_seconds:new Date(match.fixture.date).getSeconds(),
        eachMatchTimestamp: match.fixture.timestamp,
        // eachMatchMinutes: match.fixture.status.elapsed,
        eachMatchStatus: match.fixture.status.short,
        team1Id:  match.teams.home.id,
        team2Id: match.teams.away.id,
        eachMatchTeam1: match.teams.home.name,
        eachMatchTeam1Logo: match.teams.home.logo,
        eachMatchTeam2: match.teams.away.name,
        eachMatchTeam2Logo: match.teams.away.logo,
        // eachMatchGoals: match.goals.home + " - " + match.goals.away,
        eachMatchHalfScore: match.score.halftime.home + " - " + match.score.halftime.away,
        eachMatchScore: match.score.fulltime.home + " - " + match.score.fulltime.away,
        // eachMatchExtraTimeScore: match.score.extratime.home + " - " + match.score.extratime.away,
        // eachMatchPenalty: match.score.penalty.home + " - " + match.score.penalty.away,
        }
      )            
            
    })
    console.log(eachLeagueMatchesYesterday, "eachLeagueMatchesYesterday")

    eachLeagueMatchesYesterday = eachLeagueMatchesYesterday.filter((match) =>{
      return match.eachMatchStatus == "1H" || match.eachMatchStatus == "HT" || match.eachMatchStatus == "2H"
    })


    function todayAndYesterday_EachLeagueMatches(todayMatches, yesterdayMatches){
      todayAndYesterday_EachLeagueMatches = todayMatches.concat(yesterdayMatches)
    }
    todayAndYesterday_EachLeagueMatches(eachLeagueMatchesToday, eachLeagueMatchesYesterday)

    console.log(todayAndYesterday_EachLeagueMatches, "todayAndYesterday_EachLeagueMatches")



    function eachMatchesFixturesAndScores(){
//       console.log(myEachLeague, "myEachLeague -Yesterday")
      
      // todayAndYesterday_EachLeagueMatches.filter(match => {
      //   if (!myEachLeague.some(myMatch=>(myMatch.eachMatchId == match.eachMatchId))) {
      //     myEachLeague.push(match);
      //     // console.log(myEachLeague, "myEachLeague  in eachLeagueMatches")
      //     // console.log(myEachLeaguePrinted, "myEachLeaguePrinted eachLeagueMatches")
      //   }

      // });

      todayAndYesterday_EachLeagueMatches.map(match=> {
        // console.log(myEachLeague, "myEachLeague  in eachLeagueMatches 1")
        //   console.log(myEachLeaguePrinted, "myEachLeaguePrinted eachLeagueMatches 1")
        if (!myEachLeague.some(myMatch=>(myMatch.eachMatchId == match.eachMatchId))) {
          myEachLeague.push(match);
          // console.log(myEachLeague, "myEachLeague  in eachLeagueMatches 2")
          // console.log(myEachLeaguePrinted, "myEachLeaguePrinted eachLeagueMatches 2")

          let team1Logo = document.createElement('div');
          team1Logo.classList.add("teamLogo", "team-1st-logo");
          // team1Logo.id = match.eachMatchTeam1Logo;
          // team1Logo.style.backgroundImage = `url("${match.eachMatchTeam1Logo}")`

            // create Team 1 div (and append to the "Match Wrapper" Div)
          let team1 = document.createElement('div');
          team1.classList.add("team", "team-1st");
          team1.id = match.team1Id;
          ! team1.id ? match.id : team1.innerText = match.eachMatchTeam1


            // create Time-Score div (and append to the "Match Wrapper" Div)
          let timeScore = document.createElement('div');
          let match_Time = document.createElement('div');
          let matchStatus = document.createElement("div")
          let matchMinutes = document.createElement("div")

          match_Time.appendChild(matchStatus);
          match_Time.appendChild(matchMinutes);


          timeScore.classList.add("time-score");
          timeScore.id = "time-score"

          match_Time.classList.add("match-time");
          matchStatus.classList.add("match-status")

        //   console.log(myMatch.eachMatchTime_hours, 
        //               myMatch.eachMatchTime_minutes)

          if(match.eachMatchTime_hours < 10){
            match.eachMatchTime_hours = "0" + match.eachMatchTime_hours
          }
          if(match.eachMatchTime_minutes < 10){
            match.eachMatchTime_minutes = "0" + match.eachMatchTime_minutes
          }

    let MatchTime = match.eachMatchTime_hours + ":" + match.eachMatchTime_minutes
    // console.log(MatchTime, "MatchTime")

          // Chceck is Match No Started, Started, or Finished and apply result in time-score Div
          // eachMatchStatus ....
          if(match.eachMatchStatus == "PST"){
            matchStatus.innerText = match.eachMatchStatus
            timeScore.style.fontSize = "12px";
            timeScore.innerText = "Match Postponed"
          }
          else if(match.eachMatchStatus == 'NS'){
            // console.log("test1")
            matchStatus.innerText = match.eachMatchStatus
            match_Time.style.fontSize = "15px";
            match_Time.innerText = MatchTime
            timeScore.innerText = "VS"
            timeScore.style.color = "rgb(31, 34, 180)"
          }else if(match.eachMatchStatus == "1H"){
            // console.log("test2")
            matchMinutes.innerText = match.eachMatchStatus
            match_Time.appendChild(matchMinutes);
            timeScore.innerText = match.eachMatchScore

            matchMinutes.classList.add("match-minutes")
            timeScore.classList.add("active-game")
          }
          else if(match.eachMatchStatus == "HT"){
            // console.log("test2")
            matchStatus.innerText = match.eachMatchStatus
            match_Time.classList.add("match-HT")
            timeScore.innerText = match.eachMatchScore
            timeScore.classList.add("active-game")
          }
          else if(match.eachMatchStatus == "2H"){
            // console.log("test3")
            matchMinutes.innerText = match.eachMatchStatus
            match_Time.appendChild(matchMinutes);
            timeScore.innerText = match.eachMatchScore

            matchMinutes.classList.add("match-minutes")
            timeScore.classList.add("active-game")
          }
          else if(match.eachMatchStatus == "FT" || match.eachMatchStatus == "AET" || match.eachMatchStatus == "BT"){
            // console.log("test4")
            matchStatus.innerText = match.eachMatchStatus
            timeScore.innerText = match.eachMatchScore
            timeScore.classList.remove("active-game")
            match_Time.style.color = "red"
            // console.log(match.eachMatchHalfScore, "match.eachMatchHalfScore")
          }
          else if(match.eachMatchStatus == "ET"){
            // console.log("test4")
            match_Time.innerText = match.eachMatchStatus
            matchMinutes.innerText = match.eachMatchMinutes
            match_Time.appendChild(matchMinutes);
            timeScore.innerText = match.eachMatchGoals

            matchMinutes.classList.add("match-minutes")
            timeScore.classList.add("active-game")
            // console.log(match.eachMatchHalfScore, "match.eachMatchHalfScore")
          }
          else if(match.eachMatchStatus == "P"){
            matchStatus.innerText = "Penalty in Progress"
            match_Time.style.color = "rgb(22, 34, 128)"
            
            if(match.score.penalty.home == null || match.score.penalty.away == null){
              match.score.penalty.home == 0
              match.score.penalty.away == 0
              match.eachMatchPenalty = match.score.penalty.home + " - " + match.score.penalty.away
              penaltyDiv.innerText = "VS"
            }
            timeScore.innerText = match.eachMatchGoals
            timeScore.classList.add("active-game")
            
            let penaltyDiv = document.createElement("div")
            penaltyDiv.innerText = match.eachMatchPenalty
            penaltyDiv.classList.add("penalty")
            timeScore.appendChild(penaltyDiv)
            // penaltyDiv.style.color = "blue"
            penaltyDiv.style.color = "rgb(22, 34, 128)"
          }
          else if(match.eachMatchStatus == "PEN"){
            matchStatus.innerText = "FT"
            match_Time.style.color = "red"
            
            timeScore.innerText = match.eachMatchExtraTimeScore
            timeScore.classList.remove("active-game")
            
            let penaltyDiv = document.createElement("div")
            penaltyDiv.innerText = match.eachMatchPenalty
            penaltyDiv.classList.add("penalty")
            timeScore.appendChild(penaltyDiv)
            // penaltyDiv.style.color = "blue"
            penaltyDiv.style.color = "rgb(22, 34, 128)"
          }

          timeScore.appendChild(match_Time)

          let team2Logo = document.createElement('div');
          team2Logo.classList.add("teamLogo", "team-2st-logo");
          // team1Logo.id = match.eachMatchTeam1Logo;
          // team2Logo.style.backgroundImage = `url("${match.eachMatchTeam2Logo}")`

          // create Team 2 div (and append to the "Match Wrapper" Div)
          let team2 = document.createElement('div');
          team2.classList.add("team", "team-2nd");
          team2.id = match.team1Id;
          team2.innerText = match.eachMatchTeam2

          // create "Match Wrapper" Div element for Matches
          let matchWrapper = document.createElement('div');
          matchWrapper.classList.add("match-wrapper");
          matchWrapper.id = match.eachMatchId;


          matchWrapper.appendChild(team1Logo)
          matchWrapper.appendChild(team1)
          matchWrapper.appendChild(timeScore)
          matchWrapper.appendChild(team2)
          matchWrapper.appendChild(team2Logo)

          // append wrapper DOM element for Matches to the Match List element
              matchList.appendChild(matchWrapper)
        }
        else{
          // Remove matches on second click on the "navLeague", because there are all matches from current "eachLeague"
          // So while "myEachLeague" contains all matches from current "eachLeague"
          // in this filter it will be become Empty array
            myEachLeague = myEachLeague.filter((myMatch) => myMatch.eachMatchId != match.eachMatchId);
            
            // console.log(myEachLeague, "myEachLeague  in eachLeagueMatches remove")
            // console.log(myEachLeaguePrinted, "myEachLeaguePrinted eachLeagueMatches remove");
            // So here will be removed all "MatchList" Div
            [...matchList.childNodes].map(myMatch => {
                      if(myMatch.id == match.eachMatchId){
                        console.log(myEachLeague, "myEachLeague", myMatch.id, "myMatch.id", match.eachMatchId, "match.eachMatchId")
                        matchList.removeChild(myMatch);
                      }
                    });
                    
        }
        })
    }
    eachMatchesFixturesAndScores()




    
  })
)