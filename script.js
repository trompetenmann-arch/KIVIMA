const translations = {
  de: {
    navStart: "Start",
    navMaterialien: "Materialien",
    navSeminar: "Seminar",
    navMitmachen: "Mitmachen",
    heroTitle: "KIVIMA: KI-gestützte Visualisierungen im Mathematikunterricht",
    heroText: "Willkommen auf der Projektseite von <strong>KIVIMA</strong>. Hier sammeln wir Materialien, Informationen und Ergebnisse aus dem Seminar, in dem Lehramtsstudierende interaktive Lernumgebungen entwickeln und sie im <strong>teutolab mathematik</strong> mit Schüler*innen erproben.",
    heroButton: "Zu den Materialien",
    aboutTitle: "Was ist KIVIMA?",
    aboutText: "KIVIMA ist ein vom Qualitätsfonds für Lehre gefördertes Seminarkonzept an der Universität Bielefeld. Lehramtsstudierende der Mathematik entwickeln dabei mit Hilfe von KI-Werkzeugen innovative Unterrichtsmaterialien und dynamische Visualisierungen. Diese werden nicht nur theoretisch konzipiert, sondern im teutolab mathematik praxisnah mit Schülerinnen und Schülern erprobt und reflektiert.",
    quickTitle: "Schnellzugriff",
    card1Title: "Materialsammlung",
    card1Text: "Alle bisher verfügbaren Dokumente, Handreichungen und Downloads.",
    card1Button: "Materialien öffnen",
    card2Title: "Seminarphasen",
    card2Text: "Einblick in Entwicklung, Erprobung im Teutolab und Nachbereitung.",
    card2Button: "Seminar ansehen",
    card3Title: "Teilnahme & Kontakt",
    card3Text: "Informationen für Schulen und Interessierte sowie Kontaktmöglichkeiten.",
    card3Button: "Mehr erfahren",
    partnerTitle: "Partner & Förderung",
    fundingNote: "Gefördert durch den<br /><a href=\"https://www.uni-bielefeld.de/einrichtungen/zll/hdle/qualitaetsfonds/\" target=\"_blank\" rel=\"noopener noreferrer\">Qualitätsfonds für Lehre</a>.",
    footerText: "<strong>KIVIMA</strong> – Projektseite im Kontext des <strong>teutolab mathematik</strong> der Universität Bielefeld."
  },
  es: {
    navStart: "Inicio",
    navMaterialien: "Materiales",
    navSeminar: "Seminario",
    navMitmachen: "Participar",
    heroTitle: "KIVIMA: Visualizaciones con IA en la enseñanza de matemáticas",
    heroText: "Bienvenidos a la página del proyecto <strong>KIVIMA</strong>. Aquí reunimos materiales, información y resultados del seminario en el que estudiantes de profesorado desarrollan entornos de aprendizaje interactivos y los prueban con alumnado en el <strong>teutolab mathematik</strong>.",
    heroButton: "Ir a materiales",
    aboutTitle: "¿Qué es KIVIMA?",
    aboutText: "KIVIMA es un concepto de seminario financiado por el Fondo de Calidad para la Enseñanza de la Universidad de Bielefeld. Estudiantes de profesorado de matemáticas desarrollan materiales didácticos innovadores y visualizaciones dinámicas con ayuda de herramientas de IA. Estos materiales no solo se diseñan teóricamente, sino que también se prueban y reflexionan en la práctica en teutolab mathematik junto con escolares.",
    quickTitle: "Acceso rápido",
    card1Title: "Colección de materiales",
    card1Text: "Todos los documentos, guías y descargas disponibles hasta ahora.",
    card1Button: "Abrir materiales",
    card2Title: "Fases del seminario",
    card2Text: "Panorama de desarrollo, prueba en teutolab y seguimiento.",
    card2Button: "Ver seminario",
    card3Title: "Participación y contacto",
    card3Text: "Información para centros educativos, personas interesadas y vías de contacto.",
    card3Button: "Más información",
    partnerTitle: "Socios y financiación",
    fundingNote: "Financiado por el<br /><a href=\"https://www.uni-bielefeld.de/einrichtungen/zll/hdle/qualitaetsfonds/\" target=\"_blank\" rel=\"noopener noreferrer\">Fondo de Calidad para la Enseñanza</a>.",
    footerText: "<strong>KIVIMA</strong> – Página del proyecto en el contexto de <strong>teutolab mathematik</strong> de la Universidad de Bielefeld."
  },
  en: {
    navStart: "Home",
    navMaterialien: "Materials",
    navSeminar: "Seminar",
    navMitmachen: "Get Involved",
    heroTitle: "KIVIMA: AI-supported visualizations in mathematics education",
    heroText: "Welcome to the <strong>KIVIMA</strong> project page. Here we collect materials, information, and outcomes from the seminar in which student teachers develop interactive learning environments and test them with pupils in the <strong>teutolab mathematik</strong>.",
    heroButton: "Go to materials",
    aboutTitle: "What is KIVIMA?",
    aboutText: "KIVIMA is a seminar concept at Bielefeld University funded by the Teaching Quality Fund. Mathematics student teachers develop innovative teaching materials and dynamic visualizations with AI tools. These materials are not only designed theoretically but are also tested and reflected on in practice with school students at teutolab mathematik.",
    quickTitle: "Quick access",
    card1Title: "Material collection",
    card1Text: "All documents, handouts, and downloads currently available.",
    card1Button: "Open materials",
    card2Title: "Seminar phases",
    card2Text: "Insights into development, testing at teutolab, and follow-up.",
    card2Button: "View seminar",
    card3Title: "Participation & contact",
    card3Text: "Information for schools, interested parties, and contact options.",
    card3Button: "Learn more",
    partnerTitle: "Partners & funding",
    fundingNote: "Funded by the<br /><a href=\"https://www.uni-bielefeld.de/einrichtungen/zll/hdle/qualitaetsfonds/\" target=\"_blank\" rel=\"noopener noreferrer\">Teaching Quality Fund</a>.",
    footerText: "<strong>KIVIMA</strong> – Project page in the context of <strong>teutolab mathematik</strong> at Bielefeld University."
  }
};

const setLanguage = (lang) => {
  const selectedLanguage = translations[lang] ? lang : "de";
  document.documentElement.lang = selectedLanguage;
  localStorage.setItem("kivima-language", selectedLanguage);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (translations[selectedLanguage][key]) {
      element.innerHTML = translations[selectedLanguage][key];
    }
  });

  document.querySelectorAll(".lang-btn").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === selectedLanguage);
  });
};

document.querySelectorAll(".lang-btn").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

const storedLanguage = localStorage.getItem("kivima-language") || "de";
setLanguage(storedLanguage);
