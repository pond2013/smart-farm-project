using Microsoft.AspNetCore.Mvc;

namespace smart_fram_api.Controllers
{
    [Route("api/[controller]")]
    public class RelayController : Controller
    {
        public RelayController() { }

        // GET api/sample
        [HttpGet("")]
        public ActionResult<IEnumerable<String>> Gets()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/sample/{id}
        [HttpGet("{id}")]
        public ActionResult<String> GetById(int id)
        {
            return "value" + id;
        }

        // POST api/sample
        [HttpPost("")]
        public void Post([FromBody] string value) { }
    }
}
