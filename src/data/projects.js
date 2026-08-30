// Featured work. `meta` fields are shown on the card's left rail.
// Add a `repo` key only when a real public repository exists.

export const featuredProjects = [
  {
    id: 'dengue',
    label: 'Undergraduate Thesis',
    title:
      'Development of a Feature-Weighted Machine Learning-Based Risk Scoring System for Dengue Hemorrhagic Fever',
    summary:
      'A machine learning-based healthcare decision-support system focused on early dengue risk assessment using predictive modeling, feature weighting and Explainable AI.',
    meta: [
      { k: 'Domain', v: 'Healthcare AI' },
      { k: 'Data', v: 'Clinical records' },
      { k: 'Output', v: 'Risk score, 0–100%' },
    ],
    workTitle: 'Key work',
    work: [
      'Clinical data preprocessing',
      'Missing value and outlier handling',
      'Duplicate removal',
      'Feature engineering',
      'Logistic Regression',
      'Random Forest',
      'XGBoost',
      'LightGBM',
      'CatBoost',
      'Five-fold cross-validation',
      'Hyperparameter tuning',
      'SMOTE',
      'SHAP',
      'External validation',
      'Threshold optimization',
      'Web-based prototype',
      'Individualized 0–100% risk score',
    ],
    note: 'A research prototype. It is not clinically validated and is not a diagnostic tool.',
  },
  {
    id: 'eeg',
    label: 'Ongoing Research',
    title:
      'A Feature-Weighted Explainable Artificial Intelligence Framework for Early Epileptic Seizure Prediction from EEG Signals',
    summary:
      'A research framework for early seizure prediction from EEG signals using feature weighting, ensemble learning and Explainable AI.',
    meta: [
      { k: 'Domain', v: 'Healthcare AI' },
      { k: 'Signal', v: 'Multi-channel EEG' },
      { k: 'Status', v: 'In progress' },
    ],
    workTitle: 'Key work',
    work: [
      'Multi-channel EEG preprocessing',
      'Time-domain features',
      'Frequency-domain features',
      'SHAP-guided feature weighting',
      'XGBoost',
      'LightGBM',
      'CatBoost',
      'Stacking ensemble',
      'SHAP',
      'LIME',
      'Five-fold cross-validation',
    ],
    evaluationTitle: 'Evaluation',
    evaluation: [
      'Accuracy',
      'Precision',
      'Recall',
      'Specificity',
      'Sensitivity',
      'F1-score',
      'ROC-AUC',
      'PR-AUC',
      'MCC',
      'Confusion Matrix',
    ],
    note: 'Work in progress. Results are not yet finalised.',
  },
  {
    id: 'ophthalmic-nlp',
    label: 'NLP Project',
    title: 'NLP-Based Classification of Ophthalmic Conditions from Clinical Text',
    summary:
      'An NLP classification project that converts ophthalmic clinical keyword information into patient-level text representations and applies machine learning models.',
    meta: [
      { k: 'Domain', v: 'Clinical NLP' },
      { k: 'Representation', v: 'TF-IDF' },
      { k: 'Unit', v: 'Patient-level text' },
    ],
    workTitle: 'Process',
    work: [
      'Merge left/right eye keywords',
      'Create patient-level text',
      'TF-IDF vectorization',
      'Train four classifiers',
      'Stratified train/test split',
      'Accuracy, Precision, Recall and F1',
      'Macro-averaged metrics',
      'Keyword importance analysis',
    ],
  },
]

export const academicProjects = [
  {
    id: 'billing',
    title: 'Electricity Billing Management System',
    course: 'Database Systems',
    summary:
      'Web-based DBMS project involving RDBMS, ER modeling, normalization, SQL, referential integrity, role-based access, billing and payment management.',
    tags: ['RDBMS', 'ER Modeling', 'Normalization', 'SQL', 'Role-based access'],
  },
  {
    id: 'soho',
    title: 'Secure SOHO Network Design for NETtech',
    course: 'Computer Networks',
    summary:
      'Networking project involving VLANs, 802.1Q, inter-VLAN routing, static routing, OSPF, DHCP, NAT, ISP simulation and IP addressing.',
    tags: ['VLANs', '802.1Q', 'OSPF', 'DHCP', 'NAT', 'IP addressing'],
  },
  {
    id: 'graphics',
    title: '2D Animated Character Using Computer Graphics',
    course: 'Computer Graphics',
    summary:
      'OpenGL project using DDA, Midpoint Circle Algorithm, primitive shapes, object transformation, frame-based animation and state-machine control.',
    tags: ['OpenGL', 'DDA', 'Midpoint Circle', 'Transformations', 'State machine'],
  },
]
