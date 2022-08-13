module.exports = (sequelize, DataType) => {
    const Filme = sequelize.define('Filme', {
        nome: {
            type: DataType.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        categoria: {                                          
            type: DataType.STRING(50),
            allowNull: false
        },

        duracao: {
            type: DataType.STRING(50),
            allowNull: false
        },

        classificacaoIndicativa: {
            type: DataType.STRING(50),
            allowNull: false
        }

       



    }, {
        tableName: 'filmes',
        timestamps: false
    })

    return Filme
}