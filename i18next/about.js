function updateContent() {
  document.getElementById("ourStory").innerHTML = i18next.t("ourStory");
  document.getElementById("aboutCompany").innerHTML = i18next.t("aboutCompany");
  document.getElementById("aboutInfo").innerHTML = i18next.t("aboutInfo");
  document.getElementById("ourMission").innerHTML = i18next.t("ourMission");
  document.getElementById("missionTitle").innerHTML = i18next.t("missionTitle");
  document.getElementById("missionText").innerHTML = i18next.t("missionText");
  document.getElementById("monetize").innerHTML = i18next.t("monetize");
  document.getElementById("monetizeText").innerHTML = i18next.t("monetizeText");
  document.getElementById("social").innerHTML = i18next.t("social");
  document.getElementById("socialText").innerHTML = i18next.t("socialText");
  document.getElementById("privacyAbout").innerHTML = i18next.t("privacy");
  document.getElementById("privacyText").innerHTML = i18next.t("privacyText");
  document.getElementById("whatWeDo").innerHTML = i18next.t("whatWeDo");
  document.getElementById("ourTitle").innerHTML = i18next.t("ourTitle");
  document.getElementById("ourText").innerHTML = i18next.t("ourText");
  document.getElementById("ourText2").innerHTML = i18next.t("ourText2");
  document.getElementById("ourText3").innerHTML = i18next.t("ourText3");
  document.getElementById("ourText4").innerHTML = i18next.t("ourText4");
  document.getElementById("ourText5").innerHTML = i18next.t("ourText5");
  document.getElementById("downloads").innerHTML = i18next.t("downloads");
  document.getElementById("dataCategories").innerHTML =
    i18next.t("dataCategories");
  document.getElementById("totalUsers").innerHTML = i18next.t("totalUsers");
  document.getElementById("partnership").innerHTML = i18next.t("partnership");
  document.getElementById("partnersTitle").innerHTML =
    i18next.t("partnersTitle");
  document.getElementById("partnersText").innerHTML = i18next.t("partnersText");
  document.getElementById("rights").innerHTML = i18next.t("rights");
  document.getElementById("newsUpdates").innerHTML = i18next.t("newsUpdates");
  document.getElementById("contactUs").innerHTML = i18next.t("contactUs");
  document.getElementById("address").innerHTML = i18next.t("address");
  document.getElementById("callUs").innerHTML = i18next.t("callUs");
  // document.getElementById("aboutTerms").innerHTML = i18next.t("terms");
  document.getElementById("aboutGDPR").innerHTML = i18next.t("GDPR");
  // document.getElementById("aboutPolicy").innerHTML = i18next.t("policy");
  document.getElementById("signEmail").innerHTML = i18next.t("signEmail");
  document.getElementById("aboutWhitepaper").innerHTML =
    i18next.t("whitepaper");
  document.getElementById("aboutPitchDeck").innerHTML = i18next.t("pitchDeck");
  document.getElementById("aboutSubscribe").value = i18next.t("subscribe");

  document.getElementById("emailAddressAbout").placeholder =
    i18next.t("emailAddress");

  document.getElementById("docs").innerHTML = i18next.t("docs");
  document.getElementById("app").innerHTML = i18next.t("app");
  document.getElementById("contactUs2").innerHTML = i18next.t("contactUs");
  document.getElementById("ourTeam2").innerHTML = i18next.t("ourTeam");
  document.getElementById("home").innerHTML = i18next.t("home");
  document.getElementById("aboutUs").innerHTML = i18next.t("aboutUs");
  // document.getElementById("chooseLan").innerHTML = i18next.t("chooseLan");
  const home = document.getElementById("home");

  document.getElementById("termsPdf").innerHTML = i18next.t("termsPdf");
  document.getElementById("dataHolderAgreement").innerHTML = i18next.t(
    "dataHolderAgreement"
  );
  document.getElementById("privacyPolicyPdf").innerHTML =
    i18next.t("privacyPolicyPdf");
  document.getElementById("subjectAgreement").innerHTML =
    i18next.t("subjectAgreement");
}

import aboutRu from "../locales/ru/aboutRu.js";

const selectedLanguage = localStorage.getItem("selectedLanguage");
i18next.init({
  lng:
    selectedLanguage && selectedLanguage != null && selectedLanguage.length > 0
      ? selectedLanguage
      : "ru", // if you're using a language detector, do not define the lng option
  debug: true,
  resources: {
    ru: {
      translation: aboutRu,
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
