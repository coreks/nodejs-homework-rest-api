const { User } = require("../../models");

const updateCurrent = async (req, res) => {
  const { _id } = req.user;
  const { subscription } = req.body;

  const result = await User.findByIdAndUpdate(
    _id,
    { subscription },
    {
      new: " ",
    }
  );

  res.json({
    status: "success",
    code: 200,
    data: {
      user: {
        result,
      },
    },
  });
};

module.exports = updateCurrent;
