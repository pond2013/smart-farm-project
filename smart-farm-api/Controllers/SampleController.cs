using smart_fram_api.Models;
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


        [HttpGet("graphsify")]
        public ActionResult<List<graphsify>> GetSify()
        {
            List<graphsify> graphlist = new List<graphsify>();
            int randomTem, randomSpeed, randomSoilMoisture , randomAirMoisture, time;
            string ddmmyy = "04/16/2022";
            string currentTime = "";
            string relayId = "1";

            for (time=0; time < 24 ; time++){
                graphsify graphItem = new graphsify();
                entry entriesItem = new entry();
                randomTem = Random.Shared.Next(24, 32);
                randomSpeed = Random.Shared.Next(0, 20);
                randomAirMoisture = Random.Shared.Next(10, 70);
                randomSoilMoisture = Random.Shared.Next(0, 100);
                currentTime = time.ToString() + ":00";
                graphItem.ddmmyy = ddmmyy;
                graphItem.relayId = relayId;
                entriesItem.time = currentTime;
                entriesItem.airMoisture = randomAirMoisture;
                entriesItem.soilMoisture = randomSoilMoisture;
                entriesItem.windSpeed = randomSpeed;
                entriesItem.temperature = randomTem;
                graphItem.entries = entriesItem;
                graphlist.Add(graphItem);
            }


            return graphlist;
        }



    }
}
