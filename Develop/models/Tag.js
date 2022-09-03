const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
  {
      // Worked with Scott Casey, Jerrod Linderman, and Kyle Larsen in a group to come up with columns.
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tag_name: {
      type: DataTypes.STRING
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;


// Tag
  // id
    // Integer.
    // Doesn't allow null values.
    // Set as primary key.
    // Uses auto increment.
// tag_name
  // String.