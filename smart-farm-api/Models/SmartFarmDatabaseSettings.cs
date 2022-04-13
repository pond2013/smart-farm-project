namespace smart_fram_api.Models;

public class SmartFarmDatabaseSettings
{
    public string ConnectionString { get; set; } = null!;

    public string DatabaseName { get; set; } = null!;

    public string NodesCollectionName { get; set; } = null!;
    public string UsersCollectionName { get; set; } = null!;
    public string SetTimeCollectionName { get; set; } = null!;
    public string SetTempCollectionName { get; set; } = null!;
    public string RoutineCollectionName { get; set; } = null!;
}