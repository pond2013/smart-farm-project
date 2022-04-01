using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
namespace smart_fram_api.Models;

[BsonIgnoreExtraElements]
public class ModelSetTemp{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? relayId { get; set; }
    
    public string? tempToStart { get; set; }

    public string? duration { get; set; }

    public string? user { get; set; }
    
}
