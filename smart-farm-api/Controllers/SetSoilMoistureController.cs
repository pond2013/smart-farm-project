using smart_fram_api.Models;
using smart_fram_api.Services;
using Microsoft.AspNetCore.Mvc;

namespace smart_fram_api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class SetSoilMoistureController : ControllerBase
{
    private readonly SetSoilMoistureService _setSoilMoistureService;

    public SetSoilMoistureController(SetSoilMoistureService setSoilMoistureService) =>
        _setSoilMoistureService = setSoilMoistureService;

    [HttpGet]
    public async Task<List<SetSoilMoisture>> Get() =>
        await _setSoilMoistureService.GetAsync();

    [HttpGet("{id:length(24)}")]
    public async Task<ActionResult<SetSoilMoisture>> Get(string id)
    {
        var node = await _setSoilMoistureService.GetAsync(id);

        if (node is null)
        {
            return NotFound();
        }

        return node;
    }
     [HttpPost]
    public async Task<IActionResult> Post(SetSoilMoisture moisture)
    {
        await _setSoilMoistureService.CreateAsync(moisture);

        return CreatedAtAction(nameof(Get), new { id = moisture.Id }, moisture);
    }

    [HttpPost("ByList")]
    public async Task<IActionResult> PostList(List<SetSoilMoisture> ListSoilMoisture)
    {
        foreach (SetSoilMoisture item in ListSoilMoisture) {
            await _setSoilMoistureService.CreateAsync(item);
            CreatedAtAction(nameof(Get), new { id = item.Id }, item);
        }

        return Ok();
    }

    [HttpPut("{id:length(24)}")]
    public async Task<IActionResult> Update(string id, SetSoilMoisture updateMoisture)
    {
        var node = await _setSoilMoistureService.GetAsync(id);

        if (node is null)
        {
            return NotFound();
        }

        updateMoisture.Id = node.Id;

        await _setSoilMoistureService.UpdateAsync(id, updateMoisture);

        return NoContent();
    }

    [HttpDelete("{id:length(24)}")]
    public async Task<IActionResult> Delete(string id)
    {
        var node = await _setSoilMoistureService.GetAsync(id);

        if (node is null)
        {
            return NotFound();
        }

        await _setSoilMoistureService.RemoveAsync(id);

        return NoContent();
    }
}