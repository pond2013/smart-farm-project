using smart_fram_api.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace smart_fram_api.Services;

public class SetAirMoistureService
{
    private readonly IMongoCollection<SetAirMoisture> _setAirMoistureCollection;

    public SetAirMoistureService(
        IOptions<SmartFarmDatabaseSettings> smartFarmDatabaseSettings)
    {
        var mongoClient = new MongoClient(
            smartFarmDatabaseSettings.Value.ConnectionString);

        var mongoDatabase = mongoClient.GetDatabase(
            smartFarmDatabaseSettings.Value.DatabaseName);

        _setAirMoistureCollection = mongoDatabase.GetCollection<SetAirMoisture>(
            smartFarmDatabaseSettings.Value.SetAirMoistureCollectionName);
    }

    public async Task<List<SetAirMoisture>> GetAsync() =>
        await _setAirMoistureCollection.Find(_ => true).ToListAsync();

    public async Task<SetAirMoisture?> GetAsync(string id) =>
        await _setAirMoistureCollection.Find(x => x.Id == id).FirstOrDefaultAsync();
    public async Task<SetAirMoisture?> GetSetAirMoistureByIdAsync(string relayId) =>
        await _setAirMoistureCollection.Find(x => x.relayId == relayId).FirstOrDefaultAsync();
    public async Task<SetAirMoisture?> GetSetAirMoistureByUsernameAndIdAsync(string username,string relayId) =>
        await _setAirMoistureCollection.Find(x => (x.relayId == relayId) && (x.user == username)).FirstOrDefaultAsync();
    
      public async Task<SetAirMoisture?> GetSetAirMoistureByContextAsync(SetAirMoisture setting) =>
        await _setAirMoistureCollection.Find(x => ((x.moisture == setting.moisture) && (x.duration == setting.duration) 
                                            && (x.relayId == setting.relayId) && (x.user == setting.user))).FirstOrDefaultAsync();   

    public async Task CreateAsync(SetAirMoisture newMoisture) =>
        await _setAirMoistureCollection.InsertOneAsync(newMoisture);

    public async Task UpdateAsync(string id, SetAirMoisture updatedMoisture) =>
        await _setAirMoistureCollection.ReplaceOneAsync(x => x.Id == id, updatedMoisture);

    public async Task RemoveAsync(string id) =>
        await _setAirMoistureCollection.DeleteOneAsync(x => x.Id == id);
}