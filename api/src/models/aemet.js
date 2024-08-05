module.exports = function (sequelize, DataTypes) {
  const Aemet = sequelize.define('Aemet',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      fecha: {
        type: DataTypes.DATEONLY,
      },
      indicativo: {
        type: DataTypes.STRING,
      },
      nombre: {
        type: DataTypes.STRING,
      },
      provincia: {
        type: DataTypes.STRING,
      },
      altitud: {
        type: DataTypes.DECIMAL,
      },
      tmed: {
        type: DataTypes.DECIMAL,
      },
      prec: {
        type: DataTypes.STRING,
      },
      tmin: {
        type: DataTypes.DECIMAL,
      },
      tmax: {
        type: DataTypes.DECIMAL,
      },
      dir: {
        type: DataTypes.DECIMAL,
      },
      velmedia: {
        type: DataTypes.DECIMAL,
      },
      racha: {
        type: DataTypes.DECIMAL,
      },
      sol: {
        type: DataTypes.DECIMAL,
      },
      presMax: {
        type: DataTypes.DECIMAL,
      },
      presMin: {
        type: DataTypes.DECIMAL,
      },
      hrMedia: {
        type: DataTypes.DECIMAL,
      },
      hrMax: {
        type: DataTypes.DECIMAL,
      },
      hrMin: {
        type: DataTypes.DECIMAL,
      },
      createdAt: {
        type: DataTypes.DATE
      },
      updatedAt: {
        type: DataTypes.DATE
      }
    }, {
      sequelize,
      tableName: 'aemet',
      timestamps: true,
      paranoid: true,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [
            { name: 'id' }
          ]
        }
      ]
    }
  )

  Aemet.associate = function (models) {
    
  }

  return Aemet
}