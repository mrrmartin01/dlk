const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const nodemailer = require('nodemailer');

router.post('/', async (req, res) => {
  const { name, email, phone, session } = req.body;

  const sessionPrices = {
    starter: 2900,
    pro: 5900,
    studio: 9900,
  };

  try {
    // 1. Save booking to DB
    const booking = await Booking.create({ name, email, phone, session });

    // 2. Create Stripe session
    const stripeSession = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `${session.charAt(0).toUpperCase() + session.slice(1)} Session`,
            },
            unit_amount: sessionPrices[session],
          },
          quantity: 1,
        },
      ],
      customer_email: email,
      success_url: `${req.protocol}://${req.get('host')}/success?bookingId=${booking._id}`,
      cancel_url: `${req.protocol}://${req.get('host')}/#booking`,
    });

    // 3. Redirect to Stripe
    res.redirect(stripeSession.url);
  } catch (err) {
    console.error(err);
    res.status(500).send('Something went wrong!');
  }
});

module.exports = router;
