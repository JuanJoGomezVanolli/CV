const LatitudScore = document.querySelector(".latitude-1");
const LongitudeScore = document.querySelector(".longitude-1");
const idScore = document.querySelector(".id-1");
const IssLink = "https://api.wheretheiss.at/v1/satellites/25544";
//const FightLink = "https://fightingtomatoes.com/API/de36518b68f6dbe319fbac9be7c3b8e282af5a12/2018/any/any"

async function getISS() {
  const response = await fetch(IssLink);
  const data = await response.json();
  console.log(data);
  LatitudScore.textContent = data.latitude;
  LongitudeScore.textContent = data.longitude;
  idScore.textContent = data.id;
}

getISS();
//getFight()
