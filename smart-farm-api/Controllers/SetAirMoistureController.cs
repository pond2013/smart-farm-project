using smart_fram_api.Models;
using smart_fram_api.Services;
using Microsoft.AspNetCore.Mvc;

namespace smart_fram_api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class SetAirMoistureController : ControllerBase
{
    private readonly SetAirMoistureService _setAirMoistureService;

    public SetAirMoistureController(SetAirMoistureService setAirMoistureService) =>
        _setAirMoistureService = setAirMoistureService;

    [HttpGet]
    public async Task<List<SetAirMoisture>> Get() =>
        await _setAirMoistureService.GetAsync();

    [HttpGet("{id:length(24)}")]
    public async Task<ActionResult<SetAirMoisture>> Get(string id)
    {
        var node = await _setAirMoistureService.GetAsync(id);

        if (node is null)
        {
            return NotFound();
        }

        return node;
    }
     [HttpPost]
    public async Task<IActionResult> Post(SetAirMoisture moisture)
    {
        await _setAirMoistureService.CreateAsync(moisture);

        return CreatedAtAction(nameof(Get), new { id = moisture.Id }, moisture);
    }

        [HttpPost("ByList")]
    public async Task<IActionResult> PostList(List<SetAirMoisture> ListAirMoisture)
    {
        foreach (SetAirMoisture item in ListAirMoisture) {
            await _setAirMoistureService.CreateAsync(item);
            CreatedAtAction(nameof(Get), new { id = item.Id }, item);
        }

        return Ok();
    }

    [HttpPut("{id:length(24)}")]
    public async Task<IActionResult> Update(string id, SetAirMoisture updateMoisture)
    {
        var node = await _setAirMoistureService.GetAsync(id);

        if (node is null)
        {
            return NotFound();
        }

        updateMoisture.Id = node.Id;

        await _setAirMoistureService.UpdateAsync(id, updateMoisture);

        return NoContent();
    }

    [HttpDelete("{id:length(24)}")]
    public async Task<IActionResult> Delete(string id)
    {
        var node = await _setAirMoistureService.GetAsync(id);

        if (node is null)
        {
            return NotFound();
        }

        await _setAirMoistureService.RemoveAsync(id);

        return NoContent();
    }

    [HttpDelete("SoilMoistureByContext")]
    public async Task<IActionResult> DeleteByContext(SetAirMoisture setting)
    {
        var node = await _setAirMoistureService.GetSetAirMoistureByContextAsync(setting);

        if (node is not null)
        {
            if (node.Id is not null){
            await _setAirMoistureService.RemoveAsync(node.Id);
            }
        } else {
            return NotFound();
        }
        return NoContent();
    }
}