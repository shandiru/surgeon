"use client";
import React, { useState } from "react";
import { File } from "lucide-react";

// ----- JSON DATA -----
const publications = [
  {
    id: 1,
    date: "JULY 2016",
    type: "Chapter",
    title:
      "Pain relief for women with cervical intraepithelial neoplasia undergoing colposcopy treatment",
    link: "https://www.researchgate.net/publication/305421205_Pain_relief_for_women_with_cervical_intraepithelial_neoplasia_undergoing_colposcopy_treatment",
  },
  {
    id: 2,
    date: "NOVEMBER 2014",
    type: "ARTICLE",
    title:
      "Diagnostic Potential Of Near-infrared Raman Spectroscopy In Plasma: An Exploratory Study For Detection Of Endometrial Cancer",
    link: "https://www.researchgate.net/publication/293121254_Diagnostic_Potential_Of_Near-infrared_Raman_Spectroscopy_In_Plasma_An_Exploratory_Study_For_Detection_Of_Endometrial_Cancer",
  },
  {
    id: 3,
    date: "OCTOBER 2014",
    type: "ARTICLE",
    title:
      "Classification of cervical cytology for HPV infection using biospectroscopy and variable selection techniques",
    link: "https://www.researchgate.net/publication/267394874_Classification_of_cervical_cytology_for_HPV_infection_using_biospectroscopy_and_variable_selection_techniques",
  },
  {
    id: 4,
    date: "APRIL 2014",
    type: "ARTICLE",
    title:
      "Vibrational biospectroscopy coupled with multivariate analysis extracts potentially diagnostic features in blood plasma/serum of ovarian cancer patients",
    link: "https://www.researchgate.net/publication/258824980_Vibrational_biospectroscopy_coupled_with_multivariate_analysis_extracts_potentially_diagnostic_features_in_blood_plasmaserum_of_ovarian_cancer_patients",
  },
  {
    id: 5,
    date: "APRIL 2014",
    type: "ARTICLE",
    title:
      "Vibrational biospectroscopy coupled with multivariate analysis extracts potentially diagnostic features in blood plasma/serum of ovarian cancer patients",
    link: "https://www.researchgate.net/publication/258824980_Vibrational_biospectroscopy_coupled_with_multivariate_analysis_extracts_potentially_diagnostic_features_in_blood_plasmaserum_of_ovarian_cancer_patients",
  },
   {
    id: 6,
    date: "JANUARY 2014",
    type: "ARTICLE",
    title:
      "Histology Verification Demonstrates That Biospectroscopy Analysis of Cervical Cytology Identifies Underlying Disease More Accurately than Conventional Screening: Removing the Confounder of Discordance",
    link: "https://www.researchgate.net/publication/259631837_Histology_Verification_Demonstrates_That_Biospectroscopy_Analysis_of_Cervical_Cytology_Identifies_Underlying_Disease_More_Accurately_than_Conventional_Screening_Removing_the_Confounder_of_Discordance",
  },
   {
    id: 7,
    date: "NOVEMBER 2013",
    type: "ARTICLE",
    title:
      "Exploiting biospectroscopy as a novel screening tool for cervical cancer: towards a framework to validate its accuracy in a routine clinical setting",
    link: "https://www.researchgate.net/publication/258333836_Exploiting_biospectroscopy_as_a_novel_screening_tool_for_cervical_cancer_towards_a_framework_to_validate_its_accuracy_in_a_routine_clinical_setting",
  },
  {
    id: 8,
    date: "OCTOBER 2013",
    type: "ARTICLE",
    title:
      "BIOSPECTROSCOPY OF CERVICAL CYTOLOGY VS. CONVENTIONAL SCREENING IN IDENTIFICATION OF HISTOLOGY VERIFIED CERVICAL INTRA-EPITHELIAL LESIONS",
    link: "https://www.researchgate.net/publication/293476927_BIOSPECTROSCOPY_OF_CERVICAL_CYTOLOGY_VS_CONVENTIONAL_SCREENING_IN_IDENTIFICATION_OF_HISTOLOGY_VERIFIED_CERVICAL_INTRA-EPITHELIAL_LESIONS",
  },
   {
    id: 9,
    date: "JULY 2013",
    type: "ARTICLE",
    title:
      "Surgical approach to a vulval-pubic cartilaginous cyst: A case report and review of published work",
    link: "https://www.researchgate.net/publication/244479598_Surgical_approach_to_a_vulval-pubic_cartilaginous_cyst_A_case_report_and_review_of_published_work",
  },
  {
    id: 10,
    date: "JANUARY 2013",
    type: "ARTICLE",
    title:
      "Fourier-transform infrared spectroscopy coupled with a classification machine for the analysis of blood plasma or serum: A novel diagnostic approach for ovarian cancer",
    link: "https://www.researchgate.net/publication/234157919_Fourier-transform_infrared_spectroscopy_coupled_with_a_classification_machine_for_the_analysis_of_blood_plasma_or_serum_A_novel_diagnostic_approach_for_ovarian_cancer",
  },
   {
    id: 11,
    date: "JANUARY 2013",
    type: "ARTICLE",
    title:
      "Diagnostic segregation of human brain tumours using Fourier-transform infrared and/or Raman spectroscopy coupled with discriminant analysis",
    link: "https://www.researchgate.net/publication/258333753_Diagnostic_segregation_of_human_brain_tumours_using_Fourier-transform_infrared_andor_Raman_spectroscopy_coupled_with_discriminant_analysis",
  },
  {
    id: 12,
    date: "NOVEMBER 2012",
    type: "ARTICLE",
    title:
      "Treatment of breast cancer during pregnancy",
    link: "https://www.researchgate.net/publication/232764927_Treatment_of_breast_cancer_during_pregnancy",
  },
   {
    id: 13,
    date: "OCTOBER 2012",
    type: "ARTICLE",
    title:
      "Pain relief for women with cervical intraepithelial neoplasia undergoing colposcopy treatment",
    link: "https://www.researchgate.net/publication/232281187_Pain_relief_for_women_with_cervical_intraepithelial_neoplasia_undergoing_colposcopy_treatment",
  },
  {
    id: 14,
    date: "OCTOBER 2012",
    type: "ARTICLE",
    title:
      "Persistent severe dysplasia of colonic neovagina: A case report",
    link: "https://www.researchgate.net/publication/232277329_Persistent_severe_dysplasia_of_colonic_neovagina_A_case_report",
  },
  {
    id: 15,
    date: "SEPTEMBER 2012",
    type: "ARTICLE",
    title:
      "Cytochrome P1B1 (CYP1B1) polymorphisms and ovarian cancer risk: A meta-analysis",
    link: "https://www.researchgate.net/publication/231862627_Cytochrome_P1B1_CYP1B1_polymorphisms_and_ovarian_cancer_risk_A_meta-analysis",
  },
  {
    id: 16,
    date: "SEPTEMBER 2012",
    type: "ARTICLE",
    title:
      "Diagnostic segregation of human brain tumours using Fourier-transform infrared and/or Raman spectroscopy coupled with discriminant analysis",
    link: "https://www.researchgate.net/publication/257464095_Diagnostic_segregation_of_human_brain_tumours_using_Fourier-transform_infrared_andor_Raman_spectroscopy_coupled_with_discriminant_analysis",
  },
  {
    id: 17,
    date: "AUGUST 2012",
    type: "ARTICLE",
    title:
      "Symptoms and Risk Factors of Ovarian Cancer: A Survey in Primary Care",
    link: "https://www.researchgate.net/publication/230812442_Symptoms_and_Risk_Factors_of_Ovarian_Cancer_A_Survey_in_Primary_Care?_tp=eyJjb250ZXh0Ijp7ImZpcnN0UGFnZSI6InByb2ZpbGUiLCJwYWdlIjoicHJvZmlsZSJ9fQ",
  },
  {
    id: 18,
    date: "MAY 2012",
    type: "ARTICLE",
    title:
      "CYP1B1 and hormone-induced cancer",
    link: "https://www.researchgate.net/publication/224914095_CYP1B1_and_hormone-induced_cancer",
  },
   {
    id: 19,
    date: "APRIL 2012",
    type: "ARTICLE",
    title:
      "Paraneoplastic vasculitis with digital necrosis: A rare presentation of advanced ovarian cancer",
    link: "https://www.researchgate.net/publication/224824370_Paraneoplastic_vasculitis_with_digital_necrosis_A_rare_presentation_of_advanced_ovarian_cancer",
  },
  {
    id: 20,
    date: "JANUARY 2011",
    type: "ARTICLE",
    title:
      "Diagnosis and management of non‐anti‐D red cell antibodies in pregnancy",
    link: "https://www.researchgate.net/publication/229507904_Diagnosis_and_management_of_non-anti-D_red_cell_antibodies_in_pregnancy",
  },
  {
    id: 21,
    date: "JANUARY 2011",
    type: "ARTICLE",
    title:
      "Thyroid disease in pregnancy",
    link: "https://www.researchgate.net/publication/229973060_Thyroid_disease_in_pregnancy",
  },
   {
    id: 22,
    date: "JANUARY 2011",
    type: "ARTICLE",
    title:
      "Diagnosis and management of tuberculosis in pregnancy",
    link: "https://www.researchgate.net/publication/229794963_Diagnosis_and_management_of_tuberculosis_in_pregnancy",
  },
  {
    id: 23,
    date: "JANUARY 2011",
    type: "ARTICLE",
    title:
      "Management of breast cancer during pregnancy",
    link: "https://www.researchgate.net/publication/229806695_Management_of_breast_cancer_during_pregnancy?_tp=eyJjb250ZXh0Ijp7ImZpcnN0UGFnZSI6InByb2ZpbGUiLCJwYWdlIjoicHJvZmlsZSJ9fQ",
  },
   {
    id: 24,
    date: "OCTOBER 2009",
    type: "ARTICLE",
    title:
      "P935 Study of prevalence of intra-operative adhesions and its association with risk factors",
    link: "https://www.researchgate.net/publication/239991586_P935_Study_of_prevalence_of_intra-operative_adhesions_and_its_association_with_risk_factors",
  },
   {
    id: 25,
    date: "OCTOBER 2009",
    type: "ARTICLE",
    title:
      "O561 Opportunistic cervical cancer screening in a University Hospital in India in the absence of a national programme – Our experience",
    link: "https://www.researchgate.net/publication/246180192_O561_Opportunistic_cervical_cancer_screening_in_a_University_Hospital_in_India_in_the_absence_of_a_national_programme_-_Our_experience",
  },
   {
    id: 26,
    date: "OCTOBER 2009",
    type: "ARTICLE",
    title:
      "Fetal laceration injury during cesarean section and its long-term sequelae: a case report",
    link: "https://www.researchgate.net/publication/26855802_Fetal_laceration_injury_during_cesarean_section_and_its_long-term_sequelae_a_case_report?_tp=eyJjb250ZXh0Ijp7ImZpcnN0UGFnZSI6InByb2ZpbGUiLCJwYWdlIjoicHJvZmlsZSJ9fQ",
  },
   {
    id: 27,
    date: "JUNE 2008",
    type: "ARTICLE",
    title:
      "Increased perinatal morbidity in monochorionic versus dichorionic twin pregnancies: clinical implications of a large Dutch cohort study",
    link: "https://www.researchgate.net/publication/5441352_Increased_perinatal_morbidity_in_monochorionic_versus_dichorionic_twin_pregnancies_clinical_implications_of_a_large_Dutch_cohort_study",
  },
  {
    id: 28,
    date: "MAY 2008",
    type: "ARTICLE",
    title:
      "Complete unilateral absence of fallopian tube",
    link: "https://www.researchgate.net/publication/5799985_Complete_unilateral_absence_of_fallopian_tube",
  },
  {
    id: 29,
    date: "MARCH 2008",
    type: "ARTICLE",
    title:
      "Caesarean scar endometriosis presenting as an acute abdomen: A case report and review of literature",
    link: "https://www.researchgate.net/publication/6138904_Caesarean_scar_endometriosis_presenting_as_an_acute_abdomen_A_case_report_and_review_of_literature",
  },
   {
    id: 30,
    date: "FEBRUARY 2008",
    type: "ARTICLE",
    title:
      "Idiopathic chronic fetomaternal haemorrhage presenting with reduced fetal movements (Journal of Obstetrics and Gynaecology (2007) 27, 9 (848-849))",
    link: "https://www.researchgate.net/publication/293212427_Idiopathic_chronic_fetomaternal_haemorrhage_presenting_with_reduced_fetal_movements_Journal_of_Obstetrics_and_Gynaecology_2007_27_9_848-849",
  },
  {
    id: 31,
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
    page * itemsPerPage
  );

  return (
    <section className="w-full py-16" style={{ backgroundColor: "#FFF7F9" }}>
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Heading */}
        <h2 className="text-center text-4xl font-bold" style={{ color: "#FF4B8B" }}>
          Publications & Updates
        </h2>

        <p
          className="text-center text-lg mt-2 mb-10"
          style={{ color: "#804659" }}
        >
          Academic papers and research contributions in obstetrics and gynecology
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
              onClick={() => setPage((p) => p - 1)}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                page === 1
                  ? "opacity-40 cursor-not-allowed"
                  : "hover:bg-[#FFD3E3]"
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
              onClick={() => setPage((p) => p + 1)}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                page === totalPages
                  ? "opacity-40 cursor-not-allowed"
                  : "hover:bg-[#FFD3E3]"
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
