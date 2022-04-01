using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
namespace smart_fram_api.Models;

[BsonIgnoreExtraElements]
public class ModelRoutine{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public double temp { get; set; }
    
    public double airMoisture { get; set; }

    public double soilMoisture { get; set; }

    public double windSpeed { get; set; }

    public date? date { get; set; }
    
}
