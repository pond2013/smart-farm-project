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

    [HttpGet("By/{username}")]
    public async Task<ActionResult<User>> GetUserByUsername(string username)
    {
        var user = await _userService.GetUsernameAsync(username);

        if (user is null)
        {
            return NotFound();
        }

        return Ok(user);
    }


    [HttpGet("{username}/{password}")]
    public async Task<ActionResult<Boolean>> CheckUserPassword(string username, string password)
    {
        var user = await _userService.GetUsernameAsync(username);

            if (user is null)
            {
                return NotFound();
            }

            if (user.Password == password)
            {
                return Ok(true);
            }

        else return Ok(false);;
    }

    [HttpPost]
    public async Task<IActionResult> Post(User newUser)
    {
        if (newUser.Name is not null){

            var user = await _userService.GetUsernameAsync(newUser.Name);

            if (newUser.Name == user?.Name) {
                return Problem("There is more user");
            }

            else {
                await _userService.CreateAsync(newUser);
                CreatedAtAction(nameof(Get), new { id = newUser.Id }, newUser);
                return Ok();
            }
        }
        return BadRequest();
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Update(string id, User updatedUser)
    {
        var user = await _userService.GetAsync(id);

        if (user is null)
        {
            return NotFound();
        }

        user.Id  = updatedUser.Id;

        await _userService.UpdateAsync(id, user);

        return NoContent();
    }

    [HttpPut("password/{id}/{password}")]
    public async Task<IActionResult> UpdatePassword(string id,string password)
    {
        var user = await _userService.GetAsync(id);

        

        if (user is null)
        {
            return NotFound();
        }

        User updatedUser = new User() ;

        updatedUser.Id = user.Id;
        updatedUser.Name = user.Name;
        updatedUser.Email = user.Email;
        updatedUser.Password  = password;

        await _userService.UpdateAsync(id, updatedUser);

        return NoContent();
    }


    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(string id)
    {
        var user = await _userService.GetAsync(id);

        if (user is null)
        {
            return NotFound();
        }

        await _userService.RemoveAsync(id);

        return NoContent();
    }

    [HttpDelete("By/{username}")]
    public async Task<IActionResult> DeleteByUsername(string username)
    {
        var user = await _userService.GetUsernameAsync(username);

        if (user is not null)
        {
            if (user.Id is not null) {
            await _userService.RemoveAsync(user.Id);
            }
        } else {
            return NotFound();
        }
        return NoContent();
    }
}