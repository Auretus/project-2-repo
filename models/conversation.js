module.exports = function(sequelize, DataTypes) {
  const Conversation = sequelize.define("Conversation", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    }
  });
  Conversation.associate = models => {
    models.Conversation.hasMany(models.Message, {
      onDelete: "cascade"
    });
    models.Conversation.belongsToMany(models.User, {
      as: [conversation],
      through: [userConversation],
      foreignKey: "conversationRowId"
    });
  };
  return Conversation;
};
