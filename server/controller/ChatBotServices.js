async (req, res) => {
    const messages = await Chat.find().sort({ timestamp: -1 }).limit(10);
    res.json(messages.reverse());
  }
  async (req, res) => {
    const { message, user } = req.body;
    const newMessage = new Chat({ message, user, timestamp: new Date() });
    await newMessage.save();
    res.json({ message: 'Message saved' });
  }