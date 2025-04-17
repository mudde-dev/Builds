using Models;
using Seido.Utilities.SeedGenerator;
//using Interfaces;

namespace Services;



public class csUserService : IUserService {

        private const string seedSource = "./friends-seeds1.json";

        public List<csUsers> Users(int _count)
        {
            var _seeder = new csSeedGenerator(seedSource);
            var users = _seeder.ItemsToList<csUsers>(_count);

           // foreach (var user in users) {user.FirstName = _seeder.ItemsToList<csUsers>     
            return users;
                              
        }


}