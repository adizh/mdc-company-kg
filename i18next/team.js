function updateContent() {
  document.getElementById("ourTeam").innerHTML = i18next.t("ourTeam");
  document.getElementById("advisors").innerHTML = i18next.t("advisors");
  document.getElementById("execDirector").innerHTML = i18next.t("director");
  //document.getElementById("lawyer").innerHTML = i18next.t("lawyer");
  document.getElementById("teamTitle").innerHTML = i18next.t("teamTitle");
  document.getElementById("teamText").innerHTML = i18next.t("teamText");
  document.getElementById("founderCEO").innerHTML = i18next.t("founderCEO");
  document.getElementById("cto").innerHTML = i18next.t("cto");
  document.getElementById("chiefOfficer").innerHTML = i18next.t("chiefOfficer");

  document.getElementById("communications").innerHTML =
    i18next.t("communications");
  document.getElementById("flutterDeveloper").innerHTML =
    i18next.t("flutterDeveloper");
  document.getElementById("flutterDeveloper2").innerHTML =
    i18next.t("flutterDeveloper");

  document.getElementById("qaEng").innerHTML = i18next.t("qaEng");
  // document.getElementById("frontDev").innerHTML = i18next.t("frontDev");
  document.getElementById("projManager").innerHTML = i18next.t("projManager");
  document.getElementById("wantToJoin").innerHTML = i18next.t("wantToJoin");
  document.getElementById("apply").innerHTML = i18next.t("apply");
  document.getElementById("protectText").innerHTML = i18next.t("protectText");
  document.getElementById("address").innerHTML = i18next.t("address");
  document.getElementById("signEmail").innerHTML = i18next.t("signEmail");
  document.getElementById("newsUpdates").innerHTML = i18next.t("newsUpdates");
  //document.getElementById("terms").innerHTML = i18next.t("terms");
  document.getElementById("rights").innerHTML = i18next.t("rights");
  document.getElementById("GDPR").innerHTML = i18next.t("GDPR");
  //document.getElementById("policy").innerHTML = i18next.t("policy");
  document.getElementById("whitepaper").innerHTML = i18next.t("whitepaper");
  document.getElementById("callUs").innerHTML = i18next.t("callUs");
  document.getElementById("subscribeTeam").value = i18next.t("subsribe");
  document.getElementById("emailAddress").value = i18next.t("emailAddress");
  // document.getElementById("chooseLan").innerHTML = i18next.t("chooseLan");
  document.getElementById("docs").innerHTML = i18next.t("docs");
  document.getElementById("app").innerHTML = i18next.t("app");
  document.getElementById("contactUs2").innerHTML = i18next.t("contactUs");
  document.getElementById("ourTeam2").innerHTML = i18next.t("ourTeam");
  document.getElementById("home").innerHTML = i18next.t("home");
  document.getElementById("aboutUs").innerHTML = i18next.t("aboutUs");
  document.getElementById("designer").innerHTML = i18next.t("designer");
  document.getElementById("pitchDeck").innerHTML = i18next.t("pitchDeck");

  document.getElementById("termsPdf").innerHTML = i18next.t("termsPdf");
  document.getElementById("dataHolderAgreement").innerHTML = i18next.t(
    "dataHolderAgreement"
  );
  document.getElementById("privacyPolicyPdf").innerHTML =
    i18next.t("privacyPolicyPdf");
  document.getElementById("subjectAgreement").innerHTML =
    i18next.t("subjectAgreement");

  const devs = document.querySelectorAll(".developer");
  for (let i = 0; i < devs.length; i++)
    [(devs[i].innerHTML = i18next.t("developer"))];
}


import teamRu from "../locales/ru/teamRu.js";


const selectedLanguage = localStorage.getItem("selectedLanguage");
i18next.init({
  lng:
    selectedLanguage && selectedLanguage != null && selectedLanguage.length > 0
      ? selectedLanguage
      : "ru",
  debug: true,
  resources: {
  
    ru: {
      translation: teamRu,
    },
  
  },
});
updateContent();

export function changeLng(lng) {
  i18next.changeLanguage(lng);
  localStorage.setItem("selectedLanguage", lng);
}

i18next.on("languageChanged", () => {
  updateContent();
});
