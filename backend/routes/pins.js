const router = require("express").Router()
const Pin = require("../models/Pin")

// create a pin

router.post("/", async (req,res) => {
    // console.log("test error", req.body);
    const newPin = new Pin(req.body)
    try{
        // console.log("Attempting to save newPIn", newPin);
        const savedPin = await newPin.save()
        // console.log("Saved newPIn", savedPin);
        res.status(200).json(savedPin)
    }catch(err){
        // console.error("Error saving pin:", err);
        res.status(500).json(err)
    }
})

// get all pins

module.exports = router