'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('aemet', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      fecha: {
        type: Sequelize.DATEONLY,
      },
      indicativo: {
        type: Sequelize.STRING,
      },
      nombre: {
        type: Sequelize.STRING,
      },
      provincia: {
        type: Sequelize.STRING,
      },
      altitud: {
        type: Sequelize.DECIMAL,
      },
      tmed: {
        type: Sequelize.DECIMAL,
      },
      prec: {
        type: Sequelize.STRING,
      },
      tmin: {
        type: Sequelize.DECIMAL,
      },
      tmax: {
        type: Sequelize.DECIMAL,
      },
      dir: {
        type: Sequelize.DECIMAL,
      },
      velmedia: {
        type: Sequelize.DECIMAL,
      },
      racha: {
        type: Sequelize.DECIMAL,
      },
      sol: {
        type: Sequelize.DECIMAL,
      },
      presMax: {
        type: Sequelize.DECIMAL,
      },
      presMin: {
        type: Sequelize.DECIMAL,
      },
      hrMedia: {
        type: Sequelize.DECIMAL,
      },
      hrMax: {
        type: Sequelize.DECIMAL,
      },
      hrMin: {
        type: Sequelize.DECIMAL,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      deletedAt: {
        type: Sequelize.DATE
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('aemet')
  }
}