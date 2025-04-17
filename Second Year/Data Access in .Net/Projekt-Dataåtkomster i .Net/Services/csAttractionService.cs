/* using Models;
using Seido.Utilities.SeedGenerator;

namespace Services;


public class csAttractionService : IAttractionService {

        private const string seedSource = "./friends-seeds1.json";

        public List<csAttraction> Attractions(int _count)
        {
            var _seeder = new csSeedGenerator(seedSource);
            var attractions = _seeder.ItemsToList<csAttraction>(_count);

            foreach( var attraction in attractions)
            {
                attraction.Comment = _seeder.ItemsToList<csComments>(_seeder.Next(0, 12));
            }

             return attractions;        
                              
        }

    
} */