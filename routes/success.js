router.get('/success', async (req, res) => {
    const booking = await Booking.findById(req.query.bookingId);
  
    // Send email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'your@email.com',
        pass: 'your_app_password',
      },
    });
  
    await transporter.sendMail({
      from: '"Your Studio" <your@email.com>',
      to: booking.email,
      subject: 'Booking Confirmed!',
      html: `<p>Hi ${booking.name},</p><p>Your ${booking.session} session is confirmed!</p>`,
    });
  
    res.render('success', { title: 'Thank You' });
  });
  