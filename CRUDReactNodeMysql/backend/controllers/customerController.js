const controller = {};

controller.test = (req, res) => {
  const data = {
    name: "Jhon Smith",
    age: 20,
    city: "London",
  };

  console.log("Send data from controller employee");
  res.json(data);
};

module.exports = controller;
