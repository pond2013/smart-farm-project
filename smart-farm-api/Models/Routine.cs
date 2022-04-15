using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
namespace smart_fram_api.Models;

[BsonIgnoreExtraElements]
public class Routine{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]

    public string? Id { get; set; }
    public double? temp { get; set; }

    public double? airMoisture { get; set; }

    public double? soilMoisture { get; set; }

    public double? windSpeed { get; set; }

    public DateTime Date { get; set; }
    
}
