/* using Models;
using Seido.Utilities.SeedGenerator;

namespace Services;


public class csCommentsService : ICommentsService {

        private const string seedSource = "./friends-seeds1.json";

        public List<csComments> Comments(int _count)
        {
            var _seeder = new csSeedGenerator(seedSource);
            var comments = _seeder.ItemsToList<csComments>(_count);

            foreach (var comment in comments) { comment.Comment = _seeder.ItemsToList<csComments>(_seeder.Next(0, 12));}  return comments;        
                              
        }

} */