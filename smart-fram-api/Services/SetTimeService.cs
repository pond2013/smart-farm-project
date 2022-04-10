using smart_fram_api.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace smart_fram_api.Services;

public class SetTimeService
{
    private readonly IMongoCollection<SetTime> _usersCollection;

    public SetTimeService(
        IOptions<SmartFarmDatabaseSettings> smartFarmDatabaseSettings)
    {
        var mongoClient = new MongoClient(
            smartFarmDatabaseSettings.Value.ConnectionString);

        var mongoDatabase = mongoClient.GetDatabase(
            smartFarmDatabaseSettings.Value.DatabaseName);

        _usersCollection = mongoDatabase.GetCollection<SetTime>(
            smartFarmDatabaseSettings.Value.UsersCollectionName);
    }

    public async Task<List<SetTime>> GetAsync() =>
        await _usersCollection.Find(_ => true).ToListAsync();

    public async Task<SetTime?> GetAsync(string id) =>
        await _usersCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

    public async Task CreateAsync(SetTime newTimer) =>
        await _usersCollection.InsertOneAsync(newTimer);

    public async Task UpdateAsync(string id, SetTime updatedTimer) =>
        await _usersCollection.ReplaceOneAsync(x => x.Id == id, updatedTimer);

    public async Task RemoveAsync(string id) =>
        await _usersCollection.DeleteOneAsync(x => x.Id == id);
}