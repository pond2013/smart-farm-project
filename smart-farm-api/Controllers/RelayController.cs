using smart_fram_api.Models;
using smart_fram_api.Services;
using Microsoft.AspNetCore.Mvc;

namespace smart_fram_api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class RelayController : ControllerBase
{
    private readonly RelayService _relayService;

    public RelayController(RelayService relayService) =>
        _relayService = relayService;

    [HttpGet]
    public async Task<List<RelayNode>> Get() =>
        await _relayService.GetAsync();

    [HttpGet("{id:length(24)}")]
    public async Task<ActionResult<RelayNode>> Get(string id)
    {
        var node = await _relayService.GetAsync(id);

        if (node is null)
        {
            return NotFound();
        }

        return node;
    }

    [HttpPost]
    public async Task<IActionResult> Post(RelayNode newNode)
    {
        await _relayService.CreateAsync(newNode);

        return CreatedAtAction(nameof(Get), new { id = newNode.Id }, newNode);
    }

    [HttpPut("{id:length(24)}")]
    public async Task<IActionResult> Update(string id, RelayNode updatedNode)
    {
        var node = await _relayService.GetAsync(id);

        if (node is null)
        {
            return NotFound();
        }

        updatedNode.Id = node.Id;

        await _relayService.UpdateAsync(id, updatedNode);

        return NoContent();
    }

    [HttpDelete("{id:length(24)}")]
    public async Task<IActionResult> Delete(string id)
    {
        var node = await _relayService.GetAsync(id);

        if (node is null)
        {
            return NotFound();
        }

        await _relayService.RemoveAsync(id);

        return NoContent();
    }
}