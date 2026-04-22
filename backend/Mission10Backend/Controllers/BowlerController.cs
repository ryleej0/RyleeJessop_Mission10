using Microsoft.AspNetCore.Mvc;
using Mission10Backend.Models;

namespace Mission10Backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class BowlerController : ControllerBase
{
    private static readonly IReadOnlyList<Bowler> Bowlers =
    [
        new Bowler
        {
            BowlerID = 1,
            BowlerFirstName = "Matthew",
            BowlerMiddleInit = "G",
            BowlerLastName = "Evangelista",
            TeamName = "Marlins",
            BowlerAddress = "45 Maple Lane",
            BowlerCity = "Salt Lake City",
            BowlerState = "UT",
            BowlerZip = "84152",
            BowlerPhoneNumber = "(801) 555-0192",
        },
        new Bowler
        {
            BowlerID = 2,
            BowlerFirstName = "Joel",
            BowlerMiddleInit = "C",
            BowlerLastName = "Cunningham",
            TeamName = "Sharks",
            BowlerAddress = "908 W. Grayston",
            BowlerCity = "Bellevue",
            BowlerState = "WA",
            BowlerZip = "98007",
            BowlerPhoneNumber = "(425) 555-0103",
        },
        new Bowler
        {
            BowlerID = 3,
            BowlerFirstName = "Riley",
            BowlerMiddleInit = null,
            BowlerLastName = "Jessop",
            TeamName = "Marlins",
            BowlerAddress = "123 Example St",
            BowlerCity = "Provo",
            BowlerState = "UT",
            BowlerZip = "84601",
            BowlerPhoneNumber = "(801) 555-0144",
        },
    ];

    [HttpGet]
    public ActionResult<IEnumerable<Bowler>> Get() => Ok(Bowlers);
}
