function updateContent() {
  document.getElementById("termsOfService").innerHTML =
    i18next.t("termsOfService");
  document.getElementById("termsOfService2").innerHTML =
    i18next.t("termsOfService2");
  document.getElementById("useLicense").innerHTML = i18next.t("useLicense");
  document.getElementById("useLicenseInfo").innerHTML =
    i18next.t("useLicenseInfo");
  document.getElementById("modifyMaterial").innerHTML =
    i18next.t("modifyMaterial");
  document.getElementById("useMaterial").innerHTML = i18next.t("useMaterial");
  document.getElementById("reverseEngineer").innerHTML =
    i18next.t("reverseEngineer");
  document.getElementById("transferMaterials").innerHTML =
    document.getElementById("terminateLicense").innerHTML =
      i18next.t("terminateLicense");
  document.getElementById("disclaimer").innerHTML = i18next.t("disclaimer");
  document.getElementById("diclaimerText").innerHTML =
    i18next.t("diclaimerText");
  document.getElementById("disclaimerInfo").innerHTML =
    i18next.t("disclaimerInfo");
  document.getElementById("limitations").innerHTML = i18next.t("limitations");
  document.getElementById("limitationText").innerHTML =
    i18next.t("limitationText");
  document.getElementById("accuracyDetails").innerHTML =
    i18next.t("accuracyDetails");
  document.getElementById("latestUpdate").innerHTML = i18next.t("latestUpdate");
  document.getElementById("protectText").innerHTML = i18next.t("protectText");
  document.getElementById("contactUs").innerHTML = i18next.t("contactUs");
  document.getElementById("address").innerHTML = i18next.t("address");
  document.getElementById("callUs").innerHTML = i18next.t("callUs");
  document.getElementById("signEmail").innerHTML = i18next.t("signEmail");
  document.getElementById("newsUpdates").innerHTML = i18next.t("newsUpdates");
  document.getElementById("subsribe").value = i18next.t("subsribe");
  document.getElementById("emailAddress").value = i18next.t("emailAddress");
  document.getElementById("rights").innerHTML = i18next.t("rights");
  // document.getElementById("terms").innerHTML = i18next.t("terms");
  document.getElementById("GDPR").innerHTML = i18next.t("GDPR");
  //document.getElementById("policy").innerHTML = i18next.t("policy");
  document.getElementById("whitepaper").innerHTML = i18next.t("whitepaper");
  document.getElementById("pitchDeck").innerHTML = i18next.t("pitchDeck");
  //document.getElementById("chooseLan").innerHTML = i18next.t("chooseLan");
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


import termsRu from "../locales/ru/termsRu.js";


const selectedLanguage = localStorage.getItem("selectedLanguage");
i18next.init({
  lng:
    selectedLanguage && selectedLanguage != null && selectedLanguage.length > 0
      ? selectedLanguage
      : "ru", // if you're using a language detector, do not define the lng option
  debug: true,
  resources: {
    ru: {
      translation: termsRu,
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
