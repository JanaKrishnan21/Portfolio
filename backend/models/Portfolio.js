const mongoose = require('mongoose');

const SkillSchema = new mongoose.Schema({
  category: { type: String, required: true },
  items: [{ type: String }],
  icon: { type: String, default: '💡' }
});

const EducationSchema = new mongoose.Schema({
  degree: { type: String, required: true },
  institution: { type: String, required: true },
  location: { type: String },
  period: { type: String },
  score: { type: String },
  scoreType: { type: String, enum: ['CGPA', 'Percentage'], default: 'CGPA' }
});

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  bullets: [{ type: String }],
  techStack: [{ type: String }],
  period: { type: String },
  link: { type: String },
  featured: { type: Boolean, default: false }
});

const ExperienceSchema = new mongoose.Schema({
  role: { type: String, required: true },
  company: { type: String, required: true },
  period: { type: String },
  bullets: [{ type: String }]
});

const CertificationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  issuer: { type: String }
});

const PortfolioSchema = new mongoose.Schema({
  name: { type: String, required: true },
  title: { type: String },
  tagline: { type: String },
  email: { type: String },
  phone: { type: String },
  linkedin: { type: String },
  github: { type: String },
  summary: { type: String },
  skills: [SkillSchema],
  education: [EducationSchema],
  projects: [ProjectSchema],
  experience: [ExperienceSchema],
  certifications: [CertificationSchema],
  languages: [{ type: String }]
}, { timestamps: true });

module.exports = mongoose.model('Portfolio', PortfolioSchema);
