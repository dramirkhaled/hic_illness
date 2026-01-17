
import { Disease } from './types';

export const DISEASES: Disease[] = [
  {
    id: 'measles',
    name: 'Measles (Rubeola)',
    scientificName: 'Morbillivirus (Paramyxoviridae)',
    category: 'Viral',
    transmission: ['Airborne/Droplet (Highly Contagious)', 'Respiratory secretions'],
    incubation: '10-14 days',
    vaccine: 'MMR (12 & 18 months)',
    vaccineType: 'Live Attenuated',
    keyFeatures: ["Koplik's spots (Buccal mucosa)", "3 Cs (Cough, Coryza, Conjunctivitis)", "Step-ladder fever (>40°C)", "Descending Maculopapular rash"],
    complications: ["Otitis Media (Most common)", "Pneumonia (Major mortality)", "SSPE (Late fatal brain inflammation)"],
    investigations: "IgM Serology (ELISA) / RT-PCR",
    management: "High-dose Vitamin A + Supportive care",
    severityMetrics: { virulence: 75, transmissionSpeed: 98, mortalityRate: 15, diagnosticEase: 85, outbreakPotential: 95 },
    clinicalCase: { 
      presentation: "A 4-year-old unvaccinated boy presents with high fever (40.2°C), barking cough, and severe conjunctivitis with photophobia. A rash started behind his ears today.", 
      finding: "Small white grains on a red base (Koplik's) seen inside the mouth.", 
      history: "Unvaccinated; contact with similar case 12 days ago." 
    }
  },
  {
    id: 'meningitis',
    name: 'Meningococcal Meningitis',
    scientificName: 'Neisseria meningitidis (G-ve diplococci)',
    category: 'Bacterial',
    transmission: ['Droplet infection', 'Close contact'],
    incubation: '2-10 days',
    vaccine: 'MenACWY / Polysaccharide',
    vaccineType: 'Subunit',
    keyFeatures: ["Sudden high fever & headache", "Nuchal Rigidity (Neck Stiffness)", "Non-blanching Petechial rash", "Kernig/Brudzinski positive"],
    complications: ["Waterhouse-Friderichsen Syndrome", "Deafness", "DIC/Septic Shock"],
    investigations: "Lumbar Puncture (CSF: Low glucose, High protein, Turbid)",
    management: "Ceftriaxone (Rx) + Rifampicin/Ciprofloxacin (Prophylaxis for contacts)",
    severityMetrics: { virulence: 95, transmissionSpeed: 75, mortalityRate: 15, diagnosticEase: 80, outbreakPotential: 85 },
    clinicalCase: { 
      presentation: "An 18-year-old student living in a dorm presents with abrupt high fever, vomiting, and excruciating headache. He is confused and has purple spots on his legs.", 
      finding: "Involuntary hip flexion when neck is flexed (Brudzinski positive).", 
      history: "Dormitory resident; URTI 3 days ago." 
    }
  },
  {
    id: 'typhoid',
    name: 'Typhoid Fever',
    scientificName: 'Salmonella typhi',
    category: 'Bacterial',
    transmission: ['Fecal-Oral', 'Carrier gallbladder'],
    incubation: '7-14 days',
    vaccine: 'Ty21a (Oral) / Vi CPS',
    vaccineType: 'Live Attenuated',
    keyFeatures: ["Step-ladder fever curve", "Rose spots on trunk (2nd week)", "Pea-soup diarrhea", "Relative Bradycardia (Faggot sign)"],
    complications: ["Intestinal Perforation (3rd week)", "Hemorrhage", "Toxic Myocarditis"],
    investigations: "Widal test (O/H titers) + Blood culture (1st week)",
    management: "Ciprofloxacin / Ceftriaxone / Azithromycin",
    severityMetrics: { virulence: 80, transmissionSpeed: 50, mortalityRate: 20, diagnosticEase: 65, outbreakPotential: 55 },
    clinicalCase: { 
      presentation: "A 25-year-old male presents with slow-rising fever (now 39.8°C), abdominal pain, and dry cough. Pulse is 65 bpm despite the fever.", 
      finding: "Faint pink macules on upper abdomen (Rose spots).", 
      history: "Frequent street food consumer; works as a chef." 
    }
  },
  {
    id: 'cholera',
    name: 'Cholera',
    scientificName: 'Vibrio cholerae',
    category: 'Bacterial',
    transmission: ['Contaminated water', 'Raw seafood'],
    incubation: 'Hours to 5 days',
    vaccine: 'Dukoral (Oral)',
    vaccineType: 'Killed',
    keyFeatures: ["Painless Rice-water stool", "Effortless vomiting", "Washerwoman's hands (Dehydration)", "No fever usually"],
    complications: ["Hypovolemic Shock (Death in hours)", "Renal failure (ATN)", "Hypokalemia"],
    investigations: "Hanging drop (Darting motility) + TCBS Agar (Yellow)",
    management: "Immediate Rehydration (Ringer's/ORS) + Doxycycline",
    severityMetrics: { virulence: 95, transmissionSpeed: 85, mortalityRate: 50, diagnosticEase: 90, outbreakPotential: 90 },
    clinicalCase: { 
      presentation: "A 30-year-old man in a refugee camp has massive watery diarrhea looking like rice-water. He is lethargic and cold.", 
      finding: "Deeply sunken eyes and poor skin turgor; absent radial pulse.", 
      history: "Flood area; drinking from open well." 
    }
  },
  {
    id: 'diphtheria',
    name: 'Diphtheria',
    scientificName: 'Corynebacterium diphtheriae',
    category: 'Bacterial',
    transmission: ['Droplet infection', 'Direct contact'],
    incubation: '2-5 days',
    vaccine: 'DTP / Pentavalent',
    vaccineType: 'Toxoid',
    keyFeatures: ["Dirty gray Pseudomembrane", "Bull-neck appearance (Lymphadenopathy)", "Toxin-mediated Myocarditis", "Paralysis of soft palate"],
    complications: ["Airway obstruction", "Myocarditis (Heart block)", "Post-diphtheritic paralysis"],
    investigations: "Throat swab on Löffler/Tellurite medium",
    management: "Antitoxin (DAT) + Penicillin G / Erythromycin",
    severityMetrics: { virulence: 90, transmissionSpeed: 60, mortalityRate: 10, diagnosticEase: 75, outbreakPotential: 70 },
    clinicalCase: { 
      presentation: "A 6-year-old child presents with low-grade fever, sore throat, and a massive swelling of the neck. He is struggling to breathe and has a muffled voice.", 
      finding: "Tough gray membrane over tonsils that bleeds when touched.", 
      history: "Immigrant from an area with low vaccine coverage." 
    }
  },
  {
    id: 'pertussis',
    name: 'Pertussis (Whooping Cough)',
    scientificName: 'Bordetella pertussis',
    category: 'Bacterial',
    transmission: ['Droplet infection'],
    incubation: '7-10 days',
    vaccine: 'DTP / Pentavalent',
    vaccineType: 'Subunit',
    keyFeatures: ["Paroxysmal cough (Fits)", "Inspiratory 'Whoop'", "Post-tussive vomiting", "Absolute Lymphocytosis"],
    complications: ["Apnea in infants", "Pneumonia", "Encephalopathy"],
    investigations: "Nasopharyngeal swab on Bordet-Gengou/Regan-Lowe medium",
    management: "Azithromycin / Clarithromycin",
    severityMetrics: { virulence: 70, transmissionSpeed: 95, mortalityRate: 5, diagnosticEase: 60, outbreakPotential: 85 },
    clinicalCase: { 
      presentation: "A 3-month-old infant is brought with repeated coughing spells where he turns blue. Between spells, he seems normal.", 
      finding: "Inspiratory whoop heard after a series of 15-20 coughs.", 
      history: "Sibling has a 'nagging' cold; infant has only received one dose of DTP." 
    }
  },
  {
    id: 'brucellosis',
    name: 'Brucellosis (Malta Fever)',
    scientificName: 'Brucella melitensis/abortus',
    category: 'Zoonotic',
    transmission: ['Raw milk (Unpasteurized)', 'Contact with livestock (Vet/Farmer)'],
    incubation: '1-3 weeks',
    vaccine: 'None for humans',
    vaccineType: 'None',
    keyFeatures: ["Undulant fever (Waves)", "Profuse sweating (Mouldy smell)", "Hepatosplenomegaly", "Sacroiliitis"],
    complications: ["Endocarditis", "Orchitis", "Neurobrucellosis"],
    investigations: "Standard Agglutination Test (SAT) / Rose Bengal / Blood culture",
    management: "Doxycycline + Rifampicin (for 6 weeks)",
    severityMetrics: { virulence: 50, transmissionSpeed: 10, mortalityRate: 2, diagnosticEase: 55, outbreakPotential: 30 },
    clinicalCase: { 
      presentation: "A 40-year-old farmer complains of recurrent fever that comes and goes for 3 weeks, severe back pain, and night sweats that smell like wet hay.", 
      finding: "Enlarged spleen and tender sacroiliac joints.", 
      history: "Handles goat births; drinks raw unpasteurized milk." 
    }
  },
  {
    id: 'anthrax',
    name: 'Anthrax',
    scientificName: 'Bacillus anthracis',
    category: 'Zoonotic',
    transmission: ['Handling hides/wool (Industrial)', 'Inhalation (Biological)', 'Eating infected meat'],
    incubation: '1-7 days',
    vaccine: 'Available for high-risk workers',
    vaccineType: 'Subunit',
    keyFeatures: ["Painless black eschar (Cutaneous)", "Widened Mediastinum (Inhalation)", "Malignant Edema", "Bamboo-stick appearance on stain"],
    complications: ["Hemorrhagic Meningitis", "Septicemia", "Respiratory failure"],
    investigations: "Gram stain (G+ve large bacilli) / PCR / Culture",
    management: "Ciprofloxacin / Doxycycline + Antitoxin",
    severityMetrics: { virulence: 95, transmissionSpeed: 5, mortalityRate: 80, diagnosticEase: 70, outbreakPotential: 40 },
    clinicalCase: { 
      presentation: "A wool factory worker presents with a painless ulcer on his forearm that has a black center and surrounding massive swelling.", 
      finding: "Black necrotic eschar with non-pitting edema; no pus.", 
      history: "Handles imported raw animal wool." 
    }
  },
  {
    id: 'tetanus',
    name: 'Tetanus',
    scientificName: 'Clostridium tetani',
    category: 'Bacterial',
    transmission: ['Contaminated wounds', 'Soil/Animal dung'],
    incubation: '3-21 days',
    vaccine: 'DTP / Tetanus Toxoid',
    vaccineType: 'Toxoid',
    keyFeatures: ["Lockjaw (Trismus)", "Risus sardonicus (Evil grin)", "Opisthotonus (Back arch)", "Hyperacusis/Spasms"],
    complications: ["Laryngospasm (Asphyxia)", "Fractures", "Autonomic instability"],
    investigations: "Clinical diagnosis / Spatula test",
    management: "Metronidazole + TIG (Immunoglobulin) + Spasm control",
    severityMetrics: { virulence: 90, transmissionSpeed: 0, mortalityRate: 60, diagnosticEase: 80, outbreakPotential: 0 },
    clinicalCase: { 
      presentation: "A 50-year-old gardener presents with difficulty opening his mouth and a stiff neck. Loud noises trigger painful body arching.", 
      finding: "Spatula test causes reflex bite (Positive).", 
      history: "Stepped on a rusty nail 10 days ago." 
    }
  },
  {
    id: 'rabies',
    name: 'Rabies',
    scientificName: 'Lyssavirus (Rhabdoviridae)',
    category: 'Zoonotic',
    transmission: ['Animal bite (Dog/Bat/Cat)', 'Saliva on broken skin'],
    incubation: '1-3 months',
    vaccine: 'HDCV (Post-exposure)',
    vaccineType: 'Killed',
    keyFeatures: ["Hydrophobia (Fear of water)", "Aerophobia (Fear of air)", "Foaming at mouth", "Negri bodies (Post-mortem)"],
    complications: ["Encephalitis (100% Fatal)", "Respiratory paralysis"],
    investigations: "Skin biopsy (DFA) / Saliva PCR",
    management: "Wound cleaning + RIG (at site) + Vaccine series",
    severityMetrics: { virulence: 100, transmissionSpeed: 5, mortalityRate: 100, diagnosticEase: 40, outbreakPotential: 10 },
    clinicalCase: { 
      presentation: "A child is brought with extreme agitation and barking-like sounds. He screams when offered water.", 
      finding: "Laryngeal spasms triggered by air draft (Aerophobia).", 
      history: "Bitten by stray dog 2 months ago; wound was small." 
    }
  },
  {
    id: 'leptospirosis',
    name: 'Leptospirosis',
    scientificName: 'Leptospira interrogans',
    category: 'Zoonotic',
    transmission: ['Contact with Rat urine', 'Contaminated flood water'],
    incubation: '5-14 days',
    vaccine: 'None',
    vaccineType: 'None',
    keyFeatures: ["Conjunctival suffusion (Red eyes)", "Severe calf muscle pain", "Jaundice + Renal failure (Weil's)", "Pulmonary hemorrhage"],
    complications: ["Acute Kidney Injury", "Liver failure", "DIC"],
    investigations: "MAT (Agglutination) / Dark-field microscopy",
    management: "Penicillin G (Severe) / Doxycycline (Mild)",
    severityMetrics: { virulence: 60, transmissionSpeed: 30, mortalityRate: 15, diagnosticEase: 50, outbreakPotential: 40 },
    clinicalCase: { 
      presentation: "A sewage worker presents with high fever, red eyes, and unbearable pain in his calves. Today his skin became yellow.", 
      finding: "Conjunctival suffusion (no pus) and tender calf muscles.", 
      history: "Waded through city flood water 10 days ago." 
    }
  },
  {
    id: 'plague',
    name: 'Plague',
    scientificName: 'Yersinia pestis',
    category: 'Zoonotic',
    transmission: ['Rat Flea bite', 'Respiratory droplets (Pneumonic)'],
    incubation: '2-6 days',
    vaccine: 'None',
    vaccineType: 'None',
    keyFeatures: ["Painful Buboes (Groin/Axilla)", "Black gangrene (Acrocyanosis)", "Safety-pin appearance (Wayson stain)", "Septicemic shock"],
    complications: ["Secondary Pneumonic plague", "DIC", "Death in 24h (Pneumonic)"],
    investigations: "Bubo aspirate smear / Blood culture",
    management: "Streptomycin / Gentamicin / Doxycycline",
    severityMetrics: { virulence: 100, transmissionSpeed: 70, mortalityRate: 60, diagnosticEase: 60, outbreakPotential: 85 },
    clinicalCase: { 
      presentation: "A park ranger presents with sudden high fever and an agonizingly painful egg-sized swelling in his groin.", 
      finding: "Necrotic, tender inguinal lymph node (Bubo).", 
      history: "Camping in area with dead rodents; flea bites noted." 
    }
  },
  {
    id: 'hepa',
    name: 'Hepatitis A',
    scientificName: 'HAV (Picornavirus)',
    category: 'Viral',
    transmission: ['Fecal-Oral', 'Contaminated shellfish'],
    incubation: '15-50 days',
    vaccine: 'HAV Vaccine',
    vaccineType: 'Killed',
    keyFeatures: ["Sudden jaundice", "Dark urine/Pale stools", "Loss of desire for smoking", "Elevated ALT/AST (>1000)"],
    complications: ["Fulminant Hepatitis (Rare)", "Relapsing Hepatitis"],
    investigations: "Anti-HAV IgM",
    management: "Supportive care (No specific antiviral)",
    severityMetrics: { virulence: 30, transmissionSpeed: 70, mortalityRate: 0.1, diagnosticEase: 90, outbreakPotential: 80 },
    clinicalCase: { 
      presentation: "A university student presents with nausea, yellow eyes, and deep tea-colored urine.", 
      finding: "Tender hepatomegaly; ALT is 2400 IU/L.", 
      history: "Shared a meal with a friend who had jaundice 3 weeks ago." 
    }
  },
  {
    id: 'hepb',
    name: 'Hepatitis B',
    scientificName: 'HBV (Hepadnavirus)',
    category: 'Viral',
    transmission: ['Blood-borne', 'Sexual', 'Vertical (Mother to baby)'],
    incubation: '45-160 days',
    vaccine: 'HBV Vaccine (Compulsory)',
    vaccineType: 'Subunit',
    keyFeatures: ["Chronic Carrier state", "HBsAg (Marker of infection)", "HBeAg (Marker of replication)", "Ground-glass hepatocytes"],
    complications: ["Liver Cirrhosis", "Hepatocellular Carcinoma (HCC)", "Polyarteritis Nodosa"],
    investigations: "HBV Serology (HBsAg, Anti-HBc) / HBV DNA PCR",
    management: "Tenofovir / Entecavir (for chronic)",
    severityMetrics: { virulence: 60, transmissionSpeed: 40, mortalityRate: 5, diagnosticEase: 85, outbreakPotential: 50 },
    clinicalCase: { 
      presentation: "A healthcare worker presents for screening after a needle-stick injury. She feels fine.", 
      finding: "HBsAg Positive; HBeAg Negative; Anti-HBc IgG Positive.", 
      history: "Needle-stick injury from a known chronic carrier patient." 
    }
  },
  {
    id: 'hepc',
    name: 'Hepatitis C',
    scientificName: 'HCV (Flavivirus)',
    category: 'Viral',
    transmission: ['Blood-borne', 'IV drug use', 'Tattoos/Medical procedures'],
    incubation: '14-180 days',
    vaccine: 'None',
    vaccineType: 'None',
    keyFeatures: ["80% progress to Chronic", "Most are asymptomatic initially", "Cryoglobulinemia", "Fatty changes in liver"],
    complications: ["Cirrhosis", "HCC", "Lichen Planus"],
    investigations: "Anti-HCV (Screening) / HCV RNA PCR (Confirmation)",
    management: "DAAs (Sovaldi/Daklinza) - 98% Cure rate",
    severityMetrics: { virulence: 50, transmissionSpeed: 20, mortalityRate: 3, diagnosticEase: 80, outbreakPotential: 20 },
    clinicalCase: { 
      presentation: "A 50-year-old man is found to have elevated liver enzymes during a routine physical.", 
      finding: "Liver biopsy shows lymphoid aggregates and macrovesicular steatosis.", 
      history: "History of blood transfusion in 1990 before screening was routine." 
    }
  },
  {
    id: 'polio',
    name: 'Poliomyelitis',
    scientificName: 'Poliovirus (Enterovirus)',
    category: 'Viral',
    transmission: ['Fecal-Oral'],
    incubation: '7-14 days',
    vaccine: 'Sabin (OPV) / Salk (IPV)',
    vaccineType: 'Live Attenuated',
    keyFeatures: ["Asymmetric Flaccid Paralysis", "Proximal muscles > Distal", "Preserved Sensation", "Bulbar Polio (Respiratory failure)"],
    complications: ["Permanent paralysis", "Respiratory failure", "Post-polio syndrome"],
    investigations: "Stool culture for virus / CSF analysis",
    management: "Supportive + Iron lung (historically) + Physiotherapy",
    severityMetrics: { virulence: 40, transmissionSpeed: 80, mortalityRate: 5, diagnosticEase: 70, outbreakPotential: 85 },
    clinicalCase: { 
      presentation: "A child in a conflict zone presents with sudden weakness in his right leg and high fever.", 
      finding: "Flaccid paralysis of the right hip and knee; reflexes are absent; sensation is normal.", 
      history: "Unvaccinated; recent outbreak in the neighboring village." 
    }
  },
  {
    id: 'malaria',
    name: 'Malaria',
    scientificName: 'Plasmodium falciparum/vivax',
    category: 'Parasitic',
    transmission: ['Anopheles Mosquito bite', 'Blood transfusion'],
    incubation: '7-30 days',
    vaccine: 'RTS,S (Newly available)',
    vaccineType: 'Subunit',
    keyFeatures: ["Periodic fever (Cyclical spikes)", "Splenomegaly", "Anemia", "Blackwater fever (Hemoglobinuria)"],
    complications: ["Cerebral Malaria (Coma)", "Severe Anemia", "Pulmonary Edema"],
    investigations: "Thick & Thin blood films (Gold Standard) / Rapid Diagnostic Test (RDT)",
    management: "Artemisinin-based combinations (ACT) / Quinine / Chloroquine",
    severityMetrics: { virulence: 90, transmissionSpeed: 85, mortalityRate: 20, diagnosticEase: 80, outbreakPotential: 80 },
    clinicalCase: { 
      presentation: "A traveler returning from sub-Saharan Africa presents with cyclical shaking chills followed by high fever every 48 hours.", 
      finding: "Tender splenomegaly and jaundice. Blood film shows ring forms in RBCs.", 
      history: "Travel to endemic area; did not take prophylaxis." 
    }
  },
  {
    id: 'schisto',
    name: 'Schistosomiasis (Bilharzia)',
    scientificName: 'Schistosoma mansoni/haematobium',
    category: 'Parasitic',
    transmission: ['Snail contact (Fresh water)', 'Skin penetration by Cercariae'],
    incubation: '2-6 weeks',
    vaccine: 'None',
    vaccineType: 'None',
    keyFeatures: ["Terminal Hematuria (Haematobium)", "Portal Hypertension (Mansoni)", "Katayama fever", "Swimmer's itch"],
    complications: ["Bladder Carcinoma (SCC)", "Liver Cirrhosis", "Cor Pulmonale"],
    investigations: "Urine/Stool microscopy for eggs (Spine morphology) / Serology",
    management: "Praziquantel (Single dose)",
    severityMetrics: { virulence: 30, transmissionSpeed: 40, mortalityRate: 2, diagnosticEase: 85, outbreakPotential: 30 },
    clinicalCase: { 
      presentation: "A young boy from a rural area complains of blood at the end of urination for 2 months.", 
      finding: "Ultrasound shows bladder wall thickening. Urine contains eggs with a terminal spine.", 
      history: "Frequently swims in canal water; father is a farmer." 
    }
  },
  {
    id: 'tb',
    name: 'Tuberculosis',
    scientificName: 'Mycobacterium tuberculosis',
    category: 'Bacterial',
    transmission: ['Airborne/Droplet nuclei'],
    incubation: '4-12 weeks',
    vaccine: 'BCG (Compulsory at birth)',
    vaccineType: 'Live Attenuated',
    keyFeatures: ["Chronic cough > 3 weeks", "Night sweats & weight loss", "Hemoptysis (Coughing blood)", "Caseating Granulomas"],
    complications: ["Miliary TB (Disseminated)", "Pott's disease (Spine TB)", "Meningitis"],
    investigations: "Sputum smear (AFB) / GeneXpert / Chest X-ray",
    management: "RIPE: Rifampin, Isoniazid, Pyrazinamide, Ethambutol",
    severityMetrics: { virulence: 85, transmissionSpeed: 40, mortalityRate: 15, diagnosticEase: 75, outbreakPotential: 50 },
    clinicalCase: { 
      presentation: "A 45-year-old smoker presents with persistent cough, drenching night sweats, and 10kg weight loss.", 
      finding: "Upper lobe cavitary lesion on X-ray. Sputum shows red bacilli on ZN stain.", 
      history: "Lives in overcrowded housing; heavy smoker." 
    }
  },
  {
    id: 'rubella',
    name: 'Rubella (German Measles)',
    scientificName: 'Rubivirus (Togaviridae)',
    category: 'Viral',
    transmission: ['Droplet infection', 'Transplacental'],
    incubation: '14-21 days',
    vaccine: 'MMR Vaccine',
    vaccineType: 'Live Attenuated',
    keyFeatures: ["Forchheimer spots (Palate)", "Post-auricular Lymphadenopathy", "Faint rash (3-day measles)", "Congenital Rubella Syndrome (CRS)"],
    complications: ["Arthritis (Adult females)", "PDA / Cataracts / Deafness (Congenital)"],
    investigations: "Serology (IgM/IgG)",
    management: "Supportive care",
    severityMetrics: { virulence: 20, transmissionSpeed: 70, mortalityRate: 0.1, diagnosticEase: 60, outbreakPotential: 75 },
    clinicalCase: { 
      presentation: "A teenage girl presents with low fever and a rash that started on her face and disappeared after 3 days.", 
      finding: "Swollen tender lymph nodes behind the ears; red spots on the soft palate.", 
      history: "Contact with a pregnant aunt (High concern!)." 
    }
  },
  {
    id: 'mumps',
    name: 'Mumps',
    scientificName: 'Mumps virus (Paramyxoviridae)',
    category: 'Viral',
    transmission: ['Saliva / Respiratory droplets'],
    incubation: '16-18 days',
    vaccine: 'MMR Vaccine',
    vaccineType: 'Live Attenuated',
    keyFeatures: ["Parotid swelling (Ear lobe up/out)", "Orchitis (After puberty)", "Earache while chewing", "Pancreatitis (Abdominal pain)"],
    complications: ["Infertility (rare from orchitis)", "Meningitis", "Deafness"],
    investigations: "Clinical / Amylase elevation / PCR",
    management: "Supportive care + Cold packs for orchitis",
    severityMetrics: { virulence: 30, transmissionSpeed: 80, mortalityRate: 0.1, diagnosticEase: 90, outbreakPotential: 85 },
    clinicalCase: { 
      presentation: "A 10-year-old boy presents with high fever and painful swelling in front of both ears.", 
      finding: "Parotid swelling causing the ear lobe to be displaced upward and outward.", 
      history: "Outbreak at school; many friends affected." 
    }
  },
  {
    id: 'chickenpox',
    name: 'Chickenpox',
    scientificName: 'Varicella-Zoster Virus',
    category: 'Viral',
    transmission: ['Airborne/Droplet', 'Direct contact with vesicles'],
    incubation: '10-21 days',
    vaccine: 'Varicella Vaccine',
    vaccineType: 'Live Attenuated',
    keyFeatures: ["Dew-drop on rose petal rash", "Pleomorphic rash (All stages present)", "Intense pruritus (Itching)", "Centripetal distribution"],
    complications: ["Secondary bacterial skin infection", "Cerebellar Ataxia", "Shingles (Latency)"],
    investigations: "Tzanck smear (Multinucleated cells) / Clinical",
    management: "Acyclovir (High risk) / Calamine lotion / Antihistamines",
    severityMetrics: { virulence: 40, transmissionSpeed: 95, mortalityRate: 1, diagnosticEase: 95, outbreakPotential: 98 },
    clinicalCase: { 
      presentation: "A 7-year-old presents with fever and extremely itchy red spots, blisters, and scabs all over his body.", 
      finding: "Vesicles look like clear dew-drops on a red base; different stages seen at the same area.", 
      history: "Friend at school had it 2 weeks ago." 
    }
  },
  {
    id: 'shigella',
    name: 'Shigellosis (Bacillary Dysentery)',
    scientificName: 'Shigella sonnei/flexneri/dysenteriae',
    category: 'Bacterial',
    transmission: ['Fecal-Oral', 'Flies', 'Food/Fingers'],
    incubation: '1-4 days',
    vaccine: 'None',
    vaccineType: 'None',
    keyFeatures: ["Bloody/Mucoid diarrhea", "Severe Tenesmus (Painful straining)", "High fever", "Very low infectious dose (10-100 bacilli)"],
    complications: ["Hemolytic Uremic Syndrome (HUS)", "Toxic Megacolon", "Reiter's Syndrome"],
    investigations: "Stool culture on SS Agar / Microscopy (Pus cells/RBCs)",
    management: "Azithromycin / Ciprofloxacin / Ceftriaxone",
    severityMetrics: { virulence: 70, transmissionSpeed: 85, mortalityRate: 5, diagnosticEase: 80, outbreakPotential: 90 },
    clinicalCase: { 
      presentation: "A child is brought with high fever, abdominal cramps, and frequent small stools containing blood and mucus.", 
      finding: "Severe abdominal tenderness; stool shows numerous WBCs and RBCs.", 
      history: "Poor sanitation; outbreak in daycare center." 
    }
  },
  {
    id: 'dengue',
    name: 'Dengue Fever',
    scientificName: 'Dengue Virus (Flavivirus)',
    category: 'Viral',
    transmission: ['Aedes aegypti mosquito'],
    incubation: '3-14 days',
    vaccine: 'Dengvaxia (Conditional)',
    vaccineType: 'Live Attenuated',
    keyFeatures: ["Breakbone fever (Severe bone pain)", "Retro-orbital pain", "White islands in a sea of red (Rash)", "Positive Tourniquet test"],
    complications: ["Dengue Hemorrhagic Fever (DHF)", "Shock Syndrome (DSS)", "Thrombocytopenia"],
    investigations: "NS1 Antigen (Early) / IgM ELISA / Platelet count",
    management: "Supportive (Fluid management) - Avoid Aspirin/NSAIDs!",
    severityMetrics: { virulence: 60, transmissionSpeed: 80, mortalityRate: 10, diagnosticEase: 70, outbreakPotential: 90 },
    clinicalCase: { 
      presentation: "A tourist returning from Southeast Asia presents with high fever, agonizing joint pain, and pain behind the eyes.", 
      finding: "Platelet count is 45,000/mm³. Tourniquet test shows multiple petechiae.", 
      history: "Many mosquito bites while on vacation." 
    }
  }
];
