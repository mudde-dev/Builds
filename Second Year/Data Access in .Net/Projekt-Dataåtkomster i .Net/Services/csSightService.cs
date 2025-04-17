using Models;
using Models.DTO;
using Seido.Utilities.SeedGenerator;
using Microsoft.Extensions.Logging;
namespace Services;

public class csSightService : ISightsService
{
    private const string seedSource = "./friends-seeds1.json";
    private List<ISight> _sights;
private ILogger<csSightService> _logger = null;

    public csSightService()
    {
    }

    public List<ISight> Sights(int _count)
    {
        return _sights;
    } 

    public Task<gstusrInfoAllDto> InfoAsync => throw new NotImplementedException();

    public Task<adminInfoDbDto> RemoveSeedAsync(loginUserSessionDto usr, bool seeded)
    {
        throw new NotImplementedException();
    }

    public Task<adminInfoDbDto> SeedAsync(loginUserSessionDto usr, int nrOfItems)
    {
        throw new NotImplementedException();
    }

    public Task<csRespPageDTO<ISight>> ReadSightsAsync(loginUserSessionDto usr, bool seeded, bool flat, string filter, int pageNumber, int pageSize)
    {
        throw new NotImplementedException();
    }

    public Task<ISight> ReadSightAsync(loginUserSessionDto usr, Guid id, bool flat)
    {
        throw new NotImplementedException();
    }

    public Task<ISight> DeleteSightAsync(loginUserSessionDto usr, Guid id)
    {
        throw new NotImplementedException();
    }

    public Task<ISight> UpdateSightAsync(loginUserSessionDto usr, csSightCUdto item)
    {
        throw new NotImplementedException();
    }

    public Task<ISight> CreateSightAsync(loginUserSessionDto usr, csSightCUdto item)
    {
        throw new NotImplementedException();
    }



    #region Old code
    /*  public void Seed(int _count) => throw new NotImplementedException();

          public csSightService()
         {
             var fn = Path.GetFullPath(seedSource);
             var _seeder = new csSeedGenerator(fn);

             //var animal = new csAnimal().Seed(_seeder);
             _sights = _seeder.ItemsToList<csSights>(5)  .Select(a => (ISight)a)  // Cast each csAnimal to IAnimal
                      .ToList(); 

                     / _sights = _seeder.ItemsToList<csSights>(5).ToList<ISight>(); 

                    _sights = _seeder.ItemsToList<csSights>(5).Cast<ISight>().ToList();

         }



    public List<ISight> Sights(int _count)
    {
        var _seeder = new csSeedGenerator(seedSource);
        var sights = _seeder.ItemsToList<csSights>(_count);

        foreach (var sight in sights)
        {
            sight.Description = _seeder.ItemsToList<csDescriptions>(1);
        }

        return sights;

    }  */

    #endregion
}