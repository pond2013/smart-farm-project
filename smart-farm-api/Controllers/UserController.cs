using smart_fram_api.Models;
using smart_fram_api.Services;
using Microsoft.AspNetCore.Mvc;

namespace smart_fram_api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UserController : ControllerBase
{
    private readonly UserService _userService;

    public UserController(UserService userService) =>
        _userService = userService;

    [HttpGet]
    public async Task<List<User>> Get() =>
        await _userService.GetAsync();

    [HttpGet("{Pid}")]
    public async Task<ActionResult<User>> Get(double Pid)
    {
        var user = await _userService.GetAsync(Pid);

        if (user is null)
        {
            return NotFound();
        }

        return user;
    }

    [HttpPost]
    public async Task<IActionResult> Post(User newUser)
    {
        await _userService.CreateAsync(newUser);

        return CreatedAtAction(nameof(Get), new { id = newUser.Id }, newUser);
    }

    [HttpPut("{Pid}")]
    public async Task<IActionResult> Update(double id, User updatedUser)
    {
        var user = await _userService.GetAsync(id);

        if (user is null)
        {
            return NotFound();
        }

        user.Pid  = updatedUser.Pid;

        await _userService.UpdateAsync(id, user);

        return NoContent();
    }

    [HttpPut("password/{Pid}/{password}")]
    public async Task<IActionResult> UpdatePassword(double id,string password)
    {
        var user = await _userService.GetAsync(id);

        

        if (user is null)
        {
            return NotFound();
        }

        User updatedUser = new User() ;

        updatedUser.Pid = user.Pid;
        updatedUser.Name = user.Name;
        updatedUser.Email = user.Email;
        updatedUser.Password  = password;

        await _userService.UpdateAsync(id, updatedUser);

        return NoContent();
    }


    [HttpDelete("{Pid}")]
    public async Task<IActionResult> Delete(double Pid)
    {
        var user = await _userService.GetAsync(Pid);

        if (user is null)
        {
            return NotFound();
        }

        await _userService.RemoveAsync(Pid);

        return NoContent();
    }
}