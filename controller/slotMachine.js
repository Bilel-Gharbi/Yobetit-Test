const { generateSlotMachine, calcGainPerRow } = require("../utils");

const game = (req, res) => {
  try {
    let result;
    let slotMachine;
    //first game
    if (!req.body.score) {
      slotMachine = generateSlotMachine();
      result = {
        score: 20,
        slotMachine,
      };
      res.status(201).json({
        status: "success",
        msg: "first game",
        result,
      });
    } else if (req.body.score) {
      let totalGain = 0;
      let newScore;
      newScore = req.body.score - 1;
      slotMachine = generateSlotMachine();
      const { reel1, reel2, reel3 } = slotMachine;
      totalGain =
        calcGainPerRow(reel1) + calcGainPerRow(reel2) + calcGainPerRow(reel3);
      newScore = newScore + totalGain;

      result = {
        gain: totalGain,
        score: newScore,
        slotMachine,
      };

      res.status(201).json({
        status: "success",
        msg: "user still have score",
        result,
      });
    }
  } catch (err) {
    res.status(401).send({
      status: "fail",
      msg: "you loose",
    });
  }
};

module.exports = {
  game,
};
