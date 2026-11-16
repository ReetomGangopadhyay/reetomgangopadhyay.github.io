export const projects = [
  {
    "id": "regime-identification",
    "category": "Research",
    "title": "Bayesian Nonparametric and Markovian Frameworks for Regime Identification",
    "subtitle": "",
    "meta": "Honors Thesis · 2025–2026",
    "paragraphs": [
      "Developed and compared Bayesian nonparametric clustering and hidden-state models for identifying changes in financial market behavior. Investigated time-dependent and sticky Dirichlet process mixtures, HMMs, stochastic volatility, and future-aware retrospective segmentation.",
      "Advisor: Luis Carvalho."
    ]
  },
  {
    "id": "temporal-eos",
    "category": "Research",
    "title": "Temporal Dependence and the Edge of Stability",
    "subtitle": "",
    "meta": "Science of Deep Learning · 2026",
    "paragraphs": [
      "Exploring a question in deep learning: does temporal dependence in training data change the dynamics of neural network optimization?",
      "The project uses stationary Gaussian AR(1) processes, linear regression, and tanh multilayer perceptrons to study Hessian sharpness, stability thresholds, loss oscillations, and forecasting performance.",
      "Experiments compare overlapping time-series windows, independent samples, and whitened inputs to distinguish data conditioning from dependence between observations.",
      "These experiments are exploratory."
    ]
  },
  {
    "id": "hawkeye",
    "category": "Research",
    "title": "Hawkeye: Autonomous HPC Performance Analysis Agent",
    "subtitle": "",
    "meta": "RCS · In Progress",
    "paragraphs": [
      "Developing an autonomous agent that uses Gaussian processes, Bayesian optimization, and active system identification to investigate performance bottlenecks in HPC environments.",
      "The agent selects and executes informative experiments to characterize resource interactions, identify bottlenecks, and optimize workload performance."
    ]
  },
  {
    "id": "p2gnmf",
    "category": "Research",
    "title": "p2gNMF: Peak-to-Gene Non-Negative Matrix Factorization",
    "subtitle": "",
    "meta": "Przytycki Lab · 2025–2026",
    "paragraphs": [
      "Developed methods for integrating single-cell gene expression and chromatin accessibility data using joint non-negative matrix factorization.",
      "Investigated peak-to-gene relationships and cross-modal alignment."
    ]
  },
  {
    "id": "leash",
    "category": "AI Systems & Software",
    "title": "Leash: Preventing Accidental Data Leakage from LLM Agents",
    "subtitle": "",
    "meta": "Privacy-Conscious Systems · 2026",
    "paragraphs": [
      "Developing a data loss prevention system for tool-using LLM agents.",
      "Leash inspects outbound tool calls to detect accidental disclosure of sensitive information, including secrets that have been partially copied or reformatted.",
      "The project evaluates exact-match and transformation-aware filtering using synthetic secrets and controlled coding tasks, measuring leakage prevention, false positives, and task completion."
    ]
  },
  {
    "id": "regimemix",
    "category": "AI Systems & Software",
    "title": "regimemix",
    "subtitle": "",
    "meta": "R Package · In Progress",
    "paragraphs": [
      "Developing an R package for Bayesian nonparametric regime identification and retrospective segmentation of sequential data."
    ]
  },
  {
    "id": "defcon",
    "links": [
      {
        "label": "GitHub repository",
        "href": "https://github.com/rcs-si/defcon-singularity"
      },
      {
        "label": "ACM paper",
        "href": "https://dl.acm.org/doi/10.1145/3785462.3815885"
      }
    ],
    "category": "AI Systems & Software",
    "title": "defcon",
    "subtitle": "",
    "meta": "HPC Reproducibility / Python Package · In Progress",
    "paragraphs": [
      "Developed a workflow that captures dependencies from HPC batch scripts and generates editable Singularity/Apptainer container definitions.",
      "The system supports reproducible scientific computing and has been validated on multiple programming languages and GPU workloads.",
      "Python package deployment is in progress."
    ]
  },
  {
    "id": "project-jungle",
    "links": [
      {
        "label": "GitHub repository",
        "href": "https://github.com/rcs-si/project_jungle"
      },
      {
        "label": "ACM poster",
        "href": "https://dl.acm.org/doi/10.1145/3708035.3736041"
      }
    ],
    "category": "AI Systems & Software",
    "title": "project_jungle",
    "subtitle": "",
    "meta": "HPC Storage Analytics",
    "paragraphs": [
      "Built a Python workflow for scalable GPFS metadata analysis and interactive visualization of HPC storage usage."
    ]
  },
  {
    "id": "module-check",
    "links": [
      {
        "label": "GitHub repository",
        "href": "https://github.com/rcs-si/module_check"
      },
      {
        "label": "ACM poster",
        "href": "https://dl.acm.org/doi/10.1145/3626203.3670554"
      }
    ],
    "category": "AI Systems & Software",
    "title": "module_check",
    "subtitle": "",
    "meta": "HPC Software Quality Assurance",
    "paragraphs": [
      "Developed a Python tool for validating HPC software module installations, including environment configuration, permissions, syntax, and metadata."
    ]
  },
  {
    "id": "stock-returns",
    "category": "Applied Machine Learning & Statistics",
    "title": "Does Complexity Help Cross-Sectional Stock Return Prediction?",
    "subtitle": "",
    "meta": "Statistical Machine Learning · 2026",
    "paragraphs": [
      "Tested how well different models ranked 442 S&P 500 stocks by their next month’s return. The study covered 2015–2024 and used 22 firm-level signals plus five indicators for missing data. Models ranged from Fama–MacBeth regressions to multi-task neural networks and a mixture of experts that weighted its forecasts by market regime.",
      "Evaluated forecasts month by month using an expanding training window. Across 15 purged cross-validation paths, the seven leading models had overlapping ranges of long–short portfolio Sharpe ratios. More complex models showed no clear advantage on this panel."
    ]
  },
  {
    "id": "covid-synthetic-control",
    "category": "Applied Machine Learning & Statistics",
    "title": "COVID-19 Recession and the S&P 500",
    "subtitle": "",
    "meta": "Causal Inference · 2025 · With Youran Geng and Sayed AlGharbi",
    "paragraphs": [
      "Constructed a synthetic S&P 500 to study how U.S. stock returns diverged from a benchmark after February 13, 2020. Compared a benchmark built from global equity indices with one that also included commodity futures.",
      "Used a custom Gibbs sampler to estimate volatility separately for the observed and synthetic returns. Their estimated volatility tracked closely over the full sample, with slightly higher volatility in the observed index early in the pandemic."
    ]
  }
];
