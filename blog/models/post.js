'use strict';

const {Model} = require('sequelize');

// Definition of the Quiz model:
module.exports = (sequelize, DataTypes) => {
    class Post extends Model {
    }

    Post.init({
            title: {
                type: DataTypes.STRING,
                validate: {notEmpty: {msg: "title must not be empty"}}
            },
            body: {
                type: DataTypes.TEXT,
                validate: {notEmpty: {msg: "body must not be empty"}}
            }


        }, {
            sequelize
        }
    );

    return Post;
};