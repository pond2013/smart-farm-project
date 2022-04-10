using smart_fram_api.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace smart_fram_api.Services;

public class SetTimeService
{
    private readonly IMongoCollection<SetTime> _setTimeCollection;

    public SetTimeService(
        IOptions<SmartFarmDatabaseSettings> smartFarmDatabaseSettings)
    {
        var mongoClient = new MongoClient(
            smartFarmDatabaseSettings.Value.ConnectionString);

        var mongoDatabase = mongoClient.GetDatabase(
            smartFarmDatabaseSettings.Value.DatabaseName);

        _setTimeCollection = mongoDatabase.GetCollection<SetTime>(
            smartFarmDatabaseSettings.Value.SetTimeCollectionName);
    }

    public async Task<List<SetTime>> GetAsync() =>
        await _setTimeCollection.Find(_ => true).ToListAsync();

    public async Task<SetTime?> GetAsync(string id) =>
        await _setTimeCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

    public async Task CreateAsync(SetTime timer) =>
        await _setTimeCollection.InsertOneAsync(timer);

    public async Task UpdateAsync(string id, SetTime updateTimer) =>
        await _setTimeCollection.ReplaceOneAsync(x => x.Id == id, updateTimer);

    public async Task RemoveAsync(string id) =>
        await _setTimeCollection.DeleteOneAsync(x => x.Id == id);
}