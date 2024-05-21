const express=require('express');
const Event = require('../models/Event');
const router=express.Router();
router.post('/request',async(req,res)=>{
    try {
       const eventData = req.body.formData;
       eventData.status='pending';
       console.log(eventData)
       const newEvent = new Event(eventData);
       await newEvent.save();
        res.json({ success: true});
      } catch {
        res.json({ success: false });
      }
})
router.get('/pending',async(req,res)=>{
  try {
    const pendingEvents = await Event.find({ status: 'pending' });
    console.log(pendingEvents)
    res.send({pendingEvents,message :true});
  } catch (error) { 
    res.status(500).json({message:false});
  }
})
router.get('/accept',async(req,res)=>{
  try {
    //const pendingEvents = await Event.find({ status: 'pending' });
    await Event.updateMany({ status: 'pending' }, { status: 'Accepted' });
    res.send({success:true});
  } catch (error) { 
    res.send({success :false})
  }
})
router.get('/status/:eventname', async (req, res) => {
  const name = req.params.eventname;

  try {
    const event = await Event.findOne({ name: name });
    
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }
    console.log(event)
    res.json({ event });
  } catch (err) {
    res.status(500).json({ message: 'Internal server error' });
  }
});
router.put('/events/:eventId', async (req, res) => {
  const eventId = req.params.eventId;
  const { status } = req.body;

  try {
   
    const updatedEvent = await Event.findByIdAndUpdate(eventId, { status }, { new: true });

    if (!updatedEvent) {
      return res.status(404).json({ message: 'Event not found' });
    }
    
    res.status(200).json(updatedEvent);
  } catch (error) {
    console.error('Error updating event status:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports=router;