using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
namespace smart_fram_api.Models;

[BsonIgnoreExtraElements]
public class TemNode
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }
    
    [BsonElement("name")]
    public string? Name { get; set; }
    public bool TurnOn { get; set; }
    public string? Date { get; set; }
}
