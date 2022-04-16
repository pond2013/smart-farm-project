using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace smart_fram_api.Models;

public class RelayNode
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }

    public string? relayId { get; set; }
    public bool TurnOn { get; set; }

    public string? Date { get; set; }
    
}
