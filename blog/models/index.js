const Sequelize = require('sequelize');

const url = process.env.DATABASE_URL || "sqlite:blog.sqlite";

const sequelize = new Sequelize(url);

const  Post= require('./post')(sequelize, Sequelize.DataTypes);
const Attachment = require('./attachment')(sequelize, Sequelize.DataTypes);

Attachment.hasOne(Post, {as: 'post', foreignKey: 'attachmentId'});
Post.belongsTo(Attachment, {as: 'attachment', foreignKey: 'attachmentId'});


                                     
module.exports = sequelize;