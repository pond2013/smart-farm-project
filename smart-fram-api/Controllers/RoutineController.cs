using smart_fram_api.Models;
using smart_fram_api.Services;
using Microsoft.AspNetCore.Mvc;

namespace smart_fram_api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class RoutineController : ControllerBase
{
    private readonly RoutineService _routineService;

    public RoutineController(RoutineService routineService) =>
        _routineService = routineService;

    [HttpGet]
    public async Task<List<Routine>> Get() =>
        await _routineService.GetAsync();

    [HttpGet("{id:length(24)}")]
    public async Task<ActionResult<Routine>> Get(string id)
    {
        var node = await _routineService.GetAsync(id);

        if (node is null)
        {
            return NotFound();
        }

        return node;
    }
     [HttpPost]
    public async Task<IActionResult> Post(Routine p)
    {
        await _routineService.CreateAsync(p);

        return CreatedAtAction(nameof(Get), new { id = p.Id }, p);
    }

    [HttpPut("{id:length(24)}")]
    public async Task<IActionResult> Update(string id, Routine update)
    {
        var node = await _routineService.GetAsync(id);

        if (node is null)
        {
            return NotFound();
        }

        update.Id = node.Id;

        await _routineService.UpdateAsync(id, update);

        return NoContent();
    }

    [HttpDelete("{id:length(24)}")]
    public async Task<IActionResult> Delete(string id)
    {
        var node = await _routineService.GetAsync(id);

        if (node is null)
        {
            return NotFound();
        }

        await _routineService.RemoveAsync(id);

        return NoContent();
    }
}