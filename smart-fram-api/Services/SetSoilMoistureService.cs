using smart_fram_api.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace smart_fram_api.Services;

public class SetSoilMoistureService
{
    private readonly IMongoCollection<SetSoilMoisture> _setSoilMoistureCollection;

    public SetSoilMoistureService(
        IOptions<SmartFarmDatabaseSettings> smartFarmDatabaseSettings)
    {
        var mongoClient = new MongoClient(
            smartFarmDatabaseSettings.Value.ConnectionString);

        var mongoDatabase = mongoClient.GetDatabase(
            smartFarmDatabaseSettings.Value.DatabaseName);

        _setSoilMoistureCollection = mongoDatabase.GetCollection<SetSoilMoisture>(
            smartFarmDatabaseSettings.Value.SetTempCollectionName);
    }

    public async Task<List<SetSoilMoisture>> GetAsync() =>
        await _setSoilMoistureCollection.Find(_ => true).ToListAsync();

    public async Task<SetSoilMoisture?> GetAsync(string id) =>
        await _setSoilMoistureCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

    public async Task CreateAsync(SetSoilMoisture newMoisture) =>
        await _setSoilMoistureCollection.InsertOneAsync(newMoisture);

    public async Task UpdateAsync(string id, SetSoilMoisture updatedMoisture) =>
        await _setSoilMoistureCollection.ReplaceOneAsync(x => x.Id == id, updatedMoisture);

    public async Task RemoveAsync(string id) =>
        await _setSoilMoistureCollection.DeleteOneAsync(x => x.Id == id);
}