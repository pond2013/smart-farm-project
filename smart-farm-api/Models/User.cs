using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
namespace smart_fram_api.Models;

[BsonIgnoreExtraElements]
public class User
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }

    [BsonElement("name")]
    public string? Name { get; set; }
    public string? Email { get; set; }
    public string? Password { get; set; }
    
    public string? Plant { get; set; }

    public string? NodeIP { get; set; }
}
