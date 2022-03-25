using smart_fram_api.Models;
using smart_fram_api.Services;
using Microsoft.AspNetCore.Mvc;

namespace smart_fram_api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class SmartFarmController : ControllerBase
{
    private readonly SmartFarmService _smartFarmService;

    public SmartFarmController(SmartFarmService smartFarmService) =>
        _smartFarmService = smartFarmService;

    [HttpGet]
    public async Task<List<TemNode>> Get() =>
        await _smartFarmService.GetAsync();

    [HttpGet("{id:length(24)}")]
    public async Task<ActionResult<TemNode>> Get(string id)
    {
        var node = await _smartFarmService.GetAsync(id);

        if (node is null)
        {
            return NotFound();
        }

        return node;
    }

    [HttpPost]
    public async Task<IActionResult> Post(TemNode newNode)
    {
        await _smartFarmService.CreateAsync(newNode);

        return CreatedAtAction(nameof(Get), new { id = newNode.Id }, newNode);
    }

    [HttpPut("{id:length(24)}")]
    public async Task<IActionResult> Update(string id, TemNode updatedNode)
    {
        var node = await _smartFarmService.GetAsync(id);

        if (node is null)
        {
            return NotFound();
        }

        updatedNode.Id = node.Id;

        await _smartFarmService.UpdateAsync(id, updatedNode);

        return NoContent();
    }

    [HttpDelete("{id:length(24)}")]
    public async Task<IActionResult> Delete(string id)
    {
        var node = await _smartFarmService.GetAsync(id);

        if (node is null)
        {
            return NotFound();
        }

        await _smartFarmService.RemoveAsync(id);

        return NoContent();
    }
}