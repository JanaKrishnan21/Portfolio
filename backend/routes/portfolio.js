const express = require('express');
const router = express.Router();
const Portfolio = require('../models/Portfolio');
const { portfolioData } = require('../utils/seedData');

// Helper: get data from DB or fallback to static
const getData = async () => {
  try {
    const data = await Portfolio.findOne();
    return data || portfolioData;
  } catch {
    return portfolioData;
  }
};

// GET full portfolio
router.get('/', async (req, res) => {
  try {
    const data = await getData();
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// GET skills only
router.get('/skills', async (req, res) => {
  try {
    const data = await getData();
    res.json({ success: true, data: data.skills });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// GET education only
router.get('/education', async (req, res) => {
  try {
    const data = await getData();
    res.json({ success: true, data: data.education });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// GET projects only
router.get('/projects', async (req, res) => {
  try {
    const data = await getData();
    res.json({ success: true, data: data.projects });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// GET experience only
router.get('/experience', async (req, res) => {
  try {
    const data = await getData();
    res.json({ success: true, data: data.experience });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
