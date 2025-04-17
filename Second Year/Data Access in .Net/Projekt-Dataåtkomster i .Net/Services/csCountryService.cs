using Models;
using Seido.Utilities.SeedGenerator;
//using Interfaces;

namespace Services;


public class csCountryService : ICountryService {

        private const string seedSource = "./friends-seeds1.json";

         public List<csCountry> Country(int _count)
        {
            var _seeder = new csSeedGenerator(seedSource);
            var country = _seeder.ItemsToList<csCountry>(_count);

           // foreach (var user in users) {user.FirstName = _seeder.ItemsToList<csUsers>     
            return country;
                              
        }


    
}