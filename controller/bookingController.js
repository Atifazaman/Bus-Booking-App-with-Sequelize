const Booking=require('../models/bookings')

const createBooking = async (req, res) => {
  try {

    const booking = await Booking.create({
      userId: req.body.userId,
      busId: req.body.busId,
      seatNumber: req.body.seatNumber
    });

    res.json(booking);

  } catch (error) {
    res.status(500).json({ message: "Booking failed" });
  }
};

module.exports={createBooking}