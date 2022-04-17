using smart_fram_api.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace smart_fram_api.Services;

public class SetTempService
{
    private readonly IMongoCollection<SetTemp> _setTempCollection;

    public SetTempService(
        IOptions<SmartFarmDatabaseSettings> smartFarmDatabaseSettings)
    {
        var mongoClient = new MongoClient(
            smartFarmDatabaseSettings.Value.ConnectionString);

        var mongoDatabase = mongoClient.GetDatabase(
            smartFarmDatabaseSettings.Value.DatabaseName);

        _setTempCollection = mongoDatabase.GetCollection<SetTemp>(
            smartFarmDatabaseSettings.Value.SetTempCollectionName);
    }

    public async Task<List<SetTemp>> GetAsync() =>
        await _setTempCollection.Find(_ => true).ToListAsync();

    public async Task<SetTemp?> GetAsync(string id) =>
        await _setTempCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

    public async Task<SetTemp?> GetSetTempByIdAsync(string relayId) =>
        await _setTempCollection.Find(x => x.relayId == relayId).FirstOrDefaultAsync();

    public async Task<SetTemp?> GetSetTempByUsernameAndIdAsync(string username,string relayId) =>
        await _setTempCollection.Find(x => (x.relayId == relayId) && (x.user == username)).FirstOrDefaultAsync();

    public async Task<SetTemp?> GetSetTempByContextAsync(SetTemp setting) =>
        await _setTempCollection.Find(x => ((x.tempToStart == setting.tempToStart) && (x.duration == setting.duration) 
                                            && (x.relayId == setting.relayId) && (x.user == setting.user))).FirstOrDefaultAsync();   
    public async Task CreateAsync(SetTemp newTemp) =>
        await _setTempCollection.InsertOneAsync(newTemp);

    public async Task UpdateAsync(string id, SetTemp updatedTemp) =>
        await _setTempCollection.ReplaceOneAsync(x => x.Id == id, updatedTemp);

    public async Task RemoveAsync(string id) =>
        await _setTempCollection.DeleteOneAsync(x => x.Id == id);
}