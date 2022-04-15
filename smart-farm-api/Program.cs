using smart_fram_api.Models;
using smart_fram_api.Services;


var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.Configure<SmartFarmDatabaseSettings>(
    builder.Configuration.GetSection("SmartFarmDatabase"));
builder.Services.AddSingleton<SmartFarmService>();
builder.Services.AddSingleton<UserService>();
builder.Services.AddSingleton<SetTempService>();
builder.Services.AddSingleton<SetTimeService>();
builder.Services.AddSingleton<RoutineService>();

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
app.UseSwagger();
app.UseSwaggerUI(c =>
{
    c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1");
});
// if (app.Environment.IsDevelopment())
// {
//     app.UseSwagger();
//     app.UseSwaggerUI(c =>
//     {
//         c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1");
//     });
// }

app.UseCors(builder =>{
    builder.AllowAnyHeader();
    builder.AllowAnyMethod();
    builder.AllowAnyOrigin();
});



app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
