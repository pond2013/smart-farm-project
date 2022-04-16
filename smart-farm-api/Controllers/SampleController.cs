using Microsoft.AspNetCore.Mvc;

namespace smart_fram_api.Controllers
{
    [Route("api/[controller]")]
    public class SampleController : Controller
    {
        public SampleController() { }

        // GET api/sample
        [HttpGet("SomethingsNice")]
        public ActionResult<string> GetSomethingsNice()
        {
            string url = "https://www.pixiv.net/en/artworks/97128267";
            return url;
        }

        // GET api/sample/giverandomnumber
        [HttpGet("giverandomnumber")]
        public ActionResult<int> GetById(int start, int end)
        {
            int random = Random.Shared.Next(start, end);
            return random;
        }

        [HttpGet("giverandomnumberbysize")]
        public ActionResult<List<int>> GetActionResult(int start, int end, int size)
        {
            List<int> randomlist = new List<int>();
            int random;
            for (int i=0; i < size ;i++){
                random = Random.Shared.Next(start, end);
                randomlist.Add(random);
            }
            
            return randomlist;
        }



    }
}
