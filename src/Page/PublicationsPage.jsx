"use client";
import React, { useState } from "react";
import { File } from "lucide-react";

// ----- JSON DATA -----
const publications = [
  // === 2025 Publications ===
  {
    id: 1,
    date: "SEPTEMBER 2025",
    type: "ARTICLE",
    title:
      "Evaluating Treatment Strategies in Advanced Endometrial Cancer: Primary Cytoreductive Surgery Versus Neoadjuvant Chemotherapy Followed by Interval Debulking Surgery-A Ten-Year Single-Centre Experience",
    link: "https://pubmed.ncbi.nlm.nih.gov/40933797/",
  },
  {
    id: 2,
    date: "MAY 2025",
    type: "ARTICLE",
    title:
      "Infrared and Raman spectroscopy of blood plasma for rapid endometrial cancer detection",
    link: "https://pubmed.ncbi.nlm.nih.gov/40383740/",
  },
  {
    id: 3,
    date: "MAY 2025",
    type: "ARTICLE",
    title: "Management of ovarian cysts and cancer in pregnancy",
    link: "https://www.obstetrics-gynaecology-journal.com/article/S1751-7214(25)00018-1/abstract",
  },

  // === 2024 Publications ===
  {
    id: 4,
    date: "OCTOBER 2024",
    type: "ARTICLE",
    title:
      "Risk-prediction models in postmenopausal patients with symptoms of suspected ovarian cancer in the UK (ROCkeTS): a multicentre, prospective diagnostic accuracy study",
    link: "https://www.thelancet.com/journals/lanonc/article/PIIS1470-2045(24)00406-6/fulltext",
  },
  {
    id: 5,
    date: "SEPTEMBER 2024",
    type: "ARTICLE",
    title:
      "Symptom-triggered testing detects early stage and low volume resectable advanced stage ovarian cancer",
    link: "https://pubmed.ncbi.nlm.nih.gov/39138005/",
  },
  {
    id: 6,
    date: "SEPTEMBER 2024",
    type: "ARTICLE",
    title:
      "British Gynaecological Cancer Society/British Association of Gynaecological Pathology consensus for genetic testing in epithelial ovarian cancer in the United Kingdom",
    link: "https://pubmed.ncbi.nlm.nih.gov/39222974/",
  },
  {
    id: 7,
    date: "JULY 2024",
    type: "ARTICLE",
    title:
      "Predicting psychological distress in advanced ovarian cancer patients during the COVID-19 pandemic",
    link: "https://pubmed.ncbi.nlm.nih.gov/38954223/",
  },
  {
    id: 8,
    date: "JULY 2024",
    type: "ARTICLE",
    title:
      "A prognostic model for use before elective surgery to estimate the risk of postoperative pulmonary complications (GSU-Pulmonary Score): a development and validation study in three international cohorts",
    link: "https://pubmed.ncbi.nlm.nih.gov/38906616/",
  },
  {
    id: 9,
    date: "JULY 2024",
    type: "ARTICLE",
    title:
      "Poly (ADP-ribose) polymerase inhibitor therapy and mechanisms of resistance in epithelial ovarian cancer",
    link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11317305/",
  },
  {
    id: 10,
    date: "MARCH 2024",
    type: "ARTICLE",
    title:
      "Is routine gastrointestinal endoscopy required in every woman with mucinous ovarian cancer? An analysis of survival rates and metastatic tumours in a cancer centre",
    link: "https://pubmed.ncbi.nlm.nih.gov/38237307/",
  },
  {
    id: 11,
    date: "2024",
    type: "ARTICLE",
    title:
      "Investigating harms of testing for ovarian cancer – psychological outcomes and cancer conversion rates in women with symptoms of ovarian cancer: A cohort study embedded in the multicentre ROCkeTS prospective diagnostic study",
    link: "https://pubmed.ncbi.nlm.nih.gov/38556698/",
  },
  {
    id: 12,
    date: "2024",
    type: "ARTICLE",
    title:
      "Vibrational biospectroscopy of blood plasma: an alternative approach to endometrial cancer diagnosis and screening",
    link: "https://pubmed.ncbi.nlm.nih.gov/35563249/",
  },

  // === 2023 Publications ===
  {
    id: 13,
    date: "NOVEMBER 2023",
    type: "ARTICLE",
    title:
      "Human papillomavirus (HPV) self-sampling to encourage the uptake of cervical screening",
    link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10666200/",
  },
  {
    id: 14,
    date: "AUGUST 2023",
    type: "ARTICLE",
    title:
      "A study of recurrence, complication and survival rates in patients with early stage vulval cancer undergoing sentinel lymph node sampling: a single-centre experience",
    link: "https://pubmed.ncbi.nlm.nih.gov/36854984/",
  },
  {
    id: 15,
    date: "JANUARY 2023",
    type: "ARTICLE",
    title:
      "British Gynaecological Cancer Society Recommendations for Evidence Based, Population Data Derived Quality Performance Indicators for Ovarian Cancer",
    link: "http://pubmed.ncbi.nlm.nih.gov/36672287/",
  },
  {
    id: 16,
    date: "JANUARY 2023",
    type: "ARTICLE",
    title:
      "Residual Disease Threshold After Primary Surgical Treatment for Advanced Epithelial Ovarian Cancer, Part 1: A Systematic Review and Network Meta-Analysis",
    link: "https://pubmed.ncbi.nlm.nih.gov/36608071/",
  },
  {
    id: 17,
    date: "JANUARY 2023",
    type: "ARTICLE",
    title:
      "Residual disease after primary surgical treatment for advanced epithelial ovarian cancer; Part 2: Network meta-analysis incorporating expert elicitation to adjust for publication bias",
    link: "https://pubmed.ncbi.nlm.nih.gov/36048531/",
  },

  // === 2022 Publications ===
  {
    id: 18,
    date: "NOVEMBER 2022",
    type: "ARTICLE",
    title:
      "Elective surgery system strengthening: development, measurement, and validation of the surgical preparedness index across 1632 hospitals in 119 countries",
    link: "https://pubmed.ncbi.nlm.nih.gov/36328042/",
  },
  {
    id: 19,
    date: "NOVEMBER 2022",
    type: "ARTICLE",
    title:
      "Outcomes of gynecologic cancer surgery during the COVID-19 pandemic: an international, multicenter, prospective CovidSurg-Gynecologic Oncology Cancer study",
    link: "https://pubmed.ncbi.nlm.nih.gov/35779589/",
  },
  {
    id: 20,
    date: "SEPTEMBER 2022",
    type: "ARTICLE",
    title:
      "Impact of residual disease as a prognostic factor for survival in women with advanced epithelial ovarian cancer after primary surgery",
    link: "https://pubmed.ncbi.nlm.nih.gov/36161421/",
  },
  {
    id: 21,
    date: "AUGUST 2022",
    type: "ARTICLE",
    title:
      "Ultra-radical (extensive) surgery versus standard surgery for the primary cytoreduction of advanced epithelial ovarian cancer",
    link: "https://pubmed.ncbi.nlm.nih.gov/36041232/",
  },
  {
    id: 22,
    date: "AUGUST 2022",
    type: "ARTICLE",
    title:
      "Residual disease after primary surgery for advanced epithelial ovarian cancer: expert elicitation exercise to explore opinions about potential impact of publication bias in a planned systematic review and meta-analysis",
    link: "https://pubmed.ncbi.nlm.nih.gov/36038183/",
  },
  {
    id: 23,
    date: "APRIL 2022",
    type: "ARTICLE",
    title:
      "Vibrational Biospectroscopy: An Alternative Approach to Endometrial Cancer Diagnosis and Screening",
    link: "https://pubmed.ncbi.nlm.nih.gov/35563249/",
  },
  {
    id: 24,
    date: "JANUARY 2022",
    type: "ARTICLE",
    title:
      "SARS-CoV-2 infection and venous thromboembolism after surgery: an international prospective cohort study",
    link: "https://pubmed.ncbi.nlm.nih.gov/34428858/",
  },
  {
    id: 25,
    date: "2022",
    type: "ARTICLE",
    title: "Management of ovarian cysts during pregnancy",
    link: "https://www.obstetrics-gynaecology-journal.com/article/S1751-7214(22)00110-5/abstract",
  },

  // === 2021 Publications ===
  {
    id: 26,
    date: "DECEMBER 2021",
    type: "ARTICLE",
    title:
      "Death following pulmonary complications of surgery before and during the SARS-CoV-2 pandemic",
    link: "https://pubmed.ncbi.nlm.nih.gov/34871379/",
  },
  {
    id: 27,
    date: "NOVEMBER 2021",
    type: "ARTICLE",
    title:
      "British Gynaecological Cancer Society (BGCS) uterine cancer guidelines: Recommendations for practice",
    link: "https://pubmed.ncbi.nlm.nih.gov/35065448/",
  },
  {
    id: 28,
    date: "NOVEMBER 2021",
    type: "ARTICLE",
    title:
      "Effect of COVID-19 pandemic lockdowns on planned cancer surgery for 15 tumour types in 61 countries: an international, prospective, cohort study",
    link: "https://pubmed.ncbi.nlm.nih.gov/34624250/",
  },
  {
    id: 29,
    date: "NOVEMBER 2021",
    type: "ARTICLE",
    title:
      "Effects of pre-operative isolation on postoperative pulmonary complications after elective surgery: an international prospective cohort study",
    link: "https://pubmed.ncbi.nlm.nih.gov/34371522/",
  },
  {
    id: 30,
    date: "NOVEMBER 2021",
    type: "ARTICLE",
    title:
      "Machine learning risk prediction of mortality for patients undergoing surgery with perioperative SARS-CoV-2: the COVIDSurg mortality score",
    link: "https://pubmed.ncbi.nlm.nih.gov/34227657/",
  },
  {
    id: 31,
    date: "SEPTEMBER 2021",
    type: "ARTICLE",
    title:
      "Interventions targeted at women to encourage the uptake of cervical screening",
    link: "https://pubmed.ncbi.nlm.nih.gov/34694000/",
  },
  {
    id: 32,
    date: "SEPTEMBER 2021",
    type: "ARTICLE",
    title:
      "SARS-CoV-2 vaccination modelling for safe surgery to save lives: data from an international prospective cohort study",
    link: "https://pubmed.ncbi.nlm.nih.gov/33761533/",
  },
  {
    id: 33,
    date: "SEPTEMBER 2021",
    type: "ARTICLE",
    title:
      "Mid-infrared spectral classification of endometrial cancer compared to benign controls in serum or plasma samples",
    link: "https://pubs.rsc.org/en/content/articlelanding/2021/an/d1an00833a",
  },
  {
    id: 34,
    date: "JUNE 2021",
    type: "ARTICLE",
    title:
      "Timing of surgery following SARS-CoV-2 infection: an international prospective cohort study",
    link: "https://pubmed.ncbi.nlm.nih.gov/33690889/",
  },
  {
    id: 35,
    date: "FEBRUARY 2021",
    type: "ARTICLE",
    title:
      "British Gynaecological Cancer Society/British Association of Gynaecological Pathology consensus for germline and tumor testing for BRCA1/2 variants in ovarian cancer in the United Kingdom",
    link: "https://pubmed.ncbi.nlm.nih.gov/33468564/",
  },
  {
    id: 36,
    date: "JANUARY 2021",
    type: "ARTICLE",
    title:
      "Elective Cancer Surgery in COVID-19-Free Surgical Pathways During the SARS-CoV-2 Pandemic: An International, Multicenter, Comparative Cohort Study",
    link: "https://pubmed.ncbi.nlm.nih.gov/33021869/",
  },
  {
    id: 37,
    date: "JANUARY 2021",
    type: "ARTICLE",
    title:
      "Preoperative nasopharyngeal swab testing and postoperative pulmonary complications in patients undergoing elective surgery during the SARS-CoV-2 pandemic",
    link: "https://pubmed.ncbi.nlm.nih.gov/33640908/",
  },

  // === 2020 Publications ===
  {
    id: 38,
    date: "NOVEMBER 2020",
    type: "ARTICLE",
    title: "Delaying surgery for patients with a previous SARS-CoV-2 infection",
    link: "https://pubmed.ncbi.nlm.nih.gov/32974904/",
  },
  {
    id: 39,
    date: "2020",
    type: "ARTICLE",
    title:
      "British Gynaecological Cancer Society recommendations and guidance on patient-initiated follow-up (PIFU)",
    link: "https://pubmed.ncbi.nlm.nih.gov/32312719/",
  },

  // === 2019 Publications ===
  {
    id: 40,
    date: "JANUARY 2019",
    type: "ARTICLE",
    title:
      "Impact of surgical site infection (SSI) following gynaecological cancer surgery in the united kingdom: a trainee-led multicentre audit and service evaluation",
    link: "https://pubmed.ncbi.nlm.nih.gov/30679297/",
  },
  {
    id: 41,
    date: "2019",
    type: "ARTICLE",
    title:
      "Sentinel lymph node consensus document of the British Gynaecological Cancer Society for endometrial, vulvar, and cervical cancers",
    link: "https://pubmed.ncbi.nlm.nih.gov/31685556/",
  },

  // === 2016 Publications ===
  {
    id: 42,
    date: "OCTOBER 2016",
    type: "ARTICLE",
    title:
      "Prevalence of appendiceal lesions in appendicectomies performed during surgery for mucinous ovarian tumours: A retrospective study",
    link: "https://pubmed.ncbi.nlm.nih.gov/27552403/",
  },
  {
    id: 43,
    date: "JULY 2016",
    type: "ARTICLE",
    title:
      "Pain relief for women with cervical intraepithelial neoplasia undergoing colposcopy treatment",
    link: "https://www.researchgate.net/publication/305421205_Pain_relief_for_women_with_cervical_intraepithelial_neoplasia_undergoing_colposcopy_treatment",
  },
  {
    id: 44,
    date: "FEBRUARY 2016",
    type: "ARTICLE",
    title:
      "Letter to Editor: STITCH Trial - A trial of wound closure technique or a trial of suture materials?",
    link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3182877/",
  },

  // === 2015 Publications ===
  {
    id: 45,
    date: "MAY 2015",
    type: "ARTICLE",
    title:
      "Segregation of ovarian cancer stage exploiting spectral biomarkers derived from blood plasma or serum analysis: ATR-FTIR spectroscopy coupled with variable selection methods",
    link: "https://pubmed.ncbi.nlm.nih.gov/25832726/",
  },

  // === 2014 Publications ===
  {
    id: 46,
    date: "OCTOBER 2014",
    type: "ARTICLE",
    title:
      "Classification of cervical cytology for HPV infection using biospectroscopy and variable selection techniques",
    link: "https://www.researchgate.net/publication/267394874_Classification_of_cervical_cytology_for_HPV_infection_using_biospectroscopy_and_variable_selection_techniques",
  },
  {
    id: 47,
    date: "JUNE 2014",
    type: "ARTICLE",
    title:
      "MGMT promoter hypermethylation and K-RAS, PTEN and TP53 mutations in tamoxifen-exposed and non-exposed endometrial cancer cases",
    link: "https://pubmed.ncbi.nlm.nih.gov/24853176/",
  },
  {
    id: 48,
    date: "APRIL 2014",
    type: "ARTICLE",
    title:
      "Vibrational spectroscopy of biofluids for disease screening or diagnosis: translation from the laboratory to a clinical setting",
    link: "https://pubmed.ncbi.nlm.nih.gov/24648213/",
  },
  {
    id: 49,
    date: "APRIL 2014",
    type: "ARTICLE",
    title:
      "Vibrational biospectroscopy coupled with multivariate analysis extracts potentially diagnostic features in blood plasma/serum of ovarian cancer patients",
    link: "https://www.researchgate.net/publication/258824980_Vibrational_biospectroscopy_coupled_with_multivariate_analysis_extracts_potentially_diagnostic_features_in_blood_plasmaserum_of_ovarian_cancer_patients",
  },
  {
    id: 50,
    date: "APRIL 2014",
    type: "ARTICLE",
    title:
      "Measuring similarity and improving stability in biomarker identification methods applied to Fourier-transform infrared (FTIR) spectroscopy",
    link: "https://www.researchgate.net/publication/260607390_Measuring_similarity_and_improving_stability_in_biomarker_identification_methods_applied_to_Fourier-transform_infrared_FTIR_spectroscopy",
  },
  {
    id: 51,
    date: "JANUARY 2014",
    type: "ARTICLE",
    title:
      "Histology Verification Demonstrates That Biospectroscopy Analysis of Cervical Cytology Identifies Underlying Disease More Accurately than Conventional Screening: Removing the Confounder of Discordance",
    link: "https://www.researchgate.net/publication/259631837_Histology_Verification_Demonstrates_That_Biospectroscopy_Analysis_of_Cervical_Cytology_Identifies_Underlying_Disease_More_Accurately_than_Conventional_Screening_Removing_the_Confounder_of_Discordance",
  },
  {
    id: 52,
    date: "2014",
    type: "ARTICLE",
    title: "Invasive vulval cancer",
    link: "https://www.sciencedirect.com/science/article/abs/pii/S175172141400061X",
  },

  // === 2013 Publications ===
  {
    id: 53,
    date: "NOVEMBER 2013",
    type: "ARTICLE",
    title:
      "Exploiting biospectroscopy as a novel screening tool for cervical cancer: towards a framework to validate its accuracy in a routine clinical setting",
    link: "https://www.researchgate.net/publication/258333836_Exploiting_biospectroscopy_as_a_novel_screening_tool_for_cervical_cancer_towards_a_framework_to_validate_its_accuracy_in_a_routine_clinical_setting",
  },
  {
    id: 54,
    date: "SEPTEMBER 2013",
    type: "ARTICLE",
    title:
      "Surgical approach to a vulval-pubic cartilaginous cyst: A case report and review of published work",
    link: "https://www.researchgate.net/publication/244479598_Surgical_approach_to_a_vulval-pubic_cartilaginous_cyst_A_case_report_and_review_of_published_work",
  },
  {
    id: 55,
    date: "JULY 2013",
    type: "ARTICLE",
    title:
      "Fourier-transform infrared spectroscopy coupled with a classification machine for the analysis of blood plasma or serum: A novel diagnostic approach for ovarian cancer",
    link: "https://www.researchgate.net/publication/234157919_Fourier-transform_infrared_spectroscopy_coupled_with_a_classification_machine_for_the_analysis_of_blood_plasma_or_serum_A_novel_diagnostic_approach_for_ovarian_cancer",
  },
  {
    id: 56,
    date: "JANUARY 2013",
    type: "ARTICLE",
    title:
      "Diagnostic segregation of human brain tumours using Fourier-transform infrared and/or Raman spectroscopy coupled with discriminant analysis",
    link: "https://www.researchgate.net/publication/258333753_Diagnostic_segregation_of_human_brain_tumours_using_Fourier-transform_infrared_andor_Raman_spectroscopy_coupled_with_discriminant_analysis",
  },
  {
    id: 57,
    date: "JANUARY 2013",
    type: "ARTICLE",
    title: "Persistent severe dysplasia of colonic neovagina: A case report",
    link: "https://www.researchgate.net/publication/232277329_Persistent_severe_dysplasia_of_colonic_neovagina_A_case_report",
  },

  // === 2012 Publications ===
  {
    id: 58,
    date: "DECEMBER 2012",
    type: "ARTICLE",
    title:
      "Cytochrome P1B1 (CYP1B1) polymorphisms and ovarian cancer risk: A meta-analysis",
    link: "https://www.researchgate.net/publication/231862627_Cytochrome_P1B1_CYP1B1_polymorphisms_and_ovarian_cancer_risk_A_meta-analysis",
  },
  {
    id: 59,
    date: "NOVEMBER 2012",
    type: "ARTICLE",
    title: "Correspondence: Treatment of breast cancer during pregnancy",
    link: "https://www.researchgate.net/publication/232764927_Treatment_of_breast_cancer_during_pregnancy",
  },
  {
    id: 60,
    date: "OCTOBER 2012",
    type: "ARTICLE",
    title:
      "Pain relief for women with cervical intraepithelial neoplasia undergoing colposcopy treatment",
    link: "https://www.researchgate.net/publication/232281187_Pain_relief_for_women_with_cervical_intraepithelial_neoplasia_undergoing_colposcopy_treatment",
  },
  {
    id: 61,
    date: "SEPTEMBER 2012",
    type: "ARTICLE",
    title:
      "Paraneoplastic vasculitis with digital necrosis: A rare presentation of advanced ovarian cancer",
    link: "https://www.researchgate.net/publication/224824370_Paraneoplastic_vasculitis_with_digital_necrosis_A_rare_presentation_of_advanced_ovarian_cancer",
  },
  {
    id: 62,
    date: "AUGUST 2012",
    type: "ARTICLE",
    title:
      "Symptoms and Risk Factors of Ovarian Cancer: A Survey in Primary Care",
    link: "https://www.researchgate.net/publication/230812442_Symptoms_and_Risk_Factors_of_Ovarian_Cancer_A_Survey_in_Primary_Care?_tp=eyJjb250ZXh0Ijp7ImZpcnN0UGFnZSI6InByb2ZpbGUiLCJwYWdlIjoicHJvZmlsZSJ9fQ",
  },
  {
    id: 63,
    date: "MAY 2012",
    type: "ARTICLE",
    title: "CYP1B1 and hormone-induced cancer",
    link: "https://www.researchgate.net/publication/224914095_CYP1B1_and_hormone-induced_cancer",
  },

  // === 2010 Publications ===
  {
    id: 64,
    date: "2010",
    type: "ARTICLE",
    title: "Management of breast cancer during pregnancy",
    link: "https://www.researchgate.net/publication/229806695_Management_of_breast_cancer_during_pregnancy?_tp=eyJjb250ZXh0Ijp7ImZpcnN0UGFnZSI6InByb2ZpbGUiLCJwYWdlIjoicHJvZmlsZSJ9fQ",
  },
  {
    id: 65,
    date: "2010",
    type: "ARTICLE",
    title: "Diagnosis and management of tuberculosis in pregnancy",
    link: "https://www.researchgate.net/publication/229794963_Diagnosis_and_management_of_tuberculosis_in_pregnancy",
  },

  // === 2009 Publications ===
  {
    id: 66,
    date: "OCTOBER 2009",
    type: "ARTICLE",
    title:
      "Fetal laceration injury during cesarean section and its long-term sequelae: a case report",
    link: "https://www.researchgate.net/publication/26855802_Fetal_laceration_injury_during_cesarean_section_and_its_long-term_sequelae_a_case_report?_tp=eyJjb250ZXh0Ijp7ImZpcnN0UGFnZSI6InByb2ZpbGUiLCJwYWdlIjoicHJvZmlsZSJ9fQ",
  },
  {
    id: 67,
    date: "2009",
    type: "ARTICLE",
    title:
      "Diagnosis and management of non-anti-D red cell antibodies in pregnancy",
    link: "https://www.researchgate.net/publication/229507904_Diagnosis_and_management_of_non-anti-D_red_cell_antibodies_in_pregnancy",
  },
  {
    id: 68,
    date: "2009",
    type: "ARTICLE",
    title: "Thyroid disease in pregnancy",
    link: "https://www.researchgate.net/publication/229973060_Thyroid_disease_in_pregnancy",
  },
  {
    id: 69,
    date: "2009",
    type: "ARTICLE",
    title: "Careers in Obstetrics and Gynaecology",
    link: "https://www.123doc.com/ejournals/files/17536995vol3iss3.pdf",
  },

  // === 2008 Publications ===
  {
    id: 70,
    date: "MAY 2008",
    type: "ARTICLE",
    title: "Correspondence: Twin birth study",
    link: "https://www.researchgate.net/publication/[TO_BE_ADDED]",
  },
  {
    id: 71,
    date: "MARCH 2008",
    type: "ARTICLE",
    title:
      "Caesarean scar endometriosis presenting as an acute abdomen: A case report and review of literature",
    link: "https://www.researchgate.net/publication/6138904_Caesarean_scar_endometriosis_presenting_as_an_acute_abdomen_A_case_report_and_review_of_literature",
  },

  // === 2007 Publications ===
  {
    id: 72,
    date: "DECEMBER 2007",
    type: "ARTICLE",
    title:
      "Idiopathic chronic fetomaternal haemorrhage presenting with reduced fetal movements",
    link: "https://www.researchgate.net/publication/5751046_Idiopathic_chronic_fetomaternal_haemorrhage_presenting_with_reduced_fetal_movements",
  },
];

export default function PublicationsSection() {
  const itemsPerPage = 5;
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(publications.length / itemsPerPage);

  const currentItems = publications.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage,
  );

  return (
    <section className="w-full py-16" style={{ backgroundColor: "#FFF7F9" }}>
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <h2
          className="text-center text-4xl font-bold"
          style={{ color: "#FF4B8B" }}
        >
          Publications & Updates
        </h2>

        <p
          className="text-center text-lg mt-2 mb-10"
          style={{ color: "#804659" }}
        >
          Academic papers and research contributions in obstetrics and
          gynaecology
        </p>

        {/* Content */}
        <div className="space-y-12">
          {currentItems.map((item) => (
            <div
              key={item.id}
              className="pb-12 last:border-none"
              style={{ borderBottom: "1px solid rgb(255,197,211)" }}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                {/* Date */}
                <div className="w-full md:w-1/4">
                  <p
                    className="font-medium tracking-wide"
                    style={{ color: "#804659" }}
                  >
                    {item.date}
                  </p>
                </div>

                {/* Article Content */}
                <div className="w-full md:w-3/4 space-y-2">
                  {/* Type */}
                  <div
                    className="flex items-center gap-2 text-sm font-semibold"
                    style={{ color: "#FF4B8B" }}
                  >
                    <File size={18} style={{ color: "#FF4B8B" }} />
                    {item.type}
                  </div>

                  {/* Title */}
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-2xl font-semibold transition"
                    style={{ color: "#0D1525" }}
                    onMouseEnter={(e) => (e.target.style.color = "#FF4B8B")}
                    onMouseLeave={(e) => (e.target.style.color = "#0D1525")}
                  >
                    {item.title}
                  </a>
                </div>
              </div>
            </div>
          ))}

          {/* Pagination */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              disabled={page === 1}
              onClick={() => {
                setPage((p) => p - 1);
                setTimeout(() => window.scrollTo({ top: 0, behavior: "instant" }), 0);
              }}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                page === 1
                  ? "opacity-40 cursor-not-allowed"
                  : "hover:bg-light-pink-1"
              }`}
              style={{ backgroundColor: "#FFC3D6", color: "#804659" }}
            >
              Previous
            </button>

            <span className="font-semibold" style={{ color: "#804659" }}>
              Page {page} of {totalPages}
            </span>

            <button
              disabled={page === totalPages}
              onClick={() => {
                setPage((p) => p + 1);
                setTimeout(() => window.scrollTo({ top: 0, behavior: "instant" }), 0);
              }}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                page === totalPages
                  ? "opacity-40 cursor-not-allowed"
                  : "hover:bg-light-pink-1"
              }`}
              style={{ backgroundColor: "#FFC3D6", color: "#804659" }}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
