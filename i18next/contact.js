function updateContent() {
  document.getElementById("touch").innerHTML = i18next.t("touch");
  document.getElementById("touchTitle").innerHTML = i18next.t("touchTitle");
  document.getElementById("touchText").innerHTML = i18next.t("touchText");
  document.getElementById("office").innerHTML = i18next.t("office");
  document.getElementById("telegramSupport").innerHTML =
    i18next.t("telegramSupport");
  document.getElementById("address").innerHTML = i18next.t("address");
  document.getElementById("address2").innerHTML = i18next.t("address");
  document.getElementById("sendMsg").innerHTML = i18next.t("sendMsg");
  document.getElementById("name").innerHTML = i18next.t("name");
  document.getElementById("email").innerHTML = i18next.t("email");
  document.getElementById("message").innerHTML = i18next.t("message");

  document.getElementById("mission").innerHTML = i18next.t("mission");
  document.getElementById("missionTitle").innerHTML = i18next.t("missionTitle");
  document.getElementById("missionText").innerHTML = i18next.t("missionText");
  document.getElementById("ask").innerHTML = i18next.t("ask");
  document.getElementById("askText").innerHTML = i18next.t("askText");

  document.getElementById("submit").value = i18next.t("submit");
  document.getElementById("submit2").value = i18next.t("submit");
  document.getElementById("partnership").innerHTML = i18next.t("partnership");
  document.getElementById("partnerText").innerHTML = i18next.t("partnerText");
  document.getElementById("learnMore").innerHTML = i18next.t("learnMore");
  document.getElementById("career").innerHTML = i18next.t("career");
  document.getElementById("careerText").innerHTML = i18next.t("careerText");
  document.getElementById("apply").innerHTML = i18next.t("apply");
  document.getElementById("visitGroup").innerHTML = i18next.t("visitGroup");
  document.getElementById("locations").innerHTML = i18next.t("locations");
  document.getElementById("locationTitle").innerHTML =
    i18next.t("locationTitle");
  document.getElementById("locationText").innerHTML = i18next.t("locationText");
  document.getElementById("howTo").innerHTML = i18next.t("howTo");
  document.getElementById("findOffice").innerHTML = i18next.t("findOffice");
  document.getElementById("protectText").innerHTML = i18next.t("protectText");
  //document.getElementById("chooseLan").innerHTML = i18next.t("chooseLan");
  document.getElementById("contactUs").innerHTML = i18next.t("contactUs");

  document.getElementById("callUs").innerHTML = i18next.t("callUs");
  document.getElementById("signEmail").innerHTML = i18next.t("signEmail");
  document.getElementById("newsUpdates").innerHTML = i18next.t("newsUpdates");
  // document.getElementById("terms").innerHTML = i18next.t("terms");
  document.getElementById("rights").innerHTML = i18next.t("rights");
  document.getElementById("GDPR").innerHTML = i18next.t("GDPR");
  // document.getElementById("policy").innerHTML = i18next.t("policy");
  document.getElementById("whitepaper").innerHTML = i18next.t("whitepaper");
  document.getElementById("callUs").innerHTML = i18next.t("callUs");
  document.getElementById("pitchDeck1").innerHTML = i18next.t("pitchDeck1");
  document.getElementById("emailAddressContact").placeholder =
    i18next.t("emailAddress");

  document.getElementById("docs").innerHTML = i18next.t("docs");
  document.getElementById("app").innerHTML = i18next.t("app");
  document.getElementById("contactUs2").innerHTML = i18next.t("contactUs");
  document.getElementById("ourTeam2").innerHTML = i18next.t("ourTeam");
  document.getElementById("home").innerHTML = i18next.t("home");
  document.getElementById("aboutUs").innerHTML = i18next.t("aboutUs");

  document.getElementById("termsPdf").innerHTML = i18next.t("termsPdf");
  document.getElementById("dataHolderAgreement").innerHTML = i18next.t(
    "dataHolderAgreement"
  );
  document.getElementById("privacyPolicyPdf").innerHTML =
    i18next.t("privacyPolicyPdf");
  document.getElementById("subjectAgreement").innerHTML =
    i18next.t("subjectAgreement");
}

import contactRu from "../locales/ru/contactRu.js";

const selectedLanguage = localStorage.getItem("selectedLanguage");
i18next.init({
  lng:
    selectedLanguage && selectedLanguage != null && selectedLanguage.length > 0
      ? selectedLanguage
      : "ru",
  debug: true,
  resources: {
    ru: {
      translation: contactRu,
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
