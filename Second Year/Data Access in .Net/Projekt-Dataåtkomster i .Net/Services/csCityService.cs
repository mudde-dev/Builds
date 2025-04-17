using Models;
using Seido.Utilities.SeedGenerator;
//using Interfaces;

namespace Services;


public class csCityService : ICityService {

    private const string seedSource = "./friends-seeds1.json";

    public List<csCity> City(int _count)
    {
       var _seeder = new csSeedGenerator(seedSource);
        var city = _seeder.ItemsToList<csCity>(_count);

           // foreach (var user in users) {user.FirstName = _seeder.ItemsToList<csUsers>     
            return city;
    }
}