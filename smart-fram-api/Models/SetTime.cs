using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
namespace smart_fram_api.Models;

[BsonIgnoreExtraElements]
public class ModelSetTime{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
     public string? Id { get; set; }
    public string? relayId { get; set; }
    
    public string? timeToStart { get; set; }

    public string? b { get; set; }

    public string? user { get; set; }

    public date? date { get; set; }
    
}
