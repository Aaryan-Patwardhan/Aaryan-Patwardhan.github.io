import type { ResumeData } from '@/types'

// Every line here must match uploadables/Resume (checked against the code on
// 2026-10-26). Projects are not jobs: they live in lib/projects.ts.
export const resume: ResumeData = {
  name: "Aaryan Patwardhan",
  title: "Applied AI Systems Engineer · Founder, QuantaSharp",
  tagline: "I build AI systems that take repetitive work off people's plates — and show you anything they aren't sure about.",
  bio: "Third-year B.E. IT student who builds applied AI systems that check their own output: the AI reads, deterministic rules verify, and every doubtful result is shown to a person. I work across Python backends, LLMs, React and Docker.",
  location: "Pune, India",
  timezone: "IST (UTC+5:30)",
  email: "patwardhanaaryan@gmail.com",
  github: "https://github.com/Aaryan-Patwardhan",
  linkedin: "https://linkedin.com/in/aaryan-patwardhan",
  availableForWork: true,
  preferredEngagement: "internship",
  responseTime: "< 24 hours",
  experience: [
    {
      role: "Founder & Applied AI Systems Engineer",
      org: "QuantaSharp, Pune",
      period: "Apr 2026 – Present",
      bullets: [
        "Built InvoiceAI, which reads Indian GST invoices (digital PDFs, scans and phone photos) with local LLMs via Ollama behind a FastAPI service with SQLite storage.",
        "Designed a deterministic verification layer: GSTIN check-digit validation with OCR repair that is accepted only when the checksum passes, totals and CGST/SGST cross-checks, and seller/buyer correction from PDF text positions. Every doubtful field is flagged for review.",
        "Wrote 136 automated tests and a labelled golden-set accuracy gate in GitHub Actions, so a model or prompt change that lowers accuracy cannot be merged; 83% field accuracy with 0 invented values on 11 sample documents.",
        "Shipped it as an offline Docker package with Windows and Linux installers, and designed the dashboard for non-technical and older users."
      ]
    },
    {
      role: "Python AI/ML Development Intern",
      org: "Code N Try, Pune",
      period: "Jan 2026 – Feb 2026",
      bullets: [
        "Built a house-price prediction model: explored the data with pandas and Seaborn, trained a scikit-learn regression on a train/test split, and saved it with joblib for a prediction script.",
        "Built a Flask and SQLAlchemy web store with a product catalogue, session cart, checkout and an admin dashboard for adding and editing products.",
        "Built a command-line chat assistant on the Google Gemini API, with the API key kept out of the code."
      ]
    }
  ],
  education: [
    {
      degree: "B.E. Information Technology",
      institution: "SKN Sinhgad Institute of Technology & Science, Lonavala (Savitribai Phule Pune University)",
      period: "Expected Jun 2028"
    }
  ]
}
