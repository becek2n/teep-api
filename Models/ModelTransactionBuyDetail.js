module.exports = (sequelize, Sequelize) => {
    const TransactionBuyDetail = sequelize.define("TransactionBuyDetail", {
        UID: {
            type: Sequelize.UUID,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV1
        },
        TransactionCode: {
            type: Sequelize.STRING
        },
        UIDWallet: {
            type: Sequelize.STRING
        },
        Rate:{
            type: Sequelize.DECIMAL
        },
        Amount:{
            type: Sequelize.DECIMAL
        },
    },
    {
        timestamps: false,
        freezeTableName: true,
        tableName: "TransactionBuyDetail"
    }
    );

    return TransactionBuyDetail;
}