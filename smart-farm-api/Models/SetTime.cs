using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
namespace smart_fram_api.Models;

[BsonIgnoreExtraElements]
public class SetTime
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }
    public string? ddmmyy { get; set; }
    public string? timeToStart { get; set; }
    public string? duration { get; set; }
    public string? relayId { get; set; }
    public string? user { get; set; }
    
}
