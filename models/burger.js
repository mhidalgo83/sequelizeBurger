module.exports = function (sequelize, DataTypes) {
  var Burger = sequelize.define("burgers", {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    is_devoured: {
      type: DataTypes.BOOLEAN,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  });
return Burger;
}

