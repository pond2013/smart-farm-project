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


    [HttpPost("CheckUserPassword")]
    public async Task<ActionResult> CheckUserPassword(User newUser)
{
        if (newUser.Name is not null){

            var user = await _userService.GetUsernameAsync(newUser.Name);

            if (newUser.Name == user?.Name) {
                if (newUser.Password == user?.Password) {
                    return Ok();
                } else {
                    return Problem("Password wrong");
                }
            } else {
                return Problem("Who name themselves that?");
            }
        }
        return BadRequest();
    }

    [HttpPost]
    public async Task<IActionResult> Post(User newUser)
    {
        if (newUser.Name is not null){

            var user = await _userService.GetUsernameAsync(newUser.Name);

            if (newUser.Name == user?.Name) {
                return Problem("There is more user");
            } else if (newUser.Name == "" || newUser.Password == "") {
                return Problem("Bad Name or password");
            } else {
                await _userService.CreateAsync(newUser);
                CreatedAtAction(nameof(Get), new { id = newUser.Id }, newUser);
                return Ok();
            }
        } 
        return BadRequest();
    }

    [HttpPost("ByList")]
    public async Task<IActionResult> PostList(List<User> ListUser)
    {
        foreach (User item in ListUser) {
            await _userService.CreateAsync(item);
            CreatedAtAction(nameof(Get), new { id = item.Id }, item);
        }

        return Ok();
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Update(string id, User updatedUser)
    {
        var user = await _userService.GetAsync(id);

        if (user is null)
        {
            return NotFound();
        }

        updatedUser.Id = user.Id;

        await _userService.UpdateAsync(id, updatedUser);

        return NoContent();
    }

    [HttpPut("ByUsername/{username}")]
    public async Task<IActionResult> UpdateByUsername(string username, User updatedUser)
    {
        var user = await _userService.GetUsernameAsync(username);

        if (user is null)
        {
            return NotFound();
        }

        updatedUser.Id = user.Id;

          if (user.Id is not null)
        {
            await _userService.UpdateAsync(user.Id, updatedUser);
        } else {
            return BadRequest();
        }
        
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