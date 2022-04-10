using smart_fram_api.Models;
using smart_fram_api.Services;
using Microsoft.AspNetCore.Mvc;

namespace smart_fram_api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class SetTimeController : ControllerBase
{
    private readonly SetTimeService _setTime;

    public SetTimeController(SetTimeService setTimeService) =>
        _setTime = setTimeService;

    [HttpGet]
    public async Task<List<SetTime>> Get() =>
        await _setTime.GetAsync();

    [HttpGet("{id:length(24)}")]
    public async Task<ActionResult<SetTime>> Get(string id)
    {
        var node = await _setTime.GetAsync(id);

        if (node is null)
        {
            return NotFound();
        }

        return node;
    }
     [HttpPost]
    public async Task<IActionResult> Post(SetTime timer)
    {
        await _setTime.CreateAsync(timer);

        return CreatedAtAction(nameof(Get), new { id = timer.Id }, timer);
    }

    [HttpPut("{id:length(24)}")]
    public async Task<IActionResult> Update(string id, SetTime updateTime)
    {
        var node = await _setTime.GetAsync(id);

        if (node is null)
        {
            return NotFound();
        }

        updateTime.Id = node.Id;

        await _setTime.UpdateAsync(id, updateTime);

        return NoContent();
    }

    [HttpDelete("{id:length(24)}")]
    public async Task<IActionResult> Delete(string id)
    {
        var node = await _setTime.GetAsync(id);

        if (node is null)
        {
            return NotFound();
        }

        await _setTime.RemoveAsync(id);

        return NoContent();
    }
}