
export type Category = 'Viral' | 'Bacterial' | 'Zoonotic' | 'Parasitic';

export interface Disease {
  id: string;
  name: string;
  scientificName?: string;
  category: Category;
  transmission: string[];
  incubation: string;
  vaccine?: string;
  vaccineType?: 'Live Attenuated' | 'Killed' | 'Toxoid' | 'Subunit' | 'mRNA' | 'None';
  keyFeatures: string[];
  complications: string[];
  investigations: string;
  management: string;
  severityMetrics: {
    virulence: number;
    transmissionSpeed: number;
    mortalityRate: number;
    diagnosticEase: number;
    outbreakPotential: number;
  };
  clinicalCase: {
    presentation: string;
    finding: string;
    history: string;
  };
}

export enum TabType {
  DASHBOARD = 'DASHBOARD',
  CLUSTERS = 'CLUSTERS',
  VACCINE_MATRIX = 'VACCINE_MATRIX',
  COMPARISON_LAB = 'COMPARISON_LAB',
  CASE_CHALLENGE = 'CASE_CHALLENGE'
}
