using smart_fram_api.Models;
using smart_fram_api.Services;
using Microsoft.AspNetCore.Mvc;

namespace smart_fram_api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class SetTempController : ControllerBase
{
    private readonly SetTempService _setTemp;

    public SetTempController(SetTempService setTempService) =>
        _setTemp = setTempService;

    [HttpGet]
    public async Task<List<SetTemp>> Get() =>
        await _setTemp.GetAsync();

    [HttpGet("{id:length(24)}")]
    public async Task<ActionResult<SetTemp>> Get(string id)
    {
        var node = await _setTemp.GetAsync(id);

        if (node is null)
        {
            return NotFound();
        }

        return node;
    }
     [HttpPost]
    public async Task<IActionResult> Post(SetTemp temp)
    {
        await _setTemp.CreateAsync(temp);

        return CreatedAtAction(nameof(Get), new { id = temp.Id }, temp);
    }

    [HttpPost("ByList")]
    public async Task<IActionResult> PostList(List<SetTemp> ListTemp)
    {
        foreach (SetTemp item in ListTemp) {
            await _setTemp.CreateAsync(item);
            CreatedAtAction(nameof(Get), new { id = item.Id }, item);
        }

        return Ok();
    }

    [HttpPut("{id:length(24)}")]
    public async Task<IActionResult> Update(string id, SetTemp updateTemp)
    {
        var node = await _setTemp.GetAsync(id);

        if (node is null)
        {
            return NotFound();
        }

        updateTemp.Id = node.Id;

        await _setTemp.UpdateAsync(id, updateTemp);

        return NoContent();
    }

    [HttpDelete("{id:length(24)}")]
    public async Task<IActionResult> Delete(string id)
    {
        var node = await _setTemp.GetAsync(id);

        if (node is null)
        {
            return NotFound();
        }

        await _setTemp.RemoveAsync(id);

        return NoContent();
    }

        [HttpDelete("TempByContext")]
        public async Task<IActionResult> DeleteByContext(SetTemp setting)
    {
        var node = await _setTemp.GetSetTempByContextAsync(setting);

        if (node is not null)
        {
            if (node.Id is not null){
            await _setTemp.RemoveAsync(node.Id);
            }
        } else {
            return NotFound();
        }
        return NoContent();
    }
}