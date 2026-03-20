export const caseStudies = [
  {
    id: 'route-optimization',
    tag: { fr: 'Transport routier', en: 'Road Transport' },
    icon: 'Route',
    color: 'cyan',
    title: {
      fr: 'Optimisation des tournées de livraison',
      en: 'Delivery Route Optimization'
    },
    challenge: {
      fr: 'Un transporteur régional opère 45 véhicules sur 300+ points de livraison quotidiens. Les tournées sont planifiées manuellement, générant 22% de kilométrage à vide et des dépassements fréquents des fenêtres horaires.',
      en: 'A regional carrier operates 45 vehicles across 300+ daily delivery points. Routes are planned manually, generating 22% empty mileage and frequent time-window violations.'
    },
    solution: {
      fr: 'Déploiement d\'un moteur d\'optimisation basé sur des algorithmes génétiques et du machine learning pour prédire les temps de trajet en temps réel. Intégration avec le TMS existant via API. Interface de réaffectation dynamique pour les chauffeurs.',
      en: 'Deployment of an optimization engine based on genetic algorithms and ML to predict travel times in real time. Integration with existing TMS via API. Dynamic reassignment interface for drivers.'
    },
    impact: [
      { fr: '18% de réduction du kilométrage total', en: '18% reduction in total mileage' },
      { fr: '94% de respect des créneaux horaires (vs 71%)', en: '94% time-window compliance (vs 71%)' },
      { fr: '€180K d\'économies annuelles (carburant + heures)', en: '€180K annual savings (fuel + hours)' },
    ],
    kpi: '-18% km',
  },
  {
    id: 'demand-forecasting',
    tag: { fr: 'Logistique', en: 'Logistics' },
    icon: 'TrendingUp',
    color: 'amber',
    title: {
      fr: 'Prévision de la demande entrepôt',
      en: 'Warehouse Demand Forecasting'
    },
    challenge: {
      fr: 'Un opérateur logistique 3PL fait face à des pics d\'activité imprévus causant des ruptures de capacité et des coûts intérimaires élevés. Les prévisions existantes sont basées sur des moyennes historiques simples.',
      en: 'A 3PL logistics operator faces unexpected activity peaks causing capacity shortfalls and high temp staffing costs. Existing forecasts are based on simple historical averages.'
    },
    solution: {
      fr: 'Modèle de prévision multi-variante combinant historique des commandes, données saisonnières, calendrier des promotions clients et signaux externes (météo, jours fériés). Tableau de bord temps réel pour les responsables de site.',
      en: 'Multi-variate forecasting model combining order history, seasonal data, client promotional calendars, and external signals (weather, holidays). Real-time dashboard for site managers.'
    },
    impact: [
      { fr: '31% de réduction des coûts intérimaires', en: '31% reduction in temporary staffing costs' },
      { fr: 'Précision de prévision à 89% (vs 61%)', en: 'Forecasting accuracy at 89% (vs 61%)' },
      { fr: 'Zéro rupture de capacité sur 6 mois', en: 'Zero capacity shortfalls over 6 months' },
    ],
    kpi: '+89% accuracy',
  },
  {
    id: 'customs-automation',
    tag: { fr: 'Fret international', en: 'International Freight' },
    icon: 'FileCheck',
    color: 'cyan',
    title: {
      fr: 'Automatisation de la documentation douanière',
      en: 'Customs Documentation Automation'
    },
    challenge: {
      fr: 'Un transitaire traite 800+ déclarations douanières par mois. La saisie manuelle représente 2,5 ETP et génère un taux d\'erreur de 4%, causant des retards et des amendes.',
      en: 'A freight forwarder processes 800+ customs declarations per month. Manual data entry represents 2.5 FTEs and generates a 4% error rate, causing delays and fines.'
    },
    solution: {
      fr: 'Système d\'extraction automatique des données clés depuis les factures fournisseurs (OCR + LLM), pré-remplissage des déclarations et contrôle de cohérence automatisé. Validation humaine uniquement sur les cas ambigus.',
      en: 'Automated extraction of key data from supplier invoices (OCR + LLM), pre-filling of declarations and automated consistency checking. Human validation only on ambiguous cases.'
    },
    impact: [
      { fr: '78% des déclarations traitées sans intervention humaine', en: '78% of declarations processed without human intervention' },
      { fr: 'Taux d\'erreur ramené à 0.3%', en: 'Error rate reduced to 0.3%' },
      { fr: '€95K économisés annuellement en coûts de traitement', en: '€95K saved annually in processing costs' },
    ],
    kpi: '78% automated',
  },
  {
    id: 'hr-recruitment',
    tag: { fr: 'RH & Opérations', en: 'HR & Operations' },
    icon: 'Users',
    color: 'amber',
    title: {
      fr: 'Recrutement et rétention des chauffeurs',
      en: 'Driver Recruitment & Retention'
    },
    challenge: {
      fr: 'Un groupe de transport souffre d\'un turnover annuel de 38% parmi ses 200 chauffeurs. Le coût de remplacement (recrutement + formation) atteint €8K par départ. Les RH manquent d\'outils pour anticiper les démissions.',
      en: 'A transport group suffers 38% annual turnover among its 200 drivers. Replacement cost (recruitment + training) reaches €8K per departure. HR lacks tools to anticipate resignations.'
    },
    solution: {
      fr: 'Modèle prédictif de risque de départ basé sur les données RH (ancienneté, absences, incidents, évolution salariale) et opérationnelles (types de tournées, heures supplémentaires). Alertes automatiques aux managers avec recommandations d\'actions de rétention.',
      en: 'Predictive attrition risk model based on HR data (tenure, absences, incidents, salary progression) and operational data (route types, overtime). Automatic alerts to managers with retention action recommendations.'
    },
    impact: [
      { fr: 'Turnover réduit à 24% en 12 mois', en: 'Turnover reduced to 24% in 12 months' },
      { fr: '€280K d\'économies sur les coûts de remplacement', en: '€280K saved on replacement costs' },
      { fr: '72% des départs identifiés 60j à l\'avance', en: '72% of departures identified 60 days in advance' },
    ],
    kpi: '-14pts turnover',
  },
  {
    id: 'dynamic-pricing',
    tag: { fr: 'Fret & Logistique', en: 'Freight & Logistics' },
    icon: 'BarChart3',
    color: 'cyan',
    title: {
      fr: 'Tarification dynamique du fret',
      en: 'Dynamic Freight Pricing'
    },
    challenge: {
      fr: 'Un spécialiste du transport de fret d\'art applique des tarifs fixes par zone géographique, ignorant les contraintes opérationnelles réelles (disponibilité des équipes, distance au dépôt, complexité de manipulation). Résultat : marges très hétérogènes selon les missions.',
      en: 'A fine art freight specialist applies fixed rates by geographic zone, ignoring real operational constraints (team availability, depot distance, handling complexity). Result: highly variable margins across assignments.'
    },
    solution: {
      fr: 'Moteur de tarification intelligent intégrant 15+ variables opérationnelles et marché. Recommandations de prix en temps réel lors de la cotation, avec simulation de marge instantanée pour les commerciaux.',
      en: 'Intelligent pricing engine integrating 15+ operational and market variables. Real-time price recommendations during quoting, with instant margin simulation for sales teams.'
    },
    impact: [
      { fr: '+3.2 points de marge brute moyenne', en: '+3.2 points average gross margin' },
      { fr: 'Temps de cotation réduit de 18 min à 2 min', en: 'Quote time reduced from 18 min to 2 min' },
      { fr: '€220K de marge additionnelle annuelle', en: '€220K additional annual margin' },
    ],
    kpi: '+3.2pts margin',
  },
  {
    id: 'cash-flow-optimization',
    tag: { fr: 'Trésorerie & Finance', en: 'Treasury & Finance' },
    icon: 'DollarSign',
    color: 'cyan',
    title: {
      fr: 'Optimisation de la trésorerie',
      en: 'Cash Flow Optimization'
    },
    challenge: {
      fr: 'Un groupe logistique multi-entités dispose d\'une visibilité limitée sur sa trésorerie à 30-90 jours. Les décaissements imprévus entraînent des lignes de crédit court terme coûteuses et des tensions avec les fournisseurs.',
      en: 'A multi-entity logistics group has limited visibility on its 30-90 day cash position. Unexpected disbursements trigger costly short-term credit lines and supplier tensions.'
    },
    solution: {
      fr: 'Modèle de prévision de trésorerie par IA combinant données ERP, historiques de paiement clients/fournisseurs et cycles opérationnels. Tableau de bord en temps réel avec alertes de tension de liquidité et recommandations d\'actions correctives.',
      en: 'AI-based cash flow forecasting model combining ERP data, customer/supplier payment histories, and operational cycles. Real-time dashboard with liquidity stress alerts and corrective action recommendations.'
    },
    impact: [
      { fr: '91% de précision de prévision à horizon 60 jours', en: '91% forecasting accuracy at 60-day horizon' },
      { fr: '€420K de réduction des coûts de financement court terme', en: '€420K reduction in short-term financing costs' },
      { fr: 'DSO réduit de 48 à 34 jours', en: 'DSO reduced from 48 to 34 days' },
    ],
    kpi: '-€420K financing',
  },
  {
    id: 'fleet-maintenance',
    tag: { fr: 'Flotte & Maintenance', en: 'Fleet & Maintenance' },
    icon: 'Wrench',
    color: 'amber',
    title: {
      fr: 'Maintenance prédictive de flotte',
      en: 'Predictive Fleet Maintenance'
    },
    challenge: {
      fr: 'Un opérateur de flotte de 80 véhicules gère la maintenance de façon réactive. Les pannes imprévues causent en moyenne 2,3 jours d\'immobilisation par véhicule/an, perturbant les plannings et générant des coûts de sous-traitance d\'urgence.',
      en: 'An 80-vehicle fleet operator manages maintenance reactively. Unexpected breakdowns cause an average 2.3 days of downtime per vehicle/year, disrupting schedules and generating emergency subcontracting costs.'
    },
    solution: {
      fr: 'Analyse en temps réel des données télémétriques (OBD-II) par un modèle ML entraîné sur l\'historique de pannes. Alertes préventives 10-20 jours avant défaillance probable. Intégration avec le planning de maintenance préventive.',
      en: 'Real-time analysis of telemetry data (OBD-II) by an ML model trained on breakdown history. Preventive alerts 10-20 days before likely failure. Integration with preventive maintenance scheduling.'
    },
    impact: [
      { fr: '67% de réduction des pannes imprévues', en: '67% reduction in unexpected breakdowns' },
      { fr: 'Immobilisation réduite à 0.8 jours/véhicule/an', en: 'Downtime reduced to 0.8 days/vehicle/year' },
      { fr: '€310K d\'économies (maintenance + sous-traitance)', en: '€310K savings (maintenance + subcontracting)' },
    ],
    kpi: '-67% breakdowns',
  },
]
