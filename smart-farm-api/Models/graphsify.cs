namespace smart_fram_api.Models;

public class graphsify{
    public string? ddmmyy { get; set; } 
    public string? relayId { get; set; }

    public entry? entries { get; set; }

}

public class entry{
    public string? time { get; set; }
    public int? temperature { get; set; }
    public int? soilMoisture { get; set; }
    public int? airMoisture { get; set; }
    public int? windSpeed { get; set; }

}