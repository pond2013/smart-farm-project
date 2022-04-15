using smart_fram_api.Models;
using smart_fram_api.Services;
using Microsoft.AspNetCore.Mvc;

namespace smart_fram_api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class SetSoilMoistureController : ControllerBase
{
    private readonly SetSoilMoistureService _setMoisture;

    public SetSoilMoistureController(SetSoilMoistureService setTempService) =>
        _setMoisture = setTempService;

    [HttpGet]
    public async Task<List<SetSoilMoisture>> Get() =>
        await _setMoisture.GetAsync();

    [HttpGet("{id:length(24)}")]
    public async Task<ActionResult<SetSoilMoisture>> Get(string id)
    {
        var node = await _setMoisture.GetAsync(id);

        if (node is null)
        {
            return NotFound();
        }

        return node;
    }
     [HttpPost]
    public async Task<IActionResult> Post(SetSoilMoisture moisture)
    {
        await _setMoisture.CreateAsync(moisture);

        return CreatedAtAction(nameof(Get), new { id = moisture.Id }, moisture);
    }

    [HttpPut("{id:length(24)}")]
    public async Task<IActionResult> Update(string id, SetSoilMoisture updateMoisture)
    {
        var node = await _setMoisture.GetAsync(id);

        if (node is null)
        {
            return NotFound();
        }

        updateMoisture.Id = node.Id;

        await _setMoisture.UpdateAsync(id, updateMoisture);

        return NoContent();
    }

    [HttpDelete("{id:length(24)}")]
    public async Task<IActionResult> Delete(string id)
    {
        var node = await _setMoisture.GetAsync(id);

        if (node is null)
        {
            return NotFound();
        }

        await _setMoisture.RemoveAsync(id);

        return NoContent();
    }
}