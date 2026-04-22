/* Change this file to get your personal Portfolio */

const settings = {
  isSplash: false,
};

// Greeting Section
const greeting = {
  title: "Hi 👋, I'm Gangadhar Dixit",
  subTitle:
    "Technical Product Owner with 5+ years of SRE experience, driving cloud platform reliability and CI/CD transformation. Proven track record of owning product roadmaps, improving system resilience, and delivering measurable impact through scalable AWS infrastructure and DevOps platforms.",
  resumeLink: "",
};

// Social Media Links
const socialMediaLinks = {
  linkedin: "https://linkedin.com/in/gangadhar-dixit-ba1241",
  gmail: "gangadhardixit123@gmail.com",
};

// Skills Section
const skillsSection = {
  title: "What I Do",
  subTitle:
    "Product Owner with strong SRE foundation specializing in cloud infrastructure, CI/CD, and observability",
  skills: [
    "⚡ Own and drive AWS cloud infrastructure reliability and scalability",
    "⚡ Lead CI/CD platform modernization (GitLab, Jenkins, Artifactory)",
    "⚡ Define SLIs/SLOs and improve system resilience",
    "⚡ Implement observability using Grafana and OpenSearch",
    "⚡ Translate engineering challenges into product roadmaps",
  ],

  softwareSkills: [
    { skillName: "AWS", fontAwesomeClassname: "logos:aws" },
    { skillName: "Docker", fontAwesomeClassname: "logos:docker-icon" },
    { skillName: "GitLab", fontAwesomeClassname: "logos:gitlab" },
    { skillName: "Jenkins", fontAwesomeClassname: "logos:jenkins" },
    { skillName: "Linux", fontAwesomeClassname: "logos:linux-tux" },
    { skillName: "Grafana", fontAwesomeClassname: "logos:grafana" },
    { skillName: "OpenSearch", fontAwesomeClassname: "simple-icons:opensearch" },
  ],
};

// Experience Section
const experience = {
  title: "Experience",
  subtitle: "Work and Leadership Journey",
  description:
    "Experience across SRE, cloud platforms, and product ownership with focus on reliability and scalability.",
  companies: [
    {
      company: "Capgemini India Pvt Ltd",
      duration: "Feb 2020 – Present",
      location: "Bengaluru, India",
      roles: [
        {
          title: "Technical Product Owner",
          description:
            "Owned AWS infrastructure roadmap and led SRE teams managing EC2, ASG, RDS, Amazon MQ, and CloudWatch. Delivered CI/CD modernization by migrating Jenkins pipelines to AWS-native solutions. Ensured zero-downtime upgrades for GitLab and Artifactory. Defined SLIs/SLOs and improved platform reliability through observability and automation.",
        },
      ],
    },
    {
      company: "Terralogic Software Solutions Pvt Ltd",
      duration: "Dec 2016 – Jan 2020",
      location: "Bengaluru, India",
      roles: [
        {
          title: "Site Reliability Engineer",
          description:
            "Built and maintained scalable CI/CD pipelines using Jenkins. Automated infrastructure provisioning and optimized build systems for high concurrency. Reduced failures and improved deployment efficiency.",
        },
      ],
    },
    {
      company: "Brisa Technologies Pvt Ltd",
      duration: "Jun 2015 – Nov 2016",
      location: "Bengaluru, India",
      roles: [
        {
          title: "Embedded Programmer",
          description:
            "Developed embedded software for automation systems, improving performance and reliability.",
        },
      ],
    },
  ],
};

// Projects Section (EU Focused)
const projects = {
  title: "Projects & Product Initiatives",
  subtitle: "Real-world impact delivered through product and engineering leadership",
  projects: [
    {
      projectName: "CI/CD Platform Modernization",
      projectDesc:
        "Led migration from Jenkins to AWS-native CI/CD, eliminating legacy dependencies and improving reliability.",
      descBullets: [
        "Improved deployment success rate and release velocity",
        "Removed VDI and licensed infrastructure dependencies",
        "Enabled scalable cloud-native pipeline architecture",
      ],
    },
    {
      projectName: "Observability Platform Implementation",
      projectDesc:
        "Designed centralized logging and monitoring using OpenSearch and Grafana.",
      descBullets: [
        "Reduced MTTR through better visibility",
        "Enabled proactive alerting and faster debugging",
        "Improved system reliability using metrics-driven decisions",
      ],
    },
    {
      projectName: "Cloud Automation Framework",
      projectDesc:
        "Automated infrastructure provisioning using Cloud-Init and User Data scripts.",
      descBullets: [
        "Reduced manual configuration errors",
        "Improved deployment speed significantly",
        "Standardized infrastructure across environments",
      ],
    },
  ],
};

// Achievements Section
const achievementSection = {
  title: "Key Achievements",
  subtitle: "Impact & Contributions",
  achievementsCards: [
    {
      title: "Platform Reliability Improvement",
      subtitle:
        "Resolved recurring 5xx errors in Artifactory using OpenSearch and log analysis",
    },
    {
      title: "Infrastructure Automation",
      subtitle:
        "Automated deployments using Cloud-Init reducing manual effort",
    },
    {
      title: "Observability Implementation",
      subtitle:
        "Implemented centralized logging and monitoring using Grafana",
    },
    {
      title: "Incident Reduction",
      subtitle:
        "Led RCA initiatives reducing recurring production failures",
    },
  ],
};

// Education Section
const educationInfo = {
  title: "Education",
  schools: [
    {
      schoolName: "MAHE, Manipal",
      subHeader: "M.Sc. Tech – Embedded Systems",
    },
    {
      schoolName: "VDIT, Karnataka",
      subHeader: "B.E. – Electronics & Communication",
    },
  ],
};

// Certifications Section
const certifications = {
  certifications: [
    {
      title: "AWS Certified Solutions Architect (2025)",
      subtitle: "Amazon Web Services",
    },
    {
      title: "Terraform Associate 003 (2024)",
      subtitle: "HashiCorp",
    },
  ],
};

// What I Bring Section (Differentiator)
const openSource = {
  showGithubProfile: false,
  display: true,
  title: "What I Bring",
  subtitle: "Product + Engineering Hybrid Advantage",
  descriptions: [
    "✔ Strong blend of Product Ownership and SRE execution",
    "✔ Experience with cross-functional engineering teams",
    "✔ Ability to convert infra problems into product roadmaps",
    "✔ Focus on scalability, reliability, and business impact",
  ],
};

// Contact Info
const contactInfo = {
  title: "Contact Me ☎️",
  subtitle:
    "Open to opportunities across Europe (Sweden, Germany, Netherlands) | Visa sponsorship required",
  email_address: "gangadhardixit123@gmail.com",
};

// Export everything
export {
  settings,
  greeting,
  socialMediaLinks,
  skillsSection,
  experience,
  projects,
  achievementSection,
  educationInfo,
  certifications,
  openSource,
  contactInfo,
};
