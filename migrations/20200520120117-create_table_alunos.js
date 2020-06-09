'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'alunos', 
      {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull:false
        },
        nome: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        img: {
            type: Sequelize.STRING(100)
        },
        email: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        telefone: {
            type: Sequelize.STRING(20),
            allowNull: false
        },
        nascimento: {
            type: Sequelize.STRING(20),
            allowNull: false
        },
        treinadores_id:{
          type:Sequelize.INTEGER,
          references:{
            model:'treinadores',
            key:'id'
          },
          onUpdate:'CASCADE',
          onDelete:'CASCADE'
        }
    });
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.dropTable('alunos');

  }
};