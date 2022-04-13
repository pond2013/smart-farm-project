using smart_fram_api.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace smart_fram_api.Services;

public class SmartFarmService
{
    private readonly IMongoCollection<TemNode> _nodesCollection;

    public SmartFarmService(
        IOptions<SmartFarmDatabaseSettings> smartFarmDatabaseSettings)
    {
        var mongoClient = new MongoClient(
            smartFarmDatabaseSettings.Value.ConnectionString);

        var mongoDatabase = mongoClient.GetDatabase(
            smartFarmDatabaseSettings.Value.DatabaseName);

        _nodesCollection = mongoDatabase.GetCollection<TemNode>(
            smartFarmDatabaseSettings.Value.NodesCollectionName);
    }

    public async Task<List<TemNode>> GetAsync() =>
        await _nodesCollection.Find(_ => true).ToListAsync();

    public async Task<TemNode?> GetAsync(string id) =>
        await _nodesCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

    public async Task CreateAsync(TemNode newNode) =>
        await _nodesCollection.InsertOneAsync(newNode);

    public async Task UpdateAsync(string id, TemNode updatedNode) =>
        await _nodesCollection.ReplaceOneAsync(x => x.Id == id, updatedNode);

    public async Task RemoveAsync(string id) =>
        await _nodesCollection.DeleteOneAsync(x => x.Id == id);
}