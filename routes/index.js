var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Above Incentive's Motel",
    pageStyles: "/stylesheets/index.css",
    portfolio: [
      { src:"https://plus.unsplash.com/premium_photo-1741884363239-3dcc7d5e11ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY5fHxibGFjayUyMG1hbiUyMGxvb2tpbmclMjBsZWZ0fGVufDB8fDB8fHww"},
      {src:"https://plus.unsplash.com/premium_photo-1664888531973-2cdae1f3d865?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fGJsYWNrJTIwYWVzdGhldGljJTIwd2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D"},
      {src:"https://images.unsplash.com/photo-1745390017905-0a1d6bf99e1a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D"}
    ],
    plans: [
      {
        title: 'Starter',
        price: { monthly: 29, yearly: 290 },
        features: ['Up to 5 Projects', 'Basic Support', 'Access to Gallery'],
        featured: false
      },
      {
        title: 'Pro',
        price: { monthly: 59, yearly: 590 },
        features: ['Unlimited Projects', 'Priority Support', 'Client Portal'],
        featured: true
      },
      {
        title: 'Studio',
        price: { monthly: 99, yearly: 990 },
        features: ['Unlimited Everything', 'Team Access', 'AI Editing Tools'],
        featured: false
      }
    ]
  });
});

module.exports = router;
