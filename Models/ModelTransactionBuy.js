module.exports = (sequelize, Sequelize) => {
    const TransactionBuy = sequelize.define("TransactionBuy", {
        UID: {
            type: Sequelize.UUID,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV1
        },
        TransactionCode: {
            type: Sequelize.STRING
        },
        CurrencyCode: {
            type: Sequelize.STRING
        },
        PaymentCode:{
            type: Sequelize.STRING
        },
        LocationCode:{
            type: Sequelize.STRING
        },
        PickupCode:{
            type: Sequelize.STRING
        },
        UserName:{
            type: Sequelize.STRING
        },
        RateTotal:{
            type: Sequelize.DECIMAL
        },
        VolumeTotal:{
            type: Sequelize.DECIMAL
        },
    },
    {
        timestamps: false,
        freezeTableName: true,
        tableName: "TransactionBuy"
    }
    );

    return TransactionBuy;
}
