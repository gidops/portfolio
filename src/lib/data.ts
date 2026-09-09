// ---------------------------------------------------------------------------
// All portfolio content lives here — edit this file to update the site.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Ebubechukwu Gideon Ugorji",
  /** short name used in terminal-style UI (nav logo, hero terminal) */
  handle: "gideon",
  role: "DevOps Engineer",
  tagline:
    "Result-oriented DevOps engineer optimizing CI/CD pipelines, automation, cloud infrastructure, and configuration management — keeping software flowing from commit to production.",
  about: [
    "I'm a DevOps engineer who builds the roads software ships on: CI/CD pipelines, containerized platforms, and cloud infrastructure on AWS and Oracle Cloud. I currently work in Tech & Innovation at the African Export–Import Bank (Afreximbank), where I designed and deployed a containerized enterprise Visitor Management System — and the Git-based pipeline that builds, tests, and ships it.",
    "Before that I migrated on-premise workloads to AWS, cut build times with Jenkins, automated deployments with Docker, Kubernetes, and Ansible, and administered Linux systems. I hold AWS, Oracle Cloud, and Kubernetes (KCNA) certifications, and I'm currently pursuing a master's degree in Information Technology.",
  ],
  location: "Abuja, Nigeria",
  email: "ugorjigideon@outlook.com",
  socials: {
    github: "https://github.com/gidops",
    linkedin: "https://www.linkedin.com/in/gideonugorji",
  },
  resumeUrl: "", // e.g. "/resume.pdf" — drop the file in /public and set this
};

export type Project = {
  title: string;
  description: string;
  highlights: string[];
  tech: string[];
  link?: string; // live demo
  repo?: string; // source code
  caseStudyUrl?: string; // internal case-study page
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "AATC Visitor Management System",
    description:
      "Enterprise visitor management for a diplomatic/banking environment — security-first, event-driven, and fully internationalized (EN/FR/AR with RTL). I designed, containerized, and deployed it end to end.",
    highlights: [
      "Containerized with Docker for environment consistency from development to production",
      "Git-based CI/CD pipeline automating build, test, and deployment",
      "Host, Receptionist, and Security Officer workflows with RBAC and audit logging",
      "Provisioned on AWS (ECR, EC2, RDS) with Terraform",
    ],
    tech: [
      "Docker",
      "AWS",
      "Terraform",
      "PostgreSQL",
      "NestJS",
      "Next.js",
      "TypeScript",
      "Turborepo",
    ],
    caseStudyUrl: "/projects/aatc-vms",
    featured: true,
  },
  {
    title: "GitOps CI/CD Pipeline",
    description:
      "End-to-end GitOps workflow using GitHub Actions to build, test, and publish artifacts for deployment — every change flows from commit to running workload automatically.",
    highlights: [
      "Automated build and test on every push",
      "Artifact publishing wired into the deployment flow",
    ],
    tech: ["GitHub Actions", "Docker", "Kubernetes", "Git"],
  },
  {
    title: "Cloud Migration",
    description:
      "Migration of an existing on-premise application to AWS — compute, identity, monitoring, and cost optimization, trading fixed servers for scalability and flexibility.",
    highlights: [
      "Lift-and-improve migration to AWS",
      "IAM roles and policies for least-privilege access",
    ],
    tech: ["AWS", "EC2", "IAM", "CloudWatch", "Jenkins"],
  },
  {
    title: "Vprofile Project",
    description:
      "Deployment of a multi-tier e-commerce web application — web, application, and database layers built and shipped through an automated pipeline.",
    highlights: [
      "Multi-tier architecture: Nginx, Tomcat, MySQL",
      "Build automation with Maven and Jenkins",
    ],
    tech: ["Jenkins", "Maven", "Nginx", "Apache Tomcat", "MySQL"],
  },
];

export const skillGroups: { label: string; skills: string[] }[] = [
  {
    label: "Cloud & Infrastructure",
    skills: [
      "AWS",
      "Oracle Cloud (OCI)",
      "EC2 & IAM",
      "CloudWatch",
      "Terraform",
      "CloudFormation",
      "Ansible",
    ],
  },
  {
    label: "CI/CD & Automation",
    skills: [
      "Jenkins",
      "GitHub Actions",
      "SonarQube",
      "Maven & Ant",
      "Nexus",
      "GitOps",
    ],
  },
  {
    label: "Containers & Orchestration",
    skills: ["Docker", "Kubernetes", "EKS", "Amazon ECR", "DockerHub"],
  },
  {
    label: "Systems & Scripting",
    skills: [
      "Linux & Windows",
      "Python",
      "Bash",
      "Nginx",
      "Apache Tomcat",
      "MySQL",
      "Git",
    ],
  },
];

export type Certification = {
  name: string;
  issuer: string;
  year?: string;
  /** Link to verify the credential (e.g. Credly, issuer verification page) */
  credentialUrl?: string;
  /** The certificate document itself, served from /public (e.g. "/certificates/x.pdf") */
  certificateUrl?: string;
  /** Optional badge image — drop the file in /public/badges and reference it, e.g. "/badges/aws-saa.png" */
  badgeImage?: string;
  /** Fallback icon shown when there's no badge image */
  icon?: string;
};

export const certifications: Certification[] = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "2025",
    // Validation number fb31ecc19594486aa13bfce7b464db6e at the verification portal
    credentialUrl: "https://aws.amazon.com/verification",
    certificateUrl: "/certificates/aws-cloud-practitioner.pdf",
    icon: "☁️",
  },
  {
    name: "OCI 2025 Certified DevOps Professional",
    issuer: "Oracle",
    year: "2025",
    certificateUrl: "/certificates/oci-devops-professional.pdf",
    icon: "🔶",
  },
  {
    name: "OCI 2025 Certified Foundations Associate",
    issuer: "Oracle",
    year: "2025",
    certificateUrl: "/certificates/oci-foundations-associate.pdf",
    icon: "🔶",
  },
  {
    name: "Kubernetes and Cloud Native Associate (KCNA)",
    issuer: "The Linux Foundation & CNCF",
    year: "2026",
    // Certificate ID LF-etx0923f9f — verifiable at the Linux Foundation portal
    credentialUrl: "https://training.linuxfoundation.org/certification/verify/",
    certificateUrl: "/certificates/kcna-kubernetes-cloud-native-associate.pdf",
    icon: "☸️",
  },
  {
    name: "Kubernetes and Cloud Native Essentials (LFS250)",
    issuer: "The Linux Foundation",
    year: "2026",
    certificateUrl: "/certificates/lfs250-kubernetes-cloud-native-essentials.pdf",
    icon: "☸️",
  },
  {
    name: "Introduction to Kubernetes (LFS158)",
    issuer: "The Linux Foundation",
    year: "2026",
    certificateUrl: "/certificates/lfs158-introduction-to-kubernetes.pdf",
    icon: "☸️",
  },
  {
    name: "Oracle Fusion Cloud Applications ERP Process Essentials",
    issuer: "Oracle",
    icon: "🔶",
  },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  description: string;
};

export const experience: Experience[] = [
  {
    role: "Tech & Innovation (Supervisor)",
    company: "African Export–Import Bank",
    period: "Jan 2023 — Present",
    description:
      "Designed and deployed the bank's containerized enterprise Visitor Management System — Host, Receptionist, and Security Officer workflows — with a Git-based CI/CD pipeline automating build, test, and deployment.",
  },
  {
    role: "Tech & Innovation",
    company: "African Export–Import Bank",
    period: "Nov 2021 — Dec 2022",
    description:
      "Cut build times with Jenkins, migrated on-premise servers to AWS, reduced infrastructure costs with AWS cost-optimization features, and hardened access with IAM users, roles, and policies.",
  },
  {
    role: "DevOps Engineer",
    company: "Cornie",
    period: "Nov 2020 — Apr 2021",
    description:
      "Accelerated Jenkins builds to improve time-to-market and supported the migration of on-premise workloads to AWS with cost-optimized, IAM-secured infrastructure.",
  },
  {
    role: "DevOps Engineer",
    company: "Jackocoins",
    period: "Jan 2020 — Nov 2020",
    description:
      "Integrated SonarQube into Jenkins pipelines, automated deployments with Docker, Kubernetes, and Ansible — increasing deployment frequency by 50% — and set up CloudWatch monitoring and alerting.",
  },
  {
    role: "Linux Administrator",
    company: "Freelance",
    period: "Mar 2019 — Dec 2019",
    description:
      "Installed and maintained Linux systems, configured VMware and load-balanced web servers, and automated routine tasks with Python and Bash.",
  },
];

export type Education = {
  degree: string;
  school: string;
  period: string;
};

export const education: Education[] = [
  {
    degree: "M.Sc. Information Technology",
    school: "Miva Open University, Abuja",
    period: "Ongoing",
  },
  {
    degree: "B.Sc. Physics (Material Science)",
    school: "Federal University of Technology, Owerri",
    period: "2021",
  },
];
