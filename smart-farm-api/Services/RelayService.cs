using smart_fram_api.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace smart_fram_api.Services;

public class RelayService
{
    private readonly IMongoCollection<RelayNode> _nodesCollection;

    public RelayService(
        IOptions<SmartFarmDatabaseSettings> smartFarmDatabaseSettings)
    {
        var mongoClient = new MongoClient(
            smartFarmDatabaseSettings.Value.ConnectionString);

        var mongoDatabase = mongoClient.GetDatabase(
            smartFarmDatabaseSettings.Value.DatabaseName);

        _nodesCollection = mongoDatabase.GetCollection<RelayNode>(
            smartFarmDatabaseSettings.Value.NodesCollectionName);
    }

    public async Task<List<RelayNode>> GetAsync() =>
        await _nodesCollection.Find(_ => true).ToListAsync();

    public async Task<RelayNode?> GetAsync(string id) =>
        await _nodesCollection.Find(x => x.Id == id).FirstOrDefaultAsync();
    public async Task<RelayNode?> GetRelayNodeByIdAsync(string relayId) =>
        await _nodesCollection.Find(x => x.relayId == relayId).FirstOrDefaultAsync();
    public async Task CreateAsync(RelayNode newNode) =>
        await _nodesCollection.InsertOneAsync(newNode);

    public async Task UpdateAsync(string id, RelayNode updatedNode) =>
        await _nodesCollection.ReplaceOneAsync(x => x.Id == id, updatedNode);

    public async Task RemoveAsync(string id) =>
        await _nodesCollection.DeleteOneAsync(x => x.Id == id);
}