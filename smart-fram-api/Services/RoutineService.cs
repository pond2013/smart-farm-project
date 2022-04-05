using smart_fram_api.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace smart_fram_api.Services;

public class RoutineService
{
    private readonly IMongoCollection<Routine> _usersCollection;

    public RoutineService(
        IOptions<SmartFarmDatabaseSettings> smartFarmDatabaseSettings)
    {
        var mongoClient = new MongoClient(
            smartFarmDatabaseSettings.Value.ConnectionString);

        var mongoDatabase = mongoClient.GetDatabase(
            smartFarmDatabaseSettings.Value.DatabaseName);

        _usersCollection = mongoDatabase.GetCollection<Routine>(
            smartFarmDatabaseSettings.Value.UsersCollectionName);
    }

    public async Task<List<Routine>> GetAsync() =>
        await _usersCollection.Find(_ => true).ToListAsync();

    public async Task<Routine?> GetAsync(string id) =>
        await _usersCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

    public async Task CreateAsync(Routine newRoutine) =>
        await _usersCollection.InsertOneAsync(newRoutine);

    public async Task UpdateAsync(string id, Routine updatedRoutine) =>
        await _usersCollection.ReplaceOneAsync(x => x.Id == id, updatedRoutine);

    public async Task RemoveAsync(string id) =>
        await _usersCollection.DeleteOneAsync(x => x.Id == id);
}